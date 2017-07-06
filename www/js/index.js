const page = require('page');

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
let apps;

function listApps() {
	if(!apps) {
		let proms = [];
		console.log("Test");
		for(let store of stores) {
			proms.push(fetch(store.url + '/app/list')
				.then((res) => res.json())
				.then(function (json) {
					for (const app of json.apps) {
						app.url = store.url + '/app/get/?name=' + app.manifest.name;
						app.store = store.name;
						app.displayName = app.manifest.name.replace('databox','').split('-').join(' ').trim();
					}
					return json;
				})
				.catch((error) => []));
		}
		return Promise.all(proms)
			.then((appLists) => {
				console.log(appLists);
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

page('/', () => {
	listApps()
		.then((apps) => {
			document.getElementById('content').innerHTML = appListTemplate({
				apps: apps
			});
		});
});

page('/app/:name', (context) => {
	listApps()
		.then((apps) => {
			const app = apps[context.params.name];
			document.getElementById('content').innerHTML = appTemplate({
				app: app
			});
		});
});

page('/app/:name/install', () => {
	listApps()
		.then((apps) => {
			const app = apps[context.params.name];
			document.getElementById('content').innerHTML = appInstallTemplate({
				manifest: app[0].manifest
			});
		});
});

page('/app/:name/install/:id', () => {

});

page('/search/:query', () => {

});

page.start();

const drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
document.querySelector('#toolicon').addEventListener('click', () => drawer.open = true);
const toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');

mdc.autoInit();
