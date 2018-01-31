const router = require("./router.js");
const templates = require("./templates");

module.exports.disabled = function () {
	document.getElementById('toolbar-search').style.display = 'none';
	document.getElementById('toolbar').style.display = 'flex';
	document.getElementById('navicon').style.display = 'block';
	document.getElementById('navicon').style.visibility = 'hidden';
	document.getElementById('backicon').style.display = 'none';
	document.getElementById('searchicon').style.display = 'none';
};

module.exports.showDrawer = function () {
	document.getElementById('toolbaractions').innerText = '';
	document.getElementById('toolbar-search').style.display = 'none';
	document.getElementById('toolbar').style.display = 'flex';
	document.getElementById('searchicon').style.display = 'block';
	document.getElementById('navicon').style.display = 'block';
	document.getElementById('navicon').style.visibility = 'visible';
	document.getElementById('backicon').style.display = 'none';
};

module.exports.showBack = function () {
	document.getElementById('toolbaractions').innerText = '';
	document.getElementById('toolbartitle').innerText = 'Databox';
	document.getElementById('toolbar-search').style.display = 'none';
	document.getElementById('toolbar').style.display = 'flex';
	document.getElementById('searchicon').style.display = 'block';
	document.getElementById('navicon').style.display = 'none';
	document.getElementById('navicon').style.visibility = 'visible';
	document.getElementById('backicon').style.display = 'block';
};

module.exports.showSpinner = function (cancel) {
	document.getElementById('content').innerHTML = templates.spinner();
	if (cancel) {
		const button = document.getElementById('cancel_button');
		button.style.display = 'block';
		button.addEventListener('click', cancel);
	}
};

const toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');


const drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.getElementById('navicon').addEventListener('click', () => drawer.open = true);
document.getElementById('backicon').addEventListener('click', () => window.history.back());
document.getElementById('searchbackicon').addEventListener('click', () => window.history.back());

router.hooks({
	before: (done, params) => {
		if (drawer) {
			drawer.open = false;
		}
		done();
	},
	after: (params) => {
		let navItems = document.getElementById('nav').getElementsByTagName('a');
		for (const navItem of navItems) {
			if (location.href.endsWith(navItem.href)) {
				navItem.classList.add('mdc-list-item--activated');
				const nodes = Array.from(navItem.childNodes).filter(f => f.nodeName === '#text');
				document.getElementById('toolbartitle').innerText = nodes.length ? nodes[0].textContent.trim() : '';
			} else {
				navItem.classList.remove('mdc-list-item--activated');
			}
		}
		mdc.autoInit();
	}
});