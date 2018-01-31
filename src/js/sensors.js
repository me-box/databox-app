const toolbar = require("./toolbar.js");
const router = require("./router.js");
const templates = require("./templates.js");
const containerManager = require('./container-manager');
const stores = require('./app-store');

const sensorDriver = 'driver-sensingkit';

window.addEventListener('load', () => {
	document.addEventListener("deviceready", onDeviceReady, false);
});

// device APIs are available
//
function onDeviceReady() {
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);
	// Add similar listeners for other events
}

function checkOk(res) {
	if (!res.ok) {
		throw res;
	}
	return res;
}


function onPause() {
	SensingKit.stop();
}

function onResume() {
	containerManager.fetch(sensorDriver + '/ui')
		.then(checkOk)
		.then(() => {
			let enabled_sensors = localStorage.getItem('sensors');
			if (enabled_sensors) {
				enabled_sensors = JSON.parse(enabled_sensors);
				SensingKit.startSensors(enabled_sensors, databoxURL + sensorDriver, () => {

				});
			}
		});
}

function showSensingStart() {
	containerManager.fetch(sensorDriver + '/ui')
		.then(checkOk)
		.then(() => {
			showSensors();
		})
		.catch((err) => {
			console.log(err);
			setTimeout(showSensingStart, 1000);
		});
}

function showSensors() {
	SensingKit.listSensors((result) => {
		let enabled_sensors = localStorage.getItem('sensors');
		if (!enabled_sensors) {
			enabled_sensors = [];
		} else {
			enabled_sensors = JSON.parse(enabled_sensors);
		}
		result.sort();
		document.getElementById('content').innerHTML = templates.sensorList({
			sensors: result,
			enabled_sensors: enabled_sensors
		});
		const sensorCheckboxes = document.getElementsByClassName('mdc-checkbox__native-control');
		for (const checkbox of sensorCheckboxes) {
			checkbox.addEventListener('change', (event) => {
				let selected = [];
				for (const checkbox of sensorCheckboxes) {
					let name = checkbox.id.substring(0, checkbox.id.length - 9);
					if (checkbox.checked) {
						selected.push(name);
					}
				}
				if (selected.length === 4) {
					event.target.checked = false;
				} else {
					const databoxURL = localStorage.getItem('databoxURL');
					SensingKit.startSensors(selected, databoxURL + sensorDriver, () => {
					});
				}
				//showSensors();
			})
		}
	});
}

function showSensingInstall() {
	toolbar.showSpinner();
	stores.listApps('driver')
		.then((apps) => {
			const osApp = apps[sensorDriver];
			if (osApp) {
				const manifest = stores.bestManifest(osApp);
				if (manifest) {
					document.getElementById('content').innerHTML = templates.alert({
						icon: 'network_check',
						button: 'Enable Mobile Sensor Data'
					});
					document.getElementById('alert_button').addEventListener('click', () => {
						toolbar.showSpinner();
						containerManager.fetch("api/install", {
							headers: {
								'Content-Type': 'application/json'
							},
							method: "POST",
							body: JSON.stringify(manifest),
						})
							.then(() => {
								showSensingStart();
							});
					});
				} else {
					document.getElementById('content').innerHTML = templates.alert({
						icon: 'warning',
						title: 'SensingKit Driver not Found'
					});
				}
			} else {
				document.getElementById('content').innerHTML = templates.alert({
					icon: 'warning',
					title: 'SensingKit Driver not Found'
				});
			}
		});
}


router.on('/driver-sensingkit/ui', () => {
	router.navigate('/sensing');
});


router.on('/sensing', () => {
	toolbar.showDrawer();
	toolbar.showSpinner();
	containerManager.fetch('api/installed/list')
		.then((res) => res.json())
		.then((json) => {
			if (json.indexOf(sensorDriver) === -1) {
				showSensingInstall();
			} else {
				showSensingStart();
			}
		})
		.catch((error) => {

		});
});
