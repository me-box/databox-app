require('./js/main.js');
const router = require("./js/router");
const containerManager = require('./js/container-manager');
const toolbar = require('./js/toolbar');
const templates = require('./js/templates');

containerManager.getOAuthCallback = function(appname) {
	return localStorage.getItem('databoxURL') + appname + '/ui/oauth';
};

containerManager.showiFrame = function(url) {
	toolbar.showBack();
	const toolbarActions = document.getElementById('toolbaractions');
	toolbarActions.innerHTML = '';
	const button = document.createElement('a');
	button.classList.add('mdc-toolbar__icon');
	button.classList.add('material-icons');
	button.innerText = 'fullscreen';
	button.href = url;
	toolbarActions.appendChild(button);

	const iframe = document.createElement("iframe");
	const content = document.getElementById('content');

	content.innerHTML = '';
	content.appendChild(iframe);

	iframe.style.height = (document.documentElement.clientHeight - 56) + 'px';
	iframe.src = url;
};

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

window.addEventListener('message', (event) => {
	console.log(event);
	if (event.data.type === 'databox_oauth_redirect') {
		toolbar.showSpinner();
		window.location.href = event.data.url;
	}
});

if (localStorage.getItem('databoxURL') === null) {
	const url = new URL(window.location);
	localStorage.setItem('databoxURL', url.protocol + '//' + url.host + '/');
}