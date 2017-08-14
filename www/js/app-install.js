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
	document.getElementById('content').innerHTML = appConfigTemplate({
		manifest: manifest,
		sensors: sensors
	});

	if('packages' in manifest) {
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
			.then((res) => {
				router.navigate('/' + manifest['databox-type'] + '/installed');
			});
	});

	let menus = document.getElementsByClassName('mdc-simple-menu');
	for (const menuElement of menus) {
		const menu = new mdc.menu.MDCSimpleMenu(menuElement);
		menuElement.parentElement.addEventListener('click', () => menu.open = !menu.open);
	}


	let menuItems = document.getElementsByClassName('mdc-list-item');
	for(const menuItem of menuItems) {
		if(menuItem.getAttribute('role') === 'menuitem') {
			menuItem.addEventListener('click', () => {
				const clientid = menuItem.getAttribute('datasource');
				for(const datasource of manifest.datasources) {
					if(datasource.clientid === clientid) {
						const sensorHref = menuItem.getAttribute('sensor');
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
	}
}

router.on('/:name/config', (params) => {
	console.log(params);
	showSpinner();
	listApps()
		.then((apps) => {
			const manifest = JSON.parse(JSON.stringify(apps[params.name][0].manifest));
			listDatasources(manifest)
				.then((sensors) => {
					console.log(sensors);
					appConfigDisplay(manifest, sensors);
				});
		});
});

router.on('/:name/config/:id', (params) => {
	console.log(params);
	listApps()
		.then((apps) => {
			// TODO manifest from id
			const manifest = JSON.parse(JSON.stringify(apps[params.name][0].manifest));
			listDatasources(manifest)
				.then((sensors) => {
					appConfigDisplay(manifest, sensors);
				});
		});
});