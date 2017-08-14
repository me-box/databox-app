const router = new Navigo(null, true, '#!');

const stores = [
	// {
	// 	"name": "Up In the Clouds Store",
	// 	"url": "http://store.upintheclouds.org/"
	// },
	// {
	// 	"name": "IoT Databox Store",
	// 	"url": "https://store.iotdatabox.com/"
	// }
];
let databoxURL = 'http://databox.local:8989/';
let apps;

function showSpinner() {
	document.getElementById('content').innerHTML = spinnerTemplate();
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
					QRScanner.destroy(function(status){
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

function connect() {
	const field = document.getElementById('connectField');
	if (field) {
		let value = field.value;
		if(value.indexOf('://') === -1) {
			value = 'http://' + value;
		}
		const url = new URL(value);
		if(!url.port) {
			url.port = '8989';
		}
		localStorage.setItem('databoxURL', url.toString());
	}

	let value = localStorage.getItem('databoxURL');
	if (value) {
		databoxURL = value;
	}

	toolbarDisabled();
	showSpinner();
	fetch(databoxURL + 'api/app/list')
		.then(() => {
			const url = new URL(value);
			url.port = '8181';
			stores.push({
				"name": "Local Store",
				"url": url.toString()
			});

			router.resolve();
		})
		.catch((error) => {
			console.log(error);
			document.getElementById('content').innerHTML = connectTemplate({qr_scan: typeof cordova !== 'undefined'});
			const tfs = document.querySelectorAll('.mdc-textfield');
			for (const tf of tfs) {
				mdc.textfield.MDCTextfield.attachTo(tf);
			}
			document.getElementById('connectField').focus();
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
	if (!apps) {
		let proms = [];
		console.log("Test");
		for (let store of stores) {
			proms.push(fetch(store.url + 'app/list')
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
				apps = {};
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
	} else {
		promise = new Promise((resolve) => {
			resolve(apps);
		})
	}

	if(type) {
		const appType = type;
		return promise
			.then((apps) => {
				let filtered = {};
				for(const name in apps) {
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

function search(query) {

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
	if(search.value !== params.query) {
		search.value = params.query;
	}
	search.focus();

	showSpinner();

	listApps()
		.then((apps) => {
			const result = {};
			for(const appname in apps) {
				if(appname.indexOf(params.query) !== -1) {
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
	toolbarBack();
	document.getElementById('toolbartitle').innerText = params.name;
	const iframe = document.createElement("iframe");
	iframe.setAttribute("src", databoxURL + params.name + '/ui');

	const content = document.getElementById('content');

	iframe.style.height = (document.documentElement.clientHeight - 56) + 'px';
	content.innerHTML = '';
	content.appendChild(iframe);
});

connect();

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
		for(const navItem of navItems) {
			if(location.href.endsWith(navItem.href)) {
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
