function listDatasources(manifest) {
	if ('datasources' in manifest && manifest.datasources.length > 0) {
		return fetch(databoxURL + 'api/datasource/list')
			.then((res) => {
				return res.json();
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	} else {
		return new Promise((resolve) => {
			resolve([]);
		})
	}
}

function appConfigDisplay(manifest, sensors) {
	toolbarBack('Configure ' + manifest.displayName);
	if('packages' in manifest && manifest.packages.length > 0) {
		const firstPackage = manifest.packages[0];
		if(!('enabled' in firstPackage)) {
			firstPackage.enabled = true;
		}
	}
	document.getElementById('content').innerHTML = appConfigTemplate({
		manifest: manifest,
		sensors: sensors
	});

	if('packages' in manifest && manifest.packages.length > 1) {
		for(let index = 0; index < manifest.packages.length; index++) {
			let databoxPackage = manifest.packages[index];
			let packageID = "pack_" + (databoxPackage.id || index);
			let element = document.getElementById(packageID);
			if(!databoxPackage.required) {
				element.addEventListener('click', () => {
					databoxPackage.enabled = !databoxPackage.enabled;
					appConfigDisplay(manifest, sensors);
				});
			}
		}
	}

	document.getElementById('install_button').addEventListener('click', () => {
		document.getElementById('content').innerHTML = spinnerTemplate();
		fetch(databoxURL + "api/install", {
			headers: {
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(manifest),
		})
			.then(() => {
				router.navigate('/' + manifest['databox-type'] + '/installed');
			});
	});

	let selects = document.getElementsByTagName('select');
	for(const selectElements of selects) {
		selectElements.addEventListener('change', (event) => {
			const selectElement = event.currentTarget;
			const clientid = selectElement.getAttribute('datasource');
			for(const datasource of manifest.datasources) {
				if(datasource.clientid === clientid) {
					if(selectElement.selectedIndex === 0) {
						datasource.hypercat = null;
						appConfigDisplay(manifest, sensors);
					} else {
						const sensorHref = selectElement.value;
						for (const sensor of sensors) {
							if(sensor.href === sensorHref) {
								datasource.hypercat = sensor;
								appConfigDisplay(manifest, sensors);
								break;
							}
						}
					}
					break;
				}
			}
		});
	}

	const MDCSelect = mdc.select.MDCSelect;
	let mdcSelects = document.getElementsByClassName('mdc-select');
	for(const mdcSelect of mdcSelects) {
		const select = new MDCSelect(mdcSelect);
		select.listen('MDCSelect:change', () => {
			const selectElement = select;
			const clientid = mdcSelect.getAttribute('datasource');
			for(const datasource of manifest.datasources) {
				if(datasource.clientid === clientid) {
					const sensorHref = selectElement.value;
					for (const sensor of sensors) {
						if(sensor.href === sensorHref) {
							datasource.hypercat = sensor;
							appConfigDisplay(manifest, sensors);
							break;
						}
					}
					break;
				}
			}
		});
	}

	for(const mdcSelect of mdcSelects) {
		mdcSelect.style.minWidth = mdcSelect.style.width;
		mdcSelect.style.width = null;
	}
}

router.on('/:name/config', (params) => {
	showSpinner();
	listApps()
		.then((apps) => {
			const manifest = JSON.parse(JSON.stringify(apps[params.name][0].manifest));
			listDatasources(manifest)
				.then((sensors) => {
					appConfigDisplay(manifest, sensors);
				});
		});
});

function getManifest(apps, name, id) {
	const manifests = apps[name];
	for(const manifest of manifests) {
		if(manifest._id === id) {
			return manifest.manifest;
		}
	}
	return manifests[0].manifest
}

router.on('/:name/config/:id', (params) => {
	console.log(params);
	listApps()
		.then((apps) => {
			const manifest = JSON.parse(JSON.stringify(getManifest(apps, params.name, params.id)));
			listDatasources(manifest)
				.then((sensors) => {
					appConfigDisplay(manifest, sensors);
				});
		});
});