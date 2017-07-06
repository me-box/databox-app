const toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');

const searchField = document.getElementById('search-field');
searchField.addEventListener('blur', function () {
	if (searchField.value.trim() === '') {
		searchField.style.width = '0';
	}
});

document.getElementById('search-icon').addEventListener('click', function () {
	searchField.style.width = '150px';
	searchField.focus();
});