function app_uninstall(app) {
	const spinner = document.getElementById(app + '_spinner');
	const button = document.getElementById(app + '_controls');
	button.style.display = 'none';
	spinner.style.display = 'block';
	fetch(databoxURL + "/api/uninstall", {
		headers: {
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({"id": app}),
	});
}

function app_restart(app) {
	const spinner = document.getElementById(app + '_spinner');
	const button = document.getElementById(app + '_controls');
	button.style.display = 'none';
	spinner.style.display = 'block';
	fetch(databoxURL + "/api/restart", {
		headers: {
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: JSON.stringify({"id": app}),
	});
}

let loadingAppList = false;
function reloadAppList(type) {
	if(!loadingAppList) {
		loadingAppList = true;
		fetch(databoxURL + '/api/' + type + '/list')
			.then((res) => res.json())
			.then((containers) => {
				loadingAppList = false;
				toolbarDrawer();
				//console.log(containers);
				document.getElementById('content').innerHTML = appListInstalledTemplate({
					containers: containers
				});
			})
			.catch((error) => {
				loadingAppList = false;
				console.log(error);
			});
	}
}

router.on('/:type/installed', (params) => {
	showSpinner();
	reloadAppList(params.type);
});