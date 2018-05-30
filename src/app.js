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
			let body = document.getElementsByTagName("body")[0];
			if (err) {
				console.error(err);
				body.style.backgroundColor = '';
				QRScanner.destroy();
				containerManager.showConnect();
			}
			if (status.authorized) {
				QRScanner.scan((err, text) => {
					if (err) {
						console.error(err);
					} else {
						body.style.backgroundColor = '';
						QRScanner.destroy();
						const auth = JSON.parse(text);
						localStorage.setItem("databoxURL", 'https://' + auth.ip + '/');
						localStorage.setItem("databoxToken", auth.token);
						containerManager.connect();
					}
				});

				document.getElementById('content').innerHTML = '';
				toolbar.showBack(() => {
					body.style.backgroundColor = '';
					QRScanner.destroy();
					containerManager.showConnect();
				}, false);
				QRScanner.show(function(status){
					console.log(status);
					body.style.backgroundColor = 'transparent';
				});
			}
		});
	});
};

window.addEventListener('message', (event) => {
	if (event.data.type === 'databox_oauth_redirect') {
		toolbar.showSpinner();
		SafariViewController.isAvailable((available) => {
			let url = event.data.url.replace('{callback}', 'databox://oauth');
			if (available) {
				SafariViewController.show({
						url: url,
						hidden: false,
						animated: false,
						enterReaderModeIfAvailable: false,
						tintColor: "#3f51b5",
					},
					(result) => {
						if (result.event === 'opened') {
						} else if (result.event === 'loaded') {
						} else if (result.event === 'closed') {
						}
					},
					(msg) => {
						console.log("KO: " + msg);
					})
			} else {
				window.open(url, '_blank', 'location=yes');
			}
		})
	}
});

window.handleOpenURL = function(url) {
	const oauthURL = new URL(url);
	SafariViewController.hide();
	const lastRoute = router.lastRouteResolved();
	if(lastRoute != null && lastRoute.url.endsWith('/ui')) {
		const appname = lastRoute.url.substr(1, lastRoute.url.length - 4);
		console.log(appname + '/ui');
		containerManager.fetch(appname + '/ui/oauth' + oauthURL.search)
			.then(() => window.location.reload(true))
			.catch((error) => {
				window.location.reload(true);
				console.log("Error:" + error);
			});
	}
};

router.on(() => {
	toolbar.showDrawer();
	document.getElementById('content').innerHTML = templates.welcomeApp();
});

document.getElementById('sensing').style.display = 'flex';