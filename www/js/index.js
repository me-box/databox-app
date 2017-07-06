const router = new Navigo(null, true, '#!');

const stores = [
	{
		"name": "Local Store",
		"url": "http://localhost:8181"
	},
	{
		"name": "Up In the Clouds Store",
		"url": "http://store.upintheclouds.org"
	},
	{
		"name": "IoT Databox Store",
		"url": "https://store.iotdatabox.com"
	}
];
const mappings = {
	"urn:X-hypercat:rels:hasDescription:en": "description",
	"urn:X-hypercat:rels:isContentType": "contentType",
	"urn:X-databox:rels:hasVendor": "vendor",
	"urn:X-databox:rels:hasType": "type",
	"urn:X-databox:rels:hasLocation": "location",
	"urn:X-databox:rels:hasDatasourceid": "id"
};
let databoxURL = 'http://databox.local:8989';
let apps;

function showSpinner() {
	document.getElementById('content').innerHTML = spinnerTemplate();
}

function connect() {
	const field = document.getElementById('connectField');
	if (field) {
		let value = field.value;
		if (value.indexOf('://') === -1) {
			value = 'http://' + value;
		}
		localStorage.setItem('databoxURL', value);
	}

	let value = localStorage.getItem('databoxURL');
	if (value) {
		databoxURL = value;
	}

	toolbarDisabled();
	showSpinner();
	fetch(databoxURL + '/api/list/app')
		.then(() => {
			router.resolve();
		})
		.then()
		.catch((error) => {
			console.log(error);
			showConnectionError();
		});
}

function showConnectionError() {
	document.getElementById('content').innerHTML = connectTemplate();
	const tfs = document.querySelectorAll('.mdc-textfield');
	for (const tf of tfs) {
		mdc.textfield.MDCTextfield.attachTo(tf);
	}
	document.getElementById('connectField').focus();
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
	document.getElementById('toolbar-search').style.display = 'none';
	document.getElementById('toolbar').style.display = 'flex';
	document.getElementById('searchicon').style.display = 'block';
	document.getElementById('navicon').style.display = 'none';
	document.getElementById('navicon').style.visibility = 'visible';
	document.getElementById('backicon').style.display = 'block';
}

function listSensors(manifest) {
	if ('datasources' in manifest && manifest.datasources.length > 0) {
		return fetch(databoxURL + '/databox-arbiter/cat')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				if ('items' in json) {

					const promises = json.items.map(item => fetch(getCatalogueUrl(item)).then(res => res.json()));
					return Promise.all(promises)
						.then(results => {
							let sensors = [];
							for (const result of results) {
								if ('items' in result) {
									for (const item of result.items) {
										if ('item-metadata' in item) {
											let sensor = {};
											sensor.endpoint = item.href;
											sensor.hypercat = item;
											for (const metadataItem of item['item-metadata']) {
												if (metadataItem.rel in mappings) {
													let mapped = mappings[metadataItem.rel];
													sensor[mapped] = metadataItem.val;
												}
											}
											if ('type' in sensor) {
												sensors.push(sensor);
											}
										}
									}
								}
							}

							return sensors;
						})
						.catch(function (error) {
							console.log(error);
							return [];
						});
				}
				return [];
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	} else {
		return new Promise((resolve) => {
			resolve([]);
		})
	}
}

function listApps() {
	if (!apps) {
		let proms = [];
		console.log("Test");
		for (let store of stores) {
			proms.push(fetch(store.url + '/app/list')
				.then((res) => res.json())
				.then(function (json) {
					for (const app of json.apps) {
						app.url = store.url + '/app/get/?name=' + app.manifest.name;
						app.store = store.name;
						app.displayName = app.manifest.name.replace('databox', '').split('-').join(' ').trim();
					}
					return json;
				})
				.catch((error) => {
					return {'apps': []}
				}));
		}
		return Promise.all(proms)
			.then((appLists) => {
				console.log(JSON.stringify(appLists));
				apps = {};
				for (const appList of appLists) {
					for (const app of appList.apps) {
						const name = app.manifest.name;
						if (app.manifest['databox-type'] === 'app' || app.manifest['databox-type'] === 'driver') {
							let versions = [];
							if (name in apps) {
								versions = apps[name];
							}

							versions.push(app);
							apps[name] = versions;
						}
					}
				}
				return apps;
			});
	} else {
		return new Promise((resolve) => {
			resolve(apps);
		})
	}
}

router.on(() => {
	showSpinner();
	listApps()
		.then((apps) => {
			toolbarDrawer();
			document.getElementById('content').innerHTML = appListTemplate({
				apps: apps
			});
		});
});

router.on('/app/:name', (params) => {
	showSpinner();
	listApps()
		.then((apps) => {
			toolbarBack();
			const app = apps[params.name];
			document.getElementById('content').innerHTML = appTemplate({
				app: app
			});
		});
});

router.on('/app/:name/install', (params) => {
	console.log(params);
	showSpinner();
	listApps()
		.then((apps) => {
			toolbarBack();
			const manifest = JSON.parse(JSON.stringify(apps[params.name][0].manifest));

			listSensors(manifest)
				.then((sensors) => {
					document.getElementById('content').innerHTML = appInstallTemplate({
						manifest: manifest,
						sensors: sensors
					});

					let packages = document.getElementsByClassName('package');
					for (const databoxPackage of packages) {
						databoxPackage.addEventListener('click', () => {

						});
					}

					let menus = document.getElementsByClassName('mdc-simple-menu');
					for (const menuElement of menus) {
						bindMenu(menuElement);
					}
				});
		});
});

router.on('/app/:name/install/:id', (params) => {
	console.log(params);
	listApps()
		.then((apps) => {
			toolbarBack();
			const app = apps[params.name];
			document.getElementById('content').innerHTML = appInstallTemplate({
				manifest: app[0].manifest,
				sensors: []
			});

			let menus = document.getElementsByClassName('mdc-simple-menu');
			for (let menuElement of menus) {
				bindMenu(menuElement);
			}
			validate();
		});
});

router.on('/installed/:type', (params) => {
	showSpinner();
	fetch(databoxURL + '/api/list/' + params.type)
		.then((res) => res.json())
		.then((containers) => {
			toolbarDrawer();
			console.log(containers);
			document.getElementById('content').innerHTML = installedTemplate({
				containers: containers
			});
		});
});

router.on('/search', () => {
	document.getElementById('toolbar-search').style.display = 'flex';
	document.getElementById('toolbar').style.display = 'none';
	document.getElementById('content').innerHTML = '';

	console.log("Search");

	let timer;
	const search = document.getElementById('toolbar-search__input');
	search.addEventListener('input', () => {
		console.log(search.value);
		if (search.value.length > 2) {
			if (timer) {
				clearTimeout(timer);
			}
			timer = setTimeout(() => {
				listApps()
					.then((apps) => {

					});
			}, 1000);
		}
	});
	search.focus();
});

router.on('/search/:query', (params) => {
	document.getElementById('toolbar-search').style.display = 'flex';
	document.getElementById('toolbar').style.display = 'none';
	document.getElementById('content').innerHTML = '';

	showSpinner();
	listApps()
		.then((apps) => {

		});

	console.log("Search");
	console.log(params);
});

connect();

const drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
document.getElementById('navicon').addEventListener('click', () => drawer.open = true);
document.getElementById('backicon').addEventListener('click', () => window.history.back());
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
		mdc.autoInit();
	}
});

mdc.autoInit();
