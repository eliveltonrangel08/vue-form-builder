(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["v-form-builder"] = factory(require("vue"));
	else
		root["v-form-builder"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "014b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("e53d");
var has = __webpack_require__("07e3");
var DESCRIPTORS = __webpack_require__("8e60");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var META = __webpack_require__("ebfd").KEY;
var $fails = __webpack_require__("294c");
var shared = __webpack_require__("dbdb");
var setToStringTag = __webpack_require__("45f2");
var uid = __webpack_require__("62a0");
var wks = __webpack_require__("5168");
var wksExt = __webpack_require__("ccb9");
var wksDefine = __webpack_require__("6718");
var enumKeys = __webpack_require__("47ee");
var isArray = __webpack_require__("9003");
var anObject = __webpack_require__("e4ae");
var isObject = __webpack_require__("f772");
var toObject = __webpack_require__("241e");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var createDesc = __webpack_require__("aebd");
var _create = __webpack_require__("a159");
var gOPNExt = __webpack_require__("0395");
var $GOPD = __webpack_require__("bf0b");
var $GOPS = __webpack_require__("9aa9");
var $DP = __webpack_require__("d9f6");
var $keys = __webpack_require__("c3a1");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("6abf").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("355d").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("b8e3")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("35e8")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0395":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("36c3");
var gOPN = __webpack_require__("6abf").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "07e3":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "099a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numToStr = Number.prototype.toString;
var tryNumberObject = function tryNumberObject(value) {
	try {
		numToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var numClass = '[object Number]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isNumberObject(value) {
	if (typeof value === 'number') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryNumberObject(value) : toStr.call(value) === numClass;
};


/***/ }),

/***/ "09fa":
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__("4588");
var toLength = __webpack_require__("9def");
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),

/***/ "0a49":
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__("9b43");
var IObject = __webpack_require__("626a");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var asc = __webpack_require__("cd1c");
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "0e65":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getDay = Date.prototype.getDay;
var tryDateObject = function tryDateGetDayCall(value) {
	try {
		getDay.call(value);
		return true;
	} catch (e) {
		return false;
	}
};

var toStr = Object.prototype.toString;
var dateClass = '[object Date]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isDateObject(value) {
	if (typeof value !== 'object' || value === null) {
		return false;
	}
	return hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;
};


/***/ }),

/***/ "0f7c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("688e");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "0f88":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var uid = __webpack_require__("ca5a");
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),

/***/ "0fc9":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "1169":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("2d95");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "11e9":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("52a7");
var createDesc = __webpack_require__("4630");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var has = __webpack_require__("69a8");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("9e1e") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "1654":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("71c1")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("30f1")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "1691":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "1696":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "16e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__("d6c7");
var bind = __webpack_require__("0f7c");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__("1696")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "1af6":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__("63b6");

$export($export.S, 'Array', { isArray: __webpack_require__("9003") });


/***/ }),

/***/ "1bc3":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("f772");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "1c4c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("9b43");
var $export = __webpack_require__("5ca1");
var toObject = __webpack_require__("4bf8");
var call = __webpack_require__("1fa8");
var isArrayIter = __webpack_require__("33a4");
var toLength = __webpack_require__("9def");
var createProperty = __webpack_require__("f1ae");
var getIterFn = __webpack_require__("27ee");

$export($export.S + $export.F * !__webpack_require__("5cc5")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var supportsDescriptors = __webpack_require__("f367").supportsDescriptors;
var getPolyfill = __webpack_require__("57ec");
var gOPD = Object.getOwnPropertyDescriptor;
var defineProperty = Object.defineProperty;
var TypeErr = TypeError;
var getProto = Object.getPrototypeOf;
var regex = /a/;

module.exports = function shimFlags() {
	if (!supportsDescriptors || !getProto) {
		throw new TypeErr('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	var polyfill = getPolyfill();
	var proto = getProto(regex);
	var descriptor = gOPD(proto, 'flags');
	if (!descriptor || descriptor.get !== polyfill) {
		defineProperty(proto, 'flags', {
			configurable: true,
			enumerable: false,
			get: polyfill
		});
	}
	return polyfill;
};


/***/ }),

/***/ "1dd1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("e9ac");

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%');
if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;


/***/ }),

/***/ "1ec8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarRenderer; });
/* harmony import */ var _home_elivelton_work_vue_form_builder_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d225");
/* harmony import */ var _home_elivelton_work_vue_form_builder_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bd86");



var SidebarRenderer = // to recognize which components are triggering...
function SidebarRenderer(runnerId, component) {
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  Object(_home_elivelton_work_vue_form_builder_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, SidebarRenderer);

  Object(_home_elivelton_work_vue_form_builder_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "runnerId", '');

  Object(_home_elivelton_work_vue_form_builder_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "component", null);

  Object(_home_elivelton_work_vue_form_builder_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "data", {});

  this.runnerId = runnerId;
  this.component = component;
  this.data = data;
};



/***/ }),

/***/ "1ec9":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
var document = __webpack_require__("e53d").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "1fa8":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("cb7c");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "20d6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "20fd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

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

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
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
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "22a0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FORM_DEFAULT_DATA; });
/**
 * Form-Configuration for Vue-Form-Builder
 * @author Phat Tran
 */
var FORM_DEFAULT_DATA = {
  headline: "",
  subHeadline: "",
  isShowHeadline: false,
  // <form></form> tag ??
  renderFormTag: false,
  formActionURL: "",
  formMethod: "POST",
  // Server-Side validation
  enableServerSideValidation: false,
  serverSideValidationEndpoint: ""
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "241e":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "242e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (typeof BigInt === 'function') {
	var bigIntValueOf = BigInt.prototype.valueOf;
	var tryBigInt = function tryBigIntObject(value) {
		try {
			bigIntValueOf.call(value);
			return true;
		} catch (e) {
		}
		return false;
	};

	module.exports = function isBigInt(value) {
		if (
			value === null
			|| typeof value === 'undefined'
			|| typeof value === 'boolean'
			|| typeof value === 'string'
			|| typeof value === 'number'
			|| typeof value === 'symbol'
			|| typeof value === 'function'
		) {
			return false;
		}
		if (typeof value === 'bigint') { // eslint-disable-line valid-typeof
			return true;
		}

		return tryBigInt(value);
	};
} else {
	module.exports = function isBigInt(value) {
		return  false && false;
	};
}


/***/ }),

/***/ "2560":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ installer_VueFormBuilderInstaller; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// CONCATENATED MODULE: ./src/libraries/icons/arrow-up.icon.js
var ARROW_UP_ICON = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"{0}\" height=\"{1}\" fill=\"{2}\">\n    <polygon points=\"9 3.828 2.929 9.899 1.515 8.485 10 0 10.707 .707 18.485 8.485 17.071 9.899 11 3.828 11 20 9 20 9 3.828\"/>\n</svg>\n";

// CONCATENATED MODULE: ./src/libraries/icons/arrow-down.icon.js
var ARROW_DOWN_ICON = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"{0}\" height=\"{1}\" fill=\"{2}\">\n    <polygon points=\"9 16.172 2.929 10.101 1.515 11.515 10 20 10.707 19.293 18.485 11.515 17.071 10.101 11 16.172 11 0 9 0\"/>\n</svg>\n";

// CONCATENATED MODULE: ./src/libraries/icons/edit-pencil.icon.js
var EDIT_PENCIL_ICON = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"{0}\" height=\"{1}\" fill=\"{2}\">\n    <path d=\"M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z\"/>\n</svg>\n";

// CONCATENATED MODULE: ./src/libraries/icons/cog.icon.js
var COG_ICON = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"{0}\" height=\"{1}\" fill=\"{2}\">\n    <path d=\"M3.94 6.5L2.22 3.64l1.42-1.42L6.5 3.94c.52-.3 1.1-.54 1.7-.7L9 0h2l.8 3.24c.6.16 1.18.4 1.7.7l2.86-1.72 1.42 1.42-1.72 2.86c.3.52.54 1.1.7 1.7L20 9v2l-3.24.8c-.16.6-.4 1.18-.7 1.7l1.72 2.86-1.42 1.42-2.86-1.72c-.52.3-1.1.54-1.7.7L11 20H9l-.8-3.24c-.6-.16-1.18-.4-1.7-.7l-2.86 1.72-1.42-1.42 1.72-2.86c-.3-.52-.54-1.1-.7-1.7L0 11V9l3.24-.8c.16-.6.4-1.18.7-1.7zM10 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z\"/>\n</svg>\n";

// CONCATENATED MODULE: ./src/libraries/icons/add-outline.icon.js
var ADD_OUTLINE_ICON = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"{0}\" height=\"{1}\" fill=\"{2}\">\n<path d=\"M11 9h4v2h-4v4H9v-4H5V9h4V5h2v4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z\"/>\n</svg>\n";

// CONCATENATED MODULE: ./src/libraries/icons/close.icon.js
var CLOSE_ICON = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"{0}\" height=\"{1}\" fill=\"{2}\">\n<path d=\"M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z\"/>\n</svg>\n";

// CONCATENATED MODULE: ./src/libraries/icons/trash.icon.js
var TRASH_ICON = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"{0}\" height=\"{1}\" fill=\"{2}\">\n    <path d=\"M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z\"/>\n</svg>\n";

// CONCATENATED MODULE: ./src/libraries/icons/chevron-up.icon.js
var CHEVRON_UP_ICON = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"{0}\" height=\"{1}\" fill=\"{2}\">\n<path d=\"M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z\"/>\n</svg>\n";

// CONCATENATED MODULE: ./src/libraries/icons/chevron-down.icon.js
var CHEVRON_DOWN_ICON = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"{0}\" height=\"{1}\" fill=\"{2}\">\n<path d=\"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z\"/>\n</svg>\n";

// CONCATENATED MODULE: ./src/libraries/icons/navigation-more.icon.js
var NAVIGATION_MORE_ICON = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"{0}\" height=\"{1}\" fill=\"{2}\">\n<path d=\"M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z\"/>\n</svg>\n";

// CONCATENATED MODULE: ./src/libraries/icons/information-outline.icon.js
var INFORMATION_OUTLINE_ICON = "\n<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 20\" width=\"{0}\" height=\"{1}\" fill=\"{2}\">\n    <path d=\"M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z\"/>\n</svg>\n";

// CONCATENATED MODULE: ./src/libraries/icon-facade.js


/**
 * Form-Icon-Facade is a lightweight library to help you retain ICON inside Form-Builder v2
 * @author Phat Tran <phattranminh96@gmail.com>
 * @license From Zondicons of Steve Schoger. Thanks very much for the beautiful/lightweight icons
 * @iconHomePage https://www.zondicons.com/
 */











var ICONS = {
  addOutline: ADD_OUTLINE_ICON,
  arrowUp: ARROW_UP_ICON,
  arrowDown: ARROW_DOWN_ICON,
  editPencil: EDIT_PENCIL_ICON,
  cog: COG_ICON,
  close: CLOSE_ICON,
  trash: TRASH_ICON,
  chevronUp: CHEVRON_UP_ICON,
  chevronDown: CHEVRON_DOWN_ICON,
  navigationMore: NAVIGATION_MORE_ICON,
  informationOutline: INFORMATION_OUTLINE_ICON
};
var FormIcon = {
  /**
   * Get SVG Icon for Form-Builder
   * @param {String} iconName
   * @param {String} width - Width with px (Eg: 16px)
   * @param {String} height - Height with px (Eg: 16px)
   * @param {String} fillColor - Hex Color String (Eg: #ffffff)
   * @returns {string} of SVG HTML TAG
   */
  getSVG: function getSVG(iconName) {
    var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '16px';
    var height = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '16px';
    var fillColor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '#ffffff';

    if (!ICONS[iconName]) {
      throw new TypeError("Icon Name '".concat(iconName, "' doesn't exists in Vue-Form-Builder."));
    }

    var replacedIconWithData = ICONS[iconName].replace("{0}", width).replace("{1}", height).replace("{2}", fillColor);
    return replacedIconWithData;
  }
};

// EXTERNAL MODULE: ./src/components/FormBuilder.vue + 50 modules
var FormBuilder = __webpack_require__("6a29");

// EXTERNAL MODULE: ./src/components/FormRenderer.vue + 24 modules
var FormRenderer = __webpack_require__("fbdb");

// EXTERNAL MODULE: ./src/configs/controls.js + 77 modules
var controls = __webpack_require__("8dbe");

// EXTERNAL MODULE: ./src/configs/styles.js
var styles = __webpack_require__("d60e");

// EXTERNAL MODULE: ./src/configs/validation.js
var validation = __webpack_require__("a786");

// EXTERNAL MODULE: ./src/interfaces/register-properties.interface.ts
var register_properties_interface = __webpack_require__("65fb");

// CONCATENATED MODULE: ./src/installer.js










var installer_VueFormBuilderInstaller = function VueFormBuilderInstaller(Vue) {
  var properties = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (VueFormBuilderInstaller.installed) {
    return;
  }
  /**
   *
   * @type {IRegisterProperties}
   */


  var defaultProperties = {
    globalInjection: true,
    validationErrorShowAlert: true,
    validationErrorAlertText: "Your form got error(s), please fix it and submit again"
  };
  Object.assign(properties, defaultProperties); // DI for Form-Builder

  var formDI = {
    getIcon: FormIcon.getSVG // a method to get icon from IconFacade

  }; // control extend?

  if (properties.hasOwnProperty('controls')) {
    installer_extendingControls(properties.controls);
  } // style override?


  if (properties.hasOwnProperty('styles')) {
    Object.assign(styles["a" /* STYLES */], properties.styles);
  } // validation extend?


  if (properties.hasOwnProperty('validations')) {
    installer_extendingValidations(properties.validations);
  } // validation closures


  if (properties.hasOwnProperty('validationClosures')) {
    formDI.validationClosures = properties.validationClosures;
  } // show alert or not?


  formDI.validationErrorShowAlert = properties.validationErrorShowAlert || true;
  formDI.validationErrorAlertText = properties.validationErrorAlertText; // disable control?

  if (properties.disableControls && properties.disableControls.length) {
    installer_disableControls(properties.disableControls);
  } // For Event-Bus purpose


  Vue.prototype.$formEvent = new Vue();
  Vue.prototype.$form = formDI; // Register Form-Components

  if (!properties.hasOwnProperty('globalInjection') || properties.globalInjection) {
    Vue.component('FormBuilder', FormBuilder["a" /* default */]);
    Vue.component('FormRenderer', FormRenderer["a" /* default */]);
  } // Mark as registered


  VueFormBuilderInstaller.installed = true;
};
/**
 * Extending Control from the users
 * @param {Object} moreControlObject
 */


var installer_extendingControls = function extendingControls(moreControlObject) {
  // validation if it does conflict or not
  var allKeys = Object.keys(moreControlObject);

  for (var iKey = 0; iKey < allKeys.length; iKey++) {
    var key = allKeys[iKey]; // duplicated => error

    if (controls["a" /* CONTROLS */].hasOwnProperty(key)) {
      throw new TypeError("Extend-Control-Error: Your '".concat(key, "' control is duplicated with our build-in Controls. Please change to another key name instead."));
    }
  } // eligible to extend now


  Object.assign(controls["a" /* CONTROLS */], moreControlObject);
};
/**
 * Extending Validation
 * @param {Object} validationObj
 */


var installer_extendingValidations = function extendingValidations(validationObj) {
  // validation if it does conflict or not
  var allKeys = Object.keys(validationObj);

  for (var iKey = 0; iKey < allKeys.length; iKey++) {
    var key = allKeys[iKey]; // duplicated => error

    if (validation["a" /* VALIDATION_RULES */].hasOwnProperty(key)) {
      throw new TypeError("Extend-Validation-Error: Your '".concat(key, "' validation is duplicated with our build-in Validation. Please change to another key name instead."));
    }
  } // eligible to extend now


  Object.assign(validation["a" /* VALIDATION_RULES */], validationObj);
};
/**
 * Disable a list of controls by key
 * @param {String[]} controlKeys
 */


var installer_disableControls = function disableControls(controlKeys) {
  controlKeys.forEach(function (controlKey) {
    return controls["a" /* CONTROLS */][controlKey].isHidden = true;
  });
};



/***/ }),

/***/ "25eb":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2714":
/***/ (function(module, exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;

var inspectCustom = __webpack_require__(0).custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') { // eslint-disable-line valid-typeof
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']';
    }
    if (isSymbol(obj)) {
        var symString = Symbol.prototype.toString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        if (ys.length === 0) { return '{}'; }
        if (indent) {
            return '{' + indentedJoin(ys, indent) + '}';
        }
        return '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]'; }
function isDate(obj) { return toStr(obj) === '[object Date]'; }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]'; }
function isError(obj) { return toStr(obj) === '[object Error]'; }
function isSymbol(obj) { return toStr(obj) === '[object Symbol]'; }
function isString(obj) { return toStr(obj) === '[object String]'; }
function isNumber(obj) { return toStr(obj) === '[object Number]'; }
function isBigInt(obj) { return toStr(obj) === '[object BigInt]'; }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]'; }

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16);
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    return xs;
}


/***/ }),

/***/ "27ee":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("23c6");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var Iterators = __webpack_require__("84f2");
module.exports = __webpack_require__("8378").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "2877":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "28a5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__("aae3");
var anObject = __webpack_require__("cb7c");
var speciesConstructor = __webpack_require__("ebd6");
var advanceStringIndex = __webpack_require__("0390");
var toLength = __webpack_require__("9def");
var callRegExpExec = __webpack_require__("5f1b");
var regexpExec = __webpack_require__("520a");
var fails = __webpack_require__("79e5");
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__("214f")('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
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
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
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
});


/***/ }),

/***/ "28fe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STYLE_INJECTION_MIXIN; });
/* harmony import */ var _configs_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d60e");

var STYLE_INJECTION_MIXIN = {
  computed: {
    styles: function styles() {
      return _configs_styles__WEBPACK_IMPORTED_MODULE_0__[/* STYLES */ "a"];
    }
  }
};


/***/ }),

/***/ "294c":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "2a1a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("e9ac");

var callBind = __webpack_require__("44b7");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.')) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "2a8a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__("f367");

var implementation = __webpack_require__("16e7");
var getPolyfill = __webpack_require__("c8ba6");
var shim = __webpack_require__("f11f");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2f21":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("79e5");

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),

/***/ "2fb9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isString = __webpack_require__("55b2");
var isNumber = __webpack_require__("099a");
var isBoolean = __webpack_require__("353a");
var isSymbol = __webpack_require__("fec5");
var isBigInt = __webpack_require__("242e");

// eslint-disable-next-line consistent-return
module.exports = function whichBoxedPrimitive(value) {
	// eslint-disable-next-line eqeqeq
	if (value == null || (typeof value !== 'object' && typeof value !== 'function')) {
		return null;
	}
	if (isString(value)) {
		return 'String';
	}
	if (isNumber(value)) {
		return 'Number';
	}
	if (isBoolean(value)) {
		return 'Boolean';
	}
	if (isSymbol(value)) {
		return 'Symbol';
	}
	if (isBigInt(value)) {
		return 'BigInt';
	}
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "30f1":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("b8e3");
var $export = __webpack_require__("63b6");
var redefine = __webpack_require__("9138");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var $iterCreate = __webpack_require__("8f60");
var setToStringTag = __webpack_require__("45f2");
var getPrototypeOf = __webpack_require__("53e2");
var ITERATOR = __webpack_require__("5168")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "310e":
/***/ (function(module, exports, __webpack_require__) {

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

/***/ "01f9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__("2d00");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var $iterCreate = __webpack_require__("41a0");
var setToStringTag = __webpack_require__("7f20");
var getPrototypeOf = __webpack_require__("38fd");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "02f4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var defined = __webpack_require__("be13");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "0390":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__("02f4")(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ "0bfb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__("cb7c");
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "0d58":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("ce10");
var enumBugKeys = __webpack_require__("e11e");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "1495":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var anObject = __webpack_require__("cb7c");
var getKeys = __webpack_require__("0d58");

module.exports = __webpack_require__("9e1e") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "214f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("b0c5");
var redefine = __webpack_require__("2aba");
var hide = __webpack_require__("32e9");
var fails = __webpack_require__("79e5");
var defined = __webpack_require__("be13");
var wks = __webpack_require__("2b4c");
var regexpExec = __webpack_require__("520a");

var SPECIES = wks('species');

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

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
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
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ "230e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var document = __webpack_require__("7726").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "23c6":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("2d95");
var TAG = __webpack_require__("2b4c")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "2621":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "2aba":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var has = __webpack_require__("69a8");
var SRC = __webpack_require__("ca5a")('src');
var $toString = __webpack_require__("fa5b");
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__("8378").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "2aeb":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("cb7c");
var dPs = __webpack_require__("1495");
var enumBugKeys = __webpack_require__("e11e");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("230e")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("fab2").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "2b4c":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("5537")('wks');
var uid = __webpack_require__("ca5a");
var Symbol = __webpack_require__("7726").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "2d00":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "2d95":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "2fdb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__("5ca1");
var context = __webpack_require__("d2c8");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__("5147")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "4630":
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

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
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

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "7333":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__("9e1e");
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
var toObject = __webpack_require__("4bf8");
var IObject = __webpack_require__("626a");
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__("79e5")(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a352":
/***/ (function(module, exports) {

module.exports = __webpack_require__("aa47");

/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c649":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return insertNodeAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return camelize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return console; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeNode; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);


function getConsole() {
  if (typeof window !== "undefined") {
    return window.console;
  }

  return global.console;
}

var console = getConsole();

function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

var regex = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(regex, function (_, c) {
    return c ? c.toUpperCase() : "";
  });
});

function removeNode(node) {
  if (node.parentElement !== null) {
    node.parentElement.removeChild(node);
  }
}

function insertNodeAt(fatherNode, node, position) {
  var refNode = position === 0 ? fatherNode.children[0] : fatherNode.children[position - 1].nextSibling;
  fatherNode.insertBefore(node, refNode);
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


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

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "f559":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__("5ca1");
var toLength = __webpack_require__("9def");
var context = __webpack_require__("d2c8");
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__("5147")(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "f751":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__("5ca1");

$export($export.S + $export.F, 'Object', { assign: __webpack_require__("7333") });


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var setPublicPath_i
  if ((setPublicPath_i = window.document.currentScript) && (setPublicPath_i = setPublicPath_i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = setPublicPath_i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__("f751");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.starts-with.js
var es6_string_starts_with = __webpack_require__("f559");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
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
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

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
// EXTERNAL MODULE: external {"commonjs":"sortablejs","commonjs2":"sortablejs","amd":"sortablejs","root":"Sortable"}
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_ = __webpack_require__("a352");
var external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_);

// EXTERNAL MODULE: ./src/util/helper.js
var helper = __webpack_require__("c649");

// CONCATENATED MODULE: ./src/vuedraggable.js












function buildAttribute(object, propName, value) {
  if (value === undefined) {
    return object;
  }

  object = object || {};
  object[propName] = value;
  return object;
}

function computeVmIndex(vnodes, element) {
  return vnodes.map(function (elt) {
    return elt.elm;
  }).indexOf(element);
}

function _computeIndexes(slots, children, isTransition, footerOffset) {
  if (!slots) {
    return [];
  }

  var elmFromNodes = slots.map(function (elt) {
    return elt.elm;
  });
  var footerIndex = children.length - footerOffset;

  var rawIndexes = _toConsumableArray(children).map(function (elt, idx) {
    return idx >= footerIndex ? elmFromNodes.length : elmFromNodes.indexOf(elt);
  });

  return isTransition ? rawIndexes.filter(function (ind) {
    return ind !== -1;
  }) : rawIndexes;
}

function emit(evtName, evtData) {
  var _this = this;

  this.$nextTick(function () {
    return _this.$emit(evtName.toLowerCase(), evtData);
  });
}

function delegateAndEmit(evtName) {
  var _this2 = this;

  return function (evtData) {
    if (_this2.realList !== null) {
      _this2["onDrag" + evtName](evtData);
    }

    emit.call(_this2, evtName, evtData);
  };
}

function isTransitionName(name) {
  return ["transition-group", "TransitionGroup"].includes(name);
}

function vuedraggable_isTransition(slots) {
  if (!slots || slots.length !== 1) {
    return false;
  }

  var _slots = _slicedToArray(slots, 1),
      componentOptions = _slots[0].componentOptions;

  if (!componentOptions) {
    return false;
  }

  return isTransitionName(componentOptions.tag);
}

function getSlot(slot, scopedSlot, key) {
  return slot[key] || (scopedSlot[key] ? scopedSlot[key]() : undefined);
}

function computeChildrenAndOffsets(children, slot, scopedSlot) {
  var headerOffset = 0;
  var footerOffset = 0;
  var header = getSlot(slot, scopedSlot, "header");

  if (header) {
    headerOffset = header.length;
    children = children ? [].concat(_toConsumableArray(header), _toConsumableArray(children)) : _toConsumableArray(header);
  }

  var footer = getSlot(slot, scopedSlot, "footer");

  if (footer) {
    footerOffset = footer.length;
    children = children ? [].concat(_toConsumableArray(children), _toConsumableArray(footer)) : _toConsumableArray(footer);
  }

  return {
    children: children,
    headerOffset: headerOffset,
    footerOffset: footerOffset
  };
}

function getComponentAttributes($attrs, componentData) {
  var attributes = null;

  var update = function update(name, value) {
    attributes = buildAttribute(attributes, name, value);
  };

  var attrs = Object.keys($attrs).filter(function (key) {
    return key === "id" || key.startsWith("data-");
  }).reduce(function (res, key) {
    res[key] = $attrs[key];
    return res;
  }, {});
  update("attrs", attrs);

  if (!componentData) {
    return attributes;
  }

  var on = componentData.on,
      props = componentData.props,
      componentDataAttrs = componentData.attrs;
  update("on", on);
  update("props", props);
  Object.assign(attributes.attrs, componentDataAttrs);
  return attributes;
}

var eventsListened = ["Start", "Add", "Remove", "Update", "End"];
var eventsToEmit = ["Choose", "Unchoose", "Sort", "Filter", "Clone"];
var readonlyProperties = ["Move"].concat(eventsListened, eventsToEmit).map(function (evt) {
  return "on" + evt;
});
var draggingElement = null;
var props = {
  options: Object,
  list: {
    type: Array,
    required: false,
    default: null
  },
  value: {
    type: Array,
    required: false,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: false
  },
  clone: {
    type: Function,
    default: function _default(original) {
      return original;
    }
  },
  element: {
    type: String,
    default: "div"
  },
  tag: {
    type: String,
    default: null
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: false,
    default: null
  }
};
var draggableComponent = {
  name: "draggable",
  inheritAttrs: false,
  props: props,
  data: function data() {
    return {
      transitionMode: false,
      noneFunctionalComponentMode: false
    };
  },
  render: function render(h) {
    var slots = this.$slots.default;
    this.transitionMode = vuedraggable_isTransition(slots);

    var _computeChildrenAndOf = computeChildrenAndOffsets(slots, this.$slots, this.$scopedSlots),
        children = _computeChildrenAndOf.children,
        headerOffset = _computeChildrenAndOf.headerOffset,
        footerOffset = _computeChildrenAndOf.footerOffset;

    this.headerOffset = headerOffset;
    this.footerOffset = footerOffset;
    var attributes = getComponentAttributes(this.$attrs, this.componentData);
    return h(this.getTag(), attributes, children);
  },
  created: function created() {
    if (this.list !== null && this.value !== null) {
      helper["b" /* console */].error("Value and list props are mutually exclusive! Please set one or another.");
    }

    if (this.element !== "div") {
      helper["b" /* console */].warn("Element props is deprecated please use tag props instead. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#element-props");
    }

    if (this.options !== undefined) {
      helper["b" /* console */].warn("Options props is deprecated, add sortable options directly as vue.draggable item, or use v-bind. See https://github.com/SortableJS/Vue.Draggable/blob/master/documentation/migrate.md#options-props");
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.noneFunctionalComponentMode = this.getTag().toLowerCase() !== this.$el.nodeName.toLowerCase() && !this.getIsFunctional();

    if (this.noneFunctionalComponentMode && this.transitionMode) {
      throw new Error("Transition-group inside component is not supported. Please alter tag value or remove transition-group. Current tag value: ".concat(this.getTag()));
    }

    var optionsAdded = {};
    eventsListened.forEach(function (elt) {
      optionsAdded["on" + elt] = delegateAndEmit.call(_this3, elt);
    });
    eventsToEmit.forEach(function (elt) {
      optionsAdded["on" + elt] = emit.bind(_this3, elt);
    });
    var attributes = Object.keys(this.$attrs).reduce(function (res, key) {
      res[Object(helper["a" /* camelize */])(key)] = _this3.$attrs[key];
      return res;
    }, {});
    var options = Object.assign({}, this.options, attributes, optionsAdded, {
      onMove: function onMove(evt, originalEvent) {
        return _this3.onDragMove(evt, originalEvent);
      }
    });
    !("draggable" in options) && (options.draggable = ">*");
    this._sortable = new external_commonjs_sortablejs_commonjs2_sortablejs_amd_sortablejs_root_Sortable_default.a(this.rootContainer, options);
    this.computeIndexes();
  },
  beforeDestroy: function beforeDestroy() {
    if (this._sortable !== undefined) this._sortable.destroy();
  },
  computed: {
    rootContainer: function rootContainer() {
      return this.transitionMode ? this.$el.children[0] : this.$el;
    },
    realList: function realList() {
      return this.list ? this.list : this.value;
    }
  },
  watch: {
    options: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    $attrs: {
      handler: function handler(newOptionValue) {
        this.updateOptions(newOptionValue);
      },
      deep: true
    },
    realList: function realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getIsFunctional: function getIsFunctional() {
      var fnOptions = this._vnode.fnOptions;
      return fnOptions && fnOptions.functional;
    },
    getTag: function getTag() {
      return this.tag || this.element;
    },
    updateOptions: function updateOptions(newOptionValue) {
      for (var property in newOptionValue) {
        var value = Object(helper["a" /* camelize */])(property);

        if (readonlyProperties.indexOf(value) === -1) {
          this._sortable.option(value, newOptionValue[property]);
        }
      }
    },
    getChildrenNodes: function getChildrenNodes() {
      if (this.noneFunctionalComponentMode) {
        return this.$children[0].$slots.default;
      }

      var rawNodes = this.$slots.default;
      return this.transitionMode ? rawNodes[0].child.$slots.default : rawNodes;
    },
    computeIndexes: function computeIndexes() {
      var _this4 = this;

      this.$nextTick(function () {
        _this4.visibleIndexes = _computeIndexes(_this4.getChildrenNodes(), _this4.rootContainer.children, _this4.transitionMode, _this4.footerOffset);
      });
    },
    getUnderlyingVm: function getUnderlyingVm(htmlElt) {
      var index = computeVmIndex(this.getChildrenNodes() || [], htmlElt);

      if (index === -1) {
        //Edge case during move callback: related element might be
        //an element different from collection
        return null;
      }

      var element = this.realList[index];
      return {
        index: index,
        element: element
      };
    },
    getUnderlyingPotencialDraggableComponent: function getUnderlyingPotencialDraggableComponent(_ref) {
      var vue = _ref.__vue__;

      if (!vue || !vue.$options || !isTransitionName(vue.$options._componentTag)) {
        if (!("realList" in vue) && vue.$children.length === 1 && "realList" in vue.$children[0]) return vue.$children[0];
        return vue;
      }

      return vue.$parent;
    },
    emitChanges: function emitChanges(evt) {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit("change", evt);
      });
    },
    alterList: function alterList(onList) {
      if (this.list) {
        onList(this.list);
        return;
      }

      var newList = _toConsumableArray(this.value);

      onList(newList);
      this.$emit("input", newList);
    },
    spliceList: function spliceList() {
      var _arguments = arguments;

      var spliceList = function spliceList(list) {
        return list.splice.apply(list, _toConsumableArray(_arguments));
      };

      this.alterList(spliceList);
    },
    updatePosition: function updatePosition(oldIndex, newIndex) {
      var updatePosition = function updatePosition(list) {
        return list.splice(newIndex, 0, list.splice(oldIndex, 1)[0]);
      };

      this.alterList(updatePosition);
    },
    getRelatedContextFromMoveEvent: function getRelatedContextFromMoveEvent(_ref2) {
      var to = _ref2.to,
          related = _ref2.related;
      var component = this.getUnderlyingPotencialDraggableComponent(to);

      if (!component) {
        return {
          component: component
        };
      }

      var list = component.realList;
      var context = {
        list: list,
        component: component
      };

      if (to !== related && list && component.getUnderlyingVm) {
        var destination = component.getUnderlyingVm(related);

        if (destination) {
          return Object.assign(destination, context);
        }
      }

      return context;
    },
    getVmIndex: function getVmIndex(domIndex) {
      var indexes = this.visibleIndexes;
      var numberIndexes = indexes.length;
      return domIndex > numberIndexes - 1 ? numberIndexes : indexes[domIndex];
    },
    getComponent: function getComponent() {
      return this.$slots.default[0].componentInstance;
    },
    resetTransitionData: function resetTransitionData(index) {
      if (!this.noTransitionOnDrag || !this.transitionMode) {
        return;
      }

      var nodes = this.getChildrenNodes();
      nodes[index].data = null;
      var transitionContainer = this.getComponent();
      transitionContainer.children = [];
      transitionContainer.kept = undefined;
    },
    onDragStart: function onDragStart(evt) {
      this.context = this.getUnderlyingVm(evt.item);
      evt.item._underlying_vm_ = this.clone(this.context.element);
      draggingElement = evt.item;
    },
    onDragAdd: function onDragAdd(evt) {
      var element = evt.item._underlying_vm_;

      if (element === undefined) {
        return;
      }

      Object(helper["d" /* removeNode */])(evt.item);
      var newIndex = this.getVmIndex(evt.newIndex);
      this.spliceList(newIndex, 0, element);
      this.computeIndexes();
      var added = {
        element: element,
        newIndex: newIndex
      };
      this.emitChanges({
        added: added
      });
    },
    onDragRemove: function onDragRemove(evt) {
      Object(helper["c" /* insertNodeAt */])(this.rootContainer, evt.item, evt.oldIndex);

      if (evt.pullMode === "clone") {
        Object(helper["d" /* removeNode */])(evt.clone);
        return;
      }

      var oldIndex = this.context.index;
      this.spliceList(oldIndex, 1);
      var removed = {
        element: this.context.element,
        oldIndex: oldIndex
      };
      this.resetTransitionData(oldIndex);
      this.emitChanges({
        removed: removed
      });
    },
    onDragUpdate: function onDragUpdate(evt) {
      Object(helper["d" /* removeNode */])(evt.item);
      Object(helper["c" /* insertNodeAt */])(evt.from, evt.item, evt.oldIndex);
      var oldIndex = this.context.index;
      var newIndex = this.getVmIndex(evt.newIndex);
      this.updatePosition(oldIndex, newIndex);
      var moved = {
        element: this.context.element,
        oldIndex: oldIndex,
        newIndex: newIndex
      };
      this.emitChanges({
        moved: moved
      });
    },
    updateProperty: function updateProperty(evt, propertyName) {
      evt.hasOwnProperty(propertyName) && (evt[propertyName] += this.headerOffset);
    },
    computeFutureIndex: function computeFutureIndex(relatedContext, evt) {
      if (!relatedContext.element) {
        return 0;
      }

      var domChildren = _toConsumableArray(evt.to.children).filter(function (el) {
        return el.style["display"] !== "none";
      });

      var currentDOMIndex = domChildren.indexOf(evt.related);
      var currentIndex = relatedContext.component.getVmIndex(currentDOMIndex);
      var draggedInList = domChildren.indexOf(draggingElement) !== -1;
      return draggedInList || !evt.willInsertAfter ? currentIndex : currentIndex + 1;
    },
    onDragMove: function onDragMove(evt, originalEvent) {
      var onMove = this.move;

      if (!onMove || !this.realList) {
        return true;
      }

      var relatedContext = this.getRelatedContextFromMoveEvent(evt);
      var draggedContext = this.context;
      var futureIndex = this.computeFutureIndex(relatedContext, evt);
      Object.assign(draggedContext, {
        futureIndex: futureIndex
      });
      var sendEvt = Object.assign({}, evt, {
        relatedContext: relatedContext,
        draggedContext: draggedContext
      });
      return onMove(sendEvt, originalEvent);
    },
    onDragEnd: function onDragEnd() {
      this.computeIndexes();
      draggingElement = null;
    }
  }
};

if (typeof window !== "undefined" && "Vue" in window) {
  window.Vue.component("draggable", draggableComponent);
}

/* harmony default export */ var vuedraggable = (draggableComponent);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (vuedraggable);



/***/ })

/******/ })["default"];
//# sourceMappingURL=vuedraggable.common.js.map

/***/ }),

/***/ "32e9":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");
module.exports = __webpack_require__("9e1e") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "32fc":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("e53d").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "335c":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("6b4c");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "33a4":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("84f2");
var ITERATOR = __webpack_require__("2b4c")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "34ef":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("ec30")('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),

/***/ "353a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var boolToStr = Boolean.prototype.toString;

var tryBooleanObject = function booleanBrandCheck(value) {
	try {
		boolToStr.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var boolClass = '[object Boolean]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isBoolean(value) {
	if (typeof value === 'boolean') {
		return true;
	}
	if (value === null || typeof value !== 'object') {
		return false;
	}
	return hasToStringTag && Symbol.toStringTag in value ? tryBooleanObject(value) : toStr.call(value) === boolClass;
};


/***/ }),

/***/ "355d":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "35e8":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var createDesc = __webpack_require__("aebd");
module.exports = __webpack_require__("8e60") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "36bd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "36c3":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("335c");
var defined = __webpack_require__("25eb");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "3702":
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__("481b");
var ITERATOR = __webpack_require__("5168")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "37c8":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("2b4c");


/***/ }),

/***/ "3846":
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__("9e1e") && /./g.flags != 'g') __webpack_require__("86cc").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__("0bfb")
});


/***/ }),

/***/ "38fd":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("69a8");
var toObject = __webpack_require__("4bf8");
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "3a38":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "3a72":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var LIBRARY = __webpack_require__("2d00");
var wksExt = __webpack_require__("37c8");
var defineProperty = __webpack_require__("86cc").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "3b2b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var inheritIfRequired = __webpack_require__("5dbc");
var dP = __webpack_require__("86cc").f;
var gOPN = __webpack_require__("9093").f;
var isRegExp = __webpack_require__("aae3");
var $flags = __webpack_require__("0bfb");
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__("9e1e") && (!CORRECT_NEW || __webpack_require__("79e5")(function () {
  re2[__webpack_require__("2b4c")('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__("2aba")(global, 'RegExp', $RegExp);
}

__webpack_require__("7a56")('RegExp');


/***/ }),

/***/ "40c3":
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__("6b4c");
var TAG = __webpack_require__("5168")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "41a0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("2aeb");
var descriptor = __webpack_require__("4630");
var setToStringTag = __webpack_require__("7f20");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("32e9")(IteratorPrototype, __webpack_require__("2b4c")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "4362":
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__("df7c");
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),

/***/ "43b3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HELPER; });
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("20d6");
/* harmony import */ var core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_index__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("456d");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("7514");
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("34ef");
/* harmony import */ var core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_typed_uint8_array__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("6b54");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_6__);







var HELPER = {};
/**
 * Deep-Clone an Object
 * @param obj
 * @returns {any}
 */

HELPER.cloneDeep = function (obj) {
  return JSON.parse(JSON.stringify(obj));
};
/**
 * Get UUIDv4
 * @returns {String}
 */


HELPER.getUUIDv4 = function () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
    return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
  });
};
/**
 * Find inside object/array by a specific rule
 * @param {Array|Object} collection
 * @param {string} ruleKey
 * @param {string} value
 * @returns {any|undefined} first item that matched the rule or undefined
 * @complexity O(n) for normal cases, best case will be O(1) or O(logn)
 */


HELPER.find = function (collection, ruleKey, value) {
  // Only array has `length` property
  if (collection.length) {
    // array
    return collection.find(function (item) {
      return item[ruleKey] == value;
    });
  } // object traversal


  var keys = Object.keys(collection);

  for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
    var objKey = _keys[_i];
    var data = collection[objKey];

    if (data && data[ruleKey] == value) {
      return data;
    }
  }

  return undefined;
};
/**
 * Find array by a specific rule and return the index
 * @param {Array} array
 * @param {string} ruleKey - If it's undefined, we check the item only
 * @param {string} value
 * @returns {number} first item that matched the rule or -1
 * @complexity O(n) for normal cases, best case will be O(1) or O(logn)
 */


HELPER.findIndex = function (array, ruleKey, value) {
  return array.findIndex(function (item) {
    if (!ruleKey) return item == value;
    return item[ruleKey] == value;
  });
};



/***/ }),

/***/ "44b7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__("0f7c");

var GetIntrinsic = __webpack_require__("e9ac");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

module.exports = function callBind() {
	return $reflectApply(bind, $call, arguments);
};

module.exports.apply = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};


/***/ }),

/***/ "454f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("46a7");
var $Object = __webpack_require__("584a").Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),

/***/ "456d":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__("4bf8");
var $keys = __webpack_require__("0d58");

__webpack_require__("5eda")('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),

/***/ "4588":
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "45f2":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("d9f6").f;
var has = __webpack_require__("07e3");
var TAG = __webpack_require__("5168")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "4630":
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

/***/ "469f":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("7d7b");


/***/ }),

/***/ "46a7":
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__("63b6");
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__("8e60"), 'Object', { defineProperty: __webpack_require__("d9f6").f });


/***/ }),

/***/ "47ee":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("c3a1");
var gOPS = __webpack_require__("9aa9");
var pIE = __webpack_require__("355d");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "481b":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4bf8":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "4ee1":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("5168")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "504c":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("9e1e");
var getKeys = __webpack_require__("0d58");
var toIObject = __webpack_require__("6821");
var isEnum = __webpack_require__("52a7").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "50ed":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "5147":
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "5156":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var origSymbol = global.Symbol;
var hasSymbolSham = __webpack_require__("1696");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "5168":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("dbdb")('wks');
var uid = __webpack_require__("62a0");
var Symbol = __webpack_require__("e53d").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "520a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__("0bfb");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
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

/***/ "52a7":
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),

/***/ "53e2":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__("07e3");
var toObject = __webpack_require__("241e");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "5402":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__("e9ac");
var callBound = __webpack_require__("2a1a");
var inspect = __webpack_require__("2714");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);
var $push = callBound('Array.prototype.push');

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);
var objectGet = function (objects, key) { // eslint-disable-line consistent-return
	for (var i = 0; i < objects.length; i += 1) {
		if (objects[i].key === key) {
			return objects[i].value;
		}
	}
};
var objectSet = function (objects, key, value) {
	for (var i = 0; i < objects.length; i += 1) {
		if (objects[i].key === key) {
			objects[i].value = value; // eslint-disable-line no-param-reassign
			return;
		}
	}
	$push(objects, {
		key: key,
		value: value
	});
};
var objectHas = function (objects, key) {
	for (var i = 0; i < objects.length; i += 1) {
		if (objects[i].key === key) {
			return true;
		}
	}
	return false;
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return objectGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return objectHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					$o = [];
				}
				objectSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ "549b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__("d864");
var $export = __webpack_require__("63b6");
var toObject = __webpack_require__("241e");
var call = __webpack_require__("b0dc");
var isArrayIter = __webpack_require__("3702");
var toLength = __webpack_require__("b447");
var createProperty = __webpack_require__("20fd");
var getIterFn = __webpack_require__("7cd6");

$export($export.S + $export.F * !__webpack_require__("4ee1")(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),

/***/ "54a1":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6c1c");
__webpack_require__("1654");
module.exports = __webpack_require__("95d5");


/***/ }),

/***/ "5537":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("8378");
var global = __webpack_require__("7726");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("2d00") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "5559":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("dbdb")('keys');
var uid = __webpack_require__("62a0");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "55b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strValue = String.prototype.valueOf;
var tryStringObject = function tryStringObject(value) {
	try {
		strValue.call(value);
		return true;
	} catch (e) {
		return false;
	}
};
var toStr = Object.prototype.toString;
var strClass = '[object String]';
var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

module.exports = function isString(value) {
	if (typeof value === 'string') {
		return true;
	}
	if (typeof value !== 'object') {
		return false;
	}
	return hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;
};


/***/ }),

/***/ "55dd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__("5ca1");
var aFunction = __webpack_require__("d8e8");
var toObject = __webpack_require__("4bf8");
var fails = __webpack_require__("79e5");
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__("2f21")($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),

/***/ "5708":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Object = Object;
var $TypeError = TypeError;

module.exports = function flags() {
	if (this != null && this !== $Object(this)) {
		throw new $TypeError('RegExp.prototype.flags getter called on non-object');
	}
	var result = '';
	if (this.global) {
		result += 'g';
	}
	if (this.ignoreCase) {
		result += 'i';
	}
	if (this.multiline) {
		result += 'm';
	}
	if (this.dotAll) {
		result += 's';
	}
	if (this.unicode) {
		result += 'u';
	}
	if (this.sticky) {
		result += 'y';
	}
	return result;
};


/***/ }),

/***/ "57ec":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("5708");

var supportsDescriptors = __webpack_require__("f367").supportsDescriptors;
var $gOPD = Object.getOwnPropertyDescriptor;
var $TypeError = TypeError;

module.exports = function getPolyfill() {
	if (!supportsDescriptors) {
		throw new $TypeError('RegExp.prototype.flags requires a true ES5 environment that supports property descriptors');
	}
	if ((/a/mig).flags === 'gim') {
		var descriptor = $gOPD(RegExp.prototype, 'flags');
		if (descriptor && typeof descriptor.get === 'function' && typeof (/a/).dotAll === 'boolean') {
			return descriptor.get;
		}
	}
	return implementation;
};


/***/ }),

/***/ "5834":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("d6ef");

module.exports = function getPolyfill() {
	return typeof Object.is === 'function' ? Object.is : implementation;
};


/***/ }),

/***/ "584a":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "5b4e":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("36c3");
var toLength = __webpack_require__("b447");
var toAbsoluteIndex = __webpack_require__("0fc9");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "5ca1":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("7726");
var core = __webpack_require__("8378");
var hide = __webpack_require__("32e9");
var redefine = __webpack_require__("2aba");
var ctx = __webpack_require__("9b43");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "5cc5":
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__("2b4c")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "5d58":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d8d6");

/***/ }),

/***/ "5d73":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("469f");

/***/ }),

/***/ "5dbc":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var setPrototypeOf = __webpack_require__("8b97").set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),

/***/ "5df3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__("02f4")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__("01f9")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "5eda":
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__("5ca1");
var core = __webpack_require__("8378");
var fails = __webpack_require__("79e5");
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),

/***/ "5f1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__("23c6");
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ "613b":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5537")('keys');
var uid = __webpack_require__("ca5a");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "626a":
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__("2d95");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "62a0":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "63b6":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var ctx = __webpack_require__("d864");
var hide = __webpack_require__("35e8");
var has = __webpack_require__("07e3");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "653e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CONTROL_FIELD_EXTEND_MIXIN; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mixins_style_injection_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("28fe");


/**
 * Base Setup for any `controls` of Control in Vue-Form-Builder
 * @example InputControl - use the mixin. I'll keep our code extendable as possible
 */

var EMIT_EVENT = "change";
var CONTROL_FIELD_EXTEND_MIXIN = {
  mixins: [_mixins_style_injection_mixin__WEBPACK_IMPORTED_MODULE_1__[/* STYLE_INJECTION_MIXIN */ "a"]],
  props: {
    // control configuration
    control: {
      type: Object,
      required: true
    },
    // v-model value
    value: null // any types

  },
  // global data-field - available to override
  data: function data() {
    return {
      stopDefaultValueAssign: false
    };
  },

  /**
   * For V-Model Purpose
   * Basically, we will emit the 'change' to the parent to keep the update...
   */
  model: {
    event: EMIT_EVENT,
    props: "value"
  },
  watch: {
    /**
     * Watch if there is new data being assigned
     * @param val
     */
    value: function value(val) {
      this.setValue(val);
    }
  },
  methods: {
    /**
     * Run this to emit the value to the parent
     * @param val
     */
    updateValue: function updateValue(val) {
      if (this.control.isUpperCaseMode) {
        this.$emit(EMIT_EVENT, val.toUpperCase());
      } else {
        this.$emit(EMIT_EVENT, val);
      }
    },

    /**
     * Need-To-Override Method - Set Value.
     * Set value from parent to the current field/control
     */
    setValue: function setValue(val) {
      return val;
    } // NEED TO OVERRIDE

  },
  computed: {
    /**
     * Class for Field (input)
     * @returns {(string)[]}
     */
    controlFieldClass: function controlFieldClass() {
      return [this.styles.FORM.FORM_CONTROL, this.control.additionalFieldClass, this.control.textTransformClass];
    },

    /**
     * Control Name
     * @returns {*|string|string}
     */
    controlName: function controlName() {
      return this.control.name || this.control.uniqueId;
    }
  },

  /**
   * Global post-mounted processing
   */
  mounted: function mounted() {
    // default set value
    if (this.stopDefaultValueAssign === false && !this.value && this.control.defaultValue) {
      this.updateValue(this.control.defaultValue);
    }
  }
};


/***/ }),

/***/ "65fb":
/***/ (function(module, exports) {



/***/ }),

/***/ "6718":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("e53d");
var core = __webpack_require__("584a");
var LIBRARY = __webpack_require__("b8e3");
var wksExt = __webpack_require__("ccb9");
var defineProperty = __webpack_require__("d9f6").f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),

/***/ "6728":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6762":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__("5ca1");
var $includes = __webpack_require__("c366")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__("9c6c")('includes');


/***/ }),

/***/ "67ab":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("ca5a")('meta');
var isObject = __webpack_require__("d3f4");
var has = __webpack_require__("69a8");
var setDesc = __webpack_require__("86cc").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("79e5")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "67bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f921");

/***/ }),

/***/ "6821":
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__("626a");
var defined = __webpack_require__("be13");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "688e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "69a8":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "69d3":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('asyncIterator');


/***/ }),

/***/ "6a29":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormBuilder.vue?vue&type=template&id=2567a0ae&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.styles.CONTAINER.FLUID, 'form-padding', 'vue-form-builder']},[_c('FormConfiguration',{attrs:{"permissions":_vm.permissions},model:{value:(_vm.formData.formConfig),callback:function ($$v) {_vm.$set(_vm.formData, "formConfig", $$v)},expression:"formData.formConfig"}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.formData.formConfig.isShowHeadline),expression:"formData.formConfig.isShowHeadline"}],staticClass:"form-headline-container"},[_c('h1',{domProps:{"textContent":_vm._s(_vm.formData.formConfig.headline)}}),_c('p',{domProps:{"textContent":_vm._s(_vm.formData.formConfig.subHeadline)}})]),_vm._l((_vm.sortedSections),function(sectionData){return _c('SectionContainer',{key:sectionData.uniqueId,attrs:{"section":sectionData,"rows":_vm.formData.rows,"controls":_vm.formData.controls,"permissions":_vm.permissions}})}),(_vm.permissions.canAddSection)?_c('AddSectionControl',{on:{"addSectionNotify":_vm.addSection}}):_vm._e(),_c('GlobalSidebar',{attrs:{"formData":_vm.formData,"permissions":_vm.permissions}}),_c('GlobalModal',{attrs:{"formData":_vm.formData,"permissions":_vm.permissions}}),_c('hr'),_c('p',{staticClass:"copyright-text",domProps:{"textContent":_vm._s(_vm.copyrightText)}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FormBuilder.vue?vue&type=template&id=2567a0ae&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("7618");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/add-controls/AddSectionControl.vue?vue&type=template&id=02d85b7e&
var AddSectionControlvue_type_template_id_02d85b7e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"add-section-container",class:_vm.styles.COLUMNS.COL12,on:{"click":_vm.showOption}},[_c('p',[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('addOutline', '32px', '32px', '#000'))}}),_c('span',[_vm._v("Add Section")])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.show),expression:"show"}],class:[_vm.styles.LIST_GROUP.CONTAINER, 'add-container-list']},_vm._l((_vm.sectionTypes),function(sectionInfo,sectionKey){return _c('a',{class:_vm.styles.LIST_GROUP.SINGLE_ITEM,attrs:{"href":"javascript:void(0)"},on:{"click":function($event){return _vm.addNew(sectionKey)}}},[_c('p',{staticClass:"type-headline",domProps:{"textContent":_vm._s(sectionInfo.name)}}),_c('p',{staticClass:"type-desc",domProps:{"textContent":_vm._s(sectionInfo.description)}})])}),0)])}
var AddSectionControlvue_type_template_id_02d85b7e_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/add-controls/AddSectionControl.vue?vue&type=template&id=02d85b7e&

// EXTERNAL MODULE: ./src/configs/styles.js
var styles = __webpack_require__("d60e");

// EXTERNAL MODULE: ./src/configs/section.js + 121 modules
var section = __webpack_require__("dd3c");

// EXTERNAL MODULE: ./src/mixins/style-injection-mixin.js
var style_injection_mixin = __webpack_require__("28fe");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/add-controls/AddSectionControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var AddSectionControlvue_type_script_lang_js_ = ({
  name: "AddSectionControl",
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  data: function data() {
    return {
      show: false,
      sectionTypes: section["b" /* SECTION_TYPES */]
    };
  },
  methods: {
    showOption: function showOption() {
      this.show = !this.show;
    },
    addNew: function addNew(type) {
      this.$emit('addSectionNotify', type);
    }
  }
});
// CONCATENATED MODULE: ./src/views/builder/add-controls/AddSectionControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var add_controls_AddSectionControlvue_type_script_lang_js_ = (AddSectionControlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/builder/add-controls/AddSectionControl.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  add_controls_AddSectionControlvue_type_script_lang_js_,
  AddSectionControlvue_type_template_id_02d85b7e_render,
  AddSectionControlvue_type_template_id_02d85b7e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddSectionControl = (component.exports);
// CONCATENATED MODULE: ./src/configs/index.js
/**
 * Main Configuration of the Vue-Form-Builder
 * @author Phat Tran
 */
var MAIN_CONSTANTS = {
  COPYRIGHT: "Vue-Form-Builder v2.1.1 - github.com/sethsandaru with Love <3"
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/SectionContainer.vue?vue&type=template&id=100bea57&scoped=true&
var SectionContainervue_type_template_id_100bea57_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-container",class:{'active': _vm.isDoingConfiguration}},[_c('SectionNavigationBar',{attrs:{"section":_vm.section,"permissions":_vm.permissions},on:{"active":_vm.setActive}}),_c(_vm.sectionViewComponent,{key:_vm.section.uniqueId,tag:"component",attrs:{"section":_vm.section,"rows":_vm.rows,"controls":_vm.controls,"permissions":_vm.permissions}})],1)}
var SectionContainervue_type_template_id_100bea57_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/SectionContainer.vue?vue&type=template&id=100bea57&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/SectionNavigationBar.vue?vue&type=template&id=648e69ef&
var SectionNavigationBarvue_type_template_id_648e69ef_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-config"},[_c('div',{staticClass:"buttons"},[(_vm.preCustomButtonView)?_c(_vm.preCustomButtonView,{tag:"component",attrs:{"section":_vm.section,"permissions":_vm.permissions}}):_vm._e(),_c('button',{class:_vm.styles.BUTTON.PRIMARY,attrs:{"title":"Push Up","disabled":!_vm.permissions.canReOrderingSection},domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('arrowUp'))},on:{"click":_vm.pushUp}}),_c('button',{class:_vm.styles.BUTTON.SECONDARY,attrs:{"title":"Push Down","disabled":!_vm.permissions.canReOrderingSection},domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('arrowDown'))},on:{"click":_vm.pushDown}}),_c('button',{class:_vm.styles.BUTTON.INFO,attrs:{"disabled":!_vm.permissions.canEditSection},on:{"click":_vm.openConfiguration}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('cog'))}}),_c('span',[_vm._v("Configuration")])]),_c('button',{class:_vm.styles.BUTTON.DANGER,attrs:{"disabled":!_vm.permissions.canDeleteSection},on:{"click":_vm.deleteSection}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('trash'))}}),_c('span',[_vm._v("Delete")])]),(_vm.postCustomButtonView)?_c(_vm.postCustomButtonView,{tag:"component",attrs:{"section":_vm.section,"permissions":_vm.permissions}}):_vm._e()],1)])}
var SectionNavigationBarvue_type_template_id_648e69ef_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/SectionNavigationBar.vue?vue&type=template&id=648e69ef&

// EXTERNAL MODULE: ./src/configs/events.js
var events = __webpack_require__("fbe6");

// CONCATENATED MODULE: ./src/mixins/section-sort-mixins.js
/**
 * Section Sort Mixins
 * @desc Where I handle the sorting (push up/down) for the Section
 * @used SectionNavigationBar
 * @author Phat Tran
 */

var SECTION_SORT_MIXINS = {
  methods: {
    /**
     * Push-up Section
     * @desc Send Fire Event to Parent to handle the Push-Up of Current Section
     * @listener FormBuilder
     */
    pushUp: function pushUp() {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.PUSH, this.section, 0);
    },

    /**
     * Push-down Section
     * @desc Send Fire Event to Parent to handle the Push-Down of Current Section
     * @listener FormBuilder
     */
    pushDown: function pushDown() {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.PUSH, this.section, 1);
    }
  }
};

// EXTERNAL MODULE: ./src/libraries/sidebar-renderer.class.js
var sidebar_renderer_class = __webpack_require__("1ec8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/SidebarSectionConfiguration.vue?vue&type=template&id=4c140b9b&
var SidebarSectionConfigurationvue_type_template_id_4c140b9b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar-form-configuration"},[_c('h5',[_vm._v("Section Configuration")]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Headline")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sectionConfiguration.headline),expression:"sectionConfiguration.headline"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.sectionConfiguration.headline)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.sectionConfiguration, "headline", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Headline Additional Class (CSS)")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sectionConfiguration.headlineAdditionalClass),expression:"sectionConfiguration.headlineAdditionalClass"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.sectionConfiguration.headlineAdditionalClass)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.sectionConfiguration, "headlineAdditionalClass", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Sub-Headline")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sectionConfiguration.subHeadline),expression:"sectionConfiguration.subHeadline"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.sectionConfiguration.subHeadline)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.sectionConfiguration, "subHeadline", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Sub-Headline Additional Class (CSS)")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sectionConfiguration.subHeadlineAdditionalClass),expression:"sectionConfiguration.subHeadlineAdditionalClass"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.sectionConfiguration.subHeadlineAdditionalClass)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.sectionConfiguration, "subHeadlineAdditionalClass", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Show Section Headline? "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sectionConfiguration.isShowHeadline),expression:"sectionConfiguration.isShowHeadline"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.sectionConfiguration.isShowHeadline)?_vm._i(_vm.sectionConfiguration.isShowHeadline,null)>-1:(_vm.sectionConfiguration.isShowHeadline)},on:{"change":function($event){var $$a=_vm.sectionConfiguration.isShowHeadline,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.sectionConfiguration, "isShowHeadline", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.sectionConfiguration, "isShowHeadline", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.sectionConfiguration, "isShowHeadline", $$c)}}}})])]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Hide in Report? "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.sectionConfiguration.hideOnReport),expression:"sectionConfiguration.hideOnReport"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.sectionConfiguration.hideOnReport)?_vm._i(_vm.sectionConfiguration.hideOnReport,null)>-1:(_vm.sectionConfiguration.hideOnReport)},on:{"change":function($event){var $$a=_vm.sectionConfiguration.hideOnReport,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.sectionConfiguration, "hideOnReport", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.sectionConfiguration, "hideOnReport", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.sectionConfiguration, "hideOnReport", $$c)}}}})])]),_c('div',{staticClass:"buttons"},[_c('button',{class:_vm.styles.BUTTON.PRIMARY,on:{"click":function($event){return _vm.save(false)}}},[_vm._v(" Save ")]),_c('button',{class:_vm.styles.BUTTON.INFO,on:{"click":function($event){return _vm.save(true)}}},[_vm._v(" Save & Close ")])])])}
var SidebarSectionConfigurationvue_type_template_id_4c140b9b_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/SidebarSectionConfiguration.vue?vue&type=template&id=4c140b9b&

// EXTERNAL MODULE: ./src/mixins/sidebar-body-mixin.js
var sidebar_body_mixin = __webpack_require__("cbce");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/SidebarSectionConfiguration.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SidebarSectionConfigurationvue_type_script_lang_js_ = ({
  name: "SidebarSectionConfiguration",
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */], sidebar_body_mixin["a" /* SIDEBAR_BODY_MIXIN */]],
  data: function data() {
    return {
      dataKey: "sectionConfiguration",
      sectionConfiguration: Object.assign({}, section["a" /* SECTION_DEFAULT_DATA */])
    };
  },
  created: function created() {
    // retrieve the data from `GlobalSidebar` passed in
    this.sectionConfiguration = Object.assign({}, this.sectionConfiguration, this.dataPackage);
  }
});
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/SidebarSectionConfiguration.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_config_views_SidebarSectionConfigurationvue_type_script_lang_js_ = (SidebarSectionConfigurationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/SidebarSectionConfiguration.vue





/* normalize component */

var SidebarSectionConfiguration_component = Object(componentNormalizer["a" /* default */])(
  sidebar_config_views_SidebarSectionConfigurationvue_type_script_lang_js_,
  SidebarSectionConfigurationvue_type_template_id_4c140b9b_render,
  SidebarSectionConfigurationvue_type_template_id_4c140b9b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarSectionConfiguration = (SidebarSectionConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/SectionNavigationBar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ var SectionNavigationBarvue_type_script_lang_js_ = ({
  name: "SectionNavigationBar",
  mixins: [SECTION_SORT_MIXINS, style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  props: {
    section: {
      type: Object,
      required: true
    },
    permissions: Object
  },
  computed: {
    /**
     * Accessor - Get Section Type Configuration
     * @returns {{}}
     */
    sectionConfiguration: function sectionConfiguration() {
      return section["b" /* SECTION_TYPES */][this.section.type];
    },

    /**
     * Get Pre Custom Button View
     * @returns {VueComponent}
     */
    preCustomButtonView: function preCustomButtonView() {
      return this.sectionConfiguration.preCustomButtonView;
    },

    /**
     * Get Post Custom Button View
     * @returns {VueComponent}
     */
    postCustomButtonView: function postCustomButtonView() {
      return this.sectionConfiguration.postCustomButtonView;
    }
  },
  methods: {
    /**
     * Submit to delete a Section
     */
    deleteSection: function deleteSection() {
      if (this.section.rows.length > 0) {
        if (!confirm("This section contains row(s). Are you sure? Everything is gone and can't be recovered after deleted.")) {
          return;
        }
      } // submit to delete


      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.DELETE, this.section.uniqueId);
    },

    /**
     * Tell the sidebar to open so we can configure our Section =))
     */
    openConfiguration: function openConfiguration() {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPEN, this.section.uniqueId);
    },

    /**
     * We need this special event to know when the sidebar is opened
     * Therefore, we will render the sidebar and turn on the border (current editing section)
     */
    configurationOpened: function configurationOpened(runnerId) {
      if (this.section.uniqueId !== runnerId) {
        return;
      } // render sidebar and turn on the border


      this.renderSidebar();
      this.$emit('active', true); // call to parent to let it know this section is currently editing..
    },

    /**
     * Emitting the configuration to render the Section-Config-Sidebar
     */
    renderSidebar: function renderSidebar() {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.INJECT, new sidebar_renderer_class["a" /* default */](this.section.uniqueId, SidebarSectionConfiguration, this.section));
    },

    /**
     * Handle Saving the Form Configuration
     * @param {string} runnerId
     * @param {Object} data
     */
    saveConfiguration: function saveConfiguration(runnerId, data) {
      // does it out of scope? if it does, stop
      if (runnerId !== this.section.uniqueId) {
        return;
      }

      var newValue = Object.assign({}, this.section, data);
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.UPDATE, newValue);
    },

    /**
     * Save and close
     * @param runnerId
     * @param data
     */
    saveAndClose: function saveAndClose(runnerId, data) {
      // does it out of scope? if it does, stop
      if (runnerId !== this.section.uniqueId) {
        return;
      }

      this.saveConfiguration(runnerId, data);
    },

    /**
     * After Sidebar closed => Remove the Active Class
     */
    removeActive: function removeActive() {
      this.$emit('active', false); // call to parent to let it know this section is finished edit
    }
  },
  created: function created() {
    // listen to after-closed from GlobalSidebar
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.SAVE, this.saveConfiguration);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.SAVE_AND_CLOSE, this.saveAndClose);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.AFTER_CLOSED, this.removeActive);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPENED, this.configurationOpened);
  }
});
// CONCATENATED MODULE: ./src/views/builder/SectionNavigationBar.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_SectionNavigationBarvue_type_script_lang_js_ = (SectionNavigationBarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/SectionNavigationBar.vue





/* normalize component */

var SectionNavigationBar_component = Object(componentNormalizer["a" /* default */])(
  builder_SectionNavigationBarvue_type_script_lang_js_,
  SectionNavigationBarvue_type_template_id_648e69ef_render,
  SectionNavigationBarvue_type_template_id_648e69ef_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SectionNavigationBar = (SectionNavigationBar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/SectionContainer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var SectionContainervue_type_script_lang_js_ = ({
  name: "SectionContainer",
  components: {
    SectionNavigationBar: SectionNavigationBar
  },
  props: {
    section: Object,
    rows: Object,
    controls: Object,
    permissions: Object
  },
  data: function data() {
    return {
      isDoingConfiguration: false
    };
  },
  methods: {
    /**
     * Set Active in order to show the holder of current editing section
     * @param val
     */
    setActive: function setActive() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      this.isDoingConfiguration = val;
    }
  },
  computed: {
    sectionViewComponent: function sectionViewComponent() {
      return section["b" /* SECTION_TYPES */][this.section.type].builderView;
    }
  }
});
// CONCATENATED MODULE: ./src/views/builder/SectionContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_SectionContainervue_type_script_lang_js_ = (SectionContainervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/SectionContainer.vue





/* normalize component */

var SectionContainer_component = Object(componentNormalizer["a" /* default */])(
  builder_SectionContainervue_type_script_lang_js_,
  SectionContainervue_type_template_id_100bea57_scoped_true_render,
  SectionContainervue_type_template_id_100bea57_scoped_true_staticRenderFns,
  false,
  null,
  "100bea57",
  null
  
)

/* harmony default export */ var SectionContainer = (SectionContainer_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("ac4d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("1c4c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find-index.js
var es6_array_find_index = __webpack_require__("20d6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.find.js
var es6_array_find = __webpack_require__("7514");

// EXTERNAL MODULE: ./src/libraries/helper.js
var helper = __webpack_require__("43b3");

// CONCATENATED MODULE: ./src/mixins/form-builder/form-builder-event-handler.js










function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * [Note] Do not use this mixin for other purpose. This is where I move all the code of FormBuilder to keep easy to:
 *  - Structuring
 *  - Refactoring
 *  - ...
 *  This file will be handled all the Event (mostly listening) from the children to update the big `formData`
 *  @author Phat Tran <phattranminh96@gmail.com>
 */


var FORM_BUILDER_EVENT_HANDLER = {
  methods: {
    /**
     * Do mapping for section after row added
     * @param sectionId
     * @param rowId
     */
    sectionAndRowMapping: function sectionAndRowMapping(sectionId, rowId) {
      // push it into the section Rows...
      // I can ensure that sectionId is exists to be retrieved
      this.formData.sections[sectionId].rows.push(rowId);
    },

    /**
     * Push-up section (SORT)
     * @param sectionObj
     * @param {Number} type
     *  - 0 => Up
     *  - 1 => Down
     */
    sectionPushedUp: function sectionPushedUp(sectionObj) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if ( // sort == 0 and push up => stop
      sectionObj.sortOrder <= 1 && type === 0 || // sort == total_sections and push down => stop
      sectionObj.sortOrder === this.sortedSections.length && type === 1) {
        return;
      } // old sort order to exchange with the upper section


      var postSortOrder = sectionObj.sortOrder; // pick section from sort order - Sort Order is unique

      var preSectionOrder = type === 0 ? postSortOrder - 1 : postSortOrder + 1;
      var preSection = helper["a" /* HELPER */].find(this.formData.sections, "sortOrder", preSectionOrder); // swap now

      this.$set(this.formData.sections[sectionObj.uniqueId], 'sortOrder', preSectionOrder);
      this.$set(this.formData.sections[preSection.uniqueId], 'sortOrder', postSortOrder); // Sort Again After Swapped Order

      this.doSortSection();
    },

    /**
     * Delete a section
     * @param sectionId
     */
    sectionDelete: function sectionDelete(sectionId) {
      var _this = this;

      // validate input
      if (!this.formData.sections[sectionId]) {
        return;
      } // need to delete all the related control & row


      var sectionObj = this.formData.sections[sectionId];
      sectionObj.rows.forEach(function (rowId) {
        // delete inner control of the rows
        var rowItem = _this.formData.rows[rowId];
        rowItem.controls.forEach(function (controlId) {
          // delete control by ID :D
          _this.$delete(_this.formData.controls, controlId);
        }); // delete this rows.

        _this.$delete(_this.formData.rows, rowItem.uniqueId);
      }); // delete ($delete to reactive)

      this.$delete(this.formData.sections, sectionId); // Sort Again After Deleted

      this.doSortSection(); // re-index sortOrder
      // thankfully this still keep reference... :D

      var index = 1;

      var _iterator = _createForOfIteratorHelper(this.sortedSections),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _sectionObj = _step.value;
          _sectionObj.sortOrder = index++;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    },

    /**
     * Update data for section
     * @param sectionObj
     */
    sectionUpdate: function sectionUpdate(sectionObj) {
      var sectionId = sectionObj.uniqueId; // validate input

      if (!this.formData.sections.hasOwnProperty(sectionId)) {
        return;
      } // update by using the extend . best way


      this.formData.sections[sectionId] = Object.assign(this.formData.sections[sectionId], sectionObj);
    },

    /**
     * Added new row
     * @param rowObject
     */
    rowNewAdded: function rowNewAdded(rowObject) {
      // $set => reactive
      this.$set(this.formData.rows, rowObject.uniqueId, rowObject);
    },

    /**
     * Delete a specific row in the section
     * @param {string} rowId rowId that need to be delete
     * @param {string} sectionId row's current sectionId
     */
    rowDelete: function rowDelete(rowId, sectionId) {
      // first, delete row in section
      var indexInSection = helper["a" /* HELPER */].findIndex(this.formData.sections[sectionId].rows, undefined, rowId);
      this.formData.sections[sectionId].rows.splice(indexInSection, 1); // second, remove row in the big rows

      this.$delete(this.formData.rows, rowId); // lastly, final init to which-ever components listen to the event after deleted

      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.ROW.DELETED, rowId, sectionId);
    },

    /**
     * Added new control to a section
     * @param {string} parentId
     * @param {Object} controlObj
     */
    controlNewAdded: function controlNewAdded(parentId, controlObj) {
      // add into big list
      this.$set(this.formData.controls, controlObj.uniqueId, controlObj); // get type of the parent (section / row)

      var type = this.formData.sections.hasOwnProperty(parentId) ? 'section' : 'row';
      var controlUniqueId = controlObj.uniqueId; // add controlID to section / row

      if (type === 'section') {
        this.formData.sections[parentId].controls.push(controlUniqueId);
      } else {
        this.formData.rows[parentId].controls.push(controlUniqueId);
      }
    },

    /**
     * Delete a control from section/row
     * @param {string} parentId - Might be SectionId, might be RowId
     * @param {string} controlId - LOL
     * @afterHandled Emit an event to notify the deletion is complete
     */
    controlDeletion: function controlDeletion(parentId, controlId) {
      var type = this.formData.sections.hasOwnProperty(parentId) ? 'section' : 'row'; // FIRST: We delete the relationship in section/row

      if (type === 'section') {
        // find index and delete in section-controls
        var indexInSection = helper["a" /* HELPER */].findIndex(this.formData.sections[parentId].controls, undefined, controlId);
        this.formData.sections[parentId].controls.splice(indexInSection, 1);
      } else {
        // find index and delete in row-controls
        var indexInRow = helper["a" /* HELPER */].findIndex(this.formData.rows[parentId].controls, undefined, controlId);
        this.formData.rows[parentId].controls.splice(indexInRow, 1);
      } // SECOND: We delete the control object in `controls`


      this.$delete(this.formData.controls, controlId); // LAST: Emit DELETED (might be some component will register this??)

      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.CONTROL.DELETED, parentId, controlId);
    },

    /**
     * Update a control
     * @param {String} controlId
     * @param {Object} controlData
     */
    controlUpdated: function controlUpdated(controlId, controlData) {
      // validate input
      if (!this.formData.controls.hasOwnProperty(controlId)) {
        return;
      } // update by using the extend . best way


      this.formData.controls[controlId] = Object.assign(this.formData.controls[controlId], controlData);
    }
  },
  created: function created() {
    // section events
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.ADDED_ROW, this.sectionAndRowMapping);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.PUSH, this.sectionPushedUp);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.DELETE, this.sectionDelete);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.UPDATE, this.sectionUpdate); // row events

    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.ROW.CREATE, this.rowNewAdded);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.ROW.DELETE, this.rowDelete); // control events

    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.CONTROL.CREATE, this.controlNewAdded);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.CONTROL.DELETE, this.controlDeletion);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.CONTROL.UPDATE, this.controlUpdated);
  },
  beforeDestroy: function beforeDestroy() {
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.CONTROL.CREATE);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.CONTROL.DELETE);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.CONTROL.UPDATE);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.MODAL.INJECT);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.MODAL.OPEN);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.ROW.CREATE);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.ROW.DELETE);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.ADDED_ROW);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.DELETE);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.UPDATE);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.AFTER_CLOSED);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.INJECT);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPEN);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPENED);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.SAVE);
    this.$formEvent.$off(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.SAVE_AND_CLOSE);
  } // beforeUpdate() {
  //     console.log(this.$formEvent._events)
  // }

};

// EXTERNAL MODULE: ./src/mixins/form-builder/form-builder-methods.js + 1 modules
var form_builder_methods = __webpack_require__("bcc7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// CONCATENATED MODULE: ./src/mixins/form-builder/form-builder-model.js



/**
 * [Note] Do not use this mixin for other purpose. This is where I move all the code of FormBuilder to keep easy to:
 *  - Structuring
 *  - Refactoring
 *  - ...
 *  This file will be handle the v-model of the FormBuilder.
 *  @author Phat Tran <phattranminh96@gmail.com>
 */
var EMIT_EVENT = "change";

var deepEqual = __webpack_require__("7fae"); // TO CHECK THE DEEPEST VALUES OF THE FORM...


var FORM_BUILDER_MODEL = {
  props: {
    value: Object
  },
  model: {
    event: EMIT_EVENT,
    props: "value"
  },
  watch: {
    /**
     * For Update New Configuration After User Changed the Form
     */
    formData: {
      deep: true,
      // deep watcher - because we have a long-tree object
      handler: function handler(newFormData) {
        this.$emit(EMIT_EVENT, newFormData);
      }
    },

    /**
     * For Update the New Configuration After User Applied new DATA into v-model
     */
    value: {
      deep: true,
      handler: function handler(newFormData, oldFormData) {
        // because this is in the initialize => no data at first
        if (typeof oldFormData === 'undefined') {
          return;
        } // we have to create a new formConfig for the "unexpected value" like: {}, null, undefined
        // only available for null and empty object data


        if (!newFormData || !Object.keys(newFormData).length) {
          return this.mapping();
        } // this time object have data, we have to make sure everything


        if (deepEqual(newFormData, oldFormData)) {
          return;
        } // okay this time object is fully new and we need to do mapping again


        return this.mapping(newFormData);
      }
    }
  }
};

// CONCATENATED MODULE: ./src/mixins/form-builder-mixins.js




/* harmony default export */ var form_builder_mixins = ([FORM_BUILDER_EVENT_HANDLER, form_builder_methods["a" /* FORM_BUILDER_METHODS */], FORM_BUILDER_MODEL, style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]]);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/FormConfiguration.vue?vue&type=template&id=e37a7c3c&
var FormConfigurationvue_type_template_id_e37a7c3c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"form-configuration-block pbottom-10"},[_c('button',{class:_vm.styles.BUTTON.PRIMARY,attrs:{"disabled":!_vm.permissions.canEditFormConfigurations},on:{"click":_vm.open}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('cog'))}}),_c('span',[_vm._v("Form Configurations")])])])}
var FormConfigurationvue_type_template_id_e37a7c3c_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/FormConfiguration.vue?vue&type=template&id=e37a7c3c&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/SidebarFormConfiguration.vue?vue&type=template&id=497949ae&
var SidebarFormConfigurationvue_type_template_id_497949ae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar-form-configuration"},[_c('h5',[_vm._v("Main Form Configuration")]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Form Headline")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formConfiguration.headline),expression:"formConfiguration.headline"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.formConfiguration.headline)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formConfiguration, "headline", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Form Sub-Headline")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formConfiguration.subHeadline),expression:"formConfiguration.subHeadline"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.formConfiguration.subHeadline)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formConfiguration, "subHeadline", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Show Form Headline? "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formConfiguration.isShowHeadline),expression:"formConfiguration.isShowHeadline"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.formConfiguration.isShowHeadline)?_vm._i(_vm.formConfiguration.isShowHeadline,null)>-1:(_vm.formConfiguration.isShowHeadline)},on:{"change":function($event){var $$a=_vm.formConfiguration.isShowHeadline,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.formConfiguration, "isShowHeadline", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.formConfiguration, "isShowHeadline", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.formConfiguration, "isShowHeadline", $$c)}}}})])]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Wrapper <form> outside of the Form? "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formConfiguration.renderFormTag),expression:"formConfiguration.renderFormTag"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.formConfiguration.renderFormTag)?_vm._i(_vm.formConfiguration.renderFormTag,null)>-1:(_vm.formConfiguration.renderFormTag)},on:{"change":function($event){var $$a=_vm.formConfiguration.renderFormTag,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.formConfiguration, "renderFormTag", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.formConfiguration, "renderFormTag", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.formConfiguration, "renderFormTag", $$c)}}}})])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.formConfiguration.renderFormTag),expression:"formConfiguration.renderFormTag"}]},[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Form-TAG Action URL")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formConfiguration.formActionURL),expression:"formConfiguration.formActionURL"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.formConfiguration.formActionURL)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formConfiguration, "formActionURL", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Form-TAG Method")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formConfiguration.formMethod),expression:"formConfiguration.formMethod"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.formConfiguration.formMethod)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formConfiguration, "formMethod", $event.target.value)}}})])]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Enable Server-side Validation? "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formConfiguration.enableServerSideValidation),expression:"formConfiguration.enableServerSideValidation"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.formConfiguration.enableServerSideValidation)?_vm._i(_vm.formConfiguration.enableServerSideValidation,null)>-1:(_vm.formConfiguration.enableServerSideValidation)},on:{"change":function($event){var $$a=_vm.formConfiguration.enableServerSideValidation,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.formConfiguration, "enableServerSideValidation", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.formConfiguration, "enableServerSideValidation", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.formConfiguration, "enableServerSideValidation", $$c)}}}})])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.formConfiguration.enableServerSideValidation),expression:"formConfiguration.enableServerSideValidation"}]},[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Validation URL API Endpoint")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.formConfiguration.serverSideValidationEndpoint),expression:"formConfiguration.serverSideValidationEndpoint"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.formConfiguration.serverSideValidationEndpoint)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.formConfiguration, "serverSideValidationEndpoint", $event.target.value)}}})])]),_c('div',{staticClass:"buttons"},[_c('button',{class:_vm.styles.BUTTON.PRIMARY,on:{"click":function($event){return _vm.save(false)}}},[_vm._v(" Save ")]),_c('button',{class:_vm.styles.BUTTON.INFO,on:{"click":function($event){return _vm.save(true)}}},[_vm._v(" Save & Close ")])])])}
var SidebarFormConfigurationvue_type_template_id_497949ae_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/SidebarFormConfiguration.vue?vue&type=template&id=497949ae&

// EXTERNAL MODULE: ./src/configs/form.js
var configs_form = __webpack_require__("22a0");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/SidebarFormConfiguration.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/**
 * @property {FORM_DEFAULT_DATA} formConfiguration
 */

/* harmony default export */ var SidebarFormConfigurationvue_type_script_lang_js_ = ({
  name: "SidebarFormConfiguration",
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */], sidebar_body_mixin["a" /* SIDEBAR_BODY_MIXIN */]],
  data: function data() {
    return {
      // OVERRIDE IT FROM `SIDEBAR_BODY_MIXIN`
      dataKey: "formConfiguration",
      formConfiguration: Object.assign({}, configs_form["a" /* FORM_DEFAULT_DATA */])
    };
  },
  methods: {
    /**
     * Pre-Form-Validation
     * @return {String}
     */
    preSaveValidation: function preSaveValidation() {
      if (this.formConfiguration.enableServerSideValidation && !this.formConfiguration.serverSideValidationEndpoint) {
        return "You must include the Server-side Validation Endpoint";
      }

      return "";
    }
  },
  created: function created() {
    // retrieve the data from `GlobalSidebar` passed in
    this.formConfiguration = Object.assign({}, this.formConfiguration, this.dataPackage);
  }
});
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/SidebarFormConfiguration.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_config_views_SidebarFormConfigurationvue_type_script_lang_js_ = (SidebarFormConfigurationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/SidebarFormConfiguration.vue





/* normalize component */

var SidebarFormConfiguration_component = Object(componentNormalizer["a" /* default */])(
  sidebar_config_views_SidebarFormConfigurationvue_type_script_lang_js_,
  SidebarFormConfigurationvue_type_template_id_497949ae_render,
  SidebarFormConfigurationvue_type_template_id_497949ae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarFormConfiguration = (SidebarFormConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/FormConfiguration.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//




var RUNNER_ID = 'FormConfiguration';
/* harmony default export */ var FormConfigurationvue_type_script_lang_js_ = ({
  name: "FormConfiguration",
  components: {
    SidebarFormConfiguration: SidebarFormConfiguration
  },
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  props: {
    value: Object,
    permissions: Object
  },
  model: {
    event: 'change',
    props: 'value'
  },
  methods: {
    /**
     * Open Configuration Sidebar
     * @desc Fire an Event to GlobalSidebar
     */
    open: function open() {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPEN, RUNNER_ID);
    },

    /**
     * Emit an Event to Render Sidebar Body
     * @desc Fire an Event to GlobalSidebar
     */
    renderSidebar: function renderSidebar() {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.INJECT, new sidebar_renderer_class["a" /* default */](RUNNER_ID, SidebarFormConfiguration, this.value));
    },

    /**
     * Handle Saving the Form Configuration
     * @param {string} runnerId
     * @param {Object} data
     */
    saveConfiguration: function saveConfiguration(runnerId, data) {
      // does it out of scope? if it does, stop
      if (runnerId !== RUNNER_ID) {
        return;
      }

      var newValue = Object.assign({}, this.value, data);
      this.$emit('change', newValue); // run this to update v-model
    },

    /**
     * After sidebar is opened - we will render the GlobalSidebar's body
     * @param runnerId
     */
    afterOpenedSidebar: function afterOpenedSidebar(runnerId) {
      // does it out of scope? if it does, stop
      if (runnerId !== RUNNER_ID) {
        return;
      } // render sidebar if its from FormConfiguration


      this.renderSidebar();
    }
  },
  created: function created() {
    // listen to GlobalSidebar Event...
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.SAVE, this.saveConfiguration);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.SAVE_AND_CLOSE, this.saveConfiguration);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPENED, this.renderSidebar);
  }
});
// CONCATENATED MODULE: ./src/views/builder/FormConfiguration.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_FormConfigurationvue_type_script_lang_js_ = (FormConfigurationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/FormConfiguration.vue





/* normalize component */

var FormConfiguration_component = Object(componentNormalizer["a" /* default */])(
  builder_FormConfigurationvue_type_script_lang_js_,
  FormConfigurationvue_type_template_id_e37a7c3c_render,
  FormConfigurationvue_type_template_id_e37a7c3c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormConfiguration = (FormConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/GlobalSidebar.vue?vue&type=template&id=d4c88430&
var GlobalSidebarvue_type_template_id_d4c88430_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar"},[_c('span',{staticClass:"close",domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('close', '24px', '24px', '#000'))},on:{"click":_vm.close}}),(_vm.component)?_c(_vm.component,{tag:"component",attrs:{"dataPackage":_vm.dynamicData,"formData":_vm.formData,"permissions":_vm.permissions},on:{"save":_vm.save,"saveAndClose":_vm.saveAndClose,"close":_vm.close}}):_vm._e()],1)}
var GlobalSidebarvue_type_template_id_d4c88430_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/GlobalSidebar.vue?vue&type=template&id=d4c88430&

// EXTERNAL MODULE: ./src/libraries/alert-dialog.js
var alert_dialog = __webpack_require__("caca");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/GlobalSidebar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var SIDEBAR_WIDTH_SIZE = "300px";
/* harmony default export */ var GlobalSidebarvue_type_script_lang_js_ = ({
  name: "GlobalSidebar",
  props: {
    formData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    permissions: Object
  },
  data: function data() {
    return {
      component: null,
      dynamicData: {},
      runnerId: null,
      isOpen: false
    };
  },
  methods: {
    /**
     * Open the Right Sidebar
     */
    open: function open(runnerId) {
      if (this.isOpen) {
        alert_dialog["a" /* ALERT_DIALOG */].show('Please close the current active sidebar before open another');
        return;
      } // set size


      this.$el.style.width = SIDEBAR_WIDTH_SIZE;
      document.getElementsByTagName("body")[0].style.marginRight = SIDEBAR_WIDTH_SIZE; // turn on flag and notify watcher that sidebar is opened
      // `runnerId` will be sent back in order to make sure other components will touch yours

      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPENED, runnerId);
      this.isOpen = true;
    },

    /**
     * Save - Emitting data to the listener but do not close the sidebar
     * @hook Emit Data to the Listener
     */
    save: function save() {
      var specialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.SAVE, this.runnerId, Object.assign({}, specialData));
    },

    /**
     * Save event with close the right sidebar
     */
    saveAndClose: function saveAndClose() {
      var specialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.SAVE_AND_CLOSE, this.runnerId, Object.assign({}, specialData));
      this.close();
    },

    /**
     * Close the right sidebar
     * @hook After Closed - Fire an Event to notify (maybe someone will listen :v )
     */
    close: function close() {
      this.$el.style.width = 0;
      document.getElementsByTagName("body")[0].style.marginRight = 0; // fire event after closed (if emit == true)

      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.AFTER_CLOSED, this.runnerId, null); // remove renderer

      this.component = null;
      this.dynamicData = {};
      this.runnerId = null;
      this.isOpen = false;
    },

    /**
     * This method will help us inject our Component into the Sidebar Body
     * @param {SidebarRenderer} rendererInfo - data that will be assigned for the Component
     */
    updateBody: function updateBody(rendererInfo) {
      if (this.isOpen) {
        return;
      }

      this.dynamicData = Object.assign({}, rendererInfo.data);
      this.component = rendererInfo.component;
      this.runnerId = rendererInfo.runnerId;
    }
  },
  created: function created() {
    // listen to render even
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.INJECT, this.updateBody); // listen to open

    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPEN, this.open);
  }
});
// CONCATENATED MODULE: ./src/views/builder/GlobalSidebar.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_GlobalSidebarvue_type_script_lang_js_ = (GlobalSidebarvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/GlobalSidebar.vue





/* normalize component */

var GlobalSidebar_component = Object(componentNormalizer["a" /* default */])(
  builder_GlobalSidebarvue_type_script_lang_js_,
  GlobalSidebarvue_type_template_id_d4c88430_render,
  GlobalSidebarvue_type_template_id_d4c88430_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GlobalSidebar = (GlobalSidebar_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/GlobalModal.vue?vue&type=template&id=6b43a3ee&
var GlobalModalvue_type_template_id_6b43a3ee_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal",attrs:{"id":"vfb-global-modal"}},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header"},[_c('span',{staticClass:"close",domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('close', '24px', '24px', '#fff'))},on:{"click":_vm.close}}),_c('h4',{domProps:{"textContent":_vm._s(_vm.modalTitle)}})]),_c('div',{staticClass:"modal-body"},[(_vm.component)?_c(_vm.component,{tag:"component",attrs:{"dataPackage":_vm.dynamicData,"formData":_vm.formData,"permissions":_vm.permissions},on:{"save":_vm.save,"saveAndClose":_vm.saveAndClose,"close":_vm.close}}):_vm._e()],1)])])}
var GlobalModalvue_type_template_id_6b43a3ee_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/GlobalModal.vue?vue&type=template&id=6b43a3ee&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/GlobalModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var MODAL_EVENT = events["a" /* EVENT_CONSTANTS */].BUILDER.MODAL;
/* harmony default export */ var GlobalModalvue_type_script_lang_js_ = ({
  name: "GlobalModal",
  props: {
    formData: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    permissions: Object
  },
  data: function data() {
    return {
      component: null,
      dynamicData: {},
      runnerId: null,
      isOpen: false,
      modalTitle: ""
    };
  },
  methods: {
    /**
     * Open the Right Sidebar
     */
    open: function open(runnerId) {
      if (this.isOpen) {
        alert_dialog["a" /* ALERT_DIALOG */].show('Please close the current active modal before open another');
        return;
      } // set size


      this.$el.style.display = "block"; // turn on flag and notify watcher that sidebar is opened
      // `runnerId` will be sent back in order to make sure other components will touch yours

      this.$formEvent.$emit(MODAL_EVENT.OPENED, runnerId);
      this.isOpen = true;
    },

    /**
     * Save - Emitting data to the listener but do not close the sidebar
     * @hook Emit Data to the Listener
     */
    save: function save() {
      var specialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.$formEvent.$emit(MODAL_EVENT.SAVE, this.runnerId, Object.assign({}, specialData));
    },

    /**
     * Save event with close the right sidebar
     */
    saveAndClose: function saveAndClose() {
      var specialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.$formEvent.$emit(MODAL_EVENT.SAVE_AND_CLOSE, this.runnerId, Object.assign({}, specialData));
      this.close();
    },

    /**
     * Close the right sidebar
     * @hook After Closed - Fire an Event to notify (maybe someone will listen :v )
     */
    close: function close() {
      this.$el.style.display = "none"; // fire event after closed (if emit == true)

      this.$formEvent.$emit(MODAL_EVENT.AFTER_CLOSED, this.runnerId, null); // remove renderer

      this.component = null;
      this.dynamicData = {};
      this.runnerId = null;
      this.isOpen = false;
    },

    /**
     * This method will help us inject our Component into the Sidebar Body
     * @param {SidebarRenderer} rendererInfo - data that will be assigned for the Component
     * @param {String} title Modal Title
     */
    updateBody: function updateBody(rendererInfo) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";

      if (this.isOpen) {
        return;
      }

      this.dynamicData = Object.assign({}, rendererInfo.data);
      this.component = rendererInfo.component;
      this.runnerId = rendererInfo.runnerId;
      this.modalTitle = title;
    }
  },
  created: function created() {
    // listen to render even
    this.$formEvent.$on(MODAL_EVENT.INJECT, this.updateBody); // listen to open

    this.$formEvent.$on(MODAL_EVENT.OPEN, this.open);
  }
});
// CONCATENATED MODULE: ./src/views/builder/GlobalModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_GlobalModalvue_type_script_lang_js_ = (GlobalModalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/GlobalModal.vue





/* normalize component */

var GlobalModal_component = Object(componentNormalizer["a" /* default */])(
  builder_GlobalModalvue_type_script_lang_js_,
  GlobalModalvue_type_template_id_6b43a3ee_render,
  GlobalModalvue_type_template_id_6b43a3ee_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GlobalModal = (GlobalModal_component.exports);
// CONCATENATED MODULE: ./src/configs/roles.js
/**
 * Roles of Form Builder
 * @author Phat Tran
 */
/* harmony default export */ var roles = ({
  // global
  canEditFormConfigurations: true,
  // sections
  canAddSection: true,
  canEditSection: true,
  canDeleteSection: true,
  canReOrderingSection: true,
  // rows/tab
  canAddRow: true,
  canEditRow: true,
  canDeleteRow: true,
  canReOrderingRow: true,
  // controls
  canAddControl: true,
  canEditControl: true,
  canDeleteControl: true,
  canReOrderingControl: true,
  // control-inner
  canUpdateControlBasicDetail: true,
  canUpdateControlStyling: true,
  canUpdateControlValidation: true,
  canUpdateControlSpecialConfiguration: true
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormBuilder.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var FormBuildervue_type_script_lang_js_ = ({
  name: "FormBuilder",
  components: {
    GlobalModal: GlobalModal,
    GlobalSidebar: GlobalSidebar,
    FormConfiguration: FormConfiguration,
    SectionContainer: SectionContainer,
    AddSectionControl: AddSectionControl
  },
  mixins: form_builder_mixins,
  props: {
    permissions: {
      type: Object,
      default: function _default() {
        return roles;
      }
    }
  },
  data: function data() {
    return {
      formData: {
        formConfig: {},
        sections: {},
        rows: {},
        controls: {}
      }
    };
  },
  created: function created() {
    if (this.value && Object(esm_typeof["a" /* default */])(this.value) === 'object') {
      this.mapping(this.value);
    } else {
      this.createDefaultData();
    }
  },
  computed: {
    /**
     * Copyright Text
     * @returns {string}
     */
    copyrightText: function copyrightText() {
      return MAIN_CONSTANTS.COPYRIGHT;
    }
  }
});
// CONCATENATED MODULE: ./src/components/FormBuilder.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormBuildervue_type_script_lang_js_ = (FormBuildervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FormBuilder.vue





/* normalize component */

var FormBuilder_component = Object(componentNormalizer["a" /* default */])(
  components_FormBuildervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormBuilder = __webpack_exports__["a"] = (FormBuilder_component.exports);

/***/ }),

/***/ "6a99":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__("d3f4");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "6abf":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("e6f3");
var hiddenKeys = __webpack_require__("1691").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "6b4c":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "6b54":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__("3846");
var anObject = __webpack_require__("cb7c");
var $flags = __webpack_require__("0bfb");
var DESCRIPTORS = __webpack_require__("9e1e");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__("2aba")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__("79e5")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "6c1c":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("c367");
var global = __webpack_require__("e53d");
var hide = __webpack_require__("35e8");
var Iterators = __webpack_require__("481b");
var TO_STRING_TAG = __webpack_require__("5168")('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),

/***/ "6db7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("f367");
var callBind = __webpack_require__("44b7");

var implementation = __webpack_require__("d6ef");
var getPolyfill = __webpack_require__("5834");
var shim = __webpack_require__("c15a");

var polyfill = callBind(getPolyfill(), Object);

define(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "71c1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("3a38");
var defined = __webpack_require__("25eb");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "7226":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var filter = __webpack_require__("b2bf");

module.exports = function availableTypedArrays() {
	return filter([
		'BigInt64Array',
		'BigUint64Array',
		'Float32Array',
		'Float64Array',
		'Int16Array',
		'Int32Array',
		'Int8Array',
		'Uint16Array',
		'Uint32Array',
		'Uint8Array',
		'Uint8ClampedArray'
	], function (typedArray) {
		return typeof global[typedArray] === 'function';
	});
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "7514":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__("5ca1");
var $find = __webpack_require__("0a49")(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__("9c6c")(KEY);


/***/ }),

/***/ "7618":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5d58");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("67bb");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "765d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("6718")('observable');


/***/ }),

/***/ "768b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ _slicedToArray; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("a745");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("5d73");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js
var is_iterable = __webpack_require__("c8bb");
var is_iterable_default = /*#__PURE__*/__webpack_require__.n(is_iterable);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("67bb");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js



function _iterableToArrayLimit(arr, i) {
  if (typeof symbol_default.a === "undefined" || !is_iterable_default()(Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/from.js
var from = __webpack_require__("774e");
var from_default = /*#__PURE__*/__webpack_require__.n(from);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/unsupportedIterableToArray.js


function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return from_default()(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "7726":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "774e":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("d2d5");

/***/ }),

/***/ "77f1":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("4588");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "794b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("8e60") && !__webpack_require__("294c")(function () {
  return Object.defineProperty(__webpack_require__("1ec9")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "79aa":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "79e5":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "7a56":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var dP = __webpack_require__("86cc");
var DESCRIPTORS = __webpack_require__("9e1e");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "7bbc":
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__("6821");
var gOPN = __webpack_require__("9093").f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),

/***/ "7cd6":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "7d7b":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var get = __webpack_require__("7cd6");
module.exports = __webpack_require__("584a").getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),

/***/ "7d7e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ROW_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROW_DEFAULT_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createNewRow; });
/* harmony import */ var _libraries_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("43b3");
/**
 * Row Constants in Vue-Form-Builder
 * @author Phat Tran
 */

var ROW_TYPES = {
  normal: 'normal',
  // Normal Row in Div (div.row)
  tabRow: 'tabRow',
  // Tab Row
  tableRow: 'tableRow' // Table row (tr)

};
var ROW_DEFAULT_DATA = {
  uniqueId: '',
  additionalClass: '',
  type: ROW_TYPES.normal,
  sortOrder: 0,
  controls: [],
  // ids of control
  extendData: null // depends on the row, we would have specific configuration

};
/**
 * Create new Row Object
 * @param {string} type
 * @param {any} extendData
 */

function createNewRow(type) {
  var extendData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  if (!ROW_TYPES[type]) {
    throw new TypeError("Row Type: ".concat(type, " doesn't exists in Vue-Form-Builder"));
  } // create new section data base on the default data


  var newRowObject = _libraries_helper__WEBPACK_IMPORTED_MODULE_0__[/* HELPER */ "a"].cloneDeep(ROW_DEFAULT_DATA);
  newRowObject.type = type;
  newRowObject.uniqueId = "row-" + _libraries_helper__WEBPACK_IMPORTED_MODULE_0__[/* HELPER */ "a"].getUUIDv4();
  newRowObject.extendData = extendData;
  return newRowObject;
}



/***/ }),

/***/ "7d9f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlLabel_vue_vue_type_style_index_0_id_0d7b3c04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6728");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlLabel_vue_vue_type_style_index_0_id_0d7b3c04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlLabel_vue_vue_type_style_index_0_id_0d7b3c04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ControlLabel_vue_vue_type_style_index_0_id_0d7b3c04_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7e90":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("d9f6");
var anObject = __webpack_require__("e4ae");
var getKeys = __webpack_require__("c3a1");

module.exports = __webpack_require__("8e60") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "7f20":
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__("86cc").f;
var has = __webpack_require__("69a8");
var TAG = __webpack_require__("2b4c")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "7f7f":
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__("86cc").f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__("9e1e") && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),

/***/ "7fae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectKeys = __webpack_require__("d6c7");
var isArguments = __webpack_require__("e39c");
var is = __webpack_require__("6db7");
var isRegex = __webpack_require__("d8d8");
var flags = __webpack_require__("e710");
var isArray = __webpack_require__("e3db");
var isDate = __webpack_require__("0e65");
var whichBoxedPrimitive = __webpack_require__("2fb9");
var GetIntrinsic = __webpack_require__("e9ac");
var callBound = __webpack_require__("2a1a");
var whichCollection = __webpack_require__("bd25");
var getIterator = __webpack_require__("b2b8");
var getSideChannel = __webpack_require__("5402");
var whichTypedArray = __webpack_require__("edc4");
var assign = __webpack_require__("2a8a");

var $getTime = callBound('Date.prototype.getTime');
var gPO = Object.getPrototypeOf;
var $objToString = callBound('Object.prototype.toString');

var $Set = GetIntrinsic('%Set%', true);
var $mapHas = callBound('Map.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSize = callBound('Map.prototype.size', true);
var $setAdd = callBound('Set.prototype.add', true);
var $setDelete = callBound('Set.prototype.delete', true);
var $setHas = callBound('Set.prototype.has', true);
var $setSize = callBound('Set.prototype.size', true);

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L401-L414
function setHasEqualElement(set, val1, opts, channel) {
  var i = getIterator(set);
  var result;
  while ((result = i.next()) && !result.done) {
    if (internalDeepEqual(val1, result.value, opts, channel)) { // eslint-disable-line no-use-before-define
      // Remove the matching element to make sure we do not check that again.
      $setDelete(set, result.value);
      return true;
    }
  }

  return false;
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L416-L439
function findLooseMatchingPrimitives(prim) {
  if (typeof prim === 'undefined') {
    return null;
  }
  if (typeof prim === 'object') { // Only pass in null as object!
    return void 0;
  }
  if (typeof prim === 'symbol') {
    return false;
  }
  if (typeof prim === 'string' || typeof prim === 'number') {
    // Loose equal entries exist only if the string is possible to convert to a regular number and not NaN.
    return +prim === +prim; // eslint-disable-line no-implicit-coercion
  }
  return true;
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L449-L460
function mapMightHaveLoosePrim(a, b, prim, item, opts, channel) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) {
    return altValue;
  }
  var curB = $mapGet(b, altValue);
  var looseOpts = assign({}, opts, { strict: false });
  if (
    (typeof curB === 'undefined' && !$mapHas(b, altValue))
    // eslint-disable-next-line no-use-before-define
    || !internalDeepEqual(item, curB, looseOpts, channel)
  ) {
    return false;
  }
  // eslint-disable-next-line no-use-before-define
  return !$mapHas(a, altValue) && internalDeepEqual(item, curB, looseOpts, channel);
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L441-L447
function setMightHaveLoosePrim(a, b, prim) {
  var altValue = findLooseMatchingPrimitives(prim);
  if (altValue != null) {
    return altValue;
  }

  return $setHas(b, altValue) && !$setHas(a, altValue);
}

// taken from https://github.com/browserify/commonjs-assert/blob/bba838e9ba9e28edf3127ce6974624208502f6bc/internal/util/comparisons.js#L518-L533
function mapHasEqualEntry(set, map, key1, item1, opts, channel) {
  var i = getIterator(set);
  var result;
  var key2;
  while ((result = i.next()) && !result.done) {
    key2 = result.value;
    if (
      // eslint-disable-next-line no-use-before-define
      internalDeepEqual(key1, key2, opts, channel)
      // eslint-disable-next-line no-use-before-define
      && internalDeepEqual(item1, $mapGet(map, key2), opts, channel)
    ) {
      $setDelete(set, key2);
      return true;
    }
  }

  return false;
}

function internalDeepEqual(actual, expected, options, channel) {
  var opts = options || {};

  // 7.1. All identical values are equivalent, as determined by ===.
  if (opts.strict ? is(actual, expected) : actual === expected) {
    return true;
  }

  var actualBoxed = whichBoxedPrimitive(actual);
  var expectedBoxed = whichBoxedPrimitive(expected);
  if (actualBoxed !== expectedBoxed) {
    return false;
  }

  // 7.3. Other pairs that do not both pass typeof value == 'object', equivalence is determined by ==.
  if (!actual || !expected || (typeof actual !== 'object' && typeof expected !== 'object')) {
    return opts.strict ? is(actual, expected) : actual == expected; // eslint-disable-line eqeqeq
  }

  /*
   * 7.4. For all other Object pairs, including Array objects, equivalence is
   * determined by having the same number of owned properties (as verified
   * with Object.prototype.hasOwnProperty.call), the same set of keys
   * (although not necessarily the same order), equivalent values for every
   * corresponding key, and an identical 'prototype' property. Note: this
   * accounts for both named and indexed properties on Arrays.
   */
  // see https://github.com/nodejs/node/commit/d3aafd02efd3a403d646a3044adcf14e63a88d32 for memos/channel inspiration

  var hasActual = channel.has(actual);
  var hasExpected = channel.has(expected);
  var sentinel;
  if (hasActual && hasExpected) {
    if (channel.get(actual) === channel.get(expected)) {
      return true;
    }
  } else {
    sentinel = {};
  }
  if (!hasActual) { channel.set(actual, sentinel); }
  if (!hasExpected) { channel.set(expected, sentinel); }

  // eslint-disable-next-line no-use-before-define
  return objEquiv(actual, expected, opts, channel);
}

function isBuffer(x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') {
    return false;
  }
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') {
    return false;
  }

  return !!(x.constructor && x.constructor.isBuffer && x.constructor.isBuffer(x));
}

function setEquiv(a, b, opts, channel) {
  if ($setSize(a) !== $setSize(b)) {
    return false;
  }
  var iA = getIterator(a);
  var iB = getIterator(b);
  var resultA;
  var resultB;
  var set;
  while ((resultA = iA.next()) && !resultA.done) {
    if (resultA.value && typeof resultA.value === 'object') {
      if (!set) { set = new $Set(); }
      $setAdd(set, resultA.value);
    } else if (!$setHas(b, resultA.value)) {
      if (opts.strict) { return false; }
      if (!setMightHaveLoosePrim(a, b, resultA.value)) {
        return false;
      }
      if (!set) { set = new $Set(); }
      $setAdd(set, resultA.value);
    }
  }
  if (set) {
    while ((resultB = iB.next()) && !resultB.done) {
      // We have to check if a primitive value is already matching and only if it's not, go hunting for it.
      if (resultB.value && typeof resultB.value === 'object') {
        if (!setHasEqualElement(set, resultB.value, opts.strict, channel)) {
          return false;
        }
      } else if (
        !opts.strict
        && !$setHas(a, resultB.value)
        && !setHasEqualElement(set, resultB.value, opts.strict, channel)
      ) {
        return false;
      }
    }
    return $setSize(set) === 0;
  }
  return true;
}

function mapEquiv(a, b, opts, channel) {
  if ($mapSize(a) !== $mapSize(b)) {
    return false;
  }
  var iA = getIterator(a);
  var iB = getIterator(b);
  var resultA;
  var resultB;
  var set;
  var key;
  var item1;
  var item2;
  while ((resultA = iA.next()) && !resultA.done) {
    key = resultA.value[0];
    item1 = resultA.value[1];
    if (key && typeof key === 'object') {
      if (!set) { set = new $Set(); }
      $setAdd(set, key);
    } else {
      item2 = $mapGet(b, key);
      if ((typeof item2 === 'undefined' && !$mapHas(b, key)) || !internalDeepEqual(item1, item2, opts, channel)) {
        if (opts.strict) {
          return false;
        }
        if (!mapMightHaveLoosePrim(a, b, key, item1, opts, channel)) {
          return false;
        }
        if (!set) { set = new $Set(); }
        $setAdd(set, key);
      }
    }
  }

  if (set) {
    while ((resultB = iB.next()) && !resultB.done) {
      key = resultB.value[0];
      item2 = resultB.value[1];
      if (key && typeof key === 'object') {
        if (!mapHasEqualEntry(set, a, key, item2, opts, channel)) {
          return false;
        }
      } else if (
        !opts.strict
        && (!a.has(key) || !internalDeepEqual($mapGet(a, key), item2, opts, channel))
        && !mapHasEqualEntry(set, a, key, item2, assign({}, opts, { strict: false }), channel)
      ) {
        return false;
      }
    }
    return $setSize(set) === 0;
  }
  return true;
}

function objEquiv(a, b, opts, channel) {
  /* eslint max-statements: [2, 100], max-lines-per-function: [2, 120], max-depth: [2, 5] */
  var i, key;

  if (typeof a !== typeof b) { return false; }
  if (a == null || b == null) { return false; }

  if ($objToString(a) !== $objToString(b)) { return false; }

  if (isArguments(a) !== isArguments(b)) { return false; }

  var aIsArray = isArray(a);
  var bIsArray = isArray(b);
  if (aIsArray !== bIsArray) { return false; }

  // TODO: replace when a cross-realm brand check is available
  var aIsError = a instanceof Error;
  var bIsError = b instanceof Error;
  if (aIsError !== bIsError) { return false; }
  if (aIsError || bIsError) {
    if (a.name !== b.name || a.message !== b.message) { return false; }
  }

  var aIsRegex = isRegex(a);
  var bIsRegex = isRegex(b);
  if (aIsRegex !== bIsRegex) { return false; }
  if ((aIsRegex || bIsRegex) && (a.source !== b.source || flags(a) !== flags(b))) {
    return false;
  }

  var aIsDate = isDate(a);
  var bIsDate = isDate(b);
  if (aIsDate !== bIsDate) { return false; }
  if (aIsDate || bIsDate) { // && would work too, because both are true or both false here
    if ($getTime(a) !== $getTime(b)) { return false; }
  }
  if (opts.strict && gPO && gPO(a) !== gPO(b)) { return false; }

  if (whichTypedArray(a) !== whichTypedArray(b)) {
    return false;
  }

  var aIsBuffer = isBuffer(a);
  var bIsBuffer = isBuffer(b);
  if (aIsBuffer !== bIsBuffer) { return false; }
  if (aIsBuffer || bIsBuffer) { // && would work too, because both are true or both false here
    if (a.length !== b.length) { return false; }
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) { return false; }
    }
    return true;
  }

  if (typeof a !== typeof b) { return false; }

  var ka = objectKeys(a);
  var kb = objectKeys(b);
  // having the same number of owned properties (keys incorporates hasOwnProperty)
  if (ka.length !== kb.length) { return false; }

  // the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  // ~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) { return false; } // eslint-disable-line eqeqeq
  }

  // equivalent values for every corresponding key, and ~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!internalDeepEqual(a[key], b[key], opts, channel)) { return false; }
  }

  var aCollection = whichCollection(a);
  var bCollection = whichCollection(b);
  if (aCollection !== bCollection) {
    return false;
  }
  if (aCollection === 'Set' || bCollection === 'Set') { // aCollection === bCollection
    return setEquiv(a, b, opts, channel);
  }
  if (aCollection === 'Map') { // aCollection === bCollection
    return mapEquiv(a, b, opts, channel);
  }

  return true;
}

module.exports = function deepEqual(a, b, opts) {
  return internalDeepEqual(a, b, opts, getSideChannel());
};


/***/ }),

/***/ "8378":
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "8436":
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),

/***/ "84f2":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "85f2":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("454f");

/***/ }),

/***/ "86cc":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("cb7c");
var IE8_DOM_DEFINE = __webpack_require__("c69a");
var toPrimitive = __webpack_require__("6a99");
var dP = Object.defineProperty;

exports.f = __webpack_require__("9e1e") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
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

/***/ "8a81":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__("7726");
var has = __webpack_require__("69a8");
var DESCRIPTORS = __webpack_require__("9e1e");
var $export = __webpack_require__("5ca1");
var redefine = __webpack_require__("2aba");
var META = __webpack_require__("67ab").KEY;
var $fails = __webpack_require__("79e5");
var shared = __webpack_require__("5537");
var setToStringTag = __webpack_require__("7f20");
var uid = __webpack_require__("ca5a");
var wks = __webpack_require__("2b4c");
var wksExt = __webpack_require__("37c8");
var wksDefine = __webpack_require__("3a72");
var enumKeys = __webpack_require__("d4c0");
var isArray = __webpack_require__("1169");
var anObject = __webpack_require__("cb7c");
var isObject = __webpack_require__("d3f4");
var toObject = __webpack_require__("4bf8");
var toIObject = __webpack_require__("6821");
var toPrimitive = __webpack_require__("6a99");
var createDesc = __webpack_require__("4630");
var _create = __webpack_require__("2aeb");
var gOPNExt = __webpack_require__("7bbc");
var $GOPD = __webpack_require__("11e9");
var $GOPS = __webpack_require__("2621");
var $DP = __webpack_require__("86cc");
var $keys = __webpack_require__("0d58");
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__("9093").f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__("52a7").f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__("2d00")) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__("32e9")($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),

/***/ "8ae1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CONTROL_SPECIAL_CONFIG_MIXIN; });

// EXTERNAL MODULE: ./src/mixins/style-injection-mixin.js
var style_injection_mixin = __webpack_require__("28fe");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/misc/IconTooltip.vue?vue&type=template&id=02fef337&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"v-tooltip"},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$form.getIcon(_vm.icon, _vm.iconSize, _vm.iconSize, _vm.iconColor))}}),_c('span',{staticClass:"tooltiptext",domProps:{"innerHTML":_vm._s(_vm.text)}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/misc/IconTooltip.vue?vue&type=template&id=02fef337&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/misc/IconTooltip.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var IconTooltipvue_type_script_lang_js_ = ({
  name: "IconTooltip",
  props: {
    text: String,
    icon: String,
    iconSize: {
      type: String,
      default: '16px'
    },
    iconColor: {
      type: String,
      default: '#000'
    }
  }
});
// CONCATENATED MODULE: ./src/views/builder/misc/IconTooltip.vue?vue&type=script&lang=js&
 /* harmony default export */ var misc_IconTooltipvue_type_script_lang_js_ = (IconTooltipvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/builder/misc/IconTooltip.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  misc_IconTooltipvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "02fef337",
  null
  
)

/* harmony default export */ var IconTooltip = (component.exports);
// CONCATENATED MODULE: ./src/mixins/control-special-config-mixin.js


var CONTROL_SPECIAL_CONFIG_MIXIN = {
  components: {
    IconTooltip: IconTooltip
  },
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  props: {
    /**
     * Control Object Configuration
     */
    control: {
      type: Object,
      required: true
    },

    /**
     * Form-Data from the ROOT
     */
    formData: {
      type: Object,
      required: true
    }
  }
};


/***/ }),

/***/ "8b97":
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__("d3f4");
var anObject = __webpack_require__("cb7c");
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__("9b43")(Function.call, __webpack_require__("11e9").f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "8dbe":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ CONTROLS; });
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ CONTROL_DEFAULT_DATA; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ createControlData; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./src/configs/styles.js
var styles = __webpack_require__("d60e");

// EXTERNAL MODULE: ./src/libraries/helper.js
var helper = __webpack_require__("43b3");

// CONCATENATED MODULE: ./src/configs/control-config-enum.js
/**
 * Constant for Radio/Checkbox Styling
 * @type {{next: string, bothSide: string, line: string}}
 */
var RADIO_CHECKBOX_STYLE = {
  line: {
    val: 'line',
    description: "Line by Line"
  },
  next: {
    val: 'next',
    description: "Next to each others"
  },
  bothSide: {
    val: "bothSide",
    description: "Stay on each sides in a row (Left - Right)"
  }
};
/**
 * Constant for Radio/Checkbox position
 * @type {{left: string, center: string, right: string}}
 */

var RADIO_CHECKBOX_POSITION = {
  left: {
    val: 'left',
    description: "Left"
  },
  center: {
    val: 'center',
    description: 'Center'
  },
  right: {
    val: 'right',
    description: 'Right'
  }
};
/**
 * Return Type for Date-Picker
 * @type {{format: {val: string, description: string}, object: {val: string, description: string}}}
 */

var DATE_PICKER_RETURN_TYPES = {
  format: {
    val: "format",
    description: "Date String from Date Format"
  },
  object: {
    val: "object",
    description: "JS-Date Object"
  }
};
/**
 * Date Picker Start Date (Sunday, Monday,...) of the Week
 */

var DATE_PICKER_START_DATES = {
  monday: {
    val: 1,
    description: "Monday"
  },
  tuesday: {
    val: 2,
    description: "Tuesday"
  },
  wednesday: {
    val: 3,
    description: "Wednesday"
  },
  thursday: {
    val: 4,
    description: "Thursday"
  },
  friday: {
    val: 5,
    description: "Friday"
  },
  saturday: {
    val: 6,
    description: "Saturday"
  },
  sunday: {
    val: 0,
    description: "Sunday"
  }
};
/**
 * DROPDOWN DATA MODE
 *  - Normal
 *  - API
 */

var DROPDOWN_DATA_MODES = {
  list: {
    val: 'list',
    description: "Normal - Pre-Config List Items"
  },
  api: {
    val: 'api',
    description: "API - List Items from your own API"
  }
};
/**
 * File Upload Modes
 */

var FILE_UPLOAD_MODES = {
  normal: {
    val: 'normal',
    description: "Keep the file there for HTTP Form Request"
  },
  preUpload: {
    val: 'preUpload',
    description: "Pre-Upload to your own API"
  }
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/InputControl.vue?vue&type=template&id=113c2384&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(_vm.control.hasMask)?_c('input',{directives:[{name:"mask",rawName:"v-mask",value:(_vm.control.mask),expression:"control.mask"}],class:_vm.controlFieldClass,attrs:{"id":_vm.control.uniqueId,"type":"text","name":_vm.control.name || _vm.control.uniqueId,"placeholder":_vm.control.placeholderText,"disabled":_vm.control.isDisabled},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.updateValue($event.target.value)}}}):_c('input',{class:_vm.controlFieldClass,attrs:{"id":_vm.control.uniqueId,"type":"text","name":_vm.control.name || _vm.control.uniqueId,"placeholder":_vm.control.placeholderText,"disabled":_vm.control.isDisabled},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.updateValue($event.target.value)}}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/controls/InputControl.vue?vue&type=template&id=113c2384&

// EXTERNAL MODULE: ./src/mixins/control-field-extend-mixin.js
var control_field_extend_mixin = __webpack_require__("653e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/InputControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * InputControl doesn't need to setValue. We can eventually assign the bind the value into the <input>
 * Safe safe...
 */

/* harmony default export */ var InputControlvue_type_script_lang_js_ = ({
  name: "InputControl",
  mixins: [control_field_extend_mixin["a" /* CONTROL_FIELD_EXTEND_MIXIN */]]
});
// CONCATENATED MODULE: ./src/views/controls/InputControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_InputControlvue_type_script_lang_js_ = (InputControlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/controls/InputControl.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  controls_InputControlvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputControl = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/TextControl.vue?vue&type=template&id=d8803866&
var TextControlvue_type_template_id_d8803866_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('textarea',{class:_vm.controlFieldClass,attrs:{"id":_vm.control.uniqueId,"type":"text","rows":_vm.control.rows,"name":_vm.control.name,"placeholder":_vm.control.placeholderText,"disabled":_vm.control.isDisabled},domProps:{"value":_vm.value},on:{"input":function($event){return _vm.updateValue($event.target.value)}}})}
var TextControlvue_type_template_id_d8803866_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/controls/TextControl.vue?vue&type=template&id=d8803866&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/TextControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * TextControl doesn't need to setValue. We can eventually assign the bind the value into the <textarea>
 * Safe safe...
 */

/* harmony default export */ var TextControlvue_type_script_lang_js_ = ({
  name: "TextControl",
  mixins: [control_field_extend_mixin["a" /* CONTROL_FIELD_EXTEND_MIXIN */]]
});
// CONCATENATED MODULE: ./src/views/controls/TextControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_TextControlvue_type_script_lang_js_ = (TextControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/controls/TextControl.vue





/* normalize component */

var TextControl_component = Object(componentNormalizer["a" /* default */])(
  controls_TextControlvue_type_script_lang_js_,
  TextControlvue_type_template_id_d8803866_render,
  TextControlvue_type_template_id_d8803866_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TextControl = (TextControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/EmptyBlockControl.vue?vue&type=template&id=3fdfbdb1&
var EmptyBlockControlvue_type_template_id_3fdfbdb1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div')}
var EmptyBlockControlvue_type_template_id_3fdfbdb1_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/controls/EmptyBlockControl.vue?vue&type=template&id=3fdfbdb1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/EmptyBlockControl.vue?vue&type=script&lang=js&
//
//
//
//

/**
 * As you can see, it's surely an empty block =))
 */
/* harmony default export */ var EmptyBlockControlvue_type_script_lang_js_ = ({
  name: "EmptyBlockControl"
});
// CONCATENATED MODULE: ./src/views/controls/EmptyBlockControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_EmptyBlockControlvue_type_script_lang_js_ = (EmptyBlockControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/controls/EmptyBlockControl.vue





/* normalize component */

var EmptyBlockControl_component = Object(componentNormalizer["a" /* default */])(
  controls_EmptyBlockControlvue_type_script_lang_js_,
  EmptyBlockControlvue_type_template_id_3fdfbdb1_render,
  EmptyBlockControlvue_type_template_id_3fdfbdb1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EmptyBlockControl = (EmptyBlockControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/TextBlockControl.vue?vue&type=template&id=32a627a6&
var TextBlockControlvue_type_template_id_32a627a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.control.additionalFieldClass,domProps:{"textContent":_vm._s(_vm.control.text)}})}
var TextBlockControlvue_type_template_id_32a627a6_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/controls/TextBlockControl.vue?vue&type=template&id=32a627a6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/TextBlockControl.vue?vue&type=script&lang=js&
//
//
//
//
//

/**
 * As you can see, it's surely an empty block =))
 */

/* harmony default export */ var TextBlockControlvue_type_script_lang_js_ = ({
  name: "TextBlockControl",
  mixins: [control_field_extend_mixin["a" /* CONTROL_FIELD_EXTEND_MIXIN */]]
});
// CONCATENATED MODULE: ./src/views/controls/TextBlockControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_TextBlockControlvue_type_script_lang_js_ = (TextBlockControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/controls/TextBlockControl.vue





/* normalize component */

var TextBlockControl_component = Object(componentNormalizer["a" /* default */])(
  controls_TextBlockControlvue_type_script_lang_js_,
  TextBlockControlvue_type_template_id_32a627a6_render,
  TextBlockControlvue_type_template_id_32a627a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TextBlockControl = (TextBlockControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/LabelControl.vue?vue&type=template&id=3e7935fd&
var LabelControlvue_type_template_id_3e7935fd_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{class:_vm.control.additionalLabelClass,attrs:{"id":_vm.control.uniqueId,"for":_vm.control.forAttribute},domProps:{"innerHTML":_vm._s(_vm.control.label)}})}
var LabelControlvue_type_template_id_3e7935fd_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/controls/LabelControl.vue?vue&type=template&id=3e7935fd&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/LabelControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/**
 * LabelControl
 * <label for='...'>...</label>
 */

/* harmony default export */ var LabelControlvue_type_script_lang_js_ = ({
  name: "LabelControl",
  mixins: [control_field_extend_mixin["a" /* CONTROL_FIELD_EXTEND_MIXIN */]]
});
// CONCATENATED MODULE: ./src/views/controls/LabelControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_LabelControlvue_type_script_lang_js_ = (LabelControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/controls/LabelControl.vue





/* normalize component */

var LabelControl_component = Object(componentNormalizer["a" /* default */])(
  controls_LabelControlvue_type_script_lang_js_,
  LabelControlvue_type_template_id_3e7935fd_render,
  LabelControlvue_type_template_id_3e7935fd_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LabelControl = (LabelControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/RadioCheckboxControl.vue?vue&type=template&id=30c419d2&
var RadioCheckboxControlvue_type_template_id_30c419d2_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":_vm.control.uniqueId}},[(_vm.isSameBlock)?_c('div',{staticClass:"radio-checkbox",class:_vm.lineNextClasses},_vm._l((_vm.control.items),function(listItem){return _c('label',{key:listItem.value,class:_vm.positionClasses},[((_vm.control.type)==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.valueContainer[_vm.controlName]),expression:"valueContainer[controlName]"}],class:_vm.control.additionalFieldClass,attrs:{"name":_vm.inputName,"disabled":_vm.control.isDisabled,"type":"checkbox"},domProps:{"value":listItem.value,"checked":Array.isArray(_vm.valueContainer[_vm.controlName])?_vm._i(_vm.valueContainer[_vm.controlName],listItem.value)>-1:(_vm.valueContainer[_vm.controlName])},on:{"change":function($event){var $$a=_vm.valueContainer[_vm.controlName],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=listItem.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.valueContainer, _vm.controlName, $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.valueContainer, _vm.controlName, $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.valueContainer, _vm.controlName, $$c)}}}}):((_vm.control.type)==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.valueContainer[_vm.controlName]),expression:"valueContainer[controlName]"}],class:_vm.control.additionalFieldClass,attrs:{"name":_vm.inputName,"disabled":_vm.control.isDisabled,"type":"radio"},domProps:{"value":listItem.value,"checked":_vm._q(_vm.valueContainer[_vm.controlName],listItem.value)},on:{"change":function($event){return _vm.$set(_vm.valueContainer, _vm.controlName, listItem.value)}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.valueContainer[_vm.controlName]),expression:"valueContainer[controlName]"}],class:_vm.control.additionalFieldClass,attrs:{"name":_vm.inputName,"disabled":_vm.control.isDisabled,"type":_vm.control.type},domProps:{"value":listItem.value,"value":(_vm.valueContainer[_vm.controlName])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.valueContainer, _vm.controlName, $event.target.value)}}}),_vm._v(" "+_vm._s(listItem.text)+" "),(_vm.displayMode === 'line')?_c('br'):_vm._e()])}),0):_c('div',[_c('div',{staticClass:"radio-checkbox",class:_vm.styles.ROW},_vm._l((_vm.control.items),function(listItem){return _c('div',{key:listItem.value,class:[_vm.styles.COLUMNS.COL6, _vm.positionClasses]},[_c('label',[((_vm.control.type)==='checkbox')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.valueContainer[_vm.controlName]),expression:"valueContainer[controlName]"}],class:_vm.control.additionalFieldClass,attrs:{"name":_vm.inputName,"disabled":_vm.control.isDisabled,"type":"checkbox"},domProps:{"value":listItem.value,"checked":Array.isArray(_vm.valueContainer[_vm.controlName])?_vm._i(_vm.valueContainer[_vm.controlName],listItem.value)>-1:(_vm.valueContainer[_vm.controlName])},on:{"change":function($event){var $$a=_vm.valueContainer[_vm.controlName],$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=listItem.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.valueContainer, _vm.controlName, $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.valueContainer, _vm.controlName, $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.valueContainer, _vm.controlName, $$c)}}}}):((_vm.control.type)==='radio')?_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.valueContainer[_vm.controlName]),expression:"valueContainer[controlName]"}],class:_vm.control.additionalFieldClass,attrs:{"name":_vm.inputName,"disabled":_vm.control.isDisabled,"type":"radio"},domProps:{"value":listItem.value,"checked":_vm._q(_vm.valueContainer[_vm.controlName],listItem.value)},on:{"change":function($event){return _vm.$set(_vm.valueContainer, _vm.controlName, listItem.value)}}}):_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.valueContainer[_vm.controlName]),expression:"valueContainer[controlName]"}],class:_vm.control.additionalFieldClass,attrs:{"name":_vm.inputName,"disabled":_vm.control.isDisabled,"type":_vm.control.type},domProps:{"value":listItem.value,"value":(_vm.valueContainer[_vm.controlName])},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.valueContainer, _vm.controlName, $event.target.value)}}}),_vm._v(" "+_vm._s(listItem.text)+" ")])])}),0)])])}
var RadioCheckboxControlvue_type_template_id_30c419d2_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/controls/RadioCheckboxControl.vue?vue&type=template&id=30c419d2&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/RadioCheckboxControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/**
 * Radio/Checkbox List Control
 * Probably, we can use them together. Because the only main difference is input[type=radio|checkbox]
 * @property {ListItem[]} control.items
 */

/* harmony default export */ var RadioCheckboxControlvue_type_script_lang_js_ = ({
  name: "RadioCheckboxControl",
  mixins: [control_field_extend_mixin["a" /* CONTROL_FIELD_EXTEND_MIXIN */]],
  props: {
    valueContainer: {
      type: Object,
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      stopDefaultValueAssign: true,
      defaultBucket: ''
    };
  },
  created: function created() {
    // special case for Form-Builder since we can't use the
    // valueContainer (value container only available on Renderer)
    if (!this.valueContainer[this.controlName]) {
      this.valueContainer[this.controlName] = '';
    }
  },
  mounted: function mounted() {
    if (this.control.defaultValue) {
      // assign default value for control
      if (this.isRadio) {
        this.updateValue(this.control.defaultValue);
      } else {
        this.updateValue([this.control.defaultValue]);
      }
    }
  },
  computed: {
    /**
     * Check if the current instance control is radio??
     * @returns {boolean}
     */
    isRadio: function isRadio() {
      return this.control.type === 'radio';
    },

    /**
     * Quick Access to The Control.DisplayMode
     * @returns {string}
     */
    displayMode: function displayMode() {
      return this.control.displayMode;
    },

    /**
     * Check if the displayMode either line or next. Because both of them are in the same `div` block
     * @returns {boolean}
     */
    isSameBlock: function isSameBlock() {
      return this.displayMode === RADIO_CHECKBOX_STYLE.line.val || this.displayMode === RADIO_CHECKBOX_STYLE.next.val;
    },

    /**
     * Get classes for view mode of Line - Next
     * @returns {Object}
     */
    lineNextClasses: function lineNextClasses() {
      return {
        'line': this.displayMode === 'line',
        'next': this.displayMode === 'next'
      };
    },

    /**
     * Get position class depends on the configuration
     * @returns {Object}
     */
    positionClasses: function positionClasses() {
      return {
        'text-center': this.control.position === RADIO_CHECKBOX_POSITION.center.val,
        'text-right': this.control.position === RADIO_CHECKBOX_POSITION.right.val,
        'text-left': this.control.position === RADIO_CHECKBOX_POSITION.left.val
      };
    },

    /**
     * Generate the :name for the input[type=checkbox|radio]
     * @returns {string|string}
     */
    inputName: function inputName() {
      // For input[name] of Radio, they need to be the same.
      // If Control Name is Empty => Use ID instead (otherwise, control will break =)) )
      if (this.isRadio) {
        return this.controlName;
      } // For Checkbox, name will always be Array Mode (name[])


      return this.controlName + "[]";
    }
  }
});
// CONCATENATED MODULE: ./src/views/controls/RadioCheckboxControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_RadioCheckboxControlvue_type_script_lang_js_ = (RadioCheckboxControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/controls/RadioCheckboxControl.vue





/* normalize component */

var RadioCheckboxControl_component = Object(componentNormalizer["a" /* default */])(
  controls_RadioCheckboxControlvue_type_script_lang_js_,
  RadioCheckboxControlvue_type_template_id_30c419d2_render,
  RadioCheckboxControlvue_type_template_id_30c419d2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RadioCheckboxControl = (RadioCheckboxControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/NumberControl.vue?vue&type=template&id=add49808&scoped=true&
var NumberControlvue_type_template_id_add49808_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('input',{class:_vm.controlFieldClass,attrs:{"id":_vm.control.uniqueId,"type":"number","name":_vm.control.name,"placeholder":_vm.control.placeholderText,"disabled":_vm.control.isDisabled},domProps:{"value":_vm.number},on:{"input":function($event){return _vm.convertToNumber($event.target.value)}}})}
var NumberControlvue_type_template_id_add49808_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/controls/NumberControl.vue?vue&type=template&id=add49808&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/NumberControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Number Control
 * Later
 * @focusin="previewMode = number"
 * @focusout="updatedPreview"
 */

/* harmony default export */ var NumberControlvue_type_script_lang_js_ = ({
  name: "NumberControl",
  mixins: [control_field_extend_mixin["a" /* CONTROL_FIELD_EXTEND_MIXIN */]],
  data: function data() {
    return {
      number: 0,
      stopDefaultValueAssign: true,
      previewMode: "0"
    };
  },
  methods: {
    /**
     * Convert to Number before Emit V-Model
     * @param value
     */
    convertToNumber: function convertToNumber(value) {
      var convertedVal = this.isRealNumber ? parseFloat(value) : parseInt(value, 10); // emit now

      this.updateValue(convertedVal); // re-assign val
      //this.updatedPreview()

      this.number = convertedVal;
    },

    /**
     * Updated Preview Mode (Mask preview, eg: 1,123,456.00) for Number
     * TODO: Available only v2.1
     */
    updatedPreview: function updatedPreview() {},

    /**
     * Specific set value for the Number Control from the v-model
     */
    setValue: function setValue(val) {
      this.convertToNumber(val);
    }
  },
  computed: {
    /**
     * Check if the num control is using int or float/double
     * @returns {boolean}
     */
    isRealNumber: function isRealNumber() {
      return this.control.isReal;
    }
  },
  created: function created() {
    // set default value (if exists)
    if (this.control.defaultValue) {
      this.convertToNumber(this.control.defaultValue);
    }
  }
});
// CONCATENATED MODULE: ./src/views/controls/NumberControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_NumberControlvue_type_script_lang_js_ = (NumberControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/controls/NumberControl.vue





/* normalize component */

var NumberControl_component = Object(componentNormalizer["a" /* default */])(
  controls_NumberControlvue_type_script_lang_js_,
  NumberControlvue_type_template_id_add49808_scoped_true_render,
  NumberControlvue_type_template_id_add49808_scoped_true_staticRenderFns,
  false,
  null,
  "add49808",
  null
  
)

/* harmony default export */ var NumberControl = (NumberControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/DropdownControl.vue?vue&type=template&id=9934b5aa&scoped=true&
var DropdownControlvue_type_template_id_9934b5aa_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('select',{class:_vm.controlFieldClass,attrs:{"id":_vm.control.uniqueId,"name":_vm.control.name || _vm.control.uniqueId,"multiple":this.control.multiple,"disabled":_vm.control.isDisabled},on:{"input":function($event){return _vm.updateValue($event.target.value)}}},[(_vm.control.placeholderText)?_c('option',{attrs:{"disabled":"","selected":""},domProps:{"textContent":_vm._s(_vm.control.placeholderText)}}):_vm._e(),_vm._l((_vm.listOptions),function(optionObj){return _c('option',{key:optionObj.value,domProps:{"value":optionObj.value,"selected":_vm.value === optionObj.value,"textContent":_vm._s(optionObj.text)}})})],2)}
var DropdownControlvue_type_template_id_9934b5aa_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/controls/DropdownControl.vue?vue&type=template&id=9934b5aa&scoped=true&

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d225");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("bd86");

// CONCATENATED MODULE: ./src/libraries/list-item.class.js



/**
 * List-Item for Checkbox/Radio/Select
 */
var list_item_class_ListItem = function ListItem(value, text) {
  Object(classCallCheck["a" /* default */])(this, ListItem);

  Object(defineProperty["a" /* default */])(this, "value", "");

  Object(defineProperty["a" /* default */])(this, "text", "");

  this.value = value;
  this.text = text;
};


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/controls/DropdownControl.vue?vue&type=script&lang=js&


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/**
 * Dropdown Control.
 * I've been thinking all day, all night, should I use some library (select2, choices.js,...)
 * But, after some researched via https://bundlephobia.com/ , I decided to use Native Select instead
 * In order to save some KBs, the bundle is kinda bigger now @@
 * @property {ListItem[]} listOptions
 */

/* harmony default export */ var DropdownControlvue_type_script_lang_js_ = ({
  name: "DropdownControl",
  mixins: [control_field_extend_mixin["a" /* CONTROL_FIELD_EXTEND_MIXIN */]],
  data: function data() {
    return {
      listOptions: [],
      dataMode: "",
      apiURL: ""
    };
  },
  watch: {
    control: {
      deep: true,
      handler: function handler(controlObj) {
        // we cached it. If nothing change => no reload
        if ( // single check
        controlObj.dataMode !== this.dataMode || controlObj.apiURL !== this.apiURL || // list check
        controlObj.dataMode === DROPDOWN_DATA_MODES.list.val && controlObj.items.length !== this.listOptions.length) {
          return this.retrieveOptionLists();
        }
      }
    }
  },
  methods: {
    retrieveOptionLists: function retrieveOptionLists() {
      this.dataMode = this.control.dataMode;
      this.apiURL = this.control.apiURL; // pick up option data

      if (this.control.dataMode === DROPDOWN_DATA_MODES.list.val) {
        this.listOptions = this.control.items;
        return;
      } // our code goes down here? => REST-API


      if (!this.control.apiURL) {
        throw new TypeError("[Dropdown] In order to use REST-API for Dropdown. You must set your Rest-API Endpoint.");
      } // is it http/https?


      if (this.control.apiURL.indexOf("http://") < 0 && this.control.apiURL.indexOf("https://") < 0) {
        throw new TypeError("[Dropdown] Rest-API Endpoint must be valid http/https URL.");
      } // ok retrieve now


      fetch(this.control.apiURL, {
        method: "GET"
      }).then(function (result) {
        return result.json();
      }).then(this.afterRestAPICallDataSuccessfully).catch(this.restAPICallErrorHandling);
    },

    /**
     * [FOR-RestAPI-Dropdown][EVENT]
     * Appending data after success
     * @param {[]} result
     */
    afterRestAPICallDataSuccessfully: function afterRestAPICallDataSuccessfully(result) {
      var _this = this;

      if (!Array.isArray(result)) {
        throw new TypeError("[DROPDOWN-".concat(this.control.name, "] Wrong API-data format."));
      } // clear list


      this.listOptions = []; // traversal all list and add it into the list

      result.forEach(function (optionObj) {
        _this.listOptions.push(new list_item_class_ListItem(optionObj[_this.valueKey], optionObj[_this.textKey]));
      });
    },

    /**
     * [FOR-RestAPI-Dropdown][EVENT]
     * Show error for dropdown.
     */
    restAPICallErrorHandling: function restAPICallErrorHandling(e) {
      console.error("[DROPDOWN-Control-".concat(this.control.uniqueId, "] Request API to get data failed."), e);
    }
  },
  computed: {
    /**
     * [API-Only] Get Text Key
     * @returns {string}
     */
    textKey: function textKey() {
      return this.control.apiTextKey || "text";
    },

    /**
     * [API-Only] Get Text Key
     * @returns {string}
     */
    valueKey: function valueKey() {
      return this.control.apiValueKey || "value";
    }
  },
  created: function created() {
    this.retrieveOptionLists();
  }
});
// CONCATENATED MODULE: ./src/views/controls/DropdownControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var controls_DropdownControlvue_type_script_lang_js_ = (DropdownControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/controls/DropdownControl.vue





/* normalize component */

var DropdownControl_component = Object(componentNormalizer["a" /* default */])(
  controls_DropdownControlvue_type_script_lang_js_,
  DropdownControlvue_type_template_id_9934b5aa_scoped_true_render,
  DropdownControlvue_type_template_id_9934b5aa_scoped_true_staticRenderFns,
  false,
  null,
  "9934b5aa",
  null
  
)

/* harmony default export */ var DropdownControl = (DropdownControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/TextBlockConfigView.vue?vue&type=template&id=7c65e5f4&
var TextBlockConfigViewvue_type_template_id_7c65e5f4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Text for Text-Block")]),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.text),expression:"control.text"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text","rows":"6"},domProps:{"value":(_vm.control.text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "text", $event.target.value)}}})])])}
var TextBlockConfigViewvue_type_template_id_7c65e5f4_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/control-configs/TextBlockConfigView.vue?vue&type=template&id=7c65e5f4&

// EXTERNAL MODULE: ./src/mixins/control-special-config-mixin.js + 5 modules
var control_special_config_mixin = __webpack_require__("8ae1");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/TextBlockConfigView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TextBlockConfigViewvue_type_script_lang_js_ = ({
  name: "TextBlockConfigView",
  mixins: [control_special_config_mixin["a" /* CONTROL_SPECIAL_CONFIG_MIXIN */]]
});
// CONCATENATED MODULE: ./src/views/control-configs/TextBlockConfigView.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_configs_TextBlockConfigViewvue_type_script_lang_js_ = (TextBlockConfigViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/control-configs/TextBlockConfigView.vue





/* normalize component */

var TextBlockConfigView_component = Object(componentNormalizer["a" /* default */])(
  control_configs_TextBlockConfigViewvue_type_script_lang_js_,
  TextBlockConfigViewvue_type_template_id_7c65e5f4_render,
  TextBlockConfigViewvue_type_template_id_7c65e5f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TextBlockConfigView = (TextBlockConfigView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/LabelConfigView.vue?vue&type=template&id=11c7a614&
var LabelConfigViewvue_type_template_id_11c7a614_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("For-Attribute to Control?")]),_c('select',{class:_vm.styles.FORM.FORM_CONTROL,on:{"input":_vm.selectedFor}},[_c('option',[_vm._v("None")]),_vm._l((_vm.listControlData),function(item){return _c('option',{key:item.value,domProps:{"value":item.value,"textContent":_vm._s(item.text)}})})],2)])])}
var LabelConfigViewvue_type_template_id_11c7a614_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/control-configs/LabelConfigView.vue?vue&type=template&id=11c7a614&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/LabelConfigView.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var LABEL_SELECTED_CLASS = 'label-selected';
/**
 * @property {ListItem[]} listControlData
 */

/* harmony default export */ var LabelConfigViewvue_type_script_lang_js_ = ({
  name: "LabelConfigView",
  mixins: [control_special_config_mixin["a" /* CONTROL_SPECIAL_CONFIG_MIXIN */]],
  data: function data() {
    return {
      listControlData: []
    };
  },
  methods: {
    selectedFor: function selectedFor($e) {
      this.clearAllMapped();
      this.control.forAttribute = $e.target.value; // is eligible to add selected class??

      if (this.control.forAttribute) {
        this.labelMappedAssign(this.control.forAttribute);
      }
    },

    /**
     * Find the control and add it a simple class to let the configurator know which
     * label they're assigning to which control.
     * @param controlId
     */
    labelMappedAssign: function labelMappedAssign(controlId) {
      var controlDOM = document.getElementById(controlId);

      if (!controlDOM || !controlDOM.parentNode) {
        return;
      }

      controlDOM.parentNode.classList.add(LABEL_SELECTED_CLASS);
    },

    /**
     * Simply loop through all the controls and remove the `bordered` class
     * Vanilla JS rules
     */
    clearAllMapped: function clearAllMapped() {
      this.listControlData.forEach(function (controlOption) {
        var controlDOM = document.getElementById(controlOption.value);

        if (!controlDOM || !controlDOM.parentNode) {
          return;
        }

        controlDOM.parentNode.classList.remove(LABEL_SELECTED_CLASS);
      });
    }
  },
  created: function created() {
    // prepare control list and remove the current
    var pureIds = Object.keys(this.formData.controls);

    for (var _i = 0, _pureIds = pureIds; _i < _pureIds.length; _i++) {
      var controlId = _pureIds[_i];

      // Current Label => NO ID should be added
      if (controlId === this.control.uniqueId) {
        continue;
      } // Label Control => NO ID should be added


      if (this.formData.controls[controlId].type === 'label') {
        continue;
      } // option text generation


      var controlObj = this.formData.controls[controlId];
      var fieldName = "".concat(controlObj.label, " - #").concat(controlObj.uniqueId); // if name is exist => use it instead of uniqueID

      if (controlObj.name) {
        fieldName = "".concat(controlObj.label, " - ").concat(controlObj.name);
      } // add it to the list


      this.listControlData.push(new list_item_class_ListItem(controlId, fieldName));
    } // do we need to mark the border??


    if (this.control.forAttribute) {
      this.labelMappedAssign(this.control.forAttribute);
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.clearAllMapped();
  }
});
// CONCATENATED MODULE: ./src/views/control-configs/LabelConfigView.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_configs_LabelConfigViewvue_type_script_lang_js_ = (LabelConfigViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/control-configs/LabelConfigView.vue





/* normalize component */

var LabelConfigView_component = Object(componentNormalizer["a" /* default */])(
  control_configs_LabelConfigViewvue_type_script_lang_js_,
  LabelConfigViewvue_type_template_id_11c7a614_render,
  LabelConfigViewvue_type_template_id_11c7a614_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var LabelConfigView = (LabelConfigView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/RadioCheckboxConfigView.vue?vue&type=template&id=b6e79938&
var RadioCheckboxConfigViewvue_type_template_id_b6e79938_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Display Mode")]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.displayMode),expression:"control.displayMode"}],class:_vm.styles.FORM.FORM_CONTROL,on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.control, "displayMode", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.listDisplayModes),function(item){return _c('option',{key:item.val,domProps:{"value":item.val,"textContent":_vm._s(item.description)}})}),0)]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Display Position")]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.position),expression:"control.position"}],class:_vm.styles.FORM.FORM_CONTROL,on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.control, "position", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.listPositions),function(item){return _c('option',{key:item.val,domProps:{"value":item.val,"textContent":_vm._s(item.description)}})}),0)]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" List Selections "),_c('span',{staticClass:"pointer",domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('addOutline', '16px', '16px', 'green'))},on:{"click":_vm.addListItem}})]),_vm._l((_vm.control.items),function(listItem,iItem){return _c('div',{key:iItem,class:['list-selection']},[_c('div',{staticClass:"tool-block"},[_c('span',{staticClass:"pointer",domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('close', '16px', '16px', 'red'))},on:{"click":function($event){return _vm.removeListItem(iItem)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Item Value")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(listItem.value),expression:"listItem.value"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text","placeholder":"Radio/Checkbox-Value"},domProps:{"value":(listItem.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(listItem, "value", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Label Text")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(listItem.text),expression:"listItem.text"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text","placeholder":"Label text"},domProps:{"value":(listItem.text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(listItem, "text", $event.target.value)}}})])])})],2)])}
var RadioCheckboxConfigViewvue_type_template_id_b6e79938_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/control-configs/RadioCheckboxConfigView.vue?vue&type=template&id=b6e79938&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/RadioCheckboxConfigView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var RadioCheckboxConfigViewvue_type_script_lang_js_ = ({
  name: "RadioCheckboxConfigView",
  mixins: [control_special_config_mixin["a" /* CONTROL_SPECIAL_CONFIG_MIXIN */]],
  methods: {
    /**
     * Add new List-Item for the Current Radio/Checkbox
     */
    addListItem: function addListItem() {
      this.control.items.push(new list_item_class_ListItem('', ''));
    },

    /**
     * Remove list-Item by Index of the Array
     */
    removeListItem: function removeListItem(index) {
      this.control.items.splice(index, 1);
    }
  },
  computed: {
    /**
     * Configuration for the displayMode
     */
    listDisplayModes: function listDisplayModes() {
      return RADIO_CHECKBOX_STYLE;
    },

    /**
     * Configuration for the position
     */
    listPositions: function listPositions() {
      return RADIO_CHECKBOX_POSITION;
    }
  }
});
// CONCATENATED MODULE: ./src/views/control-configs/RadioCheckboxConfigView.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_configs_RadioCheckboxConfigViewvue_type_script_lang_js_ = (RadioCheckboxConfigViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/control-configs/RadioCheckboxConfigView.vue





/* normalize component */

var RadioCheckboxConfigView_component = Object(componentNormalizer["a" /* default */])(
  control_configs_RadioCheckboxConfigViewvue_type_script_lang_js_,
  RadioCheckboxConfigViewvue_type_template_id_b6e79938_render,
  RadioCheckboxConfigViewvue_type_template_id_b6e79938_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var RadioCheckboxConfigView = (RadioCheckboxConfigView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/NumberConfigView.vue?vue&type=template&id=34a3a561&
var NumberConfigViewvue_type_template_id_34a3a561_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Is Real Number (Float/Double) "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.isReal),expression:"control.isReal"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.control.isReal)?_vm._i(_vm.control.isReal,null)>-1:(_vm.control.isReal)},on:{"change":function($event){var $$a=_vm.control.isReal,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.control, "isReal", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.control, "isReal", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.control, "isReal", $$c)}}}})])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.control.isReal),expression:"control.isReal"}],class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Decimal Places")]),_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.control.decimalPlace),expression:"control.decimalPlace",modifiers:{"number":true}}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"number","step":"1","min":"0","max":"10"},domProps:{"value":(_vm.control.decimalPlace)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "decimalPlace", _vm._n($event.target.value))},"blur":function($event){return _vm.$forceUpdate()}}})])])}
var NumberConfigViewvue_type_template_id_34a3a561_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/control-configs/NumberConfigView.vue?vue&type=template&id=34a3a561&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/NumberConfigView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var NumberConfigViewvue_type_script_lang_js_ = ({
  name: "NumberConfigView",
  mixins: [control_special_config_mixin["a" /* CONTROL_SPECIAL_CONFIG_MIXIN */]]
});
// CONCATENATED MODULE: ./src/views/control-configs/NumberConfigView.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_configs_NumberConfigViewvue_type_script_lang_js_ = (NumberConfigViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/control-configs/NumberConfigView.vue





/* normalize component */

var NumberConfigView_component = Object(componentNormalizer["a" /* default */])(
  control_configs_NumberConfigViewvue_type_script_lang_js_,
  NumberConfigViewvue_type_template_id_34a3a561_render,
  NumberConfigViewvue_type_template_id_34a3a561_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NumberConfigView = (NumberConfigView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/TextConfigView.vue?vue&type=template&id=82eeb1ae&
var TextConfigViewvue_type_template_id_82eeb1ae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Number of Rows")]),_c('input',{directives:[{name:"model",rawName:"v-model.number",value:(_vm.control.rows),expression:"control.rows",modifiers:{"number":true}}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"number","step":"1"},domProps:{"value":(_vm.control.rows)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "rows", _vm._n($event.target.value))},"blur":function($event){return _vm.$forceUpdate()}}}),_c('small',[_vm._v("`row` HTML Attribute Configuration")])])])}
var TextConfigViewvue_type_template_id_82eeb1ae_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/control-configs/TextConfigView.vue?vue&type=template&id=82eeb1ae&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/TextConfigView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TextConfigViewvue_type_script_lang_js_ = ({
  name: "TextConfigView",
  mixins: [control_special_config_mixin["a" /* CONTROL_SPECIAL_CONFIG_MIXIN */]]
});
// CONCATENATED MODULE: ./src/views/control-configs/TextConfigView.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_configs_TextConfigViewvue_type_script_lang_js_ = (TextConfigViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/control-configs/TextConfigView.vue





/* normalize component */

var TextConfigView_component = Object(componentNormalizer["a" /* default */])(
  control_configs_TextConfigViewvue_type_script_lang_js_,
  TextConfigViewvue_type_template_id_82eeb1ae_render,
  TextConfigViewvue_type_template_id_82eeb1ae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TextConfigView = (TextConfigView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/DropdownConfigView.vue?vue&type=template&id=73bbbb38&
var DropdownConfigViewvue_type_template_id_73bbbb38_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Multiple Selection? "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.multiple),expression:"control.multiple"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.control.multiple)?_vm._i(_vm.control.multiple,null)>-1:(_vm.control.multiple)},on:{"change":function($event){var $$a=_vm.control.multiple,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.control, "multiple", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.control, "multiple", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.control, "multiple", $$c)}}}})])]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Option-Data-List Mode")]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.dataMode),expression:"control.dataMode"}],class:_vm.styles.FORM.FORM_CONTROL,on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.control, "dataMode", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.listDataModes),function(item){return _c('option',{key:item.val,domProps:{"value":item.val,"textContent":_vm._s(item.description)}})}),0)]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(this.control.dataMode === _vm.listDataModes.api.val),expression:"this.control.dataMode === listDataModes.api.val"}]},[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Rest-API URL "),_c('icon-tooltip',{attrs:{"icon":"informationOutline","text":"Your API-Endpoint URL - GET Method. It must return an Array. Read more on Documentation"}})],1),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.apiURL),expression:"control.apiURL"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text","placeholder":"https://your-domain/rest-api/get-list/..."},domProps:{"value":(_vm.control.apiURL)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "apiURL", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Value Key of your Object "),_c('icon-tooltip',{attrs:{"icon":"informationOutline","text":"[{'value': '',...}] => value"}})],1),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.apiValueKey),expression:"control.apiValueKey"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.control.apiValueKey)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "apiValueKey", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Text Key of your Object "),_c('icon-tooltip',{attrs:{"icon":"informationOutline","text":"[{'text': '',...}] => text"}})],1),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.apiTextKey),expression:"control.apiTextKey"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.control.apiTextKey)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "apiTextKey", $event.target.value)}}})])]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(this.control.dataMode === _vm.listDataModes.list.val),expression:"this.control.dataMode === listDataModes.list.val"}],class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" List Options "),_c('span',{staticClass:"pointer",domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('addOutline', '16px', '16px', 'green'))},on:{"click":_vm.addListItem}})]),_vm._l((_vm.control.items),function(listItem,iItem){return _c('div',{key:iItem,class:['list-selection']},[_c('div',{staticClass:"tool-block"},[_c('span',{staticClass:"pointer",domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('close', '16px', '16px', 'red'))},on:{"click":function($event){return _vm.removeListItem(iItem)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Item Value")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(listItem.value),expression:"listItem.value"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text","placeholder":"Radio-Value"},domProps:{"value":(listItem.value)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(listItem, "value", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Label Text")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(listItem.text),expression:"listItem.text"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text","placeholder":"Label text"},domProps:{"value":(listItem.text)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(listItem, "text", $event.target.value)}}})])])})],2)])}
var DropdownConfigViewvue_type_template_id_73bbbb38_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/control-configs/DropdownConfigView.vue?vue&type=template&id=73bbbb38&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/DropdownConfigView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var DropdownConfigViewvue_type_script_lang_js_ = ({
  name: "DropdownConfigView",
  mixins: [control_special_config_mixin["a" /* CONTROL_SPECIAL_CONFIG_MIXIN */]],
  methods: {
    /**
     * Add new List-Item for the Current Radio/Checkbox
     */
    addListItem: function addListItem() {
      this.control.items.push(new list_item_class_ListItem('', ''));
    },

    /**
     * Remove list-Item by Index of the Array
     */
    removeListItem: function removeListItem(index) {
      this.control.items.splice(index, 1);
    }
  },
  computed: {
    /**
     * Dropdown Data Modes List
     */
    listDataModes: function listDataModes() {
      return DROPDOWN_DATA_MODES;
    }
  }
});
// CONCATENATED MODULE: ./src/views/control-configs/DropdownConfigView.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_configs_DropdownConfigViewvue_type_script_lang_js_ = (DropdownConfigViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/control-configs/DropdownConfigView.vue





/* normalize component */

var DropdownConfigView_component = Object(componentNormalizer["a" /* default */])(
  control_configs_DropdownConfigViewvue_type_script_lang_js_,
  DropdownConfigViewvue_type_template_id_73bbbb38_render,
  DropdownConfigViewvue_type_template_id_73bbbb38_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DropdownConfigView = (DropdownConfigView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/InputConfigView.vue?vue&type=template&id=edeaef2a&
var InputConfigViewvue_type_template_id_edeaef2a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Has mask? "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.hasMask),expression:"control.hasMask"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.control.hasMask)?_vm._i(_vm.control.hasMask,null)>-1:(_vm.control.hasMask)},on:{"change":function($event){var $$a=_vm.control.hasMask,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.control, "hasMask", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.control, "hasMask", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.control, "hasMask", $$c)}}}})]),(_vm.control.hasMask)?_c('div',[_vm._m(0),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.mask),expression:"control.mask"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.control.mask)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "mask", $event.target.value)}}})]):_vm._e()])])}
var InputConfigViewvue_type_template_id_edeaef2a_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',[_vm._v(" Mask format "),_c('p',{staticStyle:{"line-height":"0.8"}},[_c('code',{staticStyle:{"font-size":"8pt"}},[_vm._v(" Usage example: ##.###-## "),_c('br'),_vm._v(" #: Number (0-9) "),_c('br'),_vm._v(" A: Letter in any case (a-z,A-Z) "),_c('br'),_vm._v(" N: Number or letter (a-z,A-Z,0-9) "),_c('br'),_vm._v(" X: Any symbol ")])])])}]


// CONCATENATED MODULE: ./src/views/control-configs/InputConfigView.vue?vue&type=template&id=edeaef2a&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/control-configs/InputConfigView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var InputConfigViewvue_type_script_lang_js_ = ({
  name: "InputConfigView",
  mixins: [control_special_config_mixin["a" /* CONTROL_SPECIAL_CONFIG_MIXIN */]],
  computed: {
    inputTypeAttributes: function inputTypeAttributes() {
      return ['text', 'password', 'hidden'];
    }
  }
});
// CONCATENATED MODULE: ./src/views/control-configs/InputConfigView.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_configs_InputConfigViewvue_type_script_lang_js_ = (InputConfigViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/control-configs/InputConfigView.vue





/* normalize component */

var InputConfigView_component = Object(componentNormalizer["a" /* default */])(
  control_configs_InputConfigViewvue_type_script_lang_js_,
  InputConfigViewvue_type_template_id_edeaef2a_render,
  InputConfigViewvue_type_template_id_edeaef2a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var InputConfigView = (InputConfigView_component.exports);
// CONCATENATED MODULE: ./src/configs/controls.js


/**
 * Supported Controls in Vue-Form-Builder
 * @author Phat Tran
 */


 // Control-GUI-Component


 // import ButtonControl from "@/views/controls/ButtonControl"




 // import DatePickerControl from "@/views/controls/DatePickerControl";


 // import FileUploaderControl from "@/views/controls/FileUploaderControl";
// Control-Config-Component

 // import ButtonConfigView from "@/views/control-configs/ButtonConfigView";



 // import DatePickerConfigView from "@/views/control-configs/DatePickerConfigView";


 // import FileUploaderConfigView from "@/views/control-configs/FileUploaderConfigView";


var CONTROLS = {
  input: {
    name: "Input Field",
    description: "Input text single line",
    icon: 'editPencil',
    // Follow ICON in `icon-facade.js` to see how it works.
    hasMask: false,
    mask: null,
    configData: {},
    // component mapping
    fieldComponent: InputControl,
    configComponent: InputConfigView
  },
  number: {
    name: "Number Input Field",
    description: "Input text single line - Number Only",
    configData: {
      isReal: false,
      // integer or real (float/double)
      decimalPlace: 1 // [For Real] 0.xxx?? (x = num of places)

    },
    fieldComponent: NumberControl,
    configComponent: NumberConfigView,

    /**
     * As same like Vue-JS Property Default Data
     * Specific field need some special data-type/structure, they need to
     * put the creation in a factory method.
     * It must return a value.
     */
    rendererDefaultData: function rendererDefaultData() {
      return 0;
    }
  },
  text: {
    name: "Text Field",
    description: "Multiple line text field",
    // config data for the input field - it will be merge with the CONTROL_DEFAULT_DATA
    configData: {
      rows: 3 // numeric

    },
    // component mapping
    fieldComponent: TextControl,
    configComponent: TextConfigView
  },
  // I would love to support this, but the thing is, many rich editors are too large:
  // js: 150KB+
  // css: 30KB+
  // So 2.0.0 won't have this field.
  // richText: {
  //     name: "Rich-Text Field",
  //     description: "Multiple line text field - Rich Editor (WYSIWYG)",
  // },
  // date: {
  //     name: "Date Picker",
  //     description: "Simple date picker field",
  //
  //     configData: {
  //         format: "DD/MM/YYYY",
  //         firstDay: DATE_PICKER_START_DATES.monday.val, // 0 Sunday, 1 Monday,...
  //         numberOfMonths: 1, // Number of Month(s) will be shown
  //         numberOfColumns: 1, // Number of Column(s) will be shown
  //         minDate: null, // min day (less => can't select)
  //         maxDate: null,// max day (more => can't select),
  //         hasMask: true,
  //         mask: "##/##/####",
  //
  //         singleMode: true, // date or date-range
  //
  //         // for date-range
  //         minDays: 0, // min-day range
  //         maxDays: 0, // max-day range
  //
  //         returnType: DATE_PICKER_RETURN_TYPES.format.val, // specific return type
  //     },
  //
  //     fieldComponent: DatePickerControl,
  //     configComponent: DatePickerConfigView
  // },
  // fileUpload: {
  //     name: "File Upload",
  //     description: "Upload single file through API",
  //
  //     configData: {
  //         uploadMode: FILE_UPLOAD_MODES.normal.val,
  //         apiURL: "", // API-Url to upload
  //     },
  // },
  dropDown: {
    name: "Dropdown",
    description: "Dropdown select from a list",
    configData: {
      dataMode: DROPDOWN_DATA_MODES.list.val,
      // normal - api
      multiple: false,
      // is multiple selection

      /**
       * @var {ListItem[]} items
       */
      items: [],
      // for normal hard-list
      apiURL: "",
      // for api-request - must be entered
      apiTextKey: "text",
      // <option>TEXT</option>
      apiValueKey: "value" // <option value=value>...</option>

    },
    fieldComponent: DropdownControl,
    configComponent: DropdownConfigView
  },
  checkbox: {
    name: "Checkbox List",
    description: "Checkbox list items (Multiple Select)",
    configData: {
      displayMode: RADIO_CHECKBOX_STYLE.line.val,
      // line by line / next to each others / 2 items per line
      position: RADIO_CHECKBOX_POSITION.left.val,
      // POSITION

      /**
       * @var {ListItem[]} items
       */
      items: [] // list-item

    },
    fieldComponent: RadioCheckboxControl,
    configComponent: RadioCheckboxConfigView,
    rendererDefaultData: function rendererDefaultData() {
      return [];
    }
  },
  radio: {
    name: "Radio List",
    description: "Radio-Button list items (Single Select)",
    configData: {
      displayMode: RADIO_CHECKBOX_STYLE.line.val,
      // line by line / next to each others / 2 items per line
      position: RADIO_CHECKBOX_POSITION.left.val,
      // POSITION

      /**
       * @var {ListItem[]} items
       */
      items: [] // list-item

    },
    fieldComponent: RadioCheckboxControl,
    configComponent: RadioCheckboxConfigView
  },
  // fileUploader: {
  //     name: "File Uploader",
  //     description: "File Uploader Control from vue-upload-component",
  //     disableValidation: true,
  //
  //     // config data
  //     configData: {
  //         // for styling
  //         buttonLabel: "Select File",
  //         buttonClasses: "btn btn-primary",
  //
  //         // for components
  //         postActionURL: "/your-api-post-url-to-upload",
  //         extensions: ".gif,.png,.jpg,.jpeg",
  //         accept: "image/gif,image/jpeg,image/png",
  //         maxSize: 1000, // in bytes - 0 unlimited
  //
  //         isMultiple: false,
  //         maximumFiles: 1, // if multiple is on, we need to configure this one
  //
  //         // special configurations
  //         // these will be appended when the vue-uploader-component make a request
  //         headers: [],
  //         postData: []
  //     },
  //
  //     fieldComponent: FileUploaderControl,
  //     configComponent: FileUploaderConfigView
  // },
  label: {
    name: "Label",
    description: "Simple label text show up in your Form",
    disableValue: true,
    configData: {
      forAttribute: null,
      // `for` for any control? (except the Label)
      // Override here in order to not show the Label
      isShowLabel: false
    },
    // no need validation
    disableValidation: true,
    fieldComponent: LabelControl,
    configComponent: LabelConfigView
  },
  // button: {
  //     name: "Button",
  //     description: "Simple button for your own purpose",
  //     disableValidation: true,
  //     disableValue: true,
  //
  //     configData: {
  //         buttonClass: STYLES.BUTTON.PRIMARY,
  //         buttonType: "button", // submit/reset/button/...
  //
  //         emitEventCode: "", // like: "BtnClicked/clicked/change"
  //         emitEventData: "", // special data to emit to let you know which button is clicked
  //
  //         // if this is true => validation will be run before the real invoke method
  //         isRunValidation: false,
  //
  //         // Override here in order to not show the Label
  //         isShowLabel: false,
  //     },
  //
  //     fieldComponent: ButtonControl,
  //     configComponent: ButtonConfigView
  // },
  emptyBlock: {
    name: "Empty Block",
    description: "Empty block to design your section/row.",
    disableValidation: true,
    disableValue: true,
    fieldComponent: EmptyBlockControl,
    configData: {
      // Override here in order to not show the Label
      isShowLabel: false
    }
  },
  textBlock: {
    name: "Text Block",
    description: "Block with text only (without any controls)",
    disableValidation: true,
    disableValue: true,
    // if you provide this, the control field value will not be recorded.
    fieldComponent: TextBlockControl,
    configComponent: TextBlockConfigView,
    configData: {
      text: ""
    }
  }
};
var CONTROL_DEFAULT_DATA = {
  // default configuration
  'uniqueId': '',
  // :id
  'type': '',
  // control type...
  'name': '',
  // :name
  'label': '',
  'subLabel': '',
  'isShowLabel': true,
  'isDisabled': false,
  'isUpperCaseMode': false,
  'hideOnReport': false,
  'placeholderText': '',
  // :placeholder
  'containerClass': styles["a" /* STYLES */].COLUMNS.COL6,
  'textTransformClass': styles["a" /* STYLES */].TEXT_TRANSFORM.NONE,
  'additionalContainerClass': '',
  // :class for the <div> outer container
  'additionalFieldClass': '',
  // :class for <input> <select> ...
  'additionalLabelClass': '',
  // :class for the <label>
  'defaultValue': '',

  /**
   * Validation that applied to the control
   * @var {ValidationRule[]} validations
   */
  'validations': [] // data of the others - coming up later

};
/**
 * Create new control data
 * @param controlKey
 * @returns {CONTROL_DEFAULT_DATA}
 */

function createControlData(controlKey) {
  var newData = Object.assign({}, CONTROL_DEFAULT_DATA, CONTROLS[controlKey].configData || {}); // set default data

  newData.label = CONTROLS[controlKey].name;
  newData.type = controlKey; // unique ID is a must - I used UUIDv4 => 99% Unique

  newData.uniqueId = "control-" + helper["a" /* HELPER */].getUUIDv4();
  return newData;
}



/***/ }),

/***/ "8e60":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("294c")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "8f60":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__("a159");
var descriptor = __webpack_require__("aebd");
var setToStringTag = __webpack_require__("45f2");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__("35e8")(IteratorPrototype, __webpack_require__("5168")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "9003":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__("6b4c");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "9093":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__("ce10");
var hiddenKeys = __webpack_require__("e11e").concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),

/***/ "9138":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("35e8");


/***/ }),

/***/ "95d5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("40c3");
var ITERATOR = __webpack_require__("5168")('iterator');
var Iterators = __webpack_require__("481b");
module.exports = __webpack_require__("584a").isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),

/***/ "9aa9":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "9b43":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("d8e8");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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

/***/ "9c6c":
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__("2b4c")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__("32e9")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "9def":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("4588");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "9e1e":
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__("79e5")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "a101":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

var exported;

if (!$WeakMap) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakSet(x) {
		// `WeakSet` is not present in this environment.
		return false;
	};
}

var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
if (!exported && !$setHas) {
	// eslint-disable-next-line no-unused-vars
	module.exports = function isWeakSet(x) {
		// `WeakSet` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isWeakSet(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$setHas.call(x, $setHas);
		if ($mapHas) {
			try {
				$mapHas.call(x, $mapHas);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $WeakSet; // core-js workaround, pre-v3
	} catch (e) {}
	return false;
};


/***/ }),

/***/ "a159":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__("e4ae");
var dPs = __webpack_require__("7e90");
var enumBugKeys = __webpack_require__("1691");
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__("1ec9")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__("32fc").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "a481":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__("cb7c");
var toObject = __webpack_require__("4bf8");
var toLength = __webpack_require__("9def");
var toInteger = __webpack_require__("4588");
var advanceStringIndex = __webpack_require__("0390");
var regExpExec = __webpack_require__("5f1b");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__("214f")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "a745":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("f410");

/***/ }),

/***/ "a786":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VALIDATION_RULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ValidationRule; });
/* harmony import */ var _home_elivelton_work_vue_form_builder_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d225");
/* harmony import */ var _home_elivelton_work_vue_form_builder_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("bd86");



/**
 * Validation Rules of Vue-Form-Builder
 * - desc: Validation Rule Info
 * - needValue - boolean: Need additional value from user or not? True is yes
 * - errorMessage: default error message, can be edit by the users
 * -
 */
var VALIDATION_RULES = {
  required: {
    desc: "Field must have value (at least length must be 1)",
    needValue: false,
    errorMessage: "This field is required"
  },
  min: {
    desc: "Minimum length of the value. For number field, it will be the value (not length)",
    needValue: true,
    valueInfo: "Number",
    errorMessage: "Minimum value for this field is :min"
  },
  max: {
    desc: "Maximum length of the value. For number field, it will be the value (not length)",
    needValue: true,
    valueInfo: "Number",
    errorMessage: "Maximum value for this field is :max"
  },
  isEmail: {
    desc: "Validate email address",
    needValue: false,
    errorMessage: "Wrong email address format"
  },
  regex: {
    desc: "Validation the field by using your own Regex Rule",
    needValue: true,
    valueInfo: "Regex String|Flag - Eg: [0-9]+|g",
    errorMessage: "This field value doesn't match with the rule"
  },
  sameAs: {
    desc: "Check if the field has same value with another field",
    needValue: true,
    valueInfo: "The field name you want to check with",
    errorMessage: "This field value doesn't as same as :sameAs"
  },
  customClosure: {
    desc: "Invoke your own method to check your field",
    needValue: true,
    valueInfo: "Your method name",
    errorMessage: "Custom validation failed."
  }
};
/**
 * Add Validation Rule for the Control Validation
 * @param ruleType
 * @returns {{errorMessage: (string), type: (string)}}
 */

var ValidationRule =
/**
 * Needed properties
 */
function ValidationRule(ruleType, customErrorMessage) {
  Object(_home_elivelton_work_vue_form_builder_node_modules_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, ValidationRule);

  Object(_home_elivelton_work_vue_form_builder_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "ruleType", "");

  Object(_home_elivelton_work_vue_form_builder_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "errorMessage", "");

  Object(_home_elivelton_work_vue_form_builder_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this, "additionalValue", "");

  this.ruleType = ruleType;

  if (ruleType) {
    this.errorMessage = customErrorMessage || VALIDATION_RULES[ruleType].errorMessage || "";
  }
};



/***/ }),

/***/ "aa47":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiDrag", function() { return MultiDragPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return Sortable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Swap", function() { return SwapPlugin; });
/**!
 * Sortable 1.10.2
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var version = "1.10.2";

function userAgent(pattern) {
  if (typeof window !== 'undefined' && window.navigator) {
    return !!
    /*@__PURE__*/
    navigator.userAgent.match(pattern);
  }
}

var IE11OrLess = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i);
var Edge = userAgent(/Edge/i);
var FireFox = userAgent(/firefox/i);
var Safari = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i);
var IOS = userAgent(/iP(ad|od|hone)/i);
var ChromeForAndroid = userAgent(/chrome/i) && userAgent(/android/i);

var captureMode = {
  capture: false,
  passive: false
};

function on(el, event, fn) {
  el.addEventListener(event, fn, !IE11OrLess && captureMode);
}

function off(el, event, fn) {
  el.removeEventListener(event, fn, !IE11OrLess && captureMode);
}

function matches(
/**HTMLElement*/
el,
/**String*/
selector) {
  if (!selector) return;
  selector[0] === '>' && (selector = selector.substring(1));

  if (el) {
    try {
      if (el.matches) {
        return el.matches(selector);
      } else if (el.msMatchesSelector) {
        return el.msMatchesSelector(selector);
      } else if (el.webkitMatchesSelector) {
        return el.webkitMatchesSelector(selector);
      }
    } catch (_) {
      return false;
    }
  }

  return false;
}

function getParentOrHost(el) {
  return el.host && el !== document && el.host.nodeType ? el.host : el.parentNode;
}

function closest(
/**HTMLElement*/
el,
/**String*/
selector,
/**HTMLElement*/
ctx, includeCTX) {
  if (el) {
    ctx = ctx || document;

    do {
      if (selector != null && (selector[0] === '>' ? el.parentNode === ctx && matches(el, selector) : matches(el, selector)) || includeCTX && el === ctx) {
        return el;
      }

      if (el === ctx) break;
      /* jshint boss:true */
    } while (el = getParentOrHost(el));
  }

  return null;
}

var R_SPACE = /\s+/g;

function toggleClass(el, name, state) {
  if (el && name) {
    if (el.classList) {
      el.classList[state ? 'add' : 'remove'](name);
    } else {
      var className = (' ' + el.className + ' ').replace(R_SPACE, ' ').replace(' ' + name + ' ', ' ');
      el.className = (className + (state ? ' ' + name : '')).replace(R_SPACE, ' ');
    }
  }
}

function css(el, prop, val) {
  var style = el && el.style;

  if (style) {
    if (val === void 0) {
      if (document.defaultView && document.defaultView.getComputedStyle) {
        val = document.defaultView.getComputedStyle(el, '');
      } else if (el.currentStyle) {
        val = el.currentStyle;
      }

      return prop === void 0 ? val : val[prop];
    } else {
      if (!(prop in style) && prop.indexOf('webkit') === -1) {
        prop = '-webkit-' + prop;
      }

      style[prop] = val + (typeof val === 'string' ? '' : 'px');
    }
  }
}

function matrix(el, selfOnly) {
  var appliedTransforms = '';

  if (typeof el === 'string') {
    appliedTransforms = el;
  } else {
    do {
      var transform = css(el, 'transform');

      if (transform && transform !== 'none') {
        appliedTransforms = transform + ' ' + appliedTransforms;
      }
      /* jshint boss:true */

    } while (!selfOnly && (el = el.parentNode));
  }

  var matrixFn = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  /*jshint -W056 */

  return matrixFn && new matrixFn(appliedTransforms);
}

function find(ctx, tagName, iterator) {
  if (ctx) {
    var list = ctx.getElementsByTagName(tagName),
        i = 0,
        n = list.length;

    if (iterator) {
      for (; i < n; i++) {
        iterator(list[i], i);
      }
    }

    return list;
  }

  return [];
}

function getWindowScrollingElement() {
  var scrollingElement = document.scrollingElement;

  if (scrollingElement) {
    return scrollingElement;
  } else {
    return document.documentElement;
  }
}
/**
 * Returns the "bounding client rect" of given element
 * @param  {HTMLElement} el                       The element whose boundingClientRect is wanted
 * @param  {[Boolean]} relativeToContainingBlock  Whether the rect should be relative to the containing block of (including) the container
 * @param  {[Boolean]} relativeToNonStaticParent  Whether the rect should be relative to the relative parent of (including) the contaienr
 * @param  {[Boolean]} undoScale                  Whether the container's scale() should be undone
 * @param  {[HTMLElement]} container              The parent the element will be placed in
 * @return {Object}                               The boundingClientRect of el, with specified adjustments
 */


function getRect(el, relativeToContainingBlock, relativeToNonStaticParent, undoScale, container) {
  if (!el.getBoundingClientRect && el !== window) return;
  var elRect, top, left, bottom, right, height, width;

  if (el !== window && el !== getWindowScrollingElement()) {
    elRect = el.getBoundingClientRect();
    top = elRect.top;
    left = elRect.left;
    bottom = elRect.bottom;
    right = elRect.right;
    height = elRect.height;
    width = elRect.width;
  } else {
    top = 0;
    left = 0;
    bottom = window.innerHeight;
    right = window.innerWidth;
    height = window.innerHeight;
    width = window.innerWidth;
  }

  if ((relativeToContainingBlock || relativeToNonStaticParent) && el !== window) {
    // Adjust for translate()
    container = container || el.parentNode; // solves #1123 (see: https://stackoverflow.com/a/37953806/6088312)
    // Not needed on <= IE11

    if (!IE11OrLess) {
      do {
        if (container && container.getBoundingClientRect && (css(container, 'transform') !== 'none' || relativeToNonStaticParent && css(container, 'position') !== 'static')) {
          var containerRect = container.getBoundingClientRect(); // Set relative to edges of padding box of container

          top -= containerRect.top + parseInt(css(container, 'border-top-width'));
          left -= containerRect.left + parseInt(css(container, 'border-left-width'));
          bottom = top + elRect.height;
          right = left + elRect.width;
          break;
        }
        /* jshint boss:true */

      } while (container = container.parentNode);
    }
  }

  if (undoScale && el !== window) {
    // Adjust for scale()
    var elMatrix = matrix(container || el),
        scaleX = elMatrix && elMatrix.a,
        scaleY = elMatrix && elMatrix.d;

    if (elMatrix) {
      top /= scaleY;
      left /= scaleX;
      width /= scaleX;
      height /= scaleY;
      bottom = top + height;
      right = left + width;
    }
  }

  return {
    top: top,
    left: left,
    bottom: bottom,
    right: right,
    width: width,
    height: height
  };
}
/**
 * Checks if a side of an element is scrolled past a side of its parents
 * @param  {HTMLElement}  el           The element who's side being scrolled out of view is in question
 * @param  {String}       elSide       Side of the element in question ('top', 'left', 'right', 'bottom')
 * @param  {String}       parentSide   Side of the parent in question ('top', 'left', 'right', 'bottom')
 * @return {HTMLElement}               The parent scroll element that the el's side is scrolled past, or null if there is no such element
 */


function isScrolledPast(el, elSide, parentSide) {
  var parent = getParentAutoScrollElement(el, true),
      elSideVal = getRect(el)[elSide];
  /* jshint boss:true */

  while (parent) {
    var parentSideVal = getRect(parent)[parentSide],
        visible = void 0;

    if (parentSide === 'top' || parentSide === 'left') {
      visible = elSideVal >= parentSideVal;
    } else {
      visible = elSideVal <= parentSideVal;
    }

    if (!visible) return parent;
    if (parent === getWindowScrollingElement()) break;
    parent = getParentAutoScrollElement(parent, false);
  }

  return false;
}
/**
 * Gets nth child of el, ignoring hidden children, sortable's elements (does not ignore clone if it's visible)
 * and non-draggable elements
 * @param  {HTMLElement} el       The parent element
 * @param  {Number} childNum      The index of the child
 * @param  {Object} options       Parent Sortable's options
 * @return {HTMLElement}          The child at index childNum, or null if not found
 */


function getChild(el, childNum, options) {
  var currentChild = 0,
      i = 0,
      children = el.children;

  while (i < children.length) {
    if (children[i].style.display !== 'none' && children[i] !== Sortable.ghost && children[i] !== Sortable.dragged && closest(children[i], options.draggable, el, false)) {
      if (currentChild === childNum) {
        return children[i];
      }

      currentChild++;
    }

    i++;
  }

  return null;
}
/**
 * Gets the last child in the el, ignoring ghostEl or invisible elements (clones)
 * @param  {HTMLElement} el       Parent element
 * @param  {selector} selector    Any other elements that should be ignored
 * @return {HTMLElement}          The last child, ignoring ghostEl
 */


function lastChild(el, selector) {
  var last = el.lastElementChild;

  while (last && (last === Sortable.ghost || css(last, 'display') === 'none' || selector && !matches(last, selector))) {
    last = last.previousElementSibling;
  }

  return last || null;
}
/**
 * Returns the index of an element within its parent for a selected set of
 * elements
 * @param  {HTMLElement} el
 * @param  {selector} selector
 * @return {number}
 */


function index(el, selector) {
  var index = 0;

  if (!el || !el.parentNode) {
    return -1;
  }
  /* jshint boss:true */


  while (el = el.previousElementSibling) {
    if (el.nodeName.toUpperCase() !== 'TEMPLATE' && el !== Sortable.clone && (!selector || matches(el, selector))) {
      index++;
    }
  }

  return index;
}
/**
 * Returns the scroll offset of the given element, added with all the scroll offsets of parent elements.
 * The value is returned in real pixels.
 * @param  {HTMLElement} el
 * @return {Array}             Offsets in the format of [left, top]
 */


function getRelativeScrollOffset(el) {
  var offsetLeft = 0,
      offsetTop = 0,
      winScroller = getWindowScrollingElement();

  if (el) {
    do {
      var elMatrix = matrix(el),
          scaleX = elMatrix.a,
          scaleY = elMatrix.d;
      offsetLeft += el.scrollLeft * scaleX;
      offsetTop += el.scrollTop * scaleY;
    } while (el !== winScroller && (el = el.parentNode));
  }

  return [offsetLeft, offsetTop];
}
/**
 * Returns the index of the object within the given array
 * @param  {Array} arr   Array that may or may not hold the object
 * @param  {Object} obj  An object that has a key-value pair unique to and identical to a key-value pair in the object you want to find
 * @return {Number}      The index of the object in the array, or -1
 */


function indexOfObject(arr, obj) {
  for (var i in arr) {
    if (!arr.hasOwnProperty(i)) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === arr[i][key]) return Number(i);
    }
  }

  return -1;
}

function getParentAutoScrollElement(el, includeSelf) {
  // skip to window
  if (!el || !el.getBoundingClientRect) return getWindowScrollingElement();
  var elem = el;
  var gotSelf = false;

  do {
    // we don't need to get elem css if it isn't even overflowing in the first place (performance)
    if (elem.clientWidth < elem.scrollWidth || elem.clientHeight < elem.scrollHeight) {
      var elemCSS = css(elem);

      if (elem.clientWidth < elem.scrollWidth && (elemCSS.overflowX == 'auto' || elemCSS.overflowX == 'scroll') || elem.clientHeight < elem.scrollHeight && (elemCSS.overflowY == 'auto' || elemCSS.overflowY == 'scroll')) {
        if (!elem.getBoundingClientRect || elem === document.body) return getWindowScrollingElement();
        if (gotSelf || includeSelf) return elem;
        gotSelf = true;
      }
    }
    /* jshint boss:true */

  } while (elem = elem.parentNode);

  return getWindowScrollingElement();
}

function extend(dst, src) {
  if (dst && src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        dst[key] = src[key];
      }
    }
  }

  return dst;
}

function isRectEqual(rect1, rect2) {
  return Math.round(rect1.top) === Math.round(rect2.top) && Math.round(rect1.left) === Math.round(rect2.left) && Math.round(rect1.height) === Math.round(rect2.height) && Math.round(rect1.width) === Math.round(rect2.width);
}

var _throttleTimeout;

function throttle(callback, ms) {
  return function () {
    if (!_throttleTimeout) {
      var args = arguments,
          _this = this;

      if (args.length === 1) {
        callback.call(_this, args[0]);
      } else {
        callback.apply(_this, args);
      }

      _throttleTimeout = setTimeout(function () {
        _throttleTimeout = void 0;
      }, ms);
    }
  };
}

function cancelThrottle() {
  clearTimeout(_throttleTimeout);
  _throttleTimeout = void 0;
}

function scrollBy(el, x, y) {
  el.scrollLeft += x;
  el.scrollTop += y;
}

function clone(el) {
  var Polymer = window.Polymer;
  var $ = window.jQuery || window.Zepto;

  if (Polymer && Polymer.dom) {
    return Polymer.dom(el).cloneNode(true);
  } else if ($) {
    return $(el).clone(true)[0];
  } else {
    return el.cloneNode(true);
  }
}

function setRect(el, rect) {
  css(el, 'position', 'absolute');
  css(el, 'top', rect.top);
  css(el, 'left', rect.left);
  css(el, 'width', rect.width);
  css(el, 'height', rect.height);
}

function unsetRect(el) {
  css(el, 'position', '');
  css(el, 'top', '');
  css(el, 'left', '');
  css(el, 'width', '');
  css(el, 'height', '');
}

var expando = 'Sortable' + new Date().getTime();

function AnimationStateManager() {
  var animationStates = [],
      animationCallbackId;
  return {
    captureAnimationState: function captureAnimationState() {
      animationStates = [];
      if (!this.options.animation) return;
      var children = [].slice.call(this.el.children);
      children.forEach(function (child) {
        if (css(child, 'display') === 'none' || child === Sortable.ghost) return;
        animationStates.push({
          target: child,
          rect: getRect(child)
        });

        var fromRect = _objectSpread({}, animationStates[animationStates.length - 1].rect); // If animating: compensate for current animation


        if (child.thisAnimationDuration) {
          var childMatrix = matrix(child, true);

          if (childMatrix) {
            fromRect.top -= childMatrix.f;
            fromRect.left -= childMatrix.e;
          }
        }

        child.fromRect = fromRect;
      });
    },
    addAnimationState: function addAnimationState(state) {
      animationStates.push(state);
    },
    removeAnimationState: function removeAnimationState(target) {
      animationStates.splice(indexOfObject(animationStates, {
        target: target
      }), 1);
    },
    animateAll: function animateAll(callback) {
      var _this = this;

      if (!this.options.animation) {
        clearTimeout(animationCallbackId);
        if (typeof callback === 'function') callback();
        return;
      }

      var animating = false,
          animationTime = 0;
      animationStates.forEach(function (state) {
        var time = 0,
            target = state.target,
            fromRect = target.fromRect,
            toRect = getRect(target),
            prevFromRect = target.prevFromRect,
            prevToRect = target.prevToRect,
            animatingRect = state.rect,
            targetMatrix = matrix(target, true);

        if (targetMatrix) {
          // Compensate for current animation
          toRect.top -= targetMatrix.f;
          toRect.left -= targetMatrix.e;
        }

        target.toRect = toRect;

        if (target.thisAnimationDuration) {
          // Could also check if animatingRect is between fromRect and toRect
          if (isRectEqual(prevFromRect, toRect) && !isRectEqual(fromRect, toRect) && // Make sure animatingRect is on line between toRect & fromRect
          (animatingRect.top - toRect.top) / (animatingRect.left - toRect.left) === (fromRect.top - toRect.top) / (fromRect.left - toRect.left)) {
            // If returning to same place as started from animation and on same axis
            time = calculateRealTime(animatingRect, prevFromRect, prevToRect, _this.options);
          }
        } // if fromRect != toRect: animate


        if (!isRectEqual(toRect, fromRect)) {
          target.prevFromRect = fromRect;
          target.prevToRect = toRect;

          if (!time) {
            time = _this.options.animation;
          }

          _this.animate(target, animatingRect, toRect, time);
        }

        if (time) {
          animating = true;
          animationTime = Math.max(animationTime, time);
          clearTimeout(target.animationResetTimer);
          target.animationResetTimer = setTimeout(function () {
            target.animationTime = 0;
            target.prevFromRect = null;
            target.fromRect = null;
            target.prevToRect = null;
            target.thisAnimationDuration = null;
          }, time);
          target.thisAnimationDuration = time;
        }
      });
      clearTimeout(animationCallbackId);

      if (!animating) {
        if (typeof callback === 'function') callback();
      } else {
        animationCallbackId = setTimeout(function () {
          if (typeof callback === 'function') callback();
        }, animationTime);
      }

      animationStates = [];
    },
    animate: function animate(target, currentRect, toRect, duration) {
      if (duration) {
        css(target, 'transition', '');
        css(target, 'transform', '');
        var elMatrix = matrix(this.el),
            scaleX = elMatrix && elMatrix.a,
            scaleY = elMatrix && elMatrix.d,
            translateX = (currentRect.left - toRect.left) / (scaleX || 1),
            translateY = (currentRect.top - toRect.top) / (scaleY || 1);
        target.animatingX = !!translateX;
        target.animatingY = !!translateY;
        css(target, 'transform', 'translate3d(' + translateX + 'px,' + translateY + 'px,0)');
        repaint(target); // repaint

        css(target, 'transition', 'transform ' + duration + 'ms' + (this.options.easing ? ' ' + this.options.easing : ''));
        css(target, 'transform', 'translate3d(0,0,0)');
        typeof target.animated === 'number' && clearTimeout(target.animated);
        target.animated = setTimeout(function () {
          css(target, 'transition', '');
          css(target, 'transform', '');
          target.animated = false;
          target.animatingX = false;
          target.animatingY = false;
        }, duration);
      }
    }
  };
}

function repaint(target) {
  return target.offsetWidth;
}

function calculateRealTime(animatingRect, fromRect, toRect, options) {
  return Math.sqrt(Math.pow(fromRect.top - animatingRect.top, 2) + Math.pow(fromRect.left - animatingRect.left, 2)) / Math.sqrt(Math.pow(fromRect.top - toRect.top, 2) + Math.pow(fromRect.left - toRect.left, 2)) * options.animation;
}

var plugins = [];
var defaults = {
  initializeByDefault: true
};
var PluginManager = {
  mount: function mount(plugin) {
    // Set default static properties
    for (var option in defaults) {
      if (defaults.hasOwnProperty(option) && !(option in plugin)) {
        plugin[option] = defaults[option];
      }
    }

    plugins.push(plugin);
  },
  pluginEvent: function pluginEvent(eventName, sortable, evt) {
    var _this = this;

    this.eventCanceled = false;

    evt.cancel = function () {
      _this.eventCanceled = true;
    };

    var eventNameGlobal = eventName + 'Global';
    plugins.forEach(function (plugin) {
      if (!sortable[plugin.pluginName]) return; // Fire global events if it exists in this sortable

      if (sortable[plugin.pluginName][eventNameGlobal]) {
        sortable[plugin.pluginName][eventNameGlobal](_objectSpread({
          sortable: sortable
        }, evt));
      } // Only fire plugin event if plugin is enabled in this sortable,
      // and plugin has event defined


      if (sortable.options[plugin.pluginName] && sortable[plugin.pluginName][eventName]) {
        sortable[plugin.pluginName][eventName](_objectSpread({
          sortable: sortable
        }, evt));
      }
    });
  },
  initializePlugins: function initializePlugins(sortable, el, defaults, options) {
    plugins.forEach(function (plugin) {
      var pluginName = plugin.pluginName;
      if (!sortable.options[pluginName] && !plugin.initializeByDefault) return;
      var initialized = new plugin(sortable, el, sortable.options);
      initialized.sortable = sortable;
      initialized.options = sortable.options;
      sortable[pluginName] = initialized; // Add default options from plugin

      _extends(defaults, initialized.defaults);
    });

    for (var option in sortable.options) {
      if (!sortable.options.hasOwnProperty(option)) continue;
      var modified = this.modifyOption(sortable, option, sortable.options[option]);

      if (typeof modified !== 'undefined') {
        sortable.options[option] = modified;
      }
    }
  },
  getEventProperties: function getEventProperties(name, sortable) {
    var eventProperties = {};
    plugins.forEach(function (plugin) {
      if (typeof plugin.eventProperties !== 'function') return;

      _extends(eventProperties, plugin.eventProperties.call(sortable[plugin.pluginName], name));
    });
    return eventProperties;
  },
  modifyOption: function modifyOption(sortable, name, value) {
    var modifiedValue;
    plugins.forEach(function (plugin) {
      // Plugin must exist on the Sortable
      if (!sortable[plugin.pluginName]) return; // If static option listener exists for this option, call in the context of the Sortable's instance of this plugin

      if (plugin.optionListeners && typeof plugin.optionListeners[name] === 'function') {
        modifiedValue = plugin.optionListeners[name].call(sortable[plugin.pluginName], value);
      }
    });
    return modifiedValue;
  }
};

function dispatchEvent(_ref) {
  var sortable = _ref.sortable,
      rootEl = _ref.rootEl,
      name = _ref.name,
      targetEl = _ref.targetEl,
      cloneEl = _ref.cloneEl,
      toEl = _ref.toEl,
      fromEl = _ref.fromEl,
      oldIndex = _ref.oldIndex,
      newIndex = _ref.newIndex,
      oldDraggableIndex = _ref.oldDraggableIndex,
      newDraggableIndex = _ref.newDraggableIndex,
      originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      extraEventProperties = _ref.extraEventProperties;
  sortable = sortable || rootEl && rootEl[expando];
  if (!sortable) return;
  var evt,
      options = sortable.options,
      onName = 'on' + name.charAt(0).toUpperCase() + name.substr(1); // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent(name, {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent(name, true, true);
  }

  evt.to = toEl || rootEl;
  evt.from = fromEl || rootEl;
  evt.item = targetEl || rootEl;
  evt.clone = cloneEl;
  evt.oldIndex = oldIndex;
  evt.newIndex = newIndex;
  evt.oldDraggableIndex = oldDraggableIndex;
  evt.newDraggableIndex = newDraggableIndex;
  evt.originalEvent = originalEvent;
  evt.pullMode = putSortable ? putSortable.lastPutMode : undefined;

  var allEventProperties = _objectSpread({}, extraEventProperties, PluginManager.getEventProperties(name, sortable));

  for (var option in allEventProperties) {
    evt[option] = allEventProperties[option];
  }

  if (rootEl) {
    rootEl.dispatchEvent(evt);
  }

  if (options[onName]) {
    options[onName].call(sortable, evt);
  }
}

var pluginEvent = function pluginEvent(eventName, sortable) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      originalEvent = _ref.evt,
      data = _objectWithoutProperties(_ref, ["evt"]);

  PluginManager.pluginEvent.bind(Sortable)(eventName, sortable, _objectSpread({
    dragEl: dragEl,
    parentEl: parentEl,
    ghostEl: ghostEl,
    rootEl: rootEl,
    nextEl: nextEl,
    lastDownEl: lastDownEl,
    cloneEl: cloneEl,
    cloneHidden: cloneHidden,
    dragStarted: moved,
    putSortable: putSortable,
    activeSortable: Sortable.active,
    originalEvent: originalEvent,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex,
    hideGhostForTarget: _hideGhostForTarget,
    unhideGhostForTarget: _unhideGhostForTarget,
    cloneNowHidden: function cloneNowHidden() {
      cloneHidden = true;
    },
    cloneNowShown: function cloneNowShown() {
      cloneHidden = false;
    },
    dispatchSortableEvent: function dispatchSortableEvent(name) {
      _dispatchEvent({
        sortable: sortable,
        name: name,
        originalEvent: originalEvent
      });
    }
  }, data));
};

function _dispatchEvent(info) {
  dispatchEvent(_objectSpread({
    putSortable: putSortable,
    cloneEl: cloneEl,
    targetEl: dragEl,
    rootEl: rootEl,
    oldIndex: oldIndex,
    oldDraggableIndex: oldDraggableIndex,
    newIndex: newIndex,
    newDraggableIndex: newDraggableIndex
  }, info));
}

var dragEl,
    parentEl,
    ghostEl,
    rootEl,
    nextEl,
    lastDownEl,
    cloneEl,
    cloneHidden,
    oldIndex,
    newIndex,
    oldDraggableIndex,
    newDraggableIndex,
    activeGroup,
    putSortable,
    awaitingDragStarted = false,
    ignoreNextClick = false,
    sortables = [],
    tapEvt,
    touchEvt,
    lastDx,
    lastDy,
    tapDistanceLeft,
    tapDistanceTop,
    moved,
    lastTarget,
    lastDirection,
    pastFirstInvertThresh = false,
    isCircumstantialInvert = false,
    targetMoveDistance,
    // For positioning ghost absolutely
ghostRelativeParent,
    ghostRelativeParentInitialScroll = [],
    // (left, top)
_silent = false,
    savedInputChecked = [];
/** @const */

var documentExists = typeof document !== 'undefined',
    PositionGhostAbsolutely = IOS,
    CSSFloatProperty = Edge || IE11OrLess ? 'cssFloat' : 'float',
    // This will not pass for IE9, because IE9 DnD only works on anchors
supportDraggable = documentExists && !ChromeForAndroid && !IOS && 'draggable' in document.createElement('div'),
    supportCssPointerEvents = function () {
  if (!documentExists) return; // false when <= IE11

  if (IE11OrLess) {
    return false;
  }

  var el = document.createElement('x');
  el.style.cssText = 'pointer-events:auto';
  return el.style.pointerEvents === 'auto';
}(),
    _detectDirection = function _detectDirection(el, options) {
  var elCSS = css(el),
      elWidth = parseInt(elCSS.width) - parseInt(elCSS.paddingLeft) - parseInt(elCSS.paddingRight) - parseInt(elCSS.borderLeftWidth) - parseInt(elCSS.borderRightWidth),
      child1 = getChild(el, 0, options),
      child2 = getChild(el, 1, options),
      firstChildCSS = child1 && css(child1),
      secondChildCSS = child2 && css(child2),
      firstChildWidth = firstChildCSS && parseInt(firstChildCSS.marginLeft) + parseInt(firstChildCSS.marginRight) + getRect(child1).width,
      secondChildWidth = secondChildCSS && parseInt(secondChildCSS.marginLeft) + parseInt(secondChildCSS.marginRight) + getRect(child2).width;

  if (elCSS.display === 'flex') {
    return elCSS.flexDirection === 'column' || elCSS.flexDirection === 'column-reverse' ? 'vertical' : 'horizontal';
  }

  if (elCSS.display === 'grid') {
    return elCSS.gridTemplateColumns.split(' ').length <= 1 ? 'vertical' : 'horizontal';
  }

  if (child1 && firstChildCSS["float"] && firstChildCSS["float"] !== 'none') {
    var touchingSideChild2 = firstChildCSS["float"] === 'left' ? 'left' : 'right';
    return child2 && (secondChildCSS.clear === 'both' || secondChildCSS.clear === touchingSideChild2) ? 'vertical' : 'horizontal';
  }

  return child1 && (firstChildCSS.display === 'block' || firstChildCSS.display === 'flex' || firstChildCSS.display === 'table' || firstChildCSS.display === 'grid' || firstChildWidth >= elWidth && elCSS[CSSFloatProperty] === 'none' || child2 && elCSS[CSSFloatProperty] === 'none' && firstChildWidth + secondChildWidth > elWidth) ? 'vertical' : 'horizontal';
},
    _dragElInRowColumn = function _dragElInRowColumn(dragRect, targetRect, vertical) {
  var dragElS1Opp = vertical ? dragRect.left : dragRect.top,
      dragElS2Opp = vertical ? dragRect.right : dragRect.bottom,
      dragElOppLength = vertical ? dragRect.width : dragRect.height,
      targetS1Opp = vertical ? targetRect.left : targetRect.top,
      targetS2Opp = vertical ? targetRect.right : targetRect.bottom,
      targetOppLength = vertical ? targetRect.width : targetRect.height;
  return dragElS1Opp === targetS1Opp || dragElS2Opp === targetS2Opp || dragElS1Opp + dragElOppLength / 2 === targetS1Opp + targetOppLength / 2;
},

/**
 * Detects first nearest empty sortable to X and Y position using emptyInsertThreshold.
 * @param  {Number} x      X position
 * @param  {Number} y      Y position
 * @return {HTMLElement}   Element of the first found nearest Sortable
 */
_detectNearestEmptySortable = function _detectNearestEmptySortable(x, y) {
  var ret;
  sortables.some(function (sortable) {
    if (lastChild(sortable)) return;
    var rect = getRect(sortable),
        threshold = sortable[expando].options.emptyInsertThreshold,
        insideHorizontally = x >= rect.left - threshold && x <= rect.right + threshold,
        insideVertically = y >= rect.top - threshold && y <= rect.bottom + threshold;

    if (threshold && insideHorizontally && insideVertically) {
      return ret = sortable;
    }
  });
  return ret;
},
    _prepareGroup = function _prepareGroup(options) {
  function toFn(value, pull) {
    return function (to, from, dragEl, evt) {
      var sameGroup = to.options.group.name && from.options.group.name && to.options.group.name === from.options.group.name;

      if (value == null && (pull || sameGroup)) {
        // Default pull value
        // Default pull and put value if same group
        return true;
      } else if (value == null || value === false) {
        return false;
      } else if (pull && value === 'clone') {
        return value;
      } else if (typeof value === 'function') {
        return toFn(value(to, from, dragEl, evt), pull)(to, from, dragEl, evt);
      } else {
        var otherGroup = (pull ? to : from).options.group.name;
        return value === true || typeof value === 'string' && value === otherGroup || value.join && value.indexOf(otherGroup) > -1;
      }
    };
  }

  var group = {};
  var originalGroup = options.group;

  if (!originalGroup || _typeof(originalGroup) != 'object') {
    originalGroup = {
      name: originalGroup
    };
  }

  group.name = originalGroup.name;
  group.checkPull = toFn(originalGroup.pull, true);
  group.checkPut = toFn(originalGroup.put);
  group.revertClone = originalGroup.revertClone;
  options.group = group;
},
    _hideGhostForTarget = function _hideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', 'none');
  }
},
    _unhideGhostForTarget = function _unhideGhostForTarget() {
  if (!supportCssPointerEvents && ghostEl) {
    css(ghostEl, 'display', '');
  }
}; // #1184 fix - Prevent click event on fallback if dragged but item not changed position


if (documentExists) {
  document.addEventListener('click', function (evt) {
    if (ignoreNextClick) {
      evt.preventDefault();
      evt.stopPropagation && evt.stopPropagation();
      evt.stopImmediatePropagation && evt.stopImmediatePropagation();
      ignoreNextClick = false;
      return false;
    }
  }, true);
}

var nearestEmptyInsertDetectEvent = function nearestEmptyInsertDetectEvent(evt) {
  if (dragEl) {
    evt = evt.touches ? evt.touches[0] : evt;

    var nearest = _detectNearestEmptySortable(evt.clientX, evt.clientY);

    if (nearest) {
      // Create imitation event
      var event = {};

      for (var i in evt) {
        if (evt.hasOwnProperty(i)) {
          event[i] = evt[i];
        }
      }

      event.target = event.rootEl = nearest;
      event.preventDefault = void 0;
      event.stopPropagation = void 0;

      nearest[expando]._onDragOver(event);
    }
  }
};

var _checkOutsideTargetEl = function _checkOutsideTargetEl(evt) {
  if (dragEl) {
    dragEl.parentNode[expando]._isOutsideThisEl(evt.target);
  }
};
/**
 * @class  Sortable
 * @param  {HTMLElement}  el
 * @param  {Object}       [options]
 */


function Sortable(el, options) {
  if (!(el && el.nodeType && el.nodeType === 1)) {
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(el));
  }

  this.el = el; // root element

  this.options = options = _extends({}, options); // Export instance

  el[expando] = this;
  var defaults = {
    group: null,
    sort: true,
    disabled: false,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(el.nodeName) ? '>li' : '>*',
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: false,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: true,
    direction: function direction() {
      return _detectDirection(el, this.options);
    },
    ghostClass: 'sortable-ghost',
    chosenClass: 'sortable-chosen',
    dragClass: 'sortable-drag',
    ignore: 'a, img',
    filter: null,
    preventOnFilter: true,
    animation: 0,
    easing: null,
    setData: function setData(dataTransfer, dragEl) {
      dataTransfer.setData('Text', dragEl.textContent);
    },
    dropBubble: false,
    dragoverBubble: false,
    dataIdAttr: 'data-id',
    delay: 0,
    delayOnTouchOnly: false,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: false,
    fallbackClass: 'sortable-fallback',
    fallbackOnBody: false,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Sortable.supportPointer !== false && 'PointerEvent' in window,
    emptyInsertThreshold: 5
  };
  PluginManager.initializePlugins(this, el, defaults); // Set default options

  for (var name in defaults) {
    !(name in options) && (options[name] = defaults[name]);
  }

  _prepareGroup(options); // Bind all private methods


  for (var fn in this) {
    if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
      this[fn] = this[fn].bind(this);
    }
  } // Setup drag mode


  this.nativeDraggable = options.forceFallback ? false : supportDraggable;

  if (this.nativeDraggable) {
    // Touch start threshold cannot be greater than the native dragstart threshold
    this.options.touchStartThreshold = 1;
  } // Bind events


  if (options.supportPointer) {
    on(el, 'pointerdown', this._onTapStart);
  } else {
    on(el, 'mousedown', this._onTapStart);
    on(el, 'touchstart', this._onTapStart);
  }

  if (this.nativeDraggable) {
    on(el, 'dragover', this);
    on(el, 'dragenter', this);
  }

  sortables.push(this.el); // Restore sorting

  options.store && options.store.get && this.sort(options.store.get(this) || []); // Add animation state manager

  _extends(this, AnimationStateManager());
}

Sortable.prototype =
/** @lends Sortable.prototype */
{
  constructor: Sortable,
  _isOutsideThisEl: function _isOutsideThisEl(target) {
    if (!this.el.contains(target) && target !== this.el) {
      lastTarget = null;
    }
  },
  _getDirection: function _getDirection(evt, target) {
    return typeof this.options.direction === 'function' ? this.options.direction.call(this, evt, target, dragEl) : this.options.direction;
  },
  _onTapStart: function _onTapStart(
  /** Event|TouchEvent */
  evt) {
    if (!evt.cancelable) return;

    var _this = this,
        el = this.el,
        options = this.options,
        preventOnFilter = options.preventOnFilter,
        type = evt.type,
        touch = evt.touches && evt.touches[0] || evt.pointerType && evt.pointerType === 'touch' && evt,
        target = (touch || evt).target,
        originalTarget = evt.target.shadowRoot && (evt.path && evt.path[0] || evt.composedPath && evt.composedPath()[0]) || target,
        filter = options.filter;

    _saveInputCheckedState(el); // Don't trigger start event when an element is been dragged, otherwise the evt.oldindex always wrong when set option.group.


    if (dragEl) {
      return;
    }

    if (/mousedown|pointerdown/.test(type) && evt.button !== 0 || options.disabled) {
      return; // only left button and enabled
    } // cancel dnd if original target is content editable


    if (originalTarget.isContentEditable) {
      return;
    }

    target = closest(target, options.draggable, el, false);

    if (target && target.animated) {
      return;
    }

    if (lastDownEl === target) {
      // Ignoring duplicate `down`
      return;
    } // Get the index of the dragged element within its parent


    oldIndex = index(target);
    oldDraggableIndex = index(target, options.draggable); // Check filter

    if (typeof filter === 'function') {
      if (filter.call(this, evt, target, this)) {
        _dispatchEvent({
          sortable: _this,
          rootEl: originalTarget,
          name: 'filter',
          targetEl: target,
          toEl: el,
          fromEl: el
        });

        pluginEvent('filter', _this, {
          evt: evt
        });
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    } else if (filter) {
      filter = filter.split(',').some(function (criteria) {
        criteria = closest(originalTarget, criteria.trim(), el, false);

        if (criteria) {
          _dispatchEvent({
            sortable: _this,
            rootEl: criteria,
            name: 'filter',
            targetEl: target,
            fromEl: el,
            toEl: el
          });

          pluginEvent('filter', _this, {
            evt: evt
          });
          return true;
        }
      });

      if (filter) {
        preventOnFilter && evt.cancelable && evt.preventDefault();
        return; // cancel dnd
      }
    }

    if (options.handle && !closest(originalTarget, options.handle, el, false)) {
      return;
    } // Prepare `dragstart`


    this._prepareDragStart(evt, touch, target);
  },
  _prepareDragStart: function _prepareDragStart(
  /** Event */
  evt,
  /** Touch */
  touch,
  /** HTMLElement */
  target) {
    var _this = this,
        el = _this.el,
        options = _this.options,
        ownerDocument = el.ownerDocument,
        dragStartFn;

    if (target && !dragEl && target.parentNode === el) {
      var dragRect = getRect(target);
      rootEl = el;
      dragEl = target;
      parentEl = dragEl.parentNode;
      nextEl = dragEl.nextSibling;
      lastDownEl = target;
      activeGroup = options.group;
      Sortable.dragged = dragEl;
      tapEvt = {
        target: dragEl,
        clientX: (touch || evt).clientX,
        clientY: (touch || evt).clientY
      };
      tapDistanceLeft = tapEvt.clientX - dragRect.left;
      tapDistanceTop = tapEvt.clientY - dragRect.top;
      this._lastX = (touch || evt).clientX;
      this._lastY = (touch || evt).clientY;
      dragEl.style['will-change'] = 'all';

      dragStartFn = function dragStartFn() {
        pluginEvent('delayEnded', _this, {
          evt: evt
        });

        if (Sortable.eventCanceled) {
          _this._onDrop();

          return;
        } // Delayed drag has been triggered
        // we can re-enable the events: touchmove/mousemove


        _this._disableDelayedDragEvents();

        if (!FireFox && _this.nativeDraggable) {
          dragEl.draggable = true;
        } // Bind the events: dragstart/dragend


        _this._triggerDragStart(evt, touch); // Drag start event


        _dispatchEvent({
          sortable: _this,
          name: 'choose',
          originalEvent: evt
        }); // Chosen item


        toggleClass(dragEl, options.chosenClass, true);
      }; // Disable "draggable"


      options.ignore.split(',').forEach(function (criteria) {
        find(dragEl, criteria.trim(), _disableDraggable);
      });
      on(ownerDocument, 'dragover', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mousemove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'touchmove', nearestEmptyInsertDetectEvent);
      on(ownerDocument, 'mouseup', _this._onDrop);
      on(ownerDocument, 'touchend', _this._onDrop);
      on(ownerDocument, 'touchcancel', _this._onDrop); // Make dragEl draggable (must be before delay for FireFox)

      if (FireFox && this.nativeDraggable) {
        this.options.touchStartThreshold = 4;
        dragEl.draggable = true;
      }

      pluginEvent('delayStart', this, {
        evt: evt
      }); // Delay is impossible for native DnD in Edge or IE

      if (options.delay && (!options.delayOnTouchOnly || touch) && (!this.nativeDraggable || !(Edge || IE11OrLess))) {
        if (Sortable.eventCanceled) {
          this._onDrop();

          return;
        } // If the user moves the pointer or let go the click or touch
        // before the delay has been reached:
        // disable the delayed drag


        on(ownerDocument, 'mouseup', _this._disableDelayedDrag);
        on(ownerDocument, 'touchend', _this._disableDelayedDrag);
        on(ownerDocument, 'touchcancel', _this._disableDelayedDrag);
        on(ownerDocument, 'mousemove', _this._delayedDragTouchMoveHandler);
        on(ownerDocument, 'touchmove', _this._delayedDragTouchMoveHandler);
        options.supportPointer && on(ownerDocument, 'pointermove', _this._delayedDragTouchMoveHandler);
        _this._dragStartTimer = setTimeout(dragStartFn, options.delay);
      } else {
        dragStartFn();
      }
    }
  },
  _delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(
  /** TouchEvent|PointerEvent **/
  e) {
    var touch = e.touches ? e.touches[0] : e;

    if (Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1))) {
      this._disableDelayedDrag();
    }
  },
  _disableDelayedDrag: function _disableDelayedDrag() {
    dragEl && _disableDraggable(dragEl);
    clearTimeout(this._dragStartTimer);

    this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function _disableDelayedDragEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._disableDelayedDrag);
    off(ownerDocument, 'touchend', this._disableDelayedDrag);
    off(ownerDocument, 'touchcancel', this._disableDelayedDrag);
    off(ownerDocument, 'mousemove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'touchmove', this._delayedDragTouchMoveHandler);
    off(ownerDocument, 'pointermove', this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function _triggerDragStart(
  /** Event */
  evt,
  /** Touch */
  touch) {
    touch = touch || evt.pointerType == 'touch' && evt;

    if (!this.nativeDraggable || touch) {
      if (this.options.supportPointer) {
        on(document, 'pointermove', this._onTouchMove);
      } else if (touch) {
        on(document, 'touchmove', this._onTouchMove);
      } else {
        on(document, 'mousemove', this._onTouchMove);
      }
    } else {
      on(dragEl, 'dragend', this);
      on(rootEl, 'dragstart', this._onDragStart);
    }

    try {
      if (document.selection) {
        // Timeout neccessary for IE9
        _nextTick(function () {
          document.selection.empty();
        });
      } else {
        window.getSelection().removeAllRanges();
      }
    } catch (err) {}
  },
  _dragStarted: function _dragStarted(fallback, evt) {

    awaitingDragStarted = false;

    if (rootEl && dragEl) {
      pluginEvent('dragStarted', this, {
        evt: evt
      });

      if (this.nativeDraggable) {
        on(document, 'dragover', _checkOutsideTargetEl);
      }

      var options = this.options; // Apply effect

      !fallback && toggleClass(dragEl, options.dragClass, false);
      toggleClass(dragEl, options.ghostClass, true);
      Sortable.active = this;
      fallback && this._appendGhost(); // Drag start event

      _dispatchEvent({
        sortable: this,
        name: 'start',
        originalEvent: evt
      });
    } else {
      this._nulling();
    }
  },
  _emulateDragOver: function _emulateDragOver() {
    if (touchEvt) {
      this._lastX = touchEvt.clientX;
      this._lastY = touchEvt.clientY;

      _hideGhostForTarget();

      var target = document.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
      var parent = target;

      while (target && target.shadowRoot) {
        target = target.shadowRoot.elementFromPoint(touchEvt.clientX, touchEvt.clientY);
        if (target === parent) break;
        parent = target;
      }

      dragEl.parentNode[expando]._isOutsideThisEl(target);

      if (parent) {
        do {
          if (parent[expando]) {
            var inserted = void 0;
            inserted = parent[expando]._onDragOver({
              clientX: touchEvt.clientX,
              clientY: touchEvt.clientY,
              target: target,
              rootEl: parent
            });

            if (inserted && !this.options.dragoverBubble) {
              break;
            }
          }

          target = parent; // store last element
        }
        /* jshint boss:true */
        while (parent = parent.parentNode);
      }

      _unhideGhostForTarget();
    }
  },
  _onTouchMove: function _onTouchMove(
  /**TouchEvent*/
  evt) {
    if (tapEvt) {
      var options = this.options,
          fallbackTolerance = options.fallbackTolerance,
          fallbackOffset = options.fallbackOffset,
          touch = evt.touches ? evt.touches[0] : evt,
          ghostMatrix = ghostEl && matrix(ghostEl, true),
          scaleX = ghostEl && ghostMatrix && ghostMatrix.a,
          scaleY = ghostEl && ghostMatrix && ghostMatrix.d,
          relativeScrollOffset = PositionGhostAbsolutely && ghostRelativeParent && getRelativeScrollOffset(ghostRelativeParent),
          dx = (touch.clientX - tapEvt.clientX + fallbackOffset.x) / (scaleX || 1) + (relativeScrollOffset ? relativeScrollOffset[0] - ghostRelativeParentInitialScroll[0] : 0) / (scaleX || 1),
          dy = (touch.clientY - tapEvt.clientY + fallbackOffset.y) / (scaleY || 1) + (relativeScrollOffset ? relativeScrollOffset[1] - ghostRelativeParentInitialScroll[1] : 0) / (scaleY || 1); // only set the status to dragging, when we are actually dragging

      if (!Sortable.active && !awaitingDragStarted) {
        if (fallbackTolerance && Math.max(Math.abs(touch.clientX - this._lastX), Math.abs(touch.clientY - this._lastY)) < fallbackTolerance) {
          return;
        }

        this._onDragStart(evt, true);
      }

      if (ghostEl) {
        if (ghostMatrix) {
          ghostMatrix.e += dx - (lastDx || 0);
          ghostMatrix.f += dy - (lastDy || 0);
        } else {
          ghostMatrix = {
            a: 1,
            b: 0,
            c: 0,
            d: 1,
            e: dx,
            f: dy
          };
        }

        var cssMatrix = "matrix(".concat(ghostMatrix.a, ",").concat(ghostMatrix.b, ",").concat(ghostMatrix.c, ",").concat(ghostMatrix.d, ",").concat(ghostMatrix.e, ",").concat(ghostMatrix.f, ")");
        css(ghostEl, 'webkitTransform', cssMatrix);
        css(ghostEl, 'mozTransform', cssMatrix);
        css(ghostEl, 'msTransform', cssMatrix);
        css(ghostEl, 'transform', cssMatrix);
        lastDx = dx;
        lastDy = dy;
        touchEvt = touch;
      }

      evt.cancelable && evt.preventDefault();
    }
  },
  _appendGhost: function _appendGhost() {
    // Bug if using scale(): https://stackoverflow.com/questions/2637058
    // Not being adjusted for
    if (!ghostEl) {
      var container = this.options.fallbackOnBody ? document.body : rootEl,
          rect = getRect(dragEl, true, PositionGhostAbsolutely, true, container),
          options = this.options; // Position absolutely

      if (PositionGhostAbsolutely) {
        // Get relatively positioned parent
        ghostRelativeParent = container;

        while (css(ghostRelativeParent, 'position') === 'static' && css(ghostRelativeParent, 'transform') === 'none' && ghostRelativeParent !== document) {
          ghostRelativeParent = ghostRelativeParent.parentNode;
        }

        if (ghostRelativeParent !== document.body && ghostRelativeParent !== document.documentElement) {
          if (ghostRelativeParent === document) ghostRelativeParent = getWindowScrollingElement();
          rect.top += ghostRelativeParent.scrollTop;
          rect.left += ghostRelativeParent.scrollLeft;
        } else {
          ghostRelativeParent = getWindowScrollingElement();
        }

        ghostRelativeParentInitialScroll = getRelativeScrollOffset(ghostRelativeParent);
      }

      ghostEl = dragEl.cloneNode(true);
      toggleClass(ghostEl, options.ghostClass, false);
      toggleClass(ghostEl, options.fallbackClass, true);
      toggleClass(ghostEl, options.dragClass, true);
      css(ghostEl, 'transition', '');
      css(ghostEl, 'transform', '');
      css(ghostEl, 'box-sizing', 'border-box');
      css(ghostEl, 'margin', 0);
      css(ghostEl, 'top', rect.top);
      css(ghostEl, 'left', rect.left);
      css(ghostEl, 'width', rect.width);
      css(ghostEl, 'height', rect.height);
      css(ghostEl, 'opacity', '0.8');
      css(ghostEl, 'position', PositionGhostAbsolutely ? 'absolute' : 'fixed');
      css(ghostEl, 'zIndex', '100000');
      css(ghostEl, 'pointerEvents', 'none');
      Sortable.ghost = ghostEl;
      container.appendChild(ghostEl); // Set transform-origin

      css(ghostEl, 'transform-origin', tapDistanceLeft / parseInt(ghostEl.style.width) * 100 + '% ' + tapDistanceTop / parseInt(ghostEl.style.height) * 100 + '%');
    }
  },
  _onDragStart: function _onDragStart(
  /**Event*/
  evt,
  /**boolean*/
  fallback) {
    var _this = this;

    var dataTransfer = evt.dataTransfer;
    var options = _this.options;
    pluginEvent('dragStart', this, {
      evt: evt
    });

    if (Sortable.eventCanceled) {
      this._onDrop();

      return;
    }

    pluginEvent('setupClone', this);

    if (!Sortable.eventCanceled) {
      cloneEl = clone(dragEl);
      cloneEl.draggable = false;
      cloneEl.style['will-change'] = '';

      this._hideClone();

      toggleClass(cloneEl, this.options.chosenClass, false);
      Sortable.clone = cloneEl;
    } // #1143: IFrame support workaround


    _this.cloneId = _nextTick(function () {
      pluginEvent('clone', _this);
      if (Sortable.eventCanceled) return;

      if (!_this.options.removeCloneOnHide) {
        rootEl.insertBefore(cloneEl, dragEl);
      }

      _this._hideClone();

      _dispatchEvent({
        sortable: _this,
        name: 'clone'
      });
    });
    !fallback && toggleClass(dragEl, options.dragClass, true); // Set proper drop events

    if (fallback) {
      ignoreNextClick = true;
      _this._loopId = setInterval(_this._emulateDragOver, 50);
    } else {
      // Undo what was set in _prepareDragStart before drag started
      off(document, 'mouseup', _this._onDrop);
      off(document, 'touchend', _this._onDrop);
      off(document, 'touchcancel', _this._onDrop);

      if (dataTransfer) {
        dataTransfer.effectAllowed = 'move';
        options.setData && options.setData.call(_this, dataTransfer, dragEl);
      }

      on(document, 'drop', _this); // #1276 fix:

      css(dragEl, 'transform', 'translateZ(0)');
    }

    awaitingDragStarted = true;
    _this._dragStartId = _nextTick(_this._dragStarted.bind(_this, fallback, evt));
    on(document, 'selectstart', _this);
    moved = true;

    if (Safari) {
      css(document.body, 'user-select', 'none');
    }
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function _onDragOver(
  /**Event*/
  evt) {
    var el = this.el,
        target = evt.target,
        dragRect,
        targetRect,
        revert,
        options = this.options,
        group = options.group,
        activeSortable = Sortable.active,
        isOwner = activeGroup === group,
        canSort = options.sort,
        fromSortable = putSortable || activeSortable,
        vertical,
        _this = this,
        completedFired = false;

    if (_silent) return;

    function dragOverEvent(name, extra) {
      pluginEvent(name, _this, _objectSpread({
        evt: evt,
        isOwner: isOwner,
        axis: vertical ? 'vertical' : 'horizontal',
        revert: revert,
        dragRect: dragRect,
        targetRect: targetRect,
        canSort: canSort,
        fromSortable: fromSortable,
        target: target,
        completed: completed,
        onMove: function onMove(target, after) {
          return _onMove(rootEl, el, dragEl, dragRect, target, getRect(target), evt, after);
        },
        changed: changed
      }, extra));
    } // Capture animation state


    function capture() {
      dragOverEvent('dragOverAnimationCapture');

      _this.captureAnimationState();

      if (_this !== fromSortable) {
        fromSortable.captureAnimationState();
      }
    } // Return invocation when dragEl is inserted (or completed)


    function completed(insertion) {
      dragOverEvent('dragOverCompleted', {
        insertion: insertion
      });

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        } else {
          activeSortable._showClone(_this);
        }

        if (_this !== fromSortable) {
          // Set ghost class to new sortable's ghost class
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : activeSortable.options.ghostClass, false);
          toggleClass(dragEl, options.ghostClass, true);
        }

        if (putSortable !== _this && _this !== Sortable.active) {
          putSortable = _this;
        } else if (_this === Sortable.active && putSortable) {
          putSortable = null;
        } // Animation


        if (fromSortable === _this) {
          _this._ignoreWhileAnimating = target;
        }

        _this.animateAll(function () {
          dragOverEvent('dragOverAnimationComplete');
          _this._ignoreWhileAnimating = null;
        });

        if (_this !== fromSortable) {
          fromSortable.animateAll();
          fromSortable._ignoreWhileAnimating = null;
        }
      } // Null lastTarget if it is not inside a previously swapped element


      if (target === dragEl && !dragEl.animated || target === el && !target.animated) {
        lastTarget = null;
      } // no bubbling and not fallback


      if (!options.dragoverBubble && !evt.rootEl && target !== document) {
        dragEl.parentNode[expando]._isOutsideThisEl(evt.target); // Do not detect for empty insert if already inserted


        !insertion && nearestEmptyInsertDetectEvent(evt);
      }

      !options.dragoverBubble && evt.stopPropagation && evt.stopPropagation();
      return completedFired = true;
    } // Call when dragEl has been inserted


    function changed() {
      newIndex = index(dragEl);
      newDraggableIndex = index(dragEl, options.draggable);

      _dispatchEvent({
        sortable: _this,
        name: 'change',
        toEl: el,
        newIndex: newIndex,
        newDraggableIndex: newDraggableIndex,
        originalEvent: evt
      });
    }

    if (evt.preventDefault !== void 0) {
      evt.cancelable && evt.preventDefault();
    }

    target = closest(target, options.draggable, el, true);
    dragOverEvent('dragOver');
    if (Sortable.eventCanceled) return completedFired;

    if (dragEl.contains(evt.target) || target.animated && target.animatingX && target.animatingY || _this._ignoreWhileAnimating === target) {
      return completed(false);
    }

    ignoreNextClick = false;

    if (activeSortable && !options.disabled && (isOwner ? canSort || (revert = !rootEl.contains(dragEl)) // Reverting item into the original list
    : putSortable === this || (this.lastPutMode = activeGroup.checkPull(this, activeSortable, dragEl, evt)) && group.checkPut(this, activeSortable, dragEl, evt))) {
      vertical = this._getDirection(evt, target) === 'vertical';
      dragRect = getRect(dragEl);
      dragOverEvent('dragOverValid');
      if (Sortable.eventCanceled) return completedFired;

      if (revert) {
        parentEl = rootEl; // actualization

        capture();

        this._hideClone();

        dragOverEvent('revert');

        if (!Sortable.eventCanceled) {
          if (nextEl) {
            rootEl.insertBefore(dragEl, nextEl);
          } else {
            rootEl.appendChild(dragEl);
          }
        }

        return completed(true);
      }

      var elLastChild = lastChild(el, options.draggable);

      if (!elLastChild || _ghostIsLast(evt, vertical, this) && !elLastChild.animated) {
        // If already at end of list: Do not insert
        if (elLastChild === dragEl) {
          return completed(false);
        } // assign target only if condition is true


        if (elLastChild && el === evt.target) {
          target = elLastChild;
        }

        if (target) {
          targetRect = getRect(target);
        }

        if (_onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, !!target) !== false) {
          capture();
          el.appendChild(dragEl);
          parentEl = el; // actualization

          changed();
          return completed(true);
        }
      } else if (target.parentNode === el) {
        targetRect = getRect(target);
        var direction = 0,
            targetBeforeFirstSwap,
            differentLevel = dragEl.parentNode !== el,
            differentRowCol = !_dragElInRowColumn(dragEl.animated && dragEl.toRect || dragRect, target.animated && target.toRect || targetRect, vertical),
            side1 = vertical ? 'top' : 'left',
            scrolledPastTop = isScrolledPast(target, 'top', 'top') || isScrolledPast(dragEl, 'top', 'top'),
            scrollBefore = scrolledPastTop ? scrolledPastTop.scrollTop : void 0;

        if (lastTarget !== target) {
          targetBeforeFirstSwap = targetRect[side1];
          pastFirstInvertThresh = false;
          isCircumstantialInvert = !differentRowCol && options.invertSwap || differentLevel;
        }

        direction = _getSwapDirection(evt, target, targetRect, vertical, differentRowCol ? 1 : options.swapThreshold, options.invertedSwapThreshold == null ? options.swapThreshold : options.invertedSwapThreshold, isCircumstantialInvert, lastTarget === target);
        var sibling;

        if (direction !== 0) {
          // Check if target is beside dragEl in respective direction (ignoring hidden elements)
          var dragIndex = index(dragEl);

          do {
            dragIndex -= direction;
            sibling = parentEl.children[dragIndex];
          } while (sibling && (css(sibling, 'display') === 'none' || sibling === ghostEl));
        } // If dragEl is already beside target: Do not insert


        if (direction === 0 || sibling === target) {
          return completed(false);
        }

        lastTarget = target;
        lastDirection = direction;
        var nextSibling = target.nextElementSibling,
            after = false;
        after = direction === 1;

        var moveVector = _onMove(rootEl, el, dragEl, dragRect, target, targetRect, evt, after);

        if (moveVector !== false) {
          if (moveVector === 1 || moveVector === -1) {
            after = moveVector === 1;
          }

          _silent = true;
          setTimeout(_unsilent, 30);
          capture();

          if (after && !nextSibling) {
            el.appendChild(dragEl);
          } else {
            target.parentNode.insertBefore(dragEl, after ? nextSibling : target);
          } // Undo chrome's scroll adjustment (has no effect on other browsers)


          if (scrolledPastTop) {
            scrollBy(scrolledPastTop, 0, scrollBefore - scrolledPastTop.scrollTop);
          }

          parentEl = dragEl.parentNode; // actualization
          // must be done before animation

          if (targetBeforeFirstSwap !== undefined && !isCircumstantialInvert) {
            targetMoveDistance = Math.abs(targetBeforeFirstSwap - getRect(target)[side1]);
          }

          changed();
          return completed(true);
        }
      }

      if (el.contains(dragEl)) {
        return completed(false);
      }
    }

    return false;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function _offMoveEvents() {
    off(document, 'mousemove', this._onTouchMove);
    off(document, 'touchmove', this._onTouchMove);
    off(document, 'pointermove', this._onTouchMove);
    off(document, 'dragover', nearestEmptyInsertDetectEvent);
    off(document, 'mousemove', nearestEmptyInsertDetectEvent);
    off(document, 'touchmove', nearestEmptyInsertDetectEvent);
  },
  _offUpEvents: function _offUpEvents() {
    var ownerDocument = this.el.ownerDocument;
    off(ownerDocument, 'mouseup', this._onDrop);
    off(ownerDocument, 'touchend', this._onDrop);
    off(ownerDocument, 'pointerup', this._onDrop);
    off(ownerDocument, 'touchcancel', this._onDrop);
    off(document, 'selectstart', this);
  },
  _onDrop: function _onDrop(
  /**Event*/
  evt) {
    var el = this.el,
        options = this.options; // Get the index of the dragged element within its parent

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);
    pluginEvent('drop', this, {
      evt: evt
    });
    parentEl = dragEl && dragEl.parentNode; // Get again after plugin event

    newIndex = index(dragEl);
    newDraggableIndex = index(dragEl, options.draggable);

    if (Sortable.eventCanceled) {
      this._nulling();

      return;
    }

    awaitingDragStarted = false;
    isCircumstantialInvert = false;
    pastFirstInvertThresh = false;
    clearInterval(this._loopId);
    clearTimeout(this._dragStartTimer);

    _cancelNextTick(this.cloneId);

    _cancelNextTick(this._dragStartId); // Unbind events


    if (this.nativeDraggable) {
      off(document, 'drop', this);
      off(el, 'dragstart', this._onDragStart);
    }

    this._offMoveEvents();

    this._offUpEvents();

    if (Safari) {
      css(document.body, 'user-select', '');
    }

    css(dragEl, 'transform', '');

    if (evt) {
      if (moved) {
        evt.cancelable && evt.preventDefault();
        !options.dropBubble && evt.stopPropagation();
      }

      ghostEl && ghostEl.parentNode && ghostEl.parentNode.removeChild(ghostEl);

      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        // Remove clone(s)
        cloneEl && cloneEl.parentNode && cloneEl.parentNode.removeChild(cloneEl);
      }

      if (dragEl) {
        if (this.nativeDraggable) {
          off(dragEl, 'dragend', this);
        }

        _disableDraggable(dragEl);

        dragEl.style['will-change'] = ''; // Remove classes
        // ghostClass is added in dragStarted

        if (moved && !awaitingDragStarted) {
          toggleClass(dragEl, putSortable ? putSortable.options.ghostClass : this.options.ghostClass, false);
        }

        toggleClass(dragEl, this.options.chosenClass, false); // Drag stop event

        _dispatchEvent({
          sortable: this,
          name: 'unchoose',
          toEl: parentEl,
          newIndex: null,
          newDraggableIndex: null,
          originalEvent: evt
        });

        if (rootEl !== parentEl) {
          if (newIndex >= 0) {
            // Add event
            _dispatchEvent({
              rootEl: parentEl,
              name: 'add',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            }); // Remove event


            _dispatchEvent({
              sortable: this,
              name: 'remove',
              toEl: parentEl,
              originalEvent: evt
            }); // drag from one list and drop into another


            _dispatchEvent({
              rootEl: parentEl,
              name: 'sort',
              toEl: parentEl,
              fromEl: rootEl,
              originalEvent: evt
            });

            _dispatchEvent({
              sortable: this,
              name: 'sort',
              toEl: parentEl,
              originalEvent: evt
            });
          }

          putSortable && putSortable.save();
        } else {
          if (newIndex !== oldIndex) {
            if (newIndex >= 0) {
              // drag & drop within the same list
              _dispatchEvent({
                sortable: this,
                name: 'update',
                toEl: parentEl,
                originalEvent: evt
              });

              _dispatchEvent({
                sortable: this,
                name: 'sort',
                toEl: parentEl,
                originalEvent: evt
              });
            }
          }
        }

        if (Sortable.active) {
          /* jshint eqnull:true */
          if (newIndex == null || newIndex === -1) {
            newIndex = oldIndex;
            newDraggableIndex = oldDraggableIndex;
          }

          _dispatchEvent({
            sortable: this,
            name: 'end',
            toEl: parentEl,
            originalEvent: evt
          }); // Save sorting


          this.save();
        }
      }
    }

    this._nulling();
  },
  _nulling: function _nulling() {
    pluginEvent('nulling', this);
    rootEl = dragEl = parentEl = ghostEl = nextEl = cloneEl = lastDownEl = cloneHidden = tapEvt = touchEvt = moved = newIndex = newDraggableIndex = oldIndex = oldDraggableIndex = lastTarget = lastDirection = putSortable = activeGroup = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
    savedInputChecked.forEach(function (el) {
      el.checked = true;
    });
    savedInputChecked.length = lastDx = lastDy = 0;
  },
  handleEvent: function handleEvent(
  /**Event*/
  evt) {
    switch (evt.type) {
      case 'drop':
      case 'dragend':
        this._onDrop(evt);

        break;

      case 'dragenter':
      case 'dragover':
        if (dragEl) {
          this._onDragOver(evt);

          _globalDragOver(evt);
        }

        break;

      case 'selectstart':
        evt.preventDefault();
        break;
    }
  },

  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function toArray() {
    var order = [],
        el,
        children = this.el.children,
        i = 0,
        n = children.length,
        options = this.options;

    for (; i < n; i++) {
      el = children[i];

      if (closest(el, options.draggable, this.el, false)) {
        order.push(el.getAttribute(options.dataIdAttr) || _generateId(el));
      }
    }

    return order;
  },

  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function sort(order) {
    var items = {},
        rootEl = this.el;
    this.toArray().forEach(function (id, i) {
      var el = rootEl.children[i];

      if (closest(el, this.options.draggable, rootEl, false)) {
        items[id] = el;
      }
    }, this);
    order.forEach(function (id) {
      if (items[id]) {
        rootEl.removeChild(items[id]);
        rootEl.appendChild(items[id]);
      }
    });
  },

  /**
   * Save the current sorting
   */
  save: function save() {
    var store = this.options.store;
    store && store.set && store.set(this);
  },

  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function closest$1(el, selector) {
    return closest(el, selector || this.options.draggable, this.el, false);
  },

  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function option(name, value) {
    var options = this.options;

    if (value === void 0) {
      return options[name];
    } else {
      var modifiedValue = PluginManager.modifyOption(this, name, value);

      if (typeof modifiedValue !== 'undefined') {
        options[name] = modifiedValue;
      } else {
        options[name] = value;
      }

      if (name === 'group') {
        _prepareGroup(options);
      }
    }
  },

  /**
   * Destroy
   */
  destroy: function destroy() {
    pluginEvent('destroy', this);
    var el = this.el;
    el[expando] = null;
    off(el, 'mousedown', this._onTapStart);
    off(el, 'touchstart', this._onTapStart);
    off(el, 'pointerdown', this._onTapStart);

    if (this.nativeDraggable) {
      off(el, 'dragover', this);
      off(el, 'dragenter', this);
    } // Remove draggable attributes


    Array.prototype.forEach.call(el.querySelectorAll('[draggable]'), function (el) {
      el.removeAttribute('draggable');
    });

    this._onDrop();

    this._disableDelayedDragEvents();

    sortables.splice(sortables.indexOf(this.el), 1);
    this.el = el = null;
  },
  _hideClone: function _hideClone() {
    if (!cloneHidden) {
      pluginEvent('hideClone', this);
      if (Sortable.eventCanceled) return;
      css(cloneEl, 'display', 'none');

      if (this.options.removeCloneOnHide && cloneEl.parentNode) {
        cloneEl.parentNode.removeChild(cloneEl);
      }

      cloneHidden = true;
    }
  },
  _showClone: function _showClone(putSortable) {
    if (putSortable.lastPutMode !== 'clone') {
      this._hideClone();

      return;
    }

    if (cloneHidden) {
      pluginEvent('showClone', this);
      if (Sortable.eventCanceled) return; // show clone at dragEl or original position

      if (rootEl.contains(dragEl) && !this.options.group.revertClone) {
        rootEl.insertBefore(cloneEl, dragEl);
      } else if (nextEl) {
        rootEl.insertBefore(cloneEl, nextEl);
      } else {
        rootEl.appendChild(cloneEl);
      }

      if (this.options.group.revertClone) {
        this.animate(dragEl, cloneEl);
      }

      css(cloneEl, 'display', '');
      cloneHidden = false;
    }
  }
};

function _globalDragOver(
/**Event*/
evt) {
  if (evt.dataTransfer) {
    evt.dataTransfer.dropEffect = 'move';
  }

  evt.cancelable && evt.preventDefault();
}

function _onMove(fromEl, toEl, dragEl, dragRect, targetEl, targetRect, originalEvent, willInsertAfter) {
  var evt,
      sortable = fromEl[expando],
      onMoveFn = sortable.options.onMove,
      retVal; // Support for new CustomEvent feature

  if (window.CustomEvent && !IE11OrLess && !Edge) {
    evt = new CustomEvent('move', {
      bubbles: true,
      cancelable: true
    });
  } else {
    evt = document.createEvent('Event');
    evt.initEvent('move', true, true);
  }

  evt.to = toEl;
  evt.from = fromEl;
  evt.dragged = dragEl;
  evt.draggedRect = dragRect;
  evt.related = targetEl || toEl;
  evt.relatedRect = targetRect || getRect(toEl);
  evt.willInsertAfter = willInsertAfter;
  evt.originalEvent = originalEvent;
  fromEl.dispatchEvent(evt);

  if (onMoveFn) {
    retVal = onMoveFn.call(sortable, evt, originalEvent);
  }

  return retVal;
}

function _disableDraggable(el) {
  el.draggable = false;
}

function _unsilent() {
  _silent = false;
}

function _ghostIsLast(evt, vertical, sortable) {
  var rect = getRect(lastChild(sortable.el, sortable.options.draggable));
  var spacer = 10;
  return vertical ? evt.clientX > rect.right + spacer || evt.clientX <= rect.right && evt.clientY > rect.bottom && evt.clientX >= rect.left : evt.clientX > rect.right && evt.clientY > rect.top || evt.clientX <= rect.right && evt.clientY > rect.bottom + spacer;
}

function _getSwapDirection(evt, target, targetRect, vertical, swapThreshold, invertedSwapThreshold, invertSwap, isLastTarget) {
  var mouseOnAxis = vertical ? evt.clientY : evt.clientX,
      targetLength = vertical ? targetRect.height : targetRect.width,
      targetS1 = vertical ? targetRect.top : targetRect.left,
      targetS2 = vertical ? targetRect.bottom : targetRect.right,
      invert = false;

  if (!invertSwap) {
    // Never invert or create dragEl shadow when target movemenet causes mouse to move past the end of regular swapThreshold
    if (isLastTarget && targetMoveDistance < targetLength * swapThreshold) {
      // multiplied only by swapThreshold because mouse will already be inside target by (1 - threshold) * targetLength / 2
      // check if past first invert threshold on side opposite of lastDirection
      if (!pastFirstInvertThresh && (lastDirection === 1 ? mouseOnAxis > targetS1 + targetLength * invertedSwapThreshold / 2 : mouseOnAxis < targetS2 - targetLength * invertedSwapThreshold / 2)) {
        // past first invert threshold, do not restrict inverted threshold to dragEl shadow
        pastFirstInvertThresh = true;
      }

      if (!pastFirstInvertThresh) {
        // dragEl shadow (target move distance shadow)
        if (lastDirection === 1 ? mouseOnAxis < targetS1 + targetMoveDistance // over dragEl shadow
        : mouseOnAxis > targetS2 - targetMoveDistance) {
          return -lastDirection;
        }
      } else {
        invert = true;
      }
    } else {
      // Regular
      if (mouseOnAxis > targetS1 + targetLength * (1 - swapThreshold) / 2 && mouseOnAxis < targetS2 - targetLength * (1 - swapThreshold) / 2) {
        return _getInsertDirection(target);
      }
    }
  }

  invert = invert || invertSwap;

  if (invert) {
    // Invert of regular
    if (mouseOnAxis < targetS1 + targetLength * invertedSwapThreshold / 2 || mouseOnAxis > targetS2 - targetLength * invertedSwapThreshold / 2) {
      return mouseOnAxis > targetS1 + targetLength / 2 ? 1 : -1;
    }
  }

  return 0;
}
/**
 * Gets the direction dragEl must be swapped relative to target in order to make it
 * seem that dragEl has been "inserted" into that element's position
 * @param  {HTMLElement} target       The target whose position dragEl is being inserted at
 * @return {Number}                   Direction dragEl must be swapped
 */


function _getInsertDirection(target) {
  if (index(dragEl) < index(target)) {
    return 1;
  } else {
    return -1;
  }
}
/**
 * Generate id
 * @param   {HTMLElement} el
 * @returns {String}
 * @private
 */


function _generateId(el) {
  var str = el.tagName + el.className + el.src + el.href + el.textContent,
      i = str.length,
      sum = 0;

  while (i--) {
    sum += str.charCodeAt(i);
  }

  return sum.toString(36);
}

function _saveInputCheckedState(root) {
  savedInputChecked.length = 0;
  var inputs = root.getElementsByTagName('input');
  var idx = inputs.length;

  while (idx--) {
    var el = inputs[idx];
    el.checked && savedInputChecked.push(el);
  }
}

function _nextTick(fn) {
  return setTimeout(fn, 0);
}

function _cancelNextTick(id) {
  return clearTimeout(id);
} // Fixed #973:


if (documentExists) {
  on(document, 'touchmove', function (evt) {
    if ((Sortable.active || awaitingDragStarted) && evt.cancelable) {
      evt.preventDefault();
    }
  });
} // Export utils


Sortable.utils = {
  on: on,
  off: off,
  css: css,
  find: find,
  is: function is(el, selector) {
    return !!closest(el, selector, el, false);
  },
  extend: extend,
  throttle: throttle,
  closest: closest,
  toggleClass: toggleClass,
  clone: clone,
  index: index,
  nextTick: _nextTick,
  cancelNextTick: _cancelNextTick,
  detectDirection: _detectDirection,
  getChild: getChild
};
/**
 * Get the Sortable instance of an element
 * @param  {HTMLElement} element The element
 * @return {Sortable|undefined}         The instance of Sortable
 */

Sortable.get = function (element) {
  return element[expando];
};
/**
 * Mount a plugin to Sortable
 * @param  {...SortablePlugin|SortablePlugin[]} plugins       Plugins being mounted
 */


Sortable.mount = function () {
  for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
    plugins[_key] = arguments[_key];
  }

  if (plugins[0].constructor === Array) plugins = plugins[0];
  plugins.forEach(function (plugin) {
    if (!plugin.prototype || !plugin.prototype.constructor) {
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(plugin));
    }

    if (plugin.utils) Sortable.utils = _objectSpread({}, Sortable.utils, plugin.utils);
    PluginManager.mount(plugin);
  });
};
/**
 * Create sortable instance
 * @param {HTMLElement}  el
 * @param {Object}      [options]
 */


Sortable.create = function (el, options) {
  return new Sortable(el, options);
}; // Export


Sortable.version = version;

var autoScrolls = [],
    scrollEl,
    scrollRootEl,
    scrolling = false,
    lastAutoScrollX,
    lastAutoScrollY,
    touchEvt$1,
    pointerElemChangedInterval;

function AutoScrollPlugin() {
  function AutoScroll() {
    this.defaults = {
      scroll: true,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: true
    }; // Bind all private methods

    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }
  }

  AutoScroll.prototype = {
    dragStarted: function dragStarted(_ref) {
      var originalEvent = _ref.originalEvent;

      if (this.sortable.nativeDraggable) {
        on(document, 'dragover', this._handleAutoScroll);
      } else {
        if (this.options.supportPointer) {
          on(document, 'pointermove', this._handleFallbackAutoScroll);
        } else if (originalEvent.touches) {
          on(document, 'touchmove', this._handleFallbackAutoScroll);
        } else {
          on(document, 'mousemove', this._handleFallbackAutoScroll);
        }
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref2) {
      var originalEvent = _ref2.originalEvent;

      // For when bubbling is canceled and using fallback (fallback 'touchmove' always reached)
      if (!this.options.dragOverBubble && !originalEvent.rootEl) {
        this._handleAutoScroll(originalEvent);
      }
    },
    drop: function drop() {
      if (this.sortable.nativeDraggable) {
        off(document, 'dragover', this._handleAutoScroll);
      } else {
        off(document, 'pointermove', this._handleFallbackAutoScroll);
        off(document, 'touchmove', this._handleFallbackAutoScroll);
        off(document, 'mousemove', this._handleFallbackAutoScroll);
      }

      clearPointerElemChangedInterval();
      clearAutoScrolls();
      cancelThrottle();
    },
    nulling: function nulling() {
      touchEvt$1 = scrollRootEl = scrollEl = scrolling = pointerElemChangedInterval = lastAutoScrollX = lastAutoScrollY = null;
      autoScrolls.length = 0;
    },
    _handleFallbackAutoScroll: function _handleFallbackAutoScroll(evt) {
      this._handleAutoScroll(evt, true);
    },
    _handleAutoScroll: function _handleAutoScroll(evt, fallback) {
      var _this = this;

      var x = (evt.touches ? evt.touches[0] : evt).clientX,
          y = (evt.touches ? evt.touches[0] : evt).clientY,
          elem = document.elementFromPoint(x, y);
      touchEvt$1 = evt; // IE does not seem to have native autoscroll,
      // Edge's autoscroll seems too conditional,
      // MACOS Safari does not have autoscroll,
      // Firefox and Chrome are good

      if (fallback || Edge || IE11OrLess || Safari) {
        autoScroll(evt, this.options, elem, fallback); // Listener for pointer element change

        var ogElemScroller = getParentAutoScrollElement(elem, true);

        if (scrolling && (!pointerElemChangedInterval || x !== lastAutoScrollX || y !== lastAutoScrollY)) {
          pointerElemChangedInterval && clearPointerElemChangedInterval(); // Detect for pointer elem change, emulating native DnD behaviour

          pointerElemChangedInterval = setInterval(function () {
            var newElem = getParentAutoScrollElement(document.elementFromPoint(x, y), true);

            if (newElem !== ogElemScroller) {
              ogElemScroller = newElem;
              clearAutoScrolls();
            }

            autoScroll(evt, _this.options, newElem, fallback);
          }, 10);
          lastAutoScrollX = x;
          lastAutoScrollY = y;
        }
      } else {
        // if DnD is enabled (and browser has good autoscrolling), first autoscroll will already scroll, so get parent autoscroll of first autoscroll
        if (!this.options.bubbleScroll || getParentAutoScrollElement(elem, true) === getWindowScrollingElement()) {
          clearAutoScrolls();
          return;
        }

        autoScroll(evt, this.options, getParentAutoScrollElement(elem, false), false);
      }
    }
  };
  return _extends(AutoScroll, {
    pluginName: 'scroll',
    initializeByDefault: true
  });
}

function clearAutoScrolls() {
  autoScrolls.forEach(function (autoScroll) {
    clearInterval(autoScroll.pid);
  });
  autoScrolls = [];
}

function clearPointerElemChangedInterval() {
  clearInterval(pointerElemChangedInterval);
}

var autoScroll = throttle(function (evt, options, rootEl, isFallback) {
  // Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=505521
  if (!options.scroll) return;
  var x = (evt.touches ? evt.touches[0] : evt).clientX,
      y = (evt.touches ? evt.touches[0] : evt).clientY,
      sens = options.scrollSensitivity,
      speed = options.scrollSpeed,
      winScroller = getWindowScrollingElement();
  var scrollThisInstance = false,
      scrollCustomFn; // New scroll root, set scrollEl

  if (scrollRootEl !== rootEl) {
    scrollRootEl = rootEl;
    clearAutoScrolls();
    scrollEl = options.scroll;
    scrollCustomFn = options.scrollFn;

    if (scrollEl === true) {
      scrollEl = getParentAutoScrollElement(rootEl, true);
    }
  }

  var layersOut = 0;
  var currentParent = scrollEl;

  do {
    var el = currentParent,
        rect = getRect(el),
        top = rect.top,
        bottom = rect.bottom,
        left = rect.left,
        right = rect.right,
        width = rect.width,
        height = rect.height,
        canScrollX = void 0,
        canScrollY = void 0,
        scrollWidth = el.scrollWidth,
        scrollHeight = el.scrollHeight,
        elCSS = css(el),
        scrollPosX = el.scrollLeft,
        scrollPosY = el.scrollTop;

    if (el === winScroller) {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll' || elCSS.overflowX === 'visible');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll' || elCSS.overflowY === 'visible');
    } else {
      canScrollX = width < scrollWidth && (elCSS.overflowX === 'auto' || elCSS.overflowX === 'scroll');
      canScrollY = height < scrollHeight && (elCSS.overflowY === 'auto' || elCSS.overflowY === 'scroll');
    }

    var vx = canScrollX && (Math.abs(right - x) <= sens && scrollPosX + width < scrollWidth) - (Math.abs(left - x) <= sens && !!scrollPosX);
    var vy = canScrollY && (Math.abs(bottom - y) <= sens && scrollPosY + height < scrollHeight) - (Math.abs(top - y) <= sens && !!scrollPosY);

    if (!autoScrolls[layersOut]) {
      for (var i = 0; i <= layersOut; i++) {
        if (!autoScrolls[i]) {
          autoScrolls[i] = {};
        }
      }
    }

    if (autoScrolls[layersOut].vx != vx || autoScrolls[layersOut].vy != vy || autoScrolls[layersOut].el !== el) {
      autoScrolls[layersOut].el = el;
      autoScrolls[layersOut].vx = vx;
      autoScrolls[layersOut].vy = vy;
      clearInterval(autoScrolls[layersOut].pid);

      if (vx != 0 || vy != 0) {
        scrollThisInstance = true;
        /* jshint loopfunc:true */

        autoScrolls[layersOut].pid = setInterval(function () {
          // emulate drag over during autoscroll (fallback), emulating native DnD behaviour
          if (isFallback && this.layer === 0) {
            Sortable.active._onTouchMove(touchEvt$1); // To move ghost if it is positioned absolutely

          }

          var scrollOffsetY = autoScrolls[this.layer].vy ? autoScrolls[this.layer].vy * speed : 0;
          var scrollOffsetX = autoScrolls[this.layer].vx ? autoScrolls[this.layer].vx * speed : 0;

          if (typeof scrollCustomFn === 'function') {
            if (scrollCustomFn.call(Sortable.dragged.parentNode[expando], scrollOffsetX, scrollOffsetY, evt, touchEvt$1, autoScrolls[this.layer].el) !== 'continue') {
              return;
            }
          }

          scrollBy(autoScrolls[this.layer].el, scrollOffsetX, scrollOffsetY);
        }.bind({
          layer: layersOut
        }), 24);
      }
    }

    layersOut++;
  } while (options.bubbleScroll && currentParent !== winScroller && (currentParent = getParentAutoScrollElement(currentParent, false)));

  scrolling = scrollThisInstance; // in case another function catches scrolling as false in between when it is not
}, 30);

var drop = function drop(_ref) {
  var originalEvent = _ref.originalEvent,
      putSortable = _ref.putSortable,
      dragEl = _ref.dragEl,
      activeSortable = _ref.activeSortable,
      dispatchSortableEvent = _ref.dispatchSortableEvent,
      hideGhostForTarget = _ref.hideGhostForTarget,
      unhideGhostForTarget = _ref.unhideGhostForTarget;
  if (!originalEvent) return;
  var toSortable = putSortable || activeSortable;
  hideGhostForTarget();
  var touch = originalEvent.changedTouches && originalEvent.changedTouches.length ? originalEvent.changedTouches[0] : originalEvent;
  var target = document.elementFromPoint(touch.clientX, touch.clientY);
  unhideGhostForTarget();

  if (toSortable && !toSortable.el.contains(target)) {
    dispatchSortableEvent('spill');
    this.onSpill({
      dragEl: dragEl,
      putSortable: putSortable
    });
  }
};

function Revert() {}

Revert.prototype = {
  startIndex: null,
  dragStart: function dragStart(_ref2) {
    var oldDraggableIndex = _ref2.oldDraggableIndex;
    this.startIndex = oldDraggableIndex;
  },
  onSpill: function onSpill(_ref3) {
    var dragEl = _ref3.dragEl,
        putSortable = _ref3.putSortable;
    this.sortable.captureAnimationState();

    if (putSortable) {
      putSortable.captureAnimationState();
    }

    var nextSibling = getChild(this.sortable.el, this.startIndex, this.options);

    if (nextSibling) {
      this.sortable.el.insertBefore(dragEl, nextSibling);
    } else {
      this.sortable.el.appendChild(dragEl);
    }

    this.sortable.animateAll();

    if (putSortable) {
      putSortable.animateAll();
    }
  },
  drop: drop
};

_extends(Revert, {
  pluginName: 'revertOnSpill'
});

function Remove() {}

Remove.prototype = {
  onSpill: function onSpill(_ref4) {
    var dragEl = _ref4.dragEl,
        putSortable = _ref4.putSortable;
    var parentSortable = putSortable || this.sortable;
    parentSortable.captureAnimationState();
    dragEl.parentNode && dragEl.parentNode.removeChild(dragEl);
    parentSortable.animateAll();
  },
  drop: drop
};

_extends(Remove, {
  pluginName: 'removeOnSpill'
});

var lastSwapEl;

function SwapPlugin() {
  function Swap() {
    this.defaults = {
      swapClass: 'sortable-swap-highlight'
    };
  }

  Swap.prototype = {
    dragStart: function dragStart(_ref) {
      var dragEl = _ref.dragEl;
      lastSwapEl = dragEl;
    },
    dragOverValid: function dragOverValid(_ref2) {
      var completed = _ref2.completed,
          target = _ref2.target,
          onMove = _ref2.onMove,
          activeSortable = _ref2.activeSortable,
          changed = _ref2.changed,
          cancel = _ref2.cancel;
      if (!activeSortable.options.swap) return;
      var el = this.sortable.el,
          options = this.options;

      if (target && target !== el) {
        var prevSwapEl = lastSwapEl;

        if (onMove(target) !== false) {
          toggleClass(target, options.swapClass, true);
          lastSwapEl = target;
        } else {
          lastSwapEl = null;
        }

        if (prevSwapEl && prevSwapEl !== lastSwapEl) {
          toggleClass(prevSwapEl, options.swapClass, false);
        }
      }

      changed();
      completed(true);
      cancel();
    },
    drop: function drop(_ref3) {
      var activeSortable = _ref3.activeSortable,
          putSortable = _ref3.putSortable,
          dragEl = _ref3.dragEl;
      var toSortable = putSortable || this.sortable;
      var options = this.options;
      lastSwapEl && toggleClass(lastSwapEl, options.swapClass, false);

      if (lastSwapEl && (options.swap || putSortable && putSortable.options.swap)) {
        if (dragEl !== lastSwapEl) {
          toSortable.captureAnimationState();
          if (toSortable !== activeSortable) activeSortable.captureAnimationState();
          swapNodes(dragEl, lastSwapEl);
          toSortable.animateAll();
          if (toSortable !== activeSortable) activeSortable.animateAll();
        }
      }
    },
    nulling: function nulling() {
      lastSwapEl = null;
    }
  };
  return _extends(Swap, {
    pluginName: 'swap',
    eventProperties: function eventProperties() {
      return {
        swapItem: lastSwapEl
      };
    }
  });
}

function swapNodes(n1, n2) {
  var p1 = n1.parentNode,
      p2 = n2.parentNode,
      i1,
      i2;
  if (!p1 || !p2 || p1.isEqualNode(n2) || p2.isEqualNode(n1)) return;
  i1 = index(n1);
  i2 = index(n2);

  if (p1.isEqualNode(p2) && i1 < i2) {
    i2++;
  }

  p1.insertBefore(n2, p1.children[i1]);
  p2.insertBefore(n1, p2.children[i2]);
}

var multiDragElements = [],
    multiDragClones = [],
    lastMultiDragSelect,
    // for selection with modifier key down (SHIFT)
multiDragSortable,
    initialFolding = false,
    // Initial multi-drag fold when drag started
folding = false,
    // Folding any other time
dragStarted = false,
    dragEl$1,
    clonesFromRect,
    clonesHidden;

function MultiDragPlugin() {
  function MultiDrag(sortable) {
    // Bind all private methods
    for (var fn in this) {
      if (fn.charAt(0) === '_' && typeof this[fn] === 'function') {
        this[fn] = this[fn].bind(this);
      }
    }

    if (sortable.options.supportPointer) {
      on(document, 'pointerup', this._deselectMultiDrag);
    } else {
      on(document, 'mouseup', this._deselectMultiDrag);
      on(document, 'touchend', this._deselectMultiDrag);
    }

    on(document, 'keydown', this._checkKeyDown);
    on(document, 'keyup', this._checkKeyUp);
    this.defaults = {
      selectedClass: 'sortable-selected',
      multiDragKey: null,
      setData: function setData(dataTransfer, dragEl) {
        var data = '';

        if (multiDragElements.length && multiDragSortable === sortable) {
          multiDragElements.forEach(function (multiDragElement, i) {
            data += (!i ? '' : ', ') + multiDragElement.textContent;
          });
        } else {
          data = dragEl.textContent;
        }

        dataTransfer.setData('Text', data);
      }
    };
  }

  MultiDrag.prototype = {
    multiDragKeyDown: false,
    isMultiDrag: false,
    delayStartGlobal: function delayStartGlobal(_ref) {
      var dragged = _ref.dragEl;
      dragEl$1 = dragged;
    },
    delayEnded: function delayEnded() {
      this.isMultiDrag = ~multiDragElements.indexOf(dragEl$1);
    },
    setupClone: function setupClone(_ref2) {
      var sortable = _ref2.sortable,
          cancel = _ref2.cancel;
      if (!this.isMultiDrag) return;

      for (var i = 0; i < multiDragElements.length; i++) {
        multiDragClones.push(clone(multiDragElements[i]));
        multiDragClones[i].sortableIndex = multiDragElements[i].sortableIndex;
        multiDragClones[i].draggable = false;
        multiDragClones[i].style['will-change'] = '';
        toggleClass(multiDragClones[i], this.options.selectedClass, false);
        multiDragElements[i] === dragEl$1 && toggleClass(multiDragClones[i], this.options.chosenClass, false);
      }

      sortable._hideClone();

      cancel();
    },
    clone: function clone(_ref3) {
      var sortable = _ref3.sortable,
          rootEl = _ref3.rootEl,
          dispatchSortableEvent = _ref3.dispatchSortableEvent,
          cancel = _ref3.cancel;
      if (!this.isMultiDrag) return;

      if (!this.options.removeCloneOnHide) {
        if (multiDragElements.length && multiDragSortable === sortable) {
          insertMultiDragClones(true, rootEl);
          dispatchSortableEvent('clone');
          cancel();
        }
      }
    },
    showClone: function showClone(_ref4) {
      var cloneNowShown = _ref4.cloneNowShown,
          rootEl = _ref4.rootEl,
          cancel = _ref4.cancel;
      if (!this.isMultiDrag) return;
      insertMultiDragClones(false, rootEl);
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', '');
      });
      cloneNowShown();
      clonesHidden = false;
      cancel();
    },
    hideClone: function hideClone(_ref5) {
      var _this = this;

      var sortable = _ref5.sortable,
          cloneNowHidden = _ref5.cloneNowHidden,
          cancel = _ref5.cancel;
      if (!this.isMultiDrag) return;
      multiDragClones.forEach(function (clone) {
        css(clone, 'display', 'none');

        if (_this.options.removeCloneOnHide && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
      });
      cloneNowHidden();
      clonesHidden = true;
      cancel();
    },
    dragStartGlobal: function dragStartGlobal(_ref6) {
      var sortable = _ref6.sortable;

      if (!this.isMultiDrag && multiDragSortable) {
        multiDragSortable.multiDrag._deselectMultiDrag();
      }

      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.sortableIndex = index(multiDragElement);
      }); // Sort multi-drag elements

      multiDragElements = multiDragElements.sort(function (a, b) {
        return a.sortableIndex - b.sortableIndex;
      });
      dragStarted = true;
    },
    dragStarted: function dragStarted(_ref7) {
      var _this2 = this;

      var sortable = _ref7.sortable;
      if (!this.isMultiDrag) return;

      if (this.options.sort) {
        // Capture rects,
        // hide multi drag elements (by positioning them absolute),
        // set multi drag elements rects to dragRect,
        // show multi drag elements,
        // animate to rects,
        // unset rects & remove from DOM
        sortable.captureAnimationState();

        if (this.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            css(multiDragElement, 'position', 'absolute');
          });
          var dragRect = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRect);
          });
          folding = true;
          initialFolding = true;
        }
      }

      sortable.animateAll(function () {
        folding = false;
        initialFolding = false;

        if (_this2.options.animation) {
          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
        } // Remove all auxiliary multidrag items from el, if sorting enabled


        if (_this2.options.sort) {
          removeMultiDragElements();
        }
      });
    },
    dragOver: function dragOver(_ref8) {
      var target = _ref8.target,
          completed = _ref8.completed,
          cancel = _ref8.cancel;

      if (folding && ~multiDragElements.indexOf(target)) {
        completed(false);
        cancel();
      }
    },
    revert: function revert(_ref9) {
      var fromSortable = _ref9.fromSortable,
          rootEl = _ref9.rootEl,
          sortable = _ref9.sortable,
          dragRect = _ref9.dragRect;

      if (multiDragElements.length > 1) {
        // Setup unfold animation
        multiDragElements.forEach(function (multiDragElement) {
          sortable.addAnimationState({
            target: multiDragElement,
            rect: folding ? getRect(multiDragElement) : dragRect
          });
          unsetRect(multiDragElement);
          multiDragElement.fromRect = dragRect;
          fromSortable.removeAnimationState(multiDragElement);
        });
        folding = false;
        insertMultiDragElements(!this.options.removeCloneOnHide, rootEl);
      }
    },
    dragOverCompleted: function dragOverCompleted(_ref10) {
      var sortable = _ref10.sortable,
          isOwner = _ref10.isOwner,
          insertion = _ref10.insertion,
          activeSortable = _ref10.activeSortable,
          parentEl = _ref10.parentEl,
          putSortable = _ref10.putSortable;
      var options = this.options;

      if (insertion) {
        // Clones must be hidden before folding animation to capture dragRectAbsolute properly
        if (isOwner) {
          activeSortable._hideClone();
        }

        initialFolding = false; // If leaving sort:false root, or already folding - Fold to new location

        if (options.animation && multiDragElements.length > 1 && (folding || !isOwner && !activeSortable.options.sort && !putSortable)) {
          // Fold: Set all multi drag elements's rects to dragEl's rect when multi-drag elements are invisible
          var dragRectAbsolute = getRect(dragEl$1, false, true, true);
          multiDragElements.forEach(function (multiDragElement) {
            if (multiDragElement === dragEl$1) return;
            setRect(multiDragElement, dragRectAbsolute); // Move element(s) to end of parentEl so that it does not interfere with multi-drag clones insertion if they are inserted
            // while folding, and so that we can capture them again because old sortable will no longer be fromSortable

            parentEl.appendChild(multiDragElement);
          });
          folding = true;
        } // Clones must be shown (and check to remove multi drags) after folding when interfering multiDragElements are moved out


        if (!isOwner) {
          // Only remove if not folding (folding will remove them anyways)
          if (!folding) {
            removeMultiDragElements();
          }

          if (multiDragElements.length > 1) {
            var clonesHiddenBefore = clonesHidden;

            activeSortable._showClone(sortable); // Unfold animation for clones if showing from hidden


            if (activeSortable.options.animation && !clonesHidden && clonesHiddenBefore) {
              multiDragClones.forEach(function (clone) {
                activeSortable.addAnimationState({
                  target: clone,
                  rect: clonesFromRect
                });
                clone.fromRect = clonesFromRect;
                clone.thisAnimationDuration = null;
              });
            }
          } else {
            activeSortable._showClone(sortable);
          }
        }
      }
    },
    dragOverAnimationCapture: function dragOverAnimationCapture(_ref11) {
      var dragRect = _ref11.dragRect,
          isOwner = _ref11.isOwner,
          activeSortable = _ref11.activeSortable;
      multiDragElements.forEach(function (multiDragElement) {
        multiDragElement.thisAnimationDuration = null;
      });

      if (activeSortable.options.animation && !isOwner && activeSortable.multiDrag.isMultiDrag) {
        clonesFromRect = _extends({}, dragRect);
        var dragMatrix = matrix(dragEl$1, true);
        clonesFromRect.top -= dragMatrix.f;
        clonesFromRect.left -= dragMatrix.e;
      }
    },
    dragOverAnimationComplete: function dragOverAnimationComplete() {
      if (folding) {
        folding = false;
        removeMultiDragElements();
      }
    },
    drop: function drop(_ref12) {
      var evt = _ref12.originalEvent,
          rootEl = _ref12.rootEl,
          parentEl = _ref12.parentEl,
          sortable = _ref12.sortable,
          dispatchSortableEvent = _ref12.dispatchSortableEvent,
          oldIndex = _ref12.oldIndex,
          putSortable = _ref12.putSortable;
      var toSortable = putSortable || this.sortable;
      if (!evt) return;
      var options = this.options,
          children = parentEl.children; // Multi-drag selection

      if (!dragStarted) {
        if (options.multiDragKey && !this.multiDragKeyDown) {
          this._deselectMultiDrag();
        }

        toggleClass(dragEl$1, options.selectedClass, !~multiDragElements.indexOf(dragEl$1));

        if (!~multiDragElements.indexOf(dragEl$1)) {
          multiDragElements.push(dragEl$1);
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'select',
            targetEl: dragEl$1,
            originalEvt: evt
          }); // Modifier activated, select from last to dragEl

          if (evt.shiftKey && lastMultiDragSelect && sortable.el.contains(lastMultiDragSelect)) {
            var lastIndex = index(lastMultiDragSelect),
                currentIndex = index(dragEl$1);

            if (~lastIndex && ~currentIndex && lastIndex !== currentIndex) {
              // Must include lastMultiDragSelect (select it), in case modified selection from no selection
              // (but previous selection existed)
              var n, i;

              if (currentIndex > lastIndex) {
                i = lastIndex;
                n = currentIndex;
              } else {
                i = currentIndex;
                n = lastIndex + 1;
              }

              for (; i < n; i++) {
                if (~multiDragElements.indexOf(children[i])) continue;
                toggleClass(children[i], options.selectedClass, true);
                multiDragElements.push(children[i]);
                dispatchEvent({
                  sortable: sortable,
                  rootEl: rootEl,
                  name: 'select',
                  targetEl: children[i],
                  originalEvt: evt
                });
              }
            }
          } else {
            lastMultiDragSelect = dragEl$1;
          }

          multiDragSortable = toSortable;
        } else {
          multiDragElements.splice(multiDragElements.indexOf(dragEl$1), 1);
          lastMultiDragSelect = null;
          dispatchEvent({
            sortable: sortable,
            rootEl: rootEl,
            name: 'deselect',
            targetEl: dragEl$1,
            originalEvt: evt
          });
        }
      } // Multi-drag drop


      if (dragStarted && this.isMultiDrag) {
        // Do not "unfold" after around dragEl if reverted
        if ((parentEl[expando].options.sort || parentEl !== rootEl) && multiDragElements.length > 1) {
          var dragRect = getRect(dragEl$1),
              multiDragIndex = index(dragEl$1, ':not(.' + this.options.selectedClass + ')');
          if (!initialFolding && options.animation) dragEl$1.thisAnimationDuration = null;
          toSortable.captureAnimationState();

          if (!initialFolding) {
            if (options.animation) {
              dragEl$1.fromRect = dragRect;
              multiDragElements.forEach(function (multiDragElement) {
                multiDragElement.thisAnimationDuration = null;

                if (multiDragElement !== dragEl$1) {
                  var rect = folding ? getRect(multiDragElement) : dragRect;
                  multiDragElement.fromRect = rect; // Prepare unfold animation

                  toSortable.addAnimationState({
                    target: multiDragElement,
                    rect: rect
                  });
                }
              });
            } // Multi drag elements are not necessarily removed from the DOM on drop, so to reinsert
            // properly they must all be removed


            removeMultiDragElements();
            multiDragElements.forEach(function (multiDragElement) {
              if (children[multiDragIndex]) {
                parentEl.insertBefore(multiDragElement, children[multiDragIndex]);
              } else {
                parentEl.appendChild(multiDragElement);
              }

              multiDragIndex++;
            }); // If initial folding is done, the elements may have changed position because they are now
            // unfolding around dragEl, even though dragEl may not have his index changed, so update event
            // must be fired here as Sortable will not.

            if (oldIndex === index(dragEl$1)) {
              var update = false;
              multiDragElements.forEach(function (multiDragElement) {
                if (multiDragElement.sortableIndex !== index(multiDragElement)) {
                  update = true;
                  return;
                }
              });

              if (update) {
                dispatchSortableEvent('update');
              }
            }
          } // Must be done after capturing individual rects (scroll bar)


          multiDragElements.forEach(function (multiDragElement) {
            unsetRect(multiDragElement);
          });
          toSortable.animateAll();
        }

        multiDragSortable = toSortable;
      } // Remove clones if necessary


      if (rootEl === parentEl || putSortable && putSortable.lastPutMode !== 'clone') {
        multiDragClones.forEach(function (clone) {
          clone.parentNode && clone.parentNode.removeChild(clone);
        });
      }
    },
    nullingGlobal: function nullingGlobal() {
      this.isMultiDrag = dragStarted = false;
      multiDragClones.length = 0;
    },
    destroyGlobal: function destroyGlobal() {
      this._deselectMultiDrag();

      off(document, 'pointerup', this._deselectMultiDrag);
      off(document, 'mouseup', this._deselectMultiDrag);
      off(document, 'touchend', this._deselectMultiDrag);
      off(document, 'keydown', this._checkKeyDown);
      off(document, 'keyup', this._checkKeyUp);
    },
    _deselectMultiDrag: function _deselectMultiDrag(evt) {
      if (typeof dragStarted !== "undefined" && dragStarted) return; // Only deselect if selection is in this sortable

      if (multiDragSortable !== this.sortable) return; // Only deselect if target is not item in this sortable

      if (evt && closest(evt.target, this.options.draggable, this.sortable.el, false)) return; // Only deselect if left click

      if (evt && evt.button !== 0) return;

      while (multiDragElements.length) {
        var el = multiDragElements[0];
        toggleClass(el, this.options.selectedClass, false);
        multiDragElements.shift();
        dispatchEvent({
          sortable: this.sortable,
          rootEl: this.sortable.el,
          name: 'deselect',
          targetEl: el,
          originalEvt: evt
        });
      }
    },
    _checkKeyDown: function _checkKeyDown(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = true;
      }
    },
    _checkKeyUp: function _checkKeyUp(evt) {
      if (evt.key === this.options.multiDragKey) {
        this.multiDragKeyDown = false;
      }
    }
  };
  return _extends(MultiDrag, {
    // Static methods & properties
    pluginName: 'multiDrag',
    utils: {
      /**
       * Selects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be selected
       */
      select: function select(el) {
        var sortable = el.parentNode[expando];
        if (!sortable || !sortable.options.multiDrag || ~multiDragElements.indexOf(el)) return;

        if (multiDragSortable && multiDragSortable !== sortable) {
          multiDragSortable.multiDrag._deselectMultiDrag();

          multiDragSortable = sortable;
        }

        toggleClass(el, sortable.options.selectedClass, true);
        multiDragElements.push(el);
      },

      /**
       * Deselects the provided multi-drag item
       * @param  {HTMLElement} el    The element to be deselected
       */
      deselect: function deselect(el) {
        var sortable = el.parentNode[expando],
            index = multiDragElements.indexOf(el);
        if (!sortable || !sortable.options.multiDrag || !~index) return;
        toggleClass(el, sortable.options.selectedClass, false);
        multiDragElements.splice(index, 1);
      }
    },
    eventProperties: function eventProperties() {
      var _this3 = this;

      var oldIndicies = [],
          newIndicies = [];
      multiDragElements.forEach(function (multiDragElement) {
        oldIndicies.push({
          multiDragElement: multiDragElement,
          index: multiDragElement.sortableIndex
        }); // multiDragElements will already be sorted if folding

        var newIndex;

        if (folding && multiDragElement !== dragEl$1) {
          newIndex = -1;
        } else if (folding) {
          newIndex = index(multiDragElement, ':not(.' + _this3.options.selectedClass + ')');
        } else {
          newIndex = index(multiDragElement);
        }

        newIndicies.push({
          multiDragElement: multiDragElement,
          index: newIndex
        });
      });
      return {
        items: _toConsumableArray(multiDragElements),
        clones: [].concat(multiDragClones),
        oldIndicies: oldIndicies,
        newIndicies: newIndicies
      };
    },
    optionListeners: {
      multiDragKey: function multiDragKey(key) {
        key = key.toLowerCase();

        if (key === 'ctrl') {
          key = 'Control';
        } else if (key.length > 1) {
          key = key.charAt(0).toUpperCase() + key.substr(1);
        }

        return key;
      }
    }
  });
}

function insertMultiDragElements(clonesInserted, rootEl) {
  multiDragElements.forEach(function (multiDragElement, i) {
    var target = rootEl.children[multiDragElement.sortableIndex + (clonesInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(multiDragElement, target);
    } else {
      rootEl.appendChild(multiDragElement);
    }
  });
}
/**
 * Insert multi-drag clones
 * @param  {[Boolean]} elementsInserted  Whether the multi-drag elements are inserted
 * @param  {HTMLElement} rootEl
 */


function insertMultiDragClones(elementsInserted, rootEl) {
  multiDragClones.forEach(function (clone, i) {
    var target = rootEl.children[clone.sortableIndex + (elementsInserted ? Number(i) : 0)];

    if (target) {
      rootEl.insertBefore(clone, target);
    } else {
      rootEl.appendChild(clone);
    }
  });
}

function removeMultiDragElements() {
  multiDragElements.forEach(function (multiDragElement) {
    if (multiDragElement === dragEl$1) return;
    multiDragElement.parentNode && multiDragElement.parentNode.removeChild(multiDragElement);
  });
}

Sortable.mount(new AutoScrollPlugin());
Sortable.mount(Remove, Revert);

/* harmony default export */ __webpack_exports__["default"] = (Sortable);



/***/ }),

/***/ "aae3":
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__("d3f4");
var cof = __webpack_require__("2d95");
var MATCH = __webpack_require__("2b4c")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "ac4d":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("3a72")('asyncIterator');


/***/ }),

/***/ "ac6a":
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__("cadf");
var getKeys = __webpack_require__("0d58");
var redefine = __webpack_require__("2aba");
var global = __webpack_require__("7726");
var hide = __webpack_require__("32e9");
var Iterators = __webpack_require__("84f2");
var wks = __webpack_require__("2b4c");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "aebd":
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

/***/ "b0c5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__("520a");
__webpack_require__("5ca1")({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ "b0dc":
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__("e4ae");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "b189":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__("d4ab"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "b2b8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

/* eslint global-require: 0 */
// the code is structured this way so that bundlers can
// alias out `has-symbols` to `() => true` or `() => false` if your target
// environments' Symbol capabilities are known, and then use
// dead code elimination on the rest of this module.
//
// Similarly, `isarray` can be aliased to `Array.isArray` if
// available in all target environments.

var isArguments = __webpack_require__("e39c");

if (__webpack_require__("5156")() || __webpack_require__("1696")()) {
	var $iterator = Symbol.iterator;
	// Symbol is available natively or shammed
	// natively:
	//  - Chrome >= 38
	//  - Edge 12-14?, Edge >= 15 for sure
	//  - FF >= 36
	//  - Safari >= 9
	//  - node >= 0.12
	module.exports = function getIterator(iterable) {
		// alternatively, `iterable[$iterator]?.()`
		if (iterable != null && typeof iterable[$iterator] !== 'undefined') {
			return iterable[$iterator]();
		}
		if (isArguments(iterable)) {
			// arguments objects lack Symbol.iterator
			// - node 0.12
			return Array.prototype[$iterator].call(iterable);
		}
	};
} else {
	// Symbol is not available, native or shammed
	var isArray = __webpack_require__("e3db");
	var isString = __webpack_require__("55b2");
	var GetIntrinsic = __webpack_require__("e9ac");
	var $Map = GetIntrinsic('%Map%', true);
	var $Set = GetIntrinsic('%Set%', true);
	var callBound = __webpack_require__("2a1a");
	var $arrayPush = callBound('Array.prototype.push');
	var $charCodeAt = callBound('String.prototype.charCodeAt');
	var $stringSlice = callBound('String.prototype.slice');

	var advanceStringIndex = function advanceStringIndex(S, index) {
		var length = S.length;
		if ((index + 1) >= length) {
			return index + 1;
		}

		var first = $charCodeAt(S, index);
		if (first < 0xD800 || first > 0xDBFF) {
			return index + 1;
		}

		var second = $charCodeAt(S, index + 1);
		if (second < 0xDC00 || second > 0xDFFF) {
			return index + 1;
		}

		return index + 2;
	};

	var getArrayIterator = function getArrayIterator(arraylike) {
		var i = 0;
		return {
			next: function next() {
				var done = i >= arraylike.length;
				var value;
				if (!done) {
					value = arraylike[i];
					i += 1;
				}
				return {
					done: done,
					value: value
				};
			}
		};
	};

	var getNonCollectionIterator = function getNonCollectionIterator(iterable) {
		if (isArray(iterable) || isArguments(iterable)) {
			return getArrayIterator(iterable);
		}
		if (isString(iterable)) {
			var i = 0;
			return {
				next: function next() {
					var nextIndex = advanceStringIndex(iterable, i);
					var value = $stringSlice(iterable, i, nextIndex);
					i = nextIndex;
					return {
						done: nextIndex > iterable.length,
						value: value
					};
				}
			};
		}
	};

	if (!$Map && !$Set) {
		// the only language iterables are Array, String, arguments
		// - Safari <= 6.0
		// - Chrome < 38
		// - node < 0.12
		// - FF < 13
		// - IE < 11
		// - Edge < 11

		module.exports = getNonCollectionIterator;
	} else {
		// either Map or Set are available, but Symbol is not
		// - es6-shim on an ES5 browser
		// - Safari 6.2 (maybe 6.1?)
		// - FF v[13, 36)
		// - IE 11
		// - Edge 11
		// - Safari v[6, 9)

		var isMap = __webpack_require__("fd13");
		var isSet = __webpack_require__("be03");

		// Firefox >= 27, IE 11, Safari 6.2 - 9, Edge 11, es6-shim in older envs, all have forEach
		var $mapForEach = callBound('Map.prototype.forEach', true);
		var $setForEach = callBound('Set.prototype.forEach', true);
		if (typeof process === 'undefined' || !process.versions || !process.versions.node) { // "if is not node"

			// Firefox 17 - 26 has `.iterator()`, whose iterator `.next()` either
			// returns a value, or throws a StopIteration object. These browsers
			// do not have any other mechanism for iteration.
			var $mapIterator = callBound('Map.prototype.iterator', true);
			var $setIterator = callBound('Set.prototype.iterator', true);
			var getStopIterationIterator = function (iterator) {
				var done = false;
				return {
					next: function next() {
						try {
							return {
								done: done,
								value: done ? undefined : iterator.next()
							};
						} catch (e) {
							done = true;
							return {
								done: true,
								value: undefined
							};
						}
					}
				};
			};
		}
		// Firefox 27-35, and some older es6-shim versions, use a string "@@iterator" property
		// this returns a proper iterator object, so we should use it instead of forEach.
		// newer es6-shim versions use a string "_es6-shim iterator_" property.
		var $mapAtAtIterator = callBound('Map.prototype.@@iterator', true) || callBound('Map.prototype._es6-shim iterator_', true);
		var $setAtAtIterator = callBound('Set.prototype.@@iterator', true) || callBound('Set.prototype._es6-shim iterator_', true);

		var getCollectionIterator = function getCollectionIterator(iterable) {
			if (isMap(iterable)) {
				if ($mapIterator) {
					return getStopIterationIterator($mapIterator(iterable));
				}
				if ($mapAtAtIterator) {
					return $mapAtAtIterator(iterable);
				}
				if ($mapForEach) {
					var entries = [];
					$mapForEach(iterable, function (v, k) {
						$arrayPush(entries, [k, v]);
					});
					return getArrayIterator(entries);
				}
			}
			if (isSet(iterable)) {
				if ($setIterator) {
					return getStopIterationIterator($setIterator(iterable));
				}
				if ($setAtAtIterator) {
					return $setAtAtIterator(iterable);
				}
				if ($setForEach) {
					var values = [];
					$setForEach(iterable, function (v) {
						$arrayPush(values, v);
					});
					return getArrayIterator(values);
				}
			}
		};

		module.exports = function getIterator(iterable) {
			return getCollectionIterator(iterable) || getNonCollectionIterator(iterable);
		};
	}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "b2bf":
/***/ (function(module, exports) {


/**
 * Array#filter.
 *
 * @param {Array} arr
 * @param {Function} fn
 * @param {Object=} self
 * @return {Array}
 * @throw TypeError
 */

module.exports = function (arr, fn, self) {
  if (arr.filter) return arr.filter(fn, self);
  if (void 0 === arr || null === arr) throw new TypeError;
  if ('function' != typeof fn) throw new TypeError;
  var ret = [];
  for (var i = 0; i < arr.length; i++) {
    if (!hasOwn.call(arr, i)) continue;
    var val = arr[i];
    if (fn.call(self, val, i, arr)) ret.push(val);
  }
  return ret;
};

var hasOwn = Object.prototype.hasOwnProperty;


/***/ }),

/***/ "b447":
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__("3a38");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "b635":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VueFormBuilderPlugin; });
/* harmony import */ var _installer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2560");
/* harmony import */ var _components_FormBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6a29");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _components_FormBuilder__WEBPACK_IMPORTED_MODULE_1__["a"]; });

/* harmony import */ var _components_FormRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("fbdb");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "d", function() { return _components_FormRenderer__WEBPACK_IMPORTED_MODULE_2__["a"]; });

/* harmony import */ var _skeletons_controls_BaseControlSkeleton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("c72d");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _skeletons_controls_BaseControlSkeleton__WEBPACK_IMPORTED_MODULE_3__["a"]; });

/* harmony import */ var _skeletons_controls_BaseControlConfigSkeleton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("da2a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _skeletons_controls_BaseControlConfigSkeleton__WEBPACK_IMPORTED_MODULE_4__["a"]; });

/* harmony import */ var _assets_v_form_builder_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("c992");
/* harmony import */ var _assets_v_form_builder_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_v_form_builder_css__WEBPACK_IMPORTED_MODULE_5__);





 // Create module definition for Vue.use()

var VueFormBuilderPlugin = {
  install: _installer__WEBPACK_IMPORTED_MODULE_0__[/* VueFormBuilderInstaller */ "a"]
}; // For Browser-Vue's purpose
// Export the VueFormBuilderPlugin to let developers register it later.
// I won't automatically register it, therefore you would have a big chance to
// - Configure the Internal Configuration of the Form
// - Extendable (Registering more controls, Styling Classes,...)
// - ...

if (typeof window !== 'undefined') {
  window.VueFormBuilderPlugin = VueFormBuilderPlugin;
} else if (typeof global !== 'undefined') {
  global.VueFormBuilderPlugin = VueFormBuilderPlugin;
}


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "b8e3":
/***/ (function(module, exports) {

module.exports = true;


/***/ }),

/***/ "ba92":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__("4bf8");
var toAbsoluteIndex = __webpack_require__("77f1");
var toLength = __webpack_require__("9def");

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),

/***/ "bcc7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ FORM_BUILDER_METHODS; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.sort.js
var es6_array_sort = __webpack_require__("55dd");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__("768b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.entries.js
var es7_object_entries = __webpack_require__("ffc1");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./src/configs/section.js + 121 modules
var section = __webpack_require__("dd3c");

// EXTERNAL MODULE: ./src/configs/controls.js + 77 modules
var controls = __webpack_require__("8dbe");

// EXTERNAL MODULE: ./src/configs/form.js
var configs_form = __webpack_require__("22a0");

// EXTERNAL MODULE: ./src/libraries/helper.js
var helper = __webpack_require__("43b3");

// EXTERNAL MODULE: ./src/configs/row.js
var row = __webpack_require__("7d7e");

// CONCATENATED MODULE: ./src/libraries/applier.js








/**
 * Applier is an extending-object to make sure your old form-configuration still working well with the new version
 * @author Phat Tran
 * @param {{formConfig: Object, sections: Array, rows: Object, controls: Object}|undefined} formConfigObject
 * @return {Object} Final Object that can always use with the Form-Builder/Renderer
 */

var applier_dataApplier = function dataApplier(formConfigObject) {
  var appliedObject = {
    formConfig: {},
    sections: {},
    rows: {},
    controls: {}
  }; // base-created-form

  if (!formConfigObject) {
    appliedObject.formConfig = helper["a" /* HELPER */].cloneDeep(configs_form["a" /* FORM_DEFAULT_DATA */]);
    return appliedObject;
  } // Form-Config Apply


  appliedObject.formConfig = Object.assign({}, configs_form["a" /* FORM_DEFAULT_DATA */], formConfigObject.formConfig); // Section(s) Apply

  for (var _i = 0, _Object$entries = Object.entries(formConfigObject.sections); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = Object(slicedToArray["a" /* default */])(_Object$entries[_i], 2),
        sectionId = _Object$entries$_i[0],
        sectionObject = _Object$entries$_i[1];

    appliedObject.sections[sectionId] = baseObjectExtend(section["a" /* SECTION_DEFAULT_DATA */], sectionObject);
  } // Row(s) Apply


  for (var _i2 = 0, _Object$entries2 = Object.entries(formConfigObject.rows); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = Object(slicedToArray["a" /* default */])(_Object$entries2[_i2], 2),
        rowId = _Object$entries2$_i[0],
        rowObject = _Object$entries2$_i[1];

    appliedObject.rows[rowId] = baseObjectExtend(row["a" /* ROW_DEFAULT_DATA */], rowObject);
  } // Control(s) Apply


  for (var _i3 = 0, _Object$entries3 = Object.entries(formConfigObject.controls); _i3 < _Object$entries3.length; _i3++) {
    var _Object$entries3$_i = Object(slicedToArray["a" /* default */])(_Object$entries3[_i3], 2),
        controlId = _Object$entries3$_i[0],
        controlObject = _Object$entries3$_i[1];

    // get type - pick up config of type - merge it with the base
    var type = controlObject.type;
    var baseConfigOfType = controls["a" /* CONTROLS */][type].configData;
    var baseDefaultConfig = baseObjectExtend(controls["b" /* CONTROL_DEFAULT_DATA */], baseConfigOfType); // add to base

    appliedObject.controls[controlId] = Object.assign(baseDefaultConfig, controlObject);
  }

  return appliedObject;
};
/**
 * From A Base Object - We Clone and Extending from a different Object
 * @param {Object} baseObject
 * @param {Object} fromObject
 * @returns {Object}
 */


function baseObjectExtend(baseObject, fromObject) {
  var clonedData = helper["a" /* HELPER */].cloneDeep(baseObject);
  return Object.assign(clonedData, fromObject);
}


// CONCATENATED MODULE: ./src/mixins/form-builder/form-builder-methods.js






/**
 * [Note] Do not use this mixin for other purpose. This is where I move all the code of FormBuilder to keep easy to:
 *  - Structuring
 *  - Refactoring
 *  - ...
 *  This file will keep 90% methods of Form-Builder
 *  @author Phat Tran <phattranminh96@gmail.com>
 */


var FORM_BUILDER_METHODS = {
  data: function data() {
    return {
      sortedSections: []
    };
  },
  methods: {
    /**
     * Do Mapping Before Rendering/Showing Up
     */
    mapping: function mapping(value) {
      this.formData = Object.assign({}, this.formData, applier_dataApplier(value));
      this.doSortSection();
    },

    /**
     * Create Default Form-Config-Data on a new section...
     */
    createDefaultData: function createDefaultData() {
      this.formData = Object.assign({}, applier_dataApplier(this.formData));
    },

    /**
     * Create a new Blank Section into the Big `sections`
     */
    addSection: function addSection(sectionType) {
      var newSortOrder = Object.keys(this.formData.sections).length + 1;
      var sectionObject = Object(section["c" /* createNewSection */])(sectionType, newSortOrder); // we have to push it from $set otherwise it will not reactive (LOL)

      this.$set(this.formData.sections, sectionObject.uniqueId, sectionObject);
      this.doSortSection();
    },

    /**
     * Sort Section and Cache it...
     */
    doSortSection: function doSortSection() {
      this.sortedSections = [];

      for (var _i = 0, _Object$entries = Object.entries(this.formData.sections); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = Object(slicedToArray["a" /* default */])(_Object$entries[_i], 2),
            sectionId = _Object$entries$_i[0],
            sectionObject = _Object$entries$_i[1];

        this.sortedSections.push(sectionObject);
      }

      this.sortedSections.sort(function (a, b) {
        return a.sortOrder - b.sortOrder;
      });
    }
  }
};


/***/ }),

/***/ "bd25":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isMap = __webpack_require__("fd13");
var isSet = __webpack_require__("be03");
var isWeakMap = __webpack_require__("e3e3");
var isWeakSet = __webpack_require__("a101");

module.exports = function whichCollection(value) {
	if (value && typeof value === 'object') {
		if (isMap(value)) {
			return 'Map';
		}
		if (isSet(value)) {
			return 'Set';
		}
		if (isWeakMap(value)) {
			return 'WeakMap';
		}
		if (isWeakSet(value)) {
			return 'WeakSet';
		}
	}
	return false;
};


/***/ }),

/***/ "bd86":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("85f2");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "be03":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Set) {
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// `Set` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$setHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isSet(x) {
		// `Set` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isSet(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$setHas.call(x);
		if ($mapHas) {
			try {
				$mapHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $Set; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};


/***/ }),

/***/ "be13":
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "bf0b":
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__("355d");
var createDesc = __webpack_require__("aebd");
var toIObject = __webpack_require__("36c3");
var toPrimitive = __webpack_require__("1bc3");
var has = __webpack_require__("07e3");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__("8e60") ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),

/***/ "bfad":
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),

/***/ "c15a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var getPolyfill = __webpack_require__("5834");
var define = __webpack_require__("f367");

module.exports = function shimObjectIs() {
	var polyfill = getPolyfill();
	define(Object, { is: polyfill }, {
		is: function testObjectIs() {
			return Object.is !== polyfill;
		}
	});
	return polyfill;
};


/***/ }),

/***/ "c207":
/***/ (function(module, exports) {



/***/ }),

/***/ "c366":
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__("6821");
var toLength = __webpack_require__("9def");
var toAbsoluteIndex = __webpack_require__("77f1");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "c367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("8436");
var step = __webpack_require__("50ed");
var Iterators = __webpack_require__("481b");
var toIObject = __webpack_require__("36c3");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("30f1")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "c3a1":
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__("e6f3");
var enumBugKeys = __webpack_require__("1691");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "c69a":
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__("9e1e") && !__webpack_require__("79e5")(function () {
  return Object.defineProperty(__webpack_require__("230e")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "c72d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_control_field_extend_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("653e");
/**
 * Control Skeleton
 * To extend for creating new custom control
 */

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "BaseControlSkeleton",
  mixins: [_mixins_control_field_extend_mixin__WEBPACK_IMPORTED_MODULE_0__[/* CONTROL_FIELD_EXTEND_MIXIN */ "a"]]
});

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

/***/ "c8ba6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__("16e7");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "c8bb":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("54a1");

/***/ }),

/***/ "c992":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "ca5a":
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "caca":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALERT_DIALOG; });
var ALERT_DIALOG = {
  /**
   * Show Alert Dialog
   * @param message
   * @param stopTime
   */
  show: function show(message) {
    var stopTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3000;
    var alert = document.createElement('div');
    alert.className = 'v-form-alert';
    alert.innerText = message;
    document.getElementsByTagName('body')[0].append(alert);
    setTimeout(function () {
      alert.remove();
    }, stopTime || 3000);
  }
};


/***/ }),

/***/ "cadf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__("9c6c");
var step = __webpack_require__("d53b");
var Iterators = __webpack_require__("84f2");
var toIObject = __webpack_require__("6821");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__("01f9")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "cb7c":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "cbce":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SIDEBAR_BODY_MIXIN; });
/* harmony import */ var _libraries_alert_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("caca");

var SIDEBAR_BODY_MIXIN = {
  props: {
    /**
     * Data Object that you will use for the Component inner Sidebar body
     * Normally, you need to create your own `data` field and emit it later.
     */
    dataPackage: Object,

    /**
     * Main Form-Data from the Parent.
     * There might be some Configuration need these data.
     */
    formData: Object
  },
  data: function data() {
    return {
      /**
       * Ideally, you have put override this key. It will be used to access your data to send it back to your component
       * @example For SidebarFormConfiguration. I created `formConfiguration` data field. And I will handle all data-changing stuff
       * only in `formConfiguration`. And that will be the data I need to send it back to the right component.
       * @required
       */
      dataKey: ""
    };
  },
  methods: {
    /**
     * Close the sidebar without fire any events
     */
    close: function close() {
      this.$emit(this.emitCloseKey, false);
    },

    /**
     * Save the configuration (Actually I will close the sidebar and emit event =)) )
     */
    save: function save() {
      var close = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var data = this[this.dataKey]; // pre-validation?

      if (this.preSaveValidation) {
        var validationErrorMessage = this.preSaveValidation(); // if has validation error => show error text and stop the submit process

        if (validationErrorMessage) {
          _libraries_alert_dialog__WEBPACK_IMPORTED_MODULE_0__[/* ALERT_DIALOG */ "a"].show(validationErrorMessage);
          return;
        }
      }

      if (close) {
        this.$emit(this.emitSaveAndCloseKey, data);
      } else {
        this.$emit(this.emitSaveKey, data);
      }
    }
  },
  computed: {
    /**
     * Emit-Key to parent to close the sidebar
     * @returns {string}
     */
    emitCloseKey: function emitCloseKey() {
      return 'close';
    },

    /**
     * Emit-Key to the parent to save the result
     * @returns {string}
     */
    emitSaveKey: function emitSaveKey() {
      return 'save';
    },

    /**
     * Emit-Key - Save and Close
     * @returns {string}
     */
    emitSaveAndCloseKey: function emitSaveAndCloseKey() {
      return 'saveAndClose';
    }
  }
};


/***/ }),

/***/ "ccb9":
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__("5168");


/***/ }),

/***/ "cd1c":
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__("e853");

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),

/***/ "ce10":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("69a8");
var toIObject = __webpack_require__("6821");
var arrayIndexOf = __webpack_require__("c366")(false);
var IE_PROTO = __webpack_require__("613b")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "d225":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "d2c8":
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__("aae3");
var defined = __webpack_require__("be13");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "d2d5":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("549b");
module.exports = __webpack_require__("584a").Array.from;


/***/ }),

/***/ "d3f4":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "d4ab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "d4c0":
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__("0d58");
var gOPS = __webpack_require__("2621");
var pIE = __webpack_require__("52a7");
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),

/***/ "d53b":
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "d60e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STYLES; });
/**
 * Styling for Vue-Form-Builder
 * Mostly it about the Container class.
 * <note>
 * The classes can be re-placed in run-time (For other CSS framework if you want)
 * But the main ideas is following Bootstrap, hopefully yours framework is have a same structural.
 * </note>
 * @author Phat Tran
 */
var STYLES = {
  CONTAINER: {
    FLUID: "container-fluid md-layout",
    NORMAL: "container"
  },
  ROW: "row md-layout",
  COLUMNS: {
    COL1: "col-md-1 md-layout-item md-size-5",
    COL2: "col-md-2 md-layout-item md-size-10",
    COL3: "col-md-3 md-layout-item md-size-25",
    COL4: "col-md-4 md-layout-item md-size-33",
    COL5: "col-md-5 md-layout-item md-size-40",
    COL6: "col-md-6 md-layout-item md-size-50",
    COL7: "col-md-7 md-layout-item md-size-60",
    COL8: "col-md-8 md-layout-item md-size-66",
    COL9: "col-md-9 md-layout-item md-size-75",
    COL10: "col-md-10 md-layout-item md-size-90",
    COL11: "col-md-11 md-layout-item md-size-95",
    COL12: "col-md-12 md-layout-item md-size-100"
  },

  /**
   * List Group Classes - Used in AddSectionVueControl
   */
  LIST_GROUP: {
    CONTAINER: "list-group md-list",
    // div.list-group
    SINGLE_ITEM: "list-group-item list-group-item-action md-list-item md-list-item-action" //a[href=...].list-group-item.list-group-item-action

  },

  /**
   * Button Classes
   */
  BUTTON: {
    PRIMARY: "btn btn-primary md-button md-raised md-primary md-theme-default",
    SECONDARY: "btn btn-secondary md-button md-raised md-secondary md-theme-default",
    DEFAULT: "btn btn-default md-button md-raised md-default md-theme-default",
    SUCCESS: "btn btn-success md-button md-raised md-success md-theme-default",
    DANGER: "btn btn-danger md-button md-raised md-accent md-theme-default",
    WARNING: "btn btn-warning md-button md-raised md-warning md-theme-default",
    INFO: "btn btn-info md-button md-raised md-info md-theme-default"
  },

  /**
   * Form Classes
   */
  FORM: {
    FORM_GROUP: "form-group",
    INPUT_GROUP: "input-group",
    FORM_CONTROL: "form-control md-field",
    ERROR_OUTLINE: "is-invalid md-error",
    ERROR_MESSAGE: "invalid-feedback"
  },

  /**
   * Table Classes
   */
  TABLE: {
    TABLE_CLASS: "table md-table",
    TR_CLASS: "md-table-row",
    TD_CLASS: "md-table-cell"
  },

  /**
   * Text classes
   */
  TEXT_TRANSFORM: {
    UPPERCASE: "text-uppercase",
    LOWERCASE: "text-lowercase",
    CAPITALIZE: "text-capitalize",
    NONE: ""
  }
};


/***/ }),

/***/ "d6c7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__("d4ab");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__("b189");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "d6ef":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var numberIsNaN = function (value) {
	return value !== value;
};

module.exports = function is(a, b) {
	if (a === 0 && b === 0) {
		return 1 / a === 1 / b;
	}
	if (a === b) {
		return true;
	}
	if (numberIsNaN(a) && numberIsNaN(b)) {
		return true;
	}
	return false;
};



/***/ }),

/***/ "d864":
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__("79aa");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
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

/***/ "d8d6":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1654");
__webpack_require__("6c1c");
module.exports = __webpack_require__("ccb9").f('iterator');


/***/ }),

/***/ "d8d8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasSymbols = __webpack_require__("5156")();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';
var regexExec;
var isRegexMarker;
var badStringifier;

if (hasToStringTag) {
	regexExec = Function.call.bind(RegExp.prototype.exec);
	isRegexMarker = {};

	var throwRegexMarker = function () {
		throw isRegexMarker;
	};
	badStringifier = {
		toString: throwRegexMarker,
		valueOf: throwRegexMarker
	};

	if (typeof Symbol.toPrimitive === 'symbol') {
		badStringifier[Symbol.toPrimitive] = throwRegexMarker;
	}
}

var toStr = Object.prototype.toString;
var regexClass = '[object RegExp]';

module.exports = hasToStringTag
	// eslint-disable-next-line consistent-return
	? function isRegex(value) {
		if (!value || typeof value !== 'object') {
			return false;
		}

		try {
			regexExec(value, badStringifier);
		} catch (e) {
			return e === isRegexMarker;
		}
	}
	: function isRegex(value) {
		// In older browsers, typeof regex incorrectly returns 'function'
		if (!value || (typeof value !== 'object' && typeof value !== 'function')) {
			return false;
		}

		return toStr.call(value) === regexClass;
	};


/***/ }),

/***/ "d8e8":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "d9f6":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("e4ae");
var IE8_DOM_DEFINE = __webpack_require__("794b");
var toPrimitive = __webpack_require__("1bc3");
var dP = Object.defineProperty;

exports.f = __webpack_require__("8e60") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "da2a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _mixins_control_special_config_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8ae1");

/* harmony default export */ __webpack_exports__["a"] = ({
  name: "BaseControlConfigSkeleton",
  mixins: [_mixins_control_special_config_mixin__WEBPACK_IMPORTED_MODULE_0__[/* CONTROL_SPECIAL_CONFIG_MIXIN */ "a"]]
});

/***/ }),

/***/ "dbdb":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("584a");
var global = __webpack_require__("e53d");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__("b8e3") ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "dcbc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("2aba");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "dd3c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* binding */ SECTION_TYPES; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ SECTION_DEFAULT_DATA; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* binding */ createNewSection; });

// EXTERNAL MODULE: ./src/libraries/helper.js
var helper = __webpack_require__("43b3");

// EXTERNAL MODULE: ./src/configs/row.js
var row = __webpack_require__("7d7e");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/section-views/NormalSectionView.vue?vue&type=template&id=0cc531ba&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"normal-section"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.section.isShowHeadline),expression:"section.isShowHeadline"}],staticClass:"headline-block p5"},[_c('h2',{class:_vm.section.headlineAdditionalClass,domProps:{"textContent":_vm._s(_vm.section.headline)}}),_c('p',{class:_vm.section.subHeadlineAdditionalClass,domProps:{"textContent":_vm._s(_vm.section.subHeadline)}})]),_c('draggable',{class:_vm.draggableClasses,attrs:{"ghost-class":"ghost","handle":_vm.dragControlHandle,"list":_vm.section.controls,"group":_vm.dragGroup,"disabled":!_vm.permissions.canReOrderingControl}},[_vm._l((_vm.section.controls),function(controlId){return _c('ControlView',{key:controlId,attrs:{"control":_vm.controls[controlId],"parent-id":_vm.section.uniqueId,"permissions":_vm.permissions}})}),(!_vm.hasControl)?_c('p',[_vm._v(" Droppable Zone / Controls will be showed here... ")]):_vm._e()],2),(_vm.permissions.canAddControl)?_c('AddControlControl',{attrs:{"section":_vm.section}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/section-views/NormalSectionView.vue?vue&type=template&id=0cc531ba&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/add-controls/AddRowControl.vue?vue&type=template&id=12c0063a&scoped=true&
var AddRowControlvue_type_template_id_12c0063a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"add-row-outer"},[_c('div',{staticClass:"add-row-container",class:_vm.styles.COLUMNS.COL12,on:{"click":_vm.addNew}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('addOutline', '32px', '32px', '#000'))}}),_c('span',[_vm._v("Add Row")])])])}
var AddRowControlvue_type_template_id_12c0063a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/add-controls/AddRowControl.vue?vue&type=template&id=12c0063a&scoped=true&

// EXTERNAL MODULE: ./src/configs/styles.js
var styles = __webpack_require__("d60e");

// EXTERNAL MODULE: ./src/mixins/style-injection-mixin.js
var style_injection_mixin = __webpack_require__("28fe");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/add-controls/AddRowControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//


/* harmony default export */ var AddRowControlvue_type_script_lang_js_ = ({
  name: "AddRowControl",
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    /**
     * Add a new row by notify the parent...
     */
    addNew: function addNew() {
      this.$emit('addRowNotify', true);
    }
  }
});
// CONCATENATED MODULE: ./src/views/builder/add-controls/AddRowControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var add_controls_AddRowControlvue_type_script_lang_js_ = (AddRowControlvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/builder/add-controls/AddRowControl.vue





/* normalize component */

var AddRowControl_component = Object(componentNormalizer["a" /* default */])(
  add_controls_AddRowControlvue_type_script_lang_js_,
  AddRowControlvue_type_template_id_12c0063a_scoped_true_render,
  AddRowControlvue_type_template_id_12c0063a_scoped_true_staticRenderFns,
  false,
  null,
  "12c0063a",
  null
  
)

/* harmony default export */ var AddRowControl = (AddRowControl_component.exports);
// EXTERNAL MODULE: ./src/configs/events.js
var events = __webpack_require__("fbe6");

// EXTERNAL MODULE: ./node_modules/vuedraggable/dist/vuedraggable.common.js
var vuedraggable_common = __webpack_require__("310e");
var vuedraggable_common_default = /*#__PURE__*/__webpack_require__.n(vuedraggable_common);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/add-controls/AddControlControl.vue?vue&type=template&id=438725ce&
var AddControlControlvue_type_template_id_438725ce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"add-control-outer",class:_vm.styles.COLUMNS.COL12},[_c('div',{staticClass:"add-control-container",on:{"click":_vm.openAddControl}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('addOutline', '32px', '32px', '#000'))}}),_c('span',[_vm._v("Add Control")])])])}
var AddControlControlvue_type_template_id_438725ce_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/add-controls/AddControlControl.vue?vue&type=template&id=438725ce&

// EXTERNAL MODULE: ./src/libraries/sidebar-renderer.class.js
var sidebar_renderer_class = __webpack_require__("1ec8");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/SidebarControlSelectList.vue?vue&type=template&id=01c01b26&scoped=true&
var SidebarControlSelectListvue_type_template_id_01c01b26_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar-form-configuration"},[_c('h5',[_vm._v("Add Control to your Section")]),_c('div',{class:[_vm.styles.LIST_GROUP.CONTAINER]},_vm._l((_vm.controlTypes),function(controlInfo,controlKey){return _c('a',{directives:[{name:"show",rawName:"v-show",value:(!controlInfo.isHidden),expression:"!controlInfo.isHidden"}],class:_vm.styles.LIST_GROUP.SINGLE_ITEM,attrs:{"href":"javascript:void(0)"},on:{"click":function($event){return _vm.selectedControl(controlKey)}}},[_c('p',{staticClass:"type-headline",domProps:{"textContent":_vm._s(controlInfo.name)}}),_c('p',{staticClass:"type-desc",domProps:{"textContent":_vm._s(controlInfo.description)}})])}),0)])}
var SidebarControlSelectListvue_type_template_id_01c01b26_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/SidebarControlSelectList.vue?vue&type=template&id=01c01b26&scoped=true&

// EXTERNAL MODULE: ./src/configs/controls.js + 77 modules
var controls = __webpack_require__("8dbe");

// EXTERNAL MODULE: ./src/mixins/sidebar-body-mixin.js
var sidebar_body_mixin = __webpack_require__("cbce");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/SidebarControlSelectList.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var SidebarControlSelectListvue_type_script_lang_js_ = ({
  name: "SidebarControlSelectList",
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */], sidebar_body_mixin["a" /* SIDEBAR_BODY_MIXIN */]],
  computed: {
    controlTypes: function controlTypes() {
      return controls["a" /* CONTROLS */];
    }
  },
  data: function data() {
    return {
      dataKey: "newControlData",
      newControlData: null
    };
  },
  methods: {
    /**
     * Selected a control => we will generate a new control data then emit it to the section
     * @param controlKey
     */
    selectedControl: function selectedControl(controlKey) {
      if (!controls["a" /* CONTROLS */][controlKey]) {
        alert("Control ".concat(controlKey, " doesn't exists in Vue-Form-Builder"));
        return;
      } // create


      this.newControlData = Object(controls["c" /* createControlData */])(controlKey);
      this.save(true);
    }
  }
});
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/SidebarControlSelectList.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_config_views_SidebarControlSelectListvue_type_script_lang_js_ = (SidebarControlSelectListvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/SidebarControlSelectList.vue





/* normalize component */

var SidebarControlSelectList_component = Object(componentNormalizer["a" /* default */])(
  sidebar_config_views_SidebarControlSelectListvue_type_script_lang_js_,
  SidebarControlSelectListvue_type_template_id_01c01b26_scoped_true_render,
  SidebarControlSelectListvue_type_template_id_01c01b26_scoped_true_staticRenderFns,
  false,
  null,
  "01c01b26",
  null
  
)

/* harmony default export */ var SidebarControlSelectList = (SidebarControlSelectList_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/add-controls/AddControlControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//




/* harmony default export */ var AddControlControlvue_type_script_lang_js_ = ({
  name: "AddControlControl",
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  props: {
    section: {
      type: Object,
      required: true
    } // TODO: Need to extend: Row too.

  },
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    /**
     * Open the sidebar to add control yeah yeah
     */
    openAddControl: function openAddControl() {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPEN, this.runnerId);
    },

    /**
     * Render the sidebar if can be opened hehe
     */
    afterOpenedSidebar: function afterOpenedSidebar(runnerId) {
      if (runnerId !== this.runnerId) {
        return;
      } // render


      this.renderSidebar();
    },

    /**
     * Trigger this to render the GlobalSidebar for Select Controls
     */
    renderSidebar: function renderSidebar() {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.INJECT, new sidebar_renderer_class["a" /* default */](this.runnerId, SidebarControlSelectList, this.section));
    },

    /**
     * After user chose a control. This will be invoked in order to create a new control
     */
    createNewControlForSection: function createNewControlForSection(runnerId, controlObj) {
      // runnerId to check the right identifier of the Invoker
      // uniqueId to check if we create new control or not
      if (this.runnerId !== runnerId) {
        return;
      } // emit to FormBuilder and let it create control...
      // TODO: Need to extend - For Rows


      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.CONTROL.CREATE, this.section.uniqueId, controlObj);
    }
  },
  computed: {
    /**
     * Runner ID to detect the right
     * @returns {string}
     */
    runnerId: function runnerId() {
      return "add-control-".concat(this.section.uniqueId);
    }
  },
  created: function created() {
    // listen to Global Sidebar
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPENED, this.afterOpenedSidebar);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.SAVE_AND_CLOSE, this.createNewControlForSection);
  }
});
// CONCATENATED MODULE: ./src/views/builder/add-controls/AddControlControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var add_controls_AddControlControlvue_type_script_lang_js_ = (AddControlControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/add-controls/AddControlControl.vue





/* normalize component */

var AddControlControl_component = Object(componentNormalizer["a" /* default */])(
  add_controls_AddControlControlvue_type_script_lang_js_,
  AddControlControlvue_type_template_id_438725ce_render,
  AddControlControlvue_type_template_id_438725ce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddControlControl = (AddControlControl_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/ControlView.vue?vue&type=template&id=02aa9a22&
var ControlViewvue_type_template_id_02aa9a22_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.control.containerClass, 'control-view-wrapper', _vm.control.additionalContainerClass]},[_c('div',{staticClass:"control-view",class:{'active': _vm.isActive}},[_c('ControlLabel',{directives:[{name:"show",rawName:"v-show",value:(_vm.control.isShowLabel),expression:"control.isShowLabel"}],attrs:{"control":_vm.control}}),_c(_vm.controlComponent,{tag:"component",attrs:{"control":_vm.control}})],1),_c('ControlOption',{attrs:{"permissions":_vm.permissions},on:{"delete":_vm.deleteControl,"config":_vm.openConfiguration}})],1)}
var ControlViewvue_type_template_id_02aa9a22_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/ControlView.vue?vue&type=template&id=02aa9a22&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/control-views/ControlLabel.vue?vue&type=template&id=0d7b3c04&scoped=true&
var ControlLabelvue_type_template_id_0d7b3c04_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"control-label-container"},[_c('label',{class:_vm.control.additionalLabelClass,attrs:{"for":_vm.control.uniqueId},domProps:{"textContent":_vm._s(_vm.control.label)}}),(_vm.control.subLabel)?_c('br'):_vm._e(),(_vm.control.subLabel)?_c('small',{domProps:{"textContent":_vm._s(_vm.control.subLabel)}}):_vm._e()])}
var ControlLabelvue_type_template_id_0d7b3c04_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/control-views/ControlLabel.vue?vue&type=template&id=0d7b3c04&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/control-views/ControlLabel.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ControlLabelvue_type_script_lang_js_ = ({
  name: "ControlLabel",
  props: {
    control: {
      type: Object,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/views/builder/control-views/ControlLabel.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_views_ControlLabelvue_type_script_lang_js_ = (ControlLabelvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/views/builder/control-views/ControlLabel.vue?vue&type=style&index=0&id=0d7b3c04&scoped=true&lang=css&
var ControlLabelvue_type_style_index_0_id_0d7b3c04_scoped_true_lang_css_ = __webpack_require__("7d9f");

// CONCATENATED MODULE: ./src/views/builder/control-views/ControlLabel.vue






/* normalize component */

var ControlLabel_component = Object(componentNormalizer["a" /* default */])(
  control_views_ControlLabelvue_type_script_lang_js_,
  ControlLabelvue_type_template_id_0d7b3c04_scoped_true_render,
  ControlLabelvue_type_template_id_0d7b3c04_scoped_true_staticRenderFns,
  false,
  null,
  "0d7b3c04",
  null
  
)

/* harmony default export */ var ControlLabel = (ControlLabel_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/control-views/ControlOption.vue?vue&type=template&id=0c360d12&
var ControlOptionvue_type_template_id_0c360d12_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"control-option-container"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.permissions.canReOrderingControl),expression:"permissions.canReOrderingControl"}],staticClass:"option-control drag-item",attrs:{"title":"Re-position / Drag"}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('navigationMore', '24px', '24px', '#f1c40f'))}})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.permissions.canEditControl),expression:"permissions.canEditControl"}],staticClass:"option-control",attrs:{"title":"Control Configuration"},on:{"click":_vm.clickedConfiguration}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('cog', '24px', '24px', '#3498db'))}})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.permissions.canDeleteControl),expression:"permissions.canDeleteControl"}],staticClass:"option-control",attrs:{"title":"Delete Control"},on:{"click":_vm.clickedDelete}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('trash', '24px', '24px', '#e74c3c'))}})])])}
var ControlOptionvue_type_template_id_0c360d12_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/control-views/ControlOption.vue?vue&type=template&id=0c360d12&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/control-views/ControlOption.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ControlOptionvue_type_script_lang_js_ = ({
  name: "ControlOption",
  props: {
    permissions: Object
  },
  methods: {
    /**
     * Emit to parent to delete this control...
     */
    clickedDelete: function clickedDelete() {
      this.$emit('delete', true);
    },

    /**
     * Emit to parent to open the configuration
     */
    clickedConfiguration: function clickedConfiguration() {
      this.$emit('config', true);
    }
  }
});
// CONCATENATED MODULE: ./src/views/builder/control-views/ControlOption.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_views_ControlOptionvue_type_script_lang_js_ = (ControlOptionvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/control-views/ControlOption.vue





/* normalize component */

var ControlOption_component = Object(componentNormalizer["a" /* default */])(
  control_views_ControlOptionvue_type_script_lang_js_,
  ControlOptionvue_type_template_id_0c360d12_render,
  ControlOptionvue_type_template_id_0c360d12_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ControlOption = (ControlOption_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/SidebarControlConfiguration.vue?vue&type=template&id=6e0787c7&
var SidebarControlConfigurationvue_type_template_id_6e0787c7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"sidebar-form-configuration"},[_c('h5',[_vm._v("Control Configuration")]),(_vm.permissions.canUpdateControlBasicDetail)?_c('ControlBasicInformation',{attrs:{"control":_vm.control}}):_vm._e(),(_vm.permissions.canUpdateControlStyling)?_c('ControlStylingInformation',{attrs:{"control":_vm.control}}):_vm._e(),(_vm.specificConfigurationView && _vm.permissions.canUpdateControlSpecialConfiguration)?_c('SidebarToggleableContainer',{attrs:{"headline":"Control Specific Configuration"}},[_c(_vm.specificConfigurationView,{tag:"component",attrs:{"formData":_vm.formData,"control":_vm.control}})],1):_vm._e(),(!_vm.isValidationDisabled && _vm.permissions.canUpdateControlValidation)?_c('ControlValidationInformation',{attrs:{"control":_vm.control}}):_vm._e(),_c('div',{staticClass:"buttons"},[_c('button',{class:_vm.styles.BUTTON.PRIMARY,on:{"click":function($event){return _vm.save(false)}}},[_vm._v(" Save ")]),_c('button',{class:_vm.styles.BUTTON.INFO,on:{"click":function($event){return _vm.save(true)}}},[_vm._v(" Save & Close ")])])],1)}
var SidebarControlConfigurationvue_type_template_id_6e0787c7_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/SidebarControlConfiguration.vue?vue&type=template&id=6e0787c7&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/container-views/SidebarToggleableContainer.vue?vue&type=template&id=5f21ce2a&
var SidebarToggleableContainervue_type_template_id_5f21ce2a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toggleable-section"},[_c('div',{staticClass:"headline-block"},[_c('h5',[_c('span',{staticClass:"toggle-item",domProps:{"innerHTML":_vm._s(_vm.isVisible ? _vm.iconClose : _vm.iconOpen)},on:{"click":function($event){_vm.isVisible = !_vm.isVisible}}}),_c('span',{domProps:{"textContent":_vm._s(_vm.headline)}}),_c('small',{staticClass:"toggleable-sub-headline",domProps:{"textContent":_vm._s(_vm.subHeadline)}})])]),_c('transition',{attrs:{"name":"slide"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}]},[_vm._t("default")],2)])],1)}
var SidebarToggleableContainervue_type_template_id_5f21ce2a_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/container-views/SidebarToggleableContainer.vue?vue&type=template&id=5f21ce2a&

// CONCATENATED MODULE: ./src/mixins/toggleable-mixin.js
/**
 * Toggleable Mixin - Same Methods/Properties would be use for Toggleable container
 *
 */
var TOGGLEABLE_MIXIN = {
  data: function data() {
    return {
      isVisible: true
    };
  },
  computed: {
    iconColor: function iconColor() {
      return '#000';
    },
    iconSize: function iconSize() {
      return '32px';
    },
    iconClose: function iconClose() {
      return this.$form.getIcon('chevronUp', this.iconSize, this.iconSize, this.iconColor);
    },
    iconOpen: function iconOpen() {
      return this.$form.getIcon('chevronDown', this.iconSize, this.iconSize, this.iconColor);
    }
  }
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/container-views/SidebarToggleableContainer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * Normal ToggleableContainer to use anywhere
 * Not used for Toggleable Renderer...
 */

/* harmony default export */ var SidebarToggleableContainervue_type_script_lang_js_ = ({
  name: "SidebarToggleableContainer",
  mixins: [TOGGLEABLE_MIXIN],
  props: {
    headline: {
      type: String
    },
    subHeadline: {
      type: String
    },
    initialOpen: {
      type: Boolean,
      default: true
    }
  },
  created: function created() {
    if (!this.initialOpen) {
      this.isVisible = false;
    }
  }
});
// CONCATENATED MODULE: ./src/views/container-views/SidebarToggleableContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var container_views_SidebarToggleableContainervue_type_script_lang_js_ = (SidebarToggleableContainervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/container-views/SidebarToggleableContainer.vue





/* normalize component */

var SidebarToggleableContainer_component = Object(componentNormalizer["a" /* default */])(
  container_views_SidebarToggleableContainervue_type_script_lang_js_,
  SidebarToggleableContainervue_type_template_id_5f21ce2a_render,
  SidebarToggleableContainervue_type_template_id_5f21ce2a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarToggleableContainer = (SidebarToggleableContainer_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/control-configuration-views/ControlBasicInformation.vue?vue&type=template&id=e62e8db6&scoped=true&
var ControlBasicInformationvue_type_template_id_e62e8db6_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SidebarToggleableContainer',{attrs:{"headline":"Basic Detail"}},[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Unique ID")]),_c('input',{class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text","readonly":""},domProps:{"value":_vm.control.uniqueId}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Name (Must be unique)")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.name),expression:"control.name"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.control.name)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "name", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Label")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.label),expression:"control.label"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.control.label)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "label", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Sub-label")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.subLabel),expression:"control.subLabel"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.control.subLabel)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "subLabel", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Show Label? "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.isShowLabel),expression:"control.isShowLabel"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.control.isShowLabel)?_vm._i(_vm.control.isShowLabel,null)>-1:(_vm.control.isShowLabel)},on:{"change":function($event){var $$a=_vm.control.isShowLabel,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.control, "isShowLabel", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.control, "isShowLabel", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.control, "isShowLabel", $$c)}}}})])]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Disabled? "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.isDisabled),expression:"control.isDisabled"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.control.isDisabled)?_vm._i(_vm.control.isDisabled,null)>-1:(_vm.control.isDisabled)},on:{"change":function($event){var $$a=_vm.control.isDisabled,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.control, "isDisabled", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.control, "isDisabled", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.control, "isDisabled", $$c)}}}})])]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Uppercase mode? "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.isUpperCaseMode),expression:"control.isUpperCaseMode"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.control.isUpperCaseMode)?_vm._i(_vm.control.isUpperCaseMode,null)>-1:(_vm.control.isUpperCaseMode)},on:{"change":function($event){var $$a=_vm.control.isUpperCaseMode,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.control, "isUpperCaseMode", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.control, "isUpperCaseMode", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.control, "isUpperCaseMode", $$c)}}}})])]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v(" Hide in Report? "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.hideOnReport),expression:"control.hideOnReport"}],attrs:{"type":"checkbox"},domProps:{"checked":Array.isArray(_vm.control.hideOnReport)?_vm._i(_vm.control.hideOnReport,null)>-1:(_vm.control.hideOnReport)},on:{"change":function($event){var $$a=_vm.control.hideOnReport,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=null,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.$set(_vm.control, "hideOnReport", $$a.concat([$$v])))}else{$$i>-1&&(_vm.$set(_vm.control, "hideOnReport", $$a.slice(0,$$i).concat($$a.slice($$i+1))))}}else{_vm.$set(_vm.control, "hideOnReport", $$c)}}}})])]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Field Placeholder (Optional)")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.placeholderText),expression:"control.placeholderText"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.control.placeholderText)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "placeholderText", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Default Value (Optional)")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.defaultValue),expression:"control.defaultValue"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.control.defaultValue)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "defaultValue", $event.target.value)}}})])])}
var ControlBasicInformationvue_type_template_id_e62e8db6_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/control-configuration-views/ControlBasicInformation.vue?vue&type=template&id=e62e8db6&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/control-configuration-views/ControlBasicInformation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ControlBasicInformationvue_type_script_lang_js_ = ({
  name: "ControlBasicInformation",
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  components: {
    SidebarToggleableContainer: SidebarToggleableContainer
  },
  props: {
    control: Object
  }
});
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/control-configuration-views/ControlBasicInformation.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_configuration_views_ControlBasicInformationvue_type_script_lang_js_ = (ControlBasicInformationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/control-configuration-views/ControlBasicInformation.vue





/* normalize component */

var ControlBasicInformation_component = Object(componentNormalizer["a" /* default */])(
  control_configuration_views_ControlBasicInformationvue_type_script_lang_js_,
  ControlBasicInformationvue_type_template_id_e62e8db6_scoped_true_render,
  ControlBasicInformationvue_type_template_id_e62e8db6_scoped_true_staticRenderFns,
  false,
  null,
  "e62e8db6",
  null
  
)

/* harmony default export */ var ControlBasicInformation = (ControlBasicInformation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/control-configuration-views/ControlStylingInformation.vue?vue&type=template&id=542aa07f&scoped=true&
var ControlStylingInformationvue_type_template_id_542aa07f_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SidebarToggleableContainer',{attrs:{"headline":"Styling/Classes"}},[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Container Size Class")]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.containerClass),expression:"control.containerClass"}],class:_vm.styles.FORM.FORM_CONTROL,on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.control, "containerClass", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.containerClasses),function(className,classID){return _c('option',{key:className,domProps:{"value":className}},[_vm._v(" "+_vm._s(classID)+" ("+_vm._s(className)+") ")])}),0)]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Container Additional Classes")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.additionalContainerClass),expression:"control.additionalContainerClass"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.control.additionalContainerClass)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "additionalContainerClass", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Control Text Transform")]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.textTransformClass),expression:"control.textTransformClass"}],class:_vm.styles.FORM.FORM_CONTROL,on:{"change":function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(_vm.control, "textTransformClass", $event.target.multiple ? $$selectedVal : $$selectedVal[0])}}},_vm._l((_vm.textTransformClasses),function(className,classID){return _c('option',{key:className,domProps:{"value":className}},[_vm._v(" "+_vm._s(classID)+" ("+_vm._s(className)+") ")])}),0)]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Control Field Additional Classes")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.additionalFieldClass),expression:"control.additionalFieldClass"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.control.additionalFieldClass)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "additionalFieldClass", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Control-Label Additional Classes")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.control.additionalLabelClass),expression:"control.additionalLabelClass"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.control.additionalLabelClass)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.control, "additionalLabelClass", $event.target.value)}}})])])}
var ControlStylingInformationvue_type_template_id_542aa07f_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/control-configuration-views/ControlStylingInformation.vue?vue&type=template&id=542aa07f&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/control-configuration-views/ControlStylingInformation.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ControlStylingInformationvue_type_script_lang_js_ = ({
  name: "ControlStylingInformation",
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  components: {
    SidebarToggleableContainer: SidebarToggleableContainer
  },
  props: {
    control: Object
  },
  computed: {
    containerClasses: function containerClasses() {
      return this.styles.COLUMNS;
    },
    textTransformClasses: function textTransformClasses() {
      return this.styles.TEXT_TRANSFORM;
    }
  }
});
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/control-configuration-views/ControlStylingInformation.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_configuration_views_ControlStylingInformationvue_type_script_lang_js_ = (ControlStylingInformationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/control-configuration-views/ControlStylingInformation.vue





/* normalize component */

var ControlStylingInformation_component = Object(componentNormalizer["a" /* default */])(
  control_configuration_views_ControlStylingInformationvue_type_script_lang_js_,
  ControlStylingInformationvue_type_template_id_542aa07f_scoped_true_render,
  ControlStylingInformationvue_type_template_id_542aa07f_scoped_true_staticRenderFns,
  false,
  null,
  "542aa07f",
  null
  
)

/* harmony default export */ var ControlStylingInformation = (ControlStylingInformation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/control-configuration-views/ControlValidationInformation.vue?vue&type=template&id=e86148c8&
var ControlValidationInformationvue_type_template_id_e86148c8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SidebarToggleableContainer',{attrs:{"headline":"Validation"}},[_c('label',[_vm._v(" Validation Rules "),_c('span',{staticClass:"pointer",attrs:{"title":"Click this to add a new rule"},domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('addOutline', '16px', '16px', 'green'))},on:{"click":_vm.addNewRule}})]),_vm._l((_vm.control.validations),function(addedRule,ruleIndex){return _c('div',{key:addedRule.ruleType,staticClass:"list-selection"},[_c('div',{staticClass:"tool-block"},[_c('span',{staticClass:"pointer",attrs:{"title":"Click this to remove this rule"},domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('close', '16px', '16px', 'red'))},on:{"click":function($event){return _vm.removeRule(ruleIndex)}}})]),_c('div',{class:[_vm.styles.FORM.FORM_GROUP]},[_c('label',[_vm._v("Validation Rule")]),_c('select',{directives:[{name:"model",rawName:"v-model",value:(addedRule.ruleType),expression:"addedRule.ruleType"}],class:_vm.styles.FORM.FORM_CONTROL,on:{"change":[function($event){var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return val}); _vm.$set(addedRule, "ruleType", $event.target.multiple ? $$selectedVal : $$selectedVal[0])},function($event){return _vm.updateDefaultErrorMessage(addedRule)}]}},[_c('option',{attrs:{"selected":"","disabled":""}},[_vm._v("Choose a Rule")]),_vm._l((_vm.getRuleList(addedRule.ruleType)),function(ruleName,ruleIndex){return _c('option',{key:ruleIndex,domProps:{"value":ruleName,"textContent":_vm._s(ruleName)}})})],2),_c('small',{directives:[{name:"show",rawName:"v-show",value:(_vm.getRuleInfo(addedRule.ruleType, 'desc')),expression:"getRuleInfo(addedRule.ruleType, 'desc')"}],domProps:{"textContent":_vm._s(_vm.getRuleInfo(addedRule.ruleType, 'desc'))}})]),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.getRuleInfo(addedRule.ruleType, 'needValue')),expression:"getRuleInfo(addedRule.ruleType, 'needValue')"}],class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Rule Value")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(addedRule.additionalValue),expression:"addedRule.additionalValue"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text","placeholder":_vm.getRuleInfo(addedRule.ruleType, 'valueInfo')},domProps:{"value":(addedRule.additionalValue)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(addedRule, "additionalValue", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Default Error Message")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(addedRule.errorMessage),expression:"addedRule.errorMessage"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(addedRule.errorMessage)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(addedRule, "errorMessage", $event.target.value)}}})])])})],2)}
var ControlValidationInformationvue_type_template_id_e86148c8_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/control-configuration-views/ControlValidationInformation.vue?vue&type=template&id=e86148c8&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./src/configs/validation.js
var validation = __webpack_require__("a786");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/control-configuration-views/ControlValidationInformation.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var ControlValidationInformationvue_type_script_lang_js_ = ({
  name: "ControlValidationInformation",
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  components: {
    SidebarToggleableContainer: SidebarToggleableContainer
  },
  props: {
    control: Object
  },
  methods: {
    /**
     * Get the rule info based on the validation rule
     * @param ruleName
     * @param ruleKey
     * @returns {boolean}
     */
    getRuleInfo: function getRuleInfo(ruleName, ruleKey) {
      if (!ruleName) {
        return false;
      }

      return validation["a" /* VALIDATION_RULES */][ruleName][ruleKey];
    },

    /**
     * [ON-INPUT] Every-Time the rule-select is selected, we need to update the default error message.
     */
    updateDefaultErrorMessage: function updateDefaultErrorMessage(addedRule) {
      addedRule.errorMessage = this.getRuleInfo(addedRule.ruleType, 'errorMessage');
    },

    /**
     * [CLICK] Add a new rule into validation array
     */
    addNewRule: function addNewRule() {
      this.control.validations.push(new validation["b" /* ValidationRule */]());
    },

    /**
     * [CLICK] Remove a rule
     */
    removeRule: function removeRule(index) {
      this.control.validations.splice(index, 1);
    },

    /**
     * Get all the available rules without the current one
     * @return {String[]}
     */
    getRuleList: function getRuleList(currentRule) {
      var allUsedRules = this.control.validations.map(function (rule) {
        return rule.ruleType;
      }).filter(function (ruleName) {
        return ruleName !== currentRule;
      });
      var allRules = Object.keys(validation["a" /* VALIDATION_RULES */]);
      return allRules.filter(function (rule) {
        return !allUsedRules.includes(rule);
      });
    }
  },
  computed: {
    /**
     * Get all Rule List
     * @returns {string[]}
     */
    ruleList: function ruleList() {
      return Object.keys(validation["a" /* VALIDATION_RULES */]);
    }
  }
});
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/control-configuration-views/ControlValidationInformation.vue?vue&type=script&lang=js&
 /* harmony default export */ var control_configuration_views_ControlValidationInformationvue_type_script_lang_js_ = (ControlValidationInformationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/control-configuration-views/ControlValidationInformation.vue





/* normalize component */

var ControlValidationInformation_component = Object(componentNormalizer["a" /* default */])(
  control_configuration_views_ControlValidationInformationvue_type_script_lang_js_,
  ControlValidationInformationvue_type_template_id_e86148c8_render,
  ControlValidationInformationvue_type_template_id_e86148c8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ControlValidationInformation = (ControlValidationInformation_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/sidebar-config-views/SidebarControlConfiguration.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var SidebarControlConfigurationvue_type_script_lang_js_ = ({
  name: "SidebarControlConfiguration",
  components: {
    ControlValidationInformation: ControlValidationInformation,
    ControlStylingInformation: ControlStylingInformation,
    ControlBasicInformation: ControlBasicInformation,
    SidebarToggleableContainer: SidebarToggleableContainer
  },
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */], sidebar_body_mixin["a" /* SIDEBAR_BODY_MIXIN */]],
  props: {
    permissions: Object
  },
  data: function data() {
    return {
      dataKey: "control",
      control: null
    };
  },
  created: function created() {
    // clone to make sure, no references will interrupt the configuration...
    this.control = helper["a" /* HELPER */].cloneDeep(this.dataPackage);
  },
  computed: {
    /**
     * Quick'n'Short access to the control type
     */
    controlType: function controlType() {
      return this.control.type;
    },

    /**
     * CHeck if the control doesn't need validation
     */
    isValidationDisabled: function isValidationDisabled() {
      if (controls["a" /* CONTROLS */][this.controlType].disableValidation) {
        return true;
      }

      return false;
    },

    /**
     * Pick-up the specific configuration View for the Control
     * Depend on the `configComponent` of CONTROLS in `src/configs/controls.js`
     * If there's none => No Specific Configuration for the field
     * @returns VueComponent
     */
    specificConfigurationView: function specificConfigurationView() {
      if (!controls["a" /* CONTROLS */][this.controlType].hasOwnProperty('configComponent')) {
        return null;
      } // NOTE: this is a hash map access , not 2d array =))


      return controls["a" /* CONTROLS */][this.controlType]['configComponent'];
    }
  }
});
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/SidebarControlConfiguration.vue?vue&type=script&lang=js&
 /* harmony default export */ var sidebar_config_views_SidebarControlConfigurationvue_type_script_lang_js_ = (SidebarControlConfigurationvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/sidebar-config-views/SidebarControlConfiguration.vue





/* normalize component */

var SidebarControlConfiguration_component = Object(componentNormalizer["a" /* default */])(
  sidebar_config_views_SidebarControlConfigurationvue_type_script_lang_js_,
  SidebarControlConfigurationvue_type_template_id_6e0787c7_render,
  SidebarControlConfigurationvue_type_template_id_6e0787c7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SidebarControlConfiguration = (SidebarControlConfiguration_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/ControlView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ var ControlViewvue_type_script_lang_js_ = ({
  name: "ControlView",
  components: {
    ControlOption: ControlOption,
    ControlLabel: ControlLabel
  },
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  props: {
    control: {
      type: Object,
      required: true
    },
    parentId: {
      type: String,
      required: true
    },
    permissions: Object
  },
  data: function data() {
    return {
      isActive: false
    };
  },
  methods: {
    /**
     * [Emit-from-children] ControlOption will emit this if user want to delete the current control
     */
    deleteControl: function deleteControl() {
      // EMIT to FormBuilder to let it delete the control for us
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.CONTROL.DELETE, this.parentId, this.control.uniqueId);
    },

    /**
     * [Emit-from-children] ControlOption will emit this when user clicked "Cog" button
     * We're opening the sidebar configuration....
     */
    openConfiguration: function openConfiguration() {
      // If the current one active => no trigger...
      if (this.isActive) {
        return;
      }

      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPEN, this.control.uniqueId);
    },

    /**
     * [Emit-from-GlobalSidebar]
     */
    openedConfiguration: function openedConfiguration(runnerId) {
      if (runnerId !== this.control.uniqueId) {
        return;
      } // eligible to render sidebar


      this.isActive = true;
      this.renderSidebar();
    },

    /**
     * Push an Event to GlobalSidebar to Render the Body :D
     */
    renderSidebar: function renderSidebar() {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.INJECT, new sidebar_renderer_class["a" /* default */](this.control.uniqueId, SidebarControlConfiguration, this.control));
    },

    /**
     * Received closed notification from sidebar
     */
    closedConfiguration: function closedConfiguration() {
      this.isActive = false;
    },

    /**
     * Save Control Configuration Data
     * @param {String} runnerId - Control ID
     * @param {Object} controlData - Control Object (After edited in the sidebar)
     */
    saveConfiguration: function saveConfiguration(runnerId, controlData) {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.CONTROL.UPDATE, runnerId, controlData);
    }
  },
  computed: {
    /**
     * This accessor will get the component object to let us inject the right control
     */
    controlComponent: function controlComponent() {
      // validate input
      if (!controls["a" /* CONTROLS */][this.control.type] || !controls["a" /* CONTROLS */][this.control.type].fieldComponent) {
        throw new TypeError("Control Type Mapping failed => Can't be rendered. Reason: Your control type ".concat(this.control.type, " doesn't have 'fieldComponent' property"));
      }

      return controls["a" /* CONTROLS */][this.control.type].fieldComponent;
    }
  },
  created: function created() {
    // listen to GlobalSidebar
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.SAVE, this.saveConfiguration);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.SAVE_AND_CLOSE, this.saveConfiguration);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.AFTER_CLOSED, this.closedConfiguration);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPENED, this.openedConfiguration);
  }
});
// CONCATENATED MODULE: ./src/views/builder/ControlView.vue?vue&type=script&lang=js&
 /* harmony default export */ var builder_ControlViewvue_type_script_lang_js_ = (ControlViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/ControlView.vue





/* normalize component */

var ControlView_component = Object(componentNormalizer["a" /* default */])(
  builder_ControlViewvue_type_script_lang_js_,
  ControlViewvue_type_template_id_02aa9a22_render,
  ControlViewvue_type_template_id_02aa9a22_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ControlView = (ControlView_component.exports);
// CONCATENATED MODULE: ./src/mixins/section-view-mixins.js








var SECTION_VIEW_MIXINS = {
  components: {
    AddRowControl: AddRowControl,
    // Add Row
    draggable: vuedraggable_common_default.a,
    // For Sorting Row/Control
    AddControlControl: AddControlControl,
    // Add Control
    ControlView: ControlView // Show Control

  },
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  props: {
    section: Object,
    rows: Object,
    controls: Object,
    permissions: Object
  },
  data: function data() {
    return {};
  },
  methods: {
    /**
     * Add a new rows for the section
     * @desc Typically, we create a new Row Object, push it into the global `Rows` Object.
     * And then assign the ID into the current section.rows
     * This method will be invoked whenever `AddRowControl` is emitted any value.
     * @emitKey addRowNotify
     */
    addRow: function addRow() {
      var $event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var extendData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      // get rowType of Section
      var rowType = SECTION_TYPES[this.section.type].rowType; // Create new Row Object - BUSS: New Object

      var newRowObject = Object(row["c" /* createNewRow */])(rowType, extendData); // Parent-Handle: Add Row | Push ID into Section.rows

      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.ROW.CREATE, newRowObject);
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.ADDED_ROW, this.section.uniqueId, newRowObject.uniqueId);
    },

    /**
     * Delete a row in the section
     * @desc Emit the rowId to the root-parent to handle the delete process
     * @param {Object} rowObject
     * @param {Object} sectionObj
     */
    deleteRow: function deleteRow(rowObject, sectionObj) {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.ROW.DELETE, rowObject.uniqueId, sectionObj.uniqueId);
    }
  },
  computed: {
    /**
     * Property that will be used to drag - for Control Only
     */
    dragControlHandle: function dragControlHandle() {
      return ".option-control.drag-item";
    },

    /**
     * Base group of drag/drop
     * We can share this for each section/row
     */
    dragGroup: function dragGroup() {
      return "v-form-builder-control";
    },

    /**
     * Base group of drag/drop
     * We can share this for each section/row
     */
    rowDragGroup: function rowDragGroup() {
      return "v-form-builder-control-row-section".concat(this.section.uniqueId);
    },

    /**
     * Accessor helper to check if the current section has control(s) or not
     */
    hasControl: function hasControl() {
      return this.section.controls.length > 0;
    },

    /**
     * Classes for draggable
     * @returns {(string|string)[]}
     */
    draggableClasses: function draggableClasses() {
      return [this.styles.ROW, 'control-list-container', this.hasControl ? '' : 'empty'];
    }
  }
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/section-views/NormalSectionView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @property {Object} section
 * @property {Object} rows RowId - RowData
 * @property {Object} controls ControlId - ControlData
 * @property {Array} section.rows
 * @property {Array} section.controls
 */

/* harmony default export */ var NormalSectionViewvue_type_script_lang_js_ = ({
  name: "NormalSectionView",
  mixins: [SECTION_VIEW_MIXINS],
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/views/builder/section-views/NormalSectionView.vue?vue&type=script&lang=js&
 /* harmony default export */ var section_views_NormalSectionViewvue_type_script_lang_js_ = (NormalSectionViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/section-views/NormalSectionView.vue





/* normalize component */

var NormalSectionView_component = Object(componentNormalizer["a" /* default */])(
  section_views_NormalSectionViewvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var NormalSectionView = (NormalSectionView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/section-views/ToggleableSectionView.vue?vue&type=template&id=8159c7ec&
var ToggleableSectionViewvue_type_template_id_8159c7ec_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toggleable-section"},[_c('div',{staticClass:"headline-block p5"},[_c('h2',{class:_vm.section.headlineAdditionalClass},[_c('span',{staticClass:"toggle-item",domProps:{"innerHTML":_vm._s(_vm.isVisible ? _vm.iconClose : _vm.iconOpen)},on:{"click":function($event){_vm.isVisible = !_vm.isVisible}}}),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.section.isShowHeadline),expression:"section.isShowHeadline"}],domProps:{"textContent":_vm._s(_vm.section.headline)}}),_c('small',{directives:[{name:"show",rawName:"v-show",value:(_vm.section.isShowHeadline),expression:"section.isShowHeadline"}],class:[_vm.section.subHeadlineAdditionalClass, 'toggleable-sub-headline'],domProps:{"textContent":_vm._s(_vm.section.subHeadline)}})])]),_c('transition',{attrs:{"name":"slide"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}]},[_c('draggable',{class:_vm.draggableClasses,attrs:{"ghost-class":"ghost","handle":_vm.dragControlHandle,"list":_vm.section.controls,"group":_vm.dragGroup,"disabled":!_vm.permissions.canReOrderingControl}},[_vm._l((_vm.section.controls),function(controlId){return _c('ControlView',{key:controlId,attrs:{"control":_vm.controls[controlId],"parent-id":_vm.section.uniqueId,"permissions":_vm.permissions}})}),(!_vm.hasControl)?_c('p',[_vm._v(" Droppable Zone / Controls will be showed here... ")]):_vm._e()],2),(_vm.permissions.canAddControl)?_c('AddControlControl',{attrs:{"section":_vm.section}}):_vm._e()],1)])],1)}
var ToggleableSectionViewvue_type_template_id_8159c7ec_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/section-views/ToggleableSectionView.vue?vue&type=template&id=8159c7ec&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/section-views/ToggleableSectionView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var ToggleableSectionViewvue_type_script_lang_js_ = ({
  name: "ToggleableSectionView",
  components: {
    AddControlControl: AddControlControl
  },
  mixins: [SECTION_VIEW_MIXINS, style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */], TOGGLEABLE_MIXIN]
});
// CONCATENATED MODULE: ./src/views/builder/section-views/ToggleableSectionView.vue?vue&type=script&lang=js&
 /* harmony default export */ var section_views_ToggleableSectionViewvue_type_script_lang_js_ = (ToggleableSectionViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/section-views/ToggleableSectionView.vue





/* normalize component */

var ToggleableSectionView_component = Object(componentNormalizer["a" /* default */])(
  section_views_ToggleableSectionViewvue_type_script_lang_js_,
  ToggleableSectionViewvue_type_template_id_8159c7ec_render,
  ToggleableSectionViewvue_type_template_id_8159c7ec_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ToggleableSectionView = (ToggleableSectionView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/section-views/TabSectionView.vue?vue&type=template&id=595b3044&
var TabSectionViewvue_type_template_id_595b3044_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-section"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.section.isShowHeadline),expression:"section.isShowHeadline"}],staticClass:"headline-block p5"},[_c('h2',{class:_vm.section.headlineAdditionalClass,domProps:{"textContent":_vm._s(_vm.section.headline)}}),_c('p',{class:_vm.section.subHeadlineAdditionalClass,domProps:{"textContent":_vm._s(_vm.section.subHeadline)}})]),_c('div',{staticClass:"tabs"},[_vm._l((_vm.section.rows),function(rowId){return _c('input',{key:_vm.getRadioID(rowId),attrs:{"type":"radio","id":_vm.getRadioID(rowId),"name":"tab-control"}})}),_c('draggable',{attrs:{"ghost-class":"ghost","list":_vm.section.rows,"group":_vm.rowDragGroup,"tag":"ul","disabled":!_vm.permissions.canReOrderingRow}},_vm._l((_vm.section.rows),function(rowId){return _c('li',{key:_vm.getTabHeaderID(rowId),attrs:{"id":_vm.getTabHeaderID(rowId)}},[_c('label',{attrs:{"for":_vm.getRadioID(rowId),"role":"button"}},[(_vm.rows[rowId].extendData.tabIcon)?_c('span',{domProps:{"innerHTML":_vm._s(_vm.rows[rowId].extendData.tabIcon)}}):_vm._e(),_c('br'),_c('span',{domProps:{"textContent":_vm._s(_vm.rows[rowId].extendData.tabName)}})])])}),0),_c('div',{staticClass:"content"},_vm._l((_vm.section.rows),function(rowId){return _c('TabContentRowView',{key:rowId,attrs:{"row":_vm.rows[rowId],"section":_vm.section,"controls":_vm.controls,"permissions":_vm.permissions},on:{"delete-row":_vm.deleteRow}})}),1)],2)])}
var TabSectionViewvue_type_template_id_595b3044_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/section-views/TabSectionView.vue?vue&type=template&id=595b3044&

// EXTERNAL MODULE: ./src/libraries/alert-dialog.js
var alert_dialog = __webpack_require__("caca");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/row-views/TabContentRowView.vue?vue&type=template&id=e28854e6&
var TabContentRowViewvue_type_template_id_e28854e6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{staticClass:"pl-15"},[_c('button',{staticClass:"mr-15",class:_vm.styles.BUTTON.INFO,on:{"click":_vm.openTabSetting}},[_vm._v(" Tab Settings ")]),_c('button',{class:_vm.styles.BUTTON.DANGER,on:{"click":_vm.deleteRow}},[_vm._v(" Delete Tab ")])]),_c('draggable',{class:_vm.draggableClasses,attrs:{"ghost-class":"ghost","handle":_vm.dragControlHandle,"list":_vm.row.controls,"group":_vm.dragGroup,"disabled":!_vm.permissions.canReOrderingControl}},[_vm._l((_vm.row.controls),function(controlId){return _c('ControlView',{key:controlId,attrs:{"control":_vm.controls[controlId],"parent-id":_vm.row.uniqueId,"permissions":_vm.permissions}})}),(!_vm.hasControls)?_c('p',[_vm._v(" Droppable Zone / Controls will be showed here... ")]):_vm._e()],2),(_vm.permissions.canAddControl)?_c('AddControlToRowControl',{attrs:{"row":_vm.row}}):_vm._e()],1)}
var TabContentRowViewvue_type_template_id_e28854e6_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/row-views/TabContentRowView.vue?vue&type=template&id=e28854e6&

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/add-controls/AddControlToRowControl.vue?vue&type=template&id=419e6788&
var AddControlToRowControlvue_type_template_id_419e6788_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"add-control-outer",class:_vm.styles.COLUMNS.COL12},[_c('div',{staticClass:"add-control-container",on:{"click":_vm.openAddControl}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('addOutline', '32px', '32px', '#000'))}}),_c('span',[_vm._v("Add Control")])])])}
var AddControlToRowControlvue_type_template_id_419e6788_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/add-controls/AddControlToRowControl.vue?vue&type=template&id=419e6788&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/add-controls/AddControlToRowControl.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//




/* harmony default export */ var AddControlToRowControlvue_type_script_lang_js_ = ({
  name: "AddControlToRowControl",
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  props: {
    row: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    /**
     * Open the sidebar to add control yeah yeah
     */
    openAddControl: function openAddControl() {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPEN, this.runnerId);
    },

    /**
     * Render the sidebar if can be opened hehe
     */
    afterOpenedSidebar: function afterOpenedSidebar(runnerId) {
      if (runnerId !== this.runnerId) {
        return;
      } // render


      this.renderSidebar();
    },

    /**
     * Trigger this to render the GlobalSidebar for Select Controls
     */
    renderSidebar: function renderSidebar() {
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.INJECT, new sidebar_renderer_class["a" /* default */](this.runnerId, SidebarControlSelectList, this.section));
    },

    /**
     * After user chose a control. This will be invoked in order to create a new control
     */
    createNewControlForSection: function createNewControlForSection(runnerId, controlObj) {
      // runnerId to check the right identifier of the Invoker
      // uniqueId to check if we create new control or not
      if (this.runnerId !== runnerId) {
        return;
      } // emit to FormBuilder and let it create control...


      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.CONTROL.CREATE, this.row.uniqueId, controlObj);
    }
  },
  computed: {
    /**
     * Runner ID to detect the right
     * @returns {string}
     */
    runnerId: function runnerId() {
      return "add-control-".concat(this.row.uniqueId);
    }
  },
  created: function created() {
    // listen to Global Sidebar
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.OPENED, this.afterOpenedSidebar);
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.SIDEBAR.SAVE_AND_CLOSE, this.createNewControlForSection);
  }
});
// CONCATENATED MODULE: ./src/views/builder/add-controls/AddControlToRowControl.vue?vue&type=script&lang=js&
 /* harmony default export */ var add_controls_AddControlToRowControlvue_type_script_lang_js_ = (AddControlToRowControlvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/add-controls/AddControlToRowControl.vue





/* normalize component */

var AddControlToRowControl_component = Object(componentNormalizer["a" /* default */])(
  add_controls_AddControlToRowControlvue_type_script_lang_js_,
  AddControlToRowControlvue_type_template_id_419e6788_render,
  AddControlToRowControlvue_type_template_id_419e6788_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var AddControlToRowControl = (AddControlToRowControl_component.exports);
// CONCATENATED MODULE: ./src/mixins/row-view-mixin.js
/**
 * Base extendation for the Row-View - Form-Builder
 */




var ROW_VIEW_MIXIN = {
  components: {
    draggable: vuedraggable_common_default.a,
    AddControlToRowControl: AddControlToRowControl,
    ControlView: ControlView
  },
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  props: {
    /**
     * Section that belong to the current row
     */
    section: {
      type: Object,
      required: true
    },

    /**
     * Current row data
     */
    row: {
      type: Object,
      required: true
    },

    /**
     * Controls of Form
     */
    controls: {
      type: Object,
      required: true
    },
    permissions: Object
  },
  computed: {
    /**
     * Property that will be used to drag - for Control Only
     */
    dragControlHandle: function dragControlHandle() {
      return ".option-control.drag-item";
    },

    /**
     * Base group of drag/drop
     * We can share this for each section/row
     */
    dragGroup: function dragGroup() {
      return "v-form-builder-control";
    },

    /**
     * Classes for draggable
     * @returns {(string|string)[]}
     */
    draggableClasses: function draggableClasses() {
      return [this.styles.ROW, 'control-list-container', this.hasControls ? '' : 'empty'];
    },

    /**
     * Check if we had controls
     * @returns {boolean}
     */
    hasControls: function hasControls() {
      return this.row.controls.length > 0;
    }
  }
};

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d225");

// CONCATENATED MODULE: ./src/libraries/modal-renderer.class.ts


var modal_renderer_class_ModalRenderer = function ModalRenderer(runnerId) {
  var component = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  Object(classCallCheck["a" /* default */])(this, ModalRenderer);

  this.runnerId = runnerId;
  this.component = component;
  this.data = data;
};


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/modal-config-views/TabRowConfigurationView.vue?vue&type=template&id=ff3e8524&
var TabRowConfigurationViewvue_type_template_id_ff3e8524_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Tab Title/Name")]),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.rowConfiguration.extendData.tabName),expression:"rowConfiguration.extendData.tabName"}],class:_vm.styles.FORM.FORM_CONTROL,attrs:{"type":"text"},domProps:{"value":(_vm.rowConfiguration.extendData.tabName)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.rowConfiguration.extendData, "tabName", $event.target.value)}}})]),_c('div',{class:_vm.styles.FORM.FORM_GROUP},[_c('label',[_vm._v("Tab Icon (HTML/Inline SVG/Image)")]),_c('textarea',{directives:[{name:"model",rawName:"v-model",value:(_vm.rowConfiguration.extendData.tabIcon),expression:"rowConfiguration.extendData.tabIcon"}],class:_vm.styles.FORM.FORM_CONTROL,domProps:{"value":(_vm.rowConfiguration.extendData.tabIcon)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.rowConfiguration.extendData, "tabIcon", $event.target.value)}}}),_vm._m(0)]),_c('div',{staticClass:"buttons"},[_c('button',{class:_vm.styles.BUTTON.PRIMARY,on:{"click":function($event){return _vm.save(true)}}},[_vm._v(" Save ")])])])}
var TabRowConfigurationViewvue_type_template_id_ff3e8524_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',[_vm._v(" Recommendation: "),_c('a',{attrs:{"href":"http://svgicons.sparkk.fr/","target":"_blank"}},[_vm._v("Free Inline-SVG Icons")])])}]


// CONCATENATED MODULE: ./src/views/builder/modal-config-views/TabRowConfigurationView.vue?vue&type=template&id=ff3e8524&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/modal-config-views/TabRowConfigurationView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var TabRowConfigurationViewvue_type_script_lang_js_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: "TabRowConfigurationView",
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */], sidebar_body_mixin["a" /* SIDEBAR_BODY_MIXIN */]],
  data: function data() {
    return {
      dataKey: "rowConfiguration",
      rowConfiguration: Object.assign({}, row["a" /* ROW_DEFAULT_DATA */])
    };
  },
  methods: {},
  created: function created() {
    this.rowConfiguration = Object.assign({}, this.sectionConfiguration, this.dataPackage);
  }
}));
// CONCATENATED MODULE: ./src/views/builder/modal-config-views/TabRowConfigurationView.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_config_views_TabRowConfigurationViewvue_type_script_lang_js_ = (TabRowConfigurationViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/builder/modal-config-views/TabRowConfigurationView.vue





/* normalize component */

var TabRowConfigurationView_component = Object(componentNormalizer["a" /* default */])(
  modal_config_views_TabRowConfigurationViewvue_type_script_lang_js_,
  TabRowConfigurationViewvue_type_template_id_ff3e8524_render,
  TabRowConfigurationViewvue_type_template_id_ff3e8524_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabRowConfigurationView = (TabRowConfigurationView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/row-views/TabContentRowView.vue?vue&type=script&lang=ts&
 // @ts-ignore

 // @ts-ignore


 // @ts-ignore


/**
 * @property {Object} section
 * @property {Object} rows RowId - RowData
 * @property {Object} controls ControlId - ControlData
 * @property {Array} section.rows
 * @property {Array} section.controls
 */

/* harmony default export */ var TabContentRowViewvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: "TabContentRowView",
  mixins: [ROW_VIEW_MIXIN],
  methods: {
    /**
     * [CLICK] Click to remove the tab (row)
     * @see SECTION_VIEW_MIXINS.deleteRow
     */
    deleteRow: function deleteRow() {
      if (!confirm('Do you really want to remove this tab?')) {
        return;
      } // @ts-ignore


      this.$emit('delete-row', this.row, this.section);
    },

    /**
     * [CLICK] Click to open the tab settings
     */
    openTabSetting: function openTabSetting() {
      // @ts-ignore
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.MODAL.OPEN, this.row.uniqueId);
    },

    /**
     * We need this special event to know when the sidebar is opened
     * Therefore, we will render the sidebar and turn on the border (current editing section)
     */
    configurationOpened: function configurationOpened(runnerId) {
      // @ts-ignore
      if (this.row.uniqueId !== runnerId) {
        return;
      } // render sidebar and turn on the border


      this.renderModal();
    },

    /**
     * Emitting the configuration to render the Section-Config-Modal
     */
    renderModal: function renderModal() {
      // @ts-ignore
      var uniqueId = this.row.uniqueId; // @ts-ignore

      var rowObj = this.row;
      var modalRendererInstance = new modal_renderer_class_ModalRenderer(uniqueId, TabRowConfigurationView, rowObj); // @ts-ignore

      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.MODAL.INJECT, modalRendererInstance, "Tab Configuration");
    },

    /**
     * Handle Saving the Form Configuration
     * @param {string} runnerId
     * @param {Object} data
     */
    saveConfiguration: function saveConfiguration(runnerId, data) {
      // does it out of scope? if it does, stop
      // @ts-ignore
      if (runnerId !== this.row.uniqueId) {
        return;
      } // @ts-ignore


      var newValue = Object.assign({}, this.row, data); // @ts-ignore

      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.SECTION.UPDATE, newValue);
    },

    /**
     * Save and close
     * @param runnerId
     * @param data
     */
    saveAndClose: function saveAndClose(runnerId, data) {
      // does it out of scope? if it does, stop
      // @ts-ignore
      if (runnerId !== this.row.uniqueId) {
        return;
      }

      this.saveConfiguration(runnerId, data);
    },

    /**
     * After Sidebar closed => Remove the Active Class
     */
    removeActive: function removeActive() {
      this.$emit('active', false); // call to parent to let it know this section is finished edit
    }
  },
  created: function created() {
    // listen to after-closed from GlobalSidebar
    // @ts-ignore
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.MODAL.SAVE, this.saveConfiguration); // @ts-ignore

    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.MODAL.SAVE_AND_CLOSE, this.saveAndClose); // @ts-ignore

    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.MODAL.AFTER_CLOSED, this.removeActive); // @ts-ignore

    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.MODAL.OPENED, this.configurationOpened);
  }
}));
// CONCATENATED MODULE: ./src/views/builder/row-views/TabContentRowView.vue?vue&type=script&lang=ts&
 /* harmony default export */ var row_views_TabContentRowViewvue_type_script_lang_ts_ = (TabContentRowViewvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/views/builder/row-views/TabContentRowView.vue





/* normalize component */

var TabContentRowView_component = Object(componentNormalizer["a" /* default */])(
  row_views_TabContentRowViewvue_type_script_lang_ts_,
  TabContentRowViewvue_type_template_id_e28854e6_render,
  TabContentRowViewvue_type_template_id_e28854e6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabContentRowView = (TabContentRowView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/section-views/TabSectionView.vue?vue&type=script&lang=ts&
// @ts-ignore
 // @ts-ignore

 // @ts-ignore

 // @ts-ignore




/* harmony default export */ var TabSectionViewvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: "TableSectionView",
  mixins: [SECTION_VIEW_MIXINS, style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  components: {
    TabContentRowView: TabContentRowView
  },
  computed: {
    hasTabs: function hasTabs() {
      // @ts-ignore
      return this.section.rows.length > 0;
    }
  },
  methods: {
    getRadioID: function getRadioID(uniqueId) {
      return 'tab-radio-'.concat(uniqueId);
    },
    getTabHeaderID: function getTabHeaderID(uniqueId) {
      return 'tab-header-'.concat(uniqueId);
    },

    /**
     * [ACTION] Add a new tab action
     * Buss: simply add a new row with extendData
     */
    addNewTab: function addNewTab(sectionId) {
      // @ts-ignore
      if (sectionId !== this.section.uniqueId) {
        return;
      } // Ask for Tab Name - TODO: do something better with Promise so it wouldn't harm the main thread


      var tabName = prompt("Give it a name for your new tab");

      if (!tabName) {
        return alert_dialog["a" /* ALERT_DIALOG */].show("Tab Name can't be empty.");
      } // Data preparation


      var tabDetail = {
        tabName: tabName,
        defaultChecked: //@ts-ignore
        this.section.rows.length == 0
      }; // @ts-ignore

      this.addRow(null, tabDetail); // if we got our-first ever tab, re-selected the first tab.
      // @ts-ignore - check if this is the first tab in our section??

      if (this.section.rows.length == 1) {
        this.defaultSelectTab();
      }
    },

    /**
     * [UI-Update]
     */
    defaultSelectTab: function defaultSelectTab() {
      var _this = this;

      // @ts-ignore (don't know why but need to ignore to use nextTick)
      this.$nextTick(function () {
        // @ts-ignore
        var radioDom = document.getElementById(_this.getRadioID(_this.section.rows[0])); // @ts-ignore

        radioDom.checked = true;
      });
    }
  },
  created: function created() {
    // @ts-ignore
    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.ROW.ADD_TAB, this.addNewTab); // @ts-ignore

    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].BUILDER.ROW.DELETED, this.defaultSelectTab);
  }
}));
// CONCATENATED MODULE: ./src/views/builder/section-views/TabSectionView.vue?vue&type=script&lang=ts&
 /* harmony default export */ var section_views_TabSectionViewvue_type_script_lang_ts_ = (TabSectionViewvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/views/builder/section-views/TabSectionView.vue





/* normalize component */

var TabSectionView_component = Object(componentNormalizer["a" /* default */])(
  section_views_TabSectionViewvue_type_script_lang_ts_,
  TabSectionViewvue_type_template_id_595b3044_render,
  TabSectionViewvue_type_template_id_595b3044_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabSectionView = (TabSectionView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/section-navigation-buttons/TabSectionPreButtons.vue?vue&type=template&id=a8c909a6&
var TabSectionPreButtonsvue_type_template_id_a8c909a6_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"display":"inline"}},[_c('button',{class:_vm.styles.BUTTON.DEFAULT,on:{"click":_vm.addNewTab}},[_c('span',{domProps:{"innerHTML":_vm._s(_vm.$form.getIcon('addOutline', '32px', '32px', '#000'))}}),_vm._v(" Add Tab ")])])}
var TabSectionPreButtonsvue_type_template_id_a8c909a6_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/builder/section-navigation-buttons/TabSectionPreButtons.vue?vue&type=template&id=a8c909a6&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/builder/section-navigation-buttons/TabSectionPreButtons.vue?vue&type=script&lang=ts&
 // @ts-ignore

 // @ts-ignore


/* harmony default export */ var TabSectionPreButtonsvue_type_script_lang_ts_ = (external_commonjs_vue_commonjs2_vue_root_Vue_default.a.extend({
  name: "TabSectionPreButtons",
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  props: {
    section: {
      type: Object,
      required: true
    }
  },
  methods: {
    addNewTab: function addNewTab() {
      // @ts-ignore - trigger to TabSectionView
      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].BUILDER.ROW.ADD_TAB, this.section.uniqueId);
    }
  }
}));
// CONCATENATED MODULE: ./src/views/builder/section-navigation-buttons/TabSectionPreButtons.vue?vue&type=script&lang=ts&
 /* harmony default export */ var section_navigation_buttons_TabSectionPreButtonsvue_type_script_lang_ts_ = (TabSectionPreButtonsvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/views/builder/section-navigation-buttons/TabSectionPreButtons.vue





/* normalize component */

var TabSectionPreButtons_component = Object(componentNormalizer["a" /* default */])(
  section_navigation_buttons_TabSectionPreButtonsvue_type_script_lang_ts_,
  TabSectionPreButtonsvue_type_template_id_a8c909a6_render,
  TabSectionPreButtonsvue_type_template_id_a8c909a6_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var TabSectionPreButtons = (TabSectionPreButtons_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/renderer/section-views/NormalSectionView.vue?vue&type=template&id=fea399ce&
var NormalSectionViewvue_type_template_id_fea399ce_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"normal-section"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.section.isShowHeadline),expression:"section.isShowHeadline"}],staticClass:"headline-block"},[_c('h2',{class:_vm.section.headlineAdditionalClass,domProps:{"textContent":_vm._s(_vm.section.headline)}}),_c('p',{class:_vm.section.subHeadlineAdditionalClass,domProps:{"textContent":_vm._s(_vm.section.subHeadline)}})]),_c('div',{class:_vm.containerClasses},_vm._l((_vm.section.controls),function(controlId){return _c('ControlView',{key:controlId,attrs:{"control":_vm.controls[controlId],"parent-id":_vm.section.uniqueId,"value-container":_vm.valueContainer,"validation-errors":_vm.validationErrors}})}),1)])}
var NormalSectionViewvue_type_template_id_fea399ce_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/renderer/section-views/NormalSectionView.vue?vue&type=template&id=fea399ce&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/renderer/ControlView.vue?vue&type=template&id=24af6378&
var ControlViewvue_type_template_id_24af6378_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.control.containerClass, 'control-view-wrapper', _vm.control.additionalContainerClass]},[_c('div',{staticClass:"control-view"},[_c('ControlLabel',{directives:[{name:"show",rawName:"v-show",value:(_vm.control.isShowLabel),expression:"control.isShowLabel"}],attrs:{"control":_vm.control}}),_c(_vm.controlComponent,{tag:"component",class:_vm.validationErrorClasses,attrs:{"control":_vm.control,"value-container":_vm.valueContainer},model:{value:(_vm.valueContainer[_vm.controlName]),callback:function ($$v) {_vm.$set(_vm.valueContainer, _vm.controlName, $$v)},expression:"valueContainer[controlName]"}}),(_vm.hasValidationError)?_vm._l((_vm.validationErrorMessages),function(mess,i){return _c('div',{key:i,class:_vm.styles.FORM.ERROR_MESSAGE,domProps:{"textContent":_vm._s(mess)}})}):_vm._e()],2)])}
var ControlViewvue_type_template_id_24af6378_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/renderer/ControlView.vue?vue&type=template&id=24af6378&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/renderer/ControlView.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var renderer_ControlViewvue_type_script_lang_js_ = ({
  name: "ControlView",
  components: {
    ControlLabel: ControlLabel
  },
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  props: {
    control: {
      type: Object,
      required: true
    },
    parentId: {
      type: String,
      required: true
    },
    valueContainer: {
      type: Object,
      required: true
    },
    validationErrors: {
      type: Object,
      default: function _default() {
        return {};
      } // empty object

    }
  },
  computed: {
    /**
     * This accessor will get the component object to let us inject the right control
     */
    controlComponent: function controlComponent() {
      // validate input
      if (!controls["a" /* CONTROLS */][this.control.type] || !controls["a" /* CONTROLS */][this.control.type].fieldComponent) {
        throw new TypeError("Control Type Mapping failed => Can't be rendered. Reason: Your control type ".concat(this.control.type, " doesn't have 'fieldComponent' property"));
      }

      return controls["a" /* CONTROLS */][this.control.type].fieldComponent;
    },

    /**
     * Generate Control Base Name
     * @returns {string}
     */
    controlName: function controlName() {
      return this.control.name || this.control.uniqueId;
    },

    /**
     * Check if current control has validation error(s)
     * @returns {boolean}
     */
    hasValidationError: function hasValidationError() {
      return !!this.validationErrors[this.controlName];
    },

    /**
     * Short-Path access to the Validation Error MEssages List
     * @returns {String[]}
     */
    validationErrorMessages: function validationErrorMessages() {
      return this.validationErrors[this.controlName];
    },
    validationErrorClasses: function validationErrorClasses() {
      var classes = {};
      classes[this.styles.FORM.ERROR_OUTLINE] = this.hasValidationError;
      return classes;
    }
  }
});
// CONCATENATED MODULE: ./src/views/renderer/ControlView.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_renderer_ControlViewvue_type_script_lang_js_ = (renderer_ControlViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/renderer/ControlView.vue





/* normalize component */

var renderer_ControlView_component = Object(componentNormalizer["a" /* default */])(
  views_renderer_ControlViewvue_type_script_lang_js_,
  ControlViewvue_type_template_id_24af6378_render,
  ControlViewvue_type_template_id_24af6378_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var renderer_ControlView = (renderer_ControlView_component.exports);
// CONCATENATED MODULE: ./src/mixins/renderer-section-view-mixin.js


var RENDERER_SECTION_VIEW_MIXIN = {
  components: {
    ControlView: renderer_ControlView // Show Control

  },
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  props: {
    section: Object,
    rows: Object,
    controls: Object,
    valueContainer: Object,
    validationErrors: Object
  },
  data: function data() {
    return {};
  },
  methods: {},
  computed: {
    /**
     * Classes for draggable
     * @returns {(string|string)[]}
     */
    containerClasses: function containerClasses() {
      return [this.styles.ROW, 'control-list-container'];
    }
  }
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/renderer/section-views/NormalSectionView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @property {Object} section
 * @property {Object} rows RowId - RowData
 * @property {Object} controls ControlId - ControlData
 * @property {Array} section.rows
 * @property {Array} section.controls
 */

/* harmony default export */ var renderer_section_views_NormalSectionViewvue_type_script_lang_js_ = ({
  name: "NormalSectionView",
  mixins: [RENDERER_SECTION_VIEW_MIXIN],
  data: function data() {
    return {};
  }
});
// CONCATENATED MODULE: ./src/views/renderer/section-views/NormalSectionView.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_renderer_section_views_NormalSectionViewvue_type_script_lang_js_ = (renderer_section_views_NormalSectionViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/renderer/section-views/NormalSectionView.vue





/* normalize component */

var section_views_NormalSectionView_component = Object(componentNormalizer["a" /* default */])(
  views_renderer_section_views_NormalSectionViewvue_type_script_lang_js_,
  NormalSectionViewvue_type_template_id_fea399ce_render,
  NormalSectionViewvue_type_template_id_fea399ce_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var section_views_NormalSectionView = (section_views_NormalSectionView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/renderer/section-views/ToggleableSectionView.vue?vue&type=template&id=694f1e24&
var ToggleableSectionViewvue_type_template_id_694f1e24_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"toggleable-section"},[_c('div',{staticClass:"headline-block"},[_c('h2',{class:_vm.section.headlineAdditionalClass},[_c('span',{staticClass:"toggle-item",domProps:{"innerHTML":_vm._s(_vm.isVisible ? _vm.iconClose : _vm.iconOpen)},on:{"click":function($event){_vm.isVisible = !_vm.isVisible}}}),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.section.isShowHeadline),expression:"section.isShowHeadline"}],domProps:{"textContent":_vm._s(_vm.section.headline)}}),_c('small',{directives:[{name:"show",rawName:"v-show",value:(_vm.section.isShowHeadline),expression:"section.isShowHeadline"}],class:[_vm.section.subHeadlineAdditionalClass, 'toggleable-sub-headline'],domProps:{"textContent":_vm._s(_vm.section.subHeadline)}})])]),_c('transition',{attrs:{"name":"slide"}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isVisible),expression:"isVisible"}],class:_vm.containerClasses},_vm._l((_vm.section.controls),function(controlId){return _c('ControlView',{key:controlId,attrs:{"control":_vm.controls[controlId],"parent-id":_vm.section.uniqueId,"value-container":_vm.valueContainer,"validation-errors":_vm.validationErrors}})}),1)])],1)}
var ToggleableSectionViewvue_type_template_id_694f1e24_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/renderer/section-views/ToggleableSectionView.vue?vue&type=template&id=694f1e24&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/renderer/section-views/ToggleableSectionView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var renderer_section_views_ToggleableSectionViewvue_type_script_lang_js_ = ({
  name: "ToggleableSectionView",
  mixins: [RENDERER_SECTION_VIEW_MIXIN, TOGGLEABLE_MIXIN]
});
// CONCATENATED MODULE: ./src/views/renderer/section-views/ToggleableSectionView.vue?vue&type=script&lang=js&
 /* harmony default export */ var views_renderer_section_views_ToggleableSectionViewvue_type_script_lang_js_ = (renderer_section_views_ToggleableSectionViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/renderer/section-views/ToggleableSectionView.vue





/* normalize component */

var section_views_ToggleableSectionView_component = Object(componentNormalizer["a" /* default */])(
  views_renderer_section_views_ToggleableSectionViewvue_type_script_lang_js_,
  ToggleableSectionViewvue_type_template_id_694f1e24_render,
  ToggleableSectionViewvue_type_template_id_694f1e24_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var section_views_ToggleableSectionView = (section_views_ToggleableSectionView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/renderer/section-views/TabSectionView.vue?vue&type=template&id=e4cece18&
var TabSectionViewvue_type_template_id_e4cece18_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tab-section"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.section.isShowHeadline),expression:"section.isShowHeadline"}],staticClass:"headline-block p5"},[_c('h2',{class:_vm.section.headlineAdditionalClass,domProps:{"textContent":_vm._s(_vm.section.headline)}}),_c('p',{class:_vm.section.subHeadlineAdditionalClass,domProps:{"textContent":_vm._s(_vm.section.subHeadline)}})]),_c('div',{staticClass:"tabs"},[_vm._l((_vm.section.rows),function(rowId){return _c('input',{key:_vm.getRadioID(rowId),attrs:{"type":"radio","id":_vm.getRadioID(rowId),"name":"tab-control"}})}),_c('ul',_vm._l((_vm.section.rows),function(rowId){return _c('li',{key:_vm.getTabHeaderID(rowId),attrs:{"id":_vm.getTabHeaderID(rowId)}},[_c('label',{attrs:{"for":_vm.getRadioID(rowId),"role":"button"}},[(_vm.rows[rowId].extendData.tabIcon)?_c('span',{domProps:{"innerHTML":_vm._s(_vm.rows[rowId].extendData.tabIcon)}}):_vm._e(),_c('br'),_c('span',{domProps:{"textContent":_vm._s(_vm.rows[rowId].extendData.tabName)}})])])}),0),_c('div',{staticClass:"content"},_vm._l((_vm.section.rows),function(rowId){return _c('TabContentRowView',{key:rowId,attrs:{"row":_vm.rows[rowId],"section":_vm.section,"controls":_vm.controls,"value-container":_vm.valueContainer,"validation-errors":_vm.validationErrors,"read-only":_vm.readOnly}})}),1)],2)])}
var TabSectionViewvue_type_template_id_e4cece18_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/renderer/section-views/TabSectionView.vue?vue&type=template&id=e4cece18&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/renderer/row-views/TabContentRowView.vue?vue&type=template&id=f63e983c&
var TabContentRowViewvue_type_template_id_f63e983c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('div',{class:_vm.containerClasses},_vm._l((_vm.row.controls),function(controlId){return _c('ControlView',{key:controlId,attrs:{"control":_vm.controls[controlId],"parent-id":_vm.row.uniqueId,"value-container":_vm.valueContainer,"validation-errors":_vm.validationErrors}})}),1)])}
var TabContentRowViewvue_type_template_id_f63e983c_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/renderer/row-views/TabContentRowView.vue?vue&type=template&id=f63e983c&

// CONCATENATED MODULE: ./src/mixins/render-row-view-mixin.js
/**
 * Base extendation for the Row-View - Form-Builder
 */


var RENDERER_ROW_VIEW_MIXIN = {
  components: {
    ControlView: renderer_ControlView
  },
  mixins: [style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */]],
  props: {
    /**
     * Section that belong to the current row
     */
    section: {
      type: Object,
      required: true
    },

    /**
     * Current row data
     */
    row: {
      type: Object,
      required: true
    },

    /**
     * Controls of Form
     */
    controls: {
      type: Object,
      required: true
    },
    valueContainer: Object,
    validationErrors: Object
  },
  computed: {
    /**
     * Check if we had controls
     * @returns {boolean}
     */
    hasControls: function hasControls() {
      return this.row.controls.length > 0;
    },

    /**
     * Classes for draggable
     * @returns {(string|string)[]}
     */
    containerClasses: function containerClasses() {
      return [this.styles.ROW, 'control-list-container', this.hasControls ? '' : 'empty'];
    }
  }
};

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/renderer/row-views/TabContentRowView.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/**
 * @property {Object} section
 * @property {Object} rows RowId - RowData
 * @property {Object} controls ControlId - ControlData
 * @property {Array} section.rows
 * @property {Array} section.controls
 */

/* harmony default export */ var TabContentRowViewvue_type_script_lang_js_ = ({
  name: "TabContentRowView",
  mixins: [RENDERER_ROW_VIEW_MIXIN]
});
// CONCATENATED MODULE: ./src/views/renderer/row-views/TabContentRowView.vue?vue&type=script&lang=js&
 /* harmony default export */ var row_views_TabContentRowViewvue_type_script_lang_js_ = (TabContentRowViewvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/views/renderer/row-views/TabContentRowView.vue





/* normalize component */

var row_views_TabContentRowView_component = Object(componentNormalizer["a" /* default */])(
  row_views_TabContentRowViewvue_type_script_lang_js_,
  TabContentRowViewvue_type_template_id_f63e983c_render,
  TabContentRowViewvue_type_template_id_f63e983c_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var row_views_TabContentRowView = (row_views_TabContentRowView_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/ts-loader??ref--13-3!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/renderer/section-views/TabSectionView.vue?vue&type=script&lang=ts&
// @ts-ignore
 // @ts-ignore


/* harmony default export */ var renderer_section_views_TabSectionViewvue_type_script_lang_ts_ = ({
  name: "TabSectionView",
  components: {
    TabContentRowView: row_views_TabContentRowView
  },
  mixins: [RENDERER_SECTION_VIEW_MIXIN],
  methods: {
    getRadioID: function getRadioID(uniqueId) {
      return 'tab-radio-'.concat(uniqueId);
    },
    getTabHeaderID: function getTabHeaderID(uniqueId) {
      return 'tab-header-'.concat(uniqueId);
    },

    /**
     * [UI-Update]
     */
    defaultSelectTab: function defaultSelectTab() {
      var _this = this;

      // @ts-ignore (don't know why but need to ignore to use nextTick)
      this.$nextTick(function () {
        // @ts-ignore
        var radioDom = document.getElementById(_this.getRadioID(_this.section.rows[0])); // @ts-ignore

        radioDom.checked = true;
      });
    }
  },
  mounted: function mounted() {
    // @ts-ignore
    this.defaultSelectTab();
  }
});
// CONCATENATED MODULE: ./src/views/renderer/section-views/TabSectionView.vue?vue&type=script&lang=ts&
 /* harmony default export */ var views_renderer_section_views_TabSectionViewvue_type_script_lang_ts_ = (renderer_section_views_TabSectionViewvue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/views/renderer/section-views/TabSectionView.vue





/* normalize component */

var section_views_TabSectionView_component = Object(componentNormalizer["a" /* default */])(
  views_renderer_section_views_TabSectionViewvue_type_script_lang_ts_,
  TabSectionViewvue_type_template_id_e4cece18_render,
  TabSectionViewvue_type_template_id_e4cece18_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var section_views_TabSectionView = (section_views_TabSectionView_component.exports);
// CONCATENATED MODULE: ./src/configs/section.js
/**
 * Supported Section & Section Constants in Vue-Form-Builder
 * @author Phat Tran
 */

 // Builder Views

 // import TableSectionView from "@/views/builder/section-views/TableSectionView";


 // Builder Buttons [PRE]

 // Builder Buttons [POST]
// Renderer Views




var SECTION_TYPES = {
  normal: {
    name: "Normal Block",
    description: "Normal block with a headline",
    value: 'normal',
    rowType: row["b" /* ROW_TYPES */].normal,
    builderView: NormalSectionView,
    rendererView: section_views_NormalSectionView
  },
  toggleable: {
    name: "Toggleable Block",
    description: "Section block with toggle (display/hide) feature",
    value: 'toggleable',
    rowType: row["b" /* ROW_TYPES */].normal,
    builderView: ToggleableSectionView,
    rendererView: section_views_ToggleableSectionView
  },
  tab: {
    name: "Tab Block",
    description: "A block with multiple tabs feature",
    value: "tab",
    rowType: row["b" /* ROW_TYPES */].tabRow,
    builderView: TabSectionView,
    rendererView: section_views_TabSectionView,
    preCustomButtonView: TabSectionPreButtons
  } // table: {
  //     name: "Table Block",
  //     description: "Section block built from a table with 2 column",
  //     value: 'table',
  //
  //     rowType: ROW_TYPES.tableRow,
  //     builderView: TableSectionView
  // },

};
/**
 * DEFAULT DATA in order to create/reread from the configuration
 */

var SECTION_DEFAULT_DATA = {
  uniqueId: '',
  headline: '',
  headlineAdditionalClass: '',
  subHeadline: '',
  subHeadlineAdditionalClass: '',
  isShowHeadline: true,
  hideOnReport: false,
  sortOrder: 0,
  type: '',
  rows: [],
  // array of rowId
  controls: [] // array of controlIds

};
/**
 * Create new Section
 * @param type
 * @param sortOrder
 */

function createNewSection(type) {
  var sortOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!SECTION_TYPES[type]) {
    throw new TypeError("Section Type: ".concat(type, " doesn't exists in Vue-Form-Builder"));
  } // create new section data base on the default data


  var newSectionData = helper["a" /* HELPER */].cloneDeep(SECTION_DEFAULT_DATA);
  newSectionData.type = type;
  newSectionData.uniqueId = "section-" + helper["a" /* HELPER */].getUUIDv4();
  newSectionData.headline = "New Section";
  newSectionData.subHeadline = "This is the sub-headline of the new section";
  newSectionData.sortOrder = sortOrder;
  return newSectionData;
}



/***/ }),

/***/ "df7c":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("4362")))

/***/ }),

/***/ "e11e":
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "e39c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
var toStr = Object.prototype.toString;

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return toStr.call(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		toStr.call(value) !== '[object Array]' &&
		toStr.call(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;


/***/ }),

/***/ "e3db":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "e3e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $WeakMap = typeof WeakMap === 'function' && WeakMap.prototype ? WeakMap : null;
var $WeakSet = typeof WeakSet === 'function' && WeakSet.prototype ? WeakSet : null;

var exported;

if (!$WeakMap) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakMap(x) {
		// `WeakMap` is not present in this environment.
		return false;
	};
}

var $mapHas = $WeakMap ? $WeakMap.prototype.has : null;
var $setHas = $WeakSet ? $WeakSet.prototype.has : null;
if (!exported && !$mapHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isWeakMap(x) {
		// `WeakMap` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isWeakMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x, $mapHas);
		if ($setHas) {
			try {
				$setHas.call(x, $setHas);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $WeakMap; // core-js workaround, pre-v3
	} catch (e) {}
	return false;
};


/***/ }),

/***/ "e4ae":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("f772");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "e53d":
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "e6f3":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("07e3");
var toIObject = __webpack_require__("36c3");
var arrayIndexOf = __webpack_require__("5b4e")(false);
var IE_PROTO = __webpack_require__("5559")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "e710":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("f367");
var callBind = __webpack_require__("44b7");

var implementation = __webpack_require__("5708");
var getPolyfill = __webpack_require__("57ec");
var shim = __webpack_require__("1c7e");

var flagsBound = callBind(implementation);

define(flagsBound, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = flagsBound;


/***/ }),

/***/ "e853":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("d3f4");
var isArray = __webpack_require__("1169");
var SPECIES = __webpack_require__("2b4c")('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),

/***/ "e9ac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* globals
	Atomics,
	SharedArrayBuffer,
*/

var undefined;

var $TypeError = TypeError;

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () { throw new $TypeError(); };
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__("5156")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var generator; // = function * () {};
var generatorFunction = generator ? getProto(generator) : undefined;
var asyncFn; // async function() {};
var asyncFunction = asyncFn ? asyncFn.constructor : undefined;
var asyncGen; // async function * () {};
var asyncGenFunction = asyncGen ? getProto(asyncGen) : undefined;
var asyncGenIterator = asyncGen ? asyncGen() : undefined;

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayBufferPrototype%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer.prototype,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%ArrayPrototype%': Array.prototype,
	'%ArrayProto_entries%': Array.prototype.entries,
	'%ArrayProto_forEach%': Array.prototype.forEach,
	'%ArrayProto_keys%': Array.prototype.keys,
	'%ArrayProto_values%': Array.prototype.values,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': asyncFunction,
	'%AsyncFunctionPrototype%': asyncFunction ? asyncFunction.prototype : undefined,
	'%AsyncGenerator%': asyncGen ? getProto(asyncGenIterator) : undefined,
	'%AsyncGeneratorFunction%': asyncGenFunction,
	'%AsyncGeneratorPrototype%': asyncGenFunction ? asyncGenFunction.prototype : undefined,
	'%AsyncIteratorPrototype%': asyncGenIterator && hasSymbols && Symbol.asyncIterator ? asyncGenIterator[Symbol.asyncIterator]() : undefined,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%Boolean%': Boolean,
	'%BooleanPrototype%': Boolean.prototype,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%DataViewPrototype%': typeof DataView === 'undefined' ? undefined : DataView.prototype,
	'%Date%': Date,
	'%DatePrototype%': Date.prototype,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%ErrorPrototype%': Error.prototype,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%EvalErrorPrototype%': EvalError.prototype,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float32ArrayPrototype%': typeof Float32Array === 'undefined' ? undefined : Float32Array.prototype,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%Float64ArrayPrototype%': typeof Float64Array === 'undefined' ? undefined : Float64Array.prototype,
	'%Function%': Function,
	'%FunctionPrototype%': Function.prototype,
	'%Generator%': generator ? getProto(generator()) : undefined,
	'%GeneratorFunction%': generatorFunction,
	'%GeneratorPrototype%': generatorFunction ? generatorFunction.prototype : undefined,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int8ArrayPrototype%': typeof Int8Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int16ArrayPrototype%': typeof Int16Array === 'undefined' ? undefined : Int8Array.prototype,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%Int32ArrayPrototype%': typeof Int32Array === 'undefined' ? undefined : Int32Array.prototype,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%JSONParse%': typeof JSON === 'object' ? JSON.parse : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%MapPrototype%': typeof Map === 'undefined' ? undefined : Map.prototype,
	'%Math%': Math,
	'%Number%': Number,
	'%NumberPrototype%': Number.prototype,
	'%Object%': Object,
	'%ObjectPrototype%': Object.prototype,
	'%ObjProto_toString%': Object.prototype.toString,
	'%ObjProto_valueOf%': Object.prototype.valueOf,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%PromisePrototype%': typeof Promise === 'undefined' ? undefined : Promise.prototype,
	'%PromiseProto_then%': typeof Promise === 'undefined' ? undefined : Promise.prototype.then,
	'%Promise_all%': typeof Promise === 'undefined' ? undefined : Promise.all,
	'%Promise_reject%': typeof Promise === 'undefined' ? undefined : Promise.reject,
	'%Promise_resolve%': typeof Promise === 'undefined' ? undefined : Promise.resolve,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%RangeErrorPrototype%': RangeError.prototype,
	'%ReferenceError%': ReferenceError,
	'%ReferenceErrorPrototype%': ReferenceError.prototype,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%RegExpPrototype%': RegExp.prototype,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SetPrototype%': typeof Set === 'undefined' ? undefined : Set.prototype,
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%SharedArrayBufferPrototype%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer.prototype,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%StringPrototype%': String.prototype,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SymbolPrototype%': hasSymbols ? Symbol.prototype : undefined,
	'%SyntaxError%': SyntaxError,
	'%SyntaxErrorPrototype%': SyntaxError.prototype,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypedArrayPrototype%': TypedArray ? TypedArray.prototype : undefined,
	'%TypeError%': $TypeError,
	'%TypeErrorPrototype%': $TypeError.prototype,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ArrayPrototype%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array.prototype,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint8ClampedArrayPrototype%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray.prototype,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint16ArrayPrototype%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array.prototype,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%Uint32ArrayPrototype%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array.prototype,
	'%URIError%': URIError,
	'%URIErrorPrototype%': URIError.prototype,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakMapPrototype%': typeof WeakMap === 'undefined' ? undefined : WeakMap.prototype,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet,
	'%WeakSetPrototype%': typeof WeakSet === 'undefined' ? undefined : WeakSet.prototype
};

var bind = __webpack_require__("0f7c");
var $replace = bind.call(Function.call, String.prototype.replace);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : (number || match);
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	if (!(name in INTRINSICS)) {
		throw new SyntaxError('intrinsic ' + name + ' does not exist!');
	}

	// istanbul ignore if // hopefully this is impossible to test :-)
	if (typeof INTRINSICS[name] === 'undefined' && !allowMissing) {
		throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
	}

	return INTRINSICS[name];
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);

	var value = getBaseIntrinsic('%' + (parts.length > 0 ? parts[0] : '') + '%', allowMissing);
	for (var i = 1; i < parts.length; i += 1) {
		if (value != null) {
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, parts[i]);
				if (!allowMissing && !(parts[i] in value)) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				value = desc ? (desc.get || desc.value) : value[parts[i]];
			} else {
				value = value[parts[i]];
			}
		}
	}
	return value;
};


/***/ }),

/***/ "ebd6":
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__("cb7c");
var aFunction = __webpack_require__("d8e8");
var SPECIES = __webpack_require__("2b4c")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "ebfd":
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__("62a0")('meta');
var isObject = __webpack_require__("f772");
var has = __webpack_require__("07e3");
var setDesc = __webpack_require__("d9f6").f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__("294c")(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),

/***/ "ec30":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__("9e1e")) {
  var LIBRARY = __webpack_require__("2d00");
  var global = __webpack_require__("7726");
  var fails = __webpack_require__("79e5");
  var $export = __webpack_require__("5ca1");
  var $typed = __webpack_require__("0f88");
  var $buffer = __webpack_require__("ed0b");
  var ctx = __webpack_require__("9b43");
  var anInstance = __webpack_require__("f605");
  var propertyDesc = __webpack_require__("4630");
  var hide = __webpack_require__("32e9");
  var redefineAll = __webpack_require__("dcbc");
  var toInteger = __webpack_require__("4588");
  var toLength = __webpack_require__("9def");
  var toIndex = __webpack_require__("09fa");
  var toAbsoluteIndex = __webpack_require__("77f1");
  var toPrimitive = __webpack_require__("6a99");
  var has = __webpack_require__("69a8");
  var classof = __webpack_require__("23c6");
  var isObject = __webpack_require__("d3f4");
  var toObject = __webpack_require__("4bf8");
  var isArrayIter = __webpack_require__("33a4");
  var create = __webpack_require__("2aeb");
  var getPrototypeOf = __webpack_require__("38fd");
  var gOPN = __webpack_require__("9093").f;
  var getIterFn = __webpack_require__("27ee");
  var uid = __webpack_require__("ca5a");
  var wks = __webpack_require__("2b4c");
  var createArrayMethod = __webpack_require__("0a49");
  var createArrayIncludes = __webpack_require__("c366");
  var speciesConstructor = __webpack_require__("ebd6");
  var ArrayIterators = __webpack_require__("cadf");
  var Iterators = __webpack_require__("84f2");
  var $iterDetect = __webpack_require__("5cc5");
  var setSpecies = __webpack_require__("7a56");
  var arrayFill = __webpack_require__("36bd");
  var arrayCopyWithin = __webpack_require__("ba92");
  var $DP = __webpack_require__("86cc");
  var $GOPD = __webpack_require__("11e9");
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),

/***/ "ed0b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__("7726");
var DESCRIPTORS = __webpack_require__("9e1e");
var LIBRARY = __webpack_require__("2d00");
var $typed = __webpack_require__("0f88");
var hide = __webpack_require__("32e9");
var redefineAll = __webpack_require__("dcbc");
var fails = __webpack_require__("79e5");
var anInstance = __webpack_require__("f605");
var toInteger = __webpack_require__("4588");
var toLength = __webpack_require__("9def");
var toIndex = __webpack_require__("09fa");
var gOPN = __webpack_require__("9093").f;
var dP = __webpack_require__("86cc").f;
var arrayFill = __webpack_require__("36bd");
var setToStringTag = __webpack_require__("7f20");
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),

/***/ "edc4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var forEach = __webpack_require__("bfad");
var availableTypedArrays = __webpack_require__("7226");
var callBound = __webpack_require__("2a1a");

var $toString = callBound('Object.prototype.toString');
var hasSymbols = __webpack_require__("5156")();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';

var typedArrays = availableTypedArrays();

var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = __webpack_require__("1dd1");
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		if (typeof global[typedArray] === 'function') {
			var arr = new global[typedArray]();
			if (!(Symbol.toStringTag in arr)) {
				throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
			}
			var proto = getPrototypeOf(arr);
			var descriptor = gOPD(proto, Symbol.toStringTag);
			if (!descriptor) {
				var superProto = getPrototypeOf(proto);
				descriptor = gOPD(superProto, Symbol.toStringTag);
			}
			toStrTags[typedArray] = descriptor.get;
		}
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var foundName = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!foundName) {
			try {
				var name = getter.call(value);
				if (name === typedArray) {
					foundName = name;
				}
			} catch (e) {}
		}
	});
	return foundName;
};

var isTypedArray = __webpack_require__("f4e3");

module.exports = function whichTypedArray(value) {
	if (!isTypedArray(value)) { return false; }
	if (!hasToStringTag) { return $slice($toString(value), 8, -1); }
	return tryTypedArrays(value);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "f11f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__("f367");
var getPolyfill = __webpack_require__("c8ba6");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "f1ae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__("86cc");
var createDesc = __webpack_require__("4630");

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),

/***/ "f367":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__("d6c7");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "f410":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("1af6");
module.exports = __webpack_require__("584a").Array.isArray;


/***/ }),

/***/ "f4e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var forEach = __webpack_require__("bfad");
var availableTypedArrays = __webpack_require__("7226");
var callBound = __webpack_require__("2a1a");

var $toString = callBound('Object.prototype.toString');
var hasSymbols = __webpack_require__("5156")();
var hasToStringTag = hasSymbols && typeof Symbol.toStringTag === 'symbol';

var typedArrays = availableTypedArrays();

var $indexOf = callBound('Array.prototype.indexOf', true) || function indexOf(array, value) {
	for (var i = 0; i < array.length; i += 1) {
		if (array[i] === value) {
			return i;
		}
	}
	return -1;
};
var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = __webpack_require__("1dd1");
var getPrototypeOf = Object.getPrototypeOf; // require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
	forEach(typedArrays, function (typedArray) {
		var arr = new global[typedArray]();
		if (!(Symbol.toStringTag in arr)) {
			throw new EvalError('this engine has support for Symbol.toStringTag, but ' + typedArray + ' does not have the property! Please report this.');
		}
		var proto = getPrototypeOf(arr);
		var descriptor = gOPD(proto, Symbol.toStringTag);
		if (!descriptor) {
			var superProto = getPrototypeOf(proto);
			descriptor = gOPD(superProto, Symbol.toStringTag);
		}
		toStrTags[typedArray] = descriptor.get;
	});
}

var tryTypedArrays = function tryAllTypedArrays(value) {
	var anyTrue = false;
	forEach(toStrTags, function (getter, typedArray) {
		if (!anyTrue) {
			try {
				anyTrue = getter.call(value) === typedArray;
			} catch (e) { /**/ }
		}
	});
	return anyTrue;
};

module.exports = function isTypedArray(value) {
	if (!value || typeof value !== 'object') { return false; }
	if (!hasToStringTag) {
		var tag = $slice($toString(value), 8, -1);
		return $indexOf(typedArrays, tag) > -1;
	}
	if (!gOPD) { return false; }
	return tryTypedArrays(value);
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "f605":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "f921":
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("014b");
__webpack_require__("c207");
__webpack_require__("69d3");
__webpack_require__("765d");
module.exports = __webpack_require__("584a").Symbol;


/***/ }),

/***/ "fa5b":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("5537")('native-function-to-string', Function.toString);


/***/ }),

/***/ "fab2":
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__("7726").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "VueFormBuilderPlugin", function() { return /* reexport */ src_0["e" /* VueFormBuilderPlugin */]; });
__webpack_require__.d(__webpack_exports__, "FormBuilder", function() { return /* reexport */ src_0["c" /* FormBuilder */]; });
__webpack_require__.d(__webpack_exports__, "FormRenderer", function() { return /* reexport */ src_0["d" /* FormRenderer */]; });
__webpack_require__.d(__webpack_exports__, "BaseControlSkeleton", function() { return /* reexport */ src_0["b" /* BaseControlSkeleton */]; });
__webpack_require__.d(__webpack_exports__, "BaseControlConfigSkeleton", function() { return /* reexport */ src_0["a" /* BaseControlConfigSkeleton */]; });

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

// EXTERNAL MODULE: ./src/index.js
var src_0 = __webpack_require__("b635");

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js




/***/ }),

/***/ "fbdb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormRenderer.vue?vue&type=template&id=4c01440f&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:[_vm.styles.CONTAINER.FLUID, 'form-padding', 'vue-form-renderer']},[(_vm.formData.formConfig.renderFormTag)?_c('form',{attrs:{"action":_vm.formData.formConfig.formActionURL,"method":_vm.formData.formConfig.formMethod,"id":_vm.formTagId},on:{"submit":function($event){$event.preventDefault();}}},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.formData.formConfig.isShowHeadline),expression:"formData.formConfig.isShowHeadline"}],staticClass:"form-headline-container"},[_c('h1',{domProps:{"textContent":_vm._s(_vm.formData.formConfig.headline)}}),_c('p',{domProps:{"textContent":_vm._s(_vm.formData.formConfig.subHeadline)}})]),_vm._l((_vm.sortedSections),function(sectionData){return _c('SectionContainer',{key:sectionData.uniqueId,attrs:{"section":sectionData,"rows":_vm.formData.rows,"controls":_vm.formData.controls,"value-container":_vm.valueContainer,"validation-errors":_vm.validationErrors}})})],2):[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.formData.formConfig.isShowHeadline),expression:"formData.formConfig.isShowHeadline"}],staticClass:"form-headline-container"},[_c('h1',{domProps:{"textContent":_vm._s(_vm.formData.formConfig.headline)}}),_c('p',{domProps:{"textContent":_vm._s(_vm.formData.formConfig.subHeadline)}})]),_vm._l((_vm.sortedSections),function(sectionData){return _c('SectionContainer',{key:sectionData.uniqueId,attrs:{"section":sectionData,"rows":_vm.formData.rows,"controls":_vm.formData.controls,"value-container":_vm.valueContainer,"validation-errors":_vm.validationErrors}})})]],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/FormRenderer.vue?vue&type=template&id=4c01440f&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js
var esm_typeof = __webpack_require__("7618");

// EXTERNAL MODULE: ./src/configs/controls.js + 77 modules
var configs_controls = __webpack_require__("8dbe");

// CONCATENATED MODULE: ./src/mixins/form-renderer/model.js





/**
 * V-Model of Form-Renderer
 */

var EMIT_EVENT = "change";
var MODEL = {
  props: {
    value: Object
  },
  model: {
    event: EMIT_EVENT,
    props: "value"
  },
  data: function data() {
    return {
      valueContainer: null
    };
  },
  watch: {
    value: {
      deep: true,
      handler: function handler(val) {
        if (Object(esm_typeof["a" /* default */])(val) !== 'object') {
          return;
        } // set value for fields


        Object.assign(this.valueContainer, val);
      }
    },
    valueContainer: {
      deep: true,
      handler: function handler(val) {
        if (!val) return;
        this.$emit(EMIT_EVENT, this.valueContainer);
      }
    }
  },
  methods: {
    /**
     * Create Value Container to Store the Data
     */
    createValueContainer: function createValueContainer() {
      var _this = this;

      var containerObj = {};
      var controlIds = Object.keys(this.formData.controls);
      controlIds.forEach(function (controlId) {
        var controlItem = _this.formData.controls[controlId]; // if disableValue is provided, we don't need to solve more for the control

        if (typeof configs_controls["a" /* CONTROLS */][controlItem.type].disableValue === 'boolean' && configs_controls["a" /* CONTROLS */][controlItem.type].disableValue) {
          return;
        } // get the key-name value


        var name = controlItem.name;

        if (!name) {
          // fall-back to id if no name
          name = controlId;
        } // add new empty field value


        containerObj[name] = ""; // if the control has default factory creation closure, run it

        if (typeof configs_controls["a" /* CONTROLS */][controlItem.type].rendererDefaultData === 'function') {
          containerObj[name] = configs_controls["a" /* CONTROLS */][controlItem.type].rendererDefaultData(controlItem);
        }
      }); // emit to the parent for the value detail

      if (this.value) {
        this.$emit(EMIT_EVENT, containerObj);
        Object.assign(containerObj, this.value);
      } // set to the real handler


      this.valueContainer = containerObj;
    }
  },
  created: function created() {
    this.createValueContainer();
  }
};

// CONCATENATED MODULE: ./src/configs/global.js
var GLOBAL_CONFIG = {
  rendererFormId: "vue-form-render-pro-max" // ID of <form> for Renderer

};

// CONCATENATED MODULE: ./src/mixins/form-renderer/configuration.js
/**
 * Form-Renderer Configuration Handler
 */


var deepEqual = __webpack_require__("7fae"); // TO CHECK THE DEEPEST VALUES OF THE FORM...


var CONFIGURATION = {
  props: {
    /**
     * The main form configuration that generated from FormBuilder
     */
    formConfiguration: {
      type: Object,
      required: true
    }
  },
  watch: {
    /**
     * Watching the configuration, if user change it => need to re-updated the form itself
     */
    formConfiguration: {
      deep: true,
      handler: function handler(val) {
        if (deepEqual(val, this.formData)) {
          return;
        }

        this.mapping(val);
        this.createValueContainer(val);
      }
    }
  },
  created: function created() {
    this.mapping(this.formConfiguration);
  },
  computed: {
    /**
     * Get the <form> id
     * @returns {string}
     */
    formTagId: function formTagId() {
      return GLOBAL_CONFIG.rendererFormId;
    }
  }
};

// EXTERNAL MODULE: ./src/mixins/style-injection-mixin.js
var style_injection_mixin = __webpack_require__("28fe");

// EXTERNAL MODULE: ./src/mixins/form-builder/form-builder-methods.js + 1 modules
var form_builder_methods = __webpack_require__("bcc7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__("ac4d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.iterator.js
var es6_string_iterator = __webpack_require__("5df3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.from.js
var es6_array_from = __webpack_require__("1c4c");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__("6b54");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__("768b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.entries.js
var es7_object_entries = __webpack_require__("ffc1");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("d225");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js
var define_property = __webpack_require__("85f2");
var define_property_default = /*#__PURE__*/__webpack_require__.n(define_property);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    define_property_default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("bd86");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./src/configs/validation.js
var validation = __webpack_require__("a786");

// CONCATENATED MODULE: ./src/libraries/classes/validation-result.class.js






var validation_result_class_ValidationResult = /*#__PURE__*/function () {
  function ValidationResult() {
    Object(classCallCheck["a" /* default */])(this, ValidationResult);

    Object(defineProperty["a" /* default */])(this, "hasError", false);

    Object(defineProperty["a" /* default */])(this, "errorBuckets", {});
  }

  _createClass(ValidationResult, [{
    key: "errors",

    /**
     * Check if the validation is successfully or not
     * @returns {boolean}
     */
    value: function errors() {
      return this.hasError;
    }
    /**
     * Add error and generate error message
     * @param {String} fieldName
     * @param {ValidationRule} validationRule
     */

  }, {
    key: "addError",
    value: function addError(fieldName, validationRule) {
      this.hasError = true;

      if (!this.errorBuckets[fieldName]) {
        this.errorBuckets[fieldName] = [];
      } // generate error message and add it


      var errorMessage = validationRule.errorMessage || validation["a" /* VALIDATION_RULES */][validationRule.ruleType].errorMessage; // if it has replaceable variable => replace it (:mix, :max, :lol)

      var replaceableVar = ":".concat(validationRule.ruleType);

      if (errorMessage.indexOf(replaceableVar) >= 0) {
        errorMessage = errorMessage.replace(replaceableVar, validationRule.additionalValue);
      } // add the error message


      this.errorBuckets[fieldName].push(errorMessage);
    }
  }]);

  return ValidationResult;
}();


// CONCATENATED MODULE: ./src/libraries/validations/required.js
/**
 * Require check for validation
 * @param {any} fieldValue
 * @return {boolean}
 */
function requiredRule(fieldValue) {
  // for checkboxes / multiple dropdown
  if (Array.isArray(fieldValue)) {
    return fieldValue.length > 0;
  } // for text/number/any...


  if (fieldValue === "") {
    return false;
  }

  return true;
}
// CONCATENATED MODULE: ./src/libraries/validations/min.js
/**
 * Check min value for a field
 * - Text => min length
 * - Number => min value
 * - Checkboxes => min selected items
 * @param {any} fieldValue
 * @param {number} constraintValue
 * @return {boolean}
 */
function minRule(fieldValue, constraintValue) {
  var minVal = parseInt(constraintValue); // let's check - first is array

  if (Array.isArray(fieldValue)) {
    return fieldValue.length >= minVal;
  } // second, number
  // second, number


  if (typeof fieldValue === 'number') {
    return fieldValue >= minVal;
  } // lastly, string


  return fieldValue.length >= minVal;
}
// CONCATENATED MODULE: ./src/libraries/validations/max.js
/**
 * Check max value for a field
 * - Text => max length
 * - Number => max value
 * - Checkboxes => max selected items
 * @param {any} fieldValue
 * @param {number} constraintValue
 * @return {boolean}
 */
function maxRule(fieldValue, constraintValue) {
  var minVal = parseInt(constraintValue); // let's check - first is array

  if (Array.isArray(fieldValue)) {
    return fieldValue.length <= minVal;
  } // second, number


  if (typeof fieldValue === 'number') {
    return fieldValue <= minVal;
  } // lastly, string


  return fieldValue.length <= minVal;
}
// CONCATENATED MODULE: ./src/libraries/validations/is-email.js
/**
 * Check if the field is truly email or not
 * @param {any} fieldValue
 * @return {boolean}
 */
function isEmailRule(fieldValue) {
  var REGEX_RULE = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return REGEX_RULE.test(fieldValue);
}
// CONCATENATED MODULE: ./src/libraries/validations/same-as.js
/**
 * Same-As check (field must be same as another field in the form)
 * @param {any} fieldValue
 * @param {any} fieldToCheck
 * @param {Object} valuesContainer
 * @return {boolean}
 */
function sameAsRule(fieldValue, fieldToCheck, valuesContainer) {
  if (!valuesContainer[fieldToCheck]) {
    return false;
  }

  return fieldValue === valuesContainer[fieldToCheck];
}
// CONCATENATED MODULE: ./src/libraries/validations/custom-closure.js
/**
 * Run custom closure of to check
 * @param {any} fieldValue
 * @param {any} customClosureName
 * @param {Object} valuesContainer
 * @param {Object} customClosures
 * @return {boolean}
 */
function customClosureRule(fieldValue, customClosureName, valuesContainer, customClosures) {
  // since there no closure registered, no need to run and it always true
  if (typeof customClosures[customClosureName] !== 'function') {
    console.error("Custom Validation Closure ".concat(customClosureName, " does not exists. Bypassed"));
    return true;
  }

  var closure = customClosures[customClosureName];
  /**
   * Custom closure can access field value & valuesContainer as well
   */

  var result = closure(fieldValue, valuesContainer); // because it might be null/undefined => falsy will be false

  if (!result) {
    return false;
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.constructor.js
var es6_regexp_constructor = __webpack_require__("3b2b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.split.js
var es6_regexp_split = __webpack_require__("28a5");

// CONCATENATED MODULE: ./src/libraries/validations/regex.js



/**
 * Check if the field is truly email or not
 * @param {any} fieldValue
 * @param {string} regexRule - RegexRule|Flag. Note: RegexRule without / at the beginning and the end
 * @return {boolean}
 */
function isRegexPassed(fieldValue, regexRule) {
  var splitRules = regexRule.split("|");
  var strRegexRule = splitRules[0];
  var strRegexFlag = splitRules[1] || "g";
  var regExp = new RegExp(strRegexRule, strRegexFlag);
  return regExp.test(fieldValue);
}
// CONCATENATED MODULE: ./src/libraries/validation.js
















function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var validation_Validation = /*#__PURE__*/function () {
  /**
   * Validation Result. Always create a new instance every time the validation is run
   * @type {ValidationResult}
   */

  /**
   * Create a new Validation handler
   * @param {Object} valueContainer
   * @param {Object} controls
   * @param {Object} definedClosures
   */
  function Validation(valueContainer, controls) {
    var definedClosures = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    Object(classCallCheck["a" /* default */])(this, Validation);

    Object(defineProperty["a" /* default */])(this, "rules", null);

    Object(defineProperty["a" /* default */])(this, "valueContainer", null);

    Object(defineProperty["a" /* default */])(this, "customClosures", {});

    Object(defineProperty["a" /* default */])(this, "validationResult", null);

    this.valueContainer = valueContainer;
    this.validationClosures = definedClosures;
    this.setRules(controls);
  }
  /**
   * Set validation rules from the controls
   * @param {{validations: ValidationRule[]}} controls
   */


  _createClass(Validation, [{
    key: "setRules",
    value: function setRules(controls) {
      var _this = this;

      var rules = {}; // traversal all control and pick the validations info

      Object.entries(controls).forEach(function (controlInfo) {
        var _controlInfo = Object(slicedToArray["a" /* default */])(controlInfo, 2),
            controlId = _controlInfo[0],
            controlItem = _controlInfo[1];

        var controlName = controlItem.name || controlId; // no name => this field didn't have value

        if (!_this.valueContainer.hasOwnProperty(controlName)) {
          return;
        }

        rules[controlName] = controlItem.validations;
      });
      this.rules = rules;
    }
    /**
     * Start a validation check
     * @return {ValidationResult}
     */

  }, {
    key: "run",
    value: function run() {
      this.validationResult = new validation_result_class_ValidationResult();
      var controlKeys = Object.keys(this.rules);

      for (var _i = 0, _controlKeys = controlKeys; _i < _controlKeys.length; _i++) {
        var key = _controlKeys[_i];
        // pickup basic data
        var controlValue = this.valueContainer[key];
        var controlRules = this.rules[key] || []; // no rule no run

        if (!controlRules.length) {
          continue;
        }
        /**
         * start the validation process by each rules added for the control
         */


        var _iterator = _createForOfIteratorHelper(controlRules),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var validationRule = _step.value;

            if (!Object.keys(validationRule).includes('ruleType')) {
              console.log('CAMPO COM VALIDACAO INCORRETA: ', key);
              continue;
            }

            var status = this._singleRuleRun(validationRule, controlValue);

            if (!status) {
              this.validationResult.addError(key, validationRule);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }

      return this.validationResult;
    }
    /**
     * Run single rule to check
     * @param {ValidationRule} validationRule
     * @param {any} fieldValue
     * @private
     */

  }, {
    key: "_singleRuleRun",
    value: function _singleRuleRun(validationRule, fieldValue) {
      switch (validationRule.ruleType) {
        case "required":
          return requiredRule(fieldValue);

        case "min":
          return minRule(fieldValue, validationRule.additionalValue);

        case "max":
          return maxRule(fieldValue, validationRule.additionalValue);

        case "isEmail":
          return isEmailRule(fieldValue);

        case "sameAs":
          return sameAsRule(fieldValue, validationRule.additionalValue, this.valueContainer);

        case "customClosure":
          return customClosureRule(fieldValue, validationRule.additionalValue, this.valueContainer, this.customClosures);

        case "regex":
          return isRegexPassed(fieldValue, validationRule.additionalValue);

        default:
          throw new TypeError("This validation type ".concat(validationRule.ruleType, " is not supported."));
      }
    }
  }]);

  return Validation;
}();


// EXTERNAL MODULE: ./src/configs/events.js
var events = __webpack_require__("fbe6");

// EXTERNAL MODULE: ./src/libraries/alert-dialog.js
var alert_dialog = __webpack_require__("caca");

// CONCATENATED MODULE: ./src/mixins/form-renderer/validation.js



var VALIDATION_MIXIN = {
  data: function data() {
    return {
      validationErrors: {}
    };
  },
  methods: {
    /**
     * Run the validation process
     */
    runValidation: function runValidation() {
      // always clear validation before run...
      this.$set(this, 'validationErrors', {}); // run the validation

      var result = this.$form.Validation.run(); // field-error handling

      if (result.errors()) {
        // use set for reactive...
        this.$set(this, 'validationErrors', result.errorBuckets);

        if (this.$form.validationErrorShowAlert) {
          alert_dialog["a" /* ALERT_DIALOG */].show(this.$form.validationErrorAlertText);
        }

        return;
      } // ok emit to all listener if they want to know the validation is ok or not


      this.$formEvent.$emit(events["a" /* EVENT_CONSTANTS */].RENDERER.VALIDATION_OK, true);
    }
  },

  /**
   * Dependencies Injection into the Form-Renderer.
   */
  created: function created() {
    // create validation instance
    this.$form.Validation = new validation_Validation(this.valueContainer, this.formData.controls, this.$form.validationClosures || {}); // listen to validation invoke

    this.$formEvent.$on(events["a" /* EVENT_CONSTANTS */].RENDERER.RUN_VALIDATION, this.runValidation);
  }
};

// CONCATENATED MODULE: ./src/mixins/form-renderer-mixins.js





/* harmony default export */ var form_renderer_mixins = ([CONFIGURATION, MODEL, style_injection_mixin["a" /* STYLE_INJECTION_MIXIN */], form_builder_methods["a" /* FORM_BUILDER_METHODS */], VALIDATION_MIXIN]);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"8964a512-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/renderer/SectionContainer.vue?vue&type=template&id=1fc0cf85&scoped=true&
var SectionContainervue_type_template_id_1fc0cf85_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-container"},[_c(_vm.sectionViewComponent,{key:_vm.section.uniqueId,tag:"component",attrs:{"section":_vm.section,"rows":_vm.rows,"controls":_vm.controls,"value-container":_vm.valueContainer,"validation-errors":_vm.validationErrors}})],1)}
var SectionContainervue_type_template_id_1fc0cf85_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./src/views/renderer/SectionContainer.vue?vue&type=template&id=1fc0cf85&scoped=true&

// EXTERNAL MODULE: ./src/configs/section.js + 121 modules
var section = __webpack_require__("dd3c");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/renderer/SectionContainer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var SectionContainervue_type_script_lang_js_ = ({
  name: "SectionContainer",
  props: {
    section: Object,
    rows: Object,
    controls: Object,
    valueContainer: Object,
    validationErrors: Object
  },
  computed: {
    sectionViewComponent: function sectionViewComponent() {
      return section["b" /* SECTION_TYPES */][this.section.type].rendererView;
    }
  }
});
// CONCATENATED MODULE: ./src/views/renderer/SectionContainer.vue?vue&type=script&lang=js&
 /* harmony default export */ var renderer_SectionContainervue_type_script_lang_js_ = (SectionContainervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/views/renderer/SectionContainer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  renderer_SectionContainervue_type_script_lang_js_,
  SectionContainervue_type_template_id_1fc0cf85_scoped_true_render,
  SectionContainervue_type_template_id_1fc0cf85_scoped_true_staticRenderFns,
  false,
  null,
  "1fc0cf85",
  null
  
)

/* harmony default export */ var SectionContainer = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/FormRenderer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var FormRenderervue_type_script_lang_js_ = ({
  name: "FormRenderer",
  components: {
    SectionContainer: SectionContainer
  },
  mixins: form_renderer_mixins,
  data: function data() {
    return {
      formData: null
    };
  }
});
// CONCATENATED MODULE: ./src/components/FormRenderer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_FormRenderervue_type_script_lang_js_ = (FormRenderervue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/FormRenderer.vue





/* normalize component */

var FormRenderer_component = Object(componentNormalizer["a" /* default */])(
  components_FormRenderervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var FormRenderer = __webpack_exports__["a"] = (FormRenderer_component.exports);

/***/ }),

/***/ "fbe6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EVENT_CONSTANTS; });
/**
 * Event-Communication Constants in Vue-Form-Builder
 * @author Phat Tran <phattranminh96@gmai.com>
 */
var EVENT_CONSTANTS = {
  /**
   * Constants for Form-Builder
   */
  BUILDER: {
    SECTION: {
      ADDED_ROW: "builder.section.added_row",
      DELETE: "builder.section.delete",
      UPDATE: "builder.section.update",
      // section sort
      PUSH: "builder.section.push"
    },
    ROW: {
      CREATE: "builder.row.create",
      UPDATE: "builder.row.update",
      DELETE: "builder.row.delete",
      DELETED: "builder.row.deleted",
      // For Tab View
      ADD_TAB: "builder.row.add_tab"
    },
    CONTROL: {
      CREATE: "builder.control.create",
      UPDATE: "builder.control.update",
      DELETE: "builder.control.delete",
      DELETED: "builder.control.deleted",
      SORT: "builder.control.delete"
    },

    /**
     * GLOBAL SIDEBAR EVENTS
     */
    SIDEBAR: {
      INJECT: "builder.sidebar.inject",
      OPEN: "builder.sidebar.open",
      OPENED: "builder.sidebar.opened",
      SAVE: "builder.sidebar.save",
      SAVE_AND_CLOSE: "builder.sidebar.save_and_close",
      AFTER_CLOSED: "builder.sidebar.after_closed"
    },

    /**
     * GLOBAL MODAL EVENTS
     */
    MODAL: {
      INJECT: "builder.modal.inject",
      OPEN: "builder.modal.open",
      OPENED: "builder.modal.opened",
      SAVE: "builder.modal.save",
      SAVE_AND_CLOSE: "builder.modal.save_and_close",
      AFTER_CLOSED: "builder.modal.after_closed"
    }
  },

  /**
   * Constants for Form-Renderer
   */
  RENDERER: {
    RUN_VALIDATION: "renderer.run_validation",
    VALIDATION_OK: "renderer.validation_ok"
  }
};


/***/ }),

/***/ "fd13":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $Map = typeof Map === 'function' && Map.prototype ? Map : null;
var $Set = typeof Set === 'function' && Set.prototype ? Set : null;

var exported;

if (!$Map) {
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// `Map` is not present in this environment.
		return false;
	};
}

var $mapHas = $Map ? Map.prototype.has : null;
var $setHas = $Set ? Set.prototype.has : null;
if (!exported && !$mapHas) {
	// eslint-disable-next-line no-unused-vars
	exported = function isMap(x) {
		// `Map` does not have a `has` method
		return false;
	};
}

module.exports = exported || function isMap(x) {
	if (!x || typeof x !== 'object') {
		return false;
	}
	try {
		$mapHas.call(x);
		if ($setHas) {
			try {
				$setHas.call(x);
			} catch (e) {
				return true;
			}
		}
		return x instanceof $Map; // core-js workaround, pre-v2.5.0
	} catch (e) {}
	return false;
};


/***/ }),

/***/ "fec5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;
var hasSymbols = __webpack_require__("5156")();

if (hasSymbols) {
	var symToStr = Symbol.prototype.toString;
	var symStringRegex = /^Symbol\(.*\)$/;
	var isSymbolObject = function isRealSymbolObject(value) {
		if (typeof value.valueOf() !== 'symbol') {
			return false;
		}
		return symStringRegex.test(symToStr.call(value));
	};

	module.exports = function isSymbol(value) {
		if (typeof value === 'symbol') {
			return true;
		}
		if (toStr.call(value) !== '[object Symbol]') {
			return false;
		}
		try {
			return isSymbolObject(value);
		} catch (e) {
			return false;
		}
	};
} else {

	module.exports = function isSymbol(value) {
		// this environment does not support Symbols.
		return  false && false;
	};
}


/***/ }),

/***/ "ffc1":
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__("5ca1");
var $entries = __webpack_require__("504c")(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ })

/******/ });
});