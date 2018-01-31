const router = require('./router');
const toolbar = require('./toolbar');
const templates = require('./templates');
const containerManager = require('./container-manager');

let loadingAppList = false;

function reloadAppList(type) {
	if (!loadingAppList) {
		loadingAppList = true;
		containerManager.fetch('api/' + type + '/list')
			.then((res) => res.json())
			.then((containers) => {
				loadingAppList = false;
				if (window.location.hash === '#!/list/' + type) {
					toolbar.showDrawer();
					const newList = templates.appList({
						containers: containers
					});
					if (document.getElementById('content').innerHTML !== newList) {
						document.getElementById('content').innerHTML = newList;
						const actions = document.getElementsByClassName('mdc-icon-toggle');
						for (const action of actions) {
							if (action.id.indexOf('restart_') === 0) {
								const app = action.id.substr(8);
								action.addEventListener('click', (event) => {
									containerManager.fetch("api/restart", {
										headers: {
											'Content-Type': 'application/json'
										},
										method: "POST",
										body: JSON.stringify({"id": app}),
									});
									event.preventDefault();
								});
							} else if (action.id.indexOf('uninstall_') === 0) {
								const app = action.id.substr(10);
								action.addEventListener('click', (event) => {
									containerManager.fetch("api/uninstall", {
										headers: {
											'Content-Type': 'application/json'
										},
										method: "POST",
										body: JSON.stringify({"id": app}),
									});
									event.preventDefault();
								});
							}
						}
					}

					setTimeout(function () {
						reloadAppList(type);
					}, 1000);
				}
			})
			.catch((error) => {
				loadingAppList = false;
				console.log(error);
			});
	}
}

router.on('/list/:type', (params) => {
	toolbar.showSpinner();
	reloadAppList(params.type);
});

router.on('/:name/ui', (params) => {
	toolbar.showSpinner();
	let appname = params.name;

	document.getElementById('toolbartitle').innerText = params.name;

	if (appname === 'databox_arbiter') {
		appname = 'arbiter';
	}
	const url = localStorage.getItem('databoxURL') + appname + '/ui';
	toolbar.showBack();
	const toolbarActions = document.getElementById('toolbaractions');
	toolbarActions.innerHTML = '';
	const button = document.createElement('a');
	button.classList.add('mdc-icon-toggle');
	button.classList.add('material-icons');
	button.innerText = 'fullscreen';
	button.href = url;
	toolbarActions.appendChild(button);

	const iframe = document.createElement("iframe");
	iframe.setAttribute("src", url);

	const content = document.getElementById('content');

	iframe.style.height = (document.documentElement.clientHeight - 56) + 'px';
	content.innerHTML = '';
	content.appendChild(iframe);
});
