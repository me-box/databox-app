function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function sensorListTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002F\u002Fsensor-list.pug":"if apps.length === 0\n\tdiv\n\t\t| Empty\nelse\n\tdiv(style=\"padding: 24px 0\")\n\t\tdiv.mdc-grid-list.mdc-elevation--z3(style=\"background-color: white;\")\n\t\t\tdiv.mdc-grid-list__tiles\n\t\t\t\teach appItem in apps\n\t\t\t\t\ta(href=\"#!\u002F\" + appItem[0].manifest.name + '\u002F', title=appItem[0].manifest.name).mdc-grid-tile\n\t\t\t\t\t\tdiv.mdc-grid-tile__primary\n\t\t\t\t\t\t\timg.mdc-grid-tile__primary-content(src=\"icons\u002Fandroid-icon-144x144.png\")\n\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t= appItem[0].displayName\n\t\t\t\t\t\tdiv.ratings\n\t\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t\ti.material-icons.rating\n\t\t\t\t\t\t\t\t\t| lock\n\t\t\t\t\t\t\t\ti.material-icons.rating\n\t\t\t\t\t\t\t\t\t| lock\n\t\t\t\t\t\t\t\ti.material-icons.rating\n\t\t\t\t\t\t\t\t\t| lock\n\t\t\t\t\t\t\t\ti.material-icons.rating.disabled\n\t\t\t\t\t\t\t\t\t| lock\n\t\t\t\t\t\t\t\ti.material-icons.rating.disabled\n\t\t\t\t\t\t\t\t\t| lock\n\t\t\t\t\t\t\tdiv(style=\"flex: 1\")\n\t\t\t\t\t\t\tdiv\n\t\t\t\t\t\t\t\ti.material-icons.rating\n\t\t\t\t\t\t\t\t\t| star\n\t\t\t\t\t\t\t\ti.material-icons.rating\n\t\t\t\t\t\t\t\t\t| star\n\t\t\t\t\t\t\t\ti.material-icons.rating\n\t\t\t\t\t\t\t\t\t| star\n\t\t\t\t\t\t\t\ti.material-icons.rating.disabled\n\t\t\t\t\t\t\t\t\t| star\n\t\t\t\t\t\t\t\ti.material-icons.rating.disabled\n\t\t\t\t\t\t\t\t\t| star"};
;var locals_for_with = (locals || {});(function (apps) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
if (apps.length === 0) {
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "Empty\u003C\u002Fdiv\u003E";
}
else {
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv style=\"padding: 24px 0;\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-grid-list mdc-elevation--z3\" style=\"background-color: white;\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-grid-list__tiles\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
// iterate apps
;(function(){
  var $$obj = apps;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var appItem = $$obj[pug_index0];
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"mdc-grid-tile\""+pug_attr("href", "#!/" + appItem[0].manifest.name + '/', true, false)+pug_attr("title", appItem[0].manifest.name, true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-grid-tile__primary\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cimg class=\"mdc-grid-tile__primary-content\" src=\"icons\u002Fandroid-icon-144x144.png\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = appItem[0].displayName) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"ratings\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv style=\"flex: 1;\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var appItem = $$obj[pug_index0];
;pug_debug_line = 9;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ca" + (" class=\"mdc-grid-tile\""+pug_attr("href", "#!/" + appItem[0].manifest.name + '/', true, false)+pug_attr("title", appItem[0].manifest.name, true, false)) + "\u003E";
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-grid-tile__primary\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cimg class=\"mdc-grid-tile__primary-content\" src=\"icons\u002Fandroid-icon-144x144.png\"\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = appItem[0].displayName) ? "" : pug_interp)) + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv class=\"ratings\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "lock\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv style=\"flex: 1;\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Cdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E";
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "\u003Ci class=\"material-icons rating disabled\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fsensor-list.pug";
pug_html = pug_html + "star\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fa\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
}}.call(this,"apps" in locals_for_with?locals_for_with.apps:typeof apps!=="undefined"?apps:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}