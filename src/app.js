require('./js/main.js');
require('./js/sensors');
const toolbar = require('./js/toolbar');
const router = require('./js/router');
const templates = require('./js/templates');
const containerManager = require("./js/container-manager");

containerManager.onConnectError = function (res) {
	console.log(res, res.status, res.statusText, res.url);
	if (res.status === 404) {
		containerManager.showConnect();
	} else if (res.status === 401) {
		containerManager.requestLogin();
	} else {
		console.log("Install cert");
		const databoxURL = localStorage.getItem('databoxURL');
		SensingKit.installCert(databoxURL, (bar) => {
			if (bar === 'OK') {
				console.log("Installed cert");
				console.log("Connect1");
				window.location.reload(false);
				containerManager.fetch('api/driver/list')
			} else {
				console.log("Not Installed cert " + bar);
				if (document.getElementById('spinner') && databoxURL === localStorage.getItem('databoxURL')) {
					console.log(res);
					containerManager.showConnect();
					const url = new URL(databoxURL);
					document.getElementById('error_details').style.display = 'block';
					document.getElementById('error_host').innerText = url.hostname;
				}
			}
		});
	}
};

containerManager.onShowConnect = function () {
	const qrbutton = document.getElementById('qrbutton');
	qrbutton.style.display = 'block';
	qrbutton.addEventListener('click', () => {
		QRScanner.prepare((err, status) => {
			if (err) {
				console.error(err);
			}
			if (status.authorized) {
				let body = document.getElementsByTagName("body")[0];
				body.style.background = 'transparent';
				QRScanner.scan((err, text) => {
					if (err) {
						console.error(err);
					} else {
						body.style.background = '#eee';
						QRScanner.destroy();
						const auth = JSON.parse(text);
						localStorage.setItem("databoxURL", 'https://' + auth.ip + '/');
						localStorage.setItem("databoxToken", auth.token);
						containerManager.connect();
					}
				});

				document.getElementById('content').innerHTML = '';
				toolbar.showBack(() => {
					body.style.background = '#eee';
					QRScanner.destroy();
					containerManager.showConnect();
				}, false);
				QRScanner.show();
			}
		});
	});
};

router.on(() => {
	toolbar.showDrawer();
	document.getElementById('content').innerHTML = templates.welcomeApp();
});

document.getElementById('sensing').style.display = 'flex';