const router = require("./router");
const toolbar = require("./toolbar");
const templates = require("./templates");
const containerManager = require("./container-manager");
require('./app-list');
require('./search');

router.on(() => {
	toolbar.showDrawer();
	document.getElementById('content').innerHTML = templates.welcomeWeb();
});

router.notFound((query) => {
	console.log("Not found: " + query);
});

window.addEventListener('load', () => {
	containerManager.connect();
});

toolbar.disabled();

mdc.autoInit();