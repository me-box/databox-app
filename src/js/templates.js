'use strict';

const pug = require('pug-runtime');


module.exports['alert'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (button, icon, title) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Falert.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 16px; display: flex; justify-content: center;\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Falert.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Falert.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__primary\" style=\"display: flex; flex-direction: column; align-items: center;\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Falert.pug";
pug_html = pug_html + "\u003Cdiv class=\"material-icons\" style=\"font-size: 128pt; color: #666;\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Falert.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = icon) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Falert.pug";
pug_html = pug_html + "\u003Ch2 class=\"mdc-card__title mdc-card__title--large\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Falert.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Falert.pug";
if ((button)) {
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Falert.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Falert.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-button mdc-button--accent\" id=\"alert_button\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Falert.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = button) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"button" in locals_for_with?locals_for_with.button:typeof button!=="undefined"?button:undefined,"icon" in locals_for_with?locals_for_with.icon:typeof icon!=="undefined"?icon:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};

module.exports['appInstall'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (manifest, sensors) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
function hasSensors(datasource) {
	if (datasource.required && !('hypercat' in datasource)) {
		for(const sensor of sensors) {
			if(getMetadata(sensor, 'urn:X-databox:rels:hasType') === datasource.type) {
				return true;
			}
		}
		return false;
	}
	return true;
}

function getMetadata(item, rel) {
	if('item-metadata' in item) {
		for(const metadataItem of item['item-metadata']) {
			if(metadataItem.rel === rel) {
				return metadataItem.val;
			}
		}
	}
	return null;
}

function getDatasource(id) {
	for(const datasource of manifest.datasources) {
		if(datasource.clientid === id) {
			return datasource;
		}
	}
}

function isDatasourceActive(datasource) {
	for (const pack of manifest.packages) {
		if (pack.enabled) {
			for (const datasource_id of pack.datastores) {
				if (datasource.clientid == datasource_id) {
					return true;
				}
			}
		}
	}

	return false;
}

function isPackageValid(pack) {
	for (const datasource_id of pack.datastores) {
		const datasource = getDatasource(datasource_id);
		if (datasource.required && !(datasource.hypercat)) {
			return false;
		}
	}
	return true;
}

function isValid() {
	let valid = true;
	if ('packages' in manifest && manifest.packages.length > 0) {
		let enabled = 0;

		for (let pack of manifest.packages) {
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

	return valid;
}

;pug_debug_line = 82;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 16px;\"\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card\"\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__primary\" style=\"display:flex;\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"app-icon-letter\"\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = manifest.displayName.charAt(0).toUpperCase()) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 87;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding-left: 16px;\"\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card__title--large\"\u003E";
;pug_debug_line = 89;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = manifest.displayName) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card__subtitle mdc-typography--caption\"\u003E";
;pug_debug_line = 91;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = manifest.author.replace(/\s*\(.*?\)\s*/g, '').replace(/\s*<.*?>\s*/g, '')) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 92;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 93;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 95;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 97;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 98;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 99;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons disabled\"\u003E";
;pug_debug_line = 100;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 101;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons disabled\"\u003E";
;pug_debug_line = 102;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 103;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\"\u003E";
;pug_debug_line = 104;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = manifest.description) ? "" : pug_interp)) + "\u003C\u002Fsection\u003E";
;pug_debug_line = 106;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid\"\u003E";
;pug_debug_line = 107;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__inner\"\u003E";
;pug_debug_line = 108;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if ('packages' in manifest) {
;pug_debug_line = 109;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if (manifest.packages.length > 1) {
;pug_debug_line = 110;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
// iterate manifest.packages
;(function(){
  var $$obj = manifest.packages;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var pack = $$obj[index];
;pug_debug_line = 111;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["mdc-layout-grid__cell","mdc-layout-grid__cell--span-4","package",(pack.required || pack.enabled) ? '' : 'transparent'], [false,false,false,true]), false, false)+pug.attr("id", ("pack_" + (pack.id || index)), true, false)) + "\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-theme--text-primary-on-dark dark\" style=\"display: flex; align-items: center;\"\u003E";
;pug_debug_line = 113;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-typography--title fill padded\"\u003E";
;pug_debug_line = 114;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = pack.name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 115;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"badge material-icons\"\u003E";
;pug_debug_line = 116;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "check\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 117;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"fill padded mdc-theme--text-primary-on-dark mdc-theme--primary-bg\"\u003E";
;pug_debug_line = 118;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = pack.purpose) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 119;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"padded mdc-theme--text-primary-on-dark mdc-theme--primary-bg\"\u003E";
;pug_debug_line = 120;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = pack.benefits) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 121;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"exchange\"\u003E";
;pug_debug_line = 122;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 123;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "in exchange for\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 124;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"dark padded mdc-theme--text-primary-on-dark\"\u003E";
;pug_debug_line = 125;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = pack.risks) ? "" : pug_interp));
;pug_debug_line = 126;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if ('datasources' in pack) {
;pug_debug_line = 127;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
// iterate pack.datasources
;(function(){
  var $$obj = pack.datasources;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var datasource = $$obj[pug_index1];
;pug_debug_line = 128;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 129;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var datasource = $$obj[pug_index1];
;pug_debug_line = 128;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 129;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
;pug_debug_line = 130;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if ('datastores' in pack) {
;pug_debug_line = 131;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
// iterate pack.datastores
;(function(){
  var $$obj = pack.datastores;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var datasource = $$obj[pug_index2];
;pug_debug_line = 132;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 133;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var datasource = $$obj[pug_index2];
;pug_debug_line = 132;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 133;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 134;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if (pack.required) {
;pug_debug_line = 135;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-theme--accent-bg padded\"\u003E";
;pug_debug_line = 136;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "Required\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var pack = $$obj[index];
;pug_debug_line = 111;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["mdc-layout-grid__cell","mdc-layout-grid__cell--span-4","package",(pack.required || pack.enabled) ? '' : 'transparent'], [false,false,false,true]), false, false)+pug.attr("id", ("pack_" + (pack.id || index)), true, false)) + "\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-theme--text-primary-on-dark dark\" style=\"display: flex; align-items: center;\"\u003E";
;pug_debug_line = 113;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-typography--title fill padded\"\u003E";
;pug_debug_line = 114;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = pack.name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 115;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"badge material-icons\"\u003E";
;pug_debug_line = 116;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "check\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 117;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"fill padded mdc-theme--text-primary-on-dark mdc-theme--primary-bg\"\u003E";
;pug_debug_line = 118;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = pack.purpose) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 119;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"padded mdc-theme--text-primary-on-dark mdc-theme--primary-bg\"\u003E";
;pug_debug_line = 120;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = pack.benefits) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 121;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"exchange\"\u003E";
;pug_debug_line = 122;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 123;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "in exchange for\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 124;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"dark padded mdc-theme--text-primary-on-dark\"\u003E";
;pug_debug_line = 125;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = pack.risks) ? "" : pug_interp));
;pug_debug_line = 126;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if ('datasources' in pack) {
;pug_debug_line = 127;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
// iterate pack.datasources
;(function(){
  var $$obj = pack.datasources;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var datasource = $$obj[pug_index3];
;pug_debug_line = 128;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 129;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var datasource = $$obj[pug_index3];
;pug_debug_line = 128;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 129;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
;pug_debug_line = 130;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if ('datastores' in pack) {
;pug_debug_line = 131;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
// iterate pack.datastores
;(function(){
  var $$obj = pack.datastores;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var datasource = $$obj[pug_index4];
;pug_debug_line = 132;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 133;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var datasource = $$obj[pug_index4];
;pug_debug_line = 132;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 133;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 134;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if (pack.required) {
;pug_debug_line = 135;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-theme--accent-bg padded\"\u003E";
;pug_debug_line = 136;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "Required\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
}
;pug_debug_line = 138;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if ('datasources' in manifest && manifest.datasources.length > 0) {
;pug_debug_line = 139;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\" style=\"margin-top:16px;\"\u003E";
;pug_debug_line = 140;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-theme--text-primary-on-dark mdc-theme--primary-bg mdc-typography--title\" style=\"padding: 8px 16px;\"\u003E";
;pug_debug_line = 141;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "Select Data Sources\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 143;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
// iterate manifest.datasources
;(function(){
  var $$obj = manifest.datasources;
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var datasource = $$obj[pug_index5];
;pug_debug_line = 144;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__cell--span-12\" style=\"padding: 0 16px; display: flex; flex-direction: column;\"\u003E";
;pug_debug_line = 145;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
var active = isDatasourceActive(datasource)
;pug_debug_line = 146;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
var sensorsExist = hasSensors(datasource)
;pug_debug_line = 147;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"mdc-select\""+" role=\"listbox\" style=\"width: 100%;\""+pug.attr("datasource", datasource.clientid, true, false)+pug.attr("id", datasource.clientid, true, false)+pug.attr("aria-disabled", active && sensorsExist ? 'false' : 'true', true, false)) + "\u003E";
;pug_debug_line = 148;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-select__surface\" tabindex=\"0\"\u003E";
;pug_debug_line = 149;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["mdc-select__label",datasource.hypercat ? 'mdc-select__label--float-above' : ''], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 150;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = datasource.type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 151;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-select__selected-text\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 152;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-select__bottom-line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 153;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-simple-menu mdc-select__menu\"\u003E";
;pug_debug_line = 154;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cul class=\"mdc-list mdc-simple-menu__items\"\u003E";
;pug_debug_line = 155;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
// iterate sensors
;(function(){
  var $$obj = sensors;
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var sensor = $$obj[pug_index6];
;pug_debug_line = 156;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if (getMetadata(sensor, 'urn:X-databox:rels:hasType') === datasource.type) {
;pug_debug_line = 157;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"mdc-list-item\""+" role=\"option\""+pug.attr("aria-selected", (datasource.hypercat && sensor.href === datasource.hypercat.href), true, false)+pug.attr("id", sensor.href, true, false)) + "\u003E";
;pug_debug_line = 158;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = getMetadata(sensor, 'urn:X-hypercat:rels:hasDescription:en')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var sensor = $$obj[pug_index6];
;pug_debug_line = 156;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if (getMetadata(sensor, 'urn:X-databox:rels:hasType') === datasource.type) {
;pug_debug_line = 157;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"mdc-list-item\""+" role=\"option\""+pug.attr("aria-selected", (datasource.hypercat && sensor.href === datasource.hypercat.href), true, false)+pug.attr("id", sensor.href, true, false)) + "\u003E";
;pug_debug_line = 158;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = getMetadata(sensor, 'urn:X-hypercat:rels:hasDescription:en')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 159;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-typography--caption\" style=\"color: #d50000;\"\u003E";
;pug_debug_line = 160;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if (!sensorsExist) {
;pug_debug_line = 161;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "Required, but no datasources found";
}
else
if (!datasource.hypercat) {
;pug_debug_line = 163;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "Required";
}
else {
;pug_debug_line = 165;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "&nbsp;";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var datasource = $$obj[pug_index5];
;pug_debug_line = 144;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__cell--span-12\" style=\"padding: 0 16px; display: flex; flex-direction: column;\"\u003E";
;pug_debug_line = 145;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
var active = isDatasourceActive(datasource)
;pug_debug_line = 146;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
var sensorsExist = hasSensors(datasource)
;pug_debug_line = 147;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"mdc-select\""+" role=\"listbox\" style=\"width: 100%;\""+pug.attr("datasource", datasource.clientid, true, false)+pug.attr("id", datasource.clientid, true, false)+pug.attr("aria-disabled", active && sensorsExist ? 'false' : 'true', true, false)) + "\u003E";
;pug_debug_line = 148;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-select__surface\" tabindex=\"0\"\u003E";
;pug_debug_line = 149;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv" + (pug.attr("class", pug.classes(["mdc-select__label",datasource.hypercat ? 'mdc-select__label--float-above' : ''], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 150;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = datasource.type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 151;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-select__selected-text\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 152;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-select__bottom-line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 153;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-simple-menu mdc-select__menu\"\u003E";
;pug_debug_line = 154;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cul class=\"mdc-list mdc-simple-menu__items\"\u003E";
;pug_debug_line = 155;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
// iterate sensors
;(function(){
  var $$obj = sensors;
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var sensor = $$obj[pug_index7];
;pug_debug_line = 156;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if (getMetadata(sensor, 'urn:X-databox:rels:hasType') === datasource.type) {
;pug_debug_line = 157;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"mdc-list-item\""+" role=\"option\""+pug.attr("aria-selected", (datasource.hypercat && sensor.href === datasource.hypercat.href), true, false)+pug.attr("id", sensor.href, true, false)) + "\u003E";
;pug_debug_line = 158;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = getMetadata(sensor, 'urn:X-hypercat:rels:hasDescription:en')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var sensor = $$obj[pug_index7];
;pug_debug_line = 156;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if (getMetadata(sensor, 'urn:X-databox:rels:hasType') === datasource.type) {
;pug_debug_line = 157;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"mdc-list-item\""+" role=\"option\""+pug.attr("aria-selected", (datasource.hypercat && sensor.href === datasource.hypercat.href), true, false)+pug.attr("id", sensor.href, true, false)) + "\u003E";
;pug_debug_line = 158;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = getMetadata(sensor, 'urn:X-hypercat:rels:hasDescription:en')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 159;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-typography--caption\" style=\"color: #d50000;\"\u003E";
;pug_debug_line = 160;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
if (!sensorsExist) {
;pug_debug_line = 161;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "Required, but no datasources found";
}
else
if (!datasource.hypercat) {
;pug_debug_line = 163;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "Required";
}
else {
;pug_debug_line = 165;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "&nbsp;";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 167;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__actions\"\u003E";
;pug_debug_line = 168;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"mdc-button mdc-card__action mdc-button--primary\""+pug.attr("disabled", !isValid(), true, false)+" id=\"install_button\"") + "\u003E";
;pug_debug_line = 169;pug_debug_filename = "src\u002Ftemplates\u002Fapp-install.pug";
pug_html = pug_html + "Install\u003C\u002Fbutton\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"manifest" in locals_for_with?locals_for_with.manifest:typeof manifest!=="undefined"?manifest:undefined,"sensors" in locals_for_with?locals_for_with.sensors:typeof sensors!=="undefined"?sensors:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};

module.exports['appList'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (containers) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
if ((containers && containers.length > 0)) {
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 24px 0;\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-list mdc-list--two-line mdc-elevation--z3\" style=\"background-color: white;\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
// iterate containers
;(function(){
  var $$obj = containers;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var container = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"mdc-list-item\""+pug.attr("href", "#!/" + container.name + '/ui', true, false)+" data-mdc-auto-init=\"MDCRipple\"") + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__graphic app-icon-letter-small mdc-elevation--z1\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = container.name.replace('databox_', '').replace('app-','').replace('driver-','').charAt(0).toUpperCase()) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = container.name.replace('databox_', '').replace('app-','').replace('driver-','').replace(/-/g,' ')) ? "" : pug_interp));
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"mdc-list-item__secondary-text\""+pug.attr("style", pug.style(container.state === 'running' ? '' : 'color: #F00'), true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = container.state) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
if (container.type !== 'system') {
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cspan style=\"display: flex;margin-left: auto;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
if (container.desiredState === 'running') {
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"material-icons mdc-list-item__meta mdc-icon-toggle\""+pug.attr("id", 'restart_' + container.name, true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "refresh\u003C\u002Fspan\u003E";
}
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"material-icons mdc-list-item__meta mdc-icon-toggle\""+pug.attr("id", 'uninstall_' + container.name, true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "close\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var container = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"mdc-list-item\""+pug.attr("href", "#!/" + container.name + '/ui', true, false)+" data-mdc-auto-init=\"MDCRipple\"") + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__graphic app-icon-letter-small mdc-elevation--z1\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = container.name.replace('databox_', '').replace('app-','').replace('driver-','').charAt(0).toUpperCase()) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = container.name.replace('databox_', '').replace('app-','').replace('driver-','').replace(/-/g,' ')) ? "" : pug_interp));
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"mdc-list-item__secondary-text\""+pug.attr("style", pug.style(container.state === 'running' ? '' : 'color: #F00'), true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = container.state) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
if (container.type !== 'system') {
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cspan style=\"display: flex;margin-left: auto;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
if (container.desiredState === 'running') {
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"material-icons mdc-list-item__meta mdc-icon-toggle\""+pug.attr("id", 'restart_' + container.name, true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "refresh\u003C\u002Fspan\u003E";
}
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"material-icons mdc-list-item__meta mdc-icon-toggle\""+pug.attr("id", 'uninstall_' + container.name, true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "close\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 48px; text-align: center;\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Fapp-list.pug";
pug_html = pug_html + "Empty\u003C\u002Fdiv\u003E";
}}.call(this,"containers" in locals_for_with?locals_for_with.containers:typeof containers!=="undefined"?containers:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};

module.exports['appStoreItem'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (app) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 16px;\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__primary\" style=\"display:flex;\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv class=\"app-icon-letter\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = app[0].displayName.charAt(0).toUpperCase()) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding-left: 16px;\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card__title--large\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = app[0].displayName) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card__subtitle mdc-typography--caption\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = app[0].manifest.author.replace(/\s*\(.*?\)\s*/g, '').replace(/\s*<.*?>\s*/g, '')) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons disabled\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons disabled\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = app[0].manifest.description) ? "" : pug_interp)) + "\u003C\u002Fsection\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\" style=\"display: flex;\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons disabled\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "lock_open\u003C\u002Fi\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons disabled\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "lock_open\u003C\u002Fi\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 0 16px;\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "Moderate Risk\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
if ('export-whitelist' in app[0].manifest && app[0].manifest['export-whitelist'].length > 0) {
;pug_debug_line = 39;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv style=\"display: flex; padding-top: 16px;\"\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\" style=\"padding:8px 16px 0 0; color: #F57F17;\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 42;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "External Access";
;pug_debug_line = 44;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
// iterate app[0].manifest['export-whitelist']
;(function(){
  var $$obj = app[0].manifest['export-whitelist'];
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var url = $$obj[pug_index0];
;pug_debug_line = 46;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Accesses ' + url.url) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var url = $$obj[pug_index0];
;pug_debug_line = 46;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'Accesses ' + url.url) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

;pug_debug_line = 48;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "Potentially leaks data to third-party\u003C\u002Fdiv\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fsection\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
if ((!app.installed)) {
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__actions\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"mdc-button mdc-card__action mdc-button--primary\""+" id=\"install_link\""+pug.attr("href", "#!/store/" + app[0].manifest.name + "/install", true, false)) + "\u003E";
;pug_debug_line = 54;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "Install\u003C\u002Fa\u003E";
;pug_debug_line = 55;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
if ((app.length > 1)) {
;pug_debug_line = 56;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ca class=\"mdc-button\" id=\"versionButton\" style=\"min-width: 16px; color: #666;\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\" style=\"font-size: 12pt;\"\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "arrow_drop_down\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 59;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-simple-menu\" id=\"versionMenu\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cul class=\"mdc-list mdc-simple-menu__items\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
// iterate app
;(function(){
  var $$obj = app;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var appItem = $$obj[pug_index1];
;pug_debug_line = 62;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"mdc-list-item version-item\""+" role=\"option\""+pug.attr("id", appItem._id, true, false)) + "\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'v' + appItem.manifest.version + ' on ' + appItem.store) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var appItem = $$obj[pug_index1];
;pug_debug_line = 62;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"mdc-list-item version-item\""+" role=\"option\""+pug.attr("id", appItem._id, true, false)) + "\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = 'v' + appItem.manifest.version + ' on ' + appItem.store) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fsection\u003E";
}
else {
;pug_debug_line = 66;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__actions\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-button mdc-card__action mdc-button--primary\" disabled=\"disabled\"\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store-item.pug";
pug_html = pug_html + "Installed\u003C\u002Fbutton\u003E\u003C\u002Fsection\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"app" in locals_for_with?locals_for_with.app:typeof app!=="undefined"?app:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};

module.exports['appStore'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (apps) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
if (apps.length === 0) {
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "Empty\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 24px 0;\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-grid-list mdc-elevation--z3\" style=\"background-color: white;\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-grid-list__tiles\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
// iterate apps
;(function(){
  var $$obj = apps;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var appItem = $$obj[pug_index0];
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"mdc-grid-tile\""+pug.attr("href", "#!/store/" + appItem[0].manifest.name + '/', true, false)+pug.attr("title", appItem[0].manifest.name, true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-grid-tile__primary\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv class=\"app-icon-letter mdc-elevation--z1\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = appItem[0].displayName.charAt(0).toUpperCase()) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv style=\"text-align:center; color: #333;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = appItem[0].displayName) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv class=\"ratings\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv style=\"flex: 1;\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var appItem = $$obj[pug_index0];
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"mdc-grid-tile\""+pug.attr("href", "#!/store/" + appItem[0].manifest.name + '/', true, false)+pug.attr("title", appItem[0].manifest.name, true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-grid-tile__primary\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv class=\"app-icon-letter mdc-elevation--z1\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = appItem[0].displayName.charAt(0).toUpperCase()) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv style=\"text-align:center; color: #333;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = appItem[0].displayName) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv class=\"ratings\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv style=\"flex: 1;\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002Fapp-store.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}}.call(this,"apps" in locals_for_with?locals_for_with.apps:typeof apps!=="undefined"?apps:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};

module.exports['connect'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__inner\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__cell--span-2-desktop\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card mdc-layout-grid__cell mdc-layout-grid__cell--span-8\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__media\" style=\"background-image: url('img\u002Flogo.png');background-size: contain; background-repeat: no-repeat; height: 80px; margin: 16px;\"\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "Databox lets you take control of your personal data and IoT devices. See the&nbsp;";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fme-box\u002Fdatabox\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "documentation\u003C\u002Fa\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "&nbsp;for help in setting up a Databox.\u003C\u002Fsection\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\" id=\"error_details\" style=\"display: none;\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Ch1 class=\"mdc-card__title mdc-card__title--large\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "Connection Error\u003C\u002Fh1\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Ch2 class=\"mdc-card__subtitle\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "Could not connect to the Databox at&nbsp;";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Cspan id=\"error_host\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-text-field\" style=\"width: 100%;\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Cinput class=\"mdc-text-field__input\" id=\"connectField\" type=\"url\" style=\"width: 100%;\" required=\"required\"\u002F\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Clabel class=\"mdc-text-field__label\" for=\"connectField\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "Databox Address\u003C\u002Flabel\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-text-field__bottom-line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__actions\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-button mdc-button--primary\" id=\"qrbutton\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "Scan QR Code\u003C\u002Fbutton\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-card__action mdc-button mdc-button--primary\" id=\"connectButton\" disabled=\"disabled\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002Fconnect.pug";
pug_html = pug_html + "Connect\u003C\u002Fbutton\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};

module.exports['driverList'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (containers) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
if ((containers && containers.length > 0)) {
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 24px 0;\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-list mdc-list--two-line mdc-elevation--z3\" style=\"background-color: white;\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
// iterate containers
;(function(){
  var $$obj = containers;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var container = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"mdc-list-item\""+pug.attr("href", "#!/" + container.name + '/ui', true, false)+" data-mdc-auto-init=\"MDCRipple\"") + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__graphic app-icon-letter-small mdc-elevation--z1\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = container.name.replace('databox_', '').replace('app-','').replace('driver-','').charAt(0).toUpperCase()) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = container.name.replace('databox_', '').replace('app-','').replace('driver-','').replace(/-/g,' ')) ? "" : pug_interp));
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"mdc-list-item__secondary-text\""+pug.attr("style", pug.style(container.state === 'running' ? '' : 'color: #F00'), true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = container.state) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
if (container.type !== 'system') {
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cspan style=\"display: flex; margin-left: auto;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
if (container.desiredState === 'running') {
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"material-icons mdc-list-item__meta mdc-icon-toggle\""+pug.attr("id", 'restart_' + container.name, true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "refresh\u003C\u002Fspan\u003E";
}
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"material-icons mdc-list-item__meta mdc-icon-toggle\""+pug.attr("id", 'uninstall_' + container.name, true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "close\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var container = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"mdc-list-item\""+pug.attr("href", "#!/" + container.name + '/ui', true, false)+" data-mdc-auto-init=\"MDCRipple\"") + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__graphic app-icon-letter-small mdc-elevation--z1\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = container.name.replace('databox_', '').replace('app-','').replace('driver-','').charAt(0).toUpperCase()) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = container.name.replace('databox_', '').replace('app-','').replace('driver-','').replace(/-/g,' ')) ? "" : pug_interp));
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"mdc-list-item__secondary-text\""+pug.attr("style", pug.style(container.state === 'running' ? '' : 'color: #F00'), true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = container.state) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
if (container.type !== 'system') {
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cspan style=\"display: flex; margin-left: auto;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
if (container.desiredState === 'running') {
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"material-icons mdc-list-item__meta mdc-icon-toggle\""+pug.attr("id", 'restart_' + container.name, true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "refresh\u003C\u002Fspan\u003E";
}
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"material-icons mdc-list-item__meta mdc-icon-toggle\""+pug.attr("id", 'uninstall_' + container.name, true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "close\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 48px; text-align: center;\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Fdriver-list.pug";
pug_html = pug_html + "Empty\u003C\u002Fdiv\u003E";
}}.call(this,"containers" in locals_for_with?locals_for_with.containers:typeof containers!=="undefined"?containers:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};

module.exports['login'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__inner\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__cell--span-2-desktop\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card mdc-layout-grid__cell mdc-layout-grid__cell--span-8\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__media\" style=\"background-image: url('img\u002Flogo.png');background-size: contain; background-repeat: no-repeat; height: 80px; margin: 16px;\"\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "Databox lets you take control of your personal data and IoT devices. See the&nbsp;";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fme-box\u002Fdatabox\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "documentation\u003C\u002Fa\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "&nbsp;for help in setting up a Databox.\u003C\u002Fsection\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-text-field\" style=\"width: 100%;\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Cinput class=\"mdc-text-field__input\" id=\"loginField\" type=\"url\" style=\"width: 100%;\" required=\"required\"\u002F\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Clabel class=\"mdc-text-field__label\" for=\"loginField\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "Databox Password\u003C\u002Flabel\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-text-field__bottom-line\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__actions\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-card__action mdc-button mdc-button--primary\" id=\"loginButton\" disabled=\"disabled\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Flogin.pug";
pug_html = pug_html + "Login\u003C\u002Fbutton\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};

module.exports['qrcode'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fqrcode.pug";
pug_html = pug_html + "\u003Cdiv style=\"display: flex; justify-content: center;padding: 16px;\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Fqrcode.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fqrcode.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__media\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Fqrcode.pug";
pug_html = pug_html + "\u003Cimg id=\"qrimage\"\u002F\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};

module.exports['sensorList'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (enabled_sensors, sensors) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-grid-list mdc-elevation--z3\" style=\"background-color: white; padding: 16px;\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-typography--title\" style=\"padding: 8px;\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "Sensors\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
// iterate sensors
;(function(){
  var $$obj = sensors;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var sensor = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-form-field\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-checkbox\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"mdc-checkbox__native-control\""+" type=\"checkbox\""+pug.attr("id", sensor + '-checkbox', true, false)+pug.attr("checked", enabled_sensors.includes(sensor), true, false)) + "\u002F\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-checkbox__background\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Csvg class=\"mdc-checkbox__checkmark\" viewBox=\"0 0 24 24\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cpath class=\"mdc-checkbox__checkmark__path\" fill=\"none\" stroke=\"white\" d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-checkbox__mixedmark\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Clabel" + (pug.attr("for", sensor + '-checkbox', true, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = sensor) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var sensor = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-form-field\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-checkbox\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"mdc-checkbox__native-control\""+" type=\"checkbox\""+pug.attr("id", sensor + '-checkbox', true, false)+pug.attr("checked", enabled_sensors.includes(sensor), true, false)) + "\u002F\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-checkbox__background\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Csvg class=\"mdc-checkbox__checkmark\" viewBox=\"0 0 24 24\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cpath class=\"mdc-checkbox__checkmark__path\" fill=\"none\" stroke=\"white\" d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-checkbox__mixedmark\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Clabel" + (pug.attr("for", sensor + '-checkbox', true, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fsensor-list.pug";
pug_html = pug_html + (pug.escape(null == (pug_interp = sensor) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"enabled_sensors" in locals_for_with?locals_for_with.enabled_sensors:typeof enabled_sensors!=="undefined"?enabled_sensors:undefined,"sensors" in locals_for_with?locals_for_with.sensors:typeof sensors!=="undefined"?sensors:undefined));} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};

module.exports['spinner'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fspinner.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 16px; display: flex; justify-content: center; margin-top: 200px;\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Fspinner.pug";
pug_html = pug_html + "\u003Csvg id=\"spinner\" width=\"35px\" height=\"35px\" viewBox=\"0 0 66 66\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fspinner.pug";
pug_html = pug_html + "\u003Ccircle class=\"path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"square\" cx=\"33\" cy=\"33\" r=\"30\"\u003E\u003C\u002Fcircle\u003E\u003C\u002Fsvg\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Fspinner.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-button\" id=\"cancel_button\" style=\"position: absolute; bottom: 16px; display: none;\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fspinner.pug";
pug_html = pug_html + "Cancel\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};

module.exports['welcomeApp'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__inner\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__cell--span-2-desktop\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card mdc-layout-grid__cell mdc-layout-grid__cell--span-8\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__media\" style=\"background-image: url('img\u002Flogo.png');background-size: contain; background-repeat: no-repeat; height: 80px; margin: 16px;\"\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__primary\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "Welcome to Databox\u003C\u002Fh3\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "Databox lets you take control of your personal data and IoT devices.\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "Get started by:\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "Install the sensing kit driver. This will allow databox to access the sensors on this mobile phone. This driver is used by some of the demo apps.\u003C\u002Fli\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "Install a driver from the&nbsp;";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Ca href=\"#!\u002Fdriver\u002Fstore\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "driver store\u003C\u002Fa\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + ".\u003C\u002Fli\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "Install an app from the&nbsp;";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Ca href=\"#!\u002Fdriver\u002Fapp\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "app store\u003C\u002Fa\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + ".\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "For more help see the&nbsp;";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fme-box\u002Fdatabox\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + "documentation\u003C\u002Fa\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-app.pug";
pug_html = pug_html + ".\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};

module.exports['welcomeWeb'] = function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__inner\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__cell--span-2-desktop\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card mdc-layout-grid__cell mdc-layout-grid__cell--span-8\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__media\" style=\"background-image: url('img\u002Flogo.png');background-size: contain; background-repeat: no-repeat; height: 80px; margin: 16px;\"\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__primary\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "Welcome to Databox\u003C\u002Fh3\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "Databox lets you take control of your personal data and IoT devices.\u003C\u002Fdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "Get started by:\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "Install a driver from the&nbsp;";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Ca href=\"#!\u002Fdriver\u002Fstore\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "driver store\u003C\u002Fa\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + ".\u003C\u002Fli\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "Install an app from the&nbsp;";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Ca href=\"#!\u002Fdriver\u002Fapp\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "app store\u003C\u002Fa\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + ".\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cdiv style=\"display: flex;justify-content: center;align-items: center;\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fplay.google.com\u002Fstore\u002Fapps\u002Fdetails?id=io.databox.app\" target=\"_top\" style=\"margin-top: 5px; margin-right: 20px;\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cimg alt=\"Get Databox on Google Play\" height=\"60\" src=\"https:\u002F\u002Fplay.google.com\u002Fintl\u002Fen_us\u002Fbadges\u002Fimages\u002Fgeneric\u002Fen_badge_web_generic.png\"\u002F\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fitunes.apple.com\u002Fus\u002Fapp\u002Fdatabox-controller\u002Fid1295071825?mt=8\" target=\"_top\" style=\"display:inline-block;overflow:hidden;background:url(\u002F\u002Flinkmaker.itunes.apple.com\u002Fassets\u002Fshared\u002Fbadges\u002Fen-us\u002Fappstore-lrg.svg) no-repeat;width:135px;height:40px;background-size:contain;\" title=\"Get Databox on Apple App Store\"\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cdiv style=\"display: flex;justify-content: center;align-items: center;\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Ca class=\"mdc-button mdc-button--compact\" href=\"#!\u002Fqrcode\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "APP QR Config Code\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "For more help see the&nbsp;";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fme-box\u002Fdatabox\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + "documentation\u003C\u002Fa\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Ftemplates\u002Fwelcome-web.pug";
pug_html = pug_html + ".\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";} catch (err) {pug.rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;};
