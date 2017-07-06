function togglePackage(id) {
	const pack = manifest.packages[id];
	if (pack.required) {
		return true;
	}
	pack.enabled = !pack.enabled;
	let packElement = document.getElementById('pack_' + id);
	if (pack.enabled) {
		packElement.classList.remove('transparent');
		packElement.querySelector('.mdc-theme--accent-bg').innerText = packElement.querySelector('.mdc-theme--accent-bg').innerText.replace('Enable', 'Disable');
	} else {
		packElement.classList.add('transparent');
		packElement.querySelector('.mdc-theme--accent-bg').innerText = packElement.querySelector('.mdc-theme--accent-bg').innerText.replace('Disable', 'Enable');
	}

	const keys = Object.keys(manifest.datasources);
	for (let datasource_id of keys) {
		let datasource_enabled = false;
		for (let pack2 of Object.values(manifest.packages)) {
			if (pack2.enabled) {
				if (pack2.datasources.includes(datasource_id)) {
					datasource_enabled = true;
				}
			}
		}

		if (datasource_enabled) {
			document.getElementById('datasource_' + datasource_id).classList.remove('disabled');
			document.getElementById('datasource_' + datasource_id + '_sensor').style.display = 'block';
		} else {
			document.getElementById('datasource_' + datasource_id).classList.add('disabled');
			document.getElementById('datasource_' + datasource_id + '_sensor').style.display = 'none';
		}
	}

	validate();
	return true;
}

function selectSensor(datasource_id, sensor_text, sensor_hypercat) {
	if (datasource_id in manifest.datasources) {
		const datasource = manifest.datasources[datasource_id];
		datasource.hypercat = sensor_hypercat;
		const element = document.getElementById('datasource_' + datasource_id + '_sensor');
		element.innerText = sensor_text;
	}
	validate();
	return true;
}

function isPackageValid(pack) {
	for (let datasource_id of pack.datasources) {
		let datasource = manifest.datasources[datasource_id];
		if (datasource.required && !('hypercat' in datasource)) {
			return false;
		}
	}
	return true;
}

function validate() {
	const packages = Object.values(manifest.packages);
	let valid = true;
	if (packages.length > 0) {
		let enabled = 0;

		for (let pack of packages) {

			if (pack.enabled) {
				enabled++;
				if (!isPackageValid(pack)) {
					valid = false;
					break;
				}
			}

			if (!valid) {
				break;
			}
		}

		valid = valid && enabled > 0
	}

	console.log(valid);

	document.getElementById('install_button').disabled = !valid;
}

function install() {
	document.getElementById('install_button').disabled = true;

	fetch("/app/install", {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify(manifest)
	});
}

function bindMenu(menuElement) {
	let menu = new mdc.menu.MDCSimpleMenu(menuElement);
	menuElement.parentElement.addEventListener('click', function () {
		if (!menuElement.parentElement.classList.contains('disabled')) {
			menu.open = !menu.open;
		}
	});
}