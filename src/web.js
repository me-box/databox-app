require('./js/main.js');
const router = require("./js/router");
const containerManager = require('./js/container-manager');
const toolbar = require('./js/toolbar');
const templates = require('./js/templates');

router.on('/qrcode', () => {
	toolbar.showSpinner();
	containerManager.fetch('api/qrcode.png')
		.then(response => response.blob())
		.then(blob => {
			toolbar.showBack();
			document.getElementById('content').innerHTML = templates.qrcode();
			document.getElementById('qrimage').src = URL.createObjectURL(blob);
		})
});

if(localStorage.getItem('databoxURL') === null) {
	const url = new URL(window.location);
	localStorage.setItem('databoxURL', url.protocol + '//' + url.host + '/');
}