function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var t="";for(var e in r)pug_has_own_property.call(r,e)&&(t=t+e+":"+r[e]+";");return t}return r+="",";"!==r[r.length-1]?r+";":r}function appListInstalledTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002F\u002Fapp-list-installed.pug":"if(containers && containers.length \u003E 0)\n\tdiv(style=\"padding: 24px 0\")\n\t\tdiv.mdc-list.mdc-list--two-line.mdc-elevation--z3(style=\"background-color: white;\")\n\t\t\teach container in containers\n\t\t\t\ta.mdc-list-item(href=\"#!\u002F\" + container.name + '\u002Fui', data-mdc-auto-init=\"MDCRipple\")\n\t\t\t\t\tspan.mdc-list-item__start-detail.app-icon-letter-small.mdc-elevation--z1\n\t\t\t\t\t\t= container.name.replace('databox_', '').replace('app-','').replace('driver-','').charAt(0).toUpperCase()\n\t\t\t\t\tspan.mdc-list-item__text\n\t\t\t\t\t\t= container.name.replace('databox_', '').replace('app-','').replace('driver-','').replace(\u002F-\u002Fg,' ')\n\t\t\t\t\t\tspan.mdc-list-item__text__secondary(style=container.state === 'running' ? '' : 'color: #F00')\n\t\t\t\t\t\t\t= container.state\n\t\t\t\t\tif container.type !== 'system'\n\t\t\t\t\t\tif container.desiredState === 'running'\n\t\t\t\t\t\t\tspan(style=\"display: flex;margin-left: auto\")\n\t\t\t\t\t\t\t\tspan.material-icons.mdc-list-item__end-detail.mdc-icon-toggle(onclick='app_restart(event, \\'' + container.name + '\\')')\n\t\t\t\t\t\t\t\t\t| refresh\n\t\t\t\t\t\t\t\tspan.material-icons.mdc-list-item__end-detail.mdc-icon-toggle(onclick='app_uninstall(event, \\'' + container.name + '\\')')\n\t\t\t\t\t\t\t\t\t| close\n\t\t\t\t\t\telse\n\t\t\t\t\t\t\tsvg.mdc-list-item__end-detail.spinner(viewBox=\"0 0 66 66\", xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\")\n\t\t\t\t\t\t\t\tcircle.path(fill=\"none\", stroke-width=\"6\", stroke-linecap=\"square\", cx=\"33\", cy=\"33\", r=\"30\")\nelse\n\tdiv(style=\"padding: 48px; text-align: center\")\n\t\t| Empty"};
;var locals_for_with = (locals || {});(function (containers) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
if ((containers && containers.length > 0)) {
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 24px 0;\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-list mdc-list--two-line mdc-elevation--z3\" style=\"background-color: white;\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
// iterate containers
;(function(){
  var $$obj = containers;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var container = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"mdc-list-item\""+pug_attr("href", "#!/" + container.name + '/ui', true, false)+" data-mdc-auto-init=\"MDCRipple\"") + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__start-detail app-icon-letter-small mdc-elevation--z1\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = container.name.replace('databox_', '').replace('app-','').replace('driver-','').charAt(0).toUpperCase()) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = container.name.replace('databox_', '').replace('app-','').replace('driver-','').replace(/-/g,' ')) ? "" : pug_interp));
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"mdc-list-item__text__secondary\""+pug_attr("style", pug_style(container.state === 'running' ? '' : 'color: #F00'), true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = container.state) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
if (container.type !== 'system') {
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
if (container.desiredState === 'running') {
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cspan style=\"display: flex;margin-left: auto;\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"material-icons mdc-list-item__end-detail mdc-icon-toggle\""+pug_attr("onclick", 'app_restart(event, \'' + container.name + '\')', true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "refresh\u003C\u002Fspan\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"material-icons mdc-list-item__end-detail mdc-icon-toggle\""+pug_attr("onclick", 'app_uninstall(event, \'' + container.name + '\')', true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "close\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Csvg class=\"mdc-list-item__end-detail spinner\" viewBox=\"0 0 66 66\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Ccircle class=\"path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"square\" cx=\"33\" cy=\"33\" r=\"30\"\u003E\u003C\u002Fcircle\u003E\u003C\u002Fsvg\u003E";
}
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var container = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"mdc-list-item\""+pug_attr("href", "#!/" + container.name + '/ui', true, false)+" data-mdc-auto-init=\"MDCRipple\"") + "\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__start-detail app-icon-letter-small mdc-elevation--z1\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = container.name.replace('databox_', '').replace('app-','').replace('driver-','').charAt(0).toUpperCase()) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = container.name.replace('databox_', '').replace('app-','').replace('driver-','').replace(/-/g,' ')) ? "" : pug_interp));
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"mdc-list-item__text__secondary\""+pug_attr("style", pug_style(container.state === 'running' ? '' : 'color: #F00'), true, false)) + "\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = container.state) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
if (container.type !== 'system') {
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
if (container.desiredState === 'running') {
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cspan style=\"display: flex;margin-left: auto;\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"material-icons mdc-list-item__end-detail mdc-icon-toggle\""+pug_attr("onclick", 'app_restart(event, \'' + container.name + '\')', true, false)) + "\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "refresh\u003C\u002Fspan\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cspan" + (" class=\"material-icons mdc-list-item__end-detail mdc-icon-toggle\""+pug_attr("onclick", 'app_uninstall(event, \'' + container.name + '\')', true, false)) + "\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "close\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
}
else {
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Csvg class=\"mdc-list-item__end-detail spinner\" viewBox=\"0 0 66 66\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Ccircle class=\"path\" fill=\"none\" stroke-width=\"6\" stroke-linecap=\"square\" cx=\"33\" cy=\"33\" r=\"30\"\u003E\u003C\u002Fcircle\u003E\u003C\u002Fsvg\u003E";
}
}
pug_html = pug_html + "\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 48px; text-align: center;\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fapp-list-installed.pug";
pug_html = pug_html + "Empty\u003C\u002Fdiv\u003E";
}}.call(this,"containers" in locals_for_with?locals_for_with.containers:typeof containers!=="undefined"?containers:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}