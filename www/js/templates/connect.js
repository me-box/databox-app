function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}function connectTemplate(locals) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {var pug_debug_sources = {"src\u002Ftemplates\u002F\u002Fconnect.pug":"div.mdc-layout-grid\n\tdiv.mdc-layout-grid__inner\n\t\tdiv.mdc-layout-grid__cell--span-2-desktop\n\t\tdiv.mdc-card.mdc-layout-grid__cell.mdc-layout-grid__cell--span-8\n\t\t\tif !error\n\t\t\t\tsection.mdc-card__primary\n\t\t\t\t\th1.mdc-card__title.mdc-card__title--large\n\t\t\t\t\t\t| Connect to a Databox\n\t\t\telse\n\t\t\t\tsection.mdc-card__primary\n\t\t\t\t\th1.mdc-card__title.mdc-card__title--large\n\t\t\t\t\t\t| Connection Error\n\t\t\t\t\th2.mdc-card__subtitle\n\t\t\t\t\t\t| Could not connect to the Databox at&nbsp;\n\t\t\t\t\t\tspan#error_host\n\t\t\tsection.mdc-card__supporting-text\n\t\t\t\t| Databox lets you take control of your personal data and IoT devices. See the&nbsp;\n\t\t\t\ta(href=\"https:\u002F\u002Fgithub.com\u002Fme-box\u002Fdatabox\")\n\t\t\t\t\t| documentation\n\t\t\t\t| &nbsp;for help in setting up a Databox.\n\n\t\t\tif(qr_scan)\n\t\t\t\tsection.mdc-card__actions\n\t\t\t\t\tbutton.mdc-button.mdc-button--primary(onclick='scanQR()')\n\t\t\t\t\t\t| Scan QR Code\n\t\t\tsection.mdc-card__supporting-text\n\t\t\t\tlabel.mdc-textfield(style=\"width: 100%\")\n\t\t\t\t\tinput#connectField.mdc-textfield__input(type='url', style=\"width: 100%\", required=true, onkeypress='submit(event)')\n\t\t\t\t\tspan.mdc-textfield__label\n\t\t\t\t\t\t| Databox Address\n\n\t\t\tsection.mdc-card__actions\n\t\t\t\tif error\n\t\t\t\t\tbutton.mdc-card__action.mdc-button.mdc-button--primary(onclick='connect(true)')\n\t\t\t\t\t\t| Retry\n\t\t\t\tbutton#connect_button.mdc-card__action.mdc-button.mdc-button--primary(disabled, onclick='connect()')\n\t\t\t\t\t| Connect\n"};
;var locals_for_with = (locals || {});(function (error, qr_scan) {;pug_debug_line = 1;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid\"\u003E";
;pug_debug_line = 2;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__inner\"\u003E";
;pug_debug_line = 3;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-layout-grid__cell--span-2-desktop\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 4;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cdiv class=\"mdc-card mdc-layout-grid__cell mdc-layout-grid__cell--span-8\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
if (!error) {
;pug_debug_line = 6;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__primary\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Ch1 class=\"mdc-card__title mdc-card__title--large\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Connect to a Databox\u003C\u002Fh1\u003E\u003C\u002Fsection\u003E";
}
else {
;pug_debug_line = 10;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__primary\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Ch1 class=\"mdc-card__title mdc-card__title--large\"\u003E";
;pug_debug_line = 12;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Connection Error\u003C\u002Fh1\u003E";
;pug_debug_line = 13;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Ch2 class=\"mdc-card__subtitle\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Could not connect to the Databox at&nbsp;";
;pug_debug_line = 15;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cspan id=\"error_host\"\u003E\u003C\u002Fspan\u003E\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E";
}
;pug_debug_line = 16;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Databox lets you take control of your personal data and IoT devices. See the&nbsp;";
;pug_debug_line = 18;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fme-box\u002Fdatabox\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "documentation\u003C\u002Fa\u003E";
;pug_debug_line = 20;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "&nbsp;for help in setting up a Databox.\u003C\u002Fsection\u003E";
;pug_debug_line = 22;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
if ((qr_scan)) {
;pug_debug_line = 23;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__actions\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-button mdc-button--primary\" onclick=\"scanQR()\"\u003E";
;pug_debug_line = 25;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Scan QR Code\u003C\u002Fbutton\u003E\u003C\u002Fsection\u003E";
}
;pug_debug_line = 26;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__supporting-text\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Clabel class=\"mdc-textfield\" style=\"width: 100%;\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cinput class=\"mdc-textfield__input\" id=\"connectField\" type=\"url\" style=\"width: 100%;\" required=\"required\" onkeypress=\"submit(event)\"\u002F\u003E";
;pug_debug_line = 29;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cspan class=\"mdc-textfield__label\"\u003E";
;pug_debug_line = 30;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Databox Address\u003C\u002Fspan\u003E\u003C\u002Flabel\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 32;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Csection class=\"mdc-card__actions\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
if (error) {
;pug_debug_line = 34;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-card__action mdc-button mdc-button--primary\" onclick=\"connect(true)\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Retry\u003C\u002Fbutton\u003E";
}
;pug_debug_line = 36;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "\u003Cbutton class=\"mdc-card__action mdc-button mdc-button--primary\" id=\"connect_button\" disabled=\"disabled\" onclick=\"connect()\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "src\u002Ftemplates\u002F\u002Fconnect.pug";
pug_html = pug_html + "Connect\u003C\u002Fbutton\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";}.call(this,"error" in locals_for_with?locals_for_with.error:typeof error!=="undefined"?error:undefined,"qr_scan" in locals_for_with?locals_for_with.qr_scan:typeof qr_scan!=="undefined"?qr_scan:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line, pug_debug_sources[pug_debug_filename]);};return pug_html;}