(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Navigo",[],t):"object"==typeof exports?exports.Navigo=t():e.Navigo=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function i(e,t,n){this.root=null,this._routes=[],this._useHash=t,this._hash="undefined"==typeof n?"#":n,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!t&&o(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=t?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):t&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function s(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function r(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}function a(e){var t,n=[];return t=e instanceof RegExp?e:new RegExp(e.replace(i.PARAMETER_REGEXP,function(e,t,o){return n.push(o),i.REPLACE_VARIABLE_REGEXP}).replace(i.WILDCARD_REGEXP,i.REPLACE_WILDCARD)+i.FOLLOWED_BY_SLASH_REGEXP,i.MATCH_REGEXP_FLAGS),{regexp:t,paramNames:n}}function u(e){return e.replace(/\/$/,"").split("/").length}function h(e,t){return u(t)-u(e)}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t.map(function(t){var n=a(s(t.route)),o=n.regexp,i=n.paramNames,u=e.replace(/^\/+/,"/").match(o),h=r(u,i);return!!u&&{match:u,route:t,params:h}}).filter(function(e){return e})}function d(e,t){return l(e,t)[0]||!1}function c(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),o=s(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:o}function f(){return!!("undefined"!=typeof window&&"onhashchange"in window)}function _(e){return e.split(/\?(.*)?$/).slice(1).join("")}function p(e,t,n){var i,s=e,r=function(e){return e.split(/\?(.*)?$/)[0]};return"undefined"==typeof n&&(n="#"),o()&&!t?s=r(e).split(n)[0]:(i=e.split(n),s=r(i.length>1?i[1]:i[0])),s}function v(e,t,n){if(t&&"object"===("undefined"==typeof t?"undefined":g(t))){if(t.before)return void t.before(function(){var o=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];o&&(e(),t.after&&t.after(n))},n);if(t.after)return e(),void(t.after&&t.after(n))}e()}function R(e,t,n){if(o()&&!t)return!1;if(!e.match(n))return!1;var i=e.split(n);return i.length<2||""===i[1]}Object.defineProperty(t,"__esModule",{value:!0});var g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};i.prototype={helpers:{match:d,root:c,clean:s,getOnlyURL:p},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/"),n=n.replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var e=this,t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];if("function"==typeof n[0])this._defaultHandler={handler:n[0],hooks:n[1]};else if(n.length>=2)if("/"===n[0]){var i=n[1];"object"===g(n[1])&&(i=n[1].uses),this._defaultHandler={handler:i,hooks:n[2]}}else this._add(n[0],n[1],n[2]);else if("object"===g(n[0])){var s=Object.keys(n[0]).sort(h);s.forEach(function(t){e.on(t,n[0][t])})}return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var t,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var r=_(e||this._cLoc()),a=p(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&a===this._lastRouteResolved.url&&r===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=d(a,this._routes))?(this._callLeave(),this._lastRouteResolved={url:a,query:r,hooks:o.route.hooks,params:o.params,name:o.route.name},t=o.route.handler,v(function(){v(function(){o.route.route instanceof RegExp?t.apply(void 0,n(o.match.slice(1,o.match.length))):t(o.params,r)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===a||"/"===a||a===this._hash||R(a,this._useHash,this._hash))?(v(function(){v(function(){i._callLeave(),i._lastRouteResolved={url:a,query:r,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(r)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&v(function(){v(function(){i._callLeave(),i._lastRouteResolved={url:a,query:r,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(r)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e){n=o.route;for(i in t)n=n.toString().replace(":"+i,t[i])}return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,e?this._historyAPIUpdateMethod="replaceState":this._historyAPIUpdateMethod="pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return"undefined"==typeof e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){o()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof e&&(e=encodeURI(e)),"object"===("undefined"==typeof t?"undefined":g(t))?this._routes.push({route:e,handler:t.uses,name:t.as,hooks:n||t.hooks}):this._routes.push({route:e,handler:t,hooks:n}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=c(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if(f())window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)},o()}},_cLoc:function(){return"undefined"!=typeof window?"undefined"!=typeof window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:s(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){this._lastRouteResolved&&this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.leave&&this._lastRouteResolved.hooks.leave(this._lastRouteResolved.params)}},i.PARAMETER_REGEXP=/([:*])(\w+)/g,i.WILDCARD_REGEXP=/\*/g,i.REPLACE_VARIABLE_REGEXP="([^/]+)",i.REPLACE_WILDCARD="(?:.*)",i.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",i.MATCH_REGEXP_FLAGS="",t["default"]=i,e.exports=t["default"]}])});

},{}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
;(function (factory) {
	var registeredInModuleLoader = false;
	if (typeof define === 'function' && define.amd) {
		define(factory);
		registeredInModuleLoader = true;
	}
	if (typeof exports === 'object') {
		module.exports = factory();
		registeredInModuleLoader = true;
	}
	if (!registeredInModuleLoader) {
		var OldCookies = window.Cookies;
		var api = window.Cookies = factory();
		api.noConflict = function () {
			window.Cookies = OldCookies;
			return api;
		};
	}
}(function () {
	function extend () {
		var i = 0;
		var result = {};
		for (; i < arguments.length; i++) {
			var attributes = arguments[ i ];
			for (var key in attributes) {
				result[key] = attributes[key];
			}
		}
		return result;
	}

	function init (converter) {
		function api (key, value, attributes) {
			var result;
			if (typeof document === 'undefined') {
				return;
			}

			// Write

			if (arguments.length > 1) {
				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					var expires = new Date();
					expires.setMilliseconds(expires.getMilliseconds() + attributes.expires * 864e+5);
					attributes.expires = expires;
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				if (!converter.write) {
					value = encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
				} else {
					value = converter.write(value, key);
				}

				key = encodeURIComponent(String(key));
				key = key.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent);
				key = key.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';

				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}
					stringifiedAttributes += '=' + attributes[attributeName];
				}
				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			// Read

			if (!key) {
				result = {};
			}

			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling "get()"
			var cookies = document.cookie ? document.cookie.split('; ') : [];
			var rdecode = /(%[0-9A-Z]{2})+/g;
			var i = 0;

			for (; i < cookies.length; i++) {
				var parts = cookies[i].split('=');
				var cookie = parts.slice(1).join('=');

				if (!this.json && cookie.charAt(0) === '"') {
					cookie = cookie.slice(1, -1);
				}

				try {
					var name = parts[0].replace(rdecode, decodeURIComponent);
					cookie = converter.read ?
						converter.read(cookie, name) : converter(cookie, name) ||
						cookie.replace(rdecode, decodeURIComponent);

					if (this.json) {
						try {
							cookie = JSON.parse(cookie);
						} catch (e) {}
					}

					if (key === name) {
						result = cookie;
						break;
					}

					if (!key) {
						result[name] = cookie;
					}
				} catch (e) {}
			}

			return result;
		}

		api.set = api;
		api.get = function (key) {
			return api.call(api, key);
		};
		api.getJSON = function () {
			return api.apply({
				json: true
			}, [].slice.call(arguments));
		};
		api.defaults = {};

		api.remove = function (key, attributes) {
			api(key, '', extend(attributes, {
				expires: -1
			}));
		};

		api.withConverter = init;

		return api;
	}

	return init(function () {});
}));

},{}],4:[function(require,module,exports){
'use strict';

var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      var valB = pug_style(b[key]);
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || require('fs').readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};

},{"fs":2}],5:[function(require,module,exports){
require('./js/main.js');
require('./js/sensors');
const toolbar = require('./js/toolbar');
const router = require('./js/router');
const templates = require('./js/templates');
const containerManager = require("./js/container-manager");

containerManager.onConnectError = function (res) {
	console.log(res, res.status, res.statusText, res.url);
	if (res.status === 404) {
		containerManager.showConnect();
	} else if (res.status === 401) {
		containerManager.requestLogin();
	} else {
		console.log("Install cert");
		const databoxURL = localStorage.getItem('databoxURL');
		SensingKit.installCert(databoxURL, (bar) => {
			if (bar === 'OK') {
				console.log("Installed cert");
				console.log("Connect1");
				window.location.reload(false);
				containerManager.fetch('api/driver/list')
			} else {
				console.log("Not Installed cert " + bar);
				if (document.getElementById('spinner') && databoxURL === localStorage.getItem('databoxURL')) {
					console.log(res);
					containerManager.showConnect();
					const url = new URL(databoxURL);
					document.getElementById('error_details').style.display = 'block';
					document.getElementById('error_host').innerText = url.hostname;
				}
			}
		});
	}
};

containerManager.onShowConnect = function () {
	const qrbutton = document.getElementById('qrbutton');
	qrbutton.style.display = 'block';
	qrbutton.addEventListener('click', () => {
		QRScanner.prepare((err, status) => {
			if (err) {
				console.error(err);
			}
			if (status.authorized) {
				QRScanner.scan((err, text) => {
					if (err) {
						console.error(err);
					} else {
						QRScanner.destroy();
						const auth = JSON.parse(text);
						localStorage.setItem("databoxURL", 'https://' + auth.ip + '/');
						localStorage.setItem("databoxToken", auth.token);
						containerManager.connect();
					}
				});

				document.getElementById('content').innerHTML = '';
				toolbar.showBack();
				QRScanner.show();
			}
		});
	});
};

router.on(() => {
	toolbar.showDrawer();
	document.getElementById('content').innerHTML = templates.welcomeApp();
});

document.getElementById('sensing').style.display = 'flex';
},{"./js/container-manager":9,"./js/main.js":10,"./js/router":11,"./js/sensors":13,"./js/templates":14,"./js/toolbar":15}],6:[function(require,module,exports){
const templates = require("./templates");
const toolbar = require('./toolbar');
const containerManager = require('./container-manager');
const stores = require('./app-store');
const router = require('./router');

function listDatasources(manifest) {
	if ('datasources' in manifest && manifest.datasources.length > 0) {
		return containerManager.fetch('api/datasource/list')
			.then((res) => {
				return res.json();
			})
			.catch((error) => {
				console.log(error);
				return [];
			});
	} else {
		return new Promise((resolve) => {
			resolve([]);
		})
	}
}

function appConfigDisplay(manifest, sensors) {
	toolbar.showBack('Configure ' + manifest.displayName);
	if('packages' in manifest && manifest.packages.length > 0) {
		const firstPackage = manifest.packages[0];
		if(!('enabled' in firstPackage)) {
			firstPackage.enabled = true;
		}
	}
	document.getElementById('content').innerHTML = templates.appInstall({
		manifest: manifest,
		sensors: sensors
	});

	if('packages' in manifest && manifest.packages.length > 1) {
		for(let index = 0; index < manifest.packages.length; index++) {
			let databoxPackage = manifest.packages[index];
			let packageID = "pack_" + (databoxPackage.id || index);
			let element = document.getElementById(packageID);
			if(!databoxPackage.required) {
				element.addEventListener('click', () => {
					databoxPackage.enabled = !databoxPackage.enabled;
					appConfigDisplay(manifest, sensors);
				});
			}
		}
	}

	document.getElementById('install_button').addEventListener('click', () => {
		toolbar.showSpinner();
		containerManager.fetch("api/install", {
			headers: {
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(manifest),
		})
			.then(() => {
				router.navigate('/list/' + manifest['databox-type']);
			});
	});

	let selects = document.getElementsByTagName('select');
	for(const selectElements of selects) {
		selectElements.addEventListener('change', (event) => {
			const selectElement = event.currentTarget;
			const clientid = selectElement.getAttribute('datasource');
			for(const datasource of manifest.datasources) {
				if(datasource.clientid === clientid) {
					if(selectElement.selectedIndex === 0) {
						datasource.hypercat = null;
						appConfigDisplay(manifest, sensors);
					} else {
						const sensorHref = selectElement.value;
						for (const sensor of sensors) {
							if(sensor.href === sensorHref) {
								datasource.hypercat = sensor;
								appConfigDisplay(manifest, sensors);
								break;
							}
						}
					}
					break;
				}
			}
		});
	}

	const MDCSelect = mdc.select.MDCSelect;
	const mdcSelects = document.getElementsByClassName('mdc-select');
	for(const mdcSelect of mdcSelects) {
		const select = new MDCSelect(mdcSelect);
		select.listen('MDCSelect:change', () => {
			const selectElement = select;
			const clientid = mdcSelect.getAttribute('datasource');
			for(const datasource of manifest.datasources) {
				if(datasource.clientid === clientid) {
					const sensorHref = selectElement.value;
					for (const sensor of sensors) {
						if(sensor.href === sensorHref) {
							datasource.hypercat = sensor;
							appConfigDisplay(manifest, sensors);
							break;
						}
					}
					break;
				}
			}
		});
	}

	for(const mdcSelect of mdcSelects) {
		mdcSelect.style.minWidth = mdcSelect.style.width;
		mdcSelect.style.width = null;
	}
}

router.on('/store/:name/install', (params) => {
	toolbar.showSpinner();
	stores.listApps()
		.then((apps) => {
			const manifest = JSON.parse(JSON.stringify(apps[params.name][0].manifest));
			listDatasources(manifest)
				.then((sensors) => {
					appConfigDisplay(manifest, sensors);
				});
		});
});

function getManifest(apps, name, id) {
	const manifests = apps[name];
	for(const manifest of manifests) {
		if(manifest._id === id) {
			return manifest.manifest;
		}
	}
	return manifests[0].manifest
}

router.on('/store/:name/install/:id', (params) => {
	console.log(params);
	stores.listApps()
		.then((apps) => {
			const manifest = JSON.parse(JSON.stringify(getManifest(apps, params.name, params.id)));
			listDatasources(manifest)
				.then((sensors) => {
					appConfigDisplay(manifest, sensors);
				});
		});
});
},{"./app-store":8,"./container-manager":9,"./router":11,"./templates":14,"./toolbar":15}],7:[function(require,module,exports){
const router = require('./router');
const toolbar = require('./toolbar');
const templates = require('./templates');
const containerManager = require('./container-manager');

let loadingAppList = false;

function reloadAppList(type) {
	if (!loadingAppList) {
		loadingAppList = true;
		containerManager.fetch('api/' + type + '/list')
			.then((res) => res.json())
			.then((containers) => {
				loadingAppList = false;
				if (window.location.hash === '#!/list/' + type) {
					toolbar.showDrawer();
					const newList = templates.appList({
						containers: containers
					});
					const innerHTML = document.getElementById('content').innerHTML.replace(/>contains [^<]*<\/span>/g, '>running</span>');
					if (innerHTML !== newList) {
						document.getElementById('content').innerHTML = newList;
						const actions = document.getElementsByClassName('mdc-icon-toggle');
						for (const action of actions) {
							if (action.id.indexOf('restart_') === 0) {
								const app = action.id.substr(8);
								action.addEventListener('click', (event) => {
									containerManager.fetch("api/restart", {
										headers: {
											'Content-Type': 'application/json'
										},
										method: "POST",
										body: JSON.stringify({"id": app}),
									});
									event.preventDefault();
								});
							} else if (action.id.indexOf('uninstall_') === 0) {
								const app = action.id.substr(10);
								action.addEventListener('click', (event) => {
									containerManager.fetch("api/uninstall", {
										headers: {
											'Content-Type': 'application/json'
										},
										method: "POST",
										body: JSON.stringify({"id": app}),
									});
									event.preventDefault();
								});
							}
						}

						for(const container of containers) {
							if(container.type === "store" && container.state === "running") {
								containerManager.fetch('api/store/cat/' + container.name)
									.then((res) => res.json())
									.then((cat) => {
										let types = [];
										let comma = false;
										for(const item of cat.items) {
											for(const metadata of item['item-metadata']) {
												if (metadata.rel === "urn:X-databox:rels:hasType") {
													types.push(metadata.val);
												}
											}
										}

										if(types.length !== 0) {
											document.getElementById('types_' + container.name).innerText = 'contains ' + types.join(', ');
										}
									});
							}
						}
					}

					setTimeout(function () {
						reloadAppList(type);
					}, 1000);
				}
			})
			.catch((error) => {
				loadingAppList = false;
				console.log(error);
			});
	}
}

router.on('/list/:type', (params) => {
	toolbar.showSpinner();
	reloadAppList(params.type);
});

router.on('/:name/ui', (params) => {
	toolbar.showSpinner();
	let appname = params.name;

	document.getElementById('toolbartitle').innerText = params.name;

	if (appname === 'databox_arbiter') {
		appname = 'arbiter';
	}
	const url = localStorage.getItem('databoxURL') + appname + '/ui';
	toolbar.showBack();
	const toolbarActions = document.getElementById('toolbaractions');
	toolbarActions.innerHTML = '';
	const button = document.createElement('a');
	button.classList.add('mdc-icon-toggle');
	button.classList.add('material-icons');
	button.innerText = 'fullscreen';
	button.href = url;
	toolbarActions.appendChild(button);

	const iframe = document.createElement("iframe");
	iframe.setAttribute("src", url);

	const content = document.getElementById('content');

	iframe.style.height = (document.documentElement.clientHeight - 56) + 'px';
	content.innerHTML = '';
	content.appendChild(iframe);
});

},{"./container-manager":9,"./router":11,"./templates":14,"./toolbar":15}],8:[function(require,module,exports){
const router = require('./router');
const toolbar = require('./toolbar');
const templates = require('./templates');
const containerManager = require('./container-manager');
require('./app-install');

let stores = [];

module.exports.localStoreName = "Local Store";

function checkOk(res) {
	if (!res.ok) {
		console.log(res.url);
		console.log(res.status);
		console.log(res.statusText);
		throw res;
	}
	return res;
}

module.exports.setStores = function (storeList) {
	stores = storeList;
};

module.exports.listApps = function (type) {
	let promise;

	let proms = [];
	for (let store of stores) {
		proms.push(fetch(store.url + 'app/list')
			.then(checkOk)
			.then((res) => res.json())
			.then((json) => {
				for (const app of json.apps) {
					app.url = store.url + 'app/get/?name=' + app.manifest.name;

					app.store = store.name;
					app.displayName = app.manifest.name.replace('databox', '').replace('driver-', '').replace('app-', '').split('-').join(' ').trim();
					app.manifest.displayName = app.displayName;
					if (store.name === module.exports.localStoreName) {
						app.manifest.storeUrl = 'http://localhost:8181/app/get/?name=' + app.manifest.name;
					} else {
						app.manifest.storeUrl = app.url;
					}
				}
				return json;
			})
			.catch(() => {
				return {'apps': []}
			}));
	}
	promise = Promise.all(proms)
		.then((appLists) => {
			let apps = {};
			for (const appList of appLists) {
				for (const app of appList.apps) {
					const name = app.manifest.name;
					let versions = [];
					if (name in apps) {
						versions = apps[name];
					}

					versions.push(app);
					apps[name] = versions;
				}
			}
			return apps;
		});

	if (type) {
		const appType = type;
		return promise
			.then((apps) => {
				let filtered = {};
				for (const name in apps) {
					const app = apps[name];
					const manifest = module.exports.bestManifest(app);
					if (manifest['databox-type'] === appType) {
						filtered[manifest.name] = app;
					}
				}
				return filtered;
			});
	} else {
		return promise;
	}
};

function compareManifests(m1, m2) {
	const v1parts = m1.manifest.version.split('.');
	const v2parts = m2.manifest.version.split('.');

	// First, validate both numbers are true version numbers
	function validateParts(parts) {
		function isPositiveInteger(x) {
			// http://stackoverflow.com/a/1019526/11236
			return /^\d+$/.test(x);
		}

		for (let i = 0; i < parts.length; ++i) {
			if (!isPositiveInteger(parts[i])) {
				return false;
			}
		}
		return true;
	}

	if (!validateParts(v1parts) || !validateParts(v2parts)) {
		return NaN;
	}

	for (let i = 0; i < v1parts.length; ++i) {
		if (v2parts.length === i) {
			return -1;
		}

		if (v1parts[i] === v2parts[i]) {
			continue;
		}
		if (v1parts[i] > v2parts[i]) {
			return -1;
		}
		return 1;
	}

	if (v1parts.length !== v2parts.length) {
		return 1;
	}

	if (m1.store === module.exports.localStoreName) {
		return -1;
	} else if (m2.store === module.exports.localStoreName) {
		return 1;
	}

	return 0;
}

module.exports.bestManifest = function(app) {
	if (!app || app.length === 0) {
		return null;
	}
	app.sort(compareManifests);
	return app[0].manifest;
};

router.on('/store/list/:type', (params) => {
	const storeType = params.type;
	toolbar.showSpinner();
	module.exports.listApps(storeType)
		.then((apps) => {
			toolbar.showDrawer();
			document.getElementById('content').innerHTML = templates.appStore({
				apps: apps
			});
		});
});

router.on('/store/:name', (params) => {
	toolbar.showSpinner();
	module.exports.listApps()
		.then((apps) => {
			containerManager.fetch('api/installed/list')
				.then((res) => res.json())
				.then((json) => {
					toolbar.showBack();
					const app = apps[params.name];
					const manifest = module.exports.bestManifest(app);
					app.installed = json.indexOf(manifest.name) !== -1;
					document.getElementById('content').innerHTML = templates.appStoreItem({
						app: app
					});

					const installURL = "#!/" + manifest.name + "/config/";
					const menuItems = document.getElementsByClassName('version-item');
					for (const menuItem of menuItems) {
						menuItem.addEventListener('click', function (event) {
							document.getElementById('install_link').href = installURL + event.target.id;
							const menuItems = document.getElementsByClassName('version-item');
							for (const menuItem of menuItems) {
								menuItem.classList.remove('mdc-simple-menu--selected');
							}
							event.target.classList.add('mdc-simple-menu--selected');
						})
					}

					if (menuItems.length > 0) {
						menuItems.item(0).classList.add('mdc-simple-menu--selected');
					}

					const menu = new mdc.menu.MDCSimpleMenu(document.getElementById('versionMenu'));
					document.getElementById('versionButton').addEventListener('click', function () {
						menu.open = !menu.open
					});
				})
				.catch(() => {
					toolbar.showBack();
					const app = apps[params.name];
					document.getElementById('content').innerHTML = templates.appStoreItem({
						app: app
					});
				});
		});
});
},{"./app-install":6,"./container-manager":9,"./router":11,"./templates":14,"./toolbar":15}],9:[function(require,module,exports){
const templates = require("./templates");
const toolbar = require("./toolbar");
const router = require("./router");
const stores = require("./app-store");
const cookies = require("js-cookie");

function authHeader(obj) {
	if (!obj) {
		obj = {};
	}
	const token = localStorage.getItem('databoxToken');
	if (token) {
		if (!obj.headers) {
			obj.headers = {};
		}
		obj.headers.Authorization = 'Token ' + token;
		obj.headers.credentials = 'include';
	}
	return obj;
}

function checkOk(res) {
	if (!res.ok) {
		throw res;
	}
	return res;
}

module.exports.onConnectError = function (res) {
	if (res.status === 401) {
		module.exports.requestLogin();
	} else {
		module.exports.showConnect();
	}
};

module.exports.onShowConnect = function () {
};

module.exports.fetch = function (url, options) {
	const databoxURL = localStorage.getItem('databoxURL') || '';
	if(!databoxURL) {
		return Promise.reject({status:404});
	}
	return fetch(databoxURL + url, authHeader(options))
		.then(checkOk)
};

module.exports.connect = function () {
	toolbar.disabled();
	toolbar.showSpinner(() => {
		module.exports.showConnect()
	});
	const databoxURL = localStorage.getItem('databoxURL');
	return module.exports.fetch('api/connect')
		.then((res) => res.text())
		.then((session) => {
			if (document.getElementById('spinner') && databoxURL === localStorage.getItem('databoxURL')) {
				const hostlabel = document.getElementById('hostname');
				const url = new URL(databoxURL);
				hostlabel.innerText = url.hostname;
				hostlabel.parentElement.addEventListener('click', () => {
					router.navigate('/connect')
				});
				hostlabel.parentElement.style.cursor = 'pointer';

				stores.setStores([
					{
						"name": stores.localStoreName,
						"url": 'https://' + url.hostname + ':8181/'
					},
					{
						"name": "IoT Databox Store",
						"url": "https://store.iotdatabox.com/"
					}]);

				cookies.set('session', session);

				if (router.lastRouteResolved() !== null && router.lastRouteResolved().url === '/connect') {
					router.navigate('/');
				} else if (window.location.hash === '#!/connect') {
					router.navigate('/');
				} else {
					router.resolve();
				}

				mdc.autoInit();
				// TODO restartSensors();
			}
		})
		.catch((res) => {
			module.exports.onConnectError(res);
		})
};

module.exports.requestLogin = function () {
	document.getElementById('toolbartitle').innerText = 'Databox';
	document.getElementById('content').innerHTML = templates.login();
	const field = document.getElementById('loginField');
	mdc.textField.MDCTextField.attachTo(field.parentElement);
	const button = document.getElementById('loginButton');

	function submit() {
		localStorage.setItem('databoxToken', field.value.trim());
		module.exports.connect();
	}

	field.addEventListener('input', () => {
		button.disabled = field.value.trim().length <= 0;
	});
	field.addEventListener('keypress', (event) => {
		const key = event.which || event.keyCode;
		if (key === 13) {
			event.preventDefault();
			submit();
		}
	});
	document.getElementById('loginButton').addEventListener('click', submit);
	mdc.autoInit();
	field.focus();
};

module.exports.showConnect = function () {
	document.getElementById('toolbartitle').innerText = 'Databox';
	document.getElementById('content').innerHTML = templates.connect();
	const field = document.getElementById('connectField');
	mdc.textField.MDCTextField.attachTo(field.parentElement);
	const button = document.getElementById('connectButton');

	function submit() {
		let value = field.value.trim();
		if (value.indexOf('://') === -1) {
			value = 'https://' + value;
		}
		const url = new URL(value);
		localStorage.setItem('databoxURL', url.toString());
		module.exports.connect();
	}

	const stored = localStorage.getItem('databoxURL');
	if (stored) {
		const url = new URL(stored);
		field.value = url.host;
		button.disabled = false;
	}
	field.addEventListener('input', () => {
		button.disabled = field.value.trim().length <= 0;
	});
	field.addEventListener('keypress', (event) => {
		const key = event.which || event.keyCode;
		if (key === 13) {
			event.preventDefault();
			submit();
		}
	});
	button.addEventListener('click', submit);

	module.exports.onShowConnect();
	mdc.autoInit();
	field.focus();
};

router.on('/connect', () => {
	module.exports.showConnect();
});
},{"./app-store":8,"./router":11,"./templates":14,"./toolbar":15,"js-cookie":3}],10:[function(require,module,exports){
const router = require("./router");
const toolbar = require("./toolbar");
const templates = require("./templates");
const containerManager = require("./container-manager");
require('./app-list');
require('./search');

router.on(() => {
	toolbar.showDrawer();
	document.getElementById('content').innerHTML = templates.welcomeWeb();
});

router.notFound((query) => {
	console.log("Not found: " + query);
});

window.addEventListener('load', () => {
	containerManager.connect();
});

toolbar.disabled();

mdc.autoInit();
},{"./app-list":7,"./container-manager":9,"./router":11,"./search":12,"./templates":14,"./toolbar":15}],11:[function(require,module,exports){
const Navigo = require('Navigo');
module.exports=new Navigo(null, true, '#!');
},{"Navigo":1}],12:[function(require,module,exports){
const router = require('./router');
const templates = require("./templates");
const toolbar = require('./toolbar');
const stores = require("./app-store");

let searchTimer;
document.getElementById('toolbar-search__input').addEventListener('input', () => {
	const search = document.getElementById('toolbar-search__input');
	if (search.value.length > 1) {
		if (searchTimer) {
			clearTimeout(searchTimer);
		}
		searchTimer = setTimeout(() => {
			router.navigate("/search/" + search.value);
		}, 1000);
	}
});

router.on('/search', () => {
	document.getElementById('toolbar-search').style.display = 'flex';
	document.getElementById('toolbar').style.display = 'none';
	document.getElementById('content').innerHTML = '';
	const search = document.getElementById('toolbar-search__input');
	search.value = '';
	search.focus();
});

router.on('/search/:query', (params) => {
	document.getElementById('toolbar-search').style.display = 'flex';
	document.getElementById('toolbar').style.display = 'none';
	const search = document.getElementById('toolbar-search__input');
	if (search.value !== params.query) {
		search.value = params.query;
	}
	search.focus();

	toolbar.showSpinner();

	stores.listApps()
		.then((apps) => {
			const result = {};
			const queries = params.query.trim().split(' ');
			for (const appname in apps) {
				if(apps.hasOwnProperty(appname)) {
					for (const query of queries) {
						if (appname.indexOf(query) !== -1) {
							result[appname] = apps[appname];
							break;
						}
					}
				}
			}
			document.getElementById('content').innerHTML = templates.appStore({
				apps: result
			});
		});
});
},{"./app-store":8,"./router":11,"./templates":14,"./toolbar":15}],13:[function(require,module,exports){
const toolbar = require("./toolbar.js");
const router = require("./router.js");
const templates = require("./templates.js");
const containerManager = require('./container-manager');
const stores = require('./app-store');

const sensorDriver = 'driver-sensingkit';

window.addEventListener('load', () => {
	document.addEventListener("deviceready", onDeviceReady, false);
});

// device APIs are available
//
function onDeviceReady() {
	document.addEventListener("pause", onPause, false);
	document.addEventListener("resume", onResume, false);
	// Add similar listeners for other events
}

function checkOk(res) {
	if (!res.ok) {
		throw res;
	}
	return res;
}


function onPause() {
	SensingKit.stop();
}

function onResume() {
	containerManager.fetch(sensorDriver + '/ui')
		.then(checkOk)
		.then(() => {
			let enabled_sensors = localStorage.getItem('sensors');
			if (enabled_sensors) {
				enabled_sensors = JSON.parse(enabled_sensors);
				SensingKit.startSensors(enabled_sensors, databoxURL + sensorDriver, () => {

				});
			}
		});
}

function showSensingStart() {
	containerManager.fetch(sensorDriver + '/ui')
		.then(checkOk)
		.then(() => {
			showSensors();
		})
		.catch((err) => {
			console.log(err);
			setTimeout(showSensingStart, 1000);
		});
}

function showSensors() {
	SensingKit.listSensors((result) => {
		let enabled_sensors = localStorage.getItem('sensors');
		if (!enabled_sensors) {
			enabled_sensors = [];
		} else {
			enabled_sensors = JSON.parse(enabled_sensors);
		}
		result.sort();
		document.getElementById('content').innerHTML = templates.sensorList({
			sensors: result,
			enabled_sensors: enabled_sensors
		});
		const sensorCheckboxes = document.getElementsByClassName('mdc-checkbox__native-control');
		for (const checkbox of sensorCheckboxes) {
			checkbox.addEventListener('change', (event) => {
				let selected = [];
				for (const checkbox of sensorCheckboxes) {
					let name = checkbox.id.substring(0, checkbox.id.length - 9);
					if (checkbox.checked) {
						selected.push(name);
					}
				}
				if (selected.length === 4) {
					event.target.checked = false;
				} else {
					const databoxURL = localStorage.getItem('databoxURL');
					SensingKit.startSensors(selected, databoxURL + sensorDriver, () => {
					});
				}
				//showSensors();
			})
		}
	});
}

function showSensingInstall() {
	toolbar.showSpinner();
	stores.listApps('driver')
		.then((apps) => {
			const osApp = apps[sensorDriver];
			if (osApp) {
				const manifest = stores.bestManifest(osApp);
				if (manifest) {
					document.getElementById('content').innerHTML = templates.alert({
						icon: 'network_check',
						button: 'Enable Mobile Sensor Data'
					});
					document.getElementById('alert_button').addEventListener('click', () => {
						toolbar.showSpinner();
						containerManager.fetch("api/install", {
							headers: {
								'Content-Type': 'application/json'
							},
							method: "POST",
							body: JSON.stringify(manifest),
						})
							.then(() => {
								showSensingStart();
							});
					});
				} else {
					document.getElementById('content').innerHTML = templates.alert({
						icon: 'warning',
						title: 'SensingKit Driver not Found'
					});
				}
			} else {
				document.getElementById('content').innerHTML = templates.alert({
					icon: 'warning',
					title: 'SensingKit Driver not Found'
				});
			}
		});
}


router.on('/driver-sensingkit/ui', () => {
	router.navigate('/sensing');
});


router.on('/sensing', () => {
	toolbar.showDrawer();
	toolbar.showSpinner();
	containerManager.fetch('api/installed/list')
		.then((res) => res.json())
		.then((json) => {
			if (json.indexOf(sensorDriver) === -1) {
				showSensingInstall();
			} else {
				showSensingStart();
			}
		})
		.catch((error) => {

		});
});

},{"./app-store":8,"./container-manager":9,"./router.js":11,"./templates.js":14,"./toolbar.js":15}],14:[function(require,module,exports){
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
pug_html = pug_html + "\u003Cspan" + (" class=\"mdc-list-item__secondary-text\""+pug.attr("id", 'types_' + container.name, true, false)+pug.attr("style", pug.style(container.state === 'running' ? '' : 'color: #F00'), true, false)) + "\u003E";
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
pug_html = pug_html + "\u003Cspan" + (" class=\"mdc-list-item__secondary-text\""+pug.attr("id", 'types_' + container.name, true, false)+pug.attr("style", pug.style(container.state === 'running' ? '' : 'color: #F00'), true, false)) + "\u003E";
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

},{"pug-runtime":4}],15:[function(require,module,exports){
const router = require("./router.js");
const templates = require("./templates");

module.exports.disabled = function () {
	document.getElementById('toolbar-search').style.display = 'none';
	document.getElementById('toolbar').style.display = 'flex';
	document.getElementById('navicon').style.display = 'block';
	document.getElementById('navicon').style.visibility = 'hidden';
	document.getElementById('backicon').style.display = 'none';
	document.getElementById('searchicon').style.display = 'none';
};

module.exports.showDrawer = function () {
	document.getElementById('toolbaractions').innerText = '';
	document.getElementById('toolbar-search').style.display = 'none';
	document.getElementById('toolbar').style.display = 'flex';
	document.getElementById('searchicon').style.display = 'block';
	document.getElementById('navicon').style.display = 'block';
	document.getElementById('navicon').style.visibility = 'visible';
	document.getElementById('backicon').style.display = 'none';
};

module.exports.showBack = function () {
	document.getElementById('toolbaractions').innerText = '';
	document.getElementById('toolbartitle').innerText = 'Databox';
	document.getElementById('toolbar-search').style.display = 'none';
	document.getElementById('toolbar').style.display = 'flex';
	document.getElementById('searchicon').style.display = 'block';
	document.getElementById('navicon').style.display = 'none';
	document.getElementById('navicon').style.visibility = 'visible';
	document.getElementById('backicon').style.display = 'block';
};

module.exports.showSpinner = function (cancel) {
	document.getElementById('content').innerHTML = templates.spinner();
	if (cancel) {
		const button = document.getElementById('cancel_button');
		button.style.display = 'block';
		button.addEventListener('click', cancel);
	}
};

const toolbar = mdc.toolbar.MDCToolbar.attachTo(document.querySelector('.mdc-toolbar'));
toolbar.fixedAdjustElement = document.querySelector('.mdc-toolbar-fixed-adjust');


const drawer = new mdc.drawer.MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.getElementById('navicon').addEventListener('click', () => drawer.open = true);
document.getElementById('backicon').addEventListener('click', () => window.history.back());
document.getElementById('searchbackicon').addEventListener('click', () => window.history.back());

router.hooks({
	before: (done, params) => {
		if (drawer) {
			drawer.open = false;
		}
		done();
	},
	after: (params) => {
		let navItems = document.getElementById('nav').getElementsByTagName('a');
		for (const navItem of navItems) {
			if (location.href.endsWith(navItem.href)) {
				navItem.classList.add('mdc-list-item--activated');
				const nodes = Array.from(navItem.childNodes).filter(f => f.nodeName === '#text');
				document.getElementById('toolbartitle').innerText = nodes.length ? nodes[0].textContent.trim() : '';
			} else {
				navItem.classList.remove('mdc-list-item--activated');
			}
		}
		mdc.autoInit();
	}
});
},{"./router.js":11,"./templates":14}]},{},[5]);
