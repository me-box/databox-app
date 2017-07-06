function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function installedTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002F\u002Finstalled.pug":"div.mdc-list.mdc-list--two-line\n\teach container in containers\n\t\tdiv.mdc-list-item\n\t\t\tspan.mdc-list-item__start-detail.material-icons\n\t\t\t\t| store\n\t\t\tspan.mdc-list-item__text\n\t\t\t\t= container.Names[0].split('.')[0].substr(1)\n\t\t\t\tspan.mdc-list-item__text__secondary\n\t\t\t\t\t= container.State\n\t\t\tspan(style=\"display: flex;margin-left: auto\")\n\t\t\t\tspan(href=\"#\").material-icons.mdc-list-item__end-detail\n\t\t\t\t\t| refresh\n\t\t\t\tspan(href=\"#\").material-icons.mdc-list-item__end-detail\n\t\t\t\t\t| close\n\telse\n\t\tdiv\n\t\t\t| Empty"};
;var locals_for_with = (locals || {});(function (containers) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-list mdc-list--two-line\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
// iterate containers
;(function(){
  var $$obj = containers;
  if ('number' == typeof $$obj.length) {
    if ($$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var container = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-list-item\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__start-detail material-icons\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "store\u003C\u002Fspan\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = container.Names[0].split('.')[0].substr(1)) ? "" : pug_interp));
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = container.State) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cspan style=\"display: flex;margin-left: auto;\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cspan class=\"material-icons mdc-list-item__end-detail\" href=\"#\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "refresh\u003C\u002Fspan\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cspan class=\"material-icons mdc-list-item__end-detail\" href=\"#\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "close\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
      }
    } else {
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "Empty\u003C\u002Fdiv\u003E";
    }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var container = $$obj[pug_index0];
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-list-item\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__start-detail material-icons\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "store\u003C\u002Fspan\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = container.Names[0].split('.')[0].substr(1)) ? "" : pug_interp));
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-list-item__text__secondary\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = container.State) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cspan style=\"display: flex;margin-left: auto;\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cspan class=\"material-icons mdc-list-item__end-detail\" href=\"#\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "refresh\u003C\u002Fspan\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cspan class=\"material-icons mdc-list-item__end-detail\" href=\"#\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "close\u003C\u002Fspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
    }
    if ($$l === 0) {
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002F\u002Finstalled.pug";
pug_html = pug_html + "Empty\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";}.call(this,"containers" in locals_for_with?locals_for_with.containers:typeof containers!=="undefined"?containers:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}