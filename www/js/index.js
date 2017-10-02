const router = new Navigo(null, true, '#!');

let stores = [
	// {
	// 	"name": "Up In the Clouds Store",
	// 	"url": "http://store.upintheclouds.org/"
	// },
	// {
	// 	"name": "IoT Databox Store",
	// 	"url": "https://store.iotdatabox.com/"
	// }
];

const sensorDriver = 'driver-sensingkit';
const isApp = typeof cordova !== 'undefined';
let databoxURL = 'http://localhost:8989/';
if (!isApp) {
	const url = new URL(window.location);
	databoxURL = url.protocol + '//' + url.host + '/';
	document.getElementById('sensing').style.display = 'none';
}

function checkOk(res) {
	if (!res.ok) {
		console.log(res.statusText);
		throw res.statusText;
	}
	return res;
}

function showSpinner(cancel) {
	document.getElementById('content').innerHTML = spinnerTemplate();
	if(cancel) {
		const button = document.getElementById('cancel_button');
		button.style.display = 'block';
		button.addEventListener('click', cancel);
	}
}

function scanQR() {
	QRScanner.prepare((err, status) => {
		if (err) {
			console.error(err);
		}
		if (status.authorized) {
			QRScanner.scan((err, text) => {
				if (err) {
					console.error(err);
				} else {
					QRScanner.destroy(function (status) {
						console.log(status);
					});
					console.log(text);
					databoxURL = text;
					connect();
				}
			});

			document.getElementById('content').innerHTML = '';
			QRScanner.show((status) => {
				console.log(status);
			});
		}
	});
}

function submit(event) {
	if (event.charCode === 13) {
		event.preventDefault();
		connect();
	}
}

function connect(retry) {
	if(!retry) {
		const field = document.getElementById('connectField');
		if (field) {
			let value = field.value.trim();
			if (value.indexOf('://') === -1) {
				value = 'http://' + value;
			}
			const url = new URL(value);
			if (!url.port) {
				url.port = '8989';
			}
			localStorage.setItem('databoxURL', url.toString());
		}
	}
	let value = localStorage.getItem('databoxURL');
	if (value) {
		databoxURL = value;
	}

	toolbarDisabled();
	showSpinner(() => {
		showConnect(false);
	});
	const fetchURL = databoxURL;
	fetch(fetchURL + 'api/driver/list')
		.then(checkOk)
		.then(() => {
			if(document.getElementById('spinner') && fetchURL === databoxURL) {
				const url = new URL(databoxURL);
				url.port = '8181';
				document.getElementById('hostname').innerText = url.hostname;
				stores = [{
					"name": "Local Store",
					"url": url.toString()
				}];

				if(router.lastRouteResolved() !== null && router.lastRouteResolved().url === '/connect') {
					router.navigate('/');
				} else if(window.location.hash === '#!/connect') {
					router.navigate('/');
				} else {
					router.resolve();
				}
			}
		})
		.catch((error) => {
			if(document.getElementById('spinner') && fetchURL === databoxURL) {
				console.log(error);
				showConnect(true);
				const url = new URL(databoxURL);
				document.getElementById('error_host').innerText = url.hostname;
			}
		});
}

function toolbarDisabled() {
	document.getElementById('toolbar-search').style.display = 'none';
	document.getElementById('toolbar').style.display = 'flex';
	document.getElementById('navicon').style.display = 'block';
	document.getElementById('navicon').style.visibility = 'hidden';
	document.getElementById('backicon').style.display = 'none';
	document.getElementById('searchicon').style.display = 'none';
}

function toolbarDrawer() {
	document.getElementById('toolbar-search').style.display = 'none';
	document.getElementById('toolbar').style.display = 'flex';
	document.getElementById('searchicon').style.display = 'block';
	document.getElementById('navicon').style.display = 'block';
	document.getElementById('navicon').style.visibility = 'visible';
	document.getElementById('backicon').style.display = 'none';
}

