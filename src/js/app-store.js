const router = require('./router');
const toolbar = require('./toolbar');
const templates = require('./templates');
const containerManager = require('./container-manager');
require('./app-install');

let stores = [];

module.exports.localStoreName = "Local Store";

function checkOk(res) {
	if (!res.ok) {
		console.log(res.url);
		console.log(res.status);
		console.log(res.statusText);
		throw res;
	}
	return res;
}

module.exports.setStores = function (storeList) {
	stores = storeList;
};

module.exports.listApps = function (type) {
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
					app.manifest.displayName = app.displayName;
					if (store.name === module.exports.localStoreName) {
						app.manifest.storeUrl = 'http://localhost:8181/app/get/?name=' + app.manifest.name;
					} else {
						app.manifest.storeUrl = app.url;
					}
				}
				return json;
			})
			.catch(() => {
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
					const app = apps[name];
					const manifest = module.exports.bestManifest(app);
					if (manifest['databox-type'] === appType) {
						filtered[manifest.name] = app;
					}
				}
				return filtered;
			});
	} else {
		return promise;
	}
};

function compareManifests(m1, m2) {
	const v1parts = m1.manifest.version.split('.');
	const v2parts = m2.manifest.version.split('.');

	// First, validate both numbers are true version numbers
	function validateParts(parts) {
		function isPositiveInteger(x) {
			// http://stackoverflow.com/a/1019526/11236
			return /^\d+$/.test(x);
		}

		for (let i = 0; i < parts.length; ++i) {
			if (!isPositiveInteger(parts[i])) {
				return false;
			}
		}
		return true;
	}

	if (!validateParts(v1parts) || !validateParts(v2parts)) {
		return NaN;
	}

	for (let i = 0; i < v1parts.length; ++i) {
		if (v2parts.length === i) {
			return -1;
		}

		if (v1parts[i] === v2parts[i]) {
			continue;
		}
		if (v1parts[i] > v2parts[i]) {
			return -1;
		}
		return 1;
	}

	if (v1parts.length !== v2parts.length) {
		return 1;
	}

	if (m1.store === module.exports.localStoreName) {
		return -1;
	} else if (m2.store === module.exports.localStoreName) {
		return 1;
	}

	return 0;
}

module.exports.bestManifest = function(app) {
	if (!app || app.length === 0) {
		return null;
	}
	app.sort(compareManifests);
	return app[0].manifest;
};

router.on('/store/list/:type', (params) => {
	const storeType = params.type;
	toolbar.showSpinner();
	module.exports.listApps(storeType)
		.then((apps) => {
			toolbar.showDrawer();
			document.getElementById('content').innerHTML = templates.appStore({
				apps: apps
			});
		});
});

router.on('/store/:name', (params) => {
	toolbar.showSpinner();
	module.exports.listApps()
		.then((apps) => {
			containerManager.fetch('api/installed/list')
				.then((res) => res.json())
				.then((json) => {
					toolbar.showBack();
					const app = apps[params.name];
					const manifest = module.exports.bestManifest(app);
					app.installed = json.indexOf(manifest.name) !== -1;
					document.getElementById('content').innerHTML = templates.appStoreItem({
						app: app
					});

					const installURL = "#!/store/" + manifest.name + "/install/";
					const menuItems = document.getElementsByClassName('version-item');
					for (const menuItem of menuItems) {
						menuItem.addEventListener('click', function (event) {
							document.getElementById('install_link').href = installURL + event.target.id;
							const menuItems = document.getElementsByClassName('version-item');
							for (const menuItem of menuItems) {
								menuItem.classList.remove('mdc-list-item--selected');
							}
							event.target.classList.add('mdc-list-item--selected');
						})
					}

					if (menuItems.length > 0) {
						menuItems.item(0).classList.add('mdc-list-item--selected');
					}

					const menu = new mdc.menu.MDCMenu(document.getElementById('versionMenu'));
					document.getElementById('versionButton').addEventListener('click', function () {
						menu.open = !menu.open
					});
				})
				.catch(() => {
					toolbar.showBack();
					const app = apps[params.name];
					document.getElementById('content').innerHTML = templates.appStoreItem({
						app: app
					});
				});
		});
});