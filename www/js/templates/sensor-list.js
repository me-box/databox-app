function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function sensorListTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002F\u002Fsensor-list.pug":"div.mdc-grid-list.mdc-elevation--z3(style=\"background-color: white; padding: 16px\")\n\tdiv.mdc-typography--title(style=\"padding: 8px\")\n\t\t| Sensors\n\teach sensor in sensors\n\t\tdiv\n\t\t\tdiv.mdc-form-field\n\t\t\t\tdiv.mdc-checkbox\n\t\t\t\t\tinput.mdc-checkbox__native-control(type=\"checkbox\", id=sensor + '-checkbox', checked=enabled_sensors.includes(sensor))\n\t\t\t\t\tdiv.mdc-checkbox__background\n\t\t\t\t\t\tsvg.mdc-checkbox__checkmark(viewBox=\"0 0 24 24\")\n\t\t\t\t\t\t\tpath.mdc-checkbox__checkmark__path(fill=\"none\", stroke=\"white\", d=\"M1.73,12.91 8.1,19.28 22.79,4.59\")\n\t\t\t\t\t\tdiv.mdc-checkbox__mixedmark\n\t\t\t\tlabel(for=sensor + '-checkbox')\n\t\t\t\t\t= sensor"};
;var locals_for_with = (locals || {});(function (enabled_sensors, sensors) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-grid-list mdc-elevation--z3\" style=\"background-color: white; padding: 16px;\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-typography--title\" style=\"padding: 8px;\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "Sensors\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
// iterate sensors
;(function(){
  var $$obj = sensors;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var sensor = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-form-field\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-checkbox\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"mdc-checkbox__native-control\""+" type=\"checkbox\""+pug_attr("id", sensor + '-checkbox', true, false)+pug_attr("checked", enabled_sensors.includes(sensor), true, false)) + "\u002F\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-checkbox__background\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Csvg class=\"mdc-checkbox__checkmark\" viewBox=\"0 0 24 24\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cpath class=\"mdc-checkbox__checkmark__path\" fill=\"none\" stroke=\"white\" d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-checkbox__mixedmark\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", sensor + '-checkbox', true, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = sensor) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var sensor = $$obj[pug_index0];
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-form-field\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-checkbox\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cinput" + (" class=\"mdc-checkbox__native-control\""+" type=\"checkbox\""+pug_attr("id", sensor + '-checkbox', true, false)+pug_attr("checked", enabled_sensors.includes(sensor), true, false)) + "\u002F\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-checkbox__background\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Csvg class=\"mdc-checkbox__checkmark\" viewBox=\"0 0 24 24\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cpath class=\"mdc-checkbox__checkmark__path\" fill=\"none\" stroke=\"white\" d=\"M1.73,12.91 8.1,19.28 22.79,4.59\"\u003E\u003C\u002Fpath\u003E\u003C\u002Fsvg\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-checkbox__mixedmark\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Clabel" + (pug_attr("for", sensor + '-checkbox', true, false)) + "\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = sensor) ? "" : pug_interp)) + "\u003C\u002Flabel\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"enabled_sensors" in locals_for_with?locals_for_with.enabled_sensors:typeof enabled_sensors!=="undefined"?enabled_sensors:undefined,"sensors" in locals_for_with?locals_for_with.sensors:typeof sensors!=="undefined"?sensors:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}