function toolbarBack() {
	document.getElementById('toolbartitle').innerText = 'Databox';
	document.getElementById('toolbar-search').style.display = 'none';
	document.getElementById('toolbar').style.display = 'flex';
	document.getElementById('searchicon').style.display = 'block';
	document.getElementById('navicon').style.display = 'none';
	document.getElementById('navicon').style.visibility = 'visible';
	document.getElementById('backicon').style.display = 'block';
}


function listApps(type) {
	let promise;

	let proms = [];
	for (let store of stores) {
		proms.push(fetch(store.url + 'app/list')
			.then(checkOk)
			.then((res) => res.json())
			.then((json) => {
				for (const app of json.apps) {
					app.url = store.url + 'app/get/?name=' + app.manifest.name;
					app.store = store.name;
					app.displayName = app.manifest.name.replace('databox', '').replace('driver-', '').replace('app-', '').split('-').join(' ').trim();
				}
				return json;
			})
			.catch((error) => {
				return {'apps': []}
			}));
	}
	promise = Promise.all(proms)
		.then((appLists) => {
			let apps = {};
			for (const appList of appLists) {
				for (const app of appList.apps) {
					const name = app.manifest.name;
					let versions = [];
					if (name in apps) {
						versions = apps[name];
					}

					versions.push(app);
					apps[name] = versions;
				}
			}
			return apps;
		});

	if (type) {
		const appType = type;
		return promise
			.then((apps) => {
				let filtered = {};
				for (const name in apps) {
					let app = apps[name];
					if (app[0].manifest['databox-type'] === appType) {
						filtered[app[0].manifest.name] = app;
					}
				}
				return filtered;
			});
	} else {
		return promise;
	}
}

router.on(() => {
	showSpinner();
	listApps('app')
		.then((apps) => {
			toolbarDrawer();
			document.getElementById('content').innerHTML = appListTemplate({
				apps: apps
			});
		});
});

router.on('/connect', () => {
	showConnect(false);
});

router.on('/driver/store', () => {
	showSpinner();
	listApps('driver')
		.then((apps) => {
			toolbarDrawer();
			document.getElementById('content').innerHTML = appListTemplate({
				apps: apps
			});
		});
});

function showConnect(error) {
	document.getElementById('toolbartitle').innerText = 'Databox';
	document.getElementById('content').innerHTML = connectTemplate({qr_scan: isApp, error: error});
	document.getElementById('connectField').addEventListener('input', () => {
		const field = document.getElementById('connectField');
		if(field) {
			const button = document.getElementById('connect_button');
			button.disabled = field.value.trim().length <= 0;
		}
	});
	const tfs = document.querySelectorAll('.mdc-textfield');
	for (const tf of tfs) {
		mdc.textfield.MDCTextfield.attachTo(tf);
	}
	const field = document.getElementById('connectField');
	field.focus();
}

function showSensingInstall() {
	document.getElementById('content').innerHTML = alertTemplate({
		icon: 'network_check',
		button: 'Enable Mobile Sensor Data'
	});
	document.getElementById('alert_button').addEventListener('click', () => {
		showSpinner();
		listApps('driver')
			.then((apps) => {
				const osApp = apps[sensorDriver];
				const manifest = osApp[0].manifest;
				if (osApp) {
					fetch(databoxURL + "api/install", {
						headers: {
							'Content-Type': 'application/json'
						},
						method: "POST",
						body: JSON.stringify(manifest),
					})
						.then(checkOk)
						.then((res) => {
							showSensingStart();
						});
				}
			});
	});
}

function showSensingStart() {
	SensingKit.isRunning((result) => {
		console.log(result);
		if(result === 'true')
		{
			showSpinner();
			SensingKit.start(databoxURL + sensorDriver, (error) => {
				console.log(error);
				const url = databoxURL + sensorDriver + '/ui';
				const iframe = document.createElement("iframe");
				iframe.setAttribute("src", url);

				const content = document.getElementById('content');

				iframe.style.height = (document.documentElement.clientHeight - 56) + 'px';
				content.innerHTML = '';
				content.appendChild(iframe);
			});
		}
		else
		{
			document.getElementById('content').innerHTML = alertTemplate({
				icon: 'network_check',
				button: 'Start Recording Mobile Sensor Data'
			});
			document.getElementById('alert_button').addEventListener('click', () => {
				SensingKit.start(databoxURL + sensorDriver, (error) => {
					console.log(error);
					showSensingStart();
				});
			});
		}
	});
}

