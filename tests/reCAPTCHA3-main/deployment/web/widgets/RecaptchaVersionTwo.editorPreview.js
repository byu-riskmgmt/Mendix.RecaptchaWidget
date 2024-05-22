'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
	if (e && e.__esModule) return e;
	var n = Object.create(null);
	if (e) {
		Object.keys(e).forEach(function (k) {
			if (k !== 'default') {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	}
	n["default"] = e;
	return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') {
    return;
  }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".RecaptchaVersionTwo-preview {\r\n    position: relative;\r\n    width: 300px;\r\n    height: 74px;\r\n    background: #f9f9f9;\r\n    color: #000;\r\n    border: 1px solid #d3d3d3;\r\n    box-shadow: 0 0 4px 1px rgba(0, 0, 0, .08);\r\n}\r\n\r\n.RecaptchaVersionTwo-preview-box {\r\n    position: absolute;\r\n    top: 23px;\r\n    left: 15px;\r\n    height: 24px;\r\n    width: 24px;\r\n    background: white;\r\n    border: 2px solid #c1c1c1 !important;\r\n}\r\n\r\n.RecaptchaVersionTwo-preview-text {\r\n    position: absolute;\r\n    top: 25px;\r\n    left: 50px;\r\n    font-size: 14px;\r\n}\r\n\r\n.RecaptchaVersionTwo-preview-logo {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 25px;\r\n    background: url(https://www.gstatic.com/recaptcha/api2/logo_48.png);\r\n    background-repeat: no-repeat;\r\n    background-size: 32px;\r\n    height: 32px;\r\n    width: 32px;\r\n}\r\n\r\n.RecaptchaVersionTwo-preview-credits {\r\n    position: absolute;\r\n    top: 42px;\r\n    right: 5px;\r\n    width: 75px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.RecaptchaVersionTwo-preview-credits p {\r\n    position: block;\r\n    padding: 0;\r\n}\r\n\r\n.RecaptchaVersionTwo-preview-credits-sub {\r\n    margin-top: -12px;\r\n    font-size: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlY2FwdGNoYVZlcnNpb25Ud28uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLG1FQUFtRTtJQUNuRSw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJSZWNhcHRjaGFWZXJzaW9uVHdvLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5SZWNhcHRjaGFWZXJzaW9uVHdvLXByZXZpZXcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgLjA4KTtcclxufVxyXG5cclxuLlJlY2FwdGNoYVZlcnNpb25Ud28tcHJldmlldy1ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyM3B4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzFjMWMxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5SZWNhcHRjaGFWZXJzaW9uVHdvLXByZXZpZXctdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uUmVjYXB0Y2hhVmVyc2lvblR3by1wcmV2aWV3LWxvZ28ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy5nc3RhdGljLmNvbS9yZWNhcHRjaGEvYXBpMi9sb2dvXzQ4LnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbn1cclxuXHJcbi5SZWNhcHRjaGFWZXJzaW9uVHdvLXByZXZpZXctY3JlZGl0cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQycHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5SZWNhcHRjaGFWZXJzaW9uVHdvLXByZXZpZXctY3JlZGl0cyBwIHtcclxuICAgIHBvc2l0aW9uOiBibG9jaztcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5SZWNhcHRjaGFWZXJzaW9uVHdvLXByZXZpZXctY3JlZGl0cy1zdWIge1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxufSJdfQ== */";
var stylesheet=".RecaptchaVersionTwo-preview {\r\n    position: relative;\r\n    width: 300px;\r\n    height: 74px;\r\n    background: #f9f9f9;\r\n    color: #000;\r\n    border: 1px solid #d3d3d3;\r\n    box-shadow: 0 0 4px 1px rgba(0, 0, 0, .08);\r\n}\r\n\r\n.RecaptchaVersionTwo-preview-box {\r\n    position: absolute;\r\n    top: 23px;\r\n    left: 15px;\r\n    height: 24px;\r\n    width: 24px;\r\n    background: white;\r\n    border: 2px solid #c1c1c1 !important;\r\n}\r\n\r\n.RecaptchaVersionTwo-preview-text {\r\n    position: absolute;\r\n    top: 25px;\r\n    left: 50px;\r\n    font-size: 14px;\r\n}\r\n\r\n.RecaptchaVersionTwo-preview-logo {\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 25px;\r\n    background: url(https://www.gstatic.com/recaptcha/api2/logo_48.png);\r\n    background-repeat: no-repeat;\r\n    background-size: 32px;\r\n    height: 32px;\r\n    width: 32px;\r\n}\r\n\r\n.RecaptchaVersionTwo-preview-credits {\r\n    position: absolute;\r\n    top: 42px;\r\n    right: 5px;\r\n    width: 75px;\r\n    font-size: 10px;\r\n    text-align: center;\r\n}\r\n\r\n.RecaptchaVersionTwo-preview-credits p {\r\n    position: block;\r\n    padding: 0;\r\n}\r\n\r\n.RecaptchaVersionTwo-preview-credits-sub {\r\n    margin-top: -12px;\r\n    font-size: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlJlY2FwdGNoYVZlcnNpb25Ud28uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLG1FQUFtRTtJQUNuRSw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJSZWNhcHRjaGFWZXJzaW9uVHdvLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5SZWNhcHRjaGFWZXJzaW9uVHdvLXByZXZpZXcge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA3NHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y5ZjlmOTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2QzZDNkMztcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgLjA4KTtcclxufVxyXG5cclxuLlJlY2FwdGNoYVZlcnNpb25Ud28tcHJldmlldy1ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyM3B4O1xyXG4gICAgbGVmdDogMTVweDtcclxuICAgIGhlaWdodDogMjRweDtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYzFjMWMxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5SZWNhcHRjaGFWZXJzaW9uVHdvLXByZXZpZXctdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI1cHg7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uUmVjYXB0Y2hhVmVyc2lvblR3by1wcmV2aWV3LWxvZ28ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4cHg7XHJcbiAgICByaWdodDogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3d3dy5nc3RhdGljLmNvbS9yZWNhcHRjaGEvYXBpMi9sb2dvXzQ4LnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbn1cclxuXHJcbi5SZWNhcHRjaGFWZXJzaW9uVHdvLXByZXZpZXctY3JlZGl0cyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQycHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDc1cHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5SZWNhcHRjaGFWZXJzaW9uVHdvLXByZXZpZXctY3JlZGl0cyBwIHtcclxuICAgIHBvc2l0aW9uOiBibG9jaztcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5SZWNhcHRjaGFWZXJzaW9uVHdvLXByZXZpZXctY3JlZGl0cy1zdWIge1xyXG4gICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxufSJdfQ== */";
styleInject(css_248z);

var RecaptchaVersionTwo = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': css_248z,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(RecaptchaVersionTwo);

var propTypes = {exports: {}};

var reactIs$1 = {exports: {}};

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactIs_development;

function requireReactIs_development () {
	if (hasRequiredReactIs_development) return reactIs_development;
	hasRequiredReactIs_development = 1;

	{
	  (function () {

	    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
	    // nor polyfill, then a plain number is used for performance.
	    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
	    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
	    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
	    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
	    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
	    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
	    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
	    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
	    // (unstable) APIs that have been removed. Can we remove the symbols?

	    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
	    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
	    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
	    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
	    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
	    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
	    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
	    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
	    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
	    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
	    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
	    function isValidElementType(type) {
	      return typeof type === 'string' || typeof type === 'function' ||
	      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
	      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
	    }
	    function typeOf(object) {
	      if (typeof object === 'object' && object !== null) {
	        var $$typeof = object.$$typeof;
	        switch ($$typeof) {
	          case REACT_ELEMENT_TYPE:
	            var type = object.type;
	            switch (type) {
	              case REACT_ASYNC_MODE_TYPE:
	              case REACT_CONCURRENT_MODE_TYPE:
	              case REACT_FRAGMENT_TYPE:
	              case REACT_PROFILER_TYPE:
	              case REACT_STRICT_MODE_TYPE:
	              case REACT_SUSPENSE_TYPE:
	                return type;
	              default:
	                var $$typeofType = type && type.$$typeof;
	                switch ($$typeofType) {
	                  case REACT_CONTEXT_TYPE:
	                  case REACT_FORWARD_REF_TYPE:
	                  case REACT_LAZY_TYPE:
	                  case REACT_MEMO_TYPE:
	                  case REACT_PROVIDER_TYPE:
	                    return $$typeofType;
	                  default:
	                    return $$typeof;
	                }
	            }
	          case REACT_PORTAL_TYPE:
	            return $$typeof;
	        }
	      }
	      return undefined;
	    } // AsyncMode is deprecated along with isAsyncMode

	    var AsyncMode = REACT_ASYNC_MODE_TYPE;
	    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
	    var ContextConsumer = REACT_CONTEXT_TYPE;
	    var ContextProvider = REACT_PROVIDER_TYPE;
	    var Element = REACT_ELEMENT_TYPE;
	    var ForwardRef = REACT_FORWARD_REF_TYPE;
	    var Fragment = REACT_FRAGMENT_TYPE;
	    var Lazy = REACT_LAZY_TYPE;
	    var Memo = REACT_MEMO_TYPE;
	    var Portal = REACT_PORTAL_TYPE;
	    var Profiler = REACT_PROFILER_TYPE;
	    var StrictMode = REACT_STRICT_MODE_TYPE;
	    var Suspense = REACT_SUSPENSE_TYPE;
	    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

	    function isAsyncMode(object) {
	      {
	        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
	          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

	          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
	        }
	      }
	      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
	    }
	    function isConcurrentMode(object) {
	      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
	    }
	    function isContextConsumer(object) {
	      return typeOf(object) === REACT_CONTEXT_TYPE;
	    }
	    function isContextProvider(object) {
	      return typeOf(object) === REACT_PROVIDER_TYPE;
	    }
	    function isElement(object) {
	      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	    }
	    function isForwardRef(object) {
	      return typeOf(object) === REACT_FORWARD_REF_TYPE;
	    }
	    function isFragment(object) {
	      return typeOf(object) === REACT_FRAGMENT_TYPE;
	    }
	    function isLazy(object) {
	      return typeOf(object) === REACT_LAZY_TYPE;
	    }
	    function isMemo(object) {
	      return typeOf(object) === REACT_MEMO_TYPE;
	    }
	    function isPortal(object) {
	      return typeOf(object) === REACT_PORTAL_TYPE;
	    }
	    function isProfiler(object) {
	      return typeOf(object) === REACT_PROFILER_TYPE;
	    }
	    function isStrictMode(object) {
	      return typeOf(object) === REACT_STRICT_MODE_TYPE;
	    }
	    function isSuspense(object) {
	      return typeOf(object) === REACT_SUSPENSE_TYPE;
	    }
	    reactIs_development.AsyncMode = AsyncMode;
	    reactIs_development.ConcurrentMode = ConcurrentMode;
	    reactIs_development.ContextConsumer = ContextConsumer;
	    reactIs_development.ContextProvider = ContextProvider;
	    reactIs_development.Element = Element;
	    reactIs_development.ForwardRef = ForwardRef;
	    reactIs_development.Fragment = Fragment;
	    reactIs_development.Lazy = Lazy;
	    reactIs_development.Memo = Memo;
	    reactIs_development.Portal = Portal;
	    reactIs_development.Profiler = Profiler;
	    reactIs_development.StrictMode = StrictMode;
	    reactIs_development.Suspense = Suspense;
	    reactIs_development.isAsyncMode = isAsyncMode;
	    reactIs_development.isConcurrentMode = isConcurrentMode;
	    reactIs_development.isContextConsumer = isContextConsumer;
	    reactIs_development.isContextProvider = isContextProvider;
	    reactIs_development.isElement = isElement;
	    reactIs_development.isForwardRef = isForwardRef;
	    reactIs_development.isFragment = isFragment;
	    reactIs_development.isLazy = isLazy;
	    reactIs_development.isMemo = isMemo;
	    reactIs_development.isPortal = isPortal;
	    reactIs_development.isProfiler = isProfiler;
	    reactIs_development.isStrictMode = isStrictMode;
	    reactIs_development.isSuspense = isSuspense;
	    reactIs_development.isValidElementType = isValidElementType;
	    reactIs_development.typeOf = typeOf;
	  })();
	}
	return reactIs_development;
}

var hasRequiredReactIs;

function requireReactIs () {
	if (hasRequiredReactIs) return reactIs$1.exports;
	hasRequiredReactIs = 1;
	(function (module) {

		{
		  module.exports = requireReactIs_development();
		}
} (reactIs$1));
	return reactIs$1.exports;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

var objectAssign;
var hasRequiredObjectAssign;

function requireObjectAssign () {
	if (hasRequiredObjectAssign) return objectAssign;
	hasRequiredObjectAssign = 1;

	/* eslint-disable no-unused-vars */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	function toObject(val) {
	  if (val === null || val === undefined) {
	    throw new TypeError('Object.assign cannot be called with null or undefined');
	  }
	  return Object(val);
	}
	function shouldUseNative() {
	  try {
	    if (!Object.assign) {
	      return false;
	    }

	    // Detect buggy property enumeration order in older V8 versions.

	    // https://bugs.chromium.org/p/v8/issues/detail?id=4118
	    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
	    test1[5] = 'de';
	    if (Object.getOwnPropertyNames(test1)[0] === '5') {
	      return false;
	    }

	    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	    var test2 = {};
	    for (var i = 0; i < 10; i++) {
	      test2['_' + String.fromCharCode(i)] = i;
	    }
	    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
	      return test2[n];
	    });
	    if (order2.join('') !== '0123456789') {
	      return false;
	    }

	    // https://bugs.chromium.org/p/v8/issues/detail?id=3056
	    var test3 = {};
	    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
	      test3[letter] = letter;
	    });
	    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
	      return false;
	    }
	    return true;
	  } catch (err) {
	    // We don't expect any of the above to throw, but better to be safe.
	    return false;
	  }
	}
	objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	  var from;
	  var to = toObject(target);
	  var symbols;
	  for (var s = 1; s < arguments.length; s++) {
	    from = Object(arguments[s]);
	    for (var key in from) {
	      if (hasOwnProperty.call(from, key)) {
	        to[key] = from[key];
	      }
	    }
	    if (getOwnPropertySymbols) {
	      symbols = getOwnPropertySymbols(from);
	      for (var i = 0; i < symbols.length; i++) {
	        if (propIsEnumerable.call(from, symbols[i])) {
	          to[symbols[i]] = from[symbols[i]];
	        }
	      }
	    }
	  }
	  return to;
	};
	return objectAssign;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret_1;
var hasRequiredReactPropTypesSecret;

function requireReactPropTypesSecret () {
	if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
	hasRequiredReactPropTypesSecret = 1;

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
	ReactPropTypesSecret_1 = ReactPropTypesSecret;
	return ReactPropTypesSecret_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var checkPropTypes_1;
var hasRequiredCheckPropTypes;

function requireCheckPropTypes () {
	if (hasRequiredCheckPropTypes) return checkPropTypes_1;
	hasRequiredCheckPropTypes = 1;

	var printWarning = function () {};
	{
	  var ReactPropTypesSecret = requireReactPropTypesSecret();
	  var loggedTypeFailures = {};
	  var has = Function.call.bind(Object.prototype.hasOwnProperty);
	  printWarning = function (text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}

	/**
	 * Assert that the values match with the type specs.
	 * Error messages are memorized and will only be shown once.
	 *
	 * @param {object} typeSpecs Map of name to a ReactPropType
	 * @param {object} values Runtime values that need to be type-checked
	 * @param {string} location e.g. "prop", "context", "child context"
	 * @param {string} componentName Name of the component for error messages.
	 * @param {?Function} getStack Returns the component stack.
	 * @private
	 */
	function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
	  {
	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error;
	        // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.
	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }
	          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
	        } catch (ex) {
	          error = ex;
	        }
	        if (error && !(error instanceof Error)) {
	          printWarning((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
	        }
	        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error.message] = true;
	          var stack = getStack ? getStack() : '';
	          printWarning('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
	        }
	      }
	    }
	  }
	}

	/**
	 * Resets warning cache when testing.
	 *
	 * @private
	 */
	checkPropTypes.resetWarningCache = function () {
	  {
	    loggedTypeFailures = {};
	  }
	};
	checkPropTypes_1 = checkPropTypes;
	return checkPropTypes_1;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var factoryWithTypeCheckers;
var hasRequiredFactoryWithTypeCheckers;

