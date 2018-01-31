const router = require('./router');
const templates = require("./templates");
const toolbar = require('./toolbar');
const stores = require("./app-store");

let searchTimer;
document.getElementById('toolbar-search__input').addEventListener('input', () => {
	const search = document.getElementById('toolbar-search__input');
	if (search.value.length > 1) {
		if (searchTimer) {
			clearTimeout(searchTimer);
		}
		searchTimer = setTimeout(() => {
			router.navigate("/search/" + search.value);
		}, 1000);
	}
});

router.on('/search', () => {
	document.getElementById('toolbar-search').style.display = 'flex';
	document.getElementById('toolbar').style.display = 'none';
	document.getElementById('content').innerHTML = '';
	const search = document.getElementById('toolbar-search__input');
	search.value = '';
	search.focus();
});

router.on('/search/:query', (params) => {
	document.getElementById('toolbar-search').style.display = 'flex';
	document.getElementById('toolbar').style.display = 'none';
	const search = document.getElementById('toolbar-search__input');
	if (search.value !== params.query) {
		search.value = params.query;
	}
	search.focus();

	toolbar.showSpinner();

	stores.listApps()
		.then((apps) => {
			const result = {};
			const queries = params.query.trim().split(' ');
			for (const appname in apps) {
				if(apps.hasOwnProperty(appname)) {
					for (const query of queries) {
						if (appname.indexOf(query) !== -1) {
							result[appname] = apps[appname];
							break;
						}
					}
				}
			}
			document.getElementById('content').innerHTML = templates.appStore({
				apps: result
			});
		});
});