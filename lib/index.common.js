module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "0481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var flattenIntoArray = __webpack_require__("a2bf");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var arraySpeciesCreate = __webpack_require__("65f0");

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});


/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0d03":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "1276":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var isRegExp = __webpack_require__("44e7");
var anObject = __webpack_require__("825a");
var requireObjectCoercible = __webpack_require__("1d80");
var speciesConstructor = __webpack_require__("4840");
var advanceStringIndex = __webpack_require__("8aa5");
var toLength = __webpack_require__("50c4");
var callRegExpExec = __webpack_require__("14c3");
var regexpExec = __webpack_require__("9263");
var fails = __webpack_require__("d039");

var arrayPush = [].push;
var min = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d1c":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var defineProperties = __webpack_require__("37e8");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperties: defineProperties
});


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var iteratorClose = __webpack_require__("2a62");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

module.exports = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose(iterator);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator);
      throw error;
    }
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};


/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "2532":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var notARegExp = __webpack_require__("5a34");
var requireObjectCoercible = __webpack_require__("1d80");
var correctIsRegExpLogic = __webpack_require__("ab13");

// `String.prototype.includes` method
// https://tc39.es/ecma262/#sec-string.prototype.includes
$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "26e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isArray = __webpack_require__("e8b5");

var nativeReverse = [].reverse;
var test = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.es/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
$({ target: 'Array', proto: true, forced: String(test) === String(test.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign -- dirty hack
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});


/***/ }),

/***/ "277d":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var isArray = __webpack_require__("e8b5");

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ }),

/***/ "2a62":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

module.exports = function (iterator) {
  var returnMethod = iterator['return'];
  if (returnMethod !== undefined) {
    return anObject(returnMethod.call(iterator)).value;
  }
};


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");
var IS_NODE = __webpack_require__("605d");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins -- safe
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func -- spec requirement
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (IS_NODE) {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    location && location.protocol !== 'file:' &&
    !fails(post)
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "30a9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.es/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "44e7":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var classof = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');
};


/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var IS_NODE = __webpack_require__("605d");
var V8_VERSION = __webpack_require__("2d00");
var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  /* global Symbol -- required for testing */
  return !Symbol.sham &&
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    (IS_NODE ? V8_VERSION === 38 : V8_VERSION > 37 && V8_VERSION < 41);
});


/***/ }),

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.es/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "4ec9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("6d61");
var collectionStrong = __webpack_require__("6566");

// `Map` constructor
// https://tc39.es/ecma262/#sec-map-objects
module.exports = collection('Map', function (init) {
  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.9.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5a34":
/***/ (function(module, exports, __webpack_require__) {

var isRegExp = __webpack_require__("44e7");

module.exports = function (it) {
  if (isRegExp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};


/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "605d":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var global = __webpack_require__("da84");

module.exports = classof(global.process) == 'process';


/***/ }),

/***/ "6062":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__("6d61");
var collectionStrong = __webpack_require__("6566");

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
module.exports = collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  /* global Symbol -- required for testing */
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "6566":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineProperty = __webpack_require__("9bf2").f;
var create = __webpack_require__("7c73");
var redefineAll = __webpack_require__("e2cc");
var bind = __webpack_require__("0366");
var anInstance = __webpack_require__("19aa");
var iterate = __webpack_require__("2266");
var defineIterator = __webpack_require__("7dd0");
var setSpecies = __webpack_require__("2626");
var DESCRIPTORS = __webpack_require__("83ab");
var fastKey = __webpack_require__("f183").fastKey;
var InternalStateModule = __webpack_require__("69f3");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineProperty(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var shared = __webpack_require__("c6cd");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    metadata.facade = it;
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6d61":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var InternalMetadataModule = __webpack_require__("f183");
var iterate = __webpack_require__("2266");
var anInstance = __webpack_require__("19aa");
var isObject = __webpack_require__("861d");
var fails = __webpack_require__("d039");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var setToStringTag = __webpack_require__("d44e");
var inheritIfRequired = __webpack_require__("7156");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = global[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.REQUIRED = true;
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var state;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) {
      createNonEnumerableProperty(value, 'name', key);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
    }
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "7a82":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var objectDefinePropertyModile = __webpack_require__("9bf2");

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
$({ target: 'Object', stat: true, forced: !DESCRIPTORS, sham: !DESCRIPTORS }, {
  defineProperty: objectDefinePropertyModile.f
});


/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject -- old IE */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");

var FIND = 'find';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.es/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var iteratorClose = __webpack_require__("2a62");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    iteratorClose(iterator);
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a2bf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isArray = __webpack_require__("e8b5");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg, 3) : false;
  var element;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray(element)) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

module.exports = flattenIntoArray;


/***/ }),

/***/ "a4b4":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /web0s(?!.*chrome)/i.test(userAgent);


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.es/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.es/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.es/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.es/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.es/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.es/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
    // ESNext
    'fromString,range'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ab13":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var MATCH = wellKnownSymbol('match');

module.exports = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (error2) { /* empty */ }
  } return false;
};


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

// `RegExp.prototype.exec` method
// https://tc39.es/ecma262/#sec-regexp.prototype.exec
$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");
var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype[ITERATOR].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ((!IS_PURE || NEW_ITERATOR_PROTOTYPE) && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.es/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");
var IS_WEBOS_WEBKIT = __webpack_require__("a4b4");
var IS_NODE = __webpack_require__("605d");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var document = global.document;
var process = global.process;
var Promise = global.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
  if (!IS_IOS && !IS_NODE && !IS_WEBOS_WEBKIT && MutationObserver && document) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // Node.js without promises
  } else if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.es/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "caad":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $includes = __webpack_require__("4d64").includes;
var addToUnscopables = __webpack_require__("44d2");

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.es/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable no-proto -- safe */
var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d777":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return glob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Konva; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _registerNode; });
var PI_OVER_180 = Math.PI / 180;
function detectBrowser() {
    return (typeof window !== 'undefined' &&
        ({}.toString.call(window) === '[object Window]' ||
            {}.toString.call(window) === '[object global]'));
}
const glob = typeof global !== 'undefined'
    ? global
    : typeof window !== 'undefined'
        ? window
        : typeof WorkerGlobalScope !== 'undefined'
            ? self
            : {};
const Konva = {
    _global: glob,
    version: '8.3.8',
    isBrowser: detectBrowser(),
    isUnminified: /param/.test(function (param) { }.toString()),
    dblClickWindow: 400,
    getAngle(angle) {
        return Konva.angleDeg ? angle * PI_OVER_180 : angle;
    },
    enableTrace: false,
    pointerEventsEnabled: true,
    autoDrawEnabled: true,
    hitOnDragEnabled: false,
    capturePointerEventsEnabled: false,
    _mouseListenClick: false,
    _touchListenClick: false,
    _pointerListenClick: false,
    _mouseInDblClickWindow: false,
    _touchInDblClickWindow: false,
    _pointerInDblClickWindow: false,
    _mouseDblClickPointerId: null,
    _touchDblClickPointerId: null,
    _pointerDblClickPointerId: null,
    pixelRatio: (typeof window !== 'undefined' && window.devicePixelRatio) || 1,
    dragDistance: 3,
    angleDeg: true,
    showWarnings: true,
    dragButtons: [0, 1],
    isDragging() {
        return Konva['DD'].isDragging;
    },
    isDragReady() {
        return !!Konva['DD'].node;
    },
    document: glob.document,
    _injectGlobal(Konva) {
        glob.Konva = Konva;
    },
};
const _registerNode = (NodeClass) => {
    Konva[NodeClass.prototype.getClassName()] = NodeClass;
};
Konva._injectGlobal(Konva);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  /* global globalThis -- safe */
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.es/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var IS_NODE = __webpack_require__("605d");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && !NATIVE_REJECTION_EVENT) return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (!NATIVE_REJECTION_EVENT && (handler = global['on' + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (state) {
  task.call(global, function () {
    var promise = state.facade;
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, state, unwrap) {
  return function (value) {
    fn(state, value, unwrap);
  };
};

var internalReject = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};

var internalResolve = function (state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, wrapper, state),
            bind(internalReject, wrapper, state)
          );
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({ done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, state), bind(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.es/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, state);
    this.reject = bind(internalReject, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.es/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.es/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.es/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.es/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var defineProperty = __webpack_require__("9bf2").f;
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "fa87":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_interModel_vue_vue_type_style_index_0_id_1a8cc315_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("30a9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_interModel_vue_vue_type_style_index_0_id_1a8cc315_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_interModel_vue_vue_type_style_index_0_id_1a8cc315_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "tfInterModel", function() { return /* reexport */ packages_interModel; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./packages/interModel/src/interModel.vue?vue&type=template&id=1a8cc315

var _hoisted_1 = {
  "class": "sc-tf-inter-model",
  ref: "tfInterModel"
};
var _hoisted_2 = {
  "class": "sc-tf-inter-box",
  ref: "scTfInterBox"
};
var _hoisted_3 = {
  "class": "sc-tf-phase-box",
  ref: "scTfPhaseBox"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])("div", _hoisted_1, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_2, null, 512), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])(Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", {
    "class": "overflow-box",
    style: {
      width: _ctx.phaseWidth + 'px'
    }
  }, [Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createVNode"])("div", _hoisted_3, null, 512)], 4), [[external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.drawOption.drawPhase]])], 512);
}
// CONCATENATED MODULE: ./packages/interModel/src/interModel.vue?vue&type=template&id=1a8cc315

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.is-array.js
var es_array_is_array = __webpack_require__("277d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js







function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js






function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js


function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-properties.js
var es_object_define_properties = __webpack_require__("1d1c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.define-property.js
var es_object_define_property = __webpack_require__("7a82");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js











function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.flat.js
var es_array_flat = __webpack_require__("0481");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__("1276");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.date.to-string.js
var es_date_to_string = __webpack_require__("0d03");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reverse.js
var es_array_reverse = __webpack_require__("26e9");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.includes.js
var es_array_includes = __webpack_require__("caad");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.set.js
var es_set = __webpack_require__("6062");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.includes.js
var es_string_includes = __webpack_require__("2532");

// EXTERNAL MODULE: ./node_modules/konva/lib/Global.js
var Global = __webpack_require__("d777");

// CONCATENATED MODULE: ./node_modules/konva/lib/Util.js

class Transform {
    constructor(m = [1, 0, 0, 1, 0, 0]) {
        this.dirty = false;
        this.m = (m && m.slice()) || [1, 0, 0, 1, 0, 0];
    }
    reset() {
        this.m[0] = 1;
        this.m[1] = 0;
        this.m[2] = 0;
        this.m[3] = 1;
        this.m[4] = 0;
        this.m[5] = 0;
    }
    copy() {
        return new Transform(this.m);
    }
    copyInto(tr) {
        tr.m[0] = this.m[0];
        tr.m[1] = this.m[1];
        tr.m[2] = this.m[2];
        tr.m[3] = this.m[3];
        tr.m[4] = this.m[4];
        tr.m[5] = this.m[5];
    }
    point(point) {
        var m = this.m;
        return {
            x: m[0] * point.x + m[2] * point.y + m[4],
            y: m[1] * point.x + m[3] * point.y + m[5],
        };
    }
    translate(x, y) {
        this.m[4] += this.m[0] * x + this.m[2] * y;
        this.m[5] += this.m[1] * x + this.m[3] * y;
        return this;
    }
    scale(sx, sy) {
        this.m[0] *= sx;
        this.m[1] *= sx;
        this.m[2] *= sy;
        this.m[3] *= sy;
        return this;
    }
    rotate(rad) {
        var c = Math.cos(rad);
        var s = Math.sin(rad);
        var m11 = this.m[0] * c + this.m[2] * s;
        var m12 = this.m[1] * c + this.m[3] * s;
        var m21 = this.m[0] * -s + this.m[2] * c;
        var m22 = this.m[1] * -s + this.m[3] * c;
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        return this;
    }
    getTranslation() {
        return {
            x: this.m[4],
            y: this.m[5],
        };
    }
    skew(sx, sy) {
        var m11 = this.m[0] + this.m[2] * sy;
        var m12 = this.m[1] + this.m[3] * sy;
        var m21 = this.m[2] + this.m[0] * sx;
        var m22 = this.m[3] + this.m[1] * sx;
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        return this;
    }
    multiply(matrix) {
        var m11 = this.m[0] * matrix.m[0] + this.m[2] * matrix.m[1];
        var m12 = this.m[1] * matrix.m[0] + this.m[3] * matrix.m[1];
        var m21 = this.m[0] * matrix.m[2] + this.m[2] * matrix.m[3];
        var m22 = this.m[1] * matrix.m[2] + this.m[3] * matrix.m[3];
        var dx = this.m[0] * matrix.m[4] + this.m[2] * matrix.m[5] + this.m[4];
        var dy = this.m[1] * matrix.m[4] + this.m[3] * matrix.m[5] + this.m[5];
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        this.m[4] = dx;
        this.m[5] = dy;
        return this;
    }
    invert() {
        var d = 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
        var m0 = this.m[3] * d;
        var m1 = -this.m[1] * d;
        var m2 = -this.m[2] * d;
        var m3 = this.m[0] * d;
        var m4 = d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]);
        var m5 = d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]);
        this.m[0] = m0;
        this.m[1] = m1;
        this.m[2] = m2;
        this.m[3] = m3;
        this.m[4] = m4;
        this.m[5] = m5;
        return this;
    }
    getMatrix() {
        return this.m;
    }
    decompose() {
        var a = this.m[0];
        var b = this.m[1];
        var c = this.m[2];
        var d = this.m[3];
        var e = this.m[4];
        var f = this.m[5];
        var delta = a * d - b * c;
        let result = {
            x: e,
            y: f,
            rotation: 0,
            scaleX: 0,
            scaleY: 0,
            skewX: 0,
            skewY: 0,
        };
        if (a != 0 || b != 0) {
            var r = Math.sqrt(a * a + b * b);
            result.rotation = b > 0 ? Math.acos(a / r) : -Math.acos(a / r);
            result.scaleX = r;
            result.scaleY = delta / r;
            result.skewX = (a * c + b * d) / delta;
            result.skewY = 0;
        }
        else if (c != 0 || d != 0) {
            var s = Math.sqrt(c * c + d * d);
            result.rotation =
                Math.PI / 2 - (d > 0 ? Math.acos(-c / s) : -Math.acos(c / s));
            result.scaleX = delta / s;
            result.scaleY = s;
            result.skewX = 0;
            result.skewY = (a * c + b * d) / delta;
        }
        else {
        }
        result.rotation = Util._getRotation(result.rotation);
        return result;
    }
}
var OBJECT_ARRAY = '[object Array]', OBJECT_NUMBER = '[object Number]', OBJECT_STRING = '[object String]', OBJECT_BOOLEAN = '[object Boolean]', PI_OVER_DEG180 = Math.PI / 180, DEG180_OVER_PI = 180 / Math.PI, HASH = '#', EMPTY_STRING = '', ZERO = '0', KONVA_WARNING = 'Konva warning: ', KONVA_ERROR = 'Konva error: ', RGB_PAREN = 'rgb(', COLORS = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 132, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 255, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 203],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [119, 128, 144],
    slategrey: [119, 128, 144],
    snow: [255, 255, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    transparent: [255, 255, 255, 0],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 5],
}, RGB_REGEX = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/, animQueue = [];
const req = (typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame) ||
    function (f) {
        setTimeout(f, 60);
    };
const Util = {
    _isElement(obj) {
        return !!(obj && obj.nodeType == 1);
    },
    _isFunction(obj) {
        return !!(obj && obj.constructor && obj.call && obj.apply);
    },
    _isPlainObject(obj) {
        return !!obj && obj.constructor === Object;
    },
    _isArray(obj) {
        return Object.prototype.toString.call(obj) === OBJECT_ARRAY;
    },
    _isNumber(obj) {
        return (Object.prototype.toString.call(obj) === OBJECT_NUMBER &&
            !isNaN(obj) &&
            isFinite(obj));
    },
    _isString(obj) {
        return Object.prototype.toString.call(obj) === OBJECT_STRING;
    },
    _isBoolean(obj) {
        return Object.prototype.toString.call(obj) === OBJECT_BOOLEAN;
    },
    isObject(val) {
        return val instanceof Object;
    },
    isValidSelector(selector) {
        if (typeof selector !== 'string') {
            return false;
        }
        var firstChar = selector[0];
        return (firstChar === '#' ||
            firstChar === '.' ||
            firstChar === firstChar.toUpperCase());
    },
    _sign(number) {
        if (number === 0) {
            return 1;
        }
        if (number > 0) {
            return 1;
        }
        else {
            return -1;
        }
    },
    requestAnimFrame(callback) {
        animQueue.push(callback);
        if (animQueue.length === 1) {
            req(function () {
                const queue = animQueue;
                animQueue = [];
                queue.forEach(function (cb) {
                    cb();
                });
            });
        }
    },
    createCanvasElement() {
        var canvas = document.createElement('canvas');
        try {
            canvas.style = canvas.style || {};
        }
        catch (e) { }
        return canvas;
    },
    createImageElement() {
        return document.createElement('img');
    },
    _isInDocument(el) {
        while ((el = el.parentNode)) {
            if (el == document) {
                return true;
            }
        }
        return false;
    },
    _urlToImage(url, callback) {
        var imageObj = Util.createImageElement();
        imageObj.onload = function () {
            callback(imageObj);
        };
        imageObj.src = url;
    },
    _rgbToHex(r, g, b) {
        return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    },
    _hexToRgb(hex) {
        hex = hex.replace(HASH, EMPTY_STRING);
        var bigint = parseInt(hex, 16);
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255,
        };
    },
    getRandomColor() {
        var randColor = ((Math.random() * 0xffffff) << 0).toString(16);
        while (randColor.length < 6) {
            randColor = ZERO + randColor;
        }
        return HASH + randColor;
    },
    getRGB(color) {
        var rgb;
        if (color in COLORS) {
            rgb = COLORS[color];
            return {
                r: rgb[0],
                g: rgb[1],
                b: rgb[2],
            };
        }
        else if (color[0] === HASH) {
            return this._hexToRgb(color.substring(1));
        }
        else if (color.substr(0, 4) === RGB_PAREN) {
            rgb = RGB_REGEX.exec(color.replace(/ /g, ''));
            return {
                r: parseInt(rgb[1], 10),
                g: parseInt(rgb[2], 10),
                b: parseInt(rgb[3], 10),
            };
        }
        else {
            return {
                r: 0,
                g: 0,
                b: 0,
            };
        }
    },
    colorToRGBA(str) {
        str = str || 'black';
        return (Util._namedColorToRBA(str) ||
            Util._hex3ColorToRGBA(str) ||
            Util._hex6ColorToRGBA(str) ||
            Util._rgbColorToRGBA(str) ||
            Util._rgbaColorToRGBA(str) ||
            Util._hslColorToRGBA(str));
    },
    _namedColorToRBA(str) {
        var c = COLORS[str.toLowerCase()];
        if (!c) {
            return null;
        }
        return {
            r: c[0],
            g: c[1],
            b: c[2],
            a: 1,
        };
    },
    _rgbColorToRGBA(str) {
        if (str.indexOf('rgb(') === 0) {
            str = str.match(/rgb\(([^)]+)\)/)[1];
            var parts = str.split(/ *, */).map(Number);
            return {
                r: parts[0],
                g: parts[1],
                b: parts[2],
                a: 1,
            };
        }
    },
    _rgbaColorToRGBA(str) {
        if (str.indexOf('rgba(') === 0) {
            str = str.match(/rgba\(([^)]+)\)/)[1];
            var parts = str.split(/ *, */).map((n, index) => {
                if (n.slice(-1) === '%') {
                    return index === 3 ? parseInt(n) / 100 : (parseInt(n) / 100) * 255;
                }
                return Number(n);
            });
            return {
                r: parts[0],
                g: parts[1],
                b: parts[2],
                a: parts[3],
            };
        }
    },
    _hex6ColorToRGBA(str) {
        if (str[0] === '#' && str.length === 7) {
            return {
                r: parseInt(str.slice(1, 3), 16),
                g: parseInt(str.slice(3, 5), 16),
                b: parseInt(str.slice(5, 7), 16),
                a: 1,
            };
        }
    },
    _hex3ColorToRGBA(str) {
        if (str[0] === '#' && str.length === 4) {
            return {
                r: parseInt(str[1] + str[1], 16),
                g: parseInt(str[2] + str[2], 16),
                b: parseInt(str[3] + str[3], 16),
                a: 1,
            };
        }
    },
    _hslColorToRGBA(str) {
        if (/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.test(str)) {
            const [_, ...hsl] = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(str);
            const h = Number(hsl[0]) / 360;
            const s = Number(hsl[1]) / 100;
            const l = Number(hsl[2]) / 100;
            let t2;
            let t3;
            let val;
            if (s === 0) {
                val = l * 255;
                return {
                    r: Math.round(val),
                    g: Math.round(val),
                    b: Math.round(val),
                    a: 1,
                };
            }
            if (l < 0.5) {
                t2 = l * (1 + s);
            }
            else {
                t2 = l + s - l * s;
            }
            const t1 = 2 * l - t2;
            const rgb = [0, 0, 0];
            for (let i = 0; i < 3; i++) {
                t3 = h + (1 / 3) * -(i - 1);
                if (t3 < 0) {
                    t3++;
                }
                if (t3 > 1) {
                    t3--;
                }
                if (6 * t3 < 1) {
                    val = t1 + (t2 - t1) * 6 * t3;
                }
                else if (2 * t3 < 1) {
                    val = t2;
                }
                else if (3 * t3 < 2) {
                    val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
                }
                else {
                    val = t1;
                }
                rgb[i] = val * 255;
            }
            return {
                r: Math.round(rgb[0]),
                g: Math.round(rgb[1]),
                b: Math.round(rgb[2]),
                a: 1,
            };
        }
    },
    haveIntersection(r1, r2) {
        return !(r2.x > r1.x + r1.width ||
            r2.x + r2.width < r1.x ||
            r2.y > r1.y + r1.height ||
            r2.y + r2.height < r1.y);
    },
    cloneObject(obj) {
        var retObj = {};
        for (var key in obj) {
            if (this._isPlainObject(obj[key])) {
                retObj[key] = this.cloneObject(obj[key]);
            }
            else if (this._isArray(obj[key])) {
                retObj[key] = this.cloneArray(obj[key]);
            }
            else {
                retObj[key] = obj[key];
            }
        }
        return retObj;
    },
    cloneArray(arr) {
        return arr.slice(0);
    },
    degToRad(deg) {
        return deg * PI_OVER_DEG180;
    },
    radToDeg(rad) {
        return rad * DEG180_OVER_PI;
    },
    _degToRad(deg) {
        Util.warn('Util._degToRad is removed. Please use public Util.degToRad instead.');
        return Util.degToRad(deg);
    },
    _radToDeg(rad) {
        Util.warn('Util._radToDeg is removed. Please use public Util.radToDeg instead.');
        return Util.radToDeg(rad);
    },
    _getRotation(radians) {
        return Global["a" /* Konva */].angleDeg ? Util.radToDeg(radians) : radians;
    },
    _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    throw(str) {
        throw new Error(KONVA_ERROR + str);
    },
    error(str) {
        console.error(KONVA_ERROR + str);
    },
    warn(str) {
        if (!Global["a" /* Konva */].showWarnings) {
            return;
        }
        console.warn(KONVA_WARNING + str);
    },
    each(obj, func) {
        for (var key in obj) {
            func(key, obj[key]);
        }
    },
    _inRange(val, left, right) {
        return left <= val && val < right;
    },
    _getProjectionToSegment(x1, y1, x2, y2, x3, y3) {
        var x, y, dist;
        var pd2 = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);
        if (pd2 == 0) {
            x = x1;
            y = y1;
            dist = (x3 - x2) * (x3 - x2) + (y3 - y2) * (y3 - y2);
        }
        else {
            var u = ((x3 - x1) * (x2 - x1) + (y3 - y1) * (y2 - y1)) / pd2;
            if (u < 0) {
                x = x1;
                y = y1;
                dist = (x1 - x3) * (x1 - x3) + (y1 - y3) * (y1 - y3);
            }
            else if (u > 1.0) {
                x = x2;
                y = y2;
                dist = (x2 - x3) * (x2 - x3) + (y2 - y3) * (y2 - y3);
            }
            else {
                x = x1 + u * (x2 - x1);
                y = y1 + u * (y2 - y1);
                dist = (x - x3) * (x - x3) + (y - y3) * (y - y3);
            }
        }
        return [x, y, dist];
    },
    _getProjectionToLine(pt, line, isClosed) {
        var pc = Util.cloneObject(pt);
        var dist = Number.MAX_VALUE;
        line.forEach(function (p1, i) {
            if (!isClosed && i === line.length - 1) {
                return;
            }
            var p2 = line[(i + 1) % line.length];
            var proj = Util._getProjectionToSegment(p1.x, p1.y, p2.x, p2.y, pt.x, pt.y);
            var px = proj[0], py = proj[1], pdist = proj[2];
            if (pdist < dist) {
                pc.x = px;
                pc.y = py;
                dist = pdist;
            }
        });
        return pc;
    },
    _prepareArrayForTween(startArray, endArray, isClosed) {
        var n, start = [], end = [];
        if (startArray.length > endArray.length) {
            var temp = endArray;
            endArray = startArray;
            startArray = temp;
        }
        for (n = 0; n < startArray.length; n += 2) {
            start.push({
                x: startArray[n],
                y: startArray[n + 1],
            });
        }
        for (n = 0; n < endArray.length; n += 2) {
            end.push({
                x: endArray[n],
                y: endArray[n + 1],
            });
        }
        var newStart = [];
        end.forEach(function (point) {
            var pr = Util._getProjectionToLine(point, start, isClosed);
            newStart.push(pr.x);
            newStart.push(pr.y);
        });
        return newStart;
    },
    _prepareToStringify(obj) {
        var desc;
        obj.visitedByCircularReferenceRemoval = true;
        for (var key in obj) {
            if (!(obj.hasOwnProperty(key) && obj[key] && typeof obj[key] == 'object')) {
                continue;
            }
            desc = Object.getOwnPropertyDescriptor(obj, key);
            if (obj[key].visitedByCircularReferenceRemoval ||
                Util._isElement(obj[key])) {
                if (desc.configurable) {
                    delete obj[key];
                }
                else {
                    return null;
                }
            }
            else if (Util._prepareToStringify(obj[key]) === null) {
                if (desc.configurable) {
                    delete obj[key];
                }
                else {
                    return null;
                }
            }
        }
        delete obj.visitedByCircularReferenceRemoval;
        return obj;
    },
    _assign(target, source) {
        for (var key in source) {
            target[key] = source[key];
        }
        return target;
    },
    _getFirstPointerId(evt) {
        if (!evt.touches) {
            return evt.pointerId || 999;
        }
        else {
            return evt.changedTouches[0].identifier;
        }
    },
};

// CONCATENATED MODULE: ./node_modules/konva/lib/Validators.js


function _formatValue(val) {
    if (Util._isString(val)) {
        return '"' + val + '"';
    }
    if (Object.prototype.toString.call(val) === '[object Number]') {
        return val;
    }
    if (Util._isBoolean(val)) {
        return val;
    }
    return Object.prototype.toString.call(val);
}
function RGBComponent(val) {
    if (val > 255) {
        return 255;
    }
    else if (val < 0) {
        return 0;
    }
    return Math.round(val);
}
function alphaComponent(val) {
    if (val > 1) {
        return 1;
    }
    else if (val < 0.0001) {
        return 0.0001;
    }
    return val;
}
function getNumberValidator() {
    if (Global["a" /* Konva */].isUnminified) {
        return function (val, attr) {
            if (!Util._isNumber(val)) {
                Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a number.');
            }
            return val;
        };
    }
}
function getNumberOrArrayOfNumbersValidator(noOfElements) {
    if (Global["a" /* Konva */].isUnminified) {
        return function (val, attr) {
            let isNumber = Util._isNumber(val);
            let isValidArray = Util._isArray(val) && val.length == noOfElements;
            if (!isNumber && !isValidArray) {
                Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a number or Array<number>(' +
                    noOfElements +
                    ')');
            }
            return val;
        };
    }
}
function getNumberOrAutoValidator() {
    if (Global["a" /* Konva */].isUnminified) {
        return function (val, attr) {
            var isNumber = Util._isNumber(val);
            var isAuto = val === 'auto';
            if (!(isNumber || isAuto)) {
                Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a number or "auto".');
            }
            return val;
        };
    }
}
function getStringValidator() {
    if (Global["a" /* Konva */].isUnminified) {
        return function (val, attr) {
            if (!Util._isString(val)) {
                Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a string.');
            }
            return val;
        };
    }
}
function getStringOrGradientValidator() {
    if (Global["a" /* Konva */].isUnminified) {
        return function (val, attr) {
            const isString = Util._isString(val);
            const isGradient = Object.prototype.toString.call(val) === '[object CanvasGradient]' ||
                (val && val.addColorStop);
            if (!(isString || isGradient)) {
                Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a string or a native gradient.');
            }
            return val;
        };
    }
}
function getFunctionValidator() {
    if (Global["a" /* Konva */].isUnminified) {
        return function (val, attr) {
            if (!Util._isFunction(val)) {
                Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a function.');
            }
            return val;
        };
    }
}
function getNumberArrayValidator() {
    if (Global["a" /* Konva */].isUnminified) {
        return function (val, attr) {
            if (!Util._isArray(val)) {
                Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a array of numbers.');
            }
            else {
                val.forEach(function (item) {
                    if (!Util._isNumber(item)) {
                        Util.warn('"' +
                            attr +
                            '" attribute has non numeric element ' +
                            item +
                            '. Make sure that all elements are numbers.');
                    }
                });
            }
            return val;
        };
    }
}
function getBooleanValidator() {
    if (Global["a" /* Konva */].isUnminified) {
        return function (val, attr) {
            var isBool = val === true || val === false;
            if (!isBool) {
                Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be a boolean.');
            }
            return val;
        };
    }
}
function getComponentValidator(components) {
    if (Global["a" /* Konva */].isUnminified) {
        return function (val, attr) {
            if (!Util.isObject(val)) {
                Util.warn(_formatValue(val) +
                    ' is a not valid value for "' +
                    attr +
                    '" attribute. The value should be an object with properties ' +
                    components);
            }
            return val;
        };
    }
}

// CONCATENATED MODULE: ./node_modules/konva/lib/Factory.js


var GET = 'get', SET = 'set';
const Factory = {
    addGetterSetter(constructor, attr, def, validator, after) {
        Factory.addGetter(constructor, attr, def);
        Factory.addSetter(constructor, attr, validator, after);
        Factory.addOverloadedGetterSetter(constructor, attr);
    },
    addGetter(constructor, attr, def) {
        var method = GET + Util._capitalize(attr);
        constructor.prototype[method] =
            constructor.prototype[method] ||
                function () {
                    var val = this.attrs[attr];
                    return val === undefined ? def : val;
                };
    },
    addSetter(constructor, attr, validator, after) {
        var method = SET + Util._capitalize(attr);
        if (!constructor.prototype[method]) {
            Factory.overWriteSetter(constructor, attr, validator, after);
        }
    },
    overWriteSetter(constructor, attr, validator, after) {
        var method = SET + Util._capitalize(attr);
        constructor.prototype[method] = function (val) {
            if (validator && val !== undefined && val !== null) {
                val = validator.call(this, val, attr);
            }
            this._setAttr(attr, val);
            if (after) {
                after.call(this);
            }
            return this;
        };
    },
    addComponentsGetterSetter(constructor, attr, components, validator, after) {
        var len = components.length, capitalize = Util._capitalize, getter = GET + capitalize(attr), setter = SET + capitalize(attr), n, component;
        constructor.prototype[getter] = function () {
            var ret = {};
            for (n = 0; n < len; n++) {
                component = components[n];
                ret[component] = this.getAttr(attr + capitalize(component));
            }
            return ret;
        };
        var basicValidator = getComponentValidator(components);
        constructor.prototype[setter] = function (val) {
            var oldVal = this.attrs[attr], key;
            if (validator) {
                val = validator.call(this, val);
            }
            if (basicValidator) {
                basicValidator.call(this, val, attr);
            }
            for (key in val) {
                if (!val.hasOwnProperty(key)) {
                    continue;
                }
                this._setAttr(attr + capitalize(key), val[key]);
            }
            this._fireChangeEvent(attr, oldVal, val);
            if (after) {
                after.call(this);
            }
            return this;
        };
        Factory.addOverloadedGetterSetter(constructor, attr);
    },
    addOverloadedGetterSetter(constructor, attr) {
        var capitalizedAttr = Util._capitalize(attr), setter = SET + capitalizedAttr, getter = GET + capitalizedAttr;
        constructor.prototype[attr] = function () {
            if (arguments.length) {
                this[setter](arguments[0]);
                return this;
            }
            return this[getter]();
        };
    },
    addDeprecatedGetterSetter(constructor, attr, def, validator) {
        Util.error('Adding deprecated ' + attr);
        var method = GET + Util._capitalize(attr);
        var message = attr +
            ' property is deprecated and will be removed soon. Look at Konva change log for more information.';
        constructor.prototype[method] = function () {
            Util.error(message);
            var val = this.attrs[attr];
            return val === undefined ? def : val;
        };
        Factory.addSetter(constructor, attr, validator, function () {
            Util.error(message);
        });
        Factory.addOverloadedGetterSetter(constructor, attr);
    },
    backCompat(constructor, methods) {
        Util.each(methods, function (oldMethodName, newMethodName) {
            var method = constructor.prototype[newMethodName];
            var oldGetter = GET + Util._capitalize(oldMethodName);
            var oldSetter = SET + Util._capitalize(oldMethodName);
            function deprecated() {
                method.apply(this, arguments);
                Util.error('"' +
                    oldMethodName +
                    '" method is deprecated and will be removed soon. Use ""' +
                    newMethodName +
                    '" instead.');
            }
            constructor.prototype[oldMethodName] = deprecated;
            constructor.prototype[oldGetter] = deprecated;
            constructor.prototype[oldSetter] = deprecated;
        });
    },
    afterSetFilter() {
        this._filterUpToDate = false;
    },
};

// CONCATENATED MODULE: ./node_modules/konva/lib/Context.js


function simplifyArray(arr) {
    var retArr = [], len = arr.length, util = Util, n, val;
    for (n = 0; n < len; n++) {
        val = arr[n];
        if (util._isNumber(val)) {
            val = Math.round(val * 1000) / 1000;
        }
        else if (!util._isString(val)) {
            val = val + '';
        }
        retArr.push(val);
    }
    return retArr;
}
var COMMA = ',', OPEN_PAREN = '(', CLOSE_PAREN = ')', OPEN_PAREN_BRACKET = '([', CLOSE_BRACKET_PAREN = '])', SEMICOLON = ';', DOUBLE_PAREN = '()', EQUALS = '=', CONTEXT_METHODS = [
    'arc',
    'arcTo',
    'beginPath',
    'bezierCurveTo',
    'clearRect',
    'clip',
    'closePath',
    'createLinearGradient',
    'createPattern',
    'createRadialGradient',
    'drawImage',
    'ellipse',
    'fill',
    'fillText',
    'getImageData',
    'createImageData',
    'lineTo',
    'moveTo',
    'putImageData',
    'quadraticCurveTo',
    'rect',
    'restore',
    'rotate',
    'save',
    'scale',
    'setLineDash',
    'setTransform',
    'stroke',
    'strokeText',
    'transform',
    'translate',
];
var CONTEXT_PROPERTIES = [
    'fillStyle',
    'strokeStyle',
    'shadowColor',
    'shadowBlur',
    'shadowOffsetX',
    'shadowOffsetY',
    'lineCap',
    'lineDashOffset',
    'lineJoin',
    'lineWidth',
    'miterLimit',
    'font',
    'textAlign',
    'textBaseline',
    'globalAlpha',
    'globalCompositeOperation',
    'imageSmoothingEnabled',
];
const traceArrMax = 100;
class Context_Context {
    constructor(canvas) {
        this.canvas = canvas;
        this._context = canvas._canvas.getContext('2d');
        if (Global["a" /* Konva */].enableTrace) {
            this.traceArr = [];
            this._enableTrace();
        }
    }
    fillShape(shape) {
        if (shape.fillEnabled()) {
            this._fill(shape);
        }
    }
    _fill(shape) {
    }
    strokeShape(shape) {
        if (shape.hasStroke()) {
            this._stroke(shape);
        }
    }
    _stroke(shape) {
    }
    fillStrokeShape(shape) {
        if (shape.attrs.fillAfterStrokeEnabled) {
            this.strokeShape(shape);
            this.fillShape(shape);
        }
        else {
            this.fillShape(shape);
            this.strokeShape(shape);
        }
    }
    getTrace(relaxed, rounded) {
        var traceArr = this.traceArr, len = traceArr.length, str = '', n, trace, method, args;
        for (n = 0; n < len; n++) {
            trace = traceArr[n];
            method = trace.method;
            if (method) {
                args = trace.args;
                str += method;
                if (relaxed) {
                    str += DOUBLE_PAREN;
                }
                else {
                    if (Util._isArray(args[0])) {
                        str += OPEN_PAREN_BRACKET + args.join(COMMA) + CLOSE_BRACKET_PAREN;
                    }
                    else {
                        if (rounded) {
                            args = args.map((a) => typeof a === 'number' ? Math.floor(a) : a);
                        }
                        str += OPEN_PAREN + args.join(COMMA) + CLOSE_PAREN;
                    }
                }
            }
            else {
                str += trace.property;
                if (!relaxed) {
                    str += EQUALS + trace.val;
                }
            }
            str += SEMICOLON;
        }
        return str;
    }
    clearTrace() {
        this.traceArr = [];
    }
    _trace(str) {
        var traceArr = this.traceArr, len;
        traceArr.push(str);
        len = traceArr.length;
        if (len >= traceArrMax) {
            traceArr.shift();
        }
    }
    reset() {
        var pixelRatio = this.getCanvas().getPixelRatio();
        this.setTransform(1 * pixelRatio, 0, 0, 1 * pixelRatio, 0, 0);
    }
    getCanvas() {
        return this.canvas;
    }
    clear(bounds) {
        var canvas = this.getCanvas();
        if (bounds) {
            this.clearRect(bounds.x || 0, bounds.y || 0, bounds.width || 0, bounds.height || 0);
        }
        else {
            this.clearRect(0, 0, canvas.getWidth() / canvas.pixelRatio, canvas.getHeight() / canvas.pixelRatio);
        }
    }
    _applyLineCap(shape) {
        var lineCap = shape.getLineCap();
        if (lineCap) {
            this.setAttr('lineCap', lineCap);
        }
    }
    _applyOpacity(shape) {
        var absOpacity = shape.getAbsoluteOpacity();
        if (absOpacity !== 1) {
            this.setAttr('globalAlpha', absOpacity);
        }
    }
    _applyLineJoin(shape) {
        var lineJoin = shape.attrs.lineJoin;
        if (lineJoin) {
            this.setAttr('lineJoin', lineJoin);
        }
    }
    setAttr(attr, val) {
        this._context[attr] = val;
    }
    arc(a0, a1, a2, a3, a4, a5) {
        this._context.arc(a0, a1, a2, a3, a4, a5);
    }
    arcTo(a0, a1, a2, a3, a4) {
        this._context.arcTo(a0, a1, a2, a3, a4);
    }
    beginPath() {
        this._context.beginPath();
    }
    bezierCurveTo(a0, a1, a2, a3, a4, a5) {
        this._context.bezierCurveTo(a0, a1, a2, a3, a4, a5);
    }
    clearRect(a0, a1, a2, a3) {
        this._context.clearRect(a0, a1, a2, a3);
    }
    clip() {
        this._context.clip();
    }
    closePath() {
        this._context.closePath();
    }
    createImageData(a0, a1) {
        var a = arguments;
        if (a.length === 2) {
            return this._context.createImageData(a0, a1);
        }
        else if (a.length === 1) {
            return this._context.createImageData(a0);
        }
    }
    createLinearGradient(a0, a1, a2, a3) {
        return this._context.createLinearGradient(a0, a1, a2, a3);
    }
    createPattern(a0, a1) {
        return this._context.createPattern(a0, a1);
    }
    createRadialGradient(a0, a1, a2, a3, a4, a5) {
        return this._context.createRadialGradient(a0, a1, a2, a3, a4, a5);
    }
    drawImage(a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        var a = arguments, _context = this._context;
        if (a.length === 3) {
            _context.drawImage(a0, a1, a2);
        }
        else if (a.length === 5) {
            _context.drawImage(a0, a1, a2, a3, a4);
        }
        else if (a.length === 9) {
            _context.drawImage(a0, a1, a2, a3, a4, a5, a6, a7, a8);
        }
    }
    ellipse(a0, a1, a2, a3, a4, a5, a6, a7) {
        this._context.ellipse(a0, a1, a2, a3, a4, a5, a6, a7);
    }
    isPointInPath(x, y) {
        return this._context.isPointInPath(x, y);
    }
    fill(path2d) {
        if (path2d) {
            this._context.fill(path2d);
        }
        else {
            this._context.fill();
        }
    }
    fillRect(x, y, width, height) {
        this._context.fillRect(x, y, width, height);
    }
    strokeRect(x, y, width, height) {
        this._context.strokeRect(x, y, width, height);
    }
    fillText(text, x, y, maxWidth) {
        if (maxWidth) {
            this._context.fillText(text, x, y, maxWidth);
        }
        else {
            this._context.fillText(text, x, y);
        }
    }
    measureText(text) {
        return this._context.measureText(text);
    }
    getImageData(a0, a1, a2, a3) {
        return this._context.getImageData(a0, a1, a2, a3);
    }
    lineTo(a0, a1) {
        this._context.lineTo(a0, a1);
    }
    moveTo(a0, a1) {
        this._context.moveTo(a0, a1);
    }
    rect(a0, a1, a2, a3) {
        this._context.rect(a0, a1, a2, a3);
    }
    putImageData(a0, a1, a2) {
        this._context.putImageData(a0, a1, a2);
    }
    quadraticCurveTo(a0, a1, a2, a3) {
        this._context.quadraticCurveTo(a0, a1, a2, a3);
    }
    restore() {
        this._context.restore();
    }
    rotate(a0) {
        this._context.rotate(a0);
    }
    save() {
        this._context.save();
    }
    scale(a0, a1) {
        this._context.scale(a0, a1);
    }
    setLineDash(a0) {
        if (this._context.setLineDash) {
            this._context.setLineDash(a0);
        }
        else if ('mozDash' in this._context) {
            this._context['mozDash'] = a0;
        }
        else if ('webkitLineDash' in this._context) {
            this._context['webkitLineDash'] = a0;
        }
    }
    getLineDash() {
        return this._context.getLineDash();
    }
    setTransform(a0, a1, a2, a3, a4, a5) {
        this._context.setTransform(a0, a1, a2, a3, a4, a5);
    }
    stroke(path2d) {
        if (path2d) {
            this._context.stroke(path2d);
        }
        else {
            this._context.stroke();
        }
    }
    strokeText(a0, a1, a2, a3) {
        this._context.strokeText(a0, a1, a2, a3);
    }
    transform(a0, a1, a2, a3, a4, a5) {
        this._context.transform(a0, a1, a2, a3, a4, a5);
    }
    translate(a0, a1) {
        this._context.translate(a0, a1);
    }
    _enableTrace() {
        var that = this, len = CONTEXT_METHODS.length, origSetter = this.setAttr, n, args;
        var func = function (methodName) {
            var origMethod = that[methodName], ret;
            that[methodName] = function () {
                args = simplifyArray(Array.prototype.slice.call(arguments, 0));
                ret = origMethod.apply(that, arguments);
                that._trace({
                    method: methodName,
                    args: args,
                });
                return ret;
            };
        };
        for (n = 0; n < len; n++) {
            func(CONTEXT_METHODS[n]);
        }
        that.setAttr = function () {
            origSetter.apply(that, arguments);
            var prop = arguments[0];
            var val = arguments[1];
            if (prop === 'shadowOffsetX' ||
                prop === 'shadowOffsetY' ||
                prop === 'shadowBlur') {
                val = val / this.canvas.getPixelRatio();
            }
            that._trace({
                property: prop,
                val: val,
            });
        };
    }
    _applyGlobalCompositeOperation(node) {
        const op = node.attrs.globalCompositeOperation;
        var def = !op || op === 'source-over';
        if (!def) {
            this.setAttr('globalCompositeOperation', op);
        }
    }
}
CONTEXT_PROPERTIES.forEach(function (prop) {
    Object.defineProperty(Context_Context.prototype, prop, {
        get() {
            return this._context[prop];
        },
        set(val) {
            this._context[prop] = val;
        },
    });
});
class SceneContext extends Context_Context {
    _fillColor(shape) {
        var fill = shape.fill();
        this.setAttr('fillStyle', fill);
        shape._fillFunc(this);
    }
    _fillPattern(shape) {
        this.setAttr('fillStyle', shape._getFillPattern());
        shape._fillFunc(this);
    }
    _fillLinearGradient(shape) {
        var grd = shape._getLinearGradient();
        if (grd) {
            this.setAttr('fillStyle', grd);
            shape._fillFunc(this);
        }
    }
    _fillRadialGradient(shape) {
        var grd = shape._getRadialGradient();
        if (grd) {
            this.setAttr('fillStyle', grd);
            shape._fillFunc(this);
        }
    }
    _fill(shape) {
        var hasColor = shape.fill(), fillPriority = shape.getFillPriority();
        if (hasColor && fillPriority === 'color') {
            this._fillColor(shape);
            return;
        }
        var hasPattern = shape.getFillPatternImage();
        if (hasPattern && fillPriority === 'pattern') {
            this._fillPattern(shape);
            return;
        }
        var hasLinearGradient = shape.getFillLinearGradientColorStops();
        if (hasLinearGradient && fillPriority === 'linear-gradient') {
            this._fillLinearGradient(shape);
            return;
        }
        var hasRadialGradient = shape.getFillRadialGradientColorStops();
        if (hasRadialGradient && fillPriority === 'radial-gradient') {
            this._fillRadialGradient(shape);
            return;
        }
        if (hasColor) {
            this._fillColor(shape);
        }
        else if (hasPattern) {
            this._fillPattern(shape);
        }
        else if (hasLinearGradient) {
            this._fillLinearGradient(shape);
        }
        else if (hasRadialGradient) {
            this._fillRadialGradient(shape);
        }
    }
    _strokeLinearGradient(shape) {
        var start = shape.getStrokeLinearGradientStartPoint(), end = shape.getStrokeLinearGradientEndPoint(), colorStops = shape.getStrokeLinearGradientColorStops(), grd = this.createLinearGradient(start.x, start.y, end.x, end.y);
        if (colorStops) {
            for (var n = 0; n < colorStops.length; n += 2) {
                grd.addColorStop(colorStops[n], colorStops[n + 1]);
            }
            this.setAttr('strokeStyle', grd);
        }
    }
    _stroke(shape) {
        var dash = shape.dash(), strokeScaleEnabled = shape.getStrokeScaleEnabled();
        if (shape.hasStroke()) {
            if (!strokeScaleEnabled) {
                this.save();
                var pixelRatio = this.getCanvas().getPixelRatio();
                this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            }
            this._applyLineCap(shape);
            if (dash && shape.dashEnabled()) {
                this.setLineDash(dash);
                this.setAttr('lineDashOffset', shape.dashOffset());
            }
            this.setAttr('lineWidth', shape.strokeWidth());
            if (!shape.getShadowForStrokeEnabled()) {
                this.setAttr('shadowColor', 'rgba(0,0,0,0)');
            }
            var hasLinearGradient = shape.getStrokeLinearGradientColorStops();
            if (hasLinearGradient) {
                this._strokeLinearGradient(shape);
            }
            else {
                this.setAttr('strokeStyle', shape.stroke());
            }
            shape._strokeFunc(this);
            if (!strokeScaleEnabled) {
                this.restore();
            }
        }
    }
    _applyShadow(shape) {
        var _a, _b, _c;
        var color = (_a = shape.getShadowRGBA()) !== null && _a !== void 0 ? _a : 'black', blur = (_b = shape.getShadowBlur()) !== null && _b !== void 0 ? _b : 5, offset = (_c = shape.getShadowOffset()) !== null && _c !== void 0 ? _c : {
            x: 0,
            y: 0,
        }, scale = shape.getAbsoluteScale(), ratio = this.canvas.getPixelRatio(), scaleX = scale.x * ratio, scaleY = scale.y * ratio;
        this.setAttr('shadowColor', color);
        this.setAttr('shadowBlur', blur * Math.min(Math.abs(scaleX), Math.abs(scaleY)));
        this.setAttr('shadowOffsetX', offset.x * scaleX);
        this.setAttr('shadowOffsetY', offset.y * scaleY);
    }
}
class HitContext extends Context_Context {
    _fill(shape) {
        this.save();
        this.setAttr('fillStyle', shape.colorKey);
        shape._fillFuncHit(this);
        this.restore();
    }
    strokeShape(shape) {
        if (shape.hasHitStroke()) {
            this._stroke(shape);
        }
    }
    _stroke(shape) {
        if (shape.hasHitStroke()) {
            var strokeScaleEnabled = shape.getStrokeScaleEnabled();
            if (!strokeScaleEnabled) {
                this.save();
                var pixelRatio = this.getCanvas().getPixelRatio();
                this.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
            }
            this._applyLineCap(shape);
            var hitStrokeWidth = shape.hitStrokeWidth();
            var strokeWidth = hitStrokeWidth === 'auto' ? shape.strokeWidth() : hitStrokeWidth;
            this.setAttr('lineWidth', strokeWidth);
            this.setAttr('strokeStyle', shape.colorKey);
            shape._strokeFuncHit(this);
            if (!strokeScaleEnabled) {
                this.restore();
            }
        }
    }
}

// CONCATENATED MODULE: ./node_modules/konva/lib/Canvas.js





var _pixelRatio;
function getDevicePixelRatio() {
    if (_pixelRatio) {
        return _pixelRatio;
    }
    var canvas = Util.createCanvasElement();
    var context = canvas.getContext('2d');
    _pixelRatio = (function () {
        var devicePixelRatio = Global["a" /* Konva */]._global.devicePixelRatio || 1, backingStoreRatio = context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio ||
            1;
        return devicePixelRatio / backingStoreRatio;
    })();
    return _pixelRatio;
}
class Canvas_Canvas {
    constructor(config) {
        this.pixelRatio = 1;
        this.width = 0;
        this.height = 0;
        this.isCache = false;
        var conf = config || {};
        var pixelRatio = conf.pixelRatio || Global["a" /* Konva */].pixelRatio || getDevicePixelRatio();
        this.pixelRatio = pixelRatio;
        this._canvas = Util.createCanvasElement();
        this._canvas.style.padding = '0';
        this._canvas.style.margin = '0';
        this._canvas.style.border = '0';
        this._canvas.style.background = 'transparent';
        this._canvas.style.position = 'absolute';
        this._canvas.style.top = '0';
        this._canvas.style.left = '0';
    }
    getContext() {
        return this.context;
    }
    getPixelRatio() {
        return this.pixelRatio;
    }
    setPixelRatio(pixelRatio) {
        var previousRatio = this.pixelRatio;
        this.pixelRatio = pixelRatio;
        this.setSize(this.getWidth() / previousRatio, this.getHeight() / previousRatio);
    }
    setWidth(width) {
        this.width = this._canvas.width = width * this.pixelRatio;
        this._canvas.style.width = width + 'px';
        var pixelRatio = this.pixelRatio, _context = this.getContext()._context;
        _context.scale(pixelRatio, pixelRatio);
    }
    setHeight(height) {
        this.height = this._canvas.height = height * this.pixelRatio;
        this._canvas.style.height = height + 'px';
        var pixelRatio = this.pixelRatio, _context = this.getContext()._context;
        _context.scale(pixelRatio, pixelRatio);
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setSize(width, height) {
        this.setWidth(width || 0);
        this.setHeight(height || 0);
    }
    toDataURL(mimeType, quality) {
        try {
            return this._canvas.toDataURL(mimeType, quality);
        }
        catch (e) {
            try {
                return this._canvas.toDataURL();
            }
            catch (err) {
                Util.error('Unable to get data URL. ' +
                    err.message +
                    ' For more info read https://konvajs.org/docs/posts/Tainted_Canvas.html.');
                return '';
            }
        }
    }
}
Factory.addGetterSetter(Canvas_Canvas, 'pixelRatio', undefined, getNumberValidator());
class Canvas_SceneCanvas extends Canvas_Canvas {
    constructor(config = { width: 0, height: 0 }) {
        super(config);
        this.context = new SceneContext(this);
        this.setSize(config.width, config.height);
    }
}
class Canvas_HitCanvas extends Canvas_Canvas {
    constructor(config = { width: 0, height: 0 }) {
        super(config);
        this.hitCanvas = true;
        this.context = new HitContext(this);
        this.setSize(config.width, config.height);
    }
}

// CONCATENATED MODULE: ./node_modules/konva/lib/DragAndDrop.js


const DD = {
    get isDragging() {
        var flag = false;
        DD._dragElements.forEach((elem) => {
            if (elem.dragStatus === 'dragging') {
                flag = true;
            }
        });
        return flag;
    },
    justDragged: false,
    get node() {
        var node;
        DD._dragElements.forEach((elem) => {
            node = elem.node;
        });
        return node;
    },
    _dragElements: new Map(),
    _drag(evt) {
        const nodesToFireEvents = [];
        DD._dragElements.forEach((elem, key) => {
            const { node } = elem;
            const stage = node.getStage();
            stage.setPointersPositions(evt);
            if (elem.pointerId === undefined) {
                elem.pointerId = Util._getFirstPointerId(evt);
            }
            const pos = stage._changedPointerPositions.find((pos) => pos.id === elem.pointerId);
            if (!pos) {
                return;
            }
            if (elem.dragStatus !== 'dragging') {
                var dragDistance = node.dragDistance();
                var distance = Math.max(Math.abs(pos.x - elem.startPointerPos.x), Math.abs(pos.y - elem.startPointerPos.y));
                if (distance < dragDistance) {
                    return;
                }
                node.startDrag({ evt });
                if (!node.isDragging()) {
                    return;
                }
            }
            node._setDragPosition(evt, elem);
            nodesToFireEvents.push(node);
        });
        nodesToFireEvents.forEach((node) => {
            node.fire('dragmove', {
                type: 'dragmove',
                target: node,
                evt: evt,
            }, true);
        });
    },
    _endDragBefore(evt) {
        DD._dragElements.forEach((elem) => {
            const { node } = elem;
            const stage = node.getStage();
            if (evt) {
                stage.setPointersPositions(evt);
            }
            const pos = stage._changedPointerPositions.find((pos) => pos.id === elem.pointerId);
            if (!pos) {
                return;
            }
            if (elem.dragStatus === 'dragging' || elem.dragStatus === 'stopped') {
                DD.justDragged = true;
                Global["a" /* Konva */]._mouseListenClick = false;
                Global["a" /* Konva */]._touchListenClick = false;
                Global["a" /* Konva */]._pointerListenClick = false;
                elem.dragStatus = 'stopped';
            }
            const drawNode = elem.node.getLayer() ||
                (elem.node instanceof Global["a" /* Konva */]['Stage'] && elem.node);
            if (drawNode) {
                drawNode.batchDraw();
            }
        });
    },
    _endDragAfter(evt) {
        DD._dragElements.forEach((elem, key) => {
            if (elem.dragStatus === 'stopped') {
                elem.node.fire('dragend', {
                    type: 'dragend',
                    target: elem.node,
                    evt: evt,
                }, true);
            }
            if (elem.dragStatus !== 'dragging') {
                DD._dragElements.delete(key);
            }
        });
    },
};
if (Global["a" /* Konva */].isBrowser) {
    window.addEventListener('mouseup', DD._endDragBefore, true);
    window.addEventListener('touchend', DD._endDragBefore, true);
    window.addEventListener('mousemove', DD._drag);
    window.addEventListener('touchmove', DD._drag);
    window.addEventListener('mouseup', DD._endDragAfter, false);
    window.addEventListener('touchend', DD._endDragAfter, false);
}

// CONCATENATED MODULE: ./node_modules/konva/lib/Node.js






var ABSOLUTE_OPACITY = 'absoluteOpacity', ALL_LISTENERS = 'allEventListeners', ABSOLUTE_TRANSFORM = 'absoluteTransform', ABSOLUTE_SCALE = 'absoluteScale', CANVAS = 'canvas', CHANGE = 'Change', CHILDREN = 'children', KONVA = 'konva', LISTENING = 'listening', MOUSEENTER = 'mouseenter', MOUSELEAVE = 'mouseleave', NAME = 'name', Node_SET = 'set', SHAPE = 'Shape', SPACE = ' ', STAGE = 'stage', TRANSFORM = 'transform', UPPER_STAGE = 'Stage', VISIBLE = 'visible', TRANSFORM_CHANGE_STR = [
    'xChange.konva',
    'yChange.konva',
    'scaleXChange.konva',
    'scaleYChange.konva',
    'skewXChange.konva',
    'skewYChange.konva',
    'rotationChange.konva',
    'offsetXChange.konva',
    'offsetYChange.konva',
    'transformsEnabledChange.konva',
].join(SPACE);
let idCounter = 1;
class Node_Node {
    constructor(config) {
        this._id = idCounter++;
        this.eventListeners = {};
        this.attrs = {};
        this.index = 0;
        this._allEventListeners = null;
        this.parent = null;
        this._cache = new Map();
        this._attachedDepsListeners = new Map();
        this._lastPos = null;
        this._batchingTransformChange = false;
        this._needClearTransformCache = false;
        this._filterUpToDate = false;
        this._isUnderCache = false;
        this._dragEventId = null;
        this._shouldFireChangeEvents = false;
        this.setAttrs(config);
        this._shouldFireChangeEvents = true;
    }
    hasChildren() {
        return false;
    }
    _clearCache(attr) {
        if ((attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM) &&
            this._cache.get(attr)) {
            this._cache.get(attr).dirty = true;
        }
        else if (attr) {
            this._cache.delete(attr);
        }
        else {
            this._cache.clear();
        }
    }
    _getCache(attr, privateGetter) {
        var cache = this._cache.get(attr);
        var isTransform = attr === TRANSFORM || attr === ABSOLUTE_TRANSFORM;
        var invalid = cache === undefined || (isTransform && cache.dirty === true);
        if (invalid) {
            cache = privateGetter.call(this);
            this._cache.set(attr, cache);
        }
        return cache;
    }
    _calculate(name, deps, getter) {
        if (!this._attachedDepsListeners.get(name)) {
            const depsString = deps.map((dep) => dep + 'Change.konva').join(SPACE);
            this.on(depsString, () => {
                this._clearCache(name);
            });
            this._attachedDepsListeners.set(name, true);
        }
        return this._getCache(name, getter);
    }
    _getCanvasCache() {
        return this._cache.get(CANVAS);
    }
    _clearSelfAndDescendantCache(attr) {
        this._clearCache(attr);
        if (attr === ABSOLUTE_TRANSFORM) {
            this.fire('absoluteTransformChange');
        }
    }
    clearCache() {
        this._cache.delete(CANVAS);
        this._clearSelfAndDescendantCache();
        this._requestDraw();
        return this;
    }
    cache(config) {
        var conf = config || {};
        var rect = {};
        if (conf.x === undefined ||
            conf.y === undefined ||
            conf.width === undefined ||
            conf.height === undefined) {
            rect = this.getClientRect({
                skipTransform: true,
                relativeTo: this.getParent(),
            });
        }
        var width = Math.ceil(conf.width || rect.width), height = Math.ceil(conf.height || rect.height), pixelRatio = conf.pixelRatio, x = conf.x === undefined ? Math.floor(rect.x) : conf.x, y = conf.y === undefined ? Math.floor(rect.y) : conf.y, offset = conf.offset || 0, drawBorder = conf.drawBorder || false, hitCanvasPixelRatio = conf.hitCanvasPixelRatio || 1;
        if (!width || !height) {
            Util.error('Can not cache the node. Width or height of the node equals 0. Caching is skipped.');
            return;
        }
        width += offset * 2 + 1;
        height += offset * 2 + 1;
        x -= offset;
        y -= offset;
        var cachedSceneCanvas = new Canvas_SceneCanvas({
            pixelRatio: pixelRatio,
            width: width,
            height: height,
        }), cachedFilterCanvas = new Canvas_SceneCanvas({
            pixelRatio: pixelRatio,
            width: 0,
            height: 0,
        }), cachedHitCanvas = new Canvas_HitCanvas({
            pixelRatio: hitCanvasPixelRatio,
            width: width,
            height: height,
        }), sceneContext = cachedSceneCanvas.getContext(), hitContext = cachedHitCanvas.getContext();
        cachedHitCanvas.isCache = true;
        cachedSceneCanvas.isCache = true;
        this._cache.delete(CANVAS);
        this._filterUpToDate = false;
        if (conf.imageSmoothingEnabled === false) {
            cachedSceneCanvas.getContext()._context.imageSmoothingEnabled = false;
            cachedFilterCanvas.getContext()._context.imageSmoothingEnabled = false;
        }
        sceneContext.save();
        hitContext.save();
        sceneContext.translate(-x, -y);
        hitContext.translate(-x, -y);
        this._isUnderCache = true;
        this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
        this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
        this.drawScene(cachedSceneCanvas, this);
        this.drawHit(cachedHitCanvas, this);
        this._isUnderCache = false;
        sceneContext.restore();
        hitContext.restore();
        if (drawBorder) {
            sceneContext.save();
            sceneContext.beginPath();
            sceneContext.rect(0, 0, width, height);
            sceneContext.closePath();
            sceneContext.setAttr('strokeStyle', 'red');
            sceneContext.setAttr('lineWidth', 5);
            sceneContext.stroke();
            sceneContext.restore();
        }
        this._cache.set(CANVAS, {
            scene: cachedSceneCanvas,
            filter: cachedFilterCanvas,
            hit: cachedHitCanvas,
            x: x,
            y: y,
        });
        this._requestDraw();
        return this;
    }
    isCached() {
        return this._cache.has(CANVAS);
    }
    getClientRect(config) {
        throw new Error('abstract "getClientRect" method call');
    }
    _transformedRect(rect, top) {
        var points = [
            { x: rect.x, y: rect.y },
            { x: rect.x + rect.width, y: rect.y },
            { x: rect.x + rect.width, y: rect.y + rect.height },
            { x: rect.x, y: rect.y + rect.height },
        ];
        var minX, minY, maxX, maxY;
        var trans = this.getAbsoluteTransform(top);
        points.forEach(function (point) {
            var transformed = trans.point(point);
            if (minX === undefined) {
                minX = maxX = transformed.x;
                minY = maxY = transformed.y;
            }
            minX = Math.min(minX, transformed.x);
            minY = Math.min(minY, transformed.y);
            maxX = Math.max(maxX, transformed.x);
            maxY = Math.max(maxY, transformed.y);
        });
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
        };
    }
    _drawCachedSceneCanvas(context) {
        context.save();
        context._applyOpacity(this);
        context._applyGlobalCompositeOperation(this);
        const canvasCache = this._getCanvasCache();
        context.translate(canvasCache.x, canvasCache.y);
        var cacheCanvas = this._getCachedSceneCanvas();
        var ratio = cacheCanvas.pixelRatio;
        context.drawImage(cacheCanvas._canvas, 0, 0, cacheCanvas.width / ratio, cacheCanvas.height / ratio);
        context.restore();
    }
    _drawCachedHitCanvas(context) {
        var canvasCache = this._getCanvasCache(), hitCanvas = canvasCache.hit;
        context.save();
        context.translate(canvasCache.x, canvasCache.y);
        context.drawImage(hitCanvas._canvas, 0, 0, hitCanvas.width / hitCanvas.pixelRatio, hitCanvas.height / hitCanvas.pixelRatio);
        context.restore();
    }
    _getCachedSceneCanvas() {
        var filters = this.filters(), cachedCanvas = this._getCanvasCache(), sceneCanvas = cachedCanvas.scene, filterCanvas = cachedCanvas.filter, filterContext = filterCanvas.getContext(), len, imageData, n, filter;
        if (filters) {
            if (!this._filterUpToDate) {
                var ratio = sceneCanvas.pixelRatio;
                filterCanvas.setSize(sceneCanvas.width / sceneCanvas.pixelRatio, sceneCanvas.height / sceneCanvas.pixelRatio);
                try {
                    len = filters.length;
                    filterContext.clear();
                    filterContext.drawImage(sceneCanvas._canvas, 0, 0, sceneCanvas.getWidth() / ratio, sceneCanvas.getHeight() / ratio);
                    imageData = filterContext.getImageData(0, 0, filterCanvas.getWidth(), filterCanvas.getHeight());
                    for (n = 0; n < len; n++) {
                        filter = filters[n];
                        if (typeof filter !== 'function') {
                            Util.error('Filter should be type of function, but got ' +
                                typeof filter +
                                ' instead. Please check correct filters');
                            continue;
                        }
                        filter.call(this, imageData);
                        filterContext.putImageData(imageData, 0, 0);
                    }
                }
                catch (e) {
                    Util.error('Unable to apply filter. ' +
                        e.message +
                        ' This post my help you https://konvajs.org/docs/posts/Tainted_Canvas.html.');
                }
                this._filterUpToDate = true;
            }
            return filterCanvas;
        }
        return sceneCanvas;
    }
    on(evtStr, handler) {
        this._cache && this._cache.delete(ALL_LISTENERS);
        if (arguments.length === 3) {
            return this._delegate.apply(this, arguments);
        }
        var events = evtStr.split(SPACE), len = events.length, n, event, parts, baseEvent, name;
        for (n = 0; n < len; n++) {
            event = events[n];
            parts = event.split('.');
            baseEvent = parts[0];
            name = parts[1] || '';
            if (!this.eventListeners[baseEvent]) {
                this.eventListeners[baseEvent] = [];
            }
            this.eventListeners[baseEvent].push({
                name: name,
                handler: handler,
            });
        }
        return this;
    }
    off(evtStr, callback) {
        var events = (evtStr || '').split(SPACE), len = events.length, n, t, event, parts, baseEvent, name;
        this._cache && this._cache.delete(ALL_LISTENERS);
        if (!evtStr) {
            for (t in this.eventListeners) {
                this._off(t);
            }
        }
        for (n = 0; n < len; n++) {
            event = events[n];
            parts = event.split('.');
            baseEvent = parts[0];
            name = parts[1];
            if (baseEvent) {
                if (this.eventListeners[baseEvent]) {
                    this._off(baseEvent, name, callback);
                }
            }
            else {
                for (t in this.eventListeners) {
                    this._off(t, name, callback);
                }
            }
        }
        return this;
    }
    dispatchEvent(evt) {
        var e = {
            target: this,
            type: evt.type,
            evt: evt,
        };
        this.fire(evt.type, e);
        return this;
    }
    addEventListener(type, handler) {
        this.on(type, function (evt) {
            handler.call(this, evt.evt);
        });
        return this;
    }
    removeEventListener(type) {
        this.off(type);
        return this;
    }
    _delegate(event, selector, handler) {
        var stopNode = this;
        this.on(event, function (evt) {
            var targets = evt.target.findAncestors(selector, true, stopNode);
            for (var i = 0; i < targets.length; i++) {
                evt = Util.cloneObject(evt);
                evt.currentTarget = targets[i];
                handler.call(targets[i], evt);
            }
        });
    }
    remove() {
        if (this.isDragging()) {
            this.stopDrag();
        }
        DD._dragElements.delete(this._id);
        this._remove();
        return this;
    }
    _clearCaches() {
        this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
        this._clearSelfAndDescendantCache(ABSOLUTE_SCALE);
        this._clearSelfAndDescendantCache(STAGE);
        this._clearSelfAndDescendantCache(VISIBLE);
        this._clearSelfAndDescendantCache(LISTENING);
    }
    _remove() {
        this._clearCaches();
        var parent = this.getParent();
        if (parent && parent.children) {
            parent.children.splice(this.index, 1);
            parent._setChildrenIndices();
            this.parent = null;
        }
    }
    destroy() {
        this.remove();
        return this;
    }
    getAttr(attr) {
        var method = 'get' + Util._capitalize(attr);
        if (Util._isFunction(this[method])) {
            return this[method]();
        }
        return this.attrs[attr];
    }
    getAncestors() {
        var parent = this.getParent(), ancestors = [];
        while (parent) {
            ancestors.push(parent);
            parent = parent.getParent();
        }
        return ancestors;
    }
    getAttrs() {
        return this.attrs || {};
    }
    setAttrs(config) {
        this._batchTransformChanges(() => {
            var key, method;
            if (!config) {
                return this;
            }
            for (key in config) {
                if (key === CHILDREN) {
                    continue;
                }
                method = Node_SET + Util._capitalize(key);
                if (Util._isFunction(this[method])) {
                    this[method](config[key]);
                }
                else {
                    this._setAttr(key, config[key]);
                }
            }
        });
        return this;
    }
    isListening() {
        return this._getCache(LISTENING, this._isListening);
    }
    _isListening(relativeTo) {
        const listening = this.listening();
        if (!listening) {
            return false;
        }
        const parent = this.getParent();
        if (parent && parent !== relativeTo && this !== relativeTo) {
            return parent._isListening(relativeTo);
        }
        else {
            return true;
        }
    }
    isVisible() {
        return this._getCache(VISIBLE, this._isVisible);
    }
    _isVisible(relativeTo) {
        const visible = this.visible();
        if (!visible) {
            return false;
        }
        const parent = this.getParent();
        if (parent && parent !== relativeTo && this !== relativeTo) {
            return parent._isVisible(relativeTo);
        }
        else {
            return true;
        }
    }
    shouldDrawHit(top, skipDragCheck = false) {
        if (top) {
            return this._isVisible(top) && this._isListening(top);
        }
        var layer = this.getLayer();
        var layerUnderDrag = false;
        DD._dragElements.forEach((elem) => {
            if (elem.dragStatus !== 'dragging') {
                return;
            }
            else if (elem.node.nodeType === 'Stage') {
                layerUnderDrag = true;
            }
            else if (elem.node.getLayer() === layer) {
                layerUnderDrag = true;
            }
        });
        var dragSkip = !skipDragCheck && !Global["a" /* Konva */].hitOnDragEnabled && layerUnderDrag;
        return this.isListening() && this.isVisible() && !dragSkip;
    }
    show() {
        this.visible(true);
        return this;
    }
    hide() {
        this.visible(false);
        return this;
    }
    getZIndex() {
        return this.index || 0;
    }
    getAbsoluteZIndex() {
        var depth = this.getDepth(), that = this, index = 0, nodes, len, n, child;
        function addChildren(children) {
            nodes = [];
            len = children.length;
            for (n = 0; n < len; n++) {
                child = children[n];
                index++;
                if (child.nodeType !== SHAPE) {
                    nodes = nodes.concat(child.getChildren().slice());
                }
                if (child._id === that._id) {
                    n = len;
                }
            }
            if (nodes.length > 0 && nodes[0].getDepth() <= depth) {
                addChildren(nodes);
            }
        }
        if (that.nodeType !== UPPER_STAGE) {
            addChildren(that.getStage().getChildren());
        }
        return index;
    }
    getDepth() {
        var depth = 0, parent = this.parent;
        while (parent) {
            depth++;
            parent = parent.parent;
        }
        return depth;
    }
    _batchTransformChanges(func) {
        this._batchingTransformChange = true;
        func();
        this._batchingTransformChange = false;
        if (this._needClearTransformCache) {
            this._clearCache(TRANSFORM);
            this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        }
        this._needClearTransformCache = false;
    }
    setPosition(pos) {
        this._batchTransformChanges(() => {
            this.x(pos.x);
            this.y(pos.y);
        });
        return this;
    }
    getPosition() {
        return {
            x: this.x(),
            y: this.y(),
        };
    }
    getRelativePointerPosition() {
        if (!this.getStage()) {
            return null;
        }
        var pos = this.getStage().getPointerPosition();
        if (!pos) {
            return null;
        }
        var transform = this.getAbsoluteTransform().copy();
        transform.invert();
        return transform.point(pos);
    }
    getAbsolutePosition(top) {
        let haveCachedParent = false;
        let parent = this.parent;
        while (parent) {
            if (parent.isCached()) {
                haveCachedParent = true;
                break;
            }
            parent = parent.parent;
        }
        if (haveCachedParent && !top) {
            top = true;
        }
        var absoluteMatrix = this.getAbsoluteTransform(top).getMatrix(), absoluteTransform = new Transform(), offset = this.offset();
        absoluteTransform.m = absoluteMatrix.slice();
        absoluteTransform.translate(offset.x, offset.y);
        return absoluteTransform.getTranslation();
    }
    setAbsolutePosition(pos) {
        var origTrans = this._clearTransform();
        this.attrs.x = origTrans.x;
        this.attrs.y = origTrans.y;
        delete origTrans.x;
        delete origTrans.y;
        this._clearCache(TRANSFORM);
        var it = this._getAbsoluteTransform().copy();
        it.invert();
        it.translate(pos.x, pos.y);
        pos = {
            x: this.attrs.x + it.getTranslation().x,
            y: this.attrs.y + it.getTranslation().y,
        };
        this._setTransform(origTrans);
        this.setPosition({ x: pos.x, y: pos.y });
        this._clearCache(TRANSFORM);
        this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
        return this;
    }
    _setTransform(trans) {
        var key;
        for (key in trans) {
            this.attrs[key] = trans[key];
        }
    }
    _clearTransform() {
        var trans = {
            x: this.x(),
            y: this.y(),
            rotation: this.rotation(),
            scaleX: this.scaleX(),
            scaleY: this.scaleY(),
            offsetX: this.offsetX(),
            offsetY: this.offsetY(),
            skewX: this.skewX(),
            skewY: this.skewY(),
        };
        this.attrs.x = 0;
        this.attrs.y = 0;
        this.attrs.rotation = 0;
        this.attrs.scaleX = 1;
        this.attrs.scaleY = 1;
        this.attrs.offsetX = 0;
        this.attrs.offsetY = 0;
        this.attrs.skewX = 0;
        this.attrs.skewY = 0;
        return trans;
    }
    move(change) {
        var changeX = change.x, changeY = change.y, x = this.x(), y = this.y();
        if (changeX !== undefined) {
            x += changeX;
        }
        if (changeY !== undefined) {
            y += changeY;
        }
        this.setPosition({ x: x, y: y });
        return this;
    }
    _eachAncestorReverse(func, top) {
        var family = [], parent = this.getParent(), len, n;
        if (top && top._id === this._id) {
            return;
        }
        family.unshift(this);
        while (parent && (!top || parent._id !== top._id)) {
            family.unshift(parent);
            parent = parent.parent;
        }
        len = family.length;
        for (n = 0; n < len; n++) {
            func(family[n]);
        }
    }
    rotate(theta) {
        this.rotation(this.rotation() + theta);
        return this;
    }
    moveToTop() {
        if (!this.parent) {
            Util.warn('Node has no parent. moveToTop function is ignored.');
            return false;
        }
        var index = this.index, len = this.parent.getChildren().length;
        if (index < len - 1) {
            this.parent.children.splice(index, 1);
            this.parent.children.push(this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    }
    moveUp() {
        if (!this.parent) {
            Util.warn('Node has no parent. moveUp function is ignored.');
            return false;
        }
        var index = this.index, len = this.parent.getChildren().length;
        if (index < len - 1) {
            this.parent.children.splice(index, 1);
            this.parent.children.splice(index + 1, 0, this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    }
    moveDown() {
        if (!this.parent) {
            Util.warn('Node has no parent. moveDown function is ignored.');
            return false;
        }
        var index = this.index;
        if (index > 0) {
            this.parent.children.splice(index, 1);
            this.parent.children.splice(index - 1, 0, this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    }
    moveToBottom() {
        if (!this.parent) {
            Util.warn('Node has no parent. moveToBottom function is ignored.');
            return false;
        }
        var index = this.index;
        if (index > 0) {
            this.parent.children.splice(index, 1);
            this.parent.children.unshift(this);
            this.parent._setChildrenIndices();
            return true;
        }
        return false;
    }
    setZIndex(zIndex) {
        if (!this.parent) {
            Util.warn('Node has no parent. zIndex parameter is ignored.');
            return this;
        }
        if (zIndex < 0 || zIndex >= this.parent.children.length) {
            Util.warn('Unexpected value ' +
                zIndex +
                ' for zIndex property. zIndex is just index of a node in children of its parent. Expected value is from 0 to ' +
                (this.parent.children.length - 1) +
                '.');
        }
        var index = this.index;
        this.parent.children.splice(index, 1);
        this.parent.children.splice(zIndex, 0, this);
        this.parent._setChildrenIndices();
        return this;
    }
    getAbsoluteOpacity() {
        return this._getCache(ABSOLUTE_OPACITY, this._getAbsoluteOpacity);
    }
    _getAbsoluteOpacity() {
        var absOpacity = this.opacity();
        var parent = this.getParent();
        if (parent && !parent._isUnderCache) {
            absOpacity *= parent.getAbsoluteOpacity();
        }
        return absOpacity;
    }
    moveTo(newContainer) {
        if (this.getParent() !== newContainer) {
            this._remove();
            newContainer.add(this);
        }
        return this;
    }
    toObject() {
        var obj = {}, attrs = this.getAttrs(), key, val, getter, defaultValue, nonPlainObject;
        obj.attrs = {};
        for (key in attrs) {
            val = attrs[key];
            nonPlainObject =
                Util.isObject(val) && !Util._isPlainObject(val) && !Util._isArray(val);
            if (nonPlainObject) {
                continue;
            }
            getter = typeof this[key] === 'function' && this[key];
            delete attrs[key];
            defaultValue = getter ? getter.call(this) : null;
            attrs[key] = val;
            if (defaultValue !== val) {
                obj.attrs[key] = val;
            }
        }
        obj.className = this.getClassName();
        return Util._prepareToStringify(obj);
    }
    toJSON() {
        return JSON.stringify(this.toObject());
    }
    getParent() {
        return this.parent;
    }
    findAncestors(selector, includeSelf, stopNode) {
        var res = [];
        if (includeSelf && this._isMatch(selector)) {
            res.push(this);
        }
        var ancestor = this.parent;
        while (ancestor) {
            if (ancestor === stopNode) {
                return res;
            }
            if (ancestor._isMatch(selector)) {
                res.push(ancestor);
            }
            ancestor = ancestor.parent;
        }
        return res;
    }
    isAncestorOf(node) {
        return false;
    }
    findAncestor(selector, includeSelf, stopNode) {
        return this.findAncestors(selector, includeSelf, stopNode)[0];
    }
    _isMatch(selector) {
        if (!selector) {
            return false;
        }
        if (typeof selector === 'function') {
            return selector(this);
        }
        var selectorArr = selector.replace(/ /g, '').split(','), len = selectorArr.length, n, sel;
        for (n = 0; n < len; n++) {
            sel = selectorArr[n];
            if (!Util.isValidSelector(sel)) {
                Util.warn('Selector "' +
                    sel +
                    '" is invalid. Allowed selectors examples are "#foo", ".bar" or "Group".');
                Util.warn('If you have a custom shape with such className, please change it to start with upper letter like "Triangle".');
                Util.warn('Konva is awesome, right?');
            }
            if (sel.charAt(0) === '#') {
                if (this.id() === sel.slice(1)) {
                    return true;
                }
            }
            else if (sel.charAt(0) === '.') {
                if (this.hasName(sel.slice(1))) {
                    return true;
                }
            }
            else if (this.className === sel || this.nodeType === sel) {
                return true;
            }
        }
        return false;
    }
    getLayer() {
        var parent = this.getParent();
        return parent ? parent.getLayer() : null;
    }
    getStage() {
        return this._getCache(STAGE, this._getStage);
    }
    _getStage() {
        var parent = this.getParent();
        if (parent) {
            return parent.getStage();
        }
        else {
            return undefined;
        }
    }
    fire(eventType, evt = {}, bubble) {
        evt.target = evt.target || this;
        if (bubble) {
            this._fireAndBubble(eventType, evt);
        }
        else {
            this._fire(eventType, evt);
        }
        return this;
    }
    getAbsoluteTransform(top) {
        if (top) {
            return this._getAbsoluteTransform(top);
        }
        else {
            return this._getCache(ABSOLUTE_TRANSFORM, this._getAbsoluteTransform);
        }
    }
    _getAbsoluteTransform(top) {
        var at;
        if (top) {
            at = new Transform();
            this._eachAncestorReverse(function (node) {
                var transformsEnabled = node.transformsEnabled();
                if (transformsEnabled === 'all') {
                    at.multiply(node.getTransform());
                }
                else if (transformsEnabled === 'position') {
                    at.translate(node.x() - node.offsetX(), node.y() - node.offsetY());
                }
            }, top);
            return at;
        }
        else {
            at = this._cache.get(ABSOLUTE_TRANSFORM) || new Transform();
            if (this.parent) {
                this.parent.getAbsoluteTransform().copyInto(at);
            }
            else {
                at.reset();
            }
            var transformsEnabled = this.transformsEnabled();
            if (transformsEnabled === 'all') {
                at.multiply(this.getTransform());
            }
            else if (transformsEnabled === 'position') {
                const x = this.attrs.x || 0;
                const y = this.attrs.y || 0;
                const offsetX = this.attrs.offsetX || 0;
                const offsetY = this.attrs.offsetY || 0;
                at.translate(x - offsetX, y - offsetY);
            }
            at.dirty = false;
            return at;
        }
    }
    getAbsoluteScale(top) {
        var parent = this;
        while (parent) {
            if (parent._isUnderCache) {
                top = parent;
            }
            parent = parent.getParent();
        }
        const transform = this.getAbsoluteTransform(top);
        const attrs = transform.decompose();
        return {
            x: attrs.scaleX,
            y: attrs.scaleY,
        };
    }
    getAbsoluteRotation() {
        return this.getAbsoluteTransform().decompose().rotation;
    }
    getTransform() {
        return this._getCache(TRANSFORM, this._getTransform);
    }
    _getTransform() {
        var _a, _b;
        var m = this._cache.get(TRANSFORM) || new Transform();
        m.reset();
        var x = this.x(), y = this.y(), rotation = Global["a" /* Konva */].getAngle(this.rotation()), scaleX = (_a = this.attrs.scaleX) !== null && _a !== void 0 ? _a : 1, scaleY = (_b = this.attrs.scaleY) !== null && _b !== void 0 ? _b : 1, skewX = this.attrs.skewX || 0, skewY = this.attrs.skewY || 0, offsetX = this.attrs.offsetX || 0, offsetY = this.attrs.offsetY || 0;
        if (x !== 0 || y !== 0) {
            m.translate(x, y);
        }
        if (rotation !== 0) {
            m.rotate(rotation);
        }
        if (skewX !== 0 || skewY !== 0) {
            m.skew(skewX, skewY);
        }
        if (scaleX !== 1 || scaleY !== 1) {
            m.scale(scaleX, scaleY);
        }
        if (offsetX !== 0 || offsetY !== 0) {
            m.translate(-1 * offsetX, -1 * offsetY);
        }
        m.dirty = false;
        return m;
    }
    clone(obj) {
        var attrs = Util.cloneObject(this.attrs), key, allListeners, len, n, listener;
        for (key in obj) {
            attrs[key] = obj[key];
        }
        var node = new this.constructor(attrs);
        for (key in this.eventListeners) {
            allListeners = this.eventListeners[key];
            len = allListeners.length;
            for (n = 0; n < len; n++) {
                listener = allListeners[n];
                if (listener.name.indexOf(KONVA) < 0) {
                    if (!node.eventListeners[key]) {
                        node.eventListeners[key] = [];
                    }
                    node.eventListeners[key].push(listener);
                }
            }
        }
        return node;
    }
    _toKonvaCanvas(config) {
        config = config || {};
        var box = this.getClientRect();
        var stage = this.getStage(), x = config.x !== undefined ? config.x : Math.floor(box.x), y = config.y !== undefined ? config.y : Math.floor(box.y), pixelRatio = config.pixelRatio || 1, canvas = new Canvas_SceneCanvas({
            width: config.width || Math.ceil(box.width) || (stage ? stage.width() : 0),
            height: config.height ||
                Math.ceil(box.height) ||
                (stage ? stage.height() : 0),
            pixelRatio: pixelRatio,
        }), context = canvas.getContext();
        if (config.imageSmoothingEnabled === false) {
            context._context.imageSmoothingEnabled = false;
        }
        context.save();
        if (x || y) {
            context.translate(-1 * x, -1 * y);
        }
        this.drawScene(canvas);
        context.restore();
        return canvas;
    }
    toCanvas(config) {
        return this._toKonvaCanvas(config)._canvas;
    }
    toDataURL(config) {
        config = config || {};
        var mimeType = config.mimeType || null, quality = config.quality || null;
        var url = this._toKonvaCanvas(config).toDataURL(mimeType, quality);
        if (config.callback) {
            config.callback(url);
        }
        return url;
    }
    toImage(config) {
        if (!config || !config.callback) {
            throw 'callback required for toImage method config argument';
        }
        var callback = config.callback;
        delete config.callback;
        Util._urlToImage(this.toDataURL(config), function (img) {
            callback(img);
        });
    }
    setSize(size) {
        this.width(size.width);
        this.height(size.height);
        return this;
    }
    getSize() {
        return {
            width: this.width(),
            height: this.height(),
        };
    }
    getClassName() {
        return this.className || this.nodeType;
    }
    getType() {
        return this.nodeType;
    }
    getDragDistance() {
        if (this.attrs.dragDistance !== undefined) {
            return this.attrs.dragDistance;
        }
        else if (this.parent) {
            return this.parent.getDragDistance();
        }
        else {
            return Global["a" /* Konva */].dragDistance;
        }
    }
    _off(type, name, callback) {
        var evtListeners = this.eventListeners[type], i, evtName, handler;
        for (i = 0; i < evtListeners.length; i++) {
            evtName = evtListeners[i].name;
            handler = evtListeners[i].handler;
            if ((evtName !== 'konva' || name === 'konva') &&
                (!name || evtName === name) &&
                (!callback || callback === handler)) {
                evtListeners.splice(i, 1);
                if (evtListeners.length === 0) {
                    delete this.eventListeners[type];
                    break;
                }
                i--;
            }
        }
    }
    _fireChangeEvent(attr, oldVal, newVal) {
        this._fire(attr + CHANGE, {
            oldVal: oldVal,
            newVal: newVal,
        });
    }
    addName(name) {
        if (!this.hasName(name)) {
            var oldName = this.name();
            var newName = oldName ? oldName + ' ' + name : name;
            this.name(newName);
        }
        return this;
    }
    hasName(name) {
        if (!name) {
            return false;
        }
        const fullName = this.name();
        if (!fullName) {
            return false;
        }
        var names = (fullName || '').split(/\s/g);
        return names.indexOf(name) !== -1;
    }
    removeName(name) {
        var names = (this.name() || '').split(/\s/g);
        var index = names.indexOf(name);
        if (index !== -1) {
            names.splice(index, 1);
            this.name(names.join(' '));
        }
        return this;
    }
    setAttr(attr, val) {
        var func = this[Node_SET + Util._capitalize(attr)];
        if (Util._isFunction(func)) {
            func.call(this, val);
        }
        else {
            this._setAttr(attr, val);
        }
        return this;
    }
    _requestDraw() {
        if (Global["a" /* Konva */].autoDrawEnabled) {
            const drawNode = this.getLayer() || this.getStage();
            drawNode === null || drawNode === void 0 ? void 0 : drawNode.batchDraw();
        }
    }
    _setAttr(key, val) {
        var oldVal = this.attrs[key];
        if (oldVal === val && !Util.isObject(val)) {
            return;
        }
        if (val === undefined || val === null) {
            delete this.attrs[key];
        }
        else {
            this.attrs[key] = val;
        }
        if (this._shouldFireChangeEvents) {
            this._fireChangeEvent(key, oldVal, val);
        }
        this._requestDraw();
    }
    _setComponentAttr(key, component, val) {
        var oldVal;
        if (val !== undefined) {
            oldVal = this.attrs[key];
            if (!oldVal) {
                this.attrs[key] = this.getAttr(key);
            }
            this.attrs[key][component] = val;
            this._fireChangeEvent(key, oldVal, val);
        }
    }
    _fireAndBubble(eventType, evt, compareShape) {
        if (evt && this.nodeType === SHAPE) {
            evt.target = this;
        }
        var shouldStop = (eventType === MOUSEENTER || eventType === MOUSELEAVE) &&
            ((compareShape &&
                (this === compareShape ||
                    (this.isAncestorOf && this.isAncestorOf(compareShape)))) ||
                (this.nodeType === 'Stage' && !compareShape));
        if (!shouldStop) {
            this._fire(eventType, evt);
            var stopBubble = (eventType === MOUSEENTER || eventType === MOUSELEAVE) &&
                compareShape &&
                compareShape.isAncestorOf &&
                compareShape.isAncestorOf(this) &&
                !compareShape.isAncestorOf(this.parent);
            if (((evt && !evt.cancelBubble) || !evt) &&
                this.parent &&
                this.parent.isListening() &&
                !stopBubble) {
                if (compareShape && compareShape.parent) {
                    this._fireAndBubble.call(this.parent, eventType, evt, compareShape);
                }
                else {
                    this._fireAndBubble.call(this.parent, eventType, evt);
                }
            }
        }
    }
    _getProtoListeners(eventType) {
        let listeners = this._cache.get(ALL_LISTENERS);
        if (!listeners) {
            listeners = {};
            let obj = Object.getPrototypeOf(this);
            while (obj) {
                if (!obj.eventListeners) {
                    obj = Object.getPrototypeOf(obj);
                    continue;
                }
                for (var event in obj.eventListeners) {
                    const newEvents = obj.eventListeners[event];
                    const oldEvents = listeners[event] || [];
                    listeners[event] = newEvents.concat(oldEvents);
                }
                obj = Object.getPrototypeOf(obj);
            }
            this._cache.set(ALL_LISTENERS, listeners);
        }
        return listeners[eventType];
    }
    _fire(eventType, evt) {
        evt = evt || {};
        evt.currentTarget = this;
        evt.type = eventType;
        const topListeners = this._getProtoListeners(eventType);
        if (topListeners) {
            for (var i = 0; i < topListeners.length; i++) {
                topListeners[i].handler.call(this, evt);
            }
        }
        const selfListeners = this.eventListeners[eventType];
        if (selfListeners) {
            for (var i = 0; i < selfListeners.length; i++) {
                selfListeners[i].handler.call(this, evt);
            }
        }
    }
    draw() {
        this.drawScene();
        this.drawHit();
        return this;
    }
    _createDragElement(evt) {
        var pointerId = evt ? evt.pointerId : undefined;
        var stage = this.getStage();
        var ap = this.getAbsolutePosition();
        var pos = stage._getPointerById(pointerId) ||
            stage._changedPointerPositions[0] ||
            ap;
        DD._dragElements.set(this._id, {
            node: this,
            startPointerPos: pos,
            offset: {
                x: pos.x - ap.x,
                y: pos.y - ap.y,
            },
            dragStatus: 'ready',
            pointerId,
        });
    }
    startDrag(evt, bubbleEvent = true) {
        if (!DD._dragElements.has(this._id)) {
            this._createDragElement(evt);
        }
        const elem = DD._dragElements.get(this._id);
        elem.dragStatus = 'dragging';
        this.fire('dragstart', {
            type: 'dragstart',
            target: this,
            evt: evt && evt.evt,
        }, bubbleEvent);
    }
    _setDragPosition(evt, elem) {
        const pos = this.getStage()._getPointerById(elem.pointerId);
        if (!pos) {
            return;
        }
        var newNodePos = {
            x: pos.x - elem.offset.x,
            y: pos.y - elem.offset.y,
        };
        var dbf = this.dragBoundFunc();
        if (dbf !== undefined) {
            const bounded = dbf.call(this, newNodePos, evt);
            if (!bounded) {
                Util.warn('dragBoundFunc did not return any value. That is unexpected behavior. You must return new absolute position from dragBoundFunc.');
            }
            else {
                newNodePos = bounded;
            }
        }
        if (!this._lastPos ||
            this._lastPos.x !== newNodePos.x ||
            this._lastPos.y !== newNodePos.y) {
            this.setAbsolutePosition(newNodePos);
            this._requestDraw();
        }
        this._lastPos = newNodePos;
    }
    stopDrag(evt) {
        const elem = DD._dragElements.get(this._id);
        if (elem) {
            elem.dragStatus = 'stopped';
        }
        DD._endDragBefore(evt);
        DD._endDragAfter(evt);
    }
    setDraggable(draggable) {
        this._setAttr('draggable', draggable);
        this._dragChange();
    }
    isDragging() {
        const elem = DD._dragElements.get(this._id);
        return elem ? elem.dragStatus === 'dragging' : false;
    }
    _listenDrag() {
        this._dragCleanup();
        this.on('mousedown.konva touchstart.konva', function (evt) {
            var shouldCheckButton = evt.evt['button'] !== undefined;
            var canDrag = !shouldCheckButton || Global["a" /* Konva */].dragButtons.indexOf(evt.evt['button']) >= 0;
            if (!canDrag) {
                return;
            }
            if (this.isDragging()) {
                return;
            }
            var hasDraggingChild = false;
            DD._dragElements.forEach((elem) => {
                if (this.isAncestorOf(elem.node)) {
                    hasDraggingChild = true;
                }
            });
            if (!hasDraggingChild) {
                this._createDragElement(evt);
            }
        });
    }
    _dragChange() {
        if (this.attrs.draggable) {
            this._listenDrag();
        }
        else {
            this._dragCleanup();
            var stage = this.getStage();
            if (!stage) {
                return;
            }
            const dragElement = DD._dragElements.get(this._id);
            const isDragging = dragElement && dragElement.dragStatus === 'dragging';
            const isReady = dragElement && dragElement.dragStatus === 'ready';
            if (isDragging) {
                this.stopDrag();
            }
            else if (isReady) {
                DD._dragElements.delete(this._id);
            }
        }
    }
    _dragCleanup() {
        this.off('mousedown.konva');
        this.off('touchstart.konva');
    }
    isClientRectOnScreen(margin = { x: 0, y: 0 }) {
        const stage = this.getStage();
        if (!stage) {
            return false;
        }
        const screenRect = {
            x: -margin.x,
            y: -margin.y,
            width: stage.width() + 2 * margin.x,
            height: stage.height() + 2 * margin.y,
        };
        return Util.haveIntersection(screenRect, this.getClientRect());
    }
    static create(data, container) {
        if (Util._isString(data)) {
            data = JSON.parse(data);
        }
        return this._createNode(data, container);
    }
    static _createNode(obj, container) {
        var className = Node_Node.prototype.getClassName.call(obj), children = obj.children, no, len, n;
        if (container) {
            obj.attrs.container = container;
        }
        if (!Global["a" /* Konva */][className]) {
            Util.warn('Can not find a node with class name "' +
                className +
                '". Fallback to "Shape".');
            className = 'Shape';
        }
        const Class = Global["a" /* Konva */][className];
        no = new Class(obj.attrs);
        if (children) {
            len = children.length;
            for (n = 0; n < len; n++) {
                no.add(Node_Node._createNode(children[n]));
            }
        }
        return no;
    }
}
Node_Node.prototype.nodeType = 'Node';
Node_Node.prototype._attrsAffectingSize = [];
Node_Node.prototype.eventListeners = {};
Node_Node.prototype.on.call(Node_Node.prototype, TRANSFORM_CHANGE_STR, function () {
    if (this._batchingTransformChange) {
        this._needClearTransformCache = true;
        return;
    }
    this._clearCache(TRANSFORM);
    this._clearSelfAndDescendantCache(ABSOLUTE_TRANSFORM);
});
Node_Node.prototype.on.call(Node_Node.prototype, 'visibleChange.konva', function () {
    this._clearSelfAndDescendantCache(VISIBLE);
});
Node_Node.prototype.on.call(Node_Node.prototype, 'listeningChange.konva', function () {
    this._clearSelfAndDescendantCache(LISTENING);
});
Node_Node.prototype.on.call(Node_Node.prototype, 'opacityChange.konva', function () {
    this._clearSelfAndDescendantCache(ABSOLUTE_OPACITY);
});
const addGetterSetter = Factory.addGetterSetter;
addGetterSetter(Node_Node, 'zIndex');
addGetterSetter(Node_Node, 'absolutePosition');
addGetterSetter(Node_Node, 'position');
addGetterSetter(Node_Node, 'x', 0, getNumberValidator());
addGetterSetter(Node_Node, 'y', 0, getNumberValidator());
addGetterSetter(Node_Node, 'globalCompositeOperation', 'source-over', getStringValidator());
addGetterSetter(Node_Node, 'opacity', 1, getNumberValidator());
addGetterSetter(Node_Node, 'name', '', getStringValidator());
addGetterSetter(Node_Node, 'id', '', getStringValidator());
addGetterSetter(Node_Node, 'rotation', 0, getNumberValidator());
Factory.addComponentsGetterSetter(Node_Node, 'scale', ['x', 'y']);
addGetterSetter(Node_Node, 'scaleX', 1, getNumberValidator());
addGetterSetter(Node_Node, 'scaleY', 1, getNumberValidator());
Factory.addComponentsGetterSetter(Node_Node, 'skew', ['x', 'y']);
addGetterSetter(Node_Node, 'skewX', 0, getNumberValidator());
addGetterSetter(Node_Node, 'skewY', 0, getNumberValidator());
Factory.addComponentsGetterSetter(Node_Node, 'offset', ['x', 'y']);
addGetterSetter(Node_Node, 'offsetX', 0, getNumberValidator());
addGetterSetter(Node_Node, 'offsetY', 0, getNumberValidator());
addGetterSetter(Node_Node, 'dragDistance', null, getNumberValidator());
addGetterSetter(Node_Node, 'width', 0, getNumberValidator());
addGetterSetter(Node_Node, 'height', 0, getNumberValidator());
addGetterSetter(Node_Node, 'listening', true, getBooleanValidator());
addGetterSetter(Node_Node, 'preventDefault', true, getBooleanValidator());
addGetterSetter(Node_Node, 'filters', null, function (val) {
    this._filterUpToDate = false;
    return val;
});
addGetterSetter(Node_Node, 'visible', true, getBooleanValidator());
addGetterSetter(Node_Node, 'transformsEnabled', 'all', getStringValidator());
addGetterSetter(Node_Node, 'size');
addGetterSetter(Node_Node, 'dragBoundFunc');
addGetterSetter(Node_Node, 'draggable', false, getBooleanValidator());
Factory.backCompat(Node_Node, {
    rotateDeg: 'rotate',
    setRotationDeg: 'setRotation',
    getRotationDeg: 'getRotation',
});

// CONCATENATED MODULE: ./node_modules/konva/lib/Container.js



class Container_Container extends Node_Node {
    constructor() {
        super(...arguments);
        this.children = [];
    }
    getChildren(filterFunc) {
        if (!filterFunc) {
            return this.children || [];
        }
        const children = this.children || [];
        var results = [];
        children.forEach(function (child) {
            if (filterFunc(child)) {
                results.push(child);
            }
        });
        return results;
    }
    hasChildren() {
        return this.getChildren().length > 0;
    }
    removeChildren() {
        this.getChildren().forEach((child) => {
            child.parent = null;
            child.index = 0;
            child.remove();
        });
        this.children = [];
        this._requestDraw();
        return this;
    }
    destroyChildren() {
        this.getChildren().forEach((child) => {
            child.parent = null;
            child.index = 0;
            child.destroy();
        });
        this.children = [];
        this._requestDraw();
        return this;
    }
    add(...children) {
        if (arguments.length > 1) {
            for (var i = 0; i < arguments.length; i++) {
                this.add(arguments[i]);
            }
            return this;
        }
        var child = children[0];
        if (child.getParent()) {
            child.moveTo(this);
            return this;
        }
        this._validateAdd(child);
        child.index = this.getChildren().length;
        child.parent = this;
        child._clearCaches();
        this.getChildren().push(child);
        this._fire('add', {
            child: child,
        });
        this._requestDraw();
        return this;
    }
    destroy() {
        if (this.hasChildren()) {
            this.destroyChildren();
        }
        super.destroy();
        return this;
    }
    find(selector) {
        return this._generalFind(selector, false);
    }
    findOne(selector) {
        var result = this._generalFind(selector, true);
        return result.length > 0 ? result[0] : undefined;
    }
    _generalFind(selector, findOne) {
        var retArr = [];
        this._descendants((node) => {
            const valid = node._isMatch(selector);
            if (valid) {
                retArr.push(node);
            }
            if (valid && findOne) {
                return true;
            }
            return false;
        });
        return retArr;
    }
    _descendants(fn) {
        let shouldStop = false;
        const children = this.getChildren();
        for (const child of children) {
            shouldStop = fn(child);
            if (shouldStop) {
                return true;
            }
            if (!child.hasChildren()) {
                continue;
            }
            shouldStop = child._descendants(fn);
            if (shouldStop) {
                return true;
            }
        }
        return false;
    }
    toObject() {
        var obj = Node_Node.prototype.toObject.call(this);
        obj.children = [];
        this.getChildren().forEach((child) => {
            obj.children.push(child.toObject());
        });
        return obj;
    }
    isAncestorOf(node) {
        var parent = node.getParent();
        while (parent) {
            if (parent._id === this._id) {
                return true;
            }
            parent = parent.getParent();
        }
        return false;
    }
    clone(obj) {
        var node = Node_Node.prototype.clone.call(this, obj);
        this.getChildren().forEach(function (no) {
            node.add(no.clone());
        });
        return node;
    }
    getAllIntersections(pos) {
        var arr = [];
        this.find('Shape').forEach(function (shape) {
            if (shape.isVisible() && shape.intersects(pos)) {
                arr.push(shape);
            }
        });
        return arr;
    }
    _clearSelfAndDescendantCache(attr) {
        var _a;
        super._clearSelfAndDescendantCache(attr);
        if (this.isCached()) {
            return;
        }
        (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function (node) {
            node._clearSelfAndDescendantCache(attr);
        });
    }
    _setChildrenIndices() {
        var _a;
        (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child, n) {
            child.index = n;
        });
        this._requestDraw();
    }
    drawScene(can, top) {
        var layer = this.getLayer(), canvas = can || (layer && layer.getCanvas()), context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedSceneCanvas = cachedCanvas && cachedCanvas.scene;
        var caching = canvas && canvas.isCache;
        if (!this.isVisible() && !caching) {
            return this;
        }
        if (cachedSceneCanvas) {
            context.save();
            var m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedSceneCanvas(context);
            context.restore();
        }
        else {
            this._drawChildren('drawScene', canvas, top);
        }
        return this;
    }
    drawHit(can, top) {
        if (!this.shouldDrawHit(top)) {
            return this;
        }
        var layer = this.getLayer(), canvas = can || (layer && layer.hitCanvas), context = canvas && canvas.getContext(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
        if (cachedHitCanvas) {
            context.save();
            var m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedHitCanvas(context);
            context.restore();
        }
        else {
            this._drawChildren('drawHit', canvas, top);
        }
        return this;
    }
    _drawChildren(drawMethod, canvas, top) {
        var _a;
        var context = canvas && canvas.getContext(), clipWidth = this.clipWidth(), clipHeight = this.clipHeight(), clipFunc = this.clipFunc(), hasClip = (clipWidth && clipHeight) || clipFunc;
        const selfCache = top === this;
        if (hasClip) {
            context.save();
            var transform = this.getAbsoluteTransform(top);
            var m = transform.getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            context.beginPath();
            if (clipFunc) {
                clipFunc.call(this, context, this);
            }
            else {
                var clipX = this.clipX();
                var clipY = this.clipY();
                context.rect(clipX, clipY, clipWidth, clipHeight);
            }
            context.clip();
            m = transform.copy().invert().getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
        }
        var hasComposition = !selfCache &&
            this.globalCompositeOperation() !== 'source-over' &&
            drawMethod === 'drawScene';
        if (hasComposition) {
            context.save();
            context._applyGlobalCompositeOperation(this);
        }
        (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            child[drawMethod](canvas, top);
        });
        if (hasComposition) {
            context.restore();
        }
        if (hasClip) {
            context.restore();
        }
    }
    getClientRect(config) {
        var _a;
        config = config || {};
        var skipTransform = config.skipTransform;
        var relativeTo = config.relativeTo;
        var minX, minY, maxX, maxY;
        var selfRect = {
            x: Infinity,
            y: Infinity,
            width: 0,
            height: 0,
        };
        var that = this;
        (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach(function (child) {
            if (!child.visible()) {
                return;
            }
            var rect = child.getClientRect({
                relativeTo: that,
                skipShadow: config.skipShadow,
                skipStroke: config.skipStroke,
            });
            if (rect.width === 0 && rect.height === 0) {
                return;
            }
            if (minX === undefined) {
                minX = rect.x;
                minY = rect.y;
                maxX = rect.x + rect.width;
                maxY = rect.y + rect.height;
            }
            else {
                minX = Math.min(minX, rect.x);
                minY = Math.min(minY, rect.y);
                maxX = Math.max(maxX, rect.x + rect.width);
                maxY = Math.max(maxY, rect.y + rect.height);
            }
        });
        var shapes = this.find('Shape');
        var hasVisible = false;
        for (var i = 0; i < shapes.length; i++) {
            var shape = shapes[i];
            if (shape._isVisible(this)) {
                hasVisible = true;
                break;
            }
        }
        if (hasVisible && minX !== undefined) {
            selfRect = {
                x: minX,
                y: minY,
                width: maxX - minX,
                height: maxY - minY,
            };
        }
        else {
            selfRect = {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            };
        }
        if (!skipTransform) {
            return this._transformedRect(selfRect, relativeTo);
        }
        return selfRect;
    }
}
Factory.addComponentsGetterSetter(Container_Container, 'clip', [
    'x',
    'y',
    'width',
    'height',
]);
Factory.addGetterSetter(Container_Container, 'clipX', undefined, getNumberValidator());
Factory.addGetterSetter(Container_Container, 'clipY', undefined, getNumberValidator());
Factory.addGetterSetter(Container_Container, 'clipWidth', undefined, getNumberValidator());
Factory.addGetterSetter(Container_Container, 'clipHeight', undefined, getNumberValidator());
Factory.addGetterSetter(Container_Container, 'clipFunc');

// CONCATENATED MODULE: ./node_modules/konva/lib/PointerEvents.js

const Captures = new Map();
const SUPPORT_POINTER_EVENTS = Global["a" /* Konva */]._global['PointerEvent'] !== undefined;
function getCapturedShape(pointerId) {
    return Captures.get(pointerId);
}
function createEvent(evt) {
    return {
        evt,
        pointerId: evt.pointerId,
    };
}
function hasPointerCapture(pointerId, shape) {
    return Captures.get(pointerId) === shape;
}
function setPointerCapture(pointerId, shape) {
    releaseCapture(pointerId);
    const stage = shape.getStage();
    if (!stage)
        return;
    Captures.set(pointerId, shape);
    if (SUPPORT_POINTER_EVENTS) {
        shape._fire('gotpointercapture', createEvent(new PointerEvent('gotpointercapture')));
    }
}
function releaseCapture(pointerId, target) {
    const shape = Captures.get(pointerId);
    if (!shape)
        return;
    const stage = shape.getStage();
    if (stage && stage.content) {
    }
    Captures.delete(pointerId);
    if (SUPPORT_POINTER_EVENTS) {
        shape._fire('lostpointercapture', createEvent(new PointerEvent('lostpointercapture')));
    }
}

// CONCATENATED MODULE: ./node_modules/konva/lib/Stage.js








var Stage_STAGE = 'Stage', STRING = 'string', PX = 'px', MOUSEOUT = 'mouseout', Stage_MOUSELEAVE = 'mouseleave', MOUSEOVER = 'mouseover', Stage_MOUSEENTER = 'mouseenter', MOUSEMOVE = 'mousemove', MOUSEDOWN = 'mousedown', MOUSEUP = 'mouseup', POINTERMOVE = 'pointermove', POINTERDOWN = 'pointerdown', POINTERUP = 'pointerup', POINTERCANCEL = 'pointercancel', LOSTPOINTERCAPTURE = 'lostpointercapture', POINTEROUT = 'pointerout', POINTERLEAVE = 'pointerleave', POINTEROVER = 'pointerover', POINTERENTER = 'pointerenter', CONTEXTMENU = 'contextmenu', TOUCHSTART = 'touchstart', TOUCHEND = 'touchend', TOUCHMOVE = 'touchmove', TOUCHCANCEL = 'touchcancel', WHEEL = 'wheel', MAX_LAYERS_NUMBER = 5, EVENTS = [
    [Stage_MOUSEENTER, '_pointerenter'],
    [MOUSEDOWN, '_pointerdown'],
    [MOUSEMOVE, '_pointermove'],
    [MOUSEUP, '_pointerup'],
    [Stage_MOUSELEAVE, '_pointerleave'],
    [TOUCHSTART, '_pointerdown'],
    [TOUCHMOVE, '_pointermove'],
    [TOUCHEND, '_pointerup'],
    [TOUCHCANCEL, '_pointercancel'],
    [MOUSEOVER, '_pointerover'],
    [WHEEL, '_wheel'],
    [CONTEXTMENU, '_contextmenu'],
    [POINTERDOWN, '_pointerdown'],
    [POINTERMOVE, '_pointermove'],
    [POINTERUP, '_pointerup'],
    [POINTERCANCEL, '_pointercancel'],
    [LOSTPOINTERCAPTURE, '_lostpointercapture'],
];
const EVENTS_MAP = {
    mouse: {
        [POINTEROUT]: MOUSEOUT,
        [POINTERLEAVE]: Stage_MOUSELEAVE,
        [POINTEROVER]: MOUSEOVER,
        [POINTERENTER]: Stage_MOUSEENTER,
        [POINTERMOVE]: MOUSEMOVE,
        [POINTERDOWN]: MOUSEDOWN,
        [POINTERUP]: MOUSEUP,
        [POINTERCANCEL]: 'mousecancel',
        pointerclick: 'click',
        pointerdblclick: 'dblclick',
    },
    touch: {
        [POINTEROUT]: 'touchout',
        [POINTERLEAVE]: 'touchleave',
        [POINTEROVER]: 'touchover',
        [POINTERENTER]: 'touchenter',
        [POINTERMOVE]: TOUCHMOVE,
        [POINTERDOWN]: TOUCHSTART,
        [POINTERUP]: TOUCHEND,
        [POINTERCANCEL]: TOUCHCANCEL,
        pointerclick: 'tap',
        pointerdblclick: 'dbltap',
    },
    pointer: {
        [POINTEROUT]: POINTEROUT,
        [POINTERLEAVE]: POINTERLEAVE,
        [POINTEROVER]: POINTEROVER,
        [POINTERENTER]: POINTERENTER,
        [POINTERMOVE]: POINTERMOVE,
        [POINTERDOWN]: POINTERDOWN,
        [POINTERUP]: POINTERUP,
        [POINTERCANCEL]: POINTERCANCEL,
        pointerclick: 'pointerclick',
        pointerdblclick: 'pointerdblclick',
    },
};
const getEventType = (type) => {
    if (type.indexOf('pointer') >= 0) {
        return 'pointer';
    }
    if (type.indexOf('touch') >= 0) {
        return 'touch';
    }
    return 'mouse';
};
const getEventsMap = (eventType) => {
    const type = getEventType(eventType);
    if (type === 'pointer') {
        return Global["a" /* Konva */].pointerEventsEnabled && EVENTS_MAP.pointer;
    }
    if (type === 'touch') {
        return EVENTS_MAP.touch;
    }
    if (type === 'mouse') {
        return EVENTS_MAP.mouse;
    }
};
function checkNoClip(attrs = {}) {
    if (attrs.clipFunc || attrs.clipWidth || attrs.clipHeight) {
        Util.warn('Stage does not support clipping. Please use clip for Layers or Groups.');
    }
    return attrs;
}
const NO_POINTERS_MESSAGE = `Pointer position is missing and not registered by the stage. Looks like it is outside of the stage container. You can set it manually from event: stage.setPointersPositions(event);`;
const stages = [];
class Stage_Stage extends Container_Container {
    constructor(config) {
        super(checkNoClip(config));
        this._pointerPositions = [];
        this._changedPointerPositions = [];
        this._buildDOM();
        this._bindContentEvents();
        stages.push(this);
        this.on('widthChange.konva heightChange.konva', this._resizeDOM);
        this.on('visibleChange.konva', this._checkVisibility);
        this.on('clipWidthChange.konva clipHeightChange.konva clipFuncChange.konva', () => {
            checkNoClip(this.attrs);
        });
        this._checkVisibility();
    }
    _validateAdd(child) {
        const isLayer = child.getType() === 'Layer';
        const isFastLayer = child.getType() === 'FastLayer';
        const valid = isLayer || isFastLayer;
        if (!valid) {
            Util.throw('You may only add layers to the stage.');
        }
    }
    _checkVisibility() {
        if (!this.content) {
            return;
        }
        const style = this.visible() ? '' : 'none';
        this.content.style.display = style;
    }
    setContainer(container) {
        if (typeof container === STRING) {
            if (container.charAt(0) === '.') {
                var className = container.slice(1);
                container = document.getElementsByClassName(className)[0];
            }
            else {
                var id;
                if (container.charAt(0) !== '#') {
                    id = container;
                }
                else {
                    id = container.slice(1);
                }
                container = document.getElementById(id);
            }
            if (!container) {
                throw 'Can not find container in document with id ' + id;
            }
        }
        this._setAttr('container', container);
        if (this.content) {
            if (this.content.parentElement) {
                this.content.parentElement.removeChild(this.content);
            }
            container.appendChild(this.content);
        }
        return this;
    }
    shouldDrawHit() {
        return true;
    }
    clear() {
        var layers = this.children, len = layers.length, n;
        for (n = 0; n < len; n++) {
            layers[n].clear();
        }
        return this;
    }
    clone(obj) {
        if (!obj) {
            obj = {};
        }
        obj.container =
            typeof document !== 'undefined' && document.createElement('div');
        return Container_Container.prototype.clone.call(this, obj);
    }
    destroy() {
        super.destroy();
        var content = this.content;
        if (content && Util._isInDocument(content)) {
            this.container().removeChild(content);
        }
        var index = stages.indexOf(this);
        if (index > -1) {
            stages.splice(index, 1);
        }
        return this;
    }
    getPointerPosition() {
        const pos = this._pointerPositions[0] || this._changedPointerPositions[0];
        if (!pos) {
            Util.warn(NO_POINTERS_MESSAGE);
            return null;
        }
        return {
            x: pos.x,
            y: pos.y,
        };
    }
    _getPointerById(id) {
        return this._pointerPositions.find((p) => p.id === id);
    }
    getPointersPositions() {
        return this._pointerPositions;
    }
    getStage() {
        return this;
    }
    getContent() {
        return this.content;
    }
    _toKonvaCanvas(config) {
        config = config || {};
        config.x = config.x || 0;
        config.y = config.y || 0;
        config.width = config.width || this.width();
        config.height = config.height || this.height();
        var canvas = new Canvas_SceneCanvas({
            width: config.width,
            height: config.height,
            pixelRatio: config.pixelRatio || 1,
        });
        var _context = canvas.getContext()._context;
        var layers = this.children;
        if (config.x || config.y) {
            _context.translate(-1 * config.x, -1 * config.y);
        }
        layers.forEach(function (layer) {
            if (!layer.isVisible()) {
                return;
            }
            var layerCanvas = layer._toKonvaCanvas(config);
            _context.drawImage(layerCanvas._canvas, config.x, config.y, layerCanvas.getWidth() / layerCanvas.getPixelRatio(), layerCanvas.getHeight() / layerCanvas.getPixelRatio());
        });
        return canvas;
    }
    getIntersection(pos) {
        if (!pos) {
            return null;
        }
        var layers = this.children, len = layers.length, end = len - 1, n;
        for (n = end; n >= 0; n--) {
            const shape = layers[n].getIntersection(pos);
            if (shape) {
                return shape;
            }
        }
        return null;
    }
    _resizeDOM() {
        var width = this.width();
        var height = this.height();
        if (this.content) {
            this.content.style.width = width + PX;
            this.content.style.height = height + PX;
        }
        this.bufferCanvas.setSize(width, height);
        this.bufferHitCanvas.setSize(width, height);
        this.children.forEach((layer) => {
            layer.setSize({ width, height });
            layer.draw();
        });
    }
    add(layer, ...rest) {
        if (arguments.length > 1) {
            for (var i = 0; i < arguments.length; i++) {
                this.add(arguments[i]);
            }
            return this;
        }
        super.add(layer);
        var length = this.children.length;
        if (length > MAX_LAYERS_NUMBER) {
            Util.warn('The stage has ' +
                length +
                ' layers. Recommended maximum number of layers is 3-5. Adding more layers into the stage may drop the performance. Rethink your tree structure, you can use Konva.Group.');
        }
        layer.setSize({ width: this.width(), height: this.height() });
        layer.draw();
        if (Global["a" /* Konva */].isBrowser) {
            this.content.appendChild(layer.canvas._canvas);
        }
        return this;
    }
    getParent() {
        return null;
    }
    getLayer() {
        return null;
    }
    hasPointerCapture(pointerId) {
        return hasPointerCapture(pointerId, this);
    }
    setPointerCapture(pointerId) {
        setPointerCapture(pointerId, this);
    }
    releaseCapture(pointerId) {
        releaseCapture(pointerId, this);
    }
    getLayers() {
        return this.children;
    }
    _bindContentEvents() {
        if (!Global["a" /* Konva */].isBrowser) {
            return;
        }
        EVENTS.forEach(([event, methodName]) => {
            this.content.addEventListener(event, (evt) => {
                this[methodName](evt);
            });
        });
    }
    _pointerenter(evt) {
        this.setPointersPositions(evt);
        const events = getEventsMap(evt.type);
        this._fire(events.pointerenter, {
            evt: evt,
            target: this,
            currentTarget: this,
        });
    }
    _pointerover(evt) {
        this.setPointersPositions(evt);
        const events = getEventsMap(evt.type);
        this._fire(events.pointerover, {
            evt: evt,
            target: this,
            currentTarget: this,
        });
    }
    _getTargetShape(evenType) {
        let shape = this[evenType + 'targetShape'];
        if (shape && !shape.getStage()) {
            shape = null;
        }
        return shape;
    }
    _pointerleave(evt) {
        const events = getEventsMap(evt.type);
        const eventType = getEventType(evt.type);
        if (!events) {
            return;
        }
        this.setPointersPositions(evt);
        var targetShape = this._getTargetShape(eventType);
        var eventsEnabled = !DD.isDragging || Global["a" /* Konva */].hitOnDragEnabled;
        if (targetShape && eventsEnabled) {
            targetShape._fireAndBubble(events.pointerout, { evt: evt });
            targetShape._fireAndBubble(events.pointerleave, { evt: evt });
            this._fire(events.pointerleave, {
                evt: evt,
                target: this,
                currentTarget: this,
            });
            this[eventType + 'targetShape'] = null;
        }
        else if (eventsEnabled) {
            this._fire(events.pointerleave, {
                evt: evt,
                target: this,
                currentTarget: this,
            });
            this._fire(events.pointerout, {
                evt: evt,
                target: this,
                currentTarget: this,
            });
        }
        this.pointerPos = undefined;
        this._pointerPositions = [];
    }
    _pointerdown(evt) {
        const events = getEventsMap(evt.type);
        const eventType = getEventType(evt.type);
        if (!events) {
            return;
        }
        this.setPointersPositions(evt);
        var triggeredOnShape = false;
        this._changedPointerPositions.forEach((pos) => {
            var shape = this.getIntersection(pos);
            DD.justDragged = false;
            Global["a" /* Konva */]['_' + eventType + 'ListenClick'] = true;
            const hasShape = shape && shape.isListening();
            if (!hasShape) {
                return;
            }
            if (Global["a" /* Konva */].capturePointerEventsEnabled) {
                shape.setPointerCapture(pos.id);
            }
            this[eventType + 'ClickStartShape'] = shape;
            shape._fireAndBubble(events.pointerdown, {
                evt: evt,
                pointerId: pos.id,
            });
            triggeredOnShape = true;
            const isTouch = evt.type.indexOf('touch') >= 0;
            if (shape.preventDefault() && evt.cancelable && isTouch) {
                evt.preventDefault();
            }
        });
        if (!triggeredOnShape) {
            this._fire(events.pointerdown, {
                evt: evt,
                target: this,
                currentTarget: this,
                pointerId: this._pointerPositions[0].id,
            });
        }
    }
    _pointermove(evt) {
        const events = getEventsMap(evt.type);
        const eventType = getEventType(evt.type);
        if (!events) {
            return;
        }
        if (DD.isDragging && DD.node.preventDefault() && evt.cancelable) {
            evt.preventDefault();
        }
        this.setPointersPositions(evt);
        var eventsEnabled = !DD.isDragging || Global["a" /* Konva */].hitOnDragEnabled;
        if (!eventsEnabled) {
            return;
        }
        var processedShapesIds = {};
        let triggeredOnShape = false;
        var targetShape = this._getTargetShape(eventType);
        this._changedPointerPositions.forEach((pos) => {
            const shape = (getCapturedShape(pos.id) ||
                this.getIntersection(pos));
            const pointerId = pos.id;
            const event = { evt: evt, pointerId };
            var differentTarget = targetShape !== shape;
            if (differentTarget && targetShape) {
                targetShape._fireAndBubble(events.pointerout, Object.assign({}, event), shape);
                targetShape._fireAndBubble(events.pointerleave, Object.assign({}, event), shape);
            }
            if (shape) {
                if (processedShapesIds[shape._id]) {
                    return;
                }
                processedShapesIds[shape._id] = true;
            }
            if (shape && shape.isListening()) {
                triggeredOnShape = true;
                if (differentTarget) {
                    shape._fireAndBubble(events.pointerover, Object.assign({}, event), targetShape);
                    shape._fireAndBubble(events.pointerenter, Object.assign({}, event), targetShape);
                    this[eventType + 'targetShape'] = shape;
                }
                shape._fireAndBubble(events.pointermove, Object.assign({}, event));
            }
            else {
                if (targetShape) {
                    this._fire(events.pointerover, {
                        evt: evt,
                        target: this,
                        currentTarget: this,
                        pointerId,
                    });
                    this[eventType + 'targetShape'] = null;
                }
            }
        });
        if (!triggeredOnShape) {
            this._fire(events.pointermove, {
                evt: evt,
                target: this,
                currentTarget: this,
                pointerId: this._changedPointerPositions[0].id,
            });
        }
    }
    _pointerup(evt) {
        const events = getEventsMap(evt.type);
        const eventType = getEventType(evt.type);
        if (!events) {
            return;
        }
        this.setPointersPositions(evt);
        const clickStartShape = this[eventType + 'ClickStartShape'];
        const clickEndShape = this[eventType + 'ClickEndShape'];
        var processedShapesIds = {};
        let triggeredOnShape = false;
        this._changedPointerPositions.forEach((pos) => {
            const shape = (getCapturedShape(pos.id) ||
                this.getIntersection(pos));
            if (shape) {
                shape.releaseCapture(pos.id);
                if (processedShapesIds[shape._id]) {
                    return;
                }
                processedShapesIds[shape._id] = true;
            }
            const pointerId = pos.id;
            const event = { evt: evt, pointerId };
            let fireDblClick = false;
            if (Global["a" /* Konva */]['_' + eventType + 'InDblClickWindow']) {
                fireDblClick = true;
                clearTimeout(this[eventType + 'DblTimeout']);
            }
            else if (!DD.justDragged) {
                Global["a" /* Konva */]['_' + eventType + 'InDblClickWindow'] = true;
                clearTimeout(this[eventType + 'DblTimeout']);
            }
            this[eventType + 'DblTimeout'] = setTimeout(function () {
                Global["a" /* Konva */]['_' + eventType + 'InDblClickWindow'] = false;
            }, Global["a" /* Konva */].dblClickWindow);
            if (shape && shape.isListening()) {
                triggeredOnShape = true;
                this[eventType + 'ClickEndShape'] = shape;
                shape._fireAndBubble(events.pointerup, Object.assign({}, event));
                if (Global["a" /* Konva */]['_' + eventType + 'ListenClick'] &&
                    clickStartShape &&
                    clickStartShape === shape) {
                    shape._fireAndBubble(events.pointerclick, Object.assign({}, event));
                    if (fireDblClick && clickEndShape && clickEndShape === shape) {
                        shape._fireAndBubble(events.pointerdblclick, Object.assign({}, event));
                    }
                }
            }
            else {
                this[eventType + 'ClickEndShape'] = null;
                if (Global["a" /* Konva */]['_' + eventType + 'ListenClick']) {
                    this._fire(events.pointerclick, {
                        evt: evt,
                        target: this,
                        currentTarget: this,
                        pointerId,
                    });
                }
                if (fireDblClick) {
                    this._fire(events.pointerdblclick, {
                        evt: evt,
                        target: this,
                        currentTarget: this,
                        pointerId,
                    });
                }
            }
        });
        if (!triggeredOnShape) {
            this._fire(events.pointerup, {
                evt: evt,
                target: this,
                currentTarget: this,
                pointerId: this._changedPointerPositions[0].id,
            });
        }
        Global["a" /* Konva */]['_' + eventType + 'ListenClick'] = false;
        if (evt.cancelable) {
            evt.preventDefault();
        }
    }
    _contextmenu(evt) {
        this.setPointersPositions(evt);
        var shape = this.getIntersection(this.getPointerPosition());
        if (shape && shape.isListening()) {
            shape._fireAndBubble(CONTEXTMENU, { evt: evt });
        }
        else {
            this._fire(CONTEXTMENU, {
                evt: evt,
                target: this,
                currentTarget: this,
            });
        }
    }
    _wheel(evt) {
        this.setPointersPositions(evt);
        var shape = this.getIntersection(this.getPointerPosition());
        if (shape && shape.isListening()) {
            shape._fireAndBubble(WHEEL, { evt: evt });
        }
        else {
            this._fire(WHEEL, {
                evt: evt,
                target: this,
                currentTarget: this,
            });
        }
    }
    _pointercancel(evt) {
        this.setPointersPositions(evt);
        const shape = getCapturedShape(evt.pointerId) ||
            this.getIntersection(this.getPointerPosition());
        if (shape) {
            shape._fireAndBubble(POINTERUP, createEvent(evt));
        }
        releaseCapture(evt.pointerId);
    }
    _lostpointercapture(evt) {
        releaseCapture(evt.pointerId);
    }
    setPointersPositions(evt) {
        var contentPosition = this._getContentPosition(), x = null, y = null;
        evt = evt ? evt : window.event;
        if (evt.touches !== undefined) {
            this._pointerPositions = [];
            this._changedPointerPositions = [];
            Array.prototype.forEach.call(evt.touches, (touch) => {
                this._pointerPositions.push({
                    id: touch.identifier,
                    x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
                    y: (touch.clientY - contentPosition.top) / contentPosition.scaleY,
                });
            });
            Array.prototype.forEach.call(evt.changedTouches || evt.touches, (touch) => {
                this._changedPointerPositions.push({
                    id: touch.identifier,
                    x: (touch.clientX - contentPosition.left) / contentPosition.scaleX,
                    y: (touch.clientY - contentPosition.top) / contentPosition.scaleY,
                });
            });
        }
        else {
            x = (evt.clientX - contentPosition.left) / contentPosition.scaleX;
            y = (evt.clientY - contentPosition.top) / contentPosition.scaleY;
            this.pointerPos = {
                x: x,
                y: y,
            };
            this._pointerPositions = [{ x, y, id: Util._getFirstPointerId(evt) }];
            this._changedPointerPositions = [
                { x, y, id: Util._getFirstPointerId(evt) },
            ];
        }
    }
    _setPointerPosition(evt) {
        Util.warn('Method _setPointerPosition is deprecated. Use "stage.setPointersPositions(event)" instead.');
        this.setPointersPositions(evt);
    }
    _getContentPosition() {
        if (!this.content || !this.content.getBoundingClientRect) {
            return {
                top: 0,
                left: 0,
                scaleX: 1,
                scaleY: 1,
            };
        }
        var rect = this.content.getBoundingClientRect();
        return {
            top: rect.top,
            left: rect.left,
            scaleX: rect.width / this.content.clientWidth || 1,
            scaleY: rect.height / this.content.clientHeight || 1,
        };
    }
    _buildDOM() {
        this.bufferCanvas = new Canvas_SceneCanvas({
            width: this.width(),
            height: this.height(),
        });
        this.bufferHitCanvas = new Canvas_HitCanvas({
            pixelRatio: 1,
            width: this.width(),
            height: this.height(),
        });
        if (!Global["a" /* Konva */].isBrowser) {
            return;
        }
        var container = this.container();
        if (!container) {
            throw 'Stage has no container. A container is required.';
        }
        container.innerHTML = '';
        this.content = document.createElement('div');
        this.content.style.position = 'relative';
        this.content.style.userSelect = 'none';
        this.content.className = 'konvajs-content';
        this.content.setAttribute('role', 'presentation');
        container.appendChild(this.content);
        this._resizeDOM();
    }
    cache() {
        Util.warn('Cache function is not allowed for stage. You may use cache only for layers, groups and shapes.');
        return this;
    }
    clearCache() {
        return this;
    }
    batchDraw() {
        this.getChildren().forEach(function (layer) {
            layer.batchDraw();
        });
        return this;
    }
}
Stage_Stage.prototype.nodeType = Stage_STAGE;
Object(Global["b" /* _registerNode */])(Stage_Stage);
Factory.addGetterSetter(Stage_Stage, 'container');

// CONCATENATED MODULE: ./node_modules/konva/lib/Shape.js







var HAS_SHADOW = 'hasShadow';
var SHADOW_RGBA = 'shadowRGBA';
var patternImage = 'patternImage';
var linearGradient = 'linearGradient';
var radialGradient = 'radialGradient';
let dummyContext;
function getDummyContext() {
    if (dummyContext) {
        return dummyContext;
    }
    dummyContext = Util.createCanvasElement().getContext('2d');
    return dummyContext;
}
const shapes = {};
function _fillFunc(context) {
    context.fill();
}
function _strokeFunc(context) {
    context.stroke();
}
function _fillFuncHit(context) {
    context.fill();
}
function _strokeFuncHit(context) {
    context.stroke();
}
function _clearHasShadowCache() {
    this._clearCache(HAS_SHADOW);
}
function _clearGetShadowRGBACache() {
    this._clearCache(SHADOW_RGBA);
}
function _clearFillPatternCache() {
    this._clearCache(patternImage);
}
function _clearLinearGradientCache() {
    this._clearCache(linearGradient);
}
function _clearRadialGradientCache() {
    this._clearCache(radialGradient);
}
class Shape_Shape extends Node_Node {
    constructor(config) {
        super(config);
        let key;
        while (true) {
            key = Util.getRandomColor();
            if (key && !(key in shapes)) {
                break;
            }
        }
        this.colorKey = key;
        shapes[key] = this;
    }
    getContext() {
        Util.warn('shape.getContext() method is deprecated. Please do not use it.');
        return this.getLayer().getContext();
    }
    getCanvas() {
        Util.warn('shape.getCanvas() method is deprecated. Please do not use it.');
        return this.getLayer().getCanvas();
    }
    getSceneFunc() {
        return this.attrs.sceneFunc || this['_sceneFunc'];
    }
    getHitFunc() {
        return this.attrs.hitFunc || this['_hitFunc'];
    }
    hasShadow() {
        return this._getCache(HAS_SHADOW, this._hasShadow);
    }
    _hasShadow() {
        return (this.shadowEnabled() &&
            this.shadowOpacity() !== 0 &&
            !!(this.shadowColor() ||
                this.shadowBlur() ||
                this.shadowOffsetX() ||
                this.shadowOffsetY()));
    }
    _getFillPattern() {
        return this._getCache(patternImage, this.__getFillPattern);
    }
    __getFillPattern() {
        if (this.fillPatternImage()) {
            var ctx = getDummyContext();
            const pattern = ctx.createPattern(this.fillPatternImage(), this.fillPatternRepeat() || 'repeat');
            if (pattern && pattern.setTransform) {
                const tr = new Transform();
                tr.translate(this.fillPatternX(), this.fillPatternY());
                tr.rotate(Global["a" /* Konva */].getAngle(this.fillPatternRotation()));
                tr.scale(this.fillPatternScaleX(), this.fillPatternScaleY());
                tr.translate(-1 * this.fillPatternOffsetX(), -1 * this.fillPatternOffsetY());
                const m = tr.getMatrix();
                const matrix = typeof DOMMatrix === 'undefined'
                    ? {
                        a: m[0],
                        b: m[1],
                        c: m[2],
                        d: m[3],
                        e: m[4],
                        f: m[5],
                    }
                    : new DOMMatrix(m);
                pattern.setTransform(matrix);
            }
            return pattern;
        }
    }
    _getLinearGradient() {
        return this._getCache(linearGradient, this.__getLinearGradient);
    }
    __getLinearGradient() {
        var colorStops = this.fillLinearGradientColorStops();
        if (colorStops) {
            var ctx = getDummyContext();
            var start = this.fillLinearGradientStartPoint();
            var end = this.fillLinearGradientEndPoint();
            var grd = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
            for (var n = 0; n < colorStops.length; n += 2) {
                grd.addColorStop(colorStops[n], colorStops[n + 1]);
            }
            return grd;
        }
    }
    _getRadialGradient() {
        return this._getCache(radialGradient, this.__getRadialGradient);
    }
    __getRadialGradient() {
        var colorStops = this.fillRadialGradientColorStops();
        if (colorStops) {
            var ctx = getDummyContext();
            var start = this.fillRadialGradientStartPoint();
            var end = this.fillRadialGradientEndPoint();
            var grd = ctx.createRadialGradient(start.x, start.y, this.fillRadialGradientStartRadius(), end.x, end.y, this.fillRadialGradientEndRadius());
            for (var n = 0; n < colorStops.length; n += 2) {
                grd.addColorStop(colorStops[n], colorStops[n + 1]);
            }
            return grd;
        }
    }
    getShadowRGBA() {
        return this._getCache(SHADOW_RGBA, this._getShadowRGBA);
    }
    _getShadowRGBA() {
        if (this.hasShadow()) {
            var rgba = Util.colorToRGBA(this.shadowColor());
            return ('rgba(' +
                rgba.r +
                ',' +
                rgba.g +
                ',' +
                rgba.b +
                ',' +
                rgba.a * (this.shadowOpacity() || 1) +
                ')');
        }
    }
    hasFill() {
        return this._calculate('hasFill', [
            'fillEnabled',
            'fill',
            'fillPatternImage',
            'fillLinearGradientColorStops',
            'fillRadialGradientColorStops',
        ], () => {
            return (this.fillEnabled() &&
                !!(this.fill() ||
                    this.fillPatternImage() ||
                    this.fillLinearGradientColorStops() ||
                    this.fillRadialGradientColorStops()));
        });
    }
    hasStroke() {
        return this._calculate('hasStroke', [
            'strokeEnabled',
            'strokeWidth',
            'stroke',
            'strokeLinearGradientColorStops',
        ], () => {
            return (this.strokeEnabled() &&
                this.strokeWidth() &&
                !!(this.stroke() || this.strokeLinearGradientColorStops()));
        });
    }
    hasHitStroke() {
        const width = this.hitStrokeWidth();
        if (width === 'auto') {
            return this.hasStroke();
        }
        return this.strokeEnabled() && !!width;
    }
    intersects(point) {
        var stage = this.getStage(), bufferHitCanvas = stage.bufferHitCanvas, p;
        bufferHitCanvas.getContext().clear();
        this.drawHit(bufferHitCanvas, null, true);
        p = bufferHitCanvas.context.getImageData(Math.round(point.x), Math.round(point.y), 1, 1).data;
        return p[3] > 0;
    }
    destroy() {
        Node_Node.prototype.destroy.call(this);
        delete shapes[this.colorKey];
        delete this.colorKey;
        return this;
    }
    _useBufferCanvas(forceFill) {
        var _a;
        if (!this.getStage()) {
            return false;
        }
        const perfectDrawEnabled = (_a = this.attrs.perfectDrawEnabled) !== null && _a !== void 0 ? _a : true;
        if (!perfectDrawEnabled) {
            return false;
        }
        const hasFill = forceFill || this.hasFill();
        const hasStroke = this.hasStroke();
        const isTransparent = this.getAbsoluteOpacity() !== 1;
        if (hasFill && hasStroke && isTransparent) {
            return true;
        }
        const hasShadow = this.hasShadow();
        const strokeForShadow = this.shadowForStrokeEnabled();
        if (hasFill && hasStroke && hasShadow && strokeForShadow) {
            return true;
        }
        return false;
    }
    setStrokeHitEnabled(val) {
        Util.warn('strokeHitEnabled property is deprecated. Please use hitStrokeWidth instead.');
        if (val) {
            this.hitStrokeWidth('auto');
        }
        else {
            this.hitStrokeWidth(0);
        }
    }
    getStrokeHitEnabled() {
        if (this.hitStrokeWidth() === 0) {
            return false;
        }
        else {
            return true;
        }
    }
    getSelfRect() {
        var size = this.size();
        return {
            x: this._centroid ? -size.width / 2 : 0,
            y: this._centroid ? -size.height / 2 : 0,
            width: size.width,
            height: size.height,
        };
    }
    getClientRect(config = {}) {
        const skipTransform = config.skipTransform;
        const relativeTo = config.relativeTo;
        const fillRect = this.getSelfRect();
        const applyStroke = !config.skipStroke && this.hasStroke();
        const strokeWidth = (applyStroke && this.strokeWidth()) || 0;
        const fillAndStrokeWidth = fillRect.width + strokeWidth;
        const fillAndStrokeHeight = fillRect.height + strokeWidth;
        const applyShadow = !config.skipShadow && this.hasShadow();
        const shadowOffsetX = applyShadow ? this.shadowOffsetX() : 0;
        const shadowOffsetY = applyShadow ? this.shadowOffsetY() : 0;
        const preWidth = fillAndStrokeWidth + Math.abs(shadowOffsetX);
        const preHeight = fillAndStrokeHeight + Math.abs(shadowOffsetY);
        const blurRadius = (applyShadow && this.shadowBlur()) || 0;
        const width = preWidth + blurRadius * 2;
        const height = preHeight + blurRadius * 2;
        const rect = {
            width: width,
            height: height,
            x: -(strokeWidth / 2 + blurRadius) +
                Math.min(shadowOffsetX, 0) +
                fillRect.x,
            y: -(strokeWidth / 2 + blurRadius) +
                Math.min(shadowOffsetY, 0) +
                fillRect.y,
        };
        if (!skipTransform) {
            return this._transformedRect(rect, relativeTo);
        }
        return rect;
    }
    drawScene(can, top) {
        var layer = this.getLayer(), canvas = can || layer.getCanvas(), context = canvas.getContext(), cachedCanvas = this._getCanvasCache(), drawFunc = this.getSceneFunc(), hasShadow = this.hasShadow(), stage, bufferCanvas, bufferContext;
        var skipBuffer = canvas.isCache;
        var cachingSelf = top === this;
        if (!this.isVisible() && !cachingSelf) {
            return this;
        }
        if (cachedCanvas) {
            context.save();
            var m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedSceneCanvas(context);
            context.restore();
            return this;
        }
        if (!drawFunc) {
            return this;
        }
        context.save();
        if (this._useBufferCanvas() && !skipBuffer) {
            stage = this.getStage();
            bufferCanvas = stage.bufferCanvas;
            bufferContext = bufferCanvas.getContext();
            bufferContext.clear();
            bufferContext.save();
            bufferContext._applyLineJoin(this);
            var o = this.getAbsoluteTransform(top).getMatrix();
            bufferContext.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
            drawFunc.call(this, bufferContext, this);
            bufferContext.restore();
            var ratio = bufferCanvas.pixelRatio;
            if (hasShadow) {
                context._applyShadow(this);
            }
            context._applyOpacity(this);
            context._applyGlobalCompositeOperation(this);
            context.drawImage(bufferCanvas._canvas, 0, 0, bufferCanvas.width / ratio, bufferCanvas.height / ratio);
        }
        else {
            context._applyLineJoin(this);
            if (!cachingSelf) {
                var o = this.getAbsoluteTransform(top).getMatrix();
                context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
                context._applyOpacity(this);
                context._applyGlobalCompositeOperation(this);
            }
            if (hasShadow) {
                context._applyShadow(this);
            }
            drawFunc.call(this, context, this);
        }
        context.restore();
        return this;
    }
    drawHit(can, top, skipDragCheck = false) {
        if (!this.shouldDrawHit(top, skipDragCheck)) {
            return this;
        }
        var layer = this.getLayer(), canvas = can || layer.hitCanvas, context = canvas && canvas.getContext(), drawFunc = this.hitFunc() || this.sceneFunc(), cachedCanvas = this._getCanvasCache(), cachedHitCanvas = cachedCanvas && cachedCanvas.hit;
        if (!this.colorKey) {
            Util.warn('Looks like your canvas has a destroyed shape in it. Do not reuse shape after you destroyed it. If you want to reuse shape you should call remove() instead of destroy()');
        }
        if (cachedHitCanvas) {
            context.save();
            var m = this.getAbsoluteTransform(top).getMatrix();
            context.transform(m[0], m[1], m[2], m[3], m[4], m[5]);
            this._drawCachedHitCanvas(context);
            context.restore();
            return this;
        }
        if (!drawFunc) {
            return this;
        }
        context.save();
        context._applyLineJoin(this);
        const selfCache = this === top;
        if (!selfCache) {
            var o = this.getAbsoluteTransform(top).getMatrix();
            context.transform(o[0], o[1], o[2], o[3], o[4], o[5]);
        }
        drawFunc.call(this, context, this);
        context.restore();
        return this;
    }
    drawHitFromCache(alphaThreshold = 0) {
        var cachedCanvas = this._getCanvasCache(), sceneCanvas = this._getCachedSceneCanvas(), hitCanvas = cachedCanvas.hit, hitContext = hitCanvas.getContext(), hitWidth = hitCanvas.getWidth(), hitHeight = hitCanvas.getHeight(), hitImageData, hitData, len, rgbColorKey, i, alpha;
        hitContext.clear();
        hitContext.drawImage(sceneCanvas._canvas, 0, 0, hitWidth, hitHeight);
        try {
            hitImageData = hitContext.getImageData(0, 0, hitWidth, hitHeight);
            hitData = hitImageData.data;
            len = hitData.length;
            rgbColorKey = Util._hexToRgb(this.colorKey);
            for (i = 0; i < len; i += 4) {
                alpha = hitData[i + 3];
                if (alpha > alphaThreshold) {
                    hitData[i] = rgbColorKey.r;
                    hitData[i + 1] = rgbColorKey.g;
                    hitData[i + 2] = rgbColorKey.b;
                    hitData[i + 3] = 255;
                }
                else {
                    hitData[i + 3] = 0;
                }
            }
            hitContext.putImageData(hitImageData, 0, 0);
        }
        catch (e) {
            Util.error('Unable to draw hit graph from cached scene canvas. ' + e.message);
        }
        return this;
    }
    hasPointerCapture(pointerId) {
        return hasPointerCapture(pointerId, this);
    }
    setPointerCapture(pointerId) {
        setPointerCapture(pointerId, this);
    }
    releaseCapture(pointerId) {
        releaseCapture(pointerId, this);
    }
}
Shape_Shape.prototype._fillFunc = _fillFunc;
Shape_Shape.prototype._strokeFunc = _strokeFunc;
Shape_Shape.prototype._fillFuncHit = _fillFuncHit;
Shape_Shape.prototype._strokeFuncHit = _strokeFuncHit;
Shape_Shape.prototype._centroid = false;
Shape_Shape.prototype.nodeType = 'Shape';
Object(Global["b" /* _registerNode */])(Shape_Shape);
Shape_Shape.prototype.eventListeners = {};
Shape_Shape.prototype.on.call(Shape_Shape.prototype, 'shadowColorChange.konva shadowBlurChange.konva shadowOffsetChange.konva shadowOpacityChange.konva shadowEnabledChange.konva', _clearHasShadowCache);
Shape_Shape.prototype.on.call(Shape_Shape.prototype, 'shadowColorChange.konva shadowOpacityChange.konva shadowEnabledChange.konva', _clearGetShadowRGBACache);
Shape_Shape.prototype.on.call(Shape_Shape.prototype, 'fillPriorityChange.konva fillPatternImageChange.konva fillPatternRepeatChange.konva fillPatternScaleXChange.konva fillPatternScaleYChange.konva fillPatternOffsetXChange.konva fillPatternOffsetYChange.konva fillPatternXChange.konva fillPatternYChange.konva fillPatternRotationChange.konva', _clearFillPatternCache);
Shape_Shape.prototype.on.call(Shape_Shape.prototype, 'fillPriorityChange.konva fillLinearGradientColorStopsChange.konva fillLinearGradientStartPointXChange.konva fillLinearGradientStartPointYChange.konva fillLinearGradientEndPointXChange.konva fillLinearGradientEndPointYChange.konva', _clearLinearGradientCache);
Shape_Shape.prototype.on.call(Shape_Shape.prototype, 'fillPriorityChange.konva fillRadialGradientColorStopsChange.konva fillRadialGradientStartPointXChange.konva fillRadialGradientStartPointYChange.konva fillRadialGradientEndPointXChange.konva fillRadialGradientEndPointYChange.konva fillRadialGradientStartRadiusChange.konva fillRadialGradientEndRadiusChange.konva', _clearRadialGradientCache);
Factory.addGetterSetter(Shape_Shape, 'stroke', undefined, getStringOrGradientValidator());
Factory.addGetterSetter(Shape_Shape, 'strokeWidth', 2, getNumberValidator());
Factory.addGetterSetter(Shape_Shape, 'fillAfterStrokeEnabled', false);
Factory.addGetterSetter(Shape_Shape, 'hitStrokeWidth', 'auto', getNumberOrAutoValidator());
Factory.addGetterSetter(Shape_Shape, 'strokeHitEnabled', true, getBooleanValidator());
Factory.addGetterSetter(Shape_Shape, 'perfectDrawEnabled', true, getBooleanValidator());
Factory.addGetterSetter(Shape_Shape, 'shadowForStrokeEnabled', true, getBooleanValidator());
Factory.addGetterSetter(Shape_Shape, 'lineJoin');
Factory.addGetterSetter(Shape_Shape, 'lineCap');
Factory.addGetterSetter(Shape_Shape, 'sceneFunc');
Factory.addGetterSetter(Shape_Shape, 'hitFunc');
Factory.addGetterSetter(Shape_Shape, 'dash');
Factory.addGetterSetter(Shape_Shape, 'dashOffset', 0, getNumberValidator());
Factory.addGetterSetter(Shape_Shape, 'shadowColor', undefined, getStringValidator());
Factory.addGetterSetter(Shape_Shape, 'shadowBlur', 0, getNumberValidator());
Factory.addGetterSetter(Shape_Shape, 'shadowOpacity', 1, getNumberValidator());
Factory.addComponentsGetterSetter(Shape_Shape, 'shadowOffset', ['x', 'y']);
Factory.addGetterSetter(Shape_Shape, 'shadowOffsetX', 0, getNumberValidator());
Factory.addGetterSetter(Shape_Shape, 'shadowOffsetY', 0, getNumberValidator());
Factory.addGetterSetter(Shape_Shape, 'fillPatternImage');
Factory.addGetterSetter(Shape_Shape, 'fill', undefined, getStringOrGradientValidator());
Factory.addGetterSetter(Shape_Shape, 'fillPatternX', 0, getNumberValidator());
Factory.addGetterSetter(Shape_Shape, 'fillPatternY', 0, getNumberValidator());
Factory.addGetterSetter(Shape_Shape, 'fillLinearGradientColorStops');
Factory.addGetterSetter(Shape_Shape, 'strokeLinearGradientColorStops');
Factory.addGetterSetter(Shape_Shape, 'fillRadialGradientStartRadius', 0);
Factory.addGetterSetter(Shape_Shape, 'fillRadialGradientEndRadius', 0);
Factory.addGetterSetter(Shape_Shape, 'fillRadialGradientColorStops');
Factory.addGetterSetter(Shape_Shape, 'fillPatternRepeat', 'repeat');
Factory.addGetterSetter(Shape_Shape, 'fillEnabled', true);
Factory.addGetterSetter(Shape_Shape, 'strokeEnabled', true);
Factory.addGetterSetter(Shape_Shape, 'shadowEnabled', true);
Factory.addGetterSetter(Shape_Shape, 'dashEnabled', true);
Factory.addGetterSetter(Shape_Shape, 'strokeScaleEnabled', true);
Factory.addGetterSetter(Shape_Shape, 'fillPriority', 'color');
Factory.addComponentsGetterSetter(Shape_Shape, 'fillPatternOffset', ['x', 'y']);
Factory.addGetterSetter(Shape_Shape, 'fillPatternOffsetX', 0, getNumberValidator());
Factory.addGetterSetter(Shape_Shape, 'fillPatternOffsetY', 0, getNumberValidator());
Factory.addComponentsGetterSetter(Shape_Shape, 'fillPatternScale', ['x', 'y']);
Factory.addGetterSetter(Shape_Shape, 'fillPatternScaleX', 1, getNumberValidator());
Factory.addGetterSetter(Shape_Shape, 'fillPatternScaleY', 1, getNumberValidator());
Factory.addComponentsGetterSetter(Shape_Shape, 'fillLinearGradientStartPoint', [
    'x',
    'y',
]);
Factory.addComponentsGetterSetter(Shape_Shape, 'strokeLinearGradientStartPoint', [
    'x',
    'y',
]);
Factory.addGetterSetter(Shape_Shape, 'fillLinearGradientStartPointX', 0);
Factory.addGetterSetter(Shape_Shape, 'strokeLinearGradientStartPointX', 0);
Factory.addGetterSetter(Shape_Shape, 'fillLinearGradientStartPointY', 0);
Factory.addGetterSetter(Shape_Shape, 'strokeLinearGradientStartPointY', 0);
Factory.addComponentsGetterSetter(Shape_Shape, 'fillLinearGradientEndPoint', [
    'x',
    'y',
]);
Factory.addComponentsGetterSetter(Shape_Shape, 'strokeLinearGradientEndPoint', [
    'x',
    'y',
]);
Factory.addGetterSetter(Shape_Shape, 'fillLinearGradientEndPointX', 0);
Factory.addGetterSetter(Shape_Shape, 'strokeLinearGradientEndPointX', 0);
Factory.addGetterSetter(Shape_Shape, 'fillLinearGradientEndPointY', 0);
Factory.addGetterSetter(Shape_Shape, 'strokeLinearGradientEndPointY', 0);
Factory.addComponentsGetterSetter(Shape_Shape, 'fillRadialGradientStartPoint', [
    'x',
    'y',
]);
Factory.addGetterSetter(Shape_Shape, 'fillRadialGradientStartPointX', 0);
Factory.addGetterSetter(Shape_Shape, 'fillRadialGradientStartPointY', 0);
Factory.addComponentsGetterSetter(Shape_Shape, 'fillRadialGradientEndPoint', [
    'x',
    'y',
]);
Factory.addGetterSetter(Shape_Shape, 'fillRadialGradientEndPointX', 0);
Factory.addGetterSetter(Shape_Shape, 'fillRadialGradientEndPointY', 0);
Factory.addGetterSetter(Shape_Shape, 'fillPatternRotation', 0);
Factory.backCompat(Shape_Shape, {
    dashArray: 'dash',
    getDashArray: 'getDash',
    setDashArray: 'getDash',
    drawFunc: 'sceneFunc',
    getDrawFunc: 'getSceneFunc',
    setDrawFunc: 'setSceneFunc',
    drawHitFunc: 'hitFunc',
    getDrawHitFunc: 'getHitFunc',
    setDrawHitFunc: 'setHitFunc',
});

// CONCATENATED MODULE: ./node_modules/konva/lib/Layer.js








var Layer_HASH = '#', BEFORE_DRAW = 'beforeDraw', DRAW = 'draw', INTERSECTION_OFFSETS = [
    { x: 0, y: 0 },
    { x: -1, y: -1 },
    { x: 1, y: -1 },
    { x: 1, y: 1 },
    { x: -1, y: 1 },
], INTERSECTION_OFFSETS_LEN = INTERSECTION_OFFSETS.length;
class Layer_Layer extends Container_Container {
    constructor(config) {
        super(config);
        this.canvas = new Canvas_SceneCanvas();
        this.hitCanvas = new Canvas_HitCanvas({
            pixelRatio: 1,
        });
        this._waitingForDraw = false;
        this.on('visibleChange.konva', this._checkVisibility);
        this._checkVisibility();
        this.on('imageSmoothingEnabledChange.konva', this._setSmoothEnabled);
        this._setSmoothEnabled();
    }
    createPNGStream() {
        const c = this.canvas._canvas;
        return c.createPNGStream();
    }
    getCanvas() {
        return this.canvas;
    }
    getNativeCanvasElement() {
        return this.canvas._canvas;
    }
    getHitCanvas() {
        return this.hitCanvas;
    }
    getContext() {
        return this.getCanvas().getContext();
    }
    clear(bounds) {
        this.getContext().clear(bounds);
        this.getHitCanvas().getContext().clear(bounds);
        return this;
    }
    setZIndex(index) {
        super.setZIndex(index);
        var stage = this.getStage();
        if (stage && stage.content) {
            stage.content.removeChild(this.getNativeCanvasElement());
            if (index < stage.children.length - 1) {
                stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[index + 1].getCanvas()._canvas);
            }
            else {
                stage.content.appendChild(this.getNativeCanvasElement());
            }
        }
        return this;
    }
    moveToTop() {
        Node_Node.prototype.moveToTop.call(this);
        var stage = this.getStage();
        if (stage && stage.content) {
            stage.content.removeChild(this.getNativeCanvasElement());
            stage.content.appendChild(this.getNativeCanvasElement());
        }
        return true;
    }
    moveUp() {
        var moved = Node_Node.prototype.moveUp.call(this);
        if (!moved) {
            return false;
        }
        var stage = this.getStage();
        if (!stage || !stage.content) {
            return false;
        }
        stage.content.removeChild(this.getNativeCanvasElement());
        if (this.index < stage.children.length - 1) {
            stage.content.insertBefore(this.getNativeCanvasElement(), stage.children[this.index + 1].getCanvas()._canvas);
        }
        else {
            stage.content.appendChild(this.getNativeCanvasElement());
        }
        return true;
    }
    moveDown() {
        if (Node_Node.prototype.moveDown.call(this)) {
            var stage = this.getStage();
            if (stage) {
                var children = stage.children;
                if (stage.content) {
                    stage.content.removeChild(this.getNativeCanvasElement());
                    stage.content.insertBefore(this.getNativeCanvasElement(), children[this.index + 1].getCanvas()._canvas);
                }
            }
            return true;
        }
        return false;
    }
    moveToBottom() {
        if (Node_Node.prototype.moveToBottom.call(this)) {
            var stage = this.getStage();
            if (stage) {
                var children = stage.children;
                if (stage.content) {
                    stage.content.removeChild(this.getNativeCanvasElement());
                    stage.content.insertBefore(this.getNativeCanvasElement(), children[1].getCanvas()._canvas);
                }
            }
            return true;
        }
        return false;
    }
    getLayer() {
        return this;
    }
    remove() {
        var _canvas = this.getNativeCanvasElement();
        Node_Node.prototype.remove.call(this);
        if (_canvas && _canvas.parentNode && Util._isInDocument(_canvas)) {
            _canvas.parentNode.removeChild(_canvas);
        }
        return this;
    }
    getStage() {
        return this.parent;
    }
    setSize({ width, height }) {
        this.canvas.setSize(width, height);
        this.hitCanvas.setSize(width, height);
        this._setSmoothEnabled();
        return this;
    }
    _validateAdd(child) {
        var type = child.getType();
        if (type !== 'Group' && type !== 'Shape') {
            Util.throw('You may only add groups and shapes to a layer.');
        }
    }
    _toKonvaCanvas(config) {
        config = config || {};
        config.width = config.width || this.getWidth();
        config.height = config.height || this.getHeight();
        config.x = config.x !== undefined ? config.x : this.x();
        config.y = config.y !== undefined ? config.y : this.y();
        return Node_Node.prototype._toKonvaCanvas.call(this, config);
    }
    _checkVisibility() {
        const visible = this.visible();
        if (visible) {
            this.canvas._canvas.style.display = 'block';
        }
        else {
            this.canvas._canvas.style.display = 'none';
        }
    }
    _setSmoothEnabled() {
        this.getContext()._context.imageSmoothingEnabled =
            this.imageSmoothingEnabled();
    }
    getWidth() {
        if (this.parent) {
            return this.parent.width();
        }
    }
    setWidth() {
        Util.warn('Can not change width of layer. Use "stage.width(value)" function instead.');
    }
    getHeight() {
        if (this.parent) {
            return this.parent.height();
        }
    }
    setHeight() {
        Util.warn('Can not change height of layer. Use "stage.height(value)" function instead.');
    }
    batchDraw() {
        if (!this._waitingForDraw) {
            this._waitingForDraw = true;
            Util.requestAnimFrame(() => {
                this.draw();
                this._waitingForDraw = false;
            });
        }
        return this;
    }
    getIntersection(pos) {
        if (!this.isListening() || !this.isVisible()) {
            return null;
        }
        var spiralSearchDistance = 1;
        var continueSearch = false;
        while (true) {
            for (let i = 0; i < INTERSECTION_OFFSETS_LEN; i++) {
                const intersectionOffset = INTERSECTION_OFFSETS[i];
                const obj = this._getIntersection({
                    x: pos.x + intersectionOffset.x * spiralSearchDistance,
                    y: pos.y + intersectionOffset.y * spiralSearchDistance,
                });
                const shape = obj.shape;
                if (shape) {
                    return shape;
                }
                continueSearch = !!obj.antialiased;
                if (!obj.antialiased) {
                    break;
                }
            }
            if (continueSearch) {
                spiralSearchDistance += 1;
            }
            else {
                return null;
            }
        }
    }
    _getIntersection(pos) {
        const ratio = this.hitCanvas.pixelRatio;
        const p = this.hitCanvas.context.getImageData(Math.round(pos.x * ratio), Math.round(pos.y * ratio), 1, 1).data;
        const p3 = p[3];
        if (p3 === 255) {
            const colorKey = Util._rgbToHex(p[0], p[1], p[2]);
            const shape = shapes[Layer_HASH + colorKey];
            if (shape) {
                return {
                    shape: shape,
                };
            }
            return {
                antialiased: true,
            };
        }
        else if (p3 > 0) {
            return {
                antialiased: true,
            };
        }
        return {};
    }
    drawScene(can, top) {
        var layer = this.getLayer(), canvas = can || (layer && layer.getCanvas());
        this._fire(BEFORE_DRAW, {
            node: this,
        });
        if (this.clearBeforeDraw()) {
            canvas.getContext().clear();
        }
        Container_Container.prototype.drawScene.call(this, canvas, top);
        this._fire(DRAW, {
            node: this,
        });
        return this;
    }
    drawHit(can, top) {
        var layer = this.getLayer(), canvas = can || (layer && layer.hitCanvas);
        if (layer && layer.clearBeforeDraw()) {
            layer.getHitCanvas().getContext().clear();
        }
        Container_Container.prototype.drawHit.call(this, canvas, top);
        return this;
    }
    enableHitGraph() {
        this.hitGraphEnabled(true);
        return this;
    }
    disableHitGraph() {
        this.hitGraphEnabled(false);
        return this;
    }
    setHitGraphEnabled(val) {
        Util.warn('hitGraphEnabled method is deprecated. Please use layer.listening() instead.');
        this.listening(val);
    }
    getHitGraphEnabled(val) {
        Util.warn('hitGraphEnabled method is deprecated. Please use layer.listening() instead.');
        return this.listening();
    }
    toggleHitCanvas() {
        if (!this.parent || !this.parent['content']) {
            return;
        }
        var parent = this.parent;
        var added = !!this.hitCanvas._canvas.parentNode;
        if (added) {
            parent.content.removeChild(this.hitCanvas._canvas);
        }
        else {
            parent.content.appendChild(this.hitCanvas._canvas);
        }
    }
}
Layer_Layer.prototype.nodeType = 'Layer';
Object(Global["b" /* _registerNode */])(Layer_Layer);
Factory.addGetterSetter(Layer_Layer, 'imageSmoothingEnabled', true);
Factory.addGetterSetter(Layer_Layer, 'clearBeforeDraw', true);
Factory.addGetterSetter(Layer_Layer, 'hitGraphEnabled', true, getBooleanValidator());

// CONCATENATED MODULE: ./node_modules/konva/lib/FastLayer.js



class FastLayer_FastLayer extends Layer_Layer {
    constructor(attrs) {
        super(attrs);
        this.listening(false);
        Util.warn('Konva.Fast layer is deprecated. Please use "new Konva.Layer({ listening: false })" instead.');
    }
}
FastLayer_FastLayer.prototype.nodeType = 'FastLayer';
Object(Global["b" /* _registerNode */])(FastLayer_FastLayer);

// CONCATENATED MODULE: ./node_modules/konva/lib/Group.js



class Group_Group extends Container_Container {
    _validateAdd(child) {
        var type = child.getType();
        if (type !== 'Group' && type !== 'Shape') {
            Util.throw('You may only add groups and shapes to groups.');
        }
    }
}
Group_Group.prototype.nodeType = 'Group';
Object(Global["b" /* _registerNode */])(Group_Group);

// CONCATENATED MODULE: ./node_modules/konva/lib/Animation.js


var now = (function () {
    if (Global["c" /* glob */].performance && Global["c" /* glob */].performance.now) {
        return function () {
            return Global["c" /* glob */].performance.now();
        };
    }
    return function () {
        return new Date().getTime();
    };
})();
class Animation_Animation {
    constructor(func, layers) {
        this.id = Animation_Animation.animIdCounter++;
        this.frame = {
            time: 0,
            timeDiff: 0,
            lastTime: now(),
            frameRate: 0,
        };
        this.func = func;
        this.setLayers(layers);
    }
    setLayers(layers) {
        var lays = [];
        if (!layers) {
            lays = [];
        }
        else if (layers.length > 0) {
            lays = layers;
        }
        else {
            lays = [layers];
        }
        this.layers = lays;
        return this;
    }
    getLayers() {
        return this.layers;
    }
    addLayer(layer) {
        var layers = this.layers, len = layers.length, n;
        for (n = 0; n < len; n++) {
            if (layers[n]._id === layer._id) {
                return false;
            }
        }
        this.layers.push(layer);
        return true;
    }
    isRunning() {
        var a = Animation_Animation, animations = a.animations, len = animations.length, n;
        for (n = 0; n < len; n++) {
            if (animations[n].id === this.id) {
                return true;
            }
        }
        return false;
    }
    start() {
        this.stop();
        this.frame.timeDiff = 0;
        this.frame.lastTime = now();
        Animation_Animation._addAnimation(this);
        return this;
    }
    stop() {
        Animation_Animation._removeAnimation(this);
        return this;
    }
    _updateFrameObject(time) {
        this.frame.timeDiff = time - this.frame.lastTime;
        this.frame.lastTime = time;
        this.frame.time += this.frame.timeDiff;
        this.frame.frameRate = 1000 / this.frame.timeDiff;
    }
    static _addAnimation(anim) {
        this.animations.push(anim);
        this._handleAnimation();
    }
    static _removeAnimation(anim) {
        var id = anim.id, animations = this.animations, len = animations.length, n;
        for (n = 0; n < len; n++) {
            if (animations[n].id === id) {
                this.animations.splice(n, 1);
                break;
            }
        }
    }
    static _runFrames() {
        var layerHash = {}, animations = this.animations, anim, layers, func, n, i, layersLen, layer, key, needRedraw;
        for (n = 0; n < animations.length; n++) {
            anim = animations[n];
            layers = anim.layers;
            func = anim.func;
            anim._updateFrameObject(now());
            layersLen = layers.length;
            if (func) {
                needRedraw = func.call(anim, anim.frame) !== false;
            }
            else {
                needRedraw = true;
            }
            if (!needRedraw) {
                continue;
            }
            for (i = 0; i < layersLen; i++) {
                layer = layers[i];
                if (layer._id !== undefined) {
                    layerHash[layer._id] = layer;
                }
            }
        }
        for (key in layerHash) {
            if (!layerHash.hasOwnProperty(key)) {
                continue;
            }
            layerHash[key].batchDraw();
        }
    }
    static _animationLoop() {
        var Anim = Animation_Animation;
        if (Anim.animations.length) {
            Anim._runFrames();
            Util.requestAnimFrame(Anim._animationLoop);
        }
        else {
            Anim.animRunning = false;
        }
    }
    static _handleAnimation() {
        if (!this.animRunning) {
            this.animRunning = true;
            Util.requestAnimFrame(this._animationLoop);
        }
    }
}
Animation_Animation.animations = [];
Animation_Animation.animIdCounter = 0;
Animation_Animation.animRunning = false;

// CONCATENATED MODULE: ./node_modules/konva/lib/Tween.js




var blacklist = {
    node: 1,
    duration: 1,
    easing: 1,
    onFinish: 1,
    yoyo: 1,
}, PAUSED = 1, PLAYING = 2, REVERSING = 3, Tween_idCounter = 0, colorAttrs = ['fill', 'stroke', 'shadowColor'];
class TweenEngine {
    constructor(prop, propFunc, func, begin, finish, duration, yoyo) {
        this.prop = prop;
        this.propFunc = propFunc;
        this.begin = begin;
        this._pos = begin;
        this.duration = duration;
        this._change = 0;
        this.prevPos = 0;
        this.yoyo = yoyo;
        this._time = 0;
        this._position = 0;
        this._startTime = 0;
        this._finish = 0;
        this.func = func;
        this._change = finish - this.begin;
        this.pause();
    }
    fire(str) {
        var handler = this[str];
        if (handler) {
            handler();
        }
    }
    setTime(t) {
        if (t > this.duration) {
            if (this.yoyo) {
                this._time = this.duration;
                this.reverse();
            }
            else {
                this.finish();
            }
        }
        else if (t < 0) {
            if (this.yoyo) {
                this._time = 0;
                this.play();
            }
            else {
                this.reset();
            }
        }
        else {
            this._time = t;
            this.update();
        }
    }
    getTime() {
        return this._time;
    }
    setPosition(p) {
        this.prevPos = this._pos;
        this.propFunc(p);
        this._pos = p;
    }
    getPosition(t) {
        if (t === undefined) {
            t = this._time;
        }
        return this.func(t, this.begin, this._change, this.duration);
    }
    play() {
        this.state = PLAYING;
        this._startTime = this.getTimer() - this._time;
        this.onEnterFrame();
        this.fire('onPlay');
    }
    reverse() {
        this.state = REVERSING;
        this._time = this.duration - this._time;
        this._startTime = this.getTimer() - this._time;
        this.onEnterFrame();
        this.fire('onReverse');
    }
    seek(t) {
        this.pause();
        this._time = t;
        this.update();
        this.fire('onSeek');
    }
    reset() {
        this.pause();
        this._time = 0;
        this.update();
        this.fire('onReset');
    }
    finish() {
        this.pause();
        this._time = this.duration;
        this.update();
        this.fire('onFinish');
    }
    update() {
        this.setPosition(this.getPosition(this._time));
        this.fire('onUpdate');
    }
    onEnterFrame() {
        var t = this.getTimer() - this._startTime;
        if (this.state === PLAYING) {
            this.setTime(t);
        }
        else if (this.state === REVERSING) {
            this.setTime(this.duration - t);
        }
    }
    pause() {
        this.state = PAUSED;
        this.fire('onPause');
    }
    getTimer() {
        return new Date().getTime();
    }
}
class Tween_Tween {
    constructor(config) {
        var that = this, node = config.node, nodeId = node._id, duration, easing = config.easing || Easings.Linear, yoyo = !!config.yoyo, key;
        if (typeof config.duration === 'undefined') {
            duration = 0.3;
        }
        else if (config.duration === 0) {
            duration = 0.001;
        }
        else {
            duration = config.duration;
        }
        this.node = node;
        this._id = Tween_idCounter++;
        var layers = node.getLayer() ||
            (node instanceof Global["a" /* Konva */]['Stage'] ? node.getLayers() : null);
        if (!layers) {
            Util.error('Tween constructor have `node` that is not in a layer. Please add node into layer first.');
        }
        this.anim = new Animation_Animation(function () {
            that.tween.onEnterFrame();
        }, layers);
        this.tween = new TweenEngine(key, function (i) {
            that._tweenFunc(i);
        }, easing, 0, 1, duration * 1000, yoyo);
        this._addListeners();
        if (!Tween_Tween.attrs[nodeId]) {
            Tween_Tween.attrs[nodeId] = {};
        }
        if (!Tween_Tween.attrs[nodeId][this._id]) {
            Tween_Tween.attrs[nodeId][this._id] = {};
        }
        if (!Tween_Tween.tweens[nodeId]) {
            Tween_Tween.tweens[nodeId] = {};
        }
        for (key in config) {
            if (blacklist[key] === undefined) {
                this._addAttr(key, config[key]);
            }
        }
        this.reset();
        this.onFinish = config.onFinish;
        this.onReset = config.onReset;
        this.onUpdate = config.onUpdate;
    }
    _addAttr(key, end) {
        var node = this.node, nodeId = node._id, start, diff, tweenId, n, len, trueEnd, trueStart, endRGBA;
        tweenId = Tween_Tween.tweens[nodeId][key];
        if (tweenId) {
            delete Tween_Tween.attrs[nodeId][tweenId][key];
        }
        start = node.getAttr(key);
        if (Util._isArray(end)) {
            diff = [];
            len = Math.max(end.length, start.length);
            if (key === 'points' && end.length !== start.length) {
                if (end.length > start.length) {
                    trueStart = start;
                    start = Util._prepareArrayForTween(start, end, node.closed());
                }
                else {
                    trueEnd = end;
                    end = Util._prepareArrayForTween(end, start, node.closed());
                }
            }
            if (key.indexOf('fill') === 0) {
                for (n = 0; n < len; n++) {
                    if (n % 2 === 0) {
                        diff.push(end[n] - start[n]);
                    }
                    else {
                        var startRGBA = Util.colorToRGBA(start[n]);
                        endRGBA = Util.colorToRGBA(end[n]);
                        start[n] = startRGBA;
                        diff.push({
                            r: endRGBA.r - startRGBA.r,
                            g: endRGBA.g - startRGBA.g,
                            b: endRGBA.b - startRGBA.b,
                            a: endRGBA.a - startRGBA.a,
                        });
                    }
                }
            }
            else {
                for (n = 0; n < len; n++) {
                    diff.push(end[n] - start[n]);
                }
            }
        }
        else if (colorAttrs.indexOf(key) !== -1) {
            start = Util.colorToRGBA(start);
            endRGBA = Util.colorToRGBA(end);
            diff = {
                r: endRGBA.r - start.r,
                g: endRGBA.g - start.g,
                b: endRGBA.b - start.b,
                a: endRGBA.a - start.a,
            };
        }
        else {
            diff = end - start;
        }
        Tween_Tween.attrs[nodeId][this._id][key] = {
            start: start,
            diff: diff,
            end: end,
            trueEnd: trueEnd,
            trueStart: trueStart,
        };
        Tween_Tween.tweens[nodeId][key] = this._id;
    }
    _tweenFunc(i) {
        var node = this.node, attrs = Tween_Tween.attrs[node._id][this._id], key, attr, start, diff, newVal, n, len, end;
        for (key in attrs) {
            attr = attrs[key];
            start = attr.start;
            diff = attr.diff;
            end = attr.end;
            if (Util._isArray(start)) {
                newVal = [];
                len = Math.max(start.length, end.length);
                if (key.indexOf('fill') === 0) {
                    for (n = 0; n < len; n++) {
                        if (n % 2 === 0) {
                            newVal.push((start[n] || 0) + diff[n] * i);
                        }
                        else {
                            newVal.push('rgba(' +
                                Math.round(start[n].r + diff[n].r * i) +
                                ',' +
                                Math.round(start[n].g + diff[n].g * i) +
                                ',' +
                                Math.round(start[n].b + diff[n].b * i) +
                                ',' +
                                (start[n].a + diff[n].a * i) +
                                ')');
                        }
                    }
                }
                else {
                    for (n = 0; n < len; n++) {
                        newVal.push((start[n] || 0) + diff[n] * i);
                    }
                }
            }
            else if (colorAttrs.indexOf(key) !== -1) {
                newVal =
                    'rgba(' +
                        Math.round(start.r + diff.r * i) +
                        ',' +
                        Math.round(start.g + diff.g * i) +
                        ',' +
                        Math.round(start.b + diff.b * i) +
                        ',' +
                        (start.a + diff.a * i) +
                        ')';
            }
            else {
                newVal = start + diff * i;
            }
            node.setAttr(key, newVal);
        }
    }
    _addListeners() {
        this.tween.onPlay = () => {
            this.anim.start();
        };
        this.tween.onReverse = () => {
            this.anim.start();
        };
        this.tween.onPause = () => {
            this.anim.stop();
        };
        this.tween.onFinish = () => {
            var node = this.node;
            var attrs = Tween_Tween.attrs[node._id][this._id];
            if (attrs.points && attrs.points.trueEnd) {
                node.setAttr('points', attrs.points.trueEnd);
            }
            if (this.onFinish) {
                this.onFinish.call(this);
            }
        };
        this.tween.onReset = () => {
            var node = this.node;
            var attrs = Tween_Tween.attrs[node._id][this._id];
            if (attrs.points && attrs.points.trueStart) {
                node.points(attrs.points.trueStart);
            }
            if (this.onReset) {
                this.onReset();
            }
        };
        this.tween.onUpdate = () => {
            if (this.onUpdate) {
                this.onUpdate.call(this);
            }
        };
    }
    play() {
        this.tween.play();
        return this;
    }
    reverse() {
        this.tween.reverse();
        return this;
    }
    reset() {
        this.tween.reset();
        return this;
    }
    seek(t) {
        this.tween.seek(t * 1000);
        return this;
    }
    pause() {
        this.tween.pause();
        return this;
    }
    finish() {
        this.tween.finish();
        return this;
    }
    destroy() {
        var nodeId = this.node._id, thisId = this._id, attrs = Tween_Tween.tweens[nodeId], key;
        this.pause();
        for (key in attrs) {
            delete Tween_Tween.tweens[nodeId][key];
        }
        delete Tween_Tween.attrs[nodeId][thisId];
    }
}
Tween_Tween.attrs = {};
Tween_Tween.tweens = {};
Node_Node.prototype.to = function (params) {
    var onFinish = params.onFinish;
    params.node = this;
    params.onFinish = function () {
        this.destroy();
        if (onFinish) {
            onFinish();
        }
    };
    var tween = new Tween_Tween(params);
    tween.play();
};
const Easings = {
    BackEaseIn(t, b, c, d) {
        var s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    BackEaseOut(t, b, c, d) {
        var s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    BackEaseInOut(t, b, c, d) {
        var s = 1.70158;
        if ((t /= d / 2) < 1) {
            return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
        }
        return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    },
    ElasticEaseIn(t, b, c, d, a, p) {
        var s = 0;
        if (t === 0) {
            return b;
        }
        if ((t /= d) === 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        return (-(a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b);
    },
    ElasticEaseOut(t, b, c, d, a, p) {
        var s = 0;
        if (t === 0) {
            return b;
        }
        if ((t /= d) === 1) {
            return b + c;
        }
        if (!p) {
            p = d * 0.3;
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        return (a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) +
            c +
            b);
    },
    ElasticEaseInOut(t, b, c, d, a, p) {
        var s = 0;
        if (t === 0) {
            return b;
        }
        if ((t /= d / 2) === 2) {
            return b + c;
        }
        if (!p) {
            p = d * (0.3 * 1.5);
        }
        if (!a || a < Math.abs(c)) {
            a = c;
            s = p / 4;
        }
        else {
            s = (p / (2 * Math.PI)) * Math.asin(c / a);
        }
        if (t < 1) {
            return (-0.5 *
                (a *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t * d - s) * (2 * Math.PI)) / p)) +
                b);
        }
        return (a *
            Math.pow(2, -10 * (t -= 1)) *
            Math.sin(((t * d - s) * (2 * Math.PI)) / p) *
            0.5 +
            c +
            b);
    },
    BounceEaseOut(t, b, c, d) {
        if ((t /= d) < 1 / 2.75) {
            return c * (7.5625 * t * t) + b;
        }
        else if (t < 2 / 2.75) {
            return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
        }
        else if (t < 2.5 / 2.75) {
            return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
        }
        else {
            return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
        }
    },
    BounceEaseIn(t, b, c, d) {
        return c - Easings.BounceEaseOut(d - t, 0, c, d) + b;
    },
    BounceEaseInOut(t, b, c, d) {
        if (t < d / 2) {
            return Easings.BounceEaseIn(t * 2, 0, c, d) * 0.5 + b;
        }
        else {
            return Easings.BounceEaseOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
        }
    },
    EaseIn(t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    EaseOut(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    EaseInOut(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * t * t + b;
        }
        return (-c / 2) * (--t * (t - 2) - 1) + b;
    },
    StrongEaseIn(t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    StrongEaseOut(t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    StrongEaseInOut(t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return (c / 2) * t * t * t * t * t + b;
        }
        return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
    },
    Linear(t, b, c, d) {
        return (c * t) / d + b;
    },
};

// CONCATENATED MODULE: ./node_modules/konva/lib/_CoreInternals.js














const Konva = Util._assign(Global["a" /* Konva */], {
    Util: Util,
    Transform: Transform,
    Node: Node_Node,
    Container: Container_Container,
    Stage: Stage_Stage,
    stages: stages,
    Layer: Layer_Layer,
    FastLayer: FastLayer_FastLayer,
    Group: Group_Group,
    DD: DD,
    Shape: Shape_Shape,
    shapes: shapes,
    Animation: Animation_Animation,
    Tween: Tween_Tween,
    Easings: Easings,
    Context: Context_Context,
    Canvas: Canvas_Canvas,
});
/* harmony default export */ var _CoreInternals = (Konva);

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Arc.js





class Arc_Arc extends Shape_Shape {
    _sceneFunc(context) {
        var angle = Global["a" /* Konva */].getAngle(this.angle()), clockwise = this.clockwise();
        context.beginPath();
        context.arc(0, 0, this.outerRadius(), 0, angle, clockwise);
        context.arc(0, 0, this.innerRadius(), angle, 0, !clockwise);
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        return this.outerRadius() * 2;
    }
    getHeight() {
        return this.outerRadius() * 2;
    }
    setWidth(width) {
        this.outerRadius(width / 2);
    }
    setHeight(height) {
        this.outerRadius(height / 2);
    }
    getSelfRect() {
        const innerRadius = this.innerRadius();
        const outerRadius = this.outerRadius();
        const clockwise = this.clockwise();
        const angle = Global["a" /* Konva */].getAngle(clockwise ? 360 - this.angle() : this.angle());
        const boundLeftRatio = Math.cos(Math.min(angle, Math.PI));
        const boundRightRatio = 1;
        const boundTopRatio = Math.sin(Math.min(Math.max(Math.PI, angle), (3 * Math.PI) / 2));
        const boundBottomRatio = Math.sin(Math.min(angle, Math.PI / 2));
        const boundLeft = boundLeftRatio * (boundLeftRatio > 0 ? innerRadius : outerRadius);
        const boundRight = boundRightRatio * (boundRightRatio > 0 ? outerRadius : innerRadius);
        const boundTop = boundTopRatio * (boundTopRatio > 0 ? innerRadius : outerRadius);
        const boundBottom = boundBottomRatio * (boundBottomRatio > 0 ? outerRadius : innerRadius);
        return {
            x: boundLeft,
            y: clockwise ? -1 * boundBottom : boundTop,
            width: boundRight - boundLeft,
            height: boundBottom - boundTop,
        };
    }
}
Arc_Arc.prototype._centroid = true;
Arc_Arc.prototype.className = 'Arc';
Arc_Arc.prototype._attrsAffectingSize = ['innerRadius', 'outerRadius'];
Object(Global["b" /* _registerNode */])(Arc_Arc);
Factory.addGetterSetter(Arc_Arc, 'innerRadius', 0, getNumberValidator());
Factory.addGetterSetter(Arc_Arc, 'outerRadius', 0, getNumberValidator());
Factory.addGetterSetter(Arc_Arc, 'angle', 0, getNumberValidator());
Factory.addGetterSetter(Arc_Arc, 'clockwise', false, getBooleanValidator());

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Line.js




function getControlPoints(x0, y0, x1, y1, x2, y2, t) {
    var d01 = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2)), d12 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)), fa = (t * d01) / (d01 + d12), fb = (t * d12) / (d01 + d12), p1x = x1 - fa * (x2 - x0), p1y = y1 - fa * (y2 - y0), p2x = x1 + fb * (x2 - x0), p2y = y1 + fb * (y2 - y0);
    return [p1x, p1y, p2x, p2y];
}
function expandPoints(p, tension) {
    var len = p.length, allPoints = [], n, cp;
    for (n = 2; n < len - 2; n += 2) {
        cp = getControlPoints(p[n - 2], p[n - 1], p[n], p[n + 1], p[n + 2], p[n + 3], tension);
        if (isNaN(cp[0])) {
            continue;
        }
        allPoints.push(cp[0]);
        allPoints.push(cp[1]);
        allPoints.push(p[n]);
        allPoints.push(p[n + 1]);
        allPoints.push(cp[2]);
        allPoints.push(cp[3]);
    }
    return allPoints;
}
class Line_Line extends Shape_Shape {
    constructor(config) {
        super(config);
        this.on('pointsChange.konva tensionChange.konva closedChange.konva bezierChange.konva', function () {
            this._clearCache('tensionPoints');
        });
    }
    _sceneFunc(context) {
        var points = this.points(), length = points.length, tension = this.tension(), closed = this.closed(), bezier = this.bezier(), tp, len, n;
        if (!length) {
            return;
        }
        context.beginPath();
        context.moveTo(points[0], points[1]);
        if (tension !== 0 && length > 4) {
            tp = this.getTensionPoints();
            len = tp.length;
            n = closed ? 0 : 4;
            if (!closed) {
                context.quadraticCurveTo(tp[0], tp[1], tp[2], tp[3]);
            }
            while (n < len - 2) {
                context.bezierCurveTo(tp[n++], tp[n++], tp[n++], tp[n++], tp[n++], tp[n++]);
            }
            if (!closed) {
                context.quadraticCurveTo(tp[len - 2], tp[len - 1], points[length - 2], points[length - 1]);
            }
        }
        else if (bezier) {
            n = 2;
            while (n < length) {
                context.bezierCurveTo(points[n++], points[n++], points[n++], points[n++], points[n++], points[n++]);
            }
        }
        else {
            for (n = 2; n < length; n += 2) {
                context.lineTo(points[n], points[n + 1]);
            }
        }
        if (closed) {
            context.closePath();
            context.fillStrokeShape(this);
        }
        else {
            context.strokeShape(this);
        }
    }
    getTensionPoints() {
        return this._getCache('tensionPoints', this._getTensionPoints);
    }
    _getTensionPoints() {
        if (this.closed()) {
            return this._getTensionPointsClosed();
        }
        else {
            return expandPoints(this.points(), this.tension());
        }
    }
    _getTensionPointsClosed() {
        var p = this.points(), len = p.length, tension = this.tension(), firstControlPoints = getControlPoints(p[len - 2], p[len - 1], p[0], p[1], p[2], p[3], tension), lastControlPoints = getControlPoints(p[len - 4], p[len - 3], p[len - 2], p[len - 1], p[0], p[1], tension), middle = expandPoints(p, tension), tp = [firstControlPoints[2], firstControlPoints[3]]
            .concat(middle)
            .concat([
            lastControlPoints[0],
            lastControlPoints[1],
            p[len - 2],
            p[len - 1],
            lastControlPoints[2],
            lastControlPoints[3],
            firstControlPoints[0],
            firstControlPoints[1],
            p[0],
            p[1],
        ]);
        return tp;
    }
    getWidth() {
        return this.getSelfRect().width;
    }
    getHeight() {
        return this.getSelfRect().height;
    }
    getSelfRect() {
        var points = this.points();
        if (points.length < 4) {
            return {
                x: points[0] || 0,
                y: points[1] || 0,
                width: 0,
                height: 0,
            };
        }
        if (this.tension() !== 0) {
            points = [
                points[0],
                points[1],
                ...this._getTensionPoints(),
                points[points.length - 2],
                points[points.length - 1],
            ];
        }
        else {
            points = this.points();
        }
        var minX = points[0];
        var maxX = points[0];
        var minY = points[1];
        var maxY = points[1];
        var x, y;
        for (var i = 0; i < points.length / 2; i++) {
            x = points[i * 2];
            y = points[i * 2 + 1];
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        }
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
        };
    }
}
Line_Line.prototype.className = 'Line';
Line_Line.prototype._attrsAffectingSize = ['points', 'bezier', 'tension'];
Object(Global["b" /* _registerNode */])(Line_Line);
Factory.addGetterSetter(Line_Line, 'closed', false);
Factory.addGetterSetter(Line_Line, 'bezier', false);
Factory.addGetterSetter(Line_Line, 'tension', 0, getNumberValidator());
Factory.addGetterSetter(Line_Line, 'points', [], getNumberArrayValidator());

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Path.js



class Path_Path extends Shape_Shape {
    constructor(config) {
        super(config);
        this.dataArray = [];
        this.pathLength = 0;
        this.dataArray = Path_Path.parsePathData(this.data());
        this.pathLength = 0;
        for (var i = 0; i < this.dataArray.length; ++i) {
            this.pathLength += this.dataArray[i].pathLength;
        }
        this.on('dataChange.konva', function () {
            this.dataArray = Path_Path.parsePathData(this.data());
            this.pathLength = 0;
            for (var i = 0; i < this.dataArray.length; ++i) {
                this.pathLength += this.dataArray[i].pathLength;
            }
        });
    }
    _sceneFunc(context) {
        var ca = this.dataArray;
        context.beginPath();
        var isClosed = false;
        for (var n = 0; n < ca.length; n++) {
            var c = ca[n].command;
            var p = ca[n].points;
            switch (c) {
                case 'L':
                    context.lineTo(p[0], p[1]);
                    break;
                case 'M':
                    context.moveTo(p[0], p[1]);
                    break;
                case 'C':
                    context.bezierCurveTo(p[0], p[1], p[2], p[3], p[4], p[5]);
                    break;
                case 'Q':
                    context.quadraticCurveTo(p[0], p[1], p[2], p[3]);
                    break;
                case 'A':
                    var cx = p[0], cy = p[1], rx = p[2], ry = p[3], theta = p[4], dTheta = p[5], psi = p[6], fs = p[7];
                    var r = rx > ry ? rx : ry;
                    var scaleX = rx > ry ? 1 : rx / ry;
                    var scaleY = rx > ry ? ry / rx : 1;
                    context.translate(cx, cy);
                    context.rotate(psi);
                    context.scale(scaleX, scaleY);
                    context.arc(0, 0, r, theta, theta + dTheta, 1 - fs);
                    context.scale(1 / scaleX, 1 / scaleY);
                    context.rotate(-psi);
                    context.translate(-cx, -cy);
                    break;
                case 'z':
                    isClosed = true;
                    context.closePath();
                    break;
            }
        }
        if (!isClosed && !this.hasFill()) {
            context.strokeShape(this);
        }
        else {
            context.fillStrokeShape(this);
        }
    }
    getSelfRect() {
        var points = [];
        this.dataArray.forEach(function (data) {
            if (data.command === 'A') {
                var start = data.points[4];
                var dTheta = data.points[5];
                var end = data.points[4] + dTheta;
                var inc = Math.PI / 180.0;
                if (Math.abs(start - end) < inc) {
                    inc = Math.abs(start - end);
                }
                if (dTheta < 0) {
                    for (let t = start - inc; t > end; t -= inc) {
                        const point = Path_Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t, 0);
                        points.push(point.x, point.y);
                    }
                }
                else {
                    for (let t = start + inc; t < end; t += inc) {
                        const point = Path_Path.getPointOnEllipticalArc(data.points[0], data.points[1], data.points[2], data.points[3], t, 0);
                        points.push(point.x, point.y);
                    }
                }
            }
            else if (data.command === 'C') {
                for (let t = 0.0; t <= 1; t += 0.01) {
                    const point = Path_Path.getPointOnCubicBezier(t, data.start.x, data.start.y, data.points[0], data.points[1], data.points[2], data.points[3], data.points[4], data.points[5]);
                    points.push(point.x, point.y);
                }
            }
            else {
                points = points.concat(data.points);
            }
        });
        var minX = points[0];
        var maxX = points[0];
        var minY = points[1];
        var maxY = points[1];
        var x, y;
        for (var i = 0; i < points.length / 2; i++) {
            x = points[i * 2];
            y = points[i * 2 + 1];
            if (!isNaN(x)) {
                minX = Math.min(minX, x);
                maxX = Math.max(maxX, x);
            }
            if (!isNaN(y)) {
                minY = Math.min(minY, y);
                maxY = Math.max(maxY, y);
            }
        }
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
        };
    }
    getLength() {
        return this.pathLength;
    }
    getPointAtLength(length) {
        var point, i = 0, ii = this.dataArray.length;
        if (!ii) {
            return null;
        }
        while (i < ii && length > this.dataArray[i].pathLength) {
            length -= this.dataArray[i].pathLength;
            ++i;
        }
        if (i === ii) {
            point = this.dataArray[i - 1].points.slice(-2);
            return {
                x: point[0],
                y: point[1],
            };
        }
        if (length < 0.01) {
            point = this.dataArray[i].points.slice(0, 2);
            return {
                x: point[0],
                y: point[1],
            };
        }
        var cp = this.dataArray[i];
        var p = cp.points;
        switch (cp.command) {
            case 'L':
                return Path_Path.getPointOnLine(length, cp.start.x, cp.start.y, p[0], p[1]);
            case 'C':
                return Path_Path.getPointOnCubicBezier(length / cp.pathLength, cp.start.x, cp.start.y, p[0], p[1], p[2], p[3], p[4], p[5]);
            case 'Q':
                return Path_Path.getPointOnQuadraticBezier(length / cp.pathLength, cp.start.x, cp.start.y, p[0], p[1], p[2], p[3]);
            case 'A':
                var cx = p[0], cy = p[1], rx = p[2], ry = p[3], theta = p[4], dTheta = p[5], psi = p[6];
                theta += (dTheta * length) / cp.pathLength;
                return Path_Path.getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi);
        }
        return null;
    }
    static getLineLength(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
    }
    static getPointOnLine(dist, P1x, P1y, P2x, P2y, fromX, fromY) {
        if (fromX === undefined) {
            fromX = P1x;
        }
        if (fromY === undefined) {
            fromY = P1y;
        }
        var m = (P2y - P1y) / (P2x - P1x + 0.00000001);
        var run = Math.sqrt((dist * dist) / (1 + m * m));
        if (P2x < P1x) {
            run *= -1;
        }
        var rise = m * run;
        var pt;
        if (P2x === P1x) {
            pt = {
                x: fromX,
                y: fromY + rise,
            };
        }
        else if ((fromY - P1y) / (fromX - P1x + 0.00000001) === m) {
            pt = {
                x: fromX + run,
                y: fromY + rise,
            };
        }
        else {
            var ix, iy;
            var len = this.getLineLength(P1x, P1y, P2x, P2y);
            var u = (fromX - P1x) * (P2x - P1x) + (fromY - P1y) * (P2y - P1y);
            u = u / (len * len);
            ix = P1x + u * (P2x - P1x);
            iy = P1y + u * (P2y - P1y);
            var pRise = this.getLineLength(fromX, fromY, ix, iy);
            var pRun = Math.sqrt(dist * dist - pRise * pRise);
            run = Math.sqrt((pRun * pRun) / (1 + m * m));
            if (P2x < P1x) {
                run *= -1;
            }
            rise = m * run;
            pt = {
                x: ix + run,
                y: iy + rise,
            };
        }
        return pt;
    }
    static getPointOnCubicBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y, P4x, P4y) {
        function CB1(t) {
            return t * t * t;
        }
        function CB2(t) {
            return 3 * t * t * (1 - t);
        }
        function CB3(t) {
            return 3 * t * (1 - t) * (1 - t);
        }
        function CB4(t) {
            return (1 - t) * (1 - t) * (1 - t);
        }
        var x = P4x * CB1(pct) + P3x * CB2(pct) + P2x * CB3(pct) + P1x * CB4(pct);
        var y = P4y * CB1(pct) + P3y * CB2(pct) + P2y * CB3(pct) + P1y * CB4(pct);
        return {
            x: x,
            y: y,
        };
    }
    static getPointOnQuadraticBezier(pct, P1x, P1y, P2x, P2y, P3x, P3y) {
        function QB1(t) {
            return t * t;
        }
        function QB2(t) {
            return 2 * t * (1 - t);
        }
        function QB3(t) {
            return (1 - t) * (1 - t);
        }
        var x = P3x * QB1(pct) + P2x * QB2(pct) + P1x * QB3(pct);
        var y = P3y * QB1(pct) + P2y * QB2(pct) + P1y * QB3(pct);
        return {
            x: x,
            y: y,
        };
    }
    static getPointOnEllipticalArc(cx, cy, rx, ry, theta, psi) {
        var cosPsi = Math.cos(psi), sinPsi = Math.sin(psi);
        var pt = {
            x: rx * Math.cos(theta),
            y: ry * Math.sin(theta),
        };
        return {
            x: cx + (pt.x * cosPsi - pt.y * sinPsi),
            y: cy + (pt.x * sinPsi + pt.y * cosPsi),
        };
    }
    static parsePathData(data) {
        if (!data) {
            return [];
        }
        var cs = data;
        var cc = [
            'm',
            'M',
            'l',
            'L',
            'v',
            'V',
            'h',
            'H',
            'z',
            'Z',
            'c',
            'C',
            'q',
            'Q',
            't',
            'T',
            's',
            'S',
            'a',
            'A',
        ];
        cs = cs.replace(new RegExp(' ', 'g'), ',');
        for (var n = 0; n < cc.length; n++) {
            cs = cs.replace(new RegExp(cc[n], 'g'), '|' + cc[n]);
        }
        var arr = cs.split('|');
        var ca = [];
        var coords = [];
        var cpx = 0;
        var cpy = 0;
        var re = /([-+]?((\d+\.\d+)|((\d+)|(\.\d+)))(?:e[-+]?\d+)?)/gi;
        var match;
        for (n = 1; n < arr.length; n++) {
            var str = arr[n];
            var c = str.charAt(0);
            str = str.slice(1);
            coords.length = 0;
            while ((match = re.exec(str))) {
                coords.push(match[0]);
            }
            var p = [];
            for (var j = 0, jlen = coords.length; j < jlen; j++) {
                if (coords[j] === '00') {
                    p.push(0, 0);
                    continue;
                }
                var parsed = parseFloat(coords[j]);
                if (!isNaN(parsed)) {
                    p.push(parsed);
                }
                else {
                    p.push(0);
                }
            }
            while (p.length > 0) {
                if (isNaN(p[0])) {
                    break;
                }
                var cmd = null;
                var points = [];
                var startX = cpx, startY = cpy;
                var prevCmd, ctlPtx, ctlPty;
                var rx, ry, psi, fa, fs, x1, y1;
                switch (c) {
                    case 'l':
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'L':
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'm':
                        var dx = p.shift();
                        var dy = p.shift();
                        cpx += dx;
                        cpy += dy;
                        cmd = 'M';
                        if (ca.length > 2 && ca[ca.length - 1].command === 'z') {
                            for (var idx = ca.length - 2; idx >= 0; idx--) {
                                if (ca[idx].command === 'M') {
                                    cpx = ca[idx].points[0] + dx;
                                    cpy = ca[idx].points[1] + dy;
                                    break;
                                }
                            }
                        }
                        points.push(cpx, cpy);
                        c = 'l';
                        break;
                    case 'M':
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'M';
                        points.push(cpx, cpy);
                        c = 'L';
                        break;
                    case 'h':
                        cpx += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'H':
                        cpx = p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'v':
                        cpy += p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'V':
                        cpy = p.shift();
                        cmd = 'L';
                        points.push(cpx, cpy);
                        break;
                    case 'C':
                        points.push(p.shift(), p.shift(), p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'c':
                        points.push(cpx + p.shift(), cpy + p.shift(), cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 'S':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if (prevCmd.command === 'C') {
                            ctlPtx = cpx + (cpx - prevCmd.points[2]);
                            ctlPty = cpy + (cpy - prevCmd.points[3]);
                        }
                        points.push(ctlPtx, ctlPty, p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 's':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if (prevCmd.command === 'C') {
                            ctlPtx = cpx + (cpx - prevCmd.points[2]);
                            ctlPty = cpy + (cpy - prevCmd.points[3]);
                        }
                        points.push(ctlPtx, ctlPty, cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'C';
                        points.push(cpx, cpy);
                        break;
                    case 'Q':
                        points.push(p.shift(), p.shift());
                        cpx = p.shift();
                        cpy = p.shift();
                        points.push(cpx, cpy);
                        break;
                    case 'q':
                        points.push(cpx + p.shift(), cpy + p.shift());
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'Q';
                        points.push(cpx, cpy);
                        break;
                    case 'T':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if (prevCmd.command === 'Q') {
                            ctlPtx = cpx + (cpx - prevCmd.points[0]);
                            ctlPty = cpy + (cpy - prevCmd.points[1]);
                        }
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'Q';
                        points.push(ctlPtx, ctlPty, cpx, cpy);
                        break;
                    case 't':
                        ctlPtx = cpx;
                        ctlPty = cpy;
                        prevCmd = ca[ca.length - 1];
                        if (prevCmd.command === 'Q') {
                            ctlPtx = cpx + (cpx - prevCmd.points[0]);
                            ctlPty = cpy + (cpy - prevCmd.points[1]);
                        }
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'Q';
                        points.push(ctlPtx, ctlPty, cpx, cpy);
                        break;
                    case 'A':
                        rx = p.shift();
                        ry = p.shift();
                        psi = p.shift();
                        fa = p.shift();
                        fs = p.shift();
                        x1 = cpx;
                        y1 = cpy;
                        cpx = p.shift();
                        cpy = p.shift();
                        cmd = 'A';
                        points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
                        break;
                    case 'a':
                        rx = p.shift();
                        ry = p.shift();
                        psi = p.shift();
                        fa = p.shift();
                        fs = p.shift();
                        x1 = cpx;
                        y1 = cpy;
                        cpx += p.shift();
                        cpy += p.shift();
                        cmd = 'A';
                        points = this.convertEndpointToCenterParameterization(x1, y1, cpx, cpy, fa, fs, rx, ry, psi);
                        break;
                }
                ca.push({
                    command: cmd || c,
                    points: points,
                    start: {
                        x: startX,
                        y: startY,
                    },
                    pathLength: this.calcLength(startX, startY, cmd || c, points),
                });
            }
            if (c === 'z' || c === 'Z') {
                ca.push({
                    command: 'z',
                    points: [],
                    start: undefined,
                    pathLength: 0,
                });
            }
        }
        return ca;
    }
    static calcLength(x, y, cmd, points) {
        var len, p1, p2, t;
        var path = Path_Path;
        switch (cmd) {
            case 'L':
                return path.getLineLength(x, y, points[0], points[1]);
            case 'C':
                len = 0.0;
                p1 = path.getPointOnCubicBezier(0, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                for (t = 0.01; t <= 1; t += 0.01) {
                    p2 = path.getPointOnCubicBezier(t, x, y, points[0], points[1], points[2], points[3], points[4], points[5]);
                    len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                return len;
            case 'Q':
                len = 0.0;
                p1 = path.getPointOnQuadraticBezier(0, x, y, points[0], points[1], points[2], points[3]);
                for (t = 0.01; t <= 1; t += 0.01) {
                    p2 = path.getPointOnQuadraticBezier(t, x, y, points[0], points[1], points[2], points[3]);
                    len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                    p1 = p2;
                }
                return len;
            case 'A':
                len = 0.0;
                var start = points[4];
                var dTheta = points[5];
                var end = points[4] + dTheta;
                var inc = Math.PI / 180.0;
                if (Math.abs(start - end) < inc) {
                    inc = Math.abs(start - end);
                }
                p1 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], start, 0);
                if (dTheta < 0) {
                    for (t = start - inc; t > end; t -= inc) {
                        p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                        len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        p1 = p2;
                    }
                }
                else {
                    for (t = start + inc; t < end; t += inc) {
                        p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], t, 0);
                        len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                        p1 = p2;
                    }
                }
                p2 = path.getPointOnEllipticalArc(points[0], points[1], points[2], points[3], end, 0);
                len += path.getLineLength(p1.x, p1.y, p2.x, p2.y);
                return len;
        }
        return 0;
    }
    static convertEndpointToCenterParameterization(x1, y1, x2, y2, fa, fs, rx, ry, psiDeg) {
        var psi = psiDeg * (Math.PI / 180.0);
        var xp = (Math.cos(psi) * (x1 - x2)) / 2.0 + (Math.sin(psi) * (y1 - y2)) / 2.0;
        var yp = (-1 * Math.sin(psi) * (x1 - x2)) / 2.0 +
            (Math.cos(psi) * (y1 - y2)) / 2.0;
        var lambda = (xp * xp) / (rx * rx) + (yp * yp) / (ry * ry);
        if (lambda > 1) {
            rx *= Math.sqrt(lambda);
            ry *= Math.sqrt(lambda);
        }
        var f = Math.sqrt((rx * rx * (ry * ry) - rx * rx * (yp * yp) - ry * ry * (xp * xp)) /
            (rx * rx * (yp * yp) + ry * ry * (xp * xp)));
        if (fa === fs) {
            f *= -1;
        }
        if (isNaN(f)) {
            f = 0;
        }
        var cxp = (f * rx * yp) / ry;
        var cyp = (f * -ry * xp) / rx;
        var cx = (x1 + x2) / 2.0 + Math.cos(psi) * cxp - Math.sin(psi) * cyp;
        var cy = (y1 + y2) / 2.0 + Math.sin(psi) * cxp + Math.cos(psi) * cyp;
        var vMag = function (v) {
            return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
        };
        var vRatio = function (u, v) {
            return (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v));
        };
        var vAngle = function (u, v) {
            return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
        };
        var theta = vAngle([1, 0], [(xp - cxp) / rx, (yp - cyp) / ry]);
        var u = [(xp - cxp) / rx, (yp - cyp) / ry];
        var v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
        var dTheta = vAngle(u, v);
        if (vRatio(u, v) <= -1) {
            dTheta = Math.PI;
        }
        if (vRatio(u, v) >= 1) {
            dTheta = 0;
        }
        if (fs === 0 && dTheta > 0) {
            dTheta = dTheta - 2 * Math.PI;
        }
        if (fs === 1 && dTheta < 0) {
            dTheta = dTheta + 2 * Math.PI;
        }
        return [cx, cy, rx, ry, theta, dTheta, psi, fs];
    }
}
Path_Path.prototype.className = 'Path';
Path_Path.prototype._attrsAffectingSize = ['data'];
Object(Global["b" /* _registerNode */])(Path_Path);
Factory.addGetterSetter(Path_Path, 'data');

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Arrow.js





class Arrow_Arrow extends Line_Line {
    _sceneFunc(ctx) {
        super._sceneFunc(ctx);
        var PI2 = Math.PI * 2;
        var points = this.points();
        var tp = points;
        var fromTension = this.tension() !== 0 && points.length > 4;
        if (fromTension) {
            tp = this.getTensionPoints();
        }
        var length = this.pointerLength();
        var n = points.length;
        var dx, dy;
        if (fromTension) {
            const lp = [
                tp[tp.length - 4],
                tp[tp.length - 3],
                tp[tp.length - 2],
                tp[tp.length - 1],
                points[n - 2],
                points[n - 1],
            ];
            const lastLength = Path_Path.calcLength(tp[tp.length - 4], tp[tp.length - 3], 'C', lp);
            const previous = Path_Path.getPointOnQuadraticBezier(Math.min(1, 1 - length / lastLength), lp[0], lp[1], lp[2], lp[3], lp[4], lp[5]);
            dx = points[n - 2] - previous.x;
            dy = points[n - 1] - previous.y;
        }
        else {
            dx = points[n - 2] - points[n - 4];
            dy = points[n - 1] - points[n - 3];
        }
        var radians = (Math.atan2(dy, dx) + PI2) % PI2;
        var width = this.pointerWidth();
        if (this.pointerAtEnding()) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(points[n - 2], points[n - 1]);
            ctx.rotate(radians);
            ctx.moveTo(0, 0);
            ctx.lineTo(-length, width / 2);
            ctx.lineTo(-length, -width / 2);
            ctx.closePath();
            ctx.restore();
            this.__fillStroke(ctx);
        }
        if (this.pointerAtBeginning()) {
            ctx.save();
            ctx.beginPath();
            ctx.translate(points[0], points[1]);
            if (fromTension) {
                dx = (tp[0] + tp[2]) / 2 - points[0];
                dy = (tp[1] + tp[3]) / 2 - points[1];
            }
            else {
                dx = points[2] - points[0];
                dy = points[3] - points[1];
            }
            ctx.rotate((Math.atan2(-dy, -dx) + PI2) % PI2);
            ctx.moveTo(0, 0);
            ctx.lineTo(-length, width / 2);
            ctx.lineTo(-length, -width / 2);
            ctx.closePath();
            ctx.restore();
            this.__fillStroke(ctx);
        }
    }
    __fillStroke(ctx) {
        var isDashEnabled = this.dashEnabled();
        if (isDashEnabled) {
            this.attrs.dashEnabled = false;
            ctx.setLineDash([]);
        }
        ctx.fillStrokeShape(this);
        if (isDashEnabled) {
            this.attrs.dashEnabled = true;
        }
    }
    getSelfRect() {
        const lineRect = super.getSelfRect();
        const offset = this.pointerWidth() / 2;
        return {
            x: lineRect.x - offset,
            y: lineRect.y - offset,
            width: lineRect.width + offset * 2,
            height: lineRect.height + offset * 2,
        };
    }
}
Arrow_Arrow.prototype.className = 'Arrow';
Object(Global["b" /* _registerNode */])(Arrow_Arrow);
Factory.addGetterSetter(Arrow_Arrow, 'pointerLength', 10, getNumberValidator());
Factory.addGetterSetter(Arrow_Arrow, 'pointerWidth', 10, getNumberValidator());
Factory.addGetterSetter(Arrow_Arrow, 'pointerAtBeginning', false);
Factory.addGetterSetter(Arrow_Arrow, 'pointerAtEnding', true);

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Circle.js




class Circle_Circle extends Shape_Shape {
    _sceneFunc(context) {
        context.beginPath();
        context.arc(0, 0, this.attrs.radius || 0, 0, Math.PI * 2, false);
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        return this.radius() * 2;
    }
    getHeight() {
        return this.radius() * 2;
    }
    setWidth(width) {
        if (this.radius() !== width / 2) {
            this.radius(width / 2);
        }
    }
    setHeight(height) {
        if (this.radius() !== height / 2) {
            this.radius(height / 2);
        }
    }
}
Circle_Circle.prototype._centroid = true;
Circle_Circle.prototype.className = 'Circle';
Circle_Circle.prototype._attrsAffectingSize = ['radius'];
Object(Global["b" /* _registerNode */])(Circle_Circle);
Factory.addGetterSetter(Circle_Circle, 'radius', 0, getNumberValidator());

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Ellipse.js




class Ellipse_Ellipse extends Shape_Shape {
    _sceneFunc(context) {
        var rx = this.radiusX(), ry = this.radiusY();
        context.beginPath();
        context.save();
        if (rx !== ry) {
            context.scale(1, ry / rx);
        }
        context.arc(0, 0, rx, 0, Math.PI * 2, false);
        context.restore();
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        return this.radiusX() * 2;
    }
    getHeight() {
        return this.radiusY() * 2;
    }
    setWidth(width) {
        this.radiusX(width / 2);
    }
    setHeight(height) {
        this.radiusY(height / 2);
    }
}
Ellipse_Ellipse.prototype.className = 'Ellipse';
Ellipse_Ellipse.prototype._centroid = true;
Ellipse_Ellipse.prototype._attrsAffectingSize = ['radiusX', 'radiusY'];
Object(Global["b" /* _registerNode */])(Ellipse_Ellipse);
Factory.addComponentsGetterSetter(Ellipse_Ellipse, 'radius', ['x', 'y']);
Factory.addGetterSetter(Ellipse_Ellipse, 'radiusX', 0, getNumberValidator());
Factory.addGetterSetter(Ellipse_Ellipse, 'radiusY', 0, getNumberValidator());

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Image.js





class Image_Image extends Shape_Shape {
    constructor(attrs) {
        super(attrs);
        this.on('imageChange.konva', () => {
            this._setImageLoad();
        });
        this._setImageLoad();
    }
    _setImageLoad() {
        const image = this.image();
        if (image && image.complete) {
            return;
        }
        if (image && image.readyState === 4) {
            return;
        }
        if (image && image['addEventListener']) {
            image['addEventListener']('load', () => {
                this._requestDraw();
            });
        }
    }
    _useBufferCanvas() {
        return super._useBufferCanvas(true);
    }
    _sceneFunc(context) {
        const width = this.getWidth();
        const height = this.getHeight();
        const image = this.attrs.image;
        let params;
        if (image) {
            const cropWidth = this.attrs.cropWidth;
            const cropHeight = this.attrs.cropHeight;
            if (cropWidth && cropHeight) {
                params = [
                    image,
                    this.cropX(),
                    this.cropY(),
                    cropWidth,
                    cropHeight,
                    0,
                    0,
                    width,
                    height,
                ];
            }
            else {
                params = [image, 0, 0, width, height];
            }
        }
        if (this.hasFill() || this.hasStroke()) {
            context.beginPath();
            context.rect(0, 0, width, height);
            context.closePath();
            context.fillStrokeShape(this);
        }
        if (image) {
            context.drawImage.apply(context, params);
        }
    }
    _hitFunc(context) {
        var width = this.width(), height = this.height();
        context.beginPath();
        context.rect(0, 0, width, height);
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        var _a, _b;
        return (_a = this.attrs.width) !== null && _a !== void 0 ? _a : (_b = this.image()) === null || _b === void 0 ? void 0 : _b.width;
    }
    getHeight() {
        var _a, _b;
        return (_a = this.attrs.height) !== null && _a !== void 0 ? _a : (_b = this.image()) === null || _b === void 0 ? void 0 : _b.height;
    }
    static fromURL(url, callback, onError = null) {
        var img = Util.createImageElement();
        img.onload = function () {
            var image = new Image_Image({
                image: img,
            });
            callback(image);
        };
        img.onerror = onError;
        img.crossOrigin = 'Anonymous';
        img.src = url;
    }
}
Image_Image.prototype.className = 'Image';
Object(Global["b" /* _registerNode */])(Image_Image);
Factory.addGetterSetter(Image_Image, 'image');
Factory.addComponentsGetterSetter(Image_Image, 'crop', ['x', 'y', 'width', 'height']);
Factory.addGetterSetter(Image_Image, 'cropX', 0, getNumberValidator());
Factory.addGetterSetter(Image_Image, 'cropY', 0, getNumberValidator());
Factory.addGetterSetter(Image_Image, 'cropWidth', 0, getNumberValidator());
Factory.addGetterSetter(Image_Image, 'cropHeight', 0, getNumberValidator());

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Label.js





var ATTR_CHANGE_LIST = [
    'fontFamily',
    'fontSize',
    'fontStyle',
    'padding',
    'lineHeight',
    'text',
    'width',
    'height',
], CHANGE_KONVA = 'Change.konva', NONE = 'none', UP = 'up', RIGHT = 'right', DOWN = 'down', LEFT = 'left', attrChangeListLen = ATTR_CHANGE_LIST.length;
class Label_Label extends Group_Group {
    constructor(config) {
        super(config);
        this.on('add.konva', function (evt) {
            this._addListeners(evt.child);
            this._sync();
        });
    }
    getText() {
        return this.find('Text')[0];
    }
    getTag() {
        return this.find('Tag')[0];
    }
    _addListeners(text) {
        var that = this, n;
        var func = function () {
            that._sync();
        };
        for (n = 0; n < attrChangeListLen; n++) {
            text.on(ATTR_CHANGE_LIST[n] + CHANGE_KONVA, func);
        }
    }
    getWidth() {
        return this.getText().width();
    }
    getHeight() {
        return this.getText().height();
    }
    _sync() {
        var text = this.getText(), tag = this.getTag(), width, height, pointerDirection, pointerWidth, x, y, pointerHeight;
        if (text && tag) {
            width = text.width();
            height = text.height();
            pointerDirection = tag.pointerDirection();
            pointerWidth = tag.pointerWidth();
            pointerHeight = tag.pointerHeight();
            x = 0;
            y = 0;
            switch (pointerDirection) {
                case UP:
                    x = width / 2;
                    y = -1 * pointerHeight;
                    break;
                case RIGHT:
                    x = width + pointerWidth;
                    y = height / 2;
                    break;
                case DOWN:
                    x = width / 2;
                    y = height + pointerHeight;
                    break;
                case LEFT:
                    x = -1 * pointerWidth;
                    y = height / 2;
                    break;
            }
            tag.setAttrs({
                x: -1 * x,
                y: -1 * y,
                width: width,
                height: height,
            });
            text.setAttrs({
                x: -1 * x,
                y: -1 * y,
            });
        }
    }
}
Label_Label.prototype.className = 'Label';
Object(Global["b" /* _registerNode */])(Label_Label);
class Label_Tag extends Shape_Shape {
    _sceneFunc(context) {
        var width = this.width(), height = this.height(), pointerDirection = this.pointerDirection(), pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), cornerRadius = this.cornerRadius();
        let topLeft = 0;
        let topRight = 0;
        let bottomLeft = 0;
        let bottomRight = 0;
        if (typeof cornerRadius === 'number') {
            topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
        }
        else {
            topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
            topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
            bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
            bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
        }
        context.beginPath();
        context.moveTo(topLeft, 0);
        if (pointerDirection === UP) {
            context.lineTo((width - pointerWidth) / 2, 0);
            context.lineTo(width / 2, -1 * pointerHeight);
            context.lineTo((width + pointerWidth) / 2, 0);
        }
        context.lineTo(width - topRight, 0);
        context.arc(width - topRight, topRight, topRight, (Math.PI * 3) / 2, 0, false);
        if (pointerDirection === RIGHT) {
            context.lineTo(width, (height - pointerHeight) / 2);
            context.lineTo(width + pointerWidth, height / 2);
            context.lineTo(width, (height + pointerHeight) / 2);
        }
        context.lineTo(width, height - bottomRight);
        context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
        if (pointerDirection === DOWN) {
            context.lineTo((width + pointerWidth) / 2, height);
            context.lineTo(width / 2, height + pointerHeight);
            context.lineTo((width - pointerWidth) / 2, height);
        }
        context.lineTo(bottomLeft, height);
        context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
        if (pointerDirection === LEFT) {
            context.lineTo(0, (height + pointerHeight) / 2);
            context.lineTo(-1 * pointerWidth, height / 2);
            context.lineTo(0, (height - pointerHeight) / 2);
        }
        context.lineTo(0, topLeft);
        context.arc(topLeft, topLeft, topLeft, Math.PI, (Math.PI * 3) / 2, false);
        context.closePath();
        context.fillStrokeShape(this);
    }
    getSelfRect() {
        var x = 0, y = 0, pointerWidth = this.pointerWidth(), pointerHeight = this.pointerHeight(), direction = this.pointerDirection(), width = this.width(), height = this.height();
        if (direction === UP) {
            y -= pointerHeight;
            height += pointerHeight;
        }
        else if (direction === DOWN) {
            height += pointerHeight;
        }
        else if (direction === LEFT) {
            x -= pointerWidth * 1.5;
            width += pointerWidth;
        }
        else if (direction === RIGHT) {
            width += pointerWidth * 1.5;
        }
        return {
            x: x,
            y: y,
            width: width,
            height: height,
        };
    }
}
Label_Tag.prototype.className = 'Tag';
Object(Global["b" /* _registerNode */])(Label_Tag);
Factory.addGetterSetter(Label_Tag, 'pointerDirection', NONE);
Factory.addGetterSetter(Label_Tag, 'pointerWidth', 0, getNumberValidator());
Factory.addGetterSetter(Label_Tag, 'pointerHeight', 0, getNumberValidator());
Factory.addGetterSetter(Label_Tag, 'cornerRadius', 0, getNumberOrArrayOfNumbersValidator(4));

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Rect.js




class Rect_Rect extends Shape_Shape {
    _sceneFunc(context) {
        var cornerRadius = this.cornerRadius(), width = this.width(), height = this.height();
        context.beginPath();
        if (!cornerRadius) {
            context.rect(0, 0, width, height);
        }
        else {
            let topLeft = 0;
            let topRight = 0;
            let bottomLeft = 0;
            let bottomRight = 0;
            if (typeof cornerRadius === 'number') {
                topLeft = topRight = bottomLeft = bottomRight = Math.min(cornerRadius, width / 2, height / 2);
            }
            else {
                topLeft = Math.min(cornerRadius[0] || 0, width / 2, height / 2);
                topRight = Math.min(cornerRadius[1] || 0, width / 2, height / 2);
                bottomRight = Math.min(cornerRadius[2] || 0, width / 2, height / 2);
                bottomLeft = Math.min(cornerRadius[3] || 0, width / 2, height / 2);
            }
            context.moveTo(topLeft, 0);
            context.lineTo(width - topRight, 0);
            context.arc(width - topRight, topRight, topRight, (Math.PI * 3) / 2, 0, false);
            context.lineTo(width, height - bottomRight);
            context.arc(width - bottomRight, height - bottomRight, bottomRight, 0, Math.PI / 2, false);
            context.lineTo(bottomLeft, height);
            context.arc(bottomLeft, height - bottomLeft, bottomLeft, Math.PI / 2, Math.PI, false);
            context.lineTo(0, topLeft);
            context.arc(topLeft, topLeft, topLeft, Math.PI, (Math.PI * 3) / 2, false);
        }
        context.closePath();
        context.fillStrokeShape(this);
    }
}
Rect_Rect.prototype.className = 'Rect';
Object(Global["b" /* _registerNode */])(Rect_Rect);
Factory.addGetterSetter(Rect_Rect, 'cornerRadius', 0, getNumberOrArrayOfNumbersValidator(4));

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/RegularPolygon.js




class RegularPolygon_RegularPolygon extends Shape_Shape {
    _sceneFunc(context) {
        const points = this._getPoints();
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for (var n = 1; n < points.length; n++) {
            context.lineTo(points[n].x, points[n].y);
        }
        context.closePath();
        context.fillStrokeShape(this);
    }
    _getPoints() {
        const sides = this.attrs.sides;
        const radius = this.attrs.radius || 0;
        const points = [];
        for (var n = 0; n < sides; n++) {
            points.push({
                x: radius * Math.sin((n * 2 * Math.PI) / sides),
                y: -1 * radius * Math.cos((n * 2 * Math.PI) / sides),
            });
        }
        return points;
    }
    getSelfRect() {
        const points = this._getPoints();
        var minX = points[0].x;
        var maxX = points[0].y;
        var minY = points[0].x;
        var maxY = points[0].y;
        points.forEach((point) => {
            minX = Math.min(minX, point.x);
            maxX = Math.max(maxX, point.x);
            minY = Math.min(minY, point.y);
            maxY = Math.max(maxY, point.y);
        });
        return {
            x: minX,
            y: minY,
            width: maxX - minX,
            height: maxY - minY,
        };
    }
    getWidth() {
        return this.radius() * 2;
    }
    getHeight() {
        return this.radius() * 2;
    }
    setWidth(width) {
        this.radius(width / 2);
    }
    setHeight(height) {
        this.radius(height / 2);
    }
}
RegularPolygon_RegularPolygon.prototype.className = 'RegularPolygon';
RegularPolygon_RegularPolygon.prototype._centroid = true;
RegularPolygon_RegularPolygon.prototype._attrsAffectingSize = ['radius'];
Object(Global["b" /* _registerNode */])(RegularPolygon_RegularPolygon);
Factory.addGetterSetter(RegularPolygon_RegularPolygon, 'radius', 0, getNumberValidator());
Factory.addGetterSetter(RegularPolygon_RegularPolygon, 'sides', 0, getNumberValidator());

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Ring.js




var PIx2 = Math.PI * 2;
class Ring_Ring extends Shape_Shape {
    _sceneFunc(context) {
        context.beginPath();
        context.arc(0, 0, this.innerRadius(), 0, PIx2, false);
        context.moveTo(this.outerRadius(), 0);
        context.arc(0, 0, this.outerRadius(), PIx2, 0, true);
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        return this.outerRadius() * 2;
    }
    getHeight() {
        return this.outerRadius() * 2;
    }
    setWidth(width) {
        this.outerRadius(width / 2);
    }
    setHeight(height) {
        this.outerRadius(height / 2);
    }
}
Ring_Ring.prototype.className = 'Ring';
Ring_Ring.prototype._centroid = true;
Ring_Ring.prototype._attrsAffectingSize = ['innerRadius', 'outerRadius'];
Object(Global["b" /* _registerNode */])(Ring_Ring);
Factory.addGetterSetter(Ring_Ring, 'innerRadius', 0, getNumberValidator());
Factory.addGetterSetter(Ring_Ring, 'outerRadius', 0, getNumberValidator());

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Sprite.js





class Sprite_Sprite extends Shape_Shape {
    constructor(config) {
        super(config);
        this._updated = true;
        this.anim = new Animation_Animation(() => {
            var updated = this._updated;
            this._updated = false;
            return updated;
        });
        this.on('animationChange.konva', function () {
            this.frameIndex(0);
        });
        this.on('frameIndexChange.konva', function () {
            this._updated = true;
        });
        this.on('frameRateChange.konva', function () {
            if (!this.anim.isRunning()) {
                return;
            }
            clearInterval(this.interval);
            this._setInterval();
        });
    }
    _sceneFunc(context) {
        var anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), x = set[ix4 + 0], y = set[ix4 + 1], width = set[ix4 + 2], height = set[ix4 + 3], image = this.image();
        if (this.hasFill() || this.hasStroke()) {
            context.beginPath();
            context.rect(0, 0, width, height);
            context.closePath();
            context.fillStrokeShape(this);
        }
        if (image) {
            if (offsets) {
                var offset = offsets[anim], ix2 = index * 2;
                context.drawImage(image, x, y, width, height, offset[ix2 + 0], offset[ix2 + 1], width, height);
            }
            else {
                context.drawImage(image, x, y, width, height, 0, 0, width, height);
            }
        }
    }
    _hitFunc(context) {
        var anim = this.animation(), index = this.frameIndex(), ix4 = index * 4, set = this.animations()[anim], offsets = this.frameOffsets(), width = set[ix4 + 2], height = set[ix4 + 3];
        context.beginPath();
        if (offsets) {
            var offset = offsets[anim];
            var ix2 = index * 2;
            context.rect(offset[ix2 + 0], offset[ix2 + 1], width, height);
        }
        else {
            context.rect(0, 0, width, height);
        }
        context.closePath();
        context.fillShape(this);
    }
    _useBufferCanvas() {
        return super._useBufferCanvas(true);
    }
    _setInterval() {
        var that = this;
        this.interval = setInterval(function () {
            that._updateIndex();
        }, 1000 / this.frameRate());
    }
    start() {
        if (this.isRunning()) {
            return;
        }
        var layer = this.getLayer();
        this.anim.setLayers(layer);
        this._setInterval();
        this.anim.start();
    }
    stop() {
        this.anim.stop();
        clearInterval(this.interval);
    }
    isRunning() {
        return this.anim.isRunning();
    }
    _updateIndex() {
        var index = this.frameIndex(), animation = this.animation(), animations = this.animations(), anim = animations[animation], len = anim.length / 4;
        if (index < len - 1) {
            this.frameIndex(index + 1);
        }
        else {
            this.frameIndex(0);
        }
    }
}
Sprite_Sprite.prototype.className = 'Sprite';
Object(Global["b" /* _registerNode */])(Sprite_Sprite);
Factory.addGetterSetter(Sprite_Sprite, 'animation');
Factory.addGetterSetter(Sprite_Sprite, 'animations');
Factory.addGetterSetter(Sprite_Sprite, 'frameOffsets');
Factory.addGetterSetter(Sprite_Sprite, 'image');
Factory.addGetterSetter(Sprite_Sprite, 'frameIndex', 0, getNumberValidator());
Factory.addGetterSetter(Sprite_Sprite, 'frameRate', 17, getNumberValidator());
Factory.backCompat(Sprite_Sprite, {
    index: 'frameIndex',
    getIndex: 'getFrameIndex',
    setIndex: 'setFrameIndex',
});

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Star.js




class Star_Star extends Shape_Shape {
    _sceneFunc(context) {
        var innerRadius = this.innerRadius(), outerRadius = this.outerRadius(), numPoints = this.numPoints();
        context.beginPath();
        context.moveTo(0, 0 - outerRadius);
        for (var n = 1; n < numPoints * 2; n++) {
            var radius = n % 2 === 0 ? outerRadius : innerRadius;
            var x = radius * Math.sin((n * Math.PI) / numPoints);
            var y = -1 * radius * Math.cos((n * Math.PI) / numPoints);
            context.lineTo(x, y);
        }
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        return this.outerRadius() * 2;
    }
    getHeight() {
        return this.outerRadius() * 2;
    }
    setWidth(width) {
        this.outerRadius(width / 2);
    }
    setHeight(height) {
        this.outerRadius(height / 2);
    }
}
Star_Star.prototype.className = 'Star';
Star_Star.prototype._centroid = true;
Star_Star.prototype._attrsAffectingSize = ['innerRadius', 'outerRadius'];
Object(Global["b" /* _registerNode */])(Star_Star);
Factory.addGetterSetter(Star_Star, 'numPoints', 5, getNumberValidator());
Factory.addGetterSetter(Star_Star, 'innerRadius', 0, getNumberValidator());
Factory.addGetterSetter(Star_Star, 'outerRadius', 0, getNumberValidator());

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Text.js





function stringToArray(string) {
    return Array.from(string);
}
var AUTO = 'auto', CENTER = 'center', JUSTIFY = 'justify', Text_CHANGE_KONVA = 'Change.konva', CONTEXT_2D = '2d', DASH = '-', Text_LEFT = 'left', TEXT = 'text', TEXT_UPPER = 'Text', TOP = 'top', BOTTOM = 'bottom', MIDDLE = 'middle', NORMAL = 'normal', PX_SPACE = 'px ', Text_SPACE = ' ', Text_RIGHT = 'right', WORD = 'word', CHAR = 'char', Text_NONE = 'none', ELLIPSIS = '…', Text_ATTR_CHANGE_LIST = [
    'fontFamily',
    'fontSize',
    'fontStyle',
    'fontVariant',
    'padding',
    'align',
    'verticalAlign',
    'lineHeight',
    'text',
    'width',
    'height',
    'wrap',
    'ellipsis',
    'letterSpacing',
], Text_attrChangeListLen = Text_ATTR_CHANGE_LIST.length;
function normalizeFontFamily(fontFamily) {
    return fontFamily
        .split(',')
        .map((family) => {
        family = family.trim();
        const hasSpace = family.indexOf(' ') >= 0;
        const hasQuotes = family.indexOf('"') >= 0 || family.indexOf("'") >= 0;
        if (hasSpace && !hasQuotes) {
            family = `"${family}"`;
        }
        return family;
    })
        .join(', ');
}
var Text_dummyContext;
function Text_getDummyContext() {
    if (Text_dummyContext) {
        return Text_dummyContext;
    }
    Text_dummyContext = Util.createCanvasElement().getContext(CONTEXT_2D);
    return Text_dummyContext;
}
function Text_fillFunc(context) {
    context.fillText(this._partialText, this._partialTextX, this._partialTextY);
}
function Text_strokeFunc(context) {
    context.strokeText(this._partialText, this._partialTextX, this._partialTextY);
}
function checkDefaultFill(config) {
    config = config || {};
    if (!config.fillLinearGradientColorStops &&
        !config.fillRadialGradientColorStops &&
        !config.fillPatternImage) {
        config.fill = config.fill || 'black';
    }
    return config;
}
class Text_Text extends Shape_Shape {
    constructor(config) {
        super(checkDefaultFill(config));
        this._partialTextX = 0;
        this._partialTextY = 0;
        for (var n = 0; n < Text_attrChangeListLen; n++) {
            this.on(Text_ATTR_CHANGE_LIST[n] + Text_CHANGE_KONVA, this._setTextData);
        }
        this._setTextData();
    }
    _sceneFunc(context) {
        var textArr = this.textArr, textArrLen = textArr.length;
        if (!this.text()) {
            return;
        }
        var padding = this.padding(), fontSize = this.fontSize(), lineHeightPx = this.lineHeight() * fontSize, verticalAlign = this.verticalAlign(), alignY = 0, align = this.align(), totalWidth = this.getWidth(), letterSpacing = this.letterSpacing(), fill = this.fill(), textDecoration = this.textDecoration(), shouldUnderline = textDecoration.indexOf('underline') !== -1, shouldLineThrough = textDecoration.indexOf('line-through') !== -1, n;
        var translateY = 0;
        var translateY = lineHeightPx / 2;
        var lineTranslateX = 0;
        var lineTranslateY = 0;
        context.setAttr('font', this._getContextFont());
        context.setAttr('textBaseline', MIDDLE);
        context.setAttr('textAlign', Text_LEFT);
        if (verticalAlign === MIDDLE) {
            alignY = (this.getHeight() - textArrLen * lineHeightPx - padding * 2) / 2;
        }
        else if (verticalAlign === BOTTOM) {
            alignY = this.getHeight() - textArrLen * lineHeightPx - padding * 2;
        }
        context.translate(padding, alignY + padding);
        for (n = 0; n < textArrLen; n++) {
            var lineTranslateX = 0;
            var lineTranslateY = 0;
            var obj = textArr[n], text = obj.text, width = obj.width, lastLine = obj.lastInParagraph, spacesNumber, oneWord, lineWidth;
            context.save();
            if (align === Text_RIGHT) {
                lineTranslateX += totalWidth - width - padding * 2;
            }
            else if (align === CENTER) {
                lineTranslateX += (totalWidth - width - padding * 2) / 2;
            }
            if (shouldUnderline) {
                context.save();
                context.beginPath();
                context.moveTo(lineTranslateX, translateY + lineTranslateY + Math.round(fontSize / 2));
                spacesNumber = text.split(' ').length - 1;
                oneWord = spacesNumber === 0;
                lineWidth =
                    align === JUSTIFY && lastLine && !oneWord
                        ? totalWidth - padding * 2
                        : width;
                context.lineTo(lineTranslateX + Math.round(lineWidth), translateY + lineTranslateY + Math.round(fontSize / 2));
                context.lineWidth = fontSize / 15;
                context.strokeStyle = fill;
                context.stroke();
                context.restore();
            }
            if (shouldLineThrough) {
                context.save();
                context.beginPath();
                context.moveTo(lineTranslateX, translateY + lineTranslateY);
                spacesNumber = text.split(' ').length - 1;
                oneWord = spacesNumber === 0;
                lineWidth =
                    align === JUSTIFY && lastLine && !oneWord
                        ? totalWidth - padding * 2
                        : width;
                context.lineTo(lineTranslateX + Math.round(lineWidth), translateY + lineTranslateY);
                context.lineWidth = fontSize / 15;
                context.strokeStyle = fill;
                context.stroke();
                context.restore();
            }
            if (letterSpacing !== 0 || align === JUSTIFY) {
                spacesNumber = text.split(' ').length - 1;
                var array = stringToArray(text);
                for (var li = 0; li < array.length; li++) {
                    var letter = array[li];
                    if (letter === ' ' && !lastLine && align === JUSTIFY) {
                        lineTranslateX += (totalWidth - padding * 2 - width) / spacesNumber;
                    }
                    this._partialTextX = lineTranslateX;
                    this._partialTextY = translateY + lineTranslateY;
                    this._partialText = letter;
                    context.fillStrokeShape(this);
                    lineTranslateX += this.measureSize(letter).width + letterSpacing;
                }
            }
            else {
                this._partialTextX = lineTranslateX;
                this._partialTextY = translateY + lineTranslateY;
                this._partialText = text;
                context.fillStrokeShape(this);
            }
            context.restore();
            if (textArrLen > 1) {
                translateY += lineHeightPx;
            }
        }
    }
    _hitFunc(context) {
        var width = this.getWidth(), height = this.getHeight();
        context.beginPath();
        context.rect(0, 0, width, height);
        context.closePath();
        context.fillStrokeShape(this);
    }
    setText(text) {
        var str = Util._isString(text)
            ? text
            : text === null || text === undefined
                ? ''
                : text + '';
        this._setAttr(TEXT, str);
        return this;
    }
    getWidth() {
        var isAuto = this.attrs.width === AUTO || this.attrs.width === undefined;
        return isAuto ? this.getTextWidth() + this.padding() * 2 : this.attrs.width;
    }
    getHeight() {
        var isAuto = this.attrs.height === AUTO || this.attrs.height === undefined;
        return isAuto
            ? this.fontSize() * this.textArr.length * this.lineHeight() +
                this.padding() * 2
            : this.attrs.height;
    }
    getTextWidth() {
        return this.textWidth;
    }
    getTextHeight() {
        Util.warn('text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.');
        return this.textHeight;
    }
    measureSize(text) {
        var _context = Text_getDummyContext(), fontSize = this.fontSize(), metrics;
        _context.save();
        _context.font = this._getContextFont();
        metrics = _context.measureText(text);
        _context.restore();
        return {
            width: metrics.width,
            height: fontSize,
        };
    }
    _getContextFont() {
        return (this.fontStyle() +
            Text_SPACE +
            this.fontVariant() +
            Text_SPACE +
            (this.fontSize() + PX_SPACE) +
            normalizeFontFamily(this.fontFamily()));
    }
    _addTextLine(line) {
        if (this.align() === JUSTIFY) {
            line = line.trim();
        }
        var width = this._getTextWidth(line);
        return this.textArr.push({
            text: line,
            width: width,
            lastInParagraph: false,
        });
    }
    _getTextWidth(text) {
        var letterSpacing = this.letterSpacing();
        var length = text.length;
        return (Text_getDummyContext().measureText(text).width +
            (length ? letterSpacing * (length - 1) : 0));
    }
    _setTextData() {
        var lines = this.text().split('\n'), fontSize = +this.fontSize(), textWidth = 0, lineHeightPx = this.lineHeight() * fontSize, width = this.attrs.width, height = this.attrs.height, fixedWidth = width !== AUTO && width !== undefined, fixedHeight = height !== AUTO && height !== undefined, padding = this.padding(), maxWidth = width - padding * 2, maxHeightPx = height - padding * 2, currentHeightPx = 0, wrap = this.wrap(), shouldWrap = wrap !== Text_NONE, wrapAtWord = wrap !== CHAR && shouldWrap, shouldAddEllipsis = this.ellipsis();
        this.textArr = [];
        Text_getDummyContext().font = this._getContextFont();
        var additionalWidth = shouldAddEllipsis ? this._getTextWidth(ELLIPSIS) : 0;
        for (var i = 0, max = lines.length; i < max; ++i) {
            var line = lines[i];
            var lineWidth = this._getTextWidth(line);
            if (fixedWidth && lineWidth > maxWidth) {
                while (line.length > 0) {
                    var low = 0, high = line.length, match = '', matchWidth = 0;
                    while (low < high) {
                        var mid = (low + high) >>> 1, substr = line.slice(0, mid + 1), substrWidth = this._getTextWidth(substr) + additionalWidth;
                        if (substrWidth <= maxWidth) {
                            low = mid + 1;
                            match = substr;
                            matchWidth = substrWidth;
                        }
                        else {
                            high = mid;
                        }
                    }
                    if (match) {
                        if (wrapAtWord) {
                            var wrapIndex;
                            var nextChar = line[match.length];
                            var nextIsSpaceOrDash = nextChar === Text_SPACE || nextChar === DASH;
                            if (nextIsSpaceOrDash && matchWidth <= maxWidth) {
                                wrapIndex = match.length;
                            }
                            else {
                                wrapIndex =
                                    Math.max(match.lastIndexOf(Text_SPACE), match.lastIndexOf(DASH)) +
                                        1;
                            }
                            if (wrapIndex > 0) {
                                low = wrapIndex;
                                match = match.slice(0, low);
                                matchWidth = this._getTextWidth(match);
                            }
                        }
                        match = match.trimRight();
                        this._addTextLine(match);
                        textWidth = Math.max(textWidth, matchWidth);
                        currentHeightPx += lineHeightPx;
                        if (!shouldWrap ||
                            (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx)) {
                            var lastLine = this.textArr[this.textArr.length - 1];
                            if (lastLine) {
                                if (shouldAddEllipsis) {
                                    var haveSpace = this._getTextWidth(lastLine.text + ELLIPSIS) < maxWidth;
                                    if (!haveSpace) {
                                        lastLine.text = lastLine.text.slice(0, lastLine.text.length - 3);
                                    }
                                    this.textArr.splice(this.textArr.length - 1, 1);
                                    this._addTextLine(lastLine.text + ELLIPSIS);
                                }
                            }
                            break;
                        }
                        line = line.slice(low);
                        line = line.trimLeft();
                        if (line.length > 0) {
                            lineWidth = this._getTextWidth(line);
                            if (lineWidth <= maxWidth) {
                                this._addTextLine(line);
                                currentHeightPx += lineHeightPx;
                                textWidth = Math.max(textWidth, lineWidth);
                                break;
                            }
                        }
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                this._addTextLine(line);
                currentHeightPx += lineHeightPx;
                textWidth = Math.max(textWidth, lineWidth);
            }
            if (fixedHeight && currentHeightPx + lineHeightPx > maxHeightPx) {
                break;
            }
            if (this.textArr[this.textArr.length - 1]) {
                this.textArr[this.textArr.length - 1].lastInParagraph = true;
            }
        }
        this.textHeight = fontSize;
        this.textWidth = textWidth;
    }
    getStrokeScaleEnabled() {
        return true;
    }
}
Text_Text.prototype._fillFunc = Text_fillFunc;
Text_Text.prototype._strokeFunc = Text_strokeFunc;
Text_Text.prototype.className = TEXT_UPPER;
Text_Text.prototype._attrsAffectingSize = [
    'text',
    'fontSize',
    'padding',
    'wrap',
    'lineHeight',
    'letterSpacing',
];
Object(Global["b" /* _registerNode */])(Text_Text);
Factory.overWriteSetter(Text_Text, 'width', getNumberOrAutoValidator());
Factory.overWriteSetter(Text_Text, 'height', getNumberOrAutoValidator());
Factory.addGetterSetter(Text_Text, 'fontFamily', 'Arial');
Factory.addGetterSetter(Text_Text, 'fontSize', 12, getNumberValidator());
Factory.addGetterSetter(Text_Text, 'fontStyle', NORMAL);
Factory.addGetterSetter(Text_Text, 'fontVariant', NORMAL);
Factory.addGetterSetter(Text_Text, 'padding', 0, getNumberValidator());
Factory.addGetterSetter(Text_Text, 'align', Text_LEFT);
Factory.addGetterSetter(Text_Text, 'verticalAlign', TOP);
Factory.addGetterSetter(Text_Text, 'lineHeight', 1, getNumberValidator());
Factory.addGetterSetter(Text_Text, 'wrap', WORD);
Factory.addGetterSetter(Text_Text, 'ellipsis', false, getBooleanValidator());
Factory.addGetterSetter(Text_Text, 'letterSpacing', 0, getNumberValidator());
Factory.addGetterSetter(Text_Text, 'text', '', getStringValidator());
Factory.addGetterSetter(Text_Text, 'textDecoration', '');

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/TextPath.js







var TextPath_EMPTY_STRING = '', TextPath_NORMAL = 'normal';
function TextPath_fillFunc(context) {
    context.fillText(this.partialText, 0, 0);
}
function TextPath_strokeFunc(context) {
    context.strokeText(this.partialText, 0, 0);
}
class TextPath_TextPath extends Shape_Shape {
    constructor(config) {
        super(config);
        this.dummyCanvas = Util.createCanvasElement();
        this.dataArray = [];
        this.dataArray = Path_Path.parsePathData(this.attrs.data);
        this.on('dataChange.konva', function () {
            this.dataArray = Path_Path.parsePathData(this.attrs.data);
            this._setTextData();
        });
        this.on('textChange.konva alignChange.konva letterSpacingChange.konva kerningFuncChange.konva fontSizeChange.konva fontFamilyChange.konva', this._setTextData);
        this._setTextData();
    }
    _sceneFunc(context) {
        context.setAttr('font', this._getContextFont());
        context.setAttr('textBaseline', this.textBaseline());
        context.setAttr('textAlign', 'left');
        context.save();
        var textDecoration = this.textDecoration();
        var fill = this.fill();
        var fontSize = this.fontSize();
        var glyphInfo = this.glyphInfo;
        if (textDecoration === 'underline') {
            context.beginPath();
        }
        for (var i = 0; i < glyphInfo.length; i++) {
            context.save();
            var p0 = glyphInfo[i].p0;
            context.translate(p0.x, p0.y);
            context.rotate(glyphInfo[i].rotation);
            this.partialText = glyphInfo[i].text;
            context.fillStrokeShape(this);
            if (textDecoration === 'underline') {
                if (i === 0) {
                    context.moveTo(0, fontSize / 2 + 1);
                }
                context.lineTo(fontSize, fontSize / 2 + 1);
            }
            context.restore();
        }
        if (textDecoration === 'underline') {
            context.strokeStyle = fill;
            context.lineWidth = fontSize / 20;
            context.stroke();
        }
        context.restore();
    }
    _hitFunc(context) {
        context.beginPath();
        var glyphInfo = this.glyphInfo;
        if (glyphInfo.length >= 1) {
            var p0 = glyphInfo[0].p0;
            context.moveTo(p0.x, p0.y);
        }
        for (var i = 0; i < glyphInfo.length; i++) {
            var p1 = glyphInfo[i].p1;
            context.lineTo(p1.x, p1.y);
        }
        context.setAttr('lineWidth', this.fontSize());
        context.setAttr('strokeStyle', this.colorKey);
        context.stroke();
    }
    getTextWidth() {
        return this.textWidth;
    }
    getTextHeight() {
        Util.warn('text.getTextHeight() method is deprecated. Use text.height() - for full height and text.fontSize() - for one line height.');
        return this.textHeight;
    }
    setText(text) {
        return Text_Text.prototype.setText.call(this, text);
    }
    _getContextFont() {
        return Text_Text.prototype._getContextFont.call(this);
    }
    _getTextSize(text) {
        var dummyCanvas = this.dummyCanvas;
        var _context = dummyCanvas.getContext('2d');
        _context.save();
        _context.font = this._getContextFont();
        var metrics = _context.measureText(text);
        _context.restore();
        return {
            width: metrics.width,
            height: parseInt(this.attrs.fontSize, 10),
        };
    }
    _setTextData() {
        var that = this;
        var size = this._getTextSize(this.attrs.text);
        var letterSpacing = this.letterSpacing();
        var align = this.align();
        var kerningFunc = this.kerningFunc();
        this.textWidth = size.width;
        this.textHeight = size.height;
        var textFullWidth = Math.max(this.textWidth + ((this.attrs.text || '').length - 1) * letterSpacing, 0);
        this.glyphInfo = [];
        var fullPathWidth = 0;
        for (var l = 0; l < that.dataArray.length; l++) {
            if (that.dataArray[l].pathLength > 0) {
                fullPathWidth += that.dataArray[l].pathLength;
            }
        }
        var offset = 0;
        if (align === 'center') {
            offset = Math.max(0, fullPathWidth / 2 - textFullWidth / 2);
        }
        if (align === 'right') {
            offset = Math.max(0, fullPathWidth - textFullWidth);
        }
        var charArr = stringToArray(this.text());
        var spacesNumber = this.text().split(' ').length - 1;
        var p0, p1, pathCmd;
        var pIndex = -1;
        var currentT = 0;
        var getNextPathSegment = function () {
            currentT = 0;
            var pathData = that.dataArray;
            for (var j = pIndex + 1; j < pathData.length; j++) {
                if (pathData[j].pathLength > 0) {
                    pIndex = j;
                    return pathData[j];
                }
                else if (pathData[j].command === 'M') {
                    p0 = {
                        x: pathData[j].points[0],
                        y: pathData[j].points[1],
                    };
                }
            }
            return {};
        };
        var findSegmentToFitCharacter = function (c) {
            var glyphWidth = that._getTextSize(c).width + letterSpacing;
            if (c === ' ' && align === 'justify') {
                glyphWidth += (fullPathWidth - textFullWidth) / spacesNumber;
            }
            var currLen = 0;
            var attempts = 0;
            p1 = undefined;
            while (Math.abs(glyphWidth - currLen) / glyphWidth > 0.01 &&
                attempts < 20) {
                attempts++;
                var cumulativePathLength = currLen;
                while (pathCmd === undefined) {
                    pathCmd = getNextPathSegment();
                    if (pathCmd &&
                        cumulativePathLength + pathCmd.pathLength < glyphWidth) {
                        cumulativePathLength += pathCmd.pathLength;
                        pathCmd = undefined;
                    }
                }
                if (pathCmd === {} || p0 === undefined) {
                    return undefined;
                }
                var needNewSegment = false;
                switch (pathCmd.command) {
                    case 'L':
                        if (Path_Path.getLineLength(p0.x, p0.y, pathCmd.points[0], pathCmd.points[1]) > glyphWidth) {
                            p1 = Path_Path.getPointOnLine(glyphWidth, p0.x, p0.y, pathCmd.points[0], pathCmd.points[1], p0.x, p0.y);
                        }
                        else {
                            pathCmd = undefined;
                        }
                        break;
                    case 'A':
                        var start = pathCmd.points[4];
                        var dTheta = pathCmd.points[5];
                        var end = pathCmd.points[4] + dTheta;
                        if (currentT === 0) {
                            currentT = start + 0.00000001;
                        }
                        else if (glyphWidth > currLen) {
                            currentT += ((Math.PI / 180.0) * dTheta) / Math.abs(dTheta);
                        }
                        else {
                            currentT -= ((Math.PI / 360.0) * dTheta) / Math.abs(dTheta);
                        }
                        if ((dTheta < 0 && currentT < end) ||
                            (dTheta >= 0 && currentT > end)) {
                            currentT = end;
                            needNewSegment = true;
                        }
                        p1 = Path_Path.getPointOnEllipticalArc(pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], currentT, pathCmd.points[6]);
                        break;
                    case 'C':
                        if (currentT === 0) {
                            if (glyphWidth > pathCmd.pathLength) {
                                currentT = 0.00000001;
                            }
                            else {
                                currentT = glyphWidth / pathCmd.pathLength;
                            }
                        }
                        else if (glyphWidth > currLen) {
                            currentT += (glyphWidth - currLen) / pathCmd.pathLength / 2;
                        }
                        else {
                            currentT = Math.max(currentT - (currLen - glyphWidth) / pathCmd.pathLength / 2, 0);
                        }
                        if (currentT > 1.0) {
                            currentT = 1.0;
                            needNewSegment = true;
                        }
                        p1 = Path_Path.getPointOnCubicBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3], pathCmd.points[4], pathCmd.points[5]);
                        break;
                    case 'Q':
                        if (currentT === 0) {
                            currentT = glyphWidth / pathCmd.pathLength;
                        }
                        else if (glyphWidth > currLen) {
                            currentT += (glyphWidth - currLen) / pathCmd.pathLength;
                        }
                        else {
                            currentT -= (currLen - glyphWidth) / pathCmd.pathLength;
                        }
                        if (currentT > 1.0) {
                            currentT = 1.0;
                            needNewSegment = true;
                        }
                        p1 = Path_Path.getPointOnQuadraticBezier(currentT, pathCmd.start.x, pathCmd.start.y, pathCmd.points[0], pathCmd.points[1], pathCmd.points[2], pathCmd.points[3]);
                        break;
                }
                if (p1 !== undefined) {
                    currLen = Path_Path.getLineLength(p0.x, p0.y, p1.x, p1.y);
                }
                if (needNewSegment) {
                    needNewSegment = false;
                    pathCmd = undefined;
                }
            }
        };
        var testChar = 'C';
        var glyphWidth = that._getTextSize(testChar).width + letterSpacing;
        var lettersInOffset = offset / glyphWidth - 1;
        for (var k = 0; k < lettersInOffset; k++) {
            findSegmentToFitCharacter(testChar);
            if (p0 === undefined || p1 === undefined) {
                break;
            }
            p0 = p1;
        }
        for (var i = 0; i < charArr.length; i++) {
            findSegmentToFitCharacter(charArr[i]);
            if (p0 === undefined || p1 === undefined) {
                break;
            }
            var width = Path_Path.getLineLength(p0.x, p0.y, p1.x, p1.y);
            var kern = 0;
            if (kerningFunc) {
                try {
                    kern = kerningFunc(charArr[i - 1], charArr[i]) * this.fontSize();
                }
                catch (e) {
                    kern = 0;
                }
            }
            p0.x += kern;
            p1.x += kern;
            this.textWidth += kern;
            var midpoint = Path_Path.getPointOnLine(kern + width / 2.0, p0.x, p0.y, p1.x, p1.y);
            var rotation = Math.atan2(p1.y - p0.y, p1.x - p0.x);
            this.glyphInfo.push({
                transposeX: midpoint.x,
                transposeY: midpoint.y,
                text: charArr[i],
                rotation: rotation,
                p0: p0,
                p1: p1,
            });
            p0 = p1;
        }
    }
    getSelfRect() {
        if (!this.glyphInfo.length) {
            return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
            };
        }
        var points = [];
        this.glyphInfo.forEach(function (info) {
            points.push(info.p0.x);
            points.push(info.p0.y);
            points.push(info.p1.x);
            points.push(info.p1.y);
        });
        var minX = points[0] || 0;
        var maxX = points[0] || 0;
        var minY = points[1] || 0;
        var maxY = points[1] || 0;
        var x, y;
        for (var i = 0; i < points.length / 2; i++) {
            x = points[i * 2];
            y = points[i * 2 + 1];
            minX = Math.min(minX, x);
            maxX = Math.max(maxX, x);
            minY = Math.min(minY, y);
            maxY = Math.max(maxY, y);
        }
        var fontSize = this.fontSize();
        return {
            x: minX - fontSize / 2,
            y: minY - fontSize / 2,
            width: maxX - minX + fontSize,
            height: maxY - minY + fontSize,
        };
    }
}
TextPath_TextPath.prototype._fillFunc = TextPath_fillFunc;
TextPath_TextPath.prototype._strokeFunc = TextPath_strokeFunc;
TextPath_TextPath.prototype._fillFuncHit = TextPath_fillFunc;
TextPath_TextPath.prototype._strokeFuncHit = TextPath_strokeFunc;
TextPath_TextPath.prototype.className = 'TextPath';
TextPath_TextPath.prototype._attrsAffectingSize = ['text', 'fontSize', 'data'];
Object(Global["b" /* _registerNode */])(TextPath_TextPath);
Factory.addGetterSetter(TextPath_TextPath, 'data');
Factory.addGetterSetter(TextPath_TextPath, 'fontFamily', 'Arial');
Factory.addGetterSetter(TextPath_TextPath, 'fontSize', 12, getNumberValidator());
Factory.addGetterSetter(TextPath_TextPath, 'fontStyle', TextPath_NORMAL);
Factory.addGetterSetter(TextPath_TextPath, 'align', 'left');
Factory.addGetterSetter(TextPath_TextPath, 'letterSpacing', 0, getNumberValidator());
Factory.addGetterSetter(TextPath_TextPath, 'textBaseline', 'middle');
Factory.addGetterSetter(TextPath_TextPath, 'fontVariant', TextPath_NORMAL);
Factory.addGetterSetter(TextPath_TextPath, 'text', TextPath_EMPTY_STRING);
Factory.addGetterSetter(TextPath_TextPath, 'textDecoration', null);
Factory.addGetterSetter(TextPath_TextPath, 'kerningFunc', null);

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Transformer.js









var EVENTS_NAME = 'tr-konva';
var Transformer_ATTR_CHANGE_LIST = [
    'resizeEnabledChange',
    'rotateAnchorOffsetChange',
    'rotateEnabledChange',
    'enabledAnchorsChange',
    'anchorSizeChange',
    'borderEnabledChange',
    'borderStrokeChange',
    'borderStrokeWidthChange',
    'borderDashChange',
    'anchorStrokeChange',
    'anchorStrokeWidthChange',
    'anchorFillChange',
    'anchorCornerRadiusChange',
    'ignoreStrokeChange',
]
    .map((e) => e + `.${EVENTS_NAME}`)
    .join(' ');
var NODES_RECT = 'nodesRect';
var Transformer_TRANSFORM_CHANGE_STR = [
    'widthChange',
    'heightChange',
    'scaleXChange',
    'scaleYChange',
    'skewXChange',
    'skewYChange',
    'rotationChange',
    'offsetXChange',
    'offsetYChange',
    'transformsEnabledChange',
    'strokeWidthChange',
];
var ANGLES = {
    'top-left': -45,
    'top-center': 0,
    'top-right': 45,
    'middle-right': -90,
    'middle-left': 90,
    'bottom-left': -135,
    'bottom-center': 180,
    'bottom-right': 135,
};
const TOUCH_DEVICE = 'ontouchstart' in Global["a" /* Konva */]._global;
function getCursor(anchorName, rad) {
    if (anchorName === 'rotater') {
        return 'crosshair';
    }
    rad += Util.degToRad(ANGLES[anchorName] || 0);
    var angle = ((Util.radToDeg(rad) % 360) + 360) % 360;
    if (Util._inRange(angle, 315 + 22.5, 360) || Util._inRange(angle, 0, 22.5)) {
        return 'ns-resize';
    }
    else if (Util._inRange(angle, 45 - 22.5, 45 + 22.5)) {
        return 'nesw-resize';
    }
    else if (Util._inRange(angle, 90 - 22.5, 90 + 22.5)) {
        return 'ew-resize';
    }
    else if (Util._inRange(angle, 135 - 22.5, 135 + 22.5)) {
        return 'nwse-resize';
    }
    else if (Util._inRange(angle, 180 - 22.5, 180 + 22.5)) {
        return 'ns-resize';
    }
    else if (Util._inRange(angle, 225 - 22.5, 225 + 22.5)) {
        return 'nesw-resize';
    }
    else if (Util._inRange(angle, 270 - 22.5, 270 + 22.5)) {
        return 'ew-resize';
    }
    else if (Util._inRange(angle, 315 - 22.5, 315 + 22.5)) {
        return 'nwse-resize';
    }
    else {
        Util.error('Transformer has unknown angle for cursor detection: ' + angle);
        return 'pointer';
    }
}
var ANCHORS_NAMES = [
    'top-left',
    'top-center',
    'top-right',
    'middle-right',
    'middle-left',
    'bottom-left',
    'bottom-center',
    'bottom-right',
];
var MAX_SAFE_INTEGER = 100000000;
function getCenter(shape) {
    return {
        x: shape.x +
            (shape.width / 2) * Math.cos(shape.rotation) +
            (shape.height / 2) * Math.sin(-shape.rotation),
        y: shape.y +
            (shape.height / 2) * Math.cos(shape.rotation) +
            (shape.width / 2) * Math.sin(shape.rotation),
    };
}
function rotateAroundPoint(shape, angleRad, point) {
    const x = point.x +
        (shape.x - point.x) * Math.cos(angleRad) -
        (shape.y - point.y) * Math.sin(angleRad);
    const y = point.y +
        (shape.x - point.x) * Math.sin(angleRad) +
        (shape.y - point.y) * Math.cos(angleRad);
    return Object.assign(Object.assign({}, shape), { rotation: shape.rotation + angleRad, x,
        y });
}
function rotateAroundCenter(shape, deltaRad) {
    const center = getCenter(shape);
    return rotateAroundPoint(shape, deltaRad, center);
}
function getSnap(snaps, newRotationRad, tol) {
    let snapped = newRotationRad;
    for (let i = 0; i < snaps.length; i++) {
        const angle = Global["a" /* Konva */].getAngle(snaps[i]);
        const absDiff = Math.abs(angle - newRotationRad) % (Math.PI * 2);
        const dif = Math.min(absDiff, Math.PI * 2 - absDiff);
        if (dif < tol) {
            snapped = angle;
        }
    }
    return snapped;
}
class Transformer_Transformer extends Group_Group {
    constructor(config) {
        super(config);
        this._transforming = false;
        this._createElements();
        this._handleMouseMove = this._handleMouseMove.bind(this);
        this._handleMouseUp = this._handleMouseUp.bind(this);
        this.update = this.update.bind(this);
        this.on(Transformer_ATTR_CHANGE_LIST, this.update);
        if (this.getNode()) {
            this.update();
        }
    }
    attachTo(node) {
        this.setNode(node);
        return this;
    }
    setNode(node) {
        Util.warn('tr.setNode(shape), tr.node(shape) and tr.attachTo(shape) methods are deprecated. Please use tr.nodes(nodesArray) instead.');
        return this.setNodes([node]);
    }
    getNode() {
        return this._nodes && this._nodes[0];
    }
    _getEventNamespace() {
        return EVENTS_NAME + this._id;
    }
    setNodes(nodes = []) {
        if (this._nodes && this._nodes.length) {
            this.detach();
        }
        this._nodes = nodes;
        if (nodes.length === 1 && this.useSingleNodeRotation()) {
            this.rotation(nodes[0].getAbsoluteRotation());
        }
        else {
            this.rotation(0);
        }
        this._nodes.forEach((node) => {
            const onChange = () => {
                if (this.nodes().length === 1 && this.useSingleNodeRotation()) {
                    this.rotation(this.nodes()[0].getAbsoluteRotation());
                }
                this._resetTransformCache();
                if (!this._transforming && !this.isDragging()) {
                    this.update();
                }
            };
            const additionalEvents = node._attrsAffectingSize
                .map((prop) => prop + 'Change.' + this._getEventNamespace())
                .join(' ');
            node.on(additionalEvents, onChange);
            node.on(Transformer_TRANSFORM_CHANGE_STR.map((e) => e + `.${this._getEventNamespace()}`).join(' '), onChange);
            node.on(`absoluteTransformChange.${this._getEventNamespace()}`, onChange);
            this._proxyDrag(node);
        });
        this._resetTransformCache();
        var elementsCreated = !!this.findOne('.top-left');
        if (elementsCreated) {
            this.update();
        }
        return this;
    }
    _proxyDrag(node) {
        let lastPos;
        node.on(`dragstart.${this._getEventNamespace()}`, (e) => {
            lastPos = node.getAbsolutePosition();
            if (!this.isDragging() && node !== this.findOne('.back')) {
                this.startDrag(e, false);
            }
        });
        node.on(`dragmove.${this._getEventNamespace()}`, (e) => {
            if (!lastPos) {
                return;
            }
            const abs = node.getAbsolutePosition();
            const dx = abs.x - lastPos.x;
            const dy = abs.y - lastPos.y;
            this.nodes().forEach((otherNode) => {
                if (otherNode === node) {
                    return;
                }
                if (otherNode.isDragging()) {
                    return;
                }
                const otherAbs = otherNode.getAbsolutePosition();
                otherNode.setAbsolutePosition({
                    x: otherAbs.x + dx,
                    y: otherAbs.y + dy,
                });
                otherNode.startDrag(e);
            });
            lastPos = null;
        });
    }
    getNodes() {
        return this._nodes || [];
    }
    getActiveAnchor() {
        return this._movingAnchorName;
    }
    detach() {
        if (this._nodes) {
            this._nodes.forEach((node) => {
                node.off('.' + this._getEventNamespace());
            });
        }
        this._nodes = [];
        this._resetTransformCache();
    }
    _resetTransformCache() {
        this._clearCache(NODES_RECT);
        this._clearCache('transform');
        this._clearSelfAndDescendantCache('absoluteTransform');
    }
    _getNodeRect() {
        return this._getCache(NODES_RECT, this.__getNodeRect);
    }
    __getNodeShape(node, rot = this.rotation(), relative) {
        var rect = node.getClientRect({
            skipTransform: true,
            skipShadow: true,
            skipStroke: this.ignoreStroke(),
        });
        var absScale = node.getAbsoluteScale(relative);
        var absPos = node.getAbsolutePosition(relative);
        var dx = rect.x * absScale.x - node.offsetX() * absScale.x;
        var dy = rect.y * absScale.y - node.offsetY() * absScale.y;
        const rotation = (Global["a" /* Konva */].getAngle(node.getAbsoluteRotation()) + Math.PI * 2) %
            (Math.PI * 2);
        const box = {
            x: absPos.x + dx * Math.cos(rotation) + dy * Math.sin(-rotation),
            y: absPos.y + dy * Math.cos(rotation) + dx * Math.sin(rotation),
            width: rect.width * absScale.x,
            height: rect.height * absScale.y,
            rotation: rotation,
        };
        return rotateAroundPoint(box, -Global["a" /* Konva */].getAngle(rot), {
            x: 0,
            y: 0,
        });
    }
    __getNodeRect() {
        var node = this.getNode();
        if (!node) {
            return {
                x: -MAX_SAFE_INTEGER,
                y: -MAX_SAFE_INTEGER,
                width: 0,
                height: 0,
                rotation: 0,
            };
        }
        const totalPoints = [];
        this.nodes().map((node) => {
            const box = node.getClientRect({
                skipTransform: true,
                skipShadow: true,
                skipStroke: this.ignoreStroke(),
            });
            var points = [
                { x: box.x, y: box.y },
                { x: box.x + box.width, y: box.y },
                { x: box.x + box.width, y: box.y + box.height },
                { x: box.x, y: box.y + box.height },
            ];
            var trans = node.getAbsoluteTransform();
            points.forEach(function (point) {
                var transformed = trans.point(point);
                totalPoints.push(transformed);
            });
        });
        const tr = new Transform();
        tr.rotate(-Global["a" /* Konva */].getAngle(this.rotation()));
        var minX, minY, maxX, maxY;
        totalPoints.forEach(function (point) {
            var transformed = tr.point(point);
            if (minX === undefined) {
                minX = maxX = transformed.x;
                minY = maxY = transformed.y;
            }
            minX = Math.min(minX, transformed.x);
            minY = Math.min(minY, transformed.y);
            maxX = Math.max(maxX, transformed.x);
            maxY = Math.max(maxY, transformed.y);
        });
        tr.invert();
        const p = tr.point({ x: minX, y: minY });
        return {
            x: p.x,
            y: p.y,
            width: maxX - minX,
            height: maxY - minY,
            rotation: Global["a" /* Konva */].getAngle(this.rotation()),
        };
    }
    getX() {
        return this._getNodeRect().x;
    }
    getY() {
        return this._getNodeRect().y;
    }
    getWidth() {
        return this._getNodeRect().width;
    }
    getHeight() {
        return this._getNodeRect().height;
    }
    _createElements() {
        this._createBack();
        ANCHORS_NAMES.forEach(function (name) {
            this._createAnchor(name);
        }.bind(this));
        this._createAnchor('rotater');
    }
    _createAnchor(name) {
        var anchor = new Rect_Rect({
            stroke: 'rgb(0, 161, 255)',
            fill: 'white',
            strokeWidth: 1,
            name: name + ' _anchor',
            dragDistance: 0,
            draggable: true,
            hitStrokeWidth: TOUCH_DEVICE ? 10 : 'auto',
        });
        var self = this;
        anchor.on('mousedown touchstart', function (e) {
            self._handleMouseDown(e);
        });
        anchor.on('dragstart', (e) => {
            anchor.stopDrag();
            e.cancelBubble = true;
        });
        anchor.on('dragend', (e) => {
            e.cancelBubble = true;
        });
        anchor.on('mouseenter', () => {
            var rad = Global["a" /* Konva */].getAngle(this.rotation());
            var cursor = getCursor(name, rad);
            anchor.getStage().content &&
                (anchor.getStage().content.style.cursor = cursor);
            this._cursorChange = true;
        });
        anchor.on('mouseout', () => {
            anchor.getStage().content &&
                (anchor.getStage().content.style.cursor = '');
            this._cursorChange = false;
        });
        this.add(anchor);
    }
    _createBack() {
        var back = new Shape_Shape({
            name: 'back',
            width: 0,
            height: 0,
            draggable: true,
            sceneFunc(ctx) {
                var tr = this.getParent();
                var padding = tr.padding();
                ctx.beginPath();
                ctx.rect(-padding, -padding, this.width() + padding * 2, this.height() + padding * 2);
                ctx.moveTo(this.width() / 2, -padding);
                if (tr.rotateEnabled()) {
                    ctx.lineTo(this.width() / 2, -tr.rotateAnchorOffset() * Util._sign(this.height()) - padding);
                }
                ctx.fillStrokeShape(this);
            },
            hitFunc: (ctx, shape) => {
                if (!this.shouldOverdrawWholeArea()) {
                    return;
                }
                var padding = this.padding();
                ctx.beginPath();
                ctx.rect(-padding, -padding, shape.width() + padding * 2, shape.height() + padding * 2);
                ctx.fillStrokeShape(shape);
            },
        });
        this.add(back);
        this._proxyDrag(back);
        back.on('dragstart', (e) => {
            e.cancelBubble = true;
        });
        back.on('dragmove', (e) => {
            e.cancelBubble = true;
        });
        back.on('dragend', (e) => {
            e.cancelBubble = true;
        });
        this.on('dragmove', (e) => {
            this.update();
        });
    }
    _handleMouseDown(e) {
        this._movingAnchorName = e.target.name().split(' ')[0];
        var attrs = this._getNodeRect();
        var width = attrs.width;
        var height = attrs.height;
        var hypotenuse = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
        this.sin = Math.abs(height / hypotenuse);
        this.cos = Math.abs(width / hypotenuse);
        if (typeof window !== 'undefined') {
            window.addEventListener('mousemove', this._handleMouseMove);
            window.addEventListener('touchmove', this._handleMouseMove);
            window.addEventListener('mouseup', this._handleMouseUp, true);
            window.addEventListener('touchend', this._handleMouseUp, true);
        }
        this._transforming = true;
        var ap = e.target.getAbsolutePosition();
        var pos = e.target.getStage().getPointerPosition();
        this._anchorDragOffset = {
            x: pos.x - ap.x,
            y: pos.y - ap.y,
        };
        this._fire('transformstart', { evt: e.evt, target: this.getNode() });
        this._nodes.forEach((target) => {
            target._fire('transformstart', { evt: e.evt, target });
        });
    }
    _handleMouseMove(e) {
        var x, y, newHypotenuse;
        var anchorNode = this.findOne('.' + this._movingAnchorName);
        var stage = anchorNode.getStage();
        stage.setPointersPositions(e);
        const pp = stage.getPointerPosition();
        let newNodePos = {
            x: pp.x - this._anchorDragOffset.x,
            y: pp.y - this._anchorDragOffset.y,
        };
        const oldAbs = anchorNode.getAbsolutePosition();
        if (this.anchorDragBoundFunc()) {
            newNodePos = this.anchorDragBoundFunc()(oldAbs, newNodePos, e);
        }
        anchorNode.setAbsolutePosition(newNodePos);
        const newAbs = anchorNode.getAbsolutePosition();
        if (oldAbs.x === newAbs.x && oldAbs.y === newAbs.y) {
            return;
        }
        if (this._movingAnchorName === 'rotater') {
            var attrs = this._getNodeRect();
            x = anchorNode.x() - attrs.width / 2;
            y = -anchorNode.y() + attrs.height / 2;
            let delta = Math.atan2(-y, x) + Math.PI / 2;
            if (attrs.height < 0) {
                delta -= Math.PI;
            }
            var oldRotation = Global["a" /* Konva */].getAngle(this.rotation());
            const newRotation = oldRotation + delta;
            const tol = Global["a" /* Konva */].getAngle(this.rotationSnapTolerance());
            const snappedRot = getSnap(this.rotationSnaps(), newRotation, tol);
            const diff = snappedRot - attrs.rotation;
            const shape = rotateAroundCenter(attrs, diff);
            this._fitNodesInto(shape, e);
            return;
        }
        var keepProportion = this.keepRatio() || e.shiftKey;
        var centeredScaling = this.centeredScaling() || e.altKey;
        if (this._movingAnchorName === 'top-left') {
            if (keepProportion) {
                var comparePoint = centeredScaling
                    ? {
                        x: this.width() / 2,
                        y: this.height() / 2,
                    }
                    : {
                        x: this.findOne('.bottom-right').x(),
                        y: this.findOne('.bottom-right').y(),
                    };
                newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) +
                    Math.pow(comparePoint.y - anchorNode.y(), 2));
                var reverseX = this.findOne('.top-left').x() > comparePoint.x ? -1 : 1;
                var reverseY = this.findOne('.top-left').y() > comparePoint.y ? -1 : 1;
                x = newHypotenuse * this.cos * reverseX;
                y = newHypotenuse * this.sin * reverseY;
                this.findOne('.top-left').x(comparePoint.x - x);
                this.findOne('.top-left').y(comparePoint.y - y);
            }
        }
        else if (this._movingAnchorName === 'top-center') {
            this.findOne('.top-left').y(anchorNode.y());
        }
        else if (this._movingAnchorName === 'top-right') {
            if (keepProportion) {
                var comparePoint = centeredScaling
                    ? {
                        x: this.width() / 2,
                        y: this.height() / 2,
                    }
                    : {
                        x: this.findOne('.bottom-left').x(),
                        y: this.findOne('.bottom-left').y(),
                    };
                newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) +
                    Math.pow(comparePoint.y - anchorNode.y(), 2));
                var reverseX = this.findOne('.top-right').x() < comparePoint.x ? -1 : 1;
                var reverseY = this.findOne('.top-right').y() > comparePoint.y ? -1 : 1;
                x = newHypotenuse * this.cos * reverseX;
                y = newHypotenuse * this.sin * reverseY;
                this.findOne('.top-right').x(comparePoint.x + x);
                this.findOne('.top-right').y(comparePoint.y - y);
            }
            var pos = anchorNode.position();
            this.findOne('.top-left').y(pos.y);
            this.findOne('.bottom-right').x(pos.x);
        }
        else if (this._movingAnchorName === 'middle-left') {
            this.findOne('.top-left').x(anchorNode.x());
        }
        else if (this._movingAnchorName === 'middle-right') {
            this.findOne('.bottom-right').x(anchorNode.x());
        }
        else if (this._movingAnchorName === 'bottom-left') {
            if (keepProportion) {
                var comparePoint = centeredScaling
                    ? {
                        x: this.width() / 2,
                        y: this.height() / 2,
                    }
                    : {
                        x: this.findOne('.top-right').x(),
                        y: this.findOne('.top-right').y(),
                    };
                newHypotenuse = Math.sqrt(Math.pow(comparePoint.x - anchorNode.x(), 2) +
                    Math.pow(anchorNode.y() - comparePoint.y, 2));
                var reverseX = comparePoint.x < anchorNode.x() ? -1 : 1;
                var reverseY = anchorNode.y() < comparePoint.y ? -1 : 1;
                x = newHypotenuse * this.cos * reverseX;
                y = newHypotenuse * this.sin * reverseY;
                anchorNode.x(comparePoint.x - x);
                anchorNode.y(comparePoint.y + y);
            }
            pos = anchorNode.position();
            this.findOne('.top-left').x(pos.x);
            this.findOne('.bottom-right').y(pos.y);
        }
        else if (this._movingAnchorName === 'bottom-center') {
            this.findOne('.bottom-right').y(anchorNode.y());
        }
        else if (this._movingAnchorName === 'bottom-right') {
            if (keepProportion) {
                var comparePoint = centeredScaling
                    ? {
                        x: this.width() / 2,
                        y: this.height() / 2,
                    }
                    : {
                        x: this.findOne('.top-left').x(),
                        y: this.findOne('.top-left').y(),
                    };
                newHypotenuse = Math.sqrt(Math.pow(anchorNode.x() - comparePoint.x, 2) +
                    Math.pow(anchorNode.y() - comparePoint.y, 2));
                var reverseX = this.findOne('.bottom-right').x() < comparePoint.x ? -1 : 1;
                var reverseY = this.findOne('.bottom-right').y() < comparePoint.y ? -1 : 1;
                x = newHypotenuse * this.cos * reverseX;
                y = newHypotenuse * this.sin * reverseY;
                this.findOne('.bottom-right').x(comparePoint.x + x);
                this.findOne('.bottom-right').y(comparePoint.y + y);
            }
        }
        else {
            console.error(new Error('Wrong position argument of selection resizer: ' +
                this._movingAnchorName));
        }
        var centeredScaling = this.centeredScaling() || e.altKey;
        if (centeredScaling) {
            var topLeft = this.findOne('.top-left');
            var bottomRight = this.findOne('.bottom-right');
            var topOffsetX = topLeft.x();
            var topOffsetY = topLeft.y();
            var bottomOffsetX = this.getWidth() - bottomRight.x();
            var bottomOffsetY = this.getHeight() - bottomRight.y();
            bottomRight.move({
                x: -topOffsetX,
                y: -topOffsetY,
            });
            topLeft.move({
                x: bottomOffsetX,
                y: bottomOffsetY,
            });
        }
        var absPos = this.findOne('.top-left').getAbsolutePosition();
        x = absPos.x;
        y = absPos.y;
        var width = this.findOne('.bottom-right').x() - this.findOne('.top-left').x();
        var height = this.findOne('.bottom-right').y() - this.findOne('.top-left').y();
        this._fitNodesInto({
            x: x,
            y: y,
            width: width,
            height: height,
            rotation: Global["a" /* Konva */].getAngle(this.rotation()),
        }, e);
    }
    _handleMouseUp(e) {
        this._removeEvents(e);
    }
    getAbsoluteTransform() {
        return this.getTransform();
    }
    _removeEvents(e) {
        if (this._transforming) {
            this._transforming = false;
            if (typeof window !== 'undefined') {
                window.removeEventListener('mousemove', this._handleMouseMove);
                window.removeEventListener('touchmove', this._handleMouseMove);
                window.removeEventListener('mouseup', this._handleMouseUp, true);
                window.removeEventListener('touchend', this._handleMouseUp, true);
            }
            var node = this.getNode();
            this._fire('transformend', { evt: e, target: node });
            if (node) {
                this._nodes.forEach((target) => {
                    target._fire('transformend', { evt: e, target });
                });
            }
            this._movingAnchorName = null;
        }
    }
    _fitNodesInto(newAttrs, evt) {
        var oldAttrs = this._getNodeRect();
        const minSize = 1;
        if (Util._inRange(newAttrs.width, -this.padding() * 2 - minSize, minSize)) {
            this.update();
            return;
        }
        if (Util._inRange(newAttrs.height, -this.padding() * 2 - minSize, minSize)) {
            this.update();
            return;
        }
        const allowNegativeScale = this.flipEnabled();
        var t = new Transform();
        t.rotate(Global["a" /* Konva */].getAngle(this.rotation()));
        if (this._movingAnchorName &&
            newAttrs.width < 0 &&
            this._movingAnchorName.indexOf('left') >= 0) {
            const offset = t.point({
                x: -this.padding() * 2,
                y: 0,
            });
            newAttrs.x += offset.x;
            newAttrs.y += offset.y;
            newAttrs.width += this.padding() * 2;
            this._movingAnchorName = this._movingAnchorName.replace('left', 'right');
            this._anchorDragOffset.x -= offset.x;
            this._anchorDragOffset.y -= offset.y;
            if (!allowNegativeScale) {
                this.update();
                return;
            }
        }
        else if (this._movingAnchorName &&
            newAttrs.width < 0 &&
            this._movingAnchorName.indexOf('right') >= 0) {
            const offset = t.point({
                x: this.padding() * 2,
                y: 0,
            });
            this._movingAnchorName = this._movingAnchorName.replace('right', 'left');
            this._anchorDragOffset.x -= offset.x;
            this._anchorDragOffset.y -= offset.y;
            newAttrs.width += this.padding() * 2;
            if (!allowNegativeScale) {
                this.update();
                return;
            }
        }
        if (this._movingAnchorName &&
            newAttrs.height < 0 &&
            this._movingAnchorName.indexOf('top') >= 0) {
            const offset = t.point({
                x: 0,
                y: -this.padding() * 2,
            });
            newAttrs.x += offset.x;
            newAttrs.y += offset.y;
            this._movingAnchorName = this._movingAnchorName.replace('top', 'bottom');
            this._anchorDragOffset.x -= offset.x;
            this._anchorDragOffset.y -= offset.y;
            newAttrs.height += this.padding() * 2;
            if (!allowNegativeScale) {
                this.update();
                return;
            }
        }
        else if (this._movingAnchorName &&
            newAttrs.height < 0 &&
            this._movingAnchorName.indexOf('bottom') >= 0) {
            const offset = t.point({
                x: 0,
                y: this.padding() * 2,
            });
            this._movingAnchorName = this._movingAnchorName.replace('bottom', 'top');
            this._anchorDragOffset.x -= offset.x;
            this._anchorDragOffset.y -= offset.y;
            newAttrs.height += this.padding() * 2;
            if (!allowNegativeScale) {
                this.update();
                return;
            }
        }
        if (this.boundBoxFunc()) {
            const bounded = this.boundBoxFunc()(oldAttrs, newAttrs);
            if (bounded) {
                newAttrs = bounded;
            }
            else {
                Util.warn('boundBoxFunc returned falsy. You should return new bound rect from it!');
            }
        }
        const baseSize = 10000000;
        const oldTr = new Transform();
        oldTr.translate(oldAttrs.x, oldAttrs.y);
        oldTr.rotate(oldAttrs.rotation);
        oldTr.scale(oldAttrs.width / baseSize, oldAttrs.height / baseSize);
        const newTr = new Transform();
        newTr.translate(newAttrs.x, newAttrs.y);
        newTr.rotate(newAttrs.rotation);
        newTr.scale(newAttrs.width / baseSize, newAttrs.height / baseSize);
        const delta = newTr.multiply(oldTr.invert());
        this._nodes.forEach((node) => {
            var _a;
            const parentTransform = node.getParent().getAbsoluteTransform();
            const localTransform = node.getTransform().copy();
            localTransform.translate(node.offsetX(), node.offsetY());
            const newLocalTransform = new Transform();
            newLocalTransform
                .multiply(parentTransform.copy().invert())
                .multiply(delta)
                .multiply(parentTransform)
                .multiply(localTransform);
            const attrs = newLocalTransform.decompose();
            node.setAttrs(attrs);
            this._fire('transform', { evt: evt, target: node });
            node._fire('transform', { evt: evt, target: node });
            (_a = node.getLayer()) === null || _a === void 0 ? void 0 : _a.batchDraw();
        });
        this.rotation(Util._getRotation(newAttrs.rotation));
        this._resetTransformCache();
        this.update();
        this.getLayer().batchDraw();
    }
    forceUpdate() {
        this._resetTransformCache();
        this.update();
    }
    _batchChangeChild(selector, attrs) {
        const anchor = this.findOne(selector);
        anchor.setAttrs(attrs);
    }
    update() {
        var _a;
        var attrs = this._getNodeRect();
        this.rotation(Util._getRotation(attrs.rotation));
        var width = attrs.width;
        var height = attrs.height;
        var enabledAnchors = this.enabledAnchors();
        var resizeEnabled = this.resizeEnabled();
        var padding = this.padding();
        var anchorSize = this.anchorSize();
        this.find('._anchor').forEach((node) => {
            node.setAttrs({
                width: anchorSize,
                height: anchorSize,
                offsetX: anchorSize / 2,
                offsetY: anchorSize / 2,
                stroke: this.anchorStroke(),
                strokeWidth: this.anchorStrokeWidth(),
                fill: this.anchorFill(),
                cornerRadius: this.anchorCornerRadius(),
            });
        });
        this._batchChangeChild('.top-left', {
            x: 0,
            y: 0,
            offsetX: anchorSize / 2 + padding,
            offsetY: anchorSize / 2 + padding,
            visible: resizeEnabled && enabledAnchors.indexOf('top-left') >= 0,
        });
        this._batchChangeChild('.top-center', {
            x: width / 2,
            y: 0,
            offsetY: anchorSize / 2 + padding,
            visible: resizeEnabled && enabledAnchors.indexOf('top-center') >= 0,
        });
        this._batchChangeChild('.top-right', {
            x: width,
            y: 0,
            offsetX: anchorSize / 2 - padding,
            offsetY: anchorSize / 2 + padding,
            visible: resizeEnabled && enabledAnchors.indexOf('top-right') >= 0,
        });
        this._batchChangeChild('.middle-left', {
            x: 0,
            y: height / 2,
            offsetX: anchorSize / 2 + padding,
            visible: resizeEnabled && enabledAnchors.indexOf('middle-left') >= 0,
        });
        this._batchChangeChild('.middle-right', {
            x: width,
            y: height / 2,
            offsetX: anchorSize / 2 - padding,
            visible: resizeEnabled && enabledAnchors.indexOf('middle-right') >= 0,
        });
        this._batchChangeChild('.bottom-left', {
            x: 0,
            y: height,
            offsetX: anchorSize / 2 + padding,
            offsetY: anchorSize / 2 - padding,
            visible: resizeEnabled && enabledAnchors.indexOf('bottom-left') >= 0,
        });
        this._batchChangeChild('.bottom-center', {
            x: width / 2,
            y: height,
            offsetY: anchorSize / 2 - padding,
            visible: resizeEnabled && enabledAnchors.indexOf('bottom-center') >= 0,
        });
        this._batchChangeChild('.bottom-right', {
            x: width,
            y: height,
            offsetX: anchorSize / 2 - padding,
            offsetY: anchorSize / 2 - padding,
            visible: resizeEnabled && enabledAnchors.indexOf('bottom-right') >= 0,
        });
        this._batchChangeChild('.rotater', {
            x: width / 2,
            y: -this.rotateAnchorOffset() * Util._sign(height) - padding,
            visible: this.rotateEnabled(),
        });
        this._batchChangeChild('.back', {
            width: width,
            height: height,
            visible: this.borderEnabled(),
            stroke: this.borderStroke(),
            strokeWidth: this.borderStrokeWidth(),
            dash: this.borderDash(),
            x: 0,
            y: 0,
        });
        (_a = this.getLayer()) === null || _a === void 0 ? void 0 : _a.batchDraw();
    }
    isTransforming() {
        return this._transforming;
    }
    stopTransform() {
        if (this._transforming) {
            this._removeEvents();
            var anchorNode = this.findOne('.' + this._movingAnchorName);
            if (anchorNode) {
                anchorNode.stopDrag();
            }
        }
    }
    destroy() {
        if (this.getStage() && this._cursorChange) {
            this.getStage().content && (this.getStage().content.style.cursor = '');
        }
        Group_Group.prototype.destroy.call(this);
        this.detach();
        this._removeEvents();
        return this;
    }
    toObject() {
        return Node_Node.prototype.toObject.call(this);
    }
}
function validateAnchors(val) {
    if (!(val instanceof Array)) {
        Util.warn('enabledAnchors value should be an array');
    }
    if (val instanceof Array) {
        val.forEach(function (name) {
            if (ANCHORS_NAMES.indexOf(name) === -1) {
                Util.warn('Unknown anchor name: ' +
                    name +
                    '. Available names are: ' +
                    ANCHORS_NAMES.join(', '));
            }
        });
    }
    return val || [];
}
Transformer_Transformer.prototype.className = 'Transformer';
Object(Global["b" /* _registerNode */])(Transformer_Transformer);
Factory.addGetterSetter(Transformer_Transformer, 'enabledAnchors', ANCHORS_NAMES, validateAnchors);
Factory.addGetterSetter(Transformer_Transformer, 'flipEnabled', true, getBooleanValidator());
Factory.addGetterSetter(Transformer_Transformer, 'resizeEnabled', true);
Factory.addGetterSetter(Transformer_Transformer, 'anchorSize', 10, getNumberValidator());
Factory.addGetterSetter(Transformer_Transformer, 'rotateEnabled', true);
Factory.addGetterSetter(Transformer_Transformer, 'rotationSnaps', []);
Factory.addGetterSetter(Transformer_Transformer, 'rotateAnchorOffset', 50, getNumberValidator());
Factory.addGetterSetter(Transformer_Transformer, 'rotationSnapTolerance', 5, getNumberValidator());
Factory.addGetterSetter(Transformer_Transformer, 'borderEnabled', true);
Factory.addGetterSetter(Transformer_Transformer, 'anchorStroke', 'rgb(0, 161, 255)');
Factory.addGetterSetter(Transformer_Transformer, 'anchorStrokeWidth', 1, getNumberValidator());
Factory.addGetterSetter(Transformer_Transformer, 'anchorFill', 'white');
Factory.addGetterSetter(Transformer_Transformer, 'anchorCornerRadius', 0, getNumberValidator());
Factory.addGetterSetter(Transformer_Transformer, 'borderStroke', 'rgb(0, 161, 255)');
Factory.addGetterSetter(Transformer_Transformer, 'borderStrokeWidth', 1, getNumberValidator());
Factory.addGetterSetter(Transformer_Transformer, 'borderDash');
Factory.addGetterSetter(Transformer_Transformer, 'keepRatio', true);
Factory.addGetterSetter(Transformer_Transformer, 'centeredScaling', false);
Factory.addGetterSetter(Transformer_Transformer, 'ignoreStroke', false);
Factory.addGetterSetter(Transformer_Transformer, 'padding', 0, getNumberValidator());
Factory.addGetterSetter(Transformer_Transformer, 'node');
Factory.addGetterSetter(Transformer_Transformer, 'nodes');
Factory.addGetterSetter(Transformer_Transformer, 'boundBoxFunc');
Factory.addGetterSetter(Transformer_Transformer, 'anchorDragBoundFunc');
Factory.addGetterSetter(Transformer_Transformer, 'shouldOverdrawWholeArea', false);
Factory.addGetterSetter(Transformer_Transformer, 'useSingleNodeRotation', true);
Factory.backCompat(Transformer_Transformer, {
    lineEnabled: 'borderEnabled',
    rotateHandlerOffset: 'rotateAnchorOffset',
    enabledHandlers: 'enabledAnchors',
});

// CONCATENATED MODULE: ./node_modules/konva/lib/shapes/Wedge.js





class Wedge_Wedge extends Shape_Shape {
    _sceneFunc(context) {
        context.beginPath();
        context.arc(0, 0, this.radius(), 0, Global["a" /* Konva */].getAngle(this.angle()), this.clockwise());
        context.lineTo(0, 0);
        context.closePath();
        context.fillStrokeShape(this);
    }
    getWidth() {
        return this.radius() * 2;
    }
    getHeight() {
        return this.radius() * 2;
    }
    setWidth(width) {
        this.radius(width / 2);
    }
    setHeight(height) {
        this.radius(height / 2);
    }
}
Wedge_Wedge.prototype.className = 'Wedge';
Wedge_Wedge.prototype._centroid = true;
Wedge_Wedge.prototype._attrsAffectingSize = ['radius'];
Object(Global["b" /* _registerNode */])(Wedge_Wedge);
Factory.addGetterSetter(Wedge_Wedge, 'radius', 0, getNumberValidator());
Factory.addGetterSetter(Wedge_Wedge, 'angle', 0, getNumberValidator());
Factory.addGetterSetter(Wedge_Wedge, 'clockwise', false);
Factory.backCompat(Wedge_Wedge, {
    angleDeg: 'angle',
    getAngleDeg: 'getAngle',
    setAngleDeg: 'setAngle',
});

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Blur.js



function BlurStack() {
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
}
var mul_table = [
    512,
    512,
    456,
    512,
    328,
    456,
    335,
    512,
    405,
    328,
    271,
    456,
    388,
    335,
    292,
    512,
    454,
    405,
    364,
    328,
    298,
    271,
    496,
    456,
    420,
    388,
    360,
    335,
    312,
    292,
    273,
    512,
    482,
    454,
    428,
    405,
    383,
    364,
    345,
    328,
    312,
    298,
    284,
    271,
    259,
    496,
    475,
    456,
    437,
    420,
    404,
    388,
    374,
    360,
    347,
    335,
    323,
    312,
    302,
    292,
    282,
    273,
    265,
    512,
    497,
    482,
    468,
    454,
    441,
    428,
    417,
    405,
    394,
    383,
    373,
    364,
    354,
    345,
    337,
    328,
    320,
    312,
    305,
    298,
    291,
    284,
    278,
    271,
    265,
    259,
    507,
    496,
    485,
    475,
    465,
    456,
    446,
    437,
    428,
    420,
    412,
    404,
    396,
    388,
    381,
    374,
    367,
    360,
    354,
    347,
    341,
    335,
    329,
    323,
    318,
    312,
    307,
    302,
    297,
    292,
    287,
    282,
    278,
    273,
    269,
    265,
    261,
    512,
    505,
    497,
    489,
    482,
    475,
    468,
    461,
    454,
    447,
    441,
    435,
    428,
    422,
    417,
    411,
    405,
    399,
    394,
    389,
    383,
    378,
    373,
    368,
    364,
    359,
    354,
    350,
    345,
    341,
    337,
    332,
    328,
    324,
    320,
    316,
    312,
    309,
    305,
    301,
    298,
    294,
    291,
    287,
    284,
    281,
    278,
    274,
    271,
    268,
    265,
    262,
    259,
    257,
    507,
    501,
    496,
    491,
    485,
    480,
    475,
    470,
    465,
    460,
    456,
    451,
    446,
    442,
    437,
    433,
    428,
    424,
    420,
    416,
    412,
    408,
    404,
    400,
    396,
    392,
    388,
    385,
    381,
    377,
    374,
    370,
    367,
    363,
    360,
    357,
    354,
    350,
    347,
    344,
    341,
    338,
    335,
    332,
    329,
    326,
    323,
    320,
    318,
    315,
    312,
    310,
    307,
    304,
    302,
    299,
    297,
    294,
    292,
    289,
    287,
    285,
    282,
    280,
    278,
    275,
    273,
    271,
    269,
    267,
    265,
    263,
    261,
    259,
];
var shg_table = [
    9,
    11,
    12,
    13,
    13,
    14,
    14,
    15,
    15,
    15,
    15,
    16,
    16,
    16,
    16,
    17,
    17,
    17,
    17,
    17,
    17,
    17,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    18,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    19,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    20,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    21,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    22,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    23,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
    24,
];
function filterGaussBlurRGBA(imageData, radius) {
    var pixels = imageData.data, width = imageData.width, height = imageData.height;
    var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum, r_out_sum, g_out_sum, b_out_sum, a_out_sum, r_in_sum, g_in_sum, b_in_sum, a_in_sum, pr, pg, pb, pa, rbs;
    var div = radius + radius + 1, widthMinus1 = width - 1, heightMinus1 = height - 1, radiusPlus1 = radius + 1, sumFactor = (radiusPlus1 * (radiusPlus1 + 1)) / 2, stackStart = new BlurStack(), stackEnd = null, stack = stackStart, stackIn = null, stackOut = null, mul_sum = mul_table[radius], shg_sum = shg_table[radius];
    for (i = 1; i < div; i++) {
        stack = stack.next = new BlurStack();
        if (i === radiusPlus1) {
            stackEnd = stack;
        }
    }
    stack.next = stackStart;
    yw = yi = 0;
    for (y = 0; y < height; y++) {
        r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;
        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
        a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;
        stack = stackStart;
        for (i = 0; i < radiusPlus1; i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }
        for (i = 1; i < radiusPlus1; i++) {
            p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2);
            r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = pg = pixels[p + 1]) * rbs;
            b_sum += (stack.b = pb = pixels[p + 2]) * rbs;
            a_sum += (stack.a = pa = pixels[p + 3]) * rbs;
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;
            stack = stack.next;
        }
        stackIn = stackStart;
        stackOut = stackEnd;
        for (x = 0; x < width; x++) {
            pixels[yi + 3] = pa = (a_sum * mul_sum) >> shg_sum;
            if (pa !== 0) {
                pa = 255 / pa;
                pixels[yi] = ((r_sum * mul_sum) >> shg_sum) * pa;
                pixels[yi + 1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                pixels[yi + 2] = ((b_sum * mul_sum) >> shg_sum) * pa;
            }
            else {
                pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0;
            }
            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;
            p = (yw + ((p = x + radius + 1) < widthMinus1 ? p : widthMinus1)) << 2;
            r_in_sum += stackIn.r = pixels[p];
            g_in_sum += stackIn.g = pixels[p + 1];
            b_in_sum += stackIn.b = pixels[p + 2];
            a_in_sum += stackIn.a = pixels[p + 3];
            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;
            a_sum += a_in_sum;
            stackIn = stackIn.next;
            r_out_sum += pr = stackOut.r;
            g_out_sum += pg = stackOut.g;
            b_out_sum += pb = stackOut.b;
            a_out_sum += pa = stackOut.a;
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;
            stackOut = stackOut.next;
            yi += 4;
        }
        yw += width;
    }
    for (x = 0; x < width; x++) {
        g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;
        yi = x << 2;
        r_out_sum = radiusPlus1 * (pr = pixels[yi]);
        g_out_sum = radiusPlus1 * (pg = pixels[yi + 1]);
        b_out_sum = radiusPlus1 * (pb = pixels[yi + 2]);
        a_out_sum = radiusPlus1 * (pa = pixels[yi + 3]);
        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;
        stack = stackStart;
        for (i = 0; i < radiusPlus1; i++) {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }
        yp = width;
        for (i = 1; i <= radius; i++) {
            yi = (yp + x) << 2;
            r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i);
            g_sum += (stack.g = pg = pixels[yi + 1]) * rbs;
            b_sum += (stack.b = pb = pixels[yi + 2]) * rbs;
            a_sum += (stack.a = pa = pixels[yi + 3]) * rbs;
            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;
            stack = stack.next;
            if (i < heightMinus1) {
                yp += width;
            }
        }
        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for (y = 0; y < height; y++) {
            p = yi << 2;
            pixels[p + 3] = pa = (a_sum * mul_sum) >> shg_sum;
            if (pa > 0) {
                pa = 255 / pa;
                pixels[p] = ((r_sum * mul_sum) >> shg_sum) * pa;
                pixels[p + 1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                pixels[p + 2] = ((b_sum * mul_sum) >> shg_sum) * pa;
            }
            else {
                pixels[p] = pixels[p + 1] = pixels[p + 2] = 0;
            }
            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;
            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;
            p =
                (x +
                    ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * width) <<
                    2;
            r_sum += r_in_sum += stackIn.r = pixels[p];
            g_sum += g_in_sum += stackIn.g = pixels[p + 1];
            b_sum += b_in_sum += stackIn.b = pixels[p + 2];
            a_sum += a_in_sum += stackIn.a = pixels[p + 3];
            stackIn = stackIn.next;
            r_out_sum += pr = stackOut.r;
            g_out_sum += pg = stackOut.g;
            b_out_sum += pb = stackOut.b;
            a_out_sum += pa = stackOut.a;
            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;
            stackOut = stackOut.next;
            yi += width;
        }
    }
}
const Blur = function Blur(imageData) {
    var radius = Math.round(this.blurRadius());
    if (radius > 0) {
        filterGaussBlurRGBA(imageData, radius);
    }
};
Factory.addGetterSetter(Node_Node, 'blurRadius', 0, getNumberValidator(), Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Brighten.js



const Brighten = function (imageData) {
    var brightness = this.brightness() * 255, data = imageData.data, len = data.length, i;
    for (i = 0; i < len; i += 4) {
        data[i] += brightness;
        data[i + 1] += brightness;
        data[i + 2] += brightness;
    }
};
Factory.addGetterSetter(Node_Node, 'brightness', 0, getNumberValidator(), Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Contrast.js



const Contrast = function (imageData) {
    var adjust = Math.pow((this.contrast() + 100) / 100, 2);
    var data = imageData.data, nPixels = data.length, red = 150, green = 150, blue = 150, i;
    for (i = 0; i < nPixels; i += 4) {
        red = data[i];
        green = data[i + 1];
        blue = data[i + 2];
        red /= 255;
        red -= 0.5;
        red *= adjust;
        red += 0.5;
        red *= 255;
        green /= 255;
        green -= 0.5;
        green *= adjust;
        green += 0.5;
        green *= 255;
        blue /= 255;
        blue -= 0.5;
        blue *= adjust;
        blue += 0.5;
        blue *= 255;
        red = red < 0 ? 0 : red > 255 ? 255 : red;
        green = green < 0 ? 0 : green > 255 ? 255 : green;
        blue = blue < 0 ? 0 : blue > 255 ? 255 : blue;
        data[i] = red;
        data[i + 1] = green;
        data[i + 2] = blue;
    }
};
Factory.addGetterSetter(Node_Node, 'contrast', 0, getNumberValidator(), Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Emboss.js




const Emboss = function (imageData) {
    var strength = this.embossStrength() * 10, greyLevel = this.embossWhiteLevel() * 255, direction = this.embossDirection(), blend = this.embossBlend(), dirY = 0, dirX = 0, data = imageData.data, w = imageData.width, h = imageData.height, w4 = w * 4, y = h;
    switch (direction) {
        case 'top-left':
            dirY = -1;
            dirX = -1;
            break;
        case 'top':
            dirY = -1;
            dirX = 0;
            break;
        case 'top-right':
            dirY = -1;
            dirX = 1;
            break;
        case 'right':
            dirY = 0;
            dirX = 1;
            break;
        case 'bottom-right':
            dirY = 1;
            dirX = 1;
            break;
        case 'bottom':
            dirY = 1;
            dirX = 0;
            break;
        case 'bottom-left':
            dirY = 1;
            dirX = -1;
            break;
        case 'left':
            dirY = 0;
            dirX = -1;
            break;
        default:
            Util.error('Unknown emboss direction: ' + direction);
    }
    do {
        var offsetY = (y - 1) * w4;
        var otherY = dirY;
        if (y + otherY < 1) {
            otherY = 0;
        }
        if (y + otherY > h) {
            otherY = 0;
        }
        var offsetYOther = (y - 1 + otherY) * w * 4;
        var x = w;
        do {
            var offset = offsetY + (x - 1) * 4;
            var otherX = dirX;
            if (x + otherX < 1) {
                otherX = 0;
            }
            if (x + otherX > w) {
                otherX = 0;
            }
            var offsetOther = offsetYOther + (x - 1 + otherX) * 4;
            var dR = data[offset] - data[offsetOther];
            var dG = data[offset + 1] - data[offsetOther + 1];
            var dB = data[offset + 2] - data[offsetOther + 2];
            var dif = dR;
            var absDif = dif > 0 ? dif : -dif;
            var absG = dG > 0 ? dG : -dG;
            var absB = dB > 0 ? dB : -dB;
            if (absG > absDif) {
                dif = dG;
            }
            if (absB > absDif) {
                dif = dB;
            }
            dif *= strength;
            if (blend) {
                var r = data[offset] + dif;
                var g = data[offset + 1] + dif;
                var b = data[offset + 2] + dif;
                data[offset] = r > 255 ? 255 : r < 0 ? 0 : r;
                data[offset + 1] = g > 255 ? 255 : g < 0 ? 0 : g;
                data[offset + 2] = b > 255 ? 255 : b < 0 ? 0 : b;
            }
            else {
                var grey = greyLevel - dif;
                if (grey < 0) {
                    grey = 0;
                }
                else if (grey > 255) {
                    grey = 255;
                }
                data[offset] = data[offset + 1] = data[offset + 2] = grey;
            }
        } while (--x);
    } while (--y);
};
Factory.addGetterSetter(Node_Node, 'embossStrength', 0.5, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node_Node, 'embossWhiteLevel', 0.5, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node_Node, 'embossDirection', 'top-left', null, Factory.afterSetFilter);
Factory.addGetterSetter(Node_Node, 'embossBlend', false, null, Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Enhance.js



function remap(fromValue, fromMin, fromMax, toMin, toMax) {
    var fromRange = fromMax - fromMin, toRange = toMax - toMin, toValue;
    if (fromRange === 0) {
        return toMin + toRange / 2;
    }
    if (toRange === 0) {
        return toMin;
    }
    toValue = (fromValue - fromMin) / fromRange;
    toValue = toRange * toValue + toMin;
    return toValue;
}
const Enhance = function (imageData) {
    var data = imageData.data, nSubPixels = data.length, rMin = data[0], rMax = rMin, r, gMin = data[1], gMax = gMin, g, bMin = data[2], bMax = bMin, b, i;
    var enhanceAmount = this.enhance();
    if (enhanceAmount === 0) {
        return;
    }
    for (i = 0; i < nSubPixels; i += 4) {
        r = data[i + 0];
        if (r < rMin) {
            rMin = r;
        }
        else if (r > rMax) {
            rMax = r;
        }
        g = data[i + 1];
        if (g < gMin) {
            gMin = g;
        }
        else if (g > gMax) {
            gMax = g;
        }
        b = data[i + 2];
        if (b < bMin) {
            bMin = b;
        }
        else if (b > bMax) {
            bMax = b;
        }
    }
    if (rMax === rMin) {
        rMax = 255;
        rMin = 0;
    }
    if (gMax === gMin) {
        gMax = 255;
        gMin = 0;
    }
    if (bMax === bMin) {
        bMax = 255;
        bMin = 0;
    }
    var rMid, rGoalMax, rGoalMin, gMid, gGoalMax, gGoalMin, bMid, bGoalMax, bGoalMin;
    if (enhanceAmount > 0) {
        rGoalMax = rMax + enhanceAmount * (255 - rMax);
        rGoalMin = rMin - enhanceAmount * (rMin - 0);
        gGoalMax = gMax + enhanceAmount * (255 - gMax);
        gGoalMin = gMin - enhanceAmount * (gMin - 0);
        bGoalMax = bMax + enhanceAmount * (255 - bMax);
        bGoalMin = bMin - enhanceAmount * (bMin - 0);
    }
    else {
        rMid = (rMax + rMin) * 0.5;
        rGoalMax = rMax + enhanceAmount * (rMax - rMid);
        rGoalMin = rMin + enhanceAmount * (rMin - rMid);
        gMid = (gMax + gMin) * 0.5;
        gGoalMax = gMax + enhanceAmount * (gMax - gMid);
        gGoalMin = gMin + enhanceAmount * (gMin - gMid);
        bMid = (bMax + bMin) * 0.5;
        bGoalMax = bMax + enhanceAmount * (bMax - bMid);
        bGoalMin = bMin + enhanceAmount * (bMin - bMid);
    }
    for (i = 0; i < nSubPixels; i += 4) {
        data[i + 0] = remap(data[i + 0], rMin, rMax, rGoalMin, rGoalMax);
        data[i + 1] = remap(data[i + 1], gMin, gMax, gGoalMin, gGoalMax);
        data[i + 2] = remap(data[i + 2], bMin, bMax, bGoalMin, bGoalMax);
    }
};
Factory.addGetterSetter(Node_Node, 'enhance', 0, getNumberValidator(), Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Grayscale.js
const Grayscale = function (imageData) {
    var data = imageData.data, len = data.length, i, brightness;
    for (i = 0; i < len; i += 4) {
        brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
        data[i] = brightness;
        data[i + 1] = brightness;
        data[i + 2] = brightness;
    }
};

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/HSL.js



Factory.addGetterSetter(Node_Node, 'hue', 0, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node_Node, 'saturation', 0, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node_Node, 'luminance', 0, getNumberValidator(), Factory.afterSetFilter);
const HSL = function (imageData) {
    var data = imageData.data, nPixels = data.length, v = 1, s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, l = this.luminance() * 127, i;
    var vsu = v * s * Math.cos((h * Math.PI) / 180), vsw = v * s * Math.sin((h * Math.PI) / 180);
    var rr = 0.299 * v + 0.701 * vsu + 0.167 * vsw, rg = 0.587 * v - 0.587 * vsu + 0.33 * vsw, rb = 0.114 * v - 0.114 * vsu - 0.497 * vsw;
    var gr = 0.299 * v - 0.299 * vsu - 0.328 * vsw, gg = 0.587 * v + 0.413 * vsu + 0.035 * vsw, gb = 0.114 * v - 0.114 * vsu + 0.293 * vsw;
    var br = 0.299 * v - 0.3 * vsu + 1.25 * vsw, bg = 0.587 * v - 0.586 * vsu - 1.05 * vsw, bb = 0.114 * v + 0.886 * vsu - 0.2 * vsw;
    var r, g, b, a;
    for (i = 0; i < nPixels; i += 4) {
        r = data[i + 0];
        g = data[i + 1];
        b = data[i + 2];
        a = data[i + 3];
        data[i + 0] = rr * r + rg * g + rb * b + l;
        data[i + 1] = gr * r + gg * g + gb * b + l;
        data[i + 2] = br * r + bg * g + bb * b + l;
        data[i + 3] = a;
    }
};

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/HSV.js



const HSV = function (imageData) {
    var data = imageData.data, nPixels = data.length, v = Math.pow(2, this.value()), s = Math.pow(2, this.saturation()), h = Math.abs(this.hue() + 360) % 360, i;
    var vsu = v * s * Math.cos((h * Math.PI) / 180), vsw = v * s * Math.sin((h * Math.PI) / 180);
    var rr = 0.299 * v + 0.701 * vsu + 0.167 * vsw, rg = 0.587 * v - 0.587 * vsu + 0.33 * vsw, rb = 0.114 * v - 0.114 * vsu - 0.497 * vsw;
    var gr = 0.299 * v - 0.299 * vsu - 0.328 * vsw, gg = 0.587 * v + 0.413 * vsu + 0.035 * vsw, gb = 0.114 * v - 0.114 * vsu + 0.293 * vsw;
    var br = 0.299 * v - 0.3 * vsu + 1.25 * vsw, bg = 0.587 * v - 0.586 * vsu - 1.05 * vsw, bb = 0.114 * v + 0.886 * vsu - 0.2 * vsw;
    var r, g, b, a;
    for (i = 0; i < nPixels; i += 4) {
        r = data[i + 0];
        g = data[i + 1];
        b = data[i + 2];
        a = data[i + 3];
        data[i + 0] = rr * r + rg * g + rb * b;
        data[i + 1] = gr * r + gg * g + gb * b;
        data[i + 2] = br * r + bg * g + bb * b;
        data[i + 3] = a;
    }
};
Factory.addGetterSetter(Node_Node, 'hue', 0, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node_Node, 'saturation', 0, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node_Node, 'value', 0, getNumberValidator(), Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Invert.js
const Invert = function (imageData) {
    var data = imageData.data, len = data.length, i;
    for (i = 0; i < len; i += 4) {
        data[i] = 255 - data[i];
        data[i + 1] = 255 - data[i + 1];
        data[i + 2] = 255 - data[i + 2];
    }
};

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Kaleidoscope.js




var ToPolar = function (src, dst, opt) {
    var srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2, i, x, y, r = 0, g = 0, b = 0, a = 0;
    var rad, rMax = Math.sqrt(xMid * xMid + yMid * yMid);
    x = xSize - xMid;
    y = ySize - yMid;
    rad = Math.sqrt(x * x + y * y);
    rMax = rad > rMax ? rad : rMax;
    var rSize = ySize, tSize = xSize, radius, theta;
    var conversion = ((360 / tSize) * Math.PI) / 180, sin, cos;
    for (theta = 0; theta < tSize; theta += 1) {
        sin = Math.sin(theta * conversion);
        cos = Math.cos(theta * conversion);
        for (radius = 0; radius < rSize; radius += 1) {
            x = Math.floor(xMid + ((rMax * radius) / rSize) * cos);
            y = Math.floor(yMid + ((rMax * radius) / rSize) * sin);
            i = (y * xSize + x) * 4;
            r = srcPixels[i + 0];
            g = srcPixels[i + 1];
            b = srcPixels[i + 2];
            a = srcPixels[i + 3];
            i = (theta + radius * xSize) * 4;
            dstPixels[i + 0] = r;
            dstPixels[i + 1] = g;
            dstPixels[i + 2] = b;
            dstPixels[i + 3] = a;
        }
    }
};
var FromPolar = function (src, dst, opt) {
    var srcPixels = src.data, dstPixels = dst.data, xSize = src.width, ySize = src.height, xMid = opt.polarCenterX || xSize / 2, yMid = opt.polarCenterY || ySize / 2, i, x, y, dx, dy, r = 0, g = 0, b = 0, a = 0;
    var rad, rMax = Math.sqrt(xMid * xMid + yMid * yMid);
    x = xSize - xMid;
    y = ySize - yMid;
    rad = Math.sqrt(x * x + y * y);
    rMax = rad > rMax ? rad : rMax;
    var rSize = ySize, tSize = xSize, radius, theta, phaseShift = opt.polarRotation || 0;
    var x1, y1;
    for (x = 0; x < xSize; x += 1) {
        for (y = 0; y < ySize; y += 1) {
            dx = x - xMid;
            dy = y - yMid;
            radius = (Math.sqrt(dx * dx + dy * dy) * rSize) / rMax;
            theta = ((Math.atan2(dy, dx) * 180) / Math.PI + 360 + phaseShift) % 360;
            theta = (theta * tSize) / 360;
            x1 = Math.floor(theta);
            y1 = Math.floor(radius);
            i = (y1 * xSize + x1) * 4;
            r = srcPixels[i + 0];
            g = srcPixels[i + 1];
            b = srcPixels[i + 2];
            a = srcPixels[i + 3];
            i = (y * xSize + x) * 4;
            dstPixels[i + 0] = r;
            dstPixels[i + 1] = g;
            dstPixels[i + 2] = b;
            dstPixels[i + 3] = a;
        }
    }
};
const Kaleidoscope = function (imageData) {
    var xSize = imageData.width, ySize = imageData.height;
    var x, y, xoff, i, r, g, b, a, srcPos, dstPos;
    var power = Math.round(this.kaleidoscopePower());
    var angle = Math.round(this.kaleidoscopeAngle());
    var offset = Math.floor((xSize * (angle % 360)) / 360);
    if (power < 1) {
        return;
    }
    var tempCanvas = Util.createCanvasElement();
    tempCanvas.width = xSize;
    tempCanvas.height = ySize;
    var scratchData = tempCanvas
        .getContext('2d')
        .getImageData(0, 0, xSize, ySize);
    ToPolar(imageData, scratchData, {
        polarCenterX: xSize / 2,
        polarCenterY: ySize / 2,
    });
    var minSectionSize = xSize / Math.pow(2, power);
    while (minSectionSize <= 8) {
        minSectionSize = minSectionSize * 2;
        power -= 1;
    }
    minSectionSize = Math.ceil(minSectionSize);
    var sectionSize = minSectionSize;
    var xStart = 0, xEnd = sectionSize, xDelta = 1;
    if (offset + minSectionSize > xSize) {
        xStart = sectionSize;
        xEnd = 0;
        xDelta = -1;
    }
    for (y = 0; y < ySize; y += 1) {
        for (x = xStart; x !== xEnd; x += xDelta) {
            xoff = Math.round(x + offset) % xSize;
            srcPos = (xSize * y + xoff) * 4;
            r = scratchData.data[srcPos + 0];
            g = scratchData.data[srcPos + 1];
            b = scratchData.data[srcPos + 2];
            a = scratchData.data[srcPos + 3];
            dstPos = (xSize * y + x) * 4;
            scratchData.data[dstPos + 0] = r;
            scratchData.data[dstPos + 1] = g;
            scratchData.data[dstPos + 2] = b;
            scratchData.data[dstPos + 3] = a;
        }
    }
    for (y = 0; y < ySize; y += 1) {
        sectionSize = Math.floor(minSectionSize);
        for (i = 0; i < power; i += 1) {
            for (x = 0; x < sectionSize + 1; x += 1) {
                srcPos = (xSize * y + x) * 4;
                r = scratchData.data[srcPos + 0];
                g = scratchData.data[srcPos + 1];
                b = scratchData.data[srcPos + 2];
                a = scratchData.data[srcPos + 3];
                dstPos = (xSize * y + sectionSize * 2 - x - 1) * 4;
                scratchData.data[dstPos + 0] = r;
                scratchData.data[dstPos + 1] = g;
                scratchData.data[dstPos + 2] = b;
                scratchData.data[dstPos + 3] = a;
            }
            sectionSize *= 2;
        }
    }
    FromPolar(scratchData, imageData, { polarRotation: 0 });
};
Factory.addGetterSetter(Node_Node, 'kaleidoscopePower', 2, getNumberValidator(), Factory.afterSetFilter);
Factory.addGetterSetter(Node_Node, 'kaleidoscopeAngle', 0, getNumberValidator(), Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Mask.js



function pixelAt(idata, x, y) {
    var idx = (y * idata.width + x) * 4;
    var d = [];
    d.push(idata.data[idx++], idata.data[idx++], idata.data[idx++], idata.data[idx++]);
    return d;
}
function rgbDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1[0] - p2[0], 2) +
        Math.pow(p1[1] - p2[1], 2) +
        Math.pow(p1[2] - p2[2], 2));
}
function rgbMean(pTab) {
    var m = [0, 0, 0];
    for (var i = 0; i < pTab.length; i++) {
        m[0] += pTab[i][0];
        m[1] += pTab[i][1];
        m[2] += pTab[i][2];
    }
    m[0] /= pTab.length;
    m[1] /= pTab.length;
    m[2] /= pTab.length;
    return m;
}
function backgroundMask(idata, threshold) {
    var rgbv_no = pixelAt(idata, 0, 0);
    var rgbv_ne = pixelAt(idata, idata.width - 1, 0);
    var rgbv_so = pixelAt(idata, 0, idata.height - 1);
    var rgbv_se = pixelAt(idata, idata.width - 1, idata.height - 1);
    var thres = threshold || 10;
    if (rgbDistance(rgbv_no, rgbv_ne) < thres &&
        rgbDistance(rgbv_ne, rgbv_se) < thres &&
        rgbDistance(rgbv_se, rgbv_so) < thres &&
        rgbDistance(rgbv_so, rgbv_no) < thres) {
        var mean = rgbMean([rgbv_ne, rgbv_no, rgbv_se, rgbv_so]);
        var mask = [];
        for (var i = 0; i < idata.width * idata.height; i++) {
            var d = rgbDistance(mean, [
                idata.data[i * 4],
                idata.data[i * 4 + 1],
                idata.data[i * 4 + 2],
            ]);
            mask[i] = d < thres ? 0 : 255;
        }
        return mask;
    }
}
function applyMask(idata, mask) {
    for (var i = 0; i < idata.width * idata.height; i++) {
        idata.data[4 * i + 3] = mask[i];
    }
}
function erodeMask(mask, sw, sh) {
    var weights = [1, 1, 1, 1, 0, 1, 1, 1, 1];
    var side = Math.round(Math.sqrt(weights.length));
    var halfSide = Math.floor(side / 2);
    var maskResult = [];
    for (var y = 0; y < sh; y++) {
        for (var x = 0; x < sw; x++) {
            var so = y * sw + x;
            var a = 0;
            for (var cy = 0; cy < side; cy++) {
                for (var cx = 0; cx < side; cx++) {
                    var scy = y + cy - halfSide;
                    var scx = x + cx - halfSide;
                    if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                        var srcOff = scy * sw + scx;
                        var wt = weights[cy * side + cx];
                        a += mask[srcOff] * wt;
                    }
                }
            }
            maskResult[so] = a === 255 * 8 ? 255 : 0;
        }
    }
    return maskResult;
}
function dilateMask(mask, sw, sh) {
    var weights = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    var side = Math.round(Math.sqrt(weights.length));
    var halfSide = Math.floor(side / 2);
    var maskResult = [];
    for (var y = 0; y < sh; y++) {
        for (var x = 0; x < sw; x++) {
            var so = y * sw + x;
            var a = 0;
            for (var cy = 0; cy < side; cy++) {
                for (var cx = 0; cx < side; cx++) {
                    var scy = y + cy - halfSide;
                    var scx = x + cx - halfSide;
                    if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                        var srcOff = scy * sw + scx;
                        var wt = weights[cy * side + cx];
                        a += mask[srcOff] * wt;
                    }
                }
            }
            maskResult[so] = a >= 255 * 4 ? 255 : 0;
        }
    }
    return maskResult;
}
function smoothEdgeMask(mask, sw, sh) {
    var weights = [1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9, 1 / 9];
    var side = Math.round(Math.sqrt(weights.length));
    var halfSide = Math.floor(side / 2);
    var maskResult = [];
    for (var y = 0; y < sh; y++) {
        for (var x = 0; x < sw; x++) {
            var so = y * sw + x;
            var a = 0;
            for (var cy = 0; cy < side; cy++) {
                for (var cx = 0; cx < side; cx++) {
                    var scy = y + cy - halfSide;
                    var scx = x + cx - halfSide;
                    if (scy >= 0 && scy < sh && scx >= 0 && scx < sw) {
                        var srcOff = scy * sw + scx;
                        var wt = weights[cy * side + cx];
                        a += mask[srcOff] * wt;
                    }
                }
            }
            maskResult[so] = a;
        }
    }
    return maskResult;
}
const Mask = function (imageData) {
    var threshold = this.threshold(), mask = backgroundMask(imageData, threshold);
    if (mask) {
        mask = erodeMask(mask, imageData.width, imageData.height);
        mask = dilateMask(mask, imageData.width, imageData.height);
        mask = smoothEdgeMask(mask, imageData.width, imageData.height);
        applyMask(imageData, mask);
    }
    return imageData;
};
Factory.addGetterSetter(Node_Node, 'threshold', 0, getNumberValidator(), Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Noise.js



const Noise = function (imageData) {
    var amount = this.noise() * 255, data = imageData.data, nPixels = data.length, half = amount / 2, i;
    for (i = 0; i < nPixels; i += 4) {
        data[i + 0] += half - 2 * half * Math.random();
        data[i + 1] += half - 2 * half * Math.random();
        data[i + 2] += half - 2 * half * Math.random();
    }
};
Factory.addGetterSetter(Node_Node, 'noise', 0.2, getNumberValidator(), Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Pixelate.js




const Pixelate = function (imageData) {
    var pixelSize = Math.ceil(this.pixelSize()), width = imageData.width, height = imageData.height, x, y, i, red, green, blue, alpha, nBinsX = Math.ceil(width / pixelSize), nBinsY = Math.ceil(height / pixelSize), xBinStart, xBinEnd, yBinStart, yBinEnd, xBin, yBin, pixelsInBin, data = imageData.data;
    if (pixelSize <= 0) {
        Util.error('pixelSize value can not be <= 0');
        return;
    }
    for (xBin = 0; xBin < nBinsX; xBin += 1) {
        for (yBin = 0; yBin < nBinsY; yBin += 1) {
            red = 0;
            green = 0;
            blue = 0;
            alpha = 0;
            xBinStart = xBin * pixelSize;
            xBinEnd = xBinStart + pixelSize;
            yBinStart = yBin * pixelSize;
            yBinEnd = yBinStart + pixelSize;
            pixelsInBin = 0;
            for (x = xBinStart; x < xBinEnd; x += 1) {
                if (x >= width) {
                    continue;
                }
                for (y = yBinStart; y < yBinEnd; y += 1) {
                    if (y >= height) {
                        continue;
                    }
                    i = (width * y + x) * 4;
                    red += data[i + 0];
                    green += data[i + 1];
                    blue += data[i + 2];
                    alpha += data[i + 3];
                    pixelsInBin += 1;
                }
            }
            red = red / pixelsInBin;
            green = green / pixelsInBin;
            blue = blue / pixelsInBin;
            alpha = alpha / pixelsInBin;
            for (x = xBinStart; x < xBinEnd; x += 1) {
                if (x >= width) {
                    continue;
                }
                for (y = yBinStart; y < yBinEnd; y += 1) {
                    if (y >= height) {
                        continue;
                    }
                    i = (width * y + x) * 4;
                    data[i + 0] = red;
                    data[i + 1] = green;
                    data[i + 2] = blue;
                    data[i + 3] = alpha;
                }
            }
        }
    }
};
Factory.addGetterSetter(Node_Node, 'pixelSize', 8, getNumberValidator(), Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Posterize.js



const Posterize = function (imageData) {
    var levels = Math.round(this.levels() * 254) + 1, data = imageData.data, len = data.length, scale = 255 / levels, i;
    for (i = 0; i < len; i += 1) {
        data[i] = Math.floor(data[i] / scale) * scale;
    }
};
Factory.addGetterSetter(Node_Node, 'levels', 0.5, getNumberValidator(), Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/RGB.js



const RGB = function (imageData) {
    var data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue(), i, brightness;
    for (i = 0; i < nPixels; i += 4) {
        brightness =
            (0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2]) / 255;
        data[i] = brightness * red;
        data[i + 1] = brightness * green;
        data[i + 2] = brightness * blue;
        data[i + 3] = data[i + 3];
    }
};
Factory.addGetterSetter(Node_Node, 'red', 0, function (val) {
    this._filterUpToDate = false;
    if (val > 255) {
        return 255;
    }
    else if (val < 0) {
        return 0;
    }
    else {
        return Math.round(val);
    }
});
Factory.addGetterSetter(Node_Node, 'green', 0, function (val) {
    this._filterUpToDate = false;
    if (val > 255) {
        return 255;
    }
    else if (val < 0) {
        return 0;
    }
    else {
        return Math.round(val);
    }
});
Factory.addGetterSetter(Node_Node, 'blue', 0, RGBComponent, Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/RGBA.js



const RGBA = function (imageData) {
    var data = imageData.data, nPixels = data.length, red = this.red(), green = this.green(), blue = this.blue(), alpha = this.alpha(), i, ia;
    for (i = 0; i < nPixels; i += 4) {
        ia = 1 - alpha;
        data[i] = red * alpha + data[i] * ia;
        data[i + 1] = green * alpha + data[i + 1] * ia;
        data[i + 2] = blue * alpha + data[i + 2] * ia;
    }
};
Factory.addGetterSetter(Node_Node, 'red', 0, function (val) {
    this._filterUpToDate = false;
    if (val > 255) {
        return 255;
    }
    else if (val < 0) {
        return 0;
    }
    else {
        return Math.round(val);
    }
});
Factory.addGetterSetter(Node_Node, 'green', 0, function (val) {
    this._filterUpToDate = false;
    if (val > 255) {
        return 255;
    }
    else if (val < 0) {
        return 0;
    }
    else {
        return Math.round(val);
    }
});
Factory.addGetterSetter(Node_Node, 'blue', 0, RGBComponent, Factory.afterSetFilter);
Factory.addGetterSetter(Node_Node, 'alpha', 1, function (val) {
    this._filterUpToDate = false;
    if (val > 1) {
        return 1;
    }
    else if (val < 0) {
        return 0;
    }
    else {
        return val;
    }
});

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Sepia.js
const Sepia = function (imageData) {
    var data = imageData.data, nPixels = data.length, i, r, g, b;
    for (i = 0; i < nPixels; i += 4) {
        r = data[i + 0];
        g = data[i + 1];
        b = data[i + 2];
        data[i + 0] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
        data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
        data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
    }
};

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Solarize.js
const Solarize = function (imageData) {
    var data = imageData.data, w = imageData.width, h = imageData.height, w4 = w * 4, y = h;
    do {
        var offsetY = (y - 1) * w4;
        var x = w;
        do {
            var offset = offsetY + (x - 1) * 4;
            var r = data[offset];
            var g = data[offset + 1];
            var b = data[offset + 2];
            if (r > 127) {
                r = 255 - r;
            }
            if (g > 127) {
                g = 255 - g;
            }
            if (b > 127) {
                b = 255 - b;
            }
            data[offset] = r;
            data[offset + 1] = g;
            data[offset + 2] = b;
        } while (--x);
    } while (--y);
};

// CONCATENATED MODULE: ./node_modules/konva/lib/filters/Threshold.js



const Threshold = function (imageData) {
    var level = this.threshold() * 255, data = imageData.data, len = data.length, i;
    for (i = 0; i < len; i += 1) {
        data[i] = data[i] < level ? 0 : 255;
    }
};
Factory.addGetterSetter(Node_Node, 'threshold', 0.5, getNumberValidator(), Factory.afterSetFilter);

// CONCATENATED MODULE: ./node_modules/konva/lib/_FullInternals.js





































const _FullInternals_Konva = Konva.Util._assign(Konva, {
    Arc: Arc_Arc,
    Arrow: Arrow_Arrow,
    Circle: Circle_Circle,
    Ellipse: Ellipse_Ellipse,
    Image: Image_Image,
    Label: Label_Label,
    Tag: Label_Tag,
    Line: Line_Line,
    Path: Path_Path,
    Rect: Rect_Rect,
    RegularPolygon: RegularPolygon_RegularPolygon,
    Ring: Ring_Ring,
    Sprite: Sprite_Sprite,
    Star: Star_Star,
    Text: Text_Text,
    TextPath: TextPath_TextPath,
    Transformer: Transformer_Transformer,
    Wedge: Wedge_Wedge,
    Filters: {
        Blur: Blur,
        Brighten: Brighten,
        Contrast: Contrast,
        Emboss: Emboss,
        Enhance: Enhance,
        Grayscale: Grayscale,
        HSL: HSL,
        HSV: HSV,
        Invert: Invert,
        Kaleidoscope: Kaleidoscope,
        Mask: Mask,
        Noise: Noise,
        Pixelate: Pixelate,
        Posterize: Posterize,
        RGB: RGB,
        RGBA: RGBA,
        Sepia: Sepia,
        Solarize: Solarize,
        Threshold: Threshold,
    },
});

// CONCATENATED MODULE: ./node_modules/konva/lib/index.js

/* harmony default export */ var lib = (_FullInternals_Konva);

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// CONCATENATED MODULE: ./packages/interModel/src/js/interModel.ts











 // 在canvas为800的基础上，使用以下配置值

var interModel_baseWidth = 800; // 路口固定配置，根据baseWidth来设置。会根据cross中size等比缩小

var CrossConstBase = {
  roadWidth: 40,
  bicycleLaneWidth: 15,
  greenWidth: 10,
  doubleYellowLineInterval: 10,
  defaultSolidRoadLength: 80,
  defaultRoadLength: 2000,
  defaultRoadNumber: 4,
  manRadianLength: 35,
  manRoadLength: 30,
  manRoadInterval: 16,
  manRoadLineWidth: 1,
  manCarInterval: 4,
  walkwayWidth: 20,
  dashLength: 12,
  busDashLength: 30,
  tidalDashLength: 24,
  roadPole: 130 // 路杆子距离人行道距离  绘制非机动车的位置

};
var CrossConst = {}; // 固定值， 不会变化

var CrossAngle = {
  radian: 0,
  interval: 1 // 每个几度取一个点。

}; // 道路中心区域模式

var RoadCenterMode = {
  doubleYellowLine: 'doubleYellowLine',
  greenArea: 'greenArea',
  singleYellowLine: 'singleYellowLine' // 单黄实线

}; // 工具类

var interModel_Util = {
  // 弧度转换成角度
  toAngle: function toAngle(radian) {
    return radian * 180 / Math.PI;
  },
  // 角度转换成弧度
  toRadian: function toRadian(angle) {
    return angle * Math.PI / 180;
  },
  //偏移-旋转-偏移
  pointRotateByPoint: function pointRotateByPoint(point, angle) {
    var rotateCenter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
    var x = point.x - rotateCenter[0];
    var y = point.y - rotateCenter[1];
    var angleXY = interModel_Util.toAngle(Math.atan(y / x));

    if (x < 0) {
      angleXY += 180;
    }

    var L = Math.sqrt(x * x + y * y);
    return {
      x: Math.cos(interModel_Util.toRadian(angleXY - angle)) * L + rotateCenter[0],
      y: Math.sin(interModel_Util.toRadian(angleXY - angle)) * L + rotateCenter[1]
    };
  },
  // 旋转点位偏移[{x,y}]
  pointRotateAngel: function pointRotateAngel(point, angle) {
    var move = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0];
    var x = point.x,
        y = point.y;
    var angleXY = interModel_Util.toAngle(Math.atan(y / x));

    if (x < 0) {
      angleXY += 180;
    }

    var L = Math.sqrt(x * x + y * y);
    return {
      x: Math.cos(interModel_Util.toRadian(angleXY - angle)) * L + move[0],
      y: Math.sin(interModel_Util.toRadian(angleXY - angle)) * L + move[1]
    };
  },
  // 获取距离
  getDistance: function getDistance(x1, y1, x2, y2) {
    var dx = Math.abs(x2 - x1);
    var dy = Math.abs(y2 - y1);
    var distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
    return distance;
  },

  /**
   * @desc 二阶贝塞尔
   * @param {number} t 当前百分比
   * @param {Array} p1 起点坐标
   * @param {Array} p2 终点坐标
   * @param {Array} cp 控制点
   */
  twoBezier: function twoBezier(t, p1, cp, p2) {
    var _p = _slicedToArray(p1, 2),
        x1 = _p[0],
        y1 = _p[1];

    var _cp = _slicedToArray(cp, 2),
        cx = _cp[0],
        cy = _cp[1];

    var _p2 = _slicedToArray(p2, 2),
        x2 = _p2[0],
        y2 = _p2[1];

    var x = (1 - t) * (1 - t) * x1 + 2 * t * (1 - t) * cx + t * t * x2;
    var y = (1 - t) * (1 - t) * y1 + 2 * t * (1 - t) * cy + t * t * y2;
    return [x, y];
  },
  // 获取两个点之前那的弧线角度 返回二维点位数组
  getArcPoint: function getArcPoint(pointA, pointB) {
    var angelA = 20;
    var pointList = [];

    var _pointA = _slicedToArray(pointA, 2),
        x1 = _pointA[0],
        y1 = _pointA[1];

    var _pointB = _slicedToArray(pointB, 2),
        x3 = _pointB[0],
        y3 = _pointB[1];

    if (x1 > x3) {
      angelA = -20;
      var _ref = [x3, y3, x1, y1];
      x1 = _ref[0];
      y1 = _ref[1];
      x3 = _ref[2];
      y3 = _ref[3];
    }

    var x2 = x1 + Math.cos(interModel_Util.toRadian(angelA + interModel_Util.toAngle(Math.atan((y3 - y1) / (x3 - x1))))) * Math.sqrt((y3 - y1) * (y3 - y1) + (x3 - x1) * (x3 - x1)) / 2 / Math.cos(interModel_Util.toRadian(angelA));
    var y2 = y1 + Math.sin(interModel_Util.toRadian(angelA + interModel_Util.toAngle(Math.atan((y3 - y1) / (x3 - x1))))) * Math.sqrt((y3 - y1) * (y3 - y1) + (x3 - x1) * (x3 - x1)) / 2 / Math.cos(interModel_Util.toRadian(angelA));

    for (var i = 0; i < 1; i += 0.01) {
      var erPoint = interModel_Util.twoBezier(i, [x1, y1], [x2, y2], [x3, y3]);
      pointList.push(erPoint);
    }

    return pointList;
  },
  //计算两个点位的弧度
  calculateAngle: function calculateAngle(leftDegree, rightDegree) {
    var degree = leftDegree - rightDegree;

    if (degree < 0) {
      degree += 360;
    }

    return degree;
  },
  // os的角度degree转换成路口模型的角度angle
  degreeToAngle: function degreeToAngle(agree) {
    var angle = 0;

    if (agree >= 0 && agree <= 90) {
      angle = 90 - agree;
    } else if (agree > 90 && agree < 180) {
      angle = 360 - agree + 90;
    } else if (agree >= 180 && agree <= 270) {
      angle = 270 - agree + 180;
    } else if (agree > 270 && agree <= 360) {
      angle = 360 - agree + 90;
    }

    return angle;
  },
  // 计算左右两边道路的计算弧度
  calculateLeftRightRadian: function calculateLeftRightRadian(leftDegree, rightDegree) {
    var degree = leftDegree - rightDegree;
    var degreeRadia = 0;

    if (degree < 0) {
      degree += 360;
    }

    if (degree <= 90) {
      degreeRadia = interModel_Util.toRadian(90 - degree);
    } else if (degree > 90) {
      degreeRadia = interModel_Util.toRadian(degree - 90);
    }

    return degreeRadia;
  },
  // 根据两个点位以及分割距离计算分割的每一段的点位
  getSplitPoint: function getSplitPoint(point1, point2, spliceLength) {
    var spliteArr = [];
    var d = interModel_Util.getDistance(point1.x, point1.y, point2.x, point2.y);
    var dx = (point2.x - point1.x) / d * spliceLength;
    var dy = (point2.y - point1.y) / d * spliceLength;
    var length = Math.ceil(d / spliceLength / 2);

    for (var j = 0; j < length; j++) {
      spliteArr.push([[point1.x + dx * 2 * j, point1.y + dy * 2 * j], [point1.x + dx * (2 * j + 1), point1.y + dy * (2 * j + 1)]]);
    }

    return spliteArr;
  }
}; // 经纬度

/**
 * @description 方向对象
 * @author wsx
 * @Date  2021-07-29 13:10:27
 */

var interModel_CrossInfo = /*#__PURE__*/function () {
  function CrossInfo(param) {
    _classCallCheck(this, CrossInfo);

    var option = Object.assign({
      entrances: [],
      origin: [0, 0],
      // size: 400, // 控制大小， 经纬度大小或者canvas画布大小
      centerLineMode: false,
      drawOption: {},
      is_have_son: 0,
      baseWidth: 800,
      clientWidth: 800,
      clientHeight: 800
    }, param);
    var scale = option.is_have_son == 2 ? 1.1 : 0.8;

    for (var prop in CrossConstBase) {
      CrossConst[prop] = option.baseWidth * scale / interModel_baseWidth * CrossConstBase[prop];
    }

    if (option.expandManRadian) {
      CrossConst.manRadianLength = CrossConst.manRadianLength * 3;
    }

    this.entrances = option.entrances;
    this.origin = option.origin;
    this.centerLineMode = option.centerLineMode;
    this.roadNumber = this.entrances.length;
    this.drawOption = option.drawOption;
    this.is_have_son = option.is_have_son;
    this.baseWidth = option.baseWidth;
    this.clientWidth = option.clientWidth;
    this.clientHeight = option.clientHeight;

    if (this.roadNumber < 2) {
      console.error('路口模型不能小于两个方向。');
      return;
    }

    this.init();
  }

  _createClass(CrossInfo, [{
    key: "init",
    value: function init() {
      var _this = this;

      this.entranceArray = this.entrances.map(function (info, index) {
        info.roadNumber = _this.roadNumber;
        info.number = index;
        info.origin = _this.origin;
        info.centerLineMode = _this.centerLineMode;
        info.drawOption = _this.drawOption;
        info.entranceNum = _this.entrances.length;
        info.is_have_son = _this.is_have_son;
        info.baseWidth = _this.baseWidth;
        info.clientWidth = _this.clientWidth;
        info.clientHeight = _this.clientHeight; // 第二个进口的进口数量,绘制匝道

        info.secondIn = _this.entrances[1].motor_lanes.length;

        if (_this.is_have_son === 2) {
          return new interModel_CrossRampObject(info);
        } else {
          return new interModel_CrossDirectionObject(info);
        }
      }); // 普通路口做计算

      if (this.is_have_son != 2) {
        this.entranceArray.map(function (info, index) {
          var param = {
            degreeLeft: index === _this.roadNumber - 1 ? _this.entranceArray[0].degree : _this.entranceArray[index + 1].degree,
            degreeRight: index === 0 ? _this.entranceArray[_this.roadNumber - 1].degree : _this.entranceArray[index - 1].degree,
            widthLeft: index === _this.roadNumber - 1 ? _this.entranceArray[0].rightWidth : _this.entranceArray[index + 1].rightWidth,
            widthRight: index === 0 ? _this.entranceArray[_this.roadNumber - 1].leftWidth : _this.entranceArray[index - 1].leftWidth
          };
          info.setLeftAndRight(param);
        });
      }
    }
  }]);

  return CrossInfo;
}();
/**
 * @description 方向对象
 * @author wsx
 * @Date  2021-07-29 13:10:27
 */


var interModel_CrossDirectionObject = /*#__PURE__*/function () {
  function CrossDirectionObject(param) {
    _classCallCheck(this, CrossDirectionObject);

    var option = Object.assign({
      entranceNum: 4,
      en_id: 1,
      "in": 2,
      inBicycleLane: 0,
      out: 2,
      name: '道路',
      outBicycleLane: 0,
      origin: [0, 0],
      centerLineMode: true,
      road_center_mode: RoadCenterMode.singleYellowLine,
      canalization: 0,
      drawOption: {},
      motor_lanes: [],
      degree: 0,
      angle: 0,
      roadNumber: CrossConst.defaultRoadNumber,
      number: 0,
      roadLength: CrossConst.defaultRoadLength,
      centerToManRoadDistance: 0
    }, param); // 进口数

    this.entranceNum = option.entranceNum; // 进口id

    this.en_id = option.en_id;
    this.name = option.name; // 进路口车道数

    this["in"] = option.motor_lanes.length; // 进路口非机动车道数

    this.inBicycleLane = option.inBicycleLane; // 出路口车道数

    this.out = option.exit_lanes.length; // 出路口非机动车道数

    this.outBicycleLane = option.outBicycleLane;
    this.origin = option.origin;
    this.centerLineMode = option.centerLineMode;
    this.drawOption = option.drawOption; // 道路中间类型。 双黄线、绿化带、单黄线等

    this.road_center_mode = option.road_center_mode;
    this.canalization = option.canalization; // 车道流向

    this.motor_lanes = option.motor_lanes;
    this.degree = option.degree; // 路口方向相对正南方向偏移角度  （ -360 / CrossConst.defaultRoadNumber, 360 / CrossConst.defaultRoadNumber ）

    this.angle = interModel_Util.degreeToAngle(option.degree); // this.angle = option.angle
    // 道路长度

    this.roadLength = option.roadLength; // 路口类型，几方向路口

    this.roadNumber = option.roadNumber; // 当前是第几个方向，正在方为0，逆时针数

    this.number = option.number;
    this.centerToManRoadDistance = option.centerToManRoadDistance;
    this.calculation('width'); // 核心点位

    this.point = {}; // 转换正后的坐标

    this.correctPoint = {}; // 准确计算后的点线面数据

    this.pointData = {};
    this.lineData = {};
    this.polygonData = {};
  } // 设置左右方向参数


  _createClass(CrossDirectionObject, [{
    key: "setLeftAndRight",
    value: function setLeftAndRight(param) {
      var option = Object.assign({
        angleLeft: 0,
        angleRight: 0,
        degreeLeft: 0,
        degreeRight: 0,
        widthLeft: 4 * CrossConst.roadWidth,
        widthRight: 4 * CrossConst.roadWidth
      }, param); // 该路口左右测路口信息。

      this.angleLeft = option.angleLeft;
      this.angleRight = option.angleRight;
      this.degreeLeft = option.degreeLeft;
      this.degreeRight = option.degreeRight;
      this.widthLeft = option.widthLeft;
      this.widthRight = option.widthRight;
      this.calculation('point');
    } // 计算关联属性

  }, {
    key: "calculation",
    value: function calculation(prop) {
      var _this2 = this;

      var angleLeft2 = interModel_Util.calculateLeftRightRadian(this.degreeLeft, this.degree);
      var angleRight2 = interModel_Util.calculateLeftRightRadian(this.degree, this.degreeRight);
      var toLeftAngle = interModel_Util.calculateAngle(this.degreeLeft, this.degree);
      var toRightAngle = interModel_Util.calculateAngle(this.degree, this.degreeRight);
      var x = 0;
      var y = 0;
      var dy = 0;
      var dw = 0; // 根据中心区域不同类型设置, 黄实线的宽度

      switch (this.road_center_mode) {
        case RoadCenterMode.doubleYellowLine:
          dw = CrossConst.doubleYellowLineInterval;
          break;

        case RoadCenterMode.greenArea:
          dw = CrossConst.greenWidth;
          break;

        case RoadCenterMode.singleYellowLine:
          dw = 0;
          break;
      }

      switch (prop) {
        // 道路宽度
        case 'width':
          // this.width = (this.in + this.out) * CrossConst.roadWidth + dw + (this.inBicycleLane + this.outBicycleLane) * CrossConst.bicycleLaneWidth
          // 自身左右道路长度
          this.leftWidth = this.out * CrossConst.roadWidth + dw / 2 + this.outBicycleLane * CrossConst.bicycleLaneWidth;
          this.rightWidth = this["in"] * CrossConst.roadWidth + dw / 2 + this.inBicycleLane * CrossConst.bicycleLaneWidth;
          this.width = this.leftWidth + this.rightWidth;

          if (this.centerLineMode) {
            this.leftWidth = this.rightWidth = this.width / 2;
          }

          break;
        // 核心点位

        case 'point':
          this.point = {
            // 左顶点
            AL: {
              x: this.centerLineMode ? -this.width / 2 : -(this.out * CrossConst.roadWidth + dw / 2 + this.outBicycleLane * CrossConst.bicycleLaneWidth)
            },
            // 右顶点
            AR: {
              x: this.centerLineMode ? this.width / 2 : this["in"] * CrossConst.roadWidth + dw / 2 + this.inBicycleLane * CrossConst.bicycleLaneWidth
            }
          };

          if (toLeftAngle <= 90) {
            this.point.AL.y = Math.tan(angleLeft2) * this.point.AL.x - this.widthLeft / Math.cos(angleLeft2);
          } else if (toLeftAngle > 90 && toLeftAngle < 180) {
            this.point.AL.y = -Math.tan(angleLeft2) * this.point.AL.x - this.widthLeft / Math.cos(angleLeft2);
          } else {
            this.point.AL.y = -20;
          }

          if (toRightAngle <= 90) {
            this.point.AR.y = -Math.tan(angleRight2) * this.point.AR.x - this.widthRight / Math.cos(angleRight2);
          } else if (toRightAngle > 90 && toRightAngle < 180) {
            this.point.AR.y = Math.tan(angleRight2) * this.point.AR.x - this.widthRight / Math.cos(angleRight2);
          }

          if (toLeftAngle >= 180) {
            this.point.AL.y = this.point.AR.y;
          }

          if (toRightAngle >= 180) {
            this.point.AR.y = this.point.AL.y;
          }

          if (this.entranceNum === 2) {
            this.point.AL.y = -CrossConst.roadWidth * 2.5;
            this.point.AR.y = -CrossConst.roadWidth * 2.5;
          } // eslint-disable-next-line no-case-declarations
          // const minY = this.point.AL.y < this.point.AR.y ? this.point.AL.y : this.point.AR.y
          // const MINY = Number(Math.min(this.point.AL.y , this.point.AR.y))


          this.point.CL = {
            x: this.point.AL.x,
            y: Math.min(this.point.AL.y, this.point.AR.y) - CrossConst.defaultRoadLength
          };
          this.point.CR = {
            x: this.point.AR.x,
            y: Math.min(this.point.AL.y, this.point.AR.y) - CrossConst.defaultRoadLength
          }; // 使每个路口都垂直，所以关键点位8的高度要一致
          // let MINH =Number( Math.min(this.point.AL.y, this.point.AR.y))
          // 记录原来的B点位 BLO  BRO

          this.point.BLO = {
            x: this.point.AL.x,
            y: this.centerToManRoadDistance !== 0 ? -this.centerToManRoadDistance : this.point.AL.y - (CrossConst.manRoadLength + CrossConst.manRadianLength)
          };
          this.point.BRO = {
            x: this.point.AR.x,
            y: this.centerToManRoadDistance !== 0 ? -this.centerToManRoadDistance : this.point.AR.y - (CrossConst.manRoadLength + CrossConst.manRadianLength)
          };
          this.point.BL = {
            x: this.point.AL.x,
            y: this.centerToManRoadDistance !== 0 ? -this.centerToManRoadDistance : Math.min(this.point.AL.y, this.point.AR.y) - (CrossConst.manRoadLength + CrossConst.manRadianLength)
          };
          this.point.BR = {
            x: this.point.AR.x,
            y: this.centerToManRoadDistance !== 0 ? -this.centerToManRoadDistance : Math.min(this.point.AL.y, this.point.AR.y) - (CrossConst.manRoadLength + CrossConst.manRadianLength)
          }; // 设备杆位置

          this.point.roadPole = {
            x: this.point.BR.x + CrossConst.walkwayWidth / 2,
            y: this.point.BR.y - CrossConst.roadPole
          }; // 右边设备杆

          this.point.roadPoleL = {
            x: this.point.BL.x - CrossConst.walkwayWidth / 2,
            y: this.point.BL.y - CrossConst.roadPole
          };
          this.point.B1L = {
            x: this.point.BL.x - CrossConst.walkwayWidth,
            y: this.point.BL.y
          };
          this.point.B1R = {
            x: this.point.BR.x + CrossConst.walkwayWidth,
            y: this.point.BR.y
          };
          this.point.C1L = {
            x: this.point.AL.x - CrossConst.walkwayWidth,
            y: Math.min(this.point.AL.y, this.point.AR.y) - CrossConst.defaultRoadLength
          };
          this.point.C1R = {
            x: this.point.AR.x + CrossConst.walkwayWidth,
            y: Math.min(this.point.AL.y, this.point.AR.y) - CrossConst.defaultRoadLength
          }; // 道路名称位置

          this.point.roadName = {
            x: this.point.BL.x - CrossConst.walkwayWidth - 12,
            y: this.point.BL.y
          }; // 道路中心绿化带区域点位

          if (this.road_center_mode === RoadCenterMode.greenArea) {
            this.point.E1 = {
              x: this.point.CL.x + this.out * CrossConst.roadWidth + this.outBicycleLane * CrossConst.bicycleLaneWidth,
              y: Math.min(this.point.AL.y, this.point.AR.y) - CrossConst.defaultRoadLength
            };
            this.point.F1 = {
              x: this.point.CL.x + this.out * CrossConst.roadWidth + CrossConst.greenWidth + this.outBicycleLane * CrossConst.bicycleLaneWidth,
              y: Math.min(this.point.AL.y, this.point.AR.y) - CrossConst.defaultRoadLength
            };
            this.point.FToE = [];
            var angleIndex = 0;
            var dx = this.point.CL.x + this.out * CrossConst.roadWidth + this.outBicycleLane * CrossConst.bicycleLaneWidth + CrossConst.greenWidth / 2;

            var _dy = this.point.BL.y + (this.out * CrossConst.roadWidth + this.outBicycleLane * CrossConst.bicycleLaneWidth + CrossConst.greenWidth / 2) / (this.point.BR.x - this.point.BL.x) * (this.point.BR.y - this.point.BL.y) - CrossConst.greenWidth / 2;

            do {
              this.point.FToE.push({
                x: dx + Math.cos(interModel_Util.toRadian(angleIndex)) * CrossConst.greenWidth / 2,
                y: _dy + Math.sin(interModel_Util.toRadian(angleIndex)) * CrossConst.greenWidth / 2
              });
              angleIndex += CrossAngle.interval;
            } while (angleIndex <= 180);
          }

          this.calculation('point2');
          break;

        case 'point2':
          // 计算从B到D点间弧度的点。
          this.calculation('BToD'); // 计算人行道点

          this.calculation('ALToAR'); // 人行道点位确定

          this.calculation('pointH'); // 计算 车道 流向点位

          this.calculation('pointLaneFlow'); // 计算 进口 流向点位

          this.calculation('pointRoadFlow'); // 计算待驶区的点位

          this.calculation('pointWaitArea');

          var _loop = function _loop(_prop) {
            if (Array.isArray(_this2.point[_prop])) {
              _this2.correctPoint[_prop] = [];

              _this2.point[_prop].forEach(function (info, index) {
                if (Array.isArray(info)) {
                  _this2.correctPoint[_prop][index] = [];
                  info.map(function (it) {
                    _this2.correctPoint[_prop][index].push(interModel_Util.pointRotateAngel(it, -_this2.angle, _this2.origin));
                  });
                } else {
                  _this2.correctPoint[_prop].push(interModel_Util.pointRotateAngel(info, -_this2.angle, _this2.origin));
                }
              });
            } else {
              _this2.correctPoint[_prop] = interModel_Util.pointRotateAngel(_this2.point[_prop], -_this2.angle, _this2.origin);
            }
          };

          for (var _prop in this.point) {
            _loop(_prop);
          } // 道路面数据计算


          this.calculation('RoadPolygon');
          this.calculation('walkwayPolygonR');
          this.calculation('walkwayPolygonL');
          this.calculation('manRoadLine');
          this.calculation('carRoadLine0');
          this.calculation('carRoadLine1');
          this.calculation('carRoadLine2');
          this.calculation('carRoadLine3');
          this.calculation('carRoadLine4');
          this.calculation('fdsplitLine');
          this.calculation('laneFlowPolygon');
          this.calculation('roadFlowPolygon');

          if (this.road_center_mode === RoadCenterMode.greenArea) {
            this.calculation('greenPolygon');
          }

          break;
        // 计算从B到D点间弧度的点。

        case 'BToD':
          // eslint-disable-next-line no-case-declarations
          // const angelA = 20
          // eslint-disable-next-line no-case-declarations
          var rightPoint = {
            x: this.point.AR.x + Math.cos(angleRight2) * (CrossConst.manRoadLength + CrossConst.manRadianLength),
            y: this.point.AR.y + Math.sin(angleRight2) * (CrossConst.manRoadLength + CrossConst.manRadianLength)
          };

          if (toRightAngle <= 90) {
            rightPoint = {
              x: this.point.AR.x + Math.cos(angleRight2) * (CrossConst.manRoadLength + CrossConst.manRadianLength),
              y: this.point.AR.y - Math.sin(angleRight2) * (CrossConst.manRoadLength + CrossConst.manRadianLength)
            };
          } else if (toRightAngle > 180) {
            // todo 待验证
            rightPoint = {
              x: this.point.AR.x,
              y: this.point.AR.y - Math.sin(angleRight2) * (CrossConst.manRoadLength + CrossConst.manRadianLength)
            };
          }

          this.point.BToDR = [];
          this.point.B1ToD1R = [];
          var _this$point$BR = this.point.BR,
              x1 = _this$point$BR.x,
              y1 = _this$point$BR.y;
          var _rightPoint = rightPoint,
              x3 = _rightPoint.x,
              y3 = _rightPoint.y;
          var X1 = this.point.BR.x;
          var x2 = X1 + Math.cos(interModel_Util.toRadian(20 + interModel_Util.toAngle(Math.atan((y3 - y1) / (x3 - X1))))) * Math.sqrt((y3 - y1) * (y3 - y1) + (x3 - X1) * (x3 - X1)) / 2 / Math.cos(interModel_Util.toRadian(20));
          var y2 = y1 + Math.sin(interModel_Util.toRadian(20 + interModel_Util.toAngle(Math.atan((y3 - y1) / (x3 - X1))))) * Math.sqrt((y3 - y1) * (y3 - y1) + (x3 - X1) * (x3 - X1)) / 2 / Math.cos(interModel_Util.toRadian(20));

          if (toRightAngle < 180 && this.entranceNum !== 2) {
            for (var index = 0; index < 1; index += 0.01) {
              var _Util$twoBezier = interModel_Util.twoBezier(index, [X1, y1], [x2, y2], [x3, y3]),
                  _Util$twoBezier2 = _slicedToArray(_Util$twoBezier, 2),
                  _x = _Util$twoBezier2[0],
                  _y = _Util$twoBezier2[1];

              this.point.BToDR.push({
                x: _x,
                y: _y
              });
            }
          } else {
            this.point.BToDR = [{
              x: X1,
              y: y1
            }, {
              x: x3,
              y: y3
            }];
          } // 边缘内容


          rightPoint = {
            x: rightPoint.x + Math.sin(angleRight2) * CrossConst.walkwayWidth,
            y: rightPoint.y - Math.cos(angleRight2) * CrossConst.walkwayWidth
          };
          this.point.rightPoint = rightPoint;
          X1 += CrossConst.walkwayWidth;
          x3 = rightPoint.x;
          y3 = rightPoint.y;
          x2 = X1 + Math.cos(interModel_Util.toRadian(20 + interModel_Util.toAngle(Math.atan((y3 - y1) / (x3 - X1))))) * Math.sqrt((y3 - y1) * (y3 - y1) + (x3 - X1) * (x3 - X1)) / 2 / Math.cos(interModel_Util.toRadian(20));
          y2 = y1 + Math.sin(interModel_Util.toRadian(20 + interModel_Util.toAngle(Math.atan((y3 - y1) / (x3 - X1))))) * Math.sqrt((y3 - y1) * (y3 - y1) + (x3 - X1) * (x3 - X1)) / 2 / Math.cos(interModel_Util.toRadian(20));
          this.point.OOO = {
            x: x2,
            y: y2
          };

          if (toRightAngle < 180 && this.entranceNum !== 2) {
            for (var _index = 0; _index < 1; _index += 0.01) {
              var _Util$twoBezier3 = interModel_Util.twoBezier(_index, [X1, y1], [x2, y2], [x3, y3]),
                  _Util$twoBezier4 = _slicedToArray(_Util$twoBezier3, 2),
                  _x2 = _Util$twoBezier4[0],
                  _y2 = _Util$twoBezier4[1];

              this.point.B1ToD1R.push({
                x: _x2,
                y: _y2
              });
            }
          } else {
            this.point.B1ToD1R = [{
              x: X1,
              y: y1
            }, {
              x: x3,
              y: y3
            }];
          }

          break;
        // ALToAR 和 BLToBR

        case 'ALToAR':
          this.point.ALToAR = [];
          this.point.BLToBR = []; // eslint-disable-next-line prefer-destructuring

          x = this.point.BL.x;
          dy = (this.point.BR.y - this.point.BL.y) / this.width * CrossConst.manRoadInterval; // eslint-disable-next-line prefer-destructuring

          y = this.point.BL.y;

          do {
            this.point.ALToAR.push({
              x: x,
              y: y + CrossConst.manRoadLength
            });
            this.point.BLToBR.push({
              x: x,
              y: y
            });
            x += CrossConst.manRoadInterval;
            y += dy;
          } while (x <= this.point.BR.x);

          break;

        case 'pointH':
          dy = (this.point.BR.y - this.point.BL.y) / (this.point.BR.x - this.point.BL.x) * CrossConst.roadWidth; // 车道数据

          this.point.H0 = [];
          this.point.H1 = [];
          this.point.H2 = [];

          for (var i = 0; i < this["in"] + this.out + 1; i++) {
            switch (this.road_center_mode) {
              case RoadCenterMode.doubleYellowLine:
                var dInterval = (this.point.BR.y - this.point.BL.y) / (this.point.BR.x - this.point.BL.x) * CrossConst.doubleYellowLineInterval;
                x = this.point.BR.x - CrossConst.roadWidth * i - (i < this["in"] ? 0 : CrossConst.doubleYellowLineInterval) - this.inBicycleLane * CrossConst.bicycleLaneWidth;
                y = this.point.BR.y - CrossConst.manCarInterval - dy * i - (i < this["in"] ? 0 : dInterval) - dy * this.inBicycleLane * CrossConst.bicycleLaneWidth / CrossConst.roadWidth;
                break;

              case RoadCenterMode.greenArea:
                var dGreeny = (this.point.BR.y - this.point.BL.y) / (this.point.BR.x - this.point.BL.x) * CrossConst.greenWidth;
                x = this.point.BR.x - CrossConst.roadWidth * i - (i < this["in"] ? 0 : CrossConst.greenWidth) - this.inBicycleLane * CrossConst.bicycleLaneWidth;
                y = this.point.BR.y - CrossConst.manCarInterval - dy * i - (i < this["in"] ? 0 : dGreeny) - dy * this.inBicycleLane * CrossConst.bicycleLaneWidth / CrossConst.roadWidth;
                break;

              case RoadCenterMode.singleYellowLine:
                x = this.point.BR.x - CrossConst.roadWidth * i - this.inBicycleLane * CrossConst.bicycleLaneWidth;
                y = this.point.BR.y - CrossConst.manCarInterval - dy * i - dy * this.inBicycleLane * CrossConst.bicycleLaneWidth / CrossConst.roadWidth;
                break;
            }

            this.point.H0.push({
              x: x,
              y: y
            });
            this.point.H1.push({
              x: x,
              y: y - CrossConst.defaultSolidRoadLength
            });
            this.point.H2.push({
              x: x,
              y: this.point.CR.y
            });

            if ((this.road_center_mode === RoadCenterMode.greenArea || this.road_center_mode === RoadCenterMode.doubleYellowLine) && i === this["in"] - 1) {
              switch (this.road_center_mode) {
                case RoadCenterMode.doubleYellowLine:
                  x = this.point.BR.x - CrossConst.roadWidth * (i + 1) - this.inBicycleLane * CrossConst.bicycleLaneWidth;
                  y = this.point.BR.y - CrossConst.manCarInterval - dy * (i + 1) - dy * this.inBicycleLane * CrossConst.bicycleLaneWidth / CrossConst.roadWidth;
                  break;

                case RoadCenterMode.greenArea:
                  x = this.point.BR.x - CrossConst.roadWidth * (i + 1) - this.inBicycleLane * CrossConst.bicycleLaneWidth;
                  y = this.point.BR.y - CrossConst.manCarInterval - dy * (i + 1) - dy * this.inBicycleLane * CrossConst.bicycleLaneWidth / CrossConst.roadWidth;
                  break;
              }

              this.point.H0.push({
                x: x,
                y: y
              });
              this.point.H1.push({
                x: x,
                y: y - CrossConst.defaultSolidRoadLength
              });
              this.point.H2.push({
                x: x,
                y: this.point.CR.y
              });
            }
          }

          break;
        // 计算每个车道流向绘制的点位

        case 'pointLaneFlow':
          this.point.pointLaneFlow = [];
          this.motor_lanes.forEach(function (it, i) {
            // 车道里面的流向
            var laneFlowPoints = getLaneFlowPoint(it.id, it.lane_flow, CrossConst, _this2, null);

            _this2.point.pointLaneFlow.push(laneFlowPoints); // 左转待行驶区域的流向


            if (it.has_waiting_area && (it.lane_flow === 1 || it.lane_flow === 2)) {
              var waitAreaFlowPoints = getLaneFlowPoint(it.id, it.lane_flow, CrossConst, _this2, 'waitAreaFlow');
              var waitAreaPoints = getLaneFlowPoint(it.id, it.lane_flow, CrossConst, _this2, 'waitArea');

              _this2.point.pointLaneFlow.push(waitAreaFlowPoints);

              _this2.point.pointLaneFlow.push(waitAreaPoints);
            }
          });
          break;
        // 计算流向点位

        case 'pointRoadFlow':
          this.point.pointRoadFlow = [];
          this.point.pointRoadFlowText = [];

          for (var _i = 1; _i <= 4; _i++) {
            var _getRoadFlowPoint = getRoadFlowPoint(_i, CrossConst, this),
                roadFlowPoints = _getRoadFlowPoint.roadFlowPoints,
                flowTextPoint = _getRoadFlowPoint.flowTextPoint;

            this.point.pointRoadFlow.push(roadFlowPoints);
            this.point.pointRoadFlowText.push(flowTextPoint);
          }

          break;
        // 计算待驶区的点位

        case 'pointWaitArea':
          this.point.pointWaitArea = [];
          this.motor_lanes.forEach(function (it, i) {
            // 左转待行驶区域的流向
            if (it.has_waiting_area && (it.lane_flow === 1 || it.lane_flow === 2)) {
              var waitAreaPoints = getWaitAreaPoint(it.id, it.lane_flow, CrossConst, _this2);

              _this2.point.pointWaitArea.push(waitAreaPoints);
            }
          });
          break;
        // 道路面数据计算

        case 'RoadPolygon':
          this.polygonData[prop] = [];

          for (var _i2 = this.correctPoint.BToDR.length - 1; _i2 >= 0; _i2--) {
            var point = this.correctPoint.BToDR[_i2];
            this.polygonData[prop].push([point.x, point.y]);
          }

          this.polygonData[prop].push([this.correctPoint.CR.x, this.correctPoint.CR.y]);
          this.polygonData[prop].push([this.correctPoint.CL.x, this.correctPoint.CL.y]);
          this.polygonData[prop].push([this.correctPoint.BL.x, this.correctPoint.BL.y]); // debugger

          break;
        // 行人通道面积-- 右

        case 'walkwayPolygonR':
          this.polygonData[prop] = [];

          for (var _i3 = this.correctPoint.BToDR.length - 1; _i3 > 0; _i3--) {
            this.polygonData[prop].push([this.correctPoint.BToDR[_i3].x, this.correctPoint.BToDR[_i3].y]);
          }

          this.polygonData[prop].push([this.correctPoint.CR.x, this.correctPoint.CR.y]);
          this.polygonData[prop].push([this.correctPoint.C1R.x, this.correctPoint.C1R.y]);
          this.correctPoint.B1ToD1R.map(function (info) {
            _this2.polygonData[prop].push([info.x, info.y]);
          });
          break;
        // 行人通道面积-- 左

        case 'walkwayPolygonL':
          this.polygonData[prop] = [];
          this.polygonData[prop].push([this.correctPoint.B1L.x, this.correctPoint.B1L.y]);
          this.polygonData[prop].push([this.correctPoint.C1L.x, this.correctPoint.C1L.y]);
          this.polygonData[prop].push([this.correctPoint.CL.x, this.correctPoint.CL.y]);
          this.polygonData[prop].push([this.correctPoint.BL.x, this.correctPoint.BL.y]);
          break;
        // 绿化地

        case 'greenPolygon':
          this.polygonData[prop] = [];
          this.correctPoint.FToE.map(function (info) {
            _this2.polygonData[prop].push([info.x, info.y]);
          });
          this.polygonData[prop].push([this.correctPoint.E1.x, this.correctPoint.E1.y]);
          this.polygonData[prop].push([this.correctPoint.F1.x, this.correctPoint.F1.y]);
          break;
        // 人行道线路

        case 'manRoadLine':
          this.lineData[prop] = [];

          for (var _i4 = 0, len = this.correctPoint.ALToAR.length; _i4 < len; _i4++) {
            this.lineData[prop].push([[this.correctPoint.ALToAR[_i4].x, this.correctPoint.ALToAR[_i4].y], [this.correctPoint.BLToBR[_i4].x, this.correctPoint.BLToBR[_i4].y]]);
          }

          break;
        // 车道边线

        case 'carRoadLine0':
          this.lineData[prop] = []; // 道路边线

          this.lineData[prop].push([[this.correctPoint.H2[0].x, this.correctPoint.H2[0].y], [this.correctPoint.H0[0].x, this.correctPoint.H0[0].y]]);
          this.lineData[prop].push([[this.correctPoint.H2[this.correctPoint.H2.length - 1].x, this.correctPoint.H2[this.correctPoint.H2.length - 1].y], [this.correctPoint.H0[this.correctPoint.H2.length - 1].x, this.correctPoint.H0[this.correctPoint.H2.length - 1].y]]);
          break;
        // 车道线路  白实线部分

        case 'carRoadLine1':
          this.lineData[prop] = [];

          for (var _i5 = 0, _len = this["in"]; _i5 < _len; _i5++) {
            if (_i5) {
              var right_lane_type = this.motor_lanes[this["in"] - _i5].lane_type;
              var left_lane_type = this.motor_lanes[this["in"] - (_i5 + 1)] ? this.motor_lanes[this["in"] - (_i5 + 1)].lane_type : 0; // 特殊车道类型公交车道/潮汐车道不画侧边停车线         

              if (right_lane_type === 1 || right_lane_type === 2 || left_lane_type === 1 || left_lane_type === 2) {
                this.lineData[prop].push([[this.correctPoint.H0[_i5].x, this.correctPoint.H0[_i5].y], [this.correctPoint.H0[_i5 + 1].x, this.correctPoint.H0[_i5 + 1].y]]);
              } else {
                this.lineData[prop].push([[this.correctPoint.H1[_i5].x, this.correctPoint.H1[_i5].y], [this.correctPoint.H0[_i5].x, this.correctPoint.H0[_i5].y], [this.correctPoint.H0[_i5 + 1].x, this.correctPoint.H0[_i5 + 1].y], [this.correctPoint.H0[_i5].x, this.correctPoint.H0[_i5].y]]);
              }
            } else {
              this.lineData[prop].push([[this.correctPoint.H0[_i5].x, this.correctPoint.H0[_i5].y], [this.correctPoint.H0[_i5 + 1].x, this.correctPoint.H0[_i5 + 1].y]]);
            }
          }

          break;
        //  车道线路  白虚线部分

        case 'carRoadLine2':
          this.lineData[prop] = [];

          for (var _i6 = 1, _len2 = this.correctPoint.H0.length; _i6 < _len2; _i6++) {
            // if (this.road_center_mode === RoadCenterMode.doubleYellowLine ||
            //   this.road_center_mode === RoadCenterMode.greenArea) {
            //   if (i === this.in + 1) {
            //     continue
            //   }
            // }        
            if (_i6 === this["in"]) {
              continue;
            }

            if (_i6 < this["in"] + 1) {
              var _right_lane_type = this.motor_lanes[this["in"] - _i6].lane_type;

              var _left_lane_type = this.motor_lanes[this["in"] - (_i6 + 1)] ? this.motor_lanes[this["in"] - (_i6 + 1)].lane_type : 0; // 特殊车道1：潮汐/2公交 不用画虚线


              if (_right_lane_type === 1 || _right_lane_type === 2 || _left_lane_type === 1 || _left_lane_type === 2) {
                continue;
              }

              var lineDate = interModel_Util.getSplitPoint(this.correctPoint.H1[_i6], this.correctPoint.H2[_i6], CrossConst.dashLength);
              this.lineData[prop] = this.lineData[prop].concat(lineDate);
            } else {
              var _lineDate = interModel_Util.getSplitPoint(this.correctPoint.H0[_i6], this.correctPoint.H2[_i6], CrossConst.dashLength);

              this.lineData[prop] = this.lineData[prop].concat(_lineDate);
            }
          }

          break;
        //  车道线路  中间部分，双实线、实线、绿化带

        case 'carRoadLine3':
          this.lineData[prop] = []; // 根据中心区域不同类型设置宽度

          switch (this.road_center_mode) {
            case RoadCenterMode.greenArea:
              this.lineData[prop].push([[this.correctPoint.H0[this["in"]].x, this.correctPoint.H0[this["in"]].y], [this.correctPoint.H2[this["in"]].x, this.correctPoint.H2[this["in"]].y], [this.correctPoint.H2[this["in"] + 1].x, this.correctPoint.H2[this["in"] + 1].y], [this.correctPoint.H0[this["in"] + 1].x, this.correctPoint.H0[this["in"] + 1].y]]);
              break;

            case RoadCenterMode.doubleYellowLine:
              this.lineData[prop].push([[this.correctPoint.H0[this["in"]].x, this.correctPoint.H0[this["in"]].y], [this.correctPoint.H2[this["in"]].x, this.correctPoint.H2[this["in"]].y]]);
              this.lineData[prop].push([[this.correctPoint.H0[this["in"] + 1].x, this.correctPoint.H0[this["in"] + 1].y], [this.correctPoint.H2[this["in"] + 1].x, this.correctPoint.H2[this["in"] + 1].y]]);
              break;

            case RoadCenterMode.singleYellowLine:
              this.lineData[prop].push([[this.correctPoint.H0[this["in"]].x, this.correctPoint.H0[this["in"]].y], [this.correctPoint.H2[this["in"]].x, this.correctPoint.H2[this["in"]].y]]);
              break;
          }

          break;
        // 特殊黄色车道线  公交专用车道  潮汐车道

        case 'carRoadLine4':
          this.lineData[prop] = [];
          this.motor_lanes.forEach(function (it, i) {
            var leftIndex = _this2["in"] - i; // 车道左边index

            var rightIndex = _this2["in"] - (i + 1); // 车道右边index
            // 潮汐车道

            if (it.lane_type === 1) {
              var leftH0 = interModel_Util.pointRotateAngel({
                x: _this2.point.H0[leftIndex].x + 3,
                y: _this2.point.H0[leftIndex].y
              }, -_this2.angle, _this2.origin);
              var leftH2 = interModel_Util.pointRotateAngel({
                x: _this2.point.H2[leftIndex].x + 3,
                y: _this2.point.H2[leftIndex].y
              }, -_this2.angle, _this2.origin);
              var rightH0 = interModel_Util.pointRotateAngel({
                x: _this2.point.H0[rightIndex].x - 3,
                y: _this2.point.H0[rightIndex].y
              }, -_this2.angle, _this2.origin);
              var rightH2 = interModel_Util.pointRotateAngel({
                x: _this2.point.H2[rightIndex].x - 3,
                y: _this2.point.H2[rightIndex].y
              }, -_this2.angle, _this2.origin);
              var lineDate1 = interModel_Util.getSplitPoint(_this2.correctPoint.H0[leftIndex], _this2.correctPoint.H2[leftIndex], CrossConst.tidalDashLength);
              var lineDate2 = interModel_Util.getSplitPoint(leftH0, leftH2, CrossConst.tidalDashLength);
              var lineDate3 = interModel_Util.getSplitPoint(_this2.correctPoint.H0[rightIndex], _this2.correctPoint.H2[rightIndex], CrossConst.tidalDashLength);
              var lineDate4 = interModel_Util.getSplitPoint(rightH0, rightH2, CrossConst.tidalDashLength);
              _this2.lineData[prop] = _this2.lineData[prop].concat(lineDate1).concat(lineDate2).concat(lineDate3).concat(lineDate4);
            } else if (it.lane_type === 2) {
              // 公交专用车道
              var _lineDate2 = interModel_Util.getSplitPoint(_this2.correctPoint.H0[leftIndex], _this2.correctPoint.H2[leftIndex], CrossConst.busDashLength);

              var _lineDate3 = interModel_Util.getSplitPoint(_this2.correctPoint.H0[rightIndex], _this2.correctPoint.H2[rightIndex], CrossConst.busDashLength);

              _this2.lineData[prop] = _this2.lineData[prop].concat(_lineDate2).concat(_lineDate3);
            }
          });
          break;
        // 辅道分割线

        case 'fdsplitLine':
          this.lineData[prop] = [];
          var fdLaneNum = this.motor_lanes.findIndex(function (it) {
            return it.lane_type === 4;
          });

          if (fdLaneNum > -1) {
            var _this$correctPoint$H = this.correctPoint.H0[this["in"] - fdLaneNum],
                _x3 = _this$correctPoint$H.x,
                _y3 = _this$correctPoint$H.y;
            var _this$correctPoint$H2 = this.correctPoint.H2[this["in"] - fdLaneNum],
                _x4 = _this$correctPoint$H2.x,
                _y4 = _this$correctPoint$H2.y;
            this.lineData[prop].push([[_x3, _y3], [_x4, _y4]]);
          }

          break;
        // 车道流向 

        case 'laneFlowPolygon':
          this.polygonData[prop] = [];
          this.correctPoint.pointLaneFlow.forEach(function (it, i) {
            _this2.polygonData[prop][i] = [];
            it.forEach(function (itt) {
              _this2.polygonData[prop][i].push([itt.x, itt.y]);
            });
          });
          break;
        // 进口流向 

        case 'roadFlowPolygon':
          this.polygonData[prop] = [];
          this.correctPoint.pointRoadFlow.forEach(function (it, i) {
            _this2.polygonData[prop][i] = [];
            it.forEach(function (itt) {
              _this2.polygonData[prop][i].push([itt.x, itt.y]);
            });
          });
          break;

        default:
          break;
      }
    }
  }]);

  return CrossDirectionObject;
}();
/**
 * @description 匝道方向对象
 * @author wsx
 * @Date  2021-10-20 13:20:50
 */


var interModel_CrossRampObject = /*#__PURE__*/function () {
  function CrossRampObject(param) {
    _classCallCheck(this, CrossRampObject);

    var option = Object.assign({
      en_id: 1,
      "in": 2,
      name: '道路',
      origin: [0, 0],
      degree: 0,
      angle: 0,
      road_center_mode: RoadCenterMode.singleYellowLine,
      motor_lanes: [],
      secondIn: 3,
      baseWidth: 800,
      clientWidth: 800,
      clientHeight: 800
    }, param); // 进口id

    this.en_id = option.en_id; // 进口名称

    this.name = option.name; // 进路口车道数

    this["in"] = option.motor_lanes.length; // 车道流向

    this.motor_lanes = option.motor_lanes; // 间隔线类型

    this.road_center_mode = option.road_center_mode;
    this.degree = this.getDegreeByEnId(this.en_id); // 路口方向相对正南方向偏移角度  （ -360 / CrossConst.defaultRoadNumber, 360 / CrossConst.defaultRoadNumber ）

    this.angle = interModel_Util.degreeToAngle(this.degree);
    this.origin = option.origin;
    this.secondIn = option.secondIn;
    this.drawOption = option.drawOption;
    this.baseWidth = option.baseWidth;
    this.clientWidth = option.baseWidth;
    this.clientHeight = option.clientHeight; // 核心点位

    this.point = {}; // 转换正后的坐标

    this.correctPoint = {}; // 准确计算后的点线面数据

    this.pointData = {};
    this.lineData = {};
    this.polygonData = {};
    this.calculation('point');
  }

  _createClass(CrossRampObject, [{
    key: "getDegreeByEnId",
    value: function getDegreeByEnId(en_id) {
      var degreeMap = {
        1: 270,
        2: 90,
        3: 75
      };
      return degreeMap[en_id];
    } // 计算关键点位数据

  }, {
    key: "calculation",
    value: function calculation(prop) {
      var _this3 = this;

      var dw = 0;

      switch (this.road_center_mode) {
        case RoadCenterMode.doubleYellowLine:
          dw = CrossConst.doubleYellowLineInterval;
          break;

        case RoadCenterMode.greenArea:
          dw = CrossConst.greenWidth;
          break;

        case RoadCenterMode.singleYellowLine:
          dw = 0;
          break;
      }

      switch (prop) {
        case 'point':
          if (this.en_id === 1) {
            var _x5 = CrossConst.roadWidth * this.secondIn + dw;

            var x2 = CrossConst.roadWidth * (this.secondIn + this["in"]) + dw;

            var _y5 = this.clientHeight / 2;

            this.point = {
              AL: {
                x: _x5,
                y: _y5
              },
              AR: {
                x: x2,
                y: _y5
              },
              BL: {
                x: _x5,
                y: -_y5
              },
              BR: {
                x: x2,
                y: -_y5
              }
            };
          } else if (this.en_id === 2) {
            var _x6 = CrossConst.roadWidth * this["in"];

            var _y6 = this.clientHeight / 2;

            this.point = {
              AL: {
                x: -_x6,
                y: _y6
              },
              AR: {
                x: 0,
                y: _y6
              },
              BL: {
                x: -_x6,
                y: -_y6
              },
              BR: {
                x: 0,
                y: -_y6
              }
            };
          } else if (this.en_id === 3) {
            var _x7 = CrossConst.roadWidth * this["in"] / 2;

            var _y7 = CrossConst.roadWidth * this["in"] / 2 / Math.tan(this.angle * Math.PI / 180);

            this.point = {
              AL: {
                x: -_x7,
                y: -_y7
              },
              AR: {
                x: _x7,
                y: -_y7
              },
              BL: {
                x: -_x7,
                y: -_y7 - CrossConst.defaultRoadLength
              },
              BR: {
                x: _x7,
                y: -_y7 - CrossConst.defaultRoadLength
              }
            };
          } // 道路名称位置


          this.point.roadName = {
            x: this.point.AR.x + 12,
            y: this.point.AR.y
          };
          this.calculation('point2');
          break;

        case 'point2':
          // 计算人行道点位
          this.calculation('pointH'); // 计算车道流向点位

          this.calculation('pointLaneFlow'); // 计算进口流向点位

          this.calculation('pointRoadFlow');

          var _loop2 = function _loop2(_prop2) {
            if (Array.isArray(_this3.point[_prop2])) {
              _this3.correctPoint[_prop2] = [];

              _this3.point[_prop2].forEach(function (info, index) {
                if (Array.isArray(info)) {
                  _this3.correctPoint[_prop2][index] = [];
                  info.map(function (it) {
                    _this3.correctPoint[_prop2][index].push(interModel_Util.pointRotateAngel(it, -_this3.angle, _this3.origin));
                  });
                } else {
                  _this3.correctPoint[_prop2].push(interModel_Util.pointRotateAngel(info, -_this3.angle, _this3.origin));
                }
              });
            } else {
              _this3.correctPoint[_prop2] = interModel_Util.pointRotateAngel(_this3.point[_prop2], -_this3.angle, _this3.origin);
            }
          };

          for (var _prop2 in this.point) {
            _loop2(_prop2);
          } // 道路面数据计算


          this.calculation('RoadPolygon'); // 车道边线

          this.calculation('carRoadLine0'); // 车道线路  白实线部分

          this.calculation('carRoadLine1'); //  车道线路  白虚线部分

          this.calculation('carRoadLine2'); //  车道线路  中间部分，双实线、实线、绿化带

          this.calculation('carRoadLine3');
          this.calculation('laneFlowPolygon');
          this.calculation('roadFlowPolygon'); // 补充匝道面数据        

          this.calculation('poly');
          this.calculation('line');
          break;

        case 'pointH':
          var x = 0;
          var y = 0;
          this.point.H0 = [];
          this.point.H1 = [];
          this.point.H2 = [];

          for (var i = 0; i < this["in"] + 1; i++) {
            this.point.H0.push({
              x: this.point.AR.x - i * CrossConst.roadWidth,
              y: this.point.AR.y
            });
            this.point.H1.push({
              x: this.point.BR.x - i * CrossConst.roadWidth,
              y: this.point.BR.y
            });
            this.point.H2.push({
              x: this.point.BR.x - i * CrossConst.roadWidth,
              y: this.point.BR.y
            });

            if ((this.road_center_mode === RoadCenterMode.greenArea || this.road_center_mode === RoadCenterMode.doubleYellowLine) && i === this["in"] && this.en_id === 1) {
              x = this.point.AR.x - i * CrossConst.roadWidth - dw;
              y = this.point.AR.y;
              this.point.H0.push({
                x: x,
                y: this.point.AR.y
              });
              this.point.H1.push({
                x: x,
                y: this.point.BR.y
              });
              this.point.H2.push({
                x: x,
                y: this.point.BR.y
              });
            }
          }

          break;
        // 计算每个车道流向绘制的点位

        case 'pointLaneFlow':
          this.point.pointLaneFlow = [];
          this.motor_lanes.forEach(function (it, i) {
            var laneFlowPoints = getLaneFlowPoint(it.id, it.lane_flow, CrossConst, _this3, null);

            _this3.point.pointLaneFlow.push(laneFlowPoints);
          });
          break;
        // 计算流向点位

        case 'pointRoadFlow':
          this.point.pointRoadFlow = [];
          this.point.pointRoadFlowText = [];

          for (var _i7 = 1; _i7 <= 14; _i7++) {
            var _getRoadFlowPoint2 = getRoadFlowPoint(_i7, CrossConst, this),
                roadFlowPoints = _getRoadFlowPoint2.roadFlowPoints,
                flowTextPoint = _getRoadFlowPoint2.flowTextPoint;

            this.point.pointRoadFlow.push(roadFlowPoints);
            this.point.pointRoadFlowText.push(flowTextPoint);
          }

          break;

        case 'RoadPolygon':
          this.polygonData[prop] = [];

          if (this.en_id === 3) {
            this.polygonData[prop].push([0, CrossConst.roadWidth * 6]);
            this.polygonData[prop].push([this.correctPoint.AR.x, this.correctPoint.AR.y]);
            this.polygonData[prop].push([this.correctPoint.BR.x, this.correctPoint.BR.y]);
            this.polygonData[prop].push([this.correctPoint.BL.x, this.correctPoint.BL.y]);
            this.polygonData[prop].push([this.correctPoint.AL.x, this.correctPoint.AL.y]);
          } else {
            this.polygonData[prop].push([this.correctPoint.AL.x, this.correctPoint.AL.y]);
            this.polygonData[prop].push([this.correctPoint.AR.x, this.correctPoint.AR.y]);
            this.polygonData[prop].push([this.correctPoint.BR.x, this.correctPoint.BR.y]);
            this.polygonData[prop].push([this.correctPoint.BL.x, this.correctPoint.BL.y]);
          }

        // 车道边线

        case 'carRoadLine0':
          this.lineData[prop] = [];

          if (this.en_id === 1) {
            this.lineData[prop].push([[this.correctPoint.H1[0].x, this.correctPoint.H1[0].y], [this.correctPoint.H0[0].x, this.correctPoint.H0[0].y]]);
          } else if (this.en_id === 2) {
            this.lineData[prop].push([[this.correctPoint.H0[0].x, this.correctPoint.H0[0].y], [this.correctPoint.H1[0].x, CrossConst.roadWidth * 6]]);
            this.lineData[prop].push([[this.correctPoint.H0[0].x, -CrossConst.roadWidth], [this.correctPoint.H1[0].x, this.correctPoint.H1[0].y]]);
          } else if (this.en_id === 3) {
            this.lineData[prop].push([[this.correctPoint.H0[this["in"]].x, this.correctPoint.H0[this["in"]].y], [this.correctPoint.H1[this["in"]].x, this.correctPoint.H1[this["in"]].y]]);
            this.lineData[prop].push([[0, CrossConst.roadWidth * 6], [this.correctPoint.H0[0].x, this.correctPoint.H0[0].y]]);
            this.lineData[prop].push([[this.correctPoint.H0[0].x, this.correctPoint.H0[0].y], [this.correctPoint.H1[0].x, this.correctPoint.H1[0].y]]);
          }

          break;
        // 车道线路  白实线部分

        case 'carRoadLine1':
          this.lineData[prop] = [];

          if (this.en_id === 3) {
            this.lineData[prop].push([[this.correctPoint.H0[0].x, this.correctPoint.H0[0].y], [this.correctPoint.H0[this["in"]].x, this.correctPoint.H0[this["in"]].y]]);
          }

          break;
        //  车道线路  白虚线部分

        case 'carRoadLine2':
          this.lineData[prop] = [];

          for (var _i8 = 1; _i8 < this["in"]; _i8++) {
            this.lineData[prop].push([[this.correctPoint.H0[_i8].x, this.correctPoint.H0[_i8].y], [this.correctPoint.H1[_i8].x, this.correctPoint.H1[_i8].y]]);
          }

          if (this.en_id === 3) {
            this.lineData[prop].push([[this.correctPoint.H0[this["in"]].x, -CrossConst.roadWidth], [this.correctPoint.H0[this["in"]].x, CrossConst.roadWidth * 6]]);
          }

          break;
        //  车道线路  中间部分，双实线、实线、绿化带

        case 'carRoadLine3':
          this.lineData[prop] = []; // 根据中心区域不同类型设置宽度

          if (this.en_id == 1) {
            switch (this.road_center_mode) {
              case RoadCenterMode.greenArea:
                this.lineData[prop].push([[this.correctPoint.H0[this["in"]].x, this.correctPoint.H0[this["in"]].y], [this.correctPoint.H2[this["in"]].x, this.correctPoint.H2[this["in"]].y], [this.correctPoint.H2[this["in"] + 1].x, this.correctPoint.H2[this["in"] + 1].y], [this.correctPoint.H0[this["in"] + 1].x, this.correctPoint.H0[this["in"] + 1].y]]);
                break;

              case RoadCenterMode.doubleYellowLine:
                this.lineData[prop].push([[this.correctPoint.H0[this["in"]].x, this.correctPoint.H0[this["in"]].y], [this.correctPoint.H2[this["in"]].x, this.correctPoint.H2[this["in"]].y]]);
                this.lineData[prop].push([[this.correctPoint.H0[this["in"] + 1].x, this.correctPoint.H0[this["in"] + 1].y], [this.correctPoint.H2[this["in"] + 1].x, this.correctPoint.H2[this["in"] + 1].y]]);
                break;

              case RoadCenterMode.singleYellowLine:
                this.lineData[prop].push([[this.correctPoint.H0[this["in"]].x, this.correctPoint.H0[this["in"]].y], [this.correctPoint.H1[this["in"]].x, this.correctPoint.H1[this["in"]].y]]);
                break;
            }
          }

          break;
        // 车道流向 

        case 'laneFlowPolygon':
          this.polygonData[prop] = [];
          this.correctPoint.pointLaneFlow.forEach(function (it, i) {
            _this3.polygonData[prop][i] = [];
            it.forEach(function (itt) {
              _this3.polygonData[prop][i].push([itt.x, itt.y]);
            });
          });
          break;
        // 进口流向 

        case 'roadFlowPolygon':
          this.polygonData[prop] = [];
          this.correctPoint.pointRoadFlow.forEach(function (it, i) {
            _this3.polygonData[prop][i] = [];
            it.forEach(function (itt) {
              _this3.polygonData[prop][i].push([itt.x, itt.y]);
            });
          });
          break;

        case 'poly':
          this.polygonData.walkwayPolygonL = [];
          this.polygonData.walkwayPolygonR = [];
          break;

        case 'line':
          this.lineData.manRoadLine = [];
          break;

        case 'greenPolygon':
          this.polygonData.greenPolygon = [];
          break;
      }
    }
  }]);

  return CrossRampObject;
}();


// CONCATENATED MODULE: ./packages/interModel/src/js/flowPoint.ts


/**
 * @name wsx
 * @Date 2021-08-02 13:36:29
 * @introduction 获取车道流向点位
 * @description 详细描述
 * @param {参数类型} laneNumber 进口车道序号1/2/3
 * @param {参数类型} laneFlow 流向1/2/3
 * @param {参数类型} CrossConst 路口模型配置参数
 * @param {参数类型} self 当前进口到信息
 * @param {参数类型} type 待行驶区域 area/areaFlow
 * @return 无返回类型
 * @exception [违例类型] [违例类型说明]
 */

function getLaneFlowPoint(laneNumber, laneFlow, CrossConst, self, type) {
  var points = []; // 绘制的顶点

  var _self$point$H = self.point.H0[self["in"] - laneNumber + 1],
      x1 = _self$point$H.x,
      y1 = _self$point$H.y;
  var y2 = self.point.H0[self["in"] - laneNumber].y;
  var roadWidth = CrossConst.roadWidth;
  var offsetY = self.drawOption.laneFlowOffetStopLine * -roadWidth;
  var cenY = (y1 + y2) / 2 + offsetY - 2 * roadWidth;

  if (laneFlow === 1) {
    // 左
    if (type && type === 'waitAreaFlow') {
      x1 -= roadWidth / 3;
      cenY += roadWidth * 2.2 + CrossConst.manRoadLength + CrossConst.manCarInterval;
    }

    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + 3 * roadWidth / 8,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY
    });
  } else if (laneFlow === 2) {
    // 直
    if (type && type === 'waitAreaFlow') {
      cenY += roadWidth * 2.2 + CrossConst.manRoadLength + CrossConst.manCarInterval;
    }

    points.push({
      x: x1 + roadWidth / 2,
      y: cenY
    });
    points.push({
      x: x1 + roadWidth / 2,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 5 * roadWidth / 8,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + 3 * roadWidth / 8,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + roadWidth / 2,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 2,
      y: cenY
    });
  } else if (laneFlow === 3) {
    // 右
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + 5 * roadWidth / 8,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY
    });
  } else if (laneFlow === 4) {} else if (laneFlow === 5) {
    // 左直
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + 3 * roadWidth / 8,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 5 * roadWidth / 8,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + 7 * roadWidth / 8,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY
    });
  } else if (laneFlow === 6) {
    // 直右
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + 5 * roadWidth / 8,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 1 * roadWidth / 8,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + 3 * roadWidth / 8,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY
    });
  } else if (laneFlow === 7) {
    // 通行
    points.push({
      x: x1 + roadWidth / 2,
      y: cenY
    });
    points.push({
      x: x1 + roadWidth / 2,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + 3 * roadWidth / 8,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 2,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + roadWidth / 2,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 8,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + 5 * roadWidth / 8,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + roadWidth / 2,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 5 * roadWidth / 5,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + 7 * roadWidth / 8,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 2,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + roadWidth / 2,
      y: cenY
    });
  } else if (laneFlow === 8) {
    // 掉头
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + roadWidth / 8,
      y: cenY + 9 * roadWidth / 8
    });
    points.push({
      x: x1 + 3 * roadWidth / 8,
      y: cenY + 9 * roadWidth / 8
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY
    });
  } else if (laneFlow === 9) {
    // 左掉头
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: x1 + 3 * roadWidth / 8,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + roadWidth / 4,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + 1 * roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + 1 * roadWidth / 4,
      y: cenY + 1 * roadWidth / 2
    });
    points.push({
      x: x1 + 1 * roadWidth / 8,
      y: cenY + 5 * roadWidth / 8
    });
    points.push({
      x: x1 + 3 * roadWidth / 8,
      y: cenY + 5 * roadWidth / 8
    });
    points.push({
      x: x1 + 1 * roadWidth / 4,
      y: cenY + 1 * roadWidth / 2
    });
    points.push({
      x: x1 + 1 * roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY + roadWidth
    });
    points.push({
      x: x1 + 3 * roadWidth / 4,
      y: cenY
    });
  } else if (laneFlow === 10) {
    // 可变车道 车道侧边斜线
    points.push({
      x: x1 + roadWidth,
      y: y2
    });
    points.push({
      x: x1,
      y: y1
    });
    var step = roadWidth / 5;
    var leftY = CrossConst.defaultSolidRoadLength;

    while (leftY > 0) {
      points.push({
        x: x1,
        y: y1 - leftY
      });
      points.push({
        x: x1 + step,
        y: y1 - leftY + 3
      });
      points.push({
        x: x1,
        y: y1 - leftY
      });
      points.push({
        x: x1,
        y: Math.min(y1 - leftY + step, y1)
      });
      leftY -= step;
    }

    points.push({
      x: x1 + roadWidth,
      y: y2
    });
    var rightY = step;

    while (rightY <= CrossConst.defaultSolidRoadLength) {
      points.push({
        x: x1 + roadWidth,
        y: y2 - rightY
      });
      points.push({
        x: x1 + roadWidth - step,
        y: y2 - rightY + step
      });
      points.push({
        x: x1 + roadWidth,
        y: y2 - rightY
      });
      rightY += step;
    }
  } else if (laneFlow === 'variableClick') {
    // 可变车道圆点点击位置
    points.push({
      x: x1 + roadWidth / 2,
      y: cenY
    });
  }

  return points;
}
/**
 * @name wsx
 * @Date 2021-08-02 13:36:29
 * @introduction 获取饱和度流向点位
 * @description 详细描述
 * @param 流向类型 flowType:1/2/3
 * @param 路口模型参数：CrossConst
 * @param 当前车道 self
 * @return 无返回类型
 * @exception [违例类型] [违例类型说明]
 */

function getRoadFlowPoint(flowType, CrossConst, self) {
  var points = [];
  var flowTextPoint = {}; // 绘制的顶点

  var _self$point$H0$self$i = self.point.H0[self["in"]],
      x1 = _self$point$H0$self$i.x,
      y1 = _self$point$H0$self$i.y;
  var y2 = self.point.H0[self["in"] - 1].y;
  var roadWidth = CrossConst.roadWidth;
  var offsetY = -2 * roadWidth; // 左流向画第一个车道

  var offsetX = 0;

  if (flowType === 1) {
    offsetX += 0;
    offsetY += (y2 - y1) / 2;
  } else if (flowType === 2) {
    if (self["in"] > 3) {
      offsetX += (self.point.H0[0].x - self.point.H0[self["in"]].x - roadWidth) / 2;
      offsetY += (self.point.H0[0].y - self.point.H0[self["in"]].y) / 2;
    } else {
      offsetX += roadWidth;
      offsetY += (y2 - y1) / 2 * 3;
    }
  } else if (flowType === 3) {
    if (self["in"] > 3) {
      offsetX += self.point.H0[0].x - self.point.H0[self["in"]].x - roadWidth;
      offsetY += self.point.H0[0].y - self.point.H0[self["in"]].y - (y2 - y1) / 2;
    } else {
      offsetX += 2 * roadWidth;
      offsetY += (y2 - y1) / 2 * 5;
    }
  } else if (flowType === 4) {
    offsetX = 0;
    offsetY += CrossConst.manCarInterval + CrossConst.manRoadLength / 2 + 2 * roadWidth;
  }

  var manOffsetY = (y2 - y1) * self["in"];
  var manOffsetX = roadWidth * (self["in"] - 1);
  var leftX = x1 + offsetX;
  var cenY = y1 + offsetY;

  if (flowType === 1) {
    // 流向左
    points.push({
      x: leftX + 7 * roadWidth / 8,
      y: cenY
    });
    points.push({
      x: leftX + 7 * roadWidth / 8,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: leftX + 3 * roadWidth / 8,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: leftX + 3 * roadWidth / 8,
      y: cenY + 13 * roadWidth / 8
    });
    points.push({
      x: leftX + 1 * roadWidth / 8,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: leftX + 3 * roadWidth / 8,
      y: cenY + 9 * roadWidth / 8
    });
    points.push({
      x: leftX + 3 * roadWidth / 8,
      y: cenY + 5 * roadWidth / 4
    });
    points.push({
      x: leftX + 5 * roadWidth / 8,
      y: cenY + 5 * roadWidth / 4
    });
    points.push({
      x: leftX + 5 * roadWidth / 8,
      y: cenY
    });
    flowTextPoint = {
      x: leftX + 3 * roadWidth / 4,
      y: cenY - roadWidth / 2
    };
  } else if (flowType === 2) {
    // 流向中
    points.push({
      x: leftX + 3 * roadWidth / 8,
      y: cenY
    });
    points.push({
      x: leftX + 3 * roadWidth / 8,
      y: cenY + 5 * roadWidth / 4
    });
    points.push({
      x: leftX + roadWidth / 4,
      y: cenY + 5 * roadWidth / 4
    });
    points.push({
      x: leftX + roadWidth / 2,
      y: cenY + 13 * roadWidth / 8
    });
    points.push({
      x: leftX + 3 * roadWidth / 4,
      y: cenY + 5 * roadWidth / 4
    });
    points.push({
      x: leftX + 5 * roadWidth / 8,
      y: cenY + 5 * roadWidth / 4
    });
    points.push({
      x: leftX + 5 * roadWidth / 8,
      y: cenY
    });
    flowTextPoint = {
      x: leftX + roadWidth / 2,
      y: cenY - roadWidth / 2
    };
  } else if (flowType === 3) {
    // 流向右
    points.push({
      x: leftX + 1 * roadWidth / 8,
      y: cenY
    });
    points.push({
      x: leftX + 1 * roadWidth / 8,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: leftX + 5 * roadWidth / 8,
      y: cenY + 3 * roadWidth / 2
    });
    points.push({
      x: leftX + 5 * roadWidth / 8,
      y: cenY + 13 * roadWidth / 8
    });
    points.push({
      x: leftX + 7 * roadWidth / 8,
      y: cenY + 11 * roadWidth / 8
    });
    points.push({
      x: leftX + 5 * roadWidth / 8,
      y: cenY + 9 * roadWidth / 8
    });
    points.push({
      x: leftX + 5 * roadWidth / 8,
      y: cenY + 5 * roadWidth / 4
    });
    points.push({
      x: leftX + 3 * roadWidth / 8,
      y: cenY + 5 * roadWidth / 4
    });
    points.push({
      x: leftX + 3 * roadWidth / 8,
      y: cenY
    });
    flowTextPoint = {
      x: leftX + roadWidth / 4,
      y: cenY - roadWidth / 2
    };
  } else if (flowType === 4) {
    // 流向人行
    points.push({
      x: leftX,
      y: cenY
    });
    points.push({
      x: leftX + 2 * roadWidth / 8,
      y: cenY - 2 * roadWidth / 8
    });
    points.push({
      x: leftX + 2 * roadWidth / 8,
      y: cenY - roadWidth / 8
    });
    points.push({
      x: leftX + 6 * roadWidth / 8 + manOffsetX,
      y: cenY - roadWidth / 8 + manOffsetY
    });
    points.push({
      x: leftX + 6 * roadWidth / 8 + manOffsetX,
      y: cenY - 2 * roadWidth / 8 + manOffsetY
    });
    points.push({
      x: leftX + roadWidth + manOffsetX,
      y: cenY + manOffsetY
    });
    points.push({
      x: leftX + 6 * roadWidth / 8 + manOffsetX,
      y: cenY + 2 * roadWidth / 8 + manOffsetY
    });
    points.push({
      x: leftX + 6 * roadWidth / 8 + manOffsetX,
      y: cenY + 1 * roadWidth / 8 + manOffsetY
    });
    points.push({
      x: leftX + 2 * roadWidth / 8,
      y: cenY + 1 * roadWidth / 8
    });
    points.push({
      x: leftX + 2 * roadWidth / 8,
      y: cenY + 2 * roadWidth / 8
    });
    points.push({
      x: leftX,
      y: cenY
    });
  }

  return {
    roadFlowPoints: points,
    flowTextPoint: flowTextPoint
  };
}
/**
 * @name wsx
 * @Date 2021-08-05 14:58:40
 * @introduction 获取实时信号机相位点位
 * @description 详细描述
 * @param {参数类型} phaseNum 相位号 1/2/3/4
 * @param {参数类型} flowType 1/2/3/4 左/直/右/人行
 * @param {参数类型} baseLayerWidth 绘制相位dom宽度
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */

function getRealPhasePoint(phaseNum, flowType, baseLayerWidth) {
  var fd_flow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'main';
  var points = [];
  var x = baseLayerWidth / 3 + 2;
  var y = -phaseNum * baseLayerWidth + 2 + 1 * baseLayerWidth / 12;
  var roadWidth = baseLayerWidth / 9; // let roadWidth = baseLayerWidth / 15

  if (fd_flow === 'fd') {
    roadWidth = roadWidth * 0.5;
    x = x + 5 * roadWidth;
  }

  if (flowType === 2) {
    x = x + roadWidth;
  } else if (flowType === 3) {
    x = x + 2 * roadWidth;
  } else if (flowType === 4) {
    y = y - 3 * roadWidth / 8;
    x = x + roadWidth / 8;
  } else if (flowType === 10) {
    y = y - 3 * roadWidth / 8;
    x = x + roadWidth / 8 + 1.5 * roadWidth;
  } else if (flowType === 11) {
    y = y - 3 * roadWidth / 8;
    x = x + roadWidth / 8 - 1.5 * roadWidth;
  } else if (flowType === 12) {
    x = x + 4.5 * roadWidth;
    roadWidth = baseLayerWidth / 20;
  } else if (flowType === 13) {
    x = x + 5 * roadWidth;
    roadWidth = baseLayerWidth / 20;
  } // 流向左


  if (flowType === 1) {
    points.push({
      x: x + 7 * roadWidth / 8,
      y: y
    });
    points.push({
      x: x + 7 * roadWidth / 8,
      y: y + 10 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 13 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 15 * roadWidth / 8
    });
    points.push({
      x: x,
      y: y + 12 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 9 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y + 9 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y
    });
  } else if (flowType === 2) {
    // 流向直
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y
    });
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + roadWidth / 4,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + roadWidth / 2,
      y: y + 15 * roadWidth / 8
    });
    points.push({
      x: x + 3 * roadWidth / 4,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y
    });
  } else if (flowType === 3) {
    // 流向右
    points.push({
      x: x + 1 * roadWidth / 8,
      y: y
    });
    points.push({
      x: x + 1 * roadWidth / 8,
      y: y + 10 * roadWidth / 8
    });
    points.push({
      x: x + 6 * roadWidth / 8,
      y: y + 13 * roadWidth / 8
    });
    points.push({
      x: x + 6 * roadWidth / 8,
      y: y + 15 * roadWidth / 8
    });
    points.push({
      x: x + roadWidth,
      y: y + 12 * roadWidth / 8
    });
    points.push({
      x: x + 6 * roadWidth / 8,
      y: y + 9 * roadWidth / 8
    });
    points.push({
      x: x + 6 * roadWidth / 8,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y + 9 * roadWidth / 8
    });
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y
    });
  } else if (flowType === 4) {
    // 人行
    points.push({
      x: x,
      y: y
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y - 2 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y - roadWidth / 8
    });
    points.push({
      x: x + 4 * roadWidth / 8 + 2 * roadWidth,
      y: y - roadWidth / 8
    });
    points.push({
      x: x + 4 * roadWidth / 8 + 2 * roadWidth,
      y: y - 2 * roadWidth / 8
    });
    points.push({
      x: x + 6 * roadWidth / 8 + 2 * roadWidth,
      y: y
    });
    points.push({
      x: x + 4 * roadWidth / 8 + 2 * roadWidth,
      y: y + 2 * roadWidth / 8
    });
    points.push({
      x: x + 4 * roadWidth / 8 + 2 * roadWidth,
      y: y + 1 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 1 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 2 * roadWidth / 8
    });
    points.push({
      x: x,
      y: y
    });
  } else if (flowType === 8) {
    // 掉头
    points.push({
      x: x + 7 * roadWidth / 8,
      y: y
    });
    points.push({
      x: x + 7 * roadWidth / 8,
      y: y + 8 * roadWidth / 8
    });
    points.push({
      x: x + 1 * roadWidth / 8,
      y: y + 8 * roadWidth / 8
    });
    points.push({
      x: x + 1 * roadWidth / 8,
      y: y + 4 * roadWidth / 8
    });
    points.push({
      x: x + 0 * roadWidth / 8,
      y: y + 4 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 2 * roadWidth / 8
    });
    points.push({
      x: x + 4 * roadWidth / 8,
      y: y + 4 * roadWidth / 8
    });
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y + 4 * roadWidth / 8
    });
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y + 6 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y + 6 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y
    });
  } else if (flowType === 10) {
    // 人行1
    points.push({
      x: x,
      y: y
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y - 2 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y - roadWidth / 8
    });
    points.push({
      x: x + 4 * roadWidth / 8 + 2 * roadWidth,
      y: y - roadWidth / 8
    });
    points.push({
      x: x + 4 * roadWidth / 8 + 2 * roadWidth,
      y: y - 2 * roadWidth / 8
    });
    points.push({
      x: x + 6 * roadWidth / 8 + 2 * roadWidth,
      y: y
    });
    points.push({
      x: x + 4 * roadWidth / 8 + 2 * roadWidth,
      y: y + 2 * roadWidth / 8
    });
    points.push({
      x: x + 4 * roadWidth / 8 + 2 * roadWidth,
      y: y + 1 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 1 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 2 * roadWidth / 8
    });
    points.push({
      x: x,
      y: y
    });
  } else if (flowType === 11) {
    // 人行2
    points.push({
      x: x,
      y: y
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y - 2 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y - roadWidth / 8
    });
    points.push({
      x: x + 4 * roadWidth / 8 + 2 * roadWidth,
      y: y - roadWidth / 8
    });
    points.push({
      x: x + 4 * roadWidth / 8 + 2 * roadWidth,
      y: y - 2 * roadWidth / 8
    });
    points.push({
      x: x + 6 * roadWidth / 8 + 2 * roadWidth,
      y: y
    });
    points.push({
      x: x + 4 * roadWidth / 8 + 2 * roadWidth,
      y: y + 2 * roadWidth / 8
    });
    points.push({
      x: x + 4 * roadWidth / 8 + 2 * roadWidth,
      y: y + 1 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 1 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 2 * roadWidth / 8
    });
    points.push({
      x: x,
      y: y
    });
  } else if (flowType === 12) {
    // 非机动车左
    points.push({
      x: x + 7 * roadWidth / 8,
      y: y
    });
    points.push({
      x: x + 7 * roadWidth / 8,
      y: y + 10 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 13 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 15 * roadWidth / 8
    });
    points.push({
      x: x,
      y: y + 12 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 9 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y + 9 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y
    });
  } else if (flowType === 13) {
    // 非机动车直
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y
    });
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + roadWidth / 4,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + roadWidth / 2,
      y: y + 15 * roadWidth / 8
    });
    points.push({
      x: x + 3 * roadWidth / 4,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y
    });
  }

  return points;
}
/**
 * @name wsx
 * @Date 2021-08-27 14:19:20
 * @introduction 获取路口模型中当前相位的点位
 * @description 详细描述
 * @param {参数类型} 参数 参数说明
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */

function getInterPhaseflowData(flowType, entrance) {
  var fd_flow = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'main';
  var points = [];
  var _entrance$point$H0$en = entrance.point.H0[entrance["in"]],
      x = _entrance$point$H0$en.x,
      y = _entrance$point$H0$en.y;
  var y1 = entrance.point.H0[entrance["in"]].y;
  var y2 = entrance.point.H0[entrance["in"] - 1].y;
  var laneOffset = y2 - y1;
  var roadWidth = CrossConst.roadWidth * 0.75;
  y += CrossConst.manCarInterval + CrossConst.manRoadLength + 0.5 * roadWidth;

  if (fd_flow === 'fd') {
    x += 3 * roadWidth;
    roadWidth = roadWidth * 0.8;
  } // 流向左


  if (flowType === 1) {
    points.push({
      x: x + 7 * roadWidth / 8,
      y: y
    });
    points.push({
      x: x + 7 * roadWidth / 8,
      y: y + 10 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 13 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 15 * roadWidth / 8
    });
    points.push({
      x: x,
      y: y + 12 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 9 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y + 9 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y
    });
  } else if (flowType === 2) {
    // 流向直
    x += roadWidth;
    y += laneOffset;
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y
    });
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + roadWidth / 4,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + roadWidth / 2,
      y: y + 15 * roadWidth / 8
    });
    points.push({
      x: x + 3 * roadWidth / 4,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y
    });
  } else if (flowType === 3) {
    // 流向右
    x += 2 * roadWidth;
    y += laneOffset * 2;
    points.push({
      x: x + 1 * roadWidth / 8,
      y: y
    });
    points.push({
      x: x + 1 * roadWidth / 8,
      y: y + 10 * roadWidth / 8
    });
    points.push({
      x: x + 6 * roadWidth / 8,
      y: y + 13 * roadWidth / 8
    });
    points.push({
      x: x + 6 * roadWidth / 8,
      y: y + 15 * roadWidth / 8
    });
    points.push({
      x: x + roadWidth,
      y: y + 12 * roadWidth / 8
    });
    points.push({
      x: x + 6 * roadWidth / 8,
      y: y + 9 * roadWidth / 8
    });
    points.push({
      x: x + 6 * roadWidth / 8,
      y: y + 11 * roadWidth / 8
    });
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y + 9 * roadWidth / 8
    });
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y
    });
  } else if (flowType === 4 || flowType === 10) {
    // 流向人行或者人行1
    // const manOffsetX = roadWidth * (entrance.in - 1)
    var manOffsetX = roadWidth;
    roadWidth = roadWidth * 0.5;
    var _y = entrance.point.H0[entrance["in"]].y;
    var _y2 = entrance.point.H0[entrance["in"] - 1].y; // const manOffsetY = (y2 - y1) * entrance.in

    x = x + roadWidth * 1.5;
    var manOffsetY = (_y2 - _y) * 3;
    y += laneOffset * 2 - roadWidth * 0.5;
    points.push({
      x: x,
      y: y
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y - 2 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y - roadWidth / 8
    });
    points.push({
      x: x + 6 * roadWidth / 8 + manOffsetX,
      y: y - roadWidth / 8 + manOffsetY
    });
    points.push({
      x: x + 6 * roadWidth / 8 + manOffsetX,
      y: y - 2 * roadWidth / 8 + manOffsetY
    });
    points.push({
      x: x + roadWidth + manOffsetX,
      y: y + manOffsetY
    });
    points.push({
      x: x + 6 * roadWidth / 8 + manOffsetX,
      y: y + 2 * roadWidth / 8 + manOffsetY
    });
    points.push({
      x: x + 6 * roadWidth / 8 + manOffsetX,
      y: y + 1 * roadWidth / 8 + manOffsetY
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 1 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 2 * roadWidth / 8
    });
    points.push({
      x: x,
      y: y
    });
  } else if (flowType === 8) {
    // 掉头
    points.push({
      x: x + 7 * roadWidth / 8,
      y: y
    });
    points.push({
      x: x + 7 * roadWidth / 8,
      y: y + 8 * roadWidth / 8
    });
    points.push({
      x: x + 1 * roadWidth / 8,
      y: y + 8 * roadWidth / 8
    });
    points.push({
      x: x + 1 * roadWidth / 8,
      y: y + 4 * roadWidth / 8
    });
    points.push({
      x: x + 0 * roadWidth / 8,
      y: y + 4 * roadWidth / 8
    });
    points.push({
      x: x + 2 * roadWidth / 8,
      y: y + 2 * roadWidth / 8
    });
    points.push({
      x: x + 4 * roadWidth / 8,
      y: y + 4 * roadWidth / 8
    });
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y + 4 * roadWidth / 8
    });
    points.push({
      x: x + 3 * roadWidth / 8,
      y: y + 6 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y + 6 * roadWidth / 8
    });
    points.push({
      x: x + 5 * roadWidth / 8,
      y: y
    });
  } else if (flowType === 11) {
    // 流向人行2
    // const manOffsetX = -roadWidth * (entrance.out - 1)
    var _manOffsetX = -roadWidth;

    roadWidth = roadWidth * 0.5;
    x = x - roadWidth * 1.5;
    var _y3 = entrance.point.H0[entrance["in"]].y;
    var _y4 = entrance.point.H0[entrance["in"] - 1].y; // const manOffsetY = (y1 - y2) * entrance.out

    var _manOffsetY = (_y3 - _y4) * 3;

    y -= roadWidth * 0.2;
    points.push({
      x: x,
      y: y
    });
    points.push({
      x: x - 2 * roadWidth / 8,
      y: y - 2 * roadWidth / 8
    });
    points.push({
      x: x - 2 * roadWidth / 8,
      y: y - roadWidth / 8
    });
    points.push({
      x: x - 6 * roadWidth / 8 + _manOffsetX,
      y: y - roadWidth / 8 + _manOffsetY
    });
    points.push({
      x: x - 6 * roadWidth / 8 + _manOffsetX,
      y: y - 2 * roadWidth / 8 + _manOffsetY
    });
    points.push({
      x: x - roadWidth + _manOffsetX,
      y: y + _manOffsetY
    });
    points.push({
      x: x - 6 * roadWidth / 8 + _manOffsetX,
      y: y + 2 * roadWidth / 8 + _manOffsetY
    });
    points.push({
      x: x - 6 * roadWidth / 8 + _manOffsetX,
      y: y + 1 * roadWidth / 8 + _manOffsetY
    });
    points.push({
      x: x - 2 * roadWidth / 8,
      y: y + 1 * roadWidth / 8
    });
    points.push({
      x: x - 2 * roadWidth / 8,
      y: y + 2 * roadWidth / 8
    });
    points.push({
      x: x,
      y: y
    });
  } else if (flowType === 12) {
    // 非机动车左
    x += 5.5 * roadWidth;
    var nonWidth = roadWidth / 2;
    points.push({
      x: x + 7 * nonWidth / 8,
      y: y
    });
    points.push({
      x: x + 7 * nonWidth / 8,
      y: y + 3 * nonWidth / 2
    });
    points.push({
      x: x + 3 * nonWidth / 8,
      y: y + 3 * nonWidth / 2
    });
    points.push({
      x: x + 3 * nonWidth / 8,
      y: y + 13 * nonWidth / 8
    });
    points.push({
      x: x + 1 * nonWidth / 8,
      y: y + 11 * nonWidth / 8
    });
    points.push({
      x: x + 3 * nonWidth / 8,
      y: y + 9 * nonWidth / 8
    });
    points.push({
      x: x + 3 * nonWidth / 8,
      y: y + 5 * nonWidth / 4
    });
    points.push({
      x: x + 5 * nonWidth / 8,
      y: y + 5 * nonWidth / 4
    });
    points.push({
      x: x + 5 * nonWidth / 8,
      y: y
    });
  } else if (flowType === 13) {
    // 非机动车直
    var _nonWidth = roadWidth / 2;

    x += 5.5 * roadWidth + _nonWidth;
    points.push({
      x: x + 3 * _nonWidth / 8,
      y: y
    });
    points.push({
      x: x + 3 * _nonWidth / 8,
      y: y + 5 * _nonWidth / 4
    });
    points.push({
      x: x + _nonWidth / 4,
      y: y + 5 * _nonWidth / 4
    });
    points.push({
      x: x + _nonWidth / 2,
      y: y + 13 * _nonWidth / 8
    });
    points.push({
      x: x + 3 * _nonWidth / 4,
      y: y + 5 * _nonWidth / 4
    });
    points.push({
      x: x + 5 * _nonWidth / 8,
      y: y + 5 * _nonWidth / 4
    });
    points.push({
      x: x + 5 * _nonWidth / 8,
      y: y
    });
  }

  return points;
}
/**
 * @name wsx
 * @Date 2021-08-24 15:30:00
 * @introduction 根据初始点位获取绘制车道流向的数据
 * @description 详细描述
 * @param {参数类型} originPoint：绘制的左下角点
 * @param {参数类型} baseWidth：基础宽度
 * @param {参数类型} flowType：流向类型
 * @param {参数类型} entrance：进口信息
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */

function getDrawFlowData(originPoint, oriBaseWidth, flowType, entrance) {
  var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'main';
  var baseWidth = type === 'fd' ? oriBaseWidth * 0.8 : oriBaseWidth;
  var points = [];

  var _originPoint = _slicedToArray(originPoint, 2),
      x = _originPoint[0],
      y = _originPoint[1];

  if (flowType === 1) {
    // 流向左
    points.push({
      x: x + 7 * baseWidth / 8,
      y: y
    });
    points.push({
      x: x + 7 * baseWidth / 8,
      y: y + 3 * baseWidth / 2
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 3 * baseWidth / 2
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 13 * baseWidth / 8
    });
    points.push({
      x: x + 1 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 9 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 5 * baseWidth / 4
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 5 * baseWidth / 4
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y
    });
  } else if (flowType === 2) {
    // 流向中
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 5 * baseWidth / 4
    });
    points.push({
      x: x + baseWidth / 4,
      y: y + 5 * baseWidth / 4
    });
    points.push({
      x: x + baseWidth / 2,
      y: y + 13 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 4,
      y: y + 5 * baseWidth / 4
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 5 * baseWidth / 4
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y
    });
  } else if (flowType === 3) {
    // 流向右
    points.push({
      x: x + 1 * baseWidth / 8,
      y: y
    });
    points.push({
      x: x + 1 * baseWidth / 8,
      y: y + 3 * baseWidth / 2
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 3 * baseWidth / 2
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 13 * baseWidth / 8
    });
    points.push({
      x: x + 7 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 9 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 5 * baseWidth / 4
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 5 * baseWidth / 4
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y
    });
  } else if (flowType === 4 || flowType === 10) {
    // 流向人行 或者人行1
    var manOffsetX = baseWidth * (entrance["in"] - 1);
    var y1 = entrance.point.H0[entrance["in"]].y;
    var y2 = entrance.point.H0[entrance["in"] - 1].y;
    var manOffsetY = (y2 - y1) * entrance["in"];
    points.push({
      x: x,
      y: y
    });
    points.push({
      x: x + 2 * baseWidth / 8,
      y: y - 2 * baseWidth / 8
    });
    points.push({
      x: x + 2 * baseWidth / 8,
      y: y - baseWidth / 8
    });
    points.push({
      x: x + 6 * baseWidth / 8 + manOffsetX,
      y: y - baseWidth / 8 + manOffsetY
    });
    points.push({
      x: x + 6 * baseWidth / 8 + manOffsetX,
      y: y - 2 * baseWidth / 8 + manOffsetY
    });
    points.push({
      x: x + baseWidth + manOffsetX,
      y: y + manOffsetY
    });
    points.push({
      x: x + 6 * baseWidth / 8 + manOffsetX,
      y: y + 2 * baseWidth / 8 + manOffsetY
    });
    points.push({
      x: x + 6 * baseWidth / 8 + manOffsetX,
      y: y + 1 * baseWidth / 8 + manOffsetY
    });
    points.push({
      x: x + 2 * baseWidth / 8,
      y: y + 1 * baseWidth / 8
    });
    points.push({
      x: x + 2 * baseWidth / 8,
      y: y + 2 * baseWidth / 8
    });
    points.push({
      x: x,
      y: y
    });
  } else if (flowType === 5) {
    // 流向左直
    points.push({
      x: x + 7 * baseWidth / 8,
      y: y
    });
    points.push({
      x: x + 7 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 8 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 6 * baseWidth / 8,
      y: y + 13 * baseWidth / 8
    });
    points.push({
      x: x + 4 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 9 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 9 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 10 * baseWidth / 8
    });
    points.push({
      x: x + 1 * baseWidth / 8,
      y: y + 8 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 6 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 7 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 7 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y
    });
  } else if (flowType === 6) {
    // 流向直右
    points.push({
      x: x + 1 * baseWidth / 8,
      y: y
    });
    points.push({
      x: x + 1 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 0 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 2 * baseWidth / 8,
      y: y + 13 * baseWidth / 8
    });
    points.push({
      x: x + 4 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 9 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 9 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 10 * baseWidth / 8
    });
    points.push({
      x: x + 7 * baseWidth / 8,
      y: y + 8 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 6 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 7 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 7 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y
    });
  } else if (flowType === 7) {
    // 流向通行
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 7 * baseWidth / 8
    });
    points.push({
      x: x + 6 * baseWidth / 8,
      y: y + 7 * baseWidth / 8
    });
    points.push({
      x: x + 6 * baseWidth / 8,
      y: y + 6 * baseWidth / 8
    });
    points.push({
      x: x + 8 * baseWidth / 8,
      y: y + 8 * baseWidth / 8
    });
    points.push({
      x: x + 6 * baseWidth / 8,
      y: y + 10 * baseWidth / 8
    });
    points.push({
      x: x + 6 * baseWidth / 8,
      y: y + 9 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 9 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 6 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 4 * baseWidth / 8,
      y: y + 13 * baseWidth / 8
    });
    points.push({
      x: x + 2 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 9 * baseWidth / 8
    });
    points.push({
      x: x + 2 * baseWidth / 8,
      y: y + 9 * baseWidth / 8
    });
    points.push({
      x: x + 2 * baseWidth / 8,
      y: y + 10 * baseWidth / 8
    });
    points.push({
      x: x + 0 * baseWidth / 8,
      y: y + 8 * baseWidth / 8
    });
    points.push({
      x: x + 2 * baseWidth / 8,
      y: y + 6 * baseWidth / 8
    });
    points.push({
      x: x + 2 * baseWidth / 8,
      y: y + 7 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 7 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y
    });
  } else if (flowType === 8) {
    // 流向掉头
    points.push({
      x: x + 7 * baseWidth / 8,
      y: y
    });
    points.push({
      x: x + 7 * baseWidth / 8,
      y: y + 13 * baseWidth / 8
    });
    points.push({
      x: x + 1 * baseWidth / 8,
      y: y + 13 * baseWidth / 8
    });
    points.push({
      x: x + 1 * baseWidth / 8,
      y: y + 8 * baseWidth / 8
    });
    points.push({
      x: x + 0 * baseWidth / 8,
      y: y + 8 * baseWidth / 8
    });
    points.push({
      x: x + 2 * baseWidth / 8,
      y: y + 6 * baseWidth / 8
    });
    points.push({
      x: x + 4 * baseWidth / 8,
      y: y + 8 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 8 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y
    });
  } else if (flowType === 9) {
    // 流向左掉头
    points.push({
      x: x + 7 * baseWidth / 8,
      y: y
    });
    points.push({
      x: x + 7 * baseWidth / 8,
      y: y + 12 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 12 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 13 * baseWidth / 8
    });
    points.push({
      x: x + 0 * baseWidth / 8,
      y: y + 11 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 9 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 10 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 10 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 8 * baseWidth / 8
    });
    points.push({
      x: x + 1 * baseWidth / 8,
      y: y + 8 * baseWidth / 8
    });
    points.push({
      x: x + 1 * baseWidth / 8,
      y: y + 4 * baseWidth / 8
    });
    points.push({
      x: x + 0 * baseWidth / 8,
      y: y + 4 * baseWidth / 8
    });
    points.push({
      x: x + 2 * baseWidth / 8,
      y: y + 2 * baseWidth / 8
    });
    points.push({
      x: x + 4 * baseWidth / 8,
      y: y + 4 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 4 * baseWidth / 8
    });
    points.push({
      x: x + 3 * baseWidth / 8,
      y: y + 6 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y + 6 * baseWidth / 8
    });
    points.push({
      x: x + 5 * baseWidth / 8,
      y: y
    });
  } else if (flowType === 10) {// 流向人行1 跟 flowType === 4人行一样画
  } else if (flowType === 11) {
    // 流向人行2
    var _manOffsetX2 = -baseWidth * (entrance.out - 1);

    var _y5 = entrance.point.H0[entrance["in"]].y;
    var _y6 = entrance.point.H0[entrance["in"] - 1].y;

    var _manOffsetY2 = (_y5 - _y6) * entrance.out;

    points.push({
      x: x,
      y: y
    });
    points.push({
      x: x - 2 * baseWidth / 8,
      y: y - 2 * baseWidth / 8
    });
    points.push({
      x: x - 2 * baseWidth / 8,
      y: y - baseWidth / 8
    });
    points.push({
      x: x - 6 * baseWidth / 8 + _manOffsetX2,
      y: y - baseWidth / 8 + _manOffsetY2
    });
    points.push({
      x: x - 6 * baseWidth / 8 + _manOffsetX2,
      y: y - 2 * baseWidth / 8 + _manOffsetY2
    });
    points.push({
      x: x - baseWidth + _manOffsetX2,
      y: y + _manOffsetY2
    });
    points.push({
      x: x - 6 * baseWidth / 8 + _manOffsetX2,
      y: y + 2 * baseWidth / 8 + _manOffsetY2
    });
    points.push({
      x: x - 6 * baseWidth / 8 + _manOffsetX2,
      y: y + 1 * baseWidth / 8 + _manOffsetY2
    });
    points.push({
      x: x - 2 * baseWidth / 8,
      y: y + 1 * baseWidth / 8
    });
    points.push({
      x: x - 2 * baseWidth / 8,
      y: y + 2 * baseWidth / 8
    });
    points.push({
      x: x,
      y: y
    });
  } else if (flowType === 12) {
    // 非机动车左
    var nonWidth = baseWidth * 0.6;
    points.push({
      x: x + 7 * nonWidth / 8,
      y: y
    });
    points.push({
      x: x + 7 * nonWidth / 8,
      y: y + 3 * nonWidth / 2
    });
    points.push({
      x: x + 3 * nonWidth / 8,
      y: y + 3 * nonWidth / 2
    });
    points.push({
      x: x + 3 * nonWidth / 8,
      y: y + 13 * nonWidth / 8
    });
    points.push({
      x: x + 1 * nonWidth / 8,
      y: y + 11 * nonWidth / 8
    });
    points.push({
      x: x + 3 * nonWidth / 8,
      y: y + 9 * nonWidth / 8
    });
    points.push({
      x: x + 3 * nonWidth / 8,
      y: y + 5 * nonWidth / 4
    });
    points.push({
      x: x + 5 * nonWidth / 8,
      y: y + 5 * nonWidth / 4
    });
    points.push({
      x: x + 5 * nonWidth / 8,
      y: y
    });
  } else if (flowType === 13) {
    // 非机动车直
    var _nonWidth2 = baseWidth * 0.6;

    points.push({
      x: x + 3 * _nonWidth2 / 8,
      y: y
    });
    points.push({
      x: x + 3 * _nonWidth2 / 8,
      y: y + 5 * _nonWidth2 / 4
    });
    points.push({
      x: x + _nonWidth2 / 4,
      y: y + 5 * _nonWidth2 / 4
    });
    points.push({
      x: x + _nonWidth2 / 2,
      y: y + 13 * _nonWidth2 / 8
    });
    points.push({
      x: x + 3 * _nonWidth2 / 4,
      y: y + 5 * _nonWidth2 / 4
    });
    points.push({
      x: x + 5 * _nonWidth2 / 8,
      y: y + 5 * _nonWidth2 / 4
    });
    points.push({
      x: x + 5 * _nonWidth2 / 8,
      y: y
    });
  } else if (flowType === 14) {
    // 非机动车左直
    var _nonWidth3 = baseWidth * 0.6;

    points.push({
      x: x + 7 * _nonWidth3 / 8,
      y: y
    });
    points.push({
      x: x + 7 * _nonWidth3 / 8,
      y: y + 11 * _nonWidth3 / 8
    });
    points.push({
      x: x + 8 * _nonWidth3 / 8,
      y: y + 11 * _nonWidth3 / 8
    });
    points.push({
      x: x + 6 * _nonWidth3 / 8,
      y: y + 13 * _nonWidth3 / 8
    });
    points.push({
      x: x + 4 * _nonWidth3 / 8,
      y: y + 11 * _nonWidth3 / 8
    });
    points.push({
      x: x + 5 * _nonWidth3 / 8,
      y: y + 11 * _nonWidth3 / 8
    });
    points.push({
      x: x + 5 * _nonWidth3 / 8,
      y: y + 9 * _nonWidth3 / 8
    });
    points.push({
      x: x + 3 * _nonWidth3 / 8,
      y: y + 9 * _nonWidth3 / 8
    });
    points.push({
      x: x + 3 * _nonWidth3 / 8,
      y: y + 10 * _nonWidth3 / 8
    });
    points.push({
      x: x + 1 * _nonWidth3 / 8,
      y: y + 8 * _nonWidth3 / 8
    });
    points.push({
      x: x + 3 * _nonWidth3 / 8,
      y: y + 6 * _nonWidth3 / 8
    });
    points.push({
      x: x + 3 * _nonWidth3 / 8,
      y: y + 7 * _nonWidth3 / 8
    });
    points.push({
      x: x + 5 * _nonWidth3 / 8,
      y: y + 7 * _nonWidth3 / 8
    });
    points.push({
      x: x + 5 * _nonWidth3 / 8,
      y: y
    });
  }

  return points;
}
/**
 * @name wsx
 * @Date 2021-10-11 15:55:00
 * @introduction 获取绘制红绿灯点位数据
 * @description 详细描述
 * @param {参数类型} point：中心点为
 * @param {参数类型} type：green/red
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */

function getFootLightData(point, type) {
  var roadWidth = CrossConst.roadWidth;
  var x = point.x,
      y = point.y;
  var points = [];

  if (type === 'green') {
    points.push({
      x: x,
      y: y - roadWidth / 4
    });
    points.push({
      x: x - roadWidth * 3 / 64,
      y: y + roadWidth / 4 - roadWidth / 64
    });
    points.push({
      x: x - roadWidth / 32,
      y: y + roadWidth * 6 / 32
    });
    points.push({
      x: x - roadWidth / 64,
      y: y + roadWidth * 6 / 32
    });
    points.push({
      x: x - roadWidth / 64,
      y: y + roadWidth * 11 / 64
    });
    points.push({
      x: x - roadWidth * 3 / 64,
      y: y + roadWidth * 10 / 64
    });
    points.push({
      x: x - roadWidth * 3 / 32,
      y: y + roadWidth * 5 / 64
    });
    points.push({
      x: x - roadWidth * 11 / 64,
      y: y + roadWidth / 32
    });
    points.push({
      x: x - roadWidth * 9 / 64,
      y: y + roadWidth / 64
    });
    points.push({
      x: x - roadWidth / 16,
      y: y + roadWidth / 16
    });
    points.push({
      x: x - roadWidth * 3 / 64,
      y: y + roadWidth * 3 / 32
    });
    points.push({
      x: x - roadWidth / 64,
      y: y
    });
    points.push({
      x: x - roadWidth * 15 / 128,
      y: y - roadWidth * 17 / 128
    });
    points.push({
      x: x - roadWidth * 9 / 64,
      y: y - roadWidth * 17 / 128
    });
    points.push({
      x: x - roadWidth * 5 / 32,
      y: y - roadWidth * 19 / 128
    });
    points.push({
      x: x - roadWidth * 7 / 64,
      y: y - roadWidth * 11 / 64
    });
    points.push({
      x: x + roadWidth / 64,
      y: y - roadWidth * 3 / 64
    });
    points.push({
      x: x + roadWidth * 7 / 64,
      y: y - roadWidth * 9 / 64
    });
    points.push({
      x: x + roadWidth * 3 / 32,
      y: y - roadWidth * 11 / 64
    });
    points.push({
      x: x + roadWidth * 7 / 64,
      y: y - roadWidth * 6 / 32
    });
    points.push({
      x: x + roadWidth * 5 / 32,
      y: y - roadWidth * 5 / 32
    });
    points.push({
      x: x + roadWidth * 7 / 128,
      y: y + roadWidth / 128
    });
    points.push({
      x: x + roadWidth * 7 / 128,
      y: y + roadWidth * 7 / 64
    });
    points.push({
      x: x + roadWidth * 3 / 32,
      y: y + roadWidth * 2 / 32
    });
    points.push({
      x: x + roadWidth * 7 / 64,
      y: y - roadWidth / 64
    });
    points.push({
      x: x + roadWidth * 9 / 64,
      y: y
    });
    points.push({
      x: x + roadWidth * 4 / 32,
      y: y + roadWidth * 3 / 32
    });
    points.push({
      x: x + roadWidth * 2 / 32,
      y: y + roadWidth * 5 / 32
    });
    points.push({
      x: x + roadWidth / 64,
      y: y + roadWidth * 11 / 64
    });
    points.push({
      x: x + roadWidth / 64,
      y: y + roadWidth / 4 - roadWidth / 64
    });
    points.push({
      x: x,
      y: y - roadWidth / 4
    });
  } else if (type === 'red') {
    points.push({
      x: x - roadWidth / 32,
      y: y + roadWidth / 4 - roadWidth / 32
    });
    points.push({
      x: x - roadWidth / 32 + roadWidth / 32 / 4,
      y: y + roadWidth * 7 / 32 - roadWidth * 3 / 64
    });
    points.push({
      x: x - roadWidth * 5 / 64,
      y: y + roadWidth / 4 - roadWidth * 3 / 32
    });
    points.push({
      x: x - roadWidth * 7 / 64,
      y: y + roadWidth / 4 - roadWidth * 3 / 32
    });
    points.push({
      x: x - roadWidth * 3 / 32 - roadWidth / 32 / 4,
      y: y - roadWidth / 64
    });
    points.push({
      x: x - roadWidth * 5 / 64,
      y: y - roadWidth / 32
    });
    points.push({
      x: x - roadWidth * 5 / 64,
      y: y + roadWidth * 2 / 32
    });
    points.push({
      x: x - roadWidth * 2 / 32,
      y: y + roadWidth * 4 / 32
    });
    points.push({
      x: x - roadWidth / 32 - roadWidth / 64,
      y: y + roadWidth / 64
    });
    points.push({
      x: x - roadWidth * 5 / 64 - roadWidth / 64,
      y: y - roadWidth * 6 / 32
    });
    points.push({
      x: x - roadWidth * 7 / 64 + roadWidth * 4 / 64,
      y: y - roadWidth * 7 / 32
    });
    points.push({
      x: x,
      y: y - roadWidth / 32
    });
    points.push({
      x: x + roadWidth * 7 / 64 - roadWidth * 4 / 64,
      y: y - roadWidth * 7 / 32
    });
    points.push({
      x: x + roadWidth * 7 / 64,
      y: y - roadWidth * 7 / 32
    });
    points.push({
      x: x + roadWidth / 32 + roadWidth / 64,
      y: y - roadWidth / 64
    });
    points.push({
      x: x + roadWidth * 2 / 32,
      y: y + roadWidth * 4 / 32
    });
    points.push({
      x: x + roadWidth * 5 / 64,
      y: y + roadWidth * 2 / 32
    });
    points.push({
      x: x + roadWidth * 3 / 32 + roadWidth / 32 / 4,
      y: y - roadWidth / 64
    });
    points.push({
      x: x + roadWidth * 7 / 64,
      y: y + roadWidth / 4 - roadWidth * 11 / 64
    });
    points.push({
      x: x + roadWidth * 5 / 64,
      y: y + roadWidth / 4 - roadWidth * 3 / 32
    });
    points.push({
      x: x + roadWidth / 32 - roadWidth / 32 / 4,
      y: y + roadWidth * 7 / 32 - roadWidth * 3 / 64
    });
    points.push({
      x: x + roadWidth / 32,
      y: y + roadWidth / 4 - roadWidth / 32
    });
  }

  return points;
}
/**
 * @name wsx
 * @Date 2021-10-15 10:46:14
 * @introduction 简述
 * @description 获取红绿灯左 右的绘制数据
 * @param {参数类型} point：中心点为
 * @param {参数类型} type：left/right
 * @return {返回类型说明}
 * @exception [违例类型] [违例类型说明]
 */

function getDirectionLightData(point, type) {
  var roadWidth = CrossConst.roadWidth;
  var x = point.x,
      y = point.y;
  y = y - roadWidth / 3;
  var points = [];

  if (type === 'left') {
    x = x + roadWidth / 3;
    points.push({
      x: x - roadWidth / 3 / 5,
      y: y + roadWidth / 3
    });
    points.push({
      x: x - roadWidth / 3 + roadWidth / 3 / 6 + roadWidth / 3 / 15,
      y: y + roadWidth * 2 / 3 / 5 - roadWidth / 3 / 10
    });
    points.push({
      x: x - roadWidth / 3 - roadWidth / 3 / 5 + roadWidth / 3 / 15,
      y: y + roadWidth * 2 / 3 / 5 - roadWidth / 3 / 10
    });
    points.push({
      x: x - roadWidth * 4 / 3 / 5 + roadWidth / 3 / 15,
      y: y + roadWidth / 3 - roadWidth / 3 / 6
    });
    points.push({
      x: x - roadWidth * 8 / 3 / 5,
      y: y + roadWidth / 3 - roadWidth / 3 / 6
    });
    points.push({
      x: x - roadWidth * 8 / 3 / 5,
      y: y + roadWidth / 3 + roadWidth / 3 / 6
    });
    points.push({
      x: x - roadWidth * 4 / 3 / 5 + roadWidth / 3 / 15,
      y: y + roadWidth / 3 + roadWidth / 3 / 6
    });
    points.push({
      x: x - roadWidth / 3 - roadWidth / 3 / 5 + roadWidth / 3 / 15,
      y: y + roadWidth * 8 / 3 / 5 + roadWidth / 3 / 10
    });
    points.push({
      x: x - roadWidth / 3 + roadWidth / 3 / 6 + roadWidth / 3 / 15,
      y: y + roadWidth * 8 / 3 / 5 + roadWidth / 3 / 10
    });
    points.push({
      x: x - roadWidth / 3 / 5,
      y: y + roadWidth / 3
    });
  } else if (type === 'right') {
    x = x - roadWidth / 3;
    points.push({
      y: y + roadWidth / 3,
      x: x + roadWidth / 3 / 5
    });
    points.push({
      y: y + roadWidth * 2 / 3 / 5 - roadWidth / 3 / 10,
      x: x + roadWidth / 3 - roadWidth / 3 / 6 - roadWidth / 3 / 15
    });
    points.push({
      y: y + roadWidth * 2 / 3 / 5 - roadWidth / 3 / 10,
      x: x + roadWidth / 3 + roadWidth / 3 / 5 - roadWidth / 3 / 15
    });
    points.push({
      y: y + roadWidth / 3 - roadWidth / 3 / 6,
      x: x + roadWidth * 4 / 3 / 5 - roadWidth / 3 / 15
    });
    points.push({
      y: y + roadWidth / 3 - roadWidth / 3 / 6,
      x: x + roadWidth * 8 / 3 / 5
    });
    points.push({
      y: y + roadWidth / 3 + roadWidth / 3 / 6,
      x: x + roadWidth * 8 / 3 / 5
    });
    points.push({
      y: y + roadWidth / 3 + roadWidth / 3 / 6,
      x: x + roadWidth * 4 / 3 / 5 - roadWidth / 3 / 15
    });
    points.push({
      y: y + roadWidth * 8 / 3 / 5 + roadWidth / 3 / 10,
      x: x + roadWidth / 3 + roadWidth / 3 / 5 - roadWidth / 3 / 15
    });
    points.push({
      y: y + roadWidth * 8 / 3 / 5 + roadWidth / 3 / 10,
      x: x + roadWidth / 3 - roadWidth / 3 / 6 - roadWidth / 3 / 15
    });
    points.push({
      y: y + roadWidth / 3,
      x: x + roadWidth / 3 / 5
    });
  }

  return points;
}
/**
 * @name wsx
 * @Date 2021-08-02 13:36:29
 * @introduction 获取车道流向点位
 * @description 详细描述
 * @param {参数类型} laneNumber 进口车道序号1/2/3
 * @param {参数类型} laneFlow 流向1/2/3
 * @param {参数类型} CrossConst 路口模型配置参数
 * @param {参数类型} self 当前进口到信息
 * @return 无返回类型
 * @exception [违例类型] [违例类型说明]
 */

function getWaitAreaPoint(laneNumber, laneFlow, CrossConst, self) {
  var points = []; // 绘制的顶点

  var _self$point$H2 = self.point.H0[self["in"] - laneNumber + 1],
      x1 = _self$point$H2.x,
      y1 = _self$point$H2.y;
  var _self$point$H3 = self.point.H0[self["in"] - laneNumber],
      x2 = _self$point$H3.x,
      y2 = _self$point$H3.y;
  var roadWidth = CrossConst.roadWidth;
  var offset = CrossConst.manRoadLength + CrossConst.manCarInterval; // 左转

  if (laneFlow === 1) {
    points.push({
      x: x1,
      y: y1 + offset
    });
    points.push({
      x: x1 - roadWidth / 16,
      y: y1 + offset + roadWidth * 5 / 8
    });
    points.push({
      x: x1 - roadWidth * 3 / 16,
      y: y1 + offset + roadWidth * 9 / 8
    });
    points.push({
      x: x1 - roadWidth * 6 / 16,
      y: y1 + offset + roadWidth * 13 / 8
    });
    points.push({
      x: x1 - roadWidth * 9 / 16,
      y: y1 + offset + roadWidth * 15 / 8
    });
    points.push({
      x: x1 - roadWidth * 12 / 16,
      y: y1 + offset + roadWidth * 16 / 8
    });
    points.push({
      x: x2 - roadWidth * 15 / 16,
      y: y2 + offset + roadWidth * 18 / 8
    });
    points.push({
      x: x2 - roadWidth * 12 / 16,
      y: y2 + offset + roadWidth * 16 / 8
    });
    points.push({
      x: x2 - roadWidth * 9 / 16,
      y: y2 + offset + roadWidth * 15 / 8
    });
    points.push({
      x: x2 - roadWidth * 6 / 16,
      y: y2 + offset + roadWidth * 13 / 8
    });
    points.push({
      x: x2 - roadWidth * 3 / 16,
      y: y2 + offset + roadWidth * 9 / 8
    });
    points.push({
      x: x2,
      y: y2 + offset
    });
  } else if (laneFlow === 2) {
    // 直行
    points.push({
      x: x1,
      y: y1 + offset
    });
    points.push({
      x: x1,
      y: y1 + offset + 2 * roadWidth
    });
    points.push({
      x: x2,
      y: y2 + offset + 2 * roadWidth
    });
    points.push({
      x: x2,
      y: y2 + offset
    });
  }

  return points;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.map.js
var es_map = __webpack_require__("4ec9");

// CONCATENATED MODULE: ./packages/interModel/src/js/common.ts






/* eslint-disable */
var phaseMap = new Map();
phaseMap.set(1, 'A');
phaseMap.set(2, 'B');
phaseMap.set(3, 'C');
phaseMap.set(4, 'D');
phaseMap.set(5, 'E');
phaseMap.set(6, 'F');
phaseMap.set(7, 'G');
phaseMap.set(8, 'H');
phaseMap.set(9, 'I');
phaseMap.set(10, 'J');
phaseMap.set(11, 'K');
phaseMap.set(12, 'L');
phaseMap.set(13, 'M');
phaseMap.set(14, 'N');
phaseMap.set(15, 'O');
phaseMap.set(16, 'P');
phaseMap.set(17, 'Q');
phaseMap.set(18, 'R');
phaseMap.set(19, 'S');
phaseMap.set(20, 'T');
phaseMap.set(21, 'U');
phaseMap.set(22, 'V');
phaseMap.set(23, 'W');
phaseMap.set(24, 'X');
phaseMap.set(25, 'Y');
phaseMap.set(26, 'Z');
phaseMap.set(27, 'a');
phaseMap.set(28, 'b');
phaseMap.set(29, 'c');
phaseMap.set(30, 'd');
phaseMap.set(31, 'e');
phaseMap.set(32, 'f'); // 流向类型字典

var enterFlowMap = new Map();
enterFlowMap.set(1, "左转");
enterFlowMap.set(2, "直行");
enterFlowMap.set(3, "右转");
enterFlowMap.set(4, "人行");
enterFlowMap.set(5, "左直");
enterFlowMap.set(6, "直右");
enterFlowMap.set(7, "通行");
enterFlowMap.set(8, "掉头");
enterFlowMap.set(9, "左掉头");
enterFlowMap.set(10, "人行1");
enterFlowMap.set(11, "人行2");
enterFlowMap.set(12, "非机动车左");
enterFlowMap.set(13, "非机动车直");
enterFlowMap.set(14, "非机动车左直");
enterFlowMap.set(32, "可变车道");
var enterDirectionMap = new Map();
enterDirectionMap.set(1, "东");
enterDirectionMap.set(2, "南");
enterDirectionMap.set(3, "西");
enterDirectionMap.set(4, "北");
enterDirectionMap.set(5, "方向1");
enterDirectionMap.set(6, "方向2");
enterDirectionMap.set(7, "方向3");
enterDirectionMap.set(8, "方向4");
enterDirectionMap.set(9, "方向5");
enterDirectionMap.set(10, "方向6");

// CONCATENATED MODULE: ./packages/interModel/src/assets/iconBase64.ts
var adjacentIcon = 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAADJmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMwNjcgNzkuMTU3NzQ3LCAyMDE1LzAzLzMwLTIzOjQwOjQyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjFFM0Y5QTYyNTkzMTFFN0EwNkVBMTUzMDlERkJGOUMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjFFM0Y5QTcyNTkzMTFFN0EwNkVBMTUzMDlERkJGOUMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMUUzRjlBNDI1OTMxMUU3QTA2RUExNTMwOURGQkY5QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMUUzRjlBNTI1OTMxMUU3QTA2RUExNTMwOURGQkY5QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PphkrBIAAAQ3SURBVFhH1ZjbaxxlGId3mt3ZndnZzaYm64GI0juhtLUFoQ29KBVRkFKpTTStVqoUWw+FllJavWih9KK3/QMqNkUIVsQ7ofSm1BrUoFRFQYQeTMxGm7iZTbqbPfj7zb4ZsnPIzG6zgT7wZvZ7Z+ebZ97v229movTcnoo0Q+7JjIJNHKEiYogoYhWC+Rqiiigj5hElRDF7Z5r50ISWggxPbiA0BAXCQqE5hAk5ygYSKAWZDmzSCMo8KJTLQ65Sb3rDsvsCIYpkEcshRKz+pF9ffKVwYCc2XYhmhioM7K8L/bP6nnhK4YAMNsl6q20Ych4XLimpkF5vtR3dq2INUvgCx7rdFXLCijXMMVsKO/gr8yznCpCR81ssrhTLuNyTOiw8rz2MlhQsuTAu18++VTTxsCvFlXpJTk7N9e77p/CMNJum7++ZXexDmn5YHkqtVmPpHuNnJrw4NjX71JBZGsb9Qn9ei70+1J38WXaFYuN4/q275eoZTJq/3jDiu891abdllxPeNydYKd5cfYUO35t9GkKf477QiyNWX5mbHx6cLKyT3YFsHMu/QyF8VNjHRbN4mX3W97qwfPiHd3tP3rs3u2a4YAk9ISleSufV+/PDuyfNDZLyZcNY/sDdSvU0PtoXzb7YJ/uWlBOVw/cIPrBaDfxQKqsvT5jXeHWSagBXM7MlHt37Rdb4XlINrB/LHxqvVD+Spou4onx7p7dzlzQXU2SlrBnvZJMaLa1TO07gEouSagAVS10vlodeyZnPScpm7Vj+w6WEYkrkz7cN9X1pOolSiuHJ14+mrj6rduyHGB85XGDip74pli/tyJmbJUWhI7lK9bg0XUDoj4OpxKunMtq4pJwoHD57vvjx0oS5dbRUvgAJz7WM0qjsvluVSt9kpXZY0i4g9PuRdGLgaDoxKSlPKPU4t/WmP6zGSLF80U8M8KnScyoQVYn8djyt9X+Qjv8rKT+qHDquDYF8lTVubI5H98DelJSTpYR+CSlEapQK9dxMvswaI30Qw0EzkgoEQjc/7tQGQgqRMqX41hEaLgF9iehgGDEI/Xg2o/e/m4o388o0Tym+BjXF5R5jdFsiNoCD/5OUCwiNnuvSX3vTUPOSCkuJUlyH+BrUFJ/1JH/arlliripgYfwOQoODSTX0MAuc38VV8qLouQ4Fcak7efMFLdYPMXu+QGjk/Gp9bwtC5D59WCni94sK5NPu5K8vilhCUW580q3v2anHWu3POs5+GcUDFl+nWn7Q451/hx6b2J6ItVR1MIcqWTKLpfiMzBfPwIW0DXAK5RbenBeGLyKJ6XprxZleECK2FMEOlr5Qb60Y/MdHw5A3SBF8gWvPbL3VdjiPXOuYS4rgixzGdlesgPN4rvSeUkQqxoOaXlgDYH9T0r8nvlIEB3Ksc4hWf+ZOrP6kX18ezv/kOYEchdr4P89I5H8Men4/6V5CMgAAAABJRU5ErkJggg==';
var bikeIcon = 'data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJpSURBVFhH7Za9axRBGIdPERv/gDQKQdTC0g9sLCKIYCUIKQRTCcE/QGIlSWslWvqBEEEhIEQLITYRFIKYTgvBIoIoopWIiFisz++ddzdz437MXe4a8YGHmX3nndm53Z256f1nlBRFMYNL+MFVfcabx4vfrIklTxsP3GA93KfirRuz7untkHgAV3HKQ62QN4sxh71JbVMYT2TWm5oh6UvILR57qBXyFkO6Me0x3dh+AGU8wUXFWvFEseqhVsjbCOnFZ1zBX3YVmMTdoWpseLeK7V4OBAPtx4v4gMs9IdqbwFO406422eGliOv1aJpO9QSoT+A0XsPX2MRvfIKX0b4FyvgVdK8GTxT6EDXQI/yqQAN69DH2HQjqp/GdRQPde4In5nLE+6R7wBs3Jm8v8OSUT3gbz+ILBYR3MbhM94KYvD1AkHwHv+EaXsFD3mRwrVdjeKiCkN63lqVWhlS9e+0PAgM2TmAYhlqGbTCvoziP1cc4Uhi47wlQ7EIt0Vv4HmMmrdMoYdBqAqB3nC7DmKz/k2w0IMYTSPmB2ohKlvGcdx8OBjiI9/E71qHHfg+1AvZh3QTnfLjBofPdMEYnVz1/IVz+xbINmJCzCuIP6Sae2AaU1y2yyRw3eeX1kgUvxRnaL3g9Hzo1rntCe/GhNdajb+ZSqBrd54EUOjVOoISmk/jUkvrRBLZ8Hvjo5TMv6ziON/A8ringvMT4DJCeFfJg5vG77ENt9tsC5TGs6UiWdcwbCAbVtlvyE495k9rS88C8N40WBk7/+/VPmMZWPH08cIPqnFBD/nlgK3Ajve/nqKP9eM4D/xi93h907cp7q/WVWwAAAABJRU5ErkJggg==';
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./packages/interModel/src/interModel.vue?vue&type=script&lang=ts



































/* harmony default export */ var interModelvue_type_script_lang_ts = (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["defineComponent"])({
  name: "tf-inter-model",
  props: {
    // 绘制配置参数
    option: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  setup: function setup(props, _ref) {
    var attrs = _ref.attrs,
        slots = _ref.slots,
        emit = _ref.emit,
        expose = _ref.expose;
    var modelStage = null,
        baseLayer = null,
        realLayer = null,
        phaseStage = null,
        phaseLayer = null,
        cross = null,
        clientWidth = 0,
        clientHeight = 0,
        baseLayerWidth = 0,
        phaseWidth = 0,
        hoverBack = null,
        hoverText = null,
        ctrlWay = null,
        nearImg = null,
        bikeImg = null;
    var tfInterModel = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    var scTfInterBox = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    var scTfPhaseBox = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["ref"])();
    var state = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
      phaseWidth: 100,
      drawOption: {
        centerLineMode: false,
        drawPhase: true,
        showRoadAsideLine: true,
        showLaneDashedLine: true,
        showManRoadLine: true,
        showStopLine: true,
        showManRoad: true,
        showLaneFlow: true,
        showRoadName: true,
        laneFlowOffetStopLine: 0,
        routeNameColor: "#000000",
        defaultFlowColor: "#008aaf",
        HighLightFlowColor: "#00ec00",
        saturationFlowColor: "#ffffff",
        phaseBackColor: "#ffffff",
        laneBackColor: "#283349",
        phaseNumColor: "#446a86",
        redColor: "#FF0000",
        greenColor: "#00EC00",
        yellowColor: "#E1E100",
        greyColor: "#cccccc"
      },
      interType: 0
    });
    var methods = {
      /**
       * @name wsx
       * @Date 2021-08-03 09:48:24
       * @introduction 初始化配置参数
       * @description 详细描述
       * @param {参数类型} 参数 参数说明
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      getDrawOption: function getDrawOption() {
        state.drawOption = Object.assign({
          centerLineMode: false,
          drawPhase: true,
          showRoadAsideLine: true,
          showLaneDashedLine: true,
          showManRoadLine: true,
          showStopLine: true,
          showManRoad: true,
          showLaneFlow: true,
          showRoadName: true,
          laneFlowOffetStopLine: 0,
          routeNameColor: "#000000",
          defaultFlowColor: "#008aaf",
          HighLightFlowColor: "#00ec00",
          saturationFlowColor: "#ffffff",
          phaseBackColor: "#ffffff",
          laneBackColor: "#283349",
          phaseNumColor: "#446a86",
          redColor: "#FF0000",
          greenColor: "#00EC00",
          yellowColor: "#E1E100",
          greyColor: "#cccccc"
        }, props.option);
      },
      clearHandler: function clearHandler() {
        modelStage && modelStage.destroy(); // 基础

        baseLayer && baseLayer.destroy(); // 实时信息

        realLayer && realLayer.destroy();
        phaseStage && phaseStage.destroy();
        phaseLayer && phaseLayer.destroy(); // 相邻路口
        // this.adjacentLayrt && this.adjacentLayrt.destroy()

        modelStage = null;
        baseLayer = null;
        realLayer = null;
        phaseStage = null;
        phaseLayer = null; // 路口数据

        cross = null;
      },

      /**
       * @name wsx
       * @Date 2021-07-21 19:37:23
       * @introduction 绘制路口模型
       * @description 详细描述
       * @param {参数类型} 参数 参数说明
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      init: function init(interData) {
        if (modelStage) {
          this.clearHandler();
        }

        state.interType = interData.is_have_son;
        methods.getDrawOption();
        console.log();
        clientWidth = tfInterModel.value.clientWidth;
        clientHeight = tfInterModel.value.clientHeight;

        if (!clientWidth || !clientHeight) {
          return;
        }

        baseLayerWidth = Math.min(clientWidth, clientHeight); // 1、初始化canvas场景：Stage

        modelStage = new lib.Stage({
          // scale: { x: 1, y: -1 },
          // container: this.$el,
          container: scTfInterBox.value,
          width: clientWidth,
          height: clientHeight
        }); // 1.1 保障路口基础图层是正方形，居中

        var width, height;
        var x = 0;
        var y = 0; // eslint-disable-next-line prefer-const

        width = height = baseLayerWidth;

        if (clientWidth > clientHeight) {
          x = (clientWidth - clientHeight) / 2;
        } else {
          y = -(clientWidth - clientHeight) / 2;
        }

        baseLayer = new lib.Layer({
          x: state.drawOption.drawPhase ? x + width / 2 + width / 12 : x + width / 2,
          y: y + height / 2
        });
        baseLayer.height = height;
        baseLayer.width = height;
        modelStage.add(baseLayer);
        methods.drawInter(interData);
      },

      /**
       * @name wsx
       * @Date 2021-07-26 13:21:03
       * @introduction 简述
       * @description 详细描述
       * @param {参数类型} interData 路口模型数据
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      drawInter: function drawInter(interData) {
        var me = this;
        var drawInterData = this.resetInterData(interData);
        cross = new interModel_CrossInfo(drawInterData); // 根据数据绘画

        var roadPolygonShape = new lib.Shape({
          stroke: "#23324b",
          strokeWidth: 5,
          fill: state.drawOption.laneBackColor,
          // a Konva.Canvas renderer is passed into the sceneFunc function
          sceneFunc: function sceneFunc(context, shape) {
            context.beginPath();
            var roadPolygon = cross.entranceArray.map(function (info) {
              return info.polygonData.RoadPolygon;
            }).flat();
            roadPolygon.forEach(function (element, index) {
              if (index === 0) {
                context.moveTo(element[0], -element[1]);
              } else {
                context.lineTo(element[0], -element[1]);
              }
            });
            context.closePath();
            context.fillStrokeShape(shape);
          }
        });
        baseLayer.add(roadPolygonShape); // 过滤匝道

        if (state.interType === 3) {
          drawMethods.drawRoundabout();
        }

        cross.entranceArray.map(function (info, index) {
          // 1、白色划线部分：人行道、车道线、虚线
          var whitePolygonShape = new lib.Shape({
            stroke: "#ffffff",
            fill: "#ffffff",
            strokeWidth: 1,
            opacity: 1,
            sceneFunc: function sceneFunc(context, shape) {
              context.beginPath(); // 人行道

              if (state.drawOption.showManRoadLine) {
                info.lineData.manRoadLine.forEach(function (info) {
                  info.forEach(function (element, index) {
                    if (index === 0) {
                      context.moveTo(element[0], -element[1]);
                    } else {
                      context.lineTo(element[0], -element[1]);
                    }
                  });
                });
              } // 车道边线


              if (state.drawOption.showRoadAsideLine) {
                info.lineData.carRoadLine0.forEach(function (info, i) {
                  info.forEach(function (element, index) {
                    if (index === 0) {
                      context.moveTo(element[0], -element[1]);
                    } else {
                      context.lineTo(element[0], -element[1]);
                    }
                  });
                });
              } // 车道停车线


              if (state.drawOption.showStopLine) {
                info.lineData.carRoadLine1.forEach(function (info, i) {
                  info.forEach(function (element, index) {
                    if (index === 0) {
                      context.moveTo(element[0], -element[1]);
                    } else {
                      context.lineTo(element[0], -element[1]);
                    }
                  });
                });
              } // 虚线


              if (state.drawOption.showLaneDashedLine && state.interType !== 2) {
                info.lineData.carRoadLine2.forEach(function (info) {
                  info.forEach(function (element, index) {
                    if (index === 0) {
                      context.moveTo(element[0], -element[1]);
                    } else {
                      context.lineTo(element[0], -element[1]);
                    }
                  });
                });
              }

              context.closePath();
              context.fillStrokeShape(shape);
            }
          });
          baseLayer.add(whitePolygonShape); // 普通路口-父子路口

          if (state.interType !== 2) {
            // 显示道路虚线
            if (state.drawOption.showLaneDashedLine) {
              // 绘制公交专用车道/潮汐车道
              var yellowPolygonShape = new lib.Shape({
                stroke: state.drawOption.yellowColor,
                fill: state.drawOption.yellowColor,
                strokeWidth: 1,
                opacity: 1,
                sceneFunc: function sceneFunc(context, shape) {
                  context.beginPath();
                  info.lineData.carRoadLine4.forEach(function (info) {
                    info.forEach(function (element, index) {
                      if (index === 0) {
                        context.moveTo(element[0], -element[1]);
                      } else {
                        context.lineTo(element[0], -element[1]);
                      }
                    });
                  });
                  context.closePath();
                  context.fillStrokeShape(shape);
                }
              });
              baseLayer.add(yellowPolygonShape); // 进口绘制辅道分割线

              var option = {
                stroke: state.drawOption.greenColor,
                strokeWidth: 2
              };
              drawMethods.drawLine(info.lineData.fdsplitLine, option); // 待驶区

              info.correctPoint.pointWaitArea.forEach(function (it) {
                var lineData = [];
                it.forEach(function (itt) {
                  lineData.push(itt.x);
                  lineData.push(-itt.y);
                });
                var greenLine = new lib.Line({
                  points: lineData,
                  stroke: "#ffffff",
                  strokeWidth: 1,
                  lineJoin: "round",
                  dash: [3, 5],
                  lineCap: "round"
                });
                baseLayer.add(greenLine);
              });
            } // 绘制人行道


            if (state.drawOption.showManRoad) {
              var manRoadPolygonShape = new lib.Shape({
                fill: "black",
                sceneFunc: function sceneFunc(context, shape) {
                  context.beginPath();
                  var data = [info.polygonData.walkwayPolygonR, cross.entranceArray[index === 0 ? cross.entranceArray.length - 1 : index - 1].polygonData.walkwayPolygonL].flat();
                  data.forEach(function (element, index) {
                    if (index === 0) {
                      context.moveTo(element[0], -element[1]);
                    } else {
                      context.lineTo(element[0], -element[1]);
                    }
                  });
                  context.closePath();
                  context.fillStrokeShape(shape);
                }
              });
              baseLayer.add(manRoadPolygonShape);
            }
          } else {
            // 匝道
            if (state.drawOption.showLaneDashedLine) {
              info.lineData.carRoadLine2.forEach(function (info) {
                var dash = new lib.Line({
                  points: [info[0][0], -info[0][1], info[1][0], -info[1][1]],
                  stroke: "#ffffff",
                  strokeWidth: 1,
                  lineJoin: "round",
                  dash: [8, 8]
                });
                baseLayer.add(dash);
              });
            }
          } // 车道分割线部分：单黄线/双黄线/绿化带


          if (info.road_center_mode === "greenArea") {
            drawMethods.drawPolygon(info.lineData.carRoadLine3[0], {
              fill: state.drawOption.greenColor,
              stroke: state.drawOption.greenColor
            });
          } else {
            drawMethods.drawLine(info.lineData.carRoadLine3, {
              stroke: state.drawOption.yellowColor
            });
          } // 4、车道名称


          if (state.drawOption.showRoadName) {
            var roadText = new lib.Text({
              x: info.correctPoint.roadName.x,
              y: -info.correctPoint.roadName.y,
              text: info.name,
              fontSize: 12,
              fontFamily: "Calibri",
              fill: state.drawOption.routeNameColor,
              rotation: drawMethods.getTextRotationByDegree(info.degree)
            });
            drawMethods.offsetText(roadText, info.degree);
            baseLayer.add(roadText);
          } // 绘制车道流向


          if (state.drawOption.showLaneFlow) {
            // 车道流向
            var laneFlowPolygonShape = new lib.Shape({
              stroke: "white",
              strokeWidth: 1.5,
              sceneFunc: function sceneFunc(context, shape) {
                var data = info.polygonData.laneFlowPolygon;
                data.forEach(function (it, i) {
                  context.beginPath();
                  it.forEach(function (itt, j) {
                    if (j === 0) {
                      context.moveTo(itt[0], -itt[1]);
                    } else {
                      context.lineTo(itt[0], -itt[1]);
                    }
                  });
                  context.closePath();
                  context.fillStrokeShape(shape);
                });
              }
            });
            baseLayer.add(laneFlowPolygonShape);
          }
        });
        cross.entranceArray.map(function (info, index) {
          // 绘制右转渠化
          if (info.canalization && state.interType !== 2) {
            drawMethods.drawCanalization(info.en_id); // 添加非机动车标志

            drawMethods.drawBikeLogo(info);
          }
        });
        baseLayer.draw();
      },
      // 重置路口数据
      resetInterData: function resetInterData(interData) {
        // 判断是否有右转渠化
        var newData = JSON.parse(JSON.stringify(_objectSpread2(_objectSpread2({}, interData), {}, {
          drawOption: state.drawOption,
          baseWidth: baseLayerWidth,
          clientWidth: clientWidth,
          clientHeight: clientHeight,
          expandManRadian: false,
          centerLineMode: state.drawOption.centerLineMode
        })));

        if (state.interType === 3) {
          newData.expandManRadian = true;
        }

        newData.entrances.forEach(function (it, i) {
          if (it.canalization && it.canalization !== 0) {
            newData.expandManRadian = true; // 有单独出口的要添加右出口的出口车道

            if (it.canalization === 2 || it.canalization === 4) {
              var entrance = newData.entrances[i > 0 ? i - 1 : newData.entrances.length - 1];
              entrance.exit_lanes.push({
                id: entrance.exit_lanes.length + 1,
                lane_flow: 2
              });
            }
          }
        });
        return newData;
      }
    }; //---------------------------------------------drawMixins---------------------------------------------

    var drawMethods = {
      initLayer: function initLayer() {
        realLayer && realLayer.destroy();
        var width, height;
        var x = 0;
        var y = 0;
        width = height = baseLayerWidth;

        if (clientWidth > clientHeight) {
          x = (clientWidth - clientHeight) / 2;
        } else {
          y = -(clientWidth - clientHeight) / 2;
        }

        realLayer = new lib.Layer({
          x: state.drawOption.drawPhase ? x + width / 2 + width / 12 : x + width / 2,
          y: y + height / 2
        });
        realLayer.height = height;
        realLayer.width = height;
        modelStage.add(realLayer);
      },
      // 根据方向id获取进口id
      getEnidWithDirection: function getEnidWithDirection(enter_port_direction) {
        var en_id = null;
        var item = cross.entrances.find(function (it) {
          return it.orientation === enter_port_direction;
        });

        if (item) {
          en_id = item.en_id;
        }

        return en_id;
      },
      // 绘制进口流向
      drawRoadFlow: function drawRoadFlow(movements, cb) {
        var _this = this;

        var sortMovement = this.getSortMovement(movements);
        sortMovement.forEach(function (it) {
          // 主道流向
          it.flowList.forEach(function (itt, j) {
            if (itt.if_control) {
              var entrance = cross.entranceArray[it.en_id - 1];

              var startPoint = _this.getStartPoint(itt.movements_type, j, it, "main");

              var flowData = getDrawFlowData(startPoint, CrossConst.roadWidth, itt.movements_type, entrance);

              var rotateFlowData = _this.getRotateData(flowData, entrance.angle);

              _this.drawRoadFlowWithData(rotateFlowData, itt, cb);
            }
          }); // 辅道流向

          it.fdflowList.forEach(function (itt, j) {
            if (itt.if_control) {
              var entrance = cross.entranceArray[it.en_id - 1];

              var startPoint = _this.getStartPoint(itt.movements_type, j, it, "fd");

              var flowData = getDrawFlowData(startPoint, CrossConst.roadWidth, itt.movements_type, entrance, "fd");

              var rotateFlowData = _this.getRotateData(flowData, entrance.angle);

              _this.drawRoadFlowWithData(rotateFlowData, itt, cb);
            }
          });
        });
      },
      // 绘制进口流向
      drawRoadFlowWithData: function drawRoadFlowWithData(rotateFlowData, itt, cb) {
        var roadFlowPolygonShape = new lib.Shape({
          stroke: itt.if_release ? state.drawOption.HighLightFlowColor : state.drawOption.defaultFlowColor,
          fill: itt.if_release ? state.drawOption.HighLightFlowColor : state.drawOption.defaultFlowColor,
          strokeWidth: 1,
          info: itt,
          sceneFunc: function sceneFunc(context, shape) {
            context.beginPath();
            rotateFlowData.forEach(function (itt, j) {
              if (j === 0) {
                context.moveTo(itt.x, -itt.y);
              } else {
                context.lineTo(itt.x, -itt.y);
              }
            });
            context.closePath();
            context.fillStrokeShape(shape);
          }
        });

        if (cb) {
          roadFlowPolygonShape.on("click", function (e) {
            cb(e.target.attrs.info);
          });
        }

        baseLayer.add(roadFlowPolygonShape);
      },
      // 获取旋转后点位
      getRotateData: function getRotateData(flowData, angle) {
        var rotatePoins = [];

        if (Array.isArray(flowData)) {
          rotatePoins = [];
          flowData.forEach(function (info, index) {
            if (Array.isArray(info)) {
              rotatePoins[index] = [];
              info.map(function (it) {
                rotatePoins[index].push(interModel_Util.pointRotateAngel(it, -angle, [0, 0]));
              });
            } else {
              rotatePoins.push(interModel_Util.pointRotateAngel(info, -angle, [0, 0]));
            }
          });
        } else {
          rotatePoins = interModel_Util.pointRotateAngel(flowData, -angle, [0, 0]);
        }

        return rotatePoins;
      },
      // 获取进口主道数量以及辅道数量
      getEntranceLaneNum: function getEntranceLaneNum(enterInfo) {
        var mainIn = enterInfo["in"];
        var fdIn = 0;
        var index = enterInfo.motor_lanes.findIndex(function (it) {
          return it.lane_type === 4;
        });

        if (index > -1) {
          fdIn = mainIn - index - 1;
          mainIn = index + 1;
        }

        return {
          mainIn: mainIn,
          fdIn: fdIn
        };
      },

      /**
       * @name wsx
       * @Date 2021-08-24 17:15:03
       * @introduction 获取绘制路口流向起始点位 左下角点位
       * @description 详细描述
       * @param {参数类型} 参数 en_id 进口id  movementsType 流向类型 j第几个流向  laneFlowTotal车道流向数量 ,type:主道'main'辅道'fd'
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      getStartPoint: function getStartPoint(movementsType, j, it, type) {
        var en_id = it.en_id,
            laneFlowTotal = it.laneFlowTotal,
            fdlaneFlowTotal = it.fdlaneFlowTotal;
        var enterInfo = cross.entranceArray[en_id - 1];

        var _this$getEntranceLane = this.getEntranceLaneNum(enterInfo),
            mainIn = _this$getEntranceLane.mainIn; // 绘制的顶点


        var _enterInfo$point$H0$e = enterInfo.point.H0[enterInfo["in"]],
            x1 = _enterInfo$point$H0$e.x,
            y1 = _enterInfo$point$H0$e.y;
        var y2 = enterInfo.point.H0[enterInfo["in"] - 1].y;
        var roadWidth = CrossConst.roadWidth;
        var laneOffset = y2 - y1;
        var offsetX = 0;
        var offsetY = -2 * roadWidth;
        var startPoint = [0, 0];

        if (movementsType === 4 || movementsType === 10 || movementsType === 11) {
          // 人行流向
          offsetX = 0;
          offsetY += CrossConst.manCarInterval + CrossConst.manRoadLength / 2 + 2 * roadWidth;
        } else if (movementsType === 12 || movementsType === 13 || movementsType === 14) {
          if (fdlaneFlowTotal) {
            // 存在辅道流向
            if (enterInfo["in"] <= laneFlowTotal + fdlaneFlowTotal) {
              offsetX = (laneFlowTotal + fdlaneFlowTotal) * roadWidth + roadWidth * (j - laneFlowTotal) * 3 / 4;
              offsetY += laneOffset * (laneFlowTotal + fdlaneFlowTotal) + laneOffset * (j - laneFlowTotal) * 3 / 4;
            } else {
              offsetX = enterInfo["in"] * roadWidth + roadWidth * (j - laneFlowTotal) * 3 / 4;
              offsetY += laneOffset * enterInfo["in"] + laneOffset * (j - laneFlowTotal) * 3 / 4;
            }
          } else {
            // 不存在辅道流向
            if (enterInfo["in"] <= laneFlowTotal) {
              offsetX = laneFlowTotal * roadWidth + roadWidth * (j - laneFlowTotal) * 3 / 4;
              offsetY += laneOffset * laneFlowTotal + laneOffset * (j - laneFlowTotal) * 3 / 4;
            } else {
              offsetX = enterInfo["in"] * roadWidth + roadWidth * (j - laneFlowTotal) * 3 / 4;
              offsetY += laneOffset * enterInfo["in"] + laneOffset * (j - laneFlowTotal) * 3 / 4;
            }
          }
        } else {
          if (fdlaneFlowTotal) {
            // 存在辅道流向
            if (enterInfo["in"] <= laneFlowTotal + fdlaneFlowTotal) {
              if (type === "main") {
                offsetX += CrossConst.roadWidth * j;
                offsetY += laneOffset * j;
              } else if (type === "fd") {
                offsetX += CrossConst.roadWidth * (j + laneFlowTotal);
                offsetY += laneOffset * (j + laneFlowTotal);
              }
            } else {
              // 只有一个流向的话，根据流向确定位置
              if (type === "main") {
                if (laneFlowTotal === 1) {
                  // 流向直
                  if (movementsType === 2 || movementsType === 7) {
                    offsetX += CrossConst.roadWidth * (mainIn - 1) / 2;
                    offsetY += laneOffset * (CrossConst.roadWidth * (mainIn - 1) / 2);
                  } // 流向带右边


                  if (movementsType === 3 || movementsType === 6) {
                    offsetX += CrossConst.roadWidth * (mainIn - 1);
                    offsetY += laneOffset * (mainIn - 1);
                  }
                }

                if (laneFlowTotal > 1) {
                  offsetX += CrossConst.roadWidth * (enterInfo["in"] - 1) / (laneFlowTotal - 1) * j;
                  offsetY += laneOffset * (enterInfo["in"] - 1) / (laneFlowTotal - 1) * j;
                }
              } else if (type === "fd") {
                offsetX += CrossConst.roadWidth * (enterInfo["in"] - 1) / (laneFlowTotal + fdlaneFlowTotal - 1) * (j + laneFlowTotal);
                offsetY += laneOffset * (enterInfo["in"] - 1) / (laneFlowTotal + fdlaneFlowTotal - 1) * (j + laneFlowTotal);
              }
            }
          } else {
            // 不存在辅道流向
            if (enterInfo["in"] <= laneFlowTotal) {
              offsetX += CrossConst.roadWidth * j;
              offsetY += laneOffset * j;
            } else {
              // 只有一个流向的话，根据流向确定位置
              if (laneFlowTotal === 1) {
                // 流向直
                if (movementsType === 2 || movementsType === 7) {
                  offsetX += CrossConst.roadWidth * (enterInfo["in"] - 1) / 2;
                  offsetY += laneOffset * (CrossConst.roadWidth * (enterInfo["in"] - 1) / 2);
                } // 流向带右边


                if (movementsType === 3 || movementsType === 6) {
                  offsetX += CrossConst.roadWidth * (enterInfo["in"] - 1);
                  offsetY += laneOffset * (enterInfo["in"] - 1);
                }
              }

              if (laneFlowTotal > 1) {
                offsetX += CrossConst.roadWidth * (enterInfo["in"] - 1) / (laneFlowTotal - 1) * j;
                offsetY += laneOffset * (enterInfo["in"] - 1) / (laneFlowTotal - 1) * j;
              }
            }
          }
        }

        startPoint = [x1 + offsetX, y1 + offsetY];
        return startPoint;
      },
      // 流向按照进口-左至右绘制顺序排序 enter_port_direction
      getSortMovement: function getSortMovement(movements) {
        var sortMovement = [];
        cross.entranceArray.forEach(function (it, i) {
          var enterMove = movements.filter(function (itt) {
            var en_id = drawMethods.getEnidWithDirection(itt.enter_port_direction);
            return en_id === it.en_id && itt.if_control;
          }); // 流向带左

          var leftArray = enterMove.filter(function (itt) {
            return (itt.movements_type === 1 || itt.movements_type === 5 || itt.movements_type === 8 || itt.movements_type === 9) && !itt.fd_flow;
          }); // 辅道流向左边

          var leftFdArray = enterMove.filter(function (itt) {
            return (itt.movements_type === 1 || itt.movements_type === 5 || itt.movements_type === 8 || itt.movements_type === 9) && itt.fd_flow;
          }); // 流向直

          var centerArray = enterMove.filter(function (itt) {
            return (itt.movements_type === 2 || itt.movements_type === 7) && !itt.fd_flow;
          }); // 辅道流向直

          var centerFdArray = enterMove.filter(function (itt) {
            return (itt.movements_type === 2 || itt.movements_type === 7) && itt.fd_flow;
          }); // 流向带右

          var rightArray = enterMove.filter(function (itt) {
            return (itt.movements_type === 3 || itt.movements_type === 6) && !itt.fd_flow;
          }); // 辅道流向带右

          var rightFdArray = enterMove.filter(function (itt) {
            return (itt.movements_type === 3 || itt.movements_type === 6) && itt.fd_flow;
          }); // 流向人行

          var manArray = enterMove.filter(function (itt) {
            return (itt.movements_type === 4 || itt.movements_type === 10 || itt.movements_type === 11) && !itt.fd_flow;
          }); // 非机动车左  直  左直

          var nonArray = enterMove.filter(function (itt) {
            return (itt.movements_type === 12 || itt.movements_type === 13 || itt.movements_type === 14) && !itt.fd_flow;
          });
          sortMovement.push({
            en_id: it.en_id,
            laneFlowTotal: leftArray.length + centerArray.length + rightArray.length,
            flowList: [].concat(_toConsumableArray(leftArray), _toConsumableArray(centerArray), _toConsumableArray(rightArray), _toConsumableArray(nonArray), _toConsumableArray(manArray)),
            fdlaneFlowTotal: leftFdArray.length + centerFdArray.length + rightFdArray.length,
            fdflowList: [].concat(_toConsumableArray(leftFdArray), _toConsumableArray(centerFdArray), _toConsumableArray(rightFdArray))
          });
        });
        return sortMovement;
      },
      // 绘制流向饱和度
      drawFlowSaturation: function drawFlowSaturation(flowSaturation) {
        var _this2 = this;

        flowSaturation.forEach(function (it, i) {
          var enterInfo = cross.entranceArray[it.en_id - 1];
          var flowData = enterInfo.polygonData.roadFlowPolygon[it.movements_type - 1]; // 绘制饱和度流向

          var roadFlowPolygonShape = new lib.Shape({
            stroke: state.drawOption.saturationFlowColor,
            fill: state.drawOption.saturationFlowColor,
            strokeWidth: 1,
            info: it,
            sceneFunc: function sceneFunc(context, shape) {
              context.beginPath();
              flowData.forEach(function (itt, j) {
                if (j === 0) {
                  context.moveTo(itt[0], -itt[1]);
                } else {
                  context.lineTo(itt[0], -itt[1]);
                }
              });
              context.closePath();
              context.fillStrokeShape(shape);
            }
          });
          baseLayer.add(roadFlowPolygonShape);
          var _enterInfo$correctPoi = enterInfo.correctPoint.pointRoadFlowText[it.movements_type - 1],
              x = _enterInfo$correctPoi.x,
              y = _enterInfo$correctPoi.y; // 绘制饱和度

          var saturationText = new lib.Text({
            x: x,
            y: -y,
            text: it.data,
            fontSize: 12,
            fontFamily: "Calibri",
            fill: state.drawOption.saturationFlowColor,
            rotation: _this2.getTextRotationByDegree(enterInfo.degree)
          });

          _this2.offsetText(saturationText, enterInfo.degree);

          baseLayer.add(saturationText);
        });
      },
      // 绘制车道或者进出口背景
      fillEntranceOrLaneBack: function fillEntranceOrLaneBack(fillData) {
        var _this3 = this;

        fillData.forEach(function (it) {
          var enterInfo = cross.entranceArray[it.en_id - 1];
          var inNum = enterInfo["in"];
          var outNum = enterInfo.out;
          var index1 = 0;
          var index2 = 0;
          var polygonData = []; // 1进口填充

          if (it.fillType === 1) {
            // 进口方向
            if (it.fillDirection === 1) {
              index1 = 0;
              index2 = inNum;
            } else if (it.fillDirection === 2) {
              // 出口方向
              index1 = inNum + _this3.getOutLineOffset(enterInfo.road_center_mode);
              index2 = inNum + outNum + _this3.getOutLineOffset(enterInfo.road_center_mode);
            }
          } else if (it.fillType === 2) {
            // 2车道填充
            if (it.fillDirection === 1) {
              index1 = inNum - it.laneNumber + 1;
              index2 = inNum - it.laneNumber;
            } else if (it.fillDirection === 2) {
              // 出口方向
              index1 = inNum + it.laneNumber + _this3.getOutLineOffset(enterInfo.road_center_mode);
              index2 = inNum + it.laneNumber + _this3.getOutLineOffset(enterInfo.road_center_mode) - 1;
            }
          }

          var H0 = enterInfo.point.H0;
          var H2 = enterInfo.point.H2;
          var point1 = interModel_Util.pointRotateAngel(H0[index1], -enterInfo.angle);
          var point2 = interModel_Util.pointRotateAngel(H0[index2], -enterInfo.angle);
          var point3 = interModel_Util.pointRotateAngel(H2[index2], -enterInfo.angle);
          var point4 = interModel_Util.pointRotateAngel(H2[index1], -enterInfo.angle);

          if (it.length) {
            point3 = interModel_Util.pointRotateAngel({
              x: H0[index2].x,
              y: H0[index2].y - CrossConst.roadWidth * it.length
            }, -enterInfo.angle);
            point4 = interModel_Util.pointRotateAngel({
              x: H0[index1].x,
              y: H0[index1].y - CrossConst.roadWidth * it.length
            }, -enterInfo.angle);
          }

          polygonData = [[point1.x, point1.y], [point2.x, point2.y], [point3.x, point3.y], [point4.x, point4.y]];

          _this3.drawPolygon(polygonData, it.style);
        });
      },
      getOutLineOffset: function getOutLineOffset(roadCenterMode) {
        var offset = 0;

        if (roadCenterMode && roadCenterMode !== "singleYellowLine") {
          offset = 1;
        }

        return offset;
      },
      // 绘制进口高亮
      drawEntranceHighLight: function drawEntranceHighLight(lightData) {
        var _this4 = this;

        lightData.forEach(function (it) {
          var enterInfo = cross.entranceArray[it.en_id - 1];
          var inNum = enterInfo["in"];
          var lineDatas = [];
          var H0 = enterInfo.point.H0;
          var H2 = enterInfo.point.H2;
          var point1 = interModel_Util.pointRotateAngel(H0[0], -enterInfo.angle);
          var point2 = interModel_Util.pointRotateAngel(H0[inNum], -enterInfo.angle);
          var point3 = interModel_Util.pointRotateAngel(H2[inNum], -enterInfo.angle);
          var point4 = interModel_Util.pointRotateAngel(H2[0], -enterInfo.angle);

          if (it.length) {
            point3 = interModel_Util.pointRotateAngel({
              x: H0[inNum].x,
              y: H0[inNum].y - CrossConst.roadWidth * it.length
            }, -enterInfo.angle);
            point4 = interModel_Util.pointRotateAngel({
              x: H0[0].x,
              y: H0[0].y - CrossConst.roadWidth * it.length
            }, -enterInfo.angle);
          }

          lineDatas = [[[point1.x, point1.y], [point2.x, point2.y]], [[point2.x, point2.y], [point3.x, point3.y]], [[point1.x, point1.y], [point4.x, point4.y]]];

          _this4.drawLine(lineDatas, it.style);
        });
      },
      // 绘制相邻关系
      drawAdjacentInfo: function drawAdjacentInfo(adjacentList, cb) {
        var _this5 = this;

        var me = this;
        var adjacentMap = {};
        adjacentList.forEach(function (it) {
          adjacentMap[it.entrance_id] = it;
        });
        cross.entranceArray.forEach(function (info) {
          var adjacentInfo = adjacentMap[info.en_id];

          if (adjacentInfo) {
            var point = _this5.getNearPoint(info);

            var img = new lib.Image({
              image: nearImg,
              width: CrossConst.roadWidth * 1.5,
              height: CrossConst.roadWidth * 1.5,
              x: point.x,
              y: -point.y,
              info: adjacentInfo,
              rotation: _this5.getImgRotationByDegree(info.degree, 2)
            });

            _this5.offsetImg(img, info.degree, 2);

            if (cb) {
              img.on("click", function (e) {
                var info = e.target.attrs.info;
                cb(info);
              });
              img.on("mouseover", function (e) {
                var _e$target$attrs = e.target.attrs,
                    x = _e$target$attrs.x,
                    y = _e$target$attrs.y;
                me.drawHoverText(x, y, adjacentInfo.hoverText);
              });
              img.on("mouseout", function (e) {
                hoverText.remove();
                hoverBack.remove();
              });
            }

            baseLayer.add(img);
          }
        });
      },
      // 获取绘制相邻路口箭头的点位
      getNearPoint: function getNearPoint(curEntrance) {
        var degree = curEntrance.degree;
        var width = (state.drawOption.drawPhase ? clientWidth * 5 / 12 : clientWidth / 2) - 2 * CrossConst.roadWidth;
        var height = clientHeight / 2 - 2 * CrossConst.roadWidth;
        var x = 0;
        var y = 0;

        if (degree >= 0 && degree < 45) {
          x = width;
          y = -width * Math.tan(interModel_Util.toRadian(degree));
        } else if (degree >= 45 && degree < 90) {
          var calDegree = 90 - degree;
          x = height * Math.tan(interModel_Util.toRadian(calDegree));
          y = -height;
        } else if (degree >= 90 && degree < 135) {
          var _calDegree = degree - 90;

          x = -height * Math.tan(interModel_Util.toRadian(_calDegree));
          y = -height;
        } else if (degree >= 135 && degree < 180) {
          var _calDegree2 = 180 - degree;

          x = -width;
          y = -width * Math.tan(interModel_Util.toRadian(_calDegree2));
        } else if (degree >= 180 && degree < 225) {
          var _calDegree3 = degree - 180;

          x = -width;
          y = width * Math.tan(interModel_Util.toRadian(_calDegree3));
        } else if (degree >= 225 && degree < 270) {
          var _calDegree4 = 270 - degree;

          x = -height * Math.tan(interModel_Util.toRadian(_calDegree4));
          y = height;
        } else if (degree >= 270 && degree < 315) {
          var _calDegree5 = degree - 270;

          x = height * Math.tan(interModel_Util.toRadian(_calDegree5));
          y = height;
        } else if (degree >= 315 && degree <= 360) {
          var _calDegree6 = 360 - degree;

          x = width;
          y = width * Math.tan(interModel_Util.toRadian(_calDegree6));
        }

        return {
          x: x,
          y: y
        };
      },
      // 绘制非机动车标志
      drawBikeLogo: function drawBikeLogo(info) {
        var _this6 = this;

        var imageList = [info.correctPoint.roadPole, info.correctPoint.roadPoleL];
        imageList.forEach(function (it, i) {
          var x = it.x,
              y = it.y;
          var img = new lib.Image({
            image: bikeImg,
            width: 0.5 * CrossConst.roadWidth,
            height: 0.5 * CrossConst.roadWidth,
            x: x,
            y: -y,
            rotation: _this6.getImgRotationByDegree(info.degree, 2)
          });

          _this6.offsetImg(img, info.degree, 2);

          baseLayer.add(img);
        });
      },
      // 绘制车道图标
      drawLaneImg: function drawLaneImg(laneImgs, cb) {
        var _this7 = this;

        this.loadImg(laneImgs, function (res) {
          laneImgs.forEach(function (it, i) {
            var enterInfo = cross.entranceArray[it.en_id - 1];

            if (enterInfo) {
              var _this7$getStopLinePoi = _this7.getStopLinePointByLaneNum(it, enterInfo),
                  x = _this7$getStopLinePoi.x,
                  y = _this7$getStopLinePoi.y;

              var img = new lib.Image({
                image: res[i],
                width: 1 * CrossConst.roadWidth,
                height: 1 * CrossConst.roadWidth,
                x: x,
                y: -y,
                info: it,
                rotation: _this7.getImgRotationByDegree(enterInfo.degree, it.rotateType)
              });

              _this7.offsetImg(img, enterInfo.degree, it.rotateType);

              if (cb) {
                img.on("click", function (e) {
                  var info = e.target.attrs.info;
                  cb(info);
                });
              }

              baseLayer.add(img);
            }
          });
        });
      },
      // 提前加载图片
      loadImg: function loadImg(imageList, cb) {
        var loadImgs = [];
        imageList.forEach(function (it) {
          var imgload = new window.Promise(function (resolve, reject) {
            var image = new Image();

            image.onload = function () {
              resolve(image);
            };

            image.src = it.imgUrl;
          });
          loadImgs.push(imgload);
        });
        window.Promise.all(loadImgs).then(function (res) {
          if (cb) {
            cb(res);
          }
        })["catch"](function (err) {
          console.log(err);
        });
      },

      /**
       * @name wsx
       * @Date 2021-08-04 11:05:28
       * @introduction 获取根据车道id获取车道中心跟停车线偏移一定距离的旋转后的点位
       * @description 详细描述
       * @param {参数类型} laneNumber：车道号
       * @param {参数类型} inNumber：进口车道数
       * @param {参数类型} offetStopLine：偏移量 车道宽度的倍数
       * @param {参数类型} H0：停车线跟车道的交点数组
       * @param {参数类型} angle：车道角度
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      getStopLinePointByLaneNum: function getStopLinePointByLaneNum(it, enterInfo) {
        var index = enterInfo["in"] - it.laneNumber + 1;

        if (it.laneDirection === 2) {
          index = enterInfo["in"] + it.laneNumber + this.getOutLineOffset(enterInfo.road_center_mode);
        }

        var _enterInfo$point$H0$i = enterInfo.point.H0[index],
            x = _enterInfo$point$H0$i.x,
            y = _enterInfo$point$H0$i.y;
        var orgPoint = {
          x: x + CrossConst.roadWidth / 2,
          y: y - (it.offetStopLine + 0.5) * CrossConst.roadWidth
        };
        var armPoint = interModel_Util.pointRotateAngel(orgPoint, -enterInfo.angle);
        return armPoint;
      },
      // 获取图片旋转角度
      getImgRotationByDegree: function getImgRotationByDegree(degree) {
        var rotateType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

        if (rotateType === 2) {
          return degree - 90;
        }

        var rotation = degree;

        if (degree > 0 && degree <= 90) {
          rotation = degree - 90;
        } else if (degree > 90 && degree <= 180) {
          rotation = degree - 180;
        } else if (degree > 180 && degree <= 270) {
          rotation = degree - 270;
        }

        return rotation;
      },
      // 添加图片偏移量
      offsetImg: function offsetImg(element, degree) {
        var rotateType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

        if (rotateType === 1) {
          if (degree > 0 && degree <= 90) {
            element.offsetX(element.width() / 2);
          } else if (degree > 90 && degree <= 180) {
            element.offsetX(element.width());
            element.offsetY(element.height() / 2);
          } else if (degree > 180 && degree <= 270) {
            element.offsetX(element.width() / 2);
            element.offsetY(element.height());
          } else {
            element.offsetY(element.height() / 2);
          }
        } else if (rotateType === 2) {
          if (degree >= 0 && degree <= 90) {
            element.offsetX(element.width() / 2);
          } else if (degree > 90 && degree <= 180) {
            element.offsetX(element.width() / 2);
          } else if (degree > 180 && degree <= 270) {
            element.offsetX(element.width() / 2);
          } else {
            element.offsetX(element.width() / 2);
          }
        }
      },
      // 获取文字旋转角度
      getTextRotationByDegree: function getTextRotationByDegree(degree) {
        var rotation = degree;

        if (degree > 90 && degree < 270) {
          rotation = degree + 180;
        }

        return rotation;
      },
      // 添加字偏移量
      offsetText: function offsetText(element, degree) {
        if (degree > 90 && degree < 270) {
          element.offsetX(element.width());
          element.offsetY(element.height() / 2);
        } else {
          element.offsetY(element.height() / 2);
        }
      },
      // 绘制可变车道-获取数据
      drawVariableLane: function drawVariableLane(variableLaneData) {
        var _this8 = this;

        var click = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var cb = arguments.length > 2 ? arguments[2] : undefined;
        variableLaneData.forEach(function (it, i) {
          var enterInfo = cross.entranceArray[it.entrance_id - 1];

          if (enterInfo) {
            var flowData = getLaneFlowPoint(it.lane_id, it.status, CrossConst, enterInfo, null);

            var rotateFlowData = _this8.getRotateData(flowData, enterInfo.angle);

            _this8.drawVariableFlow(rotateFlowData);

            if (click) {
              var clickPoint = getLaneFlowPoint(it.lane_id, "variableClick", CrossConst, enterInfo, null);

              var _rotateFlowData = _this8.getRotateData(clickPoint, enterInfo.angle);

              _this8.drawVariableClickPoint(_rotateFlowData[0], it, cb);
            }
          }
        });
      },
      // 绘制可变车道 - 绘制
      drawVariableFlow: function drawVariableFlow(rotateFlowData) {
        // 车道流向
        var laneFlowPolygonShape = new lib.Shape({
          stroke: state.drawOption.yellowColor,
          strokeWidth: 2,
          sceneFunc: function sceneFunc(context, shape) {
            context.beginPath();
            rotateFlowData.forEach(function (it, i) {
              if (i === 0) {
                context.moveTo(it.x, -it.y);
              } else {
                context.lineTo(it.x, -it.y);
              }
            });
            context.closePath();
            context.fillStrokeShape(shape);
          }
        });
        baseLayer.add(laneFlowPolygonShape);
      },
      // 绘制可变车道可以点击的点
      drawVariableClickPoint: function drawVariableClickPoint(point, info, cb) {
        var clickPoint = new lib.Circle({
          x: point.x,
          y: -point.y,
          radius: CrossConst.roadWidth / 4,
          info: info,
          fill: state.drawOption.yellowColor
        });
        baseLayer.add(clickPoint);

        if (cb) {
          clickPoint.on("click", function (e) {
            var info = e.target.attrs.info;
            cb(info);
          });
        }
      },
      // 绘制右转渠化 en_id 进口车道id 根据渠化类型，展示不通渠化
      drawCanalization: function drawCanalization(en_id) {
        var index = en_id - 1;
        var len = cross.entranceArray.length;
        var curEntrance = cross.entranceArray[index];
        var rightEntrance = cross.entranceArray[index > 0 ? index - 1 : len - 1];
        var topPoint = curEntrance.point.AR;

        if (curEntrance.canalization === 1 || curEntrance.canalization === 2) {
          var bottomPoint = {
            x: curEntrance.point.BRO.x,
            y: curEntrance.point.BRO.y + CrossConst.manCarInterval + CrossConst.manRoadLength + CrossConst.roadWidth
          };
          var rightPoint = {
            x: rightEntrance.point.BLO.x,
            y: rightEntrance.point.BLO.y + CrossConst.manCarInterval + CrossConst.manRoadLength + CrossConst.roadWidth
          };

          if (curEntrance.canalization === 2) {
            topPoint.y = topPoint.y + CrossConst.roadWidth;
            rightPoint.x = rightPoint.x + CrossConst.roadWidth;
            rightPoint.y = rightPoint.y - CrossConst.roadWidth;
          }

          var _Util$pointRotateAnge = interModel_Util.pointRotateAngel(topPoint, -curEntrance.angle),
              x = _Util$pointRotateAnge.x,
              y = _Util$pointRotateAnge.y;

          var _Util$pointRotateAnge2 = interModel_Util.pointRotateAngel(bottomPoint, -curEntrance.angle),
              x1 = _Util$pointRotateAnge2.x,
              y1 = _Util$pointRotateAnge2.y;

          var _Util$pointRotateAnge3 = interModel_Util.pointRotateAngel(rightPoint, -rightEntrance.angle),
              x3 = _Util$pointRotateAnge3.x,
              y3 = _Util$pointRotateAnge3.y;

          var canalizationPoints = [[x, y]];
          var circlePoint = interModel_Util.getArcPoint([x1, y1], [x3, y3]);
          canalizationPoints = canalizationPoints.concat(circlePoint);
          canalizationPoints.push([x, y]);
          var quhuaArea = [];
          quhuaArea.push(canalizationPoints);
          var lineNum = 4;
          var stepX3 = Math.floor(x3 - x) / lineNum;
          var stepY3 = Math.floor(y3 - y) / lineNum;
          var stepX1 = Math.floor(x1 - x) / lineNum;
          var stepY1 = Math.floor(y1 - y) / lineNum;

          for (var i = 1; i <= lineNum / 2; i++) {
            var rowLine = [[x + i * stepX3, y + i * stepY3], [x + i * stepX1, y + i * stepY1]];
            quhuaArea.push(rowLine);
          }

          this.drawLine(quhuaArea);
        } else if (curEntrance.canalization === 3 || curEntrance.canalization === 4) {
          var offsetDistanceY = [CrossConst.manCarInterval + CrossConst.manRoadLength + 1.5 * CrossConst.roadWidth, CrossConst.manCarInterval, -1 * CrossConst.roadWidth, -3 * CrossConst.roadWidth, -3 * CrossConst.roadWidth];
          var offsetDistanceX = [0, 0, 0, 0, CrossConst.walkwayWidth];
          var _curEntrance$point$BR = curEntrance.point.BR,
              cx = _curEntrance$point$BR.x,
              cy = _curEntrance$point$BR.y;
          var colPoints = offsetDistanceY.map(function (it, i) {
            var itX = offsetDistanceX[i];

            var _Util$pointRotateAnge4 = interModel_Util.pointRotateAngel({
              x: cx - 1 + itX,
              y: cy + it
            }, -curEntrance.angle),
                x = _Util$pointRotateAnge4.x,
                y = _Util$pointRotateAnge4.y;

            return [x, y];
          });
          var _rightEntrance$point$ = rightEntrance.point.BL,
              rx = _rightEntrance$point$.x,
              ry = _rightEntrance$point$.y; // 固体岛有专门出口

          if (curEntrance.canalization === 4) {
            rx += CrossConst.roadWidth;
            offsetDistanceY = [CrossConst.manCarInterval + CrossConst.manRoadLength + 0.5 * CrossConst.roadWidth, CrossConst.manCarInterval, -1 * CrossConst.roadWidth, -1 * CrossConst.roadWidth, -1 * CrossConst.roadWidth];
            offsetDistanceX = [0, 0, 0, CrossConst.roadWidth, CrossConst.roadWidth + CrossConst.walkwayWidth];
          }

          var rowPoints = offsetDistanceY.map(function (it, i) {
            var itX = offsetDistanceX[i];

            var _Util$pointRotateAnge5 = interModel_Util.pointRotateAngel({
              x: rx + 1 - itX,
              y: ry + it
            }, -rightEntrance.angle),
                x = _Util$pointRotateAnge5.x,
                y = _Util$pointRotateAnge5.y;

            return [x, y];
          });
          this.getGtdPolygonData(rowPoints, colPoints);
          this.getGtdLineData(rowPoints, colPoints);
        }
      },
      // 获取绘制固体岛的数据
      getGtdLineData: function getGtdLineData(rowPoints, colPoints) {
        var quhuaArea = [];
        var rangeArea = [];
        var circlePoint0 = interModel_Util.getArcPoint(colPoints[0], rowPoints[0]);
        var circlePoint1 = interModel_Util.getArcPoint(colPoints[2], rowPoints[2]);
        rangeArea = rangeArea.concat(circlePoint1);

        for (var i = circlePoint0.length - 1; i > 0; i--) {
          rangeArea.push(circlePoint0[i]);
        }

        rangeArea = rangeArea.concat(circlePoint1);
        quhuaArea.push(rangeArea);
        var circlePoint2 = interModel_Util.getArcPoint(colPoints[3], rowPoints[3]);
        quhuaArea.push(circlePoint2); // 绘制渠化白色线条

        this.drawLine(quhuaArea);
      },
      // 获取绘制固体岛区域的数据
      getGtdPolygonData: function getGtdPolygonData(rowPoints, colPoints) {
        var circlePoint0 = interModel_Util.getArcPoint(colPoints[0], rowPoints[0]);
        var circlePoint1 = interModel_Util.getArcPoint(colPoints[2], rowPoints[2]);
        var circlePoint2 = interModel_Util.getArcPoint(colPoints[3], rowPoints[3]);
        var circlePoint3 = interModel_Util.getArcPoint(colPoints[4], rowPoints[4]); // 固体岛绿色区域

        var gtdGreenPolygon = [];

        for (var i = circlePoint0.length - 1; i > 0; i--) {
          gtdGreenPolygon.push(circlePoint0[i]);
        }

        gtdGreenPolygon = gtdGreenPolygon.concat(circlePoint1);
        this.drawPolygon(gtdGreenPolygon, {
          fill: "green"
        }); // 固体岛红色区域
        // const gtdRedPolygon = []
        // 固体岛道路区域

        var gtdRoadPolygon = [];

        for (var _i = circlePoint1.length - 1; _i > 0; _i--) {
          gtdRoadPolygon.push(circlePoint1[_i]);
        }

        gtdRoadPolygon = gtdRoadPolygon.concat(circlePoint2);
        this.drawPolygon(gtdRoadPolygon, {
          fill: "#23324b"
        }); // 固体岛非机动车区域

        var gtdNonMotorPolygon = [];

        for (var _i2 = circlePoint3.length - 1; _i2 > 0; _i2--) {
          gtdNonMotorPolygon.push(circlePoint3[_i2]);
        }

        gtdNonMotorPolygon = gtdNonMotorPolygon.concat(circlePoint2);
        this.drawPolygon(gtdNonMotorPolygon, {
          fill: "#000000"
        });
      },
      // 绘制线条 color = '#fff'
      drawLine: function drawLine(lineDatas) {
        var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var param = _objectSpread2({
          stroke: "green",
          strokeWidth: 1
        }, option);

        lineDatas.forEach(function (it) {
          var points = [];
          it.forEach(function (itt) {
            points.push(itt[0]);
            points.push(-itt[1]);
          });
          var line = new lib.Line(_objectSpread2({
            points: points
          }, param));
          baseLayer.add(line);
        });
      },
      // 绘制区域
      drawPolygon: function drawPolygon(polygonData, option) {
        if (!polygonData) {
          return;
        }

        var param = _objectSpread2({
          fill: "#fff",
          strokeWidth: 1
        }, option);

        var polygonShape = new lib.Shape(_objectSpread2(_objectSpread2({
          // stroke: borderColor ? borderColor : '',
          strokeWidth: 1
        }, param), {}, {
          // a Konva.Canvas renderer is passed into the sceneFunc function
          sceneFunc: function sceneFunc(context, shape) {
            context.beginPath();
            polygonData.forEach(function (element, index) {
              if (index === 0) {
                context.moveTo(element[0], -element[1]);
              } else {
                context.lineTo(element[0], -element[1]);
              }
            });
            context.closePath();
            context.fillStrokeShape(shape);
          }
        }));
        baseLayer.add(polygonShape);
      },
      // 绘制hovertext
      drawHoverText: function drawHoverText(x, y, text) {
        hoverText = new lib.Text({
          x: x,
          y: y,
          text: text,
          fontSize: 12,
          fontFamily: "Calibri",
          fill: "#fff"
        });
        var width = hoverText.width();
        hoverBack = new lib.Rect({
          x: x,
          y: y,
          width: width + 10,
          height: 20,
          fill: "#3b4859",
          shadowBlur: 10,
          cornerRadius: 10
        });

        if (x > 0) {
          hoverText.offsetX(width);
          hoverBack.offsetX(width + 5);
        } else {
          hoverBack.offsetX(5);
        }

        hoverBack.offsetY(4);
        baseLayer.add(hoverBack);
        baseLayer.add(hoverText);
      },
      // 绘制环岛
      drawRoundabout: function drawRoundabout() {
        var _this9 = this;

        var roadWidth = CrossConst.roadWidth,
            manRoadLength = CrossConst.manRoadLength,
            manCarInterval = CrossConst.manCarInterval; // 环岛半径

        var circlrRadia = 5 * roadWidth; // 进口环岛障碍物

        cross.entranceArray.forEach(function (it) {
          var polygonData = [];
          var H0 = it.point.H0;
          var _H0$it$in = H0[it["in"]],
              x = _H0$it$in.x,
              y = _H0$it$in.y;
          y = y + manRoadLength + manCarInterval + 4;
          var offsetY = Math.max((-y - 2 * roadWidth) / 3, 0);
          circlrRadia = Math.min(circlrRadia, offsetY * 2);

          var _Util$pointRotateAnge6 = interModel_Util.pointRotateAngel({
            x: x - roadWidth / 2,
            y: y + offsetY
          }, -it.angle),
              x1 = _Util$pointRotateAnge6.x,
              y1 = _Util$pointRotateAnge6.y;

          var _Util$pointRotateAnge7 = interModel_Util.pointRotateAngel({
            x: x,
            y: y
          }, -it.angle),
              x2 = _Util$pointRotateAnge7.x,
              y2 = _Util$pointRotateAnge7.y;

          var _Util$pointRotateAnge8 = interModel_Util.pointRotateAngel({
            x: x + roadWidth / 2,
            y: y + offsetY
          }, -it.angle),
              x3 = _Util$pointRotateAnge8.x,
              y3 = _Util$pointRotateAnge8.y;

          var circlePoint = interModel_Util.getArcPoint([x3, y3], [x1, y1]);
          polygonData.push([x2, y2]);
          polygonData = polygonData.concat(circlePoint);

          _this9.drawPolygon(polygonData, {
            fill: "#2e8348",
            opacity: 0.8
          });
        }); // 环岛中心岛

        var circle = new lib.Circle({
          x: 0,
          y: 0,
          radius: Math.max(circlrRadia, roadWidth),
          fill: "#2e8348"
        });
        baseLayer.add(circle);
        var dashCircle = new lib.Circle({
          x: 0,
          y: 0,
          radius: Math.max(circlrRadia, roadWidth) + roadWidth,
          stroke: "#fff",
          opacity: 0.5,
          strokeWidth: 1,
          dash: [6, 6]
        });
        baseLayer.add(dashCircle);
      }
    }; //---------------------------------------------drawRealMixins---------------------------------------------//

    var drawRealMethods = {
      // 绘制实时信息
      drawRealInfo: function drawRealInfo(realInfo, movements) {
        drawMethods.initLayer(); // 设置实时信息基础信息

        this.setRealBaseInfo(realInfo); // 绘制左边相位

        this.drawPhases(realInfo, movements); // 绘制倒计时

        this.drawPhaseRemainTime(realInfo.current_phase_remaining_time); // 绘制行人灯

        cross.is_have_son !== 2 && this.drawWalkMan(realInfo, movements); // 绘制路口模型中间流向

        this.drawInterPhase(realInfo, movements); // 绘制红绿灯

        this.drawGreenRedLight(realInfo, movements);
      },
      setRealBaseInfo: function setRealBaseInfo(realInfo) {
        var ctrl_way = realInfo.ctrl_way;
        ctrlWay = ctrl_way;
      },
      // 绘制左边相位
      drawPhases: function drawPhases(realInfo, movements) {
        var _this10 = this;

        // 创建相位图层
        phaseStage && phaseStage.destroy();
        phaseLayer && phaseLayer.destroy();
        phaseWidth = baseLayerWidth / 6;
        phaseStage = new lib.Stage({
          container: scTfPhaseBox.value,
          width: phaseWidth,
          height: Math.max(clientHeight, phaseWidth * realInfo.phase_num)
        });
        phaseLayer = new lib.Layer({
          x: 0,
          y: 0
        });
        phaseLayer.width = phaseWidth;
        phaseLayer.height = Math.max(clientHeight, phaseWidth * realInfo.phase_num);
        phaseStage.add(phaseLayer);
        var phaseBack = new lib.Rect({
          x: 0,
          y: 0,
          width: phaseWidth,
          height: Math.max(clientHeight, phaseWidth * realInfo.phase_num),
          fill: state.drawOption.phaseBackColor
        });
        phaseLayer.add(phaseBack); // 如果关灯，就不要绘制具体相位了

        if (realInfo.ctrl_way === 7) {
          return;
        }

        realInfo.phase_movements_info.forEach(function (it, i) {
          if (it) {
            var phaseNum = i + 1; // 主道流向

            var phaseList = _this10.getEntrancePhaseList(it, movements, "main"); // 辅道流向


            var fdPhaseList = _this10.getEntrancePhaseList(it, movements, "fd");

            _this10.darwPhaseWithPhaseList(realInfo, phaseList, phaseNum, "main");

            _this10.darwPhaseWithPhaseList(realInfo, fdPhaseList, phaseNum, "fd");
          }
        });
        this.slideToCurPhase(realInfo.current_phase_num);
      },
      // 绘制具体相位
      darwPhaseWithPhaseList: function darwPhaseWithPhaseList(realInfo, phaseList, phaseNum, road_type) {
        var _this11 = this;

        var phasePolygonShap = [];
        phaseList.forEach(function (it, i) {
          var enterFlowPoint = [];

          if (cross.is_have_son !== 2 || i === 2) {
            it.forEach(function (itt, j) {
              var phasePoints = getRealPhasePoint(phaseNum, itt, phaseWidth, road_type);
              enterFlowPoint.push(phasePoints);
            });
          }

          var rotatePoints = _this11.rotatePoint(phaseNum, i, enterFlowPoint);

          phasePolygonShap.push(rotatePoints);
        });
        this.drawPhaseBox(phaseWidth, phaseNum, phasePolygonShap, realInfo.current_phase_num);
      },
      // 滚动到当前相位
      slideToCurPhase: function slideToCurPhase(currentPhaseNum) {
        scTfPhaseBox.value.scrollTop = phaseWidth * (currentPhaseNum - 1);
      },
      // 绘制每一个相位
      drawPhaseBox: function drawPhaseBox(phaseWidth, phaseNum, realPhasePolygonShap, currentPhase) {
        // 绘制相位框
        var phase = new lib.Rect({
          x: 2,
          y: (phaseNum - 1) * phaseWidth + 2,
          width: phaseWidth - 4,
          height: phaseWidth - 4,
          // fill: '#000',
          stroke: currentPhase === phaseNum ? "#ff0000" : "#446a86",
          strokeWidth: 2
        });
        phaseLayer.add(phase); // 绘制相位编号 A B C

        var phaseCode = new lib.Text({
          x: 2 + 2,
          y: phaseNum * phaseWidth - 18,
          text: phaseMap.get(phaseNum),
          fontSize: 16,
          fontFamily: "Calibri",
          fill: state.drawOption.phaseNumColor
        });
        phaseLayer.add(phaseCode); // 绘制每个相位流向

        realPhasePolygonShap.forEach(function (it) {
          it.forEach(function (itt) {
            var phaseFlowPolygonShape = new lib.Shape({
              stroke: state.drawOption.greenColor,
              fill: state.drawOption.greenColor,
              strokeWidth: 1,
              sceneFunc: function sceneFunc(context, shape) {
                context.beginPath();
                itt.forEach(function (ittt, j) {
                  if (j === 0) {
                    context.moveTo(ittt.x, -ittt.y);
                  } else {
                    context.lineTo(ittt.x, -ittt.y);
                  }
                });
                context.closePath();
                context.fillStrokeShape(shape);
              }
            });
            phaseLayer.add(phaseFlowPolygonShape);
          });
        });
      },
      // 根据10进制的相位信息,以及流向配置/获取相位信息
      getEntrancePhaseList: function getEntrancePhaseList(DecMovements, movementParas, road_type) {
        var moveList = DecMovements.toString(2).split("");
        moveList.reverse();
        var movenents = this.getPhaseListWithBin(moveList, movementParas, "phase", road_type);
        return movenents;
      },

      /**
       * @name wsx
       * @Date 2022-03-03 16:25:52
       * @introduction 根据二进制的相位信息,以及流向配置/获取相位信息
       * @param {参数类型} 参数 参数说明
       * @param {参数类型} type:'inter' 路口中央的流向1红/2黄/3绿  'phase'方案的流向1放行/2取消 flowType:main fd 主流向还是辅道流向
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      getPhaseListWithBin: function getPhaseListWithBin(moveList, movementParas) {
        var _this12 = this;

        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "inter";
        var road_type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "main";
        var movenents = [];
        var movementMap = {};
        movementParas.forEach(function (it) {
          movementMap[it.num_movements] = it;
        });
        cross.entranceArray.forEach(function (it, i) {
          var list = [];
          moveList.forEach(function (itt, j) {
            var flow = movementMap[j + 1];
            var bool = false;

            if (road_type === "fd") {
              if (flow && flow.fd_flow) {
                bool = true;
              }
            } else {
              if (flow && !flow.fd_flow) {
                bool = true;
              }
            }

            if (flow) {
              var en_id = drawMethods.getEnidWithDirection(flow.enter_port_direction);

              if (en_id === it.en_id && flow.if_control && bool) {
                if (type === "phase") {
                  if (Number(itt)) {
                    list.push(flow.movements_type);
                  }
                } else if (type === "run") {
                  // if (Number(itt)) {
                  list.push(flow.movements_type); // }
                } else {
                  if (Number(itt) !== 1 && Number(itt) !== 0) {
                    list.push(flow.movements_type);
                  }
                }
              }
            }
          });

          var phaseMovemenes = _this12.getPhaseMovementType(list);

          movenents.push(phaseMovemenes);
        });
        return movenents; // return [[1, 2], [1, 2, 3, 4], [1, 2], [1, 2, 3, 4]]
      },

      /**
       * @name wsx
       * @Date 2022-03-03 17:23:22
       * @introduction 简述
       * @description  获取绿灯相位信息列表
       * @param {参数类型} type 0灰/1红/2黄/3绿  road_type 主道辅道
       * @return {返回类型说明}
       * @exception [违例类型] [违例类型说明]
       */
      getTypePhaseListWithBin: function getTypePhaseListWithBin(moveList, movementParas) {
        var _this13 = this;

        var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
        var road_type = arguments.length > 3 ? arguments[3] : undefined;
        var movenents = [];
        var movementMap = {};
        movementParas.forEach(function (it) {
          movementMap[it.num_movements] = it;
        });
        var fdFlow = road_type !== "main";
        cross.entranceArray.forEach(function (it, i) {
          var list = [];
          moveList.forEach(function (itt, j) {
            var flow = movementMap[j + 1];

            if (flow) {
              flow.fd_flow = !!flow.fd_flow;
              var en_id = drawMethods.getEnidWithDirection(flow.enter_port_direction);

              if (en_id === it.en_id && flow.if_control && flow.fd_flow === fdFlow) {
                if (Number(itt) === type) {
                  list.push(flow.movements_type);
                }
              }
            }
          });

          var phaseMovemenes = _this13.getPhaseMovementType(list);

          movenents.push(phaseMovemenes);
        });
        return movenents; // return [[1, 2], [1, 2, 3, 4], [1, 2], [1, 2, 3, 4]]
      },
      // 路口流向转换成相位流向
      getPhaseMovementType: function getPhaseMovementType(phaseMovemenes) {
        var movemenes = []; // 相位上展示的基础流向

        var baseFlowType = [1, 2, 3, 4, 8, 10, 11, 12, 13];
        phaseMovemenes.forEach(function (it) {
          if (baseFlowType.includes(it)) {
            movemenes.push(it);
          } else if (it === 5) {
            movemenes.push(1);
            movemenes.push(2);
          } else if (it === 6) {
            movemenes.push(2);
            movemenes.push(3);
          } else if (it === 7) {
            movemenes.push(1);
            movemenes.push(2);
            movemenes.push(3);
          } else if (it === 9) {
            movemenes.push(1);
            movemenes.push(8);
          } else if (it === 14) {
            movemenes.push(12);
            movemenes.push(13);
          }
        });
        /* eslint-disable */

        return Array.from(new Set(movemenes));
      },
      // 实时相位信息旋转 i 0 / 1 /2  进口序号
      rotatePoint: function rotatePoint(phaseNum, i, phasePoints) {
        var enterInfo = cross.entranceArray[i];
        var phaseCenterPoint = [phaseWidth / 2 + 2, -phaseWidth * (phaseNum - 0.5) - 2];
        var rotatePoins = [];

        if (Array.isArray(phasePoints)) {
          rotatePoins = [];
          phasePoints.forEach(function (info, index) {
            if (Array.isArray(info)) {
              rotatePoins[index] = [];
              info.map(function (it) {
                rotatePoins[index].push(interModel_Util.pointRotateByPoint(it, -enterInfo.angle, phaseCenterPoint));
              });
            } else {
              rotatePoins.push(interModel_Util.pointRotateByPoint(info, -enterInfo.angle, phaseCenterPoint));
            }
          });
        } else {
          rotatePoins = interModel_Util.pointRotateByPoint(phasePoints, -enterInfo.angle, phaseCenterPoint);
        }

        return rotatePoins;
      },
      // 绘制路口模型上当前流向 current_phase_num
      drawInterPhase: function drawInterPhase(realInfo, movements) {
        var phaseList = this.getPhaseListWithBin(realInfo.movements_state, movements, "inter", "main");
        var fdPhaseList = this.getPhaseListWithBin(realInfo.movements_state, movements, "inter", "fd");
        this.drawInterPhaseWithPhaseList(realInfo, movements, phaseList, "main");
        this.drawInterPhaseWithPhaseList(realInfo, movements, fdPhaseList, "fd");
      },
      drawInterPhaseWithPhaseList: function drawInterPhaseWithPhaseList(realInfo, movements, phaseList, road_type) {
        var _this14 = this;

        phaseList.forEach(function (it, i) {
          it.forEach(function (itt, j) {
            var entrance = cross.entranceArray[i]; // 匝道并且不是第三个进口就不绘制

            if (cross.is_have_son !== 2 || entrance.en_id === 3) {
              var flowData = getInterPhaseflowData(itt, entrance, road_type);
              var rotateFlowData = drawMethods.getRotateData(flowData, entrance.angle);

              var color = _this14.getInterPhaseFlowColor(realInfo.movements_state, movements, i, itt, road_type);

              _this14.drawInterPhaseFlow(rotateFlowData, color);
            }
          });
        });
      },
      // 获取绘制路口中流向的颜色
      getInterPhaseFlowColor: function getInterPhaseFlowColor(movements_state, movementParas, index, flowType, road_type) {
        var color = state.drawOption.yellowColor; // 当前进口

        var curEntrance = cross.entranceArray[index];
        var fdFlow = road_type !== "main";
        var greenFlowList = [];
        movementParas.forEach(function (it) {
          if (it.if_control) {
            var en_id = drawMethods.getEnidWithDirection(it.enter_port_direction);

            if (en_id === curEntrance.en_id && it.fd_flow === fdFlow) {
              if (movements_state[it.num_movements - 1] === 3) {
                greenFlowList.push(it.movements_type);
              }
            }
          }
        });
        var greenPhaseMovemenes = this.getPhaseMovementType(greenFlowList);

        if (greenPhaseMovemenes.includes(flowType)) {
          color = state.drawOption.greenColor;
        }

        return color;
      },
      // 绘制路口上的相位的单个流向
      drawInterPhaseFlow: function drawInterPhaseFlow(rotateFlowData, color) {
        var interPhaseFlowPolygonShape = new lib.Shape({
          stroke: color,
          fill: color,
          strokeWidth: 1,
          sceneFunc: function sceneFunc(context, shape) {
            context.beginPath();
            rotateFlowData.forEach(function (it, i) {
              if (i === 0) {
                context.moveTo(it.x, -it.y);
              } else {
                context.lineTo(it.x, -it.y);
              }
            });
            context.closePath();
            context.fillStrokeShape(shape);
          }
        }); // this.baseLayer.add(interPhaseFlowPolygonShape)

        realLayer.add(interPhaseFlowPolygonShape);
      },
      // 绘制相位倒计时
      drawPhaseRemainTime: function drawPhaseRemainTime(time) {
        var remainTime = new lib.Text({
          x: 0,
          y: 0,
          text: time,
          fontSize: 14,
          fontFamily: "Calibri",
          fill: "#ffffff",
          cornerRadius: 10
        });
        remainTime.offsetX(remainTime.width() / 2);
        remainTime.offsetY(remainTime.height() / 2);
        var circle = new lib.Circle({
          x: 0,
          y: 0,
          radius: CrossConst.roadWidth * 2 / 3,
          fill: "#3a3b45"
        });
        realLayer.add(circle);
        realLayer.add(remainTime);
      },
      // 绘制人行灯
      drawWalkMan: function drawWalkMan(realInfo, movements) {
        var _this15 = this;

        var phaseList = this.getPhaseListWithBin(realInfo.movements_state, movements, "run", "main");
        var greyPhaseList = drawRealMethods.getTypePhaseListWithBin(realInfo.movements_state, movements, 0, null);
        var redPhaseList = drawRealMethods.getTypePhaseListWithBin(realInfo.movements_state, movements, 1, null);
        var yellowPhaseList = drawRealMethods.getTypePhaseListWithBin(realInfo.movements_state, movements, 2, null);
        var greenPhaseList = drawRealMethods.getTypePhaseListWithBin(realInfo.movements_state, movements, 3, null);
        phaseList.forEach(function (it, i) {
          var greyPhases = greyPhaseList[i];
          var redPhases = redPhaseList[i];
          var yellowPhases = yellowPhaseList[i];
          var greenPhases = greenPhaseList[i];

          var runColor = _this15.getRuncolor("run", greyPhases, redPhases, yellowPhases, greenPhases);

          var run1Color = _this15.getRuncolor("run1", greyPhases, redPhases, yellowPhases, greenPhases);

          var run2Color = _this15.getRuncolor("run2", greyPhases, redPhases, yellowPhases, greenPhases);

          var entrance = cross.entranceArray[i];

          var manPoint = _this15.getEntranceManPoint(entrance); // 人行数据 绿灯


          if (it.includes(4)) {
            _this15.drawFootLight(manPoint[0], "green", entrance.angle, runColor);

            _this15.drawFootLight(manPoint[3], "green", entrance.angle, runColor);
          } else {
            if (it.includes(10) || it.includes(11)) {
              if (it.includes(10)) {
                // 人行1
                _this15.drawFootLight(manPoint[0], "green", entrance.angle, run1Color);

                _this15.drawFootLight(manPoint[1], "green", entrance.angle, run1Color);
              }

              if (it.includes(11)) {
                _this15.drawFootLight(manPoint[2], "green", entrance.angle, run2Color);

                _this15.drawFootLight(manPoint[3], "green", entrance.angle, run2Color);
              }
            }
          }
        });
      },
      // 获取每个车道的人行等绘制位置
      getEntranceManPoint: function getEntranceManPoint(entrance) {
        // 车道相对高度差
        var laneOffsetHeight = (entrance.point.H0[0].y - entrance.point.H0[1].y) / 2;
        var offsetY = CrossConst.manCarInterval + CrossConst.manRoadLength / 2 + laneOffsetHeight;
        var offsetX = CrossConst.roadWidth / 2;
        var manPoint = [];
        var outOfsset = drawMethods.getOutLineOffset(entrance.road_center_mode);
        var pointIndex = [1, entrance["in"], entrance["in"] + 1 + outOfsset, entrance["in"] + entrance.out + outOfsset];
        pointIndex.forEach(function (it) {
          manPoint.push([entrance.point.H0[it].x + offsetX, entrance.point.H0[it].y + offsetY]);
        });
        return manPoint;
      },
      // 绘制绿灯通行/红灯禁止通行
      drawFootLight: function drawFootLight(point, type, angle, color) {
        var centerPoint = interModel_Util.pointRotateAngel({
          x: point[0],
          y: point[1]
        }, -angle, [0, 0]);
        var circle = new lib.Circle({
          x: centerPoint.x,
          y: -centerPoint.y,
          radius: CrossConst.roadWidth * 2 / 5,
          fill: "#000"
        });
        realLayer.add(circle);
        var manData = getFootLightData(centerPoint, type);
        var interPhaseFlowPolygonShape = new lib.Shape({
          stroke: color,
          fill: color,
          strokeWidth: 0.2,
          sceneFunc: function sceneFunc(context, shape) {
            context.beginPath();
            manData.forEach(function (it, k) {
              if (k === 0) {
                context.moveTo(it.x, -it.y);
              } else {
                context.lineTo(it.x, -it.y);
              }
            });
            context.closePath();
            context.fillStrokeShape(shape);
          }
        });
        realLayer.add(interPhaseFlowPolygonShape);
      },
      // 绘制红绿灯
      drawGreenRedLight: function drawGreenRedLight(realInfo, movements) {
        // 主道红绿灯
        this.drawGreenRedLightWithType(realInfo, movements, "main"); // 绘制辅道红绿灯

        this.drawGreenRedLightWithType(realInfo, movements, "fd");
      },
      // 绘制红绿灯
      drawGreenRedLightWithType: function drawGreenRedLightWithType(realInfo, movements) {
        var _this16 = this;

        var road_type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "main";
        var phaseList = this.getPhaseListWithBin(realInfo.movements_state, movements, "inter", road_type);
        var greyPhaseList = this.getTypePhaseListWithBin(realInfo.movements_state, movements, 0, road_type);
        var redPhaseList = this.getTypePhaseListWithBin(realInfo.movements_state, movements, 1, road_type);
        var yellowPhaseList = this.getTypePhaseListWithBin(realInfo.movements_state, movements, 2, road_type);
        var greenPhaseList = this.getTypePhaseListWithBin(realInfo.movements_state, movements, 3, road_type);
        phaseList.forEach(function (it, i) {
          if (it.length || road_type === "main") {
            var greyPhases = greyPhaseList[i];
            var redPhases = redPhaseList[i];
            var yellowPhases = yellowPhaseList[i];
            var greenPhases = greenPhaseList[i]; // 获取绘制红绿灯位置的点

            var _this16$getEntranceLi = _this16.getEntranceLightPoint(i, road_type),
                points = _this16$getEntranceLi.points,
                angle = _this16$getEntranceLi.angle;

            var xAngle = _this16.getxAngle(points, angle); // 绘制红绿灯背景


            _this16.drawLightHandler(points[1], "back", angle, null, xAngle, road_type);

            var leftColor = _this16.getLightcolor("left", greyPhases, redPhases, yellowPhases, greenPhases);

            var centerColor = _this16.getLightcolor("center", greyPhases, redPhases, yellowPhases, greenPhases);

            var rightColor = _this16.getLightcolor("right", greyPhases, redPhases, yellowPhases, greenPhases); // 绘制红绿灯左转


            _this16.drawLightHandler(points[0], "left", angle, leftColor, xAngle); // 绘制红绿灯直行


            _this16.drawLightHandler(points[1], "center", angle, centerColor); // 绘制红绿灯右转


            _this16.drawLightHandler(points[2], "right", angle, rightColor, xAngle);
          }
        });
      },
      // 获取红绿灯颜色
      getLightcolor: function getLightcolor(type, greyPhases, redPhases, yellowPhases, greenPhases) {
        var phaseMap = [{
          phase: greyPhases,
          color: state.drawOption.greyColor
        }, {
          phase: redPhases,
          color: state.drawOption.redColor
        }, {
          phase: yellowPhases,
          color: state.drawOption.yellowColor
        }, {
          phase: greenPhases,
          color: state.drawOption.greenColor
        }];
        var color = state.drawOption.greyColor;

        if (type === "left") {
          // const flowMap = [1, 5, 7, 8, 9]
          phaseMap.forEach(function (it) {
            if (it.phase.includes(1) || it.phase.includes(5) || it.phase.includes(7) || it.phase.includes(8) || it.phase.includes(9)) {
              color = it.color;
            }
          });
        } else if (type === "center") {
          // const flowMap = [2, 5, 6, 7]
          phaseMap.forEach(function (it) {
            if (it.phase.includes(2) || it.phase.includes(5) || it.phase.includes(6) || it.phase.includes(7)) {
              color = it.color;
            }
          });
        } else if (type === "right") {
          // const flowMap = [3, 6, 7]
          phaseMap.forEach(function (it) {
            if (it.phase.includes(3) || it.phase.includes(6) || it.phase.includes(7)) {
              color = it.color;
            }
          });
        }

        return color;
      },
      // 获取人行速度
      getRuncolor: function getRuncolor(type, greyPhases, redPhases, yellowPhases, greenPhases) {
        var phaseMap = [{
          phase: greenPhases,
          color: state.drawOption.greenColor
        }, {
          phase: yellowPhases,
          color: state.drawOption.yellowColor
        }, {
          phase: redPhases,
          color: state.drawOption.redColor
        }, {
          phase: greyPhases,
          color: state.drawOption.greyColor
        }];
        var color = state.drawOption.greenColor;

        if (type === "run") {
          phaseMap.forEach(function (it) {
            if (it.phase.includes(4)) {
              color = it.color;
            }
          });
        } else if (type === "run1") {
          phaseMap.forEach(function (it) {
            if (it.phase.includes(10)) {
              color = it.color;
            }
          });
        } else if (type === "run2") {
          phaseMap.forEach(function (it) {
            if (it.phase.includes(11)) {
              color = it.color;
            }
          });
        }

        return color;
      },
      // 获取绘制红绿灯的绘制位置
      getEntranceLightPoint: function getEntranceLightPoint(i) {
        var road_type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "main";
        var enNum = cross.entranceArray.length;
        var points = [];
        var angle = [];

        if (enNum === 2) {
          // 一字路口
          // 获取到对面的进口
          var drawEntrance = cross.entranceArray[(i + 1) % 2];
          var pointInfo = this.calculateEntranceLightPoint(drawEntrance, road_type);
          points = pointInfo.points;
          angle = pointInfo.angle;
        } else if (enNum === 3) {
          // T型路口
          var entrance = cross.entranceArray[i];
          var leftIndex = (i + 4) % 3;
          var rightIndex = i - 1 >= 0 ? i - 1 : 2;

          if ((entrance.degreeLeft + 360 - entrance.degree) % 360 >= 180) {
            var _drawEntrance = cross.entranceArray[leftIndex];

            var _pointInfo = this.calculateEntranceLightPoint(_drawEntrance, road_type);

            points = _pointInfo.points;
            angle = _pointInfo.angle;
          } else if ((entrance.degree + 360 - entrance.degreeRight) % 360 >= 180) {
            var _drawEntrance2 = cross.entranceArray[rightIndex];

            var _pointInfo2 = this.calculateEntranceLightPoint(_drawEntrance2, road_type);

            points = _pointInfo2.points;
            angle = _pointInfo2.angle;
          } else {
            // 画路口对面
            var _drawEntrance3 = cross.entranceArray[i];
            var prevEntrance = cross.entranceArray[rightIndex];
            var nextEntrance = cross.entranceArray[leftIndex];

            var _pointInfo3 = this.calculateEntranceFaceLightPoint(_drawEntrance3, prevEntrance, nextEntrance, road_type);

            points = _pointInfo3.points;
            angle = _pointInfo3.angle + 180;
          }
        } else if (enNum === 4) {
          // 十字路口
          // 获取到对面的进口
          var _drawEntrance4 = cross.entranceArray[(i + 2) % 4];

          var _pointInfo4 = this.calculateEntranceLightPoint(_drawEntrance4, road_type);

          points = _pointInfo4.points;
          angle = _pointInfo4.angle;
        } else {
          // 五岔路口 以及以上
          var _drawEntrance5 = cross.entranceArray[i];

          var _pointInfo5 = this.calculateCircleLightPoint(_drawEntrance5, road_type);

          points = _pointInfo5.points;
          angle = _pointInfo5.angle;
        }

        return {
          points: points,
          angle: angle
        };
      },
      // 计算绘制在进口的点位
      calculateEntranceLightPoint: function calculateEntranceLightPoint(drawEntrance, road_type) {
        // 红绿灯半径
        var radius = CrossConst.roadWidth / 3;
        var points = [];
        var angle = [];
        var inNum = drawEntrance["in"];
        var outNum = drawEntrance.out;
        var margin = 1;
        var fdOffset = road_type === "fd" ? CrossConst.roadWidth : 0;
        var laneOffsetHeight = (drawEntrance.point.H0[0].y - drawEntrance.point.H0[1].y) / 2;
        var offsetHeight = (drawEntrance.point.H0[0].y - drawEntrance.point.H0[1].y) / CrossConst.roadWidth;
        var centerPoint = [drawEntrance.point.H0[inNum].x - CrossConst.roadWidth * outNum / 2, drawEntrance.point.H0[inNum].y - laneOffsetHeight * outNum - radius - margin - fdOffset];
        var rightPoint = [centerPoint[0] - radius * 2 - margin, centerPoint[1] - offsetHeight * (radius * 2 + margin)];
        var leftPoint = [centerPoint[0] + radius * 2 + margin, centerPoint[1] + offsetHeight * (radius * 2 + margin)];
        points = [leftPoint, centerPoint, rightPoint];
        angle = drawEntrance.angle;
        return {
          points: points,
          angle: angle
        };
      },
      // 计算三岔路口对面红绿灯的点位
      calculateEntranceFaceLightPoint: function calculateEntranceFaceLightPoint(drawEntrance, prevEntrance, nextEntrance, road_type) {
        var radius = CrossConst.roadWidth / 3;
        var points = [];
        var angle = [];
        var inNum = drawEntrance["in"];
        var margin = 1;
        var fdOffset = road_type === "fd" ? CrossConst.roadWidth : 0;
        var offsetHeight = (drawEntrance.point.H0[0].y - drawEntrance.point.H0[1].y) / CrossConst.roadWidth;
        var centerPoint = [drawEntrance.point.H0[0].x - CrossConst.roadWidth * inNum / 2, (nextEntrance.out + prevEntrance["in"]) / 2 * CrossConst.roadWidth + radius * 2 + margin + fdOffset];
        var rightPoint = [centerPoint[0] - radius * 2 - margin, centerPoint[1] - offsetHeight * (radius * 2 + margin)];
        var leftPoint = [centerPoint[0] + radius * 2 + margin, centerPoint[1] + offsetHeight * (radius * 2 + margin)];
        points = [leftPoint, centerPoint, rightPoint];
        angle = drawEntrance.angle + 180;
        return {
          points: points,
          angle: angle
        };
      },
      // 计算五岔路口 以及以上红绿灯的点位
      calculateCircleLightPoint: function calculateCircleLightPoint(drawEntrance, road_type) {
        // 红绿灯半径
        var radius = CrossConst.roadWidth / 3;
        var points = [];
        var angle = [];
        var margin = 1;
        var offsetHeight = (drawEntrance.point.H0[0].y - drawEntrance.point.H0[1].y) / CrossConst.roadWidth;
        var fdOffset = road_type === "fd" ? CrossConst.roadWidth : 0;
        var centerPoint = [// drawEntrance.point.H0[0].x - CrossConst.roadWidth * inNum / 2,
        0 - CrossConst.roadWidth, CrossConst.roadWidth * 2.8 - fdOffset];
        var rightPoint = [centerPoint[0] - radius * 2 - margin, centerPoint[1] - offsetHeight * (radius * 2 + margin)];
        var leftPoint = [centerPoint[0] + radius * 2 + margin, centerPoint[1] + offsetHeight * (radius * 2 + margin)];
        points = [leftPoint, centerPoint, rightPoint];
        angle = drawEntrance.angle + 180;
        return {
          points: points,
          angle: angle
        };
      },
      // 获取绘制红绿灯
      drawLightHandler: function drawLightHandler(point, drawType, angle, color) {
        var xAngle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var road_type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "main";
        // 红绿灯半径
        var radius = CrossConst.roadWidth / 3;
        var centerPoint = interModel_Util.pointRotateAngel({
          x: point[0],
          y: point[1]
        }, -angle, [0, 0]); // 绘制红绿灯背景

        if (drawType === "back") {
          var lightBack = new lib.Rect({
            x: centerPoint.x,
            y: -centerPoint.y,
            width: radius * 6 + 8,
            height: radius * 2 + 2,
            fill: road_type === "main" ? "#fff" : "#999",
            rotation: xAngle,
            cornerRadius: radius
          });
          lightBack.offsetX(lightBack.width() / 2);
          lightBack.offsetY(lightBack.height() / 2);
          realLayer.add(lightBack);
        } else {
          // 红绿灯黑底
          var circle = new lib.Circle({
            x: centerPoint.x,
            y: -centerPoint.y,
            radius: CrossConst.roadWidth / 3,
            fill: "#000"
          });
          realLayer.add(circle);

          if (drawType === "center") {
            var centerCircle = new lib.Circle({
              x: centerPoint.x,
              y: -centerPoint.y,
              radius: CrossConst.roadWidth / 3,
              fill: color
            });
            realLayer.add(centerCircle);
          } else {
            var lightData = getDirectionLightData({
              x: point[0],
              y: point[1]
            }, drawType);
            var rotateLightData = drawMethods.getRotateData(lightData, angle);
            var lightPolygonShape = new lib.Shape({
              stroke: color,
              fill: color,
              strokeWidth: 0.2,
              sceneFunc: function sceneFunc(context, shape) {
                context.beginPath();
                rotateLightData.forEach(function (it, k) {
                  if (k === 0) {
                    context.moveTo(it.x, -it.y);
                  } else {
                    context.lineTo(it.x, -it.y);
                  }
                });
                context.closePath();
                context.fillStrokeShape(shape);
              }
            });
            realLayer.add(lightPolygonShape);
          }
        }
      },
      // 获取红绿灯偏移角度
      getxAngle: function getxAngle(points, angle) {
        var _points = _slicedToArray(points, 2),
            point1 = _points[0],
            point2 = _points[1];

        var P1 = interModel_Util.pointRotateAngel({
          x: point1[0],
          y: point1[1]
        }, -angle, [0, 0]);
        var P2 = interModel_Util.pointRotateAngel({
          x: point2[0],
          y: point2[1]
        }, -angle, [0, 0]); // 因为点位y跟直角坐标系是相反的，所以P1.y - P2.y

        var degree = Math.atan2(P1.y - P2.y, P2.x - P1.x);
        return degree * (180 / Math.PI);
      },
      // 红绿灯点位旋转车道倾斜角度
      getRotateLightData2: function getRotateLightData2(rotateLightData, xAngle, centerPoint) {
        var rotateLightData2 = [];
        rotateLightData.forEach(function (it) {
          var point = interModel_Util.pointRotateByPoint(it, xAngle, [centerPoint.x, centerPoint.y]);
          rotateLightData2.push(point);
        });
        return rotateLightData2;
      }
    }; //---------------------------------------------imageLoadMixins---------------------------------------------//

    var imageLoadMethods = {
      initImg: function initImg() {
        // 相邻路口图片
        nearImg = new Image();
        nearImg.src = adjacentIcon; // 非机动车道自行车图片

        var bikeImg = new Image();
        bikeImg.src = bikeIcon;
      }
    };
    imageLoadMethods.initImg();
    return _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRefs"])(state)), {}, {
      tfInterModel: tfInterModel,
      scTfInterBox: scTfInterBox,
      scTfPhaseBox: scTfPhaseBox
    }, methods), drawMethods), drawRealMethods), imageLoadMethods);
  }
}));
// CONCATENATED MODULE: ./packages/interModel/src/interModel.vue?vue&type=script&lang=ts
 
// EXTERNAL MODULE: ./packages/interModel/src/interModel.vue?vue&type=style&index=0&id=1a8cc315&lang=scss
var interModelvue_type_style_index_0_id_1a8cc315_lang_scss = __webpack_require__("fa87");

// CONCATENATED MODULE: ./packages/interModel/src/interModel.vue





interModelvue_type_script_lang_ts.render = render

/* harmony default export */ var interModel = (interModelvue_type_script_lang_ts);
// CONCATENATED MODULE: ./packages/interModel/index.ts

 // 定义 install 方法， App 作为参数

interModel.install = function (app) {
  app.component(interModel.name, interModel);
};

/* harmony default export */ var packages_interModel = (interModel);
// CONCATENATED MODULE: ./packages/index.ts


 // 所有组件列表

var packages_components = [packages_interModel]; // 定义 install 方法， App 作为参数

var install = function install(app) {
  // 遍历注册所有组件
  packages_components.map(function (component) {
    return app.component(component.name, component);
  });
};


/* harmony default export */ var packages_0 = ({
  install: install
});
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.es/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  /* global Symbol -- safe */
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ });
//# sourceMappingURL=index.common.js.map