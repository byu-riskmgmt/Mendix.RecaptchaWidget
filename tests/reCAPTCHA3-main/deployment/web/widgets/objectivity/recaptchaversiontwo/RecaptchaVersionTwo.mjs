import * as React from 'react';
import { forwardRef, createElement, Component, createRef } from 'react';

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
    return /*#__PURE__*/React.createElement("div", _extends$1({}, childProps, {
      ref: this.handleRecaptchaRef
    }));
  };
  return ReCAPTCHA;
}(React.Component);
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
        return createElement(WrappedComponent, childProps);
      };
      return AsyncScriptLoader;
    }(Component); // Note the second param "ref" provided by React.forwardRef.
    // We can pass it along to AsyncScriptLoader as a regular prop, e.g. "forwardedRef"
    // And it can then be attached to the Component.

    var ForwardedComponent = forwardRef(function (props, ref) {
      return createElement(AsyncScriptLoader, _extends({}, props, {
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
var RecaptchaWrapper = makeAsyncScript(getURL, {
  callbackName: callbackName,
  globalName: globalName,
  attributes: getOptions().nonce ? {
    nonce: getOptions().nonce
  } : {}
})(ReCAPTCHA);

class ReCaptcha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ""
    };
    this.recaptchaRef = createRef();
    this.lastToken = "";
    window.recaptchaRef = {
      execute: this.execute.bind(this)
    };
  }
  componentDidMount() {}
  handleOnEvent(callbackFun) {
    if (callbackFun !== undefined) {
      return callbackFun;
    } else {
      return undefined;
    }
  }
  onChangeEvent() {
    const token = this.recaptchaRef.current.getValue();
    this.lastToken = token;
    this.props.token.setValue(token);
    this.props.onChangeAction.execute();
  }
  onErrorEvent() {
    this.props.onErrorAction.execute();
  }
  onExpiredEvent() {
    this.props.onExpiredAction.execute();
  }
  execute() {
    const verified = this.recaptchaRef.current.executeAsync();
    console.info("inside execute function: " + verified);
    return verified;
  }
  render() {
    if (this.props.token.status === "available" && this.props.token.value !== this.lastToken) {
      //the token was changed outside of the widget, assume the token was invalid
      if (this.recaptchaRef.current) {
        this.recaptchaRef.current.reset();
      }
    }
    return this.props.sitekey.status !== "available" ? null : createElement(RecaptchaWrapper, {
      ref: this.recaptchaRef,
      sitekey: this.props.sitekey.value,
      onChange: this.onChangeEvent.bind(this),
      onErrored: this.onErrorEvent.bind(this),
      onExpired: this.onExpiredEvent.bind(this),
      theme: this.props.theme,
      size: this.props.size,
      badge: this.props.badge,
      type: this.props.type,
      tabindex: this.props.tabIndex
    });
  }
}

export { ReCaptcha as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjYXB0Y2hhVmVyc2lvblR3by5tanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtcmVjYXB0Y2hhL2xpYi9lc20vcmVjYXB0Y2hhLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzL2Rpc3QvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MuY2pzLmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWFzeW5jLXNjcmlwdC9saWIvZXNtL2FzeW5jLXNjcmlwdC1sb2FkZXIuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtZ29vZ2xlLXJlY2FwdGNoYS9saWIvZXNtL3JlY2FwdGNoYS13cmFwcGVyLmpzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL1JlY2FwdGNoYVZlcnNpb25Ud28uanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG4gIHZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBBc3NlcnQgdGhhdCB0aGUgdmFsdWVzIG1hdGNoIHdpdGggdGhlIHR5cGUgc3BlY3MuXG4gKiBFcnJvciBtZXNzYWdlcyBhcmUgbWVtb3JpemVkIGFuZCB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdHlwZVNwZWNzIE1hcCBvZiBuYW1lIHRvIGEgUmVhY3RQcm9wVHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHZhbHVlcyBSdW50aW1lIHZhbHVlcyB0aGF0IG5lZWQgdG8gYmUgdHlwZS1jaGVja2VkXG4gKiBAcGFyYW0ge3N0cmluZ30gbG9jYXRpb24gZS5nLiBcInByb3BcIiwgXCJjb250ZXh0XCIsIFwiY2hpbGQgY29udGV4dFwiXG4gKiBAcGFyYW0ge3N0cmluZ30gY29tcG9uZW50TmFtZSBOYW1lIG9mIHRoZSBjb21wb25lbnQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICogQHBhcmFtIHs/RnVuY3Rpb259IGdldFN0YWNrIFJldHVybnMgdGhlIGNvbXBvbmVudCBzdGFjay5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZ2V0U3RhY2spIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3I7XG4gICAgICAgIC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoXG4gICAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArXG4gICAgICAgICAgICAgICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXJyb3IgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciA9IGV4O1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciAmJiAhKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJyArXG4gICAgICAgICAgICBsb2NhdGlvbiArICcgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICcgKyB0eXBlb2YgZXJyb3IgKyAnLiAnICtcbiAgICAgICAgICAgICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgK1xuICAgICAgICAgICAgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yLm1lc3NhZ2VdID0gdHJ1ZTtcblxuICAgICAgICAgIHZhciBzdGFjayA9IGdldFN0YWNrID8gZ2V0U3RhY2soKSA6ICcnO1xuXG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ZhaWxlZCAnICsgbG9jYXRpb24gKyAnIHR5cGU6ICcgKyBlcnJvci5tZXNzYWdlICsgKHN0YWNrICE9IG51bGwgPyBzdGFjayA6ICcnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBSZXNldHMgd2FybmluZyBjYWNoZSB3aGVuIHRlc3RpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNoZWNrUHJvcFR5cGVzO1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsInZhciBfZXhjbHVkZWQgPSBbXCJzaXRla2V5XCIsIFwib25DaGFuZ2VcIiwgXCJ0aGVtZVwiLCBcInR5cGVcIiwgXCJ0YWJpbmRleFwiLCBcIm9uRXhwaXJlZFwiLCBcIm9uRXJyb3JlZFwiLCBcInNpemVcIiwgXCJzdG9rZW5cIiwgXCJncmVjYXB0Y2hhXCIsIFwiYmFkZ2VcIiwgXCJobFwiLCBcImlzb2xhdGVkXCJdO1xuZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07IHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHsgaWYgKHNlbGYgPT09IHZvaWQgMCkgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIHNlbGY7IH1cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTsgfVxuZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7IG8uX19wcm90b19fID0gcDsgcmV0dXJuIG87IH07IHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7IH1cbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xudmFyIFJlQ0FQVENIQSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShSZUNBUFRDSEEsIF9SZWFjdCRDb21wb25lbnQpO1xuICBmdW5jdGlvbiBSZUNBUFRDSEEoKSB7XG4gICAgdmFyIF90aGlzO1xuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGFuZGxlRXhwaXJlZCA9IF90aGlzLmhhbmRsZUV4cGlyZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlRXJyb3JlZCA9IF90aGlzLmhhbmRsZUVycm9yZWQuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlQ2hhbmdlID0gX3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIF90aGlzLmhhbmRsZVJlY2FwdGNoYVJlZiA9IF90aGlzLmhhbmRsZVJlY2FwdGNoYVJlZi5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgdmFyIF9wcm90byA9IFJlQ0FQVENIQS5wcm90b3R5cGU7XG4gIF9wcm90by5nZXRDYXB0Y2hhRnVuY3Rpb24gPSBmdW5jdGlvbiBnZXRDYXB0Y2hhRnVuY3Rpb24oZm5OYW1lKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZ3JlY2FwdGNoYSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMuZ3JlY2FwdGNoYS5lbnRlcnByaXNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmdyZWNhcHRjaGEuZW50ZXJwcmlzZVtmbk5hbWVdO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZ3JlY2FwdGNoYVtmbk5hbWVdO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgX3Byb3RvLmdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgdmFyIGdldFJlc3BvbnNlID0gdGhpcy5nZXRDYXB0Y2hhRnVuY3Rpb24oXCJnZXRSZXNwb25zZVwiKTtcbiAgICBpZiAoZ2V0UmVzcG9uc2UgJiYgdGhpcy5fd2lkZ2V0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKHRoaXMuX3dpZGdldElkKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG4gIF9wcm90by5nZXRXaWRnZXRJZCA9IGZ1bmN0aW9uIGdldFdpZGdldElkKCkge1xuICAgIGlmICh0aGlzLnByb3BzLmdyZWNhcHRjaGEgJiYgdGhpcy5fd2lkZ2V0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3dpZGdldElkO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgX3Byb3RvLmV4ZWN1dGUgPSBmdW5jdGlvbiBleGVjdXRlKCkge1xuICAgIHZhciBleGVjdXRlID0gdGhpcy5nZXRDYXB0Y2hhRnVuY3Rpb24oXCJleGVjdXRlXCIpO1xuICAgIGlmIChleGVjdXRlICYmIHRoaXMuX3dpZGdldElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBleGVjdXRlKHRoaXMuX3dpZGdldElkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZXhlY3V0ZVJlcXVlc3RlZCA9IHRydWU7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uZXhlY3V0ZUFzeW5jID0gZnVuY3Rpb24gZXhlY3V0ZUFzeW5jKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBfdGhpczIuZXhlY3V0aW9uUmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICBfdGhpczIuZXhlY3V0aW9uUmVqZWN0ID0gcmVqZWN0O1xuICAgICAgX3RoaXMyLmV4ZWN1dGUoKTtcbiAgICB9KTtcbiAgfTtcbiAgX3Byb3RvLnJlc2V0ID0gZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgdmFyIHJlc2V0dGVyID0gdGhpcy5nZXRDYXB0Y2hhRnVuY3Rpb24oXCJyZXNldFwiKTtcbiAgICBpZiAocmVzZXR0ZXIgJiYgdGhpcy5fd2lkZ2V0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzZXR0ZXIodGhpcy5fd2lkZ2V0SWQpO1xuICAgIH1cbiAgfTtcbiAgX3Byb3RvLmZvcmNlUmVzZXQgPSBmdW5jdGlvbiBmb3JjZVJlc2V0KCkge1xuICAgIHZhciByZXNldHRlciA9IHRoaXMuZ2V0Q2FwdGNoYUZ1bmN0aW9uKFwicmVzZXRcIik7XG4gICAgaWYgKHJlc2V0dGVyKSB7XG4gICAgICByZXNldHRlcigpO1xuICAgIH1cbiAgfTtcbiAgX3Byb3RvLmhhbmRsZUV4cGlyZWQgPSBmdW5jdGlvbiBoYW5kbGVFeHBpcmVkKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uRXhwaXJlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkV4cGlyZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UobnVsbCk7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uaGFuZGxlRXJyb3JlZCA9IGZ1bmN0aW9uIGhhbmRsZUVycm9yZWQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25FcnJvcmVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXJyb3JlZCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5leGVjdXRpb25SZWplY3QpIHtcbiAgICAgIHRoaXMuZXhlY3V0aW9uUmVqZWN0KCk7XG4gICAgICBkZWxldGUgdGhpcy5leGVjdXRpb25SZXNvbHZlO1xuICAgICAgZGVsZXRlIHRoaXMuZXhlY3V0aW9uUmVqZWN0O1xuICAgIH1cbiAgfTtcbiAgX3Byb3RvLmhhbmRsZUNoYW5nZSA9IGZ1bmN0aW9uIGhhbmRsZUNoYW5nZSh0b2tlbikge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRva2VuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZXhlY3V0aW9uUmVzb2x2ZSkge1xuICAgICAgdGhpcy5leGVjdXRpb25SZXNvbHZlKHRva2VuKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmV4ZWN1dGlvblJlamVjdDtcbiAgICAgIGRlbGV0ZSB0aGlzLmV4ZWN1dGlvblJlc29sdmU7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uZXhwbGljaXRSZW5kZXIgPSBmdW5jdGlvbiBleHBsaWNpdFJlbmRlcigpIHtcbiAgICB2YXIgcmVuZGVyID0gdGhpcy5nZXRDYXB0Y2hhRnVuY3Rpb24oXCJyZW5kZXJcIik7XG4gICAgaWYgKHJlbmRlciAmJiB0aGlzLl93aWRnZXRJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICB0aGlzLl93aWRnZXRJZCA9IHJlbmRlcih3cmFwcGVyLCB7XG4gICAgICAgIHNpdGVrZXk6IHRoaXMucHJvcHMuc2l0ZWtleSxcbiAgICAgICAgY2FsbGJhY2s6IHRoaXMuaGFuZGxlQ2hhbmdlLFxuICAgICAgICB0aGVtZTogdGhpcy5wcm9wcy50aGVtZSxcbiAgICAgICAgdHlwZTogdGhpcy5wcm9wcy50eXBlLFxuICAgICAgICB0YWJpbmRleDogdGhpcy5wcm9wcy50YWJpbmRleCxcbiAgICAgICAgXCJleHBpcmVkLWNhbGxiYWNrXCI6IHRoaXMuaGFuZGxlRXhwaXJlZCxcbiAgICAgICAgXCJlcnJvci1jYWxsYmFja1wiOiB0aGlzLmhhbmRsZUVycm9yZWQsXG4gICAgICAgIHNpemU6IHRoaXMucHJvcHMuc2l6ZSxcbiAgICAgICAgc3Rva2VuOiB0aGlzLnByb3BzLnN0b2tlbixcbiAgICAgICAgaGw6IHRoaXMucHJvcHMuaGwsXG4gICAgICAgIGJhZGdlOiB0aGlzLnByb3BzLmJhZGdlLFxuICAgICAgICBpc29sYXRlZDogdGhpcy5wcm9wcy5pc29sYXRlZFxuICAgICAgfSk7XG4gICAgICB0aGlzLmNhcHRjaGEuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gICAgfVxuICAgIGlmICh0aGlzLl9leGVjdXRlUmVxdWVzdGVkICYmIHRoaXMucHJvcHMuZ3JlY2FwdGNoYSAmJiB0aGlzLl93aWRnZXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9leGVjdXRlUmVxdWVzdGVkID0gZmFsc2U7XG4gICAgICB0aGlzLmV4ZWN1dGUoKTtcbiAgICB9XG4gIH07XG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZXhwbGljaXRSZW5kZXIoKTtcbiAgfTtcbiAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmV4cGxpY2l0UmVuZGVyKCk7XG4gIH07XG4gIF9wcm90by5oYW5kbGVSZWNhcHRjaGFSZWYgPSBmdW5jdGlvbiBoYW5kbGVSZWNhcHRjaGFSZWYoZWxlbSkge1xuICAgIHRoaXMuY2FwdGNoYSA9IGVsZW07XG4gIH07XG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgLy8gY29uc3VtZSBwcm9wZXJ0aWVzIG93bmVkIGJ5IHRoZSByZUNBVFBDSEEsIHBhc3MgdGhlIHJlc3QgdG8gdGhlIGRpdiBzbyB0aGUgdXNlciBjYW4gc3R5bGUgaXQuXG4gICAgLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbiAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgc2l0ZWtleSA9IF90aGlzJHByb3BzLnNpdGVrZXksXG4gICAgICBvbkNoYW5nZSA9IF90aGlzJHByb3BzLm9uQ2hhbmdlLFxuICAgICAgdGhlbWUgPSBfdGhpcyRwcm9wcy50aGVtZSxcbiAgICAgIHR5cGUgPSBfdGhpcyRwcm9wcy50eXBlLFxuICAgICAgdGFiaW5kZXggPSBfdGhpcyRwcm9wcy50YWJpbmRleCxcbiAgICAgIG9uRXhwaXJlZCA9IF90aGlzJHByb3BzLm9uRXhwaXJlZCxcbiAgICAgIG9uRXJyb3JlZCA9IF90aGlzJHByb3BzLm9uRXJyb3JlZCxcbiAgICAgIHNpemUgPSBfdGhpcyRwcm9wcy5zaXplLFxuICAgICAgc3Rva2VuID0gX3RoaXMkcHJvcHMuc3Rva2VuLFxuICAgICAgZ3JlY2FwdGNoYSA9IF90aGlzJHByb3BzLmdyZWNhcHRjaGEsXG4gICAgICBiYWRnZSA9IF90aGlzJHByb3BzLmJhZGdlLFxuICAgICAgaGwgPSBfdGhpcyRwcm9wcy5obCxcbiAgICAgIGlzb2xhdGVkID0gX3RoaXMkcHJvcHMuaXNvbGF0ZWQsXG4gICAgICBjaGlsZFByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3RoaXMkcHJvcHMsIF9leGNsdWRlZCk7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7fSwgY2hpbGRQcm9wcywge1xuICAgICAgcmVmOiB0aGlzLmhhbmRsZVJlY2FwdGNoYVJlZlxuICAgIH0pKTtcbiAgfTtcbiAgcmV0dXJuIFJlQ0FQVENIQTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcbmV4cG9ydCB7IFJlQ0FQVENIQSBhcyBkZWZhdWx0IH07XG5SZUNBUFRDSEEuZGlzcGxheU5hbWUgPSBcIlJlQ0FQVENIQVwiO1xuUmVDQVBUQ0hBLnByb3BUeXBlcyA9IHtcbiAgc2l0ZWtleTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGdyZWNhcHRjaGE6IFByb3BUeXBlcy5vYmplY3QsXG4gIHRoZW1lOiBQcm9wVHlwZXMub25lT2YoW1wiZGFya1wiLCBcImxpZ2h0XCJdKSxcbiAgdHlwZTogUHJvcFR5cGVzLm9uZU9mKFtcImltYWdlXCIsIFwiYXVkaW9cIl0pLFxuICB0YWJpbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgb25FeHBpcmVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgb25FcnJvcmVkOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcImNvbXBhY3RcIiwgXCJub3JtYWxcIiwgXCJpbnZpc2libGVcIl0pLFxuICBzdG9rZW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBiYWRnZTogUHJvcFR5cGVzLm9uZU9mKFtcImJvdHRvbXJpZ2h0XCIsIFwiYm90dG9tbGVmdFwiLCBcImlubGluZVwiXSksXG4gIGlzb2xhdGVkOiBQcm9wVHlwZXMuYm9vbFxufTtcblJlQ0FQVENIQS5kZWZhdWx0UHJvcHMgPSB7XG4gIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSgpIHt9LFxuICB0aGVtZTogXCJsaWdodFwiLFxuICB0eXBlOiBcImltYWdlXCIsXG4gIHRhYmluZGV4OiAwLFxuICBzaXplOiBcIm5vcm1hbFwiLFxuICBiYWRnZTogXCJib3R0b21yaWdodFwiXG59OyIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50LCBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gXCJob2lzdC1ub24tcmVhY3Qtc3RhdGljc1wiO1xudmFyIFNDUklQVF9NQVAgPSB7fTsgLy8gQSBjb3VudGVyIHVzZWQgdG8gZ2VuZXJhdGUgYSB1bmlxdWUgaWQgZm9yIGVhY2ggY29tcG9uZW50IHRoYXQgdXNlcyB0aGUgZnVuY3Rpb25cblxudmFyIGlkQ291bnQgPSAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZUFzeW5jU2NyaXB0KGdldFNjcmlwdFVSTCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBXaXRoQXN5bmNTY3JpcHQoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHZhciB3cmFwcGVkQ29tcG9uZW50TmFtZSA9IFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8IFwiQ29tcG9uZW50XCI7XG5cbiAgICB2YXIgQXN5bmNTY3JpcHRMb2FkZXIgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoQXN5bmNTY3JpcHRMb2FkZXIsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBBc3luY1NjcmlwdExvYWRlcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge307XG4gICAgICAgIF90aGlzLl9fc2NyaXB0VVJMID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gQXN5bmNTY3JpcHRMb2FkZXIucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uYXN5bmNTY3JpcHRMb2FkZXJHZXRTY3JpcHRMb2FkZXJJRCA9IGZ1bmN0aW9uIGFzeW5jU2NyaXB0TG9hZGVyR2V0U2NyaXB0TG9hZGVySUQoKSB7XG4gICAgICAgIGlmICghdGhpcy5fX3NjcmlwdExvYWRlcklEKSB7XG4gICAgICAgICAgdGhpcy5fX3NjcmlwdExvYWRlcklEID0gXCJhc3luYy1zY3JpcHQtbG9hZGVyLVwiICsgaWRDb3VudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX19zY3JpcHRMb2FkZXJJRDtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5zZXR1cFNjcmlwdFVSTCA9IGZ1bmN0aW9uIHNldHVwU2NyaXB0VVJMKCkge1xuICAgICAgICB0aGlzLl9fc2NyaXB0VVJMID0gdHlwZW9mIGdldFNjcmlwdFVSTCA9PT0gXCJmdW5jdGlvblwiID8gZ2V0U2NyaXB0VVJMKCkgOiBnZXRTY3JpcHRVUkw7XG4gICAgICAgIHJldHVybiB0aGlzLl9fc2NyaXB0VVJMO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmFzeW5jU2NyaXB0TG9hZGVySGFuZGxlTG9hZCA9IGZ1bmN0aW9uIGFzeW5jU2NyaXB0TG9hZGVySGFuZGxlTG9hZChzdGF0ZSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAvLyB1c2UgcmVhY3RzIHNldFN0YXRlIGNhbGxiYWNrIHRvIGZpcmUgcHJvcHMuYXN5bmNTY3JpcHRPbkxvYWQgd2l0aCBuZXcgc3RhdGUvZW50cnlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIucHJvcHMuYXN5bmNTY3JpcHRPbkxvYWQgJiYgX3RoaXMyLnByb3BzLmFzeW5jU2NyaXB0T25Mb2FkKF90aGlzMi5zdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmFzeW5jU2NyaXB0TG9hZGVyVHJpZ2dlck9uU2NyaXB0TG9hZGVkID0gZnVuY3Rpb24gYXN5bmNTY3JpcHRMb2FkZXJUcmlnZ2VyT25TY3JpcHRMb2FkZWQoKSB7XG4gICAgICAgIHZhciBtYXBFbnRyeSA9IFNDUklQVF9NQVBbdGhpcy5fX3NjcmlwdFVSTF07XG5cbiAgICAgICAgaWYgKCFtYXBFbnRyeSB8fCAhbWFwRW50cnkubG9hZGVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2NyaXB0IGlzIG5vdCBsb2FkZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgb2JzS2V5IGluIG1hcEVudHJ5Lm9ic2VydmVycykge1xuICAgICAgICAgIG1hcEVudHJ5Lm9ic2VydmVyc1tvYnNLZXldKG1hcEVudHJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB3aW5kb3dbb3B0aW9ucy5jYWxsYmFja05hbWVdO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBzY3JpcHRVUkwgPSB0aGlzLnNldHVwU2NyaXB0VVJMKCk7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmFzeW5jU2NyaXB0TG9hZGVyR2V0U2NyaXB0TG9hZGVySUQoKTtcbiAgICAgICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgICAgICAgIGdsb2JhbE5hbWUgPSBfb3B0aW9ucy5nbG9iYWxOYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2tOYW1lID0gX29wdGlvbnMuY2FsbGJhY2tOYW1lLFxuICAgICAgICAgICAgc2NyaXB0SWQgPSBfb3B0aW9ucy5zY3JpcHRJZDsgLy8gY2hlY2sgaWYgZ2xvYmFsIG9iamVjdCBhbHJlYWR5IGF0dGFjaGVkIHRvIHdpbmRvd1xuXG4gICAgICAgIGlmIChnbG9iYWxOYW1lICYmIHR5cGVvZiB3aW5kb3dbZ2xvYmFsTmFtZV0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBTQ1JJUFRfTUFQW3NjcmlwdFVSTF0gPSB7XG4gICAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICBvYnNlcnZlcnM6IHt9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSAvLyBjaGVjayBpZiBzY3JpcHQgbG9hZGluZyBhbHJlYWR5XG5cblxuICAgICAgICBpZiAoU0NSSVBUX01BUFtzY3JpcHRVUkxdKSB7XG4gICAgICAgICAgdmFyIGVudHJ5ID0gU0NSSVBUX01BUFtzY3JpcHRVUkxdOyAvLyBpZiBsb2FkZWQgb3IgZXJyb3JlZCB0aGVuIFwiZmluaXNoXCJcblxuICAgICAgICAgIGlmIChlbnRyeSAmJiAoZW50cnkubG9hZGVkIHx8IGVudHJ5LmVycm9yZWQpKSB7XG4gICAgICAgICAgICB0aGlzLmFzeW5jU2NyaXB0TG9hZGVySGFuZGxlTG9hZChlbnRyeSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBpZiBzdGlsbCBsb2FkaW5nIHRoZW4gY2FsbGJhY2sgdG8gb2JzZXJ2ZXIgcXVldWVcblxuXG4gICAgICAgICAgZW50cnkub2JzZXJ2ZXJzW2tleV0gPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuYXN5bmNTY3JpcHRMb2FkZXJIYW5kbGVMb2FkKGVudHJ5KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICAqIGhhc24ndCBzdGFydGVkIGxvYWRpbmdcbiAgICAgICAgICogc3RhcnQgdGhlIFwibWFnaWNcIlxuICAgICAgICAgKiBzZXR1cCBzY3JpcHQgdG8gbG9hZCBhbmQgb2JzZXJ2ZXJzXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHt9O1xuXG4gICAgICAgIG9ic2VydmVyc1trZXldID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5hc3luY1NjcmlwdExvYWRlckhhbmRsZUxvYWQoZW50cnkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNDUklQVF9NQVBbc2NyaXB0VVJMXSA9IHtcbiAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgIG9ic2VydmVyczogb2JzZXJ2ZXJzXG4gICAgICAgIH07XG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBzY3JpcHQuc3JjID0gc2NyaXB0VVJMO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGF0dHJpYnV0ZSBpbiBvcHRpb25zLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjcmlwdElkKSB7XG4gICAgICAgICAgc2NyaXB0LmlkID0gc2NyaXB0SWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2FsbE9ic2VydmVyRnVuY0FuZFJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gY2FsbE9ic2VydmVyRnVuY0FuZFJlbW92ZU9ic2VydmVyKGZ1bmMpIHtcbiAgICAgICAgICBpZiAoU0NSSVBUX01BUFtzY3JpcHRVUkxdKSB7XG4gICAgICAgICAgICB2YXIgbWFwRW50cnkgPSBTQ1JJUFRfTUFQW3NjcmlwdFVSTF07XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzTWFwID0gbWFwRW50cnkub2JzZXJ2ZXJzO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBvYnNLZXkgaW4gb2JzZXJ2ZXJzTWFwKSB7XG4gICAgICAgICAgICAgIGlmIChmdW5jKG9ic2VydmVyc01hcFtvYnNLZXldKSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYnNlcnZlcnNNYXBbb2JzS2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY2FsbGJhY2tOYW1lICYmIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuYXN5bmNTY3JpcHRMb2FkZXJUcmlnZ2VyT25TY3JpcHRMb2FkZWQoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgbWFwRW50cnkgPSBTQ1JJUFRfTUFQW3NjcmlwdFVSTF07XG5cbiAgICAgICAgICBpZiAobWFwRW50cnkpIHtcbiAgICAgICAgICAgIG1hcEVudHJ5LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBjYWxsT2JzZXJ2ZXJGdW5jQW5kUmVtb3ZlT2JzZXJ2ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFja05hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvYnNlcnZlcihtYXBFbnRyeSk7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBtYXBFbnRyeSA9IFNDUklQVF9NQVBbc2NyaXB0VVJMXTtcblxuICAgICAgICAgIGlmIChtYXBFbnRyeSkge1xuICAgICAgICAgICAgbWFwRW50cnkuZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICBjYWxsT2JzZXJ2ZXJGdW5jQW5kUmVtb3ZlT2JzZXJ2ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgIG9ic2VydmVyKG1hcEVudHJ5KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0YWcgc2NyaXB0XG4gICAgICAgIHZhciBzY3JpcHRVUkwgPSB0aGlzLl9fc2NyaXB0VVJMO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnJlbW92ZU9uVW5tb3VudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBhbGxTY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbFNjcmlwdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChhbGxTY3JpcHRzW2ldLnNyYy5pbmRleE9mKHNjcmlwdFVSTCkgPiAtMSkge1xuICAgICAgICAgICAgICBpZiAoYWxsU2NyaXB0c1tpXS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgYWxsU2NyaXB0c1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFsbFNjcmlwdHNbaV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIENsZWFuIHRoZSBvYnNlcnZlciBlbnRyeVxuXG5cbiAgICAgICAgdmFyIG1hcEVudHJ5ID0gU0NSSVBUX01BUFtzY3JpcHRVUkxdO1xuXG4gICAgICAgIGlmIChtYXBFbnRyeSkge1xuICAgICAgICAgIGRlbGV0ZSBtYXBFbnRyeS5vYnNlcnZlcnNbdGhpcy5hc3luY1NjcmlwdExvYWRlckdldFNjcmlwdExvYWRlcklEKCldO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZlT25Vbm1vdW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkZWxldGUgU0NSSVBUX01BUFtzY3JpcHRVUkxdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGdsb2JhbE5hbWUgPSBvcHRpb25zLmdsb2JhbE5hbWU7IC8vIHJlbW92ZSBhc3luY1NjcmlwdE9uTG9hZCBmcm9tIGNoaWxkUHJvcHNcblxuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYXN5bmNTY3JpcHRPbkxvYWQgPSBfdGhpcyRwcm9wcy5hc3luY1NjcmlwdE9uTG9hZCxcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZiA9IF90aGlzJHByb3BzLmZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiYXN5bmNTY3JpcHRPbkxvYWRcIiwgXCJmb3J3YXJkZWRSZWZcIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICAgICAgICBpZiAoZ2xvYmFsTmFtZSAmJiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgY2hpbGRQcm9wc1tnbG9iYWxOYW1lXSA9IHR5cGVvZiB3aW5kb3dbZ2xvYmFsTmFtZV0gIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbZ2xvYmFsTmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZFByb3BzLnJlZiA9IGZvcndhcmRlZFJlZjtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgY2hpbGRQcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQXN5bmNTY3JpcHRMb2FkZXI7XG4gICAgfShDb21wb25lbnQpOyAvLyBOb3RlIHRoZSBzZWNvbmQgcGFyYW0gXCJyZWZcIiBwcm92aWRlZCBieSBSZWFjdC5mb3J3YXJkUmVmLlxuICAgIC8vIFdlIGNhbiBwYXNzIGl0IGFsb25nIHRvIEFzeW5jU2NyaXB0TG9hZGVyIGFzIGEgcmVndWxhciBwcm9wLCBlLmcuIFwiZm9yd2FyZGVkUmVmXCJcbiAgICAvLyBBbmQgaXQgY2FuIHRoZW4gYmUgYXR0YWNoZWQgdG8gdGhlIENvbXBvbmVudC5cblxuXG4gICAgdmFyIEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEFzeW5jU2NyaXB0TG9hZGVyLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgZm9yd2FyZGVkUmVmOiByZWZcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgICBGb3J3YXJkZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBcIkFzeW5jU2NyaXB0TG9hZGVyKFwiICsgd3JhcHBlZENvbXBvbmVudE5hbWUgKyBcIilcIjtcbiAgICBGb3J3YXJkZWRDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgICAgYXN5bmNTY3JpcHRPbkxvYWQ6IFByb3BUeXBlcy5mdW5jXG4gICAgfTtcbiAgICByZXR1cm4gaG9pc3RTdGF0aWNzKEZvcndhcmRlZENvbXBvbmVudCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG59IiwiaW1wb3J0IFJlQ0FQVENIQSBmcm9tIFwiLi9yZWNhcHRjaGFcIjtcbmltcG9ydCBtYWtlQXN5bmNTY3JpcHRMb2FkZXIgZnJvbSBcInJlYWN0LWFzeW5jLXNjcmlwdFwiO1xudmFyIGNhbGxiYWNrTmFtZSA9IFwib25sb2FkY2FsbGJhY2tcIjtcbnZhciBnbG9iYWxOYW1lID0gXCJncmVjYXB0Y2hhXCI7XG5mdW5jdGlvbiBnZXRPcHRpb25zKCkge1xuICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cucmVjYXB0Y2hhT3B0aW9ucyB8fCB7fTtcbn1cbmZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgdmFyIGR5bmFtaWNPcHRpb25zID0gZ2V0T3B0aW9ucygpO1xuICB2YXIgaG9zdG5hbWUgPSBkeW5hbWljT3B0aW9ucy51c2VSZWNhcHRjaGFOZXQgPyBcInJlY2FwdGNoYS5uZXRcIiA6IFwid3d3Lmdvb2dsZS5jb21cIjtcbiAgaWYgKGR5bmFtaWNPcHRpb25zLmVudGVycHJpc2UpIHtcbiAgICByZXR1cm4gXCJodHRwczovL1wiICsgaG9zdG5hbWUgKyBcIi9yZWNhcHRjaGEvZW50ZXJwcmlzZS5qcz9vbmxvYWQ9XCIgKyBjYWxsYmFja05hbWUgKyBcIiZyZW5kZXI9ZXhwbGljaXRcIjtcbiAgfVxuICByZXR1cm4gXCJodHRwczovL1wiICsgaG9zdG5hbWUgKyBcIi9yZWNhcHRjaGEvYXBpLmpzP29ubG9hZD1cIiArIGNhbGxiYWNrTmFtZSArIFwiJnJlbmRlcj1leHBsaWNpdFwiO1xufVxuZXhwb3J0IGRlZmF1bHQgbWFrZUFzeW5jU2NyaXB0TG9hZGVyKGdldFVSTCwge1xuICBjYWxsYmFja05hbWU6IGNhbGxiYWNrTmFtZSxcbiAgZ2xvYmFsTmFtZTogZ2xvYmFsTmFtZSxcbiAgYXR0cmlidXRlczogZ2V0T3B0aW9ucygpLm5vbmNlID8ge1xuICAgIG5vbmNlOiBnZXRPcHRpb25zKCkubm9uY2VcbiAgfSA6IHt9XG59KShSZUNBUFRDSEEpOyIsImltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlRWxlbWVudCwgY3JlYXRlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVDQVBUQ0hBIGZyb20gXCJyZWFjdC1nb29nbGUtcmVjYXB0Y2hhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlQ2FwdGNoYSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyB0b2tlbjogXCJcIiB9O1xuICAgICAgICB0aGlzLnJlY2FwdGNoYVJlZiA9IGNyZWF0ZVJlZigpO1xuICAgICAgICB0aGlzLmxhc3RUb2tlbiA9IFwiXCI7XG4gICAgICAgIHdpbmRvdy5yZWNhcHRjaGFSZWYgPSB7XG4gICAgICAgICAgICBleGVjdXRlOiB0aGlzLmV4ZWN1dGUuYmluZCh0aGlzKVxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHt9XG5cbiAgICBoYW5kbGVPbkV2ZW50KGNhbGxiYWNrRnVuKSB7XG4gICAgICAgIGlmIChjYWxsYmFja0Z1biAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2tGdW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25DaGFuZ2VFdmVudCgpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSB0aGlzLnJlY2FwdGNoYVJlZi5jdXJyZW50LmdldFZhbHVlKCk7XG4gICAgICAgIHRoaXMubGFzdFRva2VuID0gdG9rZW47XG4gICAgICAgIHRoaXMucHJvcHMudG9rZW4uc2V0VmFsdWUodG9rZW4pO1xuICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlQWN0aW9uLmV4ZWN1dGUoKTtcbiAgICB9XG5cbiAgICBvbkVycm9yRXZlbnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25FcnJvckFjdGlvbi5leGVjdXRlKCk7XG4gICAgfVxuXG4gICAgb25FeHBpcmVkRXZlbnQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25FeHBpcmVkQWN0aW9uLmV4ZWN1dGUoKTtcbiAgICB9XG5cbiAgICBleGVjdXRlKCkge1xuICAgICAgICBjb25zdCB2ZXJpZmllZCA9IHRoaXMucmVjYXB0Y2hhUmVmLmN1cnJlbnQuZXhlY3V0ZUFzeW5jKCk7XG4gICAgICAgIGNvbnNvbGUuaW5mbyhcImluc2lkZSBleGVjdXRlIGZ1bmN0aW9uOiBcIiArIHZlcmlmaWVkKTtcbiAgICAgICAgcmV0dXJuIHZlcmlmaWVkO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudG9rZW4uc3RhdHVzID09PSBcImF2YWlsYWJsZVwiICYmIHRoaXMucHJvcHMudG9rZW4udmFsdWUgIT09IHRoaXMubGFzdFRva2VuKSB7XG4gICAgICAgICAgICAvL3RoZSB0b2tlbiB3YXMgY2hhbmdlZCBvdXRzaWRlIG9mIHRoZSB3aWRnZXQsIGFzc3VtZSB0aGUgdG9rZW4gd2FzIGludmFsaWRcbiAgICAgICAgICAgIGlmICh0aGlzLnJlY2FwdGNoYVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWNhcHRjaGFSZWYuY3VycmVudC5yZXNldCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLnNpdGVrZXkuc3RhdHVzICE9PSBcImF2YWlsYWJsZVwiID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxSZUNBUFRDSEFcbiAgICAgICAgICAgICAgICByZWY9e3RoaXMucmVjYXB0Y2hhUmVmfVxuICAgICAgICAgICAgICAgIHNpdGVrZXk9e3RoaXMucHJvcHMuc2l0ZWtleS52YWx1ZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUV2ZW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgb25FcnJvcmVkPXt0aGlzLm9uRXJyb3JFdmVudC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIG9uRXhwaXJlZD17dGhpcy5vbkV4cGlyZWRFdmVudC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgIHRoZW1lPXt0aGlzLnByb3BzLnRoZW1lfVxuICAgICAgICAgICAgICAgIHNpemU9e3RoaXMucHJvcHMuc2l6ZX1cbiAgICAgICAgICAgICAgICBiYWRnZT17dGhpcy5wcm9wcy5iYWRnZX1cbiAgICAgICAgICAgICAgICB0eXBlPXt0aGlzLnByb3BzLnR5cGV9XG4gICAgICAgICAgICAgICAgdGFiaW5kZXg9e3RoaXMucHJvcHMudGFiSW5kZXh9XG4gICAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbn1cbiJdLCJuYW1lcyI6WyJoYXNTeW1ib2wiLCJTeW1ib2wiLCJmb3IiLCJSRUFDVF9FTEVNRU5UX1RZUEUiLCJSRUFDVF9QT1JUQUxfVFlQRSIsIlJFQUNUX0ZSQUdNRU5UX1RZUEUiLCJSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIiwiUkVBQ1RfUFJPRklMRVJfVFlQRSIsIlJFQUNUX1BST1ZJREVSX1RZUEUiLCJSRUFDVF9DT05URVhUX1RZUEUiLCJSRUFDVF9BU1lOQ19NT0RFX1RZUEUiLCJSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRSIsIlJFQUNUX0ZPUldBUkRfUkVGX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIiwiUkVBQ1RfTUVNT19UWVBFIiwiUkVBQ1RfTEFaWV9UWVBFIiwiUkVBQ1RfQkxPQ0tfVFlQRSIsIlJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUiLCJSRUFDVF9SRVNQT05ERVJfVFlQRSIsIlJFQUNUX1NDT1BFX1RZUEUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJ0eXBlIiwiJCR0eXBlb2YiLCJ0eXBlT2YiLCJvYmplY3QiLCIkJHR5cGVvZlR5cGUiLCJ1bmRlZmluZWQiLCJBc3luY01vZGUiLCJDb25jdXJyZW50TW9kZSIsIkNvbnRleHRDb25zdW1lciIsIkNvbnRleHRQcm92aWRlciIsIkVsZW1lbnQiLCJGb3J3YXJkUmVmIiwiRnJhZ21lbnQiLCJMYXp5IiwiTWVtbyIsIlBvcnRhbCIsIlByb2ZpbGVyIiwiU3RyaWN0TW9kZSIsIlN1c3BlbnNlIiwiaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUiLCJpc0FzeW5jTW9kZSIsImNvbnNvbGUiLCJpc0NvbmN1cnJlbnRNb2RlIiwiaXNDb250ZXh0Q29uc3VtZXIiLCJpc0NvbnRleHRQcm92aWRlciIsImlzRWxlbWVudCIsImlzRm9yd2FyZFJlZiIsImlzRnJhZ21lbnQiLCJpc0xhenkiLCJpc01lbW8iLCJpc1BvcnRhbCIsImlzUHJvZmlsZXIiLCJpc1N0cmljdE1vZGUiLCJpc1N1c3BlbnNlIiwiZXhwb3J0cyIsIm1vZHVsZSIsInJlcXVpcmUiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwiVHlwZUVycm9yIiwic2hvdWxkVXNlTmF0aXZlIiwiYXNzaWduIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJpIiwiZnJvbUNoYXJDb2RlIiwib3JkZXIyIiwibWFwIiwibiIsImpvaW4iLCJ0ZXN0MyIsInNwbGl0IiwiZm9yRWFjaCIsImxldHRlciIsImtleXMiLCJlcnIiLCJ0YXJnZXQiLCJzb3VyY2UiLCJmcm9tIiwidG8iLCJzeW1ib2xzIiwicyIsImFyZ3VtZW50cyIsImxlbmd0aCIsImtleSIsImNhbGwiLCJSZWFjdFByb3BUeXBlc1NlY3JldCIsInByaW50V2FybmluZyIsImxvZ2dlZFR5cGVGYWlsdXJlcyIsImhhcyIsIkZ1bmN0aW9uIiwiYmluZCIsInRleHQiLCJtZXNzYWdlIiwiZXJyb3IiLCJFcnJvciIsIngiLCJjaGVja1Byb3BUeXBlcyIsInR5cGVTcGVjcyIsInZhbHVlcyIsImxvY2F0aW9uIiwiY29tcG9uZW50TmFtZSIsImdldFN0YWNrIiwidHlwZVNwZWNOYW1lIiwibmFtZSIsImV4Iiwic3RhY2siLCJyZXNldFdhcm5pbmdDYWNoZSIsIlJlYWN0SXMiLCJlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsIiwiaXNWYWxpZEVsZW1lbnQiLCJ0aHJvd09uRGlyZWN0QWNjZXNzIiwiSVRFUkFUT1JfU1lNQk9MIiwiaXRlcmF0b3IiLCJGQVVYX0lURVJBVE9SX1NZTUJPTCIsImdldEl0ZXJhdG9yRm4iLCJtYXliZUl0ZXJhYmxlIiwiaXRlcmF0b3JGbiIsIkFOT05ZTU9VUyIsIlJlYWN0UHJvcFR5cGVzIiwiYXJyYXkiLCJjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlciIsImJvb2wiLCJmdW5jIiwibnVtYmVyIiwic3RyaW5nIiwic3ltYm9sIiwiYW55IiwiY3JlYXRlQW55VHlwZUNoZWNrZXIiLCJhcnJheU9mIiwiY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyIiwiZWxlbWVudCIsImNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlciIsImVsZW1lbnRUeXBlIiwiY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlciIsImluc3RhbmNlT2YiLCJjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyIiwibm9kZSIsImNyZWF0ZU5vZGVDaGVja2VyIiwib2JqZWN0T2YiLCJjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyIiwib25lT2YiLCJjcmVhdGVFbnVtVHlwZUNoZWNrZXIiLCJvbmVPZlR5cGUiLCJjcmVhdGVVbmlvblR5cGVDaGVja2VyIiwic2hhcGUiLCJjcmVhdGVTaGFwZVR5cGVDaGVja2VyIiwiZXhhY3QiLCJjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyIiwiaXMiLCJ5IiwiUHJvcFR5cGVFcnJvciIsImNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyIiwidmFsaWRhdGUiLCJtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSIsIm1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IiwiY2hlY2tUeXBlIiwiaXNSZXF1aXJlZCIsInByb3BzIiwicHJvcE5hbWUiLCJwcm9wRnVsbE5hbWUiLCJzZWNyZXQiLCJjYWNoZUtleSIsImNoYWluZWRDaGVja1R5cGUiLCJleHBlY3RlZFR5cGUiLCJwcm9wVmFsdWUiLCJwcm9wVHlwZSIsImdldFByb3BUeXBlIiwicHJlY2lzZVR5cGUiLCJnZXRQcmVjaXNlVHlwZSIsInR5cGVDaGVja2VyIiwiQXJyYXkiLCJpc0FycmF5IiwiZXhwZWN0ZWRDbGFzcyIsImV4cGVjdGVkQ2xhc3NOYW1lIiwiYWN0dWFsQ2xhc3NOYW1lIiwiZ2V0Q2xhc3NOYW1lIiwiZXhwZWN0ZWRWYWx1ZXMiLCJ2YWx1ZXNTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwicmVwbGFjZXIiLCJ2YWx1ZSIsImFycmF5T2ZUeXBlQ2hlY2tlcnMiLCJwcm9jZXNzIiwiY2hlY2tlciIsImdldFBvc3RmaXhGb3JUeXBlV2FybmluZyIsImlzTm9kZSIsInNoYXBlVHlwZXMiLCJhbGxLZXlzIiwiZXZlcnkiLCJzdGVwIiwiZW50cmllcyIsIm5leHQiLCJkb25lIiwiZW50cnkiLCJpc1N5bWJvbCIsIlJlZ0V4cCIsIkRhdGUiLCJjb25zdHJ1Y3RvciIsIlByb3BUeXBlcyIsIl9leGNsdWRlZCIsIl9leHRlbmRzIiwiYXBwbHkiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsImV4Y2x1ZGVkIiwic291cmNlS2V5cyIsImluZGV4T2YiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwic2VsZiIsIlJlZmVyZW5jZUVycm9yIiwiX2luaGVyaXRzTG9vc2UiLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjcmVhdGUiLCJfc2V0UHJvdG90eXBlT2YiLCJvIiwicCIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiUmVDQVBUQ0hBIiwiX1JlYWN0JENvbXBvbmVudCIsIl90aGlzIiwiaGFuZGxlRXhwaXJlZCIsImhhbmRsZUVycm9yZWQiLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVSZWNhcHRjaGFSZWYiLCJfcHJvdG8iLCJnZXRDYXB0Y2hhRnVuY3Rpb24iLCJmbk5hbWUiLCJncmVjYXB0Y2hhIiwiZW50ZXJwcmlzZSIsImdldFZhbHVlIiwiZ2V0UmVzcG9uc2UiLCJfd2lkZ2V0SWQiLCJnZXRXaWRnZXRJZCIsImV4ZWN1dGUiLCJfZXhlY3V0ZVJlcXVlc3RlZCIsImV4ZWN1dGVBc3luYyIsIl90aGlzMiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiZXhlY3V0aW9uUmVzb2x2ZSIsImV4ZWN1dGlvblJlamVjdCIsInJlc2V0IiwicmVzZXR0ZXIiLCJmb3JjZVJlc2V0Iiwib25FeHBpcmVkIiwib25FcnJvcmVkIiwidG9rZW4iLCJvbkNoYW5nZSIsImV4cGxpY2l0UmVuZGVyIiwicmVuZGVyIiwid3JhcHBlciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInNpdGVrZXkiLCJjYWxsYmFjayIsInRoZW1lIiwidGFiaW5kZXgiLCJzaXplIiwic3Rva2VuIiwiaGwiLCJiYWRnZSIsImlzb2xhdGVkIiwiY2FwdGNoYSIsImFwcGVuZENoaWxkIiwiY29tcG9uZW50RGlkTW91bnQiLCJjb21wb25lbnREaWRVcGRhdGUiLCJlbGVtIiwiX3RoaXMkcHJvcHMiLCJjaGlsZFByb3BzIiwiUmVhY3QiLCJyZWYiLCJDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImRlZmF1bHRQcm9wcyIsInJlYWN0SXMiLCJSRUFDVF9TVEFUSUNTIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJjb250ZXh0VHlwZSIsImNvbnRleHRUeXBlcyIsImdldERlZmF1bHRQcm9wcyIsImdldERlcml2ZWRTdGF0ZUZyb21FcnJvciIsImdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyIsIm1peGlucyIsIktOT1dOX1NUQVRJQ1MiLCJjYWxsZXIiLCJjYWxsZWUiLCJhcml0eSIsIkZPUldBUkRfUkVGX1NUQVRJQ1MiLCJNRU1PX1NUQVRJQ1MiLCJjb21wYXJlIiwiVFlQRV9TVEFUSUNTIiwiZ2V0U3RhdGljcyIsImNvbXBvbmVudCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZ2V0UHJvdG90eXBlT2YiLCJvYmplY3RQcm90b3R5cGUiLCJob2lzdE5vblJlYWN0U3RhdGljcyIsInRhcmdldENvbXBvbmVudCIsInNvdXJjZUNvbXBvbmVudCIsImJsYWNrbGlzdCIsImluaGVyaXRlZENvbXBvbmVudCIsImNvbmNhdCIsInRhcmdldFN0YXRpY3MiLCJzb3VyY2VTdGF0aWNzIiwiZGVzY3JpcHRvciIsImUiLCJTQ1JJUFRfTUFQIiwiaWRDb3VudCIsIm1ha2VBc3luY1NjcmlwdCIsImdldFNjcmlwdFVSTCIsIm9wdGlvbnMiLCJ3cmFwV2l0aEFzeW5jU2NyaXB0IiwiV3JhcHBlZENvbXBvbmVudCIsIndyYXBwZWRDb21wb25lbnROYW1lIiwiQXN5bmNTY3JpcHRMb2FkZXIiLCJfQ29tcG9uZW50IiwiY29udGV4dCIsInN0YXRlIiwiX19zY3JpcHRVUkwiLCJhc3luY1NjcmlwdExvYWRlckdldFNjcmlwdExvYWRlcklEIiwiX19zY3JpcHRMb2FkZXJJRCIsInNldHVwU2NyaXB0VVJMIiwiYXN5bmNTY3JpcHRMb2FkZXJIYW5kbGVMb2FkIiwic2V0U3RhdGUiLCJhc3luY1NjcmlwdE9uTG9hZCIsImFzeW5jU2NyaXB0TG9hZGVyVHJpZ2dlck9uU2NyaXB0TG9hZGVkIiwibWFwRW50cnkiLCJsb2FkZWQiLCJvYnNLZXkiLCJvYnNlcnZlcnMiLCJ3aW5kb3ciLCJjYWxsYmFja05hbWUiLCJfdGhpczMiLCJzY3JpcHRVUkwiLCJfb3B0aW9ucyIsImdsb2JhbE5hbWUiLCJzY3JpcHRJZCIsImVycm9yZWQiLCJzY3JpcHQiLCJzcmMiLCJhc3luYyIsImF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJzZXRBdHRyaWJ1dGUiLCJpZCIsImNhbGxPYnNlcnZlckZ1bmNBbmRSZW1vdmVPYnNlcnZlciIsIm9ic2VydmVyc01hcCIsIm9ubG9hZCIsIm9ic2VydmVyIiwib25lcnJvciIsImJvZHkiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZU9uVW5tb3VudCIsImFsbFNjcmlwdHMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImZvcndhcmRlZFJlZiIsIkZvcndhcmRlZENvbXBvbmVudCIsImZvcndhcmRSZWYiLCJob2lzdFN0YXRpY3MiLCJnZXRPcHRpb25zIiwicmVjYXB0Y2hhT3B0aW9ucyIsImdldFVSTCIsImR5bmFtaWNPcHRpb25zIiwiaG9zdG5hbWUiLCJ1c2VSZWNhcHRjaGFOZXQiLCJtYWtlQXN5bmNTY3JpcHRMb2FkZXIiLCJub25jZSIsIlJlQ2FwdGNoYSIsInJlY2FwdGNoYVJlZiIsImNyZWF0ZVJlZiIsImxhc3RUb2tlbiIsImhhbmRsZU9uRXZlbnQiLCJjYWxsYmFja0Z1biIsIm9uQ2hhbmdlRXZlbnQiLCJjdXJyZW50Iiwic2V0VmFsdWUiLCJvbkNoYW5nZUFjdGlvbiIsIm9uRXJyb3JFdmVudCIsIm9uRXJyb3JBY3Rpb24iLCJvbkV4cGlyZWRFdmVudCIsIm9uRXhwaXJlZEFjdGlvbiIsInZlcmlmaWVkIiwiaW5mbyIsInN0YXR1cyIsInRhYkluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSxDQUEyQztBQUN6QyxHQUFBLENBQUMsWUFBVzs7QUFHZDtBQUNBO0tBQ0EsSUFBSUEsU0FBUyxHQUFHLE9BQU9DLE1BQU0sS0FBSyxVQUFVLElBQUlBLE1BQU0sQ0FBQ0MsR0FBRyxDQUFBO0tBQzFELElBQUlDLGtCQUFrQixHQUFHSCxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtLQUN6RSxJQUFJRSxpQkFBaUIsR0FBR0osU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxNQUFNLENBQUE7S0FDdkUsSUFBSUcsbUJBQW1CLEdBQUdMLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxN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