function requireFactoryWithTypeCheckers () {
	if (hasRequiredFactoryWithTypeCheckers) return factoryWithTypeCheckers;
	hasRequiredFactoryWithTypeCheckers = 1;

	var ReactIs = requireReactIs();
	var assign = requireObjectAssign();
	var ReactPropTypesSecret = requireReactPropTypesSecret();
	var checkPropTypes = requireCheckPropTypes();
	var has = Function.call.bind(Object.prototype.hasOwnProperty);
	var printWarning = function () {};
	{
	  printWarning = function (text) {
	    var message = 'Warning: ' + text;
	    if (typeof console !== 'undefined') {
	      console.error(message);
	    }
	    try {
	      // --- Welcome to debugging React ---
	      // This error was thrown as a convenience so that you can use this stack
	      // to find the callsite that caused this warning to fire.
	      throw new Error(message);
	    } catch (x) {}
	  };
	}
	function emptyFunctionThatReturnsNull() {
	  return null;
	}
	factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
	  /* global Symbol */
	  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
	  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

	  /**
	   * Returns the iterator method function contained on the iterable object.
	   *
	   * Be sure to invoke the function with the iterable as context:
	   *
	   *     var iteratorFn = getIteratorFn(myIterable);
	   *     if (iteratorFn) {
	   *       var iterator = iteratorFn.call(myIterable);
	   *       ...
	   *     }
	   *
	   * @param {?object} maybeIterable
	   * @return {?function}
	   */
	  function getIteratorFn(maybeIterable) {
	    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
	    if (typeof iteratorFn === 'function') {
	      return iteratorFn;
	    }
	  }

	  /**
	   * Collection of methods that allow declaration and validation of props that are
	   * supplied to React components. Example usage:
	   *
	   *   var Props = require('ReactPropTypes');
	   *   var MyArticle = React.createClass({
	   *     propTypes: {
	   *       // An optional string prop named "description".
	   *       description: Props.string,
	   *
	   *       // A required enum prop named "category".
	   *       category: Props.oneOf(['News','Photos']).isRequired,
	   *
	   *       // A prop named "dialog" that requires an instance of Dialog.
	   *       dialog: Props.instanceOf(Dialog).isRequired
	   *     },
	   *     render: function() { ... }
	   *   });
	   *
	   * A more formal specification of how these methods are used:
	   *
	   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
	   *   decl := ReactPropTypes.{type}(.isRequired)?
	   *
	   * Each and every declaration produces a function with the same signature. This
	   * allows the creation of custom validation functions. For example:
	   *
	   *  var MyLink = React.createClass({
	   *    propTypes: {
	   *      // An optional string or URI prop named "href".
	   *      href: function(props, propName, componentName) {
	   *        var propValue = props[propName];
	   *        if (propValue != null && typeof propValue !== 'string' &&
	   *            !(propValue instanceof URI)) {
	   *          return new Error(
	   *            'Expected a string or an URI for ' + propName + ' in ' +
	   *            componentName
	   *          );
	   *        }
	   *      }
	   *    },
	   *    render: function() {...}
	   *  });
	   *
	   * @internal
	   */

	  var ANONYMOUS = '<<anonymous>>';

	  // Important!
	  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
	  var ReactPropTypes = {
	    array: createPrimitiveTypeChecker('array'),
	    bool: createPrimitiveTypeChecker('boolean'),
	    func: createPrimitiveTypeChecker('function'),
	    number: createPrimitiveTypeChecker('number'),
	    object: createPrimitiveTypeChecker('object'),
	    string: createPrimitiveTypeChecker('string'),
	    symbol: createPrimitiveTypeChecker('symbol'),
	    any: createAnyTypeChecker(),
	    arrayOf: createArrayOfTypeChecker,
	    element: createElementTypeChecker(),
	    elementType: createElementTypeTypeChecker(),
	    instanceOf: createInstanceTypeChecker,
	    node: createNodeChecker(),
	    objectOf: createObjectOfTypeChecker,
	    oneOf: createEnumTypeChecker,
	    oneOfType: createUnionTypeChecker,
	    shape: createShapeTypeChecker,
	    exact: createStrictShapeTypeChecker
	  };

	  /**
	   * inlined Object.is polyfill to avoid requiring consumers ship their own
	   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	   */
	  /*eslint-disable no-self-compare*/
	  function is(x, y) {
	    // SameValue algorithm
	    if (x === y) {
	      // Steps 1-5, 7-10
	      // Steps 6.b-6.e: +0 != -0
	      return x !== 0 || 1 / x === 1 / y;
	    } else {
	      // Step 6.a: NaN == NaN
	      return x !== x && y !== y;
	    }
	  }
	  /*eslint-enable no-self-compare*/

	  /**
	   * We use an Error-like object for backward compatibility as people may call
	   * PropTypes directly and inspect their output. However, we don't use real
	   * Errors anymore. We don't inspect their stack anyway, and creating them
	   * is prohibitively expensive if they are created too often, such as what
	   * happens in oneOfType() for any type before the one that matched.
	   */
	  function PropTypeError(message) {
	    this.message = message;
	    this.stack = '';
	  }
	  // Make `instanceof Error` still work for returned errors.
	  PropTypeError.prototype = Error.prototype;
	  function createChainableTypeChecker(validate) {
	    {
	      var manualPropTypeCallCache = {};
	      var manualPropTypeWarningCount = 0;
	    }
	    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
	      componentName = componentName || ANONYMOUS;
	      propFullName = propFullName || propName;
	      if (secret !== ReactPropTypesSecret) {
	        if (throwOnDirectAccess) {
	          // New behavior only for users of `prop-types` package
	          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
	          err.name = 'Invariant Violation';
	          throw err;
	        } else if (typeof console !== 'undefined') {
	          // Old behavior for people using React.PropTypes
	          var cacheKey = componentName + ':' + propName;
	          if (!manualPropTypeCallCache[cacheKey] &&
	          // Avoid spamming the console because they are often not actionable except for lib authors
	          manualPropTypeWarningCount < 3) {
	            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
	            manualPropTypeCallCache[cacheKey] = true;
	            manualPropTypeWarningCount++;
	          }
	        }
	      }
	      if (props[propName] == null) {
	        if (isRequired) {
	          if (props[propName] === null) {
	            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
	          }
	          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
	        }
	        return null;
	      } else {
	        return validate(props, propName, componentName, location, propFullName);
	      }
	    }
	    var chainedCheckType = checkType.bind(null, false);
	    chainedCheckType.isRequired = checkType.bind(null, true);
	    return chainedCheckType;
	  }
	  function createPrimitiveTypeChecker(expectedType) {
	    function validate(props, propName, componentName, location, propFullName, secret) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== expectedType) {
	        // `propValue` being instance of, say, date/regexp, pass the 'object'
	        // check, but we can offer a more precise error message here rather than
	        // 'of type `object`'.
	        var preciseType = getPreciseType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createAnyTypeChecker() {
	    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
	  }
	  function createArrayOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
	      }
	      var propValue = props[propName];
	      if (!Array.isArray(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
	      }
	      for (var i = 0; i < propValue.length; i++) {
	        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
	        if (error instanceof Error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createElementTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!isValidElement(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createElementTypeTypeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      if (!ReactIs.isValidElementType(propValue)) {
	        var propType = getPropType(propValue);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createInstanceTypeChecker(expectedClass) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!(props[propName] instanceof expectedClass)) {
	        var expectedClassName = expectedClass.name || ANONYMOUS;
	        var actualClassName = getClassName(props[propName]);
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createEnumTypeChecker(expectedValues) {
	    if (!Array.isArray(expectedValues)) {
	      {
	        if (arguments.length > 1) {
	          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
	        } else {
	          printWarning('Invalid argument supplied to oneOf, expected an array.');
	        }
	      }
	      return emptyFunctionThatReturnsNull;
	    }
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      for (var i = 0; i < expectedValues.length; i++) {
	        if (is(propValue, expectedValues[i])) {
	          return null;
	        }
	      }
	      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
	        var type = getPreciseType(value);
	        if (type === 'symbol') {
	          return String(value);
	        }
	        return value;
	      });
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createObjectOfTypeChecker(typeChecker) {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (typeof typeChecker !== 'function') {
	        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
	      }
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
	      }
	      for (var key in propValue) {
	        if (has(propValue, key)) {
	          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	          if (error instanceof Error) {
	            return error;
	          }
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createUnionTypeChecker(arrayOfTypeCheckers) {
	    if (!Array.isArray(arrayOfTypeCheckers)) {
	      printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
	      return emptyFunctionThatReturnsNull;
	    }
	    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	      var checker = arrayOfTypeCheckers[i];
	      if (typeof checker !== 'function') {
	        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
	        return emptyFunctionThatReturnsNull;
	      }
	    }
	    function validate(props, propName, componentName, location, propFullName) {
	      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
	        var checker = arrayOfTypeCheckers[i];
	        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
	          return null;
	        }
	      }
	      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createNodeChecker() {
	    function validate(props, propName, componentName, location, propFullName) {
	      if (!isNode(props[propName])) {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      for (var key in shapeTypes) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          continue;
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function createStrictShapeTypeChecker(shapeTypes) {
	    function validate(props, propName, componentName, location, propFullName) {
	      var propValue = props[propName];
	      var propType = getPropType(propValue);
	      if (propType !== 'object') {
	        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
	      }
	      // We need to check all keys in case some are required but missing from
	      // props.
	      var allKeys = assign({}, props[propName], shapeTypes);
	      for (var key in allKeys) {
	        var checker = shapeTypes[key];
	        if (!checker) {
	          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
	        }
	        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
	        if (error) {
	          return error;
	        }
	      }
	      return null;
	    }
	    return createChainableTypeChecker(validate);
	  }
	  function isNode(propValue) {
	    switch (typeof propValue) {
	      case 'number':
	      case 'string':
	      case 'undefined':
	        return true;
	      case 'boolean':
	        return !propValue;
	      case 'object':
	        if (Array.isArray(propValue)) {
	          return propValue.every(isNode);
	        }
	        if (propValue === null || isValidElement(propValue)) {
	          return true;
	        }
	        var iteratorFn = getIteratorFn(propValue);
	        if (iteratorFn) {
	          var iterator = iteratorFn.call(propValue);
	          var step;
	          if (iteratorFn !== propValue.entries) {
	            while (!(step = iterator.next()).done) {
	              if (!isNode(step.value)) {
	                return false;
	              }
	            }
	          } else {
	            // Iterator will provide entry [k,v] tuples rather than values.
	            while (!(step = iterator.next()).done) {
	              var entry = step.value;
	              if (entry) {
	                if (!isNode(entry[1])) {
	                  return false;
	                }
	              }
	            }
	          }
	        } else {
	          return false;
	        }
	        return true;
	      default:
	        return false;
	    }
	  }
	  function isSymbol(propType, propValue) {
	    // Native Symbol.
	    if (propType === 'symbol') {
	      return true;
	    }

	    // falsy value can't be a Symbol
	    if (!propValue) {
	      return false;
	    }

	    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
	    if (propValue['@@toStringTag'] === 'Symbol') {
	      return true;
	    }

	    // Fallback for non-spec compliant Symbols which are polyfilled.
	    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
	      return true;
	    }
	    return false;
	  }

	  // Equivalent of `typeof` but with special handling for array and regexp.
	  function getPropType(propValue) {
	    var propType = typeof propValue;
	    if (Array.isArray(propValue)) {
	      return 'array';
	    }
	    if (propValue instanceof RegExp) {
	      // Old webkits (at least until Android 4.0) return 'function' rather than
	      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
	      // passes PropTypes.object.
	      return 'object';
	    }
	    if (isSymbol(propType, propValue)) {
	      return 'symbol';
	    }
	    return propType;
	  }

	  // This handles more types than `getPropType`. Only used for error messages.
	  // See `createPrimitiveTypeChecker`.
	  function getPreciseType(propValue) {
	    if (typeof propValue === 'undefined' || propValue === null) {
	      return '' + propValue;
	    }
	    var propType = getPropType(propValue);
	    if (propType === 'object') {
	      if (propValue instanceof Date) {
	        return 'date';
	      } else if (propValue instanceof RegExp) {
	        return 'regexp';
	      }
	    }
	    return propType;
	  }

	  // Returns a string that is postfixed to a warning about an invalid type.
	  // For example, "undefined" or "of type array"
	  function getPostfixForTypeWarning(value) {
	    var type = getPreciseType(value);
	    switch (type) {
	      case 'array':
	      case 'object':
	        return 'an ' + type;
	      case 'boolean':
	      case 'date':
	      case 'regexp':
	        return 'a ' + type;
	      default:
	        return type;
	    }
	  }

	  // Returns class name of the object, if any.
	  function getClassName(propValue) {
	    if (!propValue.constructor || !propValue.constructor.name) {
	      return ANONYMOUS;
	    }
	    return propValue.constructor.name;
	  }
	  ReactPropTypes.checkPropTypes = checkPropTypes;
	  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
	  ReactPropTypes.PropTypes = ReactPropTypes;
	  return ReactPropTypes;
	};
	return factoryWithTypeCheckers;
}

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  var ReactIs = requireReactIs();

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = requireFactoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
}

var _excluded = ["sitekey", "onChange", "theme", "type", "tabindex", "onExpired", "onErrored", "size", "stoken", "grecaptcha", "badge", "hl", "isolated"];
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inheritsLoose$1(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
var ReCAPTCHA = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose$1(ReCAPTCHA, _React$Component);
  function ReCAPTCHA() {
    var _this;
    _this = _React$Component.call(this) || this;
    _this.handleExpired = _this.handleExpired.bind(_assertThisInitialized(_this));
    _this.handleErrored = _this.handleErrored.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleRecaptchaRef = _this.handleRecaptchaRef.bind(_assertThisInitialized(_this));
    return _this;
  }
  var _proto = ReCAPTCHA.prototype;
  _proto.getCaptchaFunction = function getCaptchaFunction(fnName) {
    if (this.props.grecaptcha) {
      if (this.props.grecaptcha.enterprise) {
        return this.props.grecaptcha.enterprise[fnName];
      }
      return this.props.grecaptcha[fnName];
    }
    return null;
  };
  _proto.getValue = function getValue() {
    var getResponse = this.getCaptchaFunction("getResponse");
    if (getResponse && this._widgetId !== undefined) {
      return getResponse(this._widgetId);
    }
    return null;
  };
  _proto.getWidgetId = function getWidgetId() {
    if (this.props.grecaptcha && this._widgetId !== undefined) {
      return this._widgetId;
    }
    return null;
  };
  _proto.execute = function execute() {
    var execute = this.getCaptchaFunction("execute");
    if (execute && this._widgetId !== undefined) {
      return execute(this._widgetId);
    } else {
      this._executeRequested = true;
    }
  };
  _proto.executeAsync = function executeAsync() {
    var _this2 = this;
    return new Promise(function (resolve, reject) {
      _this2.executionResolve = resolve;
      _this2.executionReject = reject;
      _this2.execute();
    });
  };
  _proto.reset = function reset() {
    var resetter = this.getCaptchaFunction("reset");
    if (resetter && this._widgetId !== undefined) {
      resetter(this._widgetId);
    }
  };
  _proto.forceReset = function forceReset() {
    var resetter = this.getCaptchaFunction("reset");
    if (resetter) {
      resetter();
    }
  };
  _proto.handleExpired = function handleExpired() {
    if (this.props.onExpired) {
      this.props.onExpired();
    } else {
      this.handleChange(null);
    }
  };
  _proto.handleErrored = function handleErrored() {
    if (this.props.onErrored) {
      this.props.onErrored();
    }
    if (this.executionReject) {
      this.executionReject();
      delete this.executionResolve;
      delete this.executionReject;
    }
  };
  _proto.handleChange = function handleChange(token) {
    if (this.props.onChange) {
      this.props.onChange(token);
    }
    if (this.executionResolve) {
      this.executionResolve(token);
      delete this.executionReject;
      delete this.executionResolve;
    }
  };
  _proto.explicitRender = function explicitRender() {
    var render = this.getCaptchaFunction("render");
    if (render && this._widgetId === undefined) {
      var wrapper = document.createElement("div");
      this._widgetId = render(wrapper, {
        sitekey: this.props.sitekey,
        callback: this.handleChange,
        theme: this.props.theme,
        type: this.props.type,
        tabindex: this.props.tabindex,
        "expired-callback": this.handleExpired,
        "error-callback": this.handleErrored,
        size: this.props.size,
        stoken: this.props.stoken,
        hl: this.props.hl,
        badge: this.props.badge,
        isolated: this.props.isolated
      });
      this.captcha.appendChild(wrapper);
    }
    if (this._executeRequested && this.props.grecaptcha && this._widgetId !== undefined) {
      this._executeRequested = false;
      this.execute();
    }
  };
  _proto.componentDidMount = function componentDidMount() {
    this.explicitRender();
  };
  _proto.componentDidUpdate = function componentDidUpdate() {
    this.explicitRender();
  };
  _proto.handleRecaptchaRef = function handleRecaptchaRef(elem) {
    this.captcha = elem;
  };
  _proto.render = function render() {
    // consume properties owned by the reCATPCHA, pass the rest to the div so the user can style it.
    /* eslint-disable no-unused-vars */
    var _this$props = this.props;
      _this$props.sitekey;
      _this$props.onChange;
      _this$props.theme;
      _this$props.type;
      _this$props.tabindex;
      _this$props.onExpired;
      _this$props.onErrored;
      _this$props.size;
      _this$props.stoken;
      _this$props.grecaptcha;
      _this$props.badge;
      _this$props.hl;
      _this$props.isolated;
      var childProps = _objectWithoutPropertiesLoose$1(_this$props, _excluded);
    /* eslint-enable no-unused-vars */
    return /*#__PURE__*/React__namespace.createElement("div", _extends$1({}, childProps, {
      ref: this.handleRecaptchaRef
    }));
  };
  return ReCAPTCHA;
}(React__namespace.Component);
ReCAPTCHA.displayName = "ReCAPTCHA";
ReCAPTCHA.propTypes = {
  sitekey: propTypes.exports.string.isRequired,
  onChange: propTypes.exports.func,
  grecaptcha: propTypes.exports.object,
  theme: propTypes.exports.oneOf(["dark", "light"]),
  type: propTypes.exports.oneOf(["image", "audio"]),
  tabindex: propTypes.exports.number,
  onExpired: propTypes.exports.func,
  onErrored: propTypes.exports.func,
  size: propTypes.exports.oneOf(["compact", "normal", "invisible"]),
  stoken: propTypes.exports.string,
  hl: propTypes.exports.string,
  badge: propTypes.exports.oneOf(["bottomright", "bottomleft", "inline"]),
  isolated: propTypes.exports.bool
};
ReCAPTCHA.defaultProps = {
  onChange: function onChange() {},
  theme: "light",
  type: "image",
  tabindex: 0,
  size: "normal",
  badge: "bottomright"
};

var reactIs = requireReactIs();

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var SCRIPT_MAP = {}; // A counter used to generate a unique id for each component that uses the function

var idCount = 0;
function makeAsyncScript(getScriptURL, options) {
  options = options || {};
  return function wrapWithAsyncScript(WrappedComponent) {
    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || "Component";
    var AsyncScriptLoader = /*#__PURE__*/
    function (_Component) {
      _inheritsLoose(AsyncScriptLoader, _Component);
      function AsyncScriptLoader(props, context) {
        var _this;
        _this = _Component.call(this, props, context) || this;
        _this.state = {};
        _this.__scriptURL = "";
        return _this;
      }
      var _proto = AsyncScriptLoader.prototype;
      _proto.asyncScriptLoaderGetScriptLoaderID = function asyncScriptLoaderGetScriptLoaderID() {
        if (!this.__scriptLoaderID) {
          this.__scriptLoaderID = "async-script-loader-" + idCount++;
        }
        return this.__scriptLoaderID;
      };
      _proto.setupScriptURL = function setupScriptURL() {
        this.__scriptURL = typeof getScriptURL === "function" ? getScriptURL() : getScriptURL;
        return this.__scriptURL;
      };
      _proto.asyncScriptLoaderHandleLoad = function asyncScriptLoaderHandleLoad(state) {
        var _this2 = this;

        // use reacts setState callback to fire props.asyncScriptOnLoad with new state/entry
        this.setState(state, function () {
          return _this2.props.asyncScriptOnLoad && _this2.props.asyncScriptOnLoad(_this2.state);
        });
      };
      _proto.asyncScriptLoaderTriggerOnScriptLoaded = function asyncScriptLoaderTriggerOnScriptLoaded() {
        var mapEntry = SCRIPT_MAP[this.__scriptURL];
        if (!mapEntry || !mapEntry.loaded) {
          throw new Error("Script is not loaded.");
        }
        for (var obsKey in mapEntry.observers) {
          mapEntry.observers[obsKey](mapEntry);
        }
        delete window[options.callbackName];
      };
      _proto.componentDidMount = function componentDidMount() {
        var _this3 = this;
        var scriptURL = this.setupScriptURL();
        var key = this.asyncScriptLoaderGetScriptLoaderID();
        var _options = options,
          globalName = _options.globalName,
          callbackName = _options.callbackName,
          scriptId = _options.scriptId; // check if global object already attached to window

        if (globalName && typeof window[globalName] !== "undefined") {
          SCRIPT_MAP[scriptURL] = {
            loaded: true,
            observers: {}
          };
        } // check if script loading already

        if (SCRIPT_MAP[scriptURL]) {
          var entry = SCRIPT_MAP[scriptURL]; // if loaded or errored then "finish"

          if (entry && (entry.loaded || entry.errored)) {
            this.asyncScriptLoaderHandleLoad(entry);
            return;
          } // if still loading then callback to observer queue

          entry.observers[key] = function (entry) {
            return _this3.asyncScriptLoaderHandleLoad(entry);
          };
          return;
        }
        /*
         * hasn't started loading
         * start the "magic"
         * setup script to load and observers
         */

        var observers = {};
        observers[key] = function (entry) {
          return _this3.asyncScriptLoaderHandleLoad(entry);
        };
        SCRIPT_MAP[scriptURL] = {
          loaded: false,
          observers: observers
        };
        var script = document.createElement("script");
        script.src = scriptURL;
        script.async = true;
        for (var attribute in options.attributes) {
          script.setAttribute(attribute, options.attributes[attribute]);
        }
        if (scriptId) {
          script.id = scriptId;
        }
        var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(func) {
          if (SCRIPT_MAP[scriptURL]) {
            var mapEntry = SCRIPT_MAP[scriptURL];
            var observersMap = mapEntry.observers;
            for (var obsKey in observersMap) {
              if (func(observersMap[obsKey])) {
                delete observersMap[obsKey];
              }
            }
          }
        };
        if (callbackName && typeof window !== "undefined") {
          window[callbackName] = function () {
            return _this3.asyncScriptLoaderTriggerOnScriptLoaded();
          };
        }
        script.onload = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];
          if (mapEntry) {
            mapEntry.loaded = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              if (callbackName) {
                return false;
              }
              observer(mapEntry);
              return true;
            });
          }
        };
        script.onerror = function () {
          var mapEntry = SCRIPT_MAP[scriptURL];
          if (mapEntry) {
            mapEntry.errored = true;
            callObserverFuncAndRemoveObserver(function (observer) {
              observer(mapEntry);
              return true;
            });
          }
        };
        document.body.appendChild(script);
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        // Remove tag script
        var scriptURL = this.__scriptURL;
        if (options.removeOnUnmount === true) {
          var allScripts = document.getElementsByTagName("script");
          for (var i = 0; i < allScripts.length; i += 1) {
            if (allScripts[i].src.indexOf(scriptURL) > -1) {
              if (allScripts[i].parentNode) {
                allScripts[i].parentNode.removeChild(allScripts[i]);
              }
            }
          }
        } // Clean the observer entry

        var mapEntry = SCRIPT_MAP[scriptURL];
        if (mapEntry) {
          delete mapEntry.observers[this.asyncScriptLoaderGetScriptLoaderID()];
          if (options.removeOnUnmount === true) {
            delete SCRIPT_MAP[scriptURL];
          }
        }
      };
      _proto.render = function render() {
        var globalName = options.globalName; // remove asyncScriptOnLoad from childProps

        var _this$props = this.props;
          _this$props.asyncScriptOnLoad;
          var forwardedRef = _this$props.forwardedRef,
          childProps = _objectWithoutPropertiesLoose(_this$props, ["asyncScriptOnLoad", "forwardedRef"]); // eslint-disable-line no-unused-vars

        if (globalName && typeof window !== "undefined") {
          childProps[globalName] = typeof window[globalName] !== "undefined" ? window[globalName] : undefined;
        }
        childProps.ref = forwardedRef;
        return React.createElement(WrappedComponent, childProps);
      };
      return AsyncScriptLoader;
    }(React.Component); // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to AsyncScriptLoader as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.

    var ForwardedComponent = React.forwardRef(function (props, ref) {
      return React.createElement(AsyncScriptLoader, _extends({}, props, {
        forwardedRef: ref
      }));
    });
    ForwardedComponent.displayName = "AsyncScriptLoader(" + wrappedComponentName + ")";
    ForwardedComponent.propTypes = {
      asyncScriptOnLoad: propTypes.exports.func
    };
    return hoistNonReactStatics_cjs(ForwardedComponent, WrappedComponent);
  };
}

var callbackName = "onloadcallback";
var globalName = "grecaptcha";
function getOptions() {
  return typeof window !== "undefined" && window.recaptchaOptions || {};
}
function getURL() {
  var dynamicOptions = getOptions();
  var hostname = dynamicOptions.useRecaptchaNet ? "recaptcha.net" : "www.google.com";
  if (dynamicOptions.enterprise) {
    return "https://" + hostname + "/recaptcha/enterprise.js?onload=" + callbackName + "&render=explicit";
  }
  return "https://" + hostname + "/recaptcha/api.js?onload=" + callbackName + "&render=explicit";
}
makeAsyncScript(getURL, {
  callbackName: callbackName,
  globalName: globalName,
  attributes: getOptions().nonce ? {
    nonce: getOptions().nonce
  } : {}
})(ReCAPTCHA);

class preview extends React.Component {
  render() {
    return React.createElement("div", {
      class: "RecaptchaVersionTwo-preview"
    }, React.createElement("div", {
      class: "RecaptchaVersionTwo-preview-box"
    }), React.createElement("div", {
      class: "RecaptchaVersionTwo-preview-text"
    }, "I'm not a robot"), React.createElement("div", {
      class: "RecaptchaVersionTwo-preview-logo"
    }), React.createElement("div", {
      class: "RecaptchaVersionTwo-preview-credits"
    }, React.createElement("p", null, "reCAPTCHA"), React.createElement("p", {
      class: "RecaptchaVersionTwo-preview-credits-sub"
    }, "Privacy - Terms")));
  }
}
function getPreviewCSS() {
  return require$$0;
}

exports.getPreviewCSS = getPreviewCSS;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjYXB0Y2hhVmVyc2lvblR3by5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWdvb2dsZS1yZWNhcHRjaGEvbGliL2VzbS9yZWNhcHRjaGEuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYXN5bmMtc2NyaXB0L2xpYi9lc20vYXN5bmMtc2NyaXB0LWxvYWRlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtcmVjYXB0Y2hhL2xpYi9lc20vcmVjYXB0Y2hhLXdyYXBwZXIuanMiLCIuLi8uLi8uLi9zcmMvUmVjYXB0Y2hhVmVyc2lvblR3by5lZGl0b3JQcmV2aWV3LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBzdHlsZUluamVjdChjc3MsIHJlZikge1xuICBpZiAoIHJlZiA9PT0gdm9pZCAwICkgcmVmID0ge307XG4gIHZhciBpbnNlcnRBdCA9IHJlZi5pbnNlcnRBdDtcblxuICBpZiAoIWNzcyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7IHJldHVybjsgfVxuXG4gIHZhciBoZWFkID0gZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcblxuICBpZiAoaW5zZXJ0QXQgPT09ICd0b3AnKSB7XG4gICAgaWYgKGhlYWQuZmlyc3RDaGlsZCkge1xuICAgICAgaGVhZC5pbnNlcnRCZWZvcmUoc3R5bGUsIGhlYWQuZmlyc3RDaGlsZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0eWxlSW5qZWN0O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwidmFyIF9leGNsdWRlZCA9IFtcInNpdGVrZXlcIiwgXCJvbkNoYW5nZVwiLCBcInRoZW1lXCIsIFwidHlwZVwiLCBcInRhYmluZGV4XCIsIFwib25FeHBpcmVkXCIsIFwib25FcnJvcmVkXCIsIFwic2l6ZVwiLCBcInN0b2tlblwiLCBcImdyZWNhcHRjaGFcIiwgXCJiYWRnZVwiLCBcImhsXCIsIFwiaXNvbGF0ZWRcIl07XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG52YXIgUmVDQVBUQ0hBID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFJlQ0FQVENIQSwgX1JlYWN0JENvbXBvbmVudCk7XG4gIGZ1bmN0aW9uIFJlQ0FQVENIQSgpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5oYW5kbGVFeHBpcmVkID0gX3RoaXMuaGFuZGxlRXhwaXJlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVFcnJvcmVkID0gX3RoaXMuaGFuZGxlRXJyb3JlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBfdGhpcy5oYW5kbGVDaGFuZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlUmVjYXB0Y2hhUmVmID0gX3RoaXMuaGFuZGxlUmVjYXB0Y2hhUmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICB2YXIgX3Byb3RvID0gUmVDQVBUQ0hBLnByb3RvdHlwZTtcbiAgX3Byb3RvLmdldENhcHRjaGFGdW5jdGlvbiA9IGZ1bmN0aW9uIGdldENhcHRjaGFGdW5jdGlvbihmbk5hbWUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5ncmVjYXB0Y2hhKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5ncmVjYXB0Y2hhLmVudGVycHJpc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZ3JlY2FwdGNoYS5lbnRlcnByaXNlW2ZuTmFtZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5ncmVjYXB0Y2hhW2ZuTmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBfcHJvdG8uZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICB2YXIgZ2V0UmVzcG9uc2UgPSB0aGlzLmdldENhcHRjaGFGdW5jdGlvbihcImdldFJlc3BvbnNlXCIpO1xuICAgIGlmIChnZXRSZXNwb25zZSAmJiB0aGlzLl93aWRnZXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZ2V0UmVzcG9uc2UodGhpcy5fd2lkZ2V0SWQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgX3Byb3RvLmdldFdpZGdldElkID0gZnVuY3Rpb24gZ2V0V2lkZ2V0SWQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZ3JlY2FwdGNoYSAmJiB0aGlzLl93aWRnZXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2lkZ2V0SWQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBfcHJvdG8uZXhlY3V0ZSA9IGZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gICAgdmFyIGV4ZWN1dGUgPSB0aGlzLmdldENhcHRjaGFGdW5jdGlvbihcImV4ZWN1dGVcIik7XG4gICAgaWYgKGV4ZWN1dGUgJiYgdGhpcy5fd2lkZ2V0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV4ZWN1dGUodGhpcy5fd2lkZ2V0SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9leGVjdXRlUmVxdWVzdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIF9wcm90by5leGVjdXRlQXN5bmMgPSBmdW5jdGlvbiBleGVjdXRlQXN5bmMoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIF90aGlzMi5leGVjdXRpb25SZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIF90aGlzMi5leGVjdXRpb25SZWplY3QgPSByZWplY3Q7XG4gICAgICBfdGhpczIuZXhlY3V0ZSgpO1xuICAgIH0pO1xuICB9O1xuICBfcHJvdG8ucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB2YXIgcmVzZXR0ZXIgPSB0aGlzLmdldENhcHRjaGFGdW5jdGlvbihcInJlc2V0XCIpO1xuICAgIGlmIChyZXNldHRlciAmJiB0aGlzLl93aWRnZXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXNldHRlcih0aGlzLl93aWRnZXRJZCk7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uZm9yY2VSZXNldCA9IGZ1bmN0aW9uIGZvcmNlUmVzZXQoKSB7XG4gICAgdmFyIHJlc2V0dGVyID0gdGhpcy5nZXRDYXB0Y2hhRnVuY3Rpb24oXCJyZXNldFwiKTtcbiAgICBpZiAocmVzZXR0ZXIpIHtcbiAgICAgIHJlc2V0dGVyKCk7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uaGFuZGxlRXhwaXJlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4cGlyZWQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25FeHBpcmVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXhwaXJlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG4gIF9wcm90by5oYW5kbGVFcnJvcmVkID0gZnVuY3Rpb24gaGFuZGxlRXJyb3JlZCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkVycm9yZWQpIHtcbiAgICAgIHRoaXMucHJvcHMub25FcnJvcmVkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmV4ZWN1dGlvblJlamVjdCkge1xuICAgICAgdGhpcy5leGVjdXRpb25SZWplY3QoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmV4ZWN1dGlvblJlc29sdmU7XG4gICAgICBkZWxldGUgdGhpcy5leGVjdXRpb25SZWplY3Q7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHRva2VuKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodG9rZW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5leGVjdXRpb25SZXNvbHZlKSB7XG4gICAgICB0aGlzLmV4ZWN1dGlvblJlc29sdmUodG9rZW4pO1xuICAgICAgZGVsZXRlIHRoaXMuZXhlY3V0aW9uUmVqZWN0O1xuICAgICAgZGVsZXRlIHRoaXMuZXhlY3V0aW9uUmVzb2x2ZTtcbiAgICB9XG4gIH07XG4gIF9wcm90by5leHBsaWNpdFJlbmRlciA9IGZ1bmN0aW9uIGV4cGxpY2l0UmVuZGVyKCkge1xuICAgIHZhciByZW5kZXIgPSB0aGlzLmdldENhcHRjaGFGdW5jdGlvbihcInJlbmRlclwiKTtcbiAgICBpZiAocmVuZGVyICYmIHRoaXMuX3dpZGdldElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRoaXMuX3dpZGdldElkID0gcmVuZGVyKHdyYXBwZXIsIHtcbiAgICAgICAgc2l0ZWtleTogdGhpcy5wcm9wcy5zaXRla2V5LFxuICAgICAgICBjYWxsYmFjazogdGhpcy5oYW5kbGVDaGFuZ2UsXG4gICAgICAgIHRoZW1lOiB0aGlzLnByb3BzLnRoZW1lLFxuICAgICAgICB0eXBlOiB0aGlzLnByb3BzLnR5cGUsXG4gICAgICAgIHRhYmluZGV4OiB0aGlzLnByb3BzLnRhYmluZGV4LFxuICAgICAgICBcImV4cGlyZWQtY2FsbGJhY2tcIjogdGhpcy5oYW5kbGVFeHBpcmVkLFxuICAgICAgICBcImVycm9yLWNhbGxiYWNrXCI6IHRoaXMuaGFuZGxlRXJyb3JlZCxcbiAgICAgICAgc2l6ZTogdGhpcy5wcm9wcy5zaXplLFxuICAgICAgICBzdG9rZW46IHRoaXMucHJvcHMuc3Rva2VuLFxuICAgICAgICBobDogdGhpcy5wcm9wcy5obCxcbiAgICAgICAgYmFkZ2U6IHRoaXMucHJvcHMuYmFkZ2UsXG4gICAgICAgIGlzb2xhdGVkOiB0aGlzLnByb3BzLmlzb2xhdGVkXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2FwdGNoYS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4ZWN1dGVSZXF1ZXN0ZWQgJiYgdGhpcy5wcm9wcy5ncmVjYXB0Y2hhICYmIHRoaXMuX3dpZGdldElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2V4ZWN1dGVSZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfTtcbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5leHBsaWNpdFJlbmRlcigpO1xuICB9O1xuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuZXhwbGljaXRSZW5kZXIoKTtcbiAgfTtcbiAgX3Byb3RvLmhhbmRsZVJlY2FwdGNoYVJlZiA9IGZ1bmN0aW9uIGhhbmRsZVJlY2FwdGNoYVJlZihlbGVtKSB7XG4gICAgdGhpcy5jYXB0Y2hhID0gZWxlbTtcbiAgfTtcbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBjb25zdW1lIHByb3BlcnRpZXMgb3duZWQgYnkgdGhlIHJlQ0FUUENIQSwgcGFzcyB0aGUgcmVzdCB0byB0aGUgZGl2IHNvIHRoZSB1c2VyIGNhbiBzdHlsZSBpdC5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICBzaXRla2V5ID0gX3RoaXMkcHJvcHMuc2l0ZWtleSxcbiAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2UsXG4gICAgICB0aGVtZSA9IF90aGlzJHByb3BzLnRoZW1lLFxuICAgICAgdHlwZSA9IF90aGlzJHByb3BzLnR5cGUsXG4gICAgICB0YWJpbmRleCA9IF90aGlzJHByb3BzLnRhYmluZGV4LFxuICAgICAgb25FeHBpcmVkID0gX3RoaXMkcHJvcHMub25FeHBpcmVkLFxuICAgICAgb25FcnJvcmVkID0gX3RoaXMkcHJvcHMub25FcnJvcmVkLFxuICAgICAgc2l6ZSA9IF90aGlzJHByb3BzLnNpemUsXG4gICAgICBzdG9rZW4gPSBfdGhpcyRwcm9wcy5zdG9rZW4sXG4gICAgICBncmVjYXB0Y2hhID0gX3RoaXMkcHJvcHMuZ3JlY2FwdGNoYSxcbiAgICAgIGJhZGdlID0gX3RoaXMkcHJvcHMuYmFkZ2UsXG4gICAgICBobCA9IF90aGlzJHByb3BzLmhsLFxuICAgICAgaXNvbGF0ZWQgPSBfdGhpcyRwcm9wcy5pc29sYXRlZCxcbiAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBjaGlsZFByb3BzLCB7XG4gICAgICByZWY6IHRoaXMuaGFuZGxlUmVjYXB0Y2hhUmVmXG4gICAgfSkpO1xuICB9O1xuICByZXR1cm4gUmVDQVBUQ0hBO1xufShSZWFjdC5Db21wb25lbnQpO1xuZXhwb3J0IHsgUmVDQVBUQ0hBIGFzIGRlZmF1bHQgfTtcblJlQ0FQVENIQS5kaXNwbGF5TmFtZSA9IFwiUmVDQVBUQ0hBXCI7XG5SZUNBUFRDSEEucHJvcFR5cGVzID0ge1xuICBzaXRla2V5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ3JlY2FwdGNoYTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbXCJkYXJrXCIsIFwibGlnaHRcIl0pLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoW1wiaW1hZ2VcIiwgXCJhdWRpb1wiXSksXG4gIHRhYmluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkV4cGlyZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkVycm9yZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wiY29tcGFjdFwiLCBcIm5vcm1hbFwiLCBcImludmlzaWJsZVwiXSksXG4gIHN0b2tlbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJhZGdlOiBQcm9wVHlwZXMub25lT2YoW1wiYm90dG9tcmlnaHRcIiwgXCJib3R0b21sZWZ0XCIsIFwiaW5saW5lXCJdKSxcbiAgaXNvbGF0ZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuUmVDQVBUQ0hBLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKCkge30sXG4gIHRoZW1lOiBcImxpZ2h0XCIsXG4gIHR5cGU6IFwiaW1hZ2VcIixcbiAgdGFiaW5kZXg6IDAsXG4gIHNpemU6IFwibm9ybWFsXCIsXG4gIGJhZGdlOiBcImJvdHRvbXJpZ2h0XCJcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQsIGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSBcImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCI7XG52YXIgU0NSSVBUX01BUCA9IHt9OyAvLyBBIGNvdW50ZXIgdXNlZCB0byBnZW5lcmF0ZSBhIHVuaXF1ZSBpZCBmb3IgZWFjaCBjb21wb25lbnQgdGhhdCB1c2VzIHRoZSBmdW5jdGlvblxuXG52YXIgaWRDb3VudCA9IDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlQXN5bmNTY3JpcHQoZ2V0U2NyaXB0VVJMLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcFdpdGhBc3luY1NjcmlwdChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgdmFyIHdyYXBwZWRDb21wb25lbnROYW1lID0gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgXCJDb21wb25lbnRcIjtcblxuICAgIHZhciBBc3luY1NjcmlwdExvYWRlciA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShBc3luY1NjcmlwdExvYWRlciwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIEFzeW5jU2NyaXB0TG9hZGVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgX3RoaXMuX19zY3JpcHRVUkwgPSBcIlwiO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBBc3luY1NjcmlwdExvYWRlci5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5hc3luY1NjcmlwdExvYWRlckdldFNjcmlwdExvYWRlcklEID0gZnVuY3Rpb24gYXN5bmNTY3JpcHRMb2FkZXJHZXRTY3JpcHRMb2FkZXJJRCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9fc2NyaXB0TG9hZGVySUQpIHtcbiAgICAgICAgICB0aGlzLl9fc2NyaXB0TG9hZGVySUQgPSBcImFzeW5jLXNjcmlwdC1sb2FkZXItXCIgKyBpZENvdW50Kys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fX3NjcmlwdExvYWRlcklEO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnNldHVwU2NyaXB0VVJMID0gZnVuY3Rpb24gc2V0dXBTY3JpcHRVUkwoKSB7XG4gICAgICAgIHRoaXMuX19zY3JpcHRVUkwgPSB0eXBlb2YgZ2V0U2NyaXB0VVJMID09PSBcImZ1bmN0aW9uXCIgPyBnZXRTY3JpcHRVUkwoKSA6IGdldFNjcmlwdFVSTDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19zY3JpcHRVUkw7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uYXN5bmNTY3JpcHRMb2FkZXJIYW5kbGVMb2FkID0gZnVuY3Rpb24gYXN5bmNTY3JpcHRMb2FkZXJIYW5kbGVMb2FkKHN0YXRlKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIC8vIHVzZSByZWFjdHMgc2V0U3RhdGUgY2FsbGJhY2sgdG8gZmlyZSBwcm9wcy5hc3luY1NjcmlwdE9uTG9hZCB3aXRoIG5ldyBzdGF0ZS9lbnRyeVxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5wcm9wcy5hc3luY1NjcmlwdE9uTG9hZCAmJiBfdGhpczIucHJvcHMuYXN5bmNTY3JpcHRPbkxvYWQoX3RoaXMyLnN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uYXN5bmNTY3JpcHRMb2FkZXJUcmlnZ2VyT25TY3JpcHRMb2FkZWQgPSBmdW5jdGlvbiBhc3luY1NjcmlwdExvYWRlclRyaWdnZXJPblNjcmlwdExvYWRlZCgpIHtcbiAgICAgICAgdmFyIG1hcEVudHJ5ID0gU0NSSVBUX01BUFt0aGlzLl9fc2NyaXB0VVJMXTtcblxuICAgICAgICBpZiAoIW1hcEVudHJ5IHx8ICFtYXBFbnRyeS5sb2FkZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTY3JpcHQgaXMgbm90IGxvYWRlZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBvYnNLZXkgaW4gbWFwRW50cnkub2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgbWFwRW50cnkub2JzZXJ2ZXJzW29ic0tleV0obWFwRW50cnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHdpbmRvd1tvcHRpb25zLmNhbGxiYWNrTmFtZV07XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHNjcmlwdFVSTCA9IHRoaXMuc2V0dXBTY3JpcHRVUkwoKTtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYXN5bmNTY3JpcHRMb2FkZXJHZXRTY3JpcHRMb2FkZXJJRCgpO1xuICAgICAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgICAgICAgZ2xvYmFsTmFtZSA9IF9vcHRpb25zLmdsb2JhbE5hbWUsXG4gICAgICAgICAgICBjYWxsYmFja05hbWUgPSBfb3B0aW9ucy5jYWxsYmFja05hbWUsXG4gICAgICAgICAgICBzY3JpcHRJZCA9IF9vcHRpb25zLnNjcmlwdElkOyAvLyBjaGVjayBpZiBnbG9iYWwgb2JqZWN0IGFscmVhZHkgYXR0YWNoZWQgdG8gd2luZG93XG5cbiAgICAgICAgaWYgKGdsb2JhbE5hbWUgJiYgdHlwZW9mIHdpbmRvd1tnbG9iYWxOYW1lXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIFNDUklQVF9NQVBbc2NyaXB0VVJMXSA9IHtcbiAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9ic2VydmVyczoge31cbiAgICAgICAgICB9O1xuICAgICAgICB9IC8vIGNoZWNrIGlmIHNjcmlwdCBsb2FkaW5nIGFscmVhZHlcblxuXG4gICAgICAgIGlmIChTQ1JJUFRfTUFQW3NjcmlwdFVSTF0pIHtcbiAgICAgICAgICB2YXIgZW50cnkgPSBTQ1JJUFRfTUFQW3NjcmlwdFVSTF07IC8vIGlmIGxvYWRlZCBvciBlcnJvcmVkIHRoZW4gXCJmaW5pc2hcIlxuXG4gICAgICAgICAgaWYgKGVudHJ5ICYmIChlbnRyeS5sb2FkZWQgfHwgZW50cnkuZXJyb3JlZCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXN5bmNTY3JpcHRMb2FkZXJIYW5kbGVMb2FkKGVudHJ5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IC8vIGlmIHN0aWxsIGxvYWRpbmcgdGhlbiBjYWxsYmFjayB0byBvYnNlcnZlciBxdWV1ZVxuXG5cbiAgICAgICAgICBlbnRyeS5vYnNlcnZlcnNba2V5XSA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5hc3luY1NjcmlwdExvYWRlckhhbmRsZUxvYWQoZW50cnkpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgICogaGFzbid0IHN0YXJ0ZWQgbG9hZGluZ1xuICAgICAgICAgKiBzdGFydCB0aGUgXCJtYWdpY1wiXG4gICAgICAgICAqIHNldHVwIHNjcmlwdCB0byBsb2FkIGFuZCBvYnNlcnZlcnNcbiAgICAgICAgICovXG5cblxuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0ge307XG5cbiAgICAgICAgb2JzZXJ2ZXJzW2tleV0gPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLmFzeW5jU2NyaXB0TG9hZGVySGFuZGxlTG9hZChlbnRyeSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgU0NSSVBUX01BUFtzY3JpcHRVUkxdID0ge1xuICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgb2JzZXJ2ZXJzOiBvYnNlcnZlcnNcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBzY3JpcHRVUkw7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiAgICAgICAgZm9yICh2YXIgYXR0cmlidXRlIGluIG9wdGlvbnMuYXR0cmlidXRlcykge1xuICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBvcHRpb25zLmF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2NyaXB0SWQpIHtcbiAgICAgICAgICBzY3JpcHQuaWQgPSBzY3JpcHRJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYWxsT2JzZXJ2ZXJGdW5jQW5kUmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiBjYWxsT2JzZXJ2ZXJGdW5jQW5kUmVtb3ZlT2JzZXJ2ZXIoZnVuYykge1xuICAgICAgICAgIGlmIChTQ1JJUFRfTUFQW3NjcmlwdFVSTF0pIHtcbiAgICAgICAgICAgIHZhciBtYXBFbnRyeSA9IFNDUklQVF9NQVBbc2NyaXB0VVJMXTtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcnNNYXAgPSBtYXBFbnRyeS5vYnNlcnZlcnM7XG5cbiAgICAgICAgICAgIGZvciAodmFyIG9ic0tleSBpbiBvYnNlcnZlcnNNYXApIHtcbiAgICAgICAgICAgICAgaWYgKGZ1bmMob2JzZXJ2ZXJzTWFwW29ic0tleV0pKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9ic2VydmVyc01hcFtvYnNLZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjYWxsYmFja05hbWUgJiYgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5hc3luY1NjcmlwdExvYWRlclRyaWdnZXJPblNjcmlwdExvYWRlZCgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBtYXBFbnRyeSA9IFNDUklQVF9NQVBbc2NyaXB0VVJMXTtcblxuICAgICAgICAgIGlmIChtYXBFbnRyeSkge1xuICAgICAgICAgICAgbWFwRW50cnkubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbGxPYnNlcnZlckZ1bmNBbmRSZW1vdmVPYnNlcnZlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9ic2VydmVyKG1hcEVudHJ5KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG1hcEVudHJ5ID0gU0NSSVBUX01BUFtzY3JpcHRVUkxdO1xuXG4gICAgICAgICAgaWYgKG1hcEVudHJ5KSB7XG4gICAgICAgICAgICBtYXBFbnRyeS5lcnJvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbGxPYnNlcnZlckZ1bmNBbmRSZW1vdmVPYnNlcnZlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIobWFwRW50cnkpO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRhZyBzY3JpcHRcbiAgICAgICAgdmFyIHNjcmlwdFVSTCA9IHRoaXMuX19zY3JpcHRVUkw7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZlT25Vbm1vdW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGFsbFNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsU2NyaXB0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGFsbFNjcmlwdHNbaV0uc3JjLmluZGV4T2Yoc2NyaXB0VVJMKSA+IC0xKSB7XG4gICAgICAgICAgICAgIGlmIChhbGxTY3JpcHRzW2ldLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBhbGxTY3JpcHRzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWxsU2NyaXB0c1tpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gQ2xlYW4gdGhlIG9ic2VydmVyIGVudHJ5XG5cblxuICAgICAgICB2YXIgbWFwRW50cnkgPSBTQ1JJUFRfTUFQW3NjcmlwdFVSTF07XG5cbiAgICAgICAgaWYgKG1hcEVudHJ5KSB7XG4gICAgICAgICAgZGVsZXRlIG1hcEVudHJ5Lm9ic2VydmVyc1t0aGlzLmFzeW5jU2NyaXB0TG9hZGVyR2V0U2NyaXB0TG9hZGVySUQoKV07XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmVPblVubW91bnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBTQ1JJUFRfTUFQW3NjcmlwdFVSTF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgZ2xvYmFsTmFtZSA9IG9wdGlvbnMuZ2xvYmFsTmFtZTsgLy8gcmVtb3ZlIGFzeW5jU2NyaXB0T25Mb2FkIGZyb20gY2hpbGRQcm9wc1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhc3luY1NjcmlwdE9uTG9hZCA9IF90aGlzJHByb3BzLmFzeW5jU2NyaXB0T25Mb2FkLFxuICAgICAgICAgICAgZm9yd2FyZGVkUmVmID0gX3RoaXMkcHJvcHMuZm9yd2FyZGVkUmVmLFxuICAgICAgICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJhc3luY1NjcmlwdE9uTG9hZFwiLCBcImZvcndhcmRlZFJlZlwiXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gICAgICAgIGlmIChnbG9iYWxOYW1lICYmIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBjaGlsZFByb3BzW2dsb2JhbE5hbWVdID0gdHlwZW9mIHdpbmRvd1tnbG9iYWxOYW1lXSAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1tnbG9iYWxOYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkUHJvcHMucmVmID0gZm9yd2FyZGVkUmVmO1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBjaGlsZFByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBBc3luY1NjcmlwdExvYWRlcjtcbiAgICB9KENvbXBvbmVudCk7IC8vIE5vdGUgdGhlIHNlY29uZCBwYXJhbSBcInJlZlwiIHByb3ZpZGVkIGJ5IFJlYWN0LmZvcndhcmRSZWYuXG4gICAgLy8gV2UgY2FuIHBhc3MgaXQgYWxvbmcgdG8gQXN5bmNTY3JpcHRMb2FkZXIgYXMgYSByZWd1bGFyIHByb3AsIGUuZy4gXCJmb3J3YXJkZWRSZWZcIlxuICAgIC8vIEFuZCBpdCBjYW4gdGhlbiBiZSBhdHRhY2hlZCB0byB0aGUgQ29tcG9uZW50LlxuXG5cbiAgICB2YXIgRm9yd2FyZGVkQ29tcG9uZW50ID0gZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQXN5bmNTY3JpcHRMb2FkZXIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBmb3J3YXJkZWRSZWY6IHJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIEZvcndhcmRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IFwiQXN5bmNTY3JpcHRMb2FkZXIoXCIgKyB3cmFwcGVkQ29tcG9uZW50TmFtZSArIFwiKVwiO1xuICAgIEZvcndhcmRlZENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgICBhc3luY1NjcmlwdE9uTG9hZDogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuICAgIHJldHVybiBob2lzdFN0YXRpY3MoRm9yd2FyZGVkQ29tcG9uZW50LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbn0iLCJpbXBvcnQgUmVDQVBUQ0hBIGZyb20gXCIuL3JlY2FwdGNoYVwiO1xuaW1wb3J0IG1ha2VBc3luY1NjcmlwdExvYWRlciBmcm9tIFwicmVhY3QtYXN5bmMtc2NyaXB0XCI7XG52YXIgY2FsbGJhY2tOYW1lID0gXCJvbmxvYWRjYWxsYmFja1wiO1xudmFyIGdsb2JhbE5hbWUgPSBcImdyZWNhcHRjaGFcIjtcbmZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5yZWNhcHRjaGFPcHRpb25zIHx8IHt9O1xufVxuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICB2YXIgZHluYW1pY09wdGlvbnMgPSBnZXRPcHRpb25zKCk7XG4gIHZhciBob3N0bmFtZSA9IGR5bmFtaWNPcHRpb25zLnVzZVJlY2FwdGNoYU5ldCA/IFwicmVjYXB0Y2hhLm5ldFwiIDogXCJ3d3cuZ29vZ2xlLmNvbVwiO1xuICBpZiAoZHluYW1pY09wdGlvbnMuZW50ZXJwcmlzZSkge1xuICAgIHJldHVybiBcImh0dHBzOi8vXCIgKyBob3N0bmFtZSArIFwiL3JlY2FwdGNoYS9lbnRlcnByaXNlLmpzP29ubG9hZD1cIiArIGNhbGxiYWNrTmFtZSArIFwiJnJlbmRlcj1leHBsaWNpdFwiO1xuICB9XG4gIHJldHVybiBcImh0dHBzOi8vXCIgKyBob3N0bmFtZSArIFwiL3JlY2FwdGNoYS9hcGkuanM/b25sb2FkPVwiICsgY2FsbGJhY2tOYW1lICsgXCImcmVuZGVyPWV4cGxpY2l0XCI7XG59XG5leHBvcnQgZGVmYXVsdCBtYWtlQXN5bmNTY3JpcHRMb2FkZXIoZ2V0VVJMLCB7XG4gIGNhbGxiYWNrTmFtZTogY2FsbGJhY2tOYW1lLFxuICBnbG9iYWxOYW1lOiBnbG9iYWxOYW1lLFxuICBhdHRyaWJ1dGVzOiBnZXRPcHRpb25zKCkubm9uY2UgPyB7XG4gICAgbm9uY2U6IGdldE9wdGlvbnMoKS5ub25jZVxuICB9IDoge31cbn0pKFJlQ0FQVENIQSk7IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVDQVBUQ0hBIGZyb20gXCJyZWFjdC1nb29nbGUtcmVjYXB0Y2hhXCI7XG5cbmV4cG9ydCBjbGFzcyBwcmV2aWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUmVjYXB0Y2hhVmVyc2lvblR3by1wcmV2aWV3XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlJlY2FwdGNoYVZlcnNpb25Ud28tcHJldmlldy1ib3hcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUmVjYXB0Y2hhVmVyc2lvblR3by1wcmV2aWV3LXRleHRcIj5JJ20gbm90IGEgcm9ib3Q8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUmVjYXB0Y2hhVmVyc2lvblR3by1wcmV2aWV3LWxvZ29cIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiUmVjYXB0Y2hhVmVyc2lvblR3by1wcmV2aWV3LWNyZWRpdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+cmVDQVBUQ0hBPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIlJlY2FwdGNoYVZlcnNpb25Ud28tcHJldmlldy1jcmVkaXRzLXN1YlwiPlByaXZhY3kgLSBUZXJtczwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdDU1MoKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoJy4vdWkvUmVjYXB0Y2hhVmVyc2lvblR3by5jc3MnKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZUluamVjdCIsImNzcyIsInJlZiIsImluc2VydEF0IiwiZG9jdW1lbnQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiZmlyc3RDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJjcmVhdGVUZXh0Tm9kZSIsImhhc1N5bWJvbCIsIlN5bWJvbCIsImZvciIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlJFQUNUX1BPUlRBTF9UWVBFIiwiUkVBQ1RfRlJBR01FTlRfVFlQRSIsIlJFQUNUX1NUUklDVF9NT0RFX1RZUEUiLCJSRUFDVF9QUk9GSUxFUl9UWVBFIiwiUkVBQ1RfUFJPVklERVJfVFlQRSIsIlJFQUNUX0NPTlRFWFRfVFlQRSIsIlJFQUNUX0FTWU5DX01PREVfVFlQRSIsIlJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIiwiUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUiLCJSRUFDVF9NRU1PX1RZUEUiLCJSRUFDVF9MQVpZX1RZUEUiLCJSRUFDVF9CTE9DS19UWVBFIiwiUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSIsIlJFQUNUX1JFU1BPTkRFUl9UWVBFIiwiUkVBQ1RfU0NPUEVfVFlQRSIsImlzVmFsaWRFbGVtZW50VHlwZSIsIiQkdHlwZW9mIiwidHlwZU9mIiwib2JqZWN0IiwiJCR0eXBlb2ZUeXBlIiwidW5kZWZpbmVkIiwiQXN5bmNNb2RlIiwiQ29uY3VycmVudE1vZGUiLCJDb250ZXh0Q29uc3VtZXIiLCJDb250ZXh0UHJvdmlkZXIiLCJFbGVtZW50IiwiRm9yd2FyZFJlZiIsIkZyYWdtZW50IiwiTGF6eSIsIk1lbW8iLCJQb3J0YWwiLCJQcm9maWxlciIsIlN0cmljdE1vZGUiLCJTdXNwZW5zZSIsImhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlIiwiaXNBc3luY01vZGUiLCJjb25zb2xlIiwiaXNDb25jdXJyZW50TW9kZSIsImlzQ29udGV4dENvbnN1bWVyIiwiaXNDb250ZXh0UHJvdmlkZXIiLCJpc0VsZW1lbnQiLCJpc0ZvcndhcmRSZWYiLCJpc0ZyYWdtZW50IiwiaXNMYXp5IiwiaXNNZW1vIiwiaXNQb3J0YWwiLCJpc1Byb2ZpbGVyIiwiaXNTdHJpY3RNb2RlIiwiaXNTdXNwZW5zZSIsImV4cG9ydHMiLCJtb2R1bGUiLCJyZXF1aXJlIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiT2JqZWN0IiwiaGFzT3duUHJvcGVydHkiLCJwcm90b3R5cGUiLCJwcm9wSXNFbnVtZXJhYmxlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJ0b09iamVjdCIsInZhbCIsIlR5cGVFcnJvciIsInNob3VsZFVzZU5hdGl2ZSIsImFzc2lnbiIsInRlc3QxIiwiU3RyaW5nIiwiZ2V0T3duUHJvcGVydHlOYW1lcyIsInRlc3QyIiwiaSIsImZyb21DaGFyQ29kZSIsIm9yZGVyMiIsIm1hcCIsIm4iLCJqb2luIiwidGVzdDMiLCJzcGxpdCIsImZvckVhY2giLCJsZXR0ZXIiLCJrZXlzIiwiZXJyIiwidGFyZ2V0Iiwic291cmNlIiwiZnJvbSIsInRvIiwic3ltYm9scyIsInMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJrZXkiLCJjYWxsIiwiUmVhY3RQcm9wVHlwZXNTZWNyZXQiLCJwcmludFdhcm5pbmciLCJsb2dnZWRUeXBlRmFpbHVyZXMiLCJoYXMiLCJGdW5jdGlvbiIsImJpbmQiLCJ0ZXh0IiwibWVzc2FnZSIsImVycm9yIiwiRXJyb3IiLCJ4IiwiY2hlY2tQcm9wVHlwZXMiLCJ0eXBlU3BlY3MiLCJ2YWx1ZXMiLCJsb2NhdGlvbiIsImNvbXBvbmVudE5hbWUiLCJnZXRTdGFjayIsInR5cGVTcGVjTmFtZSIsIm5hbWUiLCJleCIsInN0YWNrIiwicmVzZXRXYXJuaW5nQ2FjaGUiLCJSZWFjdElzIiwiZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCIsImlzVmFsaWRFbGVtZW50IiwidGhyb3dPbkRpcmVjdEFjY2VzcyIsIklURVJBVE9SX1NZTUJPTCIsIml0ZXJhdG9yIiwiRkFVWF9JVEVSQVRPUl9TWU1CT0wiLCJnZXRJdGVyYXRvckZuIiwibWF5YmVJdGVyYWJsZSIsIml0ZXJhdG9yRm4iLCJBTk9OWU1PVVMiLCJSZWFjdFByb3BUeXBlcyIsImFycmF5IiwiY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIiLCJib29sIiwiZnVuYyIsIm51bWJlciIsInN0cmluZyIsInN5bWJvbCIsImFueSIsImNyZWF0ZUFueVR5cGVDaGVja2VyIiwiYXJyYXlPZiIsImNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlciIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIiLCJlbGVtZW50VHlwZSIsImNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIiLCJpbnN0YW5jZU9mIiwiY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlciIsIm5vZGUiLCJjcmVhdGVOb2RlQ2hlY2tlciIsIm9iamVjdE9mIiwiY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlciIsIm9uZU9mIiwiY3JlYXRlRW51bVR5cGVDaGVja2VyIiwib25lT2ZUeXBlIiwiY3JlYXRlVW5pb25UeXBlQ2hlY2tlciIsInNoYXBlIiwiY3JlYXRlU2hhcGVUeXBlQ2hlY2tlciIsImV4YWN0IiwiY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlciIsImlzIiwieSIsIlByb3BUeXBlRXJyb3IiLCJjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlciIsInZhbGlkYXRlIiwibWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUiLCJtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCIsImNoZWNrVHlwZSIsImlzUmVxdWlyZWQiLCJwcm9wcyIsInByb3BOYW1lIiwicHJvcEZ1bGxOYW1lIiwic2VjcmV0IiwiY2FjaGVLZXkiLCJjaGFpbmVkQ2hlY2tUeXBlIiwiZXhwZWN0ZWRUeXBlIiwicHJvcFZhbHVlIiwicHJvcFR5cGUiLCJnZXRQcm9wVHlwZSIsInByZWNpc2VUeXBlIiwiZ2V0UHJlY2lzZVR5cGUiLCJ0eXBlQ2hlY2tlciIsIkFycmF5IiwiaXNBcnJheSIsImV4cGVjdGVkQ2xhc3MiLCJleHBlY3RlZENsYXNzTmFtZSIsImFjdHVhbENsYXNzTmFtZSIsImdldENsYXNzTmFtZSIsImV4cGVjdGVkVmFsdWVzIiwidmFsdWVzU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsInJlcGxhY2VyIiwidmFsdWUiLCJhcnJheU9mVHlwZUNoZWNrZXJzIiwicHJvY2VzcyIsImNoZWNrZXIiLCJnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmciLCJpc05vZGUiLCJzaGFwZVR5cGVzIiwiYWxsS2V5cyIsImV2ZXJ5Iiwic3RlcCIsImVudHJpZXMiLCJuZXh0IiwiZG9uZSIsImVudHJ5IiwiaXNTeW1ib2wiLCJSZWdFeHAiLCJEYXRlIiwiY29uc3RydWN0b3IiLCJQcm9wVHlwZXMiLCJfZXhjbHVkZWQiLCJfZXh0ZW5kcyIsImFwcGx5IiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJleGNsdWRlZCIsInNvdXJjZUtleXMiLCJpbmRleE9mIiwiX2Fzc2VydFRoaXNJbml0aWFsaXplZCIsInNlbGYiLCJSZWZlcmVuY2VFcnJvciIsIl9pbmhlcml0c0xvb3NlIiwic3ViQ2xhc3MiLCJzdXBlckNsYXNzIiwiY3JlYXRlIiwiX3NldFByb3RvdHlwZU9mIiwibyIsInAiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIlJlQ0FQVENIQSIsIl9SZWFjdCRDb21wb25lbnQiLCJfdGhpcyIsImhhbmRsZUV4cGlyZWQiLCJoYW5kbGVFcnJvcmVkIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlUmVjYXB0Y2hhUmVmIiwiX3Byb3RvIiwiZ2V0Q2FwdGNoYUZ1bmN0aW9uIiwiZm5OYW1lIiwiZ3JlY2FwdGNoYSIsImVudGVycHJpc2UiLCJnZXRWYWx1ZSIsImdldFJlc3BvbnNlIiwiX3dpZGdldElkIiwiZ2V0V2lkZ2V0SWQiLCJleGVjdXRlIiwiX2V4ZWN1dGVSZXF1ZXN0ZWQiLCJleGVjdXRlQXN5bmMiLCJfdGhpczIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImV4ZWN1dGlvblJlc29sdmUiLCJleGVjdXRpb25SZWplY3QiLCJyZXNldCIsInJlc2V0dGVyIiwiZm9yY2VSZXNldCIsIm9uRXhwaXJlZCIsIm9uRXJyb3JlZCIsInRva2VuIiwib25DaGFuZ2UiLCJleHBsaWNpdFJlbmRlciIsInJlbmRlciIsIndyYXBwZXIiLCJzaXRla2V5IiwiY2FsbGJhY2siLCJ0aGVtZSIsInRhYmluZGV4Iiwic2l6ZSIsInN0b2tlbiIsImhsIiwiYmFkZ2UiLCJpc29sYXRlZCIsImNhcHRjaGEiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImVsZW0iLCJfdGhpcyRwcm9wcyIsImNoaWxkUHJvcHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwicmVhY3RJcyIsIlJFQUNUX1NUQVRJQ1MiLCJjaGlsZENvbnRleHRUeXBlcyIsImNvbnRleHRUeXBlIiwiY29udGV4dFR5cGVzIiwiZ2V0RGVmYXVsdFByb3BzIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibWl4aW5zIiwiS05PV05fU1RBVElDUyIsImNhbGxlciIsImNhbGxlZSIsImFyaXR5IiwiRk9SV0FSRF9SRUZfU1RBVElDUyIsIk1FTU9fU1RBVElDUyIsImNvbXBhcmUiLCJUWVBFX1NUQVRJQ1MiLCJnZXRTdGF0aWNzIiwiY29tcG9uZW50IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm90b3R5cGVPZiIsIm9iamVjdFByb3RvdHlwZSIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwidGFyZ2V0Q29tcG9uZW50Iiwic291cmNlQ29tcG9uZW50IiwiYmxhY2tsaXN0IiwiaW5oZXJpdGVkQ29tcG9uZW50IiwiY29uY2F0IiwidGFyZ2V0U3RhdGljcyIsInNvdXJjZVN0YXRpY3MiLCJkZXNjcmlwdG9yIiwiZSIsIlNDUklQVF9NQVAiLCJpZENvdW50IiwibWFrZUFzeW5jU2NyaXB0IiwiZ2V0U2NyaXB0VVJMIiwib3B0aW9ucyIsIndyYXBXaXRoQXN5bmNTY3JpcHQiLCJXcmFwcGVkQ29tcG9uZW50Iiwid3JhcHBlZENvbXBvbmVudE5hbWUiLCJBc3luY1NjcmlwdExvYWRlciIsIl9Db21wb25lbnQiLCJjb250ZXh0Iiwic3RhdGUiLCJfX3NjcmlwdFVSTCIsImFzeW5jU2NyaXB0TG9hZGVyR2V0U2NyaXB0TG9hZGVySUQiLCJfX3NjcmlwdExvYWRlcklEIiwic2V0dXBTY3JpcHRVUkwiLCJhc3luY1NjcmlwdExvYWRlckhhbmRsZUxvYWQiLCJzZXRTdGF0ZSIsImFzeW5jU2NyaXB0T25Mb2FkIiwiYXN5bmNTY3JpcHRMb2FkZXJUcmlnZ2VyT25TY3JpcHRMb2FkZWQiLCJtYXBFbnRyeSIsImxvYWRlZCIsIm9ic0tleSIsIm9ic2VydmVycyIsIndpbmRvdyIsImNhbGxiYWNrTmFtZSIsIl90aGlzMyIsInNjcmlwdFVSTCIsIl9vcHRpb25zIiwiZ2xvYmFsTmFtZSIsInNjcmlwdElkIiwiZXJyb3JlZCIsInNjcmlwdCIsInNyYyIsImFzeW5jIiwiYXR0cmlidXRlIiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsImlkIiwiY2FsbE9ic2VydmVyRnVuY0FuZFJlbW92ZU9ic2VydmVyIiwib2JzZXJ2ZXJzTWFwIiwib25sb2FkIiwib2JzZXJ2ZXIiLCJvbmVycm9yIiwiYm9keSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlT25Vbm1vdW50IiwiYWxsU2NyaXB0cyIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImZvcndhcmRlZFJlZiIsIkZvcndhcmRlZENvbXBvbmVudCIsImZvcndhcmRSZWYiLCJob2lzdFN0YXRpY3MiLCJnZXRPcHRpb25zIiwicmVjYXB0Y2hhT3B0aW9ucyIsImdldFVSTCIsImR5bmFtaWNPcHRpb25zIiwiaG9zdG5hbWUiLCJ1c2VSZWNhcHRjaGFOZXQiLCJtYWtlQXN5bmNTY3JpcHRMb2FkZXIiLCJub25jZSIsInByZXZpZXciLCJjbGFzcyIsImdldFByZXZpZXdDU1MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFdBQVdBLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQzdCLElBQUtBLEdBQUcsS0FBSyxLQUFLLENBQUMsRUFBR0EsR0FBRyxHQUFHLEVBQUUsQ0FBQTtBQUM5QixFQUFBLElBQUlDLFFBQVEsR0FBR0QsR0FBRyxDQUFDQyxRQUFRLENBQUE7QUFFM0IsRUFBQSxJQUFJLENBQUNGLEdBQUcsSUFBSSxPQUFPRyxRQUFRLEtBQUssV0FBVyxFQUFFO0FBQUUsSUFBQSxPQUFBO0FBQVEsR0FBQTtBQUV2RCxFQUFBLElBQUlDLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFJLElBQUlELFFBQVEsQ0FBQ0Usb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDcEUsRUFBQSxJQUFJQyxLQUFLLEdBQUdILFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0VBQzNDRCxLQUFLLENBQUNFLElBQUksR0FBRyxVQUFVLENBQUE7RUFFdkIsSUFBSU4sUUFBUSxLQUFLLEtBQUssRUFBRTtJQUN0QixJQUFJRSxJQUFJLENBQUNLLFVBQVUsRUFBRTtNQUNuQkwsSUFBSSxDQUFDTSxZQUFZLENBQUNKLEtBQUssRUFBRUYsSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQTtBQUMzQyxLQUFDLE1BQU07QUFDTEwsTUFBQUEsSUFBSSxDQUFDTyxXQUFXLENBQUNMLEtBQUssQ0FBQyxDQUFBO0FBQ3pCLEtBQUE7QUFDRixHQUFDLE1BQU07QUFDTEYsSUFBQUEsSUFBSSxDQUFDTyxXQUFXLENBQUNMLEtBQUssQ0FBQyxDQUFBO0FBQ3pCLEdBQUE7RUFFQSxJQUFJQSxLQUFLLENBQUNNLFVBQVUsRUFBRTtBQUNwQk4sSUFBQUEsS0FBSyxDQUFDTSxVQUFVLENBQUNDLE9BQU8sR0FBR2IsR0FBRyxDQUFBO0FBQ2hDLEdBQUMsTUFBTTtJQUNMTSxLQUFLLENBQUNLLFdBQVcsQ0FBQ1IsUUFBUSxDQUFDVyxjQUFjLENBQUNkLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDakQsR0FBQTtBQUNGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBLENBQTJDO0FBQ3pDLEdBQUEsQ0FBQyxZQUFXOztBQUdkO0FBQ0E7S0FDQSxJQUFJZSxTQUFTLEdBQUcsT0FBT0MsTUFBTSxLQUFLLFVBQVUsSUFBSUEsTUFBTSxDQUFDQyxHQUFHLENBQUE7S0FDMUQsSUFBSUMsa0JBQWtCLEdBQUdILFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxHQUFHLENBQUMsZUFBZSxDQUFDLEdBQUcsTUFBTSxDQUFBO0tBQ3pFLElBQUlFLGlCQUFpQixHQUFHSixTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLGNBQWMsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtLQUN2RSxJQUFJRyxtQkFBbUIsR0FBR0wsU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtLQUMzRSxJQUFJSSxzQkFBc0IsR0FBR04sU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtLQUNqRixJQUFJSyxtQkFBbUIsR0FBR1AsU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtLQUMzRSxJQUFJTSxtQkFBbUIsR0FBR1IsU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtBQUMzRSxLQUFBLElBQUlPLGtCQUFrQixHQUFHVCxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLE1BQU0sQ0FBQztBQUMxRTs7S0FFQSxJQUFJUSxxQkFBcUIsR0FBR1YsU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtLQUMvRSxJQUFJUywwQkFBMEIsR0FBR1gsU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtLQUN6RixJQUFJVSxzQkFBc0IsR0FBR1osU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtLQUNqRixJQUFJVyxtQkFBbUIsR0FBR2IsU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtLQUMzRSxJQUFJWSx3QkFBd0IsR0FBR2QsU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtLQUNyRixJQUFJYSxlQUFlLEdBQUdmLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFBO0tBQ25FLElBQUljLGVBQWUsR0FBR2hCLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsTUFBTSxDQUFBO0tBQ25FLElBQUllLGdCQUFnQixHQUFHakIsU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUE7S0FDckUsSUFBSWdCLHNCQUFzQixHQUFHbEIsU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtLQUNqRixJQUFJaUIsb0JBQW9CLEdBQUduQixTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsTUFBTSxDQUFBO0tBQzdFLElBQUlrQixnQkFBZ0IsR0FBR3BCLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDLEdBQUcsTUFBTSxDQUFBO0tBRXJFLFNBQVNtQixrQkFBa0JBLENBQUM1QixJQUFJLEVBQUU7T0FDaEMsT0FBTyxPQUFPQSxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU9BLElBQUksS0FBSyxVQUFVO0FBQUk7QUFDakVBLE9BQUFBLElBQUksS0FBS1ksbUJBQW1CLElBQUlaLElBQUksS0FBS2tCLDBCQUEwQixJQUFJbEIsSUFBSSxLQUFLYyxtQkFBbUIsSUFBSWQsSUFBSSxLQUFLYSxzQkFBc0IsSUFBSWIsSUFBSSxLQUFLb0IsbUJBQW1CLElBQUlwQixJQUFJLEtBQUtxQix3QkFBd0IsSUFBSSxPQUFPckIsSUFBSSxLQUFLLFFBQVEsSUFBSUEsSUFBSSxLQUFLLElBQUksS0FBS0EsSUFBSSxDQUFDNkIsUUFBUSxLQUFLTixlQUFlLElBQUl2QixJQUFJLENBQUM2QixRQUFRLEtBQUtQLGVBQWUsSUFBSXRCLElBQUksQ0FBQzZCLFFBQVEsS0FBS2QsbUJBQW1CLElBQUlmLElBQUksQ0FBQzZCLFFBQVEsS0FBS2Isa0JBQWtCLElBQUloQixJQUFJLENBQUM2QixRQUFRLEtBQUtWLHNCQUFzQixJQUFJbkIsSUFBSSxDQUFDNkIsUUFBUSxLQUFLSixzQkFBc0IsSUFBSXpCLElBQUksQ0FBQzZCLFFBQVEsS0FBS0gsb0JBQW9CLElBQUkxQixJQUFJLENBQUM2QixRQUFRLEtBQUtGLGdCQUFnQixJQUFJM0IsSUFBSSxDQUFDNkIsUUFBUSxLQUFLTCxnQkFBZ0IsQ0FBQyxDQUFBO01BQ3JtQjtLQUVBLFNBQVNNLE1BQU1BLENBQUNDLE1BQU0sRUFBRTtPQUN0QixJQUFJLE9BQU9BLE1BQU0sS0FBSyxRQUFRLElBQUlBLE1BQU0sS0FBSyxJQUFJLEVBQUU7QUFDakQsU0FBQSxJQUFJRixRQUFRLEdBQUdFLE1BQU0sQ0FBQ0YsUUFBUSxDQUFBO0FBRTlCLFNBQUEsUUFBUUEsUUFBUTtBQUNkLFdBQUEsS0FBS25CLGtCQUFrQjtBQUNyQixhQUFBLElBQUlWLElBQUksR0FBRytCLE1BQU0sQ0FBQy9CLElBQUksQ0FBQTtBQUV0QixhQUFBLFFBQVFBLElBQUk7ZUFDVixLQUFLaUIscUJBQXFCLENBQUE7ZUFDMUIsS0FBS0MsMEJBQTBCLENBQUE7ZUFDL0IsS0FBS04sbUJBQW1CLENBQUE7ZUFDeEIsS0FBS0UsbUJBQW1CLENBQUE7ZUFDeEIsS0FBS0Qsc0JBQXNCLENBQUE7QUFDM0IsZUFBQSxLQUFLTyxtQkFBbUI7aUJBQ3RCLE9BQU9wQixJQUFJLENBQUE7ZUFFYjtpQkFDRSxJQUFJZ0MsWUFBWSxHQUFHaEMsSUFBSSxJQUFJQSxJQUFJLENBQUM2QixRQUFRLENBQUE7QUFFeEMsaUJBQUEsUUFBUUcsWUFBWTttQkFDbEIsS0FBS2hCLGtCQUFrQixDQUFBO21CQUN2QixLQUFLRyxzQkFBc0IsQ0FBQTttQkFDM0IsS0FBS0ksZUFBZSxDQUFBO21CQUNwQixLQUFLRCxlQUFlLENBQUE7QUFDcEIsbUJBQUEsS0FBS1AsbUJBQW1CO3FCQUN0QixPQUFPaUIsWUFBWSxDQUFBO21CQUVyQjtxQkFDRSxPQUFPSCxRQUFRLENBQUE7a0JBQ25CO2NBRUo7QUFFRixXQUFBLEtBQUtsQixpQkFBaUI7YUFDcEIsT0FBT2tCLFFBQVEsQ0FBQTtVQUNuQjtRQUNGO09BRUEsT0FBT0ksU0FBUyxDQUFBO01BQ2pCOztLQUVELElBQUlDLFNBQVMsR0FBR2pCLHFCQUFxQixDQUFBO0tBQ3JDLElBQUlrQixjQUFjLEdBQUdqQiwwQkFBMEIsQ0FBQTtLQUMvQyxJQUFJa0IsZUFBZSxHQUFHcEIsa0JBQWtCLENBQUE7S0FDeEMsSUFBSXFCLGVBQWUsR0FBR3RCLG1CQUFtQixDQUFBO0tBQ3pDLElBQUl1QixPQUFPLEdBQUc1QixrQkFBa0IsQ0FBQTtLQUNoQyxJQUFJNkIsVUFBVSxHQUFHcEIsc0JBQXNCLENBQUE7S0FDdkMsSUFBSXFCLFFBQVEsR0FBRzVCLG1CQUFtQixDQUFBO0tBQ2xDLElBQUk2QixJQUFJLEdBQUdsQixlQUFlLENBQUE7S0FDMUIsSUFBSW1CLElBQUksR0FBR3BCLGVBQWUsQ0FBQTtLQUMxQixJQUFJcUIsTUFBTSxHQUFHaEMsaUJBQWlCLENBQUE7S0FDOUIsSUFBSWlDLFFBQVEsR0FBRzlCLG1CQUFtQixDQUFBO0tBQ2xDLElBQUkrQixVQUFVLEdBQUdoQyxzQkFBc0IsQ0FBQTtLQUN2QyxJQUFJaUMsUUFBUSxHQUFHMUIsbUJBQW1CLENBQUE7QUFDbEMsS0FBQSxJQUFJMkIsbUNBQW1DLEdBQUcsS0FBSyxDQUFDOztLQUVoRCxTQUFTQyxXQUFXQSxDQUFDakIsTUFBTSxFQUFFO09BQzNCO1NBQ0UsSUFBSSxDQUFDZ0IsbUNBQW1DLEVBQUU7V0FDeENBLG1DQUFtQyxHQUFHLElBQUksQ0FBQzs7V0FFM0NFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyx1REFBdUQsR0FBRyw0REFBNEQsR0FBRyxnRUFBZ0UsQ0FBQyxDQUFBO1VBQzVNO1FBQ0Y7T0FFQSxPQUFPQyxnQkFBZ0IsQ0FBQ25CLE1BQU0sQ0FBQyxJQUFJRCxNQUFNLENBQUNDLE1BQU0sQ0FBQyxLQUFLZCxxQkFBcUIsQ0FBQTtNQUM3RTtLQUNBLFNBQVNpQyxnQkFBZ0JBLENBQUNuQixNQUFNLEVBQUU7QUFDaEMsT0FBQSxPQUFPRCxNQUFNLENBQUNDLE1BQU0sQ0FBQyxLQUFLYiwwQkFBMEIsQ0FBQTtNQUN0RDtLQUNBLFNBQVNpQyxpQkFBaUJBLENBQUNwQixNQUFNLEVBQUU7QUFDakMsT0FBQSxPQUFPRCxNQUFNLENBQUNDLE1BQU0sQ0FBQyxLQUFLZixrQkFBa0IsQ0FBQTtNQUM5QztLQUNBLFNBQVNvQyxpQkFBaUJBLENBQUNyQixNQUFNLEVBQUU7QUFDakMsT0FBQSxPQUFPRCxNQUFNLENBQUNDLE1BQU0sQ0FBQyxLQUFLaEIsbUJBQW1CLENBQUE7TUFDL0M7S0FDQSxTQUFTc0MsU0FBU0EsQ0FBQ3RCLE1BQU0sRUFBRTtBQUN6QixPQUFBLE9BQU8sT0FBT0EsTUFBTSxLQUFLLFFBQVEsSUFBSUEsTUFBTSxLQUFLLElBQUksSUFBSUEsTUFBTSxDQUFDRixRQUFRLEtBQUtuQixrQkFBa0IsQ0FBQTtNQUNoRztLQUNBLFNBQVM0QyxZQUFZQSxDQUFDdkIsTUFBTSxFQUFFO0FBQzVCLE9BQUEsT0FBT0QsTUFBTSxDQUFDQyxNQUFNLENBQUMsS0FBS1osc0JBQXNCLENBQUE7TUFDbEQ7S0FDQSxTQUFTb0MsVUFBVUEsQ0FBQ3hCLE1BQU0sRUFBRTtBQUMxQixPQUFBLE9BQU9ELE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEtBQUtuQixtQkFBbUIsQ0FBQTtNQUMvQztLQUNBLFNBQVM0QyxNQUFNQSxDQUFDekIsTUFBTSxFQUFFO0FBQ3RCLE9BQUEsT0FBT0QsTUFBTSxDQUFDQyxNQUFNLENBQUMsS0FBS1IsZUFBZSxDQUFBO01BQzNDO0tBQ0EsU0FBU2tDLE1BQU1BLENBQUMxQixNQUFNLEVBQUU7QUFDdEIsT0FBQSxPQUFPRCxNQUFNLENBQUNDLE1BQU0sQ0FBQyxLQUFLVCxlQUFlLENBQUE7TUFDM0M7S0FDQSxTQUFTb0MsUUFBUUEsQ0FBQzNCLE1BQU0sRUFBRTtBQUN4QixPQUFBLE9BQU9ELE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEtBQUtwQixpQkFBaUIsQ0FBQTtNQUM3QztLQUNBLFNBQVNnRCxVQUFVQSxDQUFDNUIsTUFBTSxFQUFFO0FBQzFCLE9BQUEsT0FBT0QsTUFBTSxDQUFDQyxNQUFNLENBQUMsS0FBS2pCLG1CQUFtQixDQUFBO01BQy9DO0tBQ0EsU0FBUzhDLFlBQVlBLENBQUM3QixNQUFNLEVBQUU7QUFDNUIsT0FBQSxPQUFPRCxNQUFNLENBQUNDLE1BQU0sQ0FBQyxLQUFLbEIsc0JBQXNCLENBQUE7TUFDbEQ7S0FDQSxTQUFTZ0QsVUFBVUEsQ0FBQzlCLE1BQU0sRUFBRTtBQUMxQixPQUFBLE9BQU9ELE1BQU0sQ0FBQ0MsTUFBTSxDQUFDLEtBQUtYLG1CQUFtQixDQUFBO01BQy9DO0tBRUEwQyxtQkFBQUEsQ0FBQUEsU0FBaUIsR0FBRzVCLFNBQVMsQ0FBQTtLQUM3QjRCLG1CQUFBQSxDQUFBQSxjQUFzQixHQUFHM0IsY0FBYyxDQUFBO0tBQ3ZDMkIsbUJBQUFBLENBQUFBLGVBQXVCLEdBQUcxQixlQUFlLENBQUE7S0FDekMwQixtQkFBQUEsQ0FBQUEsZUFBdUIsR0FBR3pCLGVBQWUsQ0FBQTtLQUN6Q3lCLG1CQUFBQSxDQUFBQSxPQUFlLEdBQUd4QixPQUFPLENBQUE7S0FDekJ3QixtQkFBQUEsQ0FBQUEsVUFBa0IsR0FBR3ZCLFVBQVUsQ0FBQTtLQUMvQnVCLG1CQUFBQSxDQUFBQSxRQUFnQixHQUFHdEIsUUFBUSxDQUFBO0tBQzNCc0IsbUJBQUFBLENBQUFBLElBQVksR0FBR3JCLElBQUksQ0FBQTtLQUNuQnFCLG1CQUFBQSxDQUFBQSxJQUFZLEdBQUdwQixJQUFJLENBQUE7S0FDbkJvQixtQkFBQUEsQ0FBQUEsTUFBYyxHQUFHbkIsTUFBTSxDQUFBO0tBQ3ZCbUIsbUJBQUFBLENBQUFBLFFBQWdCLEdBQUdsQixRQUFRLENBQUE7S0FDM0JrQixtQkFBQUEsQ0FBQUEsVUFBa0IsR0FBR2pCLFVBQVUsQ0FBQTtLQUMvQmlCLG1CQUFBQSxDQUFBQSxRQUFnQixHQUFHaEIsUUFBUSxDQUFBO0tBQzNCZ0IsbUJBQUFBLENBQUFBLFdBQW1CLEdBQUdkLFdBQVcsQ0FBQTtLQUNqQ2MsbUJBQUFBLENBQUFBLGdCQUF3QixHQUFHWixnQkFBZ0IsQ0FBQTtLQUMzQ1ksbUJBQUFBLENBQUFBLGlCQUF5QixHQUFHWCxpQkFBaUIsQ0FBQTtLQUM3Q1csbUJBQUFBLENBQUFBLGlCQUF5QixHQUFHVixpQkFBaUIsQ0FBQTtLQUM3Q1UsbUJBQUFBLENBQUFBLFNBQWlCLEdBQUdULFNBQVMsQ0FBQTtLQUM3QlMsbUJBQUFBLENBQUFBLFlBQW9CLEdBQUdSLFlBQVksQ0FBQTtLQUNuQ1EsbUJBQUFBLENBQUFBLFVBQWtCLEdBQUdQLFVBQVUsQ0FBQTtLQUMvQk8sbUJBQUFBLENBQUFBLE1BQWMsR0FBR04sTUFBTSxDQUFBO0tBQ3ZCTSxtQkFBQUEsQ0FBQUEsTUFBYyxHQUFHTCxNQUFNLENBQUE7S0FDdkJLLG1CQUFBQSxDQUFBQSxRQUFnQixHQUFHSixRQUFRLENBQUE7S0FDM0JJLG1CQUFBQSxDQUFBQSxVQUFrQixHQUFHSCxVQUFVLENBQUE7S0FDL0JHLG1CQUFBQSxDQUFBQSxZQUFvQixHQUFHRixZQUFZLENBQUE7S0FDbkNFLG1CQUFBQSxDQUFBQSxVQUFrQixHQUFHRCxVQUFVLENBQUE7S0FDL0JDLG1CQUFBQSxDQUFBQSxrQkFBMEIsR0FBR2xDLGtCQUFrQixDQUFBO0tBQy9Da0MsbUJBQUFBLENBQUFBLE1BQWMsR0FBR2hDLE1BQU0sQ0FBQTtBQUNyQixJQUFDLEdBQUcsQ0FBQTtBQUNOLEVBQUE7Ozs7Ozs7Ozs7O0FDbExBLEVBRU87SUFDTGlDLE1BQUFBLENBQUFBLE9BQUFBLEdBQWlCQyw0QkFBd0MsQ0FBQTtBQUMzRCxHQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNDQTtBQUNBLENBQUEsSUFBSUMscUJBQXFCLEdBQUdDLE1BQU0sQ0FBQ0QscUJBQXFCLENBQUE7QUFDeEQsQ0FBQSxJQUFJRSxjQUFjLEdBQUdELE1BQU0sQ0FBQ0UsU0FBUyxDQUFDRCxjQUFjLENBQUE7QUFDcEQsQ0FBQSxJQUFJRSxnQkFBZ0IsR0FBR0gsTUFBTSxDQUFDRSxTQUFTLENBQUNFLG9CQUFvQixDQUFBO0NBRTVELFNBQVNDLFFBQVFBLENBQUNDLEdBQUcsRUFBRTtHQUN0QixJQUFJQSxHQUFHLEtBQUssSUFBSSxJQUFJQSxHQUFHLEtBQUt2QyxTQUFTLEVBQUU7QUFDdEMsS0FBQSxNQUFNLElBQUl3QyxTQUFTLENBQUMsdURBQXVELENBQUMsQ0FBQTtJQUM3RTtHQUVBLE9BQU9QLE1BQU0sQ0FBQ00sR0FBRyxDQUFDLENBQUE7RUFDbkI7QUFFQSxDQUFBLFNBQVNFLGVBQWVBLEdBQUc7R0FDMUIsSUFBSTtBQUNILEtBQUEsSUFBSSxDQUFDUixNQUFNLENBQUNTLE1BQU0sRUFBRTtPQUNuQixPQUFPLEtBQUssQ0FBQTtNQUNiOztBQUVBOztBQUVBO0tBQ0EsSUFBSUMsS0FBSyxHQUFHLElBQUlDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUM5QkQsS0FBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQTtLQUNmLElBQUlWLE1BQU0sQ0FBQ1ksbUJBQW1CLENBQUNGLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRTtPQUNqRCxPQUFPLEtBQUssQ0FBQTtNQUNiOztBQUVBO0tBQ0EsSUFBSUcsS0FBSyxHQUFHLEVBQUUsQ0FBQTtLQUNkLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHLEVBQUUsRUFBRUEsQ0FBQyxFQUFFLEVBQUU7T0FDNUJELEtBQUssQ0FBQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0ksWUFBWSxDQUFDRCxDQUFDLENBQUMsQ0FBQyxHQUFHQSxDQUFDLENBQUE7TUFDeEM7QUFDQSxLQUFBLElBQUlFLE1BQU0sR0FBR2hCLE1BQU0sQ0FBQ1ksbUJBQW1CLENBQUNDLEtBQUssQ0FBQyxDQUFDSSxHQUFHLENBQUMsVUFBVUMsQ0FBQyxFQUFFO09BQy9ELE9BQU9MLEtBQUssQ0FBQ0ssQ0FBQyxDQUFDLENBQUE7QUFDaEIsTUFBQyxDQUFDLENBQUE7S0FDRixJQUFJRixNQUFNLENBQUNHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxZQUFZLEVBQUU7T0FDckMsT0FBTyxLQUFLLENBQUE7TUFDYjs7QUFFQTtLQUNBLElBQUlDLEtBQUssR0FBRyxFQUFFLENBQUE7S0FDZCxzQkFBc0IsQ0FBQ0MsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDQyxPQUFPLENBQUMsVUFBVUMsTUFBTSxFQUFFO0FBQzFESCxPQUFBQSxLQUFLLENBQUNHLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUE7QUFDdkIsTUFBQyxDQUFDLENBQUE7S0FDRixJQUFJdkIsTUFBTSxDQUFDd0IsSUFBSSxDQUFDeEIsTUFBTSxDQUFDUyxNQUFNLENBQUMsRUFBRSxFQUFFVyxLQUFLLENBQUMsQ0FBQyxDQUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQ2hELHNCQUFzQixFQUFFO09BQ3pCLE9BQU8sS0FBSyxDQUFBO01BQ2I7S0FFQSxPQUFPLElBQUksQ0FBQTtJQUNYLENBQUMsT0FBT00sR0FBRyxFQUFFO0FBQ2I7S0FDQSxPQUFPLEtBQUssQ0FBQTtJQUNiO0VBQ0Q7QUFFQTVCLENBQUFBLFlBQWMsR0FBR1csZUFBZSxFQUFFLEdBQUdSLE1BQU0sQ0FBQ1MsTUFBTSxHQUFHLFVBQVVpQixNQUFNLEVBQUVDLE1BQU0sRUFBRTtHQUM5RSxJQUFJQyxJQUFJLENBQUE7QUFDUixHQUFBLElBQUlDLEVBQUUsR0FBR3hCLFFBQVEsQ0FBQ3FCLE1BQU0sQ0FBQyxDQUFBO0dBQ3pCLElBQUlJLE9BQU8sQ0FBQTtBQUVYLEdBQUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtLQUMxQ0gsSUFBSSxHQUFHNUIsTUFBTSxDQUFDZ0MsU0FBUyxDQUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBRTNCLEtBQUEsS0FBSyxJQUFJRyxHQUFHLElBQUlOLElBQUksRUFBRTtPQUNyQixJQUFJM0IsY0FBYyxDQUFDa0MsSUFBSSxDQUFDUCxJQUFJLEVBQUVNLEdBQUcsQ0FBQyxFQUFFO1NBQ25DTCxFQUFFLENBQUNLLEdBQUcsQ0FBQyxHQUFHTixJQUFJLENBQUNNLEdBQUcsQ0FBQyxDQUFBO1FBQ3BCO01BQ0Q7S0FFQSxJQUFJbkMscUJBQXFCLEVBQUU7QUFDMUIrQixPQUFBQSxPQUFPLEdBQUcvQixxQkFBcUIsQ0FBQzZCLElBQUksQ0FBQyxDQUFBO0FBQ3JDLE9BQUEsS0FBSyxJQUFJZCxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdnQixPQUFPLENBQUNHLE1BQU0sRUFBRW5CLENBQUMsRUFBRSxFQUFFO1NBQ3hDLElBQUlYLGdCQUFnQixDQUFDZ0MsSUFBSSxDQUFDUCxJQUFJLEVBQUVFLE9BQU8sQ0FBQ2hCLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDNUNlLFdBQUFBLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDaEIsQ0FBQyxDQUFDLENBQUMsR0FBR2MsSUFBSSxDQUFDRSxPQUFPLENBQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFBO1VBQ2xDO1FBQ0Q7TUFDRDtJQUNEO0dBRUEsT0FBT2UsRUFBRSxDQUFBO0VBQ1QsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDaEZELElBQUlPLG9CQUFvQixHQUFHLDhDQUE4QyxDQUFBO0FBRXpFdkMsQ0FBQUEsc0JBQWMsR0FBR3VDLG9CQUFvQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGckMsQ0FBQSxJQUFJQyxZQUFZLEdBQUcsWUFBVyxFQUFFLENBQUE7QUFFaEMsQ0FBMkM7QUFDekMsR0FBQSxJQUFJRCxvQkFBb0IsR0FBR3RDLDJCQUFBQSxFQUFxQyxDQUFBO0dBQ2hFLElBQUl3QyxrQkFBa0IsR0FBRyxFQUFFLENBQUE7QUFDM0IsR0FBQSxJQUFJQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0wsSUFBSSxDQUFDTSxJQUFJLENBQUN6QyxNQUFNLENBQUNFLFNBQVMsQ0FBQ0QsY0FBYyxDQUFDLENBQUE7QUFFN0RvQyxHQUFBQSxZQUFZLEdBQUcsVUFBU0ssSUFBSSxFQUFFO0FBQzVCLEtBQUEsSUFBSUMsT0FBTyxHQUFHLFdBQVcsR0FBR0QsSUFBSSxDQUFBO0FBQ2hDLEtBQUEsSUFBSSxPQUFPM0QsT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQ0EsT0FBQUEsT0FBTyxDQUFDNkQsS0FBSyxDQUFDRCxPQUFPLENBQUMsQ0FBQTtNQUN4QjtLQUNBLElBQUk7QUFDRjtBQUNBO0FBQ0E7QUFDQSxPQUFBLE1BQU0sSUFBSUUsS0FBSyxDQUFDRixPQUFPLENBQUMsQ0FBQTtBQUMxQixNQUFDLENBQUMsT0FBT0csQ0FBQyxFQUFFLEVBQUM7SUFDZCxDQUFBO0VBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUNBLFNBQVNDLGNBQWNBLENBQUNDLFNBQVMsRUFBRUMsTUFBTSxFQUFFQyxRQUFRLEVBQUVDLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0dBQ2pDO0FBQ3pDLEtBQUEsS0FBSyxJQUFJQyxZQUFZLElBQUlMLFNBQVMsRUFBRTtBQUNsQyxPQUFBLElBQUlULEdBQUcsQ0FBQ1MsU0FBUyxFQUFFSyxZQUFZLENBQUMsRUFBRTtTQUNoQyxJQUFJVCxLQUFLLENBQUE7QUFDVDtBQUNBO0FBQ0E7U0FDQSxJQUFJO0FBQ0Y7QUFDQTtXQUNBLElBQUksT0FBT0ksU0FBUyxDQUFDSyxZQUFZLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDakQsYUFBQSxJQUFJNUIsR0FBRyxHQUFHb0IsS0FBSyxDQUNiLENBQUNNLGFBQWEsSUFBSSxhQUFhLElBQUksSUFBSSxHQUFHRCxRQUFRLEdBQUcsU0FBUyxHQUFHRyxZQUFZLEdBQUcsZ0JBQWdCLEdBQ2hHLDhFQUE4RSxHQUFHLE9BQU9MLFNBQVMsQ0FBQ0ssWUFBWSxDQUFDLEdBQUcsSUFDcEgsQ0FBQyxDQUFBO2FBQ0Q1QixHQUFHLENBQUM2QixJQUFJLEdBQUcscUJBQXFCLENBQUE7YUFDaEMsTUFBTTdCLEdBQUcsQ0FBQTtZQUNYO0FBQ0FtQixXQUFBQSxLQUFLLEdBQUdJLFNBQVMsQ0FBQ0ssWUFBWSxDQUFDLENBQUNKLE1BQU0sRUFBRUksWUFBWSxFQUFFRixhQUFhLEVBQUVELFFBQVEsRUFBRSxJQUFJLEVBQUVkLG9CQUFvQixDQUFDLENBQUE7VUFDM0csQ0FBQyxPQUFPbUIsRUFBRSxFQUFFO1dBQ1hYLEtBQUssR0FBR1csRUFBRSxDQUFBO1VBQ1o7U0FDQSxJQUFJWCxLQUFLLElBQUksRUFBRUEsS0FBSyxZQUFZQyxLQUFLLENBQUMsRUFBRTtBQUN0Q1IsV0FBQUEsWUFBWSxDQUNWLENBQUNjLGFBQWEsSUFBSSxhQUFhLElBQUksMEJBQTBCLEdBQzdERCxRQUFRLEdBQUcsSUFBSSxHQUFHRyxZQUFZLEdBQUcsaUNBQWlDLEdBQ2xFLDJEQUEyRCxHQUFHLE9BQU9ULEtBQUssR0FBRyxJQUFJLEdBQ2pGLGlFQUFpRSxHQUNqRSxnRUFBZ0UsR0FDaEUsaUNBQ0YsQ0FBQyxDQUFBO1VBQ0g7U0FDQSxJQUFJQSxLQUFLLFlBQVlDLEtBQUssSUFBSSxFQUFFRCxLQUFLLENBQUNELE9BQU8sSUFBSUwsa0JBQWtCLENBQUMsRUFBRTtBQUNwRTtBQUNBO1dBQ0FBLGtCQUFrQixDQUFDTSxLQUFLLENBQUNELE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQTtXQUV4QyxJQUFJYSxLQUFLLEdBQUdKLFFBQVEsR0FBR0EsUUFBUSxFQUFFLEdBQUcsRUFBRSxDQUFBO1dBRXRDZixZQUFZLENBQ1YsU0FBUyxHQUFHYSxRQUFRLEdBQUcsU0FBUyxHQUFHTixLQUFLLENBQUNELE9BQU8sSUFBSWEsS0FBSyxJQUFJLElBQUksR0FBR0EsS0FBSyxHQUFHLEVBQUUsQ0FDaEYsQ0FBQyxDQUFBO1VBQ0g7UUFDRjtNQUNGO0lBQ0Y7RUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBQ0FULGNBQWMsQ0FBQ1UsaUJBQWlCLEdBQUcsWUFBVztHQUNEO0tBQ3pDbkIsa0JBQWtCLEdBQUcsRUFBRSxDQUFBO0lBQ3pCO0FBQ0YsRUFBQyxDQUFBO0FBRUR6QyxDQUFBQSxnQkFBYyxHQUFHa0QsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0M1Ri9CLElBQUlXLE9BQU8sR0FBRzVELGNBQUFBLEVBQW1CLENBQUE7Q0FDakMsSUFBSVcsTUFBTSxHQUFHWCxtQkFBQUEsRUFBd0IsQ0FBQTtDQUVyQyxJQUFJc0Msb0JBQW9CLEdBQUd0QywyQkFBQUEsRUFBcUMsQ0FBQTtDQUNoRSxJQUFJaUQsY0FBYyxHQUFHakQscUJBQUFBLEVBQTJCLENBQUE7QUFFaEQsQ0FBQSxJQUFJeUMsR0FBRyxHQUFHQyxRQUFRLENBQUNMLElBQUksQ0FBQ00sSUFBSSxDQUFDekMsTUFBTSxDQUFDRSxTQUFTLENBQUNELGNBQWMsQ0FBQyxDQUFBO0FBQzdELENBQUEsSUFBSW9DLFlBQVksR0FBRyxZQUFXLEVBQUUsQ0FBQTtBQUVoQyxDQUEyQztBQUN6Q0EsR0FBQUEsWUFBWSxHQUFHLFVBQVNLLElBQUksRUFBRTtBQUM1QixLQUFBLElBQUlDLE9BQU8sR0FBRyxXQUFXLEdBQUdELElBQUksQ0FBQTtBQUNoQyxLQUFBLElBQUksT0FBTzNELE9BQU8sS0FBSyxXQUFXLEVBQUU7QUFDbENBLE9BQUFBLE9BQU8sQ0FBQzZELEtBQUssQ0FBQ0QsT0FBTyxDQUFDLENBQUE7TUFDeEI7S0FDQSxJQUFJO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsT0FBQSxNQUFNLElBQUlFLEtBQUssQ0FBQ0YsT0FBTyxDQUFDLENBQUE7QUFDMUIsTUFBQyxDQUFDLE9BQU9HLENBQUMsRUFBRSxFQUFDO0lBQ2QsQ0FBQTtFQUNIO0FBRUEsQ0FBQSxTQUFTYSw0QkFBNEJBLEdBQUc7R0FDdEMsT0FBTyxJQUFJLENBQUE7RUFDYjtBQUVBOUQsQ0FBQUEsdUJBQWMsR0FBRyxVQUFTK0QsY0FBYyxFQUFFQyxtQkFBbUIsRUFBRTtBQUM3RDtHQUNBLElBQUlDLGVBQWUsR0FBRyxPQUFPeEgsTUFBTSxLQUFLLFVBQVUsSUFBSUEsTUFBTSxDQUFDeUgsUUFBUSxDQUFBO0FBQ3JFLEdBQUEsSUFBSUMsb0JBQW9CLEdBQUcsWUFBWSxDQUFDOztBQUV4QztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0dBQ0UsU0FBU0MsYUFBYUEsQ0FBQ0MsYUFBYSxFQUFFO0FBQ3BDLEtBQUEsSUFBSUMsVUFBVSxHQUFHRCxhQUFhLEtBQUtKLGVBQWUsSUFBSUksYUFBYSxDQUFDSixlQUFlLENBQUMsSUFBSUksYUFBYSxDQUFDRixvQkFBb0IsQ0FBQyxDQUFDLENBQUE7QUFDNUgsS0FBQSxJQUFJLE9BQU9HLFVBQVUsS0FBSyxVQUFVLEVBQUU7T0FDcEMsT0FBT0EsVUFBVSxDQUFBO01BQ25CO0lBQ0Y7O0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBRUUsSUFBSUMsU0FBUyxHQUFHLGVBQWUsQ0FBQTs7QUFFL0I7QUFDQTtHQUNBLElBQUlDLGNBQWMsR0FBRztBQUNuQkMsS0FBQUEsS0FBSyxFQUFFQywwQkFBMEIsQ0FBQyxPQUFPLENBQUM7QUFDMUNDLEtBQUFBLElBQUksRUFBRUQsMEJBQTBCLENBQUMsU0FBUyxDQUFDO0FBQzNDRSxLQUFBQSxJQUFJLEVBQUVGLDBCQUEwQixDQUFDLFVBQVUsQ0FBQztBQUM1Q0csS0FBQUEsTUFBTSxFQUFFSCwwQkFBMEIsQ0FBQyxRQUFRLENBQUM7QUFDNUMxRyxLQUFBQSxNQUFNLEVBQUUwRywwQkFBMEIsQ0FBQyxRQUFRLENBQUM7QUFDNUNJLEtBQUFBLE1BQU0sRUFBRUosMEJBQTBCLENBQUMsUUFBUSxDQUFDO0FBQzVDSyxLQUFBQSxNQUFNLEVBQUVMLDBCQUEwQixDQUFDLFFBQVEsQ0FBQztLQUU1Q00sR0FBRyxFQUFFQyxvQkFBb0IsRUFBRTtLQUMzQkMsT0FBTyxFQUFFQyx3QkFBd0I7S0FDakNDLE9BQU8sRUFBRUMsd0JBQXdCLEVBQUU7S0FDbkNDLFdBQVcsRUFBRUMsNEJBQTRCLEVBQUU7S0FDM0NDLFVBQVUsRUFBRUMseUJBQXlCO0tBQ3JDQyxJQUFJLEVBQUVDLGlCQUFpQixFQUFFO0tBQ3pCQyxRQUFRLEVBQUVDLHlCQUF5QjtLQUNuQ0MsS0FBSyxFQUFFQyxxQkFBcUI7S0FDNUJDLFNBQVMsRUFBRUMsc0JBQXNCO0tBQ2pDQyxLQUFLLEVBQUVDLHNCQUFzQjtLQUM3QkMsS0FBSyxFQUFFQyw0QkFBQUE7SUFDUixDQUFBOztBQUVEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0U7QUFDQSxHQUFBLFNBQVNDLEVBQUVBLENBQUNyRCxDQUFDLEVBQUVzRCxDQUFDLEVBQUU7QUFDaEI7S0FDQSxJQUFJdEQsQ0FBQyxLQUFLc0QsQ0FBQyxFQUFFO0FBQ1g7QUFDQTtPQUNBLE9BQU90RCxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBR0EsQ0FBQyxLQUFLLENBQUMsR0FBR3NELENBQUMsQ0FBQTtBQUNuQyxNQUFDLE1BQU07QUFDTDtPQUNBLE9BQU90RCxDQUFDLEtBQUtBLENBQUMsSUFBSXNELENBQUMsS0FBS0EsQ0FBQyxDQUFBO01BQzNCO0lBQ0Y7QUFDQTs7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtHQUNFLFNBQVNDLGFBQWFBLENBQUMxRCxPQUFPLEVBQUU7S0FDOUIsSUFBSSxDQUFDQSxPQUFPLEdBQUdBLE9BQU8sQ0FBQTtLQUN0QixJQUFJLENBQUNhLEtBQUssR0FBRyxFQUFFLENBQUE7SUFDakI7QUFDQTtBQUNBNkMsR0FBQUEsYUFBYSxDQUFDbkcsU0FBUyxHQUFHMkMsS0FBSyxDQUFDM0MsU0FBUyxDQUFBO0dBRXpDLFNBQVNvRywwQkFBMEJBLENBQUNDLFFBQVEsRUFBRTtLQUNEO09BQ3pDLElBQUlDLHVCQUF1QixHQUFHLEVBQUUsQ0FBQTtPQUNoQyxJQUFJQywwQkFBMEIsR0FBRyxDQUFDLENBQUE7TUFDcEM7QUFDQSxLQUFBLFNBQVNDLFNBQVNBLENBQUNDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUUxRCxhQUFhLEVBQUVELFFBQVEsRUFBRTRELFlBQVksRUFBRUMsTUFBTSxFQUFFO09BQzdGNUQsYUFBYSxHQUFHQSxhQUFhLElBQUlpQixTQUFTLENBQUE7T0FDMUMwQyxZQUFZLEdBQUdBLFlBQVksSUFBSUQsUUFBUSxDQUFBO09BRXZDLElBQUlFLE1BQU0sS0FBSzNFLG9CQUFvQixFQUFFO1NBQ25DLElBQUl5QixtQkFBbUIsRUFBRTtBQUN2QjtXQUNBLElBQUlwQyxHQUFHLEdBQUcsSUFBSW9CLEtBQUssQ0FDakIsc0ZBQXNGLEdBQ3RGLGlEQUFpRCxHQUNqRCxnREFDRixDQUFDLENBQUE7V0FDRHBCLEdBQUcsQ0FBQzZCLElBQUksR0FBRyxxQkFBcUIsQ0FBQTtXQUNoQyxNQUFNN0IsR0FBRyxDQUFBO0FBQ1gsVUFBQyxNQUFNLElBQTZDLE9BQU8xQyxPQUFPLEtBQUssV0FBVyxFQUFFO0FBQ2xGO1dBQ0EsSUFBSWlJLFFBQVEsR0FBRzdELGFBQWEsR0FBRyxHQUFHLEdBQUcwRCxRQUFRLENBQUE7QUFDN0MsV0FBQSxJQUNFLENBQUNMLHVCQUF1QixDQUFDUSxRQUFRLENBQUM7QUFDbEM7V0FDQVAsMEJBQTBCLEdBQUcsQ0FBQyxFQUM5QjthQUNBcEUsWUFBWSxDQUNWLHdEQUF3RCxHQUN4RCxvQkFBb0IsR0FBR3lFLFlBQVksR0FBRyxhQUFhLEdBQUczRCxhQUFhLEdBQUksd0JBQXdCLEdBQy9GLHlEQUF5RCxHQUN6RCxnRUFBZ0UsR0FDaEUsK0RBQStELEdBQUcsY0FDcEUsQ0FBQyxDQUFBO0FBQ0RxRCxhQUFBQSx1QkFBdUIsQ0FBQ1EsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFBO2FBQ3hDUCwwQkFBMEIsRUFBRSxDQUFBO1lBQzlCO1VBQ0Y7UUFDRjtBQUNBLE9BQUEsSUFBSUcsS0FBSyxDQUFDQyxRQUFRLENBQUMsSUFBSSxJQUFJLEVBQUU7U0FDM0IsSUFBSUYsVUFBVSxFQUFFO0FBQ2QsV0FBQSxJQUFJQyxLQUFLLENBQUNDLFFBQVEsQ0FBQyxLQUFLLElBQUksRUFBRTthQUM1QixPQUFPLElBQUlSLGFBQWEsQ0FBQyxNQUFNLEdBQUduRCxRQUFRLEdBQUcsSUFBSSxHQUFHNEQsWUFBWSxHQUFHLDBCQUEwQixJQUFJLE1BQU0sR0FBRzNELGFBQWEsR0FBRyw2QkFBNkIsQ0FBQyxDQUFDLENBQUE7WUFDM0o7V0FDQSxPQUFPLElBQUlrRCxhQUFhLENBQUMsTUFBTSxHQUFHbkQsUUFBUSxHQUFHLElBQUksR0FBRzRELFlBQVksR0FBRyw2QkFBNkIsSUFBSSxHQUFHLEdBQUczRCxhQUFhLEdBQUcsa0NBQWtDLENBQUMsQ0FBQyxDQUFBO1VBQ2hLO1NBQ0EsT0FBTyxJQUFJLENBQUE7QUFDYixRQUFDLE1BQU07U0FDTCxPQUFPb0QsUUFBUSxDQUFDSyxLQUFLLEVBQUVDLFFBQVEsRUFBRTFELGFBQWEsRUFBRUQsUUFBUSxFQUFFNEQsWUFBWSxDQUFDLENBQUE7UUFDekU7TUFDRjtLQUVBLElBQUlHLGdCQUFnQixHQUFHUCxTQUFTLENBQUNqRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFBO0tBQ2xEd0UsZ0JBQWdCLENBQUNOLFVBQVUsR0FBR0QsU0FBUyxDQUFDakUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtLQUV4RCxPQUFPd0UsZ0JBQWdCLENBQUE7SUFDekI7R0FFQSxTQUFTMUMsMEJBQTBCQSxDQUFDMkMsWUFBWSxFQUFFO0FBQ2hELEtBQUEsU0FBU1gsUUFBUUEsQ0FBQ0ssS0FBSyxFQUFFQyxRQUFRLEVBQUUxRCxhQUFhLEVBQUVELFFBQVEsRUFBRTRELFlBQVksRUFBRUMsTUFBTSxFQUFFO0FBQ2hGLE9BQUEsSUFBSUksU0FBUyxHQUFHUCxLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFBO0FBQy9CLE9BQUEsSUFBSU8sUUFBUSxHQUFHQyxXQUFXLENBQUNGLFNBQVMsQ0FBQyxDQUFBO09BQ3JDLElBQUlDLFFBQVEsS0FBS0YsWUFBWSxFQUFFO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFNBQUEsSUFBSUksV0FBVyxHQUFHQyxjQUFjLENBQUNKLFNBQVMsQ0FBQyxDQUFBO0FBRTNDLFNBQUEsT0FBTyxJQUFJZCxhQUFhLENBQUMsVUFBVSxHQUFHbkQsUUFBUSxHQUFHLElBQUksR0FBRzRELFlBQVksR0FBRyxZQUFZLElBQUksR0FBRyxHQUFHUSxXQUFXLEdBQUcsaUJBQWlCLEdBQUduRSxhQUFhLEdBQUcsY0FBYyxDQUFDLElBQUksR0FBRyxHQUFHK0QsWUFBWSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDL0w7T0FDQSxPQUFPLElBQUksQ0FBQTtNQUNiO0tBQ0EsT0FBT1osMEJBQTBCLENBQUNDLFFBQVEsQ0FBQyxDQUFBO0lBQzdDO0dBRUEsU0FBU3pCLG9CQUFvQkEsR0FBRztLQUM5QixPQUFPd0IsMEJBQTBCLENBQUMzQyw0QkFBNEIsQ0FBQyxDQUFBO0lBQ2pFO0dBRUEsU0FBU3FCLHdCQUF3QkEsQ0FBQ3dDLFdBQVcsRUFBRTtLQUM3QyxTQUFTakIsUUFBUUEsQ0FBQ0ssS0FBSyxFQUFFQyxRQUFRLEVBQUUxRCxhQUFhLEVBQUVELFFBQVEsRUFBRTRELFlBQVksRUFBRTtBQUN4RSxPQUFBLElBQUksT0FBT1UsV0FBVyxLQUFLLFVBQVUsRUFBRTtBQUNyQyxTQUFBLE9BQU8sSUFBSW5CLGFBQWEsQ0FBQyxZQUFZLEdBQUdTLFlBQVksR0FBRyxrQkFBa0IsR0FBRzNELGFBQWEsR0FBRyxpREFBaUQsQ0FBQyxDQUFBO1FBQ2hKO0FBQ0EsT0FBQSxJQUFJZ0UsU0FBUyxHQUFHUCxLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFBO09BQy9CLElBQUksQ0FBQ1ksS0FBSyxDQUFDQyxPQUFPLENBQUNQLFNBQVMsQ0FBQyxFQUFFO0FBQzdCLFNBQUEsSUFBSUMsUUFBUSxHQUFHQyxXQUFXLENBQUNGLFNBQVMsQ0FBQyxDQUFBO1NBQ3JDLE9BQU8sSUFBSWQsYUFBYSxDQUFDLFVBQVUsR0FBR25ELFFBQVEsR0FBRyxJQUFJLEdBQUc0RCxZQUFZLEdBQUcsWUFBWSxJQUFJLEdBQUcsR0FBR00sUUFBUSxHQUFHLGlCQUFpQixHQUFHakUsYUFBYSxHQUFHLHVCQUF1QixDQUFDLENBQUMsQ0FBQTtRQUN2SztBQUNBLE9BQUEsS0FBSyxJQUFJckMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHcUcsU0FBUyxDQUFDbEYsTUFBTSxFQUFFbkIsQ0FBQyxFQUFFLEVBQUU7U0FDekMsSUFBSThCLEtBQUssR0FBRzRFLFdBQVcsQ0FBQ0wsU0FBUyxFQUFFckcsQ0FBQyxFQUFFcUMsYUFBYSxFQUFFRCxRQUFRLEVBQUU0RCxZQUFZLEdBQUcsR0FBRyxHQUFHaEcsQ0FBQyxHQUFHLEdBQUcsRUFBRXNCLG9CQUFvQixDQUFDLENBQUE7U0FDbEgsSUFBSVEsS0FBSyxZQUFZQyxLQUFLLEVBQUU7V0FDMUIsT0FBT0QsS0FBSyxDQUFBO1VBQ2Q7UUFDRjtPQUNBLE9BQU8sSUFBSSxDQUFBO01BQ2I7S0FDQSxPQUFPMEQsMEJBQTBCLENBQUNDLFFBQVEsQ0FBQyxDQUFBO0lBQzdDO0dBRUEsU0FBU3JCLHdCQUF3QkEsR0FBRztLQUNsQyxTQUFTcUIsUUFBUUEsQ0FBQ0ssS0FBSyxFQUFFQyxRQUFRLEVBQUUxRCxhQUFhLEVBQUVELFFBQVEsRUFBRTRELFlBQVksRUFBRTtBQUN4RSxPQUFBLElBQUlLLFNBQVMsR0FBR1AsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQTtBQUMvQixPQUFBLElBQUksQ0FBQ2pELGNBQWMsQ0FBQ3VELFNBQVMsQ0FBQyxFQUFFO0FBQzlCLFNBQUEsSUFBSUMsUUFBUSxHQUFHQyxXQUFXLENBQUNGLFNBQVMsQ0FBQyxDQUFBO1NBQ3JDLE9BQU8sSUFBSWQsYUFBYSxDQUFDLFVBQVUsR0FBR25ELFFBQVEsR0FBRyxJQUFJLEdBQUc0RCxZQUFZLEdBQUcsWUFBWSxJQUFJLEdBQUcsR0FBR00sUUFBUSxHQUFHLGlCQUFpQixHQUFHakUsYUFBYSxHQUFHLG9DQUFvQyxDQUFDLENBQUMsQ0FBQTtRQUNwTDtPQUNBLE9BQU8sSUFBSSxDQUFBO01BQ2I7S0FDQSxPQUFPbUQsMEJBQTBCLENBQUNDLFFBQVEsQ0FBQyxDQUFBO0lBQzdDO0dBRUEsU0FBU25CLDRCQUE0QkEsR0FBRztLQUN0QyxTQUFTbUIsUUFBUUEsQ0FBQ0ssS0FBSyxFQUFFQyxRQUFRLEVBQUUxRCxhQUFhLEVBQUVELFFBQVEsRUFBRTRELFlBQVksRUFBRTtBQUN4RSxPQUFBLElBQUlLLFNBQVMsR0FBR1AsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQTtPQUMvQixJQUFJLENBQUNuRCxPQUFPLENBQUNoRyxrQkFBa0IsQ0FBQ3lKLFNBQVMsQ0FBQyxFQUFFO0FBQzFDLFNBQUEsSUFBSUMsUUFBUSxHQUFHQyxXQUFXLENBQUNGLFNBQVMsQ0FBQyxDQUFBO1NBQ3JDLE9BQU8sSUFBSWQsYUFBYSxDQUFDLFVBQVUsR0FBR25ELFFBQVEsR0FBRyxJQUFJLEdBQUc0RCxZQUFZLEdBQUcsWUFBWSxJQUFJLEdBQUcsR0FBR00sUUFBUSxHQUFHLGlCQUFpQixHQUFHakUsYUFBYSxHQUFHLHlDQUF5QyxDQUFDLENBQUMsQ0FBQTtRQUN6TDtPQUNBLE9BQU8sSUFBSSxDQUFBO01BQ2I7S0FDQSxPQUFPbUQsMEJBQTBCLENBQUNDLFFBQVEsQ0FBQyxDQUFBO0lBQzdDO0dBRUEsU0FBU2pCLHlCQUF5QkEsQ0FBQ3FDLGFBQWEsRUFBRTtLQUNoRCxTQUFTcEIsUUFBUUEsQ0FBQ0ssS0FBSyxFQUFFQyxRQUFRLEVBQUUxRCxhQUFhLEVBQUVELFFBQVEsRUFBRTRELFlBQVksRUFBRTtPQUN4RSxJQUFJLEVBQUVGLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLFlBQVljLGFBQWEsQ0FBQyxFQUFFO1NBQy9DLElBQUlDLGlCQUFpQixHQUFHRCxhQUFhLENBQUNyRSxJQUFJLElBQUljLFNBQVMsQ0FBQTtTQUN2RCxJQUFJeUQsZUFBZSxHQUFHQyxZQUFZLENBQUNsQixLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUE7QUFDbkQsU0FBQSxPQUFPLElBQUlSLGFBQWEsQ0FBQyxVQUFVLEdBQUduRCxRQUFRLEdBQUcsSUFBSSxHQUFHNEQsWUFBWSxHQUFHLFlBQVksSUFBSSxHQUFHLEdBQUdlLGVBQWUsR0FBRyxpQkFBaUIsR0FBRzFFLGFBQWEsR0FBRyxjQUFjLENBQUMsSUFBSSxlQUFlLEdBQUd5RSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3BOO09BQ0EsT0FBTyxJQUFJLENBQUE7TUFDYjtLQUNBLE9BQU90QiwwQkFBMEIsQ0FBQ0MsUUFBUSxDQUFDLENBQUE7SUFDN0M7R0FFQSxTQUFTWCxxQkFBcUJBLENBQUNtQyxjQUFjLEVBQUU7S0FDN0MsSUFBSSxDQUFDTixLQUFLLENBQUNDLE9BQU8sQ0FBQ0ssY0FBYyxDQUFDLEVBQUU7T0FDUztBQUN6QyxTQUFBLElBQUkvRixTQUFTLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7V0FDeEJJLFlBQVksQ0FDViw4REFBOEQsR0FBR0wsU0FBUyxDQUFDQyxNQUFNLEdBQUcsY0FBYyxHQUNsRywwRUFDRixDQUFDLENBQUE7QUFDSCxVQUFDLE1BQU07V0FDTEksWUFBWSxDQUFDLHdEQUF3RCxDQUFDLENBQUE7VUFDeEU7UUFDRjtPQUNBLE9BQU9zQiw0QkFBNEIsQ0FBQTtNQUNyQztLQUVBLFNBQVM0QyxRQUFRQSxDQUFDSyxLQUFLLEVBQUVDLFFBQVEsRUFBRTFELGFBQWEsRUFBRUQsUUFBUSxFQUFFNEQsWUFBWSxFQUFFO0FBQ3hFLE9BQUEsSUFBSUssU0FBUyxHQUFHUCxLQUFLLENBQUNDLFFBQVEsQ0FBQyxDQUFBO0FBQy9CLE9BQUEsS0FBSyxJQUFJL0YsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHaUgsY0FBYyxDQUFDOUYsTUFBTSxFQUFFbkIsQ0FBQyxFQUFFLEVBQUU7U0FDOUMsSUFBSXFGLEVBQUUsQ0FBQ2dCLFNBQVMsRUFBRVksY0FBYyxDQUFDakgsQ0FBQyxDQUFDLENBQUMsRUFBRTtXQUNwQyxPQUFPLElBQUksQ0FBQTtVQUNiO1FBQ0Y7QUFFQSxPQUFBLElBQUlrSCxZQUFZLEdBQUdDLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxjQUFjLEVBQUUsU0FBU0ksUUFBUUEsQ0FBQ2pHLEdBQUcsRUFBRWtHLEtBQUssRUFBRTtBQUM5RSxTQUFBLElBQUl0TSxJQUFJLEdBQUd5TCxjQUFjLENBQUNhLEtBQUssQ0FBQyxDQUFBO1NBQ2hDLElBQUl0TSxJQUFJLEtBQUssUUFBUSxFQUFFO1dBQ3JCLE9BQU82RSxNQUFNLENBQUN5SCxLQUFLLENBQUMsQ0FBQTtVQUN0QjtTQUNBLE9BQU9BLEtBQUssQ0FBQTtBQUNkLFFBQUMsQ0FBQyxDQUFBO0FBQ0YsT0FBQSxPQUFPLElBQUkvQixhQUFhLENBQUMsVUFBVSxHQUFHbkQsUUFBUSxHQUFHLElBQUksR0FBRzRELFlBQVksR0FBRyxjQUFjLEdBQUduRyxNQUFNLENBQUN3RyxTQUFTLENBQUMsR0FBRyxJQUFJLElBQUksZUFBZSxHQUFHaEUsYUFBYSxHQUFHLHFCQUFxQixHQUFHNkUsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7TUFDcE07S0FDQSxPQUFPMUIsMEJBQTBCLENBQUNDLFFBQVEsQ0FBQyxDQUFBO0lBQzdDO0dBRUEsU0FBU2IseUJBQXlCQSxDQUFDOEIsV0FBVyxFQUFFO0tBQzlDLFNBQVNqQixRQUFRQSxDQUFDSyxLQUFLLEVBQUVDLFFBQVEsRUFBRTFELGFBQWEsRUFBRUQsUUFBUSxFQUFFNEQsWUFBWSxFQUFFO0FBQ3hFLE9BQUEsSUFBSSxPQUFPVSxXQUFXLEtBQUssVUFBVSxFQUFFO0FBQ3JDLFNBQUEsT0FBTyxJQUFJbkIsYUFBYSxDQUFDLFlBQVksR0FBR1MsWUFBWSxHQUFHLGtCQUFrQixHQUFHM0QsYUFBYSxHQUFHLGtEQUFrRCxDQUFDLENBQUE7UUFDako7QUFDQSxPQUFBLElBQUlnRSxTQUFTLEdBQUdQLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLENBQUE7QUFDL0IsT0FBQSxJQUFJTyxRQUFRLEdBQUdDLFdBQVcsQ0FBQ0YsU0FBUyxDQUFDLENBQUE7T0FDckMsSUFBSUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtTQUN6QixPQUFPLElBQUlmLGFBQWEsQ0FBQyxVQUFVLEdBQUduRCxRQUFRLEdBQUcsSUFBSSxHQUFHNEQsWUFBWSxHQUFHLFlBQVksSUFBSSxHQUFHLEdBQUdNLFFBQVEsR0FBRyxpQkFBaUIsR0FBR2pFLGFBQWEsR0FBRyx3QkFBd0IsQ0FBQyxDQUFDLENBQUE7UUFDeEs7QUFDQSxPQUFBLEtBQUssSUFBSWpCLEdBQUcsSUFBSWlGLFNBQVMsRUFBRTtBQUN6QixTQUFBLElBQUk1RSxHQUFHLENBQUM0RSxTQUFTLEVBQUVqRixHQUFHLENBQUMsRUFBRTtXQUN2QixJQUFJVSxLQUFLLEdBQUc0RSxXQUFXLENBQUNMLFNBQVMsRUFBRWpGLEdBQUcsRUFBRWlCLGFBQWEsRUFBRUQsUUFBUSxFQUFFNEQsWUFBWSxHQUFHLEdBQUcsR0FBRzVFLEdBQUcsRUFBRUUsb0JBQW9CLENBQUMsQ0FBQTtXQUNoSCxJQUFJUSxLQUFLLFlBQVlDLEtBQUssRUFBRTthQUMxQixPQUFPRCxLQUFLLENBQUE7WUFDZDtVQUNGO1FBQ0Y7T0FDQSxPQUFPLElBQUksQ0FBQTtNQUNiO0tBQ0EsT0FBTzBELDBCQUEwQixDQUFDQyxRQUFRLENBQUMsQ0FBQTtJQUM3QztHQUVBLFNBQVNULHNCQUFzQkEsQ0FBQ3VDLG1CQUFtQixFQUFFO0tBQ25ELElBQUksQ0FBQ1osS0FBSyxDQUFDQyxPQUFPLENBQUNXLG1CQUFtQixDQUFDLEVBQUU7QUFDdkNDLE9BQXdDakcsWUFBWSxDQUFDLHdFQUF3RSxDQUFDLENBQVMsQ0FBQTtPQUN2SSxPQUFPc0IsNEJBQTRCLENBQUE7TUFDckM7QUFFQSxLQUFBLEtBQUssSUFBSTdDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR3VILG1CQUFtQixDQUFDcEcsTUFBTSxFQUFFbkIsQ0FBQyxFQUFFLEVBQUU7QUFDbkQsT0FBQSxJQUFJeUgsT0FBTyxHQUFHRixtQkFBbUIsQ0FBQ3ZILENBQUMsQ0FBQyxDQUFBO0FBQ3BDLE9BQUEsSUFBSSxPQUFPeUgsT0FBTyxLQUFLLFVBQVUsRUFBRTtBQUNqQ2xHLFNBQUFBLFlBQVksQ0FDVixvRkFBb0YsR0FDcEYsV0FBVyxHQUFHbUcsd0JBQXdCLENBQUNELE9BQU8sQ0FBQyxHQUFHLFlBQVksR0FBR3pILENBQUMsR0FBRyxHQUN2RSxDQUFDLENBQUE7U0FDRCxPQUFPNkMsNEJBQTRCLENBQUE7UUFDckM7TUFDRjtLQUVBLFNBQVM0QyxRQUFRQSxDQUFDSyxLQUFLLEVBQUVDLFFBQVEsRUFBRTFELGFBQWEsRUFBRUQsUUFBUSxFQUFFNEQsWUFBWSxFQUFFO0FBQ3hFLE9BQUEsS0FBSyxJQUFJaEcsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHdUgsbUJBQW1CLENBQUNwRyxNQUFNLEVBQUVuQixDQUFDLEVBQUUsRUFBRTtBQUNuRCxTQUFBLElBQUl5SCxPQUFPLEdBQUdGLG1CQUFtQixDQUFDdkgsQ0FBQyxDQUFDLENBQUE7QUFDcEMsU0FBQSxJQUFJeUgsT0FBTyxDQUFDM0IsS0FBSyxFQUFFQyxRQUFRLEVBQUUxRCxhQUFhLEVBQUVELFFBQVEsRUFBRTRELFlBQVksRUFBRTFFLG9CQUFvQixDQUFDLElBQUksSUFBSSxFQUFFO1dBQ2pHLE9BQU8sSUFBSSxDQUFBO1VBQ2I7UUFDRjtPQUVBLE9BQU8sSUFBSWlFLGFBQWEsQ0FBQyxVQUFVLEdBQUduRCxRQUFRLEdBQUcsSUFBSSxHQUFHNEQsWUFBWSxHQUFHLGdCQUFnQixJQUFJLEdBQUcsR0FBRzNELGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFBO01BQ3pIO0tBQ0EsT0FBT21ELDBCQUEwQixDQUFDQyxRQUFRLENBQUMsQ0FBQTtJQUM3QztHQUVBLFNBQVNmLGlCQUFpQkEsR0FBRztLQUMzQixTQUFTZSxRQUFRQSxDQUFDSyxLQUFLLEVBQUVDLFFBQVEsRUFBRTFELGFBQWEsRUFBRUQsUUFBUSxFQUFFNEQsWUFBWSxFQUFFO09BQ3hFLElBQUksQ0FBQzJCLE1BQU0sQ0FBQzdCLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLENBQUMsRUFBRTtTQUM1QixPQUFPLElBQUlSLGFBQWEsQ0FBQyxVQUFVLEdBQUduRCxRQUFRLEdBQUcsSUFBSSxHQUFHNEQsWUFBWSxHQUFHLGdCQUFnQixJQUFJLEdBQUcsR0FBRzNELGFBQWEsR0FBRywwQkFBMEIsQ0FBQyxDQUFDLENBQUE7UUFDL0k7T0FDQSxPQUFPLElBQUksQ0FBQTtNQUNiO0tBQ0EsT0FBT21ELDBCQUEwQixDQUFDQyxRQUFRLENBQUMsQ0FBQTtJQUM3QztHQUVBLFNBQVNQLHNCQUFzQkEsQ0FBQzBDLFVBQVUsRUFBRTtLQUMxQyxTQUFTbkMsUUFBUUEsQ0FBQ0ssS0FBSyxFQUFFQyxRQUFRLEVBQUUxRCxhQUFhLEVBQUVELFFBQVEsRUFBRTRELFlBQVksRUFBRTtBQUN4RSxPQUFBLElBQUlLLFNBQVMsR0FBR1AsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQTtBQUMvQixPQUFBLElBQUlPLFFBQVEsR0FBR0MsV0FBVyxDQUFDRixTQUFTLENBQUMsQ0FBQTtPQUNyQyxJQUFJQyxRQUFRLEtBQUssUUFBUSxFQUFFO1NBQ3pCLE9BQU8sSUFBSWYsYUFBYSxDQUFDLFVBQVUsR0FBR25ELFFBQVEsR0FBRyxJQUFJLEdBQUc0RCxZQUFZLEdBQUcsYUFBYSxHQUFHTSxRQUFRLEdBQUcsSUFBSSxJQUFJLGVBQWUsR0FBR2pFLGFBQWEsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDLENBQUE7UUFDdks7QUFDQSxPQUFBLEtBQUssSUFBSWpCLEdBQUcsSUFBSXdHLFVBQVUsRUFBRTtBQUMxQixTQUFBLElBQUlILE9BQU8sR0FBR0csVUFBVSxDQUFDeEcsR0FBRyxDQUFDLENBQUE7U0FDN0IsSUFBSSxDQUFDcUcsT0FBTyxFQUFFO0FBQ1osV0FBQSxTQUFBO1VBQ0Y7U0FDQSxJQUFJM0YsS0FBSyxHQUFHMkYsT0FBTyxDQUFDcEIsU0FBUyxFQUFFakYsR0FBRyxFQUFFaUIsYUFBYSxFQUFFRCxRQUFRLEVBQUU0RCxZQUFZLEdBQUcsR0FBRyxHQUFHNUUsR0FBRyxFQUFFRSxvQkFBb0IsQ0FBQyxDQUFBO1NBQzVHLElBQUlRLEtBQUssRUFBRTtXQUNULE9BQU9BLEtBQUssQ0FBQTtVQUNkO1FBQ0Y7T0FDQSxPQUFPLElBQUksQ0FBQTtNQUNiO0tBQ0EsT0FBTzBELDBCQUEwQixDQUFDQyxRQUFRLENBQUMsQ0FBQTtJQUM3QztHQUVBLFNBQVNMLDRCQUE0QkEsQ0FBQ3dDLFVBQVUsRUFBRTtLQUNoRCxTQUFTbkMsUUFBUUEsQ0FBQ0ssS0FBSyxFQUFFQyxRQUFRLEVBQUUxRCxhQUFhLEVBQUVELFFBQVEsRUFBRTRELFlBQVksRUFBRTtBQUN4RSxPQUFBLElBQUlLLFNBQVMsR0FBR1AsS0FBSyxDQUFDQyxRQUFRLENBQUMsQ0FBQTtBQUMvQixPQUFBLElBQUlPLFFBQVEsR0FBR0MsV0FBVyxDQUFDRixTQUFTLENBQUMsQ0FBQTtPQUNyQyxJQUFJQyxRQUFRLEtBQUssUUFBUSxFQUFFO1NBQ3pCLE9BQU8sSUFBSWYsYUFBYSxDQUFDLFVBQVUsR0FBR25ELFFBQVEsR0FBRyxJQUFJLEdBQUc0RCxZQUFZLEdBQUcsYUFBYSxHQUFHTSxRQUFRLEdBQUcsSUFBSSxJQUFJLGVBQWUsR0FBR2pFLGFBQWEsR0FBRyx1QkFBdUIsQ0FBQyxDQUFDLENBQUE7UUFDdks7QUFDQTtBQUNBO0FBQ0EsT0FBQSxJQUFJd0YsT0FBTyxHQUFHbEksTUFBTSxDQUFDLEVBQUUsRUFBRW1HLEtBQUssQ0FBQ0MsUUFBUSxDQUFDLEVBQUU2QixVQUFVLENBQUMsQ0FBQTtBQUNyRCxPQUFBLEtBQUssSUFBSXhHLEdBQUcsSUFBSXlHLE9BQU8sRUFBRTtBQUN2QixTQUFBLElBQUlKLE9BQU8sR0FBR0csVUFBVSxDQUFDeEcsR0FBRyxDQUFDLENBQUE7U0FDN0IsSUFBSSxDQUFDcUcsT0FBTyxFQUFFO1dBQ1osT0FBTyxJQUFJbEMsYUFBYSxDQUN0QixVQUFVLEdBQUduRCxRQUFRLEdBQUcsSUFBSSxHQUFHNEQsWUFBWSxHQUFHLFNBQVMsR0FBRzVFLEdBQUcsR0FBRyxpQkFBaUIsR0FBR2lCLGFBQWEsR0FBRyxJQUFJLEdBQ3hHLGdCQUFnQixHQUFHOEUsSUFBSSxDQUFDQyxTQUFTLENBQUN0QixLQUFLLENBQUNDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsR0FDOUQsZ0JBQWdCLEdBQUlvQixJQUFJLENBQUNDLFNBQVMsQ0FBQ2xJLE1BQU0sQ0FBQ3dCLElBQUksQ0FBQ2tILFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQ3hFLENBQUMsQ0FBQTtVQUNIO1NBQ0EsSUFBSTlGLEtBQUssR0FBRzJGLE9BQU8sQ0FBQ3BCLFNBQVMsRUFBRWpGLEdBQUcsRUFBRWlCLGFBQWEsRUFBRUQsUUFBUSxFQUFFNEQsWUFBWSxHQUFHLEdBQUcsR0FBRzVFLEdBQUcsRUFBRUUsb0JBQW9CLENBQUMsQ0FBQTtTQUM1RyxJQUFJUSxLQUFLLEVBQUU7V0FDVCxPQUFPQSxLQUFLLENBQUE7VUFDZDtRQUNGO09BQ0EsT0FBTyxJQUFJLENBQUE7TUFDYjtLQUVBLE9BQU8wRCwwQkFBMEIsQ0FBQ0MsUUFBUSxDQUFDLENBQUE7SUFDN0M7R0FFQSxTQUFTa0MsTUFBTUEsQ0FBQ3RCLFNBQVMsRUFBRTtLQUN6QixRQUFRLE9BQU9BLFNBQVM7T0FDdEIsS0FBSyxRQUFRLENBQUE7T0FDYixLQUFLLFFBQVEsQ0FBQTtBQUNiLE9BQUEsS0FBSyxXQUFXO1NBQ2QsT0FBTyxJQUFJLENBQUE7QUFDYixPQUFBLEtBQUssU0FBUztTQUNaLE9BQU8sQ0FBQ0EsU0FBUyxDQUFBO0FBQ25CLE9BQUEsS0FBSyxRQUFRO0FBQ1gsU0FBQSxJQUFJTSxLQUFLLENBQUNDLE9BQU8sQ0FBQ1AsU0FBUyxDQUFDLEVBQUU7QUFDNUIsV0FBQSxPQUFPQSxTQUFTLENBQUN5QixLQUFLLENBQUNILE1BQU0sQ0FBQyxDQUFBO1VBQ2hDO1NBQ0EsSUFBSXRCLFNBQVMsS0FBSyxJQUFJLElBQUl2RCxjQUFjLENBQUN1RCxTQUFTLENBQUMsRUFBRTtXQUNuRCxPQUFPLElBQUksQ0FBQTtVQUNiO0FBRUEsU0FBQSxJQUFJaEQsVUFBVSxHQUFHRixhQUFhLENBQUNrRCxTQUFTLENBQUMsQ0FBQTtTQUN6QyxJQUFJaEQsVUFBVSxFQUFFO1dBQ2QsSUFBSUosUUFBUSxHQUFHSSxVQUFVLENBQUNoQyxJQUFJLENBQUNnRixTQUFTLENBQUMsQ0FBQTtXQUN6QyxJQUFJMEIsSUFBSSxDQUFBO0FBQ1IsV0FBQSxJQUFJMUUsVUFBVSxLQUFLZ0QsU0FBUyxDQUFDMkIsT0FBTyxFQUFFO2FBQ3BDLE9BQU8sQ0FBQyxDQUFDRCxJQUFJLEdBQUc5RSxRQUFRLENBQUNnRixJQUFJLEVBQUUsRUFBRUMsSUFBSSxFQUFFO2VBQ3JDLElBQUksQ0FBQ1AsTUFBTSxDQUFDSSxJQUFJLENBQUNULEtBQUssQ0FBQyxFQUFFO2lCQUN2QixPQUFPLEtBQUssQ0FBQTtnQkFDZDtjQUNGO0FBQ0YsWUFBQyxNQUFNO0FBQ0w7YUFDQSxPQUFPLENBQUMsQ0FBQ1MsSUFBSSxHQUFHOUUsUUFBUSxDQUFDZ0YsSUFBSSxFQUFFLEVBQUVDLElBQUksRUFBRTtBQUNyQyxlQUFBLElBQUlDLEtBQUssR0FBR0osSUFBSSxDQUFDVCxLQUFLLENBQUE7ZUFDdEIsSUFBSWEsS0FBSyxFQUFFO2lCQUNULElBQUksQ0FBQ1IsTUFBTSxDQUFDUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTttQkFDckIsT0FBTyxLQUFLLENBQUE7a0JBQ2Q7Z0JBQ0Y7Y0FDRjtZQUNGO0FBQ0YsVUFBQyxNQUFNO1dBQ0wsT0FBTyxLQUFLLENBQUE7VUFDZDtTQUVBLE9BQU8sSUFBSSxDQUFBO09BQ2I7U0FDRSxPQUFPLEtBQUssQ0FBQTtNQUNoQjtJQUNGO0FBRUEsR0FBQSxTQUFTQyxRQUFRQSxDQUFDOUIsUUFBUSxFQUFFRCxTQUFTLEVBQUU7QUFDckM7S0FDQSxJQUFJQyxRQUFRLEtBQUssUUFBUSxFQUFFO09BQ3pCLE9BQU8sSUFBSSxDQUFBO01BQ2I7O0FBRUE7S0FDQSxJQUFJLENBQUNELFNBQVMsRUFBRTtPQUNkLE9BQU8sS0FBSyxDQUFBO01BQ2Q7O0FBRUE7QUFDQSxLQUFBLElBQUlBLFNBQVMsQ0FBQyxlQUFlLENBQUMsS0FBSyxRQUFRLEVBQUU7T0FDM0MsT0FBTyxJQUFJLENBQUE7TUFDYjs7QUFFQTtLQUNBLElBQUksT0FBTzdLLE1BQU0sS0FBSyxVQUFVLElBQUk2SyxTQUFTLFlBQVk3SyxNQUFNLEVBQUU7T0FDL0QsT0FBTyxJQUFJLENBQUE7TUFDYjtLQUVBLE9BQU8sS0FBSyxDQUFBO0lBQ2Q7O0FBRUE7R0FDQSxTQUFTK0ssV0FBV0EsQ0FBQ0YsU0FBUyxFQUFFO0tBQzlCLElBQUlDLFFBQVEsR0FBRyxPQUFPRCxTQUFTLENBQUE7QUFDL0IsS0FBQSxJQUFJTSxLQUFLLENBQUNDLE9BQU8sQ0FBQ1AsU0FBUyxDQUFDLEVBQUU7T0FDNUIsT0FBTyxPQUFPLENBQUE7TUFDaEI7S0FDQSxJQUFJQSxTQUFTLFlBQVlnQyxNQUFNLEVBQUU7QUFDL0I7QUFDQTtBQUNBO09BQ0EsT0FBTyxRQUFRLENBQUE7TUFDakI7QUFDQSxLQUFBLElBQUlELFFBQVEsQ0FBQzlCLFFBQVEsRUFBRUQsU0FBUyxDQUFDLEVBQUU7T0FDakMsT0FBTyxRQUFRLENBQUE7TUFDakI7S0FDQSxPQUFPQyxRQUFRLENBQUE7SUFDakI7O0FBRUE7QUFDQTtHQUNBLFNBQVNHLGNBQWNBLENBQUNKLFNBQVMsRUFBRTtLQUNqQyxJQUFJLE9BQU9BLFNBQVMsS0FBSyxXQUFXLElBQUlBLFNBQVMsS0FBSyxJQUFJLEVBQUU7T0FDMUQsT0FBTyxFQUFFLEdBQUdBLFNBQVMsQ0FBQTtNQUN2QjtBQUNBLEtBQUEsSUFBSUMsUUFBUSxHQUFHQyxXQUFXLENBQUNGLFNBQVMsQ0FBQyxDQUFBO0tBQ3JDLElBQUlDLFFBQVEsS0FBSyxRQUFRLEVBQUU7T0FDekIsSUFBSUQsU0FBUyxZQUFZaUMsSUFBSSxFQUFFO1NBQzdCLE9BQU8sTUFBTSxDQUFBO0FBQ2YsUUFBQyxNQUFNLElBQUlqQyxTQUFTLFlBQVlnQyxNQUFNLEVBQUU7U0FDdEMsT0FBTyxRQUFRLENBQUE7UUFDakI7TUFDRjtLQUNBLE9BQU8vQixRQUFRLENBQUE7SUFDakI7O0FBRUE7QUFDQTtHQUNBLFNBQVNvQix3QkFBd0JBLENBQUNKLEtBQUssRUFBRTtBQUN2QyxLQUFBLElBQUl0TSxJQUFJLEdBQUd5TCxjQUFjLENBQUNhLEtBQUssQ0FBQyxDQUFBO0FBQ2hDLEtBQUEsUUFBUXRNLElBQUk7T0FDVixLQUFLLE9BQU8sQ0FBQTtBQUNaLE9BQUEsS0FBSyxRQUFRO1NBQ1gsT0FBTyxLQUFLLEdBQUdBLElBQUksQ0FBQTtPQUNyQixLQUFLLFNBQVMsQ0FBQTtPQUNkLEtBQUssTUFBTSxDQUFBO0FBQ1gsT0FBQSxLQUFLLFFBQVE7U0FDWCxPQUFPLElBQUksR0FBR0EsSUFBSSxDQUFBO09BQ3BCO1NBQ0UsT0FBT0EsSUFBSSxDQUFBO01BQ2Y7SUFDRjs7QUFFQTtHQUNBLFNBQVNnTSxZQUFZQSxDQUFDWCxTQUFTLEVBQUU7S0FDL0IsSUFBSSxDQUFDQSxTQUFTLENBQUNrQyxXQUFXLElBQUksQ0FBQ2xDLFNBQVMsQ0FBQ2tDLFdBQVcsQ0FBQy9GLElBQUksRUFBRTtPQUN6RCxPQUFPYyxTQUFTLENBQUE7TUFDbEI7QUFDQSxLQUFBLE9BQU8rQyxTQUFTLENBQUNrQyxXQUFXLENBQUMvRixJQUFJLENBQUE7SUFDbkM7R0FFQWUsY0FBYyxDQUFDdEIsY0FBYyxHQUFHQSxjQUFjLENBQUE7QUFDOUNzQixHQUFBQSxjQUFjLENBQUNaLGlCQUFpQixHQUFHVixjQUFjLENBQUNVLGlCQUFpQixDQUFBO0dBQ25FWSxjQUFjLENBQUNpRixTQUFTLEdBQUdqRixjQUFjLENBQUE7R0FFekMsT0FBT0EsY0FBYyxDQUFBO0VBQ3RCLENBQUE7Ozs7Ozs7Ozs7O0FDdmtCMEM7QUFDekMsRUFBQSxJQUFJWCxPQUFPLEdBQUc1RCxjQUFBQSxFQUFtQixDQUFBOztBQUVqQztBQUNBO0VBQ0EsSUFBSStELG1CQUFtQixHQUFHLElBQUksQ0FBQTtBQUM5QmhFLEVBQUFBLFNBQUFBLENBQUFBLE9BQWMsR0FBR0MsOEJBQUFBLEVBQW9DLENBQUM0RCxPQUFPLENBQUN2RSxTQUFTLEVBQUUwRSxtQkFBbUIsQ0FBQyxDQUFBO0FBQy9GOztBQ2RBLElBQUkwRixTQUFTLEdBQUcsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsQ0FBQTtBQUN6SixTQUFTQyxVQUFRQSxHQUFHO0FBQUVBLEVBQUFBLFVBQVEsR0FBR3hKLE1BQU0sQ0FBQ1MsTUFBTSxHQUFHVCxNQUFNLENBQUNTLE1BQU0sQ0FBQ2dDLElBQUksRUFBRSxHQUFHLFVBQVVmLE1BQU0sRUFBRTtBQUFFLElBQUEsS0FBSyxJQUFJWixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdrQixTQUFTLENBQUNDLE1BQU0sRUFBRW5CLENBQUMsRUFBRSxFQUFFO0FBQUUsTUFBQSxJQUFJYSxNQUFNLEdBQUdLLFNBQVMsQ0FBQ2xCLENBQUMsQ0FBQyxDQUFBO0FBQUUsTUFBQSxLQUFLLElBQUlvQixHQUFHLElBQUlQLE1BQU0sRUFBRTtBQUFFLFFBQUEsSUFBSTNCLE1BQU0sQ0FBQ0UsU0FBUyxDQUFDRCxjQUFjLENBQUNrQyxJQUFJLENBQUNSLE1BQU0sRUFBRU8sR0FBRyxDQUFDLEVBQUU7QUFBRVIsVUFBQUEsTUFBTSxDQUFDUSxHQUFHLENBQUMsR0FBR1AsTUFBTSxDQUFDTyxHQUFHLENBQUMsQ0FBQTtBQUFFLFNBQUE7QUFBRSxPQUFBO0FBQUUsS0FBQTtBQUFFLElBQUEsT0FBT1IsTUFBTSxDQUFBO0dBQUcsQ0FBQTtBQUFFLEVBQUEsT0FBTzhILFVBQVEsQ0FBQ0MsS0FBSyxDQUFDLElBQUksRUFBRXpILFNBQVMsQ0FBQyxDQUFBO0FBQUUsQ0FBQTtBQUNsVixTQUFTMEgsK0JBQTZCQSxDQUFDL0gsTUFBTSxFQUFFZ0ksUUFBUSxFQUFFO0FBQUUsRUFBQSxJQUFJaEksTUFBTSxJQUFJLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQTtFQUFFLElBQUlELE1BQU0sR0FBRyxFQUFFLENBQUE7QUFBRSxFQUFBLElBQUlrSSxVQUFVLEdBQUc1SixNQUFNLENBQUN3QixJQUFJLENBQUNHLE1BQU0sQ0FBQyxDQUFBO0VBQUUsSUFBSU8sR0FBRyxFQUFFcEIsQ0FBQyxDQUFBO0FBQUUsRUFBQSxLQUFLQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc4SSxVQUFVLENBQUMzSCxNQUFNLEVBQUVuQixDQUFDLEVBQUUsRUFBRTtBQUFFb0IsSUFBQUEsR0FBRyxHQUFHMEgsVUFBVSxDQUFDOUksQ0FBQyxDQUFDLENBQUE7SUFBRSxJQUFJNkksUUFBUSxDQUFDRSxPQUFPLENBQUMzSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBQTtBQUFVUixJQUFBQSxNQUFNLENBQUNRLEdBQUcsQ0FBQyxHQUFHUCxNQUFNLENBQUNPLEdBQUcsQ0FBQyxDQUFBO0FBQUUsR0FBQTtBQUFFLEVBQUEsT0FBT1IsTUFBTSxDQUFBO0FBQUUsQ0FBQTtBQUNsVCxTQUFTb0ksc0JBQXNCQSxDQUFDQyxJQUFJLEVBQUU7QUFBRSxFQUFBLElBQUlBLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtBQUFFLElBQUEsTUFBTSxJQUFJQyxjQUFjLENBQUMsMkRBQTJELENBQUMsQ0FBQTtBQUFFLEdBQUE7QUFBRSxFQUFBLE9BQU9ELElBQUksQ0FBQTtBQUFFLENBQUE7QUFDckssU0FBU0UsZ0JBQWNBLENBQUNDLFFBQVEsRUFBRUMsVUFBVSxFQUFFO0VBQUVELFFBQVEsQ0FBQ2hLLFNBQVMsR0FBR0YsTUFBTSxDQUFDb0ssTUFBTSxDQUFDRCxVQUFVLENBQUNqSyxTQUFTLENBQUMsQ0FBQTtBQUFFZ0ssRUFBQUEsUUFBUSxDQUFDaEssU0FBUyxDQUFDbUosV0FBVyxHQUFHYSxRQUFRLENBQUE7QUFBRUcsRUFBQUEsZUFBZSxDQUFDSCxRQUFRLEVBQUVDLFVBQVUsQ0FBQyxDQUFBO0FBQUUsQ0FBQTtBQUM1TCxTQUFTRSxlQUFlQSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsRUFBRTtBQUFFRixFQUFBQSxlQUFlLEdBQUdySyxNQUFNLENBQUN3SyxjQUFjLEdBQUd4SyxNQUFNLENBQUN3SyxjQUFjLENBQUMvSCxJQUFJLEVBQUUsR0FBRyxTQUFTNEgsZUFBZUEsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFBRUQsQ0FBQyxDQUFDRyxTQUFTLEdBQUdGLENBQUMsQ0FBQTtBQUFFLElBQUEsT0FBT0QsQ0FBQyxDQUFBO0dBQUcsQ0FBQTtBQUFFLEVBQUEsT0FBT0QsZUFBZSxDQUFDQyxDQUFDLEVBQUVDLENBQUMsQ0FBQyxDQUFBO0FBQUUsQ0FBQTtBQUd2TSxJQUFJRyxTQUFTLGdCQUFnQixVQUFVQyxnQkFBZ0IsRUFBRTtBQUN2RFYsRUFBQUEsZ0JBQWMsQ0FBQ1MsU0FBUyxFQUFFQyxnQkFBZ0IsQ0FBQyxDQUFBO0VBQzNDLFNBQVNELFNBQVNBLEdBQUc7QUFDbkIsSUFBQSxJQUFJRSxLQUFLLENBQUE7SUFDVEEsS0FBSyxHQUFHRCxnQkFBZ0IsQ0FBQ3hJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUE7QUFDM0N5SSxJQUFBQSxLQUFLLENBQUNDLGFBQWEsR0FBR0QsS0FBSyxDQUFDQyxhQUFhLENBQUNwSSxJQUFJLENBQUNxSCxzQkFBc0IsQ0FBQ2MsS0FBSyxDQUFDLENBQUMsQ0FBQTtBQUM3RUEsSUFBQUEsS0FBSyxDQUFDRSxhQUFhLEdBQUdGLEtBQUssQ0FBQ0UsYUFBYSxDQUFDckksSUFBSSxDQUFDcUgsc0JBQXNCLENBQUNjLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDN0VBLElBQUFBLEtBQUssQ0FBQ0csWUFBWSxHQUFHSCxLQUFLLENBQUNHLFlBQVksQ0FBQ3RJLElBQUksQ0FBQ3FILHNCQUFzQixDQUFDYyxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBQzNFQSxJQUFBQSxLQUFLLENBQUNJLGtCQUFrQixHQUFHSixLQUFLLENBQUNJLGtCQUFrQixDQUFDdkksSUFBSSxDQUFDcUgsc0JBQXNCLENBQUNjLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDdkYsSUFBQSxPQUFPQSxLQUFLLENBQUE7QUFDZCxHQUFBO0FBQ0EsRUFBQSxJQUFJSyxNQUFNLEdBQUdQLFNBQVMsQ0FBQ3hLLFNBQVMsQ0FBQTtBQUNoQytLLEVBQUFBLE1BQU0sQ0FBQ0Msa0JBQWtCLEdBQUcsU0FBU0Esa0JBQWtCQSxDQUFDQyxNQUFNLEVBQUU7QUFDOUQsSUFBQSxJQUFJLElBQUksQ0FBQ3ZFLEtBQUssQ0FBQ3dFLFVBQVUsRUFBRTtBQUN6QixNQUFBLElBQUksSUFBSSxDQUFDeEUsS0FBSyxDQUFDd0UsVUFBVSxDQUFDQyxVQUFVLEVBQUU7UUFDcEMsT0FBTyxJQUFJLENBQUN6RSxLQUFLLENBQUN3RSxVQUFVLENBQUNDLFVBQVUsQ0FBQ0YsTUFBTSxDQUFDLENBQUE7QUFDakQsT0FBQTtBQUNBLE1BQUEsT0FBTyxJQUFJLENBQUN2RSxLQUFLLENBQUN3RSxVQUFVLENBQUNELE1BQU0sQ0FBQyxDQUFBO0FBQ3RDLEtBQUE7QUFDQSxJQUFBLE9BQU8sSUFBSSxDQUFBO0dBQ1osQ0FBQTtBQUNERixFQUFBQSxNQUFNLENBQUNLLFFBQVEsR0FBRyxTQUFTQSxRQUFRQSxHQUFHO0FBQ3BDLElBQUEsSUFBSUMsV0FBVyxHQUFHLElBQUksQ0FBQ0wsa0JBQWtCLENBQUMsYUFBYSxDQUFDLENBQUE7QUFDeEQsSUFBQSxJQUFJSyxXQUFXLElBQUksSUFBSSxDQUFDQyxTQUFTLEtBQUt6TixTQUFTLEVBQUU7QUFDL0MsTUFBQSxPQUFPd04sV0FBVyxDQUFDLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUE7QUFDcEMsS0FBQTtBQUNBLElBQUEsT0FBTyxJQUFJLENBQUE7R0FDWixDQUFBO0FBQ0RQLEVBQUFBLE1BQU0sQ0FBQ1EsV0FBVyxHQUFHLFNBQVNBLFdBQVdBLEdBQUc7SUFDMUMsSUFBSSxJQUFJLENBQUM3RSxLQUFLLENBQUN3RSxVQUFVLElBQUksSUFBSSxDQUFDSSxTQUFTLEtBQUt6TixTQUFTLEVBQUU7TUFDekQsT0FBTyxJQUFJLENBQUN5TixTQUFTLENBQUE7QUFDdkIsS0FBQTtBQUNBLElBQUEsT0FBTyxJQUFJLENBQUE7R0FDWixDQUFBO0FBQ0RQLEVBQUFBLE1BQU0sQ0FBQ1MsT0FBTyxHQUFHLFNBQVNBLE9BQU9BLEdBQUc7QUFDbEMsSUFBQSxJQUFJQSxPQUFPLEdBQUcsSUFBSSxDQUFDUixrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUNoRCxJQUFBLElBQUlRLE9BQU8sSUFBSSxJQUFJLENBQUNGLFNBQVMsS0FBS3pOLFNBQVMsRUFBRTtBQUMzQyxNQUFBLE9BQU8yTixPQUFPLENBQUMsSUFBSSxDQUFDRixTQUFTLENBQUMsQ0FBQTtBQUNoQyxLQUFDLE1BQU07TUFDTCxJQUFJLENBQUNHLGlCQUFpQixHQUFHLElBQUksQ0FBQTtBQUMvQixLQUFBO0dBQ0QsQ0FBQTtBQUNEVixFQUFBQSxNQUFNLENBQUNXLFlBQVksR0FBRyxTQUFTQSxZQUFZQSxHQUFHO0lBQzVDLElBQUlDLE1BQU0sR0FBRyxJQUFJLENBQUE7QUFDakIsSUFBQSxPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFVQyxPQUFPLEVBQUVDLE1BQU0sRUFBRTtNQUM1Q0gsTUFBTSxDQUFDSSxnQkFBZ0IsR0FBR0YsT0FBTyxDQUFBO01BQ2pDRixNQUFNLENBQUNLLGVBQWUsR0FBR0YsTUFBTSxDQUFBO01BQy9CSCxNQUFNLENBQUNILE9BQU8sRUFBRSxDQUFBO0FBQ2xCLEtBQUMsQ0FBQyxDQUFBO0dBQ0gsQ0FBQTtBQUNEVCxFQUFBQSxNQUFNLENBQUNrQixLQUFLLEdBQUcsU0FBU0EsS0FBS0EsR0FBRztBQUM5QixJQUFBLElBQUlDLFFBQVEsR0FBRyxJQUFJLENBQUNsQixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUMvQyxJQUFBLElBQUlrQixRQUFRLElBQUksSUFBSSxDQUFDWixTQUFTLEtBQUt6TixTQUFTLEVBQUU7QUFDNUNxTyxNQUFBQSxRQUFRLENBQUMsSUFBSSxDQUFDWixTQUFTLENBQUMsQ0FBQTtBQUMxQixLQUFBO0dBQ0QsQ0FBQTtBQUNEUCxFQUFBQSxNQUFNLENBQUNvQixVQUFVLEdBQUcsU0FBU0EsVUFBVUEsR0FBRztBQUN4QyxJQUFBLElBQUlELFFBQVEsR0FBRyxJQUFJLENBQUNsQixrQkFBa0IsQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUMvQyxJQUFBLElBQUlrQixRQUFRLEVBQUU7QUFDWkEsTUFBQUEsUUFBUSxFQUFFLENBQUE7QUFDWixLQUFBO0dBQ0QsQ0FBQTtBQUNEbkIsRUFBQUEsTUFBTSxDQUFDSixhQUFhLEdBQUcsU0FBU0EsYUFBYUEsR0FBRztBQUM5QyxJQUFBLElBQUksSUFBSSxDQUFDakUsS0FBSyxDQUFDMEYsU0FBUyxFQUFFO0FBQ3hCLE1BQUEsSUFBSSxDQUFDMUYsS0FBSyxDQUFDMEYsU0FBUyxFQUFFLENBQUE7QUFDeEIsS0FBQyxNQUFNO0FBQ0wsTUFBQSxJQUFJLENBQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDekIsS0FBQTtHQUNELENBQUE7QUFDREUsRUFBQUEsTUFBTSxDQUFDSCxhQUFhLEdBQUcsU0FBU0EsYUFBYUEsR0FBRztBQUM5QyxJQUFBLElBQUksSUFBSSxDQUFDbEUsS0FBSyxDQUFDMkYsU0FBUyxFQUFFO0FBQ3hCLE1BQUEsSUFBSSxDQUFDM0YsS0FBSyxDQUFDMkYsU0FBUyxFQUFFLENBQUE7QUFDeEIsS0FBQTtJQUNBLElBQUksSUFBSSxDQUFDTCxlQUFlLEVBQUU7TUFDeEIsSUFBSSxDQUFDQSxlQUFlLEVBQUUsQ0FBQTtNQUN0QixPQUFPLElBQUksQ0FBQ0QsZ0JBQWdCLENBQUE7TUFDNUIsT0FBTyxJQUFJLENBQUNDLGVBQWUsQ0FBQTtBQUM3QixLQUFBO0dBQ0QsQ0FBQTtBQUNEakIsRUFBQUEsTUFBTSxDQUFDRixZQUFZLEdBQUcsU0FBU0EsWUFBWUEsQ0FBQ3lCLEtBQUssRUFBRTtBQUNqRCxJQUFBLElBQUksSUFBSSxDQUFDNUYsS0FBSyxDQUFDNkYsUUFBUSxFQUFFO0FBQ3ZCLE1BQUEsSUFBSSxDQUFDN0YsS0FBSyxDQUFDNkYsUUFBUSxDQUFDRCxLQUFLLENBQUMsQ0FBQTtBQUM1QixLQUFBO0lBQ0EsSUFBSSxJQUFJLENBQUNQLGdCQUFnQixFQUFFO0FBQ3pCLE1BQUEsSUFBSSxDQUFDQSxnQkFBZ0IsQ0FBQ08sS0FBSyxDQUFDLENBQUE7TUFDNUIsT0FBTyxJQUFJLENBQUNOLGVBQWUsQ0FBQTtNQUMzQixPQUFPLElBQUksQ0FBQ0QsZ0JBQWdCLENBQUE7QUFDOUIsS0FBQTtHQUNELENBQUE7QUFDRGhCLEVBQUFBLE1BQU0sQ0FBQ3lCLGNBQWMsR0FBRyxTQUFTQSxjQUFjQSxHQUFHO0FBQ2hELElBQUEsSUFBSUMsTUFBTSxHQUFHLElBQUksQ0FBQ3pCLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBQzlDLElBQUEsSUFBSXlCLE1BQU0sSUFBSSxJQUFJLENBQUNuQixTQUFTLEtBQUt6TixTQUFTLEVBQUU7QUFDMUMsTUFBQSxJQUFJNk8sT0FBTyxHQUFHblIsUUFBUSxDQUFDSSxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDM0MsTUFBQSxJQUFJLENBQUMyUCxTQUFTLEdBQUdtQixNQUFNLENBQUNDLE9BQU8sRUFBRTtBQUMvQkMsUUFBQUEsT0FBTyxFQUFFLElBQUksQ0FBQ2pHLEtBQUssQ0FBQ2lHLE9BQU87UUFDM0JDLFFBQVEsRUFBRSxJQUFJLENBQUMvQixZQUFZO0FBQzNCZ0MsUUFBQUEsS0FBSyxFQUFFLElBQUksQ0FBQ25HLEtBQUssQ0FBQ21HLEtBQUs7QUFDdkJqUixRQUFBQSxJQUFJLEVBQUUsSUFBSSxDQUFDOEssS0FBSyxDQUFDOUssSUFBSTtBQUNyQmtSLFFBQUFBLFFBQVEsRUFBRSxJQUFJLENBQUNwRyxLQUFLLENBQUNvRyxRQUFRO1FBQzdCLGtCQUFrQixFQUFFLElBQUksQ0FBQ25DLGFBQWE7UUFDdEMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDQyxhQUFhO0FBQ3BDbUMsUUFBQUEsSUFBSSxFQUFFLElBQUksQ0FBQ3JHLEtBQUssQ0FBQ3FHLElBQUk7QUFDckJDLFFBQUFBLE1BQU0sRUFBRSxJQUFJLENBQUN0RyxLQUFLLENBQUNzRyxNQUFNO0FBQ3pCQyxRQUFBQSxFQUFFLEVBQUUsSUFBSSxDQUFDdkcsS0FBSyxDQUFDdUcsRUFBRTtBQUNqQkMsUUFBQUEsS0FBSyxFQUFFLElBQUksQ0FBQ3hHLEtBQUssQ0FBQ3dHLEtBQUs7QUFDdkJDLFFBQUFBLFFBQVEsRUFBRSxJQUFJLENBQUN6RyxLQUFLLENBQUN5RyxRQUFBQTtBQUN2QixPQUFDLENBQUMsQ0FBQTtBQUNGLE1BQUEsSUFBSSxDQUFDQyxPQUFPLENBQUNyUixXQUFXLENBQUMyUSxPQUFPLENBQUMsQ0FBQTtBQUNuQyxLQUFBO0FBQ0EsSUFBQSxJQUFJLElBQUksQ0FBQ2pCLGlCQUFpQixJQUFJLElBQUksQ0FBQy9FLEtBQUssQ0FBQ3dFLFVBQVUsSUFBSSxJQUFJLENBQUNJLFNBQVMsS0FBS3pOLFNBQVMsRUFBRTtNQUNuRixJQUFJLENBQUM0TixpQkFBaUIsR0FBRyxLQUFLLENBQUE7TUFDOUIsSUFBSSxDQUFDRCxPQUFPLEVBQUUsQ0FBQTtBQUNoQixLQUFBO0dBQ0QsQ0FBQTtBQUNEVCxFQUFBQSxNQUFNLENBQUNzQyxpQkFBaUIsR0FBRyxTQUFTQSxpQkFBaUJBLEdBQUc7SUFDdEQsSUFBSSxDQUFDYixjQUFjLEVBQUUsQ0FBQTtHQUN0QixDQUFBO0FBQ0R6QixFQUFBQSxNQUFNLENBQUN1QyxrQkFBa0IsR0FBRyxTQUFTQSxrQkFBa0JBLEdBQUc7SUFDeEQsSUFBSSxDQUFDZCxjQUFjLEVBQUUsQ0FBQTtHQUN0QixDQUFBO0FBQ0R6QixFQUFBQSxNQUFNLENBQUNELGtCQUFrQixHQUFHLFNBQVNBLGtCQUFrQkEsQ0FBQ3lDLElBQUksRUFBRTtJQUM1RCxJQUFJLENBQUNILE9BQU8sR0FBR0csSUFBSSxDQUFBO0dBQ3BCLENBQUE7QUFDRHhDLEVBQUFBLE1BQU0sQ0FBQzBCLE1BQU0sR0FBRyxTQUFTQSxNQUFNQSxHQUFHO0FBQ2hDO0FBQ0E7QUFDQSxJQUFBLElBQUllLFdBQVcsR0FBRyxJQUFJLENBQUM5RyxLQUFLLENBQUE7TUFDaEI4RyxXQUFXLENBQUNiLE9BQU8sQ0FBQTtNQUNsQmEsV0FBVyxDQUFDakIsUUFBUSxDQUFBO01BQ3ZCaUIsV0FBVyxDQUFDWCxLQUFLLENBQUE7TUFDbEJXLFdBQVcsQ0FBQzVSLElBQUksQ0FBQTtNQUNaNFIsV0FBVyxDQUFDVixRQUFRLENBQUE7TUFDbkJVLFdBQVcsQ0FBQ3BCLFNBQVMsQ0FBQTtNQUNyQm9CLFdBQVcsQ0FBQ25CLFNBQVMsQ0FBQTtNQUMxQm1CLFdBQVcsQ0FBQ1QsSUFBSSxDQUFBO01BQ2RTLFdBQVcsQ0FBQ1IsTUFBTSxDQUFBO01BQ2RRLFdBQVcsQ0FBQ3RDLFVBQVUsQ0FBQTtNQUMzQnNDLFdBQVcsQ0FBQ04sS0FBSyxDQUFBO01BQ3BCTSxXQUFXLENBQUNQLEVBQUUsQ0FBQTtNQUNSTyxXQUFXLENBQUNMLFFBQVEsQ0FBQTtBQUMvQk0sVUFBQUEsVUFBVSxHQUFHakUsK0JBQTZCLENBQUNnRSxXQUFXLEVBQUVuRSxTQUFTLEVBQUM7QUFDcEU7QUFDQSxJQUFBLG9CQUFvQnFFLGdCQUFLLENBQUMvUixhQUFhLENBQUMsS0FBSyxFQUFFMk4sVUFBUSxDQUFDLEVBQUUsRUFBRW1FLFVBQVUsRUFBRTtNQUN0RXBTLEdBQUcsRUFBRSxJQUFJLENBQUN5UCxrQkFBQUE7QUFDWixLQUFDLENBQUMsQ0FBQyxDQUFBO0dBQ0osQ0FBQTtBQUNELEVBQUEsT0FBT04sU0FBUyxDQUFBO0FBQ2xCLENBQUMsQ0FBQ2tELGdCQUFLLENBQUNDLFNBQVMsQ0FBQyxDQUFBO0FBRWxCbkQsU0FBUyxDQUFDb0QsV0FBVyxHQUFHLFdBQVcsQ0FBQTtBQUNuQ3BELFNBQVMsQ0FBQ3FELFNBQVMsR0FBRztBQUNwQmxCLEVBQUFBLE9BQU8sRUFBRXZELGlCQUFTLENBQUMzRSxNQUFNLENBQUNnQyxVQUFVO0VBQ3BDOEYsUUFBUSxFQUFFbkQsaUJBQVMsQ0FBQzdFLElBQUk7RUFDeEIyRyxVQUFVLEVBQUU5QixpQkFBUyxDQUFDekwsTUFBTTtFQUM1QmtQLEtBQUssRUFBRXpELGlCQUFTLENBQUMzRCxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7RUFDekM3SixJQUFJLEVBQUV3TixpQkFBUyxDQUFDM0QsS0FBSyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0VBQ3pDcUgsUUFBUSxFQUFFMUQsaUJBQVMsQ0FBQzVFLE1BQU07RUFDMUI0SCxTQUFTLEVBQUVoRCxpQkFBUyxDQUFDN0UsSUFBSTtFQUN6QjhILFNBQVMsRUFBRWpELGlCQUFTLENBQUM3RSxJQUFJO0FBQ3pCd0ksRUFBQUEsSUFBSSxFQUFFM0QsaUJBQVMsQ0FBQzNELEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7RUFDekR1SCxNQUFNLEVBQUU1RCxpQkFBUyxDQUFDM0UsTUFBTTtFQUN4QndJLEVBQUUsRUFBRTdELGlCQUFTLENBQUMzRSxNQUFNO0FBQ3BCeUksRUFBQUEsS0FBSyxFQUFFOUQsaUJBQVMsQ0FBQzNELEtBQUssQ0FBQyxDQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7RUFDL0QwSCxRQUFRLEVBQUUvRCxpQkFBUyxDQUFDOUUsSUFBQUE7QUFDdEIsQ0FBQyxDQUFBO0FBQ0RrRyxTQUFTLENBQUNzRCxZQUFZLEdBQUc7QUFDdkJ2QixFQUFBQSxRQUFRLEVBQUUsU0FBU0EsUUFBUUEsR0FBRyxFQUFFO0FBQ2hDTSxFQUFBQSxLQUFLLEVBQUUsT0FBTztBQUNkalIsRUFBQUEsSUFBSSxFQUFFLE9BQU87QUFDYmtSLEVBQUFBLFFBQVEsRUFBRSxDQUFDO0FBQ1hDLEVBQUFBLElBQUksRUFBRSxRQUFRO0FBQ2RHLEVBQUFBLEtBQUssRUFBRSxhQUFBO0FBQ1QsQ0FBQzs7QUNsTEQsSUFBSWEsT0FBTyxHQUFHbk8sY0FBQUEsRUFBbUIsQ0FBQTs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJb08sYUFBYSxHQUFHO0FBQ2xCQyxFQUFBQSxpQkFBaUIsRUFBRSxJQUFJO0FBQ3ZCQyxFQUFBQSxXQUFXLEVBQUUsSUFBSTtBQUNqQkMsRUFBQUEsWUFBWSxFQUFFLElBQUk7QUFDbEJMLEVBQUFBLFlBQVksRUFBRSxJQUFJO0FBQ2xCRixFQUFBQSxXQUFXLEVBQUUsSUFBSTtBQUNqQlEsRUFBQUEsZUFBZSxFQUFFLElBQUk7QUFDckJDLEVBQUFBLHdCQUF3QixFQUFFLElBQUk7QUFDOUJDLEVBQUFBLHdCQUF3QixFQUFFLElBQUk7QUFDOUJDLEVBQUFBLE1BQU0sRUFBRSxJQUFJO0FBQ1pWLEVBQUFBLFNBQVMsRUFBRSxJQUFJO0FBQ2ZqUyxFQUFBQSxJQUFJLEVBQUUsSUFBQTtBQUNSLENBQUMsQ0FBQTtBQUNELElBQUk0UyxhQUFhLEdBQUc7QUFDbEJwTCxFQUFBQSxJQUFJLEVBQUUsSUFBSTtBQUNWckIsRUFBQUEsTUFBTSxFQUFFLElBQUk7QUFDWi9CLEVBQUFBLFNBQVMsRUFBRSxJQUFJO0FBQ2Z5TyxFQUFBQSxNQUFNLEVBQUUsSUFBSTtBQUNaQyxFQUFBQSxNQUFNLEVBQUUsSUFBSTtBQUNaNU0sRUFBQUEsU0FBUyxFQUFFLElBQUk7QUFDZjZNLEVBQUFBLEtBQUssRUFBRSxJQUFBO0FBQ1QsQ0FBQyxDQUFBO0FBQ0QsSUFBSUMsbUJBQW1CLEdBQUc7QUFDeEIsRUFBQSxVQUFVLEVBQUUsSUFBSTtBQUNoQm5DLEVBQUFBLE1BQU0sRUFBRSxJQUFJO0FBQ1pxQixFQUFBQSxZQUFZLEVBQUUsSUFBSTtBQUNsQkYsRUFBQUEsV0FBVyxFQUFFLElBQUk7QUFDakJDLEVBQUFBLFNBQVMsRUFBRSxJQUFBO0FBQ2IsQ0FBQyxDQUFBO0FBQ0QsSUFBSWdCLFlBQVksR0FBRztBQUNqQixFQUFBLFVBQVUsRUFBRSxJQUFJO0FBQ2hCQyxFQUFBQSxPQUFPLEVBQUUsSUFBSTtBQUNiaEIsRUFBQUEsWUFBWSxFQUFFLElBQUk7QUFDbEJGLEVBQUFBLFdBQVcsRUFBRSxJQUFJO0FBQ2pCQyxFQUFBQSxTQUFTLEVBQUUsSUFBSTtBQUNmalMsRUFBQUEsSUFBSSxFQUFFLElBQUE7QUFDUixDQUFDLENBQUE7QUFDRCxJQUFJbVQsWUFBWSxHQUFHLEVBQUUsQ0FBQTtBQUNyQkEsWUFBWSxDQUFDaEIsT0FBTyxDQUFDNVAsVUFBVSxDQUFDLEdBQUd5USxtQkFBbUIsQ0FBQTtBQUN0REcsWUFBWSxDQUFDaEIsT0FBTyxDQUFDelAsSUFBSSxDQUFDLEdBQUd1USxZQUFZLENBQUE7QUFFekMsU0FBU0csVUFBVUEsQ0FBQ0MsU0FBUyxFQUFFO0FBQzdCO0FBQ0EsRUFBQSxJQUFJbEIsT0FBTyxDQUFDMU8sTUFBTSxDQUFDNFAsU0FBUyxDQUFDLEVBQUU7QUFDN0IsSUFBQSxPQUFPSixZQUFZLENBQUE7QUFDckIsR0FBQzs7RUFHRCxPQUFPRSxZQUFZLENBQUNFLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJakIsYUFBYSxDQUFBO0FBQzdELENBQUE7QUFFQSxJQUFJa0IsY0FBYyxHQUFHcFAsTUFBTSxDQUFDb1AsY0FBYyxDQUFBO0FBQzFDLElBQUl4TyxtQkFBbUIsR0FBR1osTUFBTSxDQUFDWSxtQkFBbUIsQ0FBQTtBQUNwRCxJQUFJYixxQkFBcUIsR0FBR0MsTUFBTSxDQUFDRCxxQkFBcUIsQ0FBQTtBQUN4RCxJQUFJc1Asd0JBQXdCLEdBQUdyUCxNQUFNLENBQUNxUCx3QkFBd0IsQ0FBQTtBQUM5RCxJQUFJQyxjQUFjLEdBQUd0UCxNQUFNLENBQUNzUCxjQUFjLENBQUE7QUFDMUMsSUFBSUMsZUFBZSxHQUFHdlAsTUFBTSxDQUFDRSxTQUFTLENBQUE7QUFDdEMsU0FBU3NQLG9CQUFvQkEsQ0FBQ0MsZUFBZSxFQUFFQyxlQUFlLEVBQUVDLFNBQVMsRUFBRTtBQUN6RSxFQUFBLElBQUksT0FBT0QsZUFBZSxLQUFLLFFBQVEsRUFBRTtBQUN2QztBQUNBLElBQUEsSUFBSUgsZUFBZSxFQUFFO0FBQ25CLE1BQUEsSUFBSUssa0JBQWtCLEdBQUdOLGNBQWMsQ0FBQ0ksZUFBZSxDQUFDLENBQUE7QUFFeEQsTUFBQSxJQUFJRSxrQkFBa0IsSUFBSUEsa0JBQWtCLEtBQUtMLGVBQWUsRUFBRTtBQUNoRUMsUUFBQUEsb0JBQW9CLENBQUNDLGVBQWUsRUFBRUcsa0JBQWtCLEVBQUVELFNBQVMsQ0FBQyxDQUFBO0FBQ3RFLE9BQUE7QUFDRixLQUFBO0FBRUEsSUFBQSxJQUFJbk8sSUFBSSxHQUFHWixtQkFBbUIsQ0FBQzhPLGVBQWUsQ0FBQyxDQUFBO0FBRS9DLElBQUEsSUFBSTNQLHFCQUFxQixFQUFFO01BQ3pCeUIsSUFBSSxHQUFHQSxJQUFJLENBQUNxTyxNQUFNLENBQUM5UCxxQkFBcUIsQ0FBQzJQLGVBQWUsQ0FBQyxDQUFDLENBQUE7QUFDNUQsS0FBQTtBQUVBLElBQUEsSUFBSUksYUFBYSxHQUFHWixVQUFVLENBQUNPLGVBQWUsQ0FBQyxDQUFBO0FBQy9DLElBQUEsSUFBSU0sYUFBYSxHQUFHYixVQUFVLENBQUNRLGVBQWUsQ0FBQyxDQUFBO0FBRS9DLElBQUEsS0FBSyxJQUFJNU8sQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHVSxJQUFJLENBQUNTLE1BQU0sRUFBRSxFQUFFbkIsQ0FBQyxFQUFFO0FBQ3BDLE1BQUEsSUFBSW9CLEdBQUcsR0FBR1YsSUFBSSxDQUFDVixDQUFDLENBQUMsQ0FBQTtBQUVqQixNQUFBLElBQUksQ0FBQzROLGFBQWEsQ0FBQ3hNLEdBQUcsQ0FBQyxJQUFJLEVBQUV5TixTQUFTLElBQUlBLFNBQVMsQ0FBQ3pOLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRTZOLGFBQWEsSUFBSUEsYUFBYSxDQUFDN04sR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFNE4sYUFBYSxJQUFJQSxhQUFhLENBQUM1TixHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQzdJLFFBQUEsSUFBSThOLFVBQVUsR0FBR1gsd0JBQXdCLENBQUNLLGVBQWUsRUFBRXhOLEdBQUcsQ0FBQyxDQUFBO1FBRS9ELElBQUk7QUFDRjtBQUNBa04sVUFBQUEsY0FBYyxDQUFDSyxlQUFlLEVBQUV2TixHQUFHLEVBQUU4TixVQUFVLENBQUMsQ0FBQTtBQUNsRCxTQUFDLENBQUMsT0FBT0MsQ0FBQyxFQUFFLEVBQUM7QUFDZixPQUFBO0FBQ0YsS0FBQTtBQUNGLEdBQUE7QUFFQSxFQUFBLE9BQU9SLGVBQWUsQ0FBQTtBQUN4QixDQUFBO0FBRUE1UCxJQUFBQSx3QkFBYyxHQUFHMlAsb0JBQW9COztBQ3RHckMsU0FBU2hHLFFBQVFBLEdBQUc7QUFBRUEsRUFBQUEsUUFBUSxHQUFHeEosTUFBTSxDQUFDUyxNQUFNLElBQUksVUFBVWlCLE1BQU0sRUFBRTtBQUFFLElBQUEsS0FBSyxJQUFJWixDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdrQixTQUFTLENBQUNDLE1BQU0sRUFBRW5CLENBQUMsRUFBRSxFQUFFO0FBQUUsTUFBQSxJQUFJYSxNQUFNLEdBQUdLLFNBQVMsQ0FBQ2xCLENBQUMsQ0FBQyxDQUFBO0FBQUUsTUFBQSxLQUFLLElBQUlvQixHQUFHLElBQUlQLE1BQU0sRUFBRTtBQUFFLFFBQUEsSUFBSTNCLE1BQU0sQ0FBQ0UsU0FBUyxDQUFDRCxjQUFjLENBQUNrQyxJQUFJLENBQUNSLE1BQU0sRUFBRU8sR0FBRyxDQUFDLEVBQUU7QUFBRVIsVUFBQUEsTUFBTSxDQUFDUSxHQUFHLENBQUMsR0FBR1AsTUFBTSxDQUFDTyxHQUFHLENBQUMsQ0FBQTtBQUFFLFNBQUE7QUFBRSxPQUFBO0FBQUUsS0FBQTtBQUFFLElBQUEsT0FBT1IsTUFBTSxDQUFBO0dBQUcsQ0FBQTtBQUFFLEVBQUEsT0FBTzhILFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLElBQUksRUFBRXpILFNBQVMsQ0FBQyxDQUFBO0FBQUUsQ0FBQTtBQUU1VCxTQUFTMEgsNkJBQTZCQSxDQUFDL0gsTUFBTSxFQUFFZ0ksUUFBUSxFQUFFO0FBQUUsRUFBQSxJQUFJaEksTUFBTSxJQUFJLElBQUksRUFBRSxPQUFPLEVBQUUsQ0FBQTtFQUFFLElBQUlELE1BQU0sR0FBRyxFQUFFLENBQUE7QUFBRSxFQUFBLElBQUlrSSxVQUFVLEdBQUc1SixNQUFNLENBQUN3QixJQUFJLENBQUNHLE1BQU0sQ0FBQyxDQUFBO0VBQUUsSUFBSU8sR0FBRyxFQUFFcEIsQ0FBQyxDQUFBO0FBQUUsRUFBQSxLQUFLQSxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUc4SSxVQUFVLENBQUMzSCxNQUFNLEVBQUVuQixDQUFDLEVBQUUsRUFBRTtBQUFFb0IsSUFBQUEsR0FBRyxHQUFHMEgsVUFBVSxDQUFDOUksQ0FBQyxDQUFDLENBQUE7SUFBRSxJQUFJNkksUUFBUSxDQUFDRSxPQUFPLENBQUMzSCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBQTtBQUFVUixJQUFBQSxNQUFNLENBQUNRLEdBQUcsQ0FBQyxHQUFHUCxNQUFNLENBQUNPLEdBQUcsQ0FBQyxDQUFBO0FBQUUsR0FBQTtBQUFFLEVBQUEsT0FBT1IsTUFBTSxDQUFBO0FBQUUsQ0FBQTtBQUVsVCxTQUFTdUksY0FBY0EsQ0FBQ0MsUUFBUSxFQUFFQyxVQUFVLEVBQUU7RUFBRUQsUUFBUSxDQUFDaEssU0FBUyxHQUFHRixNQUFNLENBQUNvSyxNQUFNLENBQUNELFVBQVUsQ0FBQ2pLLFNBQVMsQ0FBQyxDQUFBO0FBQUVnSyxFQUFBQSxRQUFRLENBQUNoSyxTQUFTLENBQUNtSixXQUFXLEdBQUdhLFFBQVEsQ0FBQTtFQUFFQSxRQUFRLENBQUNPLFNBQVMsR0FBR04sVUFBVSxDQUFBO0FBQUUsQ0FBQTtBQUt0TCxJQUFJK0YsVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFcEIsSUFBSUMsT0FBTyxHQUFHLENBQUMsQ0FBQTtBQUNBLFNBQVNDLGVBQWVBLENBQUNDLFlBQVksRUFBRUMsT0FBTyxFQUFFO0FBQzdEQSxFQUFBQSxPQUFPLEdBQUdBLE9BQU8sSUFBSSxFQUFFLENBQUE7QUFDdkIsRUFBQSxPQUFPLFNBQVNDLG1CQUFtQkEsQ0FBQ0MsZ0JBQWdCLEVBQUU7SUFDcEQsSUFBSUMsb0JBQW9CLEdBQUdELGdCQUFnQixDQUFDMUMsV0FBVyxJQUFJMEMsZ0JBQWdCLENBQUNsTixJQUFJLElBQUksV0FBVyxDQUFBO0FBRS9GLElBQUEsSUFBSW9OLGlCQUFpQjtBQUVyQixJQUFBLFVBQVVDLFVBQVUsRUFBRTtBQUNwQjFHLE1BQUFBLGNBQWMsQ0FBQ3lHLGlCQUFpQixFQUFFQyxVQUFVLENBQUMsQ0FBQTtBQUU3QyxNQUFBLFNBQVNELGlCQUFpQkEsQ0FBQzlKLEtBQUssRUFBRWdLLE9BQU8sRUFBRTtBQUN6QyxRQUFBLElBQUloRyxLQUFLLENBQUE7QUFFVEEsUUFBQUEsS0FBSyxHQUFHK0YsVUFBVSxDQUFDeE8sSUFBSSxDQUFDLElBQUksRUFBRXlFLEtBQUssRUFBRWdLLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQTtBQUNyRGhHLFFBQUFBLEtBQUssQ0FBQ2lHLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDaEJqRyxLQUFLLENBQUNrRyxXQUFXLEdBQUcsRUFBRSxDQUFBO0FBQ3RCLFFBQUEsT0FBT2xHLEtBQUssQ0FBQTtBQUNkLE9BQUE7QUFFQSxNQUFBLElBQUlLLE1BQU0sR0FBR3lGLGlCQUFpQixDQUFDeFEsU0FBUyxDQUFBO0FBRXhDK0ssTUFBQUEsTUFBTSxDQUFDOEYsa0NBQWtDLEdBQUcsU0FBU0Esa0NBQWtDQSxHQUFHO0FBQ3hGLFFBQUEsSUFBSSxDQUFDLElBQUksQ0FBQ0MsZ0JBQWdCLEVBQUU7QUFDMUIsVUFBQSxJQUFJLENBQUNBLGdCQUFnQixHQUFHLHNCQUFzQixHQUFHYixPQUFPLEVBQUUsQ0FBQTtBQUM1RCxTQUFBO1FBRUEsT0FBTyxJQUFJLENBQUNhLGdCQUFnQixDQUFBO09BQzdCLENBQUE7QUFFRC9GLE1BQUFBLE1BQU0sQ0FBQ2dHLGNBQWMsR0FBRyxTQUFTQSxjQUFjQSxHQUFHO0FBQ2hELFFBQUEsSUFBSSxDQUFDSCxXQUFXLEdBQUcsT0FBT1QsWUFBWSxLQUFLLFVBQVUsR0FBR0EsWUFBWSxFQUFFLEdBQUdBLFlBQVksQ0FBQTtRQUNyRixPQUFPLElBQUksQ0FBQ1MsV0FBVyxDQUFBO09BQ3hCLENBQUE7QUFFRDdGLE1BQUFBLE1BQU0sQ0FBQ2lHLDJCQUEyQixHQUFHLFNBQVNBLDJCQUEyQkEsQ0FBQ0wsS0FBSyxFQUFFO1FBQy9FLElBQUloRixNQUFNLEdBQUcsSUFBSSxDQUFBOztBQUVqQjtBQUNBLFFBQUEsSUFBSSxDQUFDc0YsUUFBUSxDQUFDTixLQUFLLEVBQUUsWUFBWTtBQUMvQixVQUFBLE9BQU9oRixNQUFNLENBQUNqRixLQUFLLENBQUN3SyxpQkFBaUIsSUFBSXZGLE1BQU0sQ0FBQ2pGLEtBQUssQ0FBQ3dLLGlCQUFpQixDQUFDdkYsTUFBTSxDQUFDZ0YsS0FBSyxDQUFDLENBQUE7QUFDdkYsU0FBQyxDQUFDLENBQUE7T0FDSCxDQUFBO0FBRUQ1RixNQUFBQSxNQUFNLENBQUNvRyxzQ0FBc0MsR0FBRyxTQUFTQSxzQ0FBc0NBLEdBQUc7QUFDaEcsUUFBQSxJQUFJQyxRQUFRLEdBQUdwQixVQUFVLENBQUMsSUFBSSxDQUFDWSxXQUFXLENBQUMsQ0FBQTtBQUUzQyxRQUFBLElBQUksQ0FBQ1EsUUFBUSxJQUFJLENBQUNBLFFBQVEsQ0FBQ0MsTUFBTSxFQUFFO0FBQ2pDLFVBQUEsTUFBTSxJQUFJMU8sS0FBSyxDQUFDLHVCQUF1QixDQUFDLENBQUE7QUFDMUMsU0FBQTtBQUVBLFFBQUEsS0FBSyxJQUFJMk8sTUFBTSxJQUFJRixRQUFRLENBQUNHLFNBQVMsRUFBRTtBQUNyQ0gsVUFBQUEsUUFBUSxDQUFDRyxTQUFTLENBQUNELE1BQU0sQ0FBQyxDQUFDRixRQUFRLENBQUMsQ0FBQTtBQUN0QyxTQUFBO0FBRUEsUUFBQSxPQUFPSSxNQUFNLENBQUNwQixPQUFPLENBQUNxQixZQUFZLENBQUMsQ0FBQTtPQUNwQyxDQUFBO0FBRUQxRyxNQUFBQSxNQUFNLENBQUNzQyxpQkFBaUIsR0FBRyxTQUFTQSxpQkFBaUJBLEdBQUc7UUFDdEQsSUFBSXFFLE1BQU0sR0FBRyxJQUFJLENBQUE7QUFFakIsUUFBQSxJQUFJQyxTQUFTLEdBQUcsSUFBSSxDQUFDWixjQUFjLEVBQUUsQ0FBQTtBQUNyQyxRQUFBLElBQUkvTyxHQUFHLEdBQUcsSUFBSSxDQUFDNk8sa0NBQWtDLEVBQUUsQ0FBQTtRQUNuRCxJQUFJZSxRQUFRLEdBQUd4QixPQUFPO1VBQ2xCeUIsVUFBVSxHQUFHRCxRQUFRLENBQUNDLFVBQVU7VUFDaENKLFlBQVksR0FBR0csUUFBUSxDQUFDSCxZQUFZO0FBQ3BDSyxVQUFBQSxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0UsUUFBUSxDQUFDOztRQUVqQyxJQUFJRCxVQUFVLElBQUksT0FBT0wsTUFBTSxDQUFDSyxVQUFVLENBQUMsS0FBSyxXQUFXLEVBQUU7VUFDM0Q3QixVQUFVLENBQUMyQixTQUFTLENBQUMsR0FBRztBQUN0Qk4sWUFBQUEsTUFBTSxFQUFFLElBQUk7QUFDWkUsWUFBQUEsU0FBUyxFQUFFLEVBQUM7V0FDYixDQUFBO0FBQ0gsU0FBQzs7QUFHRCxRQUFBLElBQUl2QixVQUFVLENBQUMyQixTQUFTLENBQUMsRUFBRTtBQUN6QixVQUFBLElBQUk1SSxLQUFLLEdBQUdpSCxVQUFVLENBQUMyQixTQUFTLENBQUMsQ0FBQzs7VUFFbEMsSUFBSTVJLEtBQUssS0FBS0EsS0FBSyxDQUFDc0ksTUFBTSxJQUFJdEksS0FBSyxDQUFDZ0osT0FBTyxDQUFDLEVBQUU7QUFDNUMsWUFBQSxJQUFJLENBQUNmLDJCQUEyQixDQUFDakksS0FBSyxDQUFDLENBQUE7QUFDdkMsWUFBQSxPQUFBO0FBQ0YsV0FBQzs7VUFHREEsS0FBSyxDQUFDd0ksU0FBUyxDQUFDdlAsR0FBRyxDQUFDLEdBQUcsVUFBVStHLEtBQUssRUFBRTtBQUN0QyxZQUFBLE9BQU8ySSxNQUFNLENBQUNWLDJCQUEyQixDQUFDakksS0FBSyxDQUFDLENBQUE7V0FDakQsQ0FBQTtBQUVELFVBQUEsT0FBQTtBQUNGLFNBQUE7QUFDQTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztRQUdRLElBQUl3SSxTQUFTLEdBQUcsRUFBRSxDQUFBO0FBRWxCQSxRQUFBQSxTQUFTLENBQUN2UCxHQUFHLENBQUMsR0FBRyxVQUFVK0csS0FBSyxFQUFFO0FBQ2hDLFVBQUEsT0FBTzJJLE1BQU0sQ0FBQ1YsMkJBQTJCLENBQUNqSSxLQUFLLENBQUMsQ0FBQTtTQUNqRCxDQUFBO1FBRURpSCxVQUFVLENBQUMyQixTQUFTLENBQUMsR0FBRztBQUN0Qk4sVUFBQUEsTUFBTSxFQUFFLEtBQUs7QUFDYkUsVUFBQUEsU0FBUyxFQUFFQSxTQUFBQTtTQUNaLENBQUE7QUFDRCxRQUFBLElBQUlTLE1BQU0sR0FBR3pXLFFBQVEsQ0FBQ0ksYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzdDcVcsTUFBTSxDQUFDQyxHQUFHLEdBQUdOLFNBQVMsQ0FBQTtRQUN0QkssTUFBTSxDQUFDRSxLQUFLLEdBQUcsSUFBSSxDQUFBO0FBRW5CLFFBQUEsS0FBSyxJQUFJQyxTQUFTLElBQUkvQixPQUFPLENBQUNnQyxVQUFVLEVBQUU7VUFDeENKLE1BQU0sQ0FBQ0ssWUFBWSxDQUFDRixTQUFTLEVBQUUvQixPQUFPLENBQUNnQyxVQUFVLENBQUNELFNBQVMsQ0FBQyxDQUFDLENBQUE7QUFDL0QsU0FBQTtBQUVBLFFBQUEsSUFBSUwsUUFBUSxFQUFFO1VBQ1pFLE1BQU0sQ0FBQ00sRUFBRSxHQUFHUixRQUFRLENBQUE7QUFDdEIsU0FBQTtBQUVBLFFBQUEsSUFBSVMsaUNBQWlDLEdBQUcsU0FBU0EsaUNBQWlDQSxDQUFDaE8sSUFBSSxFQUFFO0FBQ3ZGLFVBQUEsSUFBSXlMLFVBQVUsQ0FBQzJCLFNBQVMsQ0FBQyxFQUFFO0FBQ3pCLFlBQUEsSUFBSVAsUUFBUSxHQUFHcEIsVUFBVSxDQUFDMkIsU0FBUyxDQUFDLENBQUE7QUFDcEMsWUFBQSxJQUFJYSxZQUFZLEdBQUdwQixRQUFRLENBQUNHLFNBQVMsQ0FBQTtBQUVyQyxZQUFBLEtBQUssSUFBSUQsTUFBTSxJQUFJa0IsWUFBWSxFQUFFO0FBQy9CLGNBQUEsSUFBSWpPLElBQUksQ0FBQ2lPLFlBQVksQ0FBQ2xCLE1BQU0sQ0FBQyxDQUFDLEVBQUU7Z0JBQzlCLE9BQU9rQixZQUFZLENBQUNsQixNQUFNLENBQUMsQ0FBQTtBQUM3QixlQUFBO0FBQ0YsYUFBQTtBQUNGLFdBQUE7U0FDRCxDQUFBO0FBRUQsUUFBQSxJQUFJRyxZQUFZLElBQUksT0FBT0QsTUFBTSxLQUFLLFdBQVcsRUFBRTtBQUNqREEsVUFBQUEsTUFBTSxDQUFDQyxZQUFZLENBQUMsR0FBRyxZQUFZO0FBQ2pDLFlBQUEsT0FBT0MsTUFBTSxDQUFDUCxzQ0FBc0MsRUFBRSxDQUFBO1dBQ3ZELENBQUE7QUFDSCxTQUFBO1FBRUFhLE1BQU0sQ0FBQ1MsTUFBTSxHQUFHLFlBQVk7QUFDMUIsVUFBQSxJQUFJckIsUUFBUSxHQUFHcEIsVUFBVSxDQUFDMkIsU0FBUyxDQUFDLENBQUE7QUFFcEMsVUFBQSxJQUFJUCxRQUFRLEVBQUU7WUFDWkEsUUFBUSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQ3RCa0IsaUNBQWlDLENBQUMsVUFBVUcsUUFBUSxFQUFFO0FBQ3BELGNBQUEsSUFBSWpCLFlBQVksRUFBRTtBQUNoQixnQkFBQSxPQUFPLEtBQUssQ0FBQTtBQUNkLGVBQUE7Y0FFQWlCLFFBQVEsQ0FBQ3RCLFFBQVEsQ0FBQyxDQUFBO0FBQ2xCLGNBQUEsT0FBTyxJQUFJLENBQUE7QUFDYixhQUFDLENBQUMsQ0FBQTtBQUNKLFdBQUE7U0FDRCxDQUFBO1FBRURZLE1BQU0sQ0FBQ1csT0FBTyxHQUFHLFlBQVk7QUFDM0IsVUFBQSxJQUFJdkIsUUFBUSxHQUFHcEIsVUFBVSxDQUFDMkIsU0FBUyxDQUFDLENBQUE7QUFFcEMsVUFBQSxJQUFJUCxRQUFRLEVBQUU7WUFDWkEsUUFBUSxDQUFDVyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ3ZCUSxpQ0FBaUMsQ0FBQyxVQUFVRyxRQUFRLEVBQUU7Y0FDcERBLFFBQVEsQ0FBQ3RCLFFBQVEsQ0FBQyxDQUFBO0FBQ2xCLGNBQUEsT0FBTyxJQUFJLENBQUE7QUFDYixhQUFDLENBQUMsQ0FBQTtBQUNKLFdBQUE7U0FDRCxDQUFBO0FBRUQ3VixRQUFBQSxRQUFRLENBQUNxWCxJQUFJLENBQUM3VyxXQUFXLENBQUNpVyxNQUFNLENBQUMsQ0FBQTtPQUNsQyxDQUFBO0FBRURqSCxNQUFBQSxNQUFNLENBQUM4SCxvQkFBb0IsR0FBRyxTQUFTQSxvQkFBb0JBLEdBQUc7QUFDNUQ7QUFDQSxRQUFBLElBQUlsQixTQUFTLEdBQUcsSUFBSSxDQUFDZixXQUFXLENBQUE7QUFFaEMsUUFBQSxJQUFJUixPQUFPLENBQUMwQyxlQUFlLEtBQUssSUFBSSxFQUFFO0FBQ3BDLFVBQUEsSUFBSUMsVUFBVSxHQUFHeFgsUUFBUSxDQUFDRSxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUV4RCxVQUFBLEtBQUssSUFBSW1GLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR21TLFVBQVUsQ0FBQ2hSLE1BQU0sRUFBRW5CLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDN0MsWUFBQSxJQUFJbVMsVUFBVSxDQUFDblMsQ0FBQyxDQUFDLENBQUNxUixHQUFHLENBQUN0SSxPQUFPLENBQUNnSSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUM3QyxjQUFBLElBQUlvQixVQUFVLENBQUNuUyxDQUFDLENBQUMsQ0FBQ29TLFVBQVUsRUFBRTtBQUM1QkQsZ0JBQUFBLFVBQVUsQ0FBQ25TLENBQUMsQ0FBQyxDQUFDb1MsVUFBVSxDQUFDQyxXQUFXLENBQUNGLFVBQVUsQ0FBQ25TLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDckQsZUFBQTtBQUNGLGFBQUE7QUFDRixXQUFBO0FBQ0YsU0FBQzs7QUFHRCxRQUFBLElBQUl3USxRQUFRLEdBQUdwQixVQUFVLENBQUMyQixTQUFTLENBQUMsQ0FBQTtBQUVwQyxRQUFBLElBQUlQLFFBQVEsRUFBRTtVQUNaLE9BQU9BLFFBQVEsQ0FBQ0csU0FBUyxDQUFDLElBQUksQ0FBQ1Ysa0NBQWtDLEVBQUUsQ0FBQyxDQUFBO0FBRXBFLFVBQUEsSUFBSVQsT0FBTyxDQUFDMEMsZUFBZSxLQUFLLElBQUksRUFBRTtZQUNwQyxPQUFPOUMsVUFBVSxDQUFDMkIsU0FBUyxDQUFDLENBQUE7QUFDOUIsV0FBQTtBQUNGLFNBQUE7T0FDRCxDQUFBO0FBRUQ1RyxNQUFBQSxNQUFNLENBQUMwQixNQUFNLEdBQUcsU0FBU0EsTUFBTUEsR0FBRztBQUNoQyxRQUFBLElBQUlvRixVQUFVLEdBQUd6QixPQUFPLENBQUN5QixVQUFVLENBQUM7O0FBRXBDLFFBQUEsSUFBSXJFLFdBQVcsR0FBRyxJQUFJLENBQUM5RyxLQUFLLENBQUE7VUFDSjhHLFdBQVcsQ0FBQzBELGlCQUFpQixDQUFBO2NBQ2pEZ0MsWUFBWSxHQUFHMUYsV0FBVyxDQUFDMEYsWUFBWSxDQUFBO0FBQ3ZDekYsVUFBQUEsVUFBVSxHQUFHakUsNkJBQTZCLENBQUNnRSxXQUFXLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxjQUFjLENBQUMsRUFBRTs7QUFHbkcsUUFBQSxJQUFJcUUsVUFBVSxJQUFJLE9BQU9MLE1BQU0sS0FBSyxXQUFXLEVBQUU7QUFDL0MvRCxVQUFBQSxVQUFVLENBQUNvRSxVQUFVLENBQUMsR0FBRyxPQUFPTCxNQUFNLENBQUNLLFVBQVUsQ0FBQyxLQUFLLFdBQVcsR0FBR0wsTUFBTSxDQUFDSyxVQUFVLENBQUMsR0FBR2hVLFNBQVMsQ0FBQTtBQUNyRyxTQUFBO1FBRUE0UCxVQUFVLENBQUNwUyxHQUFHLEdBQUc2WCxZQUFZLENBQUE7QUFDN0IsUUFBQSxPQUFPdlgsbUJBQWEsQ0FBQzJVLGdCQUFnQixFQUFFN0MsVUFBVSxDQUFDLENBQUE7T0FDbkQsQ0FBQTtBQUVELE1BQUEsT0FBTytDLGlCQUFpQixDQUFBO0FBQzFCLEtBQUMsQ0FBQzdDLGVBQVMsQ0FBQyxDQUFDO0FBQ2I7QUFDQTs7SUFHQSxJQUFJd0Ysa0JBQWtCLEdBQUdDLGdCQUFVLENBQUMsVUFBVTFNLEtBQUssRUFBRXJMLEdBQUcsRUFBRTtNQUN4RCxPQUFPTSxtQkFBYSxDQUFDNlUsaUJBQWlCLEVBQUVsSCxRQUFRLENBQUMsRUFBRSxFQUFFNUMsS0FBSyxFQUFFO0FBQzFEd00sUUFBQUEsWUFBWSxFQUFFN1gsR0FBQUE7QUFDaEIsT0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNMLEtBQUMsQ0FBQyxDQUFBO0FBQ0Y4WCxJQUFBQSxrQkFBa0IsQ0FBQ3ZGLFdBQVcsR0FBRyxvQkFBb0IsR0FBRzJDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQTtJQUNsRjRDLGtCQUFrQixDQUFDdEYsU0FBUyxHQUFHO01BQzdCcUQsaUJBQWlCLEVBQUU5SCxpQkFBUyxDQUFDN0UsSUFBQUE7S0FDOUIsQ0FBQTtBQUNELElBQUEsT0FBTzhPLHdCQUFZLENBQUNGLGtCQUFrQixFQUFFN0MsZ0JBQWdCLENBQUMsQ0FBQTtHQUMxRCxDQUFBO0FBQ0g7O0FDalBBLElBQUltQixZQUFZLEdBQUcsZ0JBQWdCLENBQUE7QUFDbkMsSUFBSUksVUFBVSxHQUFHLFlBQVksQ0FBQTtBQUM3QixTQUFTeUIsVUFBVUEsR0FBRztFQUNwQixPQUFPLE9BQU85QixNQUFNLEtBQUssV0FBVyxJQUFJQSxNQUFNLENBQUMrQixnQkFBZ0IsSUFBSSxFQUFFLENBQUE7QUFDdkUsQ0FBQTtBQUNBLFNBQVNDLE1BQU1BLEdBQUc7QUFDaEIsRUFBQSxJQUFJQyxjQUFjLEdBQUdILFVBQVUsRUFBRSxDQUFBO0VBQ2pDLElBQUlJLFFBQVEsR0FBR0QsY0FBYyxDQUFDRSxlQUFlLEdBQUcsZUFBZSxHQUFHLGdCQUFnQixDQUFBO0VBQ2xGLElBQUlGLGNBQWMsQ0FBQ3RJLFVBQVUsRUFBRTtJQUM3QixPQUFPLFVBQVUsR0FBR3VJLFFBQVEsR0FBRyxrQ0FBa0MsR0FBR2pDLFlBQVksR0FBRyxrQkFBa0IsQ0FBQTtBQUN2RyxHQUFBO0VBQ0EsT0FBTyxVQUFVLEdBQUdpQyxRQUFRLEdBQUcsMkJBQTJCLEdBQUdqQyxZQUFZLEdBQUcsa0JBQWtCLENBQUE7QUFDaEcsQ0FBQTtBQUNlbUMsZUFBcUIsQ0FBQ0osTUFBTSxFQUFFO0FBQzNDL0IsRUFBQUEsWUFBWSxFQUFFQSxZQUFZO0FBQzFCSSxFQUFBQSxVQUFVLEVBQUVBLFVBQVU7QUFDdEJPLEVBQUFBLFVBQVUsRUFBRWtCLFVBQVUsRUFBRSxDQUFDTyxLQUFLLEdBQUc7QUFDL0JBLElBQUFBLEtBQUssRUFBRVAsVUFBVSxFQUFFLENBQUNPLEtBQUFBO0FBQ3RCLEdBQUMsR0FBRyxFQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUNySixTQUFTLENBQUM7O0FDbEJOLE1BQU1zSixPQUFPLFNBQVNuRyxlQUFTLENBQUM7QUFDbkNsQixFQUFBQSxNQUFNQSxHQUFHO0FBQ0wsSUFBQSxPQUNJOVEsbUJBQUEsQ0FBQSxLQUFBLEVBQUE7QUFBS29ZLE1BQUFBLEtBQUssRUFBQyw2QkFBQTtBQUE2QixLQUFBLEVBQ3BDcFksbUJBQUEsQ0FBQSxLQUFBLEVBQUE7QUFBS29ZLE1BQUFBLEtBQUssRUFBQyxpQ0FBQTtLQUF1QyxDQUFDLEVBQ25EcFksbUJBQUEsQ0FBQSxLQUFBLEVBQUE7QUFBS29ZLE1BQUFBLEtBQUssRUFBQyxrQ0FBQTtLQUFtQyxFQUFBLGlCQUFvQixDQUFDLEVBQ25FcFksbUJBQUEsQ0FBQSxLQUFBLEVBQUE7QUFBS29ZLE1BQUFBLEtBQUssRUFBQyxrQ0FBQTtLQUF3QyxDQUFDLEVBQ3BEcFksbUJBQUEsQ0FBQSxLQUFBLEVBQUE7QUFBS29ZLE1BQUFBLEtBQUssRUFBQyxxQ0FBQTtBQUFxQyxLQUFBLEVBQzVDcFksbUJBQUEsQ0FBQSxHQUFBLEVBQUEsSUFBQSxFQUFHLFdBQVksQ0FBQyxFQUNoQkEsbUJBQUEsQ0FBQSxHQUFBLEVBQUE7QUFBR29ZLE1BQUFBLEtBQUssRUFBQyx5Q0FBQTtLQUEwQyxFQUFBLGlCQUFrQixDQUNwRSxDQUNKLENBQUMsQ0FBQTtBQUVkLEdBQUE7QUFDSixDQUFBO0FBRU8sU0FBU0MsYUFBYUEsR0FBRztFQUM1QixPQUFPcFUsVUFBdUMsQ0FBQTtBQUNsRDs7Ozs7In0=