router.on('/sensing', () => {
	toolbarDrawer();
	showSpinner();
	fetch(databoxURL + 'api/installed/list')
		.then(checkOk)
		.then((res) => res.json())
		.then((json) => {
			console.log(json);
			if (json.indexOf(sensorDriver) === -1) {
				showSensingInstall();
			} else {
				showSensingStart();
			}
		})
		.catch((error) => {

		});
});


router.on('/search', () => {
	document.getElementById('toolbar-search').style.display = 'flex';
	document.getElementById('toolbar').style.display = 'none';
	document.getElementById('content').innerHTML = '';
	const search = document.getElementById('toolbar-search__input');
	search.value = '';
	search.focus();
});

router.on('/search/:query', (params) => {
	document.getElementById('toolbar-search').style.display = 'flex';
	document.getElementById('toolbar').style.display = 'none';
	const search = document.getElementById('toolbar-search__input');
	if (search.value !== params.query) {
		search.value = params.query;
	}
	search.focus();

	showSpinner();

	listApps()
		.then((apps) => {
			const result = {};
			for (const appname in apps) {
				if (appname.indexOf(params.query) !== -1) {
					result[appname] = apps[appname];
				}
			}
			document.getElementById('content').innerHTML = appListTemplate({
				apps: result
			});
		});
});

router.on('/:name', (params) => {
	showSpinner();
	listApps()
		.then((apps) => {
			fetch(databoxURL + 'api/installed/list')
				.then(checkOk)
				.then((res) => res.json())
				.then((json) => {
					toolbarBack();
					const app = apps[params.name];
					app.installed = json.indexOf(app[0].manifest.name) !== -1;
					document.getElementById('content').innerHTML = appTemplate({
						app: app
					});
				})
				.catch((error) => {
					toolbarBack();
					const app = apps[params.name];
					document.getElementById('content').innerHTML = appTemplate({
						app: app
					});
				});
		});
});

router.on('/:name/ui', (params) => {
	showSpinner();

	document.getElementById('toolbartitle').innerText = params.name;
	let appname = params.name;
	if (appname === 'databox_arbiter') {
		appname = 'arbiter';
	}
	const url = databoxURL + appname + '/ui';
	toolbarBack();
	const iframe = document.createElement("iframe");
	iframe.setAttribute("src", url);

	const content = document.getElementById('content');

	iframe.style.height = (document.documentElement.clientHeight - 56) + 'px';
	content.innerHTML = '';
	content.appendChild(iframe);
});

toolbarDisabled();
window.onload = function () {
	connect();
};

let searchTimer;
const drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
document.getElementById('navicon').addEventListener('click', () => drawer.open = true);
document.getElementById('backicon').addEventListener('click', () => window.history.back());
document.getElementById('searchbackicon').addEventListener('click', () => window.history.back());
document.getElementById('toolbar-search__input').addEventListener('input', () => {
	const search = document.getElementById('toolbar-search__input');
	if (search.value.length > 1) {
		if (searchTimer) {
			clearTimeout(searchTimer);
		}
		searchTimer = setTimeout(() => {
			router.navigate("/search/" + search.value);
		}, 1000);
	}
});
const toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');

router.hooks({
	before: (done, params) => {
		if (drawer) {
			drawer.open = false;
		}
		done();
	},
	after: (params) => {
		let navItems = document.getElementById('nav').getElementsByTagName('a');
		for (const navItem of navItems) {
			if (location.href.endsWith(navItem.href)) {
				navItem.classList.add('mdc-temporary-drawer--selected');
				const nodes = Array.from(navItem.childNodes).filter(f => f.nodeName === '#text');
				document.getElementById('toolbartitle').innerText = nodes.length ? nodes[0].textContent.trim() : '';
			} else {
				navItem.classList.remove('mdc-temporary-drawer--selected');
			}
		}
		mdc.autoInit();
	}
});

mdc.autoInit();
