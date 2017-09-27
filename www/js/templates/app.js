function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function appTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002Fapp.pug":"div(style=\"padding: 16px\")\n\tdiv.mdc-card\n\t\tsection(style=\"display:flex\").mdc-card__primary\n\t\t\timg(src='icons\u002Fandroid-icon-144x144.png')\n\t\t\tdiv(style=\"padding-left: 16px\")\n\t\t\t\tdiv.mdc-card__title--large\n\t\t\t\t\t= app[0].displayName\n\t\t\t\tdiv.mdc-card__subtitle.mdc-typography--caption\n\t\t\t\t\t= app[0].manifest.author.replace(\u002F\\s*\\(.*?\\)\\s*\u002Fg, '').replace(\u002F\\s*\u003C.*?\u003E\\s*\u002Fg, '')\n\t\t\t\tdiv\n\t\t\t\t\ti.material-icons\n\t\t\t\t\t\t| star\n\t\t\t\t\ti.material-icons\n\t\t\t\t\t\t| star\n\t\t\t\t\ti.material-icons\n\t\t\t\t\t\t| star\n\t\t\t\t\ti.material-icons.disabled\n\t\t\t\t\t\t| star\n\t\t\t\t\ti.material-icons.disabled\n\t\t\t\t\t\t| star\n\t\tsection.mdc-card__supporting-text\n\t\t\t= app[0].manifest.description\n\t\tsection.mdc-card__supporting-text(style=\"display: flex\")\n\t\t\ti.material-icons\n\t\t\t\t| lock\n\t\t\ti.material-icons\n\t\t\t\t| lock\n\t\t\ti.material-icons\n\t\t\t\t| lock\n\t\t\ti.material-icons.disabled\n\t\t\t\t| lock_open\n\t\t\ti.material-icons.disabled\n\t\t\t\t| lock_open\n\t\t\tdiv(style=\"padding: 0 16px\")\n\t\t\t\t| Moderate Risk\n\t\tsection.mdc-card__supporting-text\n\t\t\tdiv(style=\"display: flex; padding-top: 16px\")\n\t\t\t\ti.material-icons(style=\"padding:8px 16px 0 0; color: #B71C1C\")\n\t\t\t\t\t| lock\n\t\t\t\tspan.mdc-list-item__text\n\t\t\t\t\t| Data\n\t\t\t\t\tspan.mdc-list-item__text__secondary\n\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t| No granular data settings\n\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t| No data access API\n\t\t\tif 'export-whitelist' in app[0].manifest && app[0].manifest['export-whitelist'].length \u003E 0\n\t\t\t\tdiv(style=\"display: flex; padding-top: 16px\")\n\t\t\t\t\ti.material-icons(style=\"padding:8px 16px 0 0; color: #F57F17\")\n\t\t\t\t\t\t| lock\n\t\t\t\t\tspan.mdc-list-item__text\n\t\t\t\t\t\t| External Access\n\t\t\t\t\t\tspan.mdc-list-item__text__secondary\n\t\t\t\t\t\t\teach url in app[0].manifest['export-whitelist']\n\t\t\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t\t\t= 'Accesses ' + url.url\n\t\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t\t| Potentially sends data to third-party\n\n\t\t\tdiv(style=\"display: flex; padding-top: 16px\")\n\t\t\t\ti.material-icons(style=\"padding:8px 16px 0 0; color: #F57F17\")\n\t\t\t\t\t| lock\n\t\t\t\tspan.mdc-list-item__text\n\t\t\t\t\t| Datasources\n\t\t\t\t\tspan.mdc-list-item__text__secondary\n\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t| Uses sensors with low security rating\n\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t| Uses sensors not compliant with standards\n\t\t\tdiv(style=\"display: flex; padding-top: 16px\")\n\t\t\t\ti.material-icons(style=\"padding:8px 16px 0 0; color: #1B5E20\")\n\t\t\t\t\t| lock\n\t\t\t\tdiv.mdc-list-item__text\n\t\t\t\t\t| Apps\n\t\t\t\t\tdiv.mdc-list-item__text__secondary\n\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t| Actuates class x physical devices\n\t\tif(!app.installed)\n\t\t\tsection.mdc-card__actions\n\t\t\t\tif(app.length \u003E 1)\n\t\t\t\t\ta#versionButton.mdc-button.mdc-button--compact(style=\"padding: 5px; color: #666\")\n\t\t\t\t\t\ti.material-icons(style=\"font-size: 12pt\")\n\t\t\t\t\t\t\t| arrow_drop_down\n\t\t\t\t\tdiv#versionMenu.mdc-simple-menu\n\t\t\t\t\t\tul.mdc-list.mdc-simple-menu__items\n\t\t\t\t\t\t\teach appItem in app\n\t\t\t\t\t\t\t\tli.mdc-list-item(role=\"option\", id=appItem._id, onclick='selectVersion(\"' + appItem._id + '\")')\n\t\t\t\t\t\t\t\t\t= 'v' + appItem.manifest.version + ' on ' + appItem.store\n\t\t\t\ta(id=\"install_link\" href=\"#!\u002F\" + app[0].manifest.name + \"\u002Fconfig\").mdc-button.mdc-card__action.mdc-button--primary\n\t\t\t\t\t| Install\n\t\telse\n\t\t\tsection.mdc-card__actions\n\t\t\t\tbutton.mdc-button.mdc-card__action.mdc-button--primary(disabled=true)\n\t\t\t\t\t| Installed\nscript\n\t!= \"const installURL = \\\"#!\u002F\" + app[0].manifest.name + \"\u002Fconfig\u002F\\\"\"\nscript.\n\tfunction selectVersion(id) {\n\t\tconst installLink = document.getElementById('install_link');\n\t\tinstallLink.href = installURL + id;\n\n\t}\n\tconst menu = new mdc.menu.MDCSimpleMenu(document.querySelector('#versionMenu'));\n\t\u002F\u002F Add event listener to some button to toggle the menu on and off.\n\tdocument.querySelector('#versionButton').addEventListener('click', function () {\n\t\tmenu.open = !menu.open\n\t});"};
;var locals_for_with = (locals || {});(function (app) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 16px;\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__primary\" style=\"display:flex;\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cimg src=\"icons\u002Fandroid-icon-144x144.png\"\u002F\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding-left: 16px;\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card__title--large\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = app[0].displayName) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card__subtitle mdc-typography--caption\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = app[0].manifest.author.replace(/\s*\(.*?\)\s*/g, '').replace(/\s*<.*?>\s*/g, '')) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons disabled\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons disabled\"\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = app[0].manifest.description) ? "" : pug_interp)) + "\u003C\u002Fsection\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\" style=\"display: flex;\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons disabled\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "lock_open\u003C\u002Fi\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons disabled\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "lock_open\u003C\u002Fi\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 0 16px;\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "Moderate Risk\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv style=\"display: flex; padding-top: 16px;\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\" style=\"padding:8px 16px 0 0; color: #B71C1C;\"\u003E";
;pug_debug_line = 39;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 40;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 41;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "Data";
;pug_debug_line = 42;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 44;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "No granular data settings\u003C\u002Fdiv\u003E";
;pug_debug_line = 45;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "No data access API\u003C\u002Fdiv\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
if ('export-whitelist' in app[0].manifest && app[0].manifest['export-whitelist'].length > 0) {
;pug_debug_line = 48;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv style=\"display: flex; padding-top: 16px;\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\" style=\"padding:8px 16px 0 0; color: #F57F17;\"\u003E";
;pug_debug_line = 50;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 51;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "External Access";
;pug_debug_line = 53;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
// iterate app[0].manifest['export-whitelist']
;(function(){
  var $$obj = app[0].manifest['export-whitelist'];
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var url = $$obj[pug_index0];
;pug_debug_line = 55;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Accesses ' + url.url) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var url = $$obj[pug_index0];
;pug_debug_line = 55;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 56;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'Accesses ' + url.url) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

;pug_debug_line = 57;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 58;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "Potentially sends data to third-party\u003C\u002Fdiv\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 60;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv style=\"display: flex; padding-top: 16px;\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\" style=\"padding:8px 16px 0 0; color: #F57F17;\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 63;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 64;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "Datasources";
;pug_debug_line = 65;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 67;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "Uses sensors with low security rating\u003C\u002Fdiv\u003E";
;pug_debug_line = 68;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 69;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "Uses sensors not compliant with standards\u003C\u002Fdiv\u003E\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 70;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv style=\"display: flex; padding-top: 16px;\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\" style=\"padding:8px 16px 0 0; color: #1B5E20;\"\u003E";
;pug_debug_line = 72;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 73;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 74;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "Apps";
;pug_debug_line = 75;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 76;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 77;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "Actuates class x physical devices\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 78;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
if ((!app.installed)) {
;pug_debug_line = 79;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__actions\"\u003E";
;pug_debug_line = 80;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
if ((app.length > 1)) {
;pug_debug_line = 81;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ca class=\"mdc-button mdc-button--compact\" id=\"versionButton\" style=\"padding: 5px; color: #666;\"\u003E";
;pug_debug_line = 82;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons\" style=\"font-size: 12pt;\"\u003E";
;pug_debug_line = 83;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "arrow_drop_down\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 84;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-simple-menu\" id=\"versionMenu\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cul class=\"mdc-list mdc-simple-menu__items\"\u003E";
;pug_debug_line = 86;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
// iterate app
;(function(){
  var $$obj = app;
  if ('number' == typeof $$obj.length) {
      for (var pug_index1 = 0, $$l = $$obj.length; pug_index1 < $$l; pug_index1++) {
        var appItem = $$obj[pug_index1];
;pug_debug_line = 87;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"mdc-list-item\""+" role=\"option\""+pug_attr("id", appItem._id, true, false)+pug_attr("onclick", 'selectVersion("' + appItem._id + '")', true, false)) + "\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'v' + appItem.manifest.version + ' on ' + appItem.store) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index1 in $$obj) {
      $$l++;
      var appItem = $$obj[pug_index1];
;pug_debug_line = 87;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"mdc-list-item\""+" role=\"option\""+pug_attr("id", appItem._id, true, false)+pug_attr("onclick", 'selectVersion("' + appItem._id + '")', true, false)) + "\u003E";
;pug_debug_line = 88;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = 'v' + appItem.manifest.version + ' on ' + appItem.store) ? "" : pug_interp)) + "\u003C\u002Fli\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E";
}
;pug_debug_line = 89;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"mdc-button mdc-card__action mdc-button--primary\""+" id=\"install_link\""+pug_attr("href", "#!/" + app[0].manifest.name + "/config", true, false)) + "\u003E";
;pug_debug_line = 90;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "Install\u003C\u002Fa\u003E\u003C\u002Fsection\u003E";
}
else {
;pug_debug_line = 92;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__actions\"\u003E";
;pug_debug_line = 93;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-button mdc-card__action mdc-button--primary\" disabled=\"disabled\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "Installed\u003C\u002Fbutton\u003E\u003C\u002Fsection\u003E";
}
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 95;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 96;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + (null == (pug_interp = "const installURL = \"#!/" + app[0].manifest.name + "/config/\"") ? "" : pug_interp) + "\u003C\u002Fscript\u003E";
;pug_debug_line = 97;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u003Cscript\u003E";
;pug_debug_line = 98;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "function selectVersion(id) {";
;pug_debug_line = 99;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 99;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\tconst installLink = document.getElementById('install_link');";
;pug_debug_line = 100;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 100;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\tinstallLink.href = installURL + id;";
;pug_debug_line = 101;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 101;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "";
;pug_debug_line = 102;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 102;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "}";
;pug_debug_line = 103;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 103;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "const menu = new mdc.menu.MDCSimpleMenu(document.querySelector('#versionMenu'));";
;pug_debug_line = 104;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 104;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\u002F\u002F Add event listener to some button to toggle the menu on and off.";
;pug_debug_line = 105;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 105;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "document.querySelector('#versionButton').addEventListener('click', function () {";
;pug_debug_line = 106;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 106;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\tmenu.open = !menu.open";
;pug_debug_line = 107;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "\n";
;pug_debug_line = 107;pug_debug_filename = "src\u002Ftemplates\u002Fapp.pug";
pug_html = pug_html + "});\u003C\u002Fscript\u003E";}.call(this,"app" in locals_for_with?locals_for_with.app:typeof app!=="undefined"?app:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}