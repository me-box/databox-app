function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function alertTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002F\u002Falert.pug":"div(style=\"padding: 16px; display: flex; justify-content: center\")\n\tdiv.mdc-card\n\t\tsection.mdc-card__primary(style=\"display: flex; flex-direction: column; align-items: center\")\n\t\t\tdiv.material-icons(style=\"font-size: 128pt; color: #666\")\n\t\t\t\t= icon\n\t\t\th2.mdc-card__title.mdc-card__title--large\n\t\t\t\t= title\n\t\t\tif(button)\n\t\t\t\tdiv\n\t\t\t\t\tbutton#alert_button.mdc-button.mdc-button--accent\n\t\t\t\t\t\t= button\n"};
;var locals_for_with = (locals || {});(function (button, icon, title) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002F\u002Falert.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 16px; display: flex; justify-content: center;\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002F\u002Falert.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002F\u002Falert.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__primary\" style=\"display: flex; flex-direction: column; align-items: center;\"\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002F\u002Falert.pug";
pug_html = pug_html + "\u003Cdiv class=\"material-icons\" style=\"font-size: 128pt; color: #666;\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002F\u002Falert.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = icon) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002F\u002Falert.pug";
pug_html = pug_html + "\u003Ch2 class=\"mdc-card__title mdc-card__title--large\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002F\u002Falert.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002F\u002Falert.pug";
if ((button)) {
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002F\u002Falert.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002F\u002Falert.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-button mdc-button--accent\" id=\"alert_button\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002F\u002Falert.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = button) ? "" : pug_interp)) + "\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
}
pug_html = pug_html + "\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"button" in locals_for_with?locals_for_with.button:typeof button!=="undefined"?button:undefined,"icon" in locals_for_with?locals_for_with.icon:typeof icon!=="undefined"?icon:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}