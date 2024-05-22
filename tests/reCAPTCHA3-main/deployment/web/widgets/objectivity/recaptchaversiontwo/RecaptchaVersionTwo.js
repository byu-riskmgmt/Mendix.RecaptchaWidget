define(['react'], (function (React) { 'use strict';

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
  var RecaptchaWrapper = makeAsyncScript(getURL, {
    callbackName: callbackName,
    globalName: globalName,
    attributes: getOptions().nonce ? {
      nonce: getOptions().nonce
    } : {}
  })(ReCAPTCHA);

  class ReCaptcha extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        token: ""
      };
      this.recaptchaRef = React.createRef();
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
      return this.props.sitekey.status !== "available" ? null : React.createElement(RecaptchaWrapper, {
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

  return ReCaptcha;

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVjYXB0Y2hhVmVyc2lvblR3by5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWdvb2dsZS1yZWNhcHRjaGEvbGliL2VzbS9yZWNhcHRjaGEuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVhY3QtYXN5bmMtc2NyaXB0L2xpYi9lc20vYXN5bmMtc2NyaXB0LWxvYWRlci5qcyIsIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZWFjdC1nb29nbGUtcmVjYXB0Y2hhL2xpYi9lc20vcmVjYXB0Y2hhLXdyYXBwZXIuanMiLCIuLi8uLi8uLi8uLi8uLi9zcmMvUmVjYXB0Y2hhVmVyc2lvblR3by5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbiAgdmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG4vKipcbiAqIEFzc2VydCB0aGF0IHRoZSB2YWx1ZXMgbWF0Y2ggd2l0aCB0aGUgdHlwZSBzcGVjcy5cbiAqIEVycm9yIG1lc3NhZ2VzIGFyZSBtZW1vcml6ZWQgYW5kIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSB0eXBlU3BlY3MgTWFwIG9mIG5hbWUgdG8gYSBSZWFjdFByb3BUeXBlXG4gKiBAcGFyYW0ge29iamVjdH0gdmFsdWVzIFJ1bnRpbWUgdmFsdWVzIHRoYXQgbmVlZCB0byBiZSB0eXBlLWNoZWNrZWRcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiBlLmcuIFwicHJvcFwiLCBcImNvbnRleHRcIiwgXCJjaGlsZCBjb250ZXh0XCJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21wb25lbnROYW1lIE5hbWUgb2YgdGhlIGNvbXBvbmVudCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKiBAcGFyYW0gez9GdW5jdGlvbn0gZ2V0U3RhY2sgUmV0dXJucyB0aGUgY29tcG9uZW50IHN0YWNrLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBnZXRTdGFjaykge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvcjtcbiAgICAgICAgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcihcbiAgICAgICAgICAgICAgKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICtcbiAgICAgICAgICAgICAgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlcnJvciA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yID0gZXg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yICYmICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAnICtcbiAgICAgICAgICAgIGxvY2F0aW9uICsgJyBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJyArIHR5cGVvZiBlcnJvciArICcuICcgK1xuICAgICAgICAgICAgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgK1xuICAgICAgICAgICAgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArXG4gICAgICAgICAgICAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLidcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IubWVzc2FnZV0gPSB0cnVlO1xuXG4gICAgICAgICAgdmFyIHN0YWNrID0gZ2V0U3RhY2sgPyBnZXRTdGFjaygpIDogJyc7XG5cbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnRmFpbGVkICcgKyBsb2NhdGlvbiArICcgdHlwZTogJyArIGVycm9yLm1lc3NhZ2UgKyAoc3RhY2sgIT0gbnVsbCA/IHN0YWNrIDogJycpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFJlc2V0cyB3YXJuaW5nIGNhY2hlIHdoZW4gdGVzdGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5jaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2hlY2tQcm9wVHlwZXM7XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xudmFyIGFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gcmVxdWlyZSgnLi9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQnKTtcbnZhciBjaGVja1Byb3BUeXBlcyA9IHJlcXVpcmUoJy4vY2hlY2tQcm9wVHlwZXMnKTtcblxudmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArIHRleHQ7XG4gICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIC8vIC0tLSBXZWxjb21lIHRvIGRlYnVnZ2luZyBSZWFjdCAtLS1cbiAgICAgIC8vIFRoaXMgZXJyb3Igd2FzIHRocm93biBhcyBhIGNvbnZlbmllbmNlIHNvIHRoYXQgeW91IGNhbiB1c2UgdGhpcyBzdGFja1xuICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfTtcbn1cblxuZnVuY3Rpb24gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNWYWxpZEVsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgLyogZ2xvYmFsIFN5bWJvbCAqL1xuICB2YXIgSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG4gIHZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJzsgLy8gQmVmb3JlIFN5bWJvbCBzcGVjLlxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBpdGVyYXRvciBtZXRob2QgZnVuY3Rpb24gY29udGFpbmVkIG9uIHRoZSBpdGVyYWJsZSBvYmplY3QuXG4gICAqXG4gICAqIEJlIHN1cmUgdG8gaW52b2tlIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBpdGVyYWJsZSBhcyBjb250ZXh0OlxuICAgKlxuICAgKiAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG15SXRlcmFibGUpO1xuICAgKiAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICogICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG15SXRlcmFibGUpO1xuICAgKiAgICAgICAuLi5cbiAgICogICAgIH1cbiAgICpcbiAgICogQHBhcmFtIHs/b2JqZWN0fSBtYXliZUl0ZXJhYmxlXG4gICAqIEByZXR1cm4gez9mdW5jdGlvbn1cbiAgICovXG4gIGZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICAgIHZhciBpdGVyYXRvckZuID0gbWF5YmVJdGVyYWJsZSAmJiAoSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXSk7XG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gaXRlcmF0b3JGbjtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ29sbGVjdGlvbiBvZiBtZXRob2RzIHRoYXQgYWxsb3cgZGVjbGFyYXRpb24gYW5kIHZhbGlkYXRpb24gb2YgcHJvcHMgdGhhdCBhcmVcbiAgICogc3VwcGxpZWQgdG8gUmVhY3QgY29tcG9uZW50cy4gRXhhbXBsZSB1c2FnZTpcbiAgICpcbiAgICogICB2YXIgUHJvcHMgPSByZXF1aXJlKCdSZWFjdFByb3BUeXBlcycpO1xuICAgKiAgIHZhciBNeUFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIHByb3AgbmFtZWQgXCJkZXNjcmlwdGlvblwiLlxuICAgKiAgICAgICBkZXNjcmlwdGlvbjogUHJvcHMuc3RyaW5nLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHJlcXVpcmVkIGVudW0gcHJvcCBuYW1lZCBcImNhdGVnb3J5XCIuXG4gICAqICAgICAgIGNhdGVnb3J5OiBQcm9wcy5vbmVPZihbJ05ld3MnLCdQaG90b3MnXSkuaXNSZXF1aXJlZCxcbiAgICpcbiAgICogICAgICAgLy8gQSBwcm9wIG5hbWVkIFwiZGlhbG9nXCIgdGhhdCByZXF1aXJlcyBhbiBpbnN0YW5jZSBvZiBEaWFsb2cuXG4gICAqICAgICAgIGRpYWxvZzogUHJvcHMuaW5zdGFuY2VPZihEaWFsb2cpLmlzUmVxdWlyZWRcbiAgICogICAgIH0sXG4gICAqICAgICByZW5kZXI6IGZ1bmN0aW9uKCkgeyAuLi4gfVxuICAgKiAgIH0pO1xuICAgKlxuICAgKiBBIG1vcmUgZm9ybWFsIHNwZWNpZmljYXRpb24gb2YgaG93IHRoZXNlIG1ldGhvZHMgYXJlIHVzZWQ6XG4gICAqXG4gICAqICAgdHlwZSA6PSBhcnJheXxib29sfGZ1bmN8b2JqZWN0fG51bWJlcnxzdHJpbmd8b25lT2YoWy4uLl0pfGluc3RhbmNlT2YoLi4uKVxuICAgKiAgIGRlY2wgOj0gUmVhY3RQcm9wVHlwZXMue3R5cGV9KC5pc1JlcXVpcmVkKT9cbiAgICpcbiAgICogRWFjaCBhbmQgZXZlcnkgZGVjbGFyYXRpb24gcHJvZHVjZXMgYSBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIHNpZ25hdHVyZS4gVGhpc1xuICAgKiBhbGxvd3MgdGhlIGNyZWF0aW9uIG9mIGN1c3RvbSB2YWxpZGF0aW9uIGZ1bmN0aW9ucy4gRm9yIGV4YW1wbGU6XG4gICAqXG4gICAqICB2YXIgTXlMaW5rID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICBwcm9wVHlwZXM6IHtcbiAgICogICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgb3IgVVJJIHByb3AgbmFtZWQgXCJocmVmXCIuXG4gICAqICAgICAgaHJlZjogZnVuY3Rpb24ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lKSB7XG4gICAqICAgICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgKiAgICAgICAgaWYgKHByb3BWYWx1ZSAhPSBudWxsICYmIHR5cGVvZiBwcm9wVmFsdWUgIT09ICdzdHJpbmcnICYmXG4gICAqICAgICAgICAgICAgIShwcm9wVmFsdWUgaW5zdGFuY2VvZiBVUkkpKSB7XG4gICAqICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAqICAgICAgICAgICAgJ0V4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIFVSSSBmb3IgJyArIHByb3BOYW1lICsgJyBpbiAnICtcbiAgICogICAgICAgICAgICBjb21wb25lbnROYW1lXG4gICAqICAgICAgICAgICk7XG4gICAqICAgICAgICB9XG4gICAqICAgICAgfVxuICAgKiAgICB9LFxuICAgKiAgICByZW5kZXI6IGZ1bmN0aW9uKCkgey4uLn1cbiAgICogIH0pO1xuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG5cbiAgdmFyIEFOT05ZTU9VUyA9ICc8PGFub255bW91cz4+JztcblxuICAvLyBJbXBvcnRhbnQhXG4gIC8vIEtlZXAgdGhpcyBsaXN0IGluIHN5bmMgd2l0aCBwcm9kdWN0aW9uIHZlcnNpb24gaW4gYC4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zLmpzYC5cbiAgdmFyIFJlYWN0UHJvcFR5cGVzID0ge1xuICAgIGFycmF5OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYXJyYXknKSxcbiAgICBib29sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignYm9vbGVhbicpLFxuICAgIGZ1bmM6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdmdW5jdGlvbicpLFxuICAgIG51bWJlcjogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ251bWJlcicpLFxuICAgIG9iamVjdDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ29iamVjdCcpLFxuICAgIHN0cmluZzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N0cmluZycpLFxuICAgIHN5bWJvbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ3N5bWJvbCcpLFxuXG4gICAgYW55OiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpLFxuICAgIGFycmF5T2Y6IGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcixcbiAgICBlbGVtZW50OiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSxcbiAgICBlbGVtZW50VHlwZTogY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpLFxuICAgIGluc3RhbmNlT2Y6IGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIsXG4gICAgbm9kZTogY3JlYXRlTm9kZUNoZWNrZXIoKSxcbiAgICBvYmplY3RPZjogY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcixcbiAgICBvbmVPZjogY3JlYXRlRW51bVR5cGVDaGVja2VyLFxuICAgIG9uZU9mVHlwZTogY3JlYXRlVW5pb25UeXBlQ2hlY2tlcixcbiAgICBzaGFwZTogY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcixcbiAgICBleGFjdDogY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcixcbiAgfTtcblxuICAvKipcbiAgICogaW5saW5lZCBPYmplY3QuaXMgcG9seWZpbGwgdG8gYXZvaWQgcmVxdWlyaW5nIGNvbnN1bWVycyBzaGlwIHRoZWlyIG93blxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvaXNcbiAgICovXG4gIC8qZXNsaW50LWRpc2FibGUgbm8tc2VsZi1jb21wYXJlKi9cbiAgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAgIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgICBpZiAoeCA9PT0geSkge1xuICAgICAgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgICAgcmV0dXJuIHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTdGVwIDYuYTogTmFOID09IE5hTlxuICAgICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgICB9XG4gIH1cbiAgLyplc2xpbnQtZW5hYmxlIG5vLXNlbGYtY29tcGFyZSovXG5cbiAgLyoqXG4gICAqIFdlIHVzZSBhbiBFcnJvci1saWtlIG9iamVjdCBmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSBhcyBwZW9wbGUgbWF5IGNhbGxcbiAgICogUHJvcFR5cGVzIGRpcmVjdGx5IGFuZCBpbnNwZWN0IHRoZWlyIG91dHB1dC4gSG93ZXZlciwgd2UgZG9uJ3QgdXNlIHJlYWxcbiAgICogRXJyb3JzIGFueW1vcmUuIFdlIGRvbid0IGluc3BlY3QgdGhlaXIgc3RhY2sgYW55d2F5LCBhbmQgY3JlYXRpbmcgdGhlbVxuICAgKiBpcyBwcm9oaWJpdGl2ZWx5IGV4cGVuc2l2ZSBpZiB0aGV5IGFyZSBjcmVhdGVkIHRvbyBvZnRlbiwgc3VjaCBhcyB3aGF0XG4gICAqIGhhcHBlbnMgaW4gb25lT2ZUeXBlKCkgZm9yIGFueSB0eXBlIGJlZm9yZSB0aGUgb25lIHRoYXQgbWF0Y2hlZC5cbiAgICovXG4gIGZ1bmN0aW9uIFByb3BUeXBlRXJyb3IobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgdGhpcy5zdGFjayA9ICcnO1xuICB9XG4gIC8vIE1ha2UgYGluc3RhbmNlb2YgRXJyb3JgIHN0aWxsIHdvcmsgZm9yIHJldHVybmVkIGVycm9ycy5cbiAgUHJvcFR5cGVFcnJvci5wcm90b3R5cGUgPSBFcnJvci5wcm90b3R5cGU7XG5cbiAgZnVuY3Rpb24gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlID0ge307XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPSAwO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIGNvbXBvbmVudE5hbWUgPSBjb21wb25lbnROYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgIHByb3BGdWxsTmFtZSA9IHByb3BGdWxsTmFtZSB8fCBwcm9wTmFtZTtcblxuICAgICAgaWYgKHNlY3JldCAhPT0gUmVhY3RQcm9wVHlwZXNTZWNyZXQpIHtcbiAgICAgICAgaWYgKHRocm93T25EaXJlY3RBY2Nlc3MpIHtcbiAgICAgICAgICAvLyBOZXcgYmVoYXZpb3Igb25seSBmb3IgdXNlcnMgb2YgYHByb3AtdHlwZXNgIHBhY2thZ2VcbiAgICAgICAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgJ1VzZSBgUHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzKClgIHRvIGNhbGwgdGhlbS4gJyArXG4gICAgICAgICAgICAnUmVhZCBtb3JlIGF0IGh0dHA6Ly9mYi5tZS91c2UtY2hlY2stcHJvcC10eXBlcydcbiAgICAgICAgICApO1xuICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIC8vIE9sZCBiZWhhdmlvciBmb3IgcGVvcGxlIHVzaW5nIFJlYWN0LlByb3BUeXBlc1xuICAgICAgICAgIHZhciBjYWNoZUtleSA9IGNvbXBvbmVudE5hbWUgKyAnOicgKyBwcm9wTmFtZTtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAhbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldICYmXG4gICAgICAgICAgICAvLyBBdm9pZCBzcGFtbWluZyB0aGUgY29uc29sZSBiZWNhdXNlIHRoZXkgYXJlIG9mdGVuIG5vdCBhY3Rpb25hYmxlIGV4Y2VwdCBmb3IgbGliIGF1dGhvcnNcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50IDwgM1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgICAnWW91IGFyZSBtYW51YWxseSBjYWxsaW5nIGEgUmVhY3QuUHJvcFR5cGVzIHZhbGlkYXRpb24gJyArXG4gICAgICAgICAgICAgICdmdW5jdGlvbiBmb3IgdGhlIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgcHJvcCBvbiBgJyArIGNvbXBvbmVudE5hbWUgICsgJ2AuIFRoaXMgaXMgZGVwcmVjYXRlZCAnICtcbiAgICAgICAgICAgICAgJ2FuZCB3aWxsIHRocm93IGluIHRoZSBzdGFuZGFsb25lIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICAgJ1lvdSBtYXkgYmUgc2VlaW5nIHRoaXMgd2FybmluZyBkdWUgdG8gYSB0aGlyZC1wYXJ0eSBQcm9wVHlwZXMgJyArXG4gICAgICAgICAgICAgICdsaWJyYXJ5LiBTZWUgaHR0cHM6Ly9mYi5tZS9yZWFjdC13YXJuaW5nLWRvbnQtY2FsbC1wcm9wdHlwZXMgJyArICdmb3IgZGV0YWlscy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGVbY2FjaGVLZXldID0gdHJ1ZTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50Kys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkICcgKyAoJ2luIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGBudWxsYC4nKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgaW4gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYHVuZGVmaW5lZGAuJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGNoYWluZWRDaGVja1R5cGUgPSBjaGVja1R5cGUuYmluZChudWxsLCBmYWxzZSk7XG4gICAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgICByZXR1cm4gY2hhaW5lZENoZWNrVHlwZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKGV4cGVjdGVkVHlwZSkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gZXhwZWN0ZWRUeXBlKSB7XG4gICAgICAgIC8vIGBwcm9wVmFsdWVgIGJlaW5nIGluc3RhbmNlIG9mLCBzYXksIGRhdGUvcmVnZXhwLCBwYXNzIHRoZSAnb2JqZWN0J1xuICAgICAgICAvLyBjaGVjaywgYnV0IHdlIGNhbiBvZmZlciBhIG1vcmUgcHJlY2lzZSBlcnJvciBtZXNzYWdlIGhlcmUgcmF0aGVyIHRoYW5cbiAgICAgICAgLy8gJ29mIHR5cGUgYG9iamVjdGAnLlxuICAgICAgICB2YXIgcHJlY2lzZVR5cGUgPSBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpO1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByZWNpc2VUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdgJyArIGV4cGVjdGVkVHlwZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQW55VHlwZUNoZWNrZXIoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIGFycmF5T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gYXJyYXkuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wVmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBpLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJ1snICsgaSArICddJywgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgaWYgKCFSZWFjdElzLmlzVmFsaWRFbGVtZW50VHlwZShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgc2luZ2xlIFJlYWN0RWxlbWVudCB0eXBlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcihleHBlY3RlZENsYXNzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIShwcm9wc1twcm9wTmFtZV0gaW5zdGFuY2VvZiBleHBlY3RlZENsYXNzKSkge1xuICAgICAgICB2YXIgZXhwZWN0ZWRDbGFzc05hbWUgPSBleHBlY3RlZENsYXNzLm5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgICB2YXIgYWN0dWFsQ2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKHByb3BzW3Byb3BOYW1lXSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIGFjdHVhbENsYXNzTmFtZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnaW5zdGFuY2Ugb2YgYCcgKyBleHBlY3RlZENsYXNzTmFtZSArICdgLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRW51bVR5cGVDaGVja2VyKGV4cGVjdGVkVmFsdWVzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGV4cGVjdGVkVmFsdWVzKSkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnRzIHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheSwgZ290ICcgKyBhcmd1bWVudHMubGVuZ3RoICsgJyBhcmd1bWVudHMuICcgK1xuICAgICAgICAgICAgJ0EgY29tbW9uIG1pc3Rha2UgaXMgdG8gd3JpdGUgb25lT2YoeCwgeSwgeikgaW5zdGVhZCBvZiBvbmVPZihbeCwgeSwgel0pLidcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXkuJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhwZWN0ZWRWYWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGlzKHByb3BWYWx1ZSwgZXhwZWN0ZWRWYWx1ZXNbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHZhbHVlc1N0cmluZyA9IEpTT04uc3RyaW5naWZ5KGV4cGVjdGVkVmFsdWVzLCBmdW5jdGlvbiByZXBsYWNlcihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdmFsdWUgYCcgKyBTdHJpbmcocHJvcFZhbHVlKSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBvbmUgb2YgJyArIHZhbHVlc1N0cmluZyArICcuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlT2JqZWN0T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBvYmplY3RPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBvYmplY3QuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHByb3BWYWx1ZSkge1xuICAgICAgICBpZiAoaGFzKHByb3BWYWx1ZSwga2V5KSkge1xuICAgICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlVW5pb25UeXBlQ2hlY2tlcihhcnJheU9mVHlwZUNoZWNrZXJzKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGFycmF5T2ZUeXBlQ2hlY2tlcnMpKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZSwgZXhwZWN0ZWQgYW4gaW5zdGFuY2Ugb2YgYXJyYXkuJykgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgIGlmICh0eXBlb2YgY2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLiBFeHBlY3RlZCBhbiBhcnJheSBvZiBjaGVjayBmdW5jdGlvbnMsIGJ1dCAnICtcbiAgICAgICAgICAncmVjZWl2ZWQgJyArIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyhjaGVja2VyKSArICcgYXQgaW5kZXggJyArIGkgKyAnLidcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5T2ZUeXBlQ2hlY2tlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgICBpZiAoY2hlY2tlcihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVOb2RlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghaXNOb2RlKHByb3BzW3Byb3BOYW1lXSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBzdXBwbGllZCB0byAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBSZWFjdE5vZGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gc2hhcGVUeXBlcykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU3RyaWN0U2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgLy8gV2UgbmVlZCB0byBjaGVjayBhbGwga2V5cyBpbiBjYXNlIHNvbWUgYXJlIHJlcXVpcmVkIGJ1dCBtaXNzaW5nIGZyb21cbiAgICAgIC8vIHByb3BzLlxuICAgICAgdmFyIGFsbEtleXMgPSBhc3NpZ24oe30sIHByb3BzW3Byb3BOYW1lXSwgc2hhcGVUeXBlcyk7XG4gICAgICBmb3IgKHZhciBrZXkgaW4gYWxsS2V5cykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IHNoYXBlVHlwZXNba2V5XTtcbiAgICAgICAgaWYgKCFjaGVja2VyKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKFxuICAgICAgICAgICAgJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGtleSBgJyArIGtleSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLicgK1xuICAgICAgICAgICAgJ1xcbkJhZCBvYmplY3Q6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9wc1twcm9wTmFtZV0sIG51bGwsICcgICcpICtcbiAgICAgICAgICAgICdcXG5WYWxpZCBrZXlzOiAnICsgIEpTT04uc3RyaW5naWZ5KE9iamVjdC5rZXlzKHNoYXBlVHlwZXMpLCBudWxsLCAnICAnKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVycm9yID0gY2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBpc05vZGUocHJvcFZhbHVlKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgcHJvcFZhbHVlKSB7XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiAhcHJvcFZhbHVlO1xuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBwcm9wVmFsdWUuZXZlcnkoaXNOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcFZhbHVlID09PSBudWxsIHx8IGlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihwcm9wVmFsdWUpO1xuICAgICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChwcm9wVmFsdWUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuICAgICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBwcm9wVmFsdWUuZW50cmllcykge1xuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICBpZiAoIWlzTm9kZShzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBJdGVyYXRvciB3aWxsIHByb3ZpZGUgZW50cnkgW2ssdl0gdHVwbGVzIHJhdGhlciB0aGFuIHZhbHVlcy5cbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJ5ID0gc3RlcC52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05vZGUoZW50cnlbMV0pKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpIHtcbiAgICAvLyBOYXRpdmUgU3ltYm9sLlxuICAgIGlmIChwcm9wVHlwZSA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIGZhbHN5IHZhbHVlIGNhbid0IGJlIGEgU3ltYm9sXG4gICAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddID09PSAnU3ltYm9sJ1xuICAgIGlmIChwcm9wVmFsdWVbJ0BAdG9TdHJpbmdUYWcnXSA9PT0gJ1N5bWJvbCcpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vIEZhbGxiYWNrIGZvciBub24tc3BlYyBjb21wbGlhbnQgU3ltYm9scyB3aGljaCBhcmUgcG9seWZpbGxlZC5cbiAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9wVmFsdWUgaW5zdGFuY2VvZiBTeW1ib2wpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIEVxdWl2YWxlbnQgb2YgYHR5cGVvZmAgYnV0IHdpdGggc3BlY2lhbCBoYW5kbGluZyBmb3IgYXJyYXkgYW5kIHJlZ2V4cC5cbiAgZnVuY3Rpb24gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKSB7XG4gICAgdmFyIHByb3BUeXBlID0gdHlwZW9mIHByb3BWYWx1ZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG4gICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgLy8gT2xkIHdlYmtpdHMgKGF0IGxlYXN0IHVudGlsIEFuZHJvaWQgNC4wKSByZXR1cm4gJ2Z1bmN0aW9uJyByYXRoZXIgdGhhblxuICAgICAgLy8gJ29iamVjdCcgZm9yIHR5cGVvZiBhIFJlZ0V4cC4gV2UnbGwgbm9ybWFsaXplIHRoaXMgaGVyZSBzbyB0aGF0IC9ibGEvXG4gICAgICAvLyBwYXNzZXMgUHJvcFR5cGVzLm9iamVjdC5cbiAgICAgIHJldHVybiAnb2JqZWN0JztcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKHByb3BUeXBlLCBwcm9wVmFsdWUpKSB7XG4gICAgICByZXR1cm4gJ3N5bWJvbCc7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFRoaXMgaGFuZGxlcyBtb3JlIHR5cGVzIHRoYW4gYGdldFByb3BUeXBlYC4gT25seSB1c2VkIGZvciBlcnJvciBtZXNzYWdlcy5cbiAgLy8gU2VlIGBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcmAuXG4gIGZ1bmN0aW9uIGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSkge1xuICAgIGlmICh0eXBlb2YgcHJvcFZhbHVlID09PSAndW5kZWZpbmVkJyB8fCBwcm9wVmFsdWUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJyArIHByb3BWYWx1ZTtcbiAgICB9XG4gICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICBpZiAocHJvcFR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gJ2RhdGUnO1xuICAgICAgfSBlbHNlIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgICAgcmV0dXJuICdyZWdleHAnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgaXMgcG9zdGZpeGVkIHRvIGEgd2FybmluZyBhYm91dCBhbiBpbnZhbGlkIHR5cGUuXG4gIC8vIEZvciBleGFtcGxlLCBcInVuZGVmaW5lZFwiIG9yIFwib2YgdHlwZSBhcnJheVwiXG4gIGZ1bmN0aW9uIGdldFBvc3RmaXhGb3JUeXBlV2FybmluZyh2YWx1ZSkge1xuICAgIHZhciB0eXBlID0gZ2V0UHJlY2lzZVR5cGUodmFsdWUpO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnYXJyYXknOlxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgcmV0dXJuICdhbiAnICsgdHlwZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICBjYXNlICdyZWdleHAnOlxuICAgICAgICByZXR1cm4gJ2EgJyArIHR5cGU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIGNsYXNzIG5hbWUgb2YgdGhlIG9iamVjdCwgaWYgYW55LlxuICBmdW5jdGlvbiBnZXRDbGFzc05hbWUocHJvcFZhbHVlKSB7XG4gICAgaWYgKCFwcm9wVmFsdWUuY29uc3RydWN0b3IgfHwgIXByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lKSB7XG4gICAgICByZXR1cm4gQU5PTllNT1VTO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWU7XG4gIH1cblxuICBSZWFjdFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcyA9IGNoZWNrUHJvcFR5cGVzO1xuICBSZWFjdFByb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZSA9IGNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlO1xuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgZGV2ZWxvcG1lbnQgYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgdmFyIHRocm93T25EaXJlY3RBY2Nlc3MgPSB0cnVlO1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMnKShSZWFjdElzLmlzRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcyk7XG59IGVsc2Uge1xuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBwcm9kdWN0aW9uIGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMnKSgpO1xufVxuIiwidmFyIF9leGNsdWRlZCA9IFtcInNpdGVrZXlcIiwgXCJvbkNoYW5nZVwiLCBcInRoZW1lXCIsIFwidHlwZVwiLCBcInRhYmluZGV4XCIsIFwib25FeHBpcmVkXCIsIFwib25FcnJvcmVkXCIsIFwic2l6ZVwiLCBcInN0b2tlblwiLCBcImdyZWNhcHRjaGFcIiwgXCJiYWRnZVwiLCBcImhsXCIsIFwiaXNvbGF0ZWRcIl07XG5mdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHsgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307IHZhciB0YXJnZXQgPSB7fTsgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpOyB2YXIga2V5LCBpOyBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykgeyBrZXkgPSBzb3VyY2VLZXlzW2ldOyBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlOyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IHJldHVybiB0YXJnZXQ7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikgeyBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gc2VsZjsgfVxuZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7IHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzOyBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpOyB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkgeyBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHsgby5fX3Byb3RvX18gPSBwOyByZXR1cm4gbzsgfTsgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTsgfVxuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG52YXIgUmVDQVBUQ0hBID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFJlQ0FQVENIQSwgX1JlYWN0JENvbXBvbmVudCk7XG4gIGZ1bmN0aW9uIFJlQ0FQVENIQSgpIHtcbiAgICB2YXIgX3RoaXM7XG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwodGhpcykgfHwgdGhpcztcbiAgICBfdGhpcy5oYW5kbGVFeHBpcmVkID0gX3RoaXMuaGFuZGxlRXhwaXJlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVFcnJvcmVkID0gX3RoaXMuaGFuZGxlRXJyb3JlZC5iaW5kKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKTtcbiAgICBfdGhpcy5oYW5kbGVDaGFuZ2UgPSBfdGhpcy5oYW5kbGVDaGFuZ2UuYmluZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSk7XG4gICAgX3RoaXMuaGFuZGxlUmVjYXB0Y2hhUmVmID0gX3RoaXMuaGFuZGxlUmVjYXB0Y2hhUmVmLmJpbmQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICB2YXIgX3Byb3RvID0gUmVDQVBUQ0hBLnByb3RvdHlwZTtcbiAgX3Byb3RvLmdldENhcHRjaGFGdW5jdGlvbiA9IGZ1bmN0aW9uIGdldENhcHRjaGFGdW5jdGlvbihmbk5hbWUpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5ncmVjYXB0Y2hhKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5ncmVjYXB0Y2hhLmVudGVycHJpc2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZ3JlY2FwdGNoYS5lbnRlcnByaXNlW2ZuTmFtZV07XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5ncmVjYXB0Y2hhW2ZuTmFtZV07XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBfcHJvdG8uZ2V0VmFsdWUgPSBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICB2YXIgZ2V0UmVzcG9uc2UgPSB0aGlzLmdldENhcHRjaGFGdW5jdGlvbihcImdldFJlc3BvbnNlXCIpO1xuICAgIGlmIChnZXRSZXNwb25zZSAmJiB0aGlzLl93aWRnZXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZ2V0UmVzcG9uc2UodGhpcy5fd2lkZ2V0SWQpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcbiAgX3Byb3RvLmdldFdpZGdldElkID0gZnVuY3Rpb24gZ2V0V2lkZ2V0SWQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMuZ3JlY2FwdGNoYSAmJiB0aGlzLl93aWRnZXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fd2lkZ2V0SWQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuICBfcHJvdG8uZXhlY3V0ZSA9IGZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gICAgdmFyIGV4ZWN1dGUgPSB0aGlzLmdldENhcHRjaGFGdW5jdGlvbihcImV4ZWN1dGVcIik7XG4gICAgaWYgKGV4ZWN1dGUgJiYgdGhpcy5fd2lkZ2V0SWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGV4ZWN1dGUodGhpcy5fd2lkZ2V0SWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9leGVjdXRlUmVxdWVzdGVkID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIF9wcm90by5leGVjdXRlQXN5bmMgPSBmdW5jdGlvbiBleGVjdXRlQXN5bmMoKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIF90aGlzMi5leGVjdXRpb25SZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIF90aGlzMi5leGVjdXRpb25SZWplY3QgPSByZWplY3Q7XG4gICAgICBfdGhpczIuZXhlY3V0ZSgpO1xuICAgIH0pO1xuICB9O1xuICBfcHJvdG8ucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB2YXIgcmVzZXR0ZXIgPSB0aGlzLmdldENhcHRjaGFGdW5jdGlvbihcInJlc2V0XCIpO1xuICAgIGlmIChyZXNldHRlciAmJiB0aGlzLl93aWRnZXRJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXNldHRlcih0aGlzLl93aWRnZXRJZCk7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uZm9yY2VSZXNldCA9IGZ1bmN0aW9uIGZvcmNlUmVzZXQoKSB7XG4gICAgdmFyIHJlc2V0dGVyID0gdGhpcy5nZXRDYXB0Y2hhRnVuY3Rpb24oXCJyZXNldFwiKTtcbiAgICBpZiAocmVzZXR0ZXIpIHtcbiAgICAgIHJlc2V0dGVyKCk7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uaGFuZGxlRXhwaXJlZCA9IGZ1bmN0aW9uIGhhbmRsZUV4cGlyZWQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25FeHBpcmVkKSB7XG4gICAgICB0aGlzLnByb3BzLm9uRXhwaXJlZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhhbmRsZUNoYW5nZShudWxsKTtcbiAgICB9XG4gIH07XG4gIF9wcm90by5oYW5kbGVFcnJvcmVkID0gZnVuY3Rpb24gaGFuZGxlRXJyb3JlZCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkVycm9yZWQpIHtcbiAgICAgIHRoaXMucHJvcHMub25FcnJvcmVkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmV4ZWN1dGlvblJlamVjdCkge1xuICAgICAgdGhpcy5leGVjdXRpb25SZWplY3QoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmV4ZWN1dGlvblJlc29sdmU7XG4gICAgICBkZWxldGUgdGhpcy5leGVjdXRpb25SZWplY3Q7XG4gICAgfVxuICB9O1xuICBfcHJvdG8uaGFuZGxlQ2hhbmdlID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKHRva2VuKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25DaGFuZ2UodG9rZW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5leGVjdXRpb25SZXNvbHZlKSB7XG4gICAgICB0aGlzLmV4ZWN1dGlvblJlc29sdmUodG9rZW4pO1xuICAgICAgZGVsZXRlIHRoaXMuZXhlY3V0aW9uUmVqZWN0O1xuICAgICAgZGVsZXRlIHRoaXMuZXhlY3V0aW9uUmVzb2x2ZTtcbiAgICB9XG4gIH07XG4gIF9wcm90by5leHBsaWNpdFJlbmRlciA9IGZ1bmN0aW9uIGV4cGxpY2l0UmVuZGVyKCkge1xuICAgIHZhciByZW5kZXIgPSB0aGlzLmdldENhcHRjaGFGdW5jdGlvbihcInJlbmRlclwiKTtcbiAgICBpZiAocmVuZGVyICYmIHRoaXMuX3dpZGdldElkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIHRoaXMuX3dpZGdldElkID0gcmVuZGVyKHdyYXBwZXIsIHtcbiAgICAgICAgc2l0ZWtleTogdGhpcy5wcm9wcy5zaXRla2V5LFxuICAgICAgICBjYWxsYmFjazogdGhpcy5oYW5kbGVDaGFuZ2UsXG4gICAgICAgIHRoZW1lOiB0aGlzLnByb3BzLnRoZW1lLFxuICAgICAgICB0eXBlOiB0aGlzLnByb3BzLnR5cGUsXG4gICAgICAgIHRhYmluZGV4OiB0aGlzLnByb3BzLnRhYmluZGV4LFxuICAgICAgICBcImV4cGlyZWQtY2FsbGJhY2tcIjogdGhpcy5oYW5kbGVFeHBpcmVkLFxuICAgICAgICBcImVycm9yLWNhbGxiYWNrXCI6IHRoaXMuaGFuZGxlRXJyb3JlZCxcbiAgICAgICAgc2l6ZTogdGhpcy5wcm9wcy5zaXplLFxuICAgICAgICBzdG9rZW46IHRoaXMucHJvcHMuc3Rva2VuLFxuICAgICAgICBobDogdGhpcy5wcm9wcy5obCxcbiAgICAgICAgYmFkZ2U6IHRoaXMucHJvcHMuYmFkZ2UsXG4gICAgICAgIGlzb2xhdGVkOiB0aGlzLnByb3BzLmlzb2xhdGVkXG4gICAgICB9KTtcbiAgICAgIHRoaXMuY2FwdGNoYS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4ZWN1dGVSZXF1ZXN0ZWQgJiYgdGhpcy5wcm9wcy5ncmVjYXB0Y2hhICYmIHRoaXMuX3dpZGdldElkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX2V4ZWN1dGVSZXF1ZXN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuZXhlY3V0ZSgpO1xuICAgIH1cbiAgfTtcbiAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5leHBsaWNpdFJlbmRlcigpO1xuICB9O1xuICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMuZXhwbGljaXRSZW5kZXIoKTtcbiAgfTtcbiAgX3Byb3RvLmhhbmRsZVJlY2FwdGNoYVJlZiA9IGZ1bmN0aW9uIGhhbmRsZVJlY2FwdGNoYVJlZihlbGVtKSB7XG4gICAgdGhpcy5jYXB0Y2hhID0gZWxlbTtcbiAgfTtcbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAvLyBjb25zdW1lIHByb3BlcnRpZXMgb3duZWQgYnkgdGhlIHJlQ0FUUENIQSwgcGFzcyB0aGUgcmVzdCB0byB0aGUgZGl2IHNvIHRoZSB1c2VyIGNhbiBzdHlsZSBpdC5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICBzaXRla2V5ID0gX3RoaXMkcHJvcHMuc2l0ZWtleSxcbiAgICAgIG9uQ2hhbmdlID0gX3RoaXMkcHJvcHMub25DaGFuZ2UsXG4gICAgICB0aGVtZSA9IF90aGlzJHByb3BzLnRoZW1lLFxuICAgICAgdHlwZSA9IF90aGlzJHByb3BzLnR5cGUsXG4gICAgICB0YWJpbmRleCA9IF90aGlzJHByb3BzLnRhYmluZGV4LFxuICAgICAgb25FeHBpcmVkID0gX3RoaXMkcHJvcHMub25FeHBpcmVkLFxuICAgICAgb25FcnJvcmVkID0gX3RoaXMkcHJvcHMub25FcnJvcmVkLFxuICAgICAgc2l6ZSA9IF90aGlzJHByb3BzLnNpemUsXG4gICAgICBzdG9rZW4gPSBfdGhpcyRwcm9wcy5zdG9rZW4sXG4gICAgICBncmVjYXB0Y2hhID0gX3RoaXMkcHJvcHMuZ3JlY2FwdGNoYSxcbiAgICAgIGJhZGdlID0gX3RoaXMkcHJvcHMuYmFkZ2UsXG4gICAgICBobCA9IF90aGlzJHByb3BzLmhsLFxuICAgICAgaXNvbGF0ZWQgPSBfdGhpcyRwcm9wcy5pc29sYXRlZCxcbiAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgX2V4Y2x1ZGVkKTtcbiAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXVudXNlZC12YXJzICovXG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHt9LCBjaGlsZFByb3BzLCB7XG4gICAgICByZWY6IHRoaXMuaGFuZGxlUmVjYXB0Y2hhUmVmXG4gICAgfSkpO1xuICB9O1xuICByZXR1cm4gUmVDQVBUQ0hBO1xufShSZWFjdC5Db21wb25lbnQpO1xuZXhwb3J0IHsgUmVDQVBUQ0hBIGFzIGRlZmF1bHQgfTtcblJlQ0FQVENIQS5kaXNwbGF5TmFtZSA9IFwiUmVDQVBUQ0hBXCI7XG5SZUNBUFRDSEEucHJvcFR5cGVzID0ge1xuICBzaXRla2V5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgZ3JlY2FwdGNoYTogUHJvcFR5cGVzLm9iamVjdCxcbiAgdGhlbWU6IFByb3BUeXBlcy5vbmVPZihbXCJkYXJrXCIsIFwibGlnaHRcIl0pLFxuICB0eXBlOiBQcm9wVHlwZXMub25lT2YoW1wiaW1hZ2VcIiwgXCJhdWRpb1wiXSksXG4gIHRhYmluZGV4OiBQcm9wVHlwZXMubnVtYmVyLFxuICBvbkV4cGlyZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBvbkVycm9yZWQ6IFByb3BUeXBlcy5mdW5jLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1wiY29tcGFjdFwiLCBcIm5vcm1hbFwiLCBcImludmlzaWJsZVwiXSksXG4gIHN0b2tlbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJhZGdlOiBQcm9wVHlwZXMub25lT2YoW1wiYm90dG9tcmlnaHRcIiwgXCJib3R0b21sZWZ0XCIsIFwiaW5saW5lXCJdKSxcbiAgaXNvbGF0ZWQ6IFByb3BUeXBlcy5ib29sXG59O1xuUmVDQVBUQ0hBLmRlZmF1bHRQcm9wcyA9IHtcbiAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKCkge30sXG4gIHRoZW1lOiBcImxpZ2h0XCIsXG4gIHR5cGU6IFwiaW1hZ2VcIixcbiAgdGFiaW5kZXg6IDAsXG4gIHNpemU6IFwibm9ybWFsXCIsXG4gIGJhZGdlOiBcImJvdHRvbXJpZ2h0XCJcbn07IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuTWVtb10gPSBNRU1PX1NUQVRJQ1M7XG5cbmZ1bmN0aW9uIGdldFN0YXRpY3MoY29tcG9uZW50KSB7XG4gIC8vIFJlYWN0IHYxNi4xMSBhbmQgYmVsb3dcbiAgaWYgKHJlYWN0SXMuaXNNZW1vKGNvbXBvbmVudCkpIHtcbiAgICByZXR1cm4gTUVNT19TVEFUSUNTO1xuICB9IC8vIFJlYWN0IHYxNi4xMiBhbmQgYWJvdmVcblxuXG4gIHJldHVybiBUWVBFX1NUQVRJQ1NbY29tcG9uZW50WyckJHR5cGVvZiddXSB8fCBSRUFDVF9TVEFUSUNTO1xufVxuXG52YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgZ2V0T3duUHJvcGVydHlOYW1lcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzO1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbnZhciBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcbnZhciBvYmplY3RQcm90b3R5cGUgPSBPYmplY3QucHJvdG90eXBlO1xuZnVuY3Rpb24gaG9pc3ROb25SZWFjdFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50LCBzb3VyY2VDb21wb25lbnQsIGJsYWNrbGlzdCkge1xuICBpZiAodHlwZW9mIHNvdXJjZUNvbXBvbmVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAvLyBkb24ndCBob2lzdCBvdmVyIHN0cmluZyAoaHRtbCkgY29tcG9uZW50c1xuICAgIGlmIChvYmplY3RQcm90b3R5cGUpIHtcbiAgICAgIHZhciBpbmhlcml0ZWRDb21wb25lbnQgPSBnZXRQcm90b3R5cGVPZihzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgICBpZiAoaW5oZXJpdGVkQ29tcG9uZW50ICYmIGluaGVyaXRlZENvbXBvbmVudCAhPT0gb2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICAgIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgaW5oZXJpdGVkQ29tcG9uZW50LCBibGFja2xpc3QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBrZXlzID0gZ2V0T3duUHJvcGVydHlOYW1lcyhzb3VyY2VDb21wb25lbnQpO1xuXG4gICAgaWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAga2V5cyA9IGtleXMuY29uY2F0KGdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2VDb21wb25lbnQpKTtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U3RhdGljcyA9IGdldFN0YXRpY3ModGFyZ2V0Q29tcG9uZW50KTtcbiAgICB2YXIgc291cmNlU3RhdGljcyA9IGdldFN0YXRpY3Moc291cmNlQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmICghS05PV05fU1RBVElDU1trZXldICYmICEoYmxhY2tsaXN0ICYmIGJsYWNrbGlzdFtrZXldKSAmJiAhKHNvdXJjZVN0YXRpY3MgJiYgc291cmNlU3RhdGljc1trZXldKSAmJiAhKHRhcmdldFN0YXRpY3MgJiYgdGFyZ2V0U3RhdGljc1trZXldKSkge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2VDb21wb25lbnQsIGtleSk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBBdm9pZCBmYWlsdXJlcyBmcm9tIHJlYWQtb25seSBwcm9wZXJ0aWVzXG4gICAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0Q29tcG9uZW50LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXRDb21wb25lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaG9pc3ROb25SZWFjdFN0YXRpY3M7XG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHsgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9OyByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7IGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9OyB2YXIgdGFyZ2V0ID0ge307IHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgdmFyIGtleSwgaTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpOyBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzczsgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZUVsZW1lbnQsIGZvcndhcmRSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBob2lzdFN0YXRpY3MgZnJvbSBcImhvaXN0LW5vbi1yZWFjdC1zdGF0aWNzXCI7XG52YXIgU0NSSVBUX01BUCA9IHt9OyAvLyBBIGNvdW50ZXIgdXNlZCB0byBnZW5lcmF0ZSBhIHVuaXF1ZSBpZCBmb3IgZWFjaCBjb21wb25lbnQgdGhhdCB1c2VzIHRoZSBmdW5jdGlvblxuXG52YXIgaWRDb3VudCA9IDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtYWtlQXN5bmNTY3JpcHQoZ2V0U2NyaXB0VVJMLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gd3JhcFdpdGhBc3luY1NjcmlwdChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgdmFyIHdyYXBwZWRDb21wb25lbnROYW1lID0gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgXCJDb21wb25lbnRcIjtcblxuICAgIHZhciBBc3luY1NjcmlwdExvYWRlciA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShBc3luY1NjcmlwdExvYWRlciwgX0NvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIEFzeW5jU2NyaXB0TG9hZGVyKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcztcblxuICAgICAgICBfdGhpcyA9IF9Db21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCkgfHwgdGhpcztcbiAgICAgICAgX3RoaXMuc3RhdGUgPSB7fTtcbiAgICAgICAgX3RoaXMuX19zY3JpcHRVUkwgPSBcIlwiO1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBfcHJvdG8gPSBBc3luY1NjcmlwdExvYWRlci5wcm90b3R5cGU7XG5cbiAgICAgIF9wcm90by5hc3luY1NjcmlwdExvYWRlckdldFNjcmlwdExvYWRlcklEID0gZnVuY3Rpb24gYXN5bmNTY3JpcHRMb2FkZXJHZXRTY3JpcHRMb2FkZXJJRCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9fc2NyaXB0TG9hZGVySUQpIHtcbiAgICAgICAgICB0aGlzLl9fc2NyaXB0TG9hZGVySUQgPSBcImFzeW5jLXNjcmlwdC1sb2FkZXItXCIgKyBpZENvdW50Kys7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fX3NjcmlwdExvYWRlcklEO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnNldHVwU2NyaXB0VVJMID0gZnVuY3Rpb24gc2V0dXBTY3JpcHRVUkwoKSB7XG4gICAgICAgIHRoaXMuX19zY3JpcHRVUkwgPSB0eXBlb2YgZ2V0U2NyaXB0VVJMID09PSBcImZ1bmN0aW9uXCIgPyBnZXRTY3JpcHRVUkwoKSA6IGdldFNjcmlwdFVSTDtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19zY3JpcHRVUkw7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uYXN5bmNTY3JpcHRMb2FkZXJIYW5kbGVMb2FkID0gZnVuY3Rpb24gYXN5bmNTY3JpcHRMb2FkZXJIYW5kbGVMb2FkKHN0YXRlKSB7XG4gICAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICAgIC8vIHVzZSByZWFjdHMgc2V0U3RhdGUgY2FsbGJhY2sgdG8gZmlyZSBwcm9wcy5hc3luY1NjcmlwdE9uTG9hZCB3aXRoIG5ldyBzdGF0ZS9lbnRyeVxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5wcm9wcy5hc3luY1NjcmlwdE9uTG9hZCAmJiBfdGhpczIucHJvcHMuYXN5bmNTY3JpcHRPbkxvYWQoX3RoaXMyLnN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uYXN5bmNTY3JpcHRMb2FkZXJUcmlnZ2VyT25TY3JpcHRMb2FkZWQgPSBmdW5jdGlvbiBhc3luY1NjcmlwdExvYWRlclRyaWdnZXJPblNjcmlwdExvYWRlZCgpIHtcbiAgICAgICAgdmFyIG1hcEVudHJ5ID0gU0NSSVBUX01BUFt0aGlzLl9fc2NyaXB0VVJMXTtcblxuICAgICAgICBpZiAoIW1hcEVudHJ5IHx8ICFtYXBFbnRyeS5sb2FkZWQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTY3JpcHQgaXMgbm90IGxvYWRlZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBvYnNLZXkgaW4gbWFwRW50cnkub2JzZXJ2ZXJzKSB7XG4gICAgICAgICAgbWFwRW50cnkub2JzZXJ2ZXJzW29ic0tleV0obWFwRW50cnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIHdpbmRvd1tvcHRpb25zLmNhbGxiYWNrTmFtZV07XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIF90aGlzMyA9IHRoaXM7XG5cbiAgICAgICAgdmFyIHNjcmlwdFVSTCA9IHRoaXMuc2V0dXBTY3JpcHRVUkwoKTtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYXN5bmNTY3JpcHRMb2FkZXJHZXRTY3JpcHRMb2FkZXJJRCgpO1xuICAgICAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgICAgICAgZ2xvYmFsTmFtZSA9IF9vcHRpb25zLmdsb2JhbE5hbWUsXG4gICAgICAgICAgICBjYWxsYmFja05hbWUgPSBfb3B0aW9ucy5jYWxsYmFja05hbWUsXG4gICAgICAgICAgICBzY3JpcHRJZCA9IF9vcHRpb25zLnNjcmlwdElkOyAvLyBjaGVjayBpZiBnbG9iYWwgb2JqZWN0IGFscmVhZHkgYXR0YWNoZWQgdG8gd2luZG93XG5cbiAgICAgICAgaWYgKGdsb2JhbE5hbWUgJiYgdHlwZW9mIHdpbmRvd1tnbG9iYWxOYW1lXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIFNDUklQVF9NQVBbc2NyaXB0VVJMXSA9IHtcbiAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgIG9ic2VydmVyczoge31cbiAgICAgICAgICB9O1xuICAgICAgICB9IC8vIGNoZWNrIGlmIHNjcmlwdCBsb2FkaW5nIGFscmVhZHlcblxuXG4gICAgICAgIGlmIChTQ1JJUFRfTUFQW3NjcmlwdFVSTF0pIHtcbiAgICAgICAgICB2YXIgZW50cnkgPSBTQ1JJUFRfTUFQW3NjcmlwdFVSTF07IC8vIGlmIGxvYWRlZCBvciBlcnJvcmVkIHRoZW4gXCJmaW5pc2hcIlxuXG4gICAgICAgICAgaWYgKGVudHJ5ICYmIChlbnRyeS5sb2FkZWQgfHwgZW50cnkuZXJyb3JlZCkpIHtcbiAgICAgICAgICAgIHRoaXMuYXN5bmNTY3JpcHRMb2FkZXJIYW5kbGVMb2FkKGVudHJ5KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9IC8vIGlmIHN0aWxsIGxvYWRpbmcgdGhlbiBjYWxsYmFjayB0byBvYnNlcnZlciBxdWV1ZVxuXG5cbiAgICAgICAgICBlbnRyeS5vYnNlcnZlcnNba2V5XSA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5hc3luY1NjcmlwdExvYWRlckhhbmRsZUxvYWQoZW50cnkpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLypcbiAgICAgICAgICogaGFzbid0IHN0YXJ0ZWQgbG9hZGluZ1xuICAgICAgICAgKiBzdGFydCB0aGUgXCJtYWdpY1wiXG4gICAgICAgICAqIHNldHVwIHNjcmlwdCB0byBsb2FkIGFuZCBvYnNlcnZlcnNcbiAgICAgICAgICovXG5cblxuICAgICAgICB2YXIgb2JzZXJ2ZXJzID0ge307XG5cbiAgICAgICAgb2JzZXJ2ZXJzW2tleV0gPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMzLmFzeW5jU2NyaXB0TG9hZGVySGFuZGxlTG9hZChlbnRyeSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgU0NSSVBUX01BUFtzY3JpcHRVUkxdID0ge1xuICAgICAgICAgIGxvYWRlZDogZmFsc2UsXG4gICAgICAgICAgb2JzZXJ2ZXJzOiBvYnNlcnZlcnNcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBzY3JpcHRVUkw7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG5cbiAgICAgICAgZm9yICh2YXIgYXR0cmlidXRlIGluIG9wdGlvbnMuYXR0cmlidXRlcykge1xuICAgICAgICAgIHNjcmlwdC5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCBvcHRpb25zLmF0dHJpYnV0ZXNbYXR0cmlidXRlXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2NyaXB0SWQpIHtcbiAgICAgICAgICBzY3JpcHQuaWQgPSBzY3JpcHRJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYWxsT2JzZXJ2ZXJGdW5jQW5kUmVtb3ZlT2JzZXJ2ZXIgPSBmdW5jdGlvbiBjYWxsT2JzZXJ2ZXJGdW5jQW5kUmVtb3ZlT2JzZXJ2ZXIoZnVuYykge1xuICAgICAgICAgIGlmIChTQ1JJUFRfTUFQW3NjcmlwdFVSTF0pIHtcbiAgICAgICAgICAgIHZhciBtYXBFbnRyeSA9IFNDUklQVF9NQVBbc2NyaXB0VVJMXTtcbiAgICAgICAgICAgIHZhciBvYnNlcnZlcnNNYXAgPSBtYXBFbnRyeS5vYnNlcnZlcnM7XG5cbiAgICAgICAgICAgIGZvciAodmFyIG9ic0tleSBpbiBvYnNlcnZlcnNNYXApIHtcbiAgICAgICAgICAgICAgaWYgKGZ1bmMob2JzZXJ2ZXJzTWFwW29ic0tleV0pKSB7XG4gICAgICAgICAgICAgICAgZGVsZXRlIG9ic2VydmVyc01hcFtvYnNLZXldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChjYWxsYmFja05hbWUgJiYgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzMy5hc3luY1NjcmlwdExvYWRlclRyaWdnZXJPblNjcmlwdExvYWRlZCgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBtYXBFbnRyeSA9IFNDUklQVF9NQVBbc2NyaXB0VVJMXTtcblxuICAgICAgICAgIGlmIChtYXBFbnRyeSkge1xuICAgICAgICAgICAgbWFwRW50cnkubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbGxPYnNlcnZlckZ1bmNBbmRSZW1vdmVPYnNlcnZlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9ic2VydmVyKG1hcEVudHJ5KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG1hcEVudHJ5ID0gU0NSSVBUX01BUFtzY3JpcHRVUkxdO1xuXG4gICAgICAgICAgaWYgKG1hcEVudHJ5KSB7XG4gICAgICAgICAgICBtYXBFbnRyeS5lcnJvcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbGxPYnNlcnZlckZ1bmNBbmRSZW1vdmVPYnNlcnZlcihmdW5jdGlvbiAob2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgb2JzZXJ2ZXIobWFwRW50cnkpO1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRhZyBzY3JpcHRcbiAgICAgICAgdmFyIHNjcmlwdFVSTCA9IHRoaXMuX19zY3JpcHRVUkw7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZlT25Vbm1vdW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgdmFyIGFsbFNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWxsU2NyaXB0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKGFsbFNjcmlwdHNbaV0uc3JjLmluZGV4T2Yoc2NyaXB0VVJMKSA+IC0xKSB7XG4gICAgICAgICAgICAgIGlmIChhbGxTY3JpcHRzW2ldLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBhbGxTY3JpcHRzW2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYWxsU2NyaXB0c1tpXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gLy8gQ2xlYW4gdGhlIG9ic2VydmVyIGVudHJ5XG5cblxuICAgICAgICB2YXIgbWFwRW50cnkgPSBTQ1JJUFRfTUFQW3NjcmlwdFVSTF07XG5cbiAgICAgICAgaWYgKG1hcEVudHJ5KSB7XG4gICAgICAgICAgZGVsZXRlIG1hcEVudHJ5Lm9ic2VydmVyc1t0aGlzLmFzeW5jU2NyaXB0TG9hZGVyR2V0U2NyaXB0TG9hZGVySUQoKV07XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5yZW1vdmVPblVubW91bnQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBTQ1JJUFRfTUFQW3NjcmlwdFVSTF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgZ2xvYmFsTmFtZSA9IG9wdGlvbnMuZ2xvYmFsTmFtZTsgLy8gcmVtb3ZlIGFzeW5jU2NyaXB0T25Mb2FkIGZyb20gY2hpbGRQcm9wc1xuXG4gICAgICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICBhc3luY1NjcmlwdE9uTG9hZCA9IF90aGlzJHByb3BzLmFzeW5jU2NyaXB0T25Mb2FkLFxuICAgICAgICAgICAgZm9yd2FyZGVkUmVmID0gX3RoaXMkcHJvcHMuZm9yd2FyZGVkUmVmLFxuICAgICAgICAgICAgY2hpbGRQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF90aGlzJHByb3BzLCBbXCJhc3luY1NjcmlwdE9uTG9hZFwiLCBcImZvcndhcmRlZFJlZlwiXSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblxuXG4gICAgICAgIGlmIChnbG9iYWxOYW1lICYmIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBjaGlsZFByb3BzW2dsb2JhbE5hbWVdID0gdHlwZW9mIHdpbmRvd1tnbG9iYWxOYW1lXSAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvd1tnbG9iYWxOYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkUHJvcHMucmVmID0gZm9yd2FyZGVkUmVmO1xuICAgICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBjaGlsZFByb3BzKTtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBBc3luY1NjcmlwdExvYWRlcjtcbiAgICB9KENvbXBvbmVudCk7IC8vIE5vdGUgdGhlIHNlY29uZCBwYXJhbSBcInJlZlwiIHByb3ZpZGVkIGJ5IFJlYWN0LmZvcndhcmRSZWYuXG4gICAgLy8gV2UgY2FuIHBhc3MgaXQgYWxvbmcgdG8gQXN5bmNTY3JpcHRMb2FkZXIgYXMgYSByZWd1bGFyIHByb3AsIGUuZy4gXCJmb3J3YXJkZWRSZWZcIlxuICAgIC8vIEFuZCBpdCBjYW4gdGhlbiBiZSBhdHRhY2hlZCB0byB0aGUgQ29tcG9uZW50LlxuXG5cbiAgICB2YXIgRm9yd2FyZGVkQ29tcG9uZW50ID0gZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoQXN5bmNTY3JpcHRMb2FkZXIsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICBmb3J3YXJkZWRSZWY6IHJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIEZvcndhcmRlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IFwiQXN5bmNTY3JpcHRMb2FkZXIoXCIgKyB3cmFwcGVkQ29tcG9uZW50TmFtZSArIFwiKVwiO1xuICAgIEZvcndhcmRlZENvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gICAgICBhc3luY1NjcmlwdE9uTG9hZDogUHJvcFR5cGVzLmZ1bmNcbiAgICB9O1xuICAgIHJldHVybiBob2lzdFN0YXRpY3MoRm9yd2FyZGVkQ29tcG9uZW50LCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgfTtcbn0iLCJpbXBvcnQgUmVDQVBUQ0hBIGZyb20gXCIuL3JlY2FwdGNoYVwiO1xuaW1wb3J0IG1ha2VBc3luY1NjcmlwdExvYWRlciBmcm9tIFwicmVhY3QtYXN5bmMtc2NyaXB0XCI7XG52YXIgY2FsbGJhY2tOYW1lID0gXCJvbmxvYWRjYWxsYmFja1wiO1xudmFyIGdsb2JhbE5hbWUgPSBcImdyZWNhcHRjaGFcIjtcbmZ1bmN0aW9uIGdldE9wdGlvbnMoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5yZWNhcHRjaGFPcHRpb25zIHx8IHt9O1xufVxuZnVuY3Rpb24gZ2V0VVJMKCkge1xuICB2YXIgZHluYW1pY09wdGlvbnMgPSBnZXRPcHRpb25zKCk7XG4gIHZhciBob3N0bmFtZSA9IGR5bmFtaWNPcHRpb25zLnVzZVJlY2FwdGNoYU5ldCA/IFwicmVjYXB0Y2hhLm5ldFwiIDogXCJ3d3cuZ29vZ2xlLmNvbVwiO1xuICBpZiAoZHluYW1pY09wdGlvbnMuZW50ZXJwcmlzZSkge1xuICAgIHJldHVybiBcImh0dHBzOi8vXCIgKyBob3N0bmFtZSArIFwiL3JlY2FwdGNoYS9lbnRlcnByaXNlLmpzP29ubG9hZD1cIiArIGNhbGxiYWNrTmFtZSArIFwiJnJlbmRlcj1leHBsaWNpdFwiO1xuICB9XG4gIHJldHVybiBcImh0dHBzOi8vXCIgKyBob3N0bmFtZSArIFwiL3JlY2FwdGNoYS9hcGkuanM/b25sb2FkPVwiICsgY2FsbGJhY2tOYW1lICsgXCImcmVuZGVyPWV4cGxpY2l0XCI7XG59XG5leHBvcnQgZGVmYXVsdCBtYWtlQXN5bmNTY3JpcHRMb2FkZXIoZ2V0VVJMLCB7XG4gIGNhbGxiYWNrTmFtZTogY2FsbGJhY2tOYW1lLFxuICBnbG9iYWxOYW1lOiBnbG9iYWxOYW1lLFxuICBhdHRyaWJ1dGVzOiBnZXRPcHRpb25zKCkubm9uY2UgPyB7XG4gICAgbm9uY2U6IGdldE9wdGlvbnMoKS5ub25jZVxuICB9IDoge31cbn0pKFJlQ0FQVENIQSk7IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50LCBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZUNBUFRDSEEgZnJvbSBcInJlYWN0LWdvb2dsZS1yZWNhcHRjaGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVDYXB0Y2hhIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHRva2VuOiBcIlwiIH07XG4gICAgICAgIHRoaXMucmVjYXB0Y2hhUmVmID0gY3JlYXRlUmVmKCk7XG4gICAgICAgIHRoaXMubGFzdFRva2VuID0gXCJcIjtcbiAgICAgICAgd2luZG93LnJlY2FwdGNoYVJlZiA9IHtcbiAgICAgICAgICAgIGV4ZWN1dGU6IHRoaXMuZXhlY3V0ZS5iaW5kKHRoaXMpXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge31cblxuICAgIGhhbmRsZU9uRXZlbnQoY2FsbGJhY2tGdW4pIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrRnVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFja0Z1bjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZUV2ZW50KCkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IHRoaXMucmVjYXB0Y2hhUmVmLmN1cnJlbnQuZ2V0VmFsdWUoKTtcbiAgICAgICAgdGhpcy5sYXN0VG9rZW4gPSB0b2tlbjtcbiAgICAgICAgdGhpcy5wcm9wcy50b2tlbi5zZXRWYWx1ZSh0b2tlbik7XG4gICAgICAgIHRoaXMucHJvcHMub25DaGFuZ2VBY3Rpb24uZXhlY3V0ZSgpO1xuICAgIH1cblxuICAgIG9uRXJyb3JFdmVudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkVycm9yQWN0aW9uLmV4ZWN1dGUoKTtcbiAgICB9XG5cbiAgICBvbkV4cGlyZWRFdmVudCgpIHtcbiAgICAgICAgdGhpcy5wcm9wcy5vbkV4cGlyZWRBY3Rpb24uZXhlY3V0ZSgpO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoKSB7XG4gICAgICAgIGNvbnN0IHZlcmlmaWVkID0gdGhpcy5yZWNhcHRjaGFSZWYuY3VycmVudC5leGVjdXRlQXN5bmMoKTtcbiAgICAgICAgY29uc29sZS5pbmZvKFwiaW5zaWRlIGV4ZWN1dGUgZnVuY3Rpb246IFwiICsgdmVyaWZpZWQpO1xuICAgICAgICByZXR1cm4gdmVyaWZpZWQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy50b2tlbi5zdGF0dXMgPT09IFwiYXZhaWxhYmxlXCIgJiYgdGhpcy5wcm9wcy50b2tlbi52YWx1ZSAhPT0gdGhpcy5sYXN0VG9rZW4pIHtcbiAgICAgICAgICAgIC8vdGhlIHRva2VuIHdhcyBjaGFuZ2VkIG91dHNpZGUgb2YgdGhlIHdpZGdldCwgYXNzdW1lIHRoZSB0b2tlbiB3YXMgaW52YWxpZFxuICAgICAgICAgICAgaWYgKHRoaXMucmVjYXB0Y2hhUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlY2FwdGNoYVJlZi5jdXJyZW50LnJlc2V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuc2l0ZWtleS5zdGF0dXMgIT09IFwiYXZhaWxhYmxlXCIgPyBudWxsIDogKFxuICAgICAgICAgICAgPFJlQ0FQVENIQVxuICAgICAgICAgICAgICAgIHJlZj17dGhpcy5yZWNhcHRjaGFSZWZ9XG4gICAgICAgICAgICAgICAgc2l0ZWtleT17dGhpcy5wcm9wcy5zaXRla2V5LnZhbHVlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlRXZlbnQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICBvbkVycm9yZWQ9e3RoaXMub25FcnJvckV2ZW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgb25FeHBpcmVkPXt0aGlzLm9uRXhwaXJlZEV2ZW50LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgdGhlbWU9e3RoaXMucHJvcHMudGhlbWV9XG4gICAgICAgICAgICAgICAgc2l6ZT17dGhpcy5wcm9wcy5zaXplfVxuICAgICAgICAgICAgICAgIGJhZGdlPXt0aGlzLnByb3BzLmJhZGdlfVxuICAgICAgICAgICAgICAgIHR5cGU9e3RoaXMucHJvcHMudHlwZX1cbiAgICAgICAgICAgICAgICB0YWJpbmRleD17dGhpcy5wcm9wcy50YWJJbmRleH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImhhc1N5bWJvbCIsIlN5bWJvbCIsImZvciIsIlJFQUNUX0VMRU1FTlRfVFlQRSIsIlJFQUNUX1BPUlRBTF9UWVBFIiwiUkVBQ1RfRlJBR01FTlRfVFlQRSIsIlJFQUNUX1NUUklDVF9NT0RFX1RZUEUiLCJSRUFDVF9QUk9GSUxFUl9UWVBFIiwiUkVBQ1RfUFJPVklERVJfVFlQRSIsIlJFQUNUX0NPTlRFWFRfVFlQRSIsIlJFQUNUX0FTWU5DX01PREVfVFlQRSIsIlJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIiwiUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSIsIlJFQUNUX1NVU1BFTlNFX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUiLCJSRUFDVF9NRU1PX1RZUEUiLCJSRUFDVF9MQVpZX1RZUEUiLCJSRUFDVF9CTE9DS19UWVBFIiwiUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSIsIlJFQUNUX1JFU1BPTkRFUl9UWVBFIiwiUkVBQ1RfU0NPUEVfVFlQRSIsImlzVmFsaWRFbGVtZW50VHlwZSIsInR5cGUiLCIkJHR5cGVvZiIsInR5cGVPZiIsIm9iamVjdCIsIiQkdHlwZW9mVHlwZSIsInVuZGVmaW5lZCIsIkFzeW5jTW9kZSIsIkNvbmN1cnJlbnRNb2RlIiwiQ29udGV4dENvbnN1bWVyIiwiQ29udGV4dFByb3ZpZGVyIiwiRWxlbWVudCIsIkZvcndhcmRSZWYiLCJGcmFnbWVudCIsIkxhenkiLCJNZW1vIiwiUG9ydGFsIiwiUHJvZmlsZXIiLCJTdHJpY3RNb2RlIiwiU3VzcGVuc2UiLCJoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSIsImlzQXN5bmNNb2RlIiwiY29uc29sZSIsImlzQ29uY3VycmVudE1vZGUiLCJpc0NvbnRleHRDb25zdW1lciIsImlzQ29udGV4dFByb3ZpZGVyIiwiaXNFbGVtZW50IiwiaXNGb3J3YXJkUmVmIiwiaXNGcmFnbWVudCIsImlzTGF6eSIsImlzTWVtbyIsImlzUG9ydGFsIiwiaXNQcm9maWxlciIsImlzU3RyaWN0TW9kZSIsImlzU3VzcGVuc2UiLCJleHBvcnRzIiwibW9kdWxlIiwicmVxdWlyZSIsImdldE93blByb3BlcnR5U3ltYm9scyIsIk9iamVjdCIsImhhc093blByb3BlcnR5IiwicHJvdG90eXBlIiwicHJvcElzRW51bWVyYWJsZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwidG9PYmplY3QiLCJ2YWwiLCJUeXBlRXJyb3IiLCJzaG91bGRVc2VOYXRpdmUiLCJhc3NpZ24iLCJ0ZXN0MSIsIlN0cmluZyIsImdldE93blByb3BlcnR5TmFtZXMiLCJ0ZXN0MiIsImkiLCJmcm9tQ2hhckNvZGUiLCJvcmRlcjIiLCJtYXAiLCJuIiwiam9pbiIsInRlc3QzIiwic3BsaXQiLCJmb3JFYWNoIiwibGV0dGVyIiwia2V5cyIsImVyciIsInRhcmdldCIsInNvdXJjZSIsImZyb20iLCJ0byIsInN5bWJvbHMiLCJzIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwia2V5IiwiY2FsbCIsIlJlYWN0UHJvcFR5cGVzU2VjcmV0IiwicHJpbnRXYXJuaW5nIiwibG9nZ2VkVHlwZUZhaWx1cmVzIiwiaGFzIiwiRnVuY3Rpb24iLCJiaW5kIiwidGV4dCIsIm1lc3NhZ2UiLCJlcnJvciIsIkVycm9yIiwieCIsImNoZWNrUHJvcFR5cGVzIiwidHlwZVNwZWNzIiwidmFsdWVzIiwibG9jYXRpb24iLCJjb21wb25lbnROYW1lIiwiZ2V0U3RhY2siLCJ0eXBlU3BlY05hbWUiLCJuYW1lIiwiZXgiLCJzdGFjayIsInJlc2V0V2FybmluZ0NhY2hlIiwiUmVhY3RJcyIsImVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwiLCJpc1ZhbGlkRWxlbWVudCIsInRocm93T25EaXJlY3RBY2Nlc3MiLCJJVEVSQVRPUl9TWU1CT0wiLCJpdGVyYXRvciIsIkZBVVhfSVRFUkFUT1JfU1lNQk9MIiwiZ2V0SXRlcmF0b3JGbiIsIm1heWJlSXRlcmFibGUiLCJpdGVyYXRvckZuIiwiQU5PTllNT1VTIiwiUmVhY3RQcm9wVHlwZXMiLCJhcnJheSIsImNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyIiwiYm9vbCIsImZ1bmMiLCJudW1iZXIiLCJzdHJpbmciLCJzeW1ib2wiLCJhbnkiLCJjcmVhdGVBbnlUeXBlQ2hlY2tlciIsImFycmF5T2YiLCJjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyIiwiZWxlbWVudFR5cGUiLCJjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyIiwiaW5zdGFuY2VPZiIsImNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIiLCJub2RlIiwiY3JlYXRlTm9kZUNoZWNrZXIiLCJvYmplY3RPZiIsImNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIiLCJvbmVPZiIsImNyZWF0ZUVudW1UeXBlQ2hlY2tlciIsIm9uZU9mVHlwZSIsImNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIiLCJzaGFwZSIsImNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIiLCJleGFjdCIsImNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIiLCJpcyIsInkiLCJQcm9wVHlwZUVycm9yIiwiY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIiLCJ2YWxpZGF0ZSIsIm1hbnVhbFByb3BUeXBlQ2FsbENhY2hlIiwibWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQiLCJjaGVja1R5cGUiLCJpc1JlcXVpcmVkIiwicHJvcHMiLCJwcm9wTmFtZSIsInByb3BGdWxsTmFtZSIsInNlY3JldCIsImNhY2hlS2V5IiwiY2hhaW5lZENoZWNrVHlwZSIsImV4cGVjdGVkVHlwZSIsInByb3BWYWx1ZSIsInByb3BUeXBlIiwiZ2V0UHJvcFR5cGUiLCJwcmVjaXNlVHlwZSIsImdldFByZWNpc2VUeXBlIiwidHlwZUNoZWNrZXIiLCJBcnJheSIsImlzQXJyYXkiLCJleHBlY3RlZENsYXNzIiwiZXhwZWN0ZWRDbGFzc05hbWUiLCJhY3R1YWxDbGFzc05hbWUiLCJnZXRDbGFzc05hbWUiLCJleHBlY3RlZFZhbHVlcyIsInZhbHVlc1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXBsYWNlciIsInZhbHVlIiwiYXJyYXlPZlR5cGVDaGVja2VycyIsInByb2Nlc3MiLCJjaGVja2VyIiwiZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nIiwiaXNOb2RlIiwic2hhcGVUeXBlcyIsImFsbEtleXMiLCJldmVyeSIsInN0ZXAiLCJlbnRyaWVzIiwibmV4dCIsImRvbmUiLCJlbnRyeSIsImlzU3ltYm9sIiwiUmVnRXhwIiwiRGF0ZSIsImNvbnN0cnVjdG9yIiwiUHJvcFR5cGVzIiwiX2V4Y2x1ZGVkIiwiX2V4dGVuZHMiLCJhcHBseSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwiZXhjbHVkZWQiLCJzb3VyY2VLZXlzIiwiaW5kZXhPZiIsIl9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHNMb29zZSIsInN1YkNsYXNzIiwic3VwZXJDbGFzcyIsImNyZWF0ZSIsIl9zZXRQcm90b3R5cGVPZiIsIm8iLCJwIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJSZUNBUFRDSEEiLCJfUmVhY3QkQ29tcG9uZW50IiwiX3RoaXMiLCJoYW5kbGVFeHBpcmVkIiwiaGFuZGxlRXJyb3JlZCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZVJlY2FwdGNoYVJlZiIsIl9wcm90byIsImdldENhcHRjaGFGdW5jdGlvbiIsImZuTmFtZSIsImdyZWNhcHRjaGEiLCJlbnRlcnByaXNlIiwiZ2V0VmFsdWUiLCJnZXRSZXNwb25zZSIsIl93aWRnZXRJZCIsImdldFdpZGdldElkIiwiZXhlY3V0ZSIsIl9leGVjdXRlUmVxdWVzdGVkIiwiZXhlY3V0ZUFzeW5jIiwiX3RoaXMyIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJleGVjdXRpb25SZXNvbHZlIiwiZXhlY3V0aW9uUmVqZWN0IiwicmVzZXQiLCJyZXNldHRlciIsImZvcmNlUmVzZXQiLCJvbkV4cGlyZWQiLCJvbkVycm9yZWQiLCJ0b2tlbiIsIm9uQ2hhbmdlIiwiZXhwbGljaXRSZW5kZXIiLCJyZW5kZXIiLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2l0ZWtleSIsImNhbGxiYWNrIiwidGhlbWUiLCJ0YWJpbmRleCIsInNpemUiLCJzdG9rZW4iLCJobCIsImJhZGdlIiwiaXNvbGF0ZWQiLCJjYXB0Y2hhIiwiYXBwZW5kQ2hpbGQiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImVsZW0iLCJfdGhpcyRwcm9wcyIsImNoaWxkUHJvcHMiLCJSZWFjdCIsInJlZiIsIkNvbXBvbmVudCIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwicmVhY3RJcyIsIlJFQUNUX1NUQVRJQ1MiLCJjaGlsZENvbnRleHRUeXBlcyIsImNvbnRleHRUeXBlIiwiY29udGV4dFR5cGVzIiwiZ2V0RGVmYXVsdFByb3BzIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yIiwiZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzIiwibWl4aW5zIiwiS05PV05fU1RBVElDUyIsImNhbGxlciIsImNhbGxlZSIsImFyaXR5IiwiRk9SV0FSRF9SRUZfU1RBVElDUyIsIk1FTU9fU1RBVElDUyIsImNvbXBhcmUiLCJUWVBFX1NUQVRJQ1MiLCJnZXRTdGF0aWNzIiwiY29tcG9uZW50IiwiZGVmaW5lUHJvcGVydHkiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRQcm90b3R5cGVPZiIsIm9iamVjdFByb3RvdHlwZSIsImhvaXN0Tm9uUmVhY3RTdGF0aWNzIiwidGFyZ2V0Q29tcG9uZW50Iiwic291cmNlQ29tcG9uZW50IiwiYmxhY2tsaXN0IiwiaW5oZXJpdGVkQ29tcG9uZW50IiwiY29uY2F0IiwidGFyZ2V0U3RhdGljcyIsInNvdXJjZVN0YXRpY3MiLCJkZXNjcmlwdG9yIiwiZSIsIlNDUklQVF9NQVAiLCJpZENvdW50IiwibWFrZUFzeW5jU2NyaXB0IiwiZ2V0U2NyaXB0VVJMIiwib3B0aW9ucyIsIndyYXBXaXRoQXN5bmNTY3JpcHQiLCJXcmFwcGVkQ29tcG9uZW50Iiwid3JhcHBlZENvbXBvbmVudE5hbWUiLCJBc3luY1NjcmlwdExvYWRlciIsIl9Db21wb25lbnQiLCJjb250ZXh0Iiwic3RhdGUiLCJfX3NjcmlwdFVSTCIsImFzeW5jU2NyaXB0TG9hZGVyR2V0U2NyaXB0TG9hZGVySUQiLCJfX3NjcmlwdExvYWRlcklEIiwic2V0dXBTY3JpcHRVUkwiLCJhc3luY1NjcmlwdExvYWRlckhhbmRsZUxvYWQiLCJzZXRTdGF0ZSIsImFzeW5jU2NyaXB0T25Mb2FkIiwiYXN5bmNTY3JpcHRMb2FkZXJUcmlnZ2VyT25TY3JpcHRMb2FkZWQiLCJtYXBFbnRyeSIsImxvYWRlZCIsIm9ic0tleSIsIm9ic2VydmVycyIsIndpbmRvdyIsImNhbGxiYWNrTmFtZSIsIl90aGlzMyIsInNjcmlwdFVSTCIsIl9vcHRpb25zIiwiZ2xvYmFsTmFtZSIsInNjcmlwdElkIiwiZXJyb3JlZCIsInNjcmlwdCIsInNyYyIsImFzeW5jIiwiYXR0cmlidXRlIiwiYXR0cmlidXRlcyIsInNldEF0dHJpYnV0ZSIsImlkIiwiY2FsbE9ic2VydmVyRnVuY0FuZFJlbW92ZU9ic2VydmVyIiwib2JzZXJ2ZXJzTWFwIiwib25sb2FkIiwib2JzZXJ2ZXIiLCJvbmVycm9yIiwiYm9keSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlT25Vbm1vdW50IiwiYWxsU2NyaXB0cyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiZm9yd2FyZGVkUmVmIiwiRm9yd2FyZGVkQ29tcG9uZW50IiwiZm9yd2FyZFJlZiIsImhvaXN0U3RhdGljcyIsImdldE9wdGlvbnMiLCJyZWNhcHRjaGFPcHRpb25zIiwiZ2V0VVJMIiwiZHluYW1pY09wdGlvbnMiLCJob3N0bmFtZSIsInVzZVJlY2FwdGNoYU5ldCIsIm1ha2VBc3luY1NjcmlwdExvYWRlciIsIm5vbmNlIiwiUmVDYXB0Y2hhIiwicmVjYXB0Y2hhUmVmIiwiY3JlYXRlUmVmIiwibGFzdFRva2VuIiwiaGFuZGxlT25FdmVudCIsImNhbGxiYWNrRnVuIiwib25DaGFuZ2VFdmVudCIsImN1cnJlbnQiLCJzZXRWYWx1ZSIsIm9uQ2hhbmdlQWN0aW9uIiwib25FcnJvckV2ZW50Iiwib25FcnJvckFjdGlvbiIsIm9uRXhwaXJlZEV2ZW50Iiwib25FeHBpcmVkQWN0aW9uIiwidmVyaWZpZWQiLCJpbmZvIiwic3RhdHVzIiwidGFiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFhQSxDQUEyQztFQUN6QyxHQUFBLENBQUMsWUFBVzs7RUFHZDtFQUNBO09BQ0EsSUFBSUEsU0FBUyxHQUFHLE9BQU9DLE1BQU0sS0FBSyxVQUFVLElBQUlBLE1BQU0sQ0FBQ0MsR0FBRyxDQUFBO09BQzFELElBQUlDLGtCQUFrQixHQUFHSCxTQUFTLEdBQUdDLE1BQU0sQ0FBQ0MsR0FBRyxDQUFDLGVBQWUsQ0FBQyxHQUFHLE1BQU0sQ0FBQTtPQUN6RSxJQUFJRSxpQkFBaUIsR0FBR0osU0FBUyxHQUFHQyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxNQUFNLENBQUE7T0FDdkUsSUFBSUcsbUJBQW1CLEdBQUdMLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxHQUFHLENBQUMs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
