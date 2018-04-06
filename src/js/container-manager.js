const templates = require("./templates");
const toolbar = require("./toolbar");
const router = require("./router");
const stores = require("./app-store");
const cookies = require("js-cookie");

function authHeader(obj) {
	if (!obj) {
		obj = {};
	}
	const token = localStorage.getItem('databoxToken');
	if (token) {
		if (!obj.headers) {
			obj.headers = {};
		}
		obj.headers.Authorization = 'Token ' + token;
		obj.headers.credentials = 'include';
	}
	return obj;
}

function checkOk(res) {
	if (!res.ok) {
		throw res;
	}
	return res;
}

module.exports.onConnectError = function (res) {
	if (res.status === 401) {
		module.exports.requestLogin();
	} else {
		module.exports.showConnect();
	}
};

module.exports.onShowConnect = function () {
};

module.exports.fetch = function (url, options) {
	const databoxURL = localStorage.getItem('databoxURL') || '';
	if(!databoxURL) {
		return Promise.reject({status:404});
	}
	return fetch(databoxURL + url, authHeader(options))
		.then(checkOk)
};

module.exports.connect = function () {
	toolbar.disabled();
	toolbar.showSpinner(() => {
		module.exports.showConnect()
	});
	const databoxURL = localStorage.getItem('databoxURL');
	return module.exports.fetch('api/connect')
		.then((res) => res.text())
		.then((session) => {
			if (document.getElementById('spinner') && databoxURL === localStorage.getItem('databoxURL')) {
				const hostlabel = document.getElementById('hostname');
				const url = new URL(databoxURL);
				hostlabel.innerText = url.hostname;
				hostlabel.addEventListener('click', () => {
					router.navigate('/connect')
				});
				hostlabel.style.cursor = 'pointer';

				stores.setStores([
					{
						"name": stores.localStoreName,
						"url": 'https://' + url.hostname + ':8181/'
					},
					{
						"name": "IoT Databox Store",
						"url": "https://store.iotdatabox.com/"
					}]);

				cookies.set('session', session);

				if (router.lastRouteResolved() !== null && router.lastRouteResolved().url === '/connect') {
					router.navigate('/');
				} else if (window.location.hash === '#!/connect') {
					router.navigate('/');
				} else {
					router.resolve();
				}

				mdc.autoInit();
				// TODO restartSensors();
			}
		})
		.catch((res) => {
			module.exports.onConnectError(res);
		})
};

module.exports.requestLogin = function () {
	document.getElementById('toolbartitle').innerText = 'Databox';
	document.getElementById('content').innerHTML = templates.login();
	const field = document.getElementById('loginField');
	mdc.textField.MDCTextField.attachTo(field.parentElement);
	const button = document.getElementById('loginButton');

	function submit() {
		localStorage.setItem('databoxToken', field.value.trim());
		module.exports.connect();
	}

	field.addEventListener('input', () => {
		button.disabled = field.value.trim().length <= 0;
	});
	field.addEventListener('keypress', (event) => {
		const key = event.which || event.keyCode;
		if (key === 13) {
			event.preventDefault();
			submit();
		}
	});
	document.getElementById('loginButton').addEventListener('click', submit);
	mdc.autoInit();
	field.focus();
};

module.exports.showConnect = function () {
	document.getElementById('toolbartitle').innerText = 'Databox';
	document.getElementById('content').innerHTML = templates.connect();
	const field = document.getElementById('connectField');
	mdc.textField.MDCTextField.attachTo(field.parentElement);
	const button = document.getElementById('connectButton');

	function submit() {
		let value = field.value.trim();
		if (value.indexOf('://') === -1) {
			value = 'https://' + value;
		}
		const url = new URL(value);
		localStorage.setItem('databoxURL', url.toString());
		module.exports.connect();
	}

	const stored = localStorage.getItem('databoxURL');
	if (stored) {
		const url = new URL(stored);
		field.value = url.host;
		button.disabled = false;
	}
	field.addEventListener('input', () => {
		button.disabled = field.value.trim().length <= 0;
	});
	field.addEventListener('keypress', (event) => {
		const key = event.which || event.keyCode;
		if (key === 13) {
			event.preventDefault();
			submit();
		}
	});
	button.addEventListener('click', submit);

	module.exports.onShowConnect();
	mdc.autoInit();
	field.focus();
};

router.on('/connect', () => {
	module.exports.showConnect();
});