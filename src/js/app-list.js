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
					const innerHTML = document.getElementById('content').innerHTML.replace(/>contains [^<]*<\/span>/g, '>running</span>');
					if (innerHTML !== newList) {
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

						for(const container of containers) {
							if(container.type === "store" && container.state === "running") {
								containerManager.fetch('api/store/cat/' + container.name)
									.then((res) => res.json())
									.then((cat) => {
										let types = [];
										let comma = false;
										for(const item of cat.items) {
											for(const metadata of item['item-metadata']) {
												if (metadata.rel === "urn:X-databox:rels:hasType") {
													types.push(metadata.val);
												}
											}
										}

										if(types.length !== 0) {
											document.getElementById('types_' + container.name).innerText = 'contains ' + types.join(', ');
										}
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

	if (appname === 'databox_arbiter') {
		appname = 'arbiter';
	}
	document.getElementById('toolbartitle').innerText = appname;
	const url = localStorage.getItem('databoxURL') + appname + '/ui';
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
	iframe.name = "Test";
	console.log(iframe)
});
