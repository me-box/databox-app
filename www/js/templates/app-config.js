function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function appConfigTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002Fapp-config.pug":"-\n\tfunction unfulfilledDatasources() {\n\t\tif ('packages' in manifest) {\n\t\t\tlet required = [];\n\n\t\t\tfor (const pack of manifest.packages) {\n\t\t\t\tif (pack.enabled || pack.required) {\n\t\t\t\t\tfor (const datasource_id of pack.datastores) {\n\t\t\t\t\t\tconst datasource = getDatasource(datasource_id);\n\t\t\t\t\t\tif(!hasSensors(datasource)) {\n\t\t\t\t\t\t\trequired.push(datasource.type)\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\treturn required.join(', ');\n\t\t}\n\n\t\treturn '';\n\t}\n\n\tfunction hasSensors(datasource) {\n\t\tif (datasource.required && !('hypercat' in datasource)) {\n\t\t\tfor(const sensor of sensors) {\n\t\t\t\tif(getMetadata(sensor, 'urn:X-databox:rels:hasType') === datasource.type) {\n\t\t\t\t\treturn true;\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn false;\n\t\t}\n\t\treturn true;\n\t}\n\n\tfunction hasUnfulfilledDatasources() {\n\t\treturn unfulfilledDatasources() !== '';\n\t}\n\n\tfunction getMetadata(item, rel) {\n\t\tif('item-metadata' in item) {\n\t\t\tfor(const metadataItem of item['item-metadata']) {\n\t\t\t\tif(metadataItem.rel === rel) {\n\t\t\t\t\treturn metadataItem.val;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn null;\n\t}\n\n\tfunction getDatasource(id) {\n\t\tfor(const datasource of manifest.datasources) {\n\t\t\tif(datasource.clientid === id) {\n\t\t\t\treturn datasource;\n\t\t\t}\n\t\t}\n\t}\n\n\tfunction isDatasourceActive(datasource) {\n\t\tfor (const pack of manifest.packages) {\n\t\t\tif (pack.enabled) {\n\t\t\t\tfor (const datasource_id of pack.datastores) {\n\t\t\t\t\tif (datasource.clientid == datasource_id) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn false;\n\t}\n\n\tfunction isPackageValid(pack) {\n\t\tfor (const datasource_id of pack.datastores) {\n\t\t\tconst datasource = getDatasource(datasource_id);\n\t\t\tif (datasource.required && !('hypercat' in datasource)) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t\treturn true;\n\t}\n\n\tfunction isValid() {\n\t\tlet valid = true;\n\t\tif ('packages' in manifest && manifest.packages.length \u003E 0) {\n\t\t\tlet enabled = 0;\n\n\t\t\tfor (let pack of manifest.packages) {\n\t\t\t\tif (pack.enabled) {\n\t\t\t\t\tenabled++;\n\t\t\t\t\tif (!isPackageValid(pack)) {\n\t\t\t\t\t\tvalid = false;\n\t\t\t\t\t\tbreak;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\tif (!valid) {\n\t\t\t\t\tbreak;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tvalid = valid && enabled \u003E 0\n\t\t}\n\n\t\treturn valid;\n\t}\n\nif hasUnfulfilledDatasources()\n\tdiv.mdc-layout-grid__cell.mdc-layout-grid__cell--span-12(style=\"margin-top:20px\")\n\t\tdiv.padded(style=\"color:#d50000; background: #DDD\")\n\t\t\t= 'Unable to install app. Cannot find any datasources for ' + unfulfilledDatasources() + '. You may need to install and configure a driver to provide them'\ndiv(style=\"padding: 16px\")\n\tdiv.mdc-card\n\n\t\tsection(style=\"display:flex\").mdc-card__primary\n\t\t\timg(src='icons\u002Fandroid-icon-144x144.png')\n\t\t\tdiv(style=\"padding-left: 16px\")\n\t\t\t\tdiv.mdc-card__title--large\n\t\t\t\t\t= 'Configure ' + manifest.name\n\t\tdiv.mdc-layout-grid\n\n\t\t\tdiv.mdc-layout-grid__inner\n\t\t\t\tif 'packages' in manifest\n\t\t\t\t\tif manifest.packages.length \u003E 1\n\t\t\t\t\t\teach pack, index in manifest.packages\n\t\t\t\t\t\t\tdiv.mdc-layout-grid__cell.mdc-layout-grid__cell--span-4.package(id=(\"pack_\" + (pack.id || index)), class=(pack.required || pack.enabled) ? '' : 'transparent')\n\t\t\t\t\t\t\t\tdiv.mdc-theme--text-primary-on-dark.dark(style=\"display: flex; align-items: center\")\n\t\t\t\t\t\t\t\t\tdiv.mdc-typography--title.fill.padded\n\t\t\t\t\t\t\t\t\t\t= pack.name\n\t\t\t\t\t\t\t\t\tdiv.badge.material-icons\n\t\t\t\t\t\t\t\t\t\t| check\n\t\t\t\t\t\t\t\tdiv.fill.padded.mdc-theme--text-primary-on-dark.mdc-theme--primary-bg\n\t\t\t\t\t\t\t\t\t= pack.purpose\n\t\t\t\t\t\t\t\tdiv.padded.mdc-theme--text-primary-on-dark.mdc-theme--primary-bg\n\t\t\t\t\t\t\t\t\t= pack.benefits\n\t\t\t\t\t\t\t\tdiv.exchange\n\t\t\t\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t\t\t\t| in exchange for\n\t\t\t\t\t\t\t\tdiv.dark.padded.mdc-theme--text-primary-on-dark\n\t\t\t\t\t\t\t\t\t= pack.risks\n\t\t\t\t\t\t\t\t\tif 'datasources' in pack\n\t\t\t\t\t\t\t\t\t\teach datasource in pack.datasources\n\t\t\t\t\t\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t\t\t\t\t\t= 'Access to a ' + getDatasource(datasource).type\n\t\t\t\t\t\t\t\t\tif 'datastores' in pack\n\t\t\t\t\t\t\t\t\t\teach datasource in pack.datastores\n\t\t\t\t\t\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t\t\t\t\t\t= 'Access to a ' + getDatasource(datasource).type\n\t\t\t\t\t\t\t\tif pack.required\n\t\t\t\t\t\t\t\t\tdiv.mdc-theme--accent-bg.padded\n\t\t\t\t\t\t\t\t\t\t| Required\n\n\t\t\t\tif 'export-whitelist' in manifest && manifest['export-whitelist'].length \u003E 0\n\t\t\t\t\tdiv.mdc-layout-grid__cell.mdc-layout-grid__cell--span-12(style=\"margin-top:20px\")\n\t\t\t\t\t\tdiv.padded.mdc-theme--text-primary-on-dark.mdc-theme--primary-bg.mdc-typography--title\n\t\t\t\t\t\t\t| URL Permissions\n\t\t\t\t\t\tul.mdc-layout-grid__cell.mdc-layout-grid__cell--span-12.mdc-list\n\t\t\t\t\t\t\teach url in manifest['export-whitelist']\n\t\t\t\t\t\t\t\tli.mdc-list-item\n\t\t\t\t\t\t\t\t\ti.material-icons.mdc-list-item__start-detail\n\t\t\t\t\t\t\t\t\t\t| link\n\t\t\t\t\t\t\t\t\tspan.mdc-list-item__text\n\t\t\t\t\t\t\t\t\t\t= url.url\n\t\t\t\t\t\t\t\t\t\tspan.mdc-list-item__text__secondary\n\t\t\t\t\t\t\t\t\t\t\t= url.description\n\n\t\t\t\tif 'datasources' in manifest && manifest.datasources.length \u003E 0\n\t\t\t\t\tdiv.mdc-layout-grid__cell.mdc-layout-grid__cell--span-12(style=\"margin-top:16px\")\n\t\t\t\t\t\tdiv.padded.mdc-theme--text-primary-on-dark.mdc-theme--primary-bg.mdc-typography--title\n\t\t\t\t\t\t\t| Data Sources\n\t\t\t\t\t\tul.mdc-layout-grid__cell.mdc-layout-grid__cell--span-12.mdc-list\n\t\t\t\t\t\t\teach datasource in manifest.datasources\n\t\t\t\t\t\t\t\tif isDatasourceActive(datasource)\n\t\t\t\t\t\t\t\t\tif hasSensors(datasource)\n\t\t\t\t\t\t\t\t\t\tli.datasource.mdc-menu-anchor.mdc-list-item\n\t\t\t\t\t\t\t\t\t\t\ti.material-icons.mdc-list-item__start-detail\n\t\t\t\t\t\t\t\t\t\t\t\t| input\n\t\t\t\t\t\t\t\t\t\t\tspan.mdc-list-item__text\n\t\t\t\t\t\t\t\t\t\t\t\t= datasource.type\n\t\t\t\t\t\t\t\t\t\t\t\tspan.mdc-list-item__text__secondary\n\t\t\t\t\t\t\t\t\t\t\t\t\tif datasource.hypercat\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t= getMetadata(datasource.hypercat, 'urn:X-hypercat:rels:hasDescription:en')\n\t\t\t\t\t\t\t\t\t\t\t\t\telse if datasource.required\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tdiv(style=\"color:#d50000; opacity: 0.8\")\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t| Required\n\t\t\t\t\t\t\t\t\t\t\t\t\telse\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t| Unbound\n\t\t\t\t\t\t\t\t\t\t\t\tdiv.mdc-simple-menu.mdc-simple-menu--open-from-bottom-left\n\t\t\t\t\t\t\t\t\t\t\t\t\tul.mdc-simple-menu__items.mdc-list(role=\"menu\")\n\t\t\t\t\t\t\t\t\t\t\t\t\t\teach sensor in sensors\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tif getMetadata(sensor, 'urn:X-databox:rels:hasType') === datasource.type\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tli.mdc-list-item(role=\"menuitem\", datasource=datasource.clientid, sensor=sensor.href)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t= getMetadata(sensor, 'urn:X-hypercat:rels:hasDescription:en')\n\n\t\t\t\t\t\t\t\t\telse\n\t\t\t\t\t\t\t\t\t\tli.mdc-list-item\n\t\t\t\t\t\t\t\t\t\t\ti.material-icons.mdc-list-item__start-detail\n\t\t\t\t\t\t\t\t\t\t\t\t| input\n\t\t\t\t\t\t\t\t\t\t\tspan.mdc-list-item__text\n\t\t\t\t\t\t\t\t\t\t\t\t= datasource.type\n\t\t\t\t\t\t\t\t\t\t\t\tspan.mdc-list-item__text__secondary\n\t\t\t\t\t\t\t\t\t\t\t\t\tdiv(style=\"color:#d50000; opacity: 0.8\")\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t| Required, but no sources found\n\n\t\t\t\t\t\t\t\telse\n\t\t\t\t\t\t\t\t\tli.mdc-list-item.disabled\n\t\t\t\t\t\t\t\t\t\ti.material-icons.mdc-list-item__start-detail\n\t\t\t\t\t\t\t\t\t\t\t| input\n\t\t\t\t\t\t\t\t\t\tspan.mdc-list-item__text\n\t\t\t\t\t\t\t\t\t\t\t= datasource.type\n\n\t\tsection.mdc-card__actions\n\t\t\tbutton(disabled=!isValid())#install_button.mdc-button.mdc-card__action.mdc-button--primary\n\t\t\t\t| Install"};
;var locals_for_with = (locals || {});(function (manifest, sensors) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
function unfulfilledDatasources() {
	if ('packages' in manifest) {
		let required = [];

		for (const pack of manifest.packages) {
			if (pack.enabled || pack.required) {
				for (const datasource_id of pack.datastores) {
					const datasource = getDatasource(datasource_id);
					if(!hasSensors(datasource)) {
						required.push(datasource.type)
					}
				}
			}
		}

		return required.join(', ');
	}

	return '';
}

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

function hasUnfulfilledDatasources() {
	return unfulfilledDatasources() !== '';
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
		if (datasource.required && !('hypercat' in datasource)) {
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

;pug_debug_line = 107;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (hasUnfulfilledDatasources()) {
;pug_debug_line = 108;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\" style=\"margin-top:20px;\"\u003E";
;pug_debug_line = 109;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"padded\" style=\"color:#d50000; background: #DDD;\"\u003E";
;pug_debug_line = 110;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Unable to install app. Cannot find any datasources for ' + unfulfilledDatasources() + '. You may need to install and configure a driver to provide them') ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 111;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 16px;\"\u003E";
;pug_debug_line = 112;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card\"\u003E";
;pug_debug_line = 114;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__primary\" style=\"display:flex;\"\u003E";
;pug_debug_line = 115;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cimg src=\"icons\u002Fandroid-icon-144x144.png\"\u002F\u003E";
;pug_debug_line = 116;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding-left: 16px;\"\u003E";
;pug_debug_line = 117;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card__title--large\"\u003E";
;pug_debug_line = 118;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Configure ' + manifest.name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 119;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid\"\u003E";
;pug_debug_line = 121;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__inner\"\u003E";
;pug_debug_line = 122;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if ('packages' in manifest) {
;pug_debug_line = 123;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (manifest.packages.length > 1) {
;pug_debug_line = 124;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
// iterate manifest.packages
;(function(){
  var $$obj = manifest.packages;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var pack = $$obj[index];
;pug_debug_line = 125;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["mdc-layout-grid__cell","mdc-layout-grid__cell--span-4","package",(pack.required || pack.enabled) ? '' : 'transparent'], [false,false,false,true]), false, false)+pug_attr("id", ("pack_" + (pack.id || index)), true, false)) + "\u003E";
;pug_debug_line = 126;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-theme--text-primary-on-dark dark\" style=\"display: flex; align-items: center;\"\u003E";
;pug_debug_line = 127;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-typography--title fill padded\"\u003E";
;pug_debug_line = 128;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pack.name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 129;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"badge material-icons\"\u003E";
;pug_debug_line = 130;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "check\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 131;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"fill padded mdc-theme--text-primary-on-dark mdc-theme--primary-bg\"\u003E";
;pug_debug_line = 132;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pack.purpose) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 133;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"padded mdc-theme--text-primary-on-dark mdc-theme--primary-bg\"\u003E";
;pug_debug_line = 134;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pack.benefits) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 135;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"exchange\"\u003E";
;pug_debug_line = 136;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 137;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "in exchange for\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 138;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"dark padded mdc-theme--text-primary-on-dark\"\u003E";
;pug_debug_line = 139;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pack.risks) ? "" : pug_interp));
;pug_debug_line = 140;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if ('datasources' in pack) {
;pug_debug_line = 141;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
// iterate pack.datasources
;(function(){
  var $$obj = pack.datasources;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var datasource = $$obj[pug_index1];
;pug_debug_line = 142;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 143;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var datasource = $$obj[pug_index1];
;pug_debug_line = 142;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 143;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
;pug_debug_line = 144;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if ('datastores' in pack) {
;pug_debug_line = 145;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
// iterate pack.datastores
;(function(){
  var $$obj = pack.datastores;
  if ('number' == typeof $$obj.length) {
      for (var pug_index2 = 0, $$l = $$obj.length; pug_index2 < $$l; pug_index2++) {
        var datasource = $$obj[pug_index2];
;pug_debug_line = 146;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 147;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index2 in $$obj) {
      $$l++;
      var datasource = $$obj[pug_index2];
;pug_debug_line = 146;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 147;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 148;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (pack.required) {
;pug_debug_line = 149;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-theme--accent-bg padded\"\u003E";
;pug_debug_line = 150;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "Required\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var pack = $$obj[index];
;pug_debug_line = 125;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["mdc-layout-grid__cell","mdc-layout-grid__cell--span-4","package",(pack.required || pack.enabled) ? '' : 'transparent'], [false,false,false,true]), false, false)+pug_attr("id", ("pack_" + (pack.id || index)), true, false)) + "\u003E";
;pug_debug_line = 126;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-theme--text-primary-on-dark dark\" style=\"display: flex; align-items: center;\"\u003E";
;pug_debug_line = 127;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-typography--title fill padded\"\u003E";
;pug_debug_line = 128;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pack.name) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 129;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"badge material-icons\"\u003E";
;pug_debug_line = 130;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "check\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 131;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"fill padded mdc-theme--text-primary-on-dark mdc-theme--primary-bg\"\u003E";
;pug_debug_line = 132;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pack.purpose) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 133;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"padded mdc-theme--text-primary-on-dark mdc-theme--primary-bg\"\u003E";
;pug_debug_line = 134;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pack.benefits) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 135;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"exchange\"\u003E";
;pug_debug_line = 136;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 137;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "in exchange for\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 138;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"dark padded mdc-theme--text-primary-on-dark\"\u003E";
;pug_debug_line = 139;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pack.risks) ? "" : pug_interp));
;pug_debug_line = 140;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if ('datasources' in pack) {
;pug_debug_line = 141;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
// iterate pack.datasources
;(function(){
  var $$obj = pack.datasources;
  if ('number' == typeof $$obj.length) {
      for (var pug_index3 = 0, $$l = $$obj.length; pug_index3 < $$l; pug_index3++) {
        var datasource = $$obj[pug_index3];
;pug_debug_line = 142;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 143;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index3 in $$obj) {
      $$l++;
      var datasource = $$obj[pug_index3];
;pug_debug_line = 142;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 143;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
;pug_debug_line = 144;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if ('datastores' in pack) {
;pug_debug_line = 145;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
// iterate pack.datastores
;(function(){
  var $$obj = pack.datastores;
  if ('number' == typeof $$obj.length) {
      for (var pug_index4 = 0, $$l = $$obj.length; pug_index4 < $$l; pug_index4++) {
        var datasource = $$obj[pug_index4];
;pug_debug_line = 146;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 147;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index4 in $$obj) {
      $$l++;
      var datasource = $$obj[pug_index4];
;pug_debug_line = 146;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 147;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Access to a ' + getDatasource(datasource).type) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 148;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (pack.required) {
;pug_debug_line = 149;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-theme--accent-bg padded\"\u003E";
;pug_debug_line = 150;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "Required\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

}
}
;pug_debug_line = 152;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if ('export-whitelist' in manifest && manifest['export-whitelist'].length > 0) {
;pug_debug_line = 153;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\" style=\"margin-top:20px;\"\u003E";
;pug_debug_line = 154;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"padded mdc-theme--text-primary-on-dark mdc-theme--primary-bg mdc-typography--title\"\u003E";
;pug_debug_line = 155;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "URL Permissions\u003C\u002Fdiv\u003E";
;pug_debug_line = 156;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cul class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-list\"\u003E";
;pug_debug_line = 157;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
// iterate manifest['export-whitelist']
;(function(){
  var $$obj = manifest['export-whitelist'];
  if ('number' == typeof $$obj.length) {
      for (var pug_index5 = 0, $$l = $$obj.length; pug_index5 < $$l; pug_index5++) {
        var url = $$obj[pug_index5];
;pug_debug_line = 158;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cli class=\"mdc-list-item\"\u003E";
;pug_debug_line = 159;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons mdc-list-item__start-detail\"\u003E";
;pug_debug_line = 160;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "link\u003C\u002Fi\u003E";
;pug_debug_line = 161;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 162;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = url.url) ? "" : pug_interp));
;pug_debug_line = 163;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 164;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = url.description) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index5 in $$obj) {
      $$l++;
      var url = $$obj[pug_index5];
;pug_debug_line = 158;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cli class=\"mdc-list-item\"\u003E";
;pug_debug_line = 159;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons mdc-list-item__start-detail\"\u003E";
;pug_debug_line = 160;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "link\u003C\u002Fi\u003E";
;pug_debug_line = 161;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 162;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = url.url) ? "" : pug_interp));
;pug_debug_line = 163;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 164;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = url.description) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 166;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if ('datasources' in manifest && manifest.datasources.length > 0) {
;pug_debug_line = 167;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12\" style=\"margin-top:16px;\"\u003E";
;pug_debug_line = 168;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"padded mdc-theme--text-primary-on-dark mdc-theme--primary-bg mdc-typography--title\"\u003E";
;pug_debug_line = 169;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "Data Sources\u003C\u002Fdiv\u003E";
;pug_debug_line = 170;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cul class=\"mdc-layout-grid__cell mdc-layout-grid__cell--span-12 mdc-list\"\u003E";
;pug_debug_line = 171;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
// iterate manifest.datasources
;(function(){
  var $$obj = manifest.datasources;
  if ('number' == typeof $$obj.length) {
      for (var pug_index6 = 0, $$l = $$obj.length; pug_index6 < $$l; pug_index6++) {
        var datasource = $$obj[pug_index6];
;pug_debug_line = 172;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (isDatasourceActive(datasource)) {
;pug_debug_line = 173;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (hasSensors(datasource)) {
;pug_debug_line = 174;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cli class=\"datasource mdc-menu-anchor mdc-list-item\"\u003E";
;pug_debug_line = 175;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons mdc-list-item__start-detail\"\u003E";
;pug_debug_line = 176;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "input\u003C\u002Fi\u003E";
;pug_debug_line = 177;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 178;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = datasource.type) ? "" : pug_interp));
;pug_debug_line = 179;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 180;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (datasource.hypercat) {
;pug_debug_line = 181;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = getMetadata(datasource.hypercat, 'urn:X-hypercat:rels:hasDescription:en')) ? "" : pug_interp));
}
else
if (datasource.required) {
;pug_debug_line = 183;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv style=\"color:#d50000; opacity: 0.8;\"\u003E";
;pug_debug_line = 184;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "Required\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 186;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "Unbound";
}
pug_html = pug_html + "\u003C\u002Fspan\u003E";
;pug_debug_line = 187;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-simple-menu mdc-simple-menu--open-from-bottom-left\"\u003E";
;pug_debug_line = 188;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cul class=\"mdc-simple-menu__items mdc-list\" role=\"menu\"\u003E";
;pug_debug_line = 189;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
// iterate sensors
;(function(){
  var $$obj = sensors;
  if ('number' == typeof $$obj.length) {
      for (var pug_index7 = 0, $$l = $$obj.length; pug_index7 < $$l; pug_index7++) {
        var sensor = $$obj[pug_index7];
;pug_debug_line = 190;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (getMetadata(sensor, 'urn:X-databox:rels:hasType') === datasource.type) {
;pug_debug_line = 191;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"mdc-list-item\""+" role=\"menuitem\""+pug_attr("datasource", datasource.clientid, true, false)+pug_attr("sensor", sensor.href, true, false)) + "\u003E";
;pug_debug_line = 192;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = getMetadata(sensor, 'urn:X-hypercat:rels:hasDescription:en')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index7 in $$obj) {
      $$l++;
      var sensor = $$obj[pug_index7];
;pug_debug_line = 190;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (getMetadata(sensor, 'urn:X-databox:rels:hasType') === datasource.type) {
;pug_debug_line = 191;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"mdc-list-item\""+" role=\"menuitem\""+pug_attr("datasource", datasource.clientid, true, false)+pug_attr("sensor", sensor.href, true, false)) + "\u003E";
;pug_debug_line = 192;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = getMetadata(sensor, 'urn:X-hypercat:rels:hasDescription:en')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
}
else {
;pug_debug_line = 195;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cli class=\"mdc-list-item\"\u003E";
;pug_debug_line = 196;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons mdc-list-item__start-detail\"\u003E";
;pug_debug_line = 197;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "input\u003C\u002Fi\u003E";
;pug_debug_line = 198;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 199;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = datasource.type) ? "" : pug_interp));
;pug_debug_line = 200;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 201;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv style=\"color:#d50000; opacity: 0.8;\"\u003E";
;pug_debug_line = 202;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "Required, but no sources found\u003C\u002Fdiv\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
}
}
else {
;pug_debug_line = 205;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cli class=\"mdc-list-item disabled\"\u003E";
;pug_debug_line = 206;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons mdc-list-item__start-detail\"\u003E";
;pug_debug_line = 207;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "input\u003C\u002Fi\u003E";
;pug_debug_line = 208;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 209;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = datasource.type) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index6 in $$obj) {
      $$l++;
      var datasource = $$obj[pug_index6];
;pug_debug_line = 172;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (isDatasourceActive(datasource)) {
;pug_debug_line = 173;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (hasSensors(datasource)) {
;pug_debug_line = 174;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cli class=\"datasource mdc-menu-anchor mdc-list-item\"\u003E";
;pug_debug_line = 175;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons mdc-list-item__start-detail\"\u003E";
;pug_debug_line = 176;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "input\u003C\u002Fi\u003E";
;pug_debug_line = 177;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 178;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = datasource.type) ? "" : pug_interp));
;pug_debug_line = 179;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 180;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (datasource.hypercat) {
;pug_debug_line = 181;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = getMetadata(datasource.hypercat, 'urn:X-hypercat:rels:hasDescription:en')) ? "" : pug_interp));
}
else
if (datasource.required) {
;pug_debug_line = 183;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv style=\"color:#d50000; opacity: 0.8;\"\u003E";
;pug_debug_line = 184;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "Required\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 186;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "Unbound";
}
pug_html = pug_html + "\u003C\u002Fspan\u003E";
;pug_debug_line = 187;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-simple-menu mdc-simple-menu--open-from-bottom-left\"\u003E";
;pug_debug_line = 188;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cul class=\"mdc-simple-menu__items mdc-list\" role=\"menu\"\u003E";
;pug_debug_line = 189;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
// iterate sensors
;(function(){
  var $$obj = sensors;
  if ('number' == typeof $$obj.length) {
      for (var pug_index8 = 0, $$l = $$obj.length; pug_index8 < $$l; pug_index8++) {
        var sensor = $$obj[pug_index8];
;pug_debug_line = 190;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (getMetadata(sensor, 'urn:X-databox:rels:hasType') === datasource.type) {
;pug_debug_line = 191;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"mdc-list-item\""+" role=\"menuitem\""+pug_attr("datasource", datasource.clientid, true, false)+pug_attr("sensor", sensor.href, true, false)) + "\u003E";
;pug_debug_line = 192;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = getMetadata(sensor, 'urn:X-hypercat:rels:hasDescription:en')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var pug_index8 in $$obj) {
      $$l++;
      var sensor = $$obj[pug_index8];
;pug_debug_line = 190;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
if (getMetadata(sensor, 'urn:X-databox:rels:hasType') === datasource.type) {
;pug_debug_line = 191;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"mdc-list-item\""+" role=\"menuitem\""+pug_attr("datasource", datasource.clientid, true, false)+pug_attr("sensor", sensor.href, true, false)) + "\u003E";
;pug_debug_line = 192;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = getMetadata(sensor, 'urn:X-hypercat:rels:hasDescription:en')) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
}
else {
;pug_debug_line = 195;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cli class=\"mdc-list-item\"\u003E";
;pug_debug_line = 196;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons mdc-list-item__start-detail\"\u003E";
;pug_debug_line = 197;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "input\u003C\u002Fi\u003E";
;pug_debug_line = 198;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 199;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = datasource.type) ? "" : pug_interp));
;pug_debug_line = 200;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 201;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cdiv style=\"color:#d50000; opacity: 0.8;\"\u003E";
;pug_debug_line = 202;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "Required, but no sources found\u003C\u002Fdiv\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
}
}
else {
;pug_debug_line = 205;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cli class=\"mdc-list-item disabled\"\u003E";
;pug_debug_line = 206;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons mdc-list-item__start-detail\"\u003E";
;pug_debug_line = 207;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "input\u003C\u002Fi\u003E";
;pug_debug_line = 208;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 209;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = datasource.type) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 211;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__actions\"\u003E";
;pug_debug_line = 212;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"mdc-button mdc-card__action mdc-button--primary\""+pug_attr("disabled", !isValid(), true, false)+" id=\"install_button\"") + "\u003E";
;pug_debug_line = 213;pug_debug_filename = "src\u002Ftemplates\u002Fapp-config.pug";
pug_html = pug_html + "Install\u003C\u002Fbutton\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"manifest" in locals_for_with?locals_for_with.manifest:typeof manifest!=="undefined"?manifest:undefined,"sensors" in locals_for_with?locals_for_with.sensors:typeof sensors!=="undefined"?sensors:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}