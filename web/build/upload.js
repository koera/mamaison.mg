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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/upload.image.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/constant.js":
/*!*******************************!*\
  !*** ./assets/js/constant.js ***!
  \*******************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var FORM_NAME_NO_ARRAY = exports.FORM_NAME_NO_ARRAY = {
    'adresse': ['adresse', 'ville.nom', 'region.nom', 'quartier.nom', 'titre', 'descripton'],
    'ville': 'ville.id',
    'region': 'region.id',
    'quartier': 'quartier.id'
};
var FORM_NAME_ARRAY = exports.FORM_NAME_ARRAY = {
    'category[]': 'category.id',
    'caracteristique[]': 'caracteristique.id'
};

var BASE_URL = exports.BASE_URL = 'https://www.mamaison.mg/app_dev.php';

var IMAGE_URL = exports.IMAGE_URL = BASE_URL + '/gallery/view/thumbs';

var IMAGE_DETAIL_URL = exports.IMAGE_DETAIL_URL = BASE_URL + '/propriete/detail';

var INDEX_NAME = exports.INDEX_NAME = 'mamaison';

var TYPE_NAME = exports.TYPE_NAME = 'annonces';

/***/ }),

/***/ "./assets/js/upload.image.js":
/*!***********************************!*\
  !*** ./assets/js/upload.image.js ***!
  \***********************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _constant = __webpack_require__(/*! ./constant */ "./assets/js/constant.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var imageIndex = $('#image-index').val();

var url = _constant.BASE_URL + '/mon-compte/ajout-propriete/gallery';

function readURL(input) {

    if (input.files && input.files[0]) {}
}

$('#btn-upload-image').on('change', function (event) {
    var file = event.target.files;
    var data = new FormData();
    data.append('file', file[0]);

    if (typeof imageIndex === 'undefined') {
        imageIndex = 0;
    }

    if (imageIndex == 6) imageIndex = 0;

    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        cache: false,
        dataType: 'json',
        processData: false,
        contentType: false,
        success: function success(data, textStatus, jqXHR) {
            if (typeof data.error === 'undefined') {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#image-' + imageIndex).attr('src', e.target.result);
                    $('#input-image-' + imageIndex).attr('value', data.gallery_id);
                    imageIndex++;
                };

                reader.readAsDataURL(file[0]);
            } else {
                console.log('ERRORS: ' + data.error);
            }
        },
        error: function error(jqXHR, textStatus, errorThrown) {
            console.log('ERRORS: ' + textStatus);
            console.log('ERRORS: ' + jqXHR);
            console.log('ERRORS: ' + errorThrown);
        }
    });
});

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
(function (global, factory) {

    "use strict";

    if (typeof module === "object" && typeof module.exports === "object") {

        // For CommonJS and CommonJS-like environments where a proper `window`
        // is present, execute the factory and get jQuery.
        // For environments that do not have a `window` with a `document`
        // (such as Node.js), expose a factory as module.exports.
        // This accentuates the need for the creation of a real `window`.
        // e.g. var jQuery = require("jquery")(window);
        // See ticket #14549 for more info.
        module.exports = global.document ?
            factory(global, true) :
            function (w) {
                if (!w.document) {
                    throw new Error("jQuery requires a window with a document");
                }
                return factory(w);
            };
    } else {
        factory(global);
    }

// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
    "use strict";

    var arr = [];

    var document = window.document;

    var getProto = Object.getPrototypeOf;

    var slice = arr.slice;

    var concat = arr.concat;

    var push = arr.push;

    var indexOf = arr.indexOf;

    var class2type = {};

    var toString = class2type.toString;

    var hasOwn = class2type.hasOwnProperty;

    var fnToString = hasOwn.toString;

    var ObjectFunctionString = fnToString.call(Object);

    var support = {};

    var isFunction = function isFunction(obj) {

        // Support: Chrome <=57, Firefox <=52
        // In some browsers, typeof returns "function" for HTML <object> elements
        // (i.e., `typeof document.createElement( "object" ) === "function"`).
        // We don't want to classify *any* DOM node as a function.
        return typeof obj === "function" && typeof obj.nodeType !== "number";
    };


    var isWindow = function isWindow(obj) {
        return obj != null && obj === obj.window;
    };


    var preservedScriptAttributes = {
        type: true,
        src: true,
        noModule: true
    };

    function DOMEval(code, doc, node) {
        doc = doc || document;

        var i,
            script = doc.createElement("script");

        script.text = code;
        if (node) {
            for (i in preservedScriptAttributes) {
                if (node[i]) {
                    script[i] = node[i];
                }
            }
        }
        doc.head.appendChild(script).parentNode.removeChild(script);
    }


    function toType(obj) {
        if (obj == null) {
            return obj + "";
        }

        // Support: Android <=2.3 only (functionish RegExp)
        return typeof obj === "object" || typeof obj === "function" ?
            class2type[toString.call(obj)] || "object" :
            typeof obj;
    }

    /* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module


    var
        version = "3.3.1",

        // Define a local copy of jQuery
        jQuery = function (selector, context) {

            // The jQuery object is actually just the init constructor 'enhanced'
            // Need init if jQuery is called (just allow error to be thrown if not included)
            return new jQuery.fn.init(selector, context);
        },

        // Support: Android <=4.0 only
        // Make sure we trim BOM and NBSP
        rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    jQuery.fn = jQuery.prototype = {

        // The current version of jQuery being used
        jquery: version,

        constructor: jQuery,

        // The default length of a jQuery object is 0
        length: 0,

        toArray: function () {
            return slice.call(this);
        },

        // Get the Nth element in the matched element set OR
        // Get the whole matched element set as a clean array
        get: function (num) {

            // Return all the elements in a clean array
            if (num == null) {
                return slice.call(this);
            }

            // Return just the one element from the set
            return num < 0 ? this[num + this.length] : this[num];
        },

        // Take an array of elements and push it onto the stack
        // (returning the new matched element set)
        pushStack: function (elems) {

            // Build a new jQuery matched element set
            var ret = jQuery.merge(this.constructor(), elems);

            // Add the old object onto the stack (as a reference)
            ret.prevObject = this;

            // Return the newly-formed element set
            return ret;
        },

        // Execute a callback for every element in the matched set.
        each: function (callback) {
            return jQuery.each(this, callback);
        },

        map: function (callback) {
            return this.pushStack(jQuery.map(this, function (elem, i) {
                return callback.call(elem, i, elem);
            }));
        },

        slice: function () {
            return this.pushStack(slice.apply(this, arguments));
        },

        first: function () {
            return this.eq(0);
        },

        last: function () {
            return this.eq(-1);
        },

        eq: function (i) {
            var len = this.length,
                j = +i + (i < 0 ? len : 0);
            return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
        },

        end: function () {
            return this.prevObject || this.constructor();
        },

        // For internal use only.
        // Behaves like an Array's method, not like a jQuery method.
        push: push,
        sort: arr.sort,
        splice: arr.splice
    };

    jQuery.extend = jQuery.fn.extend = function () {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        // Handle a deep copy situation
        if (typeof target === "boolean") {
            deep = target;

            // Skip the boolean and the target
            target = arguments[i] || {};
            i++;
        }

        // Handle case when target is a string or something (possible in deep copy)
        if (typeof target !== "object" && !isFunction(target)) {
            target = {};
        }

        // Extend jQuery itself if only one argument is passed
        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {

            // Only deal with non-null/undefined values
            if ((options = arguments[i]) != null) {

                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    // Prevent never-ending loop
                    if (target === copy) {
                        continue;
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (deep && copy && (jQuery.isPlainObject(copy) ||
                        (copyIsArray = Array.isArray(copy)))) {

                        if (copyIsArray) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];

                        } else {
                            clone = src && jQuery.isPlainObject(src) ? src : {};
                        }

                        // Never move original objects, clone them
                        target[name] = jQuery.extend(deep, clone, copy);

                        // Don't bring in undefined values
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        // Return the modified object
        return target;
    };

    jQuery.extend({

        // Unique for each copy of jQuery on the page
        expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

        // Assume jQuery is ready without the ready module
        isReady: true,

        error: function (msg) {
            throw new Error(msg);
        },

        noop: function () {
        },

        isPlainObject: function (obj) {
            var proto, Ctor;

            // Detect obvious negatives
            // Use toString instead of jQuery.type to catch host objects
            if (!obj || toString.call(obj) !== "[object Object]") {
                return false;
            }

            proto = getProto(obj);

            // Objects with no prototype (e.g., `Object.create( null )`) are plain
            if (!proto) {
                return true;
            }

            // Objects with prototype are plain iff they were constructed by a global Object function
            Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
            return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
        },

        isEmptyObject: function (obj) {

            /* eslint-disable no-unused-vars */
            // See https://github.com/eslint/eslint/issues/6125
            var name;

            for (name in obj) {
                return false;
            }
            return true;
        },

        // Evaluates a script in a global context
        globalEval: function (code) {
            DOMEval(code);
        },

        each: function (obj, callback) {
            var length, i = 0;

            if (isArrayLike(obj)) {
                length = obj.length;
                for (; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            } else {
                for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                        break;
                    }
                }
            }

            return obj;
        },

        // Support: Android <=4.0 only
        trim: function (text) {
            return text == null ?
                "" :
                (text + "").replace(rtrim, "");
        },

        // results is for internal usage only
        makeArray: function (arr, results) {
            var ret = results || [];

            if (arr != null) {
                if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret,
                        typeof arr === "string" ?
                            [arr] : arr
                    );
                } else {
                    push.call(ret, arr);
                }
            }

            return ret;
        },

        inArray: function (elem, arr, i) {
            return arr == null ? -1 : indexOf.call(arr, elem, i);
        },

        // Support: Android <=4.0 only, PhantomJS 1 only
        // push.apply(_, arraylike) throws on ancient WebKit
        merge: function (first, second) {
            var len = +second.length,
                j = 0,
                i = first.length;

            for (; j < len; j++) {
                first[i++] = second[j];
            }

            first.length = i;

            return first;
        },

        grep: function (elems, callback, invert) {
            var callbackInverse,
                matches = [],
                i = 0,
                length = elems.length,
                callbackExpect = !invert;

            // Go through the array, only saving the items
            // that pass the validator function
            for (; i < length; i++) {
                callbackInverse = !callback(elems[i], i);
                if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i]);
                }
            }

            return matches;
        },

        // arg is for internal usage only
        map: function (elems, callback, arg) {
            var length, value,
                i = 0,
                ret = [];

            // Go through the array, translating each of the items to their new values
            if (isArrayLike(elems)) {
                length = elems.length;
                for (; i < length; i++) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }

                // Go through every key on the object,
            } else {
                for (i in elems) {
                    value = callback(elems[i], i, arg);

                    if (value != null) {
                        ret.push(value);
                    }
                }
            }

            // Flatten any nested arrays
            return concat.apply([], ret);
        },

        // A global GUID counter for objects
        guid: 1,

        // jQuery.support is not used in Core but other projects attach their
        // properties to it so it needs to exist.
        support: support
    });

    if (typeof Symbol === "function") {
        jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }

// Populate the class2type map
    jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
        function (i, name) {
            class2type["[object " + name + "]"] = name.toLowerCase();
        });

    function isArrayLike(obj) {

        // Support: real iOS 8.2 only (not reproducible in simulator)
        // `in` check used to prevent JIT error (gh-2145)
        // hasOwn isn't used here due to false negatives
        // regarding Nodelist length in IE
        var length = !!obj && "length" in obj && obj.length,
            type = toType(obj);

        if (isFunction(obj) || isWindow(obj)) {
            return false;
        }

        return type === "array" || length === 0 ||
            typeof length === "number" && length > 0 && (length - 1) in obj;
    }

    var Sizzle =
        /*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
        (function (window) {

            var i,
                support,
                Expr,
                getText,
                isXML,
                tokenize,
                compile,
                select,
                outermostContext,
                sortInput,
                hasDuplicate,

                // Local document vars
                setDocument,
                document,
                docElem,
                documentIsHTML,
                rbuggyQSA,
                rbuggyMatches,
                matches,
                contains,

                // Instance-specific data
                expando = "sizzle" + 1 * new Date(),
                preferredDoc = window.document,
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                sortOrder = function (a, b) {
                    if (a === b) {
                        hasDuplicate = true;
                    }
                    return 0;
                },

                // Instance methods
                hasOwn = ({}).hasOwnProperty,
                arr = [],
                pop = arr.pop,
                push_native = arr.push,
                push = arr.push,
                slice = arr.slice,
                // Use a stripped-down indexOf as it's faster than native
                // https://jsperf.com/thor-indexof-vs-for/5
                indexOf = function (list, elem) {
                    var i = 0,
                        len = list.length;
                    for (; i < len; i++) {
                        if (list[i] === elem) {
                            return i;
                        }
                    }
                    return -1;
                },

                booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

                // Regular expressions

                // http://www.w3.org/TR/css3-selectors/#whitespace
                whitespace = "[\\x20\\t\\r\\n\\f]",

                // http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
                identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

                // Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
                attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
                    // Operator (capture 2)
                    "*([*^$|!~]?=)" + whitespace +
                    // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
                    "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
                    "*\\]",

                pseudos = ":(" + identifier + ")(?:\\((" +
                    // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                    // 1. quoted (capture 3; capture 4 or capture 5)
                    "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
                    // 2. simple (capture 6)
                    "((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
                    // 3. anything else (capture 2)
                    ".*" +
                    ")\\)|)",

                // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                rwhitespace = new RegExp(whitespace + "+", "g"),
                rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),

                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),

                rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),

                rpseudo = new RegExp(pseudos),
                ridentifier = new RegExp("^" + identifier + "$"),

                matchExpr = {
                    "ID": new RegExp("^#(" + identifier + ")"),
                    "CLASS": new RegExp("^\\.(" + identifier + ")"),
                    "TAG": new RegExp("^(" + identifier + "|[*])"),
                    "ATTR": new RegExp("^" + attributes),
                    "PSEUDO": new RegExp("^" + pseudos),
                    "CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
                        "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
                        "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
                    "bool": new RegExp("^(?:" + booleans + ")$", "i"),
                    // For use in libraries implementing .is()
                    // We use this for POS matching in `select`
                    "needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                        whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
                },

                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,

                rnative = /^[^{]+\{\s*\[native \w/,

                // Easily-parseable/retrievable ID or TAG or CLASS selectors
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

                rsibling = /[+~]/,

                // CSS escapes
                // http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
                funescape = function (_, escaped, escapedWhitespace) {
                    var high = "0x" + escaped - 0x10000;
                    // NaN means non-codepoint
                    // Support: Firefox<24
                    // Workaround erroneous numeric interpretation of +"0x"
                    return high !== high || escapedWhitespace ?
                        escaped :
                        high < 0 ?
                            // BMP codepoint
                            String.fromCharCode(high + 0x10000) :
                            // Supplemental Plane codepoint (surrogate pair)
                            String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
                },

                // CSS string/identifier serialization
                // https://drafts.csswg.org/cssom/#common-serializing-idioms
                rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                fcssescape = function (ch, asCodePoint) {
                    if (asCodePoint) {

                        // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                        if (ch === "\0") {
                            return "\uFFFD";
                        }

                        // Control characters and (dependent upon position) numbers get escaped as code points
                        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
                    }

                    // Other potentially-special ASCII characters get backslash-escaped
                    return "\\" + ch;
                },

                // Used for iframes
                // See setDocument()
                // Removing the function wrapper causes a "Permission Denied"
                // error in IE
                unloadHandler = function () {
                    setDocument();
                },

                disabledAncestor = addCombinator(
                    function (elem) {
                        return elem.disabled === true && ("form" in elem || "label" in elem);
                    },
                    {dir: "parentNode", next: "legend"}
                );

// Optimize for push.apply( _, NodeList )
            try {
                push.apply(
                    (arr = slice.call(preferredDoc.childNodes)),
                    preferredDoc.childNodes
                );
                // Support: Android<4.0
                // Detect silently failing push.apply
                arr[preferredDoc.childNodes.length].nodeType;
            } catch (e) {
                push = {
                    apply: arr.length ?

                        // Leverage slice if possible
                        function (target, els) {
                            push_native.apply(target, slice.call(els));
                        } :

                        // Support: IE<9
                        // Otherwise append directly
                        function (target, els) {
                            var j = target.length,
                                i = 0;
                            // Can't trust NodeList.length
                            while ((target[j++] = els[i++])) {
                            }
                            target.length = j - 1;
                        }
                };
            }

            function Sizzle(selector, context, results, seed) {
                var m, i, elem, nid, match, groups, newSelector,
                    newContext = context && context.ownerDocument,

                    // nodeType defaults to 9, since context defaults to document
                    nodeType = context ? context.nodeType : 9;

                results = results || [];

                // Return early from calls with invalid selector or context
                if (typeof selector !== "string" || !selector ||
                    nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

                    return results;
                }

                // Try to shortcut find operations (as opposed to filters) in HTML documents
                if (!seed) {

                    if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
                        setDocument(context);
                    }
                    context = context || document;

                    if (documentIsHTML) {

                        // If the selector is sufficiently simple, try using a "get*By*" DOM method
                        // (excepting DocumentFragment context, where the methods don't exist)
                        if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {

                            // ID selector
                            if ((m = match[1])) {

                                // Document context
                                if (nodeType === 9) {
                                    if ((elem = context.getElementById(m))) {

                                        // Support: IE, Opera, Webkit
                                        // TODO: identify versions
                                        // getElementById can match elements by name instead of ID
                                        if (elem.id === m) {
                                            results.push(elem);
                                            return results;
                                        }
                                    } else {
                                        return results;
                                    }

                                    // Element context
                                } else {

                                    // Support: IE, Opera, Webkit
                                    // TODO: identify versions
                                    // getElementById can match elements by name instead of ID
                                    if (newContext && (elem = newContext.getElementById(m)) &&
                                        contains(context, elem) &&
                                        elem.id === m) {

                                        results.push(elem);
                                        return results;
                                    }
                                }

                                // Type selector
                            } else if (match[2]) {
                                push.apply(results, context.getElementsByTagName(selector));
                                return results;

                                // Class selector
                            } else if ((m = match[3]) && support.getElementsByClassName &&
                                context.getElementsByClassName) {

                                push.apply(results, context.getElementsByClassName(m));
                                return results;
                            }
                        }

                        // Take advantage of querySelectorAll
                        if (support.qsa &&
                            !compilerCache[selector + " "] &&
                            (!rbuggyQSA || !rbuggyQSA.test(selector))) {

                            if (nodeType !== 1) {
                                newContext = context;
                                newSelector = selector;

                                // qSA looks outside Element context, which is not what we want
                                // Thanks to Andrew Dupont for this workaround technique
                                // Support: IE <=8
                                // Exclude object elements
                            } else if (context.nodeName.toLowerCase() !== "object") {

                                // Capture the context ID, setting it first if necessary
                                if ((nid = context.getAttribute("id"))) {
                                    nid = nid.replace(rcssescape, fcssescape);
                                } else {
                                    context.setAttribute("id", (nid = expando));
                                }

                                // Prefix every selector in the list
                                groups = tokenize(selector);
                                i = groups.length;
                                while (i--) {
                                    groups[i] = "#" + nid + " " + toSelector(groups[i]);
                                }
                                newSelector = groups.join(",");

                                // Expand context for sibling selectors
                                newContext = rsibling.test(selector) && testContext(context.parentNode) ||
                                    context;
                            }

                            if (newSelector) {
                                try {
                                    push.apply(results,
                                        newContext.querySelectorAll(newSelector)
                                    );
                                    return results;
                                } catch (qsaError) {
                                } finally {
                                    if (nid === expando) {
                                        context.removeAttribute("id");
                                    }
                                }
                            }
                        }
                    }
                }

                // All others
                return select(selector.replace(rtrim, "$1"), context, results, seed);
            }

            /**
             * Create key-value caches of limited size
             * @returns {function(string, object)} Returns the Object data after storing it on itself with
             *    property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
             *    deleting the oldest entry
             */
            function createCache() {
                var keys = [];

                function cache(key, value) {
                    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
                    if (keys.push(key + " ") > Expr.cacheLength) {
                        // Only keep the most recent entries
                        delete cache[keys.shift()];
                    }
                    return (cache[key + " "] = value);
                }

                return cache;
            }

            /**
             * Mark a function for special use by Sizzle
             * @param {Function} fn The function to mark
             */
            function markFunction(fn) {
                fn[expando] = true;
                return fn;
            }

            /**
             * Support testing using an element
             * @param {Function} fn Passed the created element and returns a boolean result
             */
            function assert(fn) {
                var el = document.createElement("fieldset");

                try {
                    return !!fn(el);
                } catch (e) {
                    return false;
                } finally {
                    // Remove from its parent by default
                    if (el.parentNode) {
                        el.parentNode.removeChild(el);
                    }
                    // release memory in IE
                    el = null;
                }
            }

            /**
             * Adds the same handler for all of the specified attrs
             * @param {String} attrs Pipe-separated list of attributes
             * @param {Function} handler The method that will be applied
             */
            function addHandle(attrs, handler) {
                var arr = attrs.split("|"),
                    i = arr.length;

                while (i--) {
                    Expr.attrHandle[arr[i]] = handler;
                }
            }

            /**
             * Checks document order of two siblings
             * @param {Element} a
             * @param {Element} b
             * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
             */
            function siblingCheck(a, b) {
                var cur = b && a,
                    diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
                        a.sourceIndex - b.sourceIndex;

                // Use IE sourceIndex if available on both nodes
                if (diff) {
                    return diff;
                }

                // Check if b follows a
                if (cur) {
                    while ((cur = cur.nextSibling)) {
                        if (cur === b) {
                            return -1;
                        }
                    }
                }

                return a ? 1 : -1;
            }

            /**
             * Returns a function to use in pseudos for input types
             * @param {String} type
             */
            function createInputPseudo(type) {
                return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return name === "input" && elem.type === type;
                };
            }

            /**
             * Returns a function to use in pseudos for buttons
             * @param {String} type
             */
            function createButtonPseudo(type) {
                return function (elem) {
                    var name = elem.nodeName.toLowerCase();
                    return (name === "input" || name === "button") && elem.type === type;
                };
            }

            /**
             * Returns a function to use in pseudos for :enabled/:disabled
             * @param {Boolean} disabled true for :disabled; false for :enabled
             */
            function createDisabledPseudo(disabled) {

                // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
                return function (elem) {

                    // Only certain elements can match :enabled or :disabled
                    // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                    // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                    if ("form" in elem) {

                        // Check for inherited disabledness on relevant non-disabled elements:
                        // * listed form-associated elements in a disabled fieldset
                        //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                        //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                        // * option elements in a disabled optgroup
                        //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                        // All such elements have a "form" property.
                        if (elem.parentNode && elem.disabled === false) {

                            // Option elements defer to a parent optgroup if present
                            if ("label" in elem) {
                                if ("label" in elem.parentNode) {
                                    return elem.parentNode.disabled === disabled;
                                } else {
                                    return elem.disabled === disabled;
                                }
                            }

                            // Support: IE 6 - 11
                            // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                            return elem.isDisabled === disabled ||

                                // Where there is no isDisabled, check manually
                                /* jshint -W018 */
                                elem.isDisabled !== !disabled &&
                                disabledAncestor(elem) === disabled;
                        }

                        return elem.disabled === disabled;

                        // Try to winnow out elements that can't be disabled before trusting the disabled property.
                        // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                        // even exist on them, let alone have a boolean value.
                    } else if ("label" in elem) {
                        return elem.disabled === disabled;
                    }

                    // Remaining elements are neither :enabled nor :disabled
                    return false;
                };
            }

            /**
             * Returns a function to use in pseudos for positionals
             * @param {Function} fn
             */
            function createPositionalPseudo(fn) {
                return markFunction(function (argument) {
                    argument = +argument;
                    return markFunction(function (seed, matches) {
                        var j,
                            matchIndexes = fn([], seed.length, argument),
                            i = matchIndexes.length;

                        // Match elements found at the specified indexes
                        while (i--) {
                            if (seed[(j = matchIndexes[i])]) {
                                seed[j] = !(matches[j] = seed[j]);
                            }
                        }
                    });
                });
            }

            /**
             * Checks a node for validity as a Sizzle context
             * @param {Element|Object=} context
             * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
             */
            function testContext(context) {
                return context && typeof context.getElementsByTagName !== "undefined" && context;
            }

// Expose support vars for convenience
            support = Sizzle.support = {};

            /**
             * Detects XML nodes
             * @param {Element|Object} elem An element or a document
             * @returns {Boolean} True iff elem is a non-HTML XML node
             */
            isXML = Sizzle.isXML = function (elem) {
                // documentElement is verified for cases where it doesn't yet exist
                // (such as loading iframes in IE - #4833)
                var documentElement = elem && (elem.ownerDocument || elem).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            };

            /**
             * Sets document-related variables once based on the current document
             * @param {Element|Object} [doc] An element or document object to use to set the document
             * @returns {Object} Returns the current document
             */
            setDocument = Sizzle.setDocument = function (node) {
                var hasCompare, subWindow,
                    doc = node ? node.ownerDocument || node : preferredDoc;

                // Return early if doc is invalid or already selected
                if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
                    return document;
                }

                // Update global variables
                document = doc;
                docElem = document.documentElement;
                documentIsHTML = !isXML(document);

                // Support: IE 9-11, Edge
                // Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
                if (preferredDoc !== document &&
                    (subWindow = document.defaultView) && subWindow.top !== subWindow) {

                    // Support: IE 11, Edge
                    if (subWindow.addEventListener) {
                        subWindow.addEventListener("unload", unloadHandler, false);

                        // Support: IE 9 - 10 only
                    } else if (subWindow.attachEvent) {
                        subWindow.attachEvent("onunload", unloadHandler);
                    }
                }

                /* Attributes
	---------------------------------------------------------------------- */

                // Support: IE<8
                // Verify that getAttribute really returns attributes and not properties
                // (excepting IE8 booleans)
                support.attributes = assert(function (el) {
                    el.className = "i";
                    return !el.getAttribute("className");
                });

                /* getElement(s)By*
	---------------------------------------------------------------------- */

                // Check if getElementsByTagName("*") returns only elements
                support.getElementsByTagName = assert(function (el) {
                    el.appendChild(document.createComment(""));
                    return !el.getElementsByTagName("*").length;
                });

                // Support: IE<9
                support.getElementsByClassName = rnative.test(document.getElementsByClassName);

                // Support: IE<10
                // Check if getElementById returns elements by name
                // The broken getElementById methods don't pick up programmatically-set names,
                // so use a roundabout getElementsByName test
                support.getById = assert(function (el) {
                    docElem.appendChild(el).id = expando;
                    return !document.getElementsByName || !document.getElementsByName(expando).length;
                });

                // ID filter and find
                if (support.getById) {
                    Expr.filter["ID"] = function (id) {
                        var attrId = id.replace(runescape, funescape);
                        return function (elem) {
                            return elem.getAttribute("id") === attrId;
                        };
                    };
                    Expr.find["ID"] = function (id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var elem = context.getElementById(id);
                            return elem ? [elem] : [];
                        }
                    };
                } else {
                    Expr.filter["ID"] = function (id) {
                        var attrId = id.replace(runescape, funescape);
                        return function (elem) {
                            var node = typeof elem.getAttributeNode !== "undefined" &&
                                elem.getAttributeNode("id");
                            return node && node.value === attrId;
                        };
                    };

                    // Support: IE 6 - 7 only
                    // getElementById is not reliable as a find shortcut
                    Expr.find["ID"] = function (id, context) {
                        if (typeof context.getElementById !== "undefined" && documentIsHTML) {
                            var node, i, elems,
                                elem = context.getElementById(id);

                            if (elem) {

                                // Verify the id attribute
                                node = elem.getAttributeNode("id");
                                if (node && node.value === id) {
                                    return [elem];
                                }

                                // Fall back on getElementsByName
                                elems = context.getElementsByName(id);
                                i = 0;
                                while ((elem = elems[i++])) {
                                    node = elem.getAttributeNode("id");
                                    if (node && node.value === id) {
                                        return [elem];
                                    }
                                }
                            }

                            return [];
                        }
                    };
                }

                // Tag
                Expr.find["TAG"] = support.getElementsByTagName ?
                    function (tag, context) {
                        if (typeof context.getElementsByTagName !== "undefined") {
                            return context.getElementsByTagName(tag);

                            // DocumentFragment nodes don't have gEBTN
                        } else if (support.qsa) {
                            return context.querySelectorAll(tag);
                        }
                    } :

                    function (tag, context) {
                        var elem,
                            tmp = [],
                            i = 0,
                            // By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
                            results = context.getElementsByTagName(tag);

                        // Filter out possible comments
                        if (tag === "*") {
                            while ((elem = results[i++])) {
                                if (elem.nodeType === 1) {
                                    tmp.push(elem);
                                }
                            }

                            return tmp;
                        }
                        return results;
                    };

                // Class
                Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
                    if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
                        return context.getElementsByClassName(className);
                    }
                };

                /* QSA/matchesSelector
	---------------------------------------------------------------------- */

                // QSA and matchesSelector support

                // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
                rbuggyMatches = [];

                // qSa(:focus) reports false when true (Chrome 21)
                // We allow this because of a bug in IE8/9 that throws an error
                // whenever `document.activeElement` is accessed on an iframe
                // So, we allow :focus to pass through QSA all the time to avoid the IE error
                // See https://bugs.jquery.com/ticket/13378
                rbuggyQSA = [];

                if ((support.qsa = rnative.test(document.querySelectorAll))) {
                    // Build QSA regex
                    // Regex strategy adopted from Diego Perini
                    assert(function (el) {
                        // Select is set to empty string on purpose
                        // This is to test IE's treatment of not explicitly
                        // setting a boolean content attribute,
                        // since its presence should be enough
                        // https://bugs.jquery.com/ticket/12359
                        docElem.appendChild(el).innerHTML = "<a id='" + expando + "'></a>" +
                            "<select id='" + expando + "-\r\\' msallowcapture=''>" +
                            "<option selected=''></option></select>";

                        // Support: IE8, Opera 11-12.16
                        // Nothing should be selected when empty strings follow ^= or $= or *=
                        // The test attribute must be unknown in Opera but "safe" for WinRT
                        // https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
                        if (el.querySelectorAll("[msallowcapture^='']").length) {
                            rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
                        }

                        // Support: IE8
                        // Boolean attributes and "value" are not treated correctly
                        if (!el.querySelectorAll("[selected]").length) {
                            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
                        }

                        // Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
                        if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                            rbuggyQSA.push("~=");
                        }

                        // Webkit/Opera - :checked should return selected option elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        // IE8 throws error here and will not see later tests
                        if (!el.querySelectorAll(":checked").length) {
                            rbuggyQSA.push(":checked");
                        }

                        // Support: Safari 8+, iOS 8+
                        // https://bugs.webkit.org/show_bug.cgi?id=136851
                        // In-page `selector#id sibling-combinator selector` fails
                        if (!el.querySelectorAll("a#" + expando + "+*").length) {
                            rbuggyQSA.push(".#.+[+~]");
                        }
                    });

                    assert(function (el) {
                        el.innerHTML = "<a href='' disabled='disabled'></a>" +
                            "<select disabled='disabled'><option/></select>";

                        // Support: Windows 8 Native Apps
                        // The type and name attributes are restricted during .innerHTML assignment
                        var input = document.createElement("input");
                        input.setAttribute("type", "hidden");
                        el.appendChild(input).setAttribute("name", "D");

                        // Support: IE8
                        // Enforce case-sensitivity of name attribute
                        if (el.querySelectorAll("[name=d]").length) {
                            rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
                        }

                        // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
                        // IE8 throws error here and will not see later tests
                        if (el.querySelectorAll(":enabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }

                        // Support: IE9-11+
                        // IE's :disabled selector does not pick up the children of disabled fieldsets
                        docElem.appendChild(el).disabled = true;
                        if (el.querySelectorAll(":disabled").length !== 2) {
                            rbuggyQSA.push(":enabled", ":disabled");
                        }

                        // Opera 10-11 does not throw on post-comma invalid pseudos
                        el.querySelectorAll("*,:x");
                        rbuggyQSA.push(",.*:");
                    });
                }

                if ((support.matchesSelector = rnative.test((matches = docElem.matches ||
                    docElem.webkitMatchesSelector ||
                    docElem.mozMatchesSelector ||
                    docElem.oMatchesSelector ||
                    docElem.msMatchesSelector)))) {

                    assert(function (el) {
                        // Check to see if it's possible to do matchesSelector
                        // on a disconnected node (IE 9)
                        support.disconnectedMatch = matches.call(el, "*");

                        // This should fail with an exception
                        // Gecko does not error, returns false instead
                        matches.call(el, "[s!='']:x");
                        rbuggyMatches.push("!=", pseudos);
                    });
                }

                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
                rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

                /* Contains
	---------------------------------------------------------------------- */
                hasCompare = rnative.test(docElem.compareDocumentPosition);

                // Element contains another
                // Purposefully self-exclusive
                // As in, an element does not contain itself
                contains = hasCompare || rnative.test(docElem.contains) ?
                    function (a, b) {
                        var adown = a.nodeType === 9 ? a.documentElement : a,
                            bup = b && b.parentNode;
                        return a === bup || !!(bup && bup.nodeType === 1 && (
                            adown.contains ?
                                adown.contains(bup) :
                                a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16
                        ));
                    } :
                    function (a, b) {
                        if (b) {
                            while ((b = b.parentNode)) {
                                if (b === a) {
                                    return true;
                                }
                            }
                        }
                        return false;
                    };

                /* Sorting
	---------------------------------------------------------------------- */

                // Document order sorting
                sortOrder = hasCompare ?
                    function (a, b) {

                        // Flag for duplicate removal
                        if (a === b) {
                            hasDuplicate = true;
                            return 0;
                        }

                        // Sort on method existence if only one input has compareDocumentPosition
                        var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        if (compare) {
                            return compare;
                        }

                        // Calculate position if both inputs belong to the same document
                        compare = (a.ownerDocument || a) === (b.ownerDocument || b) ?
                            a.compareDocumentPosition(b) :

                            // Otherwise we know they are disconnected
                            1;

                        // Disconnected nodes
                        if (compare & 1 ||
                            (!support.sortDetached && b.compareDocumentPosition(a) === compare)) {

                            // Choose the first element that is related to our preferred document
                            if (a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
                                return -1;
                            }
                            if (b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
                                return 1;
                            }

                            // Maintain original order
                            return sortInput ?
                                (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                                0;
                        }

                        return compare & 4 ? -1 : 1;
                    } :
                    function (a, b) {
                        // Exit early if the nodes are identical
                        if (a === b) {
                            hasDuplicate = true;
                            return 0;
                        }

                        var cur,
                            i = 0,
                            aup = a.parentNode,
                            bup = b.parentNode,
                            ap = [a],
                            bp = [b];

                        // Parentless nodes are either documents or disconnected
                        if (!aup || !bup) {
                            return a === document ? -1 :
                                b === document ? 1 :
                                    aup ? -1 :
                                        bup ? 1 :
                                            sortInput ?
                                                (indexOf(sortInput, a) - indexOf(sortInput, b)) :
                                                0;

                            // If the nodes are siblings, we can do a quick check
                        } else if (aup === bup) {
                            return siblingCheck(a, b);
                        }

                        // Otherwise we need full lists of their ancestors for comparison
                        cur = a;
                        while ((cur = cur.parentNode)) {
                            ap.unshift(cur);
                        }
                        cur = b;
                        while ((cur = cur.parentNode)) {
                            bp.unshift(cur);
                        }

                        // Walk down the tree looking for a discrepancy
                        while (ap[i] === bp[i]) {
                            i++;
                        }

                        return i ?
                            // Do a sibling check if the nodes have a common ancestor
                            siblingCheck(ap[i], bp[i]) :

                            // Otherwise nodes in our document sort first
                            ap[i] === preferredDoc ? -1 :
                                bp[i] === preferredDoc ? 1 :
                                    0;
                    };

                return document;
            };

            Sizzle.matches = function (expr, elements) {
                return Sizzle(expr, null, null, elements);
            };

            Sizzle.matchesSelector = function (elem, expr) {
                // Set document vars if needed
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }

                // Make sure that attribute selectors are quoted
                expr = expr.replace(rattributeQuotes, "='$1']");

                if (support.matchesSelector && documentIsHTML &&
                    !compilerCache[expr + " "] &&
                    (!rbuggyMatches || !rbuggyMatches.test(expr)) &&
                    (!rbuggyQSA || !rbuggyQSA.test(expr))) {

                    try {
                        var ret = matches.call(elem, expr);

                        // IE 9's matchesSelector returns false on disconnected nodes
                        if (ret || support.disconnectedMatch ||
                            // As well, disconnected nodes are said to be in a document
                            // fragment in IE 9
                            elem.document && elem.document.nodeType !== 11) {
                            return ret;
                        }
                    } catch (e) {
                    }
                }

                return Sizzle(expr, document, null, [elem]).length > 0;
            };

            Sizzle.contains = function (context, elem) {
                // Set document vars if needed
                if ((context.ownerDocument || context) !== document) {
                    setDocument(context);
                }
                return contains(context, elem);
            };

            Sizzle.attr = function (elem, name) {
                // Set document vars if needed
                if ((elem.ownerDocument || elem) !== document) {
                    setDocument(elem);
                }

                var fn = Expr.attrHandle[name.toLowerCase()],
                    // Don't get fooled by Object.prototype properties (jQuery #13807)
                    val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ?
                        fn(elem, name, !documentIsHTML) :
                        undefined;

                return val !== undefined ?
                    val :
                    support.attributes || !documentIsHTML ?
                        elem.getAttribute(name) :
                        (val = elem.getAttributeNode(name)) && val.specified ?
                            val.value :
                            null;
            };

            Sizzle.escape = function (sel) {
                return (sel + "").replace(rcssescape, fcssescape);
            };

            Sizzle.error = function (msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg);
            };

            /**
             * Document sorting and removing duplicates
             * @param {ArrayLike} results
             */
            Sizzle.uniqueSort = function (results) {
                var elem,
                    duplicates = [],
                    j = 0,
                    i = 0;

                // Unless we *know* we can detect duplicates, assume their presence
                hasDuplicate = !support.detectDuplicates;
                sortInput = !support.sortStable && results.slice(0);
                results.sort(sortOrder);

                if (hasDuplicate) {
                    while ((elem = results[i++])) {
                        if (elem === results[i]) {
                            j = duplicates.push(i);
                        }
                    }
                    while (j--) {
                        results.splice(duplicates[j], 1);
                    }
                }

                // Clear input after sorting to release objects
                // See https://github.com/jquery/sizzle/pull/225
                sortInput = null;

                return results;
            };

            /**
             * Utility function for retrieving the text value of an array of DOM nodes
             * @param {Array|Element} elem
             */
            getText = Sizzle.getText = function (elem) {
                var node,
                    ret = "",
                    i = 0,
                    nodeType = elem.nodeType;

                if (!nodeType) {
                    // If no nodeType, this is expected to be an array
                    while ((node = elem[i++])) {
                        // Do not traverse comment nodes
                        ret += getText(node);
                    }
                } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
                    // Use textContent for elements
                    // innerText usage removed for consistency of new lines (jQuery #11153)
                    if (typeof elem.textContent === "string") {
                        return elem.textContent;
                    } else {
                        // Traverse its children
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            ret += getText(elem);
                        }
                    }
                } else if (nodeType === 3 || nodeType === 4) {
                    return elem.nodeValue;
                }
                // Do not include comment or processing instruction nodes

                return ret;
            };

            Expr = Sizzle.selectors = {

                // Can be adjusted by the user
                cacheLength: 50,

                createPseudo: markFunction,

                match: matchExpr,

                attrHandle: {},

                find: {},

                relative: {
                    ">": {dir: "parentNode", first: true},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: true},
                    "~": {dir: "previousSibling"}
                },

                preFilter: {
                    "ATTR": function (match) {
                        match[1] = match[1].replace(runescape, funescape);

                        // Move the given value to match[3] whether quoted or unquoted
                        match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

                        if (match[2] === "~=") {
                            match[3] = " " + match[3] + " ";
                        }

                        return match.slice(0, 4);
                    },

                    "CHILD": function (match) {
                        /* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
                        match[1] = match[1].toLowerCase();

                        if (match[1].slice(0, 3) === "nth") {
                            // nth-* requires argument
                            if (!match[3]) {
                                Sizzle.error(match[0]);
                            }

                            // numeric x and y parameters for Expr.filter.CHILD
                            // remember that false/true cast respectively to 0/1
                            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
                            match[5] = +((match[7] + match[8]) || match[3] === "odd");

                            // other types prohibit arguments
                        } else if (match[3]) {
                            Sizzle.error(match[0]);
                        }

                        return match;
                    },

                    "PSEUDO": function (match) {
                        var excess,
                            unquoted = !match[6] && match[2];

                        if (matchExpr["CHILD"].test(match[0])) {
                            return null;
                        }

                        // Accept quoted arguments as-is
                        if (match[3]) {
                            match[2] = match[4] || match[5] || "";

                            // Strip excess characters from unquoted arguments
                        } else if (unquoted && rpseudo.test(unquoted) &&
                            // Get excess from tokenize (recursively)
                            (excess = tokenize(unquoted, true)) &&
                            // advance to the next closing parenthesis
                            (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

                            // excess is a negative index
                            match[0] = match[0].slice(0, excess);
                            match[2] = unquoted.slice(0, excess);
                        }

                        // Return only captures needed by the pseudo filter method (type and argument)
                        return match.slice(0, 3);
                    }
                },

                filter: {

                    "TAG": function (nodeNameSelector) {
                        var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
                        return nodeNameSelector === "*" ?
                            function () {
                                return true;
                            } :
                            function (elem) {
                                return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
                            };
                    },

                    "CLASS": function (className) {
                        var pattern = classCache[className + " "];

                        return pattern ||
                            (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) &&
                            classCache(className, function (elem) {
                                return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
                            });
                    },

                    "ATTR": function (name, operator, check) {
                        return function (elem) {
                            var result = Sizzle.attr(elem, name);

                            if (result == null) {
                                return operator === "!=";
                            }
                            if (!operator) {
                                return true;
                            }

                            result += "";

                            return operator === "=" ? result === check :
                                operator === "!=" ? result !== check :
                                    operator === "^=" ? check && result.indexOf(check) === 0 :
                                        operator === "*=" ? check && result.indexOf(check) > -1 :
                                            operator === "$=" ? check && result.slice(-check.length) === check :
                                                operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 :
                                                    operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" :
                                                        false;
                        };
                    },

                    "CHILD": function (type, what, argument, first, last) {
                        var simple = type.slice(0, 3) !== "nth",
                            forward = type.slice(-4) !== "last",
                            ofType = what === "of-type";

                        return first === 1 && last === 0 ?

                            // Shortcut for :nth-*(n)
                            function (elem) {
                                return !!elem.parentNode;
                            } :

                            function (elem, context, xml) {
                                var cache, uniqueCache, outerCache, node, nodeIndex, start,
                                    dir = simple !== forward ? "nextSibling" : "previousSibling",
                                    parent = elem.parentNode,
                                    name = ofType && elem.nodeName.toLowerCase(),
                                    useCache = !xml && !ofType,
                                    diff = false;

                                if (parent) {

                                    // :(first|last|only)-(child|of-type)
                                    if (simple) {
                                        while (dir) {
                                            node = elem;
                                            while ((node = node[dir])) {
                                                if (ofType ?
                                                    node.nodeName.toLowerCase() === name :
                                                    node.nodeType === 1) {

                                                    return false;
                                                }
                                            }
                                            // Reverse direction for :only-* (if we haven't yet done so)
                                            start = dir = type === "only" && !start && "nextSibling";
                                        }
                                        return true;
                                    }

                                    start = [forward ? parent.firstChild : parent.lastChild];

                                    // non-xml :nth-child(...) stores cache data on `parent`
                                    if (forward && useCache) {

                                        // Seek `elem` from a previously-cached index

                                        // ...in a gzip-friendly way
                                        node = parent;
                                        outerCache = node[expando] || (node[expando] = {});

                                        // Support: IE <9 only
                                        // Defend against cloned attroperties (jQuery gh-1709)
                                        uniqueCache = outerCache[node.uniqueID] ||
                                            (outerCache[node.uniqueID] = {});

                                        cache = uniqueCache[type] || [];
                                        nodeIndex = cache[0] === dirruns && cache[1];
                                        diff = nodeIndex && cache[2];
                                        node = nodeIndex && parent.childNodes[nodeIndex];

                                        while ((node = ++nodeIndex && node && node[dir] ||

                                            // Fallback to seeking `elem` from the start
                                            (diff = nodeIndex = 0) || start.pop())) {

                                            // When found, cache indexes on `parent` and break
                                            if (node.nodeType === 1 && ++diff && node === elem) {
                                                uniqueCache[type] = [dirruns, nodeIndex, diff];
                                                break;
                                            }
                                        }

                                    } else {
                                        // Use previously-cached element index if available
                                        if (useCache) {
                                            // ...in a gzip-friendly way
                                            node = elem;
                                            outerCache = node[expando] || (node[expando] = {});

                                            // Support: IE <9 only
                                            // Defend against cloned attroperties (jQuery gh-1709)
                                            uniqueCache = outerCache[node.uniqueID] ||
                                                (outerCache[node.uniqueID] = {});

                                            cache = uniqueCache[type] || [];
                                            nodeIndex = cache[0] === dirruns && cache[1];
                                            diff = nodeIndex;
                                        }

                                        // xml :nth-child(...)
                                        // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                                        if (diff === false) {
                                            // Use the same loop as above to seek `elem` from the start
                                            while ((node = ++nodeIndex && node && node[dir] ||
                                                (diff = nodeIndex = 0) || start.pop())) {

                                                if ((ofType ?
                                                    node.nodeName.toLowerCase() === name :
                                                    node.nodeType === 1) &&
                                                    ++diff) {

                                                    // Cache the index of each encountered element
                                                    if (useCache) {
                                                        outerCache = node[expando] || (node[expando] = {});

                                                        // Support: IE <9 only
                                                        // Defend against cloned attroperties (jQuery gh-1709)
                                                        uniqueCache = outerCache[node.uniqueID] ||
                                                            (outerCache[node.uniqueID] = {});

                                                        uniqueCache[type] = [dirruns, diff];
                                                    }

                                                    if (node === elem) {
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }

                                    // Incorporate the offset, then check against cycle size
                                    diff -= last;
                                    return diff === first || (diff % first === 0 && diff / first >= 0);
                                }
                            };
                    },

                    "PSEUDO": function (pseudo, argument) {
                        // pseudo-class names are case-insensitive
                        // http://www.w3.org/TR/selectors/#pseudo-classes
                        // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                        // Remember that setFilters inherits from pseudos
                        var args,
                            fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] ||
                                Sizzle.error("unsupported pseudo: " + pseudo);

                        // The user may use createPseudo to indicate that
                        // arguments are needed to create the filter function
                        // just as Sizzle does
                        if (fn[expando]) {
                            return fn(argument);
                        }

                        // But maintain support for old signatures
                        if (fn.length > 1) {
                            args = [pseudo, pseudo, "", argument];
                            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ?
                                markFunction(function (seed, matches) {
                                    var idx,
                                        matched = fn(seed, argument),
                                        i = matched.length;
                                    while (i--) {
                                        idx = indexOf(seed, matched[i]);
                                        seed[idx] = !(matches[idx] = matched[i]);
                                    }
                                }) :
                                function (elem) {
                                    return fn(elem, 0, args);
                                };
                        }

                        return fn;
                    }
                },

                pseudos: {
                    // Potentially complex pseudos
                    "not": markFunction(function (selector) {
                        // Trim the selector passed to compile
                        // to avoid treating leading and trailing
                        // spaces as combinators
                        var input = [],
                            results = [],
                            matcher = compile(selector.replace(rtrim, "$1"));

                        return matcher[expando] ?
                            markFunction(function (seed, matches, context, xml) {
                                var elem,
                                    unmatched = matcher(seed, null, xml, []),
                                    i = seed.length;

                                // Match elements unmatched by `matcher`
                                while (i--) {
                                    if ((elem = unmatched[i])) {
                                        seed[i] = !(matches[i] = elem);
                                    }
                                }
                            }) :
                            function (elem, context, xml) {
                                input[0] = elem;
                                matcher(input, null, xml, results);
                                // Don't keep the element (issue #299)
                                input[0] = null;
                                return !results.pop();
                            };
                    }),

                    "has": markFunction(function (selector) {
                        return function (elem) {
                            return Sizzle(selector, elem).length > 0;
                        };
                    }),

                    "contains": markFunction(function (text) {
                        text = text.replace(runescape, funescape);
                        return function (elem) {
                            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
                        };
                    }),

                    // "Whether an element is represented by a :lang() selector
                    // is based solely on the element's language value
                    // being equal to the identifier C,
                    // or beginning with the identifier C immediately followed by "-".
                    // The matching of C against the element's language value is performed case-insensitively.
                    // The identifier C does not have to be a valid language name."
                    // http://www.w3.org/TR/selectors/#lang-pseudo
                    "lang": markFunction(function (lang) {
                        // lang value must be a valid identifier
                        if (!ridentifier.test(lang || "")) {
                            Sizzle.error("unsupported lang: " + lang);
                        }
                        lang = lang.replace(runescape, funescape).toLowerCase();
                        return function (elem) {
                            var elemLang;
                            do {
                                if ((elemLang = documentIsHTML ?
                                    elem.lang :
                                    elem.getAttribute("xml:lang") || elem.getAttribute("lang"))) {

                                    elemLang = elemLang.toLowerCase();
                                    return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                                }
                            } while ((elem = elem.parentNode) && elem.nodeType === 1);
                            return false;
                        };
                    }),

                    // Miscellaneous
                    "target": function (elem) {
                        var hash = window.location && window.location.hash;
                        return hash && hash.slice(1) === elem.id;
                    },

                    "root": function (elem) {
                        return elem === docElem;
                    },

                    "focus": function (elem) {
                        return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
                    },

                    // Boolean properties
                    "enabled": createDisabledPseudo(false),
                    "disabled": createDisabledPseudo(true),

                    "checked": function (elem) {
                        // In CSS3, :checked should return both checked and selected elements
                        // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                        var nodeName = elem.nodeName.toLowerCase();
                        return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
                    },

                    "selected": function (elem) {
                        // Accessing this property makes selected-by-default
                        // options in Safari work properly
                        if (elem.parentNode) {
                            elem.parentNode.selectedIndex;
                        }

                        return elem.selected === true;
                    },

                    // Contents
                    "empty": function (elem) {
                        // http://www.w3.org/TR/selectors/#empty-pseudo
                        // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                        //   but not by others (comment: 8; processing instruction: 7; etc.)
                        // nodeType < 6 works because attributes (2) do not appear as children
                        for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
                            if (elem.nodeType < 6) {
                                return false;
                            }
                        }
                        return true;
                    },

                    "parent": function (elem) {
                        return !Expr.pseudos["empty"](elem);
                    },

                    // Element/input types
                    "header": function (elem) {
                        return rheader.test(elem.nodeName);
                    },

                    "input": function (elem) {
                        return rinputs.test(elem.nodeName);
                    },

                    "button": function (elem) {
                        var name = elem.nodeName.toLowerCase();
                        return name === "input" && elem.type === "button" || name === "button";
                    },

                    "text": function (elem) {
                        var attr;
                        return elem.nodeName.toLowerCase() === "input" &&
                            elem.type === "text" &&

                            // Support: IE<8
                            // New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
                            ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
                    },

                    // Position-in-collection
                    "first": createPositionalPseudo(function () {
                        return [0];
                    }),

                    "last": createPositionalPseudo(function (matchIndexes, length) {
                        return [length - 1];
                    }),

                    "eq": createPositionalPseudo(function (matchIndexes, length, argument) {
                        return [argument < 0 ? argument + length : argument];
                    }),

                    "even": createPositionalPseudo(function (matchIndexes, length) {
                        var i = 0;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),

                    "odd": createPositionalPseudo(function (matchIndexes, length) {
                        var i = 1;
                        for (; i < length; i += 2) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),

                    "lt": createPositionalPseudo(function (matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; --i >= 0;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    }),

                    "gt": createPositionalPseudo(function (matchIndexes, length, argument) {
                        var i = argument < 0 ? argument + length : argument;
                        for (; ++i < length;) {
                            matchIndexes.push(i);
                        }
                        return matchIndexes;
                    })
                }
            };

            Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
            for (i in {radio: true, checkbox: true, file: true, password: true, image: true}) {
                Expr.pseudos[i] = createInputPseudo(i);
            }
            for (i in {submit: true, reset: true}) {
                Expr.pseudos[i] = createButtonPseudo(i);
            }

// Easy API for creating new setFilters
            function setFilters() {
            }

            setFilters.prototype = Expr.filters = Expr.pseudos;
            Expr.setFilters = new setFilters();

            tokenize = Sizzle.tokenize = function (selector, parseOnly) {
                var matched, match, tokens, type,
                    soFar, groups, preFilters,
                    cached = tokenCache[selector + " "];

                if (cached) {
                    return parseOnly ? 0 : cached.slice(0);
                }

                soFar = selector;
                groups = [];
                preFilters = Expr.preFilter;

                while (soFar) {

                    // Comma and first run
                    if (!matched || (match = rcomma.exec(soFar))) {
                        if (match) {
                            // Don't consume trailing commas as valid
                            soFar = soFar.slice(match[0].length) || soFar;
                        }
                        groups.push((tokens = []));
                    }

                    matched = false;

                    // Combinators
                    if ((match = rcombinators.exec(soFar))) {
                        matched = match.shift();
                        tokens.push({
                            value: matched,
                            // Cast descendant combinators to space
                            type: match[0].replace(rtrim, " ")
                        });
                        soFar = soFar.slice(matched.length);
                    }

                    // Filters
                    for (type in Expr.filter) {
                        if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] ||
                            (match = preFilters[type](match)))) {
                            matched = match.shift();
                            tokens.push({
                                value: matched,
                                type: type,
                                matches: match
                            });
                            soFar = soFar.slice(matched.length);
                        }
                    }

                    if (!matched) {
                        break;
                    }
                }

                // Return the length of the invalid excess
                // if we're just parsing
                // Otherwise, throw an error or return tokens
                return parseOnly ?
                    soFar.length :
                    soFar ?
                        Sizzle.error(selector) :
                        // Cache the tokens
                        tokenCache(selector, groups).slice(0);
            };

            function toSelector(tokens) {
                var i = 0,
                    len = tokens.length,
                    selector = "";
                for (; i < len; i++) {
                    selector += tokens[i].value;
                }
                return selector;
            }

            function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir,
                    skip = combinator.next,
                    key = skip || dir,
                    checkNonElements = base && key === "parentNode",
                    doneName = done++;

                return combinator.first ?
                    // Check against closest ancestor/preceding element
                    function (elem, context, xml) {
                        while ((elem = elem[dir])) {
                            if (elem.nodeType === 1 || checkNonElements) {
                                return matcher(elem, context, xml);
                            }
                        }
                        return false;
                    } :

                    // Check against all ancestor/preceding elements
                    function (elem, context, xml) {
                        var oldCache, uniqueCache, outerCache,
                            newCache = [dirruns, doneName];

                        // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                        if (xml) {
                            while ((elem = elem[dir])) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    if (matcher(elem, context, xml)) {
                                        return true;
                                    }
                                }
                            }
                        } else {
                            while ((elem = elem[dir])) {
                                if (elem.nodeType === 1 || checkNonElements) {
                                    outerCache = elem[expando] || (elem[expando] = {});

                                    // Support: IE <9 only
                                    // Defend against cloned attroperties (jQuery gh-1709)
                                    uniqueCache = outerCache[elem.uniqueID] || (outerCache[elem.uniqueID] = {});

                                    if (skip && skip === elem.nodeName.toLowerCase()) {
                                        elem = elem[dir] || elem;
                                    } else if ((oldCache = uniqueCache[key]) &&
                                        oldCache[0] === dirruns && oldCache[1] === doneName) {

                                        // Assign to newCache so results back-propagate to previous elements
                                        return (newCache[2] = oldCache[2]);
                                    } else {
                                        // Reuse newcache so results back-propagate to previous elements
                                        uniqueCache[key] = newCache;

                                        // A match means we're done; a fail means we have to keep checking
                                        if ((newCache[2] = matcher(elem, context, xml))) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }
                        return false;
                    };
            }

            function elementMatcher(matchers) {
                return matchers.length > 1 ?
                    function (elem, context, xml) {
                        var i = matchers.length;
                        while (i--) {
                            if (!matchers[i](elem, context, xml)) {
                                return false;
                            }
                        }
                        return true;
                    } :
                    matchers[0];
            }

            function multipleContexts(selector, contexts, results) {
                var i = 0,
                    len = contexts.length;
                for (; i < len; i++) {
                    Sizzle(selector, contexts[i], results);
                }
                return results;
            }

            function condense(unmatched, map, filter, context, xml) {
                var elem,
                    newUnmatched = [],
                    i = 0,
                    len = unmatched.length,
                    mapped = map != null;

                for (; i < len; i++) {
                    if ((elem = unmatched[i])) {
                        if (!filter || filter(elem, context, xml)) {
                            newUnmatched.push(elem);
                            if (mapped) {
                                map.push(i);
                            }
                        }
                    }
                }

                return newUnmatched;
            }

            function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
                if (postFilter && !postFilter[expando]) {
                    postFilter = setMatcher(postFilter);
                }
                if (postFinder && !postFinder[expando]) {
                    postFinder = setMatcher(postFinder, postSelector);
                }
                return markFunction(function (seed, results, context, xml) {
                    var temp, i, elem,
                        preMap = [],
                        postMap = [],
                        preexisting = results.length,

                        // Get initial elements from seed or context
                        elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),

                        // Prefilter to get matcher input, preserving a map for seed-results synchronization
                        matcherIn = preFilter && (seed || !selector) ?
                            condense(elems, preMap, preFilter, context, xml) :
                            elems,

                        matcherOut = matcher ?
                            // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
                            postFinder || (seed ? preFilter : preexisting || postFilter) ?

                                // ...intermediate processing is necessary
                                [] :

                                // ...otherwise use results directly
                                results :
                            matcherIn;

                    // Find primary matches
                    if (matcher) {
                        matcher(matcherIn, matcherOut, context, xml);
                    }

                    // Apply postFilter
                    if (postFilter) {
                        temp = condense(matcherOut, postMap);
                        postFilter(temp, [], context, xml);

                        // Un-match failing elements by moving them back to matcherIn
                        i = temp.length;
                        while (i--) {
                            if ((elem = temp[i])) {
                                matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
                            }
                        }
                    }

                    if (seed) {
                        if (postFinder || preFilter) {
                            if (postFinder) {
                                // Get the final matcherOut by condensing this intermediate into postFinder contexts
                                temp = [];
                                i = matcherOut.length;
                                while (i--) {
                                    if ((elem = matcherOut[i])) {
                                        // Restore matcherIn since elem is not yet a final match
                                        temp.push((matcherIn[i] = elem));
                                    }
                                }
                                postFinder(null, (matcherOut = []), temp, xml);
                            }

                            // Move matched elements from seed to results to keep them synchronized
                            i = matcherOut.length;
                            while (i--) {
                                if ((elem = matcherOut[i]) &&
                                    (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

                                    seed[temp] = !(results[temp] = elem);
                                }
                            }
                        }

                        // Add elements to results, through postFinder if defined
                    } else {
                        matcherOut = condense(
                            matcherOut === results ?
                                matcherOut.splice(preexisting, matcherOut.length) :
                                matcherOut
                        );
                        if (postFinder) {
                            postFinder(null, results, matcherOut, xml);
                        } else {
                            push.apply(results, matcherOut);
                        }
                    }
                });
            }

            function matcherFromTokens(tokens) {
                var checkContext, matcher, j,
                    len = tokens.length,
                    leadingRelative = Expr.relative[tokens[0].type],
                    implicitRelative = leadingRelative || Expr.relative[" "],
                    i = leadingRelative ? 1 : 0,

                    // The foundational matcher ensures that elements are reachable from top-level context(s)
                    matchContext = addCombinator(function (elem) {
                        return elem === checkContext;
                    }, implicitRelative, true),
                    matchAnyContext = addCombinator(function (elem) {
                        return indexOf(checkContext, elem) > -1;
                    }, implicitRelative, true),
                    matchers = [function (elem, context, xml) {
                        var ret = (!leadingRelative && (xml || context !== outermostContext)) || (
                            (checkContext = context).nodeType ?
                                matchContext(elem, context, xml) :
                                matchAnyContext(elem, context, xml));
                        // Avoid hanging onto element (issue #299)
                        checkContext = null;
                        return ret;
                    }];

                for (; i < len; i++) {
                    if ((matcher = Expr.relative[tokens[i].type])) {
                        matchers = [addCombinator(elementMatcher(matchers), matcher)];
                    } else {
                        matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

                        // Return special upon seeing a positional matcher
                        if (matcher[expando]) {
                            // Find the next relative operator (if any) for proper handling
                            j = ++i;
                            for (; j < len; j++) {
                                if (Expr.relative[tokens[j].type]) {
                                    break;
                                }
                            }
                            return setMatcher(
                                i > 1 && elementMatcher(matchers),
                                i > 1 && toSelector(
                                // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                                tokens.slice(0, i - 1).concat({value: tokens[i - 2].type === " " ? "*" : ""})
                                ).replace(rtrim, "$1"),
                                matcher,
                                i < j && matcherFromTokens(tokens.slice(i, j)),
                                j < len && matcherFromTokens((tokens = tokens.slice(j))),
                                j < len && toSelector(tokens)
                            );
                        }
                        matchers.push(matcher);
                    }
                }

                return elementMatcher(matchers);
            }

            function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0,
                    byElement = elementMatchers.length > 0,
                    superMatcher = function (seed, context, xml, results, outermost) {
                        var elem, j, matcher,
                            matchedCount = 0,
                            i = "0",
                            unmatched = seed && [],
                            setMatched = [],
                            contextBackup = outermostContext,
                            // We must always have either seed elements or outermost context
                            elems = seed || byElement && Expr.find["TAG"]("*", outermost),
                            // Use integer dirruns iff this is the outermost matcher
                            dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
                            len = elems.length;

                        if (outermost) {
                            outermostContext = context === document || context || outermost;
                        }

                        // Add elements passing elementMatchers directly to results
                        // Support: IE<9, Safari
                        // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
                        for (; i !== len && (elem = elems[i]) != null; i++) {
                            if (byElement && elem) {
                                j = 0;
                                if (!context && elem.ownerDocument !== document) {
                                    setDocument(elem);
                                    xml = !documentIsHTML;
                                }
                                while ((matcher = elementMatchers[j++])) {
                                    if (matcher(elem, context || document, xml)) {
                                        results.push(elem);
                                        break;
                                    }
                                }
                                if (outermost) {
                                    dirruns = dirrunsUnique;
                                }
                            }

                            // Track unmatched elements for set filters
                            if (bySet) {
                                // They will have gone through all possible matchers
                                if ((elem = !matcher && elem)) {
                                    matchedCount--;
                                }

                                // Lengthen the array for every element, matched or not
                                if (seed) {
                                    unmatched.push(elem);
                                }
                            }
                        }

                        // `i` is now the count of elements visited above, and adding it to `matchedCount`
                        // makes the latter nonnegative.
                        matchedCount += i;

                        // Apply set filters to unmatched elements
                        // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                        // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                        // no element matchers and no seed.
                        // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                        // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                        // numerically zero.
                        if (bySet && i !== matchedCount) {
                            j = 0;
                            while ((matcher = setMatchers[j++])) {
                                matcher(unmatched, setMatched, context, xml);
                            }

                            if (seed) {
                                // Reintegrate element matches to eliminate the need for sorting
                                if (matchedCount > 0) {
                                    while (i--) {
                                        if (!(unmatched[i] || setMatched[i])) {
                                            setMatched[i] = pop.call(results);
                                        }
                                    }
                                }

                                // Discard index placeholder values to get only actual matches
                                setMatched = condense(setMatched);
                            }

                            // Add matches to results
                            push.apply(results, setMatched);

                            // Seedless set matches succeeding multiple successful matchers stipulate sorting
                            if (outermost && !seed && setMatched.length > 0 &&
                                (matchedCount + setMatchers.length) > 1) {

                                Sizzle.uniqueSort(results);
                            }
                        }

                        // Override manipulation of globals by nested matchers
                        if (outermost) {
                            dirruns = dirrunsUnique;
                            outermostContext = contextBackup;
                        }

                        return unmatched;
                    };

                return bySet ?
                    markFunction(superMatcher) :
                    superMatcher;
            }

            compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
                var i,
                    setMatchers = [],
                    elementMatchers = [],
                    cached = compilerCache[selector + " "];

                if (!cached) {
                    // Generate a function of recursive functions that can be used to check each element
                    if (!match) {
                        match = tokenize(selector);
                    }
                    i = match.length;
                    while (i--) {
                        cached = matcherFromTokens(match[i]);
                        if (cached[expando]) {
                            setMatchers.push(cached);
                        } else {
                            elementMatchers.push(cached);
                        }
                    }

                    // Cache the compiled function
                    cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

                    // Save selector and tokenization
                    cached.selector = selector;
                }
                return cached;
            };

            /**
             * A low-level selection function that works with Sizzle's compiled
             *  selector functions
             * @param {String|Function} selector A selector or a pre-compiled
             *  selector function built with Sizzle.compile
             * @param {Element} context
             * @param {Array} [results]
             * @param {Array} [seed] A set of elements to match against
             */
            select = Sizzle.select = function (selector, context, results, seed) {
                var i, tokens, token, type, find,
                    compiled = typeof selector === "function" && selector,
                    match = !seed && tokenize((selector = compiled.selector || selector));

                results = results || [];

                // Try to minimize operations if there is only one selector in the list and no seed
                // (the latter of which guarantees us context)
                if (match.length === 1) {

                    // Reduce context if the leading compound selector is an ID
                    tokens = match[0] = match[0].slice(0);
                    if (tokens.length > 2 && (token = tokens[0]).type === "ID" &&
                        context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

                        context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
                        if (!context) {
                            return results;

                            // Precompiled matchers will still verify ancestry, so step up a level
                        } else if (compiled) {
                            context = context.parentNode;
                        }

                        selector = selector.slice(tokens.shift().value.length);
                    }

                    // Fetch a seed set for right-to-left matching
                    i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
                    while (i--) {
                        token = tokens[i];

                        // Abort if we hit a combinator
                        if (Expr.relative[(type = token.type)]) {
                            break;
                        }
                        if ((find = Expr.find[type])) {
                            // Search, expanding context for leading sibling combinators
                            if ((seed = find(
                                token.matches[0].replace(runescape, funescape),
                                rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
                            ))) {

                                // If seed is empty or no tokens remain, we can return early
                                tokens.splice(i, 1);
                                selector = seed.length && toSelector(tokens);
                                if (!selector) {
                                    push.apply(results, seed);
                                    return results;
                                }

                                break;
                            }
                        }
                    }
                }

                // Compile and execute a filtering function if one is not provided
                // Provide `match` to avoid retokenization if we modified the selector above
                (compiled || compile(selector, match))(
                    seed,
                    context,
                    !documentIsHTML,
                    results,
                    !context || rsibling.test(selector) && testContext(context.parentNode) || context
                );
                return results;
            };

// One-time assignments

// Sort stability
            support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
            support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
            setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
            support.sortDetached = assert(function (el) {
                // Should return 1, but returns 4 (following)
                return el.compareDocumentPosition(document.createElement("fieldset")) & 1;
            });

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
            if (!assert(function (el) {
                el.innerHTML = "<a href='#'></a>";
                return el.firstChild.getAttribute("href") === "#";
            })) {
                addHandle("type|href|height|width", function (elem, name, isXML) {
                    if (!isXML) {
                        return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
                    }
                });
            }

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
            if (!support.attributes || !assert(function (el) {
                el.innerHTML = "<input/>";
                el.firstChild.setAttribute("value", "");
                return el.firstChild.getAttribute("value") === "";
            })) {
                addHandle("value", function (elem, name, isXML) {
                    if (!isXML && elem.nodeName.toLowerCase() === "input") {
                        return elem.defaultValue;
                    }
                });
            }

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
            if (!assert(function (el) {
                return el.getAttribute("disabled") == null;
            })) {
                addHandle(booleans, function (elem, name, isXML) {
                    var val;
                    if (!isXML) {
                        return elem[name] === true ? name.toLowerCase() :
                            (val = elem.getAttributeNode(name)) && val.specified ?
                                val.value :
                                null;
                    }
                });
            }

            return Sizzle;

        })(window);


    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;

// Deprecated
    jQuery.expr[":"] = jQuery.expr.pseudos;
    jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
    jQuery.escapeSelector = Sizzle.escape;


    var dir = function (elem, dir, until) {
        var matched = [],
            truncate = until !== undefined;

        while ((elem = elem[dir]) && elem.nodeType !== 9) {
            if (elem.nodeType === 1) {
                if (truncate && jQuery(elem).is(until)) {
                    break;
                }
                matched.push(elem);
            }
        }
        return matched;
    };


    var siblings = function (n, elem) {
        var matched = [];

        for (; n; n = n.nextSibling) {
            if (n.nodeType === 1 && n !== elem) {
                matched.push(n);
            }
        }

        return matched;
    };


    var rneedsContext = jQuery.expr.match.needsContext;


    function nodeName(elem, name) {

        return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

    };
    var rsingleTag = (/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);


// Implement the identical functionality for filter and not
    function winnow(elements, qualifier, not) {
        if (isFunction(qualifier)) {
            return jQuery.grep(elements, function (elem, i) {
                return !!qualifier.call(elem, i, elem) !== not;
            });
        }

        // Single element
        if (qualifier.nodeType) {
            return jQuery.grep(elements, function (elem) {
                return (elem === qualifier) !== not;
            });
        }

        // Arraylike of elements (jQuery, arguments, Array)
        if (typeof qualifier !== "string") {
            return jQuery.grep(elements, function (elem) {
                return (indexOf.call(qualifier, elem) > -1) !== not;
            });
        }

        // Filtered directly for both simple and complex selectors
        return jQuery.filter(qualifier, elements, not);
    }

    jQuery.filter = function (expr, elems, not) {
        var elem = elems[0];

        if (not) {
            expr = ":not(" + expr + ")";
        }

        if (elems.length === 1 && elem.nodeType === 1) {
            return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
        }

        return jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
            return elem.nodeType === 1;
        }));
    };

    jQuery.fn.extend({
        find: function (selector) {
            var i, ret,
                len = this.length,
                self = this;

            if (typeof selector !== "string") {
                return this.pushStack(jQuery(selector).filter(function () {
                    for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                            return true;
                        }
                    }
                }));
            }

            ret = this.pushStack([]);

            for (i = 0; i < len; i++) {
                jQuery.find(selector, self[i], ret);
            }

            return len > 1 ? jQuery.uniqueSort(ret) : ret;
        },
        filter: function (selector) {
            return this.pushStack(winnow(this, selector || [], false));
        },
        not: function (selector) {
            return this.pushStack(winnow(this, selector || [], true));
        },
        is: function (selector) {
            return !!winnow(
                this,

                // If this is a positional/relative selector, check membership in the returned set
                // so $("p:first").is("p:last") won't return true for a doc with two "p".
                typeof selector === "string" && rneedsContext.test(selector) ?
                    jQuery(selector) :
                    selector || [],
                false
            ).length;
        }
    });


// Initialize a jQuery object


// A central reference to the root jQuery(document)
    var rootjQuery,

        // A simple way to check for HTML strings
        // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
        // Strict HTML recognition (#11290: must start with <)
        // Shortcut simple #id case for speed
        rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

        init = jQuery.fn.init = function (selector, context, root) {
            var match, elem;

            // HANDLE: $(""), $(null), $(undefined), $(false)
            if (!selector) {
                return this;
            }

            // Method init() accepts an alternate rootjQuery
            // so migrate can support jQuery.sub (gh-2101)
            root = root || rootjQuery;

            // Handle HTML strings
            if (typeof selector === "string") {
                if (selector[0] === "<" &&
                    selector[selector.length - 1] === ">" &&
                    selector.length >= 3) {

                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [null, selector, null];

                } else {
                    match = rquickExpr.exec(selector);
                }

                // Match html or make sure no context is specified for #id
                if (match && (match[1] || !context)) {

                    // HANDLE: $(html) -> $(array)
                    if (match[1]) {
                        context = context instanceof jQuery ? context[0] : context;

                        // Option to run scripts is true for back-compat
                        // Intentionally let the error be thrown if parseHTML is not present
                        jQuery.merge(this, jQuery.parseHTML(
                            match[1],
                            context && context.nodeType ? context.ownerDocument || context : document,
                            true
                        ));

                        // HANDLE: $(html, props)
                        if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                            for (match in context) {

                                // Properties of context are called as methods if possible
                                if (isFunction(this[match])) {
                                    this[match](context[match]);

                                    // ...and otherwise set as attributes
                                } else {
                                    this.attr(match, context[match]);
                                }
                            }
                        }

                        return this;

                        // HANDLE: $(#id)
                    } else {
                        elem = document.getElementById(match[2]);

                        if (elem) {

                            // Inject the element directly into the jQuery object
                            this[0] = elem;
                            this.length = 1;
                        }
                        return this;
                    }

                    // HANDLE: $(expr, $(...))
                } else if (!context || context.jquery) {
                    return (context || root).find(selector);

                    // HANDLE: $(expr, context)
                    // (which is just equivalent to: $(context).find(expr)
                } else {
                    return this.constructor(context).find(selector);
                }

                // HANDLE: $(DOMElement)
            } else if (selector.nodeType) {
                this[0] = selector;
                this.length = 1;
                return this;

                // HANDLE: $(function)
                // Shortcut for document ready
            } else if (isFunction(selector)) {
                return root.ready !== undefined ?
                    root.ready(selector) :

                    // Execute immediately if ready is not present
                    selector(jQuery);
            }

            return jQuery.makeArray(selector, this);
        };

// Give the init function the jQuery prototype for later instantiation
    init.prototype = jQuery.fn;

// Initialize central reference
    rootjQuery = jQuery(document);


    var rparentsprev = /^(?:parents|prev(?:Until|All))/,

        // Methods guaranteed to produce a unique set when starting from a unique set
        guaranteedUnique = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };

    jQuery.fn.extend({
        has: function (target) {
            var targets = jQuery(target, this),
                l = targets.length;

            return this.filter(function () {
                var i = 0;
                for (; i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                        return true;
                    }
                }
            });
        },

        closest: function (selectors, context) {
            var cur,
                i = 0,
                l = this.length,
                matched = [],
                targets = typeof selectors !== "string" && jQuery(selectors);

            // Positional selectors never match, since there's no _selection_ context
            if (!rneedsContext.test(selectors)) {
                for (; i < l; i++) {
                    for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {

                        // Always skip document fragments
                        if (cur.nodeType < 11 && (targets ?
                            targets.index(cur) > -1 :

                            // Don't pass non-elements to Sizzle
                            cur.nodeType === 1 &&
                            jQuery.find.matchesSelector(cur, selectors))) {

                            matched.push(cur);
                            break;
                        }
                    }
                }
            }

            return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
        },

        // Determine the position of an element within the set
        index: function (elem) {

            // No argument, return index in parent
            if (!elem) {
                return (this[0] && this[0].parentNode) ? this.first().prevAll().length : -1;
            }

            // Index in selector
            if (typeof elem === "string") {
                return indexOf.call(jQuery(elem), this[0]);
            }

            // Locate the position of the desired element
            return indexOf.call(this,

                // If it receives a jQuery object, the first element is used
                elem.jquery ? elem[0] : elem
            );
        },

        add: function (selector, context) {
            return this.pushStack(
                jQuery.uniqueSort(
                    jQuery.merge(this.get(), jQuery(selector, context))
                )
            );
        },

        addBack: function (selector) {
            return this.add(selector == null ?
                this.prevObject : this.prevObject.filter(selector)
            );
        }
    });

    function sibling(cur, dir) {
        while ((cur = cur[dir]) && cur.nodeType !== 1) {
        }
        return cur;
    }

    jQuery.each({
        parent: function (elem) {
            var parent = elem.parentNode;
            return parent && parent.nodeType !== 11 ? parent : null;
        },
        parents: function (elem) {
            return dir(elem, "parentNode");
        },
        parentsUntil: function (elem, i, until) {
            return dir(elem, "parentNode", until);
        },
        next: function (elem) {
            return sibling(elem, "nextSibling");
        },
        prev: function (elem) {
            return sibling(elem, "previousSibling");
        },
        nextAll: function (elem) {
            return dir(elem, "nextSibling");
        },
        prevAll: function (elem) {
            return dir(elem, "previousSibling");
        },
        nextUntil: function (elem, i, until) {
            return dir(elem, "nextSibling", until);
        },
        prevUntil: function (elem, i, until) {
            return dir(elem, "previousSibling", until);
        },
        siblings: function (elem) {
            return siblings((elem.parentNode || {}).firstChild, elem);
        },
        children: function (elem) {
            return siblings(elem.firstChild);
        },
        contents: function (elem) {
            if (nodeName(elem, "iframe")) {
                return elem.contentDocument;
            }

            // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
            // Treat the template element as a regular one in browsers that
            // don't support it.
            if (nodeName(elem, "template")) {
                elem = elem.content || elem;
            }

            return jQuery.merge([], elem.childNodes);
        }
    }, function (name, fn) {
        jQuery.fn[name] = function (until, selector) {
            var matched = jQuery.map(this, fn, until);

            if (name.slice(-5) !== "Until") {
                selector = until;
            }

            if (selector && typeof selector === "string") {
                matched = jQuery.filter(selector, matched);
            }

            if (this.length > 1) {

                // Remove duplicates
                if (!guaranteedUnique[name]) {
                    jQuery.uniqueSort(matched);
                }

                // Reverse order for parents* and prev-derivatives
                if (rparentsprev.test(name)) {
                    matched.reverse();
                }
            }

            return this.pushStack(matched);
        };
    });
    var rnothtmlwhite = (/[^\x20\t\r\n\f]+/g);


// Convert String-formatted options into Object-formatted ones
    function createOptions(options) {
        var object = {};
        jQuery.each(options.match(rnothtmlwhite) || [], function (_, flag) {
            object[flag] = true;
        });
        return object;
    }

    /*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
    jQuery.Callbacks = function (options) {

        // Convert options from String-formatted to Object-formatted if needed
        // (we check in cache first)
        options = typeof options === "string" ?
            createOptions(options) :
            jQuery.extend({}, options);

        var // Flag to know if list is currently firing
            firing,

            // Last fire value for non-forgettable lists
            memory,

            // Flag to know if list was already fired
            fired,

            // Flag to prevent firing
            locked,

            // Actual callback list
            list = [],

            // Queue of execution data for repeatable lists
            queue = [],

            // Index of currently firing callback (modified by add/remove as needed)
            firingIndex = -1,

            // Fire callbacks
            fire = function () {

                // Enforce single-firing
                locked = locked || options.once;

                // Execute callbacks for all pending executions,
                // respecting firingIndex overrides and runtime changes
                fired = firing = true;
                for (; queue.length; firingIndex = -1) {
                    memory = queue.shift();
                    while (++firingIndex < list.length) {

                        // Run callback and check for early termination
                        if (list[firingIndex].apply(memory[0], memory[1]) === false &&
                            options.stopOnFalse) {

                            // Jump to end and forget the data so .add doesn't re-fire
                            firingIndex = list.length;
                            memory = false;
                        }
                    }
                }

                // Forget the data if we're done with it
                if (!options.memory) {
                    memory = false;
                }

                firing = false;

                // Clean up if we're done firing for good
                if (locked) {

                    // Keep an empty list if we have data for future add calls
                    if (memory) {
                        list = [];

                        // Otherwise, this object is spent
                    } else {
                        list = "";
                    }
                }
            },

            // Actual Callbacks object
            self = {

                // Add a callback or a collection of callbacks to the list
                add: function () {
                    if (list) {

                        // If we have memory from a past run, we should fire after adding
                        if (memory && !firing) {
                            firingIndex = list.length - 1;
                            queue.push(memory);
                        }

                        (function add(args) {
                            jQuery.each(args, function (_, arg) {
                                if (isFunction(arg)) {
                                    if (!options.unique || !self.has(arg)) {
                                        list.push(arg);
                                    }
                                } else if (arg && arg.length && toType(arg) !== "string") {

                                    // Inspect recursively
                                    add(arg);
                                }
                            });
                        })(arguments);

                        if (memory && !firing) {
                            fire();
                        }
                    }
                    return this;
                },

                // Remove a callback from the list
                remove: function () {
                    jQuery.each(arguments, function (_, arg) {
                        var index;
                        while ((index = jQuery.inArray(arg, list, index)) > -1) {
                            list.splice(index, 1);

                            // Handle firing indexes
                            if (index <= firingIndex) {
                                firingIndex--;
                            }
                        }
                    });
                    return this;
                },

                // Check if a given callback is in the list.
                // If no argument is given, return whether or not list has callbacks attached.
                has: function (fn) {
                    return fn ?
                        jQuery.inArray(fn, list) > -1 :
                        list.length > 0;
                },

                // Remove all callbacks from the list
                empty: function () {
                    if (list) {
                        list = [];
                    }
                    return this;
                },

                // Disable .fire and .add
                // Abort any current/pending executions
                // Clear all callbacks and values
                disable: function () {
                    locked = queue = [];
                    list = memory = "";
                    return this;
                },
                disabled: function () {
                    return !list;
                },

                // Disable .fire
                // Also disable .add unless we have memory (since it would have no effect)
                // Abort any pending executions
                lock: function () {
                    locked = queue = [];
                    if (!memory && !firing) {
                        list = memory = "";
                    }
                    return this;
                },
                locked: function () {
                    return !!locked;
                },

                // Call all callbacks with the given context and arguments
                fireWith: function (context, args) {
                    if (!locked) {
                        args = args || [];
                        args = [context, args.slice ? args.slice() : args];
                        queue.push(args);
                        if (!firing) {
                            fire();
                        }
                    }
                    return this;
                },

                // Call all the callbacks with the given arguments
                fire: function () {
                    self.fireWith(this, arguments);
                    return this;
                },

                // To know if the callbacks have already been called at least once
                fired: function () {
                    return !!fired;
                }
            };

        return self;
    };


    function Identity(v) {
        return v;
    }

    function Thrower(ex) {
        throw ex;
    }

    function adoptValue(value, resolve, reject, noValue) {
        var method;

        try {

            // Check for promise aspect first to privilege synchronous behavior
            if (value && isFunction((method = value.promise))) {
                method.call(value).done(resolve).fail(reject);

                // Other thenables
            } else if (value && isFunction((method = value.then))) {
                method.call(value, resolve, reject);

                // Other non-thenables
            } else {

                // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
                // * false: [ value ].slice( 0 ) => resolve( value )
                // * true: [ value ].slice( 1 ) => resolve()
                resolve.apply(undefined, [value].slice(noValue));
            }

            // For Promises/A+, convert exceptions into rejections
            // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
            // Deferred#then to conditionally suppress rejection.
        } catch (value) {

            // Support: Android 4.0 only
            // Strict mode functions invoked without .call/.apply get global-object context
            reject.apply(undefined, [value]);
        }
    }

    jQuery.extend({

        Deferred: function (func) {
            var tuples = [

                    // action, add listener, callbacks,
                    // ... .then handlers, argument index, [final state]
                    ["notify", "progress", jQuery.Callbacks("memory"),
                        jQuery.Callbacks("memory"), 2],
                    ["resolve", "done", jQuery.Callbacks("once memory"),
                        jQuery.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", jQuery.Callbacks("once memory"),
                        jQuery.Callbacks("once memory"), 1, "rejected"]
                ],
                state = "pending",
                promise = {
                    state: function () {
                        return state;
                    },
                    always: function () {
                        deferred.done(arguments).fail(arguments);
                        return this;
                    },
                    "catch": function (fn) {
                        return promise.then(null, fn);
                    },

                    // Keep pipe for back-compat
                    pipe: function (/* fnDone, fnFail, fnProgress */) {
                        var fns = arguments;

                        return jQuery.Deferred(function (newDefer) {
                            jQuery.each(tuples, function (i, tuple) {

                                // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                                var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]];

                                // deferred.progress(function() { bind to newDefer or newDefer.notify })
                                // deferred.done(function() { bind to newDefer or newDefer.resolve })
                                // deferred.fail(function() { bind to newDefer or newDefer.reject })
                                deferred[tuple[1]](function () {
                                    var returned = fn && fn.apply(this, arguments);
                                    if (returned && isFunction(returned.promise)) {
                                        returned.promise()
                                            .progress(newDefer.notify)
                                            .done(newDefer.resolve)
                                            .fail(newDefer.reject);
                                    } else {
                                        newDefer[tuple[0] + "With"](
                                            this,
                                            fn ? [returned] : arguments
                                        );
                                    }
                                });
                            });
                            fns = null;
                        }).promise();
                    },
                    then: function (onFulfilled, onRejected, onProgress) {
                        var maxDepth = 0;

                        function resolve(depth, deferred, handler, special) {
                            return function () {
                                var that = this,
                                    args = arguments,
                                    mightThrow = function () {
                                        var returned, then;

                                        // Support: Promises/A+ section 2.3.3.3.3
                                        // https://promisesaplus.com/#point-59
                                        // Ignore double-resolution attempts
                                        if (depth < maxDepth) {
                                            return;
                                        }

                                        returned = handler.apply(that, args);

                                        // Support: Promises/A+ section 2.3.1
                                        // https://promisesaplus.com/#point-48
                                        if (returned === deferred.promise()) {
                                            throw new TypeError("Thenable self-resolution");
                                        }

                                        // Support: Promises/A+ sections 2.3.3.1, 3.5
                                        // https://promisesaplus.com/#point-54
                                        // https://promisesaplus.com/#point-75
                                        // Retrieve `then` only once
                                        then = returned &&

                                            // Support: Promises/A+ section 2.3.4
                                            // https://promisesaplus.com/#point-64
                                            // Only check objects and functions for thenability
                                            (typeof returned === "object" ||
                                                typeof returned === "function") &&
                                            returned.then;

                                        // Handle a returned thenable
                                        if (isFunction(then)) {

                                            // Special processors (notify) just wait for resolution
                                            if (special) {
                                                then.call(
                                                    returned,
                                                    resolve(maxDepth, deferred, Identity, special),
                                                    resolve(maxDepth, deferred, Thrower, special)
                                                );

                                                // Normal processors (resolve) also hook into progress
                                            } else {

                                                // ...and disregard older resolution values
                                                maxDepth++;

                                                then.call(
                                                    returned,
                                                    resolve(maxDepth, deferred, Identity, special),
                                                    resolve(maxDepth, deferred, Thrower, special),
                                                    resolve(maxDepth, deferred, Identity,
                                                        deferred.notifyWith)
                                                );
                                            }

                                            // Handle all other returned values
                                        } else {

                                            // Only substitute handlers pass on context
                                            // and multiple values (non-spec behavior)
                                            if (handler !== Identity) {
                                                that = undefined;
                                                args = [returned];
                                            }

                                            // Process the value(s)
                                            // Default process is resolve
                                            (special || deferred.resolveWith)(that, args);
                                        }
                                    },

                                    // Only normal processors (resolve) catch and reject exceptions
                                    process = special ?
                                        mightThrow :
                                        function () {
                                            try {
                                                mightThrow();
                                            } catch (e) {

                                                if (jQuery.Deferred.exceptionHook) {
                                                    jQuery.Deferred.exceptionHook(e,
                                                        process.stackTrace);
                                                }

                                                // Support: Promises/A+ section 2.3.3.3.4.1
                                                // https://promisesaplus.com/#point-61
                                                // Ignore post-resolution exceptions
                                                if (depth + 1 >= maxDepth) {

                                                    // Only substitute handlers pass on context
                                                    // and multiple values (non-spec behavior)
                                                    if (handler !== Thrower) {
                                                        that = undefined;
                                                        args = [e];
                                                    }

                                                    deferred.rejectWith(that, args);
                                                }
                                            }
                                        };

                                // Support: Promises/A+ section 2.3.3.3.1
                                // https://promisesaplus.com/#point-57
                                // Re-resolve promises immediately to dodge false rejection from
                                // subsequent errors
                                if (depth) {
                                    process();
                                } else {

                                    // Call an optional hook to record the stack, in case of exception
                                    // since it's otherwise lost when execution goes async
                                    if (jQuery.Deferred.getStackHook) {
                                        process.stackTrace = jQuery.Deferred.getStackHook();
                                    }
                                    window.setTimeout(process);
                                }
                            };
                        }

                        return jQuery.Deferred(function (newDefer) {

                            // progress_handlers.add( ... )
                            tuples[0][3].add(
                                resolve(
                                    0,
                                    newDefer,
                                    isFunction(onProgress) ?
                                        onProgress :
                                        Identity,
                                    newDefer.notifyWith
                                )
                            );

                            // fulfilled_handlers.add( ... )
                            tuples[1][3].add(
                                resolve(
                                    0,
                                    newDefer,
                                    isFunction(onFulfilled) ?
                                        onFulfilled :
                                        Identity
                                )
                            );

                            // rejected_handlers.add( ... )
                            tuples[2][3].add(
                                resolve(
                                    0,
                                    newDefer,
                                    isFunction(onRejected) ?
                                        onRejected :
                                        Thrower
                                )
                            );
                        }).promise();
                    },

                    // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function (obj) {
                        return obj != null ? jQuery.extend(obj, promise) : promise;
                    }
                },
                deferred = {};

            // Add list-specific methods
            jQuery.each(tuples, function (i, tuple) {
                var list = tuple[2],
                    stateString = tuple[5];

                // promise.progress = list.add
                // promise.done = list.add
                // promise.fail = list.add
                promise[tuple[1]] = list.add;

                // Handle state
                if (stateString) {
                    list.add(
                        function () {

                            // state = "resolved" (i.e., fulfilled)
                            // state = "rejected"
                            state = stateString;
                        },

                        // rejected_callbacks.disable
                        // fulfilled_callbacks.disable
                        tuples[3 - i][2].disable,

                        // rejected_handlers.disable
                        // fulfilled_handlers.disable
                        tuples[3 - i][3].disable,

                        // progress_callbacks.lock
                        tuples[0][2].lock,

                        // progress_handlers.lock
                        tuples[0][3].lock
                    );
                }

                // progress_handlers.fire
                // fulfilled_handlers.fire
                // rejected_handlers.fire
                list.add(tuple[3].fire);

                // deferred.notify = function() { deferred.notifyWith(...) }
                // deferred.resolve = function() { deferred.resolveWith(...) }
                // deferred.reject = function() { deferred.rejectWith(...) }
                deferred[tuple[0]] = function () {
                    deferred[tuple[0] + "With"](this === deferred ? undefined : this, arguments);
                    return this;
                };

                // deferred.notifyWith = list.fireWith
                // deferred.resolveWith = list.fireWith
                // deferred.rejectWith = list.fireWith
                deferred[tuple[0] + "With"] = list.fireWith;
            });

            // Make the deferred a promise
            promise.promise(deferred);

            // Call given func if any
            if (func) {
                func.call(deferred, deferred);
            }

            // All done!
            return deferred;
        },

        // Deferred helper
        when: function (singleValue) {
            var

                // count of uncompleted subordinates
                remaining = arguments.length,

                // count of unprocessed arguments
                i = remaining,

                // subordinate fulfillment data
                resolveContexts = Array(i),
                resolveValues = slice.call(arguments),

                // the master Deferred
                master = jQuery.Deferred(),

                // subordinate callback factory
                updateFunc = function (i) {
                    return function (value) {
                        resolveContexts[i] = this;
                        resolveValues[i] = arguments.length > 1 ? slice.call(arguments) : value;
                        if (!(--remaining)) {
                            master.resolveWith(resolveContexts, resolveValues);
                        }
                    };
                };

            // Single- and empty arguments are adopted like Promise.resolve
            if (remaining <= 1) {
                adoptValue(singleValue, master.done(updateFunc(i)).resolve, master.reject,
                    !remaining);

                // Use .then() to unwrap secondary thenables (cf. gh-3000)
                if (master.state() === "pending" ||
                    isFunction(resolveValues[i] && resolveValues[i].then)) {

                    return master.then();
                }
            }

            // Multiple arguments are aggregated like Promise.all array elements
            while (i--) {
                adoptValue(resolveValues[i], updateFunc(i), master.reject);
            }

            return master.promise();
        }
    });


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

    jQuery.Deferred.exceptionHook = function (error, stack) {

        // Support: IE 8 - 9 only
        // Console exists when dev tools are open, which can happen at any time
        if (window.console && window.console.warn && error && rerrorNames.test(error.name)) {
            window.console.warn("jQuery.Deferred exception: " + error.message, error.stack, stack);
        }
    };


    jQuery.readyException = function (error) {
        window.setTimeout(function () {
            throw error;
        });
    };


// The deferred used on DOM ready
    var readyList = jQuery.Deferred();

    jQuery.fn.ready = function (fn) {

        readyList
            .then(fn)

            // Wrap jQuery.readyException in a function so that the lookup
            // happens at the time of error handling instead of callback
            // registration.
            .catch(function (error) {
                jQuery.readyException(error);
            });

        return this;
    };

    jQuery.extend({

        // Is the DOM ready to be used? Set to true once it occurs.
        isReady: false,

        // A counter to track how many items to wait for before
        // the ready event fires. See #6781
        readyWait: 1,

        // Handle when the DOM is ready
        ready: function (wait) {

            // Abort if there are pending holds or we're already ready
            if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                return;
            }

            // Remember that the DOM is ready
            jQuery.isReady = true;

            // If a normal DOM Ready event fired, decrement, and wait if need be
            if (wait !== true && --jQuery.readyWait > 0) {
                return;
            }

            // If there are functions bound, to execute
            readyList.resolveWith(document, [jQuery]);
        }
    });

    jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
    function completed() {
        document.removeEventListener("DOMContentLoaded", completed);
        window.removeEventListener("load", completed);
        jQuery.ready();
    }

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
    if (document.readyState === "complete" ||
        (document.readyState !== "loading" && !document.documentElement.doScroll)) {

        // Handle it asynchronously to allow scripts the opportunity to delay ready
        window.setTimeout(jQuery.ready);

    } else {

        // Use the handy event callback
        document.addEventListener("DOMContentLoaded", completed);

        // A fallback to window.onload, that will always work
        window.addEventListener("load", completed);
    }


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
    var access = function (elems, fn, key, value, chainable, emptyGet, raw) {
        var i = 0,
            len = elems.length,
            bulk = key == null;

        // Sets many values
        if (toType(key) === "object") {
            chainable = true;
            for (i in key) {
                access(elems, fn, i, key[i], true, emptyGet, raw);
            }

            // Sets one value
        } else if (value !== undefined) {
            chainable = true;

            if (!isFunction(value)) {
                raw = true;
            }

            if (bulk) {

                // Bulk operations run against the entire set
                if (raw) {
                    fn.call(elems, value);
                    fn = null;

                    // ...except when executing function values
                } else {
                    bulk = fn;
                    fn = function (elem, key, value) {
                        return bulk.call(jQuery(elem), value);
                    };
                }
            }

            if (fn) {
                for (; i < len; i++) {
                    fn(
                        elems[i], key, raw ?
                            value :
                            value.call(elems[i], i, fn(elems[i], key))
                    );
                }
            }
        }

        if (chainable) {
            return elems;
        }

        // Gets
        if (bulk) {
            return fn.call(elems);
        }

        return len ? fn(elems[0], key) : emptyGet;
    };


// Matches dashed string for camelizing
    var rmsPrefix = /^-ms-/,
        rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
    function fcamelCase(all, letter) {
        return letter.toUpperCase();
    }

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
    function camelCase(string) {
        return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }

    var acceptData = function (owner) {

        // Accepts only:
        //  - Node
        //    - Node.ELEMENT_NODE
        //    - Node.DOCUMENT_NODE
        //  - Object
        //    - Any
        return owner.nodeType === 1 || owner.nodeType === 9 || !(+owner.nodeType);
    };


    function Data() {
        this.expando = jQuery.expando + Data.uid++;
    }

    Data.uid = 1;

    Data.prototype = {

        cache: function (owner) {

            // Check if the owner object already has a cache
            var value = owner[this.expando];

            // If not, create one
            if (!value) {
                value = {};

                // We can accept data for non-element nodes in modern browsers,
                // but we should not, see #8335.
                // Always return an empty object.
                if (acceptData(owner)) {

                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) {
                        owner[this.expando] = value;

                        // Otherwise secure it in a non-enumerable property
                        // configurable must be true to allow the property to be
                        // deleted when data is removed
                    } else {
                        Object.defineProperty(owner, this.expando, {
                            value: value,
                            configurable: true
                        });
                    }
                }
            }

            return value;
        },
        set: function (owner, data, value) {
            var prop,
                cache = this.cache(owner);

            // Handle: [ owner, key, value ] args
            // Always use camelCase key (gh-2257)
            if (typeof data === "string") {
                cache[camelCase(data)] = value;

                // Handle: [ owner, { properties } ] args
            } else {

                // Copy the properties one-by-one to the cache object
                for (prop in data) {
                    cache[camelCase(prop)] = data[prop];
                }
            }
            return cache;
        },
        get: function (owner, key) {
            return key === undefined ?
                this.cache(owner) :

                // Always use camelCase key (gh-2257)
                owner[this.expando] && owner[this.expando][camelCase(key)];
        },
        access: function (owner, key, value) {

            // In cases where either:
            //
            //   1. No key was specified
            //   2. A string key was specified, but no value provided
            //
            // Take the "read" path and allow the get method to determine
            // which value to return, respectively either:
            //
            //   1. The entire cache object
            //   2. The data stored at the key
            //
            if (key === undefined ||
                ((key && typeof key === "string") && value === undefined)) {

                return this.get(owner, key);
            }

            // When the key is not a string, or both a key and value
            // are specified, set or extend (existing objects) with either:
            //
            //   1. An object of properties
            //   2. A key and value
            //
            this.set(owner, key, value);

            // Since the "set" path can have two possible entry points
            // return the expected data based on which path was taken[*]
            return value !== undefined ? value : key;
        },
        remove: function (owner, key) {
            var i,
                cache = owner[this.expando];

            if (cache === undefined) {
                return;
            }

            if (key !== undefined) {

                // Support array or space separated string of keys
                if (Array.isArray(key)) {

                    // If key is an array of keys...
                    // We always set camelCase keys, so remove that.
                    key = key.map(camelCase);
                } else {
                    key = camelCase(key);

                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ?
                        [key] :
                        (key.match(rnothtmlwhite) || []);
                }

                i = key.length;

                while (i--) {
                    delete cache[key[i]];
                }
            }

            // Remove the expando if there's no more data
            if (key === undefined || jQuery.isEmptyObject(cache)) {

                // Support: Chrome <=35 - 45
                // Webkit & Blink performance suffers when deleting properties
                // from DOM nodes, so set to undefined instead
                // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                if (owner.nodeType) {
                    owner[this.expando] = undefined;
                } else {
                    delete owner[this.expando];
                }
            }
        },
        hasData: function (owner) {
            var cache = owner[this.expando];
            return cache !== undefined && !jQuery.isEmptyObject(cache);
        }
    };
    var dataPriv = new Data();

    var dataUser = new Data();


//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        rmultiDash = /[A-Z]/g;

    function getData(data) {
        if (data === "true") {
            return true;
        }

        if (data === "false") {
            return false;
        }

        if (data === "null") {
            return null;
        }

        // Only convert to a number if it doesn't change the string
        if (data === +data + "") {
            return +data;
        }

        if (rbrace.test(data)) {
            return JSON.parse(data);
        }

        return data;
    }

    function dataAttr(elem, key, data) {
        var name;

        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {
            name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
            data = elem.getAttribute(name);

            if (typeof data === "string") {
                try {
                    data = getData(data);
                } catch (e) {
                }

                // Make sure we set the data so it isn't changed later
                dataUser.set(elem, key, data);
            } else {
                data = undefined;
            }
        }
        return data;
    }

    jQuery.extend({
        hasData: function (elem) {
            return dataUser.hasData(elem) || dataPriv.hasData(elem);
        },

        data: function (elem, name, data) {
            return dataUser.access(elem, name, data);
        },

        removeData: function (elem, name) {
            dataUser.remove(elem, name);
        },

        // TODO: Now that all calls to _data and _removeData have been replaced
        // with direct calls to dataPriv methods, these can be deprecated.
        _data: function (elem, name, data) {
            return dataPriv.access(elem, name, data);
        },

        _removeData: function (elem, name) {
            dataPriv.remove(elem, name);
        }
    });

    jQuery.fn.extend({
        data: function (key, value) {
            var i, name, data,
                elem = this[0],
                attrs = elem && elem.attributes;

            // Gets all values
            if (key === undefined) {
                if (this.length) {
                    data = dataUser.get(elem);

                    if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
                        i = attrs.length;
                        while (i--) {

                            // Support: IE 11 only
                            // The attrs elements can be null (#14894)
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name]);
                                }
                            }
                        }
                        dataPriv.set(elem, "hasDataAttrs", true);
                    }
                }

                return data;
            }

            // Sets multiple values
            if (typeof key === "object") {
                return this.each(function () {
                    dataUser.set(this, key);
                });
            }

            return access(this, function (value) {
                var data;

                // The calling jQuery object (element matches) is not empty
                // (and therefore has an element appears at this[ 0 ]) and the
                // `value` parameter was not undefined. An empty jQuery object
                // will result in `undefined` for elem = this[ 0 ] which will
                // throw an exception if an attempt to read a data cache is made.
                if (elem && value === undefined) {

                    // Attempt to get data from the cache
                    // The key will always be camelCased in Data
                    data = dataUser.get(elem, key);
                    if (data !== undefined) {
                        return data;
                    }

                    // Attempt to "discover" the data in
                    // HTML5 custom data-* attrs
                    data = dataAttr(elem, key);
                    if (data !== undefined) {
                        return data;
                    }

                    // We tried really hard, but the data doesn't exist.
                    return;
                }

                // Set the data...
                this.each(function () {

                    // We always store the camelCased key
                    dataUser.set(this, key, value);
                });
            }, null, value, arguments.length > 1, null, true);
        },

        removeData: function (key) {
            return this.each(function () {
                dataUser.remove(this, key);
            });
        }
    });


    jQuery.extend({
        queue: function (elem, type, data) {
            var queue;

            if (elem) {
                type = (type || "fx") + "queue";
                queue = dataPriv.get(elem, type);

                // Speed up dequeue by getting out quickly if this is just a lookup
                if (data) {
                    if (!queue || Array.isArray(data)) {
                        queue = dataPriv.access(elem, type, jQuery.makeArray(data));
                    } else {
                        queue.push(data);
                    }
                }
                return queue || [];
            }
        },

        dequeue: function (elem, type) {
            type = type || "fx";

            var queue = jQuery.queue(elem, type),
                startLength = queue.length,
                fn = queue.shift(),
                hooks = jQuery._queueHooks(elem, type),
                next = function () {
                    jQuery.dequeue(elem, type);
                };

            // If the fx queue is dequeued, always remove the progress sentinel
            if (fn === "inprogress") {
                fn = queue.shift();
                startLength--;
            }

            if (fn) {

                // Add a progress sentinel to prevent the fx queue from being
                // automatically dequeued
                if (type === "fx") {
                    queue.unshift("inprogress");
                }

                // Clear up the last queue stop function
                delete hooks.stop;
                fn.call(elem, next, hooks);
            }

            if (!startLength && hooks) {
                hooks.empty.fire();
            }
        },

        // Not public - generate a queueHooks object, or return the current one
        _queueHooks: function (elem, type) {
            var key = type + "queueHooks";
            return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
                empty: jQuery.Callbacks("once memory").add(function () {
                    dataPriv.remove(elem, [type + "queue", key]);
                })
            });
        }
    });

    jQuery.fn.extend({
        queue: function (type, data) {
            var setter = 2;

            if (typeof type !== "string") {
                data = type;
                type = "fx";
                setter--;
            }

            if (arguments.length < setter) {
                return jQuery.queue(this[0], type);
            }

            return data === undefined ?
                this :
                this.each(function () {
                    var queue = jQuery.queue(this, type, data);

                    // Ensure a hooks for this queue
                    jQuery._queueHooks(this, type);

                    if (type === "fx" && queue[0] !== "inprogress") {
                        jQuery.dequeue(this, type);
                    }
                });
        },
        dequeue: function (type) {
            return this.each(function () {
                jQuery.dequeue(this, type);
            });
        },
        clearQueue: function (type) {
            return this.queue(type || "fx", []);
        },

        // Get a promise resolved when queues of a certain type
        // are emptied (fx is the type by default)
        promise: function (type, obj) {
            var tmp,
                count = 1,
                defer = jQuery.Deferred(),
                elements = this,
                i = this.length,
                resolve = function () {
                    if (!(--count)) {
                        defer.resolveWith(elements, [elements]);
                    }
                };

            if (typeof type !== "string") {
                obj = type;
                type = undefined;
            }
            type = type || "fx";

            while (i--) {
                tmp = dataPriv.get(elements[i], type + "queueHooks");
                if (tmp && tmp.empty) {
                    count++;
                    tmp.empty.add(resolve);
                }
            }
            resolve();
            return defer.promise(obj);
        }
    });
    var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");


    var cssExpand = ["Top", "Right", "Bottom", "Left"];

    var isHiddenWithinTree = function (elem, el) {

        // isHiddenWithinTree might be called from jQuery#filter function;
        // in that case, element will be second argument
        elem = el || elem;

        // Inline style trumps all
        return elem.style.display === "none" ||
            elem.style.display === "" &&

            // Otherwise, check computed style
            // Support: Firefox <=43 - 45
            // Disconnected elements can have computed display: none, so first confirm that elem is
            // in the document.
            jQuery.contains(elem.ownerDocument, elem) &&

            jQuery.css(elem, "display") === "none";
    };

    var swap = function (elem, options, callback, args) {
        var ret, name,
            old = {};

        // Remember the old values, and insert the new ones
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }

        ret = callback.apply(elem, args || []);

        // Revert the old values
        for (name in options) {
            elem.style[name] = old[name];
        }

        return ret;
    };


    function adjustCSS(elem, prop, valueParts, tween) {
        var adjusted, scale,
            maxIterations = 20,
            currentValue = tween ?
                function () {
                    return tween.cur();
                } :
                function () {
                    return jQuery.css(elem, prop, "");
                },
            initial = currentValue(),
            unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"),

            // Starting value computation is required for potential unit mismatches
            initialInUnit = (jQuery.cssNumber[prop] || unit !== "px" && +initial) &&
                rcssNum.exec(jQuery.css(elem, prop));

        if (initialInUnit && initialInUnit[3] !== unit) {

            // Support: Firefox <=54
            // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
            initial = initial / 2;

            // Trust units reported by jQuery.css
            unit = unit || initialInUnit[3];

            // Iteratively approximate from a nonzero starting point
            initialInUnit = +initial || 1;

            while (maxIterations--) {

                // Evaluate and update our best guess (doubling guesses that zero out).
                // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                jQuery.style(elem, prop, initialInUnit + unit);
                if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
                    maxIterations = 0;
                }
                initialInUnit = initialInUnit / scale;

            }

            initialInUnit = initialInUnit * 2;
            jQuery.style(elem, prop, initialInUnit + unit);

            // Make sure we update the tween properties later on
            valueParts = valueParts || [];
        }

        if (valueParts) {
            initialInUnit = +initialInUnit || +initial || 0;

            // Apply relative offset (+=/-=) if specified
            adjusted = valueParts[1] ?
                initialInUnit + (valueParts[1] + 1) * valueParts[2] :
                +valueParts[2];
            if (tween) {
                tween.unit = unit;
                tween.start = initialInUnit;
                tween.end = adjusted;
            }
        }
        return adjusted;
    }


    var defaultDisplayMap = {};

    function getDefaultDisplay(elem) {
        var temp,
            doc = elem.ownerDocument,
            nodeName = elem.nodeName,
            display = defaultDisplayMap[nodeName];

        if (display) {
            return display;
        }

        temp = doc.body.appendChild(doc.createElement(nodeName));
        display = jQuery.css(temp, "display");

        temp.parentNode.removeChild(temp);

        if (display === "none") {
            display = "block";
        }
        defaultDisplayMap[nodeName] = display;

        return display;
    }

    function showHide(elements, show) {
        var display, elem,
            values = [],
            index = 0,
            length = elements.length;

        // Determine new display value for elements that need to change
        for (; index < length; index++) {
            elem = elements[index];
            if (!elem.style) {
                continue;
            }

            display = elem.style.display;
            if (show) {

                // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                // check is required in this first loop unless we have a nonempty display value (either
                // inline or about-to-be-restored)
                if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null;
                    if (!values[index]) {
                        elem.style.display = "";
                    }
                }
                if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                    values[index] = getDefaultDisplay(elem);
                }
            } else {
                if (display !== "none") {
                    values[index] = "none";

                    // Remember what we're overwriting
                    dataPriv.set(elem, "display", display);
                }
            }
        }

        // Set the display of the elements in a second loop to avoid constant reflow
        for (index = 0; index < length; index++) {
            if (values[index] != null) {
                elements[index].style.display = values[index];
            }
        }

        return elements;
    }

    jQuery.fn.extend({
        show: function () {
            return showHide(this, true);
        },
        hide: function () {
            return showHide(this);
        },
        toggle: function (state) {
            if (typeof state === "boolean") {
                return state ? this.show() : this.hide();
            }

            return this.each(function () {
                if (isHiddenWithinTree(this)) {
                    jQuery(this).show();
                } else {
                    jQuery(this).hide();
                }
            });
        }
    });
    var rcheckableType = (/^(?:checkbox|radio)$/i);

    var rtagName = (/<([a-z][^\/\0>\x20\t\r\n\f]+)/i);

    var rscriptType = (/^$|^module$|\/(?:java|ecma)script/i);


// We have to close these tags to support XHTML (#13200)
    var wrapMap = {

        // Support: IE <=9 only
        option: [1, "<select multiple='multiple'>", "</select>"],

        // XHTML parsers do not magically insert elements in the
        // same way that tag soup parsers do. So we cannot shorten
        // this by omitting <tbody> or other required elements.
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

        _default: [0, "", ""]
    };

// Support: IE <=9 only
    wrapMap.optgroup = wrapMap.option;

    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;


    function getAll(context, tag) {

        // Support: IE <=9 - 11 only
        // Use typeof to avoid zero-argument method invocation on host objects (#15151)
        var ret;

        if (typeof context.getElementsByTagName !== "undefined") {
            ret = context.getElementsByTagName(tag || "*");

        } else if (typeof context.querySelectorAll !== "undefined") {
            ret = context.querySelectorAll(tag || "*");

        } else {
            ret = [];
        }

        if (tag === undefined || tag && nodeName(context, tag)) {
            return jQuery.merge([context], ret);
        }

        return ret;
    }


// Mark scripts as having already been evaluated
    function setGlobalEval(elems, refElements) {
        var i = 0,
            l = elems.length;

        for (; i < l; i++) {
            dataPriv.set(
                elems[i],
                "globalEval",
                !refElements || dataPriv.get(refElements[i], "globalEval")
            );
        }
    }


    var rhtml = /<|&#?\w+;/;

    function buildFragment(elems, context, scripts, selection, ignored) {
        var elem, tmp, tag, wrap, contains, j,
            fragment = context.createDocumentFragment(),
            nodes = [],
            i = 0,
            l = elems.length;

        for (; i < l; i++) {
            elem = elems[i];

            if (elem || elem === 0) {

                // Add nodes directly
                if (toType(elem) === "object") {

                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

                    // Convert non-html into a text node
                } else if (!rhtml.test(elem)) {
                    nodes.push(context.createTextNode(elem));

                    // Convert html into DOM nodes
                } else {
                    tmp = tmp || fragment.appendChild(context.createElement("div"));

                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
                    wrap = wrapMap[tag] || wrapMap._default;
                    tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];

                    // Descend through wrappers to the right content
                    j = wrap[0];
                    while (j--) {
                        tmp = tmp.lastChild;
                    }

                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes);

                    // Remember the top-level container
                    tmp = fragment.firstChild;

                    // Ensure the created nodes are orphaned (#12392)
                    tmp.textContent = "";
                }
            }
        }

        // Remove wrapper from fragment
        fragment.textContent = "";

        i = 0;
        while ((elem = nodes[i++])) {

            // Skip elements already in the context collection (trac-4087)
            if (selection && jQuery.inArray(elem, selection) > -1) {
                if (ignored) {
                    ignored.push(elem);
                }
                continue;
            }

            contains = jQuery.contains(elem.ownerDocument, elem);

            // Append to fragment
            tmp = getAll(fragment.appendChild(elem), "script");

            // Preserve script evaluation history
            if (contains) {
                setGlobalEval(tmp);
            }

            // Capture executables
            if (scripts) {
                j = 0;
                while ((elem = tmp[j++])) {
                    if (rscriptType.test(elem.type || "")) {
                        scripts.push(elem);
                    }
                }
            }
        }

        return fragment;
    }


    (function () {
        var fragment = document.createDocumentFragment(),
            div = fragment.appendChild(document.createElement("div")),
            input = document.createElement("input");

        // Support: Android 4.0 - 4.3 only
        // Check state lost if the name is set (#11217)
        // Support: Windows Web Apps (WWA)
        // `name` and `type` must use .setAttribute for WWA (#14901)
        input.setAttribute("type", "radio");
        input.setAttribute("checked", "checked");
        input.setAttribute("name", "t");

        div.appendChild(input);

        // Support: Android <=4.1 only
        // Older WebKit doesn't clone checked state correctly in fragments
        support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

        // Support: IE <=11 only
        // Make sure textarea (and checkbox) defaultValue is properly cloned
        div.innerHTML = "<textarea>x</textarea>";
        support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
    })();
    var documentElement = document.documentElement;


    var
        rkeyEvent = /^key/,
        rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

    function returnTrue() {
        return true;
    }

    function returnFalse() {
        return false;
    }

// Support: IE <=9 only
// See #13393 for more info
    function safeActiveElement() {
        try {
            return document.activeElement;
        } catch (err) {
        }
    }

    function on(elem, types, selector, data, fn, one) {
        var origFn, type;

        // Types can be a map of types/handlers
        if (typeof types === "object") {

            // ( types-Object, selector, data )
            if (typeof selector !== "string") {

                // ( types-Object, data )
                data = data || selector;
                selector = undefined;
            }
            for (type in types) {
                on(elem, type, selector, data, types[type], one);
            }
            return elem;
        }

        if (data == null && fn == null) {

            // ( types, fn )
            fn = selector;
            data = selector = undefined;
        } else if (fn == null) {
            if (typeof selector === "string") {

                // ( types, selector, fn )
                fn = data;
                data = undefined;
            } else {

                // ( types, data, fn )
                fn = data;
                data = selector;
                selector = undefined;
            }
        }
        if (fn === false) {
            fn = returnFalse;
        } else if (!fn) {
            return elem;
        }

        if (one === 1) {
            origFn = fn;
            fn = function (event) {

                // Can use an empty set, since event contains the info
                jQuery().off(event);
                return origFn.apply(this, arguments);
            };

            // Use same guid so caller can remove using origFn
            fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
        }
        return elem.each(function () {
            jQuery.event.add(this, types, fn, data, selector);
        });
    }

    /*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
    jQuery.event = {

        global: {},

        add: function (elem, types, handler, data, selector) {

            var handleObjIn, eventHandle, tmp,
                events, t, handleObj,
                special, handlers, type, namespaces, origType,
                elemData = dataPriv.get(elem);

            // Don't attach events to noData or text/comment nodes (but allow plain objects)
            if (!elemData) {
                return;
            }

            // Caller can pass in an object of custom data in lieu of the handler
            if (handler.handler) {
                handleObjIn = handler;
                handler = handleObjIn.handler;
                selector = handleObjIn.selector;
            }

            // Ensure that invalid selectors throw exceptions at attach time
            // Evaluate against documentElement in case elem is a non-element node (e.g., document)
            if (selector) {
                jQuery.find.matchesSelector(documentElement, selector);
            }

            // Make sure that the handler has a unique ID, used to find/remove it later
            if (!handler.guid) {
                handler.guid = jQuery.guid++;
            }

            // Init the element's event structure and main handler, if this is the first
            if (!(events = elemData.events)) {
                events = elemData.events = {};
            }
            if (!(eventHandle = elemData.handle)) {
                eventHandle = elemData.handle = function (e) {

                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
                        jQuery.event.dispatch.apply(elem, arguments) : undefined;
                };
            }

            // Handle multiple events separated by a space
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();

                // There *must* be a type, no attaching namespace-only handlers
                if (!type) {
                    continue;
                }

                // If event changes its type, use the special event handlers for the changed type
                special = jQuery.event.special[type] || {};

                // If selector defined, determine special event api type, otherwise given type
                type = (selector ? special.delegateType : special.bindType) || type;

                // Update special based on newly reset type
                special = jQuery.event.special[type] || {};

                // handleObj is passed to all event handlers
                handleObj = jQuery.extend({
                    type: type,
                    origType: origType,
                    data: data,
                    handler: handler,
                    guid: handler.guid,
                    selector: selector,
                    needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                    namespace: namespaces.join(".")
                }, handleObjIn);

                // Init the event handler queue if we're the first
                if (!(handlers = events[type])) {
                    handlers = events[type] = [];
                    handlers.delegateCount = 0;

                    // Only use addEventListener if the special events handler returns false
                    if (!special.setup ||
                        special.setup.call(elem, data, namespaces, eventHandle) === false) {

                        if (elem.addEventListener) {
                            elem.addEventListener(type, eventHandle);
                        }
                    }
                }

                if (special.add) {
                    special.add.call(elem, handleObj);

                    if (!handleObj.handler.guid) {
                        handleObj.handler.guid = handler.guid;
                    }
                }

                // Add to the element's handler list, delegates in front
                if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj);
                } else {
                    handlers.push(handleObj);
                }

                // Keep track of which events have ever been used, for event optimization
                jQuery.event.global[type] = true;
            }

        },

        // Detach an event or set of events from an element
        remove: function (elem, types, handler, selector, mappedTypes) {

            var j, origCount, tmp,
                events, t, handleObj,
                special, handlers, type, namespaces, origType,
                elemData = dataPriv.hasData(elem) && dataPriv.get(elem);

            if (!elemData || !(events = elemData.events)) {
                return;
            }

            // Once for each type.namespace in types; type may be omitted
            types = (types || "").match(rnothtmlwhite) || [""];
            t = types.length;
            while (t--) {
                tmp = rtypenamespace.exec(types[t]) || [];
                type = origType = tmp[1];
                namespaces = (tmp[2] || "").split(".").sort();

                // Unbind all events (on this namespace, if provided) for the element
                if (!type) {
                    for (type in events) {
                        jQuery.event.remove(elem, type + types[t], handler, selector, true);
                    }
                    continue;
                }

                special = jQuery.event.special[type] || {};
                type = (selector ? special.delegateType : special.bindType) || type;
                handlers = events[type] || [];
                tmp = tmp[2] &&
                    new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

                // Remove matching events
                origCount = j = handlers.length;
                while (j--) {
                    handleObj = handlers[j];

                    if ((mappedTypes || origType === handleObj.origType) &&
                        (!handler || handler.guid === handleObj.guid) &&
                        (!tmp || tmp.test(handleObj.namespace)) &&
                        (!selector || selector === handleObj.selector ||
                            selector === "**" && handleObj.selector)) {
                        handlers.splice(j, 1);

                        if (handleObj.selector) {
                            handlers.delegateCount--;
                        }
                        if (special.remove) {
                            special.remove.call(elem, handleObj);
                        }
                    }
                }

                // Remove generic event handler if we removed something and no more handlers exist
                // (avoids potential for endless recursion during removal of special event handlers)
                if (origCount && !handlers.length) {
                    if (!special.teardown ||
                        special.teardown.call(elem, namespaces, elemData.handle) === false) {

                        jQuery.removeEvent(elem, type, elemData.handle);
                    }

                    delete events[type];
                }
            }

            // Remove data and the expando if it's no longer used
            if (jQuery.isEmptyObject(events)) {
                dataPriv.remove(elem, "handle events");
            }
        },

        dispatch: function (nativeEvent) {

            // Make a writable jQuery.Event from the native event object
            var event = jQuery.event.fix(nativeEvent);

            var i, j, ret, matched, handleObj, handlerQueue,
                args = new Array(arguments.length),
                handlers = (dataPriv.get(this, "events") || {})[event.type] || [],
                special = jQuery.event.special[event.type] || {};

            // Use the fix-ed jQuery.Event rather than the (read-only) native event
            args[0] = event;

            for (i = 1; i < arguments.length; i++) {
                args[i] = arguments[i];
            }

            event.delegateTarget = this;

            // Call the preDispatch hook for the mapped type, and let it bail if desired
            if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                return;
            }

            // Determine handlers
            handlerQueue = jQuery.event.handlers.call(this, event, handlers);

            // Run delegates first; they may want to stop propagation beneath us
            i = 0;
            while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                event.currentTarget = matched.elem;

                j = 0;
                while ((handleObj = matched.handlers[j++]) &&
                !event.isImmediatePropagationStopped()) {

                    // Triggered event must either 1) have no namespace, or 2) have namespace(s)
                    // a subset or equal to those in the bound event (both can have no namespace).
                    if (!event.rnamespace || event.rnamespace.test(handleObj.namespace)) {

                        event.handleObj = handleObj;
                        event.data = handleObj.data;

                        ret = ((jQuery.event.special[handleObj.origType] || {}).handle ||
                            handleObj.handler).apply(matched.elem, args);

                        if (ret !== undefined) {
                            if ((event.result = ret) === false) {
                                event.preventDefault();
                                event.stopPropagation();
                            }
                        }
                    }
                }
            }

            // Call the postDispatch hook for the mapped type
            if (special.postDispatch) {
                special.postDispatch.call(this, event);
            }

            return event.result;
        },

        handlers: function (event, handlers) {
            var i, handleObj, sel, matchedHandlers, matchedSelectors,
                handlerQueue = [],
                delegateCount = handlers.delegateCount,
                cur = event.target;

            // Find delegate handlers
            if (delegateCount &&

                // Support: IE <=9
                // Black-hole SVG <use> instance trees (trac-13180)
                cur.nodeType &&

                // Support: Firefox <=42
                // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
                // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
                // Support: IE 11 only
                // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
                !(event.type === "click" && event.button >= 1)) {

                for (; cur !== this; cur = cur.parentNode || this) {

                    // Don't check non-elements (#13208)
                    // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                    if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
                        matchedHandlers = [];
                        matchedSelectors = {};
                        for (i = 0; i < delegateCount; i++) {
                            handleObj = handlers[i];

                            // Don't conflict with Object.prototype properties (#13203)
                            sel = handleObj.selector + " ";

                            if (matchedSelectors[sel] === undefined) {
                                matchedSelectors[sel] = handleObj.needsContext ?
                                    jQuery(sel, this).index(cur) > -1 :
                                    jQuery.find(sel, this, null, [cur]).length;
                            }
                            if (matchedSelectors[sel]) {
                                matchedHandlers.push(handleObj);
                            }
                        }
                        if (matchedHandlers.length) {
                            handlerQueue.push({elem: cur, handlers: matchedHandlers});
                        }
                    }
                }
            }

            // Add the remaining (directly-bound) handlers
            cur = this;
            if (delegateCount < handlers.length) {
                handlerQueue.push({elem: cur, handlers: handlers.slice(delegateCount)});
            }

            return handlerQueue;
        },

        addProp: function (name, hook) {
            Object.defineProperty(jQuery.Event.prototype, name, {
                enumerable: true,
                configurable: true,

                get: isFunction(hook) ?
                    function () {
                        if (this.originalEvent) {
                            return hook(this.originalEvent);
                        }
                    } :
                    function () {
                        if (this.originalEvent) {
                            return this.originalEvent[name];
                        }
                    },

                set: function (value) {
                    Object.defineProperty(this, name, {
                        enumerable: true,
                        configurable: true,
                        writable: true,
                        value: value
                    });
                }
            });
        },

        fix: function (originalEvent) {
            return originalEvent[jQuery.expando] ?
                originalEvent :
                new jQuery.Event(originalEvent);
        },

        special: {
            load: {

                // Prevent triggered image.load events from bubbling to window.load
                noBubble: true
            },
            focus: {

                // Fire native event if possible so blur/focus sequence is correct
                trigger: function () {
                    if (this !== safeActiveElement() && this.focus) {
                        this.focus();
                        return false;
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === safeActiveElement() && this.blur) {
                        this.blur();
                        return false;
                    }
                },
                delegateType: "focusout"
            },
            click: {

                // For checkbox, fire native event so checked state will be right
                trigger: function () {
                    if (this.type === "checkbox" && this.click && nodeName(this, "input")) {
                        this.click();
                        return false;
                    }
                },

                // For cross-browser consistency, don't fire native .click() on links
                _default: function (event) {
                    return nodeName(event.target, "a");
                }
            },

            beforeunload: {
                postDispatch: function (event) {

                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) {
                        event.originalEvent.returnValue = event.result;
                    }
                }
            }
        }
    };

    jQuery.removeEvent = function (elem, type, handle) {

        // This "if" is needed for plain objects
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handle);
        }
    };

    jQuery.Event = function (src, props) {

        // Allow instantiation without the 'new' keyword
        if (!(this instanceof jQuery.Event)) {
            return new jQuery.Event(src, props);
        }

        // Event object
        if (src && src.type) {
            this.originalEvent = src;
            this.type = src.type;

            // Events bubbling up the document may have been marked as prevented
            // by a handler lower down the tree; reflect the correct value.
            this.isDefaultPrevented = src.defaultPrevented ||
            src.defaultPrevented === undefined &&

            // Support: Android <=2.3 only
            src.returnValue === false ?
                returnTrue :
                returnFalse;

            // Create target properties
            // Support: Safari <=6 - 7 only
            // Target should not be a text node (#504, #13143)
            this.target = (src.target && src.target.nodeType === 3) ?
                src.target.parentNode :
                src.target;

            this.currentTarget = src.currentTarget;
            this.relatedTarget = src.relatedTarget;

            // Event type
        } else {
            this.type = src;
        }

        // Put explicitly provided properties onto the event object
        if (props) {
            jQuery.extend(this, props);
        }

        // Create a timestamp if incoming event doesn't have one
        this.timeStamp = src && src.timeStamp || Date.now();

        // Mark it as fixed
        this[jQuery.expando] = true;
    };

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
    jQuery.Event.prototype = {
        constructor: jQuery.Event,
        isDefaultPrevented: returnFalse,
        isPropagationStopped: returnFalse,
        isImmediatePropagationStopped: returnFalse,
        isSimulated: false,

        preventDefault: function () {
            var e = this.originalEvent;

            this.isDefaultPrevented = returnTrue;

            if (e && !this.isSimulated) {
                e.preventDefault();
            }
        },
        stopPropagation: function () {
            var e = this.originalEvent;

            this.isPropagationStopped = returnTrue;

            if (e && !this.isSimulated) {
                e.stopPropagation();
            }
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;

            this.isImmediatePropagationStopped = returnTrue;

            if (e && !this.isSimulated) {
                e.stopImmediatePropagation();
            }

            this.stopPropagation();
        }
    };

// Includes all common event props including KeyEvent and MouseEvent specific props
    jQuery.each({
        altKey: true,
        bubbles: true,
        cancelable: true,
        changedTouches: true,
        ctrlKey: true,
        detail: true,
        eventPhase: true,
        metaKey: true,
        pageX: true,
        pageY: true,
        shiftKey: true,
        view: true,
        "char": true,
        charCode: true,
        key: true,
        keyCode: true,
        button: true,
        buttons: true,
        clientX: true,
        clientY: true,
        offsetX: true,
        offsetY: true,
        pointerId: true,
        pointerType: true,
        screenX: true,
        screenY: true,
        targetTouches: true,
        toElement: true,
        touches: true,

        which: function (event) {
            var button = event.button;

            // Add which for key events
            if (event.which == null && rkeyEvent.test(event.type)) {
                return event.charCode != null ? event.charCode : event.keyCode;
            }

            // Add which for click: 1 === left; 2 === middle; 3 === right
            if (!event.which && button !== undefined && rmouseEvent.test(event.type)) {
                if (button & 1) {
                    return 1;
                }

                if (button & 2) {
                    return 3;
                }

                if (button & 4) {
                    return 2;
                }

                return 0;
            }

            return event.which;
        }
    }, jQuery.event.addProp);

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
    jQuery.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (orig, fix) {
        jQuery.event.special[orig] = {
            delegateType: fix,
            bindType: fix,

            handle: function (event) {
                var ret,
                    target = this,
                    related = event.relatedTarget,
                    handleObj = event.handleObj;

                // For mouseenter/leave call the handler if related is outside the target.
                // NB: No relatedTarget if the mouse left/entered the browser window
                if (!related || (related !== target && !jQuery.contains(target, related))) {
                    event.type = handleObj.origType;
                    ret = handleObj.handler.apply(this, arguments);
                    event.type = fix;
                }
                return ret;
            }
        };
    });

    jQuery.fn.extend({

        on: function (types, selector, data, fn) {
            return on(this, types, selector, data, fn);
        },
        one: function (types, selector, data, fn) {
            return on(this, types, selector, data, fn, 1);
        },
        off: function (types, selector, fn) {
            var handleObj, type;
            if (types && types.preventDefault && types.handleObj) {

                // ( event )  dispatched jQuery.Event
                handleObj = types.handleObj;
                jQuery(types.delegateTarget).off(
                    handleObj.namespace ?
                        handleObj.origType + "." + handleObj.namespace :
                        handleObj.origType,
                    handleObj.selector,
                    handleObj.handler
                );
                return this;
            }
            if (typeof types === "object") {

                // ( types-object [, selector] )
                for (type in types) {
                    this.off(type, selector, types[type]);
                }
                return this;
            }
            if (selector === false || typeof selector === "function") {

                // ( types [, fn] )
                fn = selector;
                selector = undefined;
            }
            if (fn === false) {
                fn = returnFalse;
            }
            return this.each(function () {
                jQuery.event.remove(this, types, fn, selector);
            });
        }
    });


    var

        /* eslint-disable max-len */

        // See https://github.com/eslint/eslint/issues/3229
        rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

        /* eslint-enable */

        // Support: IE <=10 - 11, Edge 12 - 13 only
        // In IE/Edge using regex groups here causes severe slowdowns.
        // See https://connect.microsoft.com/IE/feedback/details/1736512/
        rnoInnerhtml = /<script|<style|<link/i,

        // checked="checked" or checked
        rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
        rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
    function manipulationTarget(elem, content) {
        if (nodeName(elem, "table") &&
            nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {

            return jQuery(elem).children("tbody")[0] || elem;
        }

        return elem;
    }

// Replace/restore the type attribute of script elements for safe DOM manipulation
    function disableScript(elem) {
        elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
        return elem;
    }

    function restoreScript(elem) {
        if ((elem.type || "").slice(0, 5) === "true/") {
            elem.type = elem.type.slice(5);
        } else {
            elem.removeAttribute("type");
        }

        return elem;
    }

    function cloneCopyEvent(src, dest) {
        var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

        if (dest.nodeType !== 1) {
            return;
        }

        // 1. Copy private data: events, handlers, etc.
        if (dataPriv.hasData(src)) {
            pdataOld = dataPriv.access(src);
            pdataCur = dataPriv.set(dest, pdataOld);
            events = pdataOld.events;

            if (events) {
                delete pdataCur.handle;
                pdataCur.events = {};

                for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                        jQuery.event.add(dest, type, events[type][i]);
                    }
                }
            }
        }

        // 2. Copy user data
        if (dataUser.hasData(src)) {
            udataOld = dataUser.access(src);
            udataCur = jQuery.extend({}, udataOld);

            dataUser.set(dest, udataCur);
        }
    }

// Fix IE bugs, see support tests
    function fixInput(src, dest) {
        var nodeName = dest.nodeName.toLowerCase();

        // Fails to persist the checked state of a cloned checkbox or radio button.
        if (nodeName === "input" && rcheckableType.test(src.type)) {
            dest.checked = src.checked;

            // Fails to return the selected option to the default selected state when cloning options
        } else if (nodeName === "input" || nodeName === "textarea") {
            dest.defaultValue = src.defaultValue;
        }
    }

    function domManip(collection, args, callback, ignored) {

        // Flatten any nested arrays
        args = concat.apply([], args);

        var fragment, first, scripts, hasScripts, node, doc,
            i = 0,
            l = collection.length,
            iNoClone = l - 1,
            value = args[0],
            valueIsFunction = isFunction(value);

        // We can't cloneNode fragments that contain checked, in WebKit
        if (valueIsFunction ||
            (l > 1 && typeof value === "string" &&
                !support.checkClone && rchecked.test(value))) {
            return collection.each(function (index) {
                var self = collection.eq(index);
                if (valueIsFunction) {
                    args[0] = value.call(this, index, self.html());
                }
                domManip(self, args, callback, ignored);
            });
        }

        if (l) {
            fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
            first = fragment.firstChild;

            if (fragment.childNodes.length === 1) {
                fragment = first;
            }

            // Require either new content or an interest in ignored elements to invoke the callback
            if (first || ignored) {
                scripts = jQuery.map(getAll(fragment, "script"), disableScript);
                hasScripts = scripts.length;

                // Use the original fragment for the last item
                // instead of the first because it can end up
                // being emptied incorrectly in certain situations (#8070).
                for (; i < l; i++) {
                    node = fragment;

                    if (i !== iNoClone) {
                        node = jQuery.clone(node, true, true);

                        // Keep references to cloned scripts for later restoration
                        if (hasScripts) {

                            // Support: Android <=4.0 only, PhantomJS 1 only
                            // push.apply(_, arraylike) throws on ancient WebKit
                            jQuery.merge(scripts, getAll(node, "script"));
                        }
                    }

                    callback.call(collection[i], node, i);
                }

                if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument;

                    // Reenable scripts
                    jQuery.map(scripts, restoreScript);

                    // Evaluate executable scripts on first document insertion
                    for (i = 0; i < hasScripts; i++) {
                        node = scripts[i];
                        if (rscriptType.test(node.type || "") &&
                            !dataPriv.access(node, "globalEval") &&
                            jQuery.contains(doc, node)) {

                            if (node.src && (node.type || "").toLowerCase() !== "module") {

                                // Optional AJAX dependency, but won't run scripts if not present
                                if (jQuery._evalUrl) {
                                    jQuery._evalUrl(node.src);
                                }
                            } else {
                                DOMEval(node.textContent.replace(rcleanScript, ""), doc, node);
                            }
                        }
                    }
                }
            }
        }

        return collection;
    }

    function remove(elem, selector, keepData) {
        var node,
            nodes = selector ? jQuery.filter(selector, elem) : elem,
            i = 0;

        for (; (node = nodes[i]) != null; i++) {
            if (!keepData && node.nodeType === 1) {
                jQuery.cleanData(getAll(node));
            }

            if (node.parentNode) {
                if (keepData && jQuery.contains(node.ownerDocument, node)) {
                    setGlobalEval(getAll(node, "script"));
                }
                node.parentNode.removeChild(node);
            }
        }

        return elem;
    }

    jQuery.extend({
        htmlPrefilter: function (html) {
            return html.replace(rxhtmlTag, "<$1></$2>");
        },

        clone: function (elem, dataAndEvents, deepDataAndEvents) {
            var i, l, srcElements, destElements,
                clone = elem.cloneNode(true),
                inPage = jQuery.contains(elem.ownerDocument, elem);

            // Fix IE cloning issues
            if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) &&
                !jQuery.isXMLDoc(elem)) {

                // We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
                destElements = getAll(clone);
                srcElements = getAll(elem);

                for (i = 0, l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i]);
                }
            }

            // Copy the events from the original to the clone
            if (dataAndEvents) {
                if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem);
                    destElements = destElements || getAll(clone);

                    for (i = 0, l = srcElements.length; i < l; i++) {
                        cloneCopyEvent(srcElements[i], destElements[i]);
                    }
                } else {
                    cloneCopyEvent(elem, clone);
                }
            }

            // Preserve script evaluation history
            destElements = getAll(clone, "script");
            if (destElements.length > 0) {
                setGlobalEval(destElements, !inPage && getAll(elem, "script"));
            }

            // Return the cloned set
            return clone;
        },

        cleanData: function (elems) {
            var data, elem, type,
                special = jQuery.event.special,
                i = 0;

            for (; (elem = elems[i]) !== undefined; i++) {
                if (acceptData(elem)) {
                    if ((data = elem[dataPriv.expando])) {
                        if (data.events) {
                            for (type in data.events) {
                                if (special[type]) {
                                    jQuery.event.remove(elem, type);

                                    // This is a shortcut to avoid jQuery.event.remove's overhead
                                } else {
                                    jQuery.removeEvent(elem, type, data.handle);
                                }
                            }
                        }

                        // Support: Chrome <=35 - 45+
                        // Assign undefined instead of using delete, see Data#remove
                        elem[dataPriv.expando] = undefined;
                    }
                    if (elem[dataUser.expando]) {

                        // Support: Chrome <=35 - 45+
                        // Assign undefined instead of using delete, see Data#remove
                        elem[dataUser.expando] = undefined;
                    }
                }
            }
        }
    });

    jQuery.fn.extend({
        detach: function (selector) {
            return remove(this, selector, true);
        },

        remove: function (selector) {
            return remove(this, selector);
        },

        text: function (value) {
            return access(this, function (value) {
                return value === undefined ?
                    jQuery.text(this) :
                    this.empty().each(function () {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            this.textContent = value;
                        }
                    });
            }, null, value, arguments.length);
        },

        append: function () {
            return domManip(this, arguments, function (elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.appendChild(elem);
                }
            });
        },

        prepend: function () {
            return domManip(this, arguments, function (elem) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var target = manipulationTarget(this, elem);
                    target.insertBefore(elem, target.firstChild);
                }
            });
        },

        before: function () {
            return domManip(this, arguments, function (elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this);
                }
            });
        },

        after: function () {
            return domManip(this, arguments, function (elem) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling);
                }
            });
        },

        empty: function () {
            var elem,
                i = 0;

            for (; (elem = this[i]) != null; i++) {
                if (elem.nodeType === 1) {

                    // Prevent memory leaks
                    jQuery.cleanData(getAll(elem, false));

                    // Remove any remaining nodes
                    elem.textContent = "";
                }
            }

            return this;
        },

        clone: function (dataAndEvents, deepDataAndEvents) {
            dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
            deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

            return this.map(function () {
                return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
            });
        },

        html: function (value) {
            return access(this, function (value) {
                var elem = this[0] || {},
                    i = 0,
                    l = this.length;

                if (value === undefined && elem.nodeType === 1) {
                    return elem.innerHTML;
                }

                // See if we can take a shortcut and just use innerHTML
                if (typeof value === "string" && !rnoInnerhtml.test(value) &&
                    !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

                    value = jQuery.htmlPrefilter(value);

                    try {
                        for (; i < l; i++) {
                            elem = this[i] || {};

                            // Remove element nodes and prevent memory leaks
                            if (elem.nodeType === 1) {
                                jQuery.cleanData(getAll(elem, false));
                                elem.innerHTML = value;
                            }
                        }

                        elem = 0;

                        // If using innerHTML throws an exception, use the fallback method
                    } catch (e) {
                    }
                }

                if (elem) {
                    this.empty().append(value);
                }
            }, null, value, arguments.length);
        },

        replaceWith: function () {
            var ignored = [];

            // Make the changes, replacing each non-ignored context element with the new content
            return domManip(this, arguments, function (elem) {
                var parent = this.parentNode;

                if (jQuery.inArray(this, ignored) < 0) {
                    jQuery.cleanData(getAll(this));
                    if (parent) {
                        parent.replaceChild(elem, this);
                    }
                }

                // Force callback invocation
            }, ignored);
        }
    });

    jQuery.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (name, original) {
        jQuery.fn[name] = function (selector) {
            var elems,
                ret = [],
                insert = jQuery(selector),
                last = insert.length - 1,
                i = 0;

            for (; i <= last; i++) {
                elems = i === last ? this : this.clone(true);
                jQuery(insert[i])[original](elems);

                // Support: Android <=4.0 only, PhantomJS 1 only
                // .get() because push.apply(_, arraylike) throws on ancient WebKit
                push.apply(ret, elems.get());
            }

            return this.pushStack(ret);
        };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

    var getStyles = function (elem) {

        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var view = elem.ownerDocument.defaultView;

        if (!view || !view.opener) {
            view = window;
        }

        return view.getComputedStyle(elem);
    };

    var rboxStyle = new RegExp(cssExpand.join("|"), "i");


    (function () {

        // Executing both pixelPosition & boxSizingReliable tests require only one layout
        // so they're executed at the same time to save the second computation.
        function computeStyleTests() {

            // This is a singleton, we need to execute it only once
            if (!div) {
                return;
            }

            container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
                "margin-top:1px;padding:0;border:0";
            div.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
                "margin:auto;border:1px;padding:1px;" +
                "width:60%;top:1%";
            documentElement.appendChild(container).appendChild(div);

            var divStyle = window.getComputedStyle(div);
            pixelPositionVal = divStyle.top !== "1%";

            // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
            reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

            // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
            // Some styles come back with percentage values, even though they shouldn't
            div.style.right = "60%";
            pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

            // Support: IE 9 - 11 only
            // Detect misreporting of content dimensions for box-sizing:border-box elements
            boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

            // Support: IE 9 only
            // Detect overflow:scroll screwiness (gh-3699)
            div.style.position = "absolute";
            scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

            documentElement.removeChild(container);

            // Nullify the div so it wouldn't be stored in the memory and
            // it will also be a sign that checks already performed
            div = null;
        }

        function roundPixelMeasures(measure) {
            return Math.round(parseFloat(measure));
        }

        var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
            reliableMarginLeftVal,
            container = document.createElement("div"),
            div = document.createElement("div");

        // Finish early in limited (non-browser) environments
        if (!div.style) {
            return;
        }

        // Support: IE <=9 - 11 only
        // Style of cloned element affects source element cloned (#8908)
        div.style.backgroundClip = "content-box";
        div.cloneNode(true).style.backgroundClip = "";
        support.clearCloneStyle = div.style.backgroundClip === "content-box";

        jQuery.extend(support, {
            boxSizingReliable: function () {
                computeStyleTests();
                return boxSizingReliableVal;
            },
            pixelBoxStyles: function () {
                computeStyleTests();
                return pixelBoxStylesVal;
            },
            pixelPosition: function () {
                computeStyleTests();
                return pixelPositionVal;
            },
            reliableMarginLeft: function () {
                computeStyleTests();
                return reliableMarginLeftVal;
            },
            scrollboxSize: function () {
                computeStyleTests();
                return scrollboxSizeVal;
            }
        });
    })();


    function curCSS(elem, name, computed) {
        var width, minWidth, maxWidth, ret,

            // Support: Firefox 51+
            // Retrieving style before computed somehow
            // fixes an issue with getting wrong values
            // on detached elements
            style = elem.style;

        computed = computed || getStyles(elem);

        // getPropertyValue is needed for:
        //   .css('filter') (IE 9 only, #12537)
        //   .css('--customProperty) (#3144)
        if (computed) {
            ret = computed.getPropertyValue(name) || computed[name];

            if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
                ret = jQuery.style(elem, name);
            }

            // A tribute to the "awesome hack by Dean Edwards"
            // Android Browser returns percentage for some values,
            // but width seems to be reliably pixels.
            // This is against the CSSOM draft spec:
            // https://drafts.csswg.org/cssom/#resolved-values
            if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {

                // Remember the original values
                width = style.width;
                minWidth = style.minWidth;
                maxWidth = style.maxWidth;

                // Put in the new values to get a computed value out
                style.minWidth = style.maxWidth = style.width = ret;
                ret = computed.width;

                // Revert the changed values
                style.width = width;
                style.minWidth = minWidth;
                style.maxWidth = maxWidth;
            }
        }

        return ret !== undefined ?

            // Support: IE <=9 - 11 only
            // IE returns zIndex value as an integer.
            ret + "" :
            ret;
    }


    function addGetHookIf(conditionFn, hookFn) {

        // Define the hook, we'll check on the first run if it's really needed.
        return {
            get: function () {
                if (conditionFn()) {

                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get;
                    return;
                }

                // Hook needed; redefine it so that the support test is not executed again.
                return (this.get = hookFn).apply(this, arguments);
            }
        };
    }


    var

        // Swappable if display is none or starts with table
        // except "table", "table-cell", or "table-caption"
        // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
        rdisplayswap = /^(none|table(?!-c[ea]).+)/,
        rcustomProp = /^--/,
        cssShow = {position: "absolute", visibility: "hidden", display: "block"},
        cssNormalTransform = {
            letterSpacing: "0",
            fontWeight: "400"
        },

        cssPrefixes = ["Webkit", "Moz", "ms"],
        emptyStyle = document.createElement("div").style;

// Return a css property mapped to a potentially vendor prefixed property
    function vendorPropName(name) {

        // Shortcut for names that are not vendor prefixed
        if (name in emptyStyle) {
            return name;
        }

        // Check for vendor prefixed names
        var capName = name[0].toUpperCase() + name.slice(1),
            i = cssPrefixes.length;

        while (i--) {
            name = cssPrefixes[i] + capName;
            if (name in emptyStyle) {
                return name;
            }
        }
    }

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
    function finalPropName(name) {
        var ret = jQuery.cssProps[name];
        if (!ret) {
            ret = jQuery.cssProps[name] = vendorPropName(name) || name;
        }
        return ret;
    }

    function setPositiveNumber(elem, value, subtract) {

        // Any relative (+/-) values have already been
        // normalized at this point
        var matches = rcssNum.exec(value);
        return matches ?

            // Guard against undefined "subtract", e.g., when used as in cssHooks
            Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") :
            value;
    }

    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
        var i = dimension === "width" ? 1 : 0,
            extra = 0,
            delta = 0;

        // Adjustment may not be necessary
        if (box === (isBorderBox ? "border" : "content")) {
            return 0;
        }

        for (; i < 4; i += 2) {

            // Both box models exclude margin
            if (box === "margin") {
                delta += jQuery.css(elem, box + cssExpand[i], true, styles);
            }

            // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
            if (!isBorderBox) {

                // Add padding
                delta += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

                // For "border" or "margin", add border
                if (box !== "padding") {
                    delta += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);

                    // But still keep track of it otherwise
                } else {
                    extra += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }

                // If we get here with a border-box (content + padding + border), we're seeking "content" or
                // "padding" or "margin"
            } else {

                // For "content", subtract padding
                if (box === "content") {
                    delta -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
                }

                // For "content" or "padding", subtract border
                if (box !== "margin") {
                    delta -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
                }
            }
        }

        // Account for positive content-box scroll gutter when requested by providing computedVal
        if (!isBorderBox && computedVal >= 0) {

            // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
            // Assuming integer scroll gutter, subtract the rest and round down
            delta += Math.max(0, Math.ceil(
                elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
                computedVal -
                delta -
                extra -
                0.5
            ));
        }

        return delta;
    }

    function getWidthOrHeight(elem, dimension, extra) {

        // Start with computed style
        var styles = getStyles(elem),
            val = curCSS(elem, dimension, styles),
            isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
            valueIsBorderBox = isBorderBox;

        // Support: Firefox <=54
        // Return a confounding non-pixel value or feign ignorance, as appropriate.
        if (rnumnonpx.test(val)) {
            if (!extra) {
                return val;
            }
            val = "auto";
        }

        // Check for style in case a browser which returns unreliable values
        // for getComputedStyle silently falls back to the reliable elem.style
        valueIsBorderBox = valueIsBorderBox &&
            (support.boxSizingReliable() || val === elem.style[dimension]);

        // Fall back to offsetWidth/offsetHeight when value is "auto"
        // This happens for inline elements with no explicit setting (gh-3571)
        // Support: Android <=4.1 - 4.3 only
        // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
        if (val === "auto" ||
            !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") {

            val = elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)];

            // offsetWidth/offsetHeight provide border-box values
            valueIsBorderBox = true;
        }

        // Normalize "" and auto
        val = parseFloat(val) || 0;

        // Adjust for the element's box model
        return (val +
            boxModelAdjustment(
                elem,
                dimension,
                extra || (isBorderBox ? "border" : "content"),
                valueIsBorderBox,
                styles,

                // Provide the current computed size to request scroll gutter calculation (gh-3589)
                val
            )
        ) + "px";
    }

    jQuery.extend({

        // Add in style property hooks for overriding the default
        // behavior of getting and setting a style property
        cssHooks: {
            opacity: {
                get: function (elem, computed) {
                    if (computed) {

                        // We should always get a number back from opacity
                        var ret = curCSS(elem, "opacity");
                        return ret === "" ? "1" : ret;
                    }
                }
            }
        },

        // Don't automatically add "px" to these possibly-unitless properties
        cssNumber: {
            "animationIterationCount": true,
            "columnCount": true,
            "fillOpacity": true,
            "flexGrow": true,
            "flexShrink": true,
            "fontWeight": true,
            "lineHeight": true,
            "opacity": true,
            "order": true,
            "orphans": true,
            "widows": true,
            "zIndex": true,
            "zoom": true
        },

        // Add in properties whose names you wish to fix before
        // setting or getting the value
        cssProps: {},

        // Get and set the style property on a DOM Node
        style: function (elem, name, value, extra) {

            // Don't set styles on text and comment nodes
            if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
                return;
            }

            // Make sure that we're working with the right name
            var ret, type, hooks,
                origName = camelCase(name),
                isCustomProp = rcustomProp.test(name),
                style = elem.style;

            // Make sure that we're working with the right name. We don't
            // want to query the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) {
                name = finalPropName(origName);
            }

            // Gets hook for the prefixed version, then unprefixed version
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

            // Check if we're setting a value
            if (value !== undefined) {
                type = typeof value;

                // Convert "+=" or "-=" to relative numbers (#7345)
                if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
                    value = adjustCSS(elem, name, ret);

                    // Fixes bug #9237
                    type = "number";
                }

                // Make sure that null and NaN values aren't set (#7116)
                if (value == null || value !== value) {
                    return;
                }

                // If a number was passed in, add the unit (except for certain CSS properties)
                if (type === "number") {
                    value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
                }

                // background-* props affect original clone's values
                if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
                    style[name] = "inherit";
                }

                // If a hook was provided, use that value, otherwise just set the specified value
                if (!hooks || !("set" in hooks) ||
                    (value = hooks.set(elem, value, extra)) !== undefined) {

                    if (isCustomProp) {
                        style.setProperty(name, value);
                    } else {
                        style[name] = value;
                    }
                }

            } else {

                // If a hook was provided get the non-computed value from there
                if (hooks && "get" in hooks &&
                    (ret = hooks.get(elem, false, extra)) !== undefined) {

                    return ret;
                }

                // Otherwise just get the value from the style object
                return style[name];
            }
        },

        css: function (elem, name, extra, styles) {
            var val, num, hooks,
                origName = camelCase(name),
                isCustomProp = rcustomProp.test(name);

            // Make sure that we're working with the right name. We don't
            // want to modify the value if it is a CSS custom property
            // since they are user-defined.
            if (!isCustomProp) {
                name = finalPropName(origName);
            }

            // Try prefixed name followed by the unprefixed name
            hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

            // If a hook was provided get the computed value from there
            if (hooks && "get" in hooks) {
                val = hooks.get(elem, true, extra);
            }

            // Otherwise, if a way to get the computed value exists, use that
            if (val === undefined) {
                val = curCSS(elem, name, styles);
            }

            // Convert "normal" to computed value
            if (val === "normal" && name in cssNormalTransform) {
                val = cssNormalTransform[name];
            }

            // Make numeric if forced or a qualifier was provided and val looks numeric
            if (extra === "" || extra) {
                num = parseFloat(val);
                return extra === true || isFinite(num) ? num || 0 : val;
            }

            return val;
        }
    });

    jQuery.each(["height", "width"], function (i, dimension) {
        jQuery.cssHooks[dimension] = {
            get: function (elem, computed, extra) {
                if (computed) {

                    // Certain elements can have dimension info if we invisibly show them
                    // but it must have a current display style that would benefit
                    return rdisplayswap.test(jQuery.css(elem, "display")) &&

                    // Support: Safari 8+
                    // Table columns in Safari have non-zero offsetWidth & zero
                    // getBoundingClientRect().width unless display is changed.
                    // Support: IE <=11 only
                    // Running getBoundingClientRect on a disconnected node
                    // in IE throws an error.
                    (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ?
                        swap(elem, cssShow, function () {
                            return getWidthOrHeight(elem, dimension, extra);
                        }) :
                        getWidthOrHeight(elem, dimension, extra);
                }
            },

            set: function (elem, value, extra) {
                var matches,
                    styles = getStyles(elem),
                    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                    subtract = extra && boxModelAdjustment(
                        elem,
                        dimension,
                        extra,
                        isBorderBox,
                        styles
                    );

                // Account for unreliable border-box dimensions by comparing offset* to computed and
                // faking a content-box to get border and padding (gh-3699)
                if (isBorderBox && support.scrollboxSize() === styles.position) {
                    subtract -= Math.ceil(
                        elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] -
                        parseFloat(styles[dimension]) -
                        boxModelAdjustment(elem, dimension, "border", false, styles) -
                        0.5
                    );
                }

                // Convert to pixels if value adjustment is needed
                if (subtract && (matches = rcssNum.exec(value)) &&
                    (matches[3] || "px") !== "px") {

                    elem.style[dimension] = value;
                    value = jQuery.css(elem, dimension);
                }

                return setPositiveNumber(elem, value, subtract);
            }
        };
    });

    jQuery.cssHooks.marginLeft = addGetHookIf(support.reliableMarginLeft,
        function (elem, computed) {
            if (computed) {
                return (parseFloat(curCSS(elem, "marginLeft")) ||
                    elem.getBoundingClientRect().left -
                    swap(elem, {marginLeft: 0}, function () {
                        return elem.getBoundingClientRect().left;
                    })
                ) + "px";
            }
        }
    );

// These hooks are used by animate to expand properties
    jQuery.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (prefix, suffix) {
        jQuery.cssHooks[prefix + suffix] = {
            expand: function (value) {
                var i = 0,
                    expanded = {},

                    // Assumes a single number if not a string
                    parts = typeof value === "string" ? value.split(" ") : [value];

                for (; i < 4; i++) {
                    expanded[prefix + cssExpand[i] + suffix] =
                        parts[i] || parts[i - 2] || parts[0];
                }

                return expanded;
            }
        };

        if (prefix !== "margin") {
            jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
        }
    });

    jQuery.fn.extend({
        css: function (name, value) {
            return access(this, function (elem, name, value) {
                var styles, len,
                    map = {},
                    i = 0;

                if (Array.isArray(name)) {
                    styles = getStyles(elem);
                    len = name.length;

                    for (; i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles);
                    }

                    return map;
                }

                return value !== undefined ?
                    jQuery.style(elem, name, value) :
                    jQuery.css(elem, name);
            }, name, value, arguments.length > 1);
        }
    });


    function Tween(elem, options, prop, end, easing) {
        return new Tween.prototype.init(elem, options, prop, end, easing);
    }

    jQuery.Tween = Tween;

    Tween.prototype = {
        constructor: Tween,
        init: function (elem, options, prop, end, easing, unit) {
            this.elem = elem;
            this.prop = prop;
            this.easing = easing || jQuery.easing._default;
            this.options = options;
            this.start = this.now = this.cur();
            this.end = end;
            this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
        },
        cur: function () {
            var hooks = Tween.propHooks[this.prop];

            return hooks && hooks.get ?
                hooks.get(this) :
                Tween.propHooks._default.get(this);
        },
        run: function (percent) {
            var eased,
                hooks = Tween.propHooks[this.prop];

            if (this.options.duration) {
                this.pos = eased = jQuery.easing[this.easing](
                    percent, this.options.duration * percent, 0, 1, this.options.duration
                );
            } else {
                this.pos = eased = percent;
            }
            this.now = (this.end - this.start) * eased + this.start;

            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }

            if (hooks && hooks.set) {
                hooks.set(this);
            } else {
                Tween.propHooks._default.set(this);
            }
            return this;
        }
    };

    Tween.prototype.init.prototype = Tween.prototype;

    Tween.propHooks = {
        _default: {
            get: function (tween) {
                var result;

                // Use a property on the element directly when it is not a DOM element,
                // or when there is no matching style property that exists.
                if (tween.elem.nodeType !== 1 ||
                    tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
                    return tween.elem[tween.prop];
                }

                // Passing an empty string as a 3rd parameter to .css will automatically
                // attempt a parseFloat and fallback to a string if the parse fails.
                // Simple values such as "10px" are parsed to Float;
                // complex values such as "rotate(1rad)" are returned as-is.
                result = jQuery.css(tween.elem, tween.prop, "");

                // Empty strings, null, undefined and "auto" are converted to 0.
                return !result || result === "auto" ? 0 : result;
            },
            set: function (tween) {

                // Use step hook for back compat.
                // Use cssHook if its there.
                // Use .style if available and use plain properties where available.
                if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween);
                } else if (tween.elem.nodeType === 1 &&
                    (tween.elem.style[jQuery.cssProps[tween.prop]] != null ||
                        jQuery.cssHooks[tween.prop])) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
                } else {
                    tween.elem[tween.prop] = tween.now;
                }
            }
        }
    };

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
        set: function (tween) {
            if (tween.elem.nodeType && tween.elem.parentNode) {
                tween.elem[tween.prop] = tween.now;
            }
        }
    };

    jQuery.easing = {
        linear: function (p) {
            return p;
        },
        swing: function (p) {
            return 0.5 - Math.cos(p * Math.PI) / 2;
        },
        _default: "swing"
    };

    jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
    jQuery.fx.step = {};


    var
        fxNow, inProgress,
        rfxtypes = /^(?:toggle|show|hide)$/,
        rrun = /queueHooks$/;

    function schedule() {
        if (inProgress) {
            if (document.hidden === false && window.requestAnimationFrame) {
                window.requestAnimationFrame(schedule);
            } else {
                window.setTimeout(schedule, jQuery.fx.interval);
            }

            jQuery.fx.tick();
        }
    }

// Animations created synchronously will run synchronously
    function createFxNow() {
        window.setTimeout(function () {
            fxNow = undefined;
        });
        return (fxNow = Date.now());
    }

// Generate parameters to create a standard animation
    function genFx(type, includeWidth) {
        var which,
            i = 0,
            attrs = {height: type};

        // If we include width, step value is 1 to do all cssExpand values,
        // otherwise step value is 2 to skip over Left and Right
        includeWidth = includeWidth ? 1 : 0;
        for (; i < 4; i += 2 - includeWidth) {
            which = cssExpand[i];
            attrs["margin" + which] = attrs["padding" + which] = type;
        }

        if (includeWidth) {
            attrs.opacity = attrs.width = type;
        }

        return attrs;
    }

    function createTween(value, prop, animation) {
        var tween,
            collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]),
            index = 0,
            length = collection.length;
        for (; index < length; index++) {
            if ((tween = collection[index].call(animation, prop, value))) {

                // We're done with this property
                return tween;
            }
        }
    }

    function defaultPrefilter(elem, props, opts) {
        var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
            isBox = "width" in props || "height" in props,
            anim = this,
            orig = {},
            style = elem.style,
            hidden = elem.nodeType && isHiddenWithinTree(elem),
            dataShow = dataPriv.get(elem, "fxshow");

        // Queue-skipping animations hijack the fx hooks
        if (!opts.queue) {
            hooks = jQuery._queueHooks(elem, "fx");
            if (hooks.unqueued == null) {
                hooks.unqueued = 0;
                oldfire = hooks.empty.fire;
                hooks.empty.fire = function () {
                    if (!hooks.unqueued) {
                        oldfire();
                    }
                };
            }
            hooks.unqueued++;

            anim.always(function () {

                // Ensure the complete handler is called before this completes
                anim.always(function () {
                    hooks.unqueued--;
                    if (!jQuery.queue(elem, "fx").length) {
                        hooks.empty.fire();
                    }
                });
            });
        }

        // Detect show/hide animations
        for (prop in props) {
            value = props[prop];
            if (rfxtypes.test(value)) {
                delete props[prop];
                toggle = toggle || value === "toggle";
                if (value === (hidden ? "hide" : "show")) {

                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (value === "show" && dataShow && dataShow[prop] !== undefined) {
                        hidden = true;

                        // Ignore all other no-op show/hide data
                    } else {
                        continue;
                    }
                }
                orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
            }
        }

        // Bail out if this is a no-op like .hide().hide()
        propTween = !jQuery.isEmptyObject(props);
        if (!propTween && jQuery.isEmptyObject(orig)) {
            return;
        }

        // Restrict "overflow" and "display" styles during box animations
        if (isBox && elem.nodeType === 1) {

            // Support: IE <=9 - 11, Edge 12 - 15
            // Record all 3 overflow attributes because IE does not infer the shorthand
            // from identically-valued overflowX and overflowY and Edge just mirrors
            // the overflowX value there.
            opts.overflow = [style.overflow, style.overflowX, style.overflowY];

            // Identify a display type, preferring old show/hide data over the CSS cascade
            restoreDisplay = dataShow && dataShow.display;
            if (restoreDisplay == null) {
                restoreDisplay = dataPriv.get(elem, "display");
            }
            display = jQuery.css(elem, "display");
            if (display === "none") {
                if (restoreDisplay) {
                    display = restoreDisplay;
                } else {

                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide([elem], true);
                    restoreDisplay = elem.style.display || restoreDisplay;
                    display = jQuery.css(elem, "display");
                    showHide([elem]);
                }
            }

            // Animate inline elements as inline-block
            if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
                if (jQuery.css(elem, "float") === "none") {

                    // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                        anim.done(function () {
                            style.display = restoreDisplay;
                        });
                        if (restoreDisplay == null) {
                            display = style.display;
                            restoreDisplay = display === "none" ? "" : display;
                        }
                    }
                    style.display = "inline-block";
                }
            }
        }

        if (opts.overflow) {
            style.overflow = "hidden";
            anim.always(function () {
                style.overflow = opts.overflow[0];
                style.overflowX = opts.overflow[1];
                style.overflowY = opts.overflow[2];
            });
        }

        // Implement show/hide animations
        propTween = false;
        for (prop in orig) {

            // General show/hide setup for this element animation
            if (!propTween) {
                if (dataShow) {
                    if ("hidden" in dataShow) {
                        hidden = dataShow.hidden;
                    }
                } else {
                    dataShow = dataPriv.access(elem, "fxshow", {display: restoreDisplay});
                }

                // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                if (toggle) {
                    dataShow.hidden = !hidden;
                }

                // Show elements before animating them
                if (hidden) {
                    showHide([elem], true);
                }

                /* eslint-disable no-loop-func */

                anim.done(function () {

                    /* eslint-enable no-loop-func */

                    // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) {
                        showHide([elem]);
                    }
                    dataPriv.remove(elem, "fxshow");
                    for (prop in orig) {
                        jQuery.style(elem, prop, orig[prop]);
                    }
                });
            }

            // Per-property setup
            propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
            if (!(prop in dataShow)) {
                dataShow[prop] = propTween.start;
                if (hidden) {
                    propTween.end = propTween.start;
                    propTween.start = 0;
                }
            }
        }
    }

    function propFilter(props, specialEasing) {
        var index, name, easing, value, hooks;

        // camelCase, specialEasing and expand cssHook pass
        for (index in props) {
            name = camelCase(index);
            easing = specialEasing[name];
            value = props[index];
            if (Array.isArray(value)) {
                easing = value[1];
                value = props[index] = value[0];
            }

            if (index !== name) {
                props[name] = value;
                delete props[index];
            }

            hooks = jQuery.cssHooks[name];
            if (hooks && "expand" in hooks) {
                value = hooks.expand(value);
                delete props[name];

                // Not quite $.extend, this won't overwrite existing keys.
                // Reusing 'index' because we have the correct "name"
                for (index in value) {
                    if (!(index in props)) {
                        props[index] = value[index];
                        specialEasing[index] = easing;
                    }
                }
            } else {
                specialEasing[name] = easing;
            }
        }
    }

    function Animation(elem, properties, options) {
        var result,
            stopped,
            index = 0,
            length = Animation.prefilters.length,
            deferred = jQuery.Deferred().always(function () {

                // Don't match elem in the :animated selector
                delete tick.elem;
            }),
            tick = function () {
                if (stopped) {
                    return false;
                }
                var currentTime = fxNow || createFxNow(),
                    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

                    // Support: Android 2.3 only
                    // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length;

                for (; index < length; index++) {
                    animation.tweens[index].run(percent);
                }

                deferred.notifyWith(elem, [animation, percent, remaining]);

                // If there's more to do, yield
                if (percent < 1 && length) {
                    return remaining;
                }

                // If this was an empty animation, synthesize a final progress notification
                if (!length) {
                    deferred.notifyWith(elem, [animation, 1, 0]);
                }

                // Resolve the animation and report its conclusion
                deferred.resolveWith(elem, [animation]);
                return false;
            },
            animation = deferred.promise({
                elem: elem,
                props: jQuery.extend({}, properties),
                opts: jQuery.extend(true, {
                    specialEasing: {},
                    easing: jQuery.easing._default
                }, options),
                originalProperties: properties,
                originalOptions: options,
                startTime: fxNow || createFxNow(),
                duration: options.duration,
                tweens: [],
                createTween: function (prop, end) {
                    var tween = jQuery.Tween(elem, animation.opts, prop, end,
                        animation.opts.specialEasing[prop] || animation.opts.easing);
                    animation.tweens.push(tween);
                    return tween;
                },
                stop: function (gotoEnd) {
                    var index = 0,

                        // If we are going to the end, we want to run all the tweens
                        // otherwise we skip this part
                        length = gotoEnd ? animation.tweens.length : 0;
                    if (stopped) {
                        return this;
                    }
                    stopped = true;
                    for (; index < length; index++) {
                        animation.tweens[index].run(1);
                    }

                    // Resolve when we played the last frame; otherwise, reject
                    if (gotoEnd) {
                        deferred.notifyWith(elem, [animation, 1, 0]);
                        deferred.resolveWith(elem, [animation, gotoEnd]);
                    } else {
                        deferred.rejectWith(elem, [animation, gotoEnd]);
                    }
                    return this;
                }
            }),
            props = animation.props;

        propFilter(props, animation.opts.specialEasing);

        for (; index < length; index++) {
            result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
            if (result) {
                if (isFunction(result.stop)) {
                    jQuery._queueHooks(animation.elem, animation.opts.queue).stop =
                        result.stop.bind(result);
                }
                return result;
            }
        }

        jQuery.map(props, createTween, animation);

        if (isFunction(animation.opts.start)) {
            animation.opts.start.call(elem, animation);
        }

        // Attach callbacks from options
        animation
            .progress(animation.opts.progress)
            .done(animation.opts.done, animation.opts.complete)
            .fail(animation.opts.fail)
            .always(animation.opts.always);

        jQuery.fx.timer(
            jQuery.extend(tick, {
                elem: elem,
                anim: animation,
                queue: animation.opts.queue
            })
        );

        return animation;
    }

    jQuery.Animation = jQuery.extend(Animation, {

        tweeners: {
            "*": [function (prop, value) {
                var tween = this.createTween(prop, value);
                adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
                return tween;
            }]
        },

        tweener: function (props, callback) {
            if (isFunction(props)) {
                callback = props;
                props = ["*"];
            } else {
                props = props.match(rnothtmlwhite);
            }

            var prop,
                index = 0,
                length = props.length;

            for (; index < length; index++) {
                prop = props[index];
                Animation.tweeners[prop] = Animation.tweeners[prop] || [];
                Animation.tweeners[prop].unshift(callback);
            }
        },

        prefilters: [defaultPrefilter],

        prefilter: function (callback, prepend) {
            if (prepend) {
                Animation.prefilters.unshift(callback);
            } else {
                Animation.prefilters.push(callback);
            }
        }
    });

    jQuery.speed = function (speed, easing, fn) {
        var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
            complete: fn || !fn && easing ||
                isFunction(speed) && speed,
            duration: speed,
            easing: fn && easing || easing && !isFunction(easing) && easing
        };

        // Go to the end state if fx are off
        if (jQuery.fx.off) {
            opt.duration = 0;

        } else {
            if (typeof opt.duration !== "number") {
                if (opt.duration in jQuery.fx.speeds) {
                    opt.duration = jQuery.fx.speeds[opt.duration];

                } else {
                    opt.duration = jQuery.fx.speeds._default;
                }
            }
        }

        // Normalize opt.queue - true/undefined/null -> "fx"
        if (opt.queue == null || opt.queue === true) {
            opt.queue = "fx";
        }

        // Queueing
        opt.old = opt.complete;

        opt.complete = function () {
            if (isFunction(opt.old)) {
                opt.old.call(this);
            }

            if (opt.queue) {
                jQuery.dequeue(this, opt.queue);
            }
        };

        return opt;
    };

    jQuery.fn.extend({
        fadeTo: function (speed, to, easing, callback) {

            // Show any hidden elements after setting opacity to 0
            return this.filter(isHiddenWithinTree).css("opacity", 0).show()

            // Animate to the value specified
                .end().animate({opacity: to}, speed, easing, callback);
        },
        animate: function (prop, speed, easing, callback) {
            var empty = jQuery.isEmptyObject(prop),
                optall = jQuery.speed(speed, easing, callback),
                doAnimation = function () {

                    // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation(this, jQuery.extend({}, prop), optall);

                    // Empty animations, or finishing resolves immediately
                    if (empty || dataPriv.get(this, "finish")) {
                        anim.stop(true);
                    }
                };
            doAnimation.finish = doAnimation;

            return empty || optall.queue === false ?
                this.each(doAnimation) :
                this.queue(optall.queue, doAnimation);
        },
        stop: function (type, clearQueue, gotoEnd) {
            var stopQueue = function (hooks) {
                var stop = hooks.stop;
                delete hooks.stop;
                stop(gotoEnd);
            };

            if (typeof type !== "string") {
                gotoEnd = clearQueue;
                clearQueue = type;
                type = undefined;
            }
            if (clearQueue && type !== false) {
                this.queue(type || "fx", []);
            }

            return this.each(function () {
                var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = dataPriv.get(this);

                if (index) {
                    if (data[index] && data[index].stop) {
                        stopQueue(data[index]);
                    }
                } else {
                    for (index in data) {
                        if (data[index] && data[index].stop && rrun.test(index)) {
                            stopQueue(data[index]);
                        }
                    }
                }

                for (index = timers.length; index--;) {
                    if (timers[index].elem === this &&
                        (type == null || timers[index].queue === type)) {

                        timers[index].anim.stop(gotoEnd);
                        dequeue = false;
                        timers.splice(index, 1);
                    }
                }

                // Start the next in the queue if the last step wasn't forced.
                // Timers currently will call their complete callbacks, which
                // will dequeue but only if they were gotoEnd.
                if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type);
                }
            });
        },
        finish: function (type) {
            if (type !== false) {
                type = type || "fx";
            }
            return this.each(function () {
                var index,
                    data = dataPriv.get(this),
                    queue = data[type + "queue"],
                    hooks = data[type + "queueHooks"],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0;

                // Enable finishing flag on private data
                data.finish = true;

                // Empty the queue first
                jQuery.queue(this, type, []);

                if (hooks && hooks.stop) {
                    hooks.stop.call(this, true);
                }

                // Look for any active animations, and finish them
                for (index = timers.length; index--;) {
                    if (timers[index].elem === this && timers[index].queue === type) {
                        timers[index].anim.stop(true);
                        timers.splice(index, 1);
                    }
                }

                // Look for any animations in the old queue and finish them
                for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                        queue[index].finish.call(this);
                    }
                }

                // Turn off finishing flag
                delete data.finish;
            });
        }
    });

    jQuery.each(["toggle", "show", "hide"], function (i, name) {
        var cssFn = jQuery.fn[name];
        jQuery.fn[name] = function (speed, easing, callback) {
            return speed == null || typeof speed === "boolean" ?
                cssFn.apply(this, arguments) :
                this.animate(genFx(name, true), speed, easing, callback);
        };
    });

// Generate shortcuts for custom animations
    jQuery.each({
        slideDown: genFx("show"),
        slideUp: genFx("hide"),
        slideToggle: genFx("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (name, props) {
        jQuery.fn[name] = function (speed, easing, callback) {
            return this.animate(props, speed, easing, callback);
        };
    });

    jQuery.timers = [];
    jQuery.fx.tick = function () {
        var timer,
            i = 0,
            timers = jQuery.timers;

        fxNow = Date.now();

        for (; i < timers.length; i++) {
            timer = timers[i];

            // Run the timer and safely remove it when done (allowing for external removal)
            if (!timer() && timers[i] === timer) {
                timers.splice(i--, 1);
            }
        }

        if (!timers.length) {
            jQuery.fx.stop();
        }
        fxNow = undefined;
    };

    jQuery.fx.timer = function (timer) {
        jQuery.timers.push(timer);
        jQuery.fx.start();
    };

    jQuery.fx.interval = 13;
    jQuery.fx.start = function () {
        if (inProgress) {
            return;
        }

        inProgress = true;
        schedule();
    };

    jQuery.fx.stop = function () {
        inProgress = null;
    };

    jQuery.fx.speeds = {
        slow: 600,
        fast: 200,

        // Default speed
        _default: 400
    };


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
    jQuery.fn.delay = function (time, type) {
        time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
        type = type || "fx";

        return this.queue(type, function (next, hooks) {
            var timeout = window.setTimeout(next, time);
            hooks.stop = function () {
                window.clearTimeout(timeout);
            };
        });
    };


    (function () {
        var input = document.createElement("input"),
            select = document.createElement("select"),
            opt = select.appendChild(document.createElement("option"));

        input.type = "checkbox";

        // Support: Android <=4.3 only
        // Default value for a checkbox should be "on"
        support.checkOn = input.value !== "";

        // Support: IE <=11 only
        // Must access selectedIndex to make default options select
        support.optSelected = opt.selected;

        // Support: IE <=11 only
        // An input loses its value after becoming a radio
        input = document.createElement("input");
        input.value = "t";
        input.type = "radio";
        support.radioValue = input.value === "t";
    })();


    var boolHook,
        attrHandle = jQuery.expr.attrHandle;

    jQuery.fn.extend({
        attr: function (name, value) {
            return access(this, jQuery.attr, name, value, arguments.length > 1);
        },

        removeAttr: function (name) {
            return this.each(function () {
                jQuery.removeAttr(this, name);
            });
        }
    });

    jQuery.extend({
        attr: function (elem, name, value) {
            var ret, hooks,
                nType = elem.nodeType;

            // Don't get/set attributes on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            }

            // Fallback to prop when attributes are not supported
            if (typeof elem.getAttribute === "undefined") {
                return jQuery.prop(elem, name, value);
            }

            // Attribute hooks are determined by the lowercase version
            // Grab necessary hook if one is defined
            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                hooks = jQuery.attrHooks[name.toLowerCase()] ||
                    (jQuery.expr.match.bool.test(name) ? boolHook : undefined);
            }

            if (value !== undefined) {
                if (value === null) {
                    jQuery.removeAttr(elem, name);
                    return;
                }

                if (hooks && "set" in hooks &&
                    (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }

                elem.setAttribute(name, value + "");
                return value;
            }

            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }

            ret = jQuery.find.attr(elem, name);

            // Non-existent attributes return null, we normalize to undefined
            return ret == null ? undefined : ret;
        },

        attrHooks: {
            type: {
                set: function (elem, value) {
                    if (!support.radioValue && value === "radio" &&
                        nodeName(elem, "input")) {
                        var val = elem.value;
                        elem.setAttribute("type", value);
                        if (val) {
                            elem.value = val;
                        }
                        return value;
                    }
                }
            }
        },

        removeAttr: function (elem, value) {
            var name,
                i = 0,

                // Attribute names can contain non-HTML whitespace characters
                // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
                attrNames = value && value.match(rnothtmlwhite);

            if (attrNames && elem.nodeType === 1) {
                while ((name = attrNames[i++])) {
                    elem.removeAttribute(name);
                }
            }
        }
    });

// Hooks for boolean attributes
    boolHook = {
        set: function (elem, value, name) {
            if (value === false) {

                // Remove boolean attributes when set to false
                jQuery.removeAttr(elem, name);
            } else {
                elem.setAttribute(name, name);
            }
            return name;
        }
    };

    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
        var getter = attrHandle[name] || jQuery.find.attr;

        attrHandle[name] = function (elem, name, isXML) {
            var ret, handle,
                lowercaseName = name.toLowerCase();

            if (!isXML) {

                // Avoid an infinite loop by temporarily removing this function from the getter
                handle = attrHandle[lowercaseName];
                attrHandle[lowercaseName] = ret;
                ret = getter(elem, name, isXML) != null ?
                    lowercaseName :
                    null;
                attrHandle[lowercaseName] = handle;
            }
            return ret;
        };
    });


    var rfocusable = /^(?:input|select|textarea|button)$/i,
        rclickable = /^(?:a|area)$/i;

    jQuery.fn.extend({
        prop: function (name, value) {
            return access(this, jQuery.prop, name, value, arguments.length > 1);
        },

        removeProp: function (name) {
            return this.each(function () {
                delete this[jQuery.propFix[name] || name];
            });
        }
    });

    jQuery.extend({
        prop: function (elem, name, value) {
            var ret, hooks,
                nType = elem.nodeType;

            // Don't get/set properties on text, comment and attribute nodes
            if (nType === 3 || nType === 8 || nType === 2) {
                return;
            }

            if (nType !== 1 || !jQuery.isXMLDoc(elem)) {

                // Fix name and attach hooks
                name = jQuery.propFix[name] || name;
                hooks = jQuery.propHooks[name];
            }

            if (value !== undefined) {
                if (hooks && "set" in hooks &&
                    (ret = hooks.set(elem, value, name)) !== undefined) {
                    return ret;
                }

                return (elem[name] = value);
            }

            if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
                return ret;
            }

            return elem[name];
        },

        propHooks: {
            tabIndex: {
                get: function (elem) {

                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
                    // Use proper attribute retrieval(#12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex");

                    if (tabindex) {
                        return parseInt(tabindex, 10);
                    }

                    if (
                        rfocusable.test(elem.nodeName) ||
                        rclickable.test(elem.nodeName) &&
                        elem.href
                    ) {
                        return 0;
                    }

                    return -1;
                }
            }
        },

        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
    if (!support.optSelected) {
        jQuery.propHooks.selected = {
            get: function (elem) {

                /* eslint no-unused-expressions: "off" */

                var parent = elem.parentNode;
                if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex;
                }
                return null;
            },
            set: function (elem) {

                /* eslint no-unused-expressions: "off" */

                var parent = elem.parentNode;
                if (parent) {
                    parent.selectedIndex;

                    if (parent.parentNode) {
                        parent.parentNode.selectedIndex;
                    }
                }
            }
        };
    }

    jQuery.each([
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable"
    ], function () {
        jQuery.propFix[this.toLowerCase()] = this;
    });


    // Strip and collapse whitespace according to HTML spec
    // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
    function stripAndCollapse(value) {
        var tokens = value.match(rnothtmlwhite) || [];
        return tokens.join(" ");
    }


    function getClass(elem) {
        return elem.getAttribute && elem.getAttribute("class") || "";
    }

    function classesToArray(value) {
        if (Array.isArray(value)) {
            return value;
        }
        if (typeof value === "string") {
            return value.match(rnothtmlwhite) || [];
        }
        return [];
    }

    jQuery.fn.extend({
        addClass: function (value) {
            var classes, elem, cur, curValue, clazz, j, finalValue,
                i = 0;

            if (isFunction(value)) {
                return this.each(function (j) {
                    jQuery(this).addClass(value.call(this, j, getClass(this)));
                });
            }

            classes = classesToArray(value);

            if (classes.length) {
                while ((elem = this[i++])) {
                    curValue = getClass(elem);
                    cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

                    if (cur) {
                        j = 0;
                        while ((clazz = classes[j++])) {
                            if (cur.indexOf(" " + clazz + " ") < 0) {
                                cur += clazz + " ";
                            }
                        }

                        // Only assign if different to avoid unneeded rendering.
                        finalValue = stripAndCollapse(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue);
                        }
                    }
                }
            }

            return this;
        },

        removeClass: function (value) {
            var classes, elem, cur, curValue, clazz, j, finalValue,
                i = 0;

            if (isFunction(value)) {
                return this.each(function (j) {
                    jQuery(this).removeClass(value.call(this, j, getClass(this)));
                });
            }

            if (!arguments.length) {
                return this.attr("class", "");
            }

            classes = classesToArray(value);

            if (classes.length) {
                while ((elem = this[i++])) {
                    curValue = getClass(elem);

                    // This expression is here for better compressibility (see addClass)
                    cur = elem.nodeType === 1 && (" " + stripAndCollapse(curValue) + " ");

                    if (cur) {
                        j = 0;
                        while ((clazz = classes[j++])) {

                            // Remove *all* instances
                            while (cur.indexOf(" " + clazz + " ") > -1) {
                                cur = cur.replace(" " + clazz + " ", " ");
                            }
                        }

                        // Only assign if different to avoid unneeded rendering.
                        finalValue = stripAndCollapse(cur);
                        if (curValue !== finalValue) {
                            elem.setAttribute("class", finalValue);
                        }
                    }
                }
            }

            return this;
        },

        toggleClass: function (value, stateVal) {
            var type = typeof value,
                isValidValue = type === "string" || Array.isArray(value);

            if (typeof stateVal === "boolean" && isValidValue) {
                return stateVal ? this.addClass(value) : this.removeClass(value);
            }

            if (isFunction(value)) {
                return this.each(function (i) {
                    jQuery(this).toggleClass(
                        value.call(this, i, getClass(this), stateVal),
                        stateVal
                    );
                });
            }

            return this.each(function () {
                var className, i, self, classNames;

                if (isValidValue) {

                    // Toggle individual class names
                    i = 0;
                    self = jQuery(this);
                    classNames = classesToArray(value);

                    while ((className = classNames[i++])) {

                        // Check each className given, space separated list
                        if (self.hasClass(className)) {
                            self.removeClass(className);
                        } else {
                            self.addClass(className);
                        }
                    }

                    // Toggle whole class name
                } else if (value === undefined || type === "boolean") {
                    className = getClass(this);
                    if (className) {

                        // Store className if set
                        dataPriv.set(this, "__className__", className);
                    }

                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) {
                        this.setAttribute("class",
                            className || value === false ?
                                "" :
                                dataPriv.get(this, "__className__") || ""
                        );
                    }
                }
            });
        },

        hasClass: function (selector) {
            var className, elem,
                i = 0;

            className = " " + selector + " ";
            while ((elem = this[i++])) {
                if (elem.nodeType === 1 &&
                    (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className) > -1) {
                    return true;
                }
            }

            return false;
        }
    });


    var rreturn = /\r/g;

    jQuery.fn.extend({
        val: function (value) {
            var hooks, ret, valueIsFunction,
                elem = this[0];

            if (!arguments.length) {
                if (elem) {
                    hooks = jQuery.valHooks[elem.type] ||
                        jQuery.valHooks[elem.nodeName.toLowerCase()];

                    if (hooks &&
                        "get" in hooks &&
                        (ret = hooks.get(elem, "value")) !== undefined
                    ) {
                        return ret;
                    }

                    ret = elem.value;

                    // Handle most common string cases
                    if (typeof ret === "string") {
                        return ret.replace(rreturn, "");
                    }

                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret;
                }

                return;
            }

            valueIsFunction = isFunction(value);

            return this.each(function (i) {
                var val;

                if (this.nodeType !== 1) {
                    return;
                }

                if (valueIsFunction) {
                    val = value.call(this, i, jQuery(this).val());
                } else {
                    val = value;
                }

                // Treat null/undefined as ""; convert numbers to string
                if (val == null) {
                    val = "";

                } else if (typeof val === "number") {
                    val += "";

                } else if (Array.isArray(val)) {
                    val = jQuery.map(val, function (value) {
                        return value == null ? "" : value + "";
                    });
                }

                hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

                // If set returns undefined, fall back to normal setting
                if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
                    this.value = val;
                }
            });
        }
    });

    jQuery.extend({
        valHooks: {
            option: {
                get: function (elem) {

                    var val = jQuery.find.attr(elem, "value");
                    return val != null ?
                        val :

                        // Support: IE <=10 - 11 only
                        // option.text throws exceptions (#14686, #14858)
                        // Strip and collapse whitespace
                        // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                        stripAndCollapse(jQuery.text(elem));
                }
            },
            select: {
                get: function (elem) {
                    var value, option, i,
                        options = elem.options,
                        index = elem.selectedIndex,
                        one = elem.type === "select-one",
                        values = one ? null : [],
                        max = one ? index + 1 : options.length;

                    if (index < 0) {
                        i = max;

                    } else {
                        i = one ? index : 0;
                    }

                    // Loop through all the selected options
                    for (; i < max; i++) {
                        option = options[i];

                        // Support: IE <=9 only
                        // IE8-9 doesn't update selected after form reset (#2551)
                        if ((option.selected || i === index) &&

                            // Don't return options that are disabled or in a disabled optgroup
                            !option.disabled &&
                            (!option.parentNode.disabled ||
                                !nodeName(option.parentNode, "optgroup"))) {

                            // Get the specific value for the option
                            value = jQuery(option).val();

                            // We don't need an array for one selects
                            if (one) {
                                return value;
                            }

                            // Multi-Selects return an array
                            values.push(value);
                        }
                    }

                    return values;
                },

                set: function (elem, value) {
                    var optionSet, option,
                        options = elem.options,
                        values = jQuery.makeArray(value),
                        i = options.length;

                    while (i--) {
                        option = options[i];

                        /* eslint-disable no-cond-assign */

                        if (option.selected =
                            jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1
                        ) {
                            optionSet = true;
                        }

                        /* eslint-enable no-cond-assign */
                    }

                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) {
                        elem.selectedIndex = -1;
                    }
                    return values;
                }
            }
        }
    });

// Radios and checkboxes getter/setter
    jQuery.each(["radio", "checkbox"], function () {
        jQuery.valHooks[this] = {
            set: function (elem, value) {
                if (Array.isArray(value)) {
                    return (elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1);
                }
            }
        };
        if (!support.checkOn) {
            jQuery.valHooks[this].get = function (elem) {
                return elem.getAttribute("value") === null ? "on" : elem.value;
            };
        }
    });


// Return jQuery for attributes-only inclusion


    support.focusin = "onfocusin" in window;


    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
        stopPropagationCallback = function (e) {
            e.stopPropagation();
        };

    jQuery.extend(jQuery.event, {

        trigger: function (event, data, elem, onlyHandlers) {

            var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
                eventPath = [elem || document],
                type = hasOwn.call(event, "type") ? event.type : event,
                namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

            cur = lastElement = tmp = elem = elem || document;

            // Don't do events on text and comment nodes
            if (elem.nodeType === 3 || elem.nodeType === 8) {
                return;
            }

            // focus/blur morphs to focusin/out; ensure we're not firing them right now
            if (rfocusMorph.test(type + jQuery.event.triggered)) {
                return;
            }

            if (type.indexOf(".") > -1) {

                // Namespaced trigger; create a regexp to match event type in handle()
                namespaces = type.split(".");
                type = namespaces.shift();
                namespaces.sort();
            }
            ontype = type.indexOf(":") < 0 && "on" + type;

            // Caller can pass in a jQuery.Event object, Object, or just an event type string
            event = event[jQuery.expando] ?
                event :
                new jQuery.Event(type, typeof event === "object" && event);

            // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
            event.isTrigger = onlyHandlers ? 2 : 3;
            event.namespace = namespaces.join(".");
            event.rnamespace = event.namespace ?
                new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                null;

            // Clean up the event in case it is being reused
            event.result = undefined;
            if (!event.target) {
                event.target = elem;
            }

            // Clone any incoming data and prepend the event, creating the handler arg list
            data = data == null ?
                [event] :
                jQuery.makeArray(data, [event]);

            // Allow special events to draw outside the lines
            special = jQuery.event.special[type] || {};
            if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                return;
            }

            // Determine event propagation path in advance, per W3C events spec (#9951)
            // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
            if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {

                bubbleType = special.delegateType || type;
                if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode;
                }
                for (; cur; cur = cur.parentNode) {
                    eventPath.push(cur);
                    tmp = cur;
                }

                // Only add window if we got to document (e.g., not plain obj or detached DOM)
                if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                }
            }

            // Fire handlers on the event path
            i = 0;
            while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
                lastElement = cur;
                event.type = i > 1 ?
                    bubbleType :
                    special.bindType || type;

                // jQuery handler
                handle = (dataPriv.get(cur, "events") || {})[event.type] &&
                    dataPriv.get(cur, "handle");
                if (handle) {
                    handle.apply(cur, data);
                }

                // Native handler
                handle = ontype && cur[ontype];
                if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data);
                    if (event.result === false) {
                        event.preventDefault();
                    }
                }
            }
            event.type = type;

            // If nobody prevented the default action, do it now
            if (!onlyHandlers && !event.isDefaultPrevented()) {

                if ((!special._default ||
                    special._default.apply(eventPath.pop(), data) === false) &&
                    acceptData(elem)) {

                    // Call a native DOM method on the target with the same name as the event.
                    // Don't do default actions on window, that's where global variables be (#6170)
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {

                        // Don't re-trigger an onFOO event when we call its FOO() method
                        tmp = elem[ontype];

                        if (tmp) {
                            elem[ontype] = null;
                        }

                        // Prevent re-triggering of the same event, since we already bubbled it above
                        jQuery.event.triggered = type;

                        if (event.isPropagationStopped()) {
                            lastElement.addEventListener(type, stopPropagationCallback);
                        }

                        elem[type]();

                        if (event.isPropagationStopped()) {
                            lastElement.removeEventListener(type, stopPropagationCallback);
                        }

                        jQuery.event.triggered = undefined;

                        if (tmp) {
                            elem[ontype] = tmp;
                        }
                    }
                }
            }

            return event.result;
        },

        // Piggyback on a donor event to simulate a different one
        // Used only for `focus(in | out)` events
        simulate: function (type, elem, event) {
            var e = jQuery.extend(
                new jQuery.Event(),
                event,
                {
                    type: type,
                    isSimulated: true
                }
            );

            jQuery.event.trigger(e, null, elem);
        }

    });

    jQuery.fn.extend({

        trigger: function (type, data) {
            return this.each(function () {
                jQuery.event.trigger(type, data, this);
            });
        },
        triggerHandler: function (type, data) {
            var elem = this[0];
            if (elem) {
                return jQuery.event.trigger(type, data, elem, true);
            }
        }
    });


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
    if (!support.focusin) {
        jQuery.each({focus: "focusin", blur: "focusout"}, function (orig, fix) {

            // Attach a single capturing handler on the document while someone wants focusin/focusout
            var handler = function (event) {
                jQuery.event.simulate(fix, event.target, jQuery.event.fix(event));
            };

            jQuery.event.special[fix] = {
                setup: function () {
                    var doc = this.ownerDocument || this,
                        attaches = dataPriv.access(doc, fix);

                    if (!attaches) {
                        doc.addEventListener(orig, handler, true);
                    }
                    dataPriv.access(doc, fix, (attaches || 0) + 1);
                },
                teardown: function () {
                    var doc = this.ownerDocument || this,
                        attaches = dataPriv.access(doc, fix) - 1;

                    if (!attaches) {
                        doc.removeEventListener(orig, handler, true);
                        dataPriv.remove(doc, fix);

                    } else {
                        dataPriv.access(doc, fix, attaches);
                    }
                }
            };
        });
    }
    var location = window.location;

    var nonce = Date.now();

    var rquery = (/\?/);


// Cross-browser xml parsing
    jQuery.parseXML = function (data) {
        var xml;
        if (!data || typeof data !== "string") {
            return null;
        }

        // Support: IE 9 - 11 only
        // IE throws on parseFromString with invalid input.
        try {
            xml = (new window.DOMParser()).parseFromString(data, "text/xml");
        } catch (e) {
            xml = undefined;
        }

        if (!xml || xml.getElementsByTagName("parsererror").length) {
            jQuery.error("Invalid XML: " + data);
        }
        return xml;
    };


    var
        rbracket = /\[\]$/,
        rCRLF = /\r?\n/g,
        rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
        rsubmittable = /^(?:input|select|textarea|keygen)/i;

    function buildParams(prefix, obj, traditional, add) {
        var name;

        if (Array.isArray(obj)) {

            // Serialize array item.
            jQuery.each(obj, function (i, v) {
                if (traditional || rbracket.test(prefix)) {

                    // Treat each array item as a scalar.
                    add(prefix, v);

                } else {

                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(
                        prefix + "[" + (typeof v === "object" && v != null ? i : "") + "]",
                        v,
                        traditional,
                        add
                    );
                }
            });

        } else if (!traditional && toType(obj) === "object") {

            // Serialize object item.
            for (name in obj) {
                buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
            }

        } else {

            // Serialize scalar item.
            add(prefix, obj);
        }
    }

// Serialize an array of form elements or a set of
// key/values into a query string
    jQuery.param = function (a, traditional) {
        var prefix,
            s = [],
            add = function (key, valueOrFunction) {

                // If value is a function, invoke it and use its return value
                var value = isFunction(valueOrFunction) ?
                    valueOrFunction() :
                    valueOrFunction;

                s[s.length] = encodeURIComponent(key) + "=" +
                    encodeURIComponent(value == null ? "" : value);
            };

        // If an array was passed in, assume that it is an array of form elements.
        if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {

            // Serialize the form elements
            jQuery.each(a, function () {
                add(this.name, this.value);
            });

        } else {

            // If traditional, encode the "old" way (the way 1.3.2 or older
            // did it), otherwise encode params recursively.
            for (prefix in a) {
                buildParams(prefix, a[prefix], traditional, add);
            }
        }

        // Return the resulting serialization
        return s.join("&");
    };

    jQuery.fn.extend({
        serialize: function () {
            return jQuery.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {

                // Can add propHook for "elements" to filter or add form elements
                var elements = jQuery.prop(this, "elements");
                return elements ? jQuery.makeArray(elements) : this;
            })
                .filter(function () {
                    var type = this.type;

                    // Use .is( ":disabled" ) so that fieldset[disabled] works
                    return this.name && !jQuery(this).is(":disabled") &&
                        rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
                        (this.checked || !rcheckableType.test(type));
                })
                .map(function (i, elem) {
                    var val = jQuery(this).val();

                    if (val == null) {
                        return null;
                    }

                    if (Array.isArray(val)) {
                        return jQuery.map(val, function (val) {
                            return {name: elem.name, value: val.replace(rCRLF, "\r\n")};
                        });
                    }

                    return {name: elem.name, value: val.replace(rCRLF, "\r\n")};
                }).get();
        }
    });


    var
        r20 = /%20/g,
        rhash = /#.*$/,
        rantiCache = /([?&])_=[^&]*/,
        rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

        // #7653, #8125, #8152: local protocol detection
        rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        rnoContent = /^(?:GET|HEAD)$/,
        rprotocol = /^\/\//,

        /* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
        prefilters = {},

        /* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
        transports = {},

        // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
        allTypes = "*/".concat("*"),

        // Anchor tag for parsing the document origin
        originAnchor = document.createElement("a");
    originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
    function addToPrefiltersOrTransports(structure) {

        // dataTypeExpression is optional and defaults to "*"
        return function (dataTypeExpression, func) {

            if (typeof dataTypeExpression !== "string") {
                func = dataTypeExpression;
                dataTypeExpression = "*";
            }

            var dataType,
                i = 0,
                dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];

            if (isFunction(func)) {

                // For each dataType in the dataTypeExpression
                while ((dataType = dataTypes[i++])) {

                    // Prepend if requested
                    if (dataType[0] === "+") {
                        dataType = dataType.slice(1) || "*";
                        (structure[dataType] = structure[dataType] || []).unshift(func);

                        // Otherwise append
                    } else {
                        (structure[dataType] = structure[dataType] || []).push(func);
                    }
                }
            }
        };
    }

// Base inspection function for prefilters and transports
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

        var inspected = {},
            seekingTransport = (structure === transports);

        function inspect(dataType) {
            var selected;
            inspected[dataType] = true;
            jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
                var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                if (typeof dataTypeOrTransport === "string" &&
                    !seekingTransport && !inspected[dataTypeOrTransport]) {

                    options.dataTypes.unshift(dataTypeOrTransport);
                    inspect(dataTypeOrTransport);
                    return false;
                } else if (seekingTransport) {
                    return !(selected = dataTypeOrTransport);
                }
            });
            return selected;
        }

        return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
    function ajaxExtend(target, src) {
        var key, deep,
            flatOptions = jQuery.ajaxSettings.flatOptions || {};

        for (key in src) {
            if (src[key] !== undefined) {
                (flatOptions[key] ? target : (deep || (deep = {})))[key] = src[key];
            }
        }
        if (deep) {
            jQuery.extend(true, target, deep);
        }

        return target;
    }

    /* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
    function ajaxHandleResponses(s, jqXHR, responses) {

        var ct, type, finalDataType, firstDataType,
            contents = s.contents,
            dataTypes = s.dataTypes;

        // Remove auto dataType and get content-type in the process
        while (dataTypes[0] === "*") {
            dataTypes.shift();
            if (ct === undefined) {
                ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
            }
        }

        // Check if we're dealing with a known content-type
        if (ct) {
            for (type in contents) {
                if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type);
                    break;
                }
            }
        }

        // Check to see if we have a response for the expected dataType
        if (dataTypes[0] in responses) {
            finalDataType = dataTypes[0];
        } else {

            // Try convertible dataTypes
            for (type in responses) {
                if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                    finalDataType = type;
                    break;
                }
                if (!firstDataType) {
                    firstDataType = type;
                }
            }

            // Or just use first one
            finalDataType = finalDataType || firstDataType;
        }

        // If we found a dataType
        // We add the dataType to the list if needed
        // and return the corresponding response
        if (finalDataType) {
            if (finalDataType !== dataTypes[0]) {
                dataTypes.unshift(finalDataType);
            }
            return responses[finalDataType];
        }
    }

    /* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
    function ajaxConvert(s, response, jqXHR, isSuccess) {
        var conv2, current, conv, tmp, prev,
            converters = {},

            // Work with a copy of dataTypes in case we need to modify it for conversion
            dataTypes = s.dataTypes.slice();

        // Create converters map with lowercased keys
        if (dataTypes[1]) {
            for (conv in s.converters) {
                converters[conv.toLowerCase()] = s.converters[conv];
            }
        }

        current = dataTypes.shift();

        // Convert to each sequential dataType
        while (current) {

            if (s.responseFields[current]) {
                jqXHR[s.responseFields[current]] = response;
            }

            // Apply the dataFilter if provided
            if (!prev && isSuccess && s.dataFilter) {
                response = s.dataFilter(response, s.dataType);
            }

            prev = current;
            current = dataTypes.shift();

            if (current) {

                // There's only work to do if current dataType is non-auto
                if (current === "*") {

                    current = prev;

                    // Convert response if prev dataType is non-auto and differs from current
                } else if (prev !== "*" && prev !== current) {

                    // Seek a direct converter
                    conv = converters[prev + " " + current] || converters["* " + current];

                    // If none found, seek a pair
                    if (!conv) {
                        for (conv2 in converters) {

                            // If conv2 outputs current
                            tmp = conv2.split(" ");
                            if (tmp[1] === current) {

                                // If prev can be converted to accepted input
                                conv = converters[prev + " " + tmp[0]] ||
                                    converters["* " + tmp[0]];
                                if (conv) {

                                    // Condense equivalence converters
                                    if (conv === true) {
                                        conv = converters[conv2];

                                        // Otherwise, insert the intermediate dataType
                                    } else if (converters[conv2] !== true) {
                                        current = tmp[0];
                                        dataTypes.unshift(tmp[1]);
                                    }
                                    break;
                                }
                            }
                        }
                    }

                    // Apply converter (if not an equivalence)
                    if (conv !== true) {

                        // Unless errors are allowed to bubble, catch and return them
                        if (conv && s.throws) {
                            response = conv(response);
                        } else {
                            try {
                                response = conv(response);
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: conv ? e : "No conversion from " + prev + " to " + current
                                };
                            }
                        }
                    }
                }
            }
        }

        return {state: "success", data: response};
    }

    jQuery.extend({

        // Counter for holding the number of active queries
        active: 0,

        // Last-Modified header cache for next request
        lastModified: {},
        etag: {},

        ajaxSettings: {
            url: location.href,
            type: "GET",
            isLocal: rlocalProtocol.test(location.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",

            /*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

            accepts: {
                "*": allTypes,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },

            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },

            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },

            // Data converters
            // Keys separate source (or catchall "*") and destination types with a single space
            converters: {

                // Convert anything to text
                "* text": String,

                // Text to html (true = no transformation)
                "text html": true,

                // Evaluate text as a json expression
                "text json": JSON.parse,

                // Parse text as xml
                "text xml": jQuery.parseXML
            },

            // For options that shouldn't be deep extended:
            // you can add your own custom options here if
            // and when you create one that shouldn't be
            // deep extended (see ajaxExtend)
            flatOptions: {
                url: true,
                context: true
            }
        },

        // Creates a full fledged settings object into target
        // with both ajaxSettings and settings fields.
        // If target is omitted, writes into ajaxSettings.
        ajaxSetup: function (target, settings) {
            return settings ?

                // Building a settings object
                ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

                // Extending ajaxSettings
                ajaxExtend(jQuery.ajaxSettings, target);
        },

        ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
        ajaxTransport: addToPrefiltersOrTransports(transports),

        // Main method
        ajax: function (url, options) {

            // If url is an object, simulate pre-1.5 signature
            if (typeof url === "object") {
                options = url;
                url = undefined;
            }

            // Force options to be an object
            options = options || {};

            var transport,

                // URL without anti-cache param
                cacheURL,

                // Response headers
                responseHeadersString,
                responseHeaders,

                // timeout handle
                timeoutTimer,

                // Url cleanup var
                urlAnchor,

                // Request state (becomes false upon send and true upon completion)
                completed,

                // To know if global events are to be dispatched
                fireGlobals,

                // Loop variable
                i,

                // uncached part of the url
                uncached,

                // Create the final options object
                s = jQuery.ajaxSetup({}, options),

                // Callbacks context
                callbackContext = s.context || s,

                // Context for global events is callbackContext if it is a DOM node or jQuery collection
                globalEventContext = s.context &&
                (callbackContext.nodeType || callbackContext.jquery) ?
                    jQuery(callbackContext) :
                    jQuery.event,

                // Deferreds
                deferred = jQuery.Deferred(),
                completeDeferred = jQuery.Callbacks("once memory"),

                // Status-dependent callbacks
                statusCode = s.statusCode || {},

                // Headers (they are sent all at once)
                requestHeaders = {},
                requestHeadersNames = {},

                // Default abort message
                strAbort = "canceled",

                // Fake xhr
                jqXHR = {
                    readyState: 0,

                    // Builds headers hashtable if needed
                    getResponseHeader: function (key) {
                        var match;
                        if (completed) {
                            if (!responseHeaders) {
                                responseHeaders = {};
                                while ((match = rheaders.exec(responseHeadersString))) {
                                    responseHeaders[match[1].toLowerCase()] = match[2];
                                }
                            }
                            match = responseHeaders[key.toLowerCase()];
                        }
                        return match == null ? null : match;
                    },

                    // Raw string
                    getAllResponseHeaders: function () {
                        return completed ? responseHeadersString : null;
                    },

                    // Caches the header
                    setRequestHeader: function (name, value) {
                        if (completed == null) {
                            name = requestHeadersNames[name.toLowerCase()] =
                                requestHeadersNames[name.toLowerCase()] || name;
                            requestHeaders[name] = value;
                        }
                        return this;
                    },

                    // Overrides response content-type header
                    overrideMimeType: function (type) {
                        if (completed == null) {
                            s.mimeType = type;
                        }
                        return this;
                    },

                    // Status-dependent callbacks
                    statusCode: function (map) {
                        var code;
                        if (map) {
                            if (completed) {

                                // Execute the appropriate callbacks
                                jqXHR.always(map[jqXHR.status]);
                            } else {

                                // Lazy-add the new callbacks in a way that preserves old ones
                                for (code in map) {
                                    statusCode[code] = [statusCode[code], map[code]];
                                }
                            }
                        }
                        return this;
                    },

                    // Cancel the request
                    abort: function (statusText) {
                        var finalText = statusText || strAbort;
                        if (transport) {
                            transport.abort(finalText);
                        }
                        done(0, finalText);
                        return this;
                    }
                };

            // Attach deferreds
            deferred.promise(jqXHR);

            // Add protocol if not provided (prefilters might expect it)
            // Handle falsy url in the settings object (#10093: consistency with old signature)
            // We also use the url parameter if available
            s.url = ((url || s.url || location.href) + "")
                .replace(rprotocol, location.protocol + "//");

            // Alias method option to type as per ticket #12004
            s.type = options.method || options.type || s.method || s.type;

            // Extract dataTypes list
            s.dataTypes = (s.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];

            // A cross-domain request is in order when the origin doesn't match the current origin.
            if (s.crossDomain == null) {
                urlAnchor = document.createElement("a");

                // Support: IE <=8 - 11, Edge 12 - 15
                // IE throws exception on accessing the href property if url is malformed,
                // e.g. http://example.com:80x/
                try {
                    urlAnchor.href = s.url;

                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href;
                    s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
                        urlAnchor.protocol + "//" + urlAnchor.host;
                } catch (e) {

                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true;
                }
            }

            // Convert data if not already a string
            if (s.data && s.processData && typeof s.data !== "string") {
                s.data = jQuery.param(s.data, s.traditional);
            }

            // Apply prefilters
            inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

            // If request was aborted inside a prefilter, stop there
            if (completed) {
                return jqXHR;
            }

            // We can fire global events as of now if asked to
            // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
            fireGlobals = jQuery.event && s.global;

            // Watch for a new set of requests
            if (fireGlobals && jQuery.active++ === 0) {
                jQuery.event.trigger("ajaxStart");
            }

            // Uppercase the type
            s.type = s.type.toUpperCase();

            // Determine if request has content
            s.hasContent = !rnoContent.test(s.type);

            // Save the URL in case we're toying with the If-Modified-Since
            // and/or If-None-Match header later on
            // Remove hash to simplify url manipulation
            cacheURL = s.url.replace(rhash, "");

            // More options handling for requests with no content
            if (!s.hasContent) {

                // Remember the hash so we can put it back
                uncached = s.url.slice(cacheURL.length);

                // If data is available and should be processed, append data to url
                if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data;

                    // #9682: remove data so that it's not used in an eventual retry
                    delete s.data;
                }

                // Add or update anti-cache param if needed
                if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1");
                    uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + (nonce++) + uncached;
                }

                // Put hash and anti-cache on the URL that will be requested (gh-1732)
                s.url = cacheURL + uncached;

                // Change '%20' to '+' if this is encoded form body content (gh-2658)
            } else if (s.data && s.processData &&
                (s.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                s.data = s.data.replace(r20, "+");
            }

            // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
            if (s.ifModified) {
                if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                }
                if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                }
            }

            // Set the correct header, if data is being sent
            if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                jqXHR.setRequestHeader("Content-Type", s.contentType);
            }

            // Set the Accepts header for the server, depending on the dataType
            jqXHR.setRequestHeader(
                "Accept",
                s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
                    s.accepts[s.dataTypes[0]] +
                    (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") :
                    s.accepts["*"]
            );

            // Check for headers option
            for (i in s.headers) {
                jqXHR.setRequestHeader(i, s.headers[i]);
            }

            // Allow custom headers/mimetypes and early abort
            if (s.beforeSend &&
                (s.beforeSend.call(callbackContext, jqXHR, s) === false || completed)) {

                // Abort if not done already and return
                return jqXHR.abort();
            }

            // Aborting is no longer a cancellation
            strAbort = "abort";

            // Install callbacks on deferreds
            completeDeferred.add(s.complete);
            jqXHR.done(s.success);
            jqXHR.fail(s.error);

            // Get transport
            transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

            // If no transport, we auto-abort
            if (!transport) {
                done(-1, "No Transport");
            } else {
                jqXHR.readyState = 1;

                // Send global event
                if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                }

                // If request was aborted inside ajaxSend, stop there
                if (completed) {
                    return jqXHR;
                }

                // Timeout
                if (s.async && s.timeout > 0) {
                    timeoutTimer = window.setTimeout(function () {
                        jqXHR.abort("timeout");
                    }, s.timeout);
                }

                try {
                    completed = false;
                    transport.send(requestHeaders, done);
                } catch (e) {

                    // Rethrow post-completion exceptions
                    if (completed) {
                        throw e;
                    }

                    // Propagate others as results
                    done(-1, e);
                }
            }

            // Callback for when everything is done
            function done(status, nativeStatusText, responses, headers) {
                var isSuccess, success, error, response, modified,
                    statusText = nativeStatusText;

                // Ignore repeat invocations
                if (completed) {
                    return;
                }

                completed = true;

                // Clear timeout if it exists
                if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer);
                }

                // Dereference transport for early garbage collection
                // (no matter how long the jqXHR object will be used)
                transport = undefined;

                // Cache response headers
                responseHeadersString = headers || "";

                // Set readyState
                jqXHR.readyState = status > 0 ? 4 : 0;

                // Determine if successful
                isSuccess = status >= 200 && status < 300 || status === 304;

                // Get response data
                if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses);
                }

                // Convert no matter what (that way responseXXX fields are always set)
                response = ajaxConvert(s, response, jqXHR, isSuccess);

                // If successful, handle type chaining
                if (isSuccess) {

                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                        modified = jqXHR.getResponseHeader("Last-Modified");
                        if (modified) {
                            jQuery.lastModified[cacheURL] = modified;
                        }
                        modified = jqXHR.getResponseHeader("etag");
                        if (modified) {
                            jQuery.etag[cacheURL] = modified;
                        }
                    }

                    // if no content
                    if (status === 204 || s.type === "HEAD") {
                        statusText = "nocontent";

                        // if not modified
                    } else if (status === 304) {
                        statusText = "notmodified";

                        // If we have data, let's convert it
                    } else {
                        statusText = response.state;
                        success = response.data;
                        error = response.error;
                        isSuccess = !error;
                    }
                } else {

                    // Extract error from statusText and normalize for non-aborts
                    error = statusText;
                    if (status || !statusText) {
                        statusText = "error";
                        if (status < 0) {
                            status = 0;
                        }
                    }
                }

                // Set data for the fake xhr object
                jqXHR.status = status;
                jqXHR.statusText = (nativeStatusText || statusText) + "";

                // Success/Error
                if (isSuccess) {
                    deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                } else {
                    deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                }

                // Status-dependent callbacks
                jqXHR.statusCode(statusCode);
                statusCode = undefined;

                if (fireGlobals) {
                    globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",
                        [jqXHR, s, isSuccess ? success : error]);
                }

                // Complete
                completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

                if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s]);

                    // Handle the global AJAX counter
                    if (!(--jQuery.active)) {
                        jQuery.event.trigger("ajaxStop");
                    }
                }
            }

            return jqXHR;
        },

        getJSON: function (url, data, callback) {
            return jQuery.get(url, data, callback, "json");
        },

        getScript: function (url, callback) {
            return jQuery.get(url, undefined, callback, "script");
        }
    });

    jQuery.each(["get", "post"], function (i, method) {
        jQuery[method] = function (url, data, callback, type) {

            // Shift arguments if data argument was omitted
            if (isFunction(data)) {
                type = type || callback;
                callback = data;
                data = undefined;
            }

            // The url can be an options object (which then must have .url)
            return jQuery.ajax(jQuery.extend({
                url: url,
                type: method,
                dataType: type,
                data: data,
                success: callback
            }, jQuery.isPlainObject(url) && url));
        };
    });


    jQuery._evalUrl = function (url) {
        return jQuery.ajax({
            url: url,

            // Make this explicit, since user can override this through ajaxSetup (#11264)
            type: "GET",
            dataType: "script",
            cache: true,
            async: false,
            global: false,
            "throws": true
        });
    };


    jQuery.fn.extend({
        wrapAll: function (html) {
            var wrap;

            if (this[0]) {
                if (isFunction(html)) {
                    html = html.call(this[0]);
                }

                // The elements to wrap the target around
                wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

                if (this[0].parentNode) {
                    wrap.insertBefore(this[0]);
                }

                wrap.map(function () {
                    var elem = this;

                    while (elem.firstElementChild) {
                        elem = elem.firstElementChild;
                    }

                    return elem;
                }).append(this);
            }

            return this;
        },

        wrapInner: function (html) {
            if (isFunction(html)) {
                return this.each(function (i) {
                    jQuery(this).wrapInner(html.call(this, i));
                });
            }

            return this.each(function () {
                var self = jQuery(this),
                    contents = self.contents();

                if (contents.length) {
                    contents.wrapAll(html);

                } else {
                    self.append(html);
                }
            });
        },

        wrap: function (html) {
            var htmlIsFunction = isFunction(html);

            return this.each(function (i) {
                jQuery(this).wrapAll(htmlIsFunction ? html.call(this, i) : html);
            });
        },

        unwrap: function (selector) {
            this.parent(selector).not("body").each(function () {
                jQuery(this).replaceWith(this.childNodes);
            });
            return this;
        }
    });


    jQuery.expr.pseudos.hidden = function (elem) {
        return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function (elem) {
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };


    jQuery.ajaxSettings.xhr = function () {
        try {
            return new window.XMLHttpRequest();
        } catch (e) {
        }
    };

    var xhrSuccessStatus = {

            // File protocol always yields status code 0, assume 200
            0: 200,

            // Support: IE <=9 only
            // #1450: sometimes IE returns 1223 when it should be 204
            1223: 204
        },
        xhrSupported = jQuery.ajaxSettings.xhr();

    support.cors = !!xhrSupported && ("withCredentials" in xhrSupported);
    support.ajax = xhrSupported = !!xhrSupported;

    jQuery.ajaxTransport(function (options) {
        var callback, errorCallback;

        // Cross domain only allowed if supported through XMLHttpRequest
        if (support.cors || xhrSupported && !options.crossDomain) {
            return {
                send: function (headers, complete) {
                    var i,
                        xhr = options.xhr();

                    xhr.open(
                        options.type,
                        options.url,
                        options.async,
                        options.username,
                        options.password
                    );

                    // Apply custom fields if provided
                    if (options.xhrFields) {
                        for (i in options.xhrFields) {
                            xhr[i] = options.xhrFields[i];
                        }
                    }

                    // Override mime type if needed
                    if (options.mimeType && xhr.overrideMimeType) {
                        xhr.overrideMimeType(options.mimeType);
                    }

                    // X-Requested-With header
                    // For cross-domain requests, seeing as conditions for a preflight are
                    // akin to a jigsaw puzzle, we simply never set it to be sure.
                    // (it can always be set on a per-request basis or even using ajaxSetup)
                    // For same-domain requests, won't change header if already provided.
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                        headers["X-Requested-With"] = "XMLHttpRequest";
                    }

                    // Set headers
                    for (i in headers) {
                        xhr.setRequestHeader(i, headers[i]);
                    }

                    // Callback
                    callback = function (type) {
                        return function () {
                            if (callback) {
                                callback = errorCallback = xhr.onload =
                                    xhr.onerror = xhr.onabort = xhr.ontimeout =
                                        xhr.onreadystatechange = null;

                                if (type === "abort") {
                                    xhr.abort();
                                } else if (type === "error") {

                                    // Support: IE <=9 only
                                    // On a manual native abort, IE9 throws
                                    // errors on any property access that is not readyState
                                    if (typeof xhr.status !== "number") {
                                        complete(0, "error");
                                    } else {
                                        complete(
                                            // File: protocol always yields status 0; see #8605, #14207
                                            xhr.status,
                                            xhr.statusText
                                        );
                                    }
                                } else {
                                    complete(
                                        xhrSuccessStatus[xhr.status] || xhr.status,
                                        xhr.statusText,

                                        // Support: IE <=9 only
                                        // IE9 has no XHR2 but throws on binary (trac-11426)
                                        // For XHR2 non-text, let the caller handle it (gh-2498)
                                        (xhr.responseType || "text") !== "text" ||
                                        typeof xhr.responseText !== "string" ?
                                            {binary: xhr.response} :
                                            {text: xhr.responseText},
                                        xhr.getAllResponseHeaders()
                                    );
                                }
                            }
                        };
                    };

                    // Listen to events
                    xhr.onload = callback();
                    errorCallback = xhr.onerror = xhr.ontimeout = callback("error");

                    // Support: IE 9 only
                    // Use onreadystatechange to replace onabort
                    // to handle uncaught aborts
                    if (xhr.onabort !== undefined) {
                        xhr.onabort = errorCallback;
                    } else {
                        xhr.onreadystatechange = function () {

                            // Check readyState before timeout as it changes
                            if (xhr.readyState === 4) {

                                // Allow onerror to be called first,
                                // but that will not handle a native abort
                                // Also, save errorCallback to a variable
                                // as xhr.onerror cannot be accessed
                                window.setTimeout(function () {
                                    if (callback) {
                                        errorCallback();
                                    }
                                });
                            }
                        };
                    }

                    // Create the abort callback
                    callback = callback("abort");

                    try {

                        // Do send the request (this may raise an exception)
                        xhr.send(options.hasContent && options.data || null);
                    } catch (e) {

                        // #14683: Only rethrow if this hasn't been notified as an error yet
                        if (callback) {
                            throw e;
                        }
                    }
                },

                abort: function () {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });


// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
    jQuery.ajaxPrefilter(function (s) {
        if (s.crossDomain) {
            s.contents.script = false;
        }
    });

// Install script dataType
    jQuery.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " +
                "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (text) {
                jQuery.globalEval(text);
                return text;
            }
        }
    });

// Handle cache's special case and crossDomain
    jQuery.ajaxPrefilter("script", function (s) {
        if (s.cache === undefined) {
            s.cache = false;
        }
        if (s.crossDomain) {
            s.type = "GET";
        }
    });

// Bind script tag hack transport
    jQuery.ajaxTransport("script", function (s) {

        // This transport only deals with cross domain requests
        if (s.crossDomain) {
            var script, callback;
            return {
                send: function (_, complete) {
                    script = jQuery("<script>").prop({
                        charset: s.scriptCharset,
                        src: s.url
                    }).on(
                        "load error",
                        callback = function (evt) {
                            script.remove();
                            callback = null;
                            if (evt) {
                                complete(evt.type === "error" ? 404 : 200, evt.type);
                            }
                        }
                    );

                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0]);
                },
                abort: function () {
                    if (callback) {
                        callback();
                    }
                }
            };
        }
    });


    var oldCallbacks = [],
        rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
    jQuery.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var callback = oldCallbacks.pop() || (jQuery.expando + "_" + (nonce++));
            this[callback] = true;
            return callback;
        }
    });

// Detect, normalize options and install callbacks for jsonp requests
    jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

        var callbackName, overwritten, responseContainer,
            jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ?
                    "url" :
                    typeof s.data === "string" &&
                    (s.contentType || "")
                        .indexOf("application/x-www-form-urlencoded") === 0 &&
                    rjsonp.test(s.data) && "data"
            );

        // Handle iff the expected data type is "jsonp" or we have a parameter to set
        if (jsonProp || s.dataTypes[0] === "jsonp") {

            // Get callback name, remembering preexisting value associated with it
            callbackName = s.jsonpCallback = isFunction(s.jsonpCallback) ?
                s.jsonpCallback() :
                s.jsonpCallback;

            // Insert callback into url or form data
            if (jsonProp) {
                s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
            } else if (s.jsonp !== false) {
                s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
            }

            // Use data converter to retrieve json after script execution
            s.converters["script json"] = function () {
                if (!responseContainer) {
                    jQuery.error(callbackName + " was not called");
                }
                return responseContainer[0];
            };

            // Force json dataType
            s.dataTypes[0] = "json";

            // Install callback
            overwritten = window[callbackName];
            window[callbackName] = function () {
                responseContainer = arguments;
            };

            // Clean-up function (fires after converters)
            jqXHR.always(function () {

                // If previous value didn't exist - remove it
                if (overwritten === undefined) {
                    jQuery(window).removeProp(callbackName);

                    // Otherwise restore preexisting value
                } else {
                    window[callbackName] = overwritten;
                }

                // Save back as free
                if (s[callbackName]) {

                    // Make sure that re-using the options doesn't screw things around
                    s.jsonpCallback = originalSettings.jsonpCallback;

                    // Save the callback name for future use
                    oldCallbacks.push(callbackName);
                }

                // Call if it was a function and we have a response
                if (responseContainer && isFunction(overwritten)) {
                    overwritten(responseContainer[0]);
                }

                responseContainer = overwritten = undefined;
            });

            // Delegate to script
            return "script";
        }
    });


// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
    support.createHTMLDocument = (function () {
        var body = document.implementation.createHTMLDocument("").body;
        body.innerHTML = "<form></form><form></form>";
        return body.childNodes.length === 2;
    })();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
    jQuery.parseHTML = function (data, context, keepScripts) {
        if (typeof data !== "string") {
            return [];
        }
        if (typeof context === "boolean") {
            keepScripts = context;
            context = false;
        }

        var base, parsed, scripts;

        if (!context) {

            // Stop scripts or inline event handlers from being executed immediately
            // by using document.implementation
            if (support.createHTMLDocument) {
                context = document.implementation.createHTMLDocument("");

                // Set the base href for the created document
                // so any parsed elements with URLs
                // are based on the document's URL (gh-2965)
                base = context.createElement("base");
                base.href = document.location.href;
                context.head.appendChild(base);
            } else {
                context = document;
            }
        }

        parsed = rsingleTag.exec(data);
        scripts = !keepScripts && [];

        // Single tag
        if (parsed) {
            return [context.createElement(parsed[1])];
        }

        parsed = buildFragment([data], context, scripts);

        if (scripts && scripts.length) {
            jQuery(scripts).remove();
        }

        return jQuery.merge([], parsed.childNodes);
    };


    /**
     * Load a url into a page
     */
    jQuery.fn.load = function (url, params, callback) {
        var selector, type, response,
            self = this,
            off = url.indexOf(" ");

        if (off > -1) {
            selector = stripAndCollapse(url.slice(off));
            url = url.slice(0, off);
        }

        // If it's a function
        if (isFunction(params)) {

            // We assume that it's the callback
            callback = params;
            params = undefined;

            // Otherwise, build a param string
        } else if (params && typeof params === "object") {
            type = "POST";
        }

        // If we have elements to modify, make the request
        if (self.length > 0) {
            jQuery.ajax({
                url: url,

                // If "type" variable is undefined, then "GET" method will be used.
                // Make value of this field explicit since
                // user can override it through ajaxSetup method
                type: type || "GET",
                dataType: "html",
                data: params
            }).done(function (responseText) {

                // Save response for use in complete callback
                response = arguments;

                self.html(selector ?

                    // If a selector was specified, locate the right elements in a dummy div
                    // Exclude scripts to avoid IE 'Permission Denied' errors
                    jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

                    // Otherwise use the full result
                    responseText);

                // If the request succeeds, this function gets "data", "status", "jqXHR"
                // but they are ignored because response was set above.
                // If it fails, this function gets "jqXHR", "status", "error"
            }).always(callback && function (jqXHR, status) {
                self.each(function () {
                    callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
                });
            });
        }

        return this;
    };


// Attach a bunch of functions for handling common AJAX events
    jQuery.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend"
    ], function (i, type) {
        jQuery.fn[type] = function (fn) {
            return this.on(type, fn);
        };
    });


    jQuery.expr.pseudos.animated = function (elem) {
        return jQuery.grep(jQuery.timers, function (fn) {
            return elem === fn.elem;
        }).length;
    };


    jQuery.offset = {
        setOffset: function (elem, options, i) {
            var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
                position = jQuery.css(elem, "position"),
                curElem = jQuery(elem),
                props = {};

            // Set position first, in-case top/left are set even on static elem
            if (position === "static") {
                elem.style.position = "relative";
            }

            curOffset = curElem.offset();
            curCSSTop = jQuery.css(elem, "top");
            curCSSLeft = jQuery.css(elem, "left");
            calculatePosition = (position === "absolute" || position === "fixed") &&
                (curCSSTop + curCSSLeft).indexOf("auto") > -1;

            // Need to be able to calculate position if either
            // top or left is auto and position is either absolute or fixed
            if (calculatePosition) {
                curPosition = curElem.position();
                curTop = curPosition.top;
                curLeft = curPosition.left;

            } else {
                curTop = parseFloat(curCSSTop) || 0;
                curLeft = parseFloat(curCSSLeft) || 0;
            }

            if (isFunction(options)) {

                // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                options = options.call(elem, i, jQuery.extend({}, curOffset));
            }

            if (options.top != null) {
                props.top = (options.top - curOffset.top) + curTop;
            }
            if (options.left != null) {
                props.left = (options.left - curOffset.left) + curLeft;
            }

            if ("using" in options) {
                options.using.call(elem, props);

            } else {
                curElem.css(props);
            }
        }
    };

    jQuery.fn.extend({

        // offset() relates an element's border box to the document origin
        offset: function (options) {

            // Preserve chaining for setter
            if (arguments.length) {
                return options === undefined ?
                    this :
                    this.each(function (i) {
                        jQuery.offset.setOffset(this, options, i);
                    });
            }

            var rect, win,
                elem = this[0];

            if (!elem) {
                return;
            }

            // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
            // Support: IE <=11 only
            // Running getBoundingClientRect on a
            // disconnected node in IE throws an error
            if (!elem.getClientRects().length) {
                return {top: 0, left: 0};
            }

            // Get document-relative position by adding viewport scroll to viewport-relative gBCR
            rect = elem.getBoundingClientRect();
            win = elem.ownerDocument.defaultView;
            return {
                top: rect.top + win.pageYOffset,
                left: rect.left + win.pageXOffset
            };
        },

        // position() relates an element's margin box to its offset parent's padding box
        // This corresponds to the behavior of CSS absolute positioning
        position: function () {
            if (!this[0]) {
                return;
            }

            var offsetParent, offset, doc,
                elem = this[0],
                parentOffset = {top: 0, left: 0};

            // position:fixed elements are offset from the viewport, which itself always has zero offset
            if (jQuery.css(elem, "position") === "fixed") {

                // Assume position:fixed implies availability of getBoundingClientRect
                offset = elem.getBoundingClientRect();

            } else {
                offset = this.offset();

                // Account for the *real* offset parent, which can be the document or its root element
                // when a statically positioned element is identified
                doc = elem.ownerDocument;
                offsetParent = elem.offsetParent || doc.documentElement;
                while (offsetParent &&
                (offsetParent === doc.body || offsetParent === doc.documentElement) &&
                jQuery.css(offsetParent, "position") === "static") {

                    offsetParent = offsetParent.parentNode;
                }
                if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {

                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset();
                    parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
                    parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
                }
            }

            // Subtract parent offsets and element margins
            return {
                top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
                left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
            };
        },

        // This method will return documentElement in the following cases:
        // 1) For the element inside the iframe without offsetParent, this method will return
        //    documentElement of the parent window
        // 2) For the hidden or detached element
        // 3) For body or html element, i.e. in case of the html node - it will return itself
        //
        // but those exceptions were never presented as a real life use-cases
        // and might be considered as more preferable results.
        //
        // This logic, however, is not guaranteed and can change at any point in the future
        offsetParent: function () {
            return this.map(function () {
                var offsetParent = this.offsetParent;

                while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
                    offsetParent = offsetParent.offsetParent;
                }

                return offsetParent || documentElement;
            });
        }
    });

// Create scrollLeft and scrollTop methods
    jQuery.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (method, prop) {
        var top = "pageYOffset" === prop;

        jQuery.fn[method] = function (val) {
            return access(this, function (elem, method, val) {

                // Coalesce documents and windows
                var win;
                if (isWindow(elem)) {
                    win = elem;
                } else if (elem.nodeType === 9) {
                    win = elem.defaultView;
                }

                if (val === undefined) {
                    return win ? win[prop] : elem[method];
                }

                if (win) {
                    win.scrollTo(
                        !top ? val : win.pageXOffset,
                        top ? val : win.pageYOffset
                    );

                } else {
                    elem[method] = val;
                }
            }, method, val, arguments.length);
        };
    });

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
    jQuery.each(["top", "left"], function (i, prop) {
        jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition,
            function (elem, computed) {
                if (computed) {
                    computed = curCSS(elem, prop);

                    // If curCSS returns percentage, fallback to offset
                    return rnumnonpx.test(computed) ?
                        jQuery(elem).position()[prop] + "px" :
                        computed;
                }
            }
        );
    });


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
    jQuery.each({Height: "height", Width: "width"}, function (name, type) {
        jQuery.each({padding: "inner" + name, content: type, "": "outer" + name},
            function (defaultExtra, funcName) {

                // Margin is only for outerHeight, outerWidth
                jQuery.fn[funcName] = function (margin, value) {
                    var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
                        extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

                    return access(this, function (elem, type, value) {
                        var doc;

                        if (isWindow(elem)) {

                            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                            return funcName.indexOf("outer") === 0 ?
                                elem["inner" + name] :
                                elem.document.documentElement["client" + name];
                        }

                        // Get document width or height
                        if (elem.nodeType === 9) {
                            doc = elem.documentElement;

                            // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                            // whichever is greatest
                            return Math.max(
                                elem.body["scroll" + name], doc["scroll" + name],
                                elem.body["offset" + name], doc["offset" + name],
                                doc["client" + name]
                            );
                        }

                        return value === undefined ?

                            // Get width or height on the element, requesting but not forcing parseFloat
                            jQuery.css(elem, type, extra) :

                            // Set width or height on the element
                            jQuery.style(elem, type, value, extra);
                    }, type, chainable ? margin : undefined, chainable);
                };
            });
    });


    jQuery.each(("blur focus focusin focusout resize scroll click dblclick " +
        "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
        "change select submit keydown keypress keyup contextmenu").split(" "),
        function (i, name) {

            // Handle event binding
            jQuery.fn[name] = function (data, fn) {
                return arguments.length > 0 ?
                    this.on(name, null, data, fn) :
                    this.trigger(name);
            };
        });

    jQuery.fn.extend({
        hover: function (fnOver, fnOut) {
            return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
        }
    });


    jQuery.fn.extend({

        bind: function (types, data, fn) {
            return this.on(types, null, data, fn);
        },
        unbind: function (types, fn) {
            return this.off(types, null, fn);
        },

        delegate: function (selector, types, data, fn) {
            return this.on(types, selector, data, fn);
        },
        undelegate: function (selector, types, fn) {

            // ( namespace ) or ( selector, types [, fn] )
            return arguments.length === 1 ?
                this.off(selector, "**") :
                this.off(types, selector || "**", fn);
        }
    });

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
    jQuery.proxy = function (fn, context) {
        var tmp, args, proxy;

        if (typeof context === "string") {
            tmp = fn[context];
            context = fn;
            fn = tmp;
        }

        // Quick check to determine if target is callable, in the spec
        // this throws a TypeError, but we will just return undefined.
        if (!isFunction(fn)) {
            return undefined;
        }

        // Simulated bind
        args = slice.call(arguments, 2);
        proxy = function () {
            return fn.apply(context || this, args.concat(slice.call(arguments)));
        };

        // Set the guid of unique handler to the same of original handler, so it can be removed
        proxy.guid = fn.guid = fn.guid || jQuery.guid++;

        return proxy;
    };

    jQuery.holdReady = function (hold) {
        if (hold) {
            jQuery.readyWait++;
        } else {
            jQuery.ready(true);
        }
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;

    jQuery.now = Date.now;

    jQuery.isNumeric = function (obj) {

        // As of jQuery 3.0, isNumeric is limited to
        // strings and numbers (primitives or objects)
        // that can be coerced to finite numbers (gh-2662)
        var type = jQuery.type(obj);
        return (type === "number" || type === "string") &&

            // parseFloat NaNs numeric-cast false positives ("")
            // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
            // subtraction forces infinities to NaN
            !isNaN(obj - parseFloat(obj));
    };


// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return jQuery;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }


    var

        // Map over jQuery in case of overwrite
        _jQuery = window.jQuery,

        // Map over the $ in case of overwrite
        _$ = window.$;

    jQuery.noConflict = function (deep) {
        if (window.$ === jQuery) {
            window.$ = _$;
        }

        if (deep && window.jQuery === jQuery) {
            window.jQuery = _jQuery;
        }

        return jQuery;
    };

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
    if (!noGlobal) {
        window.jQuery = window.$ = jQuery;
    }


    return jQuery;
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTc2MmE0MDVhOTU2ODljOGE3NjIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbnN0YW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91cGxvYWQuaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyJdLCJuYW1lcyI6WyJGT1JNX05BTUVfTk9fQVJSQVkiLCJGT1JNX05BTUVfQVJSQVkiLCJCQVNFX1VSTCIsIklNQUdFX1VSTCIsIklNQUdFX0RFVEFJTF9VUkwiLCJJTkRFWF9OQU1FIiwiVFlQRV9OQU1FIiwiJCIsInJlcXVpcmUiLCJpbWFnZUluZGV4IiwidmFsIiwidXJsIiwicmVhZFVSTCIsImlucHV0IiwiZmlsZXMiLCJvbiIsImV2ZW50IiwiZmlsZSIsInRhcmdldCIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsImFqYXgiLCJ0eXBlIiwiY2FjaGUiLCJkYXRhVHlwZSIsInByb2Nlc3NEYXRhIiwiY29udGVudFR5cGUiLCJzdWNjZXNzIiwidGV4dFN0YXR1cyIsImpxWEhSIiwiZXJyb3IiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwib25sb2FkIiwiZSIsImF0dHIiLCJyZXN1bHQiLCJnYWxsZXJ5X2lkIiwicmVhZEFzRGF0YVVSTCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvclRocm93biJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RPLElBQU1BLGtEQUFxQjtBQUM5QixlQUFZLENBQUMsU0FBRCxFQUFZLFdBQVosRUFBeUIsWUFBekIsRUFBdUMsY0FBdkMsRUFBdUQsT0FBdkQsRUFBZ0UsWUFBaEUsQ0FEa0I7QUFFOUIsYUFBUyxVQUZxQjtBQUc5QixjQUFVLFdBSG9CO0FBSTlCLGdCQUFZO0FBSmtCLENBQTNCO0FBTUEsSUFBTUMsNENBQWtCO0FBQzNCLGtCQUFjLGFBRGE7QUFFM0IseUJBQXFCO0FBRk0sQ0FBeEI7O0FBS0EsSUFBTUMsOEJBQVcscUNBQWpCOztBQUdBLElBQU1DLGdDQUFZRCxXQUFXLHNCQUE3Qjs7QUFFQSxJQUFNRSw4Q0FBbUJGLFdBQVcsbUJBQXBDOztBQUVBLElBQU1HLGtDQUFhLFVBQW5COztBQUVBLElBQU1DLGdDQUFZLFVBQWxCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ3BCUDs7QUFFQSxJQUFNQyxJQUFJLG1CQUFPQyxDQUFDLG9EQUFSLENBQVY7O0FBRUEsSUFBSUMsYUFBYUYsRUFBRSxjQUFGLEVBQWtCRyxHQUFsQixFQUFqQjs7QUFFQSxJQUFNQyxNQUFTVCxrQkFBVCx3Q0FBTjs7QUFFQSxTQUFTVSxPQUFULENBQWlCQyxLQUFqQixFQUF3Qjs7QUFFcEIsUUFBSUEsTUFBTUMsS0FBTixJQUFlRCxNQUFNQyxLQUFOLENBQVksQ0FBWixDQUFuQixFQUFtQyxDQUVsQztBQUNKOztBQUVEUCxFQUFFLG1CQUFGLEVBQXVCUSxFQUF2QixDQUEwQixRQUExQixFQUFtQyxVQUFTQyxLQUFULEVBQWU7QUFDOUMsUUFBSUMsT0FBT0QsTUFBTUUsTUFBTixDQUFhSixLQUF4QjtBQUNBLFFBQUlLLE9BQU8sSUFBSUMsUUFBSixFQUFYO0FBQ0FELFNBQUtFLE1BQUwsQ0FBWSxNQUFaLEVBQW1CSixLQUFLLENBQUwsQ0FBbkI7O0FBR0EsUUFBRyxPQUFPUixVQUFQLEtBQXNCLFdBQXpCLEVBQXFDO0FBQ2pDQSxxQkFBYSxDQUFiO0FBQ0g7O0FBRUQsUUFBSUEsY0FBYyxDQUFsQixFQUNJQSxhQUFhLENBQWI7O0FBRUpGLE1BQUVlLElBQUYsQ0FBTztBQUNIWCxhQUFLQSxHQURGO0FBRUhZLGNBQU0sTUFGSDtBQUdISixjQUFNQSxJQUhIO0FBSUhLLGVBQU8sS0FKSjtBQUtIQyxrQkFBVSxNQUxQO0FBTUhDLHFCQUFhLEtBTlY7QUFPSEMscUJBQWEsS0FQVjtBQVFIQyxpQkFBUyxpQkFBU1QsSUFBVCxFQUFlVSxVQUFmLEVBQTJCQyxLQUEzQixFQUNUO0FBQ0ksZ0JBQUcsT0FBT1gsS0FBS1ksS0FBWixLQUFzQixXQUF6QixFQUNBO0FBQ0ksb0JBQUlDLFNBQVMsSUFBSUMsVUFBSixFQUFiOztBQUVBRCx1QkFBT0UsTUFBUCxHQUFnQixVQUFTQyxDQUFULEVBQVk7QUFDeEI1QixrQ0FBWUUsVUFBWixFQUEwQjJCLElBQTFCLENBQStCLEtBQS9CLEVBQXNDRCxFQUFFakIsTUFBRixDQUFTbUIsTUFBL0M7QUFDQTlCLHdDQUFrQkUsVUFBbEIsRUFBZ0MyQixJQUFoQyxDQUFxQyxPQUFyQyxFQUE4Q2pCLEtBQUttQixVQUFuRDtBQUNBN0I7QUFDSCxpQkFKRDs7QUFNQXVCLHVCQUFPTyxhQUFQLENBQXFCdEIsS0FBSyxDQUFMLENBQXJCO0FBQ0gsYUFYRCxNQWFBO0FBQ0l1Qix3QkFBUUMsR0FBUixDQUFZLGFBQWF0QixLQUFLWSxLQUE5QjtBQUNIO0FBQ0osU0ExQkU7QUEyQkhBLGVBQU8sZUFBU0QsS0FBVCxFQUFnQkQsVUFBaEIsRUFBNEJhLFdBQTVCLEVBQ1A7QUFDSUYsb0JBQVFDLEdBQVIsQ0FBWSxhQUFhWixVQUF6QjtBQUNBVyxvQkFBUUMsR0FBUixDQUFZLGFBQWFYLEtBQXpCO0FBQ0FVLG9CQUFRQyxHQUFSLENBQVksYUFBYUMsV0FBekI7QUFDSDtBQWhDRSxLQUFQO0FBa0NILENBL0NELEU7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxZQUFZOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsWUFBWTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixZQUFZO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQSwrQkFBK0IsSUFBSTs7QUFFbkM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNELElBQUk7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQzs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIseUJBQXlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5Qix1QkFBdUIsU0FBUztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0IsdUJBQXVCLFFBQVE7QUFDL0IseUJBQXlCLE9BQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLFFBQVEsNkJBQTZCO0FBQzVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsZ0JBQWdCO0FBQ3ZDLHlCQUF5Qix1QkFBdUI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGVBQWU7QUFDdEMseUJBQXlCLFFBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixlQUFlO0FBQ3RDLHlCQUF5QixPQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixVQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCLGNBQWM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLG9EQUFvRCxNQUFNO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDhCQUE4Qjs7QUFFOUIsd0JBQXdCOztBQUV4QjtBQUNBLDBCQUEwQiwrQkFBK0I7QUFDekQsMEJBQTBCLGtCQUFrQjtBQUM1QywwQkFBMEIsb0NBQW9DO0FBQzlELDBCQUEwQjtBQUMxQixpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5RkFBeUY7O0FBRXpGO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRTs7QUFFM0U7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkZBQTZGOztBQUU3RjtBQUNBO0FBQ0E7QUFDQSwrRUFBK0U7O0FBRS9FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUdBQXlHOztBQUV6RztBQUNBO0FBQ0E7QUFDQSwyRkFBMkY7O0FBRTNGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLFVBQVU7QUFDaEcsMkRBQTJELDJCQUEyQjtBQUN0RjtBQUNBLG9EQUFvRCxNQUFNO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLDhCQUE4QixZQUFZO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLDhCQUE4QixVQUFVO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBLDhCQUE4QixjQUFjO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLHFFQUFxRTtBQUM1RjtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUztBQUMvQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFGQUFxRjs7QUFFckY7QUFDQTtBQUNBLDhHQUE4Rzs7QUFFOUc7QUFDQTtBQUNBLHFDQUFxQztBQUNyQzs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7O0FBRUEsb0VBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVM7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsU0FBUztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDZDQUE2QztBQUM1RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNFQUFzRTtBQUN0RSw4QkFBOEIsd0NBQXdDO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQSx1QkFBdUIsUUFBUTtBQUMvQix1QkFBdUIsTUFBTTtBQUM3Qix1QkFBdUIsTUFBTTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTs7QUFFQSxTQUFTOzs7QUFHVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUEsY0FBYyxHQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTs7QUFFQSx1QkFBdUIsU0FBUztBQUNoQztBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3Qix1Q0FBdUMsd0JBQXdCOztBQUUvRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGtEQUFrRDtBQUNsRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGNBQWM7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWlFLHNDQUFzQztBQUN2Ryw2REFBNkQsdUNBQXVDO0FBQ3BHLDZEQUE2RCxzQ0FBc0M7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQyw2QkFBNkI7QUFDN0I7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlDQUF5Qzs7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpREFBaUQ7QUFDakQsa0RBQWtEO0FBQ2xELGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixTQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFDQUFxQyxhQUFhO0FBQ2xELGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsU0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWMsZ0JBQWdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixnQkFBZ0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsMEJBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYyxPQUFPO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7O0FBRWxCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBOztBQUVBLHVCQUF1QixzQkFBc0I7QUFDN0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhFQUE4RTtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixjQUFjOztBQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLG1CQUFtQjtBQUN0RDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFDQUFxQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbURBQW1EO0FBQ3RGOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQ0FBK0MsY0FBYztBQUM3RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCxPQUFPO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDOztBQUV2QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsT0FBTztBQUM3Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLDJCQUEyQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbURBQW1ELE9BQU87QUFDMUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsaUNBQWlDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLDBCQUEwQjtBQUM1Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEJBQThCLE9BQU87QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixXQUFXO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEQUF5RCxjQUFjLFdBQVc7QUFDbEYsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQSxtQ0FBbUMsY0FBYyxzQkFBc0IsZ0JBQWdCO0FBQ3ZGLDZCQUE2QixXQUFXLFlBQVk7QUFDcEQsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZEQUE2RDtBQUNoRjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsT0FBTzs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxjQUFjO0FBQzlDO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBOztBQUVBLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLGNBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0JBQWdCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnRUFBZ0Usd0JBQXdCO0FBQ3hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGdCQUFnQjtBQUN0QztBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsZ0JBQWdCO0FBQzFDO0FBQ0E7O0FBRUEsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQSxjQUFjLGdCQUFnQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsWUFBWTtBQUM1QyxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrREFBK0Q7O0FBRS9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixnQkFBZ0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDLGtCQUFrQixnQkFBZ0I7QUFDbEMscUJBQXFCO0FBQ3JCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsY0FBYyxtQkFBbUI7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQSw4Q0FBOEM7QUFDOUM7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakI7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsS0FBSztBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsbUNBQW1DOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWIsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEMseUJBQXlCO0FBQ3pCOztBQUVBLDRCQUE0QjtBQUM1QixpQkFBaUI7QUFDakI7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkIsdURBQXVEO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7O0FBRTNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCO0FBQ2hCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEIsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RDs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBdUM7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQ0FBK0M7O0FBRS9DO0FBQ0EsbUNBQW1DO0FBQ25DLHdDQUF3Qzs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLHFCQUFxQjtBQUNsRSw2Q0FBNkMsdUJBQXVCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0VBQWdFO0FBQ2hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQzs7QUFFaEM7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQSxpQkFBaUIsb0RBQW9EO0FBQ3JFOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EsaUJBQWlCLGlDQUFpQztBQUNsRCxxQkFBcUIsMkRBQTJEO0FBQ2hGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxhQUFhO0FBQ2IsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQVEsSUFBMEM7QUFDbEQsUUFBUSxpQ0FBaUIsRUFBRSxtQ0FBRTtBQUM3QjtBQUNBLFNBQVM7QUFBQSxvR0FBQztBQUNWOzs7QUFHQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLENBQUMiLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvdXBsb2FkLmltYWdlLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU3NjJhNDA1YTk1Njg5YzhhNzYyIiwiZXhwb3J0IGNvbnN0IEZPUk1fTkFNRV9OT19BUlJBWSA9IHtcbiAgICAnYWRyZXNzZScgOiBbJ2FkcmVzc2UnLCAndmlsbGUubm9tJywgJ3JlZ2lvbi5ub20nLCAncXVhcnRpZXIubm9tJywgJ3RpdHJlJywgJ2Rlc2NyaXB0b24nXSxcbiAgICAndmlsbGUnOiAndmlsbGUuaWQnLFxuICAgICdyZWdpb24nOiAncmVnaW9uLmlkJyxcbiAgICAncXVhcnRpZXInOiAncXVhcnRpZXIuaWQnXG59XG5leHBvcnQgY29uc3QgRk9STV9OQU1FX0FSUkFZID0ge1xuICAgICdjYXRlZ29yeVtdJzogJ2NhdGVnb3J5LmlkJyxcbiAgICAnY2FyYWN0ZXJpc3RpcXVlW10nOiAnY2FyYWN0ZXJpc3RpcXVlLmlkJ1xufVxuXG5leHBvcnQgY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly93d3cubWFtYWlzb24ubWcvYXBwX2Rldi5waHAnXG5cblxuZXhwb3J0IGNvbnN0IElNQUdFX1VSTCA9IEJBU0VfVVJMICsgJy9nYWxsZXJ5L3ZpZXcvdGh1bWJzJztcblxuZXhwb3J0IGNvbnN0IElNQUdFX0RFVEFJTF9VUkwgPSBCQVNFX1VSTCArICcvcHJvcHJpZXRlL2RldGFpbCdcblxuZXhwb3J0IGNvbnN0IElOREVYX05BTUUgPSAnbWFtYWlzb24nXG5cbmV4cG9ydCBjb25zdCBUWVBFX05BTUUgPSAnYW5ub25jZXMnXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbnN0YW50LmpzIiwiaW1wb3J0IHsgQkFTRV9VUkwgfSBmcm9tICcuL2NvbnN0YW50J1xuXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5JylcblxubGV0IGltYWdlSW5kZXggPSAkKCcjaW1hZ2UtaW5kZXgnKS52YWwoKVxuXG5jb25zdCB1cmwgPSBgJHtCQVNFX1VSTH0vbW9uLWNvbXB0ZS9ham91dC1wcm9wcmlldGUvZ2FsbGVyeWBcblxuZnVuY3Rpb24gcmVhZFVSTChpbnB1dCkge1xuXG4gICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XG4gICAgICBcbiAgICB9XG59XG5cbiQoJyNidG4tdXBsb2FkLWltYWdlJykub24oJ2NoYW5nZScsZnVuY3Rpb24oZXZlbnQpe1xuICAgIGxldCBmaWxlID0gZXZlbnQudGFyZ2V0LmZpbGVzXG4gICAgbGV0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBkYXRhLmFwcGVuZCgnZmlsZScsZmlsZVswXSlcblxuXG4gICAgaWYodHlwZW9mIGltYWdlSW5kZXggPT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgaW1hZ2VJbmRleCA9IDBcbiAgICB9XG5cbiAgICBpZiggaW1hZ2VJbmRleCA9PSA2KVxuICAgICAgICBpbWFnZUluZGV4ID0gMDtcblxuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLCBcbiAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLCBcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgdGV4dFN0YXR1cywganFYSFIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBkYXRhLmVycm9yID09PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgXG4gICAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgJChgI2ltYWdlLSR7aW1hZ2VJbmRleH1gKS5hdHRyKCdzcmMnLCBlLnRhcmdldC5yZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAkKGAjaW5wdXQtaW1hZ2UtJHtpbWFnZUluZGV4fWApLmF0dHIoJ3ZhbHVlJywgZGF0YS5nYWxsZXJ5X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VJbmRleCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUlM6ICcgKyBkYXRhLmVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bilcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SUzogJyArIHRleHRTdGF0dXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SUzogJyArIGpxWEhSKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUlM6ICcgKyBlcnJvclRocm93bik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy91cGxvYWQuaW1hZ2UuanMiLCIvKiFcbiAqIGpRdWVyeSBKYXZhU2NyaXB0IExpYnJhcnkgdjMuMy4xXG4gKiBodHRwczovL2pxdWVyeS5jb20vXG4gKlxuICogSW5jbHVkZXMgU2l6emxlLmpzXG4gKiBodHRwczovL3NpenpsZWpzLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogRGF0ZTogMjAxOC0wMS0yMFQxNzoyNFpcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblxuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgICAgLy8gRm9yIENvbW1vbkpTIGFuZCBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB3aGVyZSBhIHByb3BlciBgd2luZG93YFxuICAgICAgICAvLyBpcyBwcmVzZW50LCBleGVjdXRlIHRoZSBmYWN0b3J5IGFuZCBnZXQgalF1ZXJ5LlxuICAgICAgICAvLyBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IGhhdmUgYSBgd2luZG93YCB3aXRoIGEgYGRvY3VtZW50YFxuICAgICAgICAvLyAoc3VjaCBhcyBOb2RlLmpzKSwgZXhwb3NlIGEgZmFjdG9yeSBhcyBtb2R1bGUuZXhwb3J0cy5cbiAgICAgICAgLy8gVGhpcyBhY2NlbnR1YXRlcyB0aGUgbmVlZCBmb3IgdGhlIGNyZWF0aW9uIG9mIGEgcmVhbCBgd2luZG93YC5cbiAgICAgICAgLy8gZS5nLiB2YXIgalF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeVwiKSh3aW5kb3cpO1xuICAgICAgICAvLyBTZWUgdGlja2V0ICMxNDU0OSBmb3IgbW9yZSBpbmZvLlxuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5kb2N1bWVudCA/XG4gICAgICAgICAgICBmYWN0b3J5KGdsb2JhbCwgdHJ1ZSkgOlxuICAgICAgICAgICAgZnVuY3Rpb24gKHcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXcuZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhY3Rvcnkodyk7XG4gICAgICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGZhY3RvcnkoZ2xvYmFsKTtcbiAgICB9XG5cbi8vIFBhc3MgdGhpcyBpZiB3aW5kb3cgaXMgbm90IGRlZmluZWQgeWV0XG59KSh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24gKHdpbmRvdywgbm9HbG9iYWwpIHtcblxuLy8gRWRnZSA8PSAxMiAtIDEzKywgRmlyZWZveCA8PTE4IC0gNDUrLCBJRSAxMCAtIDExLCBTYWZhcmkgNS4xIC0gOSssIGlPUyA2IC0gOS4xXG4vLyB0aHJvdyBleGNlcHRpb25zIHdoZW4gbm9uLXN0cmljdCBjb2RlIChlLmcuLCBBU1AuTkVUIDQuNSkgYWNjZXNzZXMgc3RyaWN0IG1vZGVcbi8vIGFyZ3VtZW50cy5jYWxsZWUuY2FsbGVyICh0cmFjLTEzMzM1KS4gQnV0IGFzIG9mIGpRdWVyeSAzLjAgKDIwMTYpLCBzdHJpY3QgbW9kZSBzaG91bGQgYmUgY29tbW9uXG4vLyBlbm91Z2ggdGhhdCBhbGwgc3VjaCBhdHRlbXB0cyBhcmUgZ3VhcmRlZCBpbiBhIHRyeSBibG9jay5cbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciBhcnIgPSBbXTtcblxuICAgIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuICAgIHZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuICAgIHZhciBzbGljZSA9IGFyci5zbGljZTtcblxuICAgIHZhciBjb25jYXQgPSBhcnIuY29uY2F0O1xuXG4gICAgdmFyIHB1c2ggPSBhcnIucHVzaDtcblxuICAgIHZhciBpbmRleE9mID0gYXJyLmluZGV4T2Y7XG5cbiAgICB2YXIgY2xhc3MydHlwZSA9IHt9O1xuXG4gICAgdmFyIHRvU3RyaW5nID0gY2xhc3MydHlwZS50b1N0cmluZztcblxuICAgIHZhciBoYXNPd24gPSBjbGFzczJ0eXBlLmhhc093blByb3BlcnR5O1xuXG4gICAgdmFyIGZuVG9TdHJpbmcgPSBoYXNPd24udG9TdHJpbmc7XG5cbiAgICB2YXIgT2JqZWN0RnVuY3Rpb25TdHJpbmcgPSBmblRvU3RyaW5nLmNhbGwoT2JqZWN0KTtcblxuICAgIHZhciBzdXBwb3J0ID0ge307XG5cbiAgICB2YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG5cbiAgICAgICAgLy8gU3VwcG9ydDogQ2hyb21lIDw9NTcsIEZpcmVmb3ggPD01MlxuICAgICAgICAvLyBJbiBzb21lIGJyb3dzZXJzLCB0eXBlb2YgcmV0dXJucyBcImZ1bmN0aW9uXCIgZm9yIEhUTUwgPG9iamVjdD4gZWxlbWVudHNcbiAgICAgICAgLy8gKGkuZS4sIGB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJvYmplY3RcIiApID09PSBcImZ1bmN0aW9uXCJgKS5cbiAgICAgICAgLy8gV2UgZG9uJ3Qgd2FudCB0byBjbGFzc2lmeSAqYW55KiBET00gbm9kZSBhcyBhIGZ1bmN0aW9uLlxuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBvYmoubm9kZVR5cGUgIT09IFwibnVtYmVyXCI7XG4gICAgfTtcblxuXG4gICAgdmFyIGlzV2luZG93ID0gZnVuY3Rpb24gaXNXaW5kb3cob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG4gICAgfTtcblxuXG4gICAgdmFyIHByZXNlcnZlZFNjcmlwdEF0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHR5cGU6IHRydWUsXG4gICAgICAgIHNyYzogdHJ1ZSxcbiAgICAgICAgbm9Nb2R1bGU6IHRydWVcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gRE9NRXZhbChjb2RlLCBkb2MsIG5vZGUpIHtcbiAgICAgICAgZG9jID0gZG9jIHx8IGRvY3VtZW50O1xuXG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgc2NyaXB0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cbiAgICAgICAgc2NyaXB0LnRleHQgPSBjb2RlO1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgZm9yIChpIGluIHByZXNlcnZlZFNjcmlwdEF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZVtpXSkge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHRbaV0gPSBub2RlW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkb2MuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHRvVHlwZShvYmopIHtcbiAgICAgICAgaWYgKG9iaiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gb2JqICsgXCJcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seSAoZnVuY3Rpb25pc2ggUmVnRXhwKVxuICAgICAgICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIgP1xuICAgICAgICAgICAgY2xhc3MydHlwZVt0b1N0cmluZy5jYWxsKG9iaildIHx8IFwib2JqZWN0XCIgOlxuICAgICAgICAgICAgdHlwZW9mIG9iajtcbiAgICB9XG5cbiAgICAvKiBnbG9iYWwgU3ltYm9sICovXG4vLyBEZWZpbmluZyB0aGlzIGdsb2JhbCBpbiAuZXNsaW50cmMuanNvbiB3b3VsZCBjcmVhdGUgYSBkYW5nZXIgb2YgdXNpbmcgdGhlIGdsb2JhbFxuLy8gdW5ndWFyZGVkIGluIGFub3RoZXIgcGxhY2UsIGl0IHNlZW1zIHNhZmVyIHRvIGRlZmluZSBnbG9iYWwgb25seSBmb3IgdGhpcyBtb2R1bGVcblxuXG4gICAgdmFyXG4gICAgICAgIHZlcnNpb24gPSBcIjMuMy4xXCIsXG5cbiAgICAgICAgLy8gRGVmaW5lIGEgbG9jYWwgY29weSBvZiBqUXVlcnlcbiAgICAgICAgalF1ZXJ5ID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb250ZXh0KSB7XG5cbiAgICAgICAgICAgIC8vIFRoZSBqUXVlcnkgb2JqZWN0IGlzIGFjdHVhbGx5IGp1c3QgdGhlIGluaXQgY29uc3RydWN0b3IgJ2VuaGFuY2VkJ1xuICAgICAgICAgICAgLy8gTmVlZCBpbml0IGlmIGpRdWVyeSBpcyBjYWxsZWQgKGp1c3QgYWxsb3cgZXJyb3IgdG8gYmUgdGhyb3duIGlmIG5vdCBpbmNsdWRlZClcbiAgICAgICAgICAgIHJldHVybiBuZXcgalF1ZXJ5LmZuLmluaXQoc2VsZWN0b3IsIGNvbnRleHQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuICAgICAgICAvLyBNYWtlIHN1cmUgd2UgdHJpbSBCT00gYW5kIE5CU1BcbiAgICAgICAgcnRyaW0gPSAvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2c7XG5cbiAgICBqUXVlcnkuZm4gPSBqUXVlcnkucHJvdG90eXBlID0ge1xuXG4gICAgICAgIC8vIFRoZSBjdXJyZW50IHZlcnNpb24gb2YgalF1ZXJ5IGJlaW5nIHVzZWRcbiAgICAgICAganF1ZXJ5OiB2ZXJzaW9uLFxuXG4gICAgICAgIGNvbnN0cnVjdG9yOiBqUXVlcnksXG5cbiAgICAgICAgLy8gVGhlIGRlZmF1bHQgbGVuZ3RoIG9mIGEgalF1ZXJ5IG9iamVjdCBpcyAwXG4gICAgICAgIGxlbmd0aDogMCxcblxuICAgICAgICB0b0FycmF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gc2xpY2UuY2FsbCh0aGlzKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBHZXQgdGhlIE50aCBlbGVtZW50IGluIHRoZSBtYXRjaGVkIGVsZW1lbnQgc2V0IE9SXG4gICAgICAgIC8vIEdldCB0aGUgd2hvbGUgbWF0Y2hlZCBlbGVtZW50IHNldCBhcyBhIGNsZWFuIGFycmF5XG4gICAgICAgIGdldDogZnVuY3Rpb24gKG51bSkge1xuXG4gICAgICAgICAgICAvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBpbiBhIGNsZWFuIGFycmF5XG4gICAgICAgICAgICBpZiAobnVtID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2xpY2UuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmV0dXJuIGp1c3QgdGhlIG9uZSBlbGVtZW50IGZyb20gdGhlIHNldFxuICAgICAgICAgICAgcmV0dXJuIG51bSA8IDAgPyB0aGlzW251bSArIHRoaXMubGVuZ3RoXSA6IHRoaXNbbnVtXTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGFuZCBwdXNoIGl0IG9udG8gdGhlIHN0YWNrXG4gICAgICAgIC8vIChyZXR1cm5pbmcgdGhlIG5ldyBtYXRjaGVkIGVsZW1lbnQgc2V0KVxuICAgICAgICBwdXNoU3RhY2s6IGZ1bmN0aW9uIChlbGVtcykge1xuXG4gICAgICAgICAgICAvLyBCdWlsZCBhIG5ldyBqUXVlcnkgbWF0Y2hlZCBlbGVtZW50IHNldFxuICAgICAgICAgICAgdmFyIHJldCA9IGpRdWVyeS5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksIGVsZW1zKTtcblxuICAgICAgICAgICAgLy8gQWRkIHRoZSBvbGQgb2JqZWN0IG9udG8gdGhlIHN0YWNrIChhcyBhIHJlZmVyZW5jZSlcbiAgICAgICAgICAgIHJldC5wcmV2T2JqZWN0ID0gdGhpcztcblxuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBuZXdseS1mb3JtZWQgZWxlbWVudCBzZXRcbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRXhlY3V0ZSBhIGNhbGxiYWNrIGZvciBldmVyeSBlbGVtZW50IGluIHRoZSBtYXRjaGVkIHNldC5cbiAgICAgICAgZWFjaDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5LmVhY2godGhpcywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1hcDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soalF1ZXJ5Lm1hcCh0aGlzLCBmdW5jdGlvbiAoZWxlbSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKGVsZW0sIGksIGVsZW0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNsaWNlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2soc2xpY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlyc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVxKDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGxhc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVxKC0xKTtcbiAgICAgICAgfSxcblxuICAgICAgICBlcTogZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIHZhciBsZW4gPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBqID0gK2kgKyAoaSA8IDAgPyBsZW4gOiAwKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhqID49IDAgJiYgaiA8IGxlbiA/IFt0aGlzW2pdXSA6IFtdKTtcbiAgICAgICAgfSxcblxuICAgICAgICBlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcigpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cbiAgICAgICAgLy8gQmVoYXZlcyBsaWtlIGFuIEFycmF5J3MgbWV0aG9kLCBub3QgbGlrZSBhIGpRdWVyeSBtZXRob2QuXG4gICAgICAgIHB1c2g6IHB1c2gsXG4gICAgICAgIHNvcnQ6IGFyci5zb3J0LFxuICAgICAgICBzcGxpY2U6IGFyci5zcGxpY2VcbiAgICB9O1xuXG4gICAgalF1ZXJ5LmV4dGVuZCA9IGpRdWVyeS5mbi5leHRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcbiAgICAgICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1swXSB8fCB7fSxcbiAgICAgICAgICAgIGkgPSAxLFxuICAgICAgICAgICAgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICAgIGRlZXAgPSBmYWxzZTtcblxuICAgICAgICAvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgZGVlcCA9IHRhcmdldDtcblxuICAgICAgICAgICAgLy8gU2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuICAgICAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzW2ldIHx8IHt9O1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSGFuZGxlIGNhc2Ugd2hlbiB0YXJnZXQgaXMgYSBzdHJpbmcgb3Igc29tZXRoaW5nIChwb3NzaWJsZSBpbiBkZWVwIGNvcHkpXG4gICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiICYmICFpc0Z1bmN0aW9uKHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXh0ZW5kIGpRdWVyeSBpdHNlbGYgaWYgb25seSBvbmUgYXJndW1lbnQgaXMgcGFzc2VkXG4gICAgICAgIGlmIChpID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXM7XG4gICAgICAgICAgICBpLS07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgICAgIC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcbiAgICAgICAgICAgIGlmICgob3B0aW9ucyA9IGFyZ3VtZW50c1tpXSkgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgLy8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuICAgICAgICAgICAgICAgIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHNyYyA9IHRhcmdldFtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgY29weSA9IG9wdGlvbnNbbmFtZV07XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBjb3B5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVlcCAmJiBjb3B5ICYmIChqUXVlcnkuaXNQbGFpbk9iamVjdChjb3B5KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvcHlJc0FycmF5ID0gQXJyYXkuaXNBcnJheShjb3B5KSkpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb3B5SXNBcnJheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlJc0FycmF5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUgPSBzcmMgJiYgQXJyYXkuaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvbmUgPSBzcmMgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSA9IGpRdWVyeS5leHRlbmQoZGVlcCwgY2xvbmUsIGNvcHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29weSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0gPSBjb3B5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3RcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuXG4gICAgalF1ZXJ5LmV4dGVuZCh7XG5cbiAgICAgICAgLy8gVW5pcXVlIGZvciBlYWNoIGNvcHkgb2YgalF1ZXJ5IG9uIHRoZSBwYWdlXG4gICAgICAgIGV4cGFuZG86IFwialF1ZXJ5XCIgKyAodmVyc2lvbiArIE1hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLCBcIlwiKSxcblxuICAgICAgICAvLyBBc3N1bWUgalF1ZXJ5IGlzIHJlYWR5IHdpdGhvdXQgdGhlIHJlYWR5IG1vZHVsZVxuICAgICAgICBpc1JlYWR5OiB0cnVlLFxuXG4gICAgICAgIGVycm9yOiBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBub29wOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNQbGFpbk9iamVjdDogZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgdmFyIHByb3RvLCBDdG9yO1xuXG4gICAgICAgICAgICAvLyBEZXRlY3Qgb2J2aW91cyBuZWdhdGl2ZXNcbiAgICAgICAgICAgIC8vIFVzZSB0b1N0cmluZyBpbnN0ZWFkIG9mIGpRdWVyeS50eXBlIHRvIGNhdGNoIGhvc3Qgb2JqZWN0c1xuICAgICAgICAgICAgaWYgKCFvYmogfHwgdG9TdHJpbmcuY2FsbChvYmopICE9PSBcIltvYmplY3QgT2JqZWN0XVwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm90byA9IGdldFByb3RvKG9iaik7XG5cbiAgICAgICAgICAgIC8vIE9iamVjdHMgd2l0aCBubyBwcm90b3R5cGUgKGUuZy4sIGBPYmplY3QuY3JlYXRlKCBudWxsIClgKSBhcmUgcGxhaW5cbiAgICAgICAgICAgIGlmICghcHJvdG8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT2JqZWN0cyB3aXRoIHByb3RvdHlwZSBhcmUgcGxhaW4gaWZmIHRoZXkgd2VyZSBjb25zdHJ1Y3RlZCBieSBhIGdsb2JhbCBPYmplY3QgZnVuY3Rpb25cbiAgICAgICAgICAgIEN0b3IgPSBoYXNPd24uY2FsbChwcm90bywgXCJjb25zdHJ1Y3RvclwiKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmIGZuVG9TdHJpbmcuY2FsbChDdG9yKSA9PT0gT2JqZWN0RnVuY3Rpb25TdHJpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNFbXB0eU9iamVjdDogZnVuY3Rpb24gKG9iaikge1xuXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgICAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lc2xpbnQvZXNsaW50L2lzc3Vlcy82MTI1XG4gICAgICAgICAgICB2YXIgbmFtZTtcblxuICAgICAgICAgICAgZm9yIChuYW1lIGluIG9iaikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2YWx1YXRlcyBhIHNjcmlwdCBpbiBhIGdsb2JhbCBjb250ZXh0XG4gICAgICAgIGdsb2JhbEV2YWw6IGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICAgICAgICBET01FdmFsKGNvZGUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGVhY2g6IGZ1bmN0aW9uIChvYmosIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoLCBpID0gMDtcblxuICAgICAgICAgICAgaWYgKGlzQXJyYXlMaWtlKG9iaikpIHtcbiAgICAgICAgICAgICAgICBsZW5ndGggPSBvYmoubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwob2JqW2ldLCBpLCBvYmpbaV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoaSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwob2JqW2ldLCBpLCBvYmpbaV0pID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5XG4gICAgICAgIHRyaW06IGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGV4dCA9PSBudWxsID9cbiAgICAgICAgICAgICAgICBcIlwiIDpcbiAgICAgICAgICAgICAgICAodGV4dCArIFwiXCIpLnJlcGxhY2UocnRyaW0sIFwiXCIpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHJlc3VsdHMgaXMgZm9yIGludGVybmFsIHVzYWdlIG9ubHlcbiAgICAgICAgbWFrZUFycmF5OiBmdW5jdGlvbiAoYXJyLCByZXN1bHRzKSB7XG4gICAgICAgICAgICB2YXIgcmV0ID0gcmVzdWx0cyB8fCBbXTtcblxuICAgICAgICAgICAgaWYgKGFyciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQXJyYXlMaWtlKE9iamVjdChhcnIpKSkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkubWVyZ2UocmV0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIGFyciA9PT0gXCJzdHJpbmdcIiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Fycl0gOiBhcnJcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwdXNoLmNhbGwocmV0LCBhcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSxcblxuICAgICAgICBpbkFycmF5OiBmdW5jdGlvbiAoZWxlbSwgYXJyLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyID09IG51bGwgPyAtMSA6IGluZGV4T2YuY2FsbChhcnIsIGVsZW0sIGkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuICAgICAgICAvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG4gICAgICAgIG1lcmdlOiBmdW5jdGlvbiAoZmlyc3QsIHNlY29uZCkge1xuICAgICAgICAgICAgdmFyIGxlbiA9ICtzZWNvbmQubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGogPSAwLFxuICAgICAgICAgICAgICAgIGkgPSBmaXJzdC5sZW5ndGg7XG5cbiAgICAgICAgICAgIGZvciAoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmaXJzdFtpKytdID0gc2Vjb25kW2pdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaXJzdC5sZW5ndGggPSBpO1xuXG4gICAgICAgICAgICByZXR1cm4gZmlyc3Q7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ3JlcDogZnVuY3Rpb24gKGVsZW1zLCBjYWxsYmFjaywgaW52ZXJ0KSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tJbnZlcnNlLFxuICAgICAgICAgICAgICAgIG1hdGNoZXMgPSBbXSxcbiAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICBsZW5ndGggPSBlbGVtcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tFeHBlY3QgPSAhaW52ZXJ0O1xuXG4gICAgICAgICAgICAvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgb25seSBzYXZpbmcgdGhlIGl0ZW1zXG4gICAgICAgICAgICAvLyB0aGF0IHBhc3MgdGhlIHZhbGlkYXRvciBmdW5jdGlvblxuICAgICAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrSW52ZXJzZSA9ICFjYWxsYmFjayhlbGVtc1tpXSwgaSk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrSW52ZXJzZSAhPT0gY2FsbGJhY2tFeHBlY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGVsZW1zW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIGFyZyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuICAgICAgICBtYXA6IGZ1bmN0aW9uIChlbGVtcywgY2FsbGJhY2ssIGFyZykge1xuICAgICAgICAgICAgdmFyIGxlbmd0aCwgdmFsdWUsXG4gICAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgICAgcmV0ID0gW107XG5cbiAgICAgICAgICAgIC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCB0cmFuc2xhdGluZyBlYWNoIG9mIHRoZSBpdGVtcyB0byB0aGVpciBuZXcgdmFsdWVzXG4gICAgICAgICAgICBpZiAoaXNBcnJheUxpa2UoZWxlbXMpKSB7XG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gZWxlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBjYWxsYmFjayhlbGVtc1tpXSwgaSwgYXJnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gR28gdGhyb3VnaCBldmVyeSBrZXkgb24gdGhlIG9iamVjdCxcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChpIGluIGVsZW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY2FsbGJhY2soZWxlbXNbaV0sIGksIGFyZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmxhdHRlbiBhbnkgbmVzdGVkIGFycmF5c1xuICAgICAgICAgICAgcmV0dXJuIGNvbmNhdC5hcHBseShbXSwgcmV0KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBBIGdsb2JhbCBHVUlEIGNvdW50ZXIgZm9yIG9iamVjdHNcbiAgICAgICAgZ3VpZDogMSxcblxuICAgICAgICAvLyBqUXVlcnkuc3VwcG9ydCBpcyBub3QgdXNlZCBpbiBDb3JlIGJ1dCBvdGhlciBwcm9qZWN0cyBhdHRhY2ggdGhlaXJcbiAgICAgICAgLy8gcHJvcGVydGllcyB0byBpdCBzbyBpdCBuZWVkcyB0byBleGlzdC5cbiAgICAgICAgc3VwcG9ydDogc3VwcG9ydFxuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBqUXVlcnkuZm5bU3ltYm9sLml0ZXJhdG9yXSA9IGFycltTeW1ib2wuaXRlcmF0b3JdO1xuICAgIH1cblxuLy8gUG9wdWxhdGUgdGhlIGNsYXNzMnR5cGUgbWFwXG4gICAgalF1ZXJ5LmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yIFN5bWJvbFwiLnNwbGl0KFwiIFwiKSxcbiAgICAgICAgZnVuY3Rpb24gKGksIG5hbWUpIHtcbiAgICAgICAgICAgIGNsYXNzMnR5cGVbXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiXSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSk7XG5cbiAgICBmdW5jdGlvbiBpc0FycmF5TGlrZShvYmopIHtcblxuICAgICAgICAvLyBTdXBwb3J0OiByZWFsIGlPUyA4LjIgb25seSAobm90IHJlcHJvZHVjaWJsZSBpbiBzaW11bGF0b3IpXG4gICAgICAgIC8vIGBpbmAgY2hlY2sgdXNlZCB0byBwcmV2ZW50IEpJVCBlcnJvciAoZ2gtMjE0NSlcbiAgICAgICAgLy8gaGFzT3duIGlzbid0IHVzZWQgaGVyZSBkdWUgdG8gZmFsc2UgbmVnYXRpdmVzXG4gICAgICAgIC8vIHJlZ2FyZGluZyBOb2RlbGlzdCBsZW5ndGggaW4gSUVcbiAgICAgICAgdmFyIGxlbmd0aCA9ICEhb2JqICYmIFwibGVuZ3RoXCIgaW4gb2JqICYmIG9iai5sZW5ndGgsXG4gICAgICAgICAgICB0eXBlID0gdG9UeXBlKG9iaik7XG5cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob2JqKSB8fCBpc1dpbmRvdyhvYmopKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHlwZSA9PT0gXCJhcnJheVwiIHx8IGxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgdHlwZW9mIGxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJiBsZW5ndGggPiAwICYmIChsZW5ndGggLSAxKSBpbiBvYmo7XG4gICAgfVxuXG4gICAgdmFyIFNpenpsZSA9XG4gICAgICAgIC8qIVxuICogU2l6emxlIENTUyBTZWxlY3RvciBFbmdpbmUgdjIuMy4zXG4gKiBodHRwczovL3NpenpsZWpzLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogRGF0ZTogMjAxNi0wOC0wOFxuICovXG4gICAgICAgIChmdW5jdGlvbiAod2luZG93KSB7XG5cbiAgICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgICAgIHN1cHBvcnQsXG4gICAgICAgICAgICAgICAgRXhwcixcbiAgICAgICAgICAgICAgICBnZXRUZXh0LFxuICAgICAgICAgICAgICAgIGlzWE1MLFxuICAgICAgICAgICAgICAgIHRva2VuaXplLFxuICAgICAgICAgICAgICAgIGNvbXBpbGUsXG4gICAgICAgICAgICAgICAgc2VsZWN0LFxuICAgICAgICAgICAgICAgIG91dGVybW9zdENvbnRleHQsXG4gICAgICAgICAgICAgICAgc29ydElucHV0LFxuICAgICAgICAgICAgICAgIGhhc0R1cGxpY2F0ZSxcblxuICAgICAgICAgICAgICAgIC8vIExvY2FsIGRvY3VtZW50IHZhcnNcbiAgICAgICAgICAgICAgICBzZXREb2N1bWVudCxcbiAgICAgICAgICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgICAgICAgICBkb2NFbGVtLFxuICAgICAgICAgICAgICAgIGRvY3VtZW50SXNIVE1MLFxuICAgICAgICAgICAgICAgIHJidWdneVFTQSxcbiAgICAgICAgICAgICAgICByYnVnZ3lNYXRjaGVzLFxuICAgICAgICAgICAgICAgIG1hdGNoZXMsXG4gICAgICAgICAgICAgICAgY29udGFpbnMsXG5cbiAgICAgICAgICAgICAgICAvLyBJbnN0YW5jZS1zcGVjaWZpYyBkYXRhXG4gICAgICAgICAgICAgICAgZXhwYW5kbyA9IFwic2l6emxlXCIgKyAxICogbmV3IERhdGUoKSxcbiAgICAgICAgICAgICAgICBwcmVmZXJyZWREb2MgPSB3aW5kb3cuZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgZGlycnVucyA9IDAsXG4gICAgICAgICAgICAgICAgZG9uZSA9IDAsXG4gICAgICAgICAgICAgICAgY2xhc3NDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG4gICAgICAgICAgICAgICAgdG9rZW5DYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG4gICAgICAgICAgICAgICAgY29tcGlsZXJDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG4gICAgICAgICAgICAgICAgc29ydE9yZGVyID0gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGEgPT09IGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0R1cGxpY2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIEluc3RhbmNlIG1ldGhvZHNcbiAgICAgICAgICAgICAgICBoYXNPd24gPSAoe30pLmhhc093blByb3BlcnR5LFxuICAgICAgICAgICAgICAgIGFyciA9IFtdLFxuICAgICAgICAgICAgICAgIHBvcCA9IGFyci5wb3AsXG4gICAgICAgICAgICAgICAgcHVzaF9uYXRpdmUgPSBhcnIucHVzaCxcbiAgICAgICAgICAgICAgICBwdXNoID0gYXJyLnB1c2gsXG4gICAgICAgICAgICAgICAgc2xpY2UgPSBhcnIuc2xpY2UsXG4gICAgICAgICAgICAgICAgLy8gVXNlIGEgc3RyaXBwZWQtZG93biBpbmRleE9mIGFzIGl0J3MgZmFzdGVyIHRoYW4gbmF0aXZlXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9qc3BlcmYuY29tL3Rob3ItaW5kZXhvZi12cy1mb3IvNVxuICAgICAgICAgICAgICAgIGluZGV4T2YgPSBmdW5jdGlvbiAobGlzdCwgZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RbaV0gPT09IGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIGJvb2xlYW5zID0gXCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLFxuXG4gICAgICAgICAgICAgICAgLy8gUmVndWxhciBleHByZXNzaW9uc1xuXG4gICAgICAgICAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1zZWxlY3RvcnMvI3doaXRlc3BhY2VcbiAgICAgICAgICAgICAgICB3aGl0ZXNwYWNlID0gXCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLFxuXG4gICAgICAgICAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI3ZhbHVlLWRlZi1pZGVudGlmaWVyXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllciA9IFwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFwwLVxcXFx4YTBdKStcIixcblxuICAgICAgICAgICAgICAgIC8vIEF0dHJpYnV0ZSBzZWxlY3RvcnM6IGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jYXR0cmlidXRlLXNlbGVjdG9yc1xuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgPSBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFwiICsgaWRlbnRpZmllciArIFwiKSg/OlwiICsgd2hpdGVzcGFjZSArXG4gICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhdG9yIChjYXB0dXJlIDIpXG4gICAgICAgICAgICAgICAgICAgIFwiKihbKl4kfCF+XT89KVwiICsgd2hpdGVzcGFjZSArXG4gICAgICAgICAgICAgICAgICAgIC8vIFwiQXR0cmlidXRlIHZhbHVlcyBtdXN0IGJlIENTUyBpZGVudGlmaWVycyBbY2FwdHVyZSA1XSBvciBzdHJpbmdzIFtjYXB0dXJlIDMgb3IgY2FwdHVyZSA0XVwiXG4gICAgICAgICAgICAgICAgICAgIFwiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIgKyBpZGVudGlmaWVyICsgXCIpKXwpXCIgKyB3aGl0ZXNwYWNlICtcbiAgICAgICAgICAgICAgICAgICAgXCIqXFxcXF1cIixcblxuICAgICAgICAgICAgICAgIHBzZXVkb3MgPSBcIjooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XFxcXCgoXCIgK1xuICAgICAgICAgICAgICAgICAgICAvLyBUbyByZWR1Y2UgdGhlIG51bWJlciBvZiBzZWxlY3RvcnMgbmVlZGluZyB0b2tlbml6ZSBpbiB0aGUgcHJlRmlsdGVyLCBwcmVmZXIgYXJndW1lbnRzOlxuICAgICAgICAgICAgICAgICAgICAvLyAxLiBxdW90ZWQgKGNhcHR1cmUgMzsgY2FwdHVyZSA0IG9yIGNhcHR1cmUgNSlcbiAgICAgICAgICAgICAgICAgICAgXCIoJygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwiKXxcIiArXG4gICAgICAgICAgICAgICAgICAgIC8vIDIuIHNpbXBsZSAoY2FwdHVyZSA2KVxuICAgICAgICAgICAgICAgICAgICBcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIiArIGF0dHJpYnV0ZXMgKyBcIikqKXxcIiArXG4gICAgICAgICAgICAgICAgICAgIC8vIDMuIGFueXRoaW5nIGVsc2UgKGNhcHR1cmUgMilcbiAgICAgICAgICAgICAgICAgICAgXCIuKlwiICtcbiAgICAgICAgICAgICAgICAgICAgXCIpXFxcXCl8KVwiLFxuXG4gICAgICAgICAgICAgICAgLy8gTGVhZGluZyBhbmQgbm9uLWVzY2FwZWQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgY2FwdHVyaW5nIHNvbWUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycyBwcmVjZWRpbmcgdGhlIGxhdHRlclxuICAgICAgICAgICAgICAgIHJ3aGl0ZXNwYWNlID0gbmV3IFJlZ0V4cCh3aGl0ZXNwYWNlICsgXCIrXCIsIFwiZ1wiKSxcbiAgICAgICAgICAgICAgICBydHJpbSA9IG5ldyBSZWdFeHAoXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiICsgd2hpdGVzcGFjZSArIFwiKyRcIiwgXCJnXCIpLFxuXG4gICAgICAgICAgICAgICAgcmNvbW1hID0gbmV3IFJlZ0V4cChcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiosXCIgKyB3aGl0ZXNwYWNlICsgXCIqXCIpLFxuICAgICAgICAgICAgICAgIHJjb21iaW5hdG9ycyA9IG5ldyBSZWdFeHAoXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFs+K35dfFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgd2hpdGVzcGFjZSArIFwiKlwiKSxcblxuICAgICAgICAgICAgICAgIHJhdHRyaWJ1dGVRdW90ZXMgPSBuZXcgUmVnRXhwKFwiPVwiICsgd2hpdGVzcGFjZSArIFwiKihbXlxcXFxdJ1xcXCJdKj8pXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXF1cIiwgXCJnXCIpLFxuXG4gICAgICAgICAgICAgICAgcnBzZXVkbyA9IG5ldyBSZWdFeHAocHNldWRvcyksXG4gICAgICAgICAgICAgICAgcmlkZW50aWZpZXIgPSBuZXcgUmVnRXhwKFwiXlwiICsgaWRlbnRpZmllciArIFwiJFwiKSxcblxuICAgICAgICAgICAgICAgIG1hdGNoRXhwciA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJJRFwiOiBuZXcgUmVnRXhwKFwiXiMoXCIgKyBpZGVudGlmaWVyICsgXCIpXCIpLFxuICAgICAgICAgICAgICAgICAgICBcIkNMQVNTXCI6IG5ldyBSZWdFeHAoXCJeXFxcXC4oXCIgKyBpZGVudGlmaWVyICsgXCIpXCIpLFxuICAgICAgICAgICAgICAgICAgICBcIlRBR1wiOiBuZXcgUmVnRXhwKFwiXihcIiArIGlkZW50aWZpZXIgKyBcInxbKl0pXCIpLFxuICAgICAgICAgICAgICAgICAgICBcIkFUVFJcIjogbmV3IFJlZ0V4cChcIl5cIiArIGF0dHJpYnV0ZXMpLFxuICAgICAgICAgICAgICAgICAgICBcIlBTRVVET1wiOiBuZXcgUmVnRXhwKFwiXlwiICsgcHNldWRvcyksXG4gICAgICAgICAgICAgICAgICAgIFwiQ0hJTERcIjogbmV3IFJlZ0V4cChcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIgKyB3aGl0ZXNwYWNlICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86KFsrLV18KVwiICsgd2hpdGVzcGFjZSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiooXFxcXGQrKXwpKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfClcIiwgXCJpXCIpLFxuICAgICAgICAgICAgICAgICAgICBcImJvb2xcIjogbmV3IFJlZ0V4cChcIl4oPzpcIiArIGJvb2xlYW5zICsgXCIpJFwiLCBcImlcIiksXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciB1c2UgaW4gbGlicmFyaWVzIGltcGxlbWVudGluZyAuaXMoKVxuICAgICAgICAgICAgICAgICAgICAvLyBXZSB1c2UgdGhpcyBmb3IgUE9TIG1hdGNoaW5nIGluIGBzZWxlY3RgXG4gICAgICAgICAgICAgICAgICAgIFwibmVlZHNDb250ZXh0XCI6IG5ldyBSZWdFeHAoXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlc3BhY2UgKyBcIiooKD86LVxcXFxkKT9cXFxcZCopXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXCl8KSg/PVteLV18JClcIiwgXCJpXCIpXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHJpbnB1dHMgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuICAgICAgICAgICAgICAgIHJoZWFkZXIgPSAvXmhcXGQkL2ksXG5cbiAgICAgICAgICAgICAgICBybmF0aXZlID0gL15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxcblxuICAgICAgICAgICAgICAgIC8vIEVhc2lseS1wYXJzZWFibGUvcmV0cmlldmFibGUgSUQgb3IgVEFHIG9yIENMQVNTIHNlbGVjdG9yc1xuICAgICAgICAgICAgICAgIHJxdWlja0V4cHIgPSAvXig/OiMoW1xcdy1dKyl8KFxcdyspfFxcLihbXFx3LV0rKSkkLyxcblxuICAgICAgICAgICAgICAgIHJzaWJsaW5nID0gL1srfl0vLFxuXG4gICAgICAgICAgICAgICAgLy8gQ1NTIGVzY2FwZXNcbiAgICAgICAgICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9DU1MyMS9zeW5kYXRhLmh0bWwjZXNjYXBlZC1jaGFyYWN0ZXJzXG4gICAgICAgICAgICAgICAgcnVuZXNjYXBlID0gbmV3IFJlZ0V4cChcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiICsgd2hpdGVzcGFjZSArIFwiP3woXCIgKyB3aGl0ZXNwYWNlICsgXCIpfC4pXCIsIFwiaWdcIiksXG4gICAgICAgICAgICAgICAgZnVuZXNjYXBlID0gZnVuY3Rpb24gKF8sIGVzY2FwZWQsIGVzY2FwZWRXaGl0ZXNwYWNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoaWdoID0gXCIweFwiICsgZXNjYXBlZCAtIDB4MTAwMDA7XG4gICAgICAgICAgICAgICAgICAgIC8vIE5hTiBtZWFucyBub24tY29kZXBvaW50XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEZpcmVmb3g8MjRcbiAgICAgICAgICAgICAgICAgICAgLy8gV29ya2Fyb3VuZCBlcnJvbmVvdXMgbnVtZXJpYyBpbnRlcnByZXRhdGlvbiBvZiArXCIweFwiXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoaWdoICE9PSBoaWdoIHx8IGVzY2FwZWRXaGl0ZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGVzY2FwZWQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgaGlnaCA8IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJNUCBjb2RlcG9pbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKGhpZ2ggKyAweDEwMDAwKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcGxlbWVudGFsIFBsYW5lIGNvZGVwb2ludCAoc3Vycm9nYXRlIHBhaXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShoaWdoID4+IDEwIHwgMHhEODAwLCBoaWdoICYgMHgzRkYgfCAweERDMDApO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAvLyBDU1Mgc3RyaW5nL2lkZW50aWZpZXIgc2VyaWFsaXphdGlvblxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS8jY29tbW9uLXNlcmlhbGl6aW5nLWlkaW9tc1xuICAgICAgICAgICAgICAgIHJjc3Nlc2NhcGUgPSAvKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXDAtXFx4MWZcXHg3Zi1cXHVGRkZGXFx3LV0vZyxcbiAgICAgICAgICAgICAgICBmY3NzZXNjYXBlID0gZnVuY3Rpb24gKGNoLCBhc0NvZGVQb2ludCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXNDb2RlUG9pbnQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVSswMDAwIE5VTEwgYmVjb21lcyBVK0ZGRkQgUkVQTEFDRU1FTlQgQ0hBUkFDVEVSXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2ggPT09IFwiXFwwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcXHVGRkZEXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbnRyb2wgY2hhcmFjdGVycyBhbmQgKGRlcGVuZGVudCB1cG9uIHBvc2l0aW9uKSBudW1iZXJzIGdldCBlc2NhcGVkIGFzIGNvZGUgcG9pbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2guc2xpY2UoMCwgLTEpICsgXCJcXFxcXCIgKyBjaC5jaGFyQ29kZUF0KGNoLmxlbmd0aCAtIDEpLnRvU3RyaW5nKDE2KSArIFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXIgcG90ZW50aWFsbHktc3BlY2lhbCBBU0NJSSBjaGFyYWN0ZXJzIGdldCBiYWNrc2xhc2gtZXNjYXBlZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyBjaDtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gVXNlZCBmb3IgaWZyYW1lc1xuICAgICAgICAgICAgICAgIC8vIFNlZSBzZXREb2N1bWVudCgpXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZpbmcgdGhlIGZ1bmN0aW9uIHdyYXBwZXIgY2F1c2VzIGEgXCJQZXJtaXNzaW9uIERlbmllZFwiXG4gICAgICAgICAgICAgICAgLy8gZXJyb3IgaW4gSUVcbiAgICAgICAgICAgICAgICB1bmxvYWRIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXREb2N1bWVudCgpO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBkaXNhYmxlZEFuY2VzdG9yID0gYWRkQ29tYmluYXRvcihcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmRpc2FibGVkID09PSB0cnVlICYmIChcImZvcm1cIiBpbiBlbGVtIHx8IFwibGFiZWxcIiBpbiBlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge2RpcjogXCJwYXJlbnROb2RlXCIsIG5leHQ6IFwibGVnZW5kXCJ9XG4gICAgICAgICAgICAgICAgKTtcblxuLy8gT3B0aW1pemUgZm9yIHB1c2guYXBwbHkoIF8sIE5vZGVMaXN0IClcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcHVzaC5hcHBseShcbiAgICAgICAgICAgICAgICAgICAgKGFyciA9IHNsaWNlLmNhbGwocHJlZmVycmVkRG9jLmNoaWxkTm9kZXMpKSxcbiAgICAgICAgICAgICAgICAgICAgcHJlZmVycmVkRG9jLmNoaWxkTm9kZXNcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQ8NC4wXG4gICAgICAgICAgICAgICAgLy8gRGV0ZWN0IHNpbGVudGx5IGZhaWxpbmcgcHVzaC5hcHBseVxuICAgICAgICAgICAgICAgIGFycltwcmVmZXJyZWREb2MuY2hpbGROb2Rlcy5sZW5ndGhdLm5vZGVUeXBlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHB1c2ggPSB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5OiBhcnIubGVuZ3RoID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGV2ZXJhZ2Ugc2xpY2UgaWYgcG9zc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICh0YXJnZXQsIGVscykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1c2hfbmF0aXZlLmFwcGx5KHRhcmdldCwgc2xpY2UuY2FsbChlbHMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRTw5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgYXBwZW5kIGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFyZ2V0LCBlbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaiA9IHRhcmdldC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbid0IHRydXN0IE5vZGVMaXN0Lmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgodGFyZ2V0W2orK10gPSBlbHNbaSsrXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Lmxlbmd0aCA9IGogLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIFNpenpsZShzZWxlY3RvciwgY29udGV4dCwgcmVzdWx0cywgc2VlZCkge1xuICAgICAgICAgICAgICAgIHZhciBtLCBpLCBlbGVtLCBuaWQsIG1hdGNoLCBncm91cHMsIG5ld1NlbGVjdG9yLFxuICAgICAgICAgICAgICAgICAgICBuZXdDb250ZXh0ID0gY29udGV4dCAmJiBjb250ZXh0Lm93bmVyRG9jdW1lbnQsXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gbm9kZVR5cGUgZGVmYXVsdHMgdG8gOSwgc2luY2UgY29udGV4dCBkZWZhdWx0cyB0byBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICBub2RlVHlwZSA9IGNvbnRleHQgPyBjb250ZXh0Lm5vZGVUeXBlIDogOTtcblxuICAgICAgICAgICAgICAgIHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdO1xuXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIGVhcmx5IGZyb20gY2FsbHMgd2l0aCBpbnZhbGlkIHNlbGVjdG9yIG9yIGNvbnRleHRcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiIHx8ICFzZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBub2RlVHlwZSAhPT0gMSAmJiBub2RlVHlwZSAhPT0gOSAmJiBub2RlVHlwZSAhPT0gMTEpIHtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUcnkgdG8gc2hvcnRjdXQgZmluZCBvcGVyYXRpb25zIChhcyBvcHBvc2VkIHRvIGZpbHRlcnMpIGluIEhUTUwgZG9jdW1lbnRzXG4gICAgICAgICAgICAgICAgaWYgKCFzZWVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKChjb250ZXh0ID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBwcmVmZXJyZWREb2MpICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RG9jdW1lbnQoY29udGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50SXNIVE1MKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHRoZSBzZWxlY3RvciBpcyBzdWZmaWNpZW50bHkgc2ltcGxlLCB0cnkgdXNpbmcgYSBcImdldCpCeSpcIiBET00gbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAoZXhjZXB0aW5nIERvY3VtZW50RnJhZ21lbnQgY29udGV4dCwgd2hlcmUgdGhlIG1ldGhvZHMgZG9uJ3QgZXhpc3QpXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVR5cGUgIT09IDExICYmIChtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyhzZWxlY3RvcikpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJRCBzZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobSA9IG1hdGNoWzFdKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvY3VtZW50IGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKG0pKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUsIE9wZXJhLCBXZWJraXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBpZGVudGlmeSB2ZXJzaW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldEVsZW1lbnRCeUlkIGNhbiBtYXRjaCBlbGVtZW50cyBieSBuYW1lIGluc3RlYWQgb2YgSURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5pZCA9PT0gbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVsZW1lbnQgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSwgT3BlcmEsIFdlYmtpdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogaWRlbnRpZnkgdmVyc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGdldEVsZW1lbnRCeUlkIGNhbiBtYXRjaCBlbGVtZW50cyBieSBuYW1lIGluc3RlYWQgb2YgSURcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdDb250ZXh0ICYmIChlbGVtID0gbmV3Q29udGV4dC5nZXRFbGVtZW50QnlJZChtKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWlucyhjb250ZXh0LCBlbGVtKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uaWQgPT09IG0pIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaChlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFR5cGUgc2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoWzJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1c2guYXBwbHkocmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZShzZWxlY3RvcikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGFzcyBzZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKG0gPSBtYXRjaFszXSkgJiYgc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB1c2guYXBwbHkocmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKG0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUYWtlIGFkdmFudGFnZSBvZiBxdWVyeVNlbGVjdG9yQWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3VwcG9ydC5xc2EgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhY29tcGlsZXJDYWNoZVtzZWxlY3RvciArIFwiIFwiXSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICghcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdChzZWxlY3RvcikpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld1NlbGVjdG9yID0gc2VsZWN0b3I7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcVNBIGxvb2tzIG91dHNpZGUgRWxlbWVudCBjb250ZXh0LCB3aGljaCBpcyBub3Qgd2hhdCB3ZSB3YW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoYW5rcyB0byBBbmRyZXcgRHVwb250IGZvciB0aGlzIHdvcmthcm91bmQgdGVjaG5pcXVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeGNsdWRlIG9iamVjdCBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FwdHVyZSB0aGUgY29udGV4dCBJRCwgc2V0dGluZyBpdCBmaXJzdCBpZiBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChuaWQgPSBjb250ZXh0LmdldEF0dHJpYnV0ZShcImlkXCIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlkID0gbmlkLnJlcGxhY2UocmNzc2VzY2FwZSwgZmNzc2VzY2FwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIChuaWQgPSBleHBhbmRvKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmVmaXggZXZlcnkgc2VsZWN0b3IgaW4gdGhlIGxpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzID0gdG9rZW5pemUoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gZ3JvdXBzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBzW2ldID0gXCIjXCIgKyBuaWQgKyBcIiBcIiArIHRvU2VsZWN0b3IoZ3JvdXBzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTZWxlY3RvciA9IGdyb3Vwcy5qb2luKFwiLFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHBhbmQgY29udGV4dCBmb3Igc2libGluZyBzZWxlY3RvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29udGV4dCA9IHJzaWJsaW5nLnRlc3Qoc2VsZWN0b3IpICYmIHRlc3RDb250ZXh0KGNvbnRleHQucGFyZW50Tm9kZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5ld1NlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXNoLmFwcGx5KHJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKG5ld1NlbGVjdG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChxc2FFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5pZCA9PT0gZXhwYW5kbykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBbGwgb3RoZXJzXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdChzZWxlY3Rvci5yZXBsYWNlKHJ0cmltLCBcIiQxXCIpLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBDcmVhdGUga2V5LXZhbHVlIGNhY2hlcyBvZiBsaW1pdGVkIHNpemVcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtmdW5jdGlvbihzdHJpbmcsIG9iamVjdCl9IFJldHVybnMgdGhlIE9iamVjdCBkYXRhIGFmdGVyIHN0b3JpbmcgaXQgb24gaXRzZWxmIHdpdGhcbiAgICAgICAgICAgICAqICAgIHByb3BlcnR5IG5hbWUgdGhlIChzcGFjZS1zdWZmaXhlZCkgc3RyaW5nIGFuZCAoaWYgdGhlIGNhY2hlIGlzIGxhcmdlciB0aGFuIEV4cHIuY2FjaGVMZW5ndGgpXG4gICAgICAgICAgICAgKiAgICBkZWxldGluZyB0aGUgb2xkZXN0IGVudHJ5XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0gW107XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjYWNoZShrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSAoa2V5ICsgXCIgXCIpIHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoIG5hdGl2ZSBwcm90b3R5cGUgcHJvcGVydGllcyAoc2VlIElzc3VlICMxNTcpXG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXlzLnB1c2goa2V5ICsgXCIgXCIpID4gRXhwci5jYWNoZUxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25seSBrZWVwIHRoZSBtb3N0IHJlY2VudCBlbnRyaWVzXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY2FjaGVba2V5cy5zaGlmdCgpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKGNhY2hlW2tleSArIFwiIFwiXSA9IHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2FjaGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogTWFyayBhIGZ1bmN0aW9uIGZvciBzcGVjaWFsIHVzZSBieSBTaXp6bGVcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtYXJrXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hcmtGdW5jdGlvbihmbikge1xuICAgICAgICAgICAgICAgIGZuW2V4cGFuZG9dID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogU3VwcG9ydCB0ZXN0aW5nIHVzaW5nIGFuIGVsZW1lbnRcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFBhc3NlZCB0aGUgY3JlYXRlZCBlbGVtZW50IGFuZCByZXR1cm5zIGEgYm9vbGVhbiByZXN1bHRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gYXNzZXJ0KGZuKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICEhZm4oZWwpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBmcm9tIGl0cyBwYXJlbnQgYnkgZGVmYXVsdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZWwucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gcmVsZWFzZSBtZW1vcnkgaW4gSUVcbiAgICAgICAgICAgICAgICAgICAgZWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBZGRzIHRoZSBzYW1lIGhhbmRsZXIgZm9yIGFsbCBvZiB0aGUgc3BlY2lmaWVkIGF0dHJzXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gYXR0cnMgUGlwZS1zZXBhcmF0ZWQgbGlzdCBvZiBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBtZXRob2QgdGhhdCB3aWxsIGJlIGFwcGxpZWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gYWRkSGFuZGxlKGF0dHJzLCBoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IGF0dHJzLnNwbGl0KFwifFwiKSxcbiAgICAgICAgICAgICAgICAgICAgaSA9IGFyci5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIEV4cHIuYXR0ckhhbmRsZVthcnJbaV1dID0gaGFuZGxlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2tzIGRvY3VtZW50IG9yZGVyIG9mIHR3byBzaWJsaW5nc1xuICAgICAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBhXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGJcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtOdW1iZXJ9IFJldHVybnMgbGVzcyB0aGFuIDAgaWYgYSBwcmVjZWRlcyBiLCBncmVhdGVyIHRoYW4gMCBpZiBhIGZvbGxvd3MgYlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBzaWJsaW5nQ2hlY2soYSwgYikge1xuICAgICAgICAgICAgICAgIHZhciBjdXIgPSBiICYmIGEsXG4gICAgICAgICAgICAgICAgICAgIGRpZmYgPSBjdXIgJiYgYS5ub2RlVHlwZSA9PT0gMSAmJiBiLm5vZGVUeXBlID09PSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBhLnNvdXJjZUluZGV4IC0gYi5zb3VyY2VJbmRleDtcblxuICAgICAgICAgICAgICAgIC8vIFVzZSBJRSBzb3VyY2VJbmRleCBpZiBhdmFpbGFibGUgb24gYm90aCBub2Rlc1xuICAgICAgICAgICAgICAgIGlmIChkaWZmKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkaWZmO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGIgZm9sbG93cyBhXG4gICAgICAgICAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGN1ciA9IGN1ci5uZXh0U2libGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXIgPT09IGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYSA/IDEgOiAtMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGlucHV0IHR5cGVzXG4gICAgICAgICAgICAgKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVJbnB1dFBzZXVkbyh0eXBlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgYnV0dG9uc1xuICAgICAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlQnV0dG9uUHNldWRvKHR5cGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAobmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCIpICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgOmVuYWJsZWQvOmRpc2FibGVkXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0Jvb2xlYW59IGRpc2FibGVkIHRydWUgZm9yIDpkaXNhYmxlZDsgZmFsc2UgZm9yIDplbmFibGVkXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZURpc2FibGVkUHNldWRvKGRpc2FibGVkKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBLbm93biA6ZGlzYWJsZWQgZmFsc2UgcG9zaXRpdmVzOiBmaWVsZHNldFtkaXNhYmxlZF0gPiBsZWdlbmQ6bnRoLW9mLXR5cGUobisyKSA6Y2FuLWRpc2FibGVcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IGNlcnRhaW4gZWxlbWVudHMgY2FuIG1hdGNoIDplbmFibGVkIG9yIDpkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zY3JpcHRpbmcuaHRtbCNzZWxlY3Rvci1lbmFibGVkXG4gICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NjcmlwdGluZy5odG1sI3NlbGVjdG9yLWRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIGlmIChcImZvcm1cIiBpbiBlbGVtKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGZvciBpbmhlcml0ZWQgZGlzYWJsZWRuZXNzIG9uIHJlbGV2YW50IG5vbi1kaXNhYmxlZCBlbGVtZW50czpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICogbGlzdGVkIGZvcm0tYXNzb2NpYXRlZCBlbGVtZW50cyBpbiBhIGRpc2FibGVkIGZpZWxkc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY2F0ZWdvcnktbGlzdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY29uY2VwdC1mZS1kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBvcHRpb24gZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NvbmNlcHQtb3B0aW9uLWRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbGwgc3VjaCBlbGVtZW50cyBoYXZlIGEgXCJmb3JtXCIgcHJvcGVydHkuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5wYXJlbnROb2RlICYmIGVsZW0uZGlzYWJsZWQgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPcHRpb24gZWxlbWVudHMgZGVmZXIgdG8gYSBwYXJlbnQgb3B0Z3JvdXAgaWYgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcImxhYmVsXCIgaW4gZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXCJsYWJlbFwiIGluIGVsZW0ucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ucGFyZW50Tm9kZS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA2IC0gMTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIGlzRGlzYWJsZWQgc2hvcnRjdXQgcHJvcGVydHkgdG8gY2hlY2sgZm9yIGRpc2FibGVkIGZpZWxkc2V0IGFuY2VzdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmlzRGlzYWJsZWQgPT09IGRpc2FibGVkIHx8XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlcmUgdGhlcmUgaXMgbm8gaXNEaXNhYmxlZCwgY2hlY2sgbWFudWFsbHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLyoganNoaW50IC1XMDE4ICovXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uaXNEaXNhYmxlZCAhPT0gIWRpc2FibGVkICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkQW5jZXN0b3IoZWxlbSkgPT09IGRpc2FibGVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0byB3aW5ub3cgb3V0IGVsZW1lbnRzIHRoYXQgY2FuJ3QgYmUgZGlzYWJsZWQgYmVmb3JlIHRydXN0aW5nIHRoZSBkaXNhYmxlZCBwcm9wZXJ0eS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNvbWUgdmljdGltcyBnZXQgY2F1Z2h0IGluIG91ciBuZXQgKGxhYmVsLCBsZWdlbmQsIG1lbnUsIHRyYWNrKSwgYnV0IGl0IHNob3VsZG4ndFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXZlbiBleGlzdCBvbiB0aGVtLCBsZXQgYWxvbmUgaGF2ZSBhIGJvb2xlYW4gdmFsdWUuXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXCJsYWJlbFwiIGluIGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmRpc2FibGVkID09PSBkaXNhYmxlZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbWFpbmluZyBlbGVtZW50cyBhcmUgbmVpdGhlciA6ZW5hYmxlZCBub3IgOmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgcG9zaXRpb25hbHNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZm4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChhcmd1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICBhcmd1bWVudCA9ICthcmd1bWVudDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcmtGdW5jdGlvbihmdW5jdGlvbiAoc2VlZCwgbWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGosXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hJbmRleGVzID0gZm4oW10sIHNlZWQubGVuZ3RoLCBhcmd1bWVudCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IG1hdGNoSW5kZXhlcy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hdGNoIGVsZW1lbnRzIGZvdW5kIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhlc1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWVkWyhqID0gbWF0Y2hJbmRleGVzW2ldKV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VlZFtqXSA9ICEobWF0Y2hlc1tqXSA9IHNlZWRbal0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ2hlY2tzIGEgbm9kZSBmb3IgdmFsaWRpdHkgYXMgYSBTaXp6bGUgY29udGV4dFxuICAgICAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fE9iamVjdD19IGNvbnRleHRcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtFbGVtZW50fE9iamVjdHxCb29sZWFufSBUaGUgaW5wdXQgbm9kZSBpZiBhY2NlcHRhYmxlLCBvdGhlcndpc2UgYSBmYWxzeSB2YWx1ZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBmdW5jdGlvbiB0ZXN0Q29udGV4dChjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29udGV4dDtcbiAgICAgICAgICAgIH1cblxuLy8gRXhwb3NlIHN1cHBvcnQgdmFycyBmb3IgY29udmVuaWVuY2VcbiAgICAgICAgICAgIHN1cHBvcnQgPSBTaXp6bGUuc3VwcG9ydCA9IHt9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIERldGVjdHMgWE1MIG5vZGVzXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0fSBlbGVtIEFuIGVsZW1lbnQgb3IgYSBkb2N1bWVudFxuICAgICAgICAgICAgICogQHJldHVybnMge0Jvb2xlYW59IFRydWUgaWZmIGVsZW0gaXMgYSBub24tSFRNTCBYTUwgbm9kZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBpc1hNTCA9IFNpenpsZS5pc1hNTCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgLy8gZG9jdW1lbnRFbGVtZW50IGlzIHZlcmlmaWVkIGZvciBjYXNlcyB3aGVyZSBpdCBkb2Vzbid0IHlldCBleGlzdFxuICAgICAgICAgICAgICAgIC8vIChzdWNoIGFzIGxvYWRpbmcgaWZyYW1lcyBpbiBJRSAtICM0ODMzKVxuICAgICAgICAgICAgICAgIHZhciBkb2N1bWVudEVsZW1lbnQgPSBlbGVtICYmIChlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSkuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiSFRNTFwiIDogZmFsc2U7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNldHMgZG9jdW1lbnQtcmVsYXRlZCB2YXJpYWJsZXMgb25jZSBiYXNlZCBvbiB0aGUgY3VycmVudCBkb2N1bWVudFxuICAgICAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gW2RvY10gQW4gZWxlbWVudCBvciBkb2N1bWVudCBvYmplY3QgdG8gdXNlIHRvIHNldCB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0RG9jdW1lbnQgPSBTaXp6bGUuc2V0RG9jdW1lbnQgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHZhciBoYXNDb21wYXJlLCBzdWJXaW5kb3csXG4gICAgICAgICAgICAgICAgICAgIGRvYyA9IG5vZGUgPyBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZSA6IHByZWZlcnJlZERvYztcblxuICAgICAgICAgICAgICAgIC8vIFJldHVybiBlYXJseSBpZiBkb2MgaXMgaW52YWxpZCBvciBhbHJlYWR5IHNlbGVjdGVkXG4gICAgICAgICAgICAgICAgaWYgKGRvYyA9PT0gZG9jdW1lbnQgfHwgZG9jLm5vZGVUeXBlICE9PSA5IHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgZ2xvYmFsIHZhcmlhYmxlc1xuICAgICAgICAgICAgICAgIGRvY3VtZW50ID0gZG9jO1xuICAgICAgICAgICAgICAgIGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnRJc0hUTUwgPSAhaXNYTUwoZG9jdW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgOS0xMSwgRWRnZVxuICAgICAgICAgICAgICAgIC8vIEFjY2Vzc2luZyBpZnJhbWUgZG9jdW1lbnRzIGFmdGVyIHVubG9hZCB0aHJvd3MgXCJwZXJtaXNzaW9uIGRlbmllZFwiIGVycm9ycyAoalF1ZXJ5ICMxMzkzNilcbiAgICAgICAgICAgICAgICBpZiAocHJlZmVycmVkRG9jICE9PSBkb2N1bWVudCAmJlxuICAgICAgICAgICAgICAgICAgICAoc3ViV2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcpICYmIHN1YldpbmRvdy50b3AgIT09IHN1YldpbmRvdykge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDExLCBFZGdlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdWJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmxvYWRcIiwgdW5sb2FkSGFuZGxlciwgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA5IC0gMTAgb25seVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN1YldpbmRvdy5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3ViV2luZG93LmF0dGFjaEV2ZW50KFwib251bmxvYWRcIiwgdW5sb2FkSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBBdHRyaWJ1dGVzXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFPDhcbiAgICAgICAgICAgICAgICAvLyBWZXJpZnkgdGhhdCBnZXRBdHRyaWJ1dGUgcmVhbGx5IHJldHVybnMgYXR0cmlidXRlcyBhbmQgbm90IHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyAoZXhjZXB0aW5nIElFOCBib29sZWFucylcbiAgICAgICAgICAgICAgICBzdXBwb3J0LmF0dHJpYnV0ZXMgPSBhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmNsYXNzTmFtZSA9IFwiaVwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWVsLmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8qIGdldEVsZW1lbnQocylCeSpcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpIHJldHVybnMgb25seSBlbGVtZW50c1xuICAgICAgICAgICAgICAgIHN1cHBvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoXCJcIikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRTw5XG4gICAgICAgICAgICAgICAgc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gcm5hdGl2ZS50ZXN0KGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUpO1xuXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUU8MTBcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBnZXRFbGVtZW50QnlJZCByZXR1cm5zIGVsZW1lbnRzIGJ5IG5hbWVcbiAgICAgICAgICAgICAgICAvLyBUaGUgYnJva2VuIGdldEVsZW1lbnRCeUlkIG1ldGhvZHMgZG9uJ3QgcGljayB1cCBwcm9ncmFtbWF0aWNhbGx5LXNldCBuYW1lcyxcbiAgICAgICAgICAgICAgICAvLyBzbyB1c2UgYSByb3VuZGFib3V0IGdldEVsZW1lbnRzQnlOYW1lIHRlc3RcbiAgICAgICAgICAgICAgICBzdXBwb3J0LmdldEJ5SWQgPSBhc3NlcnQoZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvY0VsZW0uYXBwZW5kQ2hpbGQoZWwpLmlkID0gZXhwYW5kbztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSB8fCAhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoZXhwYW5kbykubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gSUQgZmlsdGVyIGFuZCBmaW5kXG4gICAgICAgICAgICAgICAgaWYgKHN1cHBvcnQuZ2V0QnlJZCkge1xuICAgICAgICAgICAgICAgICAgICBFeHByLmZpbHRlcltcIklEXCJdID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cklkID0gaWQucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gYXR0cklkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgRXhwci5maW5kW1wiSURcIl0gPSBmdW5jdGlvbiAoaWQsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0gPyBbZWxlbV0gOiBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBFeHByLmZpbHRlcltcIklEXCJdID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXR0cklkID0gaWQucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZU5vZGUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gYXR0cklkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA2IC0gNyBvbmx5XG4gICAgICAgICAgICAgICAgICAgIC8vIGdldEVsZW1lbnRCeUlkIGlzIG5vdCByZWxpYWJsZSBhcyBhIGZpbmQgc2hvcnRjdXRcbiAgICAgICAgICAgICAgICAgICAgRXhwci5maW5kW1wiSURcIl0gPSBmdW5jdGlvbiAoaWQsIGNvbnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlLCBpLCBlbGVtcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0pIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBWZXJpZnkgdGhlIGlkIGF0dHJpYnV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKFwiaWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlICYmIG5vZGUudmFsdWUgPT09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2VsZW1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmFsbCBiYWNrIG9uIGdldEVsZW1lbnRzQnlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1zID0gY29udGV4dC5nZXRFbGVtZW50c0J5TmFtZShpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGVsZW0gPSBlbGVtc1tpKytdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW2VsZW1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRhZ1xuICAgICAgICAgICAgICAgIEV4cHIuZmluZFtcIlRBR1wiXSA9IHN1cHBvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgP1xuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFnLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9jdW1lbnRGcmFnbWVudCBub2RlcyBkb24ndCBoYXZlIGdFQlROXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQucXNhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCh0YWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IDpcblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAodGFnLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBCeSBoYXBweSBjb2luY2lkZW5jZSwgYSAoYnJva2VuKSBnRUJUTiBhcHBlYXJzIG9uIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgdG9vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmlsdGVyIG91dCBwb3NzaWJsZSBjb21tZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGVsZW0gPSByZXN1bHRzW2krK10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXAucHVzaChlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0bXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIENsYXNzXG4gICAgICAgICAgICAgICAgRXhwci5maW5kW1wiQ0xBU1NcIl0gPSBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiYgZnVuY3Rpb24gKGNsYXNzTmFtZSwgY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8qIFFTQS9tYXRjaGVzU2VsZWN0b3Jcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4gICAgICAgICAgICAgICAgLy8gUVNBIGFuZCBtYXRjaGVzU2VsZWN0b3Igc3VwcG9ydFxuXG4gICAgICAgICAgICAgICAgLy8gbWF0Y2hlc1NlbGVjdG9yKDphY3RpdmUpIHJlcG9ydHMgZmFsc2Ugd2hlbiB0cnVlIChJRTkvT3BlcmEgMTEuNSlcbiAgICAgICAgICAgICAgICByYnVnZ3lNYXRjaGVzID0gW107XG5cbiAgICAgICAgICAgICAgICAvLyBxU2EoOmZvY3VzKSByZXBvcnRzIGZhbHNlIHdoZW4gdHJ1ZSAoQ2hyb21lIDIxKVxuICAgICAgICAgICAgICAgIC8vIFdlIGFsbG93IHRoaXMgYmVjYXVzZSBvZiBhIGJ1ZyBpbiBJRTgvOSB0aGF0IHRocm93cyBhbiBlcnJvclxuICAgICAgICAgICAgICAgIC8vIHdoZW5ldmVyIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBpcyBhY2Nlc3NlZCBvbiBhbiBpZnJhbWVcbiAgICAgICAgICAgICAgICAvLyBTbywgd2UgYWxsb3cgOmZvY3VzIHRvIHBhc3MgdGhyb3VnaCBRU0EgYWxsIHRoZSB0aW1lIHRvIGF2b2lkIHRoZSBJRSBlcnJvclxuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTMzNzhcbiAgICAgICAgICAgICAgICByYnVnZ3lRU0EgPSBbXTtcblxuICAgICAgICAgICAgICAgIGlmICgoc3VwcG9ydC5xc2EgPSBybmF0aXZlLnRlc3QoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1aWxkIFFTQSByZWdleFxuICAgICAgICAgICAgICAgICAgICAvLyBSZWdleCBzdHJhdGVneSBhZG9wdGVkIGZyb20gRGllZ28gUGVyaW5pXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdCBpcyBzZXQgdG8gZW1wdHkgc3RyaW5nIG9uIHB1cnBvc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdG8gdGVzdCBJRSdzIHRyZWF0bWVudCBvZiBub3QgZXhwbGljaXRseVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2V0dGluZyBhIGJvb2xlYW4gY29udGVudCBhdHRyaWJ1dGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdHMgcHJlc2VuY2Ugc2hvdWxkIGJlIGVub3VnaFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEyMzU5XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2NFbGVtLmFwcGVuZENoaWxkKGVsKS5pbm5lckhUTUwgPSBcIjxhIGlkPSdcIiArIGV4cGFuZG8gKyBcIic+PC9hPlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxzZWxlY3QgaWQ9J1wiICsgZXhwYW5kbyArIFwiLVxcclxcXFwnIG1zYWxsb3djYXB0dXJlPScnPlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxvcHRpb24gc2VsZWN0ZWQ9Jyc+PC9vcHRpb24+PC9zZWxlY3Q+XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFOCwgT3BlcmEgMTEtMTIuMTZcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdGhpbmcgc2hvdWxkIGJlIHNlbGVjdGVkIHdoZW4gZW1wdHkgc3RyaW5ncyBmb2xsb3cgXj0gb3IgJD0gb3IgKj1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSB0ZXN0IGF0dHJpYnV0ZSBtdXN0IGJlIHVua25vd24gaW4gT3BlcmEgYnV0IFwic2FmZVwiIGZvciBXaW5SVFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9oaDQ2NTM4OC5hc3B4I2F0dHJpYnV0ZV9zZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwiWypeJF09XCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86Jyd8XFxcIlxcXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRThcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEJvb2xlYW4gYXR0cmlidXRlcyBhbmQgXCJ2YWx1ZVwiIGFyZSBub3QgdHJlYXRlZCBjb3JyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWwucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKig/OnZhbHVlfFwiICsgYm9vbGVhbnMgKyBcIilcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IENocm9tZTwyOSwgQW5kcm9pZDw0LjQsIFNhZmFyaTw3LjArLCBpT1M8Ny4wKywgUGhhbnRvbUpTPDEuOS44K1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW2lkfj1cIiArIGV4cGFuZG8gKyBcIi1dXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwifj1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlYmtpdC9PcGVyYSAtIDpjaGVja2VkIHNob3VsZCByZXR1cm4gc2VsZWN0ZWQgb3B0aW9uIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUU4IHRocm93cyBlcnJvciBoZXJlIGFuZCB3aWxsIG5vdCBzZWUgbGF0ZXIgdGVzdHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWwucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwiOmNoZWNrZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IFNhZmFyaSA4KywgaU9TIDgrXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM2ODUxXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbi1wYWdlIGBzZWxlY3RvciNpZCBzaWJsaW5nLWNvbWJpbmF0b3Igc2VsZWN0b3JgIGZhaWxzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCJhI1wiICsgZXhwYW5kbyArIFwiKypcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmJ1Z2d5UVNBLnB1c2goXCIuIy4rWyt+XVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgYXNzZXJ0KGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWwuaW5uZXJIVE1MID0gXCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjxzZWxlY3QgZGlzYWJsZWQ9J2Rpc2FibGVkJz48b3B0aW9uLz48L3NlbGVjdD5cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogV2luZG93cyA4IE5hdGl2ZSBBcHBzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdHlwZSBhbmQgbmFtZSBhdHRyaWJ1dGVzIGFyZSByZXN0cmljdGVkIGR1cmluZyAuaW5uZXJIVE1MIGFzc2lnbm1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5hcHBlbmRDaGlsZChpbnB1dCkuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcIkRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFOFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5mb3JjZSBjYXNlLXNlbnNpdGl2aXR5IG9mIG5hbWUgYXR0cmlidXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwibmFtZVwiICsgd2hpdGVzcGFjZSArIFwiKlsqXiR8IX5dPz1cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZGIDMuNSAtIDplbmFibGVkLzpkaXNhYmxlZCBhbmQgaGlkZGVuIGVsZW1lbnRzIChoaWRkZW4gZWxlbWVudHMgYXJlIHN0aWxsIGVuYWJsZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJRTggdGhyb3dzIGVycm9yIGhlcmUgYW5kIHdpbGwgbm90IHNlZSBsYXRlciB0ZXN0c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGggIT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYnVnZ3lRU0EucHVzaChcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRTktMTErXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJRSdzIDpkaXNhYmxlZCBzZWxlY3RvciBkb2VzIG5vdCBwaWNrIHVwIHRoZSBjaGlsZHJlbiBvZiBkaXNhYmxlZCBmaWVsZHNldHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY0VsZW0uYXBwZW5kQ2hpbGQoZWwpLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOmRpc2FibGVkXCIpLmxlbmd0aCAhPT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwiOmVuYWJsZWRcIiwgXCI6ZGlzYWJsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIDEwLTExIGRvZXMgbm90IHRocm93IG9uIHBvc3QtY29tbWEgaW52YWxpZCBwc2V1ZG9zXG4gICAgICAgICAgICAgICAgICAgICAgICBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJidWdneVFTQS5wdXNoKFwiLC4qOlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKChzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciA9IHJuYXRpdmUudGVzdCgobWF0Y2hlcyA9IGRvY0VsZW0ubWF0Y2hlcyB8fFxuICAgICAgICAgICAgICAgICAgICBkb2NFbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBkb2NFbGVtLm1vek1hdGNoZXNTZWxlY3RvciB8fFxuICAgICAgICAgICAgICAgICAgICBkb2NFbGVtLm9NYXRjaGVzU2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgZG9jRWxlbS5tc01hdGNoZXNTZWxlY3RvcikpKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHRvIHNlZSBpZiBpdCdzIHBvc3NpYmxlIHRvIGRvIG1hdGNoZXNTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb24gYSBkaXNjb25uZWN0ZWQgbm9kZSAoSUUgOSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2ggPSBtYXRjaGVzLmNhbGwoZWwsIFwiKlwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBzaG91bGQgZmFpbCB3aXRoIGFuIGV4Y2VwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2Vja28gZG9lcyBub3QgZXJyb3IsIHJldHVybnMgZmFsc2UgaW5zdGVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5jYWxsKGVsLCBcIltzIT0nJ106eFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJidWdneU1hdGNoZXMucHVzaChcIiE9XCIsIHBzZXVkb3MpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByYnVnZ3lRU0EgPSByYnVnZ3lRU0EubGVuZ3RoICYmIG5ldyBSZWdFeHAocmJ1Z2d5UVNBLmpvaW4oXCJ8XCIpKTtcbiAgICAgICAgICAgICAgICByYnVnZ3lNYXRjaGVzID0gcmJ1Z2d5TWF0Y2hlcy5sZW5ndGggJiYgbmV3IFJlZ0V4cChyYnVnZ3lNYXRjaGVzLmpvaW4oXCJ8XCIpKTtcblxuICAgICAgICAgICAgICAgIC8qIENvbnRhaW5zXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiAgICAgICAgICAgICAgICBoYXNDb21wYXJlID0gcm5hdGl2ZS50ZXN0KGRvY0VsZW0uY29tcGFyZURvY3VtZW50UG9zaXRpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gRWxlbWVudCBjb250YWlucyBhbm90aGVyXG4gICAgICAgICAgICAgICAgLy8gUHVycG9zZWZ1bGx5IHNlbGYtZXhjbHVzaXZlXG4gICAgICAgICAgICAgICAgLy8gQXMgaW4sIGFuIGVsZW1lbnQgZG9lcyBub3QgY29udGFpbiBpdHNlbGZcbiAgICAgICAgICAgICAgICBjb250YWlucyA9IGhhc0NvbXBhcmUgfHwgcm5hdGl2ZS50ZXN0KGRvY0VsZW0uY29udGFpbnMpID9cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhZG93biA9IGEubm9kZVR5cGUgPT09IDkgPyBhLmRvY3VtZW50RWxlbWVudCA6IGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVwID0gYiAmJiBiLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYSA9PT0gYnVwIHx8ICEhKGJ1cCAmJiBidXAubm9kZVR5cGUgPT09IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkb3duLmNvbnRhaW5zID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRvd24uY29udGFpbnMoYnVwKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihidXApICYgMTZcbiAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICB9IDpcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChiID0gYi5wYXJlbnROb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYiA9PT0gYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvKiBTb3J0aW5nXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuICAgICAgICAgICAgICAgIC8vIERvY3VtZW50IG9yZGVyIHNvcnRpbmdcbiAgICAgICAgICAgICAgICBzb3J0T3JkZXIgPSBoYXNDb21wYXJlID9cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGEsIGIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRmxhZyBmb3IgZHVwbGljYXRlIHJlbW92YWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU29ydCBvbiBtZXRob2QgZXhpc3RlbmNlIGlmIG9ubHkgb25lIGlucHV0IGhhcyBjb21wYXJlRG9jdW1lbnRQb3NpdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXBhcmUgPSAhYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAtICFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29tcGFyZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHBvc2l0aW9uIGlmIGJvdGggaW5wdXRzIGJlbG9uZyB0byB0aGUgc2FtZSBkb2N1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZSA9IChhLm93bmVyRG9jdW1lbnQgfHwgYSkgPT09IChiLm93bmVyRG9jdW1lbnQgfHwgYikgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikgOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHdlIGtub3cgdGhleSBhcmUgZGlzY29ubmVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzY29ubmVjdGVkIG5vZGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZSAmIDEgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIXN1cHBvcnQuc29ydERldGFjaGVkICYmIGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYSkgPT09IGNvbXBhcmUpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaG9vc2UgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBpcyByZWxhdGVkIHRvIG91ciBwcmVmZXJyZWQgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYSA9PT0gZG9jdW1lbnQgfHwgYS5vd25lckRvY3VtZW50ID09PSBwcmVmZXJyZWREb2MgJiYgY29udGFpbnMocHJlZmVycmVkRG9jLCBhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChiID09PSBkb2N1bWVudCB8fCBiLm93bmVyRG9jdW1lbnQgPT09IHByZWZlcnJlZERvYyAmJiBjb250YWlucyhwcmVmZXJyZWREb2MsIGIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1haW50YWluIG9yaWdpbmFsIG9yZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvcnRJbnB1dCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbmRleE9mKHNvcnRJbnB1dCwgYSkgLSBpbmRleE9mKHNvcnRJbnB1dCwgYikpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmUgJiA0ID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgICAgICB9IDpcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4aXQgZWFybHkgaWYgdGhlIG5vZGVzIGFyZSBpZGVudGljYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzRHVwbGljYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXAgPSBhLnBhcmVudE5vZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVwID0gYi5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwID0gW2FdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJwID0gW2JdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQYXJlbnRsZXNzIG5vZGVzIGFyZSBlaXRoZXIgZG9jdW1lbnRzIG9yIGRpc2Nvbm5lY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhdXAgfHwgIWJ1cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhID09PSBkb2N1bWVudCA/IC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYiA9PT0gZG9jdW1lbnQgPyAxIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1cCA/IC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXAgPyAxIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydElucHV0ID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbmRleE9mKHNvcnRJbnB1dCwgYSkgLSBpbmRleE9mKHNvcnRJbnB1dCwgYikpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgbm9kZXMgYXJlIHNpYmxpbmdzLCB3ZSBjYW4gZG8gYSBxdWljayBjaGVja1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhdXAgPT09IGJ1cCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzaWJsaW5nQ2hlY2soYSwgYik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSB3ZSBuZWVkIGZ1bGwgbGlzdHMgb2YgdGhlaXIgYW5jZXN0b3JzIGZvciBjb21wYXJpc29uXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIgPSBhO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChjdXIgPSBjdXIucGFyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcC51bnNoaWZ0KGN1cik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXIgPSBiO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChjdXIgPSBjdXIucGFyZW50Tm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicC51bnNoaWZ0KGN1cik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdhbGsgZG93biB0aGUgdHJlZSBsb29raW5nIGZvciBhIGRpc2NyZXBhbmN5XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYXBbaV0gPT09IGJwW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gYSBzaWJsaW5nIGNoZWNrIGlmIHRoZSBub2RlcyBoYXZlIGEgY29tbW9uIGFuY2VzdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2libGluZ0NoZWNrKGFwW2ldLCBicFtpXSkgOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIG5vZGVzIGluIG91ciBkb2N1bWVudCBzb3J0IGZpcnN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBbaV0gPT09IHByZWZlcnJlZERvYyA/IC0xIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnBbaV0gPT09IHByZWZlcnJlZERvYyA/IDEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMDtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIFNpenpsZS5tYXRjaGVzID0gZnVuY3Rpb24gKGV4cHIsIGVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFNpenpsZShleHByLCBudWxsLCBudWxsLCBlbGVtZW50cyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBTaXp6bGUubWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24gKGVsZW0sIGV4cHIpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcbiAgICAgICAgICAgICAgICBpZiAoKGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtKSAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0RG9jdW1lbnQoZWxlbSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgYXR0cmlidXRlIHNlbGVjdG9ycyBhcmUgcXVvdGVkXG4gICAgICAgICAgICAgICAgZXhwciA9IGV4cHIucmVwbGFjZShyYXR0cmlidXRlUXVvdGVzLCBcIj0nJDEnXVwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciAmJiBkb2N1bWVudElzSFRNTCAmJlxuICAgICAgICAgICAgICAgICAgICAhY29tcGlsZXJDYWNoZVtleHByICsgXCIgXCJdICYmXG4gICAgICAgICAgICAgICAgICAgICghcmJ1Z2d5TWF0Y2hlcyB8fCAhcmJ1Z2d5TWF0Y2hlcy50ZXN0KGV4cHIpKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIXJidWdneVFTQSB8fCAhcmJ1Z2d5UVNBLnRlc3QoZXhwcikpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXQgPSBtYXRjaGVzLmNhbGwoZWxlbSwgZXhwcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElFIDkncyBtYXRjaGVzU2VsZWN0b3IgcmV0dXJucyBmYWxzZSBvbiBkaXNjb25uZWN0ZWQgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXQgfHwgc3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFzIHdlbGwsIGRpc2Nvbm5lY3RlZCBub2RlcyBhcmUgc2FpZCB0byBiZSBpbiBhIGRvY3VtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZnJhZ21lbnQgaW4gSUUgOVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZG9jdW1lbnQgJiYgZWxlbS5kb2N1bWVudC5ub2RlVHlwZSAhPT0gMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gU2l6emxlKGV4cHIsIGRvY3VtZW50LCBudWxsLCBbZWxlbV0pLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBTaXp6bGUuY29udGFpbnMgPSBmdW5jdGlvbiAoY29udGV4dCwgZWxlbSkge1xuICAgICAgICAgICAgICAgIC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgIGlmICgoY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQpICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICBzZXREb2N1bWVudChjb250ZXh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5zKGNvbnRleHQsIGVsZW0pO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgU2l6emxlLmF0dHIgPSBmdW5jdGlvbiAoZWxlbSwgbmFtZSkge1xuICAgICAgICAgICAgICAgIC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgIGlmICgoZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0pICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICBzZXREb2N1bWVudChlbGVtKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgZm4gPSBFeHByLmF0dHJIYW5kbGVbbmFtZS50b0xvd2VyQ2FzZSgpXSxcbiAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgZ2V0IGZvb2xlZCBieSBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKGpRdWVyeSAjMTM4MDcpXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IGZuICYmIGhhc093bi5jYWxsKEV4cHIuYXR0ckhhbmRsZSwgbmFtZS50b0xvd2VyQ2FzZSgpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBmbihlbGVtLCBuYW1lLCAhZG9jdW1lbnRJc0hUTUwpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICAgICAgICAgIHZhbCA6XG4gICAgICAgICAgICAgICAgICAgIHN1cHBvcnQuYXR0cmlidXRlcyB8fCAhZG9jdW1lbnRJc0hUTUwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5nZXRBdHRyaWJ1dGUobmFtZSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgKHZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShuYW1lKSkgJiYgdmFsLnNwZWNpZmllZCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnZhbHVlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgU2l6emxlLmVzY2FwZSA9IGZ1bmN0aW9uIChzZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHNlbCArIFwiXCIpLnJlcGxhY2UocmNzc2VzY2FwZSwgZmNzc2VzY2FwZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBTaXp6bGUuZXJyb3IgPSBmdW5jdGlvbiAobXNnKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIgKyBtc2cpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBEb2N1bWVudCBzb3J0aW5nIGFuZCByZW1vdmluZyBkdXBsaWNhdGVzXG4gICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5TGlrZX0gcmVzdWx0c1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBTaXp6bGUudW5pcXVlU29ydCA9IGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW0sXG4gICAgICAgICAgICAgICAgICAgIGR1cGxpY2F0ZXMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgaiA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICAgICAgLy8gVW5sZXNzIHdlICprbm93KiB3ZSBjYW4gZGV0ZWN0IGR1cGxpY2F0ZXMsIGFzc3VtZSB0aGVpciBwcmVzZW5jZVxuICAgICAgICAgICAgICAgIGhhc0R1cGxpY2F0ZSA9ICFzdXBwb3J0LmRldGVjdER1cGxpY2F0ZXM7XG4gICAgICAgICAgICAgICAgc29ydElucHV0ID0gIXN1cHBvcnQuc29ydFN0YWJsZSAmJiByZXN1bHRzLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgIHJlc3VsdHMuc29ydChzb3J0T3JkZXIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGhhc0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGVsZW0gPSByZXN1bHRzW2krK10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbSA9PT0gcmVzdWx0c1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogPSBkdXBsaWNhdGVzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGotLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5zcGxpY2UoZHVwbGljYXRlc1tqXSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDbGVhciBpbnB1dCBhZnRlciBzb3J0aW5nIHRvIHJlbGVhc2Ugb2JqZWN0c1xuICAgICAgICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9wdWxsLzIyNVxuICAgICAgICAgICAgICAgIHNvcnRJbnB1dCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogVXRpbGl0eSBmdW5jdGlvbiBmb3IgcmV0cmlldmluZyB0aGUgdGV4dCB2YWx1ZSBvZiBhbiBhcnJheSBvZiBET00gbm9kZXNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl8RWxlbWVudH0gZWxlbVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBnZXRUZXh0ID0gU2l6emxlLmdldFRleHQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHZhciBub2RlLFxuICAgICAgICAgICAgICAgICAgICByZXQgPSBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgbm9kZVR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBJZiBubyBub2RlVHlwZSwgdGhpcyBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKG5vZGUgPSBlbGVtW2krK10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEbyBub3QgdHJhdmVyc2UgY29tbWVudCBub2Rlc1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0ICs9IGdldFRleHQobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGVUeXBlID09PSAxIHx8IG5vZGVUeXBlID09PSA5IHx8IG5vZGVUeXBlID09PSAxMSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBVc2UgdGV4dENvbnRlbnQgZm9yIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIC8vIGlubmVyVGV4dCB1c2FnZSByZW1vdmVkIGZvciBjb25zaXN0ZW5jeSBvZiBuZXcgbGluZXMgKGpRdWVyeSAjMTExNTMpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlbS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmF2ZXJzZSBpdHMgY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoZWxlbSA9IGVsZW0uZmlyc3RDaGlsZDsgZWxlbTsgZWxlbSA9IGVsZW0ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQgKz0gZ2V0VGV4dChlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobm9kZVR5cGUgPT09IDMgfHwgbm9kZVR5cGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ubm9kZVZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEbyBub3QgaW5jbHVkZSBjb21tZW50IG9yIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZXNcblxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBFeHByID0gU2l6emxlLnNlbGVjdG9ycyA9IHtcblxuICAgICAgICAgICAgICAgIC8vIENhbiBiZSBhZGp1c3RlZCBieSB0aGUgdXNlclxuICAgICAgICAgICAgICAgIGNhY2hlTGVuZ3RoOiA1MCxcblxuICAgICAgICAgICAgICAgIGNyZWF0ZVBzZXVkbzogbWFya0Z1bmN0aW9uLFxuXG4gICAgICAgICAgICAgICAgbWF0Y2g6IG1hdGNoRXhwcixcblxuICAgICAgICAgICAgICAgIGF0dHJIYW5kbGU6IHt9LFxuXG4gICAgICAgICAgICAgICAgZmluZDoge30sXG5cbiAgICAgICAgICAgICAgICByZWxhdGl2ZToge1xuICAgICAgICAgICAgICAgICAgICBcIj5cIjoge2RpcjogXCJwYXJlbnROb2RlXCIsIGZpcnN0OiB0cnVlfSxcbiAgICAgICAgICAgICAgICAgICAgXCIgXCI6IHtkaXI6IFwicGFyZW50Tm9kZVwifSxcbiAgICAgICAgICAgICAgICAgICAgXCIrXCI6IHtkaXI6IFwicHJldmlvdXNTaWJsaW5nXCIsIGZpcnN0OiB0cnVlfSxcbiAgICAgICAgICAgICAgICAgICAgXCJ+XCI6IHtkaXI6IFwicHJldmlvdXNTaWJsaW5nXCJ9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHByZUZpbHRlcjoge1xuICAgICAgICAgICAgICAgICAgICBcIkFUVFJcIjogZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFsxXSA9IG1hdGNoWzFdLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBNb3ZlIHRoZSBnaXZlbiB2YWx1ZSB0byBtYXRjaFszXSB3aGV0aGVyIHF1b3RlZCBvciB1bnF1b3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbM10gPSAobWF0Y2hbM10gfHwgbWF0Y2hbNF0gfHwgbWF0Y2hbNV0gfHwgXCJcIikucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaFsyXSA9PT0gXCJ+PVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbM10gPSBcIiBcIiArIG1hdGNoWzNdICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaC5zbGljZSgwLCA0KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBcIkNISUxEXCI6IGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLyogbWF0Y2hlcyBmcm9tIG1hdGNoRXhwcltcIkNISUxEXCJdXG5cdFx0XHRcdDEgdHlwZSAob25seXxudGh8Li4uKVxuXHRcdFx0XHQyIHdoYXQgKGNoaWxkfG9mLXR5cGUpXG5cdFx0XHRcdDMgYXJndW1lbnQgKGV2ZW58b2RkfFxcZCp8XFxkKm4oWystXVxcZCspP3wuLi4pXG5cdFx0XHRcdDQgeG4tY29tcG9uZW50IG9mIHhuK3kgYXJndW1lbnQgKFsrLV0/XFxkKm58KVxuXHRcdFx0XHQ1IHNpZ24gb2YgeG4tY29tcG9uZW50XG5cdFx0XHRcdDYgeCBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NyBzaWduIG9mIHktY29tcG9uZW50XG5cdFx0XHRcdDggeSBvZiB5LWNvbXBvbmVudFxuXHRcdFx0Ki9cbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzFdID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoWzFdLnNsaWNlKDAsIDMpID09PSBcIm50aFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbnRoLSogcmVxdWlyZXMgYXJndW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoWzNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpenpsZS5lcnJvcihtYXRjaFswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbnVtZXJpYyB4IGFuZCB5IHBhcmFtZXRlcnMgZm9yIEV4cHIuZmlsdGVyLkNISUxEXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtZW1iZXIgdGhhdCBmYWxzZS90cnVlIGNhc3QgcmVzcGVjdGl2ZWx5IHRvIDAvMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzRdID0gKyhtYXRjaFs0XSA/IG1hdGNoWzVdICsgKG1hdGNoWzZdIHx8IDEpIDogMiAqIChtYXRjaFszXSA9PT0gXCJldmVuXCIgfHwgbWF0Y2hbM10gPT09IFwib2RkXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaFs1XSA9ICsoKG1hdGNoWzddICsgbWF0Y2hbOF0pIHx8IG1hdGNoWzNdID09PSBcIm9kZFwiKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG90aGVyIHR5cGVzIHByb2hpYml0IGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaFszXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpenpsZS5lcnJvcihtYXRjaFswXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaDtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBcIlBTRVVET1wiOiBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleGNlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5xdW90ZWQgPSAhbWF0Y2hbNl0gJiYgbWF0Y2hbMl07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaEV4cHJbXCJDSElMRFwiXS50ZXN0KG1hdGNoWzBdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBY2NlcHQgcXVvdGVkIGFyZ3VtZW50cyBhcy1pc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoWzNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMl0gPSBtYXRjaFs0XSB8fCBtYXRjaFs1XSB8fCBcIlwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RyaXAgZXhjZXNzIGNoYXJhY3RlcnMgZnJvbSB1bnF1b3RlZCBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodW5xdW90ZWQgJiYgcnBzZXVkby50ZXN0KHVucXVvdGVkKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCBleGNlc3MgZnJvbSB0b2tlbml6ZSAocmVjdXJzaXZlbHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGV4Y2VzcyA9IHRva2VuaXplKHVucXVvdGVkLCB0cnVlKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhZHZhbmNlIHRvIHRoZSBuZXh0IGNsb3NpbmcgcGFyZW50aGVzaXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZXhjZXNzID0gdW5xdW90ZWQuaW5kZXhPZihcIilcIiwgdW5xdW90ZWQubGVuZ3RoIC0gZXhjZXNzKSAtIHVucXVvdGVkLmxlbmd0aCkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV4Y2VzcyBpcyBhIG5lZ2F0aXZlIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMF0gPSBtYXRjaFswXS5zbGljZSgwLCBleGNlc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzJdID0gdW5xdW90ZWQuc2xpY2UoMCwgZXhjZXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV0dXJuIG9ubHkgY2FwdHVyZXMgbmVlZGVkIGJ5IHRoZSBwc2V1ZG8gZmlsdGVyIG1ldGhvZCAodHlwZSBhbmQgYXJndW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2guc2xpY2UoMCwgMyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgZmlsdGVyOiB7XG5cbiAgICAgICAgICAgICAgICAgICAgXCJUQUdcIjogZnVuY3Rpb24gKG5vZGVOYW1lU2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBub2RlTmFtZSA9IG5vZGVOYW1lU2VsZWN0b3IucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBub2RlTmFtZVNlbGVjdG9yID09PSBcIipcIiA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5vZGVOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgXCJDTEFTU1wiOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGF0dGVybiA9IGNsYXNzQ2FjaGVbY2xhc3NOYW1lICsgXCIgXCJdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0dGVybiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXR0ZXJuID0gbmV3IFJlZ0V4cChcIihefFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgY2xhc3NOYW1lICsgXCIoXCIgKyB3aGl0ZXNwYWNlICsgXCJ8JClcIikpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NDYWNoZShjbGFzc05hbWUsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QodHlwZW9mIGVsZW0uY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW0uY2xhc3NOYW1lIHx8IHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIFwiQVRUUlwiOiBmdW5jdGlvbiAobmFtZSwgb3BlcmF0b3IsIGNoZWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gU2l6emxlLmF0dHIoZWxlbSwgbmFtZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9wZXJhdG9yID09PSBcIiE9XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3BlcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3BlcmF0b3IgPT09IFwiPVwiID8gcmVzdWx0ID09PSBjaGVjayA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yID09PSBcIiE9XCIgPyByZXN1bHQgIT09IGNoZWNrIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yID09PSBcIl49XCIgPyBjaGVjayAmJiByZXN1bHQuaW5kZXhPZihjaGVjaykgPT09IDAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yID09PSBcIio9XCIgPyBjaGVjayAmJiByZXN1bHQuaW5kZXhPZihjaGVjaykgPiAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yID09PSBcIiQ9XCIgPyBjaGVjayAmJiByZXN1bHQuc2xpY2UoLWNoZWNrLmxlbmd0aCkgPT09IGNoZWNrIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yID09PSBcIn49XCIgPyAoXCIgXCIgKyByZXN1bHQucmVwbGFjZShyd2hpdGVzcGFjZSwgXCIgXCIpICsgXCIgXCIpLmluZGV4T2YoY2hlY2spID4gLTEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yID09PSBcInw9XCIgPyByZXN1bHQgPT09IGNoZWNrIHx8IHJlc3VsdC5zbGljZSgwLCBjaGVjay5sZW5ndGggKyAxKSA9PT0gY2hlY2sgKyBcIi1cIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBcIkNISUxEXCI6IGZ1bmN0aW9uICh0eXBlLCB3aGF0LCBhcmd1bWVudCwgZmlyc3QsIGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaW1wbGUgPSB0eXBlLnNsaWNlKDAsIDMpICE9PSBcIm50aFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcndhcmQgPSB0eXBlLnNsaWNlKC00KSAhPT0gXCJsYXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2ZUeXBlID0gd2hhdCA9PT0gXCJvZi10eXBlXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaXJzdCA9PT0gMSAmJiBsYXN0ID09PSAwID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0IGZvciA6bnRoLSoobilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gISFlbGVtLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSA6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZWxlbSwgY29udGV4dCwgeG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjYWNoZSwgdW5pcXVlQ2FjaGUsIG91dGVyQ2FjaGUsIG5vZGUsIG5vZGVJbmRleCwgc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXIgPSBzaW1wbGUgIT09IGZvcndhcmQgPyBcIm5leHRTaWJsaW5nXCIgOiBcInByZXZpb3VzU2libGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IG9mVHlwZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VDYWNoZSA9ICF4bWwgJiYgIW9mVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmYgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDooZmlyc3R8bGFzdHxvbmx5KS0oY2hpbGR8b2YtdHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaW1wbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZGlyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBlbGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKG5vZGUgPSBub2RlW2Rpcl0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob2ZUeXBlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXZlcnNlIGRpcmVjdGlvbiBmb3IgOm9ubHktKiAoaWYgd2UgaGF2ZW4ndCB5ZXQgZG9uZSBzbylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBkaXIgPSB0eXBlID09PSBcIm9ubHlcIiAmJiAhc3RhcnQgJiYgXCJuZXh0U2libGluZ1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQgPSBbZm9yd2FyZCA/IHBhcmVudC5maXJzdENoaWxkIDogcGFyZW50Lmxhc3RDaGlsZF07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vbi14bWwgOm50aC1jaGlsZCguLi4pIHN0b3JlcyBjYWNoZSBkYXRhIG9uIGBwYXJlbnRgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9yd2FyZCAmJiB1c2VDYWNoZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VlayBgZWxlbWAgZnJvbSBhIHByZXZpb3VzbHktY2FjaGVkIGluZGV4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5pbiBhIGd6aXAtZnJpZW5kbHkgd2F5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHBhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlckNhY2hlID0gbm9kZVtleHBhbmRvXSB8fCAobm9kZVtleHBhbmRvXSA9IHt9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbbm9kZS51bmlxdWVJRF0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG91dGVyQ2FjaGVbbm9kZS51bmlxdWVJRF0gPSB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWNoZSA9IHVuaXF1ZUNhY2hlW3R5cGVdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVJbmRleCA9IGNhY2hlWzBdID09PSBkaXJydW5zICYmIGNhY2hlWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmYgPSBub2RlSW5kZXggJiYgY2FjaGVbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IG5vZGVJbmRleCAmJiBwYXJlbnQuY2hpbGROb2Rlc1tub2RlSW5kZXhdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlW2Rpcl0gfHxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGYWxsYmFjayB0byBzZWVraW5nIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gZm91bmQsIGNhY2hlIGluZGV4ZXMgb24gYHBhcmVudGAgYW5kIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSAxICYmICsrZGlmZiAmJiBub2RlID09PSBlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVDYWNoZVt0eXBlXSA9IFtkaXJydW5zLCBub2RlSW5kZXgsIGRpZmZdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHByZXZpb3VzbHktY2FjaGVkIGVsZW1lbnQgaW5kZXggaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLmluIGEgZ3ppcC1mcmllbmRseSB3YXlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGVsZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyQ2FjaGUgPSBub2RlW2V4cGFuZG9dIHx8IChub2RlW2V4cGFuZG9dID0ge30pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVtub2RlLnVuaXF1ZUlEXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG91dGVyQ2FjaGVbbm9kZS51bmlxdWVJRF0gPSB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUgPSB1bmlxdWVDYWNoZVt0eXBlXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZUluZGV4ID0gY2FjaGVbMF0gPT09IGRpcnJ1bnMgJiYgY2FjaGVbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpZmYgPSBub2RlSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8geG1sIDpudGgtY2hpbGQoLi4uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlmZiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBzYW1lIGxvb3AgYXMgYWJvdmUgdG8gc2VlayBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlW2Rpcl0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkaWZmID0gbm9kZUluZGV4ID0gMCkgfHwgc3RhcnQucG9wKCkpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgob2ZUeXBlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubm9kZVR5cGUgPT09IDEpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKytkaWZmKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYWNoZSB0aGUgaW5kZXggb2YgZWFjaCBlbmNvdW50ZXJlZCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZUNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG91dGVyQ2FjaGUgPSBub2RlW2V4cGFuZG9dIHx8IChub2RlW2V4cGFuZG9dID0ge30pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZUNhY2hlID0gb3V0ZXJDYWNoZVtub2RlLnVuaXF1ZUlEXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG91dGVyQ2FjaGVbbm9kZS51bmlxdWVJRF0gPSB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlQ2FjaGVbdHlwZV0gPSBbZGlycnVucywgZGlmZl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUgPT09IGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmNvcnBvcmF0ZSB0aGUgb2Zmc2V0LCB0aGVuIGNoZWNrIGFnYWluc3QgY3ljbGUgc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlmZiAtPSBsYXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpZmYgPT09IGZpcnN0IHx8IChkaWZmICUgZmlyc3QgPT09IDAgJiYgZGlmZiAvIGZpcnN0ID49IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBcIlBTRVVET1wiOiBmdW5jdGlvbiAocHNldWRvLCBhcmd1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHNldWRvLWNsYXNzIG5hbWVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI3BzZXVkby1jbGFzc2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmlvcml0aXplIGJ5IGNhc2Ugc2Vuc2l0aXZpdHkgaW4gY2FzZSBjdXN0b20gcHNldWRvcyBhcmUgYWRkZWQgd2l0aCB1cHBlcmNhc2UgbGV0dGVyc1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhhdCBzZXRGaWx0ZXJzIGluaGVyaXRzIGZyb20gcHNldWRvc1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4gPSBFeHByLnBzZXVkb3NbcHNldWRvXSB8fCBFeHByLnNldEZpbHRlcnNbcHNldWRvLnRvTG93ZXJDYXNlKCldIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNpenpsZS5lcnJvcihcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIgKyBwc2V1ZG8pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgdXNlciBtYXkgdXNlIGNyZWF0ZVBzZXVkbyB0byBpbmRpY2F0ZSB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhcmd1bWVudHMgYXJlIG5lZWRlZCB0byBjcmVhdGUgdGhlIGZpbHRlciBmdW5jdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8ganVzdCBhcyBTaXp6bGUgZG9lc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZuW2V4cGFuZG9dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuKGFyZ3VtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnV0IG1haW50YWluIHN1cHBvcnQgZm9yIG9sZCBzaWduYXR1cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm4ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBbcHNldWRvLCBwc2V1ZG8sIFwiXCIsIGFyZ3VtZW50XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gRXhwci5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KHBzZXVkby50b0xvd2VyQ2FzZSgpKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmtGdW5jdGlvbihmdW5jdGlvbiAoc2VlZCwgbWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkID0gZm4oc2VlZCwgYXJndW1lbnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBtYXRjaGVkLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHggPSBpbmRleE9mKHNlZWQsIG1hdGNoZWRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZWRbaWR4XSA9ICEobWF0Y2hlc1tpZHhdID0gbWF0Y2hlZFtpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmbihlbGVtLCAwLCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHBzZXVkb3M6IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUG90ZW50aWFsbHkgY29tcGxleCBwc2V1ZG9zXG4gICAgICAgICAgICAgICAgICAgIFwibm90XCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyaW0gdGhlIHNlbGVjdG9yIHBhc3NlZCB0byBjb21waWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhdm9pZCB0cmVhdGluZyBsZWFkaW5nIGFuZCB0cmFpbGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3BhY2VzIGFzIGNvbWJpbmF0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzID0gW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlciA9IGNvbXBpbGUoc2VsZWN0b3IucmVwbGFjZShydHJpbSwgXCIkMVwiKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaGVyW2V4cGFuZG9dID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHNlZWQsIG1hdGNoZXMsIGNvbnRleHQsIHhtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWF0Y2hlZCA9IG1hdGNoZXIoc2VlZCwgbnVsbCwgeG1sLCBbXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gc2VlZC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWF0Y2ggZWxlbWVudHMgdW5tYXRjaGVkIGJ5IGBtYXRjaGVyYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGVsZW0gPSB1bm1hdGNoZWRbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VlZFtpXSA9ICEobWF0Y2hlc1tpXSA9IGVsZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlbGVtLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRbMF0gPSBlbGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVyKGlucHV0LCBudWxsLCB4bWwsIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBrZWVwIHRoZSBlbGVtZW50IChpc3N1ZSAjMjk5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFswXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAhcmVzdWx0cy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgICAgICAgICBcImhhc1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gU2l6emxlKHNlbGVjdG9yLCBlbGVtKS5sZW5ndGggPiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgICAgICAgICAgXCJjb250YWluc1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlbGVtLnRleHRDb250ZW50IHx8IGVsZW0uaW5uZXJUZXh0IHx8IGdldFRleHQoZWxlbSkpLmluZGV4T2YodGV4dCkgPiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFwiV2hldGhlciBhbiBlbGVtZW50IGlzIHJlcHJlc2VudGVkIGJ5IGEgOmxhbmcoKSBzZWxlY3RvclxuICAgICAgICAgICAgICAgICAgICAvLyBpcyBiYXNlZCBzb2xlbHkgb24gdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAvLyBiZWluZyBlcXVhbCB0byB0aGUgaWRlbnRpZmllciBDLFxuICAgICAgICAgICAgICAgICAgICAvLyBvciBiZWdpbm5pbmcgd2l0aCB0aGUgaWRlbnRpZmllciBDIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IFwiLVwiLlxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgbWF0Y2hpbmcgb2YgQyBhZ2FpbnN0IHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWUgaXMgcGVyZm9ybWVkIGNhc2UtaW5zZW5zaXRpdmVseS5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGlkZW50aWZpZXIgQyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgdmFsaWQgbGFuZ3VhZ2UgbmFtZS5cIlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2xhbmctcHNldWRvXG4gICAgICAgICAgICAgICAgICAgIFwibGFuZ1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24gKGxhbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxhbmcgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmlkZW50aWZpZXIudGVzdChsYW5nIHx8IFwiXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU2l6emxlLmVycm9yKFwidW5zdXBwb3J0ZWQgbGFuZzogXCIgKyBsYW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhbmcgPSBsYW5nLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbUxhbmc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGVsZW1MYW5nID0gZG9jdW1lbnRJc0hUTUwgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5sYW5nIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZ2V0QXR0cmlidXRlKFwieG1sOmxhbmdcIikgfHwgZWxlbS5nZXRBdHRyaWJ1dGUoXCJsYW5nXCIpKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtTGFuZyA9IGVsZW1MYW5nLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZWxlbUxhbmcgPT09IGxhbmcgfHwgZWxlbUxhbmcuaW5kZXhPZihsYW5nICsgXCItXCIpID09PSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSB3aGlsZSAoKGVsZW0gPSBlbGVtLnBhcmVudE5vZGUpICYmIGVsZW0ubm9kZVR5cGUgPT09IDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIE1pc2NlbGxhbmVvdXNcbiAgICAgICAgICAgICAgICAgICAgXCJ0YXJnZXRcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGhhc2ggJiYgaGFzaC5zbGljZSgxKSA9PT0gZWxlbS5pZDtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBcInJvb3RcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtID09PSBkb2NFbGVtO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIFwiZm9jdXNcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICghZG9jdW1lbnQuaGFzRm9jdXMgfHwgZG9jdW1lbnQuaGFzRm9jdXMoKSkgJiYgISEoZWxlbS50eXBlIHx8IGVsZW0uaHJlZiB8fCB+ZWxlbS50YWJJbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQm9vbGVhbiBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgICAgIFwiZW5hYmxlZFwiOiBjcmVhdGVEaXNhYmxlZFBzZXVkbyhmYWxzZSksXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogY3JlYXRlRGlzYWJsZWRQc2V1ZG8odHJ1ZSksXG5cbiAgICAgICAgICAgICAgICAgICAgXCJjaGVja2VkXCI6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbiBDU1MzLCA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIGJvdGggY2hlY2tlZCBhbmQgc2VsZWN0ZWQgZWxlbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvUkVDLWNzczMtc2VsZWN0b3JzLTIwMTEwOTI5LyNjaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgISFlbGVtLmNoZWNrZWQpIHx8IChub2RlTmFtZSA9PT0gXCJvcHRpb25cIiAmJiAhIWVsZW0uc2VsZWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFjY2Vzc2luZyB0aGlzIHByb3BlcnR5IG1ha2VzIHNlbGVjdGVkLWJ5LWRlZmF1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wdGlvbnMgaW4gU2FmYXJpIHdvcmsgcHJvcGVybHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0uc2VsZWN0ZWQgPT09IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udGVudHNcbiAgICAgICAgICAgICAgICAgICAgXCJlbXB0eVwiOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNlbXB0eS1wc2V1ZG9cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIDplbXB0eSBpcyBuZWdhdGVkIGJ5IGVsZW1lbnQgKDEpIG9yIGNvbnRlbnQgbm9kZXMgKHRleHQ6IDM7IGNkYXRhOiA0OyBlbnRpdHkgcmVmOiA1KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgYnV0IG5vdCBieSBvdGhlcnMgKGNvbW1lbnQ6IDg7IHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb246IDc7IGV0Yy4pXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub2RlVHlwZSA8IDYgd29ya3MgYmVjYXVzZSBhdHRyaWJ1dGVzICgyKSBkbyBub3QgYXBwZWFyIGFzIGNoaWxkcmVuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPCA2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBcInBhcmVudFwiOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFFeHByLnBzZXVkb3NbXCJlbXB0eVwiXShlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBFbGVtZW50L2lucHV0IHR5cGVzXG4gICAgICAgICAgICAgICAgICAgIFwiaGVhZGVyXCI6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmhlYWRlci50ZXN0KGVsZW0ubm9kZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByaW5wdXRzLnRlc3QoZWxlbS5ub2RlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5hbWUgPT09IFwiaW5wdXRcIiAmJiBlbGVtLnR5cGUgPT09IFwiYnV0dG9uXCIgfHwgbmFtZSA9PT0gXCJidXR0b25cIjtcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRyO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS50eXBlID09PSBcInRleHRcIiAmJlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUU8OFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5ldyBIVE1MNSBhdHRyaWJ1dGUgdmFsdWVzIChlLmcuLCBcInNlYXJjaFwiKSBhcHBlYXIgd2l0aCBlbGVtLnR5cGUgPT09IFwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKChhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSA9PSBudWxsIHx8IGF0dHIudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFBvc2l0aW9uLWluLWNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgXCJmaXJzdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMF07XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAgICAgICAgIFwibGFzdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uIChtYXRjaEluZGV4ZXMsIGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtsZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgICAgICAgICAgXCJlcVwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uIChtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudF07XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAgICAgICAgIFwiZXZlblwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uIChtYXRjaEluZGV4ZXMsIGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7IGkgKz0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoSW5kZXhlcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoSW5kZXhlcztcbiAgICAgICAgICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgICAgICAgICAgXCJvZGRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiAobWF0Y2hJbmRleGVzLCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaEluZGV4ZXM7XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICAgICAgICAgIFwibHRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiAobWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKDsgLS1pID49IDA7KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hJbmRleGVzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hJbmRleGVzO1xuICAgICAgICAgICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgICAgICAgICBcImd0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24gKG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7ICsraSA8IGxlbmd0aDspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaEluZGV4ZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRjaEluZGV4ZXM7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgRXhwci5wc2V1ZG9zW1wibnRoXCJdID0gRXhwci5wc2V1ZG9zW1wiZXFcIl07XG5cbi8vIEFkZCBidXR0b24vaW5wdXQgdHlwZSBwc2V1ZG9zXG4gICAgICAgICAgICBmb3IgKGkgaW4ge3JhZGlvOiB0cnVlLCBjaGVja2JveDogdHJ1ZSwgZmlsZTogdHJ1ZSwgcGFzc3dvcmQ6IHRydWUsIGltYWdlOiB0cnVlfSkge1xuICAgICAgICAgICAgICAgIEV4cHIucHNldWRvc1tpXSA9IGNyZWF0ZUlucHV0UHNldWRvKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChpIGluIHtzdWJtaXQ6IHRydWUsIHJlc2V0OiB0cnVlfSkge1xuICAgICAgICAgICAgICAgIEV4cHIucHNldWRvc1tpXSA9IGNyZWF0ZUJ1dHRvblBzZXVkbyhpKTtcbiAgICAgICAgICAgIH1cblxuLy8gRWFzeSBBUEkgZm9yIGNyZWF0aW5nIG5ldyBzZXRGaWx0ZXJzXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRGaWx0ZXJzKCkge1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZXRGaWx0ZXJzLnByb3RvdHlwZSA9IEV4cHIuZmlsdGVycyA9IEV4cHIucHNldWRvcztcbiAgICAgICAgICAgIEV4cHIuc2V0RmlsdGVycyA9IG5ldyBzZXRGaWx0ZXJzKCk7XG5cbiAgICAgICAgICAgIHRva2VuaXplID0gU2l6emxlLnRva2VuaXplID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBwYXJzZU9ubHkpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlZCwgbWF0Y2gsIHRva2VucywgdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgc29GYXIsIGdyb3VwcywgcHJlRmlsdGVycyxcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkID0gdG9rZW5DYWNoZVtzZWxlY3RvciArIFwiIFwiXTtcblxuICAgICAgICAgICAgICAgIGlmIChjYWNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlT25seSA/IDAgOiBjYWNoZWQuc2xpY2UoMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc29GYXIgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICBncm91cHMgPSBbXTtcbiAgICAgICAgICAgICAgICBwcmVGaWx0ZXJzID0gRXhwci5wcmVGaWx0ZXI7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoc29GYXIpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDb21tYSBhbmQgZmlyc3QgcnVuXG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlZCB8fCAobWF0Y2ggPSByY29tbWEuZXhlYyhzb0ZhcikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBjb25zdW1lIHRyYWlsaW5nIGNvbW1hcyBhcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvRmFyID0gc29GYXIuc2xpY2UobWF0Y2hbMF0ubGVuZ3RoKSB8fCBzb0ZhcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3Vwcy5wdXNoKCh0b2tlbnMgPSBbXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbWJpbmF0b3JzXG4gICAgICAgICAgICAgICAgICAgIGlmICgobWF0Y2ggPSByY29tYmluYXRvcnMuZXhlYyhzb0ZhcikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbWF0Y2hlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDYXN0IGRlc2NlbmRhbnQgY29tYmluYXRvcnMgdG8gc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBtYXRjaFswXS5yZXBsYWNlKHJ0cmltLCBcIiBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgc29GYXIgPSBzb0Zhci5zbGljZShtYXRjaGVkLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBGaWx0ZXJzXG4gICAgICAgICAgICAgICAgICAgIGZvciAodHlwZSBpbiBFeHByLmZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChtYXRjaCA9IG1hdGNoRXhwclt0eXBlXS5leGVjKHNvRmFyKSkgJiYgKCFwcmVGaWx0ZXJzW3R5cGVdIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1hdGNoID0gcHJlRmlsdGVyc1t0eXBlXShtYXRjaCkpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG1hdGNoZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXM6IG1hdGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29GYXIgPSBzb0Zhci5zbGljZShtYXRjaGVkLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIW1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGludmFsaWQgZXhjZXNzXG4gICAgICAgICAgICAgICAgLy8gaWYgd2UncmUganVzdCBwYXJzaW5nXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aHJvdyBhbiBlcnJvciBvciByZXR1cm4gdG9rZW5zXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlT25seSA/XG4gICAgICAgICAgICAgICAgICAgIHNvRmFyLmxlbmd0aCA6XG4gICAgICAgICAgICAgICAgICAgIHNvRmFyID9cbiAgICAgICAgICAgICAgICAgICAgICAgIFNpenpsZS5lcnJvcihzZWxlY3RvcikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FjaGUgdGhlIHRva2Vuc1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW5DYWNoZShzZWxlY3RvciwgZ3JvdXBzKS5zbGljZSgwKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHRvU2VsZWN0b3IodG9rZW5zKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICBsZW4gPSB0b2tlbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciArPSB0b2tlbnNbaV0udmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gYWRkQ29tYmluYXRvcihtYXRjaGVyLCBjb21iaW5hdG9yLCBiYXNlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRpciA9IGNvbWJpbmF0b3IuZGlyLFxuICAgICAgICAgICAgICAgICAgICBza2lwID0gY29tYmluYXRvci5uZXh0LFxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBza2lwIHx8IGRpcixcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tOb25FbGVtZW50cyA9IGJhc2UgJiYga2V5ID09PSBcInBhcmVudE5vZGVcIixcbiAgICAgICAgICAgICAgICAgICAgZG9uZU5hbWUgPSBkb25lKys7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY29tYmluYXRvci5maXJzdCA/XG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGFnYWluc3QgY2xvc2VzdCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoZWxlbSwgY29udGV4dCwgeG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGVsZW0gPSBlbGVtW2Rpcl0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlcihlbGVtLCBjb250ZXh0LCB4bWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSA6XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgYWdhaW5zdCBhbGwgYW5jZXN0b3IvcHJlY2VkaW5nIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlbGVtLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGRDYWNoZSwgdW5pcXVlQ2FjaGUsIG91dGVyQ2FjaGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FjaGUgPSBbZGlycnVucywgZG9uZU5hbWVdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBjYW4ndCBzZXQgYXJiaXRyYXJ5IGRhdGEgb24gWE1MIG5vZGVzLCBzbyB0aGV5IGRvbid0IGJlbmVmaXQgZnJvbSBjb21iaW5hdG9yIGNhY2hpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh4bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGVsZW0gPSBlbGVtW2Rpcl0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVyKGVsZW0sIGNvbnRleHQsIHhtbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChlbGVtID0gZWxlbVtkaXJdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBjaGVja05vbkVsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlckNhY2hlID0gZWxlbVtleHBhbmRvXSB8fCAoZWxlbVtleHBhbmRvXSA9IHt9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgPDkgb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbZWxlbS51bmlxdWVJRF0gfHwgKG91dGVyQ2FjaGVbZWxlbS51bmlxdWVJRF0gPSB7fSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChza2lwICYmIHNraXAgPT09IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtW2Rpcl0gfHwgZWxlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKG9sZENhY2hlID0gdW5pcXVlQ2FjaGVba2V5XSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRDYWNoZVswXSA9PT0gZGlycnVucyAmJiBvbGRDYWNoZVsxXSA9PT0gZG9uZU5hbWUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB0byBuZXdDYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChuZXdDYWNoZVsyXSA9IG9sZENhY2hlWzJdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmV1c2UgbmV3Y2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZUNhY2hlW2tleV0gPSBuZXdDYWNoZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEEgbWF0Y2ggbWVhbnMgd2UncmUgZG9uZTsgYSBmYWlsIG1lYW5zIHdlIGhhdmUgdG8ga2VlcCBjaGVja2luZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgobmV3Q2FjaGVbMl0gPSBtYXRjaGVyKGVsZW0sIGNvbnRleHQsIHhtbCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZWxlbWVudE1hdGNoZXIobWF0Y2hlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWF0Y2hlcnMubGVuZ3RoID4gMSA/XG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlbGVtLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpID0gbWF0Y2hlcnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2hlcnNbaV0oZWxlbSwgY29udGV4dCwgeG1sKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gOlxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVyc1swXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbXVsdGlwbGVDb250ZXh0cyhzZWxlY3RvciwgY29udGV4dHMsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGxlbiA9IGNvbnRleHRzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIFNpenpsZShzZWxlY3RvciwgY29udGV4dHNbaV0sIHJlc3VsdHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY29uZGVuc2UodW5tYXRjaGVkLCBtYXAsIGZpbHRlciwgY29udGV4dCwgeG1sKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsZW0sXG4gICAgICAgICAgICAgICAgICAgIG5ld1VubWF0Y2hlZCA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgbGVuID0gdW5tYXRjaGVkLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgbWFwcGVkID0gbWFwICE9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoZWxlbSA9IHVubWF0Y2hlZFtpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZmlsdGVyIHx8IGZpbHRlcihlbGVtLCBjb250ZXh0LCB4bWwpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3VW5tYXRjaGVkLnB1c2goZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hcHBlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXAucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3VW5tYXRjaGVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRNYXRjaGVyKHByZUZpbHRlciwgc2VsZWN0b3IsIG1hdGNoZXIsIHBvc3RGaWx0ZXIsIHBvc3RGaW5kZXIsIHBvc3RTZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGlmIChwb3N0RmlsdGVyICYmICFwb3N0RmlsdGVyW2V4cGFuZG9dKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3RGaWx0ZXIgPSBzZXRNYXRjaGVyKHBvc3RGaWx0ZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocG9zdEZpbmRlciAmJiAhcG9zdEZpbmRlcltleHBhbmRvXSkge1xuICAgICAgICAgICAgICAgICAgICBwb3N0RmluZGVyID0gc2V0TWF0Y2hlcihwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uIChzZWVkLCByZXN1bHRzLCBjb250ZXh0LCB4bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXAsIGksIGVsZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVNYXAgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RNYXAgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWV4aXN0aW5nID0gcmVzdWx0cy5sZW5ndGgsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCBpbml0aWFsIGVsZW1lbnRzIGZyb20gc2VlZCBvciBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtcyA9IHNlZWQgfHwgbXVsdGlwbGVDb250ZXh0cyhzZWxlY3RvciB8fCBcIipcIiwgY29udGV4dC5ub2RlVHlwZSA/IFtjb250ZXh0XSA6IGNvbnRleHQsIFtdKSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJlZmlsdGVyIHRvIGdldCBtYXRjaGVyIGlucHV0LCBwcmVzZXJ2aW5nIGEgbWFwIGZvciBzZWVkLXJlc3VsdHMgc3luY2hyb25pemF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVySW4gPSBwcmVGaWx0ZXIgJiYgKHNlZWQgfHwgIXNlbGVjdG9yKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGVuc2UoZWxlbXMsIHByZU1hcCwgcHJlRmlsdGVyLCBjb250ZXh0LCB4bWwpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtcyxcblxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlck91dCA9IG1hdGNoZXIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSBwb3N0RmluZGVyLCBvciBmaWx0ZXJlZCBzZWVkLCBvciBub24tc2VlZCBwb3N0RmlsdGVyIG9yIHByZWV4aXN0aW5nIHJlc3VsdHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEZpbmRlciB8fCAoc2VlZCA/IHByZUZpbHRlciA6IHByZWV4aXN0aW5nIHx8IHBvc3RGaWx0ZXIpID9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5pbnRlcm1lZGlhdGUgcHJvY2Vzc2luZyBpcyBuZWNlc3NhcnlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW10gOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC4uLm90aGVyd2lzZSB1c2UgcmVzdWx0cyBkaXJlY3RseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVySW47XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRmluZCBwcmltYXJ5IG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXIobWF0Y2hlckluLCBtYXRjaGVyT3V0LCBjb250ZXh0LCB4bWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgcG9zdEZpbHRlclxuICAgICAgICAgICAgICAgICAgICBpZiAocG9zdEZpbHRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcCA9IGNvbmRlbnNlKG1hdGNoZXJPdXQsIHBvc3RNYXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdEZpbHRlcih0ZW1wLCBbXSwgY29udGV4dCwgeG1sKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVW4tbWF0Y2ggZmFpbGluZyBlbGVtZW50cyBieSBtb3ZpbmcgdGhlbSBiYWNrIHRvIG1hdGNoZXJJblxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IHRlbXAubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZWxlbSA9IHRlbXBbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXJPdXRbcG9zdE1hcFtpXV0gPSAhKG1hdGNoZXJJbltwb3N0TWFwW2ldXSA9IGVsZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zdEZpbmRlciB8fCBwcmVGaWx0ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zdEZpbmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGZpbmFsIG1hdGNoZXJPdXQgYnkgY29uZGVuc2luZyB0aGlzIGludGVybWVkaWF0ZSBpbnRvIHBvc3RGaW5kZXIgY29udGV4dHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID0gbWF0Y2hlck91dC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZWxlbSA9IG1hdGNoZXJPdXRbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBtYXRjaGVySW4gc2luY2UgZWxlbSBpcyBub3QgeWV0IGEgZmluYWwgbWF0Y2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2goKG1hdGNoZXJJbltpXSA9IGVsZW0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0RmluZGVyKG51bGwsIChtYXRjaGVyT3V0ID0gW10pLCB0ZW1wLCB4bWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1vdmUgbWF0Y2hlZCBlbGVtZW50cyBmcm9tIHNlZWQgdG8gcmVzdWx0cyB0byBrZWVwIHRoZW0gc3luY2hyb25pemVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA9IG1hdGNoZXJPdXQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChlbGVtID0gbWF0Y2hlck91dFtpXSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0ZW1wID0gcG9zdEZpbmRlciA/IGluZGV4T2Yoc2VlZCwgZWxlbSkgOiBwcmVNYXBbaV0pID4gLTEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VlZFt0ZW1wXSA9ICEocmVzdWx0c1t0ZW1wXSA9IGVsZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGQgZWxlbWVudHMgdG8gcmVzdWx0cywgdGhyb3VnaCBwb3N0RmluZGVyIGlmIGRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXJPdXQgPSBjb25kZW5zZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVyT3V0ID09PSByZXN1bHRzID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlck91dC5zcGxpY2UocHJlZXhpc3RpbmcsIG1hdGNoZXJPdXQubGVuZ3RoKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXJPdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zdEZpbmRlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RGaW5kZXIobnVsbCwgcmVzdWx0cywgbWF0Y2hlck91dCwgeG1sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHVzaC5hcHBseShyZXN1bHRzLCBtYXRjaGVyT3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBtYXRjaGVyRnJvbVRva2Vucyh0b2tlbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tDb250ZXh0LCBtYXRjaGVyLCBqLFxuICAgICAgICAgICAgICAgICAgICBsZW4gPSB0b2tlbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBsZWFkaW5nUmVsYXRpdmUgPSBFeHByLnJlbGF0aXZlW3Rva2Vuc1swXS50eXBlXSxcbiAgICAgICAgICAgICAgICAgICAgaW1wbGljaXRSZWxhdGl2ZSA9IGxlYWRpbmdSZWxhdGl2ZSB8fCBFeHByLnJlbGF0aXZlW1wiIFwiXSxcbiAgICAgICAgICAgICAgICAgICAgaSA9IGxlYWRpbmdSZWxhdGl2ZSA/IDEgOiAwLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBmb3VuZGF0aW9uYWwgbWF0Y2hlciBlbnN1cmVzIHRoYXQgZWxlbWVudHMgYXJlIHJlYWNoYWJsZSBmcm9tIHRvcC1sZXZlbCBjb250ZXh0KHMpXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoQ29udGV4dCA9IGFkZENvbWJpbmF0b3IoZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtID09PSBjaGVja0NvbnRleHQ7XG4gICAgICAgICAgICAgICAgICAgIH0sIGltcGxpY2l0UmVsYXRpdmUsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICBtYXRjaEFueUNvbnRleHQgPSBhZGRDb21iaW5hdG9yKGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPZihjaGVja0NvbnRleHQsIGVsZW0pID4gLTE7XG4gICAgICAgICAgICAgICAgICAgIH0sIGltcGxpY2l0UmVsYXRpdmUsIHRydWUpLFxuICAgICAgICAgICAgICAgICAgICBtYXRjaGVycyA9IFtmdW5jdGlvbiAoZWxlbSwgY29udGV4dCwgeG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0ID0gKCFsZWFkaW5nUmVsYXRpdmUgJiYgKHhtbCB8fCBjb250ZXh0ICE9PSBvdXRlcm1vc3RDb250ZXh0KSkgfHwgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGVja0NvbnRleHQgPSBjb250ZXh0KS5ub2RlVHlwZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoQ29udGV4dChlbGVtLCBjb250ZXh0LCB4bWwpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hBbnlDb250ZXh0KGVsZW0sIGNvbnRleHQsIHhtbCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXZvaWQgaGFuZ2luZyBvbnRvIGVsZW1lbnQgKGlzc3VlICMyOTkpXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja0NvbnRleHQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICAgICAgfV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgobWF0Y2hlciA9IEV4cHIucmVsYXRpdmVbdG9rZW5zW2ldLnR5cGVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcnMgPSBbYWRkQ29tYmluYXRvcihlbGVtZW50TWF0Y2hlcihtYXRjaGVycyksIG1hdGNoZXIpXTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXIgPSBFeHByLmZpbHRlclt0b2tlbnNbaV0udHlwZV0uYXBwbHkobnVsbCwgdG9rZW5zW2ldLm1hdGNoZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gc3BlY2lhbCB1cG9uIHNlZWluZyBhIHBvc2l0aW9uYWwgbWF0Y2hlclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZXJbZXhwYW5kb10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBuZXh0IHJlbGF0aXZlIG9wZXJhdG9yIChpZiBhbnkpIGZvciBwcm9wZXIgaGFuZGxpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqID0gKytpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEV4cHIucmVsYXRpdmVbdG9rZW5zW2pdLnR5cGVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0TWF0Y2hlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaSA+IDEgJiYgZWxlbWVudE1hdGNoZXIobWF0Y2hlcnMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpID4gMSAmJiB0b1NlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcHJlY2VkaW5nIHRva2VuIHdhcyBhIGRlc2NlbmRhbnQgY29tYmluYXRvciwgaW5zZXJ0IGFuIGltcGxpY2l0IGFueS1lbGVtZW50IGAqYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2tlbnMuc2xpY2UoMCwgaSAtIDEpLmNvbmNhdCh7dmFsdWU6IHRva2Vuc1tpIC0gMl0udHlwZSA9PT0gXCIgXCIgPyBcIipcIiA6IFwiXCJ9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnJlcGxhY2UocnRyaW0sIFwiJDFcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPCBqICYmIG1hdGNoZXJGcm9tVG9rZW5zKHRva2Vucy5zbGljZShpLCBqKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGogPCBsZW4gJiYgbWF0Y2hlckZyb21Ub2tlbnMoKHRva2VucyA9IHRva2Vucy5zbGljZShqKSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqIDwgbGVuICYmIHRvU2VsZWN0b3IodG9rZW5zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVycy5wdXNoKG1hdGNoZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnRNYXRjaGVyKG1hdGNoZXJzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgYnlTZXQgPSBzZXRNYXRjaGVycy5sZW5ndGggPiAwLFxuICAgICAgICAgICAgICAgICAgICBieUVsZW1lbnQgPSBlbGVtZW50TWF0Y2hlcnMubGVuZ3RoID4gMCxcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJNYXRjaGVyID0gZnVuY3Rpb24gKHNlZWQsIGNvbnRleHQsIHhtbCwgcmVzdWx0cywgb3V0ZXJtb3N0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSwgaiwgbWF0Y2hlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkQ291bnQgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBcIjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hdGNoZWQgPSBzZWVkICYmIFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1hdGNoZWQgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0QmFja3VwID0gb3V0ZXJtb3N0Q29udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBtdXN0IGFsd2F5cyBoYXZlIGVpdGhlciBzZWVkIGVsZW1lbnRzIG9yIG91dGVybW9zdCBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbXMgPSBzZWVkIHx8IGJ5RWxlbWVudCAmJiBFeHByLmZpbmRbXCJUQUdcIl0oXCIqXCIsIG91dGVybW9zdCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVXNlIGludGVnZXIgZGlycnVucyBpZmYgdGhpcyBpcyB0aGUgb3V0ZXJtb3N0IG1hdGNoZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJydW5zVW5pcXVlID0gKGRpcnJ1bnMgKz0gY29udGV4dEJhY2t1cCA9PSBudWxsID8gMSA6IE1hdGgucmFuZG9tKCkgfHwgMC4xKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSBlbGVtcy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRlcm1vc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dCA9PT0gZG9jdW1lbnQgfHwgY29udGV4dCB8fCBvdXRlcm1vc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBlbGVtZW50cyBwYXNzaW5nIGVsZW1lbnRNYXRjaGVycyBkaXJlY3RseSB0byByZXN1bHRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRTw5LCBTYWZhcmlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRvbGVyYXRlIE5vZGVMaXN0IHByb3BlcnRpZXMgKElFOiBcImxlbmd0aFwiOyBTYWZhcmk6IDxudW1iZXI+KSBtYXRjaGluZyBlbGVtZW50cyBieSBpZFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgIT09IGxlbiAmJiAoZWxlbSA9IGVsZW1zW2ldKSAhPSBudWxsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnlFbGVtZW50ICYmIGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udGV4dCAmJiBlbGVtLm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREb2N1bWVudChlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbCA9ICFkb2N1bWVudElzSFRNTDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKG1hdGNoZXIgPSBlbGVtZW50TWF0Y2hlcnNbaisrXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVyKGVsZW0sIGNvbnRleHQgfHwgZG9jdW1lbnQsIHhtbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dGVybW9zdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmFjayB1bm1hdGNoZWQgZWxlbWVudHMgZm9yIHNldCBmaWx0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJ5U2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZXkgd2lsbCBoYXZlIGdvbmUgdGhyb3VnaCBhbGwgcG9zc2libGUgbWF0Y2hlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChlbGVtID0gIW1hdGNoZXIgJiYgZWxlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRDb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTGVuZ3RoZW4gdGhlIGFycmF5IGZvciBldmVyeSBlbGVtZW50LCBtYXRjaGVkIG9yIG5vdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXRjaGVkLnB1c2goZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGBpYCBpcyBub3cgdGhlIGNvdW50IG9mIGVsZW1lbnRzIHZpc2l0ZWQgYWJvdmUsIGFuZCBhZGRpbmcgaXQgdG8gYG1hdGNoZWRDb3VudGBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1ha2VzIHRoZSBsYXR0ZXIgbm9ubmVnYXRpdmUuXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkQ291bnQgKz0gaTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgc2V0IGZpbHRlcnMgdG8gdW5tYXRjaGVkIGVsZW1lbnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBOT1RFOiBUaGlzIGNhbiBiZSBza2lwcGVkIGlmIHRoZXJlIGFyZSBubyB1bm1hdGNoZWQgZWxlbWVudHMgKGkuZS4sIGBtYXRjaGVkQ291bnRgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBlcXVhbHMgYGlgKSwgdW5sZXNzIHdlIGRpZG4ndCB2aXNpdCBfYW55XyBlbGVtZW50cyBpbiB0aGUgYWJvdmUgbG9vcCBiZWNhdXNlIHdlIGhhdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vIGVsZW1lbnQgbWF0Y2hlcnMgYW5kIG5vIHNlZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmNyZW1lbnRpbmcgYW4gaW5pdGlhbGx5LXN0cmluZyBcIjBcIiBgaWAgYWxsb3dzIGBpYCB0byByZW1haW4gYSBzdHJpbmcgb25seSBpbiB0aGF0XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlLCB3aGljaCB3aWxsIHJlc3VsdCBpbiBhIFwiMDBcIiBgbWF0Y2hlZENvdW50YCB0aGF0IGRpZmZlcnMgZnJvbSBgaWAgYnV0IGlzIGFsc29cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG51bWVyaWNhbGx5IHplcm8uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnlTZXQgJiYgaSAhPT0gbWF0Y2hlZENvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChtYXRjaGVyID0gc2V0TWF0Y2hlcnNbaisrXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcih1bm1hdGNoZWQsIHNldE1hdGNoZWQsIGNvbnRleHQsIHhtbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVpbnRlZ3JhdGUgZWxlbWVudCBtYXRjaGVzIHRvIGVsaW1pbmF0ZSB0aGUgbmVlZCBmb3Igc29ydGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZENvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHVubWF0Y2hlZFtpXSB8fCBzZXRNYXRjaGVkW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaGVkW2ldID0gcG9wLmNhbGwocmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGlzY2FyZCBpbmRleCBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gZ2V0IG9ubHkgYWN0dWFsIG1hdGNoZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TWF0Y2hlZCA9IGNvbmRlbnNlKHNldE1hdGNoZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBtYXRjaGVzIHRvIHJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXNoLmFwcGx5KHJlc3VsdHMsIHNldE1hdGNoZWQpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2VlZGxlc3Mgc2V0IG1hdGNoZXMgc3VjY2VlZGluZyBtdWx0aXBsZSBzdWNjZXNzZnVsIG1hdGNoZXJzIHN0aXB1bGF0ZSBzb3J0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG91dGVybW9zdCAmJiAhc2VlZCAmJiBzZXRNYXRjaGVkLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG1hdGNoZWRDb3VudCArIHNldE1hdGNoZXJzLmxlbmd0aCkgPiAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2l6emxlLnVuaXF1ZVNvcnQocmVzdWx0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdmVycmlkZSBtYW5pcHVsYXRpb24gb2YgZ2xvYmFscyBieSBuZXN0ZWQgbWF0Y2hlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvdXRlcm1vc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dEJhY2t1cDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVubWF0Y2hlZDtcbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBieVNldCA/XG4gICAgICAgICAgICAgICAgICAgIG1hcmtGdW5jdGlvbihzdXBlck1hdGNoZXIpIDpcbiAgICAgICAgICAgICAgICAgICAgc3VwZXJNYXRjaGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21waWxlID0gU2l6emxlLmNvbXBpbGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIG1hdGNoIC8qIEludGVybmFsIFVzZSBPbmx5ICovKSB7XG4gICAgICAgICAgICAgICAgdmFyIGksXG4gICAgICAgICAgICAgICAgICAgIHNldE1hdGNoZXJzID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRNYXRjaGVycyA9IFtdLFxuICAgICAgICAgICAgICAgICAgICBjYWNoZWQgPSBjb21waWxlckNhY2hlW3NlbGVjdG9yICsgXCIgXCJdO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFjYWNoZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBmdW5jdGlvbiBvZiByZWN1cnNpdmUgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gY2hlY2sgZWFjaCBlbGVtZW50XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gdG9rZW5pemUoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGkgPSBtYXRjaC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlZCA9IG1hdGNoZXJGcm9tVG9rZW5zKG1hdGNoW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWNoZWRbZXhwYW5kb10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRNYXRjaGVycy5wdXNoKGNhY2hlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRNYXRjaGVycy5wdXNoKGNhY2hlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBDYWNoZSB0aGUgY29tcGlsZWQgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkID0gY29tcGlsZXJDYWNoZShzZWxlY3RvciwgbWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMpKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIHNlbGVjdG9yIGFuZCB0b2tlbml6YXRpb25cbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkLnNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZWQ7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgbG93LWxldmVsIHNlbGVjdGlvbiBmdW5jdGlvbiB0aGF0IHdvcmtzIHdpdGggU2l6emxlJ3MgY29tcGlsZWRcbiAgICAgICAgICAgICAqICBzZWxlY3RvciBmdW5jdGlvbnNcbiAgICAgICAgICAgICAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBzZWxlY3RvciBBIHNlbGVjdG9yIG9yIGEgcHJlLWNvbXBpbGVkXG4gICAgICAgICAgICAgKiAgc2VsZWN0b3IgZnVuY3Rpb24gYnVpbHQgd2l0aCBTaXp6bGUuY29tcGlsZVxuICAgICAgICAgICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250ZXh0XG4gICAgICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0c11cbiAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IFtzZWVkXSBBIHNldCBvZiBlbGVtZW50cyB0byBtYXRjaCBhZ2FpbnN0XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlbGVjdCA9IFNpenpsZS5zZWxlY3QgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgaSwgdG9rZW5zLCB0b2tlbiwgdHlwZSwgZmluZCxcbiAgICAgICAgICAgICAgICAgICAgY29tcGlsZWQgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSAhc2VlZCAmJiB0b2tlbml6ZSgoc2VsZWN0b3IgPSBjb21waWxlZC5zZWxlY3RvciB8fCBzZWxlY3RvcikpO1xuXG4gICAgICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG5cbiAgICAgICAgICAgICAgICAvLyBUcnkgdG8gbWluaW1pemUgb3BlcmF0aW9ucyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBzZWxlY3RvciBpbiB0aGUgbGlzdCBhbmQgbm8gc2VlZFxuICAgICAgICAgICAgICAgIC8vICh0aGUgbGF0dGVyIG9mIHdoaWNoIGd1YXJhbnRlZXMgdXMgY29udGV4dClcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gubGVuZ3RoID09PSAxKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVkdWNlIGNvbnRleHQgaWYgdGhlIGxlYWRpbmcgY29tcG91bmQgc2VsZWN0b3IgaXMgYW4gSURcbiAgICAgICAgICAgICAgICAgICAgdG9rZW5zID0gbWF0Y2hbMF0gPSBtYXRjaFswXS5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2Vucy5sZW5ndGggPiAyICYmICh0b2tlbiA9IHRva2Vuc1swXSkudHlwZSA9PT0gXCJJRFwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZXh0Lm5vZGVUeXBlID09PSA5ICYmIGRvY3VtZW50SXNIVE1MICYmIEV4cHIucmVsYXRpdmVbdG9rZW5zWzFdLnR5cGVdKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSAoRXhwci5maW5kW1wiSURcIl0odG9rZW4ubWF0Y2hlc1swXS5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKSwgY29udGV4dCkgfHwgW10pWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQcmVjb21waWxlZCBtYXRjaGVycyB3aWxsIHN0aWxsIHZlcmlmeSBhbmNlc3RyeSwgc28gc3RlcCB1cCBhIGxldmVsXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbXBpbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHQucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZSh0b2tlbnMuc2hpZnQoKS52YWx1ZS5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRmV0Y2ggYSBzZWVkIHNldCBmb3IgcmlnaHQtdG8tbGVmdCBtYXRjaGluZ1xuICAgICAgICAgICAgICAgICAgICBpID0gbWF0Y2hFeHByW1wibmVlZHNDb250ZXh0XCJdLnRlc3Qoc2VsZWN0b3IpID8gMCA6IHRva2Vucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gdG9rZW5zW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBYm9ydCBpZiB3ZSBoaXQgYSBjb21iaW5hdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoRXhwci5yZWxhdGl2ZVsodHlwZSA9IHRva2VuLnR5cGUpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChmaW5kID0gRXhwci5maW5kW3R5cGVdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNlYXJjaCwgZXhwYW5kaW5nIGNvbnRleHQgZm9yIGxlYWRpbmcgc2libGluZyBjb21iaW5hdG9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoc2VlZCA9IGZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuLm1hdGNoZXNbMF0ucmVwbGFjZShydW5lc2NhcGUsIGZ1bmVzY2FwZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJzaWJsaW5nLnRlc3QodG9rZW5zWzBdLnR5cGUpICYmIHRlc3RDb250ZXh0KGNvbnRleHQucGFyZW50Tm9kZSkgfHwgY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgc2VlZCBpcyBlbXB0eSBvciBubyB0b2tlbnMgcmVtYWluLCB3ZSBjYW4gcmV0dXJuIGVhcmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2Vucy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gc2VlZC5sZW5ndGggJiYgdG9TZWxlY3Rvcih0b2tlbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwdXNoLmFwcGx5KHJlc3VsdHMsIHNlZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDb21waWxlIGFuZCBleGVjdXRlIGEgZmlsdGVyaW5nIGZ1bmN0aW9uIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAvLyBQcm92aWRlIGBtYXRjaGAgdG8gYXZvaWQgcmV0b2tlbml6YXRpb24gaWYgd2UgbW9kaWZpZWQgdGhlIHNlbGVjdG9yIGFib3ZlXG4gICAgICAgICAgICAgICAgKGNvbXBpbGVkIHx8IGNvbXBpbGUoc2VsZWN0b3IsIG1hdGNoKSkoXG4gICAgICAgICAgICAgICAgICAgIHNlZWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgICAgICAgICAgICFkb2N1bWVudElzSFRNTCxcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cyxcbiAgICAgICAgICAgICAgICAgICAgIWNvbnRleHQgfHwgcnNpYmxpbmcudGVzdChzZWxlY3RvcikgJiYgdGVzdENvbnRleHQoY29udGV4dC5wYXJlbnROb2RlKSB8fCBjb250ZXh0XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgICAgIH07XG5cbi8vIE9uZS10aW1lIGFzc2lnbm1lbnRzXG5cbi8vIFNvcnQgc3RhYmlsaXR5XG4gICAgICAgICAgICBzdXBwb3J0LnNvcnRTdGFibGUgPSBleHBhbmRvLnNwbGl0KFwiXCIpLnNvcnQoc29ydE9yZGVyKS5qb2luKFwiXCIpID09PSBleHBhbmRvO1xuXG4vLyBTdXBwb3J0OiBDaHJvbWUgMTQtMzUrXG4vLyBBbHdheXMgYXNzdW1lIGR1cGxpY2F0ZXMgaWYgdGhleSBhcmVuJ3QgcGFzc2VkIHRvIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG4gICAgICAgICAgICBzdXBwb3J0LmRldGVjdER1cGxpY2F0ZXMgPSAhIWhhc0R1cGxpY2F0ZTtcblxuLy8gSW5pdGlhbGl6ZSBhZ2FpbnN0IHRoZSBkZWZhdWx0IGRvY3VtZW50XG4gICAgICAgICAgICBzZXREb2N1bWVudCgpO1xuXG4vLyBTdXBwb3J0OiBXZWJraXQ8NTM3LjMyIC0gU2FmYXJpIDYuMC4zL0Nocm9tZSAyNSAoZml4ZWQgaW4gQ2hyb21lIDI3KVxuLy8gRGV0YWNoZWQgbm9kZXMgY29uZm91bmRpbmdseSBmb2xsb3cgKmVhY2ggb3RoZXIqXG4gICAgICAgICAgICBzdXBwb3J0LnNvcnREZXRhY2hlZCA9IGFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICAvLyBTaG91bGQgcmV0dXJuIDEsIGJ1dCByZXR1cm5zIDQgKGZvbGxvd2luZylcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpKSAmIDE7XG4gICAgICAgICAgICB9KTtcblxuLy8gU3VwcG9ydDogSUU8OFxuLy8gUHJldmVudCBhdHRyaWJ1dGUvcHJvcGVydHkgXCJpbnRlcnBvbGF0aW9uXCJcbi8vIGh0dHBzOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzY0MjklMjhWUy44NSUyOS5hc3B4XG4gICAgICAgICAgICBpZiAoIWFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JyMnPjwvYT5cIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpID09PSBcIiNcIjtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgYWRkSGFuZGxlKFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLCBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgaXNYTUwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1hNTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKG5hbWUsIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0eXBlXCIgPyAxIDogMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuLy8gU3VwcG9ydDogSUU8OVxuLy8gVXNlIGRlZmF1bHRWYWx1ZSBpbiBwbGFjZSBvZiBnZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKVxuICAgICAgICAgICAgaWYgKCFzdXBwb3J0LmF0dHJpYnV0ZXMgfHwgIWFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICBlbC5pbm5lckhUTUwgPSBcIjxpbnB1dC8+XCI7XG4gICAgICAgICAgICAgICAgZWwuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA9PT0gXCJcIjtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgYWRkSGFuZGxlKFwidmFsdWVcIiwgZnVuY3Rpb24gKGVsZW0sIG5hbWUsIGlzWE1MKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNYTUwgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbGVtLmRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4vLyBTdXBwb3J0OiBJRTw5XG4vLyBVc2UgZ2V0QXR0cmlidXRlTm9kZSB0byBmZXRjaCBib29sZWFucyB3aGVuIGdldEF0dHJpYnV0ZSBsaWVzXG4gICAgICAgICAgICBpZiAoIWFzc2VydChmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgPT0gbnVsbDtcbiAgICAgICAgICAgIH0pKSB7XG4gICAgICAgICAgICAgICAgYWRkSGFuZGxlKGJvb2xlYW5zLCBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgaXNYTUwpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1hNTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1bbmFtZV0gPT09IHRydWUgPyBuYW1lLnRvTG93ZXJDYXNlKCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh2YWwgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUobmFtZSkpICYmIHZhbC5zcGVjaWZpZWQgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwudmFsdWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBTaXp6bGU7XG5cbiAgICAgICAgfSkod2luZG93KTtcblxuXG4gICAgalF1ZXJ5LmZpbmQgPSBTaXp6bGU7XG4gICAgalF1ZXJ5LmV4cHIgPSBTaXp6bGUuc2VsZWN0b3JzO1xuXG4vLyBEZXByZWNhdGVkXG4gICAgalF1ZXJ5LmV4cHJbXCI6XCJdID0galF1ZXJ5LmV4cHIucHNldWRvcztcbiAgICBqUXVlcnkudW5pcXVlU29ydCA9IGpRdWVyeS51bmlxdWUgPSBTaXp6bGUudW5pcXVlU29ydDtcbiAgICBqUXVlcnkudGV4dCA9IFNpenpsZS5nZXRUZXh0O1xuICAgIGpRdWVyeS5pc1hNTERvYyA9IFNpenpsZS5pc1hNTDtcbiAgICBqUXVlcnkuY29udGFpbnMgPSBTaXp6bGUuY29udGFpbnM7XG4gICAgalF1ZXJ5LmVzY2FwZVNlbGVjdG9yID0gU2l6emxlLmVzY2FwZTtcblxuXG4gICAgdmFyIGRpciA9IGZ1bmN0aW9uIChlbGVtLCBkaXIsIHVudGlsKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gW10sXG4gICAgICAgICAgICB0cnVuY2F0ZSA9IHVudGlsICE9PSB1bmRlZmluZWQ7XG5cbiAgICAgICAgd2hpbGUgKChlbGVtID0gZWxlbVtkaXJdKSAmJiBlbGVtLm5vZGVUeXBlICE9PSA5KSB7XG4gICAgICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmICh0cnVuY2F0ZSAmJiBqUXVlcnkoZWxlbSkuaXModW50aWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYXRjaGVkLnB1c2goZWxlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1hdGNoZWQ7XG4gICAgfTtcblxuXG4gICAgdmFyIHNpYmxpbmdzID0gZnVuY3Rpb24gKG4sIGVsZW0pIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSBbXTtcblxuICAgICAgICBmb3IgKDsgbjsgbiA9IG4ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIGlmIChuLm5vZGVUeXBlID09PSAxICYmIG4gIT09IGVsZW0pIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkLnB1c2gobik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0Y2hlZDtcbiAgICB9O1xuXG5cbiAgICB2YXIgcm5lZWRzQ29udGV4dCA9IGpRdWVyeS5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtcblxuXG4gICAgZnVuY3Rpb24gbm9kZU5hbWUoZWxlbSwgbmFtZSkge1xuXG4gICAgICAgIHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgfTtcbiAgICB2YXIgcnNpbmdsZVRhZyA9ICgvXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaSk7XG5cblxuLy8gSW1wbGVtZW50IHRoZSBpZGVudGljYWwgZnVuY3Rpb25hbGl0eSBmb3IgZmlsdGVyIGFuZCBub3RcbiAgICBmdW5jdGlvbiB3aW5ub3coZWxlbWVudHMsIHF1YWxpZmllciwgbm90KSB7XG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKHF1YWxpZmllcikpIHtcbiAgICAgICAgICAgIHJldHVybiBqUXVlcnkuZ3JlcChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW0sIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISFxdWFsaWZpZXIuY2FsbChlbGVtLCBpLCBlbGVtKSAhPT0gbm90O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTaW5nbGUgZWxlbWVudFxuICAgICAgICBpZiAocXVhbGlmaWVyLm5vZGVUeXBlKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5LmdyZXAoZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChlbGVtID09PSBxdWFsaWZpZXIpICE9PSBub3Q7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFycmF5bGlrZSBvZiBlbGVtZW50cyAoalF1ZXJ5LCBhcmd1bWVudHMsIEFycmF5KVxuICAgICAgICBpZiAodHlwZW9mIHF1YWxpZmllciAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5ncmVwKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoaW5kZXhPZi5jYWxsKHF1YWxpZmllciwgZWxlbSkgPiAtMSkgIT09IG5vdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlsdGVyZWQgZGlyZWN0bHkgZm9yIGJvdGggc2ltcGxlIGFuZCBjb21wbGV4IHNlbGVjdG9yc1xuICAgICAgICByZXR1cm4galF1ZXJ5LmZpbHRlcihxdWFsaWZpZXIsIGVsZW1lbnRzLCBub3QpO1xuICAgIH1cblxuICAgIGpRdWVyeS5maWx0ZXIgPSBmdW5jdGlvbiAoZXhwciwgZWxlbXMsIG5vdCkge1xuICAgICAgICB2YXIgZWxlbSA9IGVsZW1zWzBdO1xuXG4gICAgICAgIGlmIChub3QpIHtcbiAgICAgICAgICAgIGV4cHIgPSBcIjpub3QoXCIgKyBleHByICsgXCIpXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbXMubGVuZ3RoID09PSAxICYmIGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoZWxlbSwgZXhwcikgPyBbZWxlbV0gOiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBqUXVlcnkuZmluZC5tYXRjaGVzKGV4cHIsIGpRdWVyeS5ncmVwKGVsZW1zLCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGVsZW0ubm9kZVR5cGUgPT09IDE7XG4gICAgICAgIH0pKTtcbiAgICB9O1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICAgIGZpbmQ6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgdmFyIGksIHJldCxcbiAgICAgICAgICAgICAgICBsZW4gPSB0aGlzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnB1c2hTdGFjayhqUXVlcnkoc2VsZWN0b3IpLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5jb250YWlucyhzZWxmW2ldLCB0aGlzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXQgPSB0aGlzLnB1c2hTdGFjayhbXSk7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5maW5kKHNlbGVjdG9yLCBzZWxmW2ldLCByZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbGVuID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KHJldCkgOiByZXQ7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2sod2lubm93KHRoaXMsIHNlbGVjdG9yIHx8IFtdLCBmYWxzZSkpO1xuICAgICAgICB9LFxuICAgICAgICBub3Q6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKHdpbm5vdyh0aGlzLCBzZWxlY3RvciB8fCBbXSwgdHJ1ZSkpO1xuICAgICAgICB9LFxuICAgICAgICBpczogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gISF3aW5ub3coXG4gICAgICAgICAgICAgICAgdGhpcyxcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBwb3NpdGlvbmFsL3JlbGF0aXZlIHNlbGVjdG9yLCBjaGVjayBtZW1iZXJzaGlwIGluIHRoZSByZXR1cm5lZCBzZXRcbiAgICAgICAgICAgICAgICAvLyBzbyAkKFwicDpmaXJzdFwiKS5pcyhcInA6bGFzdFwiKSB3b24ndCByZXR1cm4gdHJ1ZSBmb3IgYSBkb2Mgd2l0aCB0d28gXCJwXCIuXG4gICAgICAgICAgICAgICAgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICYmIHJuZWVkc0NvbnRleHQudGVzdChzZWxlY3RvcikgP1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2VsZWN0b3IpIDpcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3IgfHwgW10sXG4gICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICkubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuLy8gSW5pdGlhbGl6ZSBhIGpRdWVyeSBvYmplY3RcblxuXG4vLyBBIGNlbnRyYWwgcmVmZXJlbmNlIHRvIHRoZSByb290IGpRdWVyeShkb2N1bWVudClcbiAgICB2YXIgcm9vdGpRdWVyeSxcblxuICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xuICAgICAgICAvLyBQcmlvcml0aXplICNpZCBvdmVyIDx0YWc+IHRvIGF2b2lkIFhTUyB2aWEgbG9jYXRpb24uaGFzaCAoIzk1MjEpXG4gICAgICAgIC8vIFN0cmljdCBIVE1MIHJlY29nbml0aW9uICgjMTEyOTA6IG11c3Qgc3RhcnQgd2l0aCA8KVxuICAgICAgICAvLyBTaG9ydGN1dCBzaW1wbGUgI2lkIGNhc2UgZm9yIHNwZWVkXG4gICAgICAgIHJxdWlja0V4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLyxcblxuICAgICAgICBpbml0ID0galF1ZXJ5LmZuLmluaXQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbnRleHQsIHJvb3QpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaCwgZWxlbTtcblxuICAgICAgICAgICAgLy8gSEFORExFOiAkKFwiXCIpLCAkKG51bGwpLCAkKHVuZGVmaW5lZCksICQoZmFsc2UpXG4gICAgICAgICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1ldGhvZCBpbml0KCkgYWNjZXB0cyBhbiBhbHRlcm5hdGUgcm9vdGpRdWVyeVxuICAgICAgICAgICAgLy8gc28gbWlncmF0ZSBjYW4gc3VwcG9ydCBqUXVlcnkuc3ViIChnaC0yMTAxKVxuICAgICAgICAgICAgcm9vdCA9IHJvb3QgfHwgcm9vdGpRdWVyeTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlIEhUTUwgc3RyaW5nc1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RvclswXSA9PT0gXCI8XCIgJiZcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3Jbc2VsZWN0b3IubGVuZ3RoIC0gMV0gPT09IFwiPlwiICYmXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yLmxlbmd0aCA+PSAzKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQXNzdW1lIHRoYXQgc3RyaW5ncyB0aGF0IHN0YXJ0IGFuZCBlbmQgd2l0aCA8PiBhcmUgSFRNTCBhbmQgc2tpcCB0aGUgcmVnZXggY2hlY2tcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBbbnVsbCwgc2VsZWN0b3IsIG51bGxdO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1hdGNoIGh0bWwgb3IgbWFrZSBzdXJlIG5vIGNvbnRleHQgaXMgc3BlY2lmaWVkIGZvciAjaWRcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgKG1hdGNoWzFdIHx8ICFjb250ZXh0KSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhBTkRMRTogJChodG1sKSAtPiAkKGFycmF5KVxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQgPSBjb250ZXh0IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGV4dFswXSA6IGNvbnRleHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9wdGlvbiB0byBydW4gc2NyaXB0cyBpcyB0cnVlIGZvciBiYWNrLWNvbXBhdFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW50ZW50aW9uYWxseSBsZXQgdGhlIGVycm9yIGJlIHRocm93biBpZiBwYXJzZUhUTUwgaXMgbm90IHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5tZXJnZSh0aGlzLCBqUXVlcnkucGFyc2VIVE1MKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoWzFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQgJiYgY29udGV4dC5ub2RlVHlwZSA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogZG9jdW1lbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhBTkRMRTogJChodG1sLCBwcm9wcylcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyc2luZ2xlVGFnLnRlc3QobWF0Y2hbMV0pICYmIGpRdWVyeS5pc1BsYWluT2JqZWN0KGNvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChtYXRjaCBpbiBjb250ZXh0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJvcGVydGllcyBvZiBjb250ZXh0IGFyZSBjYWxsZWQgYXMgbWV0aG9kcyBpZiBwb3NzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbih0aGlzW21hdGNoXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbbWF0Y2hdKGNvbnRleHRbbWF0Y2hdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLi4uYW5kIG90aGVyd2lzZSBzZXQgYXMgYXR0cmlidXRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRyKG1hdGNoLCBjb250ZXh0W21hdGNoXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIQU5ETEU6ICQoI2lkKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKG1hdGNoWzJdKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0pIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluamVjdCB0aGUgZWxlbWVudCBkaXJlY3RseSBpbnRvIHRoZSBqUXVlcnkgb2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1swXSA9IGVsZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBIQU5ETEU6ICQoZXhwciwgJCguLi4pKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWNvbnRleHQgfHwgY29udGV4dC5qcXVlcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChjb250ZXh0IHx8IHJvb3QpLmZpbmQoc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhBTkRMRTogJChleHByLCBjb250ZXh0KVxuICAgICAgICAgICAgICAgICAgICAvLyAod2hpY2ggaXMganVzdCBlcXVpdmFsZW50IHRvOiAkKGNvbnRleHQpLmZpbmQoZXhwcilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvcihjb250ZXh0KS5maW5kKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBIQU5ETEU6ICQoRE9NRWxlbWVudClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzWzBdID0gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgdGhpcy5sZW5ndGggPSAxO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgICAgICAgICAgLy8gSEFORExFOiAkKGZ1bmN0aW9uKVxuICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0IGZvciBkb2N1bWVudCByZWFkeVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByb290LnJlYWR5ICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgICAgICByb290LnJlYWR5KHNlbGVjdG9yKSA6XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBpbW1lZGlhdGVseSBpZiByZWFkeSBpcyBub3QgcHJlc2VudFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcihqUXVlcnkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5Lm1ha2VBcnJheShzZWxlY3RvciwgdGhpcyk7XG4gICAgICAgIH07XG5cbi8vIEdpdmUgdGhlIGluaXQgZnVuY3Rpb24gdGhlIGpRdWVyeSBwcm90b3R5cGUgZm9yIGxhdGVyIGluc3RhbnRpYXRpb25cbiAgICBpbml0LnByb3RvdHlwZSA9IGpRdWVyeS5mbjtcblxuLy8gSW5pdGlhbGl6ZSBjZW50cmFsIHJlZmVyZW5jZVxuICAgIHJvb3RqUXVlcnkgPSBqUXVlcnkoZG9jdW1lbnQpO1xuXG5cbiAgICB2YXIgcnBhcmVudHNwcmV2ID0gL14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sXG5cbiAgICAgICAgLy8gTWV0aG9kcyBndWFyYW50ZWVkIHRvIHByb2R1Y2UgYSB1bmlxdWUgc2V0IHdoZW4gc3RhcnRpbmcgZnJvbSBhIHVuaXF1ZSBzZXRcbiAgICAgICAgZ3VhcmFudGVlZFVuaXF1ZSA9IHtcbiAgICAgICAgICAgIGNoaWxkcmVuOiB0cnVlLFxuICAgICAgICAgICAgY29udGVudHM6IHRydWUsXG4gICAgICAgICAgICBuZXh0OiB0cnVlLFxuICAgICAgICAgICAgcHJldjogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICAgIGhhczogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgdmFyIHRhcmdldHMgPSBqUXVlcnkodGFyZ2V0LCB0aGlzKSxcbiAgICAgICAgICAgICAgICBsID0gdGFyZ2V0cy5sZW5ndGg7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkuY29udGFpbnModGhpcywgdGFyZ2V0c1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xvc2VzdDogZnVuY3Rpb24gKHNlbGVjdG9ycywgY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIGN1cixcbiAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICBsID0gdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgbWF0Y2hlZCA9IFtdLFxuICAgICAgICAgICAgICAgIHRhcmdldHMgPSB0eXBlb2Ygc2VsZWN0b3JzICE9PSBcInN0cmluZ1wiICYmIGpRdWVyeShzZWxlY3RvcnMpO1xuXG4gICAgICAgICAgICAvLyBQb3NpdGlvbmFsIHNlbGVjdG9ycyBuZXZlciBtYXRjaCwgc2luY2UgdGhlcmUncyBubyBfc2VsZWN0aW9uXyBjb250ZXh0XG4gICAgICAgICAgICBpZiAoIXJuZWVkc0NvbnRleHQudGVzdChzZWxlY3RvcnMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjdXIgPSB0aGlzW2ldOyBjdXIgJiYgY3VyICE9PSBjb250ZXh0OyBjdXIgPSBjdXIucGFyZW50Tm9kZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbHdheXMgc2tpcCBkb2N1bWVudCBmcmFnbWVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXIubm9kZVR5cGUgPCAxMSAmJiAodGFyZ2V0cyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0cy5pbmRleChjdXIpID4gLTEgOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgcGFzcyBub24tZWxlbWVudHMgdG8gU2l6emxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyLm5vZGVUeXBlID09PSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKGN1ciwgc2VsZWN0b3JzKSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWQucHVzaChjdXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2sobWF0Y2hlZC5sZW5ndGggPiAxID8galF1ZXJ5LnVuaXF1ZVNvcnQobWF0Y2hlZCkgOiBtYXRjaGVkKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgd2l0aGluIHRoZSBzZXRcbiAgICAgICAgaW5kZXg6IGZ1bmN0aW9uIChlbGVtKSB7XG5cbiAgICAgICAgICAgIC8vIE5vIGFyZ3VtZW50LCByZXR1cm4gaW5kZXggaW4gcGFyZW50XG4gICAgICAgICAgICBpZiAoIWVsZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXNbMF0gJiYgdGhpc1swXS5wYXJlbnROb2RlKSA/IHRoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoIDogLTE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEluZGV4IGluIHNlbGVjdG9yXG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXhPZi5jYWxsKGpRdWVyeShlbGVtKSwgdGhpc1swXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIExvY2F0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgZWxlbWVudFxuICAgICAgICAgICAgcmV0dXJuIGluZGV4T2YuY2FsbCh0aGlzLFxuXG4gICAgICAgICAgICAgICAgLy8gSWYgaXQgcmVjZWl2ZXMgYSBqUXVlcnkgb2JqZWN0LCB0aGUgZmlyc3QgZWxlbWVudCBpcyB1c2VkXG4gICAgICAgICAgICAgICAgZWxlbS5qcXVlcnkgPyBlbGVtWzBdIDogZWxlbVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZGQ6IGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKFxuICAgICAgICAgICAgICAgIGpRdWVyeS51bmlxdWVTb3J0KFxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkubWVyZ2UodGhpcy5nZXQoKSwgalF1ZXJ5KHNlbGVjdG9yLCBjb250ZXh0KSlcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZEJhY2s6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYWRkKHNlbGVjdG9yID09IG51bGwgP1xuICAgICAgICAgICAgICAgIHRoaXMucHJldk9iamVjdCA6IHRoaXMucHJldk9iamVjdC5maWx0ZXIoc2VsZWN0b3IpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBzaWJsaW5nKGN1ciwgZGlyKSB7XG4gICAgICAgIHdoaWxlICgoY3VyID0gY3VyW2Rpcl0pICYmIGN1ci5ub2RlVHlwZSAhPT0gMSkge1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjdXI7XG4gICAgfVxuXG4gICAgalF1ZXJ5LmVhY2goe1xuICAgICAgICBwYXJlbnQ6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgcmV0dXJuIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDExID8gcGFyZW50IDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgcGFyZW50czogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBkaXIoZWxlbSwgXCJwYXJlbnROb2RlXCIpO1xuICAgICAgICB9LFxuICAgICAgICBwYXJlbnRzVW50aWw6IGZ1bmN0aW9uIChlbGVtLCBpLCB1bnRpbCkge1xuICAgICAgICAgICAgcmV0dXJuIGRpcihlbGVtLCBcInBhcmVudE5vZGVcIiwgdW50aWwpO1xuICAgICAgICB9LFxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIHNpYmxpbmcoZWxlbSwgXCJuZXh0U2libGluZ1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJldjogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBzaWJsaW5nKGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIpO1xuICAgICAgICB9LFxuICAgICAgICBuZXh0QWxsOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpcihlbGVtLCBcIm5leHRTaWJsaW5nXCIpO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2QWxsOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpcihlbGVtLCBcInByZXZpb3VzU2libGluZ1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgbmV4dFVudGlsOiBmdW5jdGlvbiAoZWxlbSwgaSwgdW50aWwpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXIoZWxlbSwgXCJuZXh0U2libGluZ1wiLCB1bnRpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIHByZXZVbnRpbDogZnVuY3Rpb24gKGVsZW0sIGksIHVudGlsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlyKGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIsIHVudGlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2libGluZ3M6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gc2libGluZ3MoKGVsZW0ucGFyZW50Tm9kZSB8fCB7fSkuZmlyc3RDaGlsZCwgZWxlbSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIHNpYmxpbmdzKGVsZW0uZmlyc3RDaGlsZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRzOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgaWYgKG5vZGVOYW1lKGVsZW0sIFwiaWZyYW1lXCIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0uY29udGVudERvY3VtZW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seSwgaU9TIDcgb25seSwgQW5kcm9pZCBCcm93c2VyIDw9NC4zIG9ubHlcbiAgICAgICAgICAgIC8vIFRyZWF0IHRoZSB0ZW1wbGF0ZSBlbGVtZW50IGFzIGEgcmVndWxhciBvbmUgaW4gYnJvd3NlcnMgdGhhdFxuICAgICAgICAgICAgLy8gZG9uJ3Qgc3VwcG9ydCBpdC5cbiAgICAgICAgICAgIGlmIChub2RlTmFtZShlbGVtLCBcInRlbXBsYXRlXCIpKSB7XG4gICAgICAgICAgICAgICAgZWxlbSA9IGVsZW0uY29udGVudCB8fCBlbGVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5Lm1lcmdlKFtdLCBlbGVtLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKG5hbWUsIGZuKSB7XG4gICAgICAgIGpRdWVyeS5mbltuYW1lXSA9IGZ1bmN0aW9uICh1bnRpbCwgc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVkID0galF1ZXJ5Lm1hcCh0aGlzLCBmbiwgdW50aWwpO1xuXG4gICAgICAgICAgICBpZiAobmFtZS5zbGljZSgtNSkgIT09IFwiVW50aWxcIikge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gdW50aWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RvciAmJiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkID0galF1ZXJ5LmZpbHRlcihzZWxlY3RvciwgbWF0Y2hlZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDEpIHtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBkdXBsaWNhdGVzXG4gICAgICAgICAgICAgICAgaWYgKCFndWFyYW50ZWVkVW5pcXVlW25hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS51bmlxdWVTb3J0KG1hdGNoZWQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJldmVyc2Ugb3JkZXIgZm9yIHBhcmVudHMqIGFuZCBwcmV2LWRlcml2YXRpdmVzXG4gICAgICAgICAgICAgICAgaWYgKHJwYXJlbnRzcHJldi50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZWQucmV2ZXJzZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHVzaFN0YWNrKG1hdGNoZWQpO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHZhciBybm90aHRtbHdoaXRlID0gKC9bXlxceDIwXFx0XFxyXFxuXFxmXSsvZyk7XG5cblxuLy8gQ29udmVydCBTdHJpbmctZm9ybWF0dGVkIG9wdGlvbnMgaW50byBPYmplY3QtZm9ybWF0dGVkIG9uZXNcbiAgICBmdW5jdGlvbiBjcmVhdGVPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIG9iamVjdCA9IHt9O1xuICAgICAgICBqUXVlcnkuZWFjaChvcHRpb25zLm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtdLCBmdW5jdGlvbiAoXywgZmxhZykge1xuICAgICAgICAgICAgb2JqZWN0W2ZsYWddID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfVxuXG4gICAgLypcbiAqIENyZWF0ZSBhIGNhbGxiYWNrIGxpc3QgdXNpbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuICpcbiAqXHRvcHRpb25zOiBhbiBvcHRpb25hbCBsaXN0IG9mIHNwYWNlLXNlcGFyYXRlZCBvcHRpb25zIHRoYXQgd2lsbCBjaGFuZ2UgaG93XG4gKlx0XHRcdHRoZSBjYWxsYmFjayBsaXN0IGJlaGF2ZXMgb3IgYSBtb3JlIHRyYWRpdGlvbmFsIG9wdGlvbiBvYmplY3RcbiAqXG4gKiBCeSBkZWZhdWx0IGEgY2FsbGJhY2sgbGlzdCB3aWxsIGFjdCBsaWtlIGFuIGV2ZW50IGNhbGxiYWNrIGxpc3QgYW5kIGNhbiBiZVxuICogXCJmaXJlZFwiIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIFBvc3NpYmxlIG9wdGlvbnM6XG4gKlxuICpcdG9uY2U6XHRcdFx0d2lsbCBlbnN1cmUgdGhlIGNhbGxiYWNrIGxpc3QgY2FuIG9ubHkgYmUgZmlyZWQgb25jZSAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHRtZW1vcnk6XHRcdFx0d2lsbCBrZWVwIHRyYWNrIG9mIHByZXZpb3VzIHZhbHVlcyBhbmQgd2lsbCBjYWxsIGFueSBjYWxsYmFjayBhZGRlZFxuICpcdFx0XHRcdFx0YWZ0ZXIgdGhlIGxpc3QgaGFzIGJlZW4gZmlyZWQgcmlnaHQgYXdheSB3aXRoIHRoZSBsYXRlc3QgXCJtZW1vcml6ZWRcIlxuICpcdFx0XHRcdFx0dmFsdWVzIChsaWtlIGEgRGVmZXJyZWQpXG4gKlxuICpcdHVuaXF1ZTpcdFx0XHR3aWxsIGVuc3VyZSBhIGNhbGxiYWNrIGNhbiBvbmx5IGJlIGFkZGVkIG9uY2UgKG5vIGR1cGxpY2F0ZSBpbiB0aGUgbGlzdClcbiAqXG4gKlx0c3RvcE9uRmFsc2U6XHRpbnRlcnJ1cHQgY2FsbGluZ3Mgd2hlbiBhIGNhbGxiYWNrIHJldHVybnMgZmFsc2VcbiAqXG4gKi9cbiAgICBqUXVlcnkuQ2FsbGJhY2tzID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblxuICAgICAgICAvLyBDb252ZXJ0IG9wdGlvbnMgZnJvbSBTdHJpbmctZm9ybWF0dGVkIHRvIE9iamVjdC1mb3JtYXR0ZWQgaWYgbmVlZGVkXG4gICAgICAgIC8vICh3ZSBjaGVjayBpbiBjYWNoZSBmaXJzdClcbiAgICAgICAgb3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiID9cbiAgICAgICAgICAgIGNyZWF0ZU9wdGlvbnMob3B0aW9ucykgOlxuICAgICAgICAgICAgalF1ZXJ5LmV4dGVuZCh7fSwgb3B0aW9ucyk7XG5cbiAgICAgICAgdmFyIC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IGlzIGN1cnJlbnRseSBmaXJpbmdcbiAgICAgICAgICAgIGZpcmluZyxcblxuICAgICAgICAgICAgLy8gTGFzdCBmaXJlIHZhbHVlIGZvciBub24tZm9yZ2V0dGFibGUgbGlzdHNcbiAgICAgICAgICAgIG1lbW9yeSxcblxuICAgICAgICAgICAgLy8gRmxhZyB0byBrbm93IGlmIGxpc3Qgd2FzIGFscmVhZHkgZmlyZWRcbiAgICAgICAgICAgIGZpcmVkLFxuXG4gICAgICAgICAgICAvLyBGbGFnIHRvIHByZXZlbnQgZmlyaW5nXG4gICAgICAgICAgICBsb2NrZWQsXG5cbiAgICAgICAgICAgIC8vIEFjdHVhbCBjYWxsYmFjayBsaXN0XG4gICAgICAgICAgICBsaXN0ID0gW10sXG5cbiAgICAgICAgICAgIC8vIFF1ZXVlIG9mIGV4ZWN1dGlvbiBkYXRhIGZvciByZXBlYXRhYmxlIGxpc3RzXG4gICAgICAgICAgICBxdWV1ZSA9IFtdLFxuXG4gICAgICAgICAgICAvLyBJbmRleCBvZiBjdXJyZW50bHkgZmlyaW5nIGNhbGxiYWNrIChtb2RpZmllZCBieSBhZGQvcmVtb3ZlIGFzIG5lZWRlZClcbiAgICAgICAgICAgIGZpcmluZ0luZGV4ID0gLTEsXG5cbiAgICAgICAgICAgIC8vIEZpcmUgY2FsbGJhY2tzXG4gICAgICAgICAgICBmaXJlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgLy8gRW5mb3JjZSBzaW5nbGUtZmlyaW5nXG4gICAgICAgICAgICAgICAgbG9ja2VkID0gbG9ja2VkIHx8IG9wdGlvbnMub25jZTtcblxuICAgICAgICAgICAgICAgIC8vIEV4ZWN1dGUgY2FsbGJhY2tzIGZvciBhbGwgcGVuZGluZyBleGVjdXRpb25zLFxuICAgICAgICAgICAgICAgIC8vIHJlc3BlY3RpbmcgZmlyaW5nSW5kZXggb3ZlcnJpZGVzIGFuZCBydW50aW1lIGNoYW5nZXNcbiAgICAgICAgICAgICAgICBmaXJlZCA9IGZpcmluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9yICg7IHF1ZXVlLmxlbmd0aDsgZmlyaW5nSW5kZXggPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBtZW1vcnkgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKytmaXJpbmdJbmRleCA8IGxpc3QubGVuZ3RoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJ1biBjYWxsYmFjayBhbmQgY2hlY2sgZm9yIGVhcmx5IHRlcm1pbmF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGlzdFtmaXJpbmdJbmRleF0uYXBwbHkobWVtb3J5WzBdLCBtZW1vcnlbMV0pID09PSBmYWxzZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuc3RvcE9uRmFsc2UpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEp1bXAgdG8gZW5kIGFuZCBmb3JnZXQgdGhlIGRhdGEgc28gLmFkZCBkb2Vzbid0IHJlLWZpcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJpbmdJbmRleCA9IGxpc3QubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbW9yeSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRm9yZ2V0IHRoZSBkYXRhIGlmIHdlJ3JlIGRvbmUgd2l0aCBpdFxuICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5tZW1vcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVtb3J5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZmlyaW5nID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyBDbGVhbiB1cCBpZiB3ZSdyZSBkb25lIGZpcmluZyBmb3IgZ29vZFxuICAgICAgICAgICAgICAgIGlmIChsb2NrZWQpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBLZWVwIGFuIGVtcHR5IGxpc3QgaWYgd2UgaGF2ZSBkYXRhIGZvciBmdXR1cmUgYWRkIGNhbGxzXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZW1vcnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QgPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCB0aGlzIG9iamVjdCBpcyBzcGVudFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBBY3R1YWwgQ2FsbGJhY2tzIG9iamVjdFxuICAgICAgICAgICAgc2VsZiA9IHtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBhIGNhbGxiYWNrIG9yIGEgY29sbGVjdGlvbiBvZiBjYWxsYmFja3MgdG8gdGhlIGxpc3RcbiAgICAgICAgICAgICAgICBhZGQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3QpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBtZW1vcnkgZnJvbSBhIHBhc3QgcnVuLCB3ZSBzaG91bGQgZmlyZSBhZnRlciBhZGRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZW1vcnkgJiYgIWZpcmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmluZ0luZGV4ID0gbGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2gobWVtb3J5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgKGZ1bmN0aW9uIGFkZChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmVhY2goYXJncywgZnVuY3Rpb24gKF8sIGFyZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMudW5pcXVlIHx8ICFzZWxmLmhhcyhhcmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKGFyZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJnICYmIGFyZy5sZW5ndGggJiYgdG9UeXBlKGFyZykgIT09IFwic3RyaW5nXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5zcGVjdCByZWN1cnNpdmVseVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkKGFyZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtZW1vcnkgJiYgIWZpcmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGEgY2FsbGJhY2sgZnJvbSB0aGUgbGlzdFxuICAgICAgICAgICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZWFjaChhcmd1bWVudHMsIGZ1bmN0aW9uIChfLCBhcmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlICgoaW5kZXggPSBqUXVlcnkuaW5BcnJheShhcmcsIGxpc3QsIGluZGV4KSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBmaXJpbmcgaW5kZXhlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA8PSBmaXJpbmdJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJpbmdJbmRleC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBhIGdpdmVuIGNhbGxiYWNrIGlzIGluIHRoZSBsaXN0LlxuICAgICAgICAgICAgICAgIC8vIElmIG5vIGFyZ3VtZW50IGlzIGdpdmVuLCByZXR1cm4gd2hldGhlciBvciBub3QgbGlzdCBoYXMgY2FsbGJhY2tzIGF0dGFjaGVkLlxuICAgICAgICAgICAgICAgIGhhczogZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmbiA/XG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuaW5BcnJheShmbiwgbGlzdCkgPiAtMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0Lmxlbmd0aCA+IDA7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgY2FsbGJhY2tzIGZyb20gdGhlIGxpc3RcbiAgICAgICAgICAgICAgICBlbXB0eTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIC5maXJlIGFuZCAuYWRkXG4gICAgICAgICAgICAgICAgLy8gQWJvcnQgYW55IGN1cnJlbnQvcGVuZGluZyBleGVjdXRpb25zXG4gICAgICAgICAgICAgICAgLy8gQ2xlYXIgYWxsIGNhbGxiYWNrcyBhbmQgdmFsdWVzXG4gICAgICAgICAgICAgICAgZGlzYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsb2NrZWQgPSBxdWV1ZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gbWVtb3J5ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWxpc3Q7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIERpc2FibGUgLmZpcmVcbiAgICAgICAgICAgICAgICAvLyBBbHNvIGRpc2FibGUgLmFkZCB1bmxlc3Mgd2UgaGF2ZSBtZW1vcnkgKHNpbmNlIGl0IHdvdWxkIGhhdmUgbm8gZWZmZWN0KVxuICAgICAgICAgICAgICAgIC8vIEFib3J0IGFueSBwZW5kaW5nIGV4ZWN1dGlvbnNcbiAgICAgICAgICAgICAgICBsb2NrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2tlZCA9IHF1ZXVlID0gW107XG4gICAgICAgICAgICAgICAgICAgIGlmICghbWVtb3J5ICYmICFmaXJpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QgPSBtZW1vcnkgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbG9ja2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWxvY2tlZDtcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gQ2FsbCBhbGwgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGNvbnRleHQgYW5kIGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgIGZpcmVXaXRoOiBmdW5jdGlvbiAoY29udGV4dCwgYXJncykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWxvY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJncyA9IGFyZ3MgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gW2NvbnRleHQsIGFyZ3Muc2xpY2UgPyBhcmdzLnNsaWNlKCkgOiBhcmdzXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goYXJncyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpcmluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gQ2FsbCBhbGwgdGhlIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICBmaXJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZmlyZVdpdGgodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIC8vIFRvIGtub3cgaWYgdGhlIGNhbGxiYWNrcyBoYXZlIGFscmVhZHkgYmVlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZVxuICAgICAgICAgICAgICAgIGZpcmVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhIWZpcmVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gSWRlbnRpdHkodikge1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBUaHJvd2VyKGV4KSB7XG4gICAgICAgIHRocm93IGV4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkb3B0VmFsdWUodmFsdWUsIHJlc29sdmUsIHJlamVjdCwgbm9WYWx1ZSkge1xuICAgICAgICB2YXIgbWV0aG9kO1xuXG4gICAgICAgIHRyeSB7XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBwcm9taXNlIGFzcGVjdCBmaXJzdCB0byBwcml2aWxlZ2Ugc3luY2hyb25vdXMgYmVoYXZpb3JcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiBpc0Z1bmN0aW9uKChtZXRob2QgPSB2YWx1ZS5wcm9taXNlKSkpIHtcbiAgICAgICAgICAgICAgICBtZXRob2QuY2FsbCh2YWx1ZSkuZG9uZShyZXNvbHZlKS5mYWlsKHJlamVjdCk7XG5cbiAgICAgICAgICAgICAgICAvLyBPdGhlciB0aGVuYWJsZXNcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgJiYgaXNGdW5jdGlvbigobWV0aG9kID0gdmFsdWUudGhlbikpKSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kLmNhbGwodmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG5cbiAgICAgICAgICAgICAgICAvLyBPdGhlciBub24tdGhlbmFibGVzXG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy8gQ29udHJvbCBgcmVzb2x2ZWAgYXJndW1lbnRzIGJ5IGxldHRpbmcgQXJyYXkjc2xpY2UgY2FzdCBib29sZWFuIGBub1ZhbHVlYCB0byBpbnRlZ2VyOlxuICAgICAgICAgICAgICAgIC8vICogZmFsc2U6IFsgdmFsdWUgXS5zbGljZSggMCApID0+IHJlc29sdmUoIHZhbHVlIClcbiAgICAgICAgICAgICAgICAvLyAqIHRydWU6IFsgdmFsdWUgXS5zbGljZSggMSApID0+IHJlc29sdmUoKVxuICAgICAgICAgICAgICAgIHJlc29sdmUuYXBwbHkodW5kZWZpbmVkLCBbdmFsdWVdLnNsaWNlKG5vVmFsdWUpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRm9yIFByb21pc2VzL0ErLCBjb252ZXJ0IGV4Y2VwdGlvbnMgaW50byByZWplY3Rpb25zXG4gICAgICAgICAgICAvLyBTaW5jZSBqUXVlcnkud2hlbiBkb2Vzbid0IHVud3JhcCB0aGVuYWJsZXMsIHdlIGNhbiBza2lwIHRoZSBleHRyYSBjaGVja3MgYXBwZWFyaW5nIGluXG4gICAgICAgICAgICAvLyBEZWZlcnJlZCN0aGVuIHRvIGNvbmRpdGlvbmFsbHkgc3VwcHJlc3MgcmVqZWN0aW9uLlxuICAgICAgICB9IGNhdGNoICh2YWx1ZSkge1xuXG4gICAgICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCBvbmx5XG4gICAgICAgICAgICAvLyBTdHJpY3QgbW9kZSBmdW5jdGlvbnMgaW52b2tlZCB3aXRob3V0IC5jYWxsLy5hcHBseSBnZXQgZ2xvYmFsLW9iamVjdCBjb250ZXh0XG4gICAgICAgICAgICByZWplY3QuYXBwbHkodW5kZWZpbmVkLCBbdmFsdWVdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGpRdWVyeS5leHRlbmQoe1xuXG4gICAgICAgIERlZmVycmVkOiBmdW5jdGlvbiAoZnVuYykge1xuICAgICAgICAgICAgdmFyIHR1cGxlcyA9IFtcblxuICAgICAgICAgICAgICAgICAgICAvLyBhY3Rpb24sIGFkZCBsaXN0ZW5lciwgY2FsbGJhY2tzLFxuICAgICAgICAgICAgICAgICAgICAvLyAuLi4gLnRoZW4gaGFuZGxlcnMsIGFyZ3VtZW50IGluZGV4LCBbZmluYWwgc3RhdGVdXG4gICAgICAgICAgICAgICAgICAgIFtcIm5vdGlmeVwiLCBcInByb2dyZXNzXCIsIGpRdWVyeS5DYWxsYmFja3MoXCJtZW1vcnlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuQ2FsbGJhY2tzKFwibWVtb3J5XCIpLCAyXSxcbiAgICAgICAgICAgICAgICAgICAgW1wicmVzb2x2ZVwiLCBcImRvbmVcIiwgalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLCAwLCBcInJlc29sdmVkXCJdLFxuICAgICAgICAgICAgICAgICAgICBbXCJyZWplY3RcIiwgXCJmYWlsXCIsIGpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSwgMSwgXCJyZWplY3RlZFwiXVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBcInBlbmRpbmdcIixcbiAgICAgICAgICAgICAgICBwcm9taXNlID0ge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhbHdheXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXCJjYXRjaFwiOiBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnRoZW4obnVsbCwgZm4pO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEtlZXAgcGlwZSBmb3IgYmFjay1jb21wYXRcbiAgICAgICAgICAgICAgICAgICAgcGlwZTogZnVuY3Rpb24gKC8qIGZuRG9uZSwgZm5GYWlsLCBmblByb2dyZXNzICovKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm5zID0gYXJndW1lbnRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4galF1ZXJ5LkRlZmVycmVkKGZ1bmN0aW9uIChuZXdEZWZlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5lYWNoKHR1cGxlcywgZnVuY3Rpb24gKGksIHR1cGxlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWFwIHR1cGxlcyAocHJvZ3Jlc3MsIGRvbmUsIGZhaWwpIHRvIGFyZ3VtZW50cyAoZG9uZSwgZmFpbCwgcHJvZ3Jlc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmbiA9IGlzRnVuY3Rpb24oZm5zW3R1cGxlWzRdXSkgJiYgZm5zW3R1cGxlWzRdXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWZlcnJlZC5wcm9ncmVzcyhmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5ub3RpZnkgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVmZXJyZWQuZG9uZShmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5yZXNvbHZlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZmVycmVkLmZhaWwoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVqZWN0IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmVycmVkW3R1cGxlWzFdXShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZWQgPSBmbiAmJiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJldHVybmVkICYmIGlzRnVuY3Rpb24ocmV0dXJuZWQucHJvbWlzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5lZC5wcm9taXNlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnByb2dyZXNzKG5ld0RlZmVyLm5vdGlmeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRvbmUobmV3RGVmZXIucmVzb2x2ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZhaWwobmV3RGVmZXIucmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGVmZXJbdHVwbGVbMF0gKyBcIldpdGhcIl0oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuID8gW3JldHVybmVkXSA6IGFyZ3VtZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZucyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5wcm9taXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCwgb25Qcm9ncmVzcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1heERlcHRoID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gcmVzb2x2ZShkZXB0aCwgZGVmZXJyZWQsIGhhbmRsZXIsIHNwZWNpYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gYXJndW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlnaHRUaHJvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmV0dXJuZWQsIHRoZW47XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIGRvdWJsZS1yZXNvbHV0aW9uIGF0dGVtcHRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoIDwgbWF4RGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybmVkID0gaGFuZGxlci5hcHBseSh0aGF0LCBhcmdzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC00OFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXR1cm5lZCA9PT0gZGVmZXJyZWQucHJvbWlzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbnMgMi4zLjMuMSwgMy41XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC03NVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJldHJpZXZlIGB0aGVuYCBvbmx5IG9uY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVuID0gcmV0dXJuZWQgJiZcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy40XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTY0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgY2hlY2sgb2JqZWN0cyBhbmQgZnVuY3Rpb25zIGZvciB0aGVuYWJpbGl0eVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAodHlwZW9mIHJldHVybmVkID09PSBcIm9iamVjdFwiIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcmV0dXJuZWQgPT09IFwiZnVuY3Rpb25cIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuZWQudGhlbjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBhIHJldHVybmVkIHRoZW5hYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24odGhlbikpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTcGVjaWFsIHByb2Nlc3NvcnMgKG5vdGlmeSkganVzdCB3YWl0IGZvciByZXNvbHV0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGVjaWFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVuLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBzcGVjaWFsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG1heERlcHRoLCBkZWZlcnJlZCwgVGhyb3dlciwgc3BlY2lhbClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBhbHNvIGhvb2sgaW50byBwcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5hbmQgZGlzcmVnYXJkIG9sZGVyIHJlc29sdXRpb24gdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhEZXB0aCsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVuLmNhbGwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBzcGVjaWFsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG1heERlcHRoLCBkZWZlcnJlZCwgVGhyb3dlciwgc3BlY2lhbCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5ub3RpZnlXaXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBhbGwgb3RoZXIgcmV0dXJuZWQgdmFsdWVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHN1YnN0aXR1dGUgaGFuZGxlcnMgcGFzcyBvbiBjb250ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlciAhPT0gSWRlbnRpdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmdzID0gW3JldHVybmVkXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgdGhlIHZhbHVlKHMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgcHJvY2VzcyBpcyByZXNvbHZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChzcGVjaWFsIHx8IGRlZmVycmVkLnJlc29sdmVXaXRoKSh0aGF0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IG5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBjYXRjaCBhbmQgcmVqZWN0IGV4Y2VwdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MgPSBzcGVjaWFsID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWdodFRocm93IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaWdodFRocm93KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5zdGFja1RyYWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjQuMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBwb3N0LXJlc29sdXRpb24gZXhjZXB0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlcHRoICsgMSA+PSBtYXhEZXB0aCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25seSBzdWJzdGl0dXRlIGhhbmRsZXJzIHBhc3Mgb24gY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyICE9PSBUaHJvd2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MgPSBbZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVqZWN0V2l0aCh0aGF0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmUtcmVzb2x2ZSBwcm9taXNlcyBpbW1lZGlhdGVseSB0byBkb2RnZSBmYWxzZSByZWplY3Rpb24gZnJvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdWJzZXF1ZW50IGVycm9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVwdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2Nlc3MoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCBhbiBvcHRpb25hbCBob29rIHRvIHJlY29yZCB0aGUgc3RhY2ssIGluIGNhc2Ugb2YgZXhjZXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaW5jZSBpdCdzIG90aGVyd2lzZSBsb3N0IHdoZW4gZXhlY3V0aW9uIGdvZXMgYXN5bmNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5zdGFja1RyYWNlID0galF1ZXJ5LkRlZmVycmVkLmdldFN0YWNrSG9vaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQocHJvY2Vzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4galF1ZXJ5LkRlZmVycmVkKGZ1bmN0aW9uIChuZXdEZWZlcikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvZ3Jlc3NfaGFuZGxlcnMuYWRkKCAuLi4gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR1cGxlc1swXVszXS5hZGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGVmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uKG9uUHJvZ3Jlc3MpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZGVudGl0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RlZmVyLm5vdGlmeVdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmdWxmaWxsZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR1cGxlc1sxXVszXS5hZGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGVmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uKG9uRnVsZmlsbGVkKSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GdWxmaWxsZWQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElkZW50aXR5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVqZWN0ZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR1cGxlc1syXVszXS5hZGQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3RGVmZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uKG9uUmVqZWN0ZWQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlamVjdGVkIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaHJvd2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkucHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBhIHByb21pc2UgZm9yIHRoaXMgZGVmZXJyZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgb2JqIGlzIHByb3ZpZGVkLCB0aGUgcHJvbWlzZSBhc3BlY3QgaXMgYWRkZWQgdG8gdGhlIG9iamVjdFxuICAgICAgICAgICAgICAgICAgICBwcm9taXNlOiBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqICE9IG51bGwgPyBqUXVlcnkuZXh0ZW5kKG9iaiwgcHJvbWlzZSkgOiBwcm9taXNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWZlcnJlZCA9IHt9O1xuXG4gICAgICAgICAgICAvLyBBZGQgbGlzdC1zcGVjaWZpYyBtZXRob2RzXG4gICAgICAgICAgICBqUXVlcnkuZWFjaCh0dXBsZXMsIGZ1bmN0aW9uIChpLCB0dXBsZSkge1xuICAgICAgICAgICAgICAgIHZhciBsaXN0ID0gdHVwbGVbMl0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlU3RyaW5nID0gdHVwbGVbNV07XG5cbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlLnByb2dyZXNzID0gbGlzdC5hZGRcbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlLmRvbmUgPSBsaXN0LmFkZFxuICAgICAgICAgICAgICAgIC8vIHByb21pc2UuZmFpbCA9IGxpc3QuYWRkXG4gICAgICAgICAgICAgICAgcHJvbWlzZVt0dXBsZVsxXV0gPSBsaXN0LmFkZDtcblxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBzdGF0ZVxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZVN0cmluZykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LmFkZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0YXRlID0gXCJyZXNvbHZlZFwiIChpLmUuLCBmdWxmaWxsZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RhdGUgPSBcInJlamVjdGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHN0YXRlU3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVqZWN0ZWRfY2FsbGJhY2tzLmRpc2FibGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGZ1bGZpbGxlZF9jYWxsYmFja3MuZGlzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgdHVwbGVzWzMgLSBpXVsyXS5kaXNhYmxlLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZWplY3RlZF9oYW5kbGVycy5kaXNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmdWxmaWxsZWRfaGFuZGxlcnMuZGlzYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgdHVwbGVzWzMgLSBpXVszXS5kaXNhYmxlLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBwcm9ncmVzc19jYWxsYmFja3MubG9ja1xuICAgICAgICAgICAgICAgICAgICAgICAgdHVwbGVzWzBdWzJdLmxvY2ssXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHByb2dyZXNzX2hhbmRsZXJzLmxvY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIHR1cGxlc1swXVszXS5sb2NrXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gcHJvZ3Jlc3NfaGFuZGxlcnMuZmlyZVxuICAgICAgICAgICAgICAgIC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5maXJlXG4gICAgICAgICAgICAgICAgLy8gcmVqZWN0ZWRfaGFuZGxlcnMuZmlyZVxuICAgICAgICAgICAgICAgIGxpc3QuYWRkKHR1cGxlWzNdLmZpcmUpO1xuXG4gICAgICAgICAgICAgICAgLy8gZGVmZXJyZWQubm90aWZ5ID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLm5vdGlmeVdpdGgoLi4uKSB9XG4gICAgICAgICAgICAgICAgLy8gZGVmZXJyZWQucmVzb2x2ZSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZXNvbHZlV2l0aCguLi4pIH1cbiAgICAgICAgICAgICAgICAvLyBkZWZlcnJlZC5yZWplY3QgPSBmdW5jdGlvbigpIHsgZGVmZXJyZWQucmVqZWN0V2l0aCguLi4pIH1cbiAgICAgICAgICAgICAgICBkZWZlcnJlZFt0dXBsZVswXV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmVycmVkW3R1cGxlWzBdICsgXCJXaXRoXCJdKHRoaXMgPT09IGRlZmVycmVkID8gdW5kZWZpbmVkIDogdGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIC8vIGRlZmVycmVkLm5vdGlmeVdpdGggPSBsaXN0LmZpcmVXaXRoXG4gICAgICAgICAgICAgICAgLy8gZGVmZXJyZWQucmVzb2x2ZVdpdGggPSBsaXN0LmZpcmVXaXRoXG4gICAgICAgICAgICAgICAgLy8gZGVmZXJyZWQucmVqZWN0V2l0aCA9IGxpc3QuZmlyZVdpdGhcbiAgICAgICAgICAgICAgICBkZWZlcnJlZFt0dXBsZVswXSArIFwiV2l0aFwiXSA9IGxpc3QuZmlyZVdpdGg7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgZGVmZXJyZWQgYSBwcm9taXNlXG4gICAgICAgICAgICBwcm9taXNlLnByb21pc2UoZGVmZXJyZWQpO1xuXG4gICAgICAgICAgICAvLyBDYWxsIGdpdmVuIGZ1bmMgaWYgYW55XG4gICAgICAgICAgICBpZiAoZnVuYykge1xuICAgICAgICAgICAgICAgIGZ1bmMuY2FsbChkZWZlcnJlZCwgZGVmZXJyZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBbGwgZG9uZSFcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZDtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBEZWZlcnJlZCBoZWxwZXJcbiAgICAgICAgd2hlbjogZnVuY3Rpb24gKHNpbmdsZVZhbHVlKSB7XG4gICAgICAgICAgICB2YXJcblxuICAgICAgICAgICAgICAgIC8vIGNvdW50IG9mIHVuY29tcGxldGVkIHN1Ym9yZGluYXRlc1xuICAgICAgICAgICAgICAgIHJlbWFpbmluZyA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cbiAgICAgICAgICAgICAgICAvLyBjb3VudCBvZiB1bnByb2Nlc3NlZCBhcmd1bWVudHNcbiAgICAgICAgICAgICAgICBpID0gcmVtYWluaW5nLFxuXG4gICAgICAgICAgICAgICAgLy8gc3Vib3JkaW5hdGUgZnVsZmlsbG1lbnQgZGF0YVxuICAgICAgICAgICAgICAgIHJlc29sdmVDb250ZXh0cyA9IEFycmF5KGkpLFxuICAgICAgICAgICAgICAgIHJlc29sdmVWYWx1ZXMgPSBzbGljZS5jYWxsKGFyZ3VtZW50cyksXG5cbiAgICAgICAgICAgICAgICAvLyB0aGUgbWFzdGVyIERlZmVycmVkXG4gICAgICAgICAgICAgICAgbWFzdGVyID0galF1ZXJ5LkRlZmVycmVkKCksXG5cbiAgICAgICAgICAgICAgICAvLyBzdWJvcmRpbmF0ZSBjYWxsYmFjayBmYWN0b3J5XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYyA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmVDb250ZXh0c1tpXSA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlVmFsdWVzW2ldID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBzbGljZS5jYWxsKGFyZ3VtZW50cykgOiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKC0tcmVtYWluaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hc3Rlci5yZXNvbHZlV2l0aChyZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFNpbmdsZS0gYW5kIGVtcHR5IGFyZ3VtZW50cyBhcmUgYWRvcHRlZCBsaWtlIFByb21pc2UucmVzb2x2ZVxuICAgICAgICAgICAgaWYgKHJlbWFpbmluZyA8PSAxKSB7XG4gICAgICAgICAgICAgICAgYWRvcHRWYWx1ZShzaW5nbGVWYWx1ZSwgbWFzdGVyLmRvbmUodXBkYXRlRnVuYyhpKSkucmVzb2x2ZSwgbWFzdGVyLnJlamVjdCxcbiAgICAgICAgICAgICAgICAgICAgIXJlbWFpbmluZyk7XG5cbiAgICAgICAgICAgICAgICAvLyBVc2UgLnRoZW4oKSB0byB1bndyYXAgc2Vjb25kYXJ5IHRoZW5hYmxlcyAoY2YuIGdoLTMwMDApXG4gICAgICAgICAgICAgICAgaWYgKG1hc3Rlci5zdGF0ZSgpID09PSBcInBlbmRpbmdcIiB8fFxuICAgICAgICAgICAgICAgICAgICBpc0Z1bmN0aW9uKHJlc29sdmVWYWx1ZXNbaV0gJiYgcmVzb2x2ZVZhbHVlc1tpXS50aGVuKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXN0ZXIudGhlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTXVsdGlwbGUgYXJndW1lbnRzIGFyZSBhZ2dyZWdhdGVkIGxpa2UgUHJvbWlzZS5hbGwgYXJyYXkgZWxlbWVudHNcbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICBhZG9wdFZhbHVlKHJlc29sdmVWYWx1ZXNbaV0sIHVwZGF0ZUZ1bmMoaSksIG1hc3Rlci5yZWplY3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWFzdGVyLnByb21pc2UoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbi8vIFRoZXNlIHVzdWFsbHkgaW5kaWNhdGUgYSBwcm9ncmFtbWVyIG1pc3Rha2UgZHVyaW5nIGRldmVsb3BtZW50LFxuLy8gd2FybiBhYm91dCB0aGVtIEFTQVAgcmF0aGVyIHRoYW4gc3dhbGxvd2luZyB0aGVtIGJ5IGRlZmF1bHQuXG4gICAgdmFyIHJlcnJvck5hbWVzID0gL14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87XG5cbiAgICBqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayA9IGZ1bmN0aW9uIChlcnJvciwgc3RhY2spIHtcblxuICAgICAgICAvLyBTdXBwb3J0OiBJRSA4IC0gOSBvbmx5XG4gICAgICAgIC8vIENvbnNvbGUgZXhpc3RzIHdoZW4gZGV2IHRvb2xzIGFyZSBvcGVuLCB3aGljaCBjYW4gaGFwcGVuIGF0IGFueSB0aW1lXG4gICAgICAgIGlmICh3aW5kb3cuY29uc29sZSAmJiB3aW5kb3cuY29uc29sZS53YXJuICYmIGVycm9yICYmIHJlcnJvck5hbWVzLnRlc3QoZXJyb3IubmFtZSkpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jb25zb2xlLndhcm4oXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIiArIGVycm9yLm1lc3NhZ2UsIGVycm9yLnN0YWNrLCBzdGFjayk7XG4gICAgICAgIH1cbiAgICB9O1xuXG5cbiAgICBqUXVlcnkucmVhZHlFeGNlcHRpb24gPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH07XG5cblxuLy8gVGhlIGRlZmVycmVkIHVzZWQgb24gRE9NIHJlYWR5XG4gICAgdmFyIHJlYWR5TGlzdCA9IGpRdWVyeS5EZWZlcnJlZCgpO1xuXG4gICAgalF1ZXJ5LmZuLnJlYWR5ID0gZnVuY3Rpb24gKGZuKSB7XG5cbiAgICAgICAgcmVhZHlMaXN0XG4gICAgICAgICAgICAudGhlbihmbilcblxuICAgICAgICAgICAgLy8gV3JhcCBqUXVlcnkucmVhZHlFeGNlcHRpb24gaW4gYSBmdW5jdGlvbiBzbyB0aGF0IHRoZSBsb29rdXBcbiAgICAgICAgICAgIC8vIGhhcHBlbnMgYXQgdGhlIHRpbWUgb2YgZXJyb3IgaGFuZGxpbmcgaW5zdGVhZCBvZiBjYWxsYmFja1xuICAgICAgICAgICAgLy8gcmVnaXN0cmF0aW9uLlxuICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5yZWFkeUV4Y2VwdGlvbihlcnJvcik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgalF1ZXJ5LmV4dGVuZCh7XG5cbiAgICAgICAgLy8gSXMgdGhlIERPTSByZWFkeSB0byBiZSB1c2VkPyBTZXQgdG8gdHJ1ZSBvbmNlIGl0IG9jY3Vycy5cbiAgICAgICAgaXNSZWFkeTogZmFsc2UsXG5cbiAgICAgICAgLy8gQSBjb3VudGVyIHRvIHRyYWNrIGhvdyBtYW55IGl0ZW1zIHRvIHdhaXQgZm9yIGJlZm9yZVxuICAgICAgICAvLyB0aGUgcmVhZHkgZXZlbnQgZmlyZXMuIFNlZSAjNjc4MVxuICAgICAgICByZWFkeVdhaXQ6IDEsXG5cbiAgICAgICAgLy8gSGFuZGxlIHdoZW4gdGhlIERPTSBpcyByZWFkeVxuICAgICAgICByZWFkeTogZnVuY3Rpb24gKHdhaXQpIHtcblxuICAgICAgICAgICAgLy8gQWJvcnQgaWYgdGhlcmUgYXJlIHBlbmRpbmcgaG9sZHMgb3Igd2UncmUgYWxyZWFkeSByZWFkeVxuICAgICAgICAgICAgaWYgKHdhaXQgPT09IHRydWUgPyAtLWpRdWVyeS5yZWFkeVdhaXQgOiBqUXVlcnkuaXNSZWFkeSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhhdCB0aGUgRE9NIGlzIHJlYWR5XG4gICAgICAgICAgICBqUXVlcnkuaXNSZWFkeSA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIElmIGEgbm9ybWFsIERPTSBSZWFkeSBldmVudCBmaXJlZCwgZGVjcmVtZW50LCBhbmQgd2FpdCBpZiBuZWVkIGJlXG4gICAgICAgICAgICBpZiAod2FpdCAhPT0gdHJ1ZSAmJiAtLWpRdWVyeS5yZWFkeVdhaXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBhcmUgZnVuY3Rpb25zIGJvdW5kLCB0byBleGVjdXRlXG4gICAgICAgICAgICByZWFkeUxpc3QucmVzb2x2ZVdpdGgoZG9jdW1lbnQsIFtqUXVlcnldKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgalF1ZXJ5LnJlYWR5LnRoZW4gPSByZWFkeUxpc3QudGhlbjtcblxuLy8gVGhlIHJlYWR5IGV2ZW50IGhhbmRsZXIgYW5kIHNlbGYgY2xlYW51cCBtZXRob2RcbiAgICBmdW5jdGlvbiBjb21wbGV0ZWQoKSB7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLCBjb21wbGV0ZWQpO1xuICAgICAgICBqUXVlcnkucmVhZHkoKTtcbiAgICB9XG5cbi8vIENhdGNoIGNhc2VzIHdoZXJlICQoZG9jdW1lbnQpLnJlYWR5KCkgaXMgY2FsbGVkXG4vLyBhZnRlciB0aGUgYnJvd3NlciBldmVudCBoYXMgYWxyZWFkeSBvY2N1cnJlZC5cbi8vIFN1cHBvcnQ6IElFIDw9OSAtIDEwIG9ubHlcbi8vIE9sZGVyIElFIHNvbWV0aW1lcyBzaWduYWxzIFwiaW50ZXJhY3RpdmVcIiB0b28gc29vblxuICAgIGlmIChkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgfHxcbiAgICAgICAgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwpKSB7XG5cbiAgICAgICAgLy8gSGFuZGxlIGl0IGFzeW5jaHJvbm91c2x5IHRvIGFsbG93IHNjcmlwdHMgdGhlIG9wcG9ydHVuaXR5IHRvIGRlbGF5IHJlYWR5XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGpRdWVyeS5yZWFkeSk7XG5cbiAgICB9IGVsc2Uge1xuXG4gICAgICAgIC8vIFVzZSB0aGUgaGFuZHkgZXZlbnQgY2FsbGJhY2tcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkKTtcblxuICAgICAgICAvLyBBIGZhbGxiYWNrIHRvIHdpbmRvdy5vbmxvYWQsIHRoYXQgd2lsbCBhbHdheXMgd29ya1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgY29tcGxldGVkKTtcbiAgICB9XG5cblxuLy8gTXVsdGlmdW5jdGlvbmFsIG1ldGhvZCB0byBnZXQgYW5kIHNldCB2YWx1ZXMgb2YgYSBjb2xsZWN0aW9uXG4vLyBUaGUgdmFsdWUvcyBjYW4gb3B0aW9uYWxseSBiZSBleGVjdXRlZCBpZiBpdCdzIGEgZnVuY3Rpb25cbiAgICB2YXIgYWNjZXNzID0gZnVuY3Rpb24gKGVsZW1zLCBmbiwga2V5LCB2YWx1ZSwgY2hhaW5hYmxlLCBlbXB0eUdldCwgcmF3KSB7XG4gICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgIGxlbiA9IGVsZW1zLmxlbmd0aCxcbiAgICAgICAgICAgIGJ1bGsgPSBrZXkgPT0gbnVsbDtcblxuICAgICAgICAvLyBTZXRzIG1hbnkgdmFsdWVzXG4gICAgICAgIGlmICh0b1R5cGUoa2V5KSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgY2hhaW5hYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAoaSBpbiBrZXkpIHtcbiAgICAgICAgICAgICAgICBhY2Nlc3MoZWxlbXMsIGZuLCBpLCBrZXlbaV0sIHRydWUsIGVtcHR5R2V0LCByYXcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBTZXRzIG9uZSB2YWx1ZVxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNoYWluYWJsZSA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICghaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByYXcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnVsaykge1xuXG4gICAgICAgICAgICAgICAgLy8gQnVsayBvcGVyYXRpb25zIHJ1biBhZ2FpbnN0IHRoZSBlbnRpcmUgc2V0XG4gICAgICAgICAgICAgICAgaWYgKHJhdykge1xuICAgICAgICAgICAgICAgICAgICBmbi5jYWxsKGVsZW1zLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGZuID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAvLyAuLi5leGNlcHQgd2hlbiBleGVjdXRpbmcgZnVuY3Rpb24gdmFsdWVzXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnVsayA9IGZuO1xuICAgICAgICAgICAgICAgICAgICBmbiA9IGZ1bmN0aW9uIChlbGVtLCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYnVsay5jYWxsKGpRdWVyeShlbGVtKSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGZuKSB7XG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmbihcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1zW2ldLCBrZXksIHJhdyA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmNhbGwoZWxlbXNbaV0sIGksIGZuKGVsZW1zW2ldLCBrZXkpKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFpbmFibGUpIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEdldHNcbiAgICAgICAgaWYgKGJ1bGspIHtcbiAgICAgICAgICAgIHJldHVybiBmbi5jYWxsKGVsZW1zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsZW4gPyBmbihlbGVtc1swXSwga2V5KSA6IGVtcHR5R2V0O1xuICAgIH07XG5cblxuLy8gTWF0Y2hlcyBkYXNoZWQgc3RyaW5nIGZvciBjYW1lbGl6aW5nXG4gICAgdmFyIHJtc1ByZWZpeCA9IC9eLW1zLS8sXG4gICAgICAgIHJkYXNoQWxwaGEgPSAvLShbYS16XSkvZztcblxuLy8gVXNlZCBieSBjYW1lbENhc2UgYXMgY2FsbGJhY2sgdG8gcmVwbGFjZSgpXG4gICAgZnVuY3Rpb24gZmNhbWVsQ2FzZShhbGwsIGxldHRlcikge1xuICAgICAgICByZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4vLyBDb252ZXJ0IGRhc2hlZCB0byBjYW1lbENhc2U7IHVzZWQgYnkgdGhlIGNzcyBhbmQgZGF0YSBtb2R1bGVzXG4vLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDE1XG4vLyBNaWNyb3NvZnQgZm9yZ290IHRvIGh1bXAgdGhlaXIgdmVuZG9yIHByZWZpeCAoIzk1NzIpXG4gICAgZnVuY3Rpb24gY2FtZWxDYXNlKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2Uocm1zUHJlZml4LCBcIm1zLVwiKS5yZXBsYWNlKHJkYXNoQWxwaGEsIGZjYW1lbENhc2UpO1xuICAgIH1cblxuICAgIHZhciBhY2NlcHREYXRhID0gZnVuY3Rpb24gKG93bmVyKSB7XG5cbiAgICAgICAgLy8gQWNjZXB0cyBvbmx5OlxuICAgICAgICAvLyAgLSBOb2RlXG4gICAgICAgIC8vICAgIC0gTm9kZS5FTEVNRU5UX05PREVcbiAgICAgICAgLy8gICAgLSBOb2RlLkRPQ1VNRU5UX05PREVcbiAgICAgICAgLy8gIC0gT2JqZWN0XG4gICAgICAgIC8vICAgIC0gQW55XG4gICAgICAgIHJldHVybiBvd25lci5ub2RlVHlwZSA9PT0gMSB8fCBvd25lci5ub2RlVHlwZSA9PT0gOSB8fCAhKCtvd25lci5ub2RlVHlwZSk7XG4gICAgfTtcblxuXG4gICAgZnVuY3Rpb24gRGF0YSgpIHtcbiAgICAgICAgdGhpcy5leHBhbmRvID0galF1ZXJ5LmV4cGFuZG8gKyBEYXRhLnVpZCsrO1xuICAgIH1cblxuICAgIERhdGEudWlkID0gMTtcblxuICAgIERhdGEucHJvdG90eXBlID0ge1xuXG4gICAgICAgIGNhY2hlOiBmdW5jdGlvbiAob3duZXIpIHtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG93bmVyIG9iamVjdCBhbHJlYWR5IGhhcyBhIGNhY2hlXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBvd25lclt0aGlzLmV4cGFuZG9dO1xuXG4gICAgICAgICAgICAvLyBJZiBub3QsIGNyZWF0ZSBvbmVcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgLy8gV2UgY2FuIGFjY2VwdCBkYXRhIGZvciBub24tZWxlbWVudCBub2RlcyBpbiBtb2Rlcm4gYnJvd3NlcnMsXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIHNob3VsZCBub3QsIHNlZSAjODMzNS5cbiAgICAgICAgICAgICAgICAvLyBBbHdheXMgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cbiAgICAgICAgICAgICAgICBpZiAoYWNjZXB0RGF0YShvd25lcikpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBpdCBpcyBhIG5vZGUgdW5saWtlbHkgdG8gYmUgc3RyaW5naWZ5LWVkIG9yIGxvb3BlZCBvdmVyXG4gICAgICAgICAgICAgICAgICAgIC8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChvd25lci5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXJbdGhpcy5leHBhbmRvXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2Ugc2VjdXJlIGl0IGluIGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbmZpZ3VyYWJsZSBtdXN0IGJlIHRydWUgdG8gYWxsb3cgdGhlIHByb3BlcnR5IHRvIGJlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGVkIHdoZW4gZGF0YSBpcyByZW1vdmVkXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3duZXIsIHRoaXMuZXhwYW5kbywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKG93bmVyLCBkYXRhLCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIHByb3AsXG4gICAgICAgICAgICAgICAgY2FjaGUgPSB0aGlzLmNhY2hlKG93bmVyKTtcblxuICAgICAgICAgICAgLy8gSGFuZGxlOiBbIG93bmVyLCBrZXksIHZhbHVlIF0gYXJnc1xuICAgICAgICAgICAgLy8gQWx3YXlzIHVzZSBjYW1lbENhc2Uga2V5IChnaC0yMjU3KVxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgY2FjaGVbY2FtZWxDYXNlKGRhdGEpXSA9IHZhbHVlO1xuXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlOiBbIG93bmVyLCB7IHByb3BlcnRpZXMgfSBdIGFyZ3NcbiAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAvLyBDb3B5IHRoZSBwcm9wZXJ0aWVzIG9uZS1ieS1vbmUgdG8gdGhlIGNhY2hlIG9iamVjdFxuICAgICAgICAgICAgICAgIGZvciAocHJvcCBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlW2NhbWVsQ2FzZShwcm9wKV0gPSBkYXRhW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjYWNoZTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAob3duZXIsIGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICB0aGlzLmNhY2hlKG93bmVyKSA6XG5cbiAgICAgICAgICAgICAgICAvLyBBbHdheXMgdXNlIGNhbWVsQ2FzZSBrZXkgKGdoLTIyNTcpXG4gICAgICAgICAgICAgICAgb3duZXJbdGhpcy5leHBhbmRvXSAmJiBvd25lclt0aGlzLmV4cGFuZG9dW2NhbWVsQ2FzZShrZXkpXTtcbiAgICAgICAgfSxcbiAgICAgICAgYWNjZXNzOiBmdW5jdGlvbiAob3duZXIsIGtleSwgdmFsdWUpIHtcblxuICAgICAgICAgICAgLy8gSW4gY2FzZXMgd2hlcmUgZWl0aGVyOlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgMS4gTm8ga2V5IHdhcyBzcGVjaWZpZWRcbiAgICAgICAgICAgIC8vICAgMi4gQSBzdHJpbmcga2V5IHdhcyBzcGVjaWZpZWQsIGJ1dCBubyB2YWx1ZSBwcm92aWRlZFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFRha2UgdGhlIFwicmVhZFwiIHBhdGggYW5kIGFsbG93IHRoZSBnZXQgbWV0aG9kIHRvIGRldGVybWluZVxuICAgICAgICAgICAgLy8gd2hpY2ggdmFsdWUgdG8gcmV0dXJuLCByZXNwZWN0aXZlbHkgZWl0aGVyOlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgMS4gVGhlIGVudGlyZSBjYWNoZSBvYmplY3RcbiAgICAgICAgICAgIC8vICAgMi4gVGhlIGRhdGEgc3RvcmVkIGF0IHRoZSBrZXlcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHxcbiAgICAgICAgICAgICAgICAoKGtleSAmJiB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkKSkge1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KG93bmVyLCBrZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaGVuIHRoZSBrZXkgaXMgbm90IGEgc3RyaW5nLCBvciBib3RoIGEga2V5IGFuZCB2YWx1ZVxuICAgICAgICAgICAgLy8gYXJlIHNwZWNpZmllZCwgc2V0IG9yIGV4dGVuZCAoZXhpc3Rpbmcgb2JqZWN0cykgd2l0aCBlaXRoZXI6XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAxLiBBbiBvYmplY3Qgb2YgcHJvcGVydGllc1xuICAgICAgICAgICAgLy8gICAyLiBBIGtleSBhbmQgdmFsdWVcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICB0aGlzLnNldChvd25lciwga2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBcInNldFwiIHBhdGggY2FuIGhhdmUgdHdvIHBvc3NpYmxlIGVudHJ5IHBvaW50c1xuICAgICAgICAgICAgLy8gcmV0dXJuIHRoZSBleHBlY3RlZCBkYXRhIGJhc2VkIG9uIHdoaWNoIHBhdGggd2FzIHRha2VuWypdXG4gICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoga2V5O1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChvd25lciwga2V5KSB7XG4gICAgICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgICAgICBjYWNoZSA9IG93bmVyW3RoaXMuZXhwYW5kb107XG5cbiAgICAgICAgICAgIGlmIChjYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcblxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgYXJyYXkgb3Igc3BhY2Ugc2VwYXJhdGVkIHN0cmluZyBvZiBrZXlzXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoa2V5KSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGtleSBpcyBhbiBhcnJheSBvZiBrZXlzLi4uXG4gICAgICAgICAgICAgICAgICAgIC8vIFdlIGFsd2F5cyBzZXQgY2FtZWxDYXNlIGtleXMsIHNvIHJlbW92ZSB0aGF0LlxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXkubWFwKGNhbWVsQ2FzZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gY2FtZWxDYXNlKGtleSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYSBrZXkgd2l0aCB0aGUgc3BhY2VzIGV4aXN0cywgdXNlIGl0LlxuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UsIGNyZWF0ZSBhbiBhcnJheSBieSBtYXRjaGluZyBub24td2hpdGVzcGFjZVxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBrZXkgaW4gY2FjaGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgW2tleV0gOlxuICAgICAgICAgICAgICAgICAgICAgICAgKGtleS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaSA9IGtleS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjYWNoZVtrZXlbaV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBleHBhbmRvIGlmIHRoZXJlJ3Mgbm8gbW9yZSBkYXRhXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQgfHwgalF1ZXJ5LmlzRW1wdHlPYmplY3QoY2FjaGUpKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1XG4gICAgICAgICAgICAgICAgLy8gV2Via2l0ICYgQmxpbmsgcGVyZm9ybWFuY2Ugc3VmZmVycyB3aGVuIGRlbGV0aW5nIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICAvLyBmcm9tIERPTSBub2Rlcywgc28gc2V0IHRvIHVuZGVmaW5lZCBpbnN0ZWFkXG4gICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzc4NjA3IChidWcgcmVzdHJpY3RlZClcbiAgICAgICAgICAgICAgICBpZiAob3duZXIubm9kZVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgb3duZXJbdGhpcy5leHBhbmRvXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb3duZXJbdGhpcy5leHBhbmRvXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGhhc0RhdGE6IGZ1bmN0aW9uIChvd25lcikge1xuICAgICAgICAgICAgdmFyIGNhY2hlID0gb3duZXJbdGhpcy5leHBhbmRvXTtcbiAgICAgICAgICAgIHJldHVybiBjYWNoZSAhPT0gdW5kZWZpbmVkICYmICFqUXVlcnkuaXNFbXB0eU9iamVjdChjYWNoZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBkYXRhUHJpdiA9IG5ldyBEYXRhKCk7XG5cbiAgICB2YXIgZGF0YVVzZXIgPSBuZXcgRGF0YSgpO1xuXG5cbi8vXHRJbXBsZW1lbnRhdGlvbiBTdW1tYXJ5XG4vL1xuLy9cdDEuIEVuZm9yY2UgQVBJIHN1cmZhY2UgYW5kIHNlbWFudGljIGNvbXBhdGliaWxpdHkgd2l0aCAxLjkueCBicmFuY2hcbi8vXHQyLiBJbXByb3ZlIHRoZSBtb2R1bGUncyBtYWludGFpbmFiaWxpdHkgYnkgcmVkdWNpbmcgdGhlIHN0b3JhZ2Vcbi8vXHRcdHBhdGhzIHRvIGEgc2luZ2xlIG1lY2hhbmlzbS5cbi8vXHQzLiBVc2UgdGhlIHNhbWUgc2luZ2xlIG1lY2hhbmlzbSB0byBzdXBwb3J0IFwicHJpdmF0ZVwiIGFuZCBcInVzZXJcIiBkYXRhLlxuLy9cdDQuIF9OZXZlcl8gZXhwb3NlIFwicHJpdmF0ZVwiIGRhdGEgdG8gdXNlciBjb2RlIChUT0RPOiBEcm9wIF9kYXRhLCBfcmVtb3ZlRGF0YSlcbi8vXHQ1LiBBdm9pZCBleHBvc2luZyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIG9uIHVzZXIgb2JqZWN0cyAoZWcuIGV4cGFuZG8gcHJvcGVydGllcylcbi8vXHQ2LiBQcm92aWRlIGEgY2xlYXIgcGF0aCBmb3IgaW1wbGVtZW50YXRpb24gdXBncmFkZSB0byBXZWFrTWFwIGluIDIwMTRcblxuICAgIHZhciByYnJhY2UgPSAvXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sXG4gICAgICAgIHJtdWx0aURhc2ggPSAvW0EtWl0vZztcblxuICAgIGZ1bmN0aW9uIGdldERhdGEoZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSA9PT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEgPT09IFwiZmFsc2VcIikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEgPT09IFwibnVsbFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9ubHkgY29udmVydCB0byBhIG51bWJlciBpZiBpdCBkb2Vzbid0IGNoYW5nZSB0aGUgc3RyaW5nXG4gICAgICAgIGlmIChkYXRhID09PSArZGF0YSArIFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiArZGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyYnJhY2UudGVzdChkYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkYXRhQXR0cihlbGVtLCBrZXksIGRhdGEpIHtcbiAgICAgICAgdmFyIG5hbWU7XG5cbiAgICAgICAgLy8gSWYgbm90aGluZyB3YXMgZm91bmQgaW50ZXJuYWxseSwgdHJ5IHRvIGZldGNoIGFueVxuICAgICAgICAvLyBkYXRhIGZyb20gdGhlIEhUTUw1IGRhdGEtKiBhdHRyaWJ1dGVcbiAgICAgICAgaWYgKGRhdGEgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICBuYW1lID0gXCJkYXRhLVwiICsga2V5LnJlcGxhY2Uocm11bHRpRGFzaCwgXCItJCZcIikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGRhdGEgPSBlbGVtLmdldEF0dHJpYnV0ZShuYW1lKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGdldERhdGEoZGF0YSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGRhdGEgc28gaXQgaXNuJ3QgY2hhbmdlZCBsYXRlclxuICAgICAgICAgICAgICAgIGRhdGFVc2VyLnNldChlbGVtLCBrZXksIGRhdGEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGpRdWVyeS5leHRlbmQoe1xuICAgICAgICBoYXNEYXRhOiBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFVc2VyLmhhc0RhdGEoZWxlbSkgfHwgZGF0YVByaXYuaGFzRGF0YShlbGVtKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFVc2VyLmFjY2VzcyhlbGVtLCBuYW1lLCBkYXRhKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVEYXRhOiBmdW5jdGlvbiAoZWxlbSwgbmFtZSkge1xuICAgICAgICAgICAgZGF0YVVzZXIucmVtb3ZlKGVsZW0sIG5hbWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRPRE86IE5vdyB0aGF0IGFsbCBjYWxscyB0byBfZGF0YSBhbmQgX3JlbW92ZURhdGEgaGF2ZSBiZWVuIHJlcGxhY2VkXG4gICAgICAgIC8vIHdpdGggZGlyZWN0IGNhbGxzIHRvIGRhdGFQcml2IG1ldGhvZHMsIHRoZXNlIGNhbiBiZSBkZXByZWNhdGVkLlxuICAgICAgICBfZGF0YTogZnVuY3Rpb24gKGVsZW0sIG5hbWUsIGRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhUHJpdi5hY2Nlc3MoZWxlbSwgbmFtZSwgZGF0YSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX3JlbW92ZURhdGE6IGZ1bmN0aW9uIChlbGVtLCBuYW1lKSB7XG4gICAgICAgICAgICBkYXRhUHJpdi5yZW1vdmUoZWxlbSwgbmFtZSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICBkYXRhOiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGksIG5hbWUsIGRhdGEsXG4gICAgICAgICAgICAgICAgZWxlbSA9IHRoaXNbMF0sXG4gICAgICAgICAgICAgICAgYXR0cnMgPSBlbGVtICYmIGVsZW0uYXR0cmlidXRlcztcblxuICAgICAgICAgICAgLy8gR2V0cyBhbGwgdmFsdWVzXG4gICAgICAgICAgICBpZiAoa2V5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGFVc2VyLmdldChlbGVtKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAhZGF0YVByaXYuZ2V0KGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gYXR0cnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgMTEgb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBhdHRycyBlbGVtZW50cyBjYW4gYmUgbnVsbCAoIzE0ODk0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gYXR0cnNbaV0ubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUuaW5kZXhPZihcImRhdGEtXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gY2FtZWxDYXNlKG5hbWUuc2xpY2UoNSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUF0dHIoZWxlbSwgbmFtZSwgZGF0YVtuYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUHJpdi5zZXQoZWxlbSwgXCJoYXNEYXRhQXR0cnNcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU2V0cyBtdWx0aXBsZSB2YWx1ZXNcbiAgICAgICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFVc2VyLnNldCh0aGlzLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzKHRoaXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhO1xuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGNhbGxpbmcgalF1ZXJ5IG9iamVjdCAoZWxlbWVudCBtYXRjaGVzKSBpcyBub3QgZW1wdHlcbiAgICAgICAgICAgICAgICAvLyAoYW5kIHRoZXJlZm9yZSBoYXMgYW4gZWxlbWVudCBhcHBlYXJzIGF0IHRoaXNbIDAgXSkgYW5kIHRoZVxuICAgICAgICAgICAgICAgIC8vIGB2YWx1ZWAgcGFyYW1ldGVyIHdhcyBub3QgdW5kZWZpbmVkLiBBbiBlbXB0eSBqUXVlcnkgb2JqZWN0XG4gICAgICAgICAgICAgICAgLy8gd2lsbCByZXN1bHQgaW4gYHVuZGVmaW5lZGAgZm9yIGVsZW0gPSB0aGlzWyAwIF0gd2hpY2ggd2lsbFxuICAgICAgICAgICAgICAgIC8vIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhbiBhdHRlbXB0IHRvIHJlYWQgYSBkYXRhIGNhY2hlIGlzIG1hZGUuXG4gICAgICAgICAgICAgICAgaWYgKGVsZW0gJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEF0dGVtcHQgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgY2FjaGVcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGtleSB3aWxsIGFsd2F5cyBiZSBjYW1lbENhc2VkIGluIERhdGFcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGFVc2VyLmdldChlbGVtLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEF0dGVtcHQgdG8gXCJkaXNjb3ZlclwiIHRoZSBkYXRhIGluXG4gICAgICAgICAgICAgICAgICAgIC8vIEhUTUw1IGN1c3RvbSBkYXRhLSogYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGFBdHRyKGVsZW0sIGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gV2UgdHJpZWQgcmVhbGx5IGhhcmQsIGJ1dCB0aGUgZGF0YSBkb2Vzbid0IGV4aXN0LlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBkYXRhLi4uXG4gICAgICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBXZSBhbHdheXMgc3RvcmUgdGhlIGNhbWVsQ2FzZWQga2V5XG4gICAgICAgICAgICAgICAgICAgIGRhdGFVc2VyLnNldCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSwgbnVsbCwgdHJ1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlRGF0YTogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGF0YVVzZXIucmVtb3ZlKHRoaXMsIGtleSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICBqUXVlcnkuZXh0ZW5kKHtcbiAgICAgICAgcXVldWU6IGZ1bmN0aW9uIChlbGVtLCB0eXBlLCBkYXRhKSB7XG4gICAgICAgICAgICB2YXIgcXVldWU7XG5cbiAgICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICh0eXBlIHx8IFwiZnhcIikgKyBcInF1ZXVlXCI7XG4gICAgICAgICAgICAgICAgcXVldWUgPSBkYXRhUHJpdi5nZXQoZWxlbSwgdHlwZSk7XG5cbiAgICAgICAgICAgICAgICAvLyBTcGVlZCB1cCBkZXF1ZXVlIGJ5IGdldHRpbmcgb3V0IHF1aWNrbHkgaWYgdGhpcyBpcyBqdXN0IGEgbG9va3VwXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFxdWV1ZSB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZSA9IGRhdGFQcml2LmFjY2VzcyhlbGVtLCB0eXBlLCBqUXVlcnkubWFrZUFycmF5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHF1ZXVlIHx8IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRlcXVldWU6IGZ1bmN0aW9uIChlbGVtLCB0eXBlKSB7XG4gICAgICAgICAgICB0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cbiAgICAgICAgICAgIHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZShlbGVtLCB0eXBlKSxcbiAgICAgICAgICAgICAgICBzdGFydExlbmd0aCA9IHF1ZXVlLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBmbiA9IHF1ZXVlLnNoaWZ0KCksXG4gICAgICAgICAgICAgICAgaG9va3MgPSBqUXVlcnkuX3F1ZXVlSG9va3MoZWxlbSwgdHlwZSksXG4gICAgICAgICAgICAgICAgbmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmRlcXVldWUoZWxlbSwgdHlwZSk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGZ4IHF1ZXVlIGlzIGRlcXVldWVkLCBhbHdheXMgcmVtb3ZlIHRoZSBwcm9ncmVzcyBzZW50aW5lbFxuICAgICAgICAgICAgaWYgKGZuID09PSBcImlucHJvZ3Jlc3NcIikge1xuICAgICAgICAgICAgICAgIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICBzdGFydExlbmd0aC0tO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZm4pIHtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBhIHByb2dyZXNzIHNlbnRpbmVsIHRvIHByZXZlbnQgdGhlIGZ4IHF1ZXVlIGZyb20gYmVpbmdcbiAgICAgICAgICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGRlcXVldWVkXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwiZnhcIikge1xuICAgICAgICAgICAgICAgICAgICBxdWV1ZS51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDbGVhciB1cCB0aGUgbGFzdCBxdWV1ZSBzdG9wIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgZGVsZXRlIGhvb2tzLnN0b3A7XG4gICAgICAgICAgICAgICAgZm4uY2FsbChlbGVtLCBuZXh0LCBob29rcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghc3RhcnRMZW5ndGggJiYgaG9va3MpIHtcbiAgICAgICAgICAgICAgICBob29rcy5lbXB0eS5maXJlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gTm90IHB1YmxpYyAtIGdlbmVyYXRlIGEgcXVldWVIb29rcyBvYmplY3QsIG9yIHJldHVybiB0aGUgY3VycmVudCBvbmVcbiAgICAgICAgX3F1ZXVlSG9va3M6IGZ1bmN0aW9uIChlbGVtLCB0eXBlKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdHlwZSArIFwicXVldWVIb29rc1wiO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFQcml2LmdldChlbGVtLCBrZXkpIHx8IGRhdGFQcml2LmFjY2VzcyhlbGVtLCBrZXksIHtcbiAgICAgICAgICAgICAgICBlbXB0eTogalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFQcml2LnJlbW92ZShlbGVtLCBbdHlwZSArIFwicXVldWVcIiwga2V5XSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgICAgcXVldWU6IGZ1bmN0aW9uICh0eXBlLCBkYXRhKSB7XG4gICAgICAgICAgICB2YXIgc2V0dGVyID0gMjtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgdHlwZSA9IFwiZnhcIjtcbiAgICAgICAgICAgICAgICBzZXR0ZXItLTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCBzZXR0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4galF1ZXJ5LnF1ZXVlKHRoaXNbMF0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZGF0YSA9PT0gdW5kZWZpbmVkID9cbiAgICAgICAgICAgICAgICB0aGlzIDpcbiAgICAgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcXVldWUgPSBqUXVlcnkucXVldWUodGhpcywgdHlwZSwgZGF0YSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRW5zdXJlIGEgaG9va3MgZm9yIHRoaXMgcXVldWVcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5Ll9xdWV1ZUhvb2tzKHRoaXMsIHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSBcImZ4XCIgJiYgcXVldWVbMF0gIT09IFwiaW5wcm9ncmVzc1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZGVxdWV1ZSh0aGlzLCB0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkZXF1ZXVlOiBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmRlcXVldWUodGhpcywgdHlwZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJRdWV1ZTogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnF1ZXVlKHR5cGUgfHwgXCJmeFwiLCBbXSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gR2V0IGEgcHJvbWlzZSByZXNvbHZlZCB3aGVuIHF1ZXVlcyBvZiBhIGNlcnRhaW4gdHlwZVxuICAgICAgICAvLyBhcmUgZW1wdGllZCAoZnggaXMgdGhlIHR5cGUgYnkgZGVmYXVsdClcbiAgICAgICAgcHJvbWlzZTogZnVuY3Rpb24gKHR5cGUsIG9iaikge1xuICAgICAgICAgICAgdmFyIHRtcCxcbiAgICAgICAgICAgICAgICBjb3VudCA9IDEsXG4gICAgICAgICAgICAgICAgZGVmZXIgPSBqUXVlcnkuRGVmZXJyZWQoKSxcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IHRoaXMsXG4gICAgICAgICAgICAgICAgaSA9IHRoaXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHJlc29sdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKC0tY291bnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlci5yZXNvbHZlV2l0aChlbGVtZW50cywgW2VsZW1lbnRzXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBvYmogPSB0eXBlO1xuICAgICAgICAgICAgICAgIHR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cbiAgICAgICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgICAgICB0bXAgPSBkYXRhUHJpdi5nZXQoZWxlbWVudHNbaV0sIHR5cGUgKyBcInF1ZXVlSG9va3NcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRtcCAmJiB0bXAuZW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgdG1wLmVtcHR5LmFkZChyZXNvbHZlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXIucHJvbWlzZShvYmopO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdmFyIHBudW0gPSAoL1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8pLnNvdXJjZTtcblxuICAgIHZhciByY3NzTnVtID0gbmV3IFJlZ0V4cChcIl4oPzooWystXSk9fCkoXCIgKyBwbnVtICsgXCIpKFthLXolXSopJFwiLCBcImlcIik7XG5cblxuICAgIHZhciBjc3NFeHBhbmQgPSBbXCJUb3BcIiwgXCJSaWdodFwiLCBcIkJvdHRvbVwiLCBcIkxlZnRcIl07XG5cbiAgICB2YXIgaXNIaWRkZW5XaXRoaW5UcmVlID0gZnVuY3Rpb24gKGVsZW0sIGVsKSB7XG5cbiAgICAgICAgLy8gaXNIaWRkZW5XaXRoaW5UcmVlIG1pZ2h0IGJlIGNhbGxlZCBmcm9tIGpRdWVyeSNmaWx0ZXIgZnVuY3Rpb247XG4gICAgICAgIC8vIGluIHRoYXQgY2FzZSwgZWxlbWVudCB3aWxsIGJlIHNlY29uZCBhcmd1bWVudFxuICAgICAgICBlbGVtID0gZWwgfHwgZWxlbTtcblxuICAgICAgICAvLyBJbmxpbmUgc3R5bGUgdHJ1bXBzIGFsbFxuICAgICAgICByZXR1cm4gZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fFxuICAgICAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmXG5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgY2hlY2sgY29tcHV0ZWQgc3R5bGVcbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00MyAtIDQ1XG4gICAgICAgICAgICAvLyBEaXNjb25uZWN0ZWQgZWxlbWVudHMgY2FuIGhhdmUgY29tcHV0ZWQgZGlzcGxheTogbm9uZSwgc28gZmlyc3QgY29uZmlybSB0aGF0IGVsZW0gaXNcbiAgICAgICAgICAgIC8vIGluIHRoZSBkb2N1bWVudC5cbiAgICAgICAgICAgIGpRdWVyeS5jb250YWlucyhlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0pICYmXG5cbiAgICAgICAgICAgIGpRdWVyeS5jc3MoZWxlbSwgXCJkaXNwbGF5XCIpID09PSBcIm5vbmVcIjtcbiAgICB9O1xuXG4gICAgdmFyIHN3YXAgPSBmdW5jdGlvbiAoZWxlbSwgb3B0aW9ucywgY2FsbGJhY2ssIGFyZ3MpIHtcbiAgICAgICAgdmFyIHJldCwgbmFtZSxcbiAgICAgICAgICAgIG9sZCA9IHt9O1xuXG4gICAgICAgIC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuICAgICAgICBmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgb2xkW25hbWVdID0gZWxlbS5zdHlsZVtuYW1lXTtcbiAgICAgICAgICAgIGVsZW0uc3R5bGVbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0ID0gY2FsbGJhY2suYXBwbHkoZWxlbSwgYXJncyB8fCBbXSk7XG5cbiAgICAgICAgLy8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG4gICAgICAgIGZvciAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgICBlbGVtLnN0eWxlW25hbWVdID0gb2xkW25hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG5cbiAgICBmdW5jdGlvbiBhZGp1c3RDU1MoZWxlbSwgcHJvcCwgdmFsdWVQYXJ0cywgdHdlZW4pIHtcbiAgICAgICAgdmFyIGFkanVzdGVkLCBzY2FsZSxcbiAgICAgICAgICAgIG1heEl0ZXJhdGlvbnMgPSAyMCxcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IHR3ZWVuID9cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0d2Vlbi5jdXIoKTtcbiAgICAgICAgICAgICAgICB9IDpcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqUXVlcnkuY3NzKGVsZW0sIHByb3AsIFwiXCIpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0aWFsID0gY3VycmVudFZhbHVlKCksXG4gICAgICAgICAgICB1bml0ID0gdmFsdWVQYXJ0cyAmJiB2YWx1ZVBhcnRzWzNdIHx8IChqUXVlcnkuY3NzTnVtYmVyW3Byb3BdID8gXCJcIiA6IFwicHhcIiksXG5cbiAgICAgICAgICAgIC8vIFN0YXJ0aW5nIHZhbHVlIGNvbXB1dGF0aW9uIGlzIHJlcXVpcmVkIGZvciBwb3RlbnRpYWwgdW5pdCBtaXNtYXRjaGVzXG4gICAgICAgICAgICBpbml0aWFsSW5Vbml0ID0gKGpRdWVyeS5jc3NOdW1iZXJbcHJvcF0gfHwgdW5pdCAhPT0gXCJweFwiICYmICtpbml0aWFsKSAmJlxuICAgICAgICAgICAgICAgIHJjc3NOdW0uZXhlYyhqUXVlcnkuY3NzKGVsZW0sIHByb3ApKTtcblxuICAgICAgICBpZiAoaW5pdGlhbEluVW5pdCAmJiBpbml0aWFsSW5Vbml0WzNdICE9PSB1bml0KSB7XG5cbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD01NFxuICAgICAgICAgICAgLy8gSGFsdmUgdGhlIGl0ZXJhdGlvbiB0YXJnZXQgdmFsdWUgdG8gcHJldmVudCBpbnRlcmZlcmVuY2UgZnJvbSBDU1MgdXBwZXIgYm91bmRzIChnaC0yMTQ0KVxuICAgICAgICAgICAgaW5pdGlhbCA9IGluaXRpYWwgLyAyO1xuXG4gICAgICAgICAgICAvLyBUcnVzdCB1bml0cyByZXBvcnRlZCBieSBqUXVlcnkuY3NzXG4gICAgICAgICAgICB1bml0ID0gdW5pdCB8fCBpbml0aWFsSW5Vbml0WzNdO1xuXG4gICAgICAgICAgICAvLyBJdGVyYXRpdmVseSBhcHByb3hpbWF0ZSBmcm9tIGEgbm9uemVybyBzdGFydGluZyBwb2ludFxuICAgICAgICAgICAgaW5pdGlhbEluVW5pdCA9ICtpbml0aWFsIHx8IDE7XG5cbiAgICAgICAgICAgIHdoaWxlIChtYXhJdGVyYXRpb25zLS0pIHtcblxuICAgICAgICAgICAgICAgIC8vIEV2YWx1YXRlIGFuZCB1cGRhdGUgb3VyIGJlc3QgZ3Vlc3MgKGRvdWJsaW5nIGd1ZXNzZXMgdGhhdCB6ZXJvIG91dCkuXG4gICAgICAgICAgICAgICAgLy8gRmluaXNoIGlmIHRoZSBzY2FsZSBlcXVhbHMgb3IgY3Jvc3NlcyAxIChtYWtpbmcgdGhlIG9sZCpuZXcgcHJvZHVjdCBub24tcG9zaXRpdmUpLlxuICAgICAgICAgICAgICAgIGpRdWVyeS5zdHlsZShlbGVtLCBwcm9wLCBpbml0aWFsSW5Vbml0ICsgdW5pdCk7XG4gICAgICAgICAgICAgICAgaWYgKCgxIC0gc2NhbGUpICogKDEgLSAoc2NhbGUgPSBjdXJyZW50VmFsdWUoKSAvIGluaXRpYWwgfHwgMC41KSkgPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBtYXhJdGVyYXRpb25zID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgLyBzY2FsZTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbml0aWFsSW5Vbml0ID0gaW5pdGlhbEluVW5pdCAqIDI7XG4gICAgICAgICAgICBqUXVlcnkuc3R5bGUoZWxlbSwgcHJvcCwgaW5pdGlhbEluVW5pdCArIHVuaXQpO1xuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgdXBkYXRlIHRoZSB0d2VlbiBwcm9wZXJ0aWVzIGxhdGVyIG9uXG4gICAgICAgICAgICB2YWx1ZVBhcnRzID0gdmFsdWVQYXJ0cyB8fCBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZVBhcnRzKSB7XG4gICAgICAgICAgICBpbml0aWFsSW5Vbml0ID0gK2luaXRpYWxJblVuaXQgfHwgK2luaXRpYWwgfHwgMDtcblxuICAgICAgICAgICAgLy8gQXBwbHkgcmVsYXRpdmUgb2Zmc2V0ICgrPS8tPSkgaWYgc3BlY2lmaWVkXG4gICAgICAgICAgICBhZGp1c3RlZCA9IHZhbHVlUGFydHNbMV0gP1xuICAgICAgICAgICAgICAgIGluaXRpYWxJblVuaXQgKyAodmFsdWVQYXJ0c1sxXSArIDEpICogdmFsdWVQYXJ0c1syXSA6XG4gICAgICAgICAgICAgICAgK3ZhbHVlUGFydHNbMl07XG4gICAgICAgICAgICBpZiAodHdlZW4pIHtcbiAgICAgICAgICAgICAgICB0d2Vlbi51bml0ID0gdW5pdDtcbiAgICAgICAgICAgICAgICB0d2Vlbi5zdGFydCA9IGluaXRpYWxJblVuaXQ7XG4gICAgICAgICAgICAgICAgdHdlZW4uZW5kID0gYWRqdXN0ZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFkanVzdGVkO1xuICAgIH1cblxuXG4gICAgdmFyIGRlZmF1bHREaXNwbGF5TWFwID0ge307XG5cbiAgICBmdW5jdGlvbiBnZXREZWZhdWx0RGlzcGxheShlbGVtKSB7XG4gICAgICAgIHZhciB0ZW1wLFxuICAgICAgICAgICAgZG9jID0gZWxlbS5vd25lckRvY3VtZW50LFxuICAgICAgICAgICAgbm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLFxuICAgICAgICAgICAgZGlzcGxheSA9IGRlZmF1bHREaXNwbGF5TWFwW25vZGVOYW1lXTtcblxuICAgICAgICBpZiAoZGlzcGxheSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpc3BsYXk7XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wID0gZG9jLmJvZHkuYXBwZW5kQ2hpbGQoZG9jLmNyZWF0ZUVsZW1lbnQobm9kZU5hbWUpKTtcbiAgICAgICAgZGlzcGxheSA9IGpRdWVyeS5jc3ModGVtcCwgXCJkaXNwbGF5XCIpO1xuXG4gICAgICAgIHRlbXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0ZW1wKTtcblxuICAgICAgICBpZiAoZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgICAgIGRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdERpc3BsYXlNYXBbbm9kZU5hbWVdID0gZGlzcGxheTtcblxuICAgICAgICByZXR1cm4gZGlzcGxheTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzaG93SGlkZShlbGVtZW50cywgc2hvdykge1xuICAgICAgICB2YXIgZGlzcGxheSwgZWxlbSxcbiAgICAgICAgICAgIHZhbHVlcyA9IFtdLFxuICAgICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoO1xuXG4gICAgICAgIC8vIERldGVybWluZSBuZXcgZGlzcGxheSB2YWx1ZSBmb3IgZWxlbWVudHMgdGhhdCBuZWVkIHRvIGNoYW5nZVxuICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGVsZW0gPSBlbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICBpZiAoIWVsZW0uc3R5bGUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGlzcGxheSA9IGVsZW0uc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIGlmIChzaG93KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSBmb3JjZSB2aXNpYmlsaXR5IHVwb24gY2FzY2FkZS1oaWRkZW4gZWxlbWVudHMsIGFuIGltbWVkaWF0ZSAoYW5kIHNsb3cpXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaXMgcmVxdWlyZWQgaW4gdGhpcyBmaXJzdCBsb29wIHVubGVzcyB3ZSBoYXZlIGEgbm9uZW1wdHkgZGlzcGxheSB2YWx1ZSAoZWl0aGVyXG4gICAgICAgICAgICAgICAgLy8gaW5saW5lIG9yIGFib3V0LXRvLWJlLXJlc3RvcmVkKVxuICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gZGF0YVByaXYuZ2V0KGVsZW0sIFwiZGlzcGxheVwiKSB8fCBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbHVlc1tpbmRleF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiAmJiBpc0hpZGRlbldpdGhpblRyZWUoZWxlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzW2luZGV4XSA9IGdldERlZmF1bHREaXNwbGF5KGVsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRpc3BsYXkgIT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSBcIm5vbmVcIjtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1lbWJlciB3aGF0IHdlJ3JlIG92ZXJ3cml0aW5nXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQcml2LnNldChlbGVtLCBcImRpc3BsYXlcIiwgZGlzcGxheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHRoZSBkaXNwbGF5IG9mIHRoZSBlbGVtZW50cyBpbiBhIHNlY29uZCBsb29wIHRvIGF2b2lkIGNvbnN0YW50IHJlZmxvd1xuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXNbaW5kZXhdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpbmRleF0uc3R5bGUuZGlzcGxheSA9IHZhbHVlc1tpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudHM7XG4gICAgfVxuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBzaG93SGlkZSh0aGlzLCB0cnVlKTtcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHNob3dIaWRlKHRoaXMpO1xuICAgICAgICB9LFxuICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNIaWRkZW5XaXRoaW5UcmVlKHRoaXMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHZhciByY2hlY2thYmxlVHlwZSA9ICgvXig/OmNoZWNrYm94fHJhZGlvKSQvaSk7XG5cbiAgICB2YXIgcnRhZ05hbWUgPSAoLzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0rKS9pKTtcblxuICAgIHZhciByc2NyaXB0VHlwZSA9ICgvXiR8Xm1vZHVsZSR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pKTtcblxuXG4vLyBXZSBoYXZlIHRvIGNsb3NlIHRoZXNlIHRhZ3MgdG8gc3VwcG9ydCBYSFRNTCAoIzEzMjAwKVxuICAgIHZhciB3cmFwTWFwID0ge1xuXG4gICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4gICAgICAgIG9wdGlvbjogWzEsIFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLCBcIjwvc2VsZWN0PlwiXSxcblxuICAgICAgICAvLyBYSFRNTCBwYXJzZXJzIGRvIG5vdCBtYWdpY2FsbHkgaW5zZXJ0IGVsZW1lbnRzIGluIHRoZVxuICAgICAgICAvLyBzYW1lIHdheSB0aGF0IHRhZyBzb3VwIHBhcnNlcnMgZG8uIFNvIHdlIGNhbm5vdCBzaG9ydGVuXG4gICAgICAgIC8vIHRoaXMgYnkgb21pdHRpbmcgPHRib2R5PiBvciBvdGhlciByZXF1aXJlZCBlbGVtZW50cy5cbiAgICAgICAgdGhlYWQ6IFsxLCBcIjx0YWJsZT5cIiwgXCI8L3RhYmxlPlwiXSxcbiAgICAgICAgY29sOiBbMiwgXCI8dGFibGU+PGNvbGdyb3VwPlwiLCBcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sXG4gICAgICAgIHRyOiBbMiwgXCI8dGFibGU+PHRib2R5PlwiLCBcIjwvdGJvZHk+PC90YWJsZT5cIl0sXG4gICAgICAgIHRkOiBbMywgXCI8dGFibGU+PHRib2R5Pjx0cj5cIiwgXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sXG5cbiAgICAgICAgX2RlZmF1bHQ6IFswLCBcIlwiLCBcIlwiXVxuICAgIH07XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4gICAgd3JhcE1hcC5vcHRncm91cCA9IHdyYXBNYXAub3B0aW9uO1xuXG4gICAgd3JhcE1hcC50Ym9keSA9IHdyYXBNYXAudGZvb3QgPSB3cmFwTWFwLmNvbGdyb3VwID0gd3JhcE1hcC5jYXB0aW9uID0gd3JhcE1hcC50aGVhZDtcbiAgICB3cmFwTWFwLnRoID0gd3JhcE1hcC50ZDtcblxuXG4gICAgZnVuY3Rpb24gZ2V0QWxsKGNvbnRleHQsIHRhZykge1xuXG4gICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcbiAgICAgICAgLy8gVXNlIHR5cGVvZiB0byBhdm9pZCB6ZXJvLWFyZ3VtZW50IG1ldGhvZCBpbnZvY2F0aW9uIG9uIGhvc3Qgb2JqZWN0cyAoIzE1MTUxKVxuICAgICAgICB2YXIgcmV0O1xuXG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0ID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWcgfHwgXCIqXCIpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcmV0ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHRhZyB8fCBcIipcIik7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldCA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRhZyA9PT0gdW5kZWZpbmVkIHx8IHRhZyAmJiBub2RlTmFtZShjb250ZXh0LCB0YWcpKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5Lm1lcmdlKFtjb250ZXh0XSwgcmV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG5cbi8vIE1hcmsgc2NyaXB0cyBhcyBoYXZpbmcgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZFxuICAgIGZ1bmN0aW9uIHNldEdsb2JhbEV2YWwoZWxlbXMsIHJlZkVsZW1lbnRzKSB7XG4gICAgICAgIHZhciBpID0gMCxcbiAgICAgICAgICAgIGwgPSBlbGVtcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGRhdGFQcml2LnNldChcbiAgICAgICAgICAgICAgICBlbGVtc1tpXSxcbiAgICAgICAgICAgICAgICBcImdsb2JhbEV2YWxcIixcbiAgICAgICAgICAgICAgICAhcmVmRWxlbWVudHMgfHwgZGF0YVByaXYuZ2V0KHJlZkVsZW1lbnRzW2ldLCBcImdsb2JhbEV2YWxcIilcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIHZhciByaHRtbCA9IC88fCYjP1xcdys7LztcblxuICAgIGZ1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoZWxlbXMsIGNvbnRleHQsIHNjcmlwdHMsIHNlbGVjdGlvbiwgaWdub3JlZCkge1xuICAgICAgICB2YXIgZWxlbSwgdG1wLCB0YWcsIHdyYXAsIGNvbnRhaW5zLCBqLFxuICAgICAgICAgICAgZnJhZ21lbnQgPSBjb250ZXh0LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcbiAgICAgICAgICAgIG5vZGVzID0gW10sXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGwgPSBlbGVtcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGVsZW0gPSBlbGVtc1tpXTtcblxuICAgICAgICAgICAgaWYgKGVsZW0gfHwgZWxlbSA9PT0gMCkge1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIG5vZGVzIGRpcmVjdGx5XG4gICAgICAgICAgICAgICAgaWYgKHRvVHlwZShlbGVtKSA9PT0gXCJvYmplY3RcIikge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuICAgICAgICAgICAgICAgICAgICAvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5tZXJnZShub2RlcywgZWxlbS5ub2RlVHlwZSA/IFtlbGVtXSA6IGVsZW0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgbm9uLWh0bWwgaW50byBhIHRleHQgbm9kZVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXJodG1sLnRlc3QoZWxlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZXMucHVzaChjb250ZXh0LmNyZWF0ZVRleHROb2RlKGVsZW0pKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IGh0bWwgaW50byBET00gbm9kZXNcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0bXAgPSB0bXAgfHwgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29udGV4dC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBEZXNlcmlhbGl6ZSBhIHN0YW5kYXJkIHJlcHJlc2VudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHRhZyA9IChydGFnTmFtZS5leGVjKGVsZW0pIHx8IFtcIlwiLCBcIlwiXSlbMV0udG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcCA9IHdyYXBNYXBbdGFnXSB8fCB3cmFwTWFwLl9kZWZhdWx0O1xuICAgICAgICAgICAgICAgICAgICB0bXAuaW5uZXJIVE1MID0gd3JhcFsxXSArIGpRdWVyeS5odG1sUHJlZmlsdGVyKGVsZW0pICsgd3JhcFsyXTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBEZXNjZW5kIHRocm91Z2ggd3JhcHBlcnMgdG8gdGhlIHJpZ2h0IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgaiA9IHdyYXBbMF07XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChqLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRtcCA9IHRtcC5sYXN0Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgLy8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuICAgICAgICAgICAgICAgICAgICBqUXVlcnkubWVyZ2Uobm9kZXMsIHRtcC5jaGlsZE5vZGVzKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1lbWJlciB0aGUgdG9wLWxldmVsIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICB0bXAgPSBmcmFnbWVudC5maXJzdENoaWxkO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgY3JlYXRlZCBub2RlcyBhcmUgb3JwaGFuZWQgKCMxMjM5MilcbiAgICAgICAgICAgICAgICAgICAgdG1wLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgd3JhcHBlciBmcm9tIGZyYWdtZW50XG4gICAgICAgIGZyYWdtZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgICAgICBpID0gMDtcbiAgICAgICAgd2hpbGUgKChlbGVtID0gbm9kZXNbaSsrXSkpIHtcblxuICAgICAgICAgICAgLy8gU2tpcCBlbGVtZW50cyBhbHJlYWR5IGluIHRoZSBjb250ZXh0IGNvbGxlY3Rpb24gKHRyYWMtNDA4NylcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24gJiYgalF1ZXJ5LmluQXJyYXkoZWxlbSwgc2VsZWN0aW9uKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlnbm9yZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWdub3JlZC5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29udGFpbnMgPSBqUXVlcnkuY29udGFpbnMoZWxlbS5vd25lckRvY3VtZW50LCBlbGVtKTtcblxuICAgICAgICAgICAgLy8gQXBwZW5kIHRvIGZyYWdtZW50XG4gICAgICAgICAgICB0bXAgPSBnZXRBbGwoZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxlbSksIFwic2NyaXB0XCIpO1xuXG4gICAgICAgICAgICAvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG4gICAgICAgICAgICBpZiAoY29udGFpbnMpIHtcbiAgICAgICAgICAgICAgICBzZXRHbG9iYWxFdmFsKHRtcCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhcHR1cmUgZXhlY3V0YWJsZXNcbiAgICAgICAgICAgIGlmIChzY3JpcHRzKSB7XG4gICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKChlbGVtID0gdG1wW2orK10pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyc2NyaXB0VHlwZS50ZXN0KGVsZW0udHlwZSB8fCBcIlwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0cy5wdXNoKGVsZW0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuICAgICAgICAgICAgZGl2ID0gZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSksXG4gICAgICAgICAgICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgICAgICAvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5XG4gICAgICAgIC8vIENoZWNrIHN0YXRlIGxvc3QgaWYgdGhlIG5hbWUgaXMgc2V0ICgjMTEyMTcpXG4gICAgICAgIC8vIFN1cHBvcnQ6IFdpbmRvd3MgV2ViIEFwcHMgKFdXQSlcbiAgICAgICAgLy8gYG5hbWVgIGFuZCBgdHlwZWAgbXVzdCB1c2UgLnNldEF0dHJpYnV0ZSBmb3IgV1dBICgjMTQ5MDEpXG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYWRpb1wiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIik7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0XCIpO1xuXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMSBvbmx5XG4gICAgICAgIC8vIE9sZGVyIFdlYktpdCBkb2Vzbid0IGNsb25lIGNoZWNrZWQgc3RhdGUgY29ycmVjdGx5IGluIGZyYWdtZW50c1xuICAgICAgICBzdXBwb3J0LmNoZWNrQ2xvbmUgPSBkaXYuY2xvbmVOb2RlKHRydWUpLmNsb25lTm9kZSh0cnVlKS5sYXN0Q2hpbGQuY2hlY2tlZDtcblxuICAgICAgICAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbiAgICAgICAgLy8gTWFrZSBzdXJlIHRleHRhcmVhIChhbmQgY2hlY2tib3gpIGRlZmF1bHRWYWx1ZSBpcyBwcm9wZXJseSBjbG9uZWRcbiAgICAgICAgZGl2LmlubmVySFRNTCA9IFwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiO1xuICAgICAgICBzdXBwb3J0Lm5vQ2xvbmVDaGVja2VkID0gISFkaXYuY2xvbmVOb2RlKHRydWUpLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWU7XG4gICAgfSkoKTtcbiAgICB2YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbiAgICB2YXJcbiAgICAgICAgcmtleUV2ZW50ID0gL15rZXkvLFxuICAgICAgICBybW91c2VFdmVudCA9IC9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudXxkcmFnfGRyb3ApfGNsaWNrLyxcbiAgICAgICAgcnR5cGVuYW1lc3BhY2UgPSAvXihbXi5dKikoPzpcXC4oLispfCkvO1xuXG4gICAgZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBTZWUgIzEzMzkzIGZvciBtb3JlIGluZm9cbiAgICBmdW5jdGlvbiBzYWZlQWN0aXZlRWxlbWVudCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uKGVsZW0sIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIG9uZSkge1xuICAgICAgICB2YXIgb3JpZ0ZuLCB0eXBlO1xuXG4gICAgICAgIC8vIFR5cGVzIGNhbiBiZSBhIG1hcCBvZiB0eXBlcy9oYW5kbGVyc1xuICAgICAgICBpZiAodHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgICAgICAgIC8vICggdHlwZXMtT2JqZWN0LCBzZWxlY3RvciwgZGF0YSApXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiKSB7XG5cbiAgICAgICAgICAgICAgICAvLyAoIHR5cGVzLU9iamVjdCwgZGF0YSApXG4gICAgICAgICAgICAgICAgZGF0YSA9IGRhdGEgfHwgc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHR5cGUgaW4gdHlwZXMpIHtcbiAgICAgICAgICAgICAgICBvbihlbGVtLCB0eXBlLCBzZWxlY3RvciwgZGF0YSwgdHlwZXNbdHlwZV0sIG9uZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZWxlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChkYXRhID09IG51bGwgJiYgZm4gPT0gbnVsbCkge1xuXG4gICAgICAgICAgICAvLyAoIHR5cGVzLCBmbiApXG4gICAgICAgICAgICBmbiA9IHNlbGVjdG9yO1xuICAgICAgICAgICAgZGF0YSA9IHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuICAgICAgICB9IGVsc2UgaWYgKGZuID09IG51bGwpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpIHtcblxuICAgICAgICAgICAgICAgIC8vICggdHlwZXMsIHNlbGVjdG9yLCBmbiApXG4gICAgICAgICAgICAgICAgZm4gPSBkYXRhO1xuICAgICAgICAgICAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgLy8gKCB0eXBlcywgZGF0YSwgZm4gKVxuICAgICAgICAgICAgICAgIGZuID0gZGF0YTtcbiAgICAgICAgICAgICAgICBkYXRhID0gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3IgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGZuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgZm4gPSByZXR1cm5GYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmICghZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9uZSA9PT0gMSkge1xuICAgICAgICAgICAgb3JpZ0ZuID0gZm47XG4gICAgICAgICAgICBmbiA9IGZ1bmN0aW9uIChldmVudCkge1xuXG4gICAgICAgICAgICAgICAgLy8gQ2FuIHVzZSBhbiBlbXB0eSBzZXQsIHNpbmNlIGV2ZW50IGNvbnRhaW5zIHRoZSBpbmZvXG4gICAgICAgICAgICAgICAgalF1ZXJ5KCkub2ZmKGV2ZW50KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb3JpZ0ZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBVc2Ugc2FtZSBndWlkIHNvIGNhbGxlciBjYW4gcmVtb3ZlIHVzaW5nIG9yaWdGblxuICAgICAgICAgICAgZm4uZ3VpZCA9IG9yaWdGbi5ndWlkIHx8IChvcmlnRm4uZ3VpZCA9IGpRdWVyeS5ndWlkKyspO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LmFkZCh0aGlzLCB0eXBlcywgZm4sIGRhdGEsIHNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLypcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIG1hbmFnaW5nIGV2ZW50cyAtLSBub3QgcGFydCBvZiB0aGUgcHVibGljIGludGVyZmFjZS5cbiAqIFByb3BzIHRvIERlYW4gRWR3YXJkcycgYWRkRXZlbnQgbGlicmFyeSBmb3IgbWFueSBvZiB0aGUgaWRlYXMuXG4gKi9cbiAgICBqUXVlcnkuZXZlbnQgPSB7XG5cbiAgICAgICAgZ2xvYmFsOiB7fSxcblxuICAgICAgICBhZGQ6IGZ1bmN0aW9uIChlbGVtLCB0eXBlcywgaGFuZGxlciwgZGF0YSwgc2VsZWN0b3IpIHtcblxuICAgICAgICAgICAgdmFyIGhhbmRsZU9iakluLCBldmVudEhhbmRsZSwgdG1wLFxuICAgICAgICAgICAgICAgIGV2ZW50cywgdCwgaGFuZGxlT2JqLFxuICAgICAgICAgICAgICAgIHNwZWNpYWwsIGhhbmRsZXJzLCB0eXBlLCBuYW1lc3BhY2VzLCBvcmlnVHlwZSxcbiAgICAgICAgICAgICAgICBlbGVtRGF0YSA9IGRhdGFQcml2LmdldChlbGVtKTtcblxuICAgICAgICAgICAgLy8gRG9uJ3QgYXR0YWNoIGV2ZW50cyB0byBub0RhdGEgb3IgdGV4dC9jb21tZW50IG5vZGVzIChidXQgYWxsb3cgcGxhaW4gb2JqZWN0cylcbiAgICAgICAgICAgIGlmICghZWxlbURhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENhbGxlciBjYW4gcGFzcyBpbiBhbiBvYmplY3Qgb2YgY3VzdG9tIGRhdGEgaW4gbGlldSBvZiB0aGUgaGFuZGxlclxuICAgICAgICAgICAgaWYgKGhhbmRsZXIuaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIGhhbmRsZU9iakluID0gaGFuZGxlcjtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gaGFuZGxlT2JqSW4uaGFuZGxlcjtcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9IGhhbmRsZU9iakluLnNlbGVjdG9yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBFbnN1cmUgdGhhdCBpbnZhbGlkIHNlbGVjdG9ycyB0aHJvdyBleGNlcHRpb25zIGF0IGF0dGFjaCB0aW1lXG4gICAgICAgICAgICAvLyBFdmFsdWF0ZSBhZ2FpbnN0IGRvY3VtZW50RWxlbWVudCBpbiBjYXNlIGVsZW0gaXMgYSBub24tZWxlbWVudCBub2RlIChlLmcuLCBkb2N1bWVudClcbiAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3Rvcihkb2N1bWVudEVsZW1lbnQsIHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGhhbmRsZXIgaGFzIGEgdW5pcXVlIElELCB1c2VkIHRvIGZpbmQvcmVtb3ZlIGl0IGxhdGVyXG4gICAgICAgICAgICBpZiAoIWhhbmRsZXIuZ3VpZCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuZ3VpZCA9IGpRdWVyeS5ndWlkKys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEluaXQgdGhlIGVsZW1lbnQncyBldmVudCBzdHJ1Y3R1cmUgYW5kIG1haW4gaGFuZGxlciwgaWYgdGhpcyBpcyB0aGUgZmlyc3RcbiAgICAgICAgICAgIGlmICghKGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cykpIHtcbiAgICAgICAgICAgICAgICBldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghKGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlID0gZnVuY3Rpb24gKGUpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIGFuIGV2ZW50IGlzIGNhbGxlZCBhZnRlciBhIHBhZ2UgaGFzIHVubG9hZGVkXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgIT09IGUudHlwZSA/XG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQuZGlzcGF0Y2guYXBwbHkoZWxlbSwgYXJndW1lbnRzKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBIYW5kbGUgbXVsdGlwbGUgZXZlbnRzIHNlcGFyYXRlZCBieSBhIHNwYWNlXG4gICAgICAgICAgICB0eXBlcyA9ICh0eXBlcyB8fCBcIlwiKS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXCJcIl07XG4gICAgICAgICAgICB0ID0gdHlwZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKHQtLSkge1xuICAgICAgICAgICAgICAgIHRtcCA9IHJ0eXBlbmFtZXNwYWNlLmV4ZWModHlwZXNbdF0pIHx8IFtdO1xuICAgICAgICAgICAgICAgIHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsxXTtcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2VzID0gKHRtcFsyXSB8fCBcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gVGhlcmUgKm11c3QqIGJlIGEgdHlwZSwgbm8gYXR0YWNoaW5nIG5hbWVzcGFjZS1vbmx5IGhhbmRsZXJzXG4gICAgICAgICAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIGV2ZW50IGNoYW5nZXMgaXRzIHR5cGUsIHVzZSB0aGUgc3BlY2lhbCBldmVudCBoYW5kbGVycyBmb3IgdGhlIGNoYW5nZWQgdHlwZVxuICAgICAgICAgICAgICAgIHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFt0eXBlXSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHNlbGVjdG9yIGRlZmluZWQsIGRldGVybWluZSBzcGVjaWFsIGV2ZW50IGFwaSB0eXBlLCBvdGhlcndpc2UgZ2l2ZW4gdHlwZVxuICAgICAgICAgICAgICAgIHR5cGUgPSAoc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUpIHx8IHR5cGU7XG5cbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc3BlY2lhbCBiYXNlZCBvbiBuZXdseSByZXNldCB0eXBlXG4gICAgICAgICAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlT2JqIGlzIHBhc3NlZCB0byBhbGwgZXZlbnQgaGFuZGxlcnNcbiAgICAgICAgICAgICAgICBoYW5kbGVPYmogPSBqUXVlcnkuZXh0ZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ1R5cGU6IG9yaWdUeXBlLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBoYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgICBndWlkOiBoYW5kbGVyLmd1aWQsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBzZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgbmVlZHNDb250ZXh0OiBzZWxlY3RvciAmJiBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChzZWxlY3RvciksXG4gICAgICAgICAgICAgICAgICAgIG5hbWVzcGFjZTogbmFtZXNwYWNlcy5qb2luKFwiLlwiKVxuICAgICAgICAgICAgICAgIH0sIGhhbmRsZU9iakluKTtcblxuICAgICAgICAgICAgICAgIC8vIEluaXQgdGhlIGV2ZW50IGhhbmRsZXIgcXVldWUgaWYgd2UncmUgdGhlIGZpcnN0XG4gICAgICAgICAgICAgICAgaWYgKCEoaGFuZGxlcnMgPSBldmVudHNbdHlwZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzID0gZXZlbnRzW3R5cGVdID0gW107XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzLmRlbGVnYXRlQ291bnQgPSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgdXNlIGFkZEV2ZW50TGlzdGVuZXIgaWYgdGhlIHNwZWNpYWwgZXZlbnRzIGhhbmRsZXIgcmV0dXJucyBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNwZWNpYWwuc2V0dXAgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWwuc2V0dXAuY2FsbChlbGVtLCBkYXRhLCBuYW1lc3BhY2VzLCBldmVudEhhbmRsZSkgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZXZlbnRIYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNwZWNpYWwuYWRkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwuYWRkLmNhbGwoZWxlbSwgaGFuZGxlT2JqKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZU9iai5oYW5kbGVyLmd1aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9iai5oYW5kbGVyLmd1aWQgPSBoYW5kbGVyLmd1aWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgdG8gdGhlIGVsZW1lbnQncyBoYW5kbGVyIGxpc3QsIGRlbGVnYXRlcyBpbiBmcm9udFxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaGFuZGxlcnMuZGVsZWdhdGVDb3VudCsrLCAwLCBoYW5kbGVPYmopO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlT2JqKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBLZWVwIHRyYWNrIG9mIHdoaWNoIGV2ZW50cyBoYXZlIGV2ZXIgYmVlbiB1c2VkLCBmb3IgZXZlbnQgb3B0aW1pemF0aW9uXG4gICAgICAgICAgICAgICAgalF1ZXJ5LmV2ZW50Lmdsb2JhbFt0eXBlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBEZXRhY2ggYW4gZXZlbnQgb3Igc2V0IG9mIGV2ZW50cyBmcm9tIGFuIGVsZW1lbnRcbiAgICAgICAgcmVtb3ZlOiBmdW5jdGlvbiAoZWxlbSwgdHlwZXMsIGhhbmRsZXIsIHNlbGVjdG9yLCBtYXBwZWRUeXBlcykge1xuXG4gICAgICAgICAgICB2YXIgaiwgb3JpZ0NvdW50LCB0bXAsXG4gICAgICAgICAgICAgICAgZXZlbnRzLCB0LCBoYW5kbGVPYmosXG4gICAgICAgICAgICAgICAgc3BlY2lhbCwgaGFuZGxlcnMsIHR5cGUsIG5hbWVzcGFjZXMsIG9yaWdUeXBlLFxuICAgICAgICAgICAgICAgIGVsZW1EYXRhID0gZGF0YVByaXYuaGFzRGF0YShlbGVtKSAmJiBkYXRhUHJpdi5nZXQoZWxlbSk7XG5cbiAgICAgICAgICAgIGlmICghZWxlbURhdGEgfHwgIShldmVudHMgPSBlbGVtRGF0YS5ldmVudHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPbmNlIGZvciBlYWNoIHR5cGUubmFtZXNwYWNlIGluIHR5cGVzOyB0eXBlIG1heSBiZSBvbWl0dGVkXG4gICAgICAgICAgICB0eXBlcyA9ICh0eXBlcyB8fCBcIlwiKS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXCJcIl07XG4gICAgICAgICAgICB0ID0gdHlwZXMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKHQtLSkge1xuICAgICAgICAgICAgICAgIHRtcCA9IHJ0eXBlbmFtZXNwYWNlLmV4ZWModHlwZXNbdF0pIHx8IFtdO1xuICAgICAgICAgICAgICAgIHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsxXTtcbiAgICAgICAgICAgICAgICBuYW1lc3BhY2VzID0gKHRtcFsyXSB8fCBcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpO1xuXG4gICAgICAgICAgICAgICAgLy8gVW5iaW5kIGFsbCBldmVudHMgKG9uIHRoaXMgbmFtZXNwYWNlLCBpZiBwcm92aWRlZCkgZm9yIHRoZSBlbGVtZW50XG4gICAgICAgICAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodHlwZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC5yZW1vdmUoZWxlbSwgdHlwZSArIHR5cGVzW3RdLCBoYW5kbGVyLCBzZWxlY3RvciwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdIHx8IHt9O1xuICAgICAgICAgICAgICAgIHR5cGUgPSAoc2VsZWN0b3IgPyBzcGVjaWFsLmRlbGVnYXRlVHlwZSA6IHNwZWNpYWwuYmluZFR5cGUpIHx8IHR5cGU7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMgPSBldmVudHNbdHlwZV0gfHwgW107XG4gICAgICAgICAgICAgICAgdG1wID0gdG1wWzJdICYmXG4gICAgICAgICAgICAgICAgICAgIG5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIiArIG5hbWVzcGFjZXMuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpICsgXCIoXFxcXC58JClcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgbWF0Y2hpbmcgZXZlbnRzXG4gICAgICAgICAgICAgICAgb3JpZ0NvdW50ID0gaiA9IGhhbmRsZXJzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoai0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU9iaiA9IGhhbmRsZXJzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgobWFwcGVkVHlwZXMgfHwgb3JpZ1R5cGUgPT09IGhhbmRsZU9iai5vcmlnVHlwZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICghaGFuZGxlciB8fCBoYW5kbGVyLmd1aWQgPT09IGhhbmRsZU9iai5ndWlkKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKCF0bXAgfHwgdG1wLnRlc3QoaGFuZGxlT2JqLm5hbWVzcGFjZSkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAoIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBoYW5kbGVPYmouc2VsZWN0b3IgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9PT0gXCIqKlwiICYmIGhhbmRsZU9iai5zZWxlY3RvcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShqLCAxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZU9iai5zZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXJzLmRlbGVnYXRlQ291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzcGVjaWFsLnJlbW92ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWNpYWwucmVtb3ZlLmNhbGwoZWxlbSwgaGFuZGxlT2JqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBnZW5lcmljIGV2ZW50IGhhbmRsZXIgaWYgd2UgcmVtb3ZlZCBzb21ldGhpbmcgYW5kIG5vIG1vcmUgaGFuZGxlcnMgZXhpc3RcbiAgICAgICAgICAgICAgICAvLyAoYXZvaWRzIHBvdGVudGlhbCBmb3IgZW5kbGVzcyByZWN1cnNpb24gZHVyaW5nIHJlbW92YWwgb2Ygc3BlY2lhbCBldmVudCBoYW5kbGVycylcbiAgICAgICAgICAgICAgICBpZiAob3JpZ0NvdW50ICYmICFoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzcGVjaWFsLnRlYXJkb3duIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsLnRlYXJkb3duLmNhbGwoZWxlbSwgbmFtZXNwYWNlcywgZWxlbURhdGEuaGFuZGxlKSA9PT0gZmFsc2UpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LnJlbW92ZUV2ZW50KGVsZW0sIHR5cGUsIGVsZW1EYXRhLmhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVtb3ZlIGRhdGEgYW5kIHRoZSBleHBhbmRvIGlmIGl0J3Mgbm8gbG9uZ2VyIHVzZWRcbiAgICAgICAgICAgIGlmIChqUXVlcnkuaXNFbXB0eU9iamVjdChldmVudHMpKSB7XG4gICAgICAgICAgICAgICAgZGF0YVByaXYucmVtb3ZlKGVsZW0sIFwiaGFuZGxlIGV2ZW50c1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkaXNwYXRjaDogZnVuY3Rpb24gKG5hdGl2ZUV2ZW50KSB7XG5cbiAgICAgICAgICAgIC8vIE1ha2UgYSB3cml0YWJsZSBqUXVlcnkuRXZlbnQgZnJvbSB0aGUgbmF0aXZlIGV2ZW50IG9iamVjdFxuICAgICAgICAgICAgdmFyIGV2ZW50ID0galF1ZXJ5LmV2ZW50LmZpeChuYXRpdmVFdmVudCk7XG5cbiAgICAgICAgICAgIHZhciBpLCBqLCByZXQsIG1hdGNoZWQsIGhhbmRsZU9iaiwgaGFuZGxlclF1ZXVlLFxuICAgICAgICAgICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCksXG4gICAgICAgICAgICAgICAgaGFuZGxlcnMgPSAoZGF0YVByaXYuZ2V0KHRoaXMsIFwiZXZlbnRzXCIpIHx8IHt9KVtldmVudC50eXBlXSB8fCBbXSxcbiAgICAgICAgICAgICAgICBzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbZXZlbnQudHlwZV0gfHwge307XG5cbiAgICAgICAgICAgIC8vIFVzZSB0aGUgZml4LWVkIGpRdWVyeS5FdmVudCByYXRoZXIgdGhhbiB0aGUgKHJlYWQtb25seSkgbmF0aXZlIGV2ZW50XG4gICAgICAgICAgICBhcmdzWzBdID0gZXZlbnQ7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRoaXM7XG5cbiAgICAgICAgICAgIC8vIENhbGwgdGhlIHByZURpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZSwgYW5kIGxldCBpdCBiYWlsIGlmIGRlc2lyZWRcbiAgICAgICAgICAgIGlmIChzcGVjaWFsLnByZURpc3BhdGNoICYmIHNwZWNpYWwucHJlRGlzcGF0Y2guY2FsbCh0aGlzLCBldmVudCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgaGFuZGxlcnNcbiAgICAgICAgICAgIGhhbmRsZXJRdWV1ZSA9IGpRdWVyeS5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsIGV2ZW50LCBoYW5kbGVycyk7XG5cbiAgICAgICAgICAgIC8vIFJ1biBkZWxlZ2F0ZXMgZmlyc3Q7IHRoZXkgbWF5IHdhbnQgdG8gc3RvcCBwcm9wYWdhdGlvbiBiZW5lYXRoIHVzXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlICgobWF0Y2hlZCA9IGhhbmRsZXJRdWV1ZVtpKytdKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBtYXRjaGVkLmVsZW07XG5cbiAgICAgICAgICAgICAgICBqID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGhhbmRsZU9iaiA9IG1hdGNoZWQuaGFuZGxlcnNbaisrXSkgJiZcbiAgICAgICAgICAgICAgICAhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRyaWdnZXJlZCBldmVudCBtdXN0IGVpdGhlciAxKSBoYXZlIG5vIG5hbWVzcGFjZSwgb3IgMikgaGF2ZSBuYW1lc3BhY2UocylcbiAgICAgICAgICAgICAgICAgICAgLy8gYSBzdWJzZXQgb3IgZXF1YWwgdG8gdGhvc2UgaW4gdGhlIGJvdW5kIGV2ZW50IChib3RoIGNhbiBoYXZlIG5vIG5hbWVzcGFjZSkuXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXZlbnQucm5hbWVzcGFjZSB8fCBldmVudC5ybmFtZXNwYWNlLnRlc3QoaGFuZGxlT2JqLm5hbWVzcGFjZSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuaGFuZGxlT2JqID0gaGFuZGxlT2JqO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuZGF0YSA9IGhhbmRsZU9iai5kYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXQgPSAoKGpRdWVyeS5ldmVudC5zcGVjaWFsW2hhbmRsZU9iai5vcmlnVHlwZV0gfHwge30pLmhhbmRsZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9iai5oYW5kbGVyKS5hcHBseShtYXRjaGVkLmVsZW0sIGFyZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGV2ZW50LnJlc3VsdCA9IHJldCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FsbCB0aGUgcG9zdERpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZVxuICAgICAgICAgICAgaWYgKHNwZWNpYWwucG9zdERpc3BhdGNoKSB7XG4gICAgICAgICAgICAgICAgc3BlY2lhbC5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBldmVudC5yZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlcnM6IGZ1bmN0aW9uIChldmVudCwgaGFuZGxlcnMpIHtcbiAgICAgICAgICAgIHZhciBpLCBoYW5kbGVPYmosIHNlbCwgbWF0Y2hlZEhhbmRsZXJzLCBtYXRjaGVkU2VsZWN0b3JzLFxuICAgICAgICAgICAgICAgIGhhbmRsZXJRdWV1ZSA9IFtdLFxuICAgICAgICAgICAgICAgIGRlbGVnYXRlQ291bnQgPSBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LFxuICAgICAgICAgICAgICAgIGN1ciA9IGV2ZW50LnRhcmdldDtcblxuICAgICAgICAgICAgLy8gRmluZCBkZWxlZ2F0ZSBoYW5kbGVyc1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlQ291bnQgJiZcblxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OVxuICAgICAgICAgICAgICAgIC8vIEJsYWNrLWhvbGUgU1ZHIDx1c2U+IGluc3RhbmNlIHRyZWVzICh0cmFjLTEzMTgwKVxuICAgICAgICAgICAgICAgIGN1ci5ub2RlVHlwZSAmJlxuXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogRmlyZWZveCA8PTQyXG4gICAgICAgICAgICAgICAgLy8gU3VwcHJlc3Mgc3BlYy12aW9sYXRpbmcgY2xpY2tzIGluZGljYXRpbmcgYSBub24tcHJpbWFyeSBwb2ludGVyIGJ1dHRvbiAodHJhYy0zODYxKVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50LXR5cGUtY2xpY2tcbiAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG4gICAgICAgICAgICAgICAgLy8gLi4uYnV0IG5vdCBhcnJvdyBrZXkgXCJjbGlja3NcIiBvZiByYWRpbyBpbnB1dHMsIHdoaWNoIGNhbiBoYXZlIGBidXR0b25gIC0xIChnaC0yMzQzKVxuICAgICAgICAgICAgICAgICEoZXZlbnQudHlwZSA9PT0gXCJjbGlja1wiICYmIGV2ZW50LmJ1dHRvbiA+PSAxKSkge1xuXG4gICAgICAgICAgICAgICAgZm9yICg7IGN1ciAhPT0gdGhpczsgY3VyID0gY3VyLnBhcmVudE5vZGUgfHwgdGhpcykge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGNoZWNrIG5vbi1lbGVtZW50cyAoIzEzMjA4KVxuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBwcm9jZXNzIGNsaWNrcyBvbiBkaXNhYmxlZCBlbGVtZW50cyAoIzY5MTEsICM4MTY1LCAjMTEzODIsICMxMTc2NClcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1ci5ub2RlVHlwZSA9PT0gMSAmJiAhKGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIiAmJiBjdXIuZGlzYWJsZWQgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRTZWxlY3RvcnMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkZWxlZ2F0ZUNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVPYmogPSBoYW5kbGVyc1tpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IGNvbmZsaWN0IHdpdGggT2JqZWN0LnByb3RvdHlwZSBwcm9wZXJ0aWVzICgjMTMyMDMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsID0gaGFuZGxlT2JqLnNlbGVjdG9yICsgXCIgXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZFNlbGVjdG9yc1tzZWxdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFNlbGVjdG9yc1tzZWxdID0gaGFuZGxlT2JqLm5lZWRzQ29udGV4dCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkoc2VsLCB0aGlzKS5pbmRleChjdXIpID4gLTEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmZpbmQoc2VsLCB0aGlzLCBudWxsLCBbY3VyXSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZFNlbGVjdG9yc1tzZWxdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoZWRIYW5kbGVycy5wdXNoKGhhbmRsZU9iaik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoZWRIYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyUXVldWUucHVzaCh7ZWxlbTogY3VyLCBoYW5kbGVyczogbWF0Y2hlZEhhbmRsZXJzfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCB0aGUgcmVtYWluaW5nIChkaXJlY3RseS1ib3VuZCkgaGFuZGxlcnNcbiAgICAgICAgICAgIGN1ciA9IHRoaXM7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVDb3VudCA8IGhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJRdWV1ZS5wdXNoKHtlbGVtOiBjdXIsIGhhbmRsZXJzOiBoYW5kbGVycy5zbGljZShkZWxlZ2F0ZUNvdW50KX0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlclF1ZXVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFkZFByb3A6IGZ1bmN0aW9uIChuYW1lLCBob29rKSB7XG4gICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSwgbmFtZSwge1xuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgZ2V0OiBpc0Z1bmN0aW9uKGhvb2spID9cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBob29rKHRoaXMub3JpZ2luYWxFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gOlxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFtuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBuYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZml4OiBmdW5jdGlvbiAob3JpZ2luYWxFdmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsRXZlbnRbalF1ZXJ5LmV4cGFuZG9dID9cbiAgICAgICAgICAgICAgICBvcmlnaW5hbEV2ZW50IDpcbiAgICAgICAgICAgICAgICBuZXcgalF1ZXJ5LkV2ZW50KG9yaWdpbmFsRXZlbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNwZWNpYWw6IHtcbiAgICAgICAgICAgIGxvYWQ6IHtcblxuICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgdHJpZ2dlcmVkIGltYWdlLmxvYWQgZXZlbnRzIGZyb20gYnViYmxpbmcgdG8gd2luZG93LmxvYWRcbiAgICAgICAgICAgICAgICBub0J1YmJsZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZvY3VzOiB7XG5cbiAgICAgICAgICAgICAgICAvLyBGaXJlIG5hdGl2ZSBldmVudCBpZiBwb3NzaWJsZSBzbyBibHVyL2ZvY3VzIHNlcXVlbmNlIGlzIGNvcnJlY3RcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzICE9PSBzYWZlQWN0aXZlRWxlbWVudCgpICYmIHRoaXMuZm9jdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVsZWdhdGVUeXBlOiBcImZvY3VzaW5cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJsdXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzID09PSBzYWZlQWN0aXZlRWxlbWVudCgpICYmIHRoaXMuYmx1cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlbGVnYXRlVHlwZTogXCJmb2N1c291dFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xpY2s6IHtcblxuICAgICAgICAgICAgICAgIC8vIEZvciBjaGVja2JveCwgZmlyZSBuYXRpdmUgZXZlbnQgc28gY2hlY2tlZCBzdGF0ZSB3aWxsIGJlIHJpZ2h0XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSBcImNoZWNrYm94XCIgJiYgdGhpcy5jbGljayAmJiBub2RlTmFtZSh0aGlzLCBcImlucHV0XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgLy8gRm9yIGNyb3NzLWJyb3dzZXIgY29uc2lzdGVuY3ksIGRvbid0IGZpcmUgbmF0aXZlIC5jbGljaygpIG9uIGxpbmtzXG4gICAgICAgICAgICAgICAgX2RlZmF1bHQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbm9kZU5hbWUoZXZlbnQudGFyZ2V0LCBcImFcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYmVmb3JldW5sb2FkOiB7XG4gICAgICAgICAgICAgICAgcG9zdERpc3BhdGNoOiBmdW5jdGlvbiAoZXZlbnQpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBGaXJlZm94IDIwK1xuICAgICAgICAgICAgICAgICAgICAvLyBGaXJlZm94IGRvZXNuJ3QgYWxlcnQgaWYgdGhlIHJldHVyblZhbHVlIGZpZWxkIGlzIG5vdCBzZXQuXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5yZXN1bHQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZXZlbnQucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGpRdWVyeS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uIChlbGVtLCB0eXBlLCBoYW5kbGUpIHtcblxuICAgICAgICAvLyBUaGlzIFwiaWZcIiBpcyBuZWVkZWQgZm9yIHBsYWluIG9iamVjdHNcbiAgICAgICAgaWYgKGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgalF1ZXJ5LkV2ZW50ID0gZnVuY3Rpb24gKHNyYywgcHJvcHMpIHtcblxuICAgICAgICAvLyBBbGxvdyBpbnN0YW50aWF0aW9uIHdpdGhvdXQgdGhlICduZXcnIGtleXdvcmRcbiAgICAgICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIGpRdWVyeS5FdmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgalF1ZXJ5LkV2ZW50KHNyYywgcHJvcHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXZlbnQgb2JqZWN0XG4gICAgICAgIGlmIChzcmMgJiYgc3JjLnR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxFdmVudCA9IHNyYztcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHNyYy50eXBlO1xuXG4gICAgICAgICAgICAvLyBFdmVudHMgYnViYmxpbmcgdXAgdGhlIGRvY3VtZW50IG1heSBoYXZlIGJlZW4gbWFya2VkIGFzIHByZXZlbnRlZFxuICAgICAgICAgICAgLy8gYnkgYSBoYW5kbGVyIGxvd2VyIGRvd24gdGhlIHRyZWU7IHJlZmxlY3QgdGhlIGNvcnJlY3QgdmFsdWUuXG4gICAgICAgICAgICB0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHNyYy5kZWZhdWx0UHJldmVudGVkIHx8XG4gICAgICAgICAgICBzcmMuZGVmYXVsdFByZXZlbnRlZCA9PT0gdW5kZWZpbmVkICYmXG5cbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seVxuICAgICAgICAgICAgc3JjLnJldHVyblZhbHVlID09PSBmYWxzZSA/XG4gICAgICAgICAgICAgICAgcmV0dXJuVHJ1ZSA6XG4gICAgICAgICAgICAgICAgcmV0dXJuRmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSB0YXJnZXQgcHJvcGVydGllc1xuICAgICAgICAgICAgLy8gU3VwcG9ydDogU2FmYXJpIDw9NiAtIDcgb25seVxuICAgICAgICAgICAgLy8gVGFyZ2V0IHNob3VsZCBub3QgYmUgYSB0ZXh0IG5vZGUgKCM1MDQsICMxMzE0MylcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gKHNyYy50YXJnZXQgJiYgc3JjLnRhcmdldC5ub2RlVHlwZSA9PT0gMykgP1xuICAgICAgICAgICAgICAgIHNyYy50YXJnZXQucGFyZW50Tm9kZSA6XG4gICAgICAgICAgICAgICAgc3JjLnRhcmdldDtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VGFyZ2V0ID0gc3JjLmN1cnJlbnRUYXJnZXQ7XG4gICAgICAgICAgICB0aGlzLnJlbGF0ZWRUYXJnZXQgPSBzcmMucmVsYXRlZFRhcmdldDtcblxuICAgICAgICAgICAgLy8gRXZlbnQgdHlwZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50eXBlID0gc3JjO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUHV0IGV4cGxpY2l0bHkgcHJvdmlkZWQgcHJvcGVydGllcyBvbnRvIHRoZSBldmVudCBvYmplY3RcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICBqUXVlcnkuZXh0ZW5kKHRoaXMsIHByb3BzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBhIHRpbWVzdGFtcCBpZiBpbmNvbWluZyBldmVudCBkb2Vzbid0IGhhdmUgb25lXG4gICAgICAgIHRoaXMudGltZVN0YW1wID0gc3JjICYmIHNyYy50aW1lU3RhbXAgfHwgRGF0ZS5ub3coKTtcblxuICAgICAgICAvLyBNYXJrIGl0IGFzIGZpeGVkXG4gICAgICAgIHRoaXNbalF1ZXJ5LmV4cGFuZG9dID0gdHJ1ZTtcbiAgICB9O1xuXG4vLyBqUXVlcnkuRXZlbnQgaXMgYmFzZWQgb24gRE9NMyBFdmVudHMgYXMgc3BlY2lmaWVkIGJ5IHRoZSBFQ01BU2NyaXB0IExhbmd1YWdlIEJpbmRpbmdcbi8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDAzL1dELURPTS1MZXZlbC0zLUV2ZW50cy0yMDAzMDMzMS9lY21hLXNjcmlwdC1iaW5kaW5nLmh0bWxcbiAgICBqUXVlcnkuRXZlbnQucHJvdG90eXBlID0ge1xuICAgICAgICBjb25zdHJ1Y3RvcjogalF1ZXJ5LkV2ZW50LFxuICAgICAgICBpc0RlZmF1bHRQcmV2ZW50ZWQ6IHJldHVybkZhbHNlLFxuICAgICAgICBpc1Byb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG4gICAgICAgIGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcbiAgICAgICAgaXNTaW11bGF0ZWQ6IGZhbHNlLFxuXG4gICAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuICAgICAgICAgICAgdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuXG4gICAgICAgICAgICBpZiAoZSAmJiAhdGhpcy5pc1NpbXVsYXRlZCkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RvcFByb3BhZ2F0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuICAgICAgICAgICAgdGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cbiAgICAgICAgICAgIGlmIChlICYmICF0aGlzLmlzU2ltdWxhdGVkKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuICAgICAgICAgICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cbiAgICAgICAgICAgIGlmIChlICYmICF0aGlzLmlzU2ltdWxhdGVkKSB7XG4gICAgICAgICAgICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG5cbi8vIEluY2x1ZGVzIGFsbCBjb21tb24gZXZlbnQgcHJvcHMgaW5jbHVkaW5nIEtleUV2ZW50IGFuZCBNb3VzZUV2ZW50IHNwZWNpZmljIHByb3BzXG4gICAgalF1ZXJ5LmVhY2goe1xuICAgICAgICBhbHRLZXk6IHRydWUsXG4gICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgIGNoYW5nZWRUb3VjaGVzOiB0cnVlLFxuICAgICAgICBjdHJsS2V5OiB0cnVlLFxuICAgICAgICBkZXRhaWw6IHRydWUsXG4gICAgICAgIGV2ZW50UGhhc2U6IHRydWUsXG4gICAgICAgIG1ldGFLZXk6IHRydWUsXG4gICAgICAgIHBhZ2VYOiB0cnVlLFxuICAgICAgICBwYWdlWTogdHJ1ZSxcbiAgICAgICAgc2hpZnRLZXk6IHRydWUsXG4gICAgICAgIHZpZXc6IHRydWUsXG4gICAgICAgIFwiY2hhclwiOiB0cnVlLFxuICAgICAgICBjaGFyQ29kZTogdHJ1ZSxcbiAgICAgICAga2V5OiB0cnVlLFxuICAgICAgICBrZXlDb2RlOiB0cnVlLFxuICAgICAgICBidXR0b246IHRydWUsXG4gICAgICAgIGJ1dHRvbnM6IHRydWUsXG4gICAgICAgIGNsaWVudFg6IHRydWUsXG4gICAgICAgIGNsaWVudFk6IHRydWUsXG4gICAgICAgIG9mZnNldFg6IHRydWUsXG4gICAgICAgIG9mZnNldFk6IHRydWUsXG4gICAgICAgIHBvaW50ZXJJZDogdHJ1ZSxcbiAgICAgICAgcG9pbnRlclR5cGU6IHRydWUsXG4gICAgICAgIHNjcmVlblg6IHRydWUsXG4gICAgICAgIHNjcmVlblk6IHRydWUsXG4gICAgICAgIHRhcmdldFRvdWNoZXM6IHRydWUsXG4gICAgICAgIHRvRWxlbWVudDogdHJ1ZSxcbiAgICAgICAgdG91Y2hlczogdHJ1ZSxcblxuICAgICAgICB3aGljaDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuXG4gICAgICAgICAgICAvLyBBZGQgd2hpY2ggZm9yIGtleSBldmVudHNcbiAgICAgICAgICAgIGlmIChldmVudC53aGljaCA9PSBudWxsICYmIHJrZXlFdmVudC50ZXN0KGV2ZW50LnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2ZW50LmNoYXJDb2RlICE9IG51bGwgPyBldmVudC5jaGFyQ29kZSA6IGV2ZW50LmtleUNvZGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCB3aGljaCBmb3IgY2xpY2s6IDEgPT09IGxlZnQ7IDIgPT09IG1pZGRsZTsgMyA9PT0gcmlnaHRcbiAgICAgICAgICAgIGlmICghZXZlbnQud2hpY2ggJiYgYnV0dG9uICE9PSB1bmRlZmluZWQgJiYgcm1vdXNlRXZlbnQudGVzdChldmVudC50eXBlKSkge1xuICAgICAgICAgICAgICAgIGlmIChidXR0b24gJiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChidXR0b24gJiAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChidXR0b24gJiA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQud2hpY2g7XG4gICAgICAgIH1cbiAgICB9LCBqUXVlcnkuZXZlbnQuYWRkUHJvcCk7XG5cbi8vIENyZWF0ZSBtb3VzZWVudGVyL2xlYXZlIGV2ZW50cyB1c2luZyBtb3VzZW92ZXIvb3V0IGFuZCBldmVudC10aW1lIGNoZWNrc1xuLy8gc28gdGhhdCBldmVudCBkZWxlZ2F0aW9uIHdvcmtzIGluIGpRdWVyeS5cbi8vIERvIHRoZSBzYW1lIGZvciBwb2ludGVyZW50ZXIvcG9pbnRlcmxlYXZlIGFuZCBwb2ludGVyb3Zlci9wb2ludGVyb3V0XG4vL1xuLy8gU3VwcG9ydDogU2FmYXJpIDcgb25seVxuLy8gU2FmYXJpIHNlbmRzIG1vdXNlZW50ZXIgdG9vIG9mdGVuOyBzZWU6XG4vLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD00NzAyNThcbi8vIGZvciB0aGUgZGVzY3JpcHRpb24gb2YgdGhlIGJ1ZyAoaXQgZXhpc3RlZCBpbiBvbGRlciBDaHJvbWUgdmVyc2lvbnMgYXMgd2VsbCkuXG4gICAgalF1ZXJ5LmVhY2goe1xuICAgICAgICBtb3VzZWVudGVyOiBcIm1vdXNlb3ZlclwiLFxuICAgICAgICBtb3VzZWxlYXZlOiBcIm1vdXNlb3V0XCIsXG4gICAgICAgIHBvaW50ZXJlbnRlcjogXCJwb2ludGVyb3ZlclwiLFxuICAgICAgICBwb2ludGVybGVhdmU6IFwicG9pbnRlcm91dFwiXG4gICAgfSwgZnVuY3Rpb24gKG9yaWcsIGZpeCkge1xuICAgICAgICBqUXVlcnkuZXZlbnQuc3BlY2lhbFtvcmlnXSA9IHtcbiAgICAgICAgICAgIGRlbGVnYXRlVHlwZTogZml4LFxuICAgICAgICAgICAgYmluZFR5cGU6IGZpeCxcblxuICAgICAgICAgICAgaGFuZGxlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgcmV0LFxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB0aGlzLFxuICAgICAgICAgICAgICAgICAgICByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldCxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlT2JqID0gZXZlbnQuaGFuZGxlT2JqO1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIG1vdXNlZW50ZXIvbGVhdmUgY2FsbCB0aGUgaGFuZGxlciBpZiByZWxhdGVkIGlzIG91dHNpZGUgdGhlIHRhcmdldC5cbiAgICAgICAgICAgICAgICAvLyBOQjogTm8gcmVsYXRlZFRhcmdldCBpZiB0aGUgbW91c2UgbGVmdC9lbnRlcmVkIHRoZSBicm93c2VyIHdpbmRvd1xuICAgICAgICAgICAgICAgIGlmICghcmVsYXRlZCB8fCAocmVsYXRlZCAhPT0gdGFyZ2V0ICYmICFqUXVlcnkuY29udGFpbnModGFyZ2V0LCByZWxhdGVkKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudHlwZSA9IGhhbmRsZU9iai5vcmlnVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQudHlwZSA9IGZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuXG4gICAgICAgIG9uOiBmdW5jdGlvbiAodHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbikge1xuICAgICAgICAgICAgcmV0dXJuIG9uKHRoaXMsIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4pO1xuICAgICAgICB9LFxuICAgICAgICBvbmU6IGZ1bmN0aW9uICh0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gb24odGhpcywgdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9mZjogZnVuY3Rpb24gKHR5cGVzLCBzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgICAgIHZhciBoYW5kbGVPYmosIHR5cGU7XG4gICAgICAgICAgICBpZiAodHlwZXMgJiYgdHlwZXMucHJldmVudERlZmF1bHQgJiYgdHlwZXMuaGFuZGxlT2JqKSB7XG5cbiAgICAgICAgICAgICAgICAvLyAoIGV2ZW50ICkgIGRpc3BhdGNoZWQgalF1ZXJ5LkV2ZW50XG4gICAgICAgICAgICAgICAgaGFuZGxlT2JqID0gdHlwZXMuaGFuZGxlT2JqO1xuICAgICAgICAgICAgICAgIGpRdWVyeSh0eXBlcy5kZWxlZ2F0ZVRhcmdldCkub2ZmKFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVPYmoubmFtZXNwYWNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZU9iai5vcmlnVHlwZSArIFwiLlwiICsgaGFuZGxlT2JqLm5hbWVzcGFjZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVPYmoub3JpZ1R5cGUsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU9iai5zZWxlY3RvcixcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlT2JqLmhhbmRsZXJcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0eXBlcyA9PT0gXCJvYmplY3RcIikge1xuXG4gICAgICAgICAgICAgICAgLy8gKCB0eXBlcy1vYmplY3QgWywgc2VsZWN0b3JdIClcbiAgICAgICAgICAgICAgICBmb3IgKHR5cGUgaW4gdHlwZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vZmYodHlwZSwgc2VsZWN0b3IsIHR5cGVzW3R5cGVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZWN0b3IgPT09IGZhbHNlIHx8IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cbiAgICAgICAgICAgICAgICAvLyAoIHR5cGVzIFssIGZuXSApXG4gICAgICAgICAgICAgICAgZm4gPSBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBmbiA9IHJldHVybkZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LnJlbW92ZSh0aGlzLCB0eXBlcywgZm4sIHNlbGVjdG9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIHZhclxuXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuICAgICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzbGludC9lc2xpbnQvaXNzdWVzLzMyMjlcbiAgICAgICAgcnhodG1sVGFnID0gLzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksXG5cbiAgICAgICAgLyogZXNsaW50LWVuYWJsZSAqL1xuXG4gICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9MTAgLSAxMSwgRWRnZSAxMiAtIDEzIG9ubHlcbiAgICAgICAgLy8gSW4gSUUvRWRnZSB1c2luZyByZWdleCBncm91cHMgaGVyZSBjYXVzZXMgc2V2ZXJlIHNsb3dkb3ducy5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvMTczNjUxMi9cbiAgICAgICAgcm5vSW5uZXJodG1sID0gLzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksXG5cbiAgICAgICAgLy8gY2hlY2tlZD1cImNoZWNrZWRcIiBvciBjaGVja2VkXG4gICAgICAgIHJjaGVja2VkID0gL2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxcbiAgICAgICAgcmNsZWFuU2NyaXB0ID0gL15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nO1xuXG4vLyBQcmVmZXIgYSB0Ym9keSBvdmVyIGl0cyBwYXJlbnQgdGFibGUgZm9yIGNvbnRhaW5pbmcgbmV3IHJvd3NcbiAgICBmdW5jdGlvbiBtYW5pcHVsYXRpb25UYXJnZXQoZWxlbSwgY29udGVudCkge1xuICAgICAgICBpZiAobm9kZU5hbWUoZWxlbSwgXCJ0YWJsZVwiKSAmJlxuICAgICAgICAgICAgbm9kZU5hbWUoY29udGVudC5ub2RlVHlwZSAhPT0gMTEgPyBjb250ZW50IDogY29udGVudC5maXJzdENoaWxkLCBcInRyXCIpKSB7XG5cbiAgICAgICAgICAgIHJldHVybiBqUXVlcnkoZWxlbSkuY2hpbGRyZW4oXCJ0Ym9keVwiKVswXSB8fCBlbGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgfVxuXG4vLyBSZXBsYWNlL3Jlc3RvcmUgdGhlIHR5cGUgYXR0cmlidXRlIG9mIHNjcmlwdCBlbGVtZW50cyBmb3Igc2FmZSBET00gbWFuaXB1bGF0aW9uXG4gICAgZnVuY3Rpb24gZGlzYWJsZVNjcmlwdChlbGVtKSB7XG4gICAgICAgIGVsZW0udHlwZSA9IChlbGVtLmdldEF0dHJpYnV0ZShcInR5cGVcIikgIT09IG51bGwpICsgXCIvXCIgKyBlbGVtLnR5cGU7XG4gICAgICAgIHJldHVybiBlbGVtO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc3RvcmVTY3JpcHQoZWxlbSkge1xuICAgICAgICBpZiAoKGVsZW0udHlwZSB8fCBcIlwiKS5zbGljZSgwLCA1KSA9PT0gXCJ0cnVlL1wiKSB7XG4gICAgICAgICAgICBlbGVtLnR5cGUgPSBlbGVtLnR5cGUuc2xpY2UoNSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9uZUNvcHlFdmVudChzcmMsIGRlc3QpIHtcbiAgICAgICAgdmFyIGksIGwsIHR5cGUsIHBkYXRhT2xkLCBwZGF0YUN1ciwgdWRhdGFPbGQsIHVkYXRhQ3VyLCBldmVudHM7XG5cbiAgICAgICAgaWYgKGRlc3Qubm9kZVR5cGUgIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDEuIENvcHkgcHJpdmF0ZSBkYXRhOiBldmVudHMsIGhhbmRsZXJzLCBldGMuXG4gICAgICAgIGlmIChkYXRhUHJpdi5oYXNEYXRhKHNyYykpIHtcbiAgICAgICAgICAgIHBkYXRhT2xkID0gZGF0YVByaXYuYWNjZXNzKHNyYyk7XG4gICAgICAgICAgICBwZGF0YUN1ciA9IGRhdGFQcml2LnNldChkZXN0LCBwZGF0YU9sZCk7XG4gICAgICAgICAgICBldmVudHMgPSBwZGF0YU9sZC5ldmVudHM7XG5cbiAgICAgICAgICAgIGlmIChldmVudHMpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcGRhdGFDdXIuaGFuZGxlO1xuICAgICAgICAgICAgICAgIHBkYXRhQ3VyLmV2ZW50cyA9IHt9O1xuXG4gICAgICAgICAgICAgICAgZm9yICh0eXBlIGluIGV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gZXZlbnRzW3R5cGVdLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LmFkZChkZXN0LCB0eXBlLCBldmVudHNbdHlwZV1baV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gMi4gQ29weSB1c2VyIGRhdGFcbiAgICAgICAgaWYgKGRhdGFVc2VyLmhhc0RhdGEoc3JjKSkge1xuICAgICAgICAgICAgdWRhdGFPbGQgPSBkYXRhVXNlci5hY2Nlc3Moc3JjKTtcbiAgICAgICAgICAgIHVkYXRhQ3VyID0galF1ZXJ5LmV4dGVuZCh7fSwgdWRhdGFPbGQpO1xuXG4gICAgICAgICAgICBkYXRhVXNlci5zZXQoZGVzdCwgdWRhdGFDdXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4vLyBGaXggSUUgYnVncywgc2VlIHN1cHBvcnQgdGVzdHNcbiAgICBmdW5jdGlvbiBmaXhJbnB1dChzcmMsIGRlc3QpIHtcbiAgICAgICAgdmFyIG5vZGVOYW1lID0gZGVzdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIC8vIEZhaWxzIHRvIHBlcnNpc3QgdGhlIGNoZWNrZWQgc3RhdGUgb2YgYSBjbG9uZWQgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uLlxuICAgICAgICBpZiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIiAmJiByY2hlY2thYmxlVHlwZS50ZXN0KHNyYy50eXBlKSkge1xuICAgICAgICAgICAgZGVzdC5jaGVja2VkID0gc3JjLmNoZWNrZWQ7XG5cbiAgICAgICAgICAgIC8vIEZhaWxzIHRvIHJldHVybiB0aGUgc2VsZWN0ZWQgb3B0aW9uIHRvIHRoZSBkZWZhdWx0IHNlbGVjdGVkIHN0YXRlIHdoZW4gY2xvbmluZyBvcHRpb25zXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIiB8fCBub2RlTmFtZSA9PT0gXCJ0ZXh0YXJlYVwiKSB7XG4gICAgICAgICAgICBkZXN0LmRlZmF1bHRWYWx1ZSA9IHNyYy5kZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkb21NYW5pcChjb2xsZWN0aW9uLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCkge1xuXG4gICAgICAgIC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcbiAgICAgICAgYXJncyA9IGNvbmNhdC5hcHBseShbXSwgYXJncyk7XG5cbiAgICAgICAgdmFyIGZyYWdtZW50LCBmaXJzdCwgc2NyaXB0cywgaGFzU2NyaXB0cywgbm9kZSwgZG9jLFxuICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICBsID0gY29sbGVjdGlvbi5sZW5ndGgsXG4gICAgICAgICAgICBpTm9DbG9uZSA9IGwgLSAxLFxuICAgICAgICAgICAgdmFsdWUgPSBhcmdzWzBdLFxuICAgICAgICAgICAgdmFsdWVJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbih2YWx1ZSk7XG5cbiAgICAgICAgLy8gV2UgY2FuJ3QgY2xvbmVOb2RlIGZyYWdtZW50cyB0aGF0IGNvbnRhaW4gY2hlY2tlZCwgaW4gV2ViS2l0XG4gICAgICAgIGlmICh2YWx1ZUlzRnVuY3Rpb24gfHxcbiAgICAgICAgICAgIChsID4gMSAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiZcbiAgICAgICAgICAgICAgICAhc3VwcG9ydC5jaGVja0Nsb25lICYmIHJjaGVja2VkLnRlc3QodmFsdWUpKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb24uZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IGNvbGxlY3Rpb24uZXEoaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZUlzRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgYXJnc1swXSA9IHZhbHVlLmNhbGwodGhpcywgaW5kZXgsIHNlbGYuaHRtbCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZG9tTWFuaXAoc2VsZiwgYXJncywgY2FsbGJhY2ssIGlnbm9yZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobCkge1xuICAgICAgICAgICAgZnJhZ21lbnQgPSBidWlsZEZyYWdtZW50KGFyZ3MsIGNvbGxlY3Rpb25bMF0ub3duZXJEb2N1bWVudCwgZmFsc2UsIGNvbGxlY3Rpb24sIGlnbm9yZWQpO1xuICAgICAgICAgICAgZmlyc3QgPSBmcmFnbWVudC5maXJzdENoaWxkO1xuXG4gICAgICAgICAgICBpZiAoZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBmcmFnbWVudCA9IGZpcnN0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXF1aXJlIGVpdGhlciBuZXcgY29udGVudCBvciBhbiBpbnRlcmVzdCBpbiBpZ25vcmVkIGVsZW1lbnRzIHRvIGludm9rZSB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgIGlmIChmaXJzdCB8fCBpZ25vcmVkKSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0cyA9IGpRdWVyeS5tYXAoZ2V0QWxsKGZyYWdtZW50LCBcInNjcmlwdFwiKSwgZGlzYWJsZVNjcmlwdCk7XG4gICAgICAgICAgICAgICAgaGFzU2NyaXB0cyA9IHNjcmlwdHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBvcmlnaW5hbCBmcmFnbWVudCBmb3IgdGhlIGxhc3QgaXRlbVxuICAgICAgICAgICAgICAgIC8vIGluc3RlYWQgb2YgdGhlIGZpcnN0IGJlY2F1c2UgaXQgY2FuIGVuZCB1cFxuICAgICAgICAgICAgICAgIC8vIGJlaW5nIGVtcHRpZWQgaW5jb3JyZWN0bHkgaW4gY2VydGFpbiBzaXR1YXRpb25zICgjODA3MCkuXG4gICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGZyYWdtZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpICE9PSBpTm9DbG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGpRdWVyeS5jbG9uZShub2RlLCB0cnVlLCB0cnVlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gS2VlcCByZWZlcmVuY2VzIHRvIGNsb25lZCBzY3JpcHRzIGZvciBsYXRlciByZXN0b3JhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc1NjcmlwdHMpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkubWVyZ2Uoc2NyaXB0cywgZ2V0QWxsKG5vZGUsIFwic2NyaXB0XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoY29sbGVjdGlvbltpXSwgbm9kZSwgaSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGhhc1NjcmlwdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLm93bmVyRG9jdW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVlbmFibGUgc2NyaXB0c1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkubWFwKHNjcmlwdHMsIHJlc3RvcmVTY3JpcHQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEV2YWx1YXRlIGV4ZWN1dGFibGUgc2NyaXB0cyBvbiBmaXJzdCBkb2N1bWVudCBpbnNlcnRpb25cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGhhc1NjcmlwdHM7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IHNjcmlwdHNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocnNjcmlwdFR5cGUudGVzdChub2RlLnR5cGUgfHwgXCJcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAhZGF0YVByaXYuYWNjZXNzKG5vZGUsIFwiZ2xvYmFsRXZhbFwiKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5jb250YWlucyhkb2MsIG5vZGUpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5zcmMgJiYgKG5vZGUudHlwZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpICE9PSBcIm1vZHVsZVwiKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3B0aW9uYWwgQUpBWCBkZXBlbmRlbmN5LCBidXQgd29uJ3QgcnVuIHNjcmlwdHMgaWYgbm90IHByZXNlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5fZXZhbFVybCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5Ll9ldmFsVXJsKG5vZGUuc3JjKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTUV2YWwobm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKHJjbGVhblNjcmlwdCwgXCJcIiksIGRvYywgbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlKGVsZW0sIHNlbGVjdG9yLCBrZWVwRGF0YSkge1xuICAgICAgICB2YXIgbm9kZSxcbiAgICAgICAgICAgIG5vZGVzID0gc2VsZWN0b3IgPyBqUXVlcnkuZmlsdGVyKHNlbGVjdG9yLCBlbGVtKSA6IGVsZW0sXG4gICAgICAgICAgICBpID0gMDtcblxuICAgICAgICBmb3IgKDsgKG5vZGUgPSBub2Rlc1tpXSkgIT0gbnVsbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWtlZXBEYXRhICYmIG5vZGUubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuY2xlYW5EYXRhKGdldEFsbChub2RlKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoa2VlcERhdGEgJiYgalF1ZXJ5LmNvbnRhaW5zKG5vZGUub3duZXJEb2N1bWVudCwgbm9kZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0R2xvYmFsRXZhbChnZXRBbGwobm9kZSwgXCJzY3JpcHRcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbTtcbiAgICB9XG5cbiAgICBqUXVlcnkuZXh0ZW5kKHtcbiAgICAgICAgaHRtbFByZWZpbHRlcjogZnVuY3Rpb24gKGh0bWwpIHtcbiAgICAgICAgICAgIHJldHVybiBodG1sLnJlcGxhY2UocnhodG1sVGFnLCBcIjwkMT48LyQyPlwiKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjbG9uZTogZnVuY3Rpb24gKGVsZW0sIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKSB7XG4gICAgICAgICAgICB2YXIgaSwgbCwgc3JjRWxlbWVudHMsIGRlc3RFbGVtZW50cyxcbiAgICAgICAgICAgICAgICBjbG9uZSA9IGVsZW0uY2xvbmVOb2RlKHRydWUpLFxuICAgICAgICAgICAgICAgIGluUGFnZSA9IGpRdWVyeS5jb250YWlucyhlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0pO1xuXG4gICAgICAgICAgICAvLyBGaXggSUUgY2xvbmluZyBpc3N1ZXNcbiAgICAgICAgICAgIGlmICghc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCAmJiAoZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBlbGVtLm5vZGVUeXBlID09PSAxMSkgJiZcbiAgICAgICAgICAgICAgICAhalF1ZXJ5LmlzWE1MRG9jKGVsZW0pKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBXZSBlc2NoZXcgU2l6emxlIGhlcmUgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnM6IGh0dHBzOi8vanNwZXJmLmNvbS9nZXRhbGwtdnMtc2l6emxlLzJcbiAgICAgICAgICAgICAgICBkZXN0RWxlbWVudHMgPSBnZXRBbGwoY2xvbmUpO1xuICAgICAgICAgICAgICAgIHNyY0VsZW1lbnRzID0gZ2V0QWxsKGVsZW0pO1xuXG4gICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IHNyY0VsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmaXhJbnB1dChzcmNFbGVtZW50c1tpXSwgZGVzdEVsZW1lbnRzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENvcHkgdGhlIGV2ZW50cyBmcm9tIHRoZSBvcmlnaW5hbCB0byB0aGUgY2xvbmVcbiAgICAgICAgICAgIGlmIChkYXRhQW5kRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRlZXBEYXRhQW5kRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNyY0VsZW1lbnRzID0gc3JjRWxlbWVudHMgfHwgZ2V0QWxsKGVsZW0pO1xuICAgICAgICAgICAgICAgICAgICBkZXN0RWxlbWVudHMgPSBkZXN0RWxlbWVudHMgfHwgZ2V0QWxsKGNsb25lKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9uZUNvcHlFdmVudChzcmNFbGVtZW50c1tpXSwgZGVzdEVsZW1lbnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNsb25lQ29weUV2ZW50KGVsZW0sIGNsb25lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFByZXNlcnZlIHNjcmlwdCBldmFsdWF0aW9uIGhpc3RvcnlcbiAgICAgICAgICAgIGRlc3RFbGVtZW50cyA9IGdldEFsbChjbG9uZSwgXCJzY3JpcHRcIik7XG4gICAgICAgICAgICBpZiAoZGVzdEVsZW1lbnRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBzZXRHbG9iYWxFdmFsKGRlc3RFbGVtZW50cywgIWluUGFnZSAmJiBnZXRBbGwoZWxlbSwgXCJzY3JpcHRcIikpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXR1cm4gdGhlIGNsb25lZCBzZXRcbiAgICAgICAgICAgIHJldHVybiBjbG9uZTtcbiAgICAgICAgfSxcblxuICAgICAgICBjbGVhbkRhdGE6IGZ1bmN0aW9uIChlbGVtcykge1xuICAgICAgICAgICAgdmFyIGRhdGEsIGVsZW0sIHR5cGUsXG4gICAgICAgICAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsLFxuICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKDsgKGVsZW0gPSBlbGVtc1tpXSkgIT09IHVuZGVmaW5lZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjY2VwdERhdGEoZWxlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChkYXRhID0gZWxlbVtkYXRhUHJpdi5leHBhbmRvXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodHlwZSBpbiBkYXRhLmV2ZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlY2lhbFt0eXBlXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmV2ZW50LnJlbW92ZShlbGVtLCB0eXBlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHNob3J0Y3V0IHRvIGF2b2lkIGpRdWVyeS5ldmVudC5yZW1vdmUncyBvdmVyaGVhZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LnJlbW92ZUV2ZW50KGVsZW0sIHR5cGUsIGRhdGEuaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB1bmRlZmluZWQgaW5zdGVhZCBvZiB1c2luZyBkZWxldGUsIHNlZSBEYXRhI3JlbW92ZVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVtkYXRhUHJpdi5leHBhbmRvXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbVtkYXRhVXNlci5leHBhbmRvXSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1K1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtW2RhdGFVc2VyLmV4cGFuZG9dID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgICAgZGV0YWNoOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiByZW1vdmUodGhpcywgc2VsZWN0b3IsIHRydWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVtb3ZlKHRoaXMsIHNlbGVjdG9yKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0ZXh0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2Nlc3ModGhpcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkudGV4dCh0aGlzKSA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGFwcGVuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvbU1hbmlwKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQodGhpcywgZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBwcmVwZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9tTWFuaXAodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IG1hbmlwdWxhdGlvblRhcmdldCh0aGlzLCBlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Lmluc2VydEJlZm9yZShlbGVtLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZG9tTWFuaXAodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhZnRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRvbU1hbmlwKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbSwgdGhpcy5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZW1wdHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbGVtLFxuICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICBmb3IgKDsgKGVsZW0gPSB0aGlzW2ldKSAhPSBudWxsOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXZlbnQgbWVtb3J5IGxlYWtzXG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5jbGVhbkRhdGEoZ2V0QWxsKGVsZW0sIGZhbHNlKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcbiAgICAgICAgICAgICAgICAgICAgZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBjbG9uZTogZnVuY3Rpb24gKGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzKSB7XG4gICAgICAgICAgICBkYXRhQW5kRXZlbnRzID0gZGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZmFsc2UgOiBkYXRhQW5kRXZlbnRzO1xuICAgICAgICAgICAgZGVlcERhdGFBbmRFdmVudHMgPSBkZWVwRGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZGF0YUFuZEV2ZW50cyA6IGRlZXBEYXRhQW5kRXZlbnRzO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBqUXVlcnkuY2xvbmUodGhpcywgZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaHRtbDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzKHRoaXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtID0gdGhpc1swXSB8fCB7fSxcbiAgICAgICAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGwgPSB0aGlzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGVsZW0ubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFNlZSBpZiB3ZSBjYW4gdGFrZSBhIHNob3J0Y3V0IGFuZCBqdXN0IHVzZSBpbm5lckhUTUxcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFybm9Jbm5lcmh0bWwudGVzdCh2YWx1ZSkgJiZcbiAgICAgICAgICAgICAgICAgICAgIXdyYXBNYXBbKHJ0YWdOYW1lLmV4ZWModmFsdWUpIHx8IFtcIlwiLCBcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pIHtcblxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGpRdWVyeS5odG1sUHJlZmlsdGVyKHZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtID0gdGhpc1tpXSB8fCB7fTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBlbGVtZW50IG5vZGVzIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5jbGVhbkRhdGEoZ2V0QWxsKGVsZW0sIGZhbHNlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uaW5uZXJIVE1MID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtID0gMDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdXNpbmcgaW5uZXJIVE1MIHRocm93cyBhbiBleGNlcHRpb24sIHVzZSB0aGUgZmFsbGJhY2sgbWV0aG9kXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHkoKS5hcHBlbmQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZXBsYWNlV2l0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGlnbm9yZWQgPSBbXTtcblxuICAgICAgICAgICAgLy8gTWFrZSB0aGUgY2hhbmdlcywgcmVwbGFjaW5nIGVhY2ggbm9uLWlnbm9yZWQgY29udGV4dCBlbGVtZW50IHdpdGggdGhlIG5ldyBjb250ZW50XG4gICAgICAgICAgICByZXR1cm4gZG9tTWFuaXAodGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5LmluQXJyYXkodGhpcywgaWdub3JlZCkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5jbGVhbkRhdGEoZ2V0QWxsKHRoaXMpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlcGxhY2VDaGlsZChlbGVtLCB0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEZvcmNlIGNhbGxiYWNrIGludm9jYXRpb25cbiAgICAgICAgICAgIH0sIGlnbm9yZWQpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBqUXVlcnkuZWFjaCh7XG4gICAgICAgIGFwcGVuZFRvOiBcImFwcGVuZFwiLFxuICAgICAgICBwcmVwZW5kVG86IFwicHJlcGVuZFwiLFxuICAgICAgICBpbnNlcnRCZWZvcmU6IFwiYmVmb3JlXCIsXG4gICAgICAgIGluc2VydEFmdGVyOiBcImFmdGVyXCIsXG4gICAgICAgIHJlcGxhY2VBbGw6IFwicmVwbGFjZVdpdGhcIlxuICAgIH0sIGZ1bmN0aW9uIChuYW1lLCBvcmlnaW5hbCkge1xuICAgICAgICBqUXVlcnkuZm5bbmFtZV0gPSBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBlbGVtcyxcbiAgICAgICAgICAgICAgICByZXQgPSBbXSxcbiAgICAgICAgICAgICAgICBpbnNlcnQgPSBqUXVlcnkoc2VsZWN0b3IpLFxuICAgICAgICAgICAgICAgIGxhc3QgPSBpbnNlcnQubGVuZ3RoIC0gMSxcbiAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgZm9yICg7IGkgPD0gbGFzdDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZWxlbXMgPSBpID09PSBsYXN0ID8gdGhpcyA6IHRoaXMuY2xvbmUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KGluc2VydFtpXSlbb3JpZ2luYWxdKGVsZW1zKTtcblxuICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuICAgICAgICAgICAgICAgIC8vIC5nZXQoKSBiZWNhdXNlIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcbiAgICAgICAgICAgICAgICBwdXNoLmFwcGx5KHJldCwgZWxlbXMuZ2V0KCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wdXNoU3RhY2socmV0KTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICB2YXIgcm51bW5vbnB4ID0gbmV3IFJlZ0V4cChcIl4oXCIgKyBwbnVtICsgXCIpKD8hcHgpW2EteiVdKyRcIiwgXCJpXCIpO1xuXG4gICAgdmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uIChlbGVtKSB7XG5cbiAgICAgICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5LCBGaXJlZm94IDw9MzAgKCMxNTA5OCwgIzE0MTUwKVxuICAgICAgICAvLyBJRSB0aHJvd3Mgb24gZWxlbWVudHMgY3JlYXRlZCBpbiBwb3B1cHNcbiAgICAgICAgLy8gRkYgbWVhbndoaWxlIHRocm93cyBvbiBmcmFtZSBlbGVtZW50cyB0aHJvdWdoIFwiZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZVwiXG4gICAgICAgIHZhciB2aWV3ID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG4gICAgICAgIGlmICghdmlldyB8fCAhdmlldy5vcGVuZXIpIHtcbiAgICAgICAgICAgIHZpZXcgPSB3aW5kb3c7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgIH07XG5cbiAgICB2YXIgcmJveFN0eWxlID0gbmV3IFJlZ0V4cChjc3NFeHBhbmQuam9pbihcInxcIiksIFwiaVwiKTtcblxuXG4gICAgKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBFeGVjdXRpbmcgYm90aCBwaXhlbFBvc2l0aW9uICYgYm94U2l6aW5nUmVsaWFibGUgdGVzdHMgcmVxdWlyZSBvbmx5IG9uZSBsYXlvdXRcbiAgICAgICAgLy8gc28gdGhleSdyZSBleGVjdXRlZCBhdCB0aGUgc2FtZSB0aW1lIHRvIHNhdmUgdGhlIHNlY29uZCBjb21wdXRhdGlvbi5cbiAgICAgICAgZnVuY3Rpb24gY29tcHV0ZVN0eWxlVGVzdHMoKSB7XG5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSBzaW5nbGV0b24sIHdlIG5lZWQgdG8gZXhlY3V0ZSBpdCBvbmx5IG9uY2VcbiAgICAgICAgICAgIGlmICghZGl2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O1wiICtcbiAgICAgICAgICAgICAgICBcIm1hcmdpbi10b3A6MXB4O3BhZGRpbmc6MDtib3JkZXI6MFwiO1xuICAgICAgICAgICAgZGl2LnN0eWxlLmNzc1RleHQgPVxuICAgICAgICAgICAgICAgIFwicG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTpibG9jaztib3gtc2l6aW5nOmJvcmRlci1ib3g7b3ZlcmZsb3c6c2Nyb2xsO1wiICtcbiAgICAgICAgICAgICAgICBcIm1hcmdpbjphdXRvO2JvcmRlcjoxcHg7cGFkZGluZzoxcHg7XCIgK1xuICAgICAgICAgICAgICAgIFwid2lkdGg6NjAlO3RvcDoxJVwiO1xuICAgICAgICAgICAgZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcikuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICAgICAgdmFyIGRpdlN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGl2KTtcbiAgICAgICAgICAgIHBpeGVsUG9zaXRpb25WYWwgPSBkaXZTdHlsZS50b3AgIT09IFwiMSVcIjtcblxuICAgICAgICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seSwgRmlyZWZveCA8PTMgLSA0NFxuICAgICAgICAgICAgcmVsaWFibGVNYXJnaW5MZWZ0VmFsID0gcm91bmRQaXhlbE1lYXN1cmVzKGRpdlN0eWxlLm1hcmdpbkxlZnQpID09PSAxMjtcblxuICAgICAgICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZCA0LjAgLSA0LjMgb25seSwgU2FmYXJpIDw9OS4xIC0gMTAuMSwgaU9TIDw9Ny4wIC0gOS4zXG4gICAgICAgICAgICAvLyBTb21lIHN0eWxlcyBjb21lIGJhY2sgd2l0aCBwZXJjZW50YWdlIHZhbHVlcywgZXZlbiB0aG91Z2ggdGhleSBzaG91bGRuJ3RcbiAgICAgICAgICAgIGRpdi5zdHlsZS5yaWdodCA9IFwiNjAlXCI7XG4gICAgICAgICAgICBwaXhlbEJveFN0eWxlc1ZhbCA9IHJvdW5kUGl4ZWxNZWFzdXJlcyhkaXZTdHlsZS5yaWdodCkgPT09IDM2O1xuXG4gICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuICAgICAgICAgICAgLy8gRGV0ZWN0IG1pc3JlcG9ydGluZyBvZiBjb250ZW50IGRpbWVuc2lvbnMgZm9yIGJveC1zaXppbmc6Ym9yZGVyLWJveCBlbGVtZW50c1xuICAgICAgICAgICAgYm94U2l6aW5nUmVsaWFibGVWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoZGl2U3R5bGUud2lkdGgpID09PSAzNjtcblxuICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgOSBvbmx5XG4gICAgICAgICAgICAvLyBEZXRlY3Qgb3ZlcmZsb3c6c2Nyb2xsIHNjcmV3aW5lc3MgKGdoLTM2OTkpXG4gICAgICAgICAgICBkaXYuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgICAgICAgICBzY3JvbGxib3hTaXplVmFsID0gZGl2Lm9mZnNldFdpZHRoID09PSAzNiB8fCBcImFic29sdXRlXCI7XG5cbiAgICAgICAgICAgIGRvY3VtZW50RWxlbWVudC5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgICAvLyBOdWxsaWZ5IHRoZSBkaXYgc28gaXQgd291bGRuJ3QgYmUgc3RvcmVkIGluIHRoZSBtZW1vcnkgYW5kXG4gICAgICAgICAgICAvLyBpdCB3aWxsIGFsc28gYmUgYSBzaWduIHRoYXQgY2hlY2tzIGFscmVhZHkgcGVyZm9ybWVkXG4gICAgICAgICAgICBkaXYgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcm91bmRQaXhlbE1lYXN1cmVzKG1lYXN1cmUpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHBhcnNlRmxvYXQobWVhc3VyZSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBpeGVsUG9zaXRpb25WYWwsIGJveFNpemluZ1JlbGlhYmxlVmFsLCBzY3JvbGxib3hTaXplVmFsLCBwaXhlbEJveFN0eWxlc1ZhbCxcbiAgICAgICAgICAgIHJlbGlhYmxlTWFyZ2luTGVmdFZhbCxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIC8vIEZpbmlzaCBlYXJseSBpbiBsaW1pdGVkIChub24tYnJvd3NlcikgZW52aXJvbm1lbnRzXG4gICAgICAgIGlmICghZGl2LnN0eWxlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG4gICAgICAgIC8vIFN0eWxlIG9mIGNsb25lZCBlbGVtZW50IGFmZmVjdHMgc291cmNlIGVsZW1lbnQgY2xvbmVkICgjODkwOClcbiAgICAgICAgZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJjb250ZW50LWJveFwiO1xuICAgICAgICBkaXYuY2xvbmVOb2RlKHRydWUpLnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJcIjtcbiAgICAgICAgc3VwcG9ydC5jbGVhckNsb25lU3R5bGUgPSBkaXYuc3R5bGUuYmFja2dyb3VuZENsaXAgPT09IFwiY29udGVudC1ib3hcIjtcblxuICAgICAgICBqUXVlcnkuZXh0ZW5kKHN1cHBvcnQsIHtcbiAgICAgICAgICAgIGJveFNpemluZ1JlbGlhYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZVN0eWxlVGVzdHMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYm94U2l6aW5nUmVsaWFibGVWYWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGl4ZWxCb3hTdHlsZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlU3R5bGVUZXN0cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwaXhlbEJveFN0eWxlc1ZhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaXhlbFBvc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY29tcHV0ZVN0eWxlVGVzdHMoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGl4ZWxQb3NpdGlvblZhbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWxpYWJsZU1hcmdpbkxlZnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlU3R5bGVUZXN0cygpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZWxpYWJsZU1hcmdpbkxlZnRWYWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2Nyb2xsYm94U2l6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbXB1dGVTdHlsZVRlc3RzKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNjcm9sbGJveFNpemVWYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG5cblxuICAgIGZ1bmN0aW9uIGN1ckNTUyhlbGVtLCBuYW1lLCBjb21wdXRlZCkge1xuICAgICAgICB2YXIgd2lkdGgsIG1pbldpZHRoLCBtYXhXaWR0aCwgcmV0LFxuXG4gICAgICAgICAgICAvLyBTdXBwb3J0OiBGaXJlZm94IDUxK1xuICAgICAgICAgICAgLy8gUmV0cmlldmluZyBzdHlsZSBiZWZvcmUgY29tcHV0ZWQgc29tZWhvd1xuICAgICAgICAgICAgLy8gZml4ZXMgYW4gaXNzdWUgd2l0aCBnZXR0aW5nIHdyb25nIHZhbHVlc1xuICAgICAgICAgICAgLy8gb24gZGV0YWNoZWQgZWxlbWVudHNcbiAgICAgICAgICAgIHN0eWxlID0gZWxlbS5zdHlsZTtcblxuICAgICAgICBjb21wdXRlZCA9IGNvbXB1dGVkIHx8IGdldFN0eWxlcyhlbGVtKTtcblxuICAgICAgICAvLyBnZXRQcm9wZXJ0eVZhbHVlIGlzIG5lZWRlZCBmb3I6XG4gICAgICAgIC8vICAgLmNzcygnZmlsdGVyJykgKElFIDkgb25seSwgIzEyNTM3KVxuICAgICAgICAvLyAgIC5jc3MoJy0tY3VzdG9tUHJvcGVydHkpICgjMzE0NClcbiAgICAgICAgaWYgKGNvbXB1dGVkKSB7XG4gICAgICAgICAgICByZXQgPSBjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKG5hbWUpIHx8IGNvbXB1dGVkW25hbWVdO1xuXG4gICAgICAgICAgICBpZiAocmV0ID09PSBcIlwiICYmICFqUXVlcnkuY29udGFpbnMoZWxlbS5vd25lckRvY3VtZW50LCBlbGVtKSkge1xuICAgICAgICAgICAgICAgIHJldCA9IGpRdWVyeS5zdHlsZShlbGVtLCBuYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQSB0cmlidXRlIHRvIHRoZSBcImF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcIlxuICAgICAgICAgICAgLy8gQW5kcm9pZCBCcm93c2VyIHJldHVybnMgcGVyY2VudGFnZSBmb3Igc29tZSB2YWx1ZXMsXG4gICAgICAgICAgICAvLyBidXQgd2lkdGggc2VlbXMgdG8gYmUgcmVsaWFibHkgcGl4ZWxzLlxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhZ2FpbnN0IHRoZSBDU1NPTSBkcmFmdCBzcGVjOlxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzc29tLyNyZXNvbHZlZC12YWx1ZXNcbiAgICAgICAgICAgIGlmICghc3VwcG9ydC5waXhlbEJveFN0eWxlcygpICYmIHJudW1ub25weC50ZXN0KHJldCkgJiYgcmJveFN0eWxlLnRlc3QobmFtZSkpIHtcblxuICAgICAgICAgICAgICAgIC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcbiAgICAgICAgICAgICAgICB3aWR0aCA9IHN0eWxlLndpZHRoO1xuICAgICAgICAgICAgICAgIG1pbldpZHRoID0gc3R5bGUubWluV2lkdGg7XG4gICAgICAgICAgICAgICAgbWF4V2lkdGggPSBzdHlsZS5tYXhXaWR0aDtcblxuICAgICAgICAgICAgICAgIC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcbiAgICAgICAgICAgICAgICBzdHlsZS5taW5XaWR0aCA9IHN0eWxlLm1heFdpZHRoID0gc3R5bGUud2lkdGggPSByZXQ7XG4gICAgICAgICAgICAgICAgcmV0ID0gY29tcHV0ZWQud2lkdGg7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG4gICAgICAgICAgICAgICAgc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgICAgICBzdHlsZS5taW5XaWR0aCA9IG1pbldpZHRoO1xuICAgICAgICAgICAgICAgIHN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0ICE9PSB1bmRlZmluZWQgP1xuXG4gICAgICAgICAgICAvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG4gICAgICAgICAgICAvLyBJRSByZXR1cm5zIHpJbmRleCB2YWx1ZSBhcyBhbiBpbnRlZ2VyLlxuICAgICAgICAgICAgcmV0ICsgXCJcIiA6XG4gICAgICAgICAgICByZXQ7XG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBhZGRHZXRIb29rSWYoY29uZGl0aW9uRm4sIGhvb2tGbikge1xuXG4gICAgICAgIC8vIERlZmluZSB0aGUgaG9vaywgd2UnbGwgY2hlY2sgb24gdGhlIGZpcnN0IHJ1biBpZiBpdCdzIHJlYWxseSBuZWVkZWQuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uRm4oKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhvb2sgbm90IG5lZWRlZCAob3IgaXQncyBub3QgcG9zc2libGUgdG8gdXNlIGl0IGR1ZVxuICAgICAgICAgICAgICAgICAgICAvLyB0byBtaXNzaW5nIGRlcGVuZGVuY3kpLCByZW1vdmUgaXQuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmdldDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEhvb2sgbmVlZGVkOyByZWRlZmluZSBpdCBzbyB0aGF0IHRoZSBzdXBwb3J0IHRlc3QgaXMgbm90IGV4ZWN1dGVkIGFnYWluLlxuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5nZXQgPSBob29rRm4pLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG5cbiAgICB2YXJcblxuICAgICAgICAvLyBTd2FwcGFibGUgaWYgZGlzcGxheSBpcyBub25lIG9yIHN0YXJ0cyB3aXRoIHRhYmxlXG4gICAgICAgIC8vIGV4Y2VwdCBcInRhYmxlXCIsIFwidGFibGUtY2VsbFwiLCBvciBcInRhYmxlLWNhcHRpb25cIlxuICAgICAgICAvLyBTZWUgaGVyZSBmb3IgZGlzcGxheSB2YWx1ZXM6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvQ1NTL2Rpc3BsYXlcbiAgICAgICAgcmRpc3BsYXlzd2FwID0gL14obm9uZXx0YWJsZSg/IS1jW2VhXSkuKykvLFxuICAgICAgICByY3VzdG9tUHJvcCA9IC9eLS0vLFxuICAgICAgICBjc3NTaG93ID0ge3Bvc2l0aW9uOiBcImFic29sdXRlXCIsIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsIGRpc3BsYXk6IFwiYmxvY2tcIn0sXG4gICAgICAgIGNzc05vcm1hbFRyYW5zZm9ybSA9IHtcbiAgICAgICAgICAgIGxldHRlclNwYWNpbmc6IFwiMFwiLFxuICAgICAgICAgICAgZm9udFdlaWdodDogXCI0MDBcIlxuICAgICAgICB9LFxuXG4gICAgICAgIGNzc1ByZWZpeGVzID0gW1wiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIl0sXG4gICAgICAgIGVtcHR5U3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlO1xuXG4vLyBSZXR1cm4gYSBjc3MgcHJvcGVydHkgbWFwcGVkIHRvIGEgcG90ZW50aWFsbHkgdmVuZG9yIHByZWZpeGVkIHByb3BlcnR5XG4gICAgZnVuY3Rpb24gdmVuZG9yUHJvcE5hbWUobmFtZSkge1xuXG4gICAgICAgIC8vIFNob3J0Y3V0IGZvciBuYW1lcyB0aGF0IGFyZSBub3QgdmVuZG9yIHByZWZpeGVkXG4gICAgICAgIGlmIChuYW1lIGluIGVtcHR5U3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHZlbmRvciBwcmVmaXhlZCBuYW1lc1xuICAgICAgICB2YXIgY2FwTmFtZSA9IG5hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSksXG4gICAgICAgICAgICBpID0gY3NzUHJlZml4ZXMubGVuZ3RoO1xuXG4gICAgICAgIHdoaWxlIChpLS0pIHtcbiAgICAgICAgICAgIG5hbWUgPSBjc3NQcmVmaXhlc1tpXSArIGNhcE5hbWU7XG4gICAgICAgICAgICBpZiAobmFtZSBpbiBlbXB0eVN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbi8vIFJldHVybiBhIHByb3BlcnR5IG1hcHBlZCBhbG9uZyB3aGF0IGpRdWVyeS5jc3NQcm9wcyBzdWdnZXN0cyBvciB0b1xuLy8gYSB2ZW5kb3IgcHJlZml4ZWQgcHJvcGVydHkuXG4gICAgZnVuY3Rpb24gZmluYWxQcm9wTmFtZShuYW1lKSB7XG4gICAgICAgIHZhciByZXQgPSBqUXVlcnkuY3NzUHJvcHNbbmFtZV07XG4gICAgICAgIGlmICghcmV0KSB7XG4gICAgICAgICAgICByZXQgPSBqUXVlcnkuY3NzUHJvcHNbbmFtZV0gPSB2ZW5kb3JQcm9wTmFtZShuYW1lKSB8fCBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2V0UG9zaXRpdmVOdW1iZXIoZWxlbSwgdmFsdWUsIHN1YnRyYWN0KSB7XG5cbiAgICAgICAgLy8gQW55IHJlbGF0aXZlICgrLy0pIHZhbHVlcyBoYXZlIGFscmVhZHkgYmVlblxuICAgICAgICAvLyBub3JtYWxpemVkIGF0IHRoaXMgcG9pbnRcbiAgICAgICAgdmFyIG1hdGNoZXMgPSByY3NzTnVtLmV4ZWModmFsdWUpO1xuICAgICAgICByZXR1cm4gbWF0Y2hlcyA/XG5cbiAgICAgICAgICAgIC8vIEd1YXJkIGFnYWluc3QgdW5kZWZpbmVkIFwic3VidHJhY3RcIiwgZS5nLiwgd2hlbiB1c2VkIGFzIGluIGNzc0hvb2tzXG4gICAgICAgICAgICBNYXRoLm1heCgwLCBtYXRjaGVzWzJdIC0gKHN1YnRyYWN0IHx8IDApKSArIChtYXRjaGVzWzNdIHx8IFwicHhcIikgOlxuICAgICAgICAgICAgdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYm94TW9kZWxBZGp1c3RtZW50KGVsZW0sIGRpbWVuc2lvbiwgYm94LCBpc0JvcmRlckJveCwgc3R5bGVzLCBjb21wdXRlZFZhbCkge1xuICAgICAgICB2YXIgaSA9IGRpbWVuc2lvbiA9PT0gXCJ3aWR0aFwiID8gMSA6IDAsXG4gICAgICAgICAgICBleHRyYSA9IDAsXG4gICAgICAgICAgICBkZWx0YSA9IDA7XG5cbiAgICAgICAgLy8gQWRqdXN0bWVudCBtYXkgbm90IGJlIG5lY2Vzc2FyeVxuICAgICAgICBpZiAoYm94ID09PSAoaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoOyBpIDwgNDsgaSArPSAyKSB7XG5cbiAgICAgICAgICAgIC8vIEJvdGggYm94IG1vZGVscyBleGNsdWRlIG1hcmdpblxuICAgICAgICAgICAgaWYgKGJveCA9PT0gXCJtYXJnaW5cIikge1xuICAgICAgICAgICAgICAgIGRlbHRhICs9IGpRdWVyeS5jc3MoZWxlbSwgYm94ICsgY3NzRXhwYW5kW2ldLCB0cnVlLCBzdHlsZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB3ZSBnZXQgaGVyZSB3aXRoIGEgY29udGVudC1ib3gsIHdlJ3JlIHNlZWtpbmcgXCJwYWRkaW5nXCIgb3IgXCJib3JkZXJcIiBvciBcIm1hcmdpblwiXG4gICAgICAgICAgICBpZiAoIWlzQm9yZGVyQm94KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xuICAgICAgICAgICAgICAgIGRlbHRhICs9IGpRdWVyeS5jc3MoZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbaV0sIHRydWUsIHN0eWxlcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBGb3IgXCJib3JkZXJcIiBvciBcIm1hcmdpblwiLCBhZGQgYm9yZGVyXG4gICAgICAgICAgICAgICAgaWYgKGJveCAhPT0gXCJwYWRkaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGEgKz0galF1ZXJ5LmNzcyhlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kW2ldICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEJ1dCBzdGlsbCBrZWVwIHRyYWNrIG9mIGl0IG90aGVyd2lzZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4dHJhICs9IGpRdWVyeS5jc3MoZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFtpXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBnZXQgaGVyZSB3aXRoIGEgYm9yZGVyLWJveCAoY29udGVudCArIHBhZGRpbmcgKyBib3JkZXIpLCB3ZSdyZSBzZWVraW5nIFwiY29udGVudFwiIG9yXG4gICAgICAgICAgICAgICAgLy8gXCJwYWRkaW5nXCIgb3IgXCJtYXJnaW5cIlxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vIEZvciBcImNvbnRlbnRcIiwgc3VidHJhY3QgcGFkZGluZ1xuICAgICAgICAgICAgICAgIGlmIChib3ggPT09IFwiY29udGVudFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhIC09IGpRdWVyeS5jc3MoZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbaV0sIHRydWUsIHN0eWxlcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRm9yIFwiY29udGVudFwiIG9yIFwicGFkZGluZ1wiLCBzdWJ0cmFjdCBib3JkZXJcbiAgICAgICAgICAgICAgICBpZiAoYm94ICE9PSBcIm1hcmdpblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhIC09IGpRdWVyeS5jc3MoZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFtpXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBY2NvdW50IGZvciBwb3NpdGl2ZSBjb250ZW50LWJveCBzY3JvbGwgZ3V0dGVyIHdoZW4gcmVxdWVzdGVkIGJ5IHByb3ZpZGluZyBjb21wdXRlZFZhbFxuICAgICAgICBpZiAoIWlzQm9yZGVyQm94ICYmIGNvbXB1dGVkVmFsID49IDApIHtcblxuICAgICAgICAgICAgLy8gb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGlzIGEgcm91bmRlZCBzdW0gb2YgY29udGVudCwgcGFkZGluZywgc2Nyb2xsIGd1dHRlciwgYW5kIGJvcmRlclxuICAgICAgICAgICAgLy8gQXNzdW1pbmcgaW50ZWdlciBzY3JvbGwgZ3V0dGVyLCBzdWJ0cmFjdCB0aGUgcmVzdCBhbmQgcm91bmQgZG93blxuICAgICAgICAgICAgZGVsdGEgKz0gTWF0aC5tYXgoMCwgTWF0aC5jZWlsKFxuICAgICAgICAgICAgICAgIGVsZW1bXCJvZmZzZXRcIiArIGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXSAtXG4gICAgICAgICAgICAgICAgY29tcHV0ZWRWYWwgLVxuICAgICAgICAgICAgICAgIGRlbHRhIC1cbiAgICAgICAgICAgICAgICBleHRyYSAtXG4gICAgICAgICAgICAgICAgMC41XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWx0YTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRXaWR0aE9ySGVpZ2h0KGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEpIHtcblxuICAgICAgICAvLyBTdGFydCB3aXRoIGNvbXB1dGVkIHN0eWxlXG4gICAgICAgIHZhciBzdHlsZXMgPSBnZXRTdHlsZXMoZWxlbSksXG4gICAgICAgICAgICB2YWwgPSBjdXJDU1MoZWxlbSwgZGltZW5zaW9uLCBzdHlsZXMpLFxuICAgICAgICAgICAgaXNCb3JkZXJCb3ggPSBqUXVlcnkuY3NzKGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMpID09PSBcImJvcmRlci1ib3hcIixcbiAgICAgICAgICAgIHZhbHVlSXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveDtcblxuICAgICAgICAvLyBTdXBwb3J0OiBGaXJlZm94IDw9NTRcbiAgICAgICAgLy8gUmV0dXJuIGEgY29uZm91bmRpbmcgbm9uLXBpeGVsIHZhbHVlIG9yIGZlaWduIGlnbm9yYW5jZSwgYXMgYXBwcm9wcmlhdGUuXG4gICAgICAgIGlmIChybnVtbm9ucHgudGVzdCh2YWwpKSB7XG4gICAgICAgICAgICBpZiAoIWV4dHJhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbCA9IFwiYXV0b1wiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHN0eWxlIGluIGNhc2UgYSBicm93c2VyIHdoaWNoIHJldHVybnMgdW5yZWxpYWJsZSB2YWx1ZXNcbiAgICAgICAgLy8gZm9yIGdldENvbXB1dGVkU3R5bGUgc2lsZW50bHkgZmFsbHMgYmFjayB0byB0aGUgcmVsaWFibGUgZWxlbS5zdHlsZVxuICAgICAgICB2YWx1ZUlzQm9yZGVyQm94ID0gdmFsdWVJc0JvcmRlckJveCAmJlxuICAgICAgICAgICAgKHN1cHBvcnQuYm94U2l6aW5nUmVsaWFibGUoKSB8fCB2YWwgPT09IGVsZW0uc3R5bGVbZGltZW5zaW9uXSk7XG5cbiAgICAgICAgLy8gRmFsbCBiYWNrIHRvIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCB3aGVuIHZhbHVlIGlzIFwiYXV0b1wiXG4gICAgICAgIC8vIFRoaXMgaGFwcGVucyBmb3IgaW5saW5lIGVsZW1lbnRzIHdpdGggbm8gZXhwbGljaXQgc2V0dGluZyAoZ2gtMzU3MSlcbiAgICAgICAgLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMSAtIDQuMyBvbmx5XG4gICAgICAgIC8vIEFsc28gdXNlIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBmb3IgbWlzcmVwb3J0ZWQgaW5saW5lIGRpbWVuc2lvbnMgKGdoLTM2MDIpXG4gICAgICAgIGlmICh2YWwgPT09IFwiYXV0b1wiIHx8XG4gICAgICAgICAgICAhcGFyc2VGbG9hdCh2YWwpICYmIGpRdWVyeS5jc3MoZWxlbSwgXCJkaXNwbGF5XCIsIGZhbHNlLCBzdHlsZXMpID09PSBcImlubGluZVwiKSB7XG5cbiAgICAgICAgICAgIHZhbCA9IGVsZW1bXCJvZmZzZXRcIiArIGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXTtcblxuICAgICAgICAgICAgLy8gb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IHByb3ZpZGUgYm9yZGVyLWJveCB2YWx1ZXNcbiAgICAgICAgICAgIHZhbHVlSXNCb3JkZXJCb3ggPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm9ybWFsaXplIFwiXCIgYW5kIGF1dG9cbiAgICAgICAgdmFsID0gcGFyc2VGbG9hdCh2YWwpIHx8IDA7XG5cbiAgICAgICAgLy8gQWRqdXN0IGZvciB0aGUgZWxlbWVudCdzIGJveCBtb2RlbFxuICAgICAgICByZXR1cm4gKHZhbCArXG4gICAgICAgICAgICBib3hNb2RlbEFkanVzdG1lbnQoXG4gICAgICAgICAgICAgICAgZWxlbSxcbiAgICAgICAgICAgICAgICBkaW1lbnNpb24sXG4gICAgICAgICAgICAgICAgZXh0cmEgfHwgKGlzQm9yZGVyQm94ID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiKSxcbiAgICAgICAgICAgICAgICB2YWx1ZUlzQm9yZGVyQm94LFxuICAgICAgICAgICAgICAgIHN0eWxlcyxcblxuICAgICAgICAgICAgICAgIC8vIFByb3ZpZGUgdGhlIGN1cnJlbnQgY29tcHV0ZWQgc2l6ZSB0byByZXF1ZXN0IHNjcm9sbCBndXR0ZXIgY2FsY3VsYXRpb24gKGdoLTM1ODkpXG4gICAgICAgICAgICAgICAgdmFsXG4gICAgICAgICAgICApXG4gICAgICAgICkgKyBcInB4XCI7XG4gICAgfVxuXG4gICAgalF1ZXJ5LmV4dGVuZCh7XG5cbiAgICAgICAgLy8gQWRkIGluIHN0eWxlIHByb3BlcnR5IGhvb2tzIGZvciBvdmVycmlkaW5nIHRoZSBkZWZhdWx0XG4gICAgICAgIC8vIGJlaGF2aW9yIG9mIGdldHRpbmcgYW5kIHNldHRpbmcgYSBzdHlsZSBwcm9wZXJ0eVxuICAgICAgICBjc3NIb29rczoge1xuICAgICAgICAgICAgb3BhY2l0eToge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKGVsZW0sIGNvbXB1dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wdXRlZCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBXZSBzaG91bGQgYWx3YXlzIGdldCBhIG51bWJlciBiYWNrIGZyb20gb3BhY2l0eVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJldCA9IGN1ckNTUyhlbGVtLCBcIm9wYWNpdHlcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0ID09PSBcIlwiID8gXCIxXCIgOiByZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRG9uJ3QgYXV0b21hdGljYWxseSBhZGQgXCJweFwiIHRvIHRoZXNlIHBvc3NpYmx5LXVuaXRsZXNzIHByb3BlcnRpZXNcbiAgICAgICAgY3NzTnVtYmVyOiB7XG4gICAgICAgICAgICBcImFuaW1hdGlvbkl0ZXJhdGlvbkNvdW50XCI6IHRydWUsXG4gICAgICAgICAgICBcImNvbHVtbkNvdW50XCI6IHRydWUsXG4gICAgICAgICAgICBcImZpbGxPcGFjaXR5XCI6IHRydWUsXG4gICAgICAgICAgICBcImZsZXhHcm93XCI6IHRydWUsXG4gICAgICAgICAgICBcImZsZXhTaHJpbmtcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiZm9udFdlaWdodFwiOiB0cnVlLFxuICAgICAgICAgICAgXCJsaW5lSGVpZ2h0XCI6IHRydWUsXG4gICAgICAgICAgICBcIm9wYWNpdHlcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3JkZXJcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwib3JwaGFuc1wiOiB0cnVlLFxuICAgICAgICAgICAgXCJ3aWRvd3NcIjogdHJ1ZSxcbiAgICAgICAgICAgIFwiekluZGV4XCI6IHRydWUsXG4gICAgICAgICAgICBcInpvb21cIjogdHJ1ZVxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEFkZCBpbiBwcm9wZXJ0aWVzIHdob3NlIG5hbWVzIHlvdSB3aXNoIHRvIGZpeCBiZWZvcmVcbiAgICAgICAgLy8gc2V0dGluZyBvciBnZXR0aW5nIHRoZSB2YWx1ZVxuICAgICAgICBjc3NQcm9wczoge30sXG5cbiAgICAgICAgLy8gR2V0IGFuZCBzZXQgdGhlIHN0eWxlIHByb3BlcnR5IG9uIGEgRE9NIE5vZGVcbiAgICAgICAgc3R5bGU6IGZ1bmN0aW9uIChlbGVtLCBuYW1lLCB2YWx1ZSwgZXh0cmEpIHtcblxuICAgICAgICAgICAgLy8gRG9uJ3Qgc2V0IHN0eWxlcyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG4gICAgICAgICAgICBpZiAoIWVsZW0gfHwgZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4IHx8ICFlbGVtLnN0eWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWVcbiAgICAgICAgICAgIHZhciByZXQsIHR5cGUsIGhvb2tzLFxuICAgICAgICAgICAgICAgIG9yaWdOYW1lID0gY2FtZWxDYXNlKG5hbWUpLFxuICAgICAgICAgICAgICAgIGlzQ3VzdG9tUHJvcCA9IHJjdXN0b21Qcm9wLnRlc3QobmFtZSksXG4gICAgICAgICAgICAgICAgc3R5bGUgPSBlbGVtLnN0eWxlO1xuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWUuIFdlIGRvbid0XG4gICAgICAgICAgICAvLyB3YW50IHRvIHF1ZXJ5IHRoZSB2YWx1ZSBpZiBpdCBpcyBhIENTUyBjdXN0b20gcHJvcGVydHlcbiAgICAgICAgICAgIC8vIHNpbmNlIHRoZXkgYXJlIHVzZXItZGVmaW5lZC5cbiAgICAgICAgICAgIGlmICghaXNDdXN0b21Qcm9wKSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IGZpbmFsUHJvcE5hbWUob3JpZ05hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBHZXRzIGhvb2sgZm9yIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLCB0aGVuIHVucHJlZml4ZWQgdmVyc2lvblxuICAgICAgICAgICAgaG9va3MgPSBqUXVlcnkuY3NzSG9va3NbbmFtZV0gfHwgalF1ZXJ5LmNzc0hvb2tzW29yaWdOYW1lXTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgd2UncmUgc2V0dGluZyBhIHZhbHVlXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IFwiKz1cIiBvciBcIi09XCIgdG8gcmVsYXRpdmUgbnVtYmVycyAoIzczNDUpXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIgJiYgKHJldCA9IHJjc3NOdW0uZXhlYyh2YWx1ZSkpICYmIHJldFsxXSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFkanVzdENTUyhlbGVtLCBuYW1lLCByZXQpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZpeGVzIGJ1ZyAjOTIzN1xuICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJudW1iZXJcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCBudWxsIGFuZCBOYU4gdmFsdWVzIGFyZW4ndCBzZXQgKCM3MTE2KVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgYSBudW1iZXIgd2FzIHBhc3NlZCBpbiwgYWRkIHRoZSB1bml0IChleGNlcHQgZm9yIGNlcnRhaW4gQ1NTIHByb3BlcnRpZXMpXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgKz0gcmV0ICYmIHJldFszXSB8fCAoalF1ZXJ5LmNzc051bWJlcltvcmlnTmFtZV0gPyBcIlwiIDogXCJweFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLSogcHJvcHMgYWZmZWN0IG9yaWdpbmFsIGNsb25lJ3MgdmFsdWVzXG4gICAgICAgICAgICAgICAgaWYgKCFzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSAmJiB2YWx1ZSA9PT0gXCJcIiAmJiBuYW1lLmluZGV4T2YoXCJiYWNrZ3JvdW5kXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlW25hbWVdID0gXCJpbmhlcml0XCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgYSBob29rIHdhcyBwcm92aWRlZCwgdXNlIHRoYXQgdmFsdWUsIG90aGVyd2lzZSBqdXN0IHNldCB0aGUgc3BlY2lmaWVkIHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKCFob29rcyB8fCAhKFwic2V0XCIgaW4gaG9va3MpIHx8XG4gICAgICAgICAgICAgICAgICAgICh2YWx1ZSA9IGhvb2tzLnNldChlbGVtLCB2YWx1ZSwgZXh0cmEpKSAhPT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ3VzdG9tUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc2V0UHJvcGVydHkobmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgIC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBub24tY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuICAgICAgICAgICAgICAgIGlmIChob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmXG4gICAgICAgICAgICAgICAgICAgIChyZXQgPSBob29rcy5nZXQoZWxlbSwgZmFsc2UsIGV4dHJhKSkgIT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGp1c3QgZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBzdHlsZSBvYmplY3RcbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGVbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3NzOiBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgZXh0cmEsIHN0eWxlcykge1xuICAgICAgICAgICAgdmFyIHZhbCwgbnVtLCBob29rcyxcbiAgICAgICAgICAgICAgICBvcmlnTmFtZSA9IGNhbWVsQ2FzZShuYW1lKSxcbiAgICAgICAgICAgICAgICBpc0N1c3RvbVByb3AgPSByY3VzdG9tUHJvcC50ZXN0KG5hbWUpO1xuXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWUuIFdlIGRvbid0XG4gICAgICAgICAgICAvLyB3YW50IHRvIG1vZGlmeSB0aGUgdmFsdWUgaWYgaXQgaXMgYSBDU1MgY3VzdG9tIHByb3BlcnR5XG4gICAgICAgICAgICAvLyBzaW5jZSB0aGV5IGFyZSB1c2VyLWRlZmluZWQuXG4gICAgICAgICAgICBpZiAoIWlzQ3VzdG9tUHJvcCkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBmaW5hbFByb3BOYW1lKG9yaWdOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVHJ5IHByZWZpeGVkIG5hbWUgZm9sbG93ZWQgYnkgdGhlIHVucHJlZml4ZWQgbmFtZVxuICAgICAgICAgICAgaG9va3MgPSBqUXVlcnkuY3NzSG9va3NbbmFtZV0gfHwgalF1ZXJ5LmNzc0hvb2tzW29yaWdOYW1lXTtcblxuICAgICAgICAgICAgLy8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcbiAgICAgICAgICAgIGlmIChob29rcyAmJiBcImdldFwiIGluIGhvb2tzKSB7XG4gICAgICAgICAgICAgICAgdmFsID0gaG9va3MuZ2V0KGVsZW0sIHRydWUsIGV4dHJhKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBpZiBhIHdheSB0byBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGV4aXN0cywgdXNlIHRoYXRcbiAgICAgICAgICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhbCA9IGN1ckNTUyhlbGVtLCBuYW1lLCBzdHlsZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IFwibm9ybWFsXCIgdG8gY29tcHV0ZWQgdmFsdWVcbiAgICAgICAgICAgIGlmICh2YWwgPT09IFwibm9ybWFsXCIgJiYgbmFtZSBpbiBjc3NOb3JtYWxUcmFuc2Zvcm0pIHtcbiAgICAgICAgICAgICAgICB2YWwgPSBjc3NOb3JtYWxUcmFuc2Zvcm1bbmFtZV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE1ha2UgbnVtZXJpYyBpZiBmb3JjZWQgb3IgYSBxdWFsaWZpZXIgd2FzIHByb3ZpZGVkIGFuZCB2YWwgbG9va3MgbnVtZXJpY1xuICAgICAgICAgICAgaWYgKGV4dHJhID09PSBcIlwiIHx8IGV4dHJhKSB7XG4gICAgICAgICAgICAgICAgbnVtID0gcGFyc2VGbG9hdCh2YWwpO1xuICAgICAgICAgICAgICAgIHJldHVybiBleHRyYSA9PT0gdHJ1ZSB8fCBpc0Zpbml0ZShudW0pID8gbnVtIHx8IDAgOiB2YWw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGpRdWVyeS5lYWNoKFtcImhlaWdodFwiLCBcIndpZHRoXCJdLCBmdW5jdGlvbiAoaSwgZGltZW5zaW9uKSB7XG4gICAgICAgIGpRdWVyeS5jc3NIb29rc1tkaW1lbnNpb25dID0ge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZWxlbSwgY29tcHV0ZWQsIGV4dHJhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXB1dGVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ2VydGFpbiBlbGVtZW50cyBjYW4gaGF2ZSBkaW1lbnNpb24gaW5mbyBpZiB3ZSBpbnZpc2libHkgc2hvdyB0aGVtXG4gICAgICAgICAgICAgICAgICAgIC8vIGJ1dCBpdCBtdXN0IGhhdmUgYSBjdXJyZW50IGRpc3BsYXkgc3R5bGUgdGhhdCB3b3VsZCBiZW5lZml0XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZGlzcGxheXN3YXAudGVzdChqUXVlcnkuY3NzKGVsZW0sIFwiZGlzcGxheVwiKSkgJiZcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0OiBTYWZhcmkgOCtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGFibGUgY29sdW1ucyBpbiBTYWZhcmkgaGF2ZSBub24temVybyBvZmZzZXRXaWR0aCAmIHplcm9cbiAgICAgICAgICAgICAgICAgICAgLy8gZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGggdW5sZXNzIGRpc3BsYXkgaXMgY2hhbmdlZC5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4gICAgICAgICAgICAgICAgICAgIC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGEgZGlzY29ubmVjdGVkIG5vZGVcbiAgICAgICAgICAgICAgICAgICAgLy8gaW4gSUUgdGhyb3dzIGFuIGVycm9yLlxuICAgICAgICAgICAgICAgICAgICAoIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggfHwgIWVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXAoZWxlbSwgY3NzU2hvdywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRXaWR0aE9ySGVpZ2h0KGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0V2lkdGhPckhlaWdodChlbGVtLCBkaW1lbnNpb24sIGV4dHJhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChlbGVtLCB2YWx1ZSwgZXh0cmEpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2hlcyxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGVzID0gZ2V0U3R5bGVzKGVsZW0pLFxuICAgICAgICAgICAgICAgICAgICBpc0JvcmRlckJveCA9IGpRdWVyeS5jc3MoZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcykgPT09IFwiYm9yZGVyLWJveFwiLFxuICAgICAgICAgICAgICAgICAgICBzdWJ0cmFjdCA9IGV4dHJhICYmIGJveE1vZGVsQWRqdXN0bWVudChcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHRyYSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQm9yZGVyQm94LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAvLyBBY2NvdW50IGZvciB1bnJlbGlhYmxlIGJvcmRlci1ib3ggZGltZW5zaW9ucyBieSBjb21wYXJpbmcgb2Zmc2V0KiB0byBjb21wdXRlZCBhbmRcbiAgICAgICAgICAgICAgICAvLyBmYWtpbmcgYSBjb250ZW50LWJveCB0byBnZXQgYm9yZGVyIGFuZCBwYWRkaW5nIChnaC0zNjk5KVxuICAgICAgICAgICAgICAgIGlmIChpc0JvcmRlckJveCAmJiBzdXBwb3J0LnNjcm9sbGJveFNpemUoKSA9PT0gc3R5bGVzLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnRyYWN0IC09IE1hdGguY2VpbChcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1bXCJvZmZzZXRcIiArIGRpbWVuc2lvblswXS50b1VwcGVyQ2FzZSgpICsgZGltZW5zaW9uLnNsaWNlKDEpXSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHN0eWxlc1tkaW1lbnNpb25dKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hNb2RlbEFkanVzdG1lbnQoZWxlbSwgZGltZW5zaW9uLCBcImJvcmRlclwiLCBmYWxzZSwgc3R5bGVzKSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAwLjVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRvIHBpeGVscyBpZiB2YWx1ZSBhZGp1c3RtZW50IGlzIG5lZWRlZFxuICAgICAgICAgICAgICAgIGlmIChzdWJ0cmFjdCAmJiAobWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyh2YWx1ZSkpICYmXG4gICAgICAgICAgICAgICAgICAgIChtYXRjaGVzWzNdIHx8IFwicHhcIikgIT09IFwicHhcIikge1xuXG4gICAgICAgICAgICAgICAgICAgIGVsZW0uc3R5bGVbZGltZW5zaW9uXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGpRdWVyeS5jc3MoZWxlbSwgZGltZW5zaW9uKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0UG9zaXRpdmVOdW1iZXIoZWxlbSwgdmFsdWUsIHN1YnRyYWN0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGpRdWVyeS5jc3NIb29rcy5tYXJnaW5MZWZ0ID0gYWRkR2V0SG9va0lmKHN1cHBvcnQucmVsaWFibGVNYXJnaW5MZWZ0LFxuICAgICAgICBmdW5jdGlvbiAoZWxlbSwgY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIGlmIChjb21wdXRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAocGFyc2VGbG9hdChjdXJDU1MoZWxlbSwgXCJtYXJnaW5MZWZ0XCIpKSB8fFxuICAgICAgICAgICAgICAgICAgICBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLVxuICAgICAgICAgICAgICAgICAgICBzd2FwKGVsZW0sIHttYXJnaW5MZWZ0OiAwfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICApICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcblxuLy8gVGhlc2UgaG9va3MgYXJlIHVzZWQgYnkgYW5pbWF0ZSB0byBleHBhbmQgcHJvcGVydGllc1xuICAgIGpRdWVyeS5lYWNoKHtcbiAgICAgICAgbWFyZ2luOiBcIlwiLFxuICAgICAgICBwYWRkaW5nOiBcIlwiLFxuICAgICAgICBib3JkZXI6IFwiV2lkdGhcIlxuICAgIH0sIGZ1bmN0aW9uIChwcmVmaXgsIHN1ZmZpeCkge1xuICAgICAgICBqUXVlcnkuY3NzSG9va3NbcHJlZml4ICsgc3VmZml4XSA9IHtcbiAgICAgICAgICAgIGV4cGFuZDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZCA9IHt9LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFzc3VtZXMgYSBzaW5nbGUgbnVtYmVyIGlmIG5vdCBhIHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBwYXJ0cyA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlLnNwbGl0KFwiIFwiKSA6IFt2YWx1ZV07XG5cbiAgICAgICAgICAgICAgICBmb3IgKDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBleHBhbmRlZFtwcmVmaXggKyBjc3NFeHBhbmRbaV0gKyBzdWZmaXhdID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzW2ldIHx8IHBhcnRzW2kgLSAyXSB8fCBwYXJ0c1swXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZXhwYW5kZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHByZWZpeCAhPT0gXCJtYXJnaW5cIikge1xuICAgICAgICAgICAgalF1ZXJ5LmNzc0hvb2tzW3ByZWZpeCArIHN1ZmZpeF0uc2V0ID0gc2V0UG9zaXRpdmVOdW1iZXI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICBjc3M6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVzLCBsZW4sXG4gICAgICAgICAgICAgICAgICAgIG1hcCA9IHt9LFxuICAgICAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlcyA9IGdldFN0eWxlcyhlbGVtKTtcbiAgICAgICAgICAgICAgICAgICAgbGVuID0gbmFtZS5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFwW25hbWVbaV1dID0galF1ZXJ5LmNzcyhlbGVtLCBuYW1lW2ldLCBmYWxzZSwgc3R5bGVzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgP1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkuc3R5bGUoZWxlbSwgbmFtZSwgdmFsdWUpIDpcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmNzcyhlbGVtLCBuYW1lKTtcbiAgICAgICAgICAgIH0sIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgZnVuY3Rpb24gVHdlZW4oZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUd2Vlbi5wcm90b3R5cGUuaW5pdChlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyk7XG4gICAgfVxuXG4gICAgalF1ZXJ5LlR3ZWVuID0gVHdlZW47XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUgPSB7XG4gICAgICAgIGNvbnN0cnVjdG9yOiBUd2VlbixcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nLCB1bml0KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW0gPSBlbGVtO1xuICAgICAgICAgICAgdGhpcy5wcm9wID0gcHJvcDtcbiAgICAgICAgICAgIHRoaXMuZWFzaW5nID0gZWFzaW5nIHx8IGpRdWVyeS5lYXNpbmcuX2RlZmF1bHQ7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgdGhpcy5zdGFydCA9IHRoaXMubm93ID0gdGhpcy5jdXIoKTtcbiAgICAgICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgICAgICAgICAgdGhpcy51bml0ID0gdW5pdCB8fCAoalF1ZXJ5LmNzc051bWJlcltwcm9wXSA/IFwiXCIgOiBcInB4XCIpO1xuICAgICAgICB9LFxuICAgICAgICBjdXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBob29rcyA9IFR3ZWVuLnByb3BIb29rc1t0aGlzLnByb3BdO1xuXG4gICAgICAgICAgICByZXR1cm4gaG9va3MgJiYgaG9va3MuZ2V0ID9cbiAgICAgICAgICAgICAgICBob29rcy5nZXQodGhpcykgOlxuICAgICAgICAgICAgICAgIFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5nZXQodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJ1bjogZnVuY3Rpb24gKHBlcmNlbnQpIHtcbiAgICAgICAgICAgIHZhciBlYXNlZCxcbiAgICAgICAgICAgICAgICBob29rcyA9IFR3ZWVuLnByb3BIb29rc1t0aGlzLnByb3BdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3MgPSBlYXNlZCA9IGpRdWVyeS5lYXNpbmdbdGhpcy5lYXNpbmddKFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKiBwZXJjZW50LCAwLCAxLCB0aGlzLm9wdGlvbnMuZHVyYXRpb25cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcyA9IGVhc2VkID0gcGVyY2VudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm93ID0gKHRoaXMuZW5kIC0gdGhpcy5zdGFydCkgKiBlYXNlZCArIHRoaXMuc3RhcnQ7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3RlcCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zdGVwLmNhbGwodGhpcy5lbGVtLCB0aGlzLm5vdywgdGhpcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChob29rcyAmJiBob29rcy5zZXQpIHtcbiAgICAgICAgICAgICAgICBob29rcy5zZXQodGhpcyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5zZXQodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBUd2Vlbi5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGUgPSBUd2Vlbi5wcm90b3R5cGU7XG5cbiAgICBUd2Vlbi5wcm9wSG9va3MgPSB7XG4gICAgICAgIF9kZWZhdWx0OiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICh0d2Vlbikge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBVc2UgYSBwcm9wZXJ0eSBvbiB0aGUgZWxlbWVudCBkaXJlY3RseSB3aGVuIGl0IGlzIG5vdCBhIERPTSBlbGVtZW50LFxuICAgICAgICAgICAgICAgIC8vIG9yIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc3R5bGUgcHJvcGVydHkgdGhhdCBleGlzdHMuXG4gICAgICAgICAgICAgICAgaWYgKHR3ZWVuLmVsZW0ubm9kZVR5cGUgIT09IDEgfHxcbiAgICAgICAgICAgICAgICAgICAgdHdlZW4uZWxlbVt0d2Vlbi5wcm9wXSAhPSBudWxsICYmIHR3ZWVuLmVsZW0uc3R5bGVbdHdlZW4ucHJvcF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHdlZW4uZWxlbVt0d2Vlbi5wcm9wXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBQYXNzaW5nIGFuIGVtcHR5IHN0cmluZyBhcyBhIDNyZCBwYXJhbWV0ZXIgdG8gLmNzcyB3aWxsIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgICAgICAgICAvLyBhdHRlbXB0IGEgcGFyc2VGbG9hdCBhbmQgZmFsbGJhY2sgdG8gYSBzdHJpbmcgaWYgdGhlIHBhcnNlIGZhaWxzLlxuICAgICAgICAgICAgICAgIC8vIFNpbXBsZSB2YWx1ZXMgc3VjaCBhcyBcIjEwcHhcIiBhcmUgcGFyc2VkIHRvIEZsb2F0O1xuICAgICAgICAgICAgICAgIC8vIGNvbXBsZXggdmFsdWVzIHN1Y2ggYXMgXCJyb3RhdGUoMXJhZClcIiBhcmUgcmV0dXJuZWQgYXMtaXMuXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0galF1ZXJ5LmNzcyh0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCBcIlwiKTtcblxuICAgICAgICAgICAgICAgIC8vIEVtcHR5IHN0cmluZ3MsIG51bGwsIHVuZGVmaW5lZCBhbmQgXCJhdXRvXCIgYXJlIGNvbnZlcnRlZCB0byAwLlxuICAgICAgICAgICAgICAgIHJldHVybiAhcmVzdWx0IHx8IHJlc3VsdCA9PT0gXCJhdXRvXCIgPyAwIDogcmVzdWx0O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHR3ZWVuKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBVc2Ugc3RlcCBob29rIGZvciBiYWNrIGNvbXBhdC5cbiAgICAgICAgICAgICAgICAvLyBVc2UgY3NzSG9vayBpZiBpdHMgdGhlcmUuXG4gICAgICAgICAgICAgICAgLy8gVXNlIC5zdHlsZSBpZiBhdmFpbGFibGUgYW5kIHVzZSBwbGFpbiBwcm9wZXJ0aWVzIHdoZXJlIGF2YWlsYWJsZS5cbiAgICAgICAgICAgICAgICBpZiAoalF1ZXJ5LmZ4LnN0ZXBbdHdlZW4ucHJvcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmZ4LnN0ZXBbdHdlZW4ucHJvcF0odHdlZW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHdlZW4uZWxlbS5ub2RlVHlwZSA9PT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAodHdlZW4uZWxlbS5zdHlsZVtqUXVlcnkuY3NzUHJvcHNbdHdlZW4ucHJvcF1dICE9IG51bGwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5jc3NIb29rc1t0d2Vlbi5wcm9wXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LnN0eWxlKHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIHR3ZWVuLm5vdyArIHR3ZWVuLnVuaXQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHR3ZWVuLmVsZW1bdHdlZW4ucHJvcF0gPSB0d2Vlbi5ub3c7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbi8vIFBhbmljIGJhc2VkIGFwcHJvYWNoIHRvIHNldHRpbmcgdGhpbmdzIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuICAgIFR3ZWVuLnByb3BIb29rcy5zY3JvbGxUb3AgPSBUd2Vlbi5wcm9wSG9va3Muc2Nyb2xsTGVmdCA9IHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodHdlZW4pIHtcbiAgICAgICAgICAgIGlmICh0d2Vlbi5lbGVtLm5vZGVUeXBlICYmIHR3ZWVuLmVsZW0ucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIHR3ZWVuLmVsZW1bdHdlZW4ucHJvcF0gPSB0d2Vlbi5ub3c7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgalF1ZXJ5LmVhc2luZyA9IHtcbiAgICAgICAgbGluZWFyOiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgcmV0dXJuIHA7XG4gICAgICAgIH0sXG4gICAgICAgIHN3aW5nOiBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgcmV0dXJuIDAuNSAtIE1hdGguY29zKHAgKiBNYXRoLlBJKSAvIDI7XG4gICAgICAgIH0sXG4gICAgICAgIF9kZWZhdWx0OiBcInN3aW5nXCJcbiAgICB9O1xuXG4gICAgalF1ZXJ5LmZ4ID0gVHdlZW4ucHJvdG90eXBlLmluaXQ7XG5cbi8vIEJhY2sgY29tcGF0IDwxLjggZXh0ZW5zaW9uIHBvaW50XG4gICAgalF1ZXJ5LmZ4LnN0ZXAgPSB7fTtcblxuXG4gICAgdmFyXG4gICAgICAgIGZ4Tm93LCBpblByb2dyZXNzLFxuICAgICAgICByZnh0eXBlcyA9IC9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxcbiAgICAgICAgcnJ1biA9IC9xdWV1ZUhvb2tzJC87XG5cbiAgICBmdW5jdGlvbiBzY2hlZHVsZSgpIHtcbiAgICAgICAgaWYgKGluUHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4gPT09IGZhbHNlICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNjaGVkdWxlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoc2NoZWR1bGUsIGpRdWVyeS5meC5pbnRlcnZhbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGpRdWVyeS5meC50aWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbi8vIEFuaW1hdGlvbnMgY3JlYXRlZCBzeW5jaHJvbm91c2x5IHdpbGwgcnVuIHN5bmNocm9ub3VzbHlcbiAgICBmdW5jdGlvbiBjcmVhdGVGeE5vdygpIHtcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZnhOb3cgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gKGZ4Tm93ID0gRGF0ZS5ub3coKSk7XG4gICAgfVxuXG4vLyBHZW5lcmF0ZSBwYXJhbWV0ZXJzIHRvIGNyZWF0ZSBhIHN0YW5kYXJkIGFuaW1hdGlvblxuICAgIGZ1bmN0aW9uIGdlbkZ4KHR5cGUsIGluY2x1ZGVXaWR0aCkge1xuICAgICAgICB2YXIgd2hpY2gsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIGF0dHJzID0ge2hlaWdodDogdHlwZX07XG5cbiAgICAgICAgLy8gSWYgd2UgaW5jbHVkZSB3aWR0aCwgc3RlcCB2YWx1ZSBpcyAxIHRvIGRvIGFsbCBjc3NFeHBhbmQgdmFsdWVzLFxuICAgICAgICAvLyBvdGhlcndpc2Ugc3RlcCB2YWx1ZSBpcyAyIHRvIHNraXAgb3ZlciBMZWZ0IGFuZCBSaWdodFxuICAgICAgICBpbmNsdWRlV2lkdGggPSBpbmNsdWRlV2lkdGggPyAxIDogMDtcbiAgICAgICAgZm9yICg7IGkgPCA0OyBpICs9IDIgLSBpbmNsdWRlV2lkdGgpIHtcbiAgICAgICAgICAgIHdoaWNoID0gY3NzRXhwYW5kW2ldO1xuICAgICAgICAgICAgYXR0cnNbXCJtYXJnaW5cIiArIHdoaWNoXSA9IGF0dHJzW1wicGFkZGluZ1wiICsgd2hpY2hdID0gdHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmNsdWRlV2lkdGgpIHtcbiAgICAgICAgICAgIGF0dHJzLm9wYWNpdHkgPSBhdHRycy53aWR0aCA9IHR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXR0cnM7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlVHdlZW4odmFsdWUsIHByb3AsIGFuaW1hdGlvbikge1xuICAgICAgICB2YXIgdHdlZW4sXG4gICAgICAgICAgICBjb2xsZWN0aW9uID0gKEFuaW1hdGlvbi50d2VlbmVyc1twcm9wXSB8fCBbXSkuY29uY2F0KEFuaW1hdGlvbi50d2VlbmVyc1tcIipcIl0pLFxuICAgICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG4gICAgICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKCh0d2VlbiA9IGNvbGxlY3Rpb25baW5kZXhdLmNhbGwoYW5pbWF0aW9uLCBwcm9wLCB2YWx1ZSkpKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBwcm9wZXJ0eVxuICAgICAgICAgICAgICAgIHJldHVybiB0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRlZmF1bHRQcmVmaWx0ZXIoZWxlbSwgcHJvcHMsIG9wdHMpIHtcbiAgICAgICAgdmFyIHByb3AsIHZhbHVlLCB0b2dnbGUsIGhvb2tzLCBvbGRmaXJlLCBwcm9wVHdlZW4sIHJlc3RvcmVEaXNwbGF5LCBkaXNwbGF5LFxuICAgICAgICAgICAgaXNCb3ggPSBcIndpZHRoXCIgaW4gcHJvcHMgfHwgXCJoZWlnaHRcIiBpbiBwcm9wcyxcbiAgICAgICAgICAgIGFuaW0gPSB0aGlzLFxuICAgICAgICAgICAgb3JpZyA9IHt9LFxuICAgICAgICAgICAgc3R5bGUgPSBlbGVtLnN0eWxlLFxuICAgICAgICAgICAgaGlkZGVuID0gZWxlbS5ub2RlVHlwZSAmJiBpc0hpZGRlbldpdGhpblRyZWUoZWxlbSksXG4gICAgICAgICAgICBkYXRhU2hvdyA9IGRhdGFQcml2LmdldChlbGVtLCBcImZ4c2hvd1wiKTtcblxuICAgICAgICAvLyBRdWV1ZS1za2lwcGluZyBhbmltYXRpb25zIGhpamFjayB0aGUgZnggaG9va3NcbiAgICAgICAgaWYgKCFvcHRzLnF1ZXVlKSB7XG4gICAgICAgICAgICBob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyhlbGVtLCBcImZ4XCIpO1xuICAgICAgICAgICAgaWYgKGhvb2tzLnVucXVldWVkID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBob29rcy51bnF1ZXVlZCA9IDA7XG4gICAgICAgICAgICAgICAgb2xkZmlyZSA9IGhvb2tzLmVtcHR5LmZpcmU7XG4gICAgICAgICAgICAgICAgaG9va3MuZW1wdHkuZmlyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFob29rcy51bnF1ZXVlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2xkZmlyZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhvb2tzLnVucXVldWVkKys7XG5cbiAgICAgICAgICAgIGFuaW0uYWx3YXlzKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIC8vIEVuc3VyZSB0aGUgY29tcGxldGUgaGFuZGxlciBpcyBjYWxsZWQgYmVmb3JlIHRoaXMgY29tcGxldGVzXG4gICAgICAgICAgICAgICAgYW5pbS5hbHdheXMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBob29rcy51bnF1ZXVlZC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWpRdWVyeS5xdWV1ZShlbGVtLCBcImZ4XCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaG9va3MuZW1wdHkuZmlyZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIERldGVjdCBzaG93L2hpZGUgYW5pbWF0aW9uc1xuICAgICAgICBmb3IgKHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcHJvcHNbcHJvcF07XG4gICAgICAgICAgICBpZiAocmZ4dHlwZXMudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgdG9nZ2xlID0gdG9nZ2xlIHx8IHZhbHVlID09PSBcInRvZ2dsZVwiO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gKGhpZGRlbiA/IFwiaGlkZVwiIDogXCJzaG93XCIpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJldGVuZCB0byBiZSBoaWRkZW4gaWYgdGhpcyBpcyBhIFwic2hvd1wiIGFuZFxuICAgICAgICAgICAgICAgICAgICAvLyB0aGVyZSBpcyBzdGlsbCBkYXRhIGZyb20gYSBzdG9wcGVkIHNob3cvaGlkZVxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IFwic2hvd1wiICYmIGRhdGFTaG93ICYmIGRhdGFTaG93W3Byb3BdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbiA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBhbGwgb3RoZXIgbm8tb3Agc2hvdy9oaWRlIGRhdGFcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG9yaWdbcHJvcF0gPSBkYXRhU2hvdyAmJiBkYXRhU2hvd1twcm9wXSB8fCBqUXVlcnkuc3R5bGUoZWxlbSwgcHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCYWlsIG91dCBpZiB0aGlzIGlzIGEgbm8tb3AgbGlrZSAuaGlkZSgpLmhpZGUoKVxuICAgICAgICBwcm9wVHdlZW4gPSAhalF1ZXJ5LmlzRW1wdHlPYmplY3QocHJvcHMpO1xuICAgICAgICBpZiAoIXByb3BUd2VlbiAmJiBqUXVlcnkuaXNFbXB0eU9iamVjdChvcmlnKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVzdHJpY3QgXCJvdmVyZmxvd1wiIGFuZCBcImRpc3BsYXlcIiBzdHlsZXMgZHVyaW5nIGJveCBhbmltYXRpb25zXG4gICAgICAgIGlmIChpc0JveCAmJiBlbGVtLm5vZGVUeXBlID09PSAxKSB7XG5cbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExLCBFZGdlIDEyIC0gMTVcbiAgICAgICAgICAgIC8vIFJlY29yZCBhbGwgMyBvdmVyZmxvdyBhdHRyaWJ1dGVzIGJlY2F1c2UgSUUgZG9lcyBub3QgaW5mZXIgdGhlIHNob3J0aGFuZFxuICAgICAgICAgICAgLy8gZnJvbSBpZGVudGljYWxseS12YWx1ZWQgb3ZlcmZsb3dYIGFuZCBvdmVyZmxvd1kgYW5kIEVkZ2UganVzdCBtaXJyb3JzXG4gICAgICAgICAgICAvLyB0aGUgb3ZlcmZsb3dYIHZhbHVlIHRoZXJlLlxuICAgICAgICAgICAgb3B0cy5vdmVyZmxvdyA9IFtzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYLCBzdHlsZS5vdmVyZmxvd1ldO1xuXG4gICAgICAgICAgICAvLyBJZGVudGlmeSBhIGRpc3BsYXkgdHlwZSwgcHJlZmVycmluZyBvbGQgc2hvdy9oaWRlIGRhdGEgb3ZlciB0aGUgQ1NTIGNhc2NhZGVcbiAgICAgICAgICAgIHJlc3RvcmVEaXNwbGF5ID0gZGF0YVNob3cgJiYgZGF0YVNob3cuZGlzcGxheTtcbiAgICAgICAgICAgIGlmIChyZXN0b3JlRGlzcGxheSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzdG9yZURpc3BsYXkgPSBkYXRhUHJpdi5nZXQoZWxlbSwgXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzcGxheSA9IGpRdWVyeS5jc3MoZWxlbSwgXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgaWYgKGRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3RvcmVEaXNwbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgPSByZXN0b3JlRGlzcGxheTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCBub25lbXB0eSB2YWx1ZShzKSBieSB0ZW1wb3JhcmlseSBmb3JjaW5nIHZpc2liaWxpdHlcbiAgICAgICAgICAgICAgICAgICAgc2hvd0hpZGUoW2VsZW1dLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdG9yZURpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXkgfHwgcmVzdG9yZURpc3BsYXk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXkgPSBqUXVlcnkuY3NzKGVsZW0sIFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0hpZGUoW2VsZW1dKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFuaW1hdGUgaW5saW5lIGVsZW1lbnRzIGFzIGlubGluZS1ibG9ja1xuICAgICAgICAgICAgaWYgKGRpc3BsYXkgPT09IFwiaW5saW5lXCIgfHwgZGlzcGxheSA9PT0gXCJpbmxpbmUtYmxvY2tcIiAmJiByZXN0b3JlRGlzcGxheSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5jc3MoZWxlbSwgXCJmbG9hdFwiKSA9PT0gXCJub25lXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBkaXNwbGF5IHZhbHVlIGF0IHRoZSBlbmQgb2YgcHVyZSBzaG93L2hpZGUgYW5pbWF0aW9uc1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXByb3BUd2Vlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5kaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN0b3JlRGlzcGxheSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheSA9IHN0eWxlLmRpc3BsYXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdG9yZURpc3BsYXkgPSBkaXNwbGF5ID09PSBcIm5vbmVcIiA/IFwiXCIgOiBkaXNwbGF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRzLm92ZXJmbG93KSB7XG4gICAgICAgICAgICBzdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgICAgICAgICBhbmltLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUub3ZlcmZsb3cgPSBvcHRzLm92ZXJmbG93WzBdO1xuICAgICAgICAgICAgICAgIHN0eWxlLm92ZXJmbG93WCA9IG9wdHMub3ZlcmZsb3dbMV07XG4gICAgICAgICAgICAgICAgc3R5bGUub3ZlcmZsb3dZID0gb3B0cy5vdmVyZmxvd1syXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW1wbGVtZW50IHNob3cvaGlkZSBhbmltYXRpb25zXG4gICAgICAgIHByb3BUd2VlbiA9IGZhbHNlO1xuICAgICAgICBmb3IgKHByb3AgaW4gb3JpZykge1xuXG4gICAgICAgICAgICAvLyBHZW5lcmFsIHNob3cvaGlkZSBzZXR1cCBmb3IgdGhpcyBlbGVtZW50IGFuaW1hdGlvblxuICAgICAgICAgICAgaWYgKCFwcm9wVHdlZW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFwiaGlkZGVuXCIgaW4gZGF0YVNob3cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGRlbiA9IGRhdGFTaG93LmhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGFTaG93ID0gZGF0YVByaXYuYWNjZXNzKGVsZW0sIFwiZnhzaG93XCIsIHtkaXNwbGF5OiByZXN0b3JlRGlzcGxheX0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGhpZGRlbi92aXNpYmxlIGZvciB0b2dnbGUgc28gYC5zdG9wKCkudG9nZ2xlKClgIFwicmV2ZXJzZXNcIlxuICAgICAgICAgICAgICAgIGlmICh0b2dnbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNob3cuaGlkZGVuID0gIWhpZGRlbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTaG93IGVsZW1lbnRzIGJlZm9yZSBhbmltYXRpbmcgdGhlbVxuICAgICAgICAgICAgICAgIGlmIChoaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0hpZGUoW2VsZW1dLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuICAgICAgICAgICAgICAgIGFuaW0uZG9uZShmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZmluYWwgc3RlcCBvZiBhIFwiaGlkZVwiIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBoaWRpbmcgdGhlIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoaWRkZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dIaWRlKFtlbGVtXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGF0YVByaXYucmVtb3ZlKGVsZW0sIFwiZnhzaG93XCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHByb3AgaW4gb3JpZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LnN0eWxlKGVsZW0sIHByb3AsIG9yaWdbcHJvcF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFBlci1wcm9wZXJ0eSBzZXR1cFxuICAgICAgICAgICAgcHJvcFR3ZWVuID0gY3JlYXRlVHdlZW4oaGlkZGVuID8gZGF0YVNob3dbcHJvcF0gOiAwLCBwcm9wLCBhbmltKTtcbiAgICAgICAgICAgIGlmICghKHByb3AgaW4gZGF0YVNob3cpKSB7XG4gICAgICAgICAgICAgICAgZGF0YVNob3dbcHJvcF0gPSBwcm9wVHdlZW4uc3RhcnQ7XG4gICAgICAgICAgICAgICAgaWYgKGhpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICBwcm9wVHdlZW4uZW5kID0gcHJvcFR3ZWVuLnN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICBwcm9wVHdlZW4uc3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb3BGaWx0ZXIocHJvcHMsIHNwZWNpYWxFYXNpbmcpIHtcbiAgICAgICAgdmFyIGluZGV4LCBuYW1lLCBlYXNpbmcsIHZhbHVlLCBob29rcztcblxuICAgICAgICAvLyBjYW1lbENhc2UsIHNwZWNpYWxFYXNpbmcgYW5kIGV4cGFuZCBjc3NIb29rIHBhc3NcbiAgICAgICAgZm9yIChpbmRleCBpbiBwcm9wcykge1xuICAgICAgICAgICAgbmFtZSA9IGNhbWVsQ2FzZShpbmRleCk7XG4gICAgICAgICAgICBlYXNpbmcgPSBzcGVjaWFsRWFzaW5nW25hbWVdO1xuICAgICAgICAgICAgdmFsdWUgPSBwcm9wc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBlYXNpbmcgPSB2YWx1ZVsxXTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHByb3BzW2luZGV4XSA9IHZhbHVlWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICBwcm9wc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9wc1tpbmRleF07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzW25hbWVdO1xuICAgICAgICAgICAgaWYgKGhvb2tzICYmIFwiZXhwYW5kXCIgaW4gaG9va3MpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGhvb2tzLmV4cGFuZCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHByb3BzW25hbWVdO1xuXG4gICAgICAgICAgICAgICAgLy8gTm90IHF1aXRlICQuZXh0ZW5kLCB0aGlzIHdvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBrZXlzLlxuICAgICAgICAgICAgICAgIC8vIFJldXNpbmcgJ2luZGV4JyBiZWNhdXNlIHdlIGhhdmUgdGhlIGNvcnJlY3QgXCJuYW1lXCJcbiAgICAgICAgICAgICAgICBmb3IgKGluZGV4IGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghKGluZGV4IGluIHByb3BzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHNbaW5kZXhdID0gdmFsdWVbaW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BlY2lhbEVhc2luZ1tpbmRleF0gPSBlYXNpbmc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNwZWNpYWxFYXNpbmdbbmFtZV0gPSBlYXNpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBBbmltYXRpb24oZWxlbSwgcHJvcGVydGllcywgb3B0aW9ucykge1xuICAgICAgICB2YXIgcmVzdWx0LFxuICAgICAgICAgICAgc3RvcHBlZCxcbiAgICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICAgIGxlbmd0aCA9IEFuaW1hdGlvbi5wcmVmaWx0ZXJzLmxlbmd0aCxcbiAgICAgICAgICAgIGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIC8vIERvbid0IG1hdGNoIGVsZW0gaW4gdGhlIDphbmltYXRlZCBzZWxlY3RvclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aWNrLmVsZW07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0b3BwZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBmeE5vdyB8fCBjcmVhdGVGeE5vdygpLFxuICAgICAgICAgICAgICAgICAgICByZW1haW5pbmcgPSBNYXRoLm1heCgwLCBhbmltYXRpb24uc3RhcnRUaW1lICsgYW5pbWF0aW9uLmR1cmF0aW9uIC0gY3VycmVudFRpbWUpLFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgMi4zIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgLy8gQXJjaGFpYyBjcmFzaCBidWcgd29uJ3QgYWxsb3cgdXMgdG8gdXNlIGAxIC0gKCAwLjUgfHwgMCApYCAoIzEyNDk3KVxuICAgICAgICAgICAgICAgICAgICB0ZW1wID0gcmVtYWluaW5nIC8gYW5pbWF0aW9uLmR1cmF0aW9uIHx8IDAsXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnQgPSAxIC0gdGVtcCxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGggPSBhbmltYXRpb24udHdlZW5zLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24udHdlZW5zW2luZGV4XS5ydW4ocGVyY2VudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5V2l0aChlbGVtLCBbYW5pbWF0aW9uLCBwZXJjZW50LCByZW1haW5pbmddKTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlJ3MgbW9yZSB0byBkbywgeWllbGRcbiAgICAgICAgICAgICAgICBpZiAocGVyY2VudCA8IDEgJiYgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW1haW5pbmc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhpcyB3YXMgYW4gZW1wdHkgYW5pbWF0aW9uLCBzeW50aGVzaXplIGEgZmluYWwgcHJvZ3Jlc3Mgbm90aWZpY2F0aW9uXG4gICAgICAgICAgICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5V2l0aChlbGVtLCBbYW5pbWF0aW9uLCAxLCAwXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgYW5pbWF0aW9uIGFuZCByZXBvcnQgaXRzIGNvbmNsdXNpb25cbiAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlV2l0aChlbGVtLCBbYW5pbWF0aW9uXSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2Uoe1xuICAgICAgICAgICAgICAgIGVsZW06IGVsZW0sXG4gICAgICAgICAgICAgICAgcHJvcHM6IGpRdWVyeS5leHRlbmQoe30sIHByb3BlcnRpZXMpLFxuICAgICAgICAgICAgICAgIG9wdHM6IGpRdWVyeS5leHRlbmQodHJ1ZSwge1xuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsRWFzaW5nOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgZWFzaW5nOiBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0XG4gICAgICAgICAgICAgICAgfSwgb3B0aW9ucyksXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxQcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuICAgICAgICAgICAgICAgIG9yaWdpbmFsT3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgdHdlZW5zOiBbXSxcbiAgICAgICAgICAgICAgICBjcmVhdGVUd2VlbjogZnVuY3Rpb24gKHByb3AsIGVuZCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHdlZW4gPSBqUXVlcnkuVHdlZW4oZWxlbSwgYW5pbWF0aW9uLm9wdHMsIHByb3AsIGVuZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmdbcHJvcF0gfHwgYW5pbWF0aW9uLm9wdHMuZWFzaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLnR3ZWVucy5wdXNoKHR3ZWVuKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHR3ZWVuO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3RvcDogZnVuY3Rpb24gKGdvdG9FbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gMCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgd2UgYXJlIGdvaW5nIHRvIHRoZSBlbmQsIHdlIHdhbnQgdG8gcnVuIGFsbCB0aGUgdHdlZW5zXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvdGhlcndpc2Ugd2Ugc2tpcCB0aGlzIHBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aCA9IGdvdG9FbmQgPyBhbmltYXRpb24udHdlZW5zLmxlbmd0aCA6IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdG9wcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24udHdlZW5zW2luZGV4XS5ydW4oMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNvbHZlIHdoZW4gd2UgcGxheWVkIHRoZSBsYXN0IGZyYW1lOyBvdGhlcndpc2UsIHJlamVjdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZ290b0VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQubm90aWZ5V2l0aChlbGVtLCBbYW5pbWF0aW9uLCAxLCAwXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlV2l0aChlbGVtLCBbYW5pbWF0aW9uLCBnb3RvRW5kXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3RXaXRoKGVsZW0sIFthbmltYXRpb24sIGdvdG9FbmRdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHByb3BzID0gYW5pbWF0aW9uLnByb3BzO1xuXG4gICAgICAgIHByb3BGaWx0ZXIocHJvcHMsIGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmcpO1xuXG4gICAgICAgIGZvciAoOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gQW5pbWF0aW9uLnByZWZpbHRlcnNbaW5kZXhdLmNhbGwoYW5pbWF0aW9uLCBlbGVtLCBwcm9wcywgYW5pbWF0aW9uLm9wdHMpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHJlc3VsdC5zdG9wKSkge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkuX3F1ZXVlSG9va3MoYW5pbWF0aW9uLmVsZW0sIGFuaW1hdGlvbi5vcHRzLnF1ZXVlKS5zdG9wID1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdG9wLmJpbmQocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGpRdWVyeS5tYXAocHJvcHMsIGNyZWF0ZVR3ZWVuLCBhbmltYXRpb24pO1xuXG4gICAgICAgIGlmIChpc0Z1bmN0aW9uKGFuaW1hdGlvbi5vcHRzLnN0YXJ0KSkge1xuICAgICAgICAgICAgYW5pbWF0aW9uLm9wdHMuc3RhcnQuY2FsbChlbGVtLCBhbmltYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQXR0YWNoIGNhbGxiYWNrcyBmcm9tIG9wdGlvbnNcbiAgICAgICAgYW5pbWF0aW9uXG4gICAgICAgICAgICAucHJvZ3Jlc3MoYW5pbWF0aW9uLm9wdHMucHJvZ3Jlc3MpXG4gICAgICAgICAgICAuZG9uZShhbmltYXRpb24ub3B0cy5kb25lLCBhbmltYXRpb24ub3B0cy5jb21wbGV0ZSlcbiAgICAgICAgICAgIC5mYWlsKGFuaW1hdGlvbi5vcHRzLmZhaWwpXG4gICAgICAgICAgICAuYWx3YXlzKGFuaW1hdGlvbi5vcHRzLmFsd2F5cyk7XG5cbiAgICAgICAgalF1ZXJ5LmZ4LnRpbWVyKFxuICAgICAgICAgICAgalF1ZXJ5LmV4dGVuZCh0aWNrLCB7XG4gICAgICAgICAgICAgICAgZWxlbTogZWxlbSxcbiAgICAgICAgICAgICAgICBhbmltOiBhbmltYXRpb24sXG4gICAgICAgICAgICAgICAgcXVldWU6IGFuaW1hdGlvbi5vcHRzLnF1ZXVlXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBhbmltYXRpb247XG4gICAgfVxuXG4gICAgalF1ZXJ5LkFuaW1hdGlvbiA9IGpRdWVyeS5leHRlbmQoQW5pbWF0aW9uLCB7XG5cbiAgICAgICAgdHdlZW5lcnM6IHtcbiAgICAgICAgICAgIFwiKlwiOiBbZnVuY3Rpb24gKHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHR3ZWVuID0gdGhpcy5jcmVhdGVUd2Vlbihwcm9wLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYWRqdXN0Q1NTKHR3ZWVuLmVsZW0sIHByb3AsIHJjc3NOdW0uZXhlYyh2YWx1ZSksIHR3ZWVuKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHdlZW47XG4gICAgICAgICAgICB9XVxuICAgICAgICB9LFxuXG4gICAgICAgIHR3ZWVuZXI6IGZ1bmN0aW9uIChwcm9wcywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKHByb3BzKSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gcHJvcHM7XG4gICAgICAgICAgICAgICAgcHJvcHMgPSBbXCIqXCJdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wcyA9IHByb3BzLm1hdGNoKHJub3RodG1sd2hpdGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcHJvcCxcbiAgICAgICAgICAgICAgICBpbmRleCA9IDAsXG4gICAgICAgICAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG4gICAgICAgICAgICBmb3IgKDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBwcm9wID0gcHJvcHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIEFuaW1hdGlvbi50d2VlbmVyc1twcm9wXSA9IEFuaW1hdGlvbi50d2VlbmVyc1twcm9wXSB8fCBbXTtcbiAgICAgICAgICAgICAgICBBbmltYXRpb24udHdlZW5lcnNbcHJvcF0udW5zaGlmdChjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJlZmlsdGVyczogW2RlZmF1bHRQcmVmaWx0ZXJdLFxuXG4gICAgICAgIHByZWZpbHRlcjogZnVuY3Rpb24gKGNhbGxiYWNrLCBwcmVwZW5kKSB7XG4gICAgICAgICAgICBpZiAocHJlcGVuZCkge1xuICAgICAgICAgICAgICAgIEFuaW1hdGlvbi5wcmVmaWx0ZXJzLnVuc2hpZnQoY2FsbGJhY2spO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBBbmltYXRpb24ucHJlZmlsdGVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgalF1ZXJ5LnNwZWVkID0gZnVuY3Rpb24gKHNwZWVkLCBlYXNpbmcsIGZuKSB7XG4gICAgICAgIHZhciBvcHQgPSBzcGVlZCAmJiB0eXBlb2Ygc3BlZWQgPT09IFwib2JqZWN0XCIgPyBqUXVlcnkuZXh0ZW5kKHt9LCBzcGVlZCkgOiB7XG4gICAgICAgICAgICBjb21wbGV0ZTogZm4gfHwgIWZuICYmIGVhc2luZyB8fFxuICAgICAgICAgICAgICAgIGlzRnVuY3Rpb24oc3BlZWQpICYmIHNwZWVkLFxuICAgICAgICAgICAgZHVyYXRpb246IHNwZWVkLFxuICAgICAgICAgICAgZWFzaW5nOiBmbiAmJiBlYXNpbmcgfHwgZWFzaW5nICYmICFpc0Z1bmN0aW9uKGVhc2luZykgJiYgZWFzaW5nXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gR28gdG8gdGhlIGVuZCBzdGF0ZSBpZiBmeCBhcmUgb2ZmXG4gICAgICAgIGlmIChqUXVlcnkuZngub2ZmKSB7XG4gICAgICAgICAgICBvcHQuZHVyYXRpb24gPSAwO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9wdC5kdXJhdGlvbiAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIGlmIChvcHQuZHVyYXRpb24gaW4galF1ZXJ5LmZ4LnNwZWVkcykge1xuICAgICAgICAgICAgICAgICAgICBvcHQuZHVyYXRpb24gPSBqUXVlcnkuZnguc3BlZWRzW29wdC5kdXJhdGlvbl07XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBvcHQuZHVyYXRpb24gPSBqUXVlcnkuZnguc3BlZWRzLl9kZWZhdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE5vcm1hbGl6ZSBvcHQucXVldWUgLSB0cnVlL3VuZGVmaW5lZC9udWxsIC0+IFwiZnhcIlxuICAgICAgICBpZiAob3B0LnF1ZXVlID09IG51bGwgfHwgb3B0LnF1ZXVlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBvcHQucXVldWUgPSBcImZ4XCI7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBRdWV1ZWluZ1xuICAgICAgICBvcHQub2xkID0gb3B0LmNvbXBsZXRlO1xuXG4gICAgICAgIG9wdC5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKG9wdC5vbGQpKSB7XG4gICAgICAgICAgICAgICAgb3B0Lm9sZC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob3B0LnF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5LmRlcXVldWUodGhpcywgb3B0LnF1ZXVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gb3B0O1xuICAgIH07XG5cbiAgICBqUXVlcnkuZm4uZXh0ZW5kKHtcbiAgICAgICAgZmFkZVRvOiBmdW5jdGlvbiAoc3BlZWQsIHRvLCBlYXNpbmcsIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgICAgIC8vIFNob3cgYW55IGhpZGRlbiBlbGVtZW50cyBhZnRlciBzZXR0aW5nIG9wYWNpdHkgdG8gMFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyKGlzSGlkZGVuV2l0aGluVHJlZSkuY3NzKFwib3BhY2l0eVwiLCAwKS5zaG93KClcblxuICAgICAgICAgICAgLy8gQW5pbWF0ZSB0byB0aGUgdmFsdWUgc3BlY2lmaWVkXG4gICAgICAgICAgICAgICAgLmVuZCgpLmFuaW1hdGUoe29wYWNpdHk6IHRvfSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICB9LFxuICAgICAgICBhbmltYXRlOiBmdW5jdGlvbiAocHJvcCwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBlbXB0eSA9IGpRdWVyeS5pc0VtcHR5T2JqZWN0KHByb3ApLFxuICAgICAgICAgICAgICAgIG9wdGFsbCA9IGpRdWVyeS5zcGVlZChzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayksXG4gICAgICAgICAgICAgICAgZG9BbmltYXRpb24gPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3BlcmF0ZSBvbiBhIGNvcHkgb2YgcHJvcCBzbyBwZXItcHJvcGVydHkgZWFzaW5nIHdvbid0IGJlIGxvc3RcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuaW0gPSBBbmltYXRpb24odGhpcywgalF1ZXJ5LmV4dGVuZCh7fSwgcHJvcCksIG9wdGFsbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRW1wdHkgYW5pbWF0aW9ucywgb3IgZmluaXNoaW5nIHJlc29sdmVzIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbXB0eSB8fCBkYXRhUHJpdi5nZXQodGhpcywgXCJmaW5pc2hcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW0uc3RvcCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb0FuaW1hdGlvbi5maW5pc2ggPSBkb0FuaW1hdGlvbjtcblxuICAgICAgICAgICAgcmV0dXJuIGVtcHR5IHx8IG9wdGFsbC5xdWV1ZSA9PT0gZmFsc2UgP1xuICAgICAgICAgICAgICAgIHRoaXMuZWFjaChkb0FuaW1hdGlvbikgOlxuICAgICAgICAgICAgICAgIHRoaXMucXVldWUob3B0YWxsLnF1ZXVlLCBkb0FuaW1hdGlvbik7XG4gICAgICAgIH0sXG4gICAgICAgIHN0b3A6IGZ1bmN0aW9uICh0eXBlLCBjbGVhclF1ZXVlLCBnb3RvRW5kKSB7XG4gICAgICAgICAgICB2YXIgc3RvcFF1ZXVlID0gZnVuY3Rpb24gKGhvb2tzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0b3AgPSBob29rcy5zdG9wO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBob29rcy5zdG9wO1xuICAgICAgICAgICAgICAgIHN0b3AoZ290b0VuZCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBnb3RvRW5kID0gY2xlYXJRdWV1ZTtcbiAgICAgICAgICAgICAgICBjbGVhclF1ZXVlID0gdHlwZTtcbiAgICAgICAgICAgICAgICB0eXBlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNsZWFyUXVldWUgJiYgdHlwZSAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXVlKHR5cGUgfHwgXCJmeFwiLCBbXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBkZXF1ZXVlID0gdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB0eXBlICE9IG51bGwgJiYgdHlwZSArIFwicXVldWVIb29rc1wiLFxuICAgICAgICAgICAgICAgICAgICB0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gZGF0YVByaXYuZ2V0KHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2luZGV4XSAmJiBkYXRhW2luZGV4XS5zdG9wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdG9wUXVldWUoZGF0YVtpbmRleF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpbmRleCBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpbmRleF0gJiYgZGF0YVtpbmRleF0uc3RvcCAmJiBycnVuLnRlc3QoaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcFF1ZXVlKGRhdGFbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAoaW5kZXggPSB0aW1lcnMubGVuZ3RoOyBpbmRleC0tOykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGltZXJzW2luZGV4XS5lbGVtID09PSB0aGlzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAodHlwZSA9PSBudWxsIHx8IHRpbWVyc1tpbmRleF0ucXVldWUgPT09IHR5cGUpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVyc1tpbmRleF0uYW5pbS5zdG9wKGdvdG9FbmQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVxdWV1ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGltZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTdGFydCB0aGUgbmV4dCBpbiB0aGUgcXVldWUgaWYgdGhlIGxhc3Qgc3RlcCB3YXNuJ3QgZm9yY2VkLlxuICAgICAgICAgICAgICAgIC8vIFRpbWVycyBjdXJyZW50bHkgd2lsbCBjYWxsIHRoZWlyIGNvbXBsZXRlIGNhbGxiYWNrcywgd2hpY2hcbiAgICAgICAgICAgICAgICAvLyB3aWxsIGRlcXVldWUgYnV0IG9ubHkgaWYgdGhleSB3ZXJlIGdvdG9FbmQuXG4gICAgICAgICAgICAgICAgaWYgKGRlcXVldWUgfHwgIWdvdG9FbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmRlcXVldWUodGhpcywgdHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZpbmlzaDogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IGRhdGFQcml2LmdldCh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgcXVldWUgPSBkYXRhW3R5cGUgKyBcInF1ZXVlXCJdLFxuICAgICAgICAgICAgICAgICAgICBob29rcyA9IGRhdGFbdHlwZSArIFwicXVldWVIb29rc1wiXSxcbiAgICAgICAgICAgICAgICAgICAgdGltZXJzID0galF1ZXJ5LnRpbWVycyxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoID0gcXVldWUgPyBxdWV1ZS5sZW5ndGggOiAwO1xuXG4gICAgICAgICAgICAgICAgLy8gRW5hYmxlIGZpbmlzaGluZyBmbGFnIG9uIHByaXZhdGUgZGF0YVxuICAgICAgICAgICAgICAgIGRhdGEuZmluaXNoID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIEVtcHR5IHRoZSBxdWV1ZSBmaXJzdFxuICAgICAgICAgICAgICAgIGpRdWVyeS5xdWV1ZSh0aGlzLCB0eXBlLCBbXSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaG9va3MgJiYgaG9va3Muc3RvcCkge1xuICAgICAgICAgICAgICAgICAgICBob29rcy5zdG9wLmNhbGwodGhpcywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTG9vayBmb3IgYW55IGFjdGl2ZSBhbmltYXRpb25zLCBhbmQgZmluaXNoIHRoZW1cbiAgICAgICAgICAgICAgICBmb3IgKGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbWVyc1tpbmRleF0uZWxlbSA9PT0gdGhpcyAmJiB0aW1lcnNbaW5kZXhdLnF1ZXVlID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lcnNbaW5kZXhdLmFuaW0uc3RvcCh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gTG9vayBmb3IgYW55IGFuaW1hdGlvbnMgaW4gdGhlIG9sZCBxdWV1ZSBhbmQgZmluaXNoIHRoZW1cbiAgICAgICAgICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHF1ZXVlW2luZGV4XSAmJiBxdWV1ZVtpbmRleF0uZmluaXNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWV1ZVtpbmRleF0uZmluaXNoLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUdXJuIG9mZiBmaW5pc2hpbmcgZmxhZ1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBkYXRhLmZpbmlzaDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBqUXVlcnkuZWFjaChbXCJ0b2dnbGVcIiwgXCJzaG93XCIsIFwiaGlkZVwiXSwgZnVuY3Rpb24gKGksIG5hbWUpIHtcbiAgICAgICAgdmFyIGNzc0ZuID0galF1ZXJ5LmZuW25hbWVdO1xuICAgICAgICBqUXVlcnkuZm5bbmFtZV0gPSBmdW5jdGlvbiAoc3BlZWQsIGVhc2luZywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBzcGVlZCA9PSBudWxsIHx8IHR5cGVvZiBzcGVlZCA9PT0gXCJib29sZWFuXCIgP1xuICAgICAgICAgICAgICAgIGNzc0ZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZShnZW5GeChuYW1lLCB0cnVlKSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4vLyBHZW5lcmF0ZSBzaG9ydGN1dHMgZm9yIGN1c3RvbSBhbmltYXRpb25zXG4gICAgalF1ZXJ5LmVhY2goe1xuICAgICAgICBzbGlkZURvd246IGdlbkZ4KFwic2hvd1wiKSxcbiAgICAgICAgc2xpZGVVcDogZ2VuRngoXCJoaWRlXCIpLFxuICAgICAgICBzbGlkZVRvZ2dsZTogZ2VuRngoXCJ0b2dnbGVcIiksXG4gICAgICAgIGZhZGVJbjoge29wYWNpdHk6IFwic2hvd1wifSxcbiAgICAgICAgZmFkZU91dDoge29wYWNpdHk6IFwiaGlkZVwifSxcbiAgICAgICAgZmFkZVRvZ2dsZToge29wYWNpdHk6IFwidG9nZ2xlXCJ9XG4gICAgfSwgZnVuY3Rpb24gKG5hbWUsIHByb3BzKSB7XG4gICAgICAgIGpRdWVyeS5mbltuYW1lXSA9IGZ1bmN0aW9uIChzcGVlZCwgZWFzaW5nLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0ZShwcm9wcywgc3BlZWQsIGVhc2luZywgY2FsbGJhY2spO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgalF1ZXJ5LnRpbWVycyA9IFtdO1xuICAgIGpRdWVyeS5meC50aWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdGltZXIsXG4gICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgIHRpbWVycyA9IGpRdWVyeS50aW1lcnM7XG5cbiAgICAgICAgZnhOb3cgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgIGZvciAoOyBpIDwgdGltZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aW1lciA9IHRpbWVyc1tpXTtcblxuICAgICAgICAgICAgLy8gUnVuIHRoZSB0aW1lciBhbmQgc2FmZWx5IHJlbW92ZSBpdCB3aGVuIGRvbmUgKGFsbG93aW5nIGZvciBleHRlcm5hbCByZW1vdmFsKVxuICAgICAgICAgICAgaWYgKCF0aW1lcigpICYmIHRpbWVyc1tpXSA9PT0gdGltZXIpIHtcbiAgICAgICAgICAgICAgICB0aW1lcnMuc3BsaWNlKGktLSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRpbWVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGpRdWVyeS5meC5zdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgZnhOb3cgPSB1bmRlZmluZWQ7XG4gICAgfTtcblxuICAgIGpRdWVyeS5meC50aW1lciA9IGZ1bmN0aW9uICh0aW1lcikge1xuICAgICAgICBqUXVlcnkudGltZXJzLnB1c2godGltZXIpO1xuICAgICAgICBqUXVlcnkuZnguc3RhcnQoKTtcbiAgICB9O1xuXG4gICAgalF1ZXJ5LmZ4LmludGVydmFsID0gMTM7XG4gICAgalF1ZXJ5LmZ4LnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5Qcm9ncmVzcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5Qcm9ncmVzcyA9IHRydWU7XG4gICAgICAgIHNjaGVkdWxlKCk7XG4gICAgfTtcblxuICAgIGpRdWVyeS5meC5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpblByb2dyZXNzID0gbnVsbDtcbiAgICB9O1xuXG4gICAgalF1ZXJ5LmZ4LnNwZWVkcyA9IHtcbiAgICAgICAgc2xvdzogNjAwLFxuICAgICAgICBmYXN0OiAyMDAsXG5cbiAgICAgICAgLy8gRGVmYXVsdCBzcGVlZFxuICAgICAgICBfZGVmYXVsdDogNDAwXG4gICAgfTtcblxuXG4vLyBCYXNlZCBvZmYgb2YgdGhlIHBsdWdpbiBieSBDbGludCBIZWxmZXJzLCB3aXRoIHBlcm1pc3Npb24uXG4vLyBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxMDAzMjQwMTQ3NDcvaHR0cDovL2JsaW5kc2lnbmFscy5jb20vaW5kZXgucGhwLzIwMDkvMDcvanF1ZXJ5LWRlbGF5L1xuICAgIGpRdWVyeS5mbi5kZWxheSA9IGZ1bmN0aW9uICh0aW1lLCB0eXBlKSB7XG4gICAgICAgIHRpbWUgPSBqUXVlcnkuZnggPyBqUXVlcnkuZnguc3BlZWRzW3RpbWVdIHx8IHRpbWUgOiB0aW1lO1xuICAgICAgICB0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucXVldWUodHlwZSwgZnVuY3Rpb24gKG5leHQsIGhvb2tzKSB7XG4gICAgICAgICAgICB2YXIgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KG5leHQsIHRpbWUpO1xuICAgICAgICAgICAgaG9va3Muc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLFxuICAgICAgICAgICAgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxcbiAgICAgICAgICAgIG9wdCA9IHNlbGVjdC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTtcblxuICAgICAgICBpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuXG4gICAgICAgIC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjMgb25seVxuICAgICAgICAvLyBEZWZhdWx0IHZhbHVlIGZvciBhIGNoZWNrYm94IHNob3VsZCBiZSBcIm9uXCJcbiAgICAgICAgc3VwcG9ydC5jaGVja09uID0gaW5wdXQudmFsdWUgIT09IFwiXCI7XG5cbiAgICAgICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4gICAgICAgIC8vIE11c3QgYWNjZXNzIHNlbGVjdGVkSW5kZXggdG8gbWFrZSBkZWZhdWx0IG9wdGlvbnMgc2VsZWN0XG4gICAgICAgIHN1cHBvcnQub3B0U2VsZWN0ZWQgPSBvcHQuc2VsZWN0ZWQ7XG5cbiAgICAgICAgLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4gICAgICAgIC8vIEFuIGlucHV0IGxvc2VzIGl0cyB2YWx1ZSBhZnRlciBiZWNvbWluZyBhIHJhZGlvXG4gICAgICAgIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9IFwidFwiO1xuICAgICAgICBpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuICAgICAgICBzdXBwb3J0LnJhZGlvVmFsdWUgPSBpbnB1dC52YWx1ZSA9PT0gXCJ0XCI7XG4gICAgfSkoKTtcblxuXG4gICAgdmFyIGJvb2xIb29rLFxuICAgICAgICBhdHRySGFuZGxlID0galF1ZXJ5LmV4cHIuYXR0ckhhbmRsZTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICBhdHRyOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2Nlc3ModGhpcywgalF1ZXJ5LmF0dHIsIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5yZW1vdmVBdHRyKHRoaXMsIG5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGpRdWVyeS5leHRlbmQoe1xuICAgICAgICBhdHRyOiBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciByZXQsIGhvb2tzLFxuICAgICAgICAgICAgICAgIG5UeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuICAgICAgICAgICAgLy8gRG9uJ3QgZ2V0L3NldCBhdHRyaWJ1dGVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuICAgICAgICAgICAgaWYgKG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGYWxsYmFjayB0byBwcm9wIHdoZW4gYXR0cmlidXRlcyBhcmUgbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBqUXVlcnkucHJvcChlbGVtLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEF0dHJpYnV0ZSBob29rcyBhcmUgZGV0ZXJtaW5lZCBieSB0aGUgbG93ZXJjYXNlIHZlcnNpb25cbiAgICAgICAgICAgIC8vIEdyYWIgbmVjZXNzYXJ5IGhvb2sgaWYgb25lIGlzIGRlZmluZWRcbiAgICAgICAgICAgIGlmIChuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKGVsZW0pKSB7XG4gICAgICAgICAgICAgICAgaG9va3MgPSBqUXVlcnkuYXR0ckhvb2tzW25hbWUudG9Mb3dlckNhc2UoKV0gfHxcbiAgICAgICAgICAgICAgICAgICAgKGpRdWVyeS5leHByLm1hdGNoLmJvb2wudGVzdChuYW1lKSA/IGJvb2xIb29rIDogdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LnJlbW92ZUF0dHIoZWxlbSwgbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJlxuICAgICAgICAgICAgICAgICAgICAocmV0ID0gaG9va3Muc2V0KGVsZW0sIHZhbHVlLCBuYW1lKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlICsgXCJcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3MuZ2V0KGVsZW0sIG5hbWUpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldCA9IGpRdWVyeS5maW5kLmF0dHIoZWxlbSwgbmFtZSk7XG5cbiAgICAgICAgICAgIC8vIE5vbi1leGlzdGVudCBhdHRyaWJ1dGVzIHJldHVybiBudWxsLCB3ZSBub3JtYWxpemUgdG8gdW5kZWZpbmVkXG4gICAgICAgICAgICByZXR1cm4gcmV0ID09IG51bGwgPyB1bmRlZmluZWQgOiByZXQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXR0ckhvb2tzOiB7XG4gICAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZWxlbSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzdXBwb3J0LnJhZGlvVmFsdWUgJiYgdmFsdWUgPT09IFwicmFkaW9cIiAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZU5hbWUoZWxlbSwgXCJpbnB1dFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IGVsZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0udmFsdWUgPSB2YWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlQXR0cjogZnVuY3Rpb24gKGVsZW0sIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSxcbiAgICAgICAgICAgICAgICBpID0gMCxcblxuICAgICAgICAgICAgICAgIC8vIEF0dHJpYnV0ZSBuYW1lcyBjYW4gY29udGFpbiBub24tSFRNTCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnNcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbiAgICAgICAgICAgICAgICBhdHRyTmFtZXMgPSB2YWx1ZSAmJiB2YWx1ZS5tYXRjaChybm90aHRtbHdoaXRlKTtcblxuICAgICAgICAgICAgaWYgKGF0dHJOYW1lcyAmJiBlbGVtLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKChuYW1lID0gYXR0ck5hbWVzW2krK10pKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW0ucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4vLyBIb29rcyBmb3IgYm9vbGVhbiBhdHRyaWJ1dGVzXG4gICAgYm9vbEhvb2sgPSB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKGVsZW0sIHZhbHVlLCBuYW1lKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IGZhbHNlKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYm9vbGVhbiBhdHRyaWJ1dGVzIHdoZW4gc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICAgICAgalF1ZXJ5LnJlbW92ZUF0dHIoZWxlbSwgbmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKG5hbWUsIG5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgalF1ZXJ5LmVhY2goalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksIGZ1bmN0aW9uIChpLCBuYW1lKSB7XG4gICAgICAgIHZhciBnZXR0ZXIgPSBhdHRySGFuZGxlW25hbWVdIHx8IGpRdWVyeS5maW5kLmF0dHI7XG5cbiAgICAgICAgYXR0ckhhbmRsZVtuYW1lXSA9IGZ1bmN0aW9uIChlbGVtLCBuYW1lLCBpc1hNTCkge1xuICAgICAgICAgICAgdmFyIHJldCwgaGFuZGxlLFxuICAgICAgICAgICAgICAgIGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIGlmICghaXNYTUwpIHtcblxuICAgICAgICAgICAgICAgIC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3AgYnkgdGVtcG9yYXJpbHkgcmVtb3ZpbmcgdGhpcyBmdW5jdGlvbiBmcm9tIHRoZSBnZXR0ZXJcbiAgICAgICAgICAgICAgICBoYW5kbGUgPSBhdHRySGFuZGxlW2xvd2VyY2FzZU5hbWVdO1xuICAgICAgICAgICAgICAgIGF0dHJIYW5kbGVbbG93ZXJjYXNlTmFtZV0gPSByZXQ7XG4gICAgICAgICAgICAgICAgcmV0ID0gZ2V0dGVyKGVsZW0sIG5hbWUsIGlzWE1MKSAhPSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgbG93ZXJjYXNlTmFtZSA6XG4gICAgICAgICAgICAgICAgICAgIG51bGw7XG4gICAgICAgICAgICAgICAgYXR0ckhhbmRsZVtsb3dlcmNhc2VOYW1lXSA9IGhhbmRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH07XG4gICAgfSk7XG5cblxuICAgIHZhciByZm9jdXNhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcbiAgICAgICAgcmNsaWNrYWJsZSA9IC9eKD86YXxhcmVhKSQvaTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICBwcm9wOiBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiBhY2Nlc3ModGhpcywgalF1ZXJ5LnByb3AsIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlUHJvcDogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzW2pRdWVyeS5wcm9wRml4W25hbWVdIHx8IG5hbWVdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGpRdWVyeS5leHRlbmQoe1xuICAgICAgICBwcm9wOiBmdW5jdGlvbiAoZWxlbSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciByZXQsIGhvb2tzLFxuICAgICAgICAgICAgICAgIG5UeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuICAgICAgICAgICAgLy8gRG9uJ3QgZ2V0L3NldCBwcm9wZXJ0aWVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuICAgICAgICAgICAgaWYgKG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoblR5cGUgIT09IDEgfHwgIWpRdWVyeS5pc1hNTERvYyhlbGVtKSkge1xuXG4gICAgICAgICAgICAgICAgLy8gRml4IG5hbWUgYW5kIGF0dGFjaCBob29rc1xuICAgICAgICAgICAgICAgIG5hbWUgPSBqUXVlcnkucHJvcEZpeFtuYW1lXSB8fCBuYW1lO1xuICAgICAgICAgICAgICAgIGhvb2tzID0galF1ZXJ5LnByb3BIb29rc1tuYW1lXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJlxuICAgICAgICAgICAgICAgICAgICAocmV0ID0gaG9va3Muc2V0KGVsZW0sIHZhbHVlLCBuYW1lKSkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiAoZWxlbVtuYW1lXSA9IHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKHJldCA9IGhvb2tzLmdldChlbGVtLCBuYW1lKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZWxlbVtuYW1lXTtcbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wSG9va3M6IHtcbiAgICAgICAgICAgIHRhYkluZGV4OiB7XG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZWxlbSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcbiAgICAgICAgICAgICAgICAgICAgLy8gZWxlbS50YWJJbmRleCBkb2Vzbid0IGFsd2F5cyByZXR1cm4gdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvcnJlY3QgdmFsdWUgd2hlbiBpdCBoYXNuJ3QgYmVlbiBleHBsaWNpdGx5IHNldFxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAxNDExMTYyMzMzNDcvaHR0cDovL2ZsdWlkcHJvamVjdC5vcmcvYmxvZy8yMDA4LzAxLzA5L2dldHRpbmctc2V0dGluZy1hbmQtcmVtb3ZpbmctdGFiaW5kZXgtdmFsdWVzLXdpdGgtamF2YXNjcmlwdC9cbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIHByb3BlciBhdHRyaWJ1dGUgcmV0cmlldmFsKCMxMjA3MilcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmluZGV4ID0galF1ZXJ5LmZpbmQuYXR0cihlbGVtLCBcInRhYmluZGV4XCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YWJpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRhYmluZGV4LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICByZm9jdXNhYmxlLnRlc3QoZWxlbS5ub2RlTmFtZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJjbGlja2FibGUudGVzdChlbGVtLm5vZGVOYW1lKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5ocmVmXG4gICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BGaXg6IHtcbiAgICAgICAgICAgIFwiZm9yXCI6IFwiaHRtbEZvclwiLFxuICAgICAgICAgICAgXCJjbGFzc1wiOiBcImNsYXNzTmFtZVwiXG4gICAgICAgIH1cbiAgICB9KTtcblxuLy8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG4vLyBBY2Nlc3NpbmcgdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHlcbi8vIGZvcmNlcyB0aGUgYnJvd3NlciB0byByZXNwZWN0IHNldHRpbmcgc2VsZWN0ZWRcbi8vIG9uIHRoZSBvcHRpb25cbi8vIFRoZSBnZXR0ZXIgZW5zdXJlcyBhIGRlZmF1bHQgb3B0aW9uIGlzIHNlbGVjdGVkXG4vLyB3aGVuIGluIGFuIG9wdGdyb3VwXG4vLyBlc2xpbnQgcnVsZSBcIm5vLXVudXNlZC1leHByZXNzaW9uc1wiIGlzIGRpc2FibGVkIGZvciB0aGlzIGNvZGVcbi8vIHNpbmNlIGl0IGNvbnNpZGVycyBzdWNoIGFjY2Vzc2lvbnMgbm9vcFxuICAgIGlmICghc3VwcG9ydC5vcHRTZWxlY3RlZCkge1xuICAgICAgICBqUXVlcnkucHJvcEhvb2tzLnNlbGVjdGVkID0ge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZWxlbSkge1xuXG4gICAgICAgICAgICAgICAgLyogZXNsaW50IG5vLXVudXNlZC1leHByZXNzaW9uczogXCJvZmZcIiAqL1xuXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50ICYmIHBhcmVudC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGVsZW0pIHtcblxuICAgICAgICAgICAgICAgIC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cblxuICAgICAgICAgICAgICAgIHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuc2VsZWN0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgalF1ZXJ5LmVhY2goW1xuICAgICAgICBcInRhYkluZGV4XCIsXG4gICAgICAgIFwicmVhZE9ubHlcIixcbiAgICAgICAgXCJtYXhMZW5ndGhcIixcbiAgICAgICAgXCJjZWxsU3BhY2luZ1wiLFxuICAgICAgICBcImNlbGxQYWRkaW5nXCIsXG4gICAgICAgIFwicm93U3BhblwiLFxuICAgICAgICBcImNvbFNwYW5cIixcbiAgICAgICAgXCJ1c2VNYXBcIixcbiAgICAgICAgXCJmcmFtZUJvcmRlclwiLFxuICAgICAgICBcImNvbnRlbnRFZGl0YWJsZVwiXG4gICAgXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICBqUXVlcnkucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldID0gdGhpcztcbiAgICB9KTtcblxuXG4gICAgLy8gU3RyaXAgYW5kIGNvbGxhcHNlIHdoaXRlc3BhY2UgYWNjb3JkaW5nIHRvIEhUTUwgc3BlY1xuICAgIC8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2UtYXNjaWktd2hpdGVzcGFjZVxuICAgIGZ1bmN0aW9uIHN0cmlwQW5kQ29sbGFwc2UodmFsdWUpIHtcbiAgICAgICAgdmFyIHRva2VucyA9IHZhbHVlLm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtdO1xuICAgICAgICByZXR1cm4gdG9rZW5zLmpvaW4oXCIgXCIpO1xuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gZ2V0Q2xhc3MoZWxlbSkge1xuICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsYXNzZXNUb0FycmF5KHZhbHVlKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICAgIGFkZENsYXNzOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc2VzLCBlbGVtLCBjdXIsIGN1clZhbHVlLCBjbGF6eiwgaiwgZmluYWxWYWx1ZSxcbiAgICAgICAgICAgICAgICBpID0gMDtcblxuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaikge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykuYWRkQ2xhc3ModmFsdWUuY2FsbCh0aGlzLCBqLCBnZXRDbGFzcyh0aGlzKSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjbGFzc2VzID0gY2xhc3Nlc1RvQXJyYXkodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAoY2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoKGVsZW0gPSB0aGlzW2krK10pKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1clZhbHVlID0gZ2V0Q2xhc3MoZWxlbSk7XG4gICAgICAgICAgICAgICAgICAgIGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZShjdXJWYWx1ZSkgKyBcIiBcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGNsYXp6ID0gY2xhc3Nlc1tqKytdKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXIuaW5kZXhPZihcIiBcIiArIGNsYXp6ICsgXCIgXCIpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXIgKz0gY2xhenogKyBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZShjdXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1clZhbHVlICE9PSBmaW5hbFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBmaW5hbFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGNsYXNzZXMsIGVsZW0sIGN1ciwgY3VyVmFsdWUsIGNsYXp6LCBqLCBmaW5hbFZhbHVlLFxuICAgICAgICAgICAgICAgIGkgPSAwO1xuXG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChqKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5yZW1vdmVDbGFzcyh2YWx1ZS5jYWxsKHRoaXMsIGosIGdldENsYXNzKHRoaXMpKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF0dHIoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2xhc3NlcyA9IGNsYXNzZXNUb0FycmF5KHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKGNsYXNzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgd2hpbGUgKChlbGVtID0gdGhpc1tpKytdKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJWYWx1ZSA9IGdldENsYXNzKGVsZW0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgZXhwcmVzc2lvbiBpcyBoZXJlIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgYWRkQ2xhc3MpXG4gICAgICAgICAgICAgICAgICAgIGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZShjdXJWYWx1ZSkgKyBcIiBcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKGNsYXp6ID0gY2xhc3Nlc1tqKytdKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlICphbGwqIGluc3RhbmNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChjdXIuaW5kZXhPZihcIiBcIiArIGNsYXp6ICsgXCIgXCIpID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UoXCIgXCIgKyBjbGF6eiArIFwiIFwiLCBcIiBcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IGFzc2lnbiBpZiBkaWZmZXJlbnQgdG8gYXZvaWQgdW5uZWVkZWQgcmVuZGVyaW5nLlxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxWYWx1ZSA9IHN0cmlwQW5kQ29sbGFwc2UoY3VyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgZmluYWxWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiAodmFsdWUsIHN0YXRlVmFsKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZSxcbiAgICAgICAgICAgICAgICBpc1ZhbGlkVmFsdWUgPSB0eXBlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN0YXRlVmFsID09PSBcImJvb2xlYW5cIiAmJiBpc1ZhbGlkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGVWYWwgPyB0aGlzLmFkZENsYXNzKHZhbHVlKSA6IHRoaXMucmVtb3ZlQ2xhc3ModmFsdWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS50b2dnbGVDbGFzcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmNhbGwodGhpcywgaSwgZ2V0Q2xhc3ModGhpcyksIHN0YXRlVmFsKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlVmFsXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWUsIGksIHNlbGYsIGNsYXNzTmFtZXM7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZFZhbHVlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYgPSBqUXVlcnkodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXMgPSBjbGFzc2VzVG9BcnJheSh2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChjbGFzc05hbWUgPSBjbGFzc05hbWVzW2krK10pKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGVhY2ggY2xhc3NOYW1lIGdpdmVuLCBzcGFjZSBzZXBhcmF0ZWQgbGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlQ2xhc3MoY2xhc3NOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVG9nZ2xlIHdob2xlIGNsYXNzIG5hbWVcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gZ2V0Q2xhc3ModGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGFzc05hbWUpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgY2xhc3NOYW1lIGlmIHNldFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVByaXYuc2V0KHRoaXMsIFwiX19jbGFzc05hbWVfX1wiLCBjbGFzc05hbWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZSBvciBpZiB3ZSdyZSBwYXNzZWQgYGZhbHNlYCxcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlbiByZW1vdmUgdGhlIHdob2xlIGNsYXNzbmFtZSAoaWYgdGhlcmUgd2FzIG9uZSwgdGhlIGFib3ZlIHNhdmVkIGl0KS5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGJyaW5nIGJhY2sgd2hhdGV2ZXIgd2FzIHByZXZpb3VzbHkgc2F2ZWQgKGlmIGFueXRoaW5nKSxcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGluZyBiYWNrIHRvIHRoZSBlbXB0eSBzdHJpbmcgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWUgfHwgdmFsdWUgPT09IGZhbHNlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQcml2LmdldCh0aGlzLCBcIl9fY2xhc3NOYW1lX19cIikgfHwgXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUsIGVsZW0sXG4gICAgICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgICAgIGNsYXNzTmFtZSA9IFwiIFwiICsgc2VsZWN0b3IgKyBcIiBcIjtcbiAgICAgICAgICAgIHdoaWxlICgoZWxlbSA9IHRoaXNbaSsrXSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbS5ub2RlVHlwZSA9PT0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAoXCIgXCIgKyBzdHJpcEFuZENvbGxhcHNlKGdldENsYXNzKGVsZW0pKSArIFwiIFwiKS5pbmRleE9mKGNsYXNzTmFtZSkgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG5cbiAgICB2YXIgcnJldHVybiA9IC9cXHIvZztcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICB2YWw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGhvb2tzLCByZXQsIHZhbHVlSXNGdW5jdGlvbixcbiAgICAgICAgICAgICAgICBlbGVtID0gdGhpc1swXTtcblxuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgaG9va3MgPSBqUXVlcnkudmFsSG9va3NbZWxlbS50eXBlXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LnZhbEhvb2tzW2VsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKV07XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhvb2tzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBcImdldFwiIGluIGhvb2tzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAocmV0ID0gaG9va3MuZ2V0KGVsZW0sIFwidmFsdWVcIikpICE9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0ID0gZWxlbS52YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgbW9zdCBjb21tb24gc3RyaW5nIGNhc2VzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmV0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0LnJlcGxhY2UocnJldHVybiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBIYW5kbGUgY2FzZXMgd2hlcmUgdmFsdWUgaXMgbnVsbC91bmRlZiBvciBudW1iZXJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldCA9PSBudWxsID8gXCJcIiA6IHJldDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhbHVlSXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24odmFsdWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbDtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vZGVUeXBlICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWVJc0Z1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IHZhbHVlLmNhbGwodGhpcywgaSwgalF1ZXJ5KHRoaXMpLnZhbCgpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUcmVhdCBudWxsL3VuZGVmaW5lZCBhcyBcIlwiOyBjb252ZXJ0IG51bWJlcnMgdG8gc3RyaW5nXG4gICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsICs9IFwiXCI7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWwgPSBqUXVlcnkubWFwKHZhbCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzW3RoaXMudHlwZV0gfHwgalF1ZXJ5LnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV07XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBzZXQgcmV0dXJucyB1bmRlZmluZWQsIGZhbGwgYmFjayB0byBub3JtYWwgc2V0dGluZ1xuICAgICAgICAgICAgICAgIGlmICghaG9va3MgfHwgIShcInNldFwiIGluIGhvb2tzKSB8fCBob29rcy5zZXQodGhpcywgdmFsLCBcInZhbHVlXCIpID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgalF1ZXJ5LmV4dGVuZCh7XG4gICAgICAgIHZhbEhvb2tzOiB7XG4gICAgICAgICAgICBvcHRpb246IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IGpRdWVyeS5maW5kLmF0dHIoZWxlbSwgXCJ2YWx1ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbCAhPSBudWxsID9cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA6XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9MTAgLSAxMSBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb24udGV4dCB0aHJvd3MgZXhjZXB0aW9ucyAoIzE0Njg2LCAjMTQ4NTgpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy8jc3RyaXAtYW5kLWNvbGxhcHNlLXdoaXRlc3BhY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwQW5kQ29sbGFwc2UoalF1ZXJ5LnRleHQoZWxlbSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSwgb3B0aW9uLCBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0gZWxlbS5zZWxlY3RlZEluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgb25lID0gZWxlbS50eXBlID09PSBcInNlbGVjdC1vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IG9uZSA/IG51bGwgOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heCA9IG9uZSA/IGluZGV4ICsgMSA6IG9wdGlvbnMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBtYXg7XG5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBvbmUgPyBpbmRleCA6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIHRoZSBzZWxlY3RlZCBvcHRpb25zXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbiA9IG9wdGlvbnNbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJRTgtOSBkb2Vzbid0IHVwZGF0ZSBzZWxlY3RlZCBhZnRlciBmb3JtIHJlc2V0ICgjMjU1MSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgob3B0aW9uLnNlbGVjdGVkIHx8IGkgPT09IGluZGV4KSAmJlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgcmV0dXJuIG9wdGlvbnMgdGhhdCBhcmUgZGlzYWJsZWQgb3IgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICFvcHRpb24uZGlzYWJsZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIW9wdGlvbi5wYXJlbnROb2RlLmRpc2FibGVkIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFub2RlTmFtZShvcHRpb24ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiKSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgc3BlY2lmaWMgdmFsdWUgZm9yIHRoZSBvcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGpRdWVyeShvcHRpb24pLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCBhbiBhcnJheSBmb3Igb25lIHNlbGVjdHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob25lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNdWx0aS1TZWxlY3RzIHJldHVybiBhbiBhcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGVsZW0sIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcHRpb25TZXQsIG9wdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBqUXVlcnkubWFrZUFycmF5KHZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkgPSBvcHRpb25zLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24gPSBvcHRpb25zW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uLnNlbGVjdGVkID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuaW5BcnJheShqUXVlcnkudmFsSG9va3Mub3B0aW9uLmdldChvcHRpb24pLCB2YWx1ZXMpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uZC1hc3NpZ24gKi9cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvcmNlIGJyb3dzZXJzIHRvIGJlaGF2ZSBjb25zaXN0ZW50bHkgd2hlbiBub24tbWF0Y2hpbmcgdmFsdWUgaXMgc2V0XG4gICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9uU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtLnNlbGVjdGVkSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4vLyBSYWRpb3MgYW5kIGNoZWNrYm94ZXMgZ2V0dGVyL3NldHRlclxuICAgIGpRdWVyeS5lYWNoKFtcInJhZGlvXCIsIFwiY2hlY2tib3hcIl0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgalF1ZXJ5LnZhbEhvb2tzW3RoaXNdID0ge1xuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZWxlbSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChlbGVtLmNoZWNrZWQgPSBqUXVlcnkuaW5BcnJheShqUXVlcnkoZWxlbSkudmFsKCksIHZhbHVlKSA+IC0xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGlmICghc3VwcG9ydC5jaGVja09uKSB7XG4gICAgICAgICAgICBqUXVlcnkudmFsSG9va3NbdGhpc10uZ2V0ID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA9PT0gbnVsbCA/IFwib25cIiA6IGVsZW0udmFsdWU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuLy8gUmV0dXJuIGpRdWVyeSBmb3IgYXR0cmlidXRlcy1vbmx5IGluY2x1c2lvblxuXG5cbiAgICBzdXBwb3J0LmZvY3VzaW4gPSBcIm9uZm9jdXNpblwiIGluIHdpbmRvdztcblxuXG4gICAgdmFyIHJmb2N1c01vcnBoID0gL14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFxuICAgICAgICBzdG9wUHJvcGFnYXRpb25DYWxsYmFjayA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB9O1xuXG4gICAgalF1ZXJ5LmV4dGVuZChqUXVlcnkuZXZlbnQsIHtcblxuICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoZXZlbnQsIGRhdGEsIGVsZW0sIG9ubHlIYW5kbGVycykge1xuXG4gICAgICAgICAgICB2YXIgaSwgY3VyLCB0bXAsIGJ1YmJsZVR5cGUsIG9udHlwZSwgaGFuZGxlLCBzcGVjaWFsLCBsYXN0RWxlbWVudCxcbiAgICAgICAgICAgICAgICBldmVudFBhdGggPSBbZWxlbSB8fCBkb2N1bWVudF0sXG4gICAgICAgICAgICAgICAgdHlwZSA9IGhhc093bi5jYWxsKGV2ZW50LCBcInR5cGVcIikgPyBldmVudC50eXBlIDogZXZlbnQsXG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlcyA9IGhhc093bi5jYWxsKGV2ZW50LCBcIm5hbWVzcGFjZVwiKSA/IGV2ZW50Lm5hbWVzcGFjZS5zcGxpdChcIi5cIikgOiBbXTtcblxuICAgICAgICAgICAgY3VyID0gbGFzdEVsZW1lbnQgPSB0bXAgPSBlbGVtID0gZWxlbSB8fCBkb2N1bWVudDtcblxuICAgICAgICAgICAgLy8gRG9uJ3QgZG8gZXZlbnRzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcbiAgICAgICAgICAgIGlmIChlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZvY3VzL2JsdXIgbW9ycGhzIHRvIGZvY3VzaW4vb3V0OyBlbnN1cmUgd2UncmUgbm90IGZpcmluZyB0aGVtIHJpZ2h0IG5vd1xuICAgICAgICAgICAgaWYgKHJmb2N1c01vcnBoLnRlc3QodHlwZSArIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZS5pbmRleE9mKFwiLlwiKSA+IC0xKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBOYW1lc3BhY2VkIHRyaWdnZXI7IGNyZWF0ZSBhIHJlZ2V4cCB0byBtYXRjaCBldmVudCB0eXBlIGluIGhhbmRsZSgpXG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlcyA9IHR5cGUuc3BsaXQoXCIuXCIpO1xuICAgICAgICAgICAgICAgIHR5cGUgPSBuYW1lc3BhY2VzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgbmFtZXNwYWNlcy5zb3J0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbnR5cGUgPSB0eXBlLmluZGV4T2YoXCI6XCIpIDwgMCAmJiBcIm9uXCIgKyB0eXBlO1xuXG4gICAgICAgICAgICAvLyBDYWxsZXIgY2FuIHBhc3MgaW4gYSBqUXVlcnkuRXZlbnQgb2JqZWN0LCBPYmplY3QsIG9yIGp1c3QgYW4gZXZlbnQgdHlwZSBzdHJpbmdcbiAgICAgICAgICAgIGV2ZW50ID0gZXZlbnRbalF1ZXJ5LmV4cGFuZG9dID9cbiAgICAgICAgICAgICAgICBldmVudCA6XG4gICAgICAgICAgICAgICAgbmV3IGpRdWVyeS5FdmVudCh0eXBlLCB0eXBlb2YgZXZlbnQgPT09IFwib2JqZWN0XCIgJiYgZXZlbnQpO1xuXG4gICAgICAgICAgICAvLyBUcmlnZ2VyIGJpdG1hc2s6ICYgMSBmb3IgbmF0aXZlIGhhbmRsZXJzOyAmIDIgZm9yIGpRdWVyeSAoYWx3YXlzIHRydWUpXG4gICAgICAgICAgICBldmVudC5pc1RyaWdnZXIgPSBvbmx5SGFuZGxlcnMgPyAyIDogMztcbiAgICAgICAgICAgIGV2ZW50Lm5hbWVzcGFjZSA9IG5hbWVzcGFjZXMuam9pbihcIi5cIik7XG4gICAgICAgICAgICBldmVudC5ybmFtZXNwYWNlID0gZXZlbnQubmFtZXNwYWNlID9cbiAgICAgICAgICAgICAgICBuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKSArIFwiKFxcXFwufCQpXCIpIDpcbiAgICAgICAgICAgICAgICBudWxsO1xuXG4gICAgICAgICAgICAvLyBDbGVhbiB1cCB0aGUgZXZlbnQgaW4gY2FzZSBpdCBpcyBiZWluZyByZXVzZWRcbiAgICAgICAgICAgIGV2ZW50LnJlc3VsdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICghZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0ID0gZWxlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2xvbmUgYW55IGluY29taW5nIGRhdGEgYW5kIHByZXBlbmQgdGhlIGV2ZW50LCBjcmVhdGluZyB0aGUgaGFuZGxlciBhcmcgbGlzdFxuICAgICAgICAgICAgZGF0YSA9IGRhdGEgPT0gbnVsbCA/XG4gICAgICAgICAgICAgICAgW2V2ZW50XSA6XG4gICAgICAgICAgICAgICAgalF1ZXJ5Lm1ha2VBcnJheShkYXRhLCBbZXZlbnRdKTtcblxuICAgICAgICAgICAgLy8gQWxsb3cgc3BlY2lhbCBldmVudHMgdG8gZHJhdyBvdXRzaWRlIHRoZSBsaW5lc1xuICAgICAgICAgICAgc3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsW3R5cGVdIHx8IHt9O1xuICAgICAgICAgICAgaWYgKCFvbmx5SGFuZGxlcnMgJiYgc3BlY2lhbC50cmlnZ2VyICYmIHNwZWNpYWwudHJpZ2dlci5hcHBseShlbGVtLCBkYXRhKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIERldGVybWluZSBldmVudCBwcm9wYWdhdGlvbiBwYXRoIGluIGFkdmFuY2UsIHBlciBXM0MgZXZlbnRzIHNwZWMgKCM5OTUxKVxuICAgICAgICAgICAgLy8gQnViYmxlIHVwIHRvIGRvY3VtZW50LCB0aGVuIHRvIHdpbmRvdzsgd2F0Y2ggZm9yIGEgZ2xvYmFsIG93bmVyRG9jdW1lbnQgdmFyICgjOTcyNClcbiAgICAgICAgICAgIGlmICghb25seUhhbmRsZXJzICYmICFzcGVjaWFsLm5vQnViYmxlICYmICFpc1dpbmRvdyhlbGVtKSkge1xuXG4gICAgICAgICAgICAgICAgYnViYmxlVHlwZSA9IHNwZWNpYWwuZGVsZWdhdGVUeXBlIHx8IHR5cGU7XG4gICAgICAgICAgICAgICAgaWYgKCFyZm9jdXNNb3JwaC50ZXN0KGJ1YmJsZVR5cGUgKyB0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICBjdXIgPSBjdXIucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICg7IGN1cjsgY3VyID0gY3VyLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRQYXRoLnB1c2goY3VyKTtcbiAgICAgICAgICAgICAgICAgICAgdG1wID0gY3VyO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE9ubHkgYWRkIHdpbmRvdyBpZiB3ZSBnb3QgdG8gZG9jdW1lbnQgKGUuZy4sIG5vdCBwbGFpbiBvYmogb3IgZGV0YWNoZWQgRE9NKVxuICAgICAgICAgICAgICAgIGlmICh0bXAgPT09IChlbGVtLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50UGF0aC5wdXNoKHRtcC5kZWZhdWx0VmlldyB8fCB0bXAucGFyZW50V2luZG93IHx8IHdpbmRvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGaXJlIGhhbmRsZXJzIG9uIHRoZSBldmVudCBwYXRoXG4gICAgICAgICAgICBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlICgoY3VyID0gZXZlbnRQYXRoW2krK10pICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgICAgICAgbGFzdEVsZW1lbnQgPSBjdXI7XG4gICAgICAgICAgICAgICAgZXZlbnQudHlwZSA9IGkgPiAxID9cbiAgICAgICAgICAgICAgICAgICAgYnViYmxlVHlwZSA6XG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwuYmluZFR5cGUgfHwgdHlwZTtcblxuICAgICAgICAgICAgICAgIC8vIGpRdWVyeSBoYW5kbGVyXG4gICAgICAgICAgICAgICAgaGFuZGxlID0gKGRhdGFQcml2LmdldChjdXIsIFwiZXZlbnRzXCIpIHx8IHt9KVtldmVudC50eXBlXSAmJlxuICAgICAgICAgICAgICAgICAgICBkYXRhUHJpdi5nZXQoY3VyLCBcImhhbmRsZVwiKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZS5hcHBseShjdXIsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIE5hdGl2ZSBoYW5kbGVyXG4gICAgICAgICAgICAgICAgaGFuZGxlID0gb250eXBlICYmIGN1cltvbnR5cGVdO1xuICAgICAgICAgICAgICAgIGlmIChoYW5kbGUgJiYgaGFuZGxlLmFwcGx5ICYmIGFjY2VwdERhdGEoY3VyKSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5yZXN1bHQgPSBoYW5kbGUuYXBwbHkoY3VyLCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC50eXBlID0gdHlwZTtcblxuICAgICAgICAgICAgLy8gSWYgbm9ib2R5IHByZXZlbnRlZCB0aGUgZGVmYXVsdCBhY3Rpb24sIGRvIGl0IG5vd1xuICAgICAgICAgICAgaWYgKCFvbmx5SGFuZGxlcnMgJiYgIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoKCFzcGVjaWFsLl9kZWZhdWx0IHx8XG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWwuX2RlZmF1bHQuYXBwbHkoZXZlbnRQYXRoLnBvcCgpLCBkYXRhKSA9PT0gZmFsc2UpICYmXG4gICAgICAgICAgICAgICAgICAgIGFjY2VwdERhdGEoZWxlbSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIGEgbmF0aXZlIERPTSBtZXRob2Qgb24gdGhlIHRhcmdldCB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgdGhlIGV2ZW50LlxuICAgICAgICAgICAgICAgICAgICAvLyBEb24ndCBkbyBkZWZhdWx0IGFjdGlvbnMgb24gd2luZG93LCB0aGF0J3Mgd2hlcmUgZ2xvYmFsIHZhcmlhYmxlcyBiZSAoIzYxNzApXG4gICAgICAgICAgICAgICAgICAgIGlmIChvbnR5cGUgJiYgaXNGdW5jdGlvbihlbGVtW3R5cGVdKSAmJiAhaXNXaW5kb3coZWxlbSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3QgcmUtdHJpZ2dlciBhbiBvbkZPTyBldmVudCB3aGVuIHdlIGNhbGwgaXRzIEZPTygpIG1ldGhvZFxuICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gZWxlbVtvbnR5cGVdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG1wKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVtvbnR5cGVdID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUHJldmVudCByZS10cmlnZ2VyaW5nIG9mIHRoZSBzYW1lIGV2ZW50LCBzaW5jZSB3ZSBhbHJlYWR5IGJ1YmJsZWQgaXQgYWJvdmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB0eXBlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtW3R5cGVdKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcih0eXBlLCBzdG9wUHJvcGFnYXRpb25DYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0bXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtW29udHlwZV0gPSB0bXA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBldmVudC5yZXN1bHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gUGlnZ3liYWNrIG9uIGEgZG9ub3IgZXZlbnQgdG8gc2ltdWxhdGUgYSBkaWZmZXJlbnQgb25lXG4gICAgICAgIC8vIFVzZWQgb25seSBmb3IgYGZvY3VzKGluIHwgb3V0KWAgZXZlbnRzXG4gICAgICAgIHNpbXVsYXRlOiBmdW5jdGlvbiAodHlwZSwgZWxlbSwgZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBlID0galF1ZXJ5LmV4dGVuZChcbiAgICAgICAgICAgICAgICBuZXcgalF1ZXJ5LkV2ZW50KCksXG4gICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBpc1NpbXVsYXRlZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGpRdWVyeS5ldmVudC50cmlnZ2VyKGUsIG51bGwsIGVsZW0pO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuXG4gICAgICAgIHRyaWdnZXI6IGZ1bmN0aW9uICh0eXBlLCBkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlcih0eXBlLCBkYXRhLCB0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VySGFuZGxlcjogZnVuY3Rpb24gKHR5cGUsIGRhdGEpIHtcbiAgICAgICAgICAgIHZhciBlbGVtID0gdGhpc1swXTtcbiAgICAgICAgICAgIGlmIChlbGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5ldmVudC50cmlnZ2VyKHR5cGUsIGRhdGEsIGVsZW0sIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cblxuLy8gU3VwcG9ydDogRmlyZWZveCA8PTQ0XG4vLyBGaXJlZm94IGRvZXNuJ3QgaGF2ZSBmb2N1cyhpbiB8IG91dCkgZXZlbnRzXG4vLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY4Nzc4N1xuLy9cbi8vIFN1cHBvcnQ6IENocm9tZSA8PTQ4IC0gNDksIFNhZmFyaSA8PTkuMCAtIDkuMVxuLy8gZm9jdXMoaW4gfCBvdXQpIGV2ZW50cyBmaXJlIGFmdGVyIGZvY3VzICYgYmx1ciBldmVudHMsXG4vLyB3aGljaCBpcyBzcGVjIHZpb2xhdGlvbiAtIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnRzLWZvY3VzZXZlbnQtZXZlbnQtb3JkZXJcbi8vIFJlbGF0ZWQgdGlja2V0IC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ5ODU3XG4gICAgaWYgKCFzdXBwb3J0LmZvY3VzaW4pIHtcbiAgICAgICAgalF1ZXJ5LmVhY2goe2ZvY3VzOiBcImZvY3VzaW5cIiwgYmx1cjogXCJmb2N1c291dFwifSwgZnVuY3Rpb24gKG9yaWcsIGZpeCkge1xuXG4gICAgICAgICAgICAvLyBBdHRhY2ggYSBzaW5nbGUgY2FwdHVyaW5nIGhhbmRsZXIgb24gdGhlIGRvY3VtZW50IHdoaWxlIHNvbWVvbmUgd2FudHMgZm9jdXNpbi9mb2N1c291dFxuICAgICAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQuc2ltdWxhdGUoZml4LCBldmVudC50YXJnZXQsIGpRdWVyeS5ldmVudC5maXgoZXZlbnQpKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGpRdWVyeS5ldmVudC5zcGVjaWFsW2ZpeF0gPSB7XG4gICAgICAgICAgICAgICAgc2V0dXA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNoZXMgPSBkYXRhUHJpdi5hY2Nlc3MoZG9jLCBmaXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYXR0YWNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKG9yaWcsIGhhbmRsZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRhdGFQcml2LmFjY2Vzcyhkb2MsIGZpeCwgKGF0dGFjaGVzIHx8IDApICsgMSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZWFyZG93bjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2hlcyA9IGRhdGFQcml2LmFjY2Vzcyhkb2MsIGZpeCkgLSAxO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYXR0YWNoZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKG9yaWcsIGhhbmRsZXIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVByaXYucmVtb3ZlKGRvYywgZml4KTtcblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVByaXYuYWNjZXNzKGRvYywgZml4LCBhdHRhY2hlcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuXG4gICAgdmFyIG5vbmNlID0gRGF0ZS5ub3coKTtcblxuICAgIHZhciBycXVlcnkgPSAoL1xcPy8pO1xuXG5cbi8vIENyb3NzLWJyb3dzZXIgeG1sIHBhcnNpbmdcbiAgICBqUXVlcnkucGFyc2VYTUwgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgeG1sO1xuICAgICAgICBpZiAoIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHlcbiAgICAgICAgLy8gSUUgdGhyb3dzIG9uIHBhcnNlRnJvbVN0cmluZyB3aXRoIGludmFsaWQgaW5wdXQuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB4bWwgPSAobmV3IHdpbmRvdy5ET01QYXJzZXIoKSkucGFyc2VGcm9tU3RyaW5nKGRhdGEsIFwidGV4dC94bWxcIik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHhtbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgheG1sIHx8IHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgalF1ZXJ5LmVycm9yKFwiSW52YWxpZCBYTUw6IFwiICsgZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHhtbDtcbiAgICB9O1xuXG5cbiAgICB2YXJcbiAgICAgICAgcmJyYWNrZXQgPSAvXFxbXFxdJC8sXG4gICAgICAgIHJDUkxGID0gL1xccj9cXG4vZyxcbiAgICAgICAgcnN1Ym1pdHRlclR5cGVzID0gL14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLFxuICAgICAgICByc3VibWl0dGFibGUgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7XG5cbiAgICBmdW5jdGlvbiBidWlsZFBhcmFtcyhwcmVmaXgsIG9iaiwgdHJhZGl0aW9uYWwsIGFkZCkge1xuICAgICAgICB2YXIgbmFtZTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG5cbiAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBhcnJheSBpdGVtLlxuICAgICAgICAgICAgalF1ZXJ5LmVhY2gob2JqLCBmdW5jdGlvbiAoaSwgdikge1xuICAgICAgICAgICAgICAgIGlmICh0cmFkaXRpb25hbCB8fCByYnJhY2tldC50ZXN0KHByZWZpeCkpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBUcmVhdCBlYWNoIGFycmF5IGl0ZW0gYXMgYSBzY2FsYXIuXG4gICAgICAgICAgICAgICAgICAgIGFkZChwcmVmaXgsIHYpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJdGVtIGlzIG5vbi1zY2FsYXIgKGFycmF5IG9yIG9iamVjdCksIGVuY29kZSBpdHMgbnVtZXJpYyBpbmRleC5cbiAgICAgICAgICAgICAgICAgICAgYnVpbGRQYXJhbXMoXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVmaXggKyBcIltcIiArICh0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiAmJiB2ICE9IG51bGwgPyBpIDogXCJcIikgKyBcIl1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHYsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFkaXRpb25hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoIXRyYWRpdGlvbmFsICYmIHRvVHlwZShvYmopID09PSBcIm9iamVjdFwiKSB7XG5cbiAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBvYmplY3QgaXRlbS5cbiAgICAgICAgICAgIGZvciAobmFtZSBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBidWlsZFBhcmFtcyhwcmVmaXggKyBcIltcIiArIG5hbWUgKyBcIl1cIiwgb2JqW25hbWVdLCB0cmFkaXRpb25hbCwgYWRkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBTZXJpYWxpemUgc2NhbGFyIGl0ZW0uXG4gICAgICAgICAgICBhZGQocHJlZml4LCBvYmopO1xuICAgICAgICB9XG4gICAgfVxuXG4vLyBTZXJpYWxpemUgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cyBvciBhIHNldCBvZlxuLy8ga2V5L3ZhbHVlcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG4gICAgalF1ZXJ5LnBhcmFtID0gZnVuY3Rpb24gKGEsIHRyYWRpdGlvbmFsKSB7XG4gICAgICAgIHZhciBwcmVmaXgsXG4gICAgICAgICAgICBzID0gW10sXG4gICAgICAgICAgICBhZGQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZU9yRnVuY3Rpb24pIHtcblxuICAgICAgICAgICAgICAgIC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIGludm9rZSBpdCBhbmQgdXNlIGl0cyByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBpc0Z1bmN0aW9uKHZhbHVlT3JGdW5jdGlvbikgP1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZU9yRnVuY3Rpb24oKSA6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlT3JGdW5jdGlvbjtcblxuICAgICAgICAgICAgICAgIHNbcy5sZW5ndGhdID0gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyBcIj1cIiArXG4gICAgICAgICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgLy8gSWYgYW4gYXJyYXkgd2FzIHBhc3NlZCBpbiwgYXNzdW1lIHRoYXQgaXQgaXMgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cy5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkgfHwgKGEuanF1ZXJ5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdChhKSkpIHtcblxuICAgICAgICAgICAgLy8gU2VyaWFsaXplIHRoZSBmb3JtIGVsZW1lbnRzXG4gICAgICAgICAgICBqUXVlcnkuZWFjaChhLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWRkKHRoaXMubmFtZSwgdGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBJZiB0cmFkaXRpb25hbCwgZW5jb2RlIHRoZSBcIm9sZFwiIHdheSAodGhlIHdheSAxLjMuMiBvciBvbGRlclxuICAgICAgICAgICAgLy8gZGlkIGl0KSwgb3RoZXJ3aXNlIGVuY29kZSBwYXJhbXMgcmVjdXJzaXZlbHkuXG4gICAgICAgICAgICBmb3IgKHByZWZpeCBpbiBhKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRQYXJhbXMocHJlZml4LCBhW3ByZWZpeF0sIHRyYWRpdGlvbmFsLCBhZGQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmV0dXJuIHRoZSByZXN1bHRpbmcgc2VyaWFsaXphdGlvblxuICAgICAgICByZXR1cm4gcy5qb2luKFwiJlwiKTtcbiAgICB9O1xuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG4gICAgICAgIHNlcmlhbGl6ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpO1xuICAgICAgICB9LFxuICAgICAgICBzZXJpYWxpemVBcnJheTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIC8vIENhbiBhZGQgcHJvcEhvb2sgZm9yIFwiZWxlbWVudHNcIiB0byBmaWx0ZXIgb3IgYWRkIGZvcm0gZWxlbWVudHNcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudHMgPSBqUXVlcnkucHJvcCh0aGlzLCBcImVsZW1lbnRzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50cyA/IGpRdWVyeS5tYWtlQXJyYXkoZWxlbWVudHMpIDogdGhpcztcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0eXBlID0gdGhpcy50eXBlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSAuaXMoIFwiOmRpc2FibGVkXCIgKSBzbyB0aGF0IGZpZWxkc2V0W2Rpc2FibGVkXSB3b3Jrc1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5uYW1lICYmICFqUXVlcnkodGhpcykuaXMoXCI6ZGlzYWJsZWRcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIHJzdWJtaXR0YWJsZS50ZXN0KHRoaXMubm9kZU5hbWUpICYmICFyc3VibWl0dGVyVHlwZXMudGVzdCh0eXBlKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2hlY2tlZCB8fCAhcmNoZWNrYWJsZVR5cGUudGVzdCh0eXBlKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChpLCBlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWwgPSBqUXVlcnkodGhpcykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqUXVlcnkubWFwKHZhbCwgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7bmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UockNSTEYsIFwiXFxyXFxuXCIpfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtuYW1lOiBlbGVtLm5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZShyQ1JMRiwgXCJcXHJcXG5cIil9O1xuICAgICAgICAgICAgICAgIH0pLmdldCgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIHZhclxuICAgICAgICByMjAgPSAvJTIwL2csXG4gICAgICAgIHJoYXNoID0gLyMuKiQvLFxuICAgICAgICByYW50aUNhY2hlID0gLyhbPyZdKV89W14mXSovLFxuICAgICAgICByaGVhZGVycyA9IC9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvbWcsXG5cbiAgICAgICAgLy8gIzc2NTMsICM4MTI1LCAjODE1MjogbG9jYWwgcHJvdG9jb2wgZGV0ZWN0aW9uXG4gICAgICAgIHJsb2NhbFByb3RvY29sID0gL14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sXG4gICAgICAgIHJub0NvbnRlbnQgPSAvXig/OkdFVHxIRUFEKSQvLFxuICAgICAgICBycHJvdG9jb2wgPSAvXlxcL1xcLy8sXG5cbiAgICAgICAgLyogUHJlZmlsdGVyc1xuXHQgKiAxKSBUaGV5IGFyZSB1c2VmdWwgdG8gaW50cm9kdWNlIGN1c3RvbSBkYXRhVHlwZXMgKHNlZSBhamF4L2pzb25wLmpzIGZvciBhbiBleGFtcGxlKVxuXHQgKiAyKSBUaGVzZSBhcmUgY2FsbGVkOlxuXHQgKiAgICAtIEJFRk9SRSBhc2tpbmcgZm9yIGEgdHJhbnNwb3J0XG5cdCAqICAgIC0gQUZURVIgcGFyYW0gc2VyaWFsaXphdGlvbiAocy5kYXRhIGlzIGEgc3RyaW5nIGlmIHMucHJvY2Vzc0RhdGEgaXMgdHJ1ZSlcblx0ICogMykga2V5IGlzIHRoZSBkYXRhVHlwZVxuXHQgKiA0KSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG5cdCAqIDUpIGV4ZWN1dGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGNvbnRpbnVlIGRvd24gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuICAgICAgICBwcmVmaWx0ZXJzID0ge30sXG5cbiAgICAgICAgLyogVHJhbnNwb3J0cyBiaW5kaW5nc1xuXHQgKiAxKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG5cdCAqIDIpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcblx0ICogMykgc2VsZWN0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gZ28gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuICAgICAgICB0cmFuc3BvcnRzID0ge30sXG5cbiAgICAgICAgLy8gQXZvaWQgY29tbWVudC1wcm9sb2cgY2hhciBzZXF1ZW5jZSAoIzEwMDk4KTsgbXVzdCBhcHBlYXNlIGxpbnQgYW5kIGV2YWRlIGNvbXByZXNzaW9uXG4gICAgICAgIGFsbFR5cGVzID0gXCIqL1wiLmNvbmNhdChcIipcIiksXG5cbiAgICAgICAgLy8gQW5jaG9yIHRhZyBmb3IgcGFyc2luZyB0aGUgZG9jdW1lbnQgb3JpZ2luXG4gICAgICAgIG9yaWdpbkFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIG9yaWdpbkFuY2hvci5ocmVmID0gbG9jYXRpb24uaHJlZjtcblxuLy8gQmFzZSBcImNvbnN0cnVjdG9yXCIgZm9yIGpRdWVyeS5hamF4UHJlZmlsdGVyIGFuZCBqUXVlcnkuYWpheFRyYW5zcG9ydFxuICAgIGZ1bmN0aW9uIGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyhzdHJ1Y3R1cmUpIHtcblxuICAgICAgICAvLyBkYXRhVHlwZUV4cHJlc3Npb24gaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIFwiKlwiXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YVR5cGVFeHByZXNzaW9uLCBmdW5jKSB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVR5cGVFeHByZXNzaW9uICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgZnVuYyA9IGRhdGFUeXBlRXhwcmVzc2lvbjtcbiAgICAgICAgICAgICAgICBkYXRhVHlwZUV4cHJlc3Npb24gPSBcIipcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGRhdGFUeXBlLFxuICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlcyA9IGRhdGFUeXBlRXhwcmVzc2lvbi50b0xvd2VyQ2FzZSgpLm1hdGNoKHJub3RodG1sd2hpdGUpIHx8IFtdO1xuXG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihmdW5jKSkge1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIGVhY2ggZGF0YVR5cGUgaW4gdGhlIGRhdGFUeXBlRXhwcmVzc2lvblxuICAgICAgICAgICAgICAgIHdoaWxlICgoZGF0YVR5cGUgPSBkYXRhVHlwZXNbaSsrXSkpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBQcmVwZW5kIGlmIHJlcXVlc3RlZFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVR5cGVbMF0gPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZSA9IGRhdGFUeXBlLnNsaWNlKDEpIHx8IFwiKlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgKHN0cnVjdHVyZVtkYXRhVHlwZV0gPSBzdHJ1Y3R1cmVbZGF0YVR5cGVdIHx8IFtdKS51bnNoaWZ0KGZ1bmMpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgYXBwZW5kXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoc3RydWN0dXJlW2RhdGFUeXBlXSA9IHN0cnVjdHVyZVtkYXRhVHlwZV0gfHwgW10pLnB1c2goZnVuYyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4vLyBCYXNlIGluc3BlY3Rpb24gZnVuY3Rpb24gZm9yIHByZWZpbHRlcnMgYW5kIHRyYW5zcG9ydHNcbiAgICBmdW5jdGlvbiBpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyhzdHJ1Y3R1cmUsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIpIHtcblxuICAgICAgICB2YXIgaW5zcGVjdGVkID0ge30sXG4gICAgICAgICAgICBzZWVraW5nVHJhbnNwb3J0ID0gKHN0cnVjdHVyZSA9PT0gdHJhbnNwb3J0cyk7XG5cbiAgICAgICAgZnVuY3Rpb24gaW5zcGVjdChkYXRhVHlwZSkge1xuICAgICAgICAgICAgdmFyIHNlbGVjdGVkO1xuICAgICAgICAgICAgaW5zcGVjdGVkW2RhdGFUeXBlXSA9IHRydWU7XG4gICAgICAgICAgICBqUXVlcnkuZWFjaChzdHJ1Y3R1cmVbZGF0YVR5cGVdIHx8IFtdLCBmdW5jdGlvbiAoXywgcHJlZmlsdGVyT3JGYWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlT3JUcmFuc3BvcnQgPSBwcmVmaWx0ZXJPckZhY3Rvcnkob3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUik7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhVHlwZU9yVHJhbnNwb3J0ID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgICAgICFzZWVraW5nVHJhbnNwb3J0ICYmICFpbnNwZWN0ZWRbZGF0YVR5cGVPclRyYW5zcG9ydF0pIHtcblxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmRhdGFUeXBlcy51bnNoaWZ0KGRhdGFUeXBlT3JUcmFuc3BvcnQpO1xuICAgICAgICAgICAgICAgICAgICBpbnNwZWN0KGRhdGFUeXBlT3JUcmFuc3BvcnQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWVraW5nVHJhbnNwb3J0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhKHNlbGVjdGVkID0gZGF0YVR5cGVPclRyYW5zcG9ydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zcGVjdChvcHRpb25zLmRhdGFUeXBlc1swXSkgfHwgIWluc3BlY3RlZFtcIipcIl0gJiYgaW5zcGVjdChcIipcIik7XG4gICAgfVxuXG4vLyBBIHNwZWNpYWwgZXh0ZW5kIGZvciBhamF4IG9wdGlvbnNcbi8vIHRoYXQgdGFrZXMgXCJmbGF0XCIgb3B0aW9ucyAobm90IHRvIGJlIGRlZXAgZXh0ZW5kZWQpXG4vLyBGaXhlcyAjOTg4N1xuICAgIGZ1bmN0aW9uIGFqYXhFeHRlbmQodGFyZ2V0LCBzcmMpIHtcbiAgICAgICAgdmFyIGtleSwgZGVlcCxcbiAgICAgICAgICAgIGZsYXRPcHRpb25zID0galF1ZXJ5LmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBmb3IgKGtleSBpbiBzcmMpIHtcbiAgICAgICAgICAgIGlmIChzcmNba2V5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgKGZsYXRPcHRpb25zW2tleV0gPyB0YXJnZXQgOiAoZGVlcCB8fCAoZGVlcCA9IHt9KSkpW2tleV0gPSBzcmNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgalF1ZXJ5LmV4dGVuZCh0cnVlLCB0YXJnZXQsIGRlZXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICAvKiBIYW5kbGVzIHJlc3BvbnNlcyB0byBhbiBhamF4IHJlcXVlc3Q6XG4gKiAtIGZpbmRzIHRoZSByaWdodCBkYXRhVHlwZSAobWVkaWF0ZXMgYmV0d2VlbiBjb250ZW50LXR5cGUgYW5kIGV4cGVjdGVkIGRhdGFUeXBlKVxuICogLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG4gKi9cbiAgICBmdW5jdGlvbiBhamF4SGFuZGxlUmVzcG9uc2VzKHMsIGpxWEhSLCByZXNwb25zZXMpIHtcblxuICAgICAgICB2YXIgY3QsIHR5cGUsIGZpbmFsRGF0YVR5cGUsIGZpcnN0RGF0YVR5cGUsXG4gICAgICAgICAgICBjb250ZW50cyA9IHMuY29udGVudHMsXG4gICAgICAgICAgICBkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcztcblxuICAgICAgICAvLyBSZW1vdmUgYXV0byBkYXRhVHlwZSBhbmQgZ2V0IGNvbnRlbnQtdHlwZSBpbiB0aGUgcHJvY2Vzc1xuICAgICAgICB3aGlsZSAoZGF0YVR5cGVzWzBdID09PSBcIipcIikge1xuICAgICAgICAgICAgZGF0YVR5cGVzLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAoY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGN0ID0gcy5taW1lVHlwZSB8fCBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlJ3JlIGRlYWxpbmcgd2l0aCBhIGtub3duIGNvbnRlbnQtdHlwZVxuICAgICAgICBpZiAoY3QpIHtcbiAgICAgICAgICAgIGZvciAodHlwZSBpbiBjb250ZW50cykge1xuICAgICAgICAgICAgICAgIGlmIChjb250ZW50c1t0eXBlXSAmJiBjb250ZW50c1t0eXBlXS50ZXN0KGN0KSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZXMudW5zaGlmdCh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSByZXNwb25zZSBmb3IgdGhlIGV4cGVjdGVkIGRhdGFUeXBlXG4gICAgICAgIGlmIChkYXRhVHlwZXNbMF0gaW4gcmVzcG9uc2VzKSB7XG4gICAgICAgICAgICBmaW5hbERhdGFUeXBlID0gZGF0YVR5cGVzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBUcnkgY29udmVydGlibGUgZGF0YVR5cGVzXG4gICAgICAgICAgICBmb3IgKHR5cGUgaW4gcmVzcG9uc2VzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhVHlwZXNbMF0gfHwgcy5jb252ZXJ0ZXJzW3R5cGUgKyBcIiBcIiArIGRhdGFUeXBlc1swXV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZmluYWxEYXRhVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZpcnN0RGF0YVR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmlyc3REYXRhVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBPciBqdXN0IHVzZSBmaXJzdCBvbmVcbiAgICAgICAgICAgIGZpbmFsRGF0YVR5cGUgPSBmaW5hbERhdGFUeXBlIHx8IGZpcnN0RGF0YVR5cGU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiB3ZSBmb3VuZCBhIGRhdGFUeXBlXG4gICAgICAgIC8vIFdlIGFkZCB0aGUgZGF0YVR5cGUgdG8gdGhlIGxpc3QgaWYgbmVlZGVkXG4gICAgICAgIC8vIGFuZCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2VcbiAgICAgICAgaWYgKGZpbmFsRGF0YVR5cGUpIHtcbiAgICAgICAgICAgIGlmIChmaW5hbERhdGFUeXBlICE9PSBkYXRhVHlwZXNbMF0pIHtcbiAgICAgICAgICAgICAgICBkYXRhVHlwZXMudW5zaGlmdChmaW5hbERhdGFUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZXNbZmluYWxEYXRhVHlwZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKiBDaGFpbiBjb252ZXJzaW9ucyBnaXZlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIG9yaWdpbmFsIHJlc3BvbnNlXG4gKiBBbHNvIHNldHMgdGhlIHJlc3BvbnNlWFhYIGZpZWxkcyBvbiB0aGUganFYSFIgaW5zdGFuY2VcbiAqL1xuICAgIGZ1bmN0aW9uIGFqYXhDb252ZXJ0KHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzKSB7XG4gICAgICAgIHZhciBjb252MiwgY3VycmVudCwgY29udiwgdG1wLCBwcmV2LFxuICAgICAgICAgICAgY29udmVydGVycyA9IHt9LFxuXG4gICAgICAgICAgICAvLyBXb3JrIHdpdGggYSBjb3B5IG9mIGRhdGFUeXBlcyBpbiBjYXNlIHdlIG5lZWQgdG8gbW9kaWZ5IGl0IGZvciBjb252ZXJzaW9uXG4gICAgICAgICAgICBkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcy5zbGljZSgpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBjb252ZXJ0ZXJzIG1hcCB3aXRoIGxvd2VyY2FzZWQga2V5c1xuICAgICAgICBpZiAoZGF0YVR5cGVzWzFdKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnYgaW4gcy5jb252ZXJ0ZXJzKSB7XG4gICAgICAgICAgICAgICAgY29udmVydGVyc1tjb252LnRvTG93ZXJDYXNlKCldID0gcy5jb252ZXJ0ZXJzW2NvbnZdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudCA9IGRhdGFUeXBlcy5zaGlmdCgpO1xuXG4gICAgICAgIC8vIENvbnZlcnQgdG8gZWFjaCBzZXF1ZW50aWFsIGRhdGFUeXBlXG4gICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG5cbiAgICAgICAgICAgIGlmIChzLnJlc3BvbnNlRmllbGRzW2N1cnJlbnRdKSB7XG4gICAgICAgICAgICAgICAganFYSFJbcy5yZXNwb25zZUZpZWxkc1tjdXJyZW50XV0gPSByZXNwb25zZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQXBwbHkgdGhlIGRhdGFGaWx0ZXIgaWYgcHJvdmlkZWRcbiAgICAgICAgICAgIGlmICghcHJldiAmJiBpc1N1Y2Nlc3MgJiYgcy5kYXRhRmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBzLmRhdGFGaWx0ZXIocmVzcG9uc2UsIHMuZGF0YVR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcmV2ID0gY3VycmVudDtcbiAgICAgICAgICAgIGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuICAgICAgICAgICAgaWYgKGN1cnJlbnQpIHtcblxuICAgICAgICAgICAgICAgIC8vIFRoZXJlJ3Mgb25seSB3b3JrIHRvIGRvIGlmIGN1cnJlbnQgZGF0YVR5cGUgaXMgbm9uLWF1dG9cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudCA9PT0gXCIqXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gcHJldjtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHJlc3BvbnNlIGlmIHByZXYgZGF0YVR5cGUgaXMgbm9uLWF1dG8gYW5kIGRpZmZlcnMgZnJvbSBjdXJyZW50XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmV2ICE9PSBcIipcIiAmJiBwcmV2ICE9PSBjdXJyZW50KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU2VlayBhIGRpcmVjdCBjb252ZXJ0ZXJcbiAgICAgICAgICAgICAgICAgICAgY29udiA9IGNvbnZlcnRlcnNbcHJldiArIFwiIFwiICsgY3VycmVudF0gfHwgY29udmVydGVyc1tcIiogXCIgKyBjdXJyZW50XTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBub25lIGZvdW5kLCBzZWVrIGEgcGFpclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29udjIgaW4gY29udmVydGVycykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgY29udjIgb3V0cHV0cyBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG1wID0gY29udjIuc3BsaXQoXCIgXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0bXBbMV0gPT09IGN1cnJlbnQpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBwcmV2IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYWNjZXB0ZWQgaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udiA9IGNvbnZlcnRlcnNbcHJldiArIFwiIFwiICsgdG1wWzBdXSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udmVydGVyc1tcIiogXCIgKyB0bXBbMF1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udikge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDb25kZW5zZSBlcXVpdmFsZW5jZSBjb252ZXJ0ZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udiA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnYgPSBjb252ZXJ0ZXJzW2NvbnYyXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgaW5zZXJ0IHRoZSBpbnRlcm1lZGlhdGUgZGF0YVR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29udmVydGVyc1tjb252Ml0gIT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gdG1wWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFUeXBlcy51bnNoaWZ0KHRtcFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIEFwcGx5IGNvbnZlcnRlciAoaWYgbm90IGFuIGVxdWl2YWxlbmNlKVxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udiAhPT0gdHJ1ZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBVbmxlc3MgZXJyb3JzIGFyZSBhbGxvd2VkIHRvIGJ1YmJsZSwgY2F0Y2ggYW5kIHJldHVybiB0aGVtXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udiAmJiBzLnRocm93cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gY29udihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gY29udihyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IFwicGFyc2VyZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBjb252ID8gZSA6IFwiTm8gY29udmVyc2lvbiBmcm9tIFwiICsgcHJldiArIFwiIHRvIFwiICsgY3VycmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7c3RhdGU6IFwic3VjY2Vzc1wiLCBkYXRhOiByZXNwb25zZX07XG4gICAgfVxuXG4gICAgalF1ZXJ5LmV4dGVuZCh7XG5cbiAgICAgICAgLy8gQ291bnRlciBmb3IgaG9sZGluZyB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBxdWVyaWVzXG4gICAgICAgIGFjdGl2ZTogMCxcblxuICAgICAgICAvLyBMYXN0LU1vZGlmaWVkIGhlYWRlciBjYWNoZSBmb3IgbmV4dCByZXF1ZXN0XG4gICAgICAgIGxhc3RNb2RpZmllZDoge30sXG4gICAgICAgIGV0YWc6IHt9LFxuXG4gICAgICAgIGFqYXhTZXR0aW5nczoge1xuICAgICAgICAgICAgdXJsOiBsb2NhdGlvbi5ocmVmLFxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcbiAgICAgICAgICAgIGlzTG9jYWw6IHJsb2NhbFByb3RvY29sLnRlc3QobG9jYXRpb24ucHJvdG9jb2wpLFxuICAgICAgICAgICAgZ2xvYmFsOiB0cnVlLFxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IHRydWUsXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLFxuXG4gICAgICAgICAgICAvKlxuXHRcdHRpbWVvdXQ6IDAsXG5cdFx0ZGF0YTogbnVsbCxcblx0XHRkYXRhVHlwZTogbnVsbCxcblx0XHR1c2VybmFtZTogbnVsbCxcblx0XHRwYXNzd29yZDogbnVsbCxcblx0XHRjYWNoZTogbnVsbCxcblx0XHR0aHJvd3M6IGZhbHNlLFxuXHRcdHRyYWRpdGlvbmFsOiBmYWxzZSxcblx0XHRoZWFkZXJzOiB7fSxcblx0XHQqL1xuXG4gICAgICAgICAgICBhY2NlcHRzOiB7XG4gICAgICAgICAgICAgICAgXCIqXCI6IGFsbFR5cGVzLFxuICAgICAgICAgICAgICAgIHRleHQ6IFwidGV4dC9wbGFpblwiLFxuICAgICAgICAgICAgICAgIGh0bWw6IFwidGV4dC9odG1sXCIsXG4gICAgICAgICAgICAgICAgeG1sOiBcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixcbiAgICAgICAgICAgICAgICBqc29uOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwiXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjb250ZW50czoge1xuICAgICAgICAgICAgICAgIHhtbDogL1xcYnhtbFxcYi8sXG4gICAgICAgICAgICAgICAgaHRtbDogL1xcYmh0bWwvLFxuICAgICAgICAgICAgICAgIGpzb246IC9cXGJqc29uXFxiL1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzcG9uc2VGaWVsZHM6IHtcbiAgICAgICAgICAgICAgICB4bWw6IFwicmVzcG9uc2VYTUxcIixcbiAgICAgICAgICAgICAgICB0ZXh0OiBcInJlc3BvbnNlVGV4dFwiLFxuICAgICAgICAgICAgICAgIGpzb246IFwicmVzcG9uc2VKU09OXCJcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIERhdGEgY29udmVydGVyc1xuICAgICAgICAgICAgLy8gS2V5cyBzZXBhcmF0ZSBzb3VyY2UgKG9yIGNhdGNoYWxsIFwiKlwiKSBhbmQgZGVzdGluYXRpb24gdHlwZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuICAgICAgICAgICAgY29udmVydGVyczoge1xuXG4gICAgICAgICAgICAgICAgLy8gQ29udmVydCBhbnl0aGluZyB0byB0ZXh0XG4gICAgICAgICAgICAgICAgXCIqIHRleHRcIjogU3RyaW5nLFxuXG4gICAgICAgICAgICAgICAgLy8gVGV4dCB0byBodG1sICh0cnVlID0gbm8gdHJhbnNmb3JtYXRpb24pXG4gICAgICAgICAgICAgICAgXCJ0ZXh0IGh0bWxcIjogdHJ1ZSxcblxuICAgICAgICAgICAgICAgIC8vIEV2YWx1YXRlIHRleHQgYXMgYSBqc29uIGV4cHJlc3Npb25cbiAgICAgICAgICAgICAgICBcInRleHQganNvblwiOiBKU09OLnBhcnNlLFxuXG4gICAgICAgICAgICAgICAgLy8gUGFyc2UgdGV4dCBhcyB4bWxcbiAgICAgICAgICAgICAgICBcInRleHQgeG1sXCI6IGpRdWVyeS5wYXJzZVhNTFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gRm9yIG9wdGlvbnMgdGhhdCBzaG91bGRuJ3QgYmUgZGVlcCBleHRlbmRlZDpcbiAgICAgICAgICAgIC8vIHlvdSBjYW4gYWRkIHlvdXIgb3duIGN1c3RvbSBvcHRpb25zIGhlcmUgaWZcbiAgICAgICAgICAgIC8vIGFuZCB3aGVuIHlvdSBjcmVhdGUgb25lIHRoYXQgc2hvdWxkbid0IGJlXG4gICAgICAgICAgICAvLyBkZWVwIGV4dGVuZGVkIChzZWUgYWpheEV4dGVuZClcbiAgICAgICAgICAgIGZsYXRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgdXJsOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRleHQ6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvLyBDcmVhdGVzIGEgZnVsbCBmbGVkZ2VkIHNldHRpbmdzIG9iamVjdCBpbnRvIHRhcmdldFxuICAgICAgICAvLyB3aXRoIGJvdGggYWpheFNldHRpbmdzIGFuZCBzZXR0aW5ncyBmaWVsZHMuXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBvbWl0dGVkLCB3cml0ZXMgaW50byBhamF4U2V0dGluZ3MuXG4gICAgICAgIGFqYXhTZXR1cDogZnVuY3Rpb24gKHRhcmdldCwgc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBzZXR0aW5ncyA/XG5cbiAgICAgICAgICAgICAgICAvLyBCdWlsZGluZyBhIHNldHRpbmdzIG9iamVjdFxuICAgICAgICAgICAgICAgIGFqYXhFeHRlbmQoYWpheEV4dGVuZCh0YXJnZXQsIGpRdWVyeS5hamF4U2V0dGluZ3MpLCBzZXR0aW5ncykgOlxuXG4gICAgICAgICAgICAgICAgLy8gRXh0ZW5kaW5nIGFqYXhTZXR0aW5nc1xuICAgICAgICAgICAgICAgIGFqYXhFeHRlbmQoalF1ZXJ5LmFqYXhTZXR0aW5ncywgdGFyZ2V0KTtcbiAgICAgICAgfSxcblxuICAgICAgICBhamF4UHJlZmlsdGVyOiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMocHJlZmlsdGVycyksXG4gICAgICAgIGFqYXhUcmFuc3BvcnQ6IGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyh0cmFuc3BvcnRzKSxcblxuICAgICAgICAvLyBNYWluIG1ldGhvZFxuICAgICAgICBhamF4OiBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG5cbiAgICAgICAgICAgIC8vIElmIHVybCBpcyBhbiBvYmplY3QsIHNpbXVsYXRlIHByZS0xLjUgc2lnbmF0dXJlXG4gICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB1cmw7XG4gICAgICAgICAgICAgICAgdXJsID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGb3JjZSBvcHRpb25zIHRvIGJlIGFuIG9iamVjdFxuICAgICAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgICAgIHZhciB0cmFuc3BvcnQsXG5cbiAgICAgICAgICAgICAgICAvLyBVUkwgd2l0aG91dCBhbnRpLWNhY2hlIHBhcmFtXG4gICAgICAgICAgICAgICAgY2FjaGVVUkwsXG5cbiAgICAgICAgICAgICAgICAvLyBSZXNwb25zZSBoZWFkZXJzXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VIZWFkZXJzU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlSGVhZGVycyxcblxuICAgICAgICAgICAgICAgIC8vIHRpbWVvdXQgaGFuZGxlXG4gICAgICAgICAgICAgICAgdGltZW91dFRpbWVyLFxuXG4gICAgICAgICAgICAgICAgLy8gVXJsIGNsZWFudXAgdmFyXG4gICAgICAgICAgICAgICAgdXJsQW5jaG9yLFxuXG4gICAgICAgICAgICAgICAgLy8gUmVxdWVzdCBzdGF0ZSAoYmVjb21lcyBmYWxzZSB1cG9uIHNlbmQgYW5kIHRydWUgdXBvbiBjb21wbGV0aW9uKVxuICAgICAgICAgICAgICAgIGNvbXBsZXRlZCxcblxuICAgICAgICAgICAgICAgIC8vIFRvIGtub3cgaWYgZ2xvYmFsIGV2ZW50cyBhcmUgdG8gYmUgZGlzcGF0Y2hlZFxuICAgICAgICAgICAgICAgIGZpcmVHbG9iYWxzLFxuXG4gICAgICAgICAgICAgICAgLy8gTG9vcCB2YXJpYWJsZVxuICAgICAgICAgICAgICAgIGksXG5cbiAgICAgICAgICAgICAgICAvLyB1bmNhY2hlZCBwYXJ0IG9mIHRoZSB1cmxcbiAgICAgICAgICAgICAgICB1bmNhY2hlZCxcblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgZmluYWwgb3B0aW9ucyBvYmplY3RcbiAgICAgICAgICAgICAgICBzID0galF1ZXJ5LmFqYXhTZXR1cCh7fSwgb3B0aW9ucyksXG5cbiAgICAgICAgICAgICAgICAvLyBDYWxsYmFja3MgY29udGV4dFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrQ29udGV4dCA9IHMuY29udGV4dCB8fCBzLFxuXG4gICAgICAgICAgICAgICAgLy8gQ29udGV4dCBmb3IgZ2xvYmFsIGV2ZW50cyBpcyBjYWxsYmFja0NvbnRleHQgaWYgaXQgaXMgYSBET00gbm9kZSBvciBqUXVlcnkgY29sbGVjdGlvblxuICAgICAgICAgICAgICAgIGdsb2JhbEV2ZW50Q29udGV4dCA9IHMuY29udGV4dCAmJlxuICAgICAgICAgICAgICAgIChjYWxsYmFja0NvbnRleHQubm9kZVR5cGUgfHwgY2FsbGJhY2tDb250ZXh0LmpxdWVyeSkgP1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoY2FsbGJhY2tDb250ZXh0KSA6XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeS5ldmVudCxcblxuICAgICAgICAgICAgICAgIC8vIERlZmVycmVkc1xuICAgICAgICAgICAgICAgIGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCksXG4gICAgICAgICAgICAgICAgY29tcGxldGVEZWZlcnJlZCA9IGpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcblxuICAgICAgICAgICAgICAgIC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgc3RhdHVzQ29kZSA9IHMuc3RhdHVzQ29kZSB8fCB7fSxcblxuICAgICAgICAgICAgICAgIC8vIEhlYWRlcnMgKHRoZXkgYXJlIHNlbnQgYWxsIGF0IG9uY2UpXG4gICAgICAgICAgICAgICAgcmVxdWVzdEhlYWRlcnMgPSB7fSxcbiAgICAgICAgICAgICAgICByZXF1ZXN0SGVhZGVyc05hbWVzID0ge30sXG5cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IGFib3J0IG1lc3NhZ2VcbiAgICAgICAgICAgICAgICBzdHJBYm9ydCA9IFwiY2FuY2VsZWRcIixcblxuICAgICAgICAgICAgICAgIC8vIEZha2UgeGhyXG4gICAgICAgICAgICAgICAganFYSFIgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlYWR5U3RhdGU6IDAsXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGRzIGhlYWRlcnMgaGFzaHRhYmxlIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICBnZXRSZXNwb25zZUhlYWRlcjogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2VIZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlSGVhZGVycyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKG1hdGNoID0gcmhlYWRlcnMuZXhlYyhyZXNwb25zZUhlYWRlcnNTdHJpbmcpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VIZWFkZXJzW21hdGNoWzFdLnRvTG93ZXJDYXNlKCldID0gbWF0Y2hbMl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2ggPSByZXNwb25zZUhlYWRlcnNba2V5LnRvTG93ZXJDYXNlKCldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoID09IG51bGwgPyBudWxsIDogbWF0Y2g7XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmF3IHN0cmluZ1xuICAgICAgICAgICAgICAgICAgICBnZXRBbGxSZXNwb25zZUhlYWRlcnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjb21wbGV0ZWQgPyByZXNwb25zZUhlYWRlcnNTdHJpbmcgOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIC8vIENhY2hlcyB0aGUgaGVhZGVyXG4gICAgICAgICAgICAgICAgICAgIHNldFJlcXVlc3RIZWFkZXI6IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IHJlcXVlc3RIZWFkZXJzTmFtZXNbbmFtZS50b0xvd2VyQ2FzZSgpXSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RIZWFkZXJzTmFtZXNbbmFtZS50b0xvd2VyQ2FzZSgpXSB8fCBuYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RIZWFkZXJzW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBPdmVycmlkZXMgcmVzcG9uc2UgY29udGVudC10eXBlIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICBvdmVycmlkZU1pbWVUeXBlOiBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcy5taW1lVHlwZSA9IHR5cGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlOiBmdW5jdGlvbiAobWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRXhlY3V0ZSB0aGUgYXBwcm9wcmlhdGUgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpxWEhSLmFsd2F5cyhtYXBbanFYSFIuc3RhdHVzXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXp5LWFkZCB0aGUgbmV3IGNhbGxiYWNrcyBpbiBhIHdheSB0aGF0IHByZXNlcnZlcyBvbGQgb25lc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvZGUgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNDb2RlW2NvZGVdID0gW3N0YXR1c0NvZGVbY29kZV0sIG1hcFtjb2RlXV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBDYW5jZWwgdGhlIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIChzdGF0dXNUZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmluYWxUZXh0ID0gc3RhdHVzVGV4dCB8fCBzdHJBYm9ydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cmFuc3BvcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQuYWJvcnQoZmluYWxUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoMCwgZmluYWxUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gQXR0YWNoIGRlZmVycmVkc1xuICAgICAgICAgICAgZGVmZXJyZWQucHJvbWlzZShqcVhIUik7XG5cbiAgICAgICAgICAgIC8vIEFkZCBwcm90b2NvbCBpZiBub3QgcHJvdmlkZWQgKHByZWZpbHRlcnMgbWlnaHQgZXhwZWN0IGl0KVxuICAgICAgICAgICAgLy8gSGFuZGxlIGZhbHN5IHVybCBpbiB0aGUgc2V0dGluZ3Mgb2JqZWN0ICgjMTAwOTM6IGNvbnNpc3RlbmN5IHdpdGggb2xkIHNpZ25hdHVyZSlcbiAgICAgICAgICAgIC8vIFdlIGFsc28gdXNlIHRoZSB1cmwgcGFyYW1ldGVyIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgcy51cmwgPSAoKHVybCB8fCBzLnVybCB8fCBsb2NhdGlvbi5ocmVmKSArIFwiXCIpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UocnByb3RvY29sLCBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIik7XG5cbiAgICAgICAgICAgIC8vIEFsaWFzIG1ldGhvZCBvcHRpb24gdG8gdHlwZSBhcyBwZXIgdGlja2V0ICMxMjAwNFxuICAgICAgICAgICAgcy50eXBlID0gb3B0aW9ucy5tZXRob2QgfHwgb3B0aW9ucy50eXBlIHx8IHMubWV0aG9kIHx8IHMudHlwZTtcblxuICAgICAgICAgICAgLy8gRXh0cmFjdCBkYXRhVHlwZXMgbGlzdFxuICAgICAgICAgICAgcy5kYXRhVHlwZXMgPSAocy5kYXRhVHlwZSB8fCBcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChybm90aHRtbHdoaXRlKSB8fCBbXCJcIl07XG5cbiAgICAgICAgICAgIC8vIEEgY3Jvc3MtZG9tYWluIHJlcXVlc3QgaXMgaW4gb3JkZXIgd2hlbiB0aGUgb3JpZ2luIGRvZXNuJ3QgbWF0Y2ggdGhlIGN1cnJlbnQgb3JpZ2luLlxuICAgICAgICAgICAgaWYgKHMuY3Jvc3NEb21haW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHVybEFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgPD04IC0gMTEsIEVkZ2UgMTIgLSAxNVxuICAgICAgICAgICAgICAgIC8vIElFIHRocm93cyBleGNlcHRpb24gb24gYWNjZXNzaW5nIHRoZSBocmVmIHByb3BlcnR5IGlmIHVybCBpcyBtYWxmb3JtZWQsXG4gICAgICAgICAgICAgICAgLy8gZS5nLiBodHRwOi8vZXhhbXBsZS5jb206ODB4L1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHVybEFuY2hvci5ocmVmID0gcy51cmw7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgPD04IC0gMTEgb25seVxuICAgICAgICAgICAgICAgICAgICAvLyBBbmNob3IncyBob3N0IHByb3BlcnR5IGlzbid0IGNvcnJlY3RseSBzZXQgd2hlbiBzLnVybCBpcyByZWxhdGl2ZVxuICAgICAgICAgICAgICAgICAgICB1cmxBbmNob3IuaHJlZiA9IHVybEFuY2hvci5ocmVmO1xuICAgICAgICAgICAgICAgICAgICBzLmNyb3NzRG9tYWluID0gb3JpZ2luQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgb3JpZ2luQW5jaG9yLmhvc3QgIT09XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxBbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmxBbmNob3IuaG9zdDtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgaXMgYW4gZXJyb3IgcGFyc2luZyB0aGUgVVJMLCBhc3N1bWUgaXQgaXMgY3Jvc3NEb21haW4sXG4gICAgICAgICAgICAgICAgICAgIC8vIGl0IGNhbiBiZSByZWplY3RlZCBieSB0aGUgdHJhbnNwb3J0IGlmIGl0IGlzIGludmFsaWRcbiAgICAgICAgICAgICAgICAgICAgcy5jcm9zc0RvbWFpbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IGRhdGEgaWYgbm90IGFscmVhZHkgYSBzdHJpbmdcbiAgICAgICAgICAgIGlmIChzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJiB0eXBlb2Ygcy5kYXRhICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcy5kYXRhID0galF1ZXJ5LnBhcmFtKHMuZGF0YSwgcy50cmFkaXRpb25hbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFwcGx5IHByZWZpbHRlcnNcbiAgICAgICAgICAgIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKHByZWZpbHRlcnMsIHMsIG9wdGlvbnMsIGpxWEhSKTtcblxuICAgICAgICAgICAgLy8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYSBwcmVmaWx0ZXIsIHN0b3AgdGhlcmVcbiAgICAgICAgICAgIGlmIChjb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ganFYSFI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdlIGNhbiBmaXJlIGdsb2JhbCBldmVudHMgYXMgb2Ygbm93IGlmIGFza2VkIHRvXG4gICAgICAgICAgICAvLyBEb24ndCBmaXJlIGV2ZW50cyBpZiBqUXVlcnkuZXZlbnQgaXMgdW5kZWZpbmVkIGluIGFuIEFNRC11c2FnZSBzY2VuYXJpbyAoIzE1MTE4KVxuICAgICAgICAgICAgZmlyZUdsb2JhbHMgPSBqUXVlcnkuZXZlbnQgJiYgcy5nbG9iYWw7XG5cbiAgICAgICAgICAgIC8vIFdhdGNoIGZvciBhIG5ldyBzZXQgb2YgcmVxdWVzdHNcbiAgICAgICAgICAgIGlmIChmaXJlR2xvYmFscyAmJiBqUXVlcnkuYWN0aXZlKysgPT09IDApIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBwZXJjYXNlIHRoZSB0eXBlXG4gICAgICAgICAgICBzLnR5cGUgPSBzLnR5cGUudG9VcHBlckNhc2UoKTtcblxuICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIGlmIHJlcXVlc3QgaGFzIGNvbnRlbnRcbiAgICAgICAgICAgIHMuaGFzQ29udGVudCA9ICFybm9Db250ZW50LnRlc3Qocy50eXBlKTtcblxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgVVJMIGluIGNhc2Ugd2UncmUgdG95aW5nIHdpdGggdGhlIElmLU1vZGlmaWVkLVNpbmNlXG4gICAgICAgICAgICAvLyBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIgbGF0ZXIgb25cbiAgICAgICAgICAgIC8vIFJlbW92ZSBoYXNoIHRvIHNpbXBsaWZ5IHVybCBtYW5pcHVsYXRpb25cbiAgICAgICAgICAgIGNhY2hlVVJMID0gcy51cmwucmVwbGFjZShyaGFzaCwgXCJcIik7XG5cbiAgICAgICAgICAgIC8vIE1vcmUgb3B0aW9ucyBoYW5kbGluZyBmb3IgcmVxdWVzdHMgd2l0aCBubyBjb250ZW50XG4gICAgICAgICAgICBpZiAoIXMuaGFzQ29udGVudCkge1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhlIGhhc2ggc28gd2UgY2FuIHB1dCBpdCBiYWNrXG4gICAgICAgICAgICAgICAgdW5jYWNoZWQgPSBzLnVybC5zbGljZShjYWNoZVVSTC5sZW5ndGgpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgZGF0YSBpcyBhdmFpbGFibGUgYW5kIHNob3VsZCBiZSBwcm9jZXNzZWQsIGFwcGVuZCBkYXRhIHRvIHVybFxuICAgICAgICAgICAgICAgIGlmIChzLmRhdGEgJiYgKHMucHJvY2Vzc0RhdGEgfHwgdHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVVUkwgKz0gKHJxdWVyeS50ZXN0KGNhY2hlVVJMKSA/IFwiJlwiIDogXCI/XCIpICsgcy5kYXRhO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vICM5NjgyOiByZW1vdmUgZGF0YSBzbyB0aGF0IGl0J3Mgbm90IHVzZWQgaW4gYW4gZXZlbnR1YWwgcmV0cnlcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHMuZGF0YTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgb3IgdXBkYXRlIGFudGktY2FjaGUgcGFyYW0gaWYgbmVlZGVkXG4gICAgICAgICAgICAgICAgaWYgKHMuY2FjaGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhY2hlVVJMID0gY2FjaGVVUkwucmVwbGFjZShyYW50aUNhY2hlLCBcIiQxXCIpO1xuICAgICAgICAgICAgICAgICAgICB1bmNhY2hlZCA9IChycXVlcnkudGVzdChjYWNoZVVSTCkgPyBcIiZcIiA6IFwiP1wiKSArIFwiXz1cIiArIChub25jZSsrKSArIHVuY2FjaGVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFB1dCBoYXNoIGFuZCBhbnRpLWNhY2hlIG9uIHRoZSBVUkwgdGhhdCB3aWxsIGJlIHJlcXVlc3RlZCAoZ2gtMTczMilcbiAgICAgICAgICAgICAgICBzLnVybCA9IGNhY2hlVVJMICsgdW5jYWNoZWQ7XG5cbiAgICAgICAgICAgICAgICAvLyBDaGFuZ2UgJyUyMCcgdG8gJysnIGlmIHRoaXMgaXMgZW5jb2RlZCBmb3JtIGJvZHkgY29udGVudCAoZ2gtMjY1OClcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiZcbiAgICAgICAgICAgICAgICAocy5jb250ZW50VHlwZSB8fCBcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcy5kYXRhID0gcy5kYXRhLnJlcGxhY2UocjIwLCBcIitcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG4gICAgICAgICAgICBpZiAocy5pZk1vZGlmaWVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGpRdWVyeS5sYXN0TW9kaWZpZWRbY2FjaGVVUkxdKSB7XG4gICAgICAgICAgICAgICAgICAgIGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLCBqUXVlcnkubGFzdE1vZGlmaWVkW2NhY2hlVVJMXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChqUXVlcnkuZXRhZ1tjYWNoZVVSTF0pIHtcbiAgICAgICAgICAgICAgICAgICAganFYSFIuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIiwgalF1ZXJ5LmV0YWdbY2FjaGVVUkxdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgY29ycmVjdCBoZWFkZXIsIGlmIGRhdGEgaXMgYmVpbmcgc2VudFxuICAgICAgICAgICAgaWYgKHMuZGF0YSAmJiBzLmhhc0NvbnRlbnQgJiYgcy5jb250ZW50VHlwZSAhPT0gZmFsc2UgfHwgb3B0aW9ucy5jb250ZW50VHlwZSkge1xuICAgICAgICAgICAgICAgIGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgcy5jb250ZW50VHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFNldCB0aGUgQWNjZXB0cyBoZWFkZXIgZm9yIHRoZSBzZXJ2ZXIsIGRlcGVuZGluZyBvbiB0aGUgZGF0YVR5cGVcbiAgICAgICAgICAgIGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoXG4gICAgICAgICAgICAgICAgXCJBY2NlcHRcIixcbiAgICAgICAgICAgICAgICBzLmRhdGFUeXBlc1swXSAmJiBzLmFjY2VwdHNbcy5kYXRhVHlwZXNbMF1dID9cbiAgICAgICAgICAgICAgICAgICAgcy5hY2NlcHRzW3MuZGF0YVR5cGVzWzBdXSArXG4gICAgICAgICAgICAgICAgICAgIChzLmRhdGFUeXBlc1swXSAhPT0gXCIqXCIgPyBcIiwgXCIgKyBhbGxUeXBlcyArIFwiOyBxPTAuMDFcIiA6IFwiXCIpIDpcbiAgICAgICAgICAgICAgICAgICAgcy5hY2NlcHRzW1wiKlwiXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGhlYWRlcnMgb3B0aW9uXG4gICAgICAgICAgICBmb3IgKGkgaW4gcy5oZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAganFYSFIuc2V0UmVxdWVzdEhlYWRlcihpLCBzLmhlYWRlcnNbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBBbGxvdyBjdXN0b20gaGVhZGVycy9taW1ldHlwZXMgYW5kIGVhcmx5IGFib3J0XG4gICAgICAgICAgICBpZiAocy5iZWZvcmVTZW5kICYmXG4gICAgICAgICAgICAgICAgKHMuYmVmb3JlU2VuZC5jYWxsKGNhbGxiYWNrQ29udGV4dCwganFYSFIsIHMpID09PSBmYWxzZSB8fCBjb21wbGV0ZWQpKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBBYm9ydCBpZiBub3QgZG9uZSBhbHJlYWR5IGFuZCByZXR1cm5cbiAgICAgICAgICAgICAgICByZXR1cm4ganFYSFIuYWJvcnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQWJvcnRpbmcgaXMgbm8gbG9uZ2VyIGEgY2FuY2VsbGF0aW9uXG4gICAgICAgICAgICBzdHJBYm9ydCA9IFwiYWJvcnRcIjtcblxuICAgICAgICAgICAgLy8gSW5zdGFsbCBjYWxsYmFja3Mgb24gZGVmZXJyZWRzXG4gICAgICAgICAgICBjb21wbGV0ZURlZmVycmVkLmFkZChzLmNvbXBsZXRlKTtcbiAgICAgICAgICAgIGpxWEhSLmRvbmUocy5zdWNjZXNzKTtcbiAgICAgICAgICAgIGpxWEhSLmZhaWwocy5lcnJvcik7XG5cbiAgICAgICAgICAgIC8vIEdldCB0cmFuc3BvcnRcbiAgICAgICAgICAgIHRyYW5zcG9ydCA9IGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKHRyYW5zcG9ydHMsIHMsIG9wdGlvbnMsIGpxWEhSKTtcblxuICAgICAgICAgICAgLy8gSWYgbm8gdHJhbnNwb3J0LCB3ZSBhdXRvLWFib3J0XG4gICAgICAgICAgICBpZiAoIXRyYW5zcG9ydCkge1xuICAgICAgICAgICAgICAgIGRvbmUoLTEsIFwiTm8gVHJhbnNwb3J0XCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBqcVhIUi5yZWFkeVN0YXRlID0gMTtcblxuICAgICAgICAgICAgICAgIC8vIFNlbmQgZ2xvYmFsIGV2ZW50XG4gICAgICAgICAgICAgICAgaWYgKGZpcmVHbG9iYWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKFwiYWpheFNlbmRcIiwgW2pxWEhSLCBzXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYWpheFNlbmQsIHN0b3AgdGhlcmVcbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBqcVhIUjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUaW1lb3V0XG4gICAgICAgICAgICAgICAgaWYgKHMuYXN5bmMgJiYgcy50aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0VGltZXIgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqcVhIUi5hYm9ydChcInRpbWVvdXRcIik7XG4gICAgICAgICAgICAgICAgICAgIH0sIHMudGltZW91dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zcG9ydC5zZW5kKHJlcXVlc3RIZWFkZXJzLCBkb25lKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmV0aHJvdyBwb3N0LWNvbXBsZXRpb24gZXhjZXB0aW9uc1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUHJvcGFnYXRlIG90aGVycyBhcyByZXN1bHRzXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoLTEsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2FsbGJhY2sgZm9yIHdoZW4gZXZlcnl0aGluZyBpcyBkb25lXG4gICAgICAgICAgICBmdW5jdGlvbiBkb25lKHN0YXR1cywgbmF0aXZlU3RhdHVzVGV4dCwgcmVzcG9uc2VzLCBoZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzU3VjY2Vzcywgc3VjY2VzcywgZXJyb3IsIHJlc3BvbnNlLCBtb2RpZmllZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IG5hdGl2ZVN0YXR1c1RleHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgcmVwZWF0IGludm9jYXRpb25zXG4gICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29tcGxldGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgIC8vIENsZWFyIHRpbWVvdXQgaWYgaXQgZXhpc3RzXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXRUaW1lcikge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXRUaW1lcik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRGVyZWZlcmVuY2UgdHJhbnNwb3J0IGZvciBlYXJseSBnYXJiYWdlIGNvbGxlY3Rpb25cbiAgICAgICAgICAgICAgICAvLyAobm8gbWF0dGVyIGhvdyBsb25nIHRoZSBqcVhIUiBvYmplY3Qgd2lsbCBiZSB1c2VkKVxuICAgICAgICAgICAgICAgIHRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgICAgIC8vIENhY2hlIHJlc3BvbnNlIGhlYWRlcnNcbiAgICAgICAgICAgICAgICByZXNwb25zZUhlYWRlcnNTdHJpbmcgPSBoZWFkZXJzIHx8IFwiXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgcmVhZHlTdGF0ZVxuICAgICAgICAgICAgICAgIGpxWEhSLnJlYWR5U3RhdGUgPSBzdGF0dXMgPiAwID8gNCA6IDA7XG5cbiAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgaWYgc3VjY2Vzc2Z1bFxuICAgICAgICAgICAgICAgIGlzU3VjY2VzcyA9IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwIHx8IHN0YXR1cyA9PT0gMzA0O1xuXG4gICAgICAgICAgICAgICAgLy8gR2V0IHJlc3BvbnNlIGRhdGFcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlID0gYWpheEhhbmRsZVJlc3BvbnNlcyhzLCBqcVhIUiwgcmVzcG9uc2VzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IG5vIG1hdHRlciB3aGF0ICh0aGF0IHdheSByZXNwb25zZVhYWCBmaWVsZHMgYXJlIGFsd2F5cyBzZXQpXG4gICAgICAgICAgICAgICAgcmVzcG9uc2UgPSBhamF4Q29udmVydChzLCByZXNwb25zZSwganFYSFIsIGlzU3VjY2Vzcyk7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBzdWNjZXNzZnVsLCBoYW5kbGUgdHlwZSBjaGFpbmluZ1xuICAgICAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIElmLU1vZGlmaWVkLVNpbmNlIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciwgaWYgaW4gaWZNb2RpZmllZCBtb2RlLlxuICAgICAgICAgICAgICAgICAgICBpZiAocy5pZk1vZGlmaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCA9IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmllZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5sYXN0TW9kaWZpZWRbY2FjaGVVUkxdID0gbW9kaWZpZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZCA9IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmllZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5ldGFnW2NhY2hlVVJMXSA9IG1vZGlmaWVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbm8gY29udGVudFxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSAyMDQgfHwgcy50eXBlID09PSBcIkhFQURcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IFwibm9jb250ZW50XCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vdCBtb2RpZmllZFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gMzA0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gXCJub3Rtb2RpZmllZFwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGRhdGEsIGxldCdzIGNvbnZlcnQgaXRcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSByZXNwb25zZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSByZXNwb25zZS5lcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU3VjY2VzcyA9ICFlcnJvcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBlcnJvciBmcm9tIHN0YXR1c1RleHQgYW5kIG5vcm1hbGl6ZSBmb3Igbm9uLWFib3J0c1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHN0YXR1c1RleHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgfHwgIXN0YXR1c1RleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBcImVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgZGF0YSBmb3IgdGhlIGZha2UgeGhyIG9iamVjdFxuICAgICAgICAgICAgICAgIGpxWEhSLnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgICAgICAgICBqcVhIUi5zdGF0dXNUZXh0ID0gKG5hdGl2ZVN0YXR1c1RleHQgfHwgc3RhdHVzVGV4dCkgKyBcIlwiO1xuXG4gICAgICAgICAgICAgICAgLy8gU3VjY2Vzcy9FcnJvclxuICAgICAgICAgICAgICAgIGlmIChpc1N1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmZXJyZWQucmVzb2x2ZVdpdGgoY2FsbGJhY2tDb250ZXh0LCBbc3VjY2Vzcywgc3RhdHVzVGV4dCwganFYSFJdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZWplY3RXaXRoKGNhbGxiYWNrQ29udGV4dCwgW2pxWEhSLCBzdGF0dXNUZXh0LCBlcnJvcl0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAganFYSFIuc3RhdHVzQ29kZShzdGF0dXNDb2RlKTtcbiAgICAgICAgICAgICAgICBzdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpcmVHbG9iYWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKGlzU3VjY2VzcyA/IFwiYWpheFN1Y2Nlc3NcIiA6IFwiYWpheEVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbanFYSFIsIHMsIGlzU3VjY2VzcyA/IHN1Y2Nlc3MgOiBlcnJvcl0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENvbXBsZXRlXG4gICAgICAgICAgICAgICAgY29tcGxldGVEZWZlcnJlZC5maXJlV2l0aChjYWxsYmFja0NvbnRleHQsIFtqcVhIUiwgc3RhdHVzVGV4dF0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGZpcmVHbG9iYWxzKSB7XG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsIFtqcVhIUiwgc10pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgZ2xvYmFsIEFKQVggY291bnRlclxuICAgICAgICAgICAgICAgICAgICBpZiAoISgtLWpRdWVyeS5hY3RpdmUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ganFYSFI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ2V0SlNPTjogZnVuY3Rpb24gKHVybCwgZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHJldHVybiBqUXVlcnkuZ2V0KHVybCwgZGF0YSwgY2FsbGJhY2ssIFwianNvblwiKTtcbiAgICAgICAgfSxcblxuICAgICAgICBnZXRTY3JpcHQ6IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5LmdldCh1cmwsIHVuZGVmaW5lZCwgY2FsbGJhY2ssIFwic2NyaXB0XCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBqUXVlcnkuZWFjaChbXCJnZXRcIiwgXCJwb3N0XCJdLCBmdW5jdGlvbiAoaSwgbWV0aG9kKSB7XG4gICAgICAgIGpRdWVyeVttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgY2FsbGJhY2ssIHR5cGUpIHtcblxuICAgICAgICAgICAgLy8gU2hpZnQgYXJndW1lbnRzIGlmIGRhdGEgYXJndW1lbnQgd2FzIG9taXR0ZWRcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGRhdGEpKSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9IHR5cGUgfHwgY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBkYXRhO1xuICAgICAgICAgICAgICAgIGRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRoZSB1cmwgY2FuIGJlIGFuIG9wdGlvbnMgb2JqZWN0ICh3aGljaCB0aGVuIG11c3QgaGF2ZSAudXJsKVxuICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5hamF4KGpRdWVyeS5leHRlbmQoe1xuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgIHR5cGU6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGNhbGxiYWNrXG4gICAgICAgICAgICB9LCBqUXVlcnkuaXNQbGFpbk9iamVjdCh1cmwpICYmIHVybCkpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG5cbiAgICBqUXVlcnkuX2V2YWxVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHJldHVybiBqUXVlcnkuYWpheCh7XG4gICAgICAgICAgICB1cmw6IHVybCxcblxuICAgICAgICAgICAgLy8gTWFrZSB0aGlzIGV4cGxpY2l0LCBzaW5jZSB1c2VyIGNhbiBvdmVycmlkZSB0aGlzIHRocm91Z2ggYWpheFNldHVwICgjMTEyNjQpXG4gICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgZGF0YVR5cGU6IFwic2NyaXB0XCIsXG4gICAgICAgICAgICBjYWNoZTogdHJ1ZSxcbiAgICAgICAgICAgIGFzeW5jOiBmYWxzZSxcbiAgICAgICAgICAgIGdsb2JhbDogZmFsc2UsXG4gICAgICAgICAgICBcInRocm93c1wiOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH07XG5cblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICB3cmFwQWxsOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgdmFyIHdyYXA7XG5cbiAgICAgICAgICAgIGlmICh0aGlzWzBdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24oaHRtbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaHRtbCA9IGh0bWwuY2FsbCh0aGlzWzBdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudHMgdG8gd3JhcCB0aGUgdGFyZ2V0IGFyb3VuZFxuICAgICAgICAgICAgICAgIHdyYXAgPSBqUXVlcnkoaHRtbCwgdGhpc1swXS5vd25lckRvY3VtZW50KS5lcSgwKS5jbG9uZSh0cnVlKTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcC5pbnNlcnRCZWZvcmUodGhpc1swXSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgd3JhcC5tYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWxlbSA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0gPSBlbGVtLmZpcnN0RWxlbWVudENoaWxkO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsZW07XG4gICAgICAgICAgICAgICAgfSkuYXBwZW5kKHRoaXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICB3cmFwSW5uZXI6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICBpZiAoaXNGdW5jdGlvbihodG1sKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLndyYXBJbm5lcihodG1sLmNhbGwodGhpcywgaSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VsZiA9IGpRdWVyeSh0aGlzKSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudHMgPSBzZWxmLmNvbnRlbnRzKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29udGVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRzLndyYXBBbGwoaHRtbCk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFwcGVuZChodG1sKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB3cmFwOiBmdW5jdGlvbiAoaHRtbCkge1xuICAgICAgICAgICAgdmFyIGh0bWxJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbihodG1sKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS53cmFwQWxsKGh0bWxJc0Z1bmN0aW9uID8gaHRtbC5jYWxsKHRoaXMsIGkpIDogaHRtbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB1bndyYXA6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQoc2VsZWN0b3IpLm5vdChcImJvZHlcIikuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnJlcGxhY2VXaXRoKHRoaXMuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuICAgIGpRdWVyeS5leHByLnBzZXVkb3MuaGlkZGVuID0gZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgcmV0dXJuICFqUXVlcnkuZXhwci5wc2V1ZG9zLnZpc2libGUoZWxlbSk7XG4gICAgfTtcbiAgICBqUXVlcnkuZXhwci5wc2V1ZG9zLnZpc2libGUgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICByZXR1cm4gISEoZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKTtcbiAgICB9O1xuXG5cbiAgICBqUXVlcnkuYWpheFNldHRpbmdzLnhociA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgd2luZG93LlhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgeGhyU3VjY2Vzc1N0YXR1cyA9IHtcblxuICAgICAgICAgICAgLy8gRmlsZSBwcm90b2NvbCBhbHdheXMgeWllbGRzIHN0YXR1cyBjb2RlIDAsIGFzc3VtZSAyMDBcbiAgICAgICAgICAgIDA6IDIwMCxcblxuICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbiAgICAgICAgICAgIC8vICMxNDUwOiBzb21ldGltZXMgSUUgcmV0dXJucyAxMjIzIHdoZW4gaXQgc2hvdWxkIGJlIDIwNFxuICAgICAgICAgICAgMTIyMzogMjA0XG4gICAgICAgIH0sXG4gICAgICAgIHhoclN1cHBvcnRlZCA9IGpRdWVyeS5hamF4U2V0dGluZ3MueGhyKCk7XG5cbiAgICBzdXBwb3J0LmNvcnMgPSAhIXhoclN1cHBvcnRlZCAmJiAoXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHJTdXBwb3J0ZWQpO1xuICAgIHN1cHBvcnQuYWpheCA9IHhoclN1cHBvcnRlZCA9ICEheGhyU3VwcG9ydGVkO1xuXG4gICAgalF1ZXJ5LmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrO1xuXG4gICAgICAgIC8vIENyb3NzIGRvbWFpbiBvbmx5IGFsbG93ZWQgaWYgc3VwcG9ydGVkIHRocm91Z2ggWE1MSHR0cFJlcXVlc3RcbiAgICAgICAgaWYgKHN1cHBvcnQuY29ycyB8fCB4aHJTdXBwb3J0ZWQgJiYgIW9wdGlvbnMuY3Jvc3NEb21haW4pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2VuZDogZnVuY3Rpb24gKGhlYWRlcnMsIGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgeGhyID0gb3B0aW9ucy54aHIoKTtcblxuICAgICAgICAgICAgICAgICAgICB4aHIub3BlbihcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5hc3luYyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQXBwbHkgY3VzdG9tIGZpZWxkcyBpZiBwcm92aWRlZFxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy54aHJGaWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSBpbiBvcHRpb25zLnhockZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhocltpXSA9IG9wdGlvbnMueGhyRmllbGRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3ZlcnJpZGUgbWltZSB0eXBlIGlmIG5lZWRlZFxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5taW1lVHlwZSAmJiB4aHIub3ZlcnJpZGVNaW1lVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLm92ZXJyaWRlTWltZVR5cGUob3B0aW9ucy5taW1lVHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBYLVJlcXVlc3RlZC1XaXRoIGhlYWRlclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgY3Jvc3MtZG9tYWluIHJlcXVlc3RzLCBzZWVpbmcgYXMgY29uZGl0aW9ucyBmb3IgYSBwcmVmbGlnaHQgYXJlXG4gICAgICAgICAgICAgICAgICAgIC8vIGFraW4gdG8gYSBqaWdzYXcgcHV6emxlLCB3ZSBzaW1wbHkgbmV2ZXIgc2V0IGl0IHRvIGJlIHN1cmUuXG4gICAgICAgICAgICAgICAgICAgIC8vIChpdCBjYW4gYWx3YXlzIGJlIHNldCBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIG9yIGV2ZW4gdXNpbmcgYWpheFNldHVwKVxuICAgICAgICAgICAgICAgICAgICAvLyBGb3Igc2FtZS1kb21haW4gcmVxdWVzdHMsIHdvbid0IGNoYW5nZSBoZWFkZXIgaWYgYWxyZWFkeSBwcm92aWRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmNyb3NzRG9tYWluICYmICFoZWFkZXJzW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tcIlgtUmVxdWVzdGVkLVdpdGhcIl0gPSBcIlhNTEh0dHBSZXF1ZXN0XCI7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBTZXQgaGVhZGVyc1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGkgaW4gaGVhZGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaSwgaGVhZGVyc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBDYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGVycm9yQ2FsbGJhY2sgPSB4aHIub25sb2FkID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5vbmVycm9yID0geGhyLm9uYWJvcnQgPSB4aHIub250aW1lb3V0ID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJhYm9ydFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImVycm9yXCIpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9uIGEgbWFudWFsIG5hdGl2ZSBhYm9ydCwgSUU5IHRocm93c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZXJyb3JzIG9uIGFueSBwcm9wZXJ0eSBhY2Nlc3MgdGhhdCBpcyBub3QgcmVhZHlTdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB4aHIuc3RhdHVzICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoMCwgXCJlcnJvclwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZpbGU6IHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIDA7IHNlZSAjODYwNSwgIzE0MjA3XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zdGF0dXNUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoclN1Y2Nlc3NTdGF0dXNbeGhyLnN0YXR1c10gfHwgeGhyLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuc3RhdHVzVGV4dCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSUU5IGhhcyBubyBYSFIyIGJ1dCB0aHJvd3Mgb24gYmluYXJ5ICh0cmFjLTExNDI2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEZvciBYSFIyIG5vbi10ZXh0LCBsZXQgdGhlIGNhbGxlciBoYW5kbGUgaXQgKGdoLTI0OTgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHhoci5yZXNwb25zZVR5cGUgfHwgXCJ0ZXh0XCIpICE9PSBcInRleHRcIiB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiB4aHIucmVzcG9uc2VUZXh0ICE9PSBcInN0cmluZ1wiID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2JpbmFyeTogeGhyLnJlc3BvbnNlfSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0ZXh0OiB4aHIucmVzcG9uc2VUZXh0fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIExpc3RlbiB0byBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ2FsbGJhY2sgPSB4aHIub25lcnJvciA9IHhoci5vbnRpbWVvdXQgPSBjYWxsYmFjayhcImVycm9yXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDkgb25seVxuICAgICAgICAgICAgICAgICAgICAvLyBVc2Ugb25yZWFkeXN0YXRlY2hhbmdlIHRvIHJlcGxhY2Ugb25hYm9ydFxuICAgICAgICAgICAgICAgICAgICAvLyB0byBoYW5kbGUgdW5jYXVnaHQgYWJvcnRzXG4gICAgICAgICAgICAgICAgICAgIGlmICh4aHIub25hYm9ydCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIub25hYm9ydCA9IGVycm9yQ2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgcmVhZHlTdGF0ZSBiZWZvcmUgdGltZW91dCBhcyBpdCBjaGFuZ2VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxsb3cgb25lcnJvciB0byBiZSBjYWxsZWQgZmlyc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJ1dCB0aGF0IHdpbGwgbm90IGhhbmRsZSBhIG5hdGl2ZSBhYm9ydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBbHNvLCBzYXZlIGVycm9yQ2FsbGJhY2sgdG8gYSB2YXJpYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcyB4aHIub25lcnJvciBjYW5ub3QgYmUgYWNjZXNzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBhYm9ydCBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGNhbGxiYWNrKFwiYWJvcnRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG8gc2VuZCB0aGUgcmVxdWVzdCAodGhpcyBtYXkgcmFpc2UgYW4gZXhjZXB0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNlbmQob3B0aW9ucy5oYXNDb250ZW50ICYmIG9wdGlvbnMuZGF0YSB8fCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAjMTQ2ODM6IE9ubHkgcmV0aHJvdyBpZiB0aGlzIGhhc24ndCBiZWVuIG5vdGlmaWVkIGFzIGFuIGVycm9yIHlldFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBhYm9ydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSk7XG5cblxuLy8gUHJldmVudCBhdXRvLWV4ZWN1dGlvbiBvZiBzY3JpcHRzIHdoZW4gbm8gZXhwbGljaXQgZGF0YVR5cGUgd2FzIHByb3ZpZGVkIChTZWUgZ2gtMjQzMilcbiAgICBqUXVlcnkuYWpheFByZWZpbHRlcihmdW5jdGlvbiAocykge1xuICAgICAgICBpZiAocy5jcm9zc0RvbWFpbikge1xuICAgICAgICAgICAgcy5jb250ZW50cy5zY3JpcHQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4vLyBJbnN0YWxsIHNjcmlwdCBkYXRhVHlwZVxuICAgIGpRdWVyeS5hamF4U2V0dXAoe1xuICAgICAgICBhY2NlcHRzOiB7XG4gICAgICAgICAgICBzY3JpcHQ6IFwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBcIiArXG4gICAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIlxuICAgICAgICB9LFxuICAgICAgICBjb250ZW50czoge1xuICAgICAgICAgICAgc2NyaXB0OiAvXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi9cbiAgICAgICAgfSxcbiAgICAgICAgY29udmVydGVyczoge1xuICAgICAgICAgICAgXCJ0ZXh0IHNjcmlwdFwiOiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgICAgIGpRdWVyeS5nbG9iYWxFdmFsKHRleHQpO1xuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbi8vIEhhbmRsZSBjYWNoZSdzIHNwZWNpYWwgY2FzZSBhbmQgY3Jvc3NEb21haW5cbiAgICBqUXVlcnkuYWpheFByZWZpbHRlcihcInNjcmlwdFwiLCBmdW5jdGlvbiAocykge1xuICAgICAgICBpZiAocy5jYWNoZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzLmNhY2hlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHMuY3Jvc3NEb21haW4pIHtcbiAgICAgICAgICAgIHMudHlwZSA9IFwiR0VUXCI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuLy8gQmluZCBzY3JpcHQgdGFnIGhhY2sgdHJhbnNwb3J0XG4gICAgalF1ZXJ5LmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIiwgZnVuY3Rpb24gKHMpIHtcblxuICAgICAgICAvLyBUaGlzIHRyYW5zcG9ydCBvbmx5IGRlYWxzIHdpdGggY3Jvc3MgZG9tYWluIHJlcXVlc3RzXG4gICAgICAgIGlmIChzLmNyb3NzRG9tYWluKSB7XG4gICAgICAgICAgICB2YXIgc2NyaXB0LCBjYWxsYmFjaztcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgc2VuZDogZnVuY3Rpb24gKF8sIGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdCA9IGpRdWVyeShcIjxzY3JpcHQ+XCIpLnByb3Aoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcnNldDogcy5zY3JpcHRDaGFyc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBzLnVybFxuICAgICAgICAgICAgICAgICAgICB9KS5vbihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibG9hZCBlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKGV2dC50eXBlID09PSBcImVycm9yXCIgPyA0MDQgOiAyMDAsIGV2dC50eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVXNlIG5hdGl2ZSBET00gbWFuaXB1bGF0aW9uIHRvIGF2b2lkIG91ciBkb21NYW5pcCBBSkFYIHRyaWNrZXJ5XG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0WzBdKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFib3J0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgdmFyIG9sZENhbGxiYWNrcyA9IFtdLFxuICAgICAgICByanNvbnAgPSAvKD0pXFw/KD89JnwkKXxcXD9cXD8vO1xuXG4vLyBEZWZhdWx0IGpzb25wIHNldHRpbmdzXG4gICAgalF1ZXJ5LmFqYXhTZXR1cCh7XG4gICAgICAgIGpzb25wOiBcImNhbGxiYWNrXCIsXG4gICAgICAgIGpzb25wQ2FsbGJhY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IG9sZENhbGxiYWNrcy5wb3AoKSB8fCAoalF1ZXJ5LmV4cGFuZG8gKyBcIl9cIiArIChub25jZSsrKSk7XG4gICAgICAgICAgICB0aGlzW2NhbGxiYWNrXSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9KTtcblxuLy8gRGV0ZWN0LCBub3JtYWxpemUgb3B0aW9ucyBhbmQgaW5zdGFsbCBjYWxsYmFja3MgZm9yIGpzb25wIHJlcXVlc3RzXG4gICAgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsIGZ1bmN0aW9uIChzLCBvcmlnaW5hbFNldHRpbmdzLCBqcVhIUikge1xuXG4gICAgICAgIHZhciBjYWxsYmFja05hbWUsIG92ZXJ3cml0dGVuLCByZXNwb25zZUNvbnRhaW5lcixcbiAgICAgICAgICAgIGpzb25Qcm9wID0gcy5qc29ucCAhPT0gZmFsc2UgJiYgKHJqc29ucC50ZXN0KHMudXJsKSA/XG4gICAgICAgICAgICAgICAgICAgIFwidXJsXCIgOlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgICAgICAgICAgIChzLmNvbnRlbnRUeXBlIHx8IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSA9PT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICByanNvbnAudGVzdChzLmRhdGEpICYmIFwiZGF0YVwiXG4gICAgICAgICAgICApO1xuXG4gICAgICAgIC8vIEhhbmRsZSBpZmYgdGhlIGV4cGVjdGVkIGRhdGEgdHlwZSBpcyBcImpzb25wXCIgb3Igd2UgaGF2ZSBhIHBhcmFtZXRlciB0byBzZXRcbiAgICAgICAgaWYgKGpzb25Qcm9wIHx8IHMuZGF0YVR5cGVzWzBdID09PSBcImpzb25wXCIpIHtcblxuICAgICAgICAgICAgLy8gR2V0IGNhbGxiYWNrIG5hbWUsIHJlbWVtYmVyaW5nIHByZWV4aXN0aW5nIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCBpdFxuICAgICAgICAgICAgY2FsbGJhY2tOYW1lID0gcy5qc29ucENhbGxiYWNrID0gaXNGdW5jdGlvbihzLmpzb25wQ2FsbGJhY2spID9cbiAgICAgICAgICAgICAgICBzLmpzb25wQ2FsbGJhY2soKSA6XG4gICAgICAgICAgICAgICAgcy5qc29ucENhbGxiYWNrO1xuXG4gICAgICAgICAgICAvLyBJbnNlcnQgY2FsbGJhY2sgaW50byB1cmwgb3IgZm9ybSBkYXRhXG4gICAgICAgICAgICBpZiAoanNvblByb3ApIHtcbiAgICAgICAgICAgICAgICBzW2pzb25Qcm9wXSA9IHNbanNvblByb3BdLnJlcGxhY2Uocmpzb25wLCBcIiQxXCIgKyBjYWxsYmFja05hbWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzLmpzb25wICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHMudXJsICs9IChycXVlcnkudGVzdChzLnVybCkgPyBcIiZcIiA6IFwiP1wiKSArIHMuanNvbnAgKyBcIj1cIiArIGNhbGxiYWNrTmFtZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXNlIGRhdGEgY29udmVydGVyIHRvIHJldHJpZXZlIGpzb24gYWZ0ZXIgc2NyaXB0IGV4ZWN1dGlvblxuICAgICAgICAgICAgcy5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZUNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkuZXJyb3IoY2FsbGJhY2tOYW1lICsgXCIgd2FzIG5vdCBjYWxsZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZUNvbnRhaW5lclswXTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIEZvcmNlIGpzb24gZGF0YVR5cGVcbiAgICAgICAgICAgIHMuZGF0YVR5cGVzWzBdID0gXCJqc29uXCI7XG5cbiAgICAgICAgICAgIC8vIEluc3RhbGwgY2FsbGJhY2tcbiAgICAgICAgICAgIG92ZXJ3cml0dGVuID0gd2luZG93W2NhbGxiYWNrTmFtZV07XG4gICAgICAgICAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXNwb25zZUNvbnRhaW5lciA9IGFyZ3VtZW50cztcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIENsZWFuLXVwIGZ1bmN0aW9uIChmaXJlcyBhZnRlciBjb252ZXJ0ZXJzKVxuICAgICAgICAgICAganFYSFIuYWx3YXlzKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIC8vIElmIHByZXZpb3VzIHZhbHVlIGRpZG4ndCBleGlzdCAtIHJlbW92ZSBpdFxuICAgICAgICAgICAgICAgIGlmIChvdmVyd3JpdHRlbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGpRdWVyeSh3aW5kb3cpLnJlbW92ZVByb3AoY2FsbGJhY2tOYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgcmVzdG9yZSBwcmVleGlzdGluZyB2YWx1ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvd1tjYWxsYmFja05hbWVdID0gb3ZlcndyaXR0ZW47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU2F2ZSBiYWNrIGFzIGZyZWVcbiAgICAgICAgICAgICAgICBpZiAoc1tjYWxsYmFja05hbWVdKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gTWFrZSBzdXJlIHRoYXQgcmUtdXNpbmcgdGhlIG9wdGlvbnMgZG9lc24ndCBzY3JldyB0aGluZ3MgYXJvdW5kXG4gICAgICAgICAgICAgICAgICAgIHMuanNvbnBDYWxsYmFjayA9IG9yaWdpbmFsU2V0dGluZ3MuanNvbnBDYWxsYmFjaztcblxuICAgICAgICAgICAgICAgICAgICAvLyBTYXZlIHRoZSBjYWxsYmFjayBuYW1lIGZvciBmdXR1cmUgdXNlXG4gICAgICAgICAgICAgICAgICAgIG9sZENhbGxiYWNrcy5wdXNoKGNhbGxiYWNrTmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ2FsbCBpZiBpdCB3YXMgYSBmdW5jdGlvbiBhbmQgd2UgaGF2ZSBhIHJlc3BvbnNlXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlQ29udGFpbmVyICYmIGlzRnVuY3Rpb24ob3ZlcndyaXR0ZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJ3cml0dGVuKHJlc3BvbnNlQ29udGFpbmVyWzBdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXNwb25zZUNvbnRhaW5lciA9IG92ZXJ3cml0dGVuID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIERlbGVnYXRlIHRvIHNjcmlwdFxuICAgICAgICAgICAgcmV0dXJuIFwic2NyaXB0XCI7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4vLyBTdXBwb3J0OiBTYWZhcmkgOCBvbmx5XG4vLyBJbiBTYWZhcmkgOCBkb2N1bWVudHMgY3JlYXRlZCB2aWEgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50XG4vLyBjb2xsYXBzZSBzaWJsaW5nIGZvcm1zOiB0aGUgc2Vjb25kIG9uZSBiZWNvbWVzIGEgY2hpbGQgb2YgdGhlIGZpcnN0IG9uZS5cbi8vIEJlY2F1c2Ugb2YgdGhhdCwgdGhpcyBzZWN1cml0eSBtZWFzdXJlIGhhcyB0byBiZSBkaXNhYmxlZCBpbiBTYWZhcmkgOC5cbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzczMzdcbiAgICBzdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBib2R5ID0gZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiXCIpLmJvZHk7XG4gICAgICAgIGJvZHkuaW5uZXJIVE1MID0gXCI8Zm9ybT48L2Zvcm0+PGZvcm0+PC9mb3JtPlwiO1xuICAgICAgICByZXR1cm4gYm9keS5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMjtcbiAgICB9KSgpO1xuXG5cbi8vIEFyZ3VtZW50IFwiZGF0YVwiIHNob3VsZCBiZSBzdHJpbmcgb2YgaHRtbFxuLy8gY29udGV4dCAob3B0aW9uYWwpOiBJZiBzcGVjaWZpZWQsIHRoZSBmcmFnbWVudCB3aWxsIGJlIGNyZWF0ZWQgaW4gdGhpcyBjb250ZXh0LFxuLy8gZGVmYXVsdHMgdG8gZG9jdW1lbnRcbi8vIGtlZXBTY3JpcHRzIChvcHRpb25hbCk6IElmIHRydWUsIHdpbGwgaW5jbHVkZSBzY3JpcHRzIHBhc3NlZCBpbiB0aGUgaHRtbCBzdHJpbmdcbiAgICBqUXVlcnkucGFyc2VIVE1MID0gZnVuY3Rpb24gKGRhdGEsIGNvbnRleHQsIGtlZXBTY3JpcHRzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgY29udGV4dCA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIGtlZXBTY3JpcHRzID0gY29udGV4dDtcbiAgICAgICAgICAgIGNvbnRleHQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBiYXNlLCBwYXJzZWQsIHNjcmlwdHM7XG5cbiAgICAgICAgaWYgKCFjb250ZXh0KSB7XG5cbiAgICAgICAgICAgIC8vIFN0b3Agc2NyaXB0cyBvciBpbmxpbmUgZXZlbnQgaGFuZGxlcnMgZnJvbSBiZWluZyBleGVjdXRlZCBpbW1lZGlhdGVseVxuICAgICAgICAgICAgLy8gYnkgdXNpbmcgZG9jdW1lbnQuaW1wbGVtZW50YXRpb25cbiAgICAgICAgICAgIGlmIChzdXBwb3J0LmNyZWF0ZUhUTUxEb2N1bWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIGJhc2UgaHJlZiBmb3IgdGhlIGNyZWF0ZWQgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAvLyBzbyBhbnkgcGFyc2VkIGVsZW1lbnRzIHdpdGggVVJMc1xuICAgICAgICAgICAgICAgIC8vIGFyZSBiYXNlZCBvbiB0aGUgZG9jdW1lbnQncyBVUkwgKGdoLTI5NjUpXG4gICAgICAgICAgICAgICAgYmFzZSA9IGNvbnRleHQuY3JlYXRlRWxlbWVudChcImJhc2VcIik7XG4gICAgICAgICAgICAgICAgYmFzZS5ocmVmID0gZG9jdW1lbnQubG9jYXRpb24uaHJlZjtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmhlYWQuYXBwZW5kQ2hpbGQoYmFzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnRleHQgPSBkb2N1bWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBhcnNlZCA9IHJzaW5nbGVUYWcuZXhlYyhkYXRhKTtcbiAgICAgICAgc2NyaXB0cyA9ICFrZWVwU2NyaXB0cyAmJiBbXTtcblxuICAgICAgICAvLyBTaW5nbGUgdGFnXG4gICAgICAgIGlmIChwYXJzZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBbY29udGV4dC5jcmVhdGVFbGVtZW50KHBhcnNlZFsxXSldO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFyc2VkID0gYnVpbGRGcmFnbWVudChbZGF0YV0sIGNvbnRleHQsIHNjcmlwdHMpO1xuXG4gICAgICAgIGlmIChzY3JpcHRzICYmIHNjcmlwdHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBqUXVlcnkoc2NyaXB0cykucmVtb3ZlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4galF1ZXJ5Lm1lcmdlKFtdLCBwYXJzZWQuY2hpbGROb2Rlcyk7XG4gICAgfTtcblxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhIHVybCBpbnRvIGEgcGFnZVxuICAgICAqL1xuICAgIGpRdWVyeS5mbi5sb2FkID0gZnVuY3Rpb24gKHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xuICAgICAgICB2YXIgc2VsZWN0b3IsIHR5cGUsIHJlc3BvbnNlLFxuICAgICAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBvZmYgPSB1cmwuaW5kZXhPZihcIiBcIik7XG5cbiAgICAgICAgaWYgKG9mZiA+IC0xKSB7XG4gICAgICAgICAgICBzZWxlY3RvciA9IHN0cmlwQW5kQ29sbGFwc2UodXJsLnNsaWNlKG9mZikpO1xuICAgICAgICAgICAgdXJsID0gdXJsLnNsaWNlKDAsIG9mZik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBpdCdzIGEgZnVuY3Rpb25cbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocGFyYW1zKSkge1xuXG4gICAgICAgICAgICAvLyBXZSBhc3N1bWUgdGhhdCBpdCdzIHRoZSBjYWxsYmFja1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBwYXJhbXM7XG4gICAgICAgICAgICBwYXJhbXMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgYnVpbGQgYSBwYXJhbSBzdHJpbmdcbiAgICAgICAgfSBlbHNlIGlmIChwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgdHlwZSA9IFwiUE9TVFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBlbGVtZW50cyB0byBtb2RpZnksIG1ha2UgdGhlIHJlcXVlc3RcbiAgICAgICAgaWYgKHNlbGYubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgalF1ZXJ5LmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogdXJsLFxuXG4gICAgICAgICAgICAgICAgLy8gSWYgXCJ0eXBlXCIgdmFyaWFibGUgaXMgdW5kZWZpbmVkLCB0aGVuIFwiR0VUXCIgbWV0aG9kIHdpbGwgYmUgdXNlZC5cbiAgICAgICAgICAgICAgICAvLyBNYWtlIHZhbHVlIG9mIHRoaXMgZmllbGQgZXhwbGljaXQgc2luY2VcbiAgICAgICAgICAgICAgICAvLyB1c2VyIGNhbiBvdmVycmlkZSBpdCB0aHJvdWdoIGFqYXhTZXR1cCBtZXRob2RcbiAgICAgICAgICAgICAgICB0eXBlOiB0eXBlIHx8IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwiaHRtbFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHBhcmFtc1xuICAgICAgICAgICAgfSkuZG9uZShmdW5jdGlvbiAocmVzcG9uc2VUZXh0KSB7XG5cbiAgICAgICAgICAgICAgICAvLyBTYXZlIHJlc3BvbnNlIGZvciB1c2UgaW4gY29tcGxldGUgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICByZXNwb25zZSA9IGFyZ3VtZW50cztcblxuICAgICAgICAgICAgICAgIHNlbGYuaHRtbChzZWxlY3RvciA/XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gSWYgYSBzZWxlY3RvciB3YXMgc3BlY2lmaWVkLCBsb2NhdGUgdGhlIHJpZ2h0IGVsZW1lbnRzIGluIGEgZHVtbXkgZGl2XG4gICAgICAgICAgICAgICAgICAgIC8vIEV4Y2x1ZGUgc2NyaXB0cyB0byBhdm9pZCBJRSAnUGVybWlzc2lvbiBEZW5pZWQnIGVycm9yc1xuICAgICAgICAgICAgICAgICAgICBqUXVlcnkoXCI8ZGl2PlwiKS5hcHBlbmQoalF1ZXJ5LnBhcnNlSFRNTChyZXNwb25zZVRleHQpKS5maW5kKHNlbGVjdG9yKSA6XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgZnVsbCByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUZXh0KTtcblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXF1ZXN0IHN1Y2NlZWRzLCB0aGlzIGZ1bmN0aW9uIGdldHMgXCJkYXRhXCIsIFwic3RhdHVzXCIsIFwianFYSFJcIlxuICAgICAgICAgICAgICAgIC8vIGJ1dCB0aGV5IGFyZSBpZ25vcmVkIGJlY2F1c2UgcmVzcG9uc2Ugd2FzIHNldCBhYm92ZS5cbiAgICAgICAgICAgICAgICAvLyBJZiBpdCBmYWlscywgdGhpcyBmdW5jdGlvbiBnZXRzIFwianFYSFJcIiwgXCJzdGF0dXNcIiwgXCJlcnJvclwiXG4gICAgICAgICAgICB9KS5hbHdheXMoY2FsbGJhY2sgJiYgZnVuY3Rpb24gKGpxWEhSLCBzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBzZWxmLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCByZXNwb25zZSB8fCBbanFYSFIucmVzcG9uc2VUZXh0LCBzdGF0dXMsIGpxWEhSXSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cblxuLy8gQXR0YWNoIGEgYnVuY2ggb2YgZnVuY3Rpb25zIGZvciBoYW5kbGluZyBjb21tb24gQUpBWCBldmVudHNcbiAgICBqUXVlcnkuZWFjaChbXG4gICAgICAgIFwiYWpheFN0YXJ0XCIsXG4gICAgICAgIFwiYWpheFN0b3BcIixcbiAgICAgICAgXCJhamF4Q29tcGxldGVcIixcbiAgICAgICAgXCJhamF4RXJyb3JcIixcbiAgICAgICAgXCJhamF4U3VjY2Vzc1wiLFxuICAgICAgICBcImFqYXhTZW5kXCJcbiAgICBdLCBmdW5jdGlvbiAoaSwgdHlwZSkge1xuICAgICAgICBqUXVlcnkuZm5bdHlwZV0gPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uKHR5cGUsIGZuKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuXG4gICAgalF1ZXJ5LmV4cHIucHNldWRvcy5hbmltYXRlZCA9IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIHJldHVybiBqUXVlcnkuZ3JlcChqUXVlcnkudGltZXJzLCBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgICAgIHJldHVybiBlbGVtID09PSBmbi5lbGVtO1xuICAgICAgICB9KS5sZW5ndGg7XG4gICAgfTtcblxuXG4gICAgalF1ZXJ5Lm9mZnNldCA9IHtcbiAgICAgICAgc2V0T2Zmc2V0OiBmdW5jdGlvbiAoZWxlbSwgb3B0aW9ucywgaSkge1xuICAgICAgICAgICAgdmFyIGN1clBvc2l0aW9uLCBjdXJMZWZ0LCBjdXJDU1NUb3AsIGN1clRvcCwgY3VyT2Zmc2V0LCBjdXJDU1NMZWZ0LCBjYWxjdWxhdGVQb3NpdGlvbixcbiAgICAgICAgICAgICAgICBwb3NpdGlvbiA9IGpRdWVyeS5jc3MoZWxlbSwgXCJwb3NpdGlvblwiKSxcbiAgICAgICAgICAgICAgICBjdXJFbGVtID0galF1ZXJ5KGVsZW0pLFxuICAgICAgICAgICAgICAgIHByb3BzID0ge307XG5cbiAgICAgICAgICAgIC8vIFNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cbiAgICAgICAgICAgIGlmIChwb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgICAgICAgIGVsZW0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGN1ck9mZnNldCA9IGN1ckVsZW0ub2Zmc2V0KCk7XG4gICAgICAgICAgICBjdXJDU1NUb3AgPSBqUXVlcnkuY3NzKGVsZW0sIFwidG9wXCIpO1xuICAgICAgICAgICAgY3VyQ1NTTGVmdCA9IGpRdWVyeS5jc3MoZWxlbSwgXCJsZWZ0XCIpO1xuICAgICAgICAgICAgY2FsY3VsYXRlUG9zaXRpb24gPSAocG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIiB8fCBwb3NpdGlvbiA9PT0gXCJmaXhlZFwiKSAmJlxuICAgICAgICAgICAgICAgIChjdXJDU1NUb3AgKyBjdXJDU1NMZWZ0KS5pbmRleE9mKFwiYXV0b1wiKSA+IC0xO1xuXG4gICAgICAgICAgICAvLyBOZWVkIHRvIGJlIGFibGUgdG8gY2FsY3VsYXRlIHBvc2l0aW9uIGlmIGVpdGhlclxuICAgICAgICAgICAgLy8gdG9wIG9yIGxlZnQgaXMgYXV0byBhbmQgcG9zaXRpb24gaXMgZWl0aGVyIGFic29sdXRlIG9yIGZpeGVkXG4gICAgICAgICAgICBpZiAoY2FsY3VsYXRlUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBjdXJQb3NpdGlvbiA9IGN1ckVsZW0ucG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICBjdXJUb3AgPSBjdXJQb3NpdGlvbi50b3A7XG4gICAgICAgICAgICAgICAgY3VyTGVmdCA9IGN1clBvc2l0aW9uLmxlZnQ7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VyVG9wID0gcGFyc2VGbG9hdChjdXJDU1NUb3ApIHx8IDA7XG4gICAgICAgICAgICAgICAgY3VyTGVmdCA9IHBhcnNlRmxvYXQoY3VyQ1NTTGVmdCkgfHwgMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzRnVuY3Rpb24ob3B0aW9ucykpIHtcblxuICAgICAgICAgICAgICAgIC8vIFVzZSBqUXVlcnkuZXh0ZW5kIGhlcmUgdG8gYWxsb3cgbW9kaWZpY2F0aW9uIG9mIGNvb3JkaW5hdGVzIGFyZ3VtZW50IChnaC0xODQ4KVxuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zLmNhbGwoZWxlbSwgaSwgalF1ZXJ5LmV4dGVuZCh7fSwgY3VyT2Zmc2V0KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLnRvcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcHJvcHMudG9wID0gKG9wdGlvbnMudG9wIC0gY3VyT2Zmc2V0LnRvcCkgKyBjdXJUb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sZWZ0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwcm9wcy5sZWZ0ID0gKG9wdGlvbnMubGVmdCAtIGN1ck9mZnNldC5sZWZ0KSArIGN1ckxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChcInVzaW5nXCIgaW4gb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMudXNpbmcuY2FsbChlbGVtLCBwcm9wcyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY3VyRWxlbS5jc3MocHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuXG4gICAgICAgIC8vIG9mZnNldCgpIHJlbGF0ZXMgYW4gZWxlbWVudCdzIGJvcmRlciBib3ggdG8gdGhlIGRvY3VtZW50IG9yaWdpblxuICAgICAgICBvZmZzZXQ6IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cbiAgICAgICAgICAgIC8vIFByZXNlcnZlIGNoYWluaW5nIGZvciBzZXR0ZXJcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/XG4gICAgICAgICAgICAgICAgICAgIHRoaXMgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5vZmZzZXQuc2V0T2Zmc2V0KHRoaXMsIG9wdGlvbnMsIGkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHJlY3QsIHdpbixcbiAgICAgICAgICAgICAgICBlbGVtID0gdGhpc1swXTtcblxuICAgICAgICAgICAgaWYgKCFlbGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZXR1cm4gemVyb3MgZm9yIGRpc2Nvbm5lY3RlZCBhbmQgaGlkZGVuIChkaXNwbGF5OiBub25lKSBlbGVtZW50cyAoZ2gtMjMxMClcbiAgICAgICAgICAgIC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuICAgICAgICAgICAgLy8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYVxuICAgICAgICAgICAgLy8gZGlzY29ubmVjdGVkIG5vZGUgaW4gSUUgdGhyb3dzIGFuIGVycm9yXG4gICAgICAgICAgICBpZiAoIWVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge3RvcDogMCwgbGVmdDogMH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEdldCBkb2N1bWVudC1yZWxhdGl2ZSBwb3NpdGlvbiBieSBhZGRpbmcgdmlld3BvcnQgc2Nyb2xsIHRvIHZpZXdwb3J0LXJlbGF0aXZlIGdCQ1JcbiAgICAgICAgICAgIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgd2luID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBwb3NpdGlvbigpIHJlbGF0ZXMgYW4gZWxlbWVudCdzIG1hcmdpbiBib3ggdG8gaXRzIG9mZnNldCBwYXJlbnQncyBwYWRkaW5nIGJveFxuICAgICAgICAvLyBUaGlzIGNvcnJlc3BvbmRzIHRvIHRoZSBiZWhhdmlvciBvZiBDU1MgYWJzb2x1dGUgcG9zaXRpb25pbmdcbiAgICAgICAgcG9zaXRpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpc1swXSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG9mZnNldFBhcmVudCwgb2Zmc2V0LCBkb2MsXG4gICAgICAgICAgICAgICAgZWxlbSA9IHRoaXNbMF0sXG4gICAgICAgICAgICAgICAgcGFyZW50T2Zmc2V0ID0ge3RvcDogMCwgbGVmdDogMH07XG5cbiAgICAgICAgICAgIC8vIHBvc2l0aW9uOmZpeGVkIGVsZW1lbnRzIGFyZSBvZmZzZXQgZnJvbSB0aGUgdmlld3BvcnQsIHdoaWNoIGl0c2VsZiBhbHdheXMgaGFzIHplcm8gb2Zmc2V0XG4gICAgICAgICAgICBpZiAoalF1ZXJ5LmNzcyhlbGVtLCBcInBvc2l0aW9uXCIpID09PSBcImZpeGVkXCIpIHtcblxuICAgICAgICAgICAgICAgIC8vIEFzc3VtZSBwb3NpdGlvbjpmaXhlZCBpbXBsaWVzIGF2YWlsYWJpbGl0eSBvZiBnZXRCb3VuZGluZ0NsaWVudFJlY3RcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9mZnNldCA9IHRoaXMub2Zmc2V0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBY2NvdW50IGZvciB0aGUgKnJlYWwqIG9mZnNldCBwYXJlbnQsIHdoaWNoIGNhbiBiZSB0aGUgZG9jdW1lbnQgb3IgaXRzIHJvb3QgZWxlbWVudFxuICAgICAgICAgICAgICAgIC8vIHdoZW4gYSBzdGF0aWNhbGx5IHBvc2l0aW9uZWQgZWxlbWVudCBpcyBpZGVudGlmaWVkXG4gICAgICAgICAgICAgICAgZG9jID0gZWxlbS5vd25lckRvY3VtZW50O1xuICAgICAgICAgICAgICAgIG9mZnNldFBhcmVudCA9IGVsZW0ub2Zmc2V0UGFyZW50IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgd2hpbGUgKG9mZnNldFBhcmVudCAmJlxuICAgICAgICAgICAgICAgIChvZmZzZXRQYXJlbnQgPT09IGRvYy5ib2R5IHx8IG9mZnNldFBhcmVudCA9PT0gZG9jLmRvY3VtZW50RWxlbWVudCkgJiZcbiAgICAgICAgICAgICAgICBqUXVlcnkuY3NzKG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiKSA9PT0gXCJzdGF0aWNcIikge1xuXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudCAhPT0gZWxlbSAmJiBvZmZzZXRQYXJlbnQubm9kZVR5cGUgPT09IDEpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJbmNvcnBvcmF0ZSBib3JkZXJzIGludG8gaXRzIG9mZnNldCwgc2luY2UgdGhleSBhcmUgb3V0c2lkZSBpdHMgY29udGVudCBvcmlnaW5cbiAgICAgICAgICAgICAgICAgICAgcGFyZW50T2Zmc2V0ID0galF1ZXJ5KG9mZnNldFBhcmVudCkub2Zmc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE9mZnNldC50b3AgKz0galF1ZXJ5LmNzcyhvZmZzZXRQYXJlbnQsIFwiYm9yZGVyVG9wV2lkdGhcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudE9mZnNldC5sZWZ0ICs9IGpRdWVyeS5jc3Mob2Zmc2V0UGFyZW50LCBcImJvcmRlckxlZnRXaWR0aFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIGpRdWVyeS5jc3MoZWxlbSwgXCJtYXJnaW5Ub3BcIiwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgbGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdCAtIGpRdWVyeS5jc3MoZWxlbSwgXCJtYXJnaW5MZWZ0XCIsIHRydWUpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGRvY3VtZW50RWxlbWVudCBpbiB0aGUgZm9sbG93aW5nIGNhc2VzOlxuICAgICAgICAvLyAxKSBGb3IgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWUgd2l0aG91dCBvZmZzZXRQYXJlbnQsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuXG4gICAgICAgIC8vICAgIGRvY3VtZW50RWxlbWVudCBvZiB0aGUgcGFyZW50IHdpbmRvd1xuICAgICAgICAvLyAyKSBGb3IgdGhlIGhpZGRlbiBvciBkZXRhY2hlZCBlbGVtZW50XG4gICAgICAgIC8vIDMpIEZvciBib2R5IG9yIGh0bWwgZWxlbWVudCwgaS5lLiBpbiBjYXNlIG9mIHRoZSBodG1sIG5vZGUgLSBpdCB3aWxsIHJldHVybiBpdHNlbGZcbiAgICAgICAgLy9cbiAgICAgICAgLy8gYnV0IHRob3NlIGV4Y2VwdGlvbnMgd2VyZSBuZXZlciBwcmVzZW50ZWQgYXMgYSByZWFsIGxpZmUgdXNlLWNhc2VzXG4gICAgICAgIC8vIGFuZCBtaWdodCBiZSBjb25zaWRlcmVkIGFzIG1vcmUgcHJlZmVyYWJsZSByZXN1bHRzLlxuICAgICAgICAvL1xuICAgICAgICAvLyBUaGlzIGxvZ2ljLCBob3dldmVyLCBpcyBub3QgZ3VhcmFudGVlZCBhbmQgY2FuIGNoYW5nZSBhdCBhbnkgcG9pbnQgaW4gdGhlIGZ1dHVyZVxuICAgICAgICBvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50O1xuXG4gICAgICAgICAgICAgICAgd2hpbGUgKG9mZnNldFBhcmVudCAmJiBqUXVlcnkuY3NzKG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiKSA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgICAgICAgICAgICBvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnRFbGVtZW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuLy8gQ3JlYXRlIHNjcm9sbExlZnQgYW5kIHNjcm9sbFRvcCBtZXRob2RzXG4gICAgalF1ZXJ5LmVhY2goe3Njcm9sbExlZnQ6IFwicGFnZVhPZmZzZXRcIiwgc2Nyb2xsVG9wOiBcInBhZ2VZT2Zmc2V0XCJ9LCBmdW5jdGlvbiAobWV0aG9kLCBwcm9wKSB7XG4gICAgICAgIHZhciB0b3AgPSBcInBhZ2VZT2Zmc2V0XCIgPT09IHByb3A7XG5cbiAgICAgICAgalF1ZXJ5LmZuW21ldGhvZF0gPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gYWNjZXNzKHRoaXMsIGZ1bmN0aW9uIChlbGVtLCBtZXRob2QsIHZhbCkge1xuXG4gICAgICAgICAgICAgICAgLy8gQ29hbGVzY2UgZG9jdW1lbnRzIGFuZCB3aW5kb3dzXG4gICAgICAgICAgICAgICAgdmFyIHdpbjtcbiAgICAgICAgICAgICAgICBpZiAoaXNXaW5kb3coZWxlbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luID0gZWxlbTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luID0gZWxlbS5kZWZhdWx0VmlldztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHdpbiA/IHdpbltwcm9wXSA6IGVsZW1bbWV0aG9kXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAod2luKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbi5zY3JvbGxUbyhcbiAgICAgICAgICAgICAgICAgICAgICAgICF0b3AgPyB2YWwgOiB3aW4ucGFnZVhPZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgPyB2YWwgOiB3aW4ucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1bbWV0aG9kXSA9IHZhbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBtZXRob2QsIHZhbCwgYXJndW1lbnRzLmxlbmd0aCk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbi8vIFN1cHBvcnQ6IFNhZmFyaSA8PTcgLSA5LjEsIENocm9tZSA8PTM3IC0gNDlcbi8vIEFkZCB0aGUgdG9wL2xlZnQgY3NzSG9va3MgdXNpbmcgalF1ZXJ5LmZuLnBvc2l0aW9uXG4vLyBXZWJraXQgYnVnOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkwODRcbi8vIEJsaW5rIGJ1ZzogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTg5MzQ3XG4vLyBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgcGVyY2VudCB3aGVuIHNwZWNpZmllZCBmb3IgdG9wL2xlZnQvYm90dG9tL3JpZ2h0O1xuLy8gcmF0aGVyIHRoYW4gbWFrZSB0aGUgY3NzIG1vZHVsZSBkZXBlbmQgb24gdGhlIG9mZnNldCBtb2R1bGUsIGp1c3QgY2hlY2sgZm9yIGl0IGhlcmVcbiAgICBqUXVlcnkuZWFjaChbXCJ0b3BcIiwgXCJsZWZ0XCJdLCBmdW5jdGlvbiAoaSwgcHJvcCkge1xuICAgICAgICBqUXVlcnkuY3NzSG9va3NbcHJvcF0gPSBhZGRHZXRIb29rSWYoc3VwcG9ydC5waXhlbFBvc2l0aW9uLFxuICAgICAgICAgICAgZnVuY3Rpb24gKGVsZW0sIGNvbXB1dGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbXB1dGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkID0gY3VyQ1NTKGVsZW0sIHByb3ApO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIGN1ckNTUyByZXR1cm5zIHBlcmNlbnRhZ2UsIGZhbGxiYWNrIHRvIG9mZnNldFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm51bW5vbnB4LnRlc3QoY29tcHV0ZWQpID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeShlbGVtKS5wb3NpdGlvbigpW3Byb3BdICsgXCJweFwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXB1dGVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9KTtcblxuXG4vLyBDcmVhdGUgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGgsIGhlaWdodCwgd2lkdGgsIG91dGVySGVpZ2h0IGFuZCBvdXRlcldpZHRoIG1ldGhvZHNcbiAgICBqUXVlcnkuZWFjaCh7SGVpZ2h0OiBcImhlaWdodFwiLCBXaWR0aDogXCJ3aWR0aFwifSwgZnVuY3Rpb24gKG5hbWUsIHR5cGUpIHtcbiAgICAgICAgalF1ZXJ5LmVhY2goe3BhZGRpbmc6IFwiaW5uZXJcIiArIG5hbWUsIGNvbnRlbnQ6IHR5cGUsIFwiXCI6IFwib3V0ZXJcIiArIG5hbWV9LFxuICAgICAgICAgICAgZnVuY3Rpb24gKGRlZmF1bHRFeHRyYSwgZnVuY05hbWUpIHtcblxuICAgICAgICAgICAgICAgIC8vIE1hcmdpbiBpcyBvbmx5IGZvciBvdXRlckhlaWdodCwgb3V0ZXJXaWR0aFxuICAgICAgICAgICAgICAgIGpRdWVyeS5mbltmdW5jTmFtZV0gPSBmdW5jdGlvbiAobWFyZ2luLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2hhaW5hYmxlID0gYXJndW1lbnRzLmxlbmd0aCAmJiAoZGVmYXVsdEV4dHJhIHx8IHR5cGVvZiBtYXJnaW4gIT09IFwiYm9vbGVhblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhID0gZGVmYXVsdEV4dHJhIHx8IChtYXJnaW4gPT09IHRydWUgfHwgdmFsdWUgPT09IHRydWUgPyBcIm1hcmdpblwiIDogXCJib3JkZXJcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjY2Vzcyh0aGlzLCBmdW5jdGlvbiAoZWxlbSwgdHlwZSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkb2M7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1dpbmRvdyhlbGVtKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gJCggd2luZG93ICkub3V0ZXJXaWR0aC9IZWlnaHQgcmV0dXJuIHcvaCBpbmNsdWRpbmcgc2Nyb2xsYmFycyAoZ2gtMTcyOSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZnVuY05hbWUuaW5kZXhPZihcIm91dGVyXCIpID09PSAwID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbVtcImlubmVyXCIgKyBuYW1lXSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50W1wiY2xpZW50XCIgKyBuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gR2V0IGRvY3VtZW50IHdpZHRoIG9yIGhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW0ubm9kZVR5cGUgPT09IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MgPSBlbGVtLmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVpdGhlciBzY3JvbGxbV2lkdGgvSGVpZ2h0XSBvciBvZmZzZXRbV2lkdGgvSGVpZ2h0XSBvciBjbGllbnRbV2lkdGgvSGVpZ2h0XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3aGljaGV2ZXIgaXMgZ3JlYXRlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYm9keVtcInNjcm9sbFwiICsgbmFtZV0sIGRvY1tcInNjcm9sbFwiICsgbmFtZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW0uYm9keVtcIm9mZnNldFwiICsgbmFtZV0sIGRvY1tcIm9mZnNldFwiICsgbmFtZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY1tcImNsaWVudFwiICsgbmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50LCByZXF1ZXN0aW5nIGJ1dCBub3QgZm9yY2luZyBwYXJzZUZsb2F0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgalF1ZXJ5LmNzcyhlbGVtLCB0eXBlLCBleHRyYSkgOlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpRdWVyeS5zdHlsZShlbGVtLCB0eXBlLCB2YWx1ZSwgZXh0cmEpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0eXBlLCBjaGFpbmFibGUgPyBtYXJnaW4gOiB1bmRlZmluZWQsIGNoYWluYWJsZSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgIH0pO1xuXG5cbiAgICBqUXVlcnkuZWFjaCgoXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBcIiArXG4gICAgICAgIFwibW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgXCIgK1xuICAgICAgICBcImNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIikuc3BsaXQoXCIgXCIpLFxuICAgICAgICBmdW5jdGlvbiAoaSwgbmFtZSkge1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgZXZlbnQgYmluZGluZ1xuICAgICAgICAgICAgalF1ZXJ5LmZuW25hbWVdID0gZnVuY3Rpb24gKGRhdGEsIGZuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbihuYW1lLCBudWxsLCBkYXRhLCBmbikgOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXIobmFtZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgIGpRdWVyeS5mbi5leHRlbmQoe1xuICAgICAgICBob3ZlcjogZnVuY3Rpb24gKGZuT3ZlciwgZm5PdXQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdXNlZW50ZXIoZm5PdmVyKS5tb3VzZWxlYXZlKGZuT3V0IHx8IGZuT3Zlcik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuXG4gICAgalF1ZXJ5LmZuLmV4dGVuZCh7XG5cbiAgICAgICAgYmluZDogZnVuY3Rpb24gKHR5cGVzLCBkYXRhLCBmbikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMub24odHlwZXMsIG51bGwsIGRhdGEsIGZuKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5iaW5kOiBmdW5jdGlvbiAodHlwZXMsIGZuKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vZmYodHlwZXMsIG51bGwsIGZuKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxlZ2F0ZTogZnVuY3Rpb24gKHNlbGVjdG9yLCB0eXBlcywgZGF0YSwgZm4pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9uKHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4pO1xuICAgICAgICB9LFxuICAgICAgICB1bmRlbGVnYXRlOiBmdW5jdGlvbiAoc2VsZWN0b3IsIHR5cGVzLCBmbikge1xuXG4gICAgICAgICAgICAvLyAoIG5hbWVzcGFjZSApIG9yICggc2VsZWN0b3IsIHR5cGVzIFssIGZuXSApXG4gICAgICAgICAgICByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/XG4gICAgICAgICAgICAgICAgdGhpcy5vZmYoc2VsZWN0b3IsIFwiKipcIikgOlxuICAgICAgICAgICAgICAgIHRoaXMub2ZmKHR5cGVzLCBzZWxlY3RvciB8fCBcIioqXCIsIGZuKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4vLyBCaW5kIGEgZnVuY3Rpb24gdG8gYSBjb250ZXh0LCBvcHRpb25hbGx5IHBhcnRpYWxseSBhcHBseWluZyBhbnlcbi8vIGFyZ3VtZW50cy5cbi8vIGpRdWVyeS5wcm94eSBpcyBkZXByZWNhdGVkIHRvIHByb21vdGUgc3RhbmRhcmRzIChzcGVjaWZpY2FsbHkgRnVuY3Rpb24jYmluZClcbi8vIEhvd2V2ZXIsIGl0IGlzIG5vdCBzbGF0ZWQgZm9yIHJlbW92YWwgYW55IHRpbWUgc29vblxuICAgIGpRdWVyeS5wcm94eSA9IGZ1bmN0aW9uIChmbiwgY29udGV4dCkge1xuICAgICAgICB2YXIgdG1wLCBhcmdzLCBwcm94eTtcblxuICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRtcCA9IGZuW2NvbnRleHRdO1xuICAgICAgICAgICAgY29udGV4dCA9IGZuO1xuICAgICAgICAgICAgZm4gPSB0bXA7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBRdWljayBjaGVjayB0byBkZXRlcm1pbmUgaWYgdGFyZ2V0IGlzIGNhbGxhYmxlLCBpbiB0aGUgc3BlY1xuICAgICAgICAvLyB0aGlzIHRocm93cyBhIFR5cGVFcnJvciwgYnV0IHdlIHdpbGwganVzdCByZXR1cm4gdW5kZWZpbmVkLlxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2ltdWxhdGVkIGJpbmRcbiAgICAgICAgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKTtcbiAgICAgICAgcHJveHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCB8fCB0aGlzLCBhcmdzLmNvbmNhdChzbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBTZXQgdGhlIGd1aWQgb2YgdW5pcXVlIGhhbmRsZXIgdG8gdGhlIHNhbWUgb2Ygb3JpZ2luYWwgaGFuZGxlciwgc28gaXQgY2FuIGJlIHJlbW92ZWRcbiAgICAgICAgcHJveHkuZ3VpZCA9IGZuLmd1aWQgPSBmbi5ndWlkIHx8IGpRdWVyeS5ndWlkKys7XG5cbiAgICAgICAgcmV0dXJuIHByb3h5O1xuICAgIH07XG5cbiAgICBqUXVlcnkuaG9sZFJlYWR5ID0gZnVuY3Rpb24gKGhvbGQpIHtcbiAgICAgICAgaWYgKGhvbGQpIHtcbiAgICAgICAgICAgIGpRdWVyeS5yZWFkeVdhaXQrKztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGpRdWVyeS5yZWFkeSh0cnVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgalF1ZXJ5LmlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuICAgIGpRdWVyeS5wYXJzZUpTT04gPSBKU09OLnBhcnNlO1xuICAgIGpRdWVyeS5ub2RlTmFtZSA9IG5vZGVOYW1lO1xuICAgIGpRdWVyeS5pc0Z1bmN0aW9uID0gaXNGdW5jdGlvbjtcbiAgICBqUXVlcnkuaXNXaW5kb3cgPSBpc1dpbmRvdztcbiAgICBqUXVlcnkuY2FtZWxDYXNlID0gY2FtZWxDYXNlO1xuICAgIGpRdWVyeS50eXBlID0gdG9UeXBlO1xuXG4gICAgalF1ZXJ5Lm5vdyA9IERhdGUubm93O1xuXG4gICAgalF1ZXJ5LmlzTnVtZXJpYyA9IGZ1bmN0aW9uIChvYmopIHtcblxuICAgICAgICAvLyBBcyBvZiBqUXVlcnkgMy4wLCBpc051bWVyaWMgaXMgbGltaXRlZCB0b1xuICAgICAgICAvLyBzdHJpbmdzIGFuZCBudW1iZXJzIChwcmltaXRpdmVzIG9yIG9iamVjdHMpXG4gICAgICAgIC8vIHRoYXQgY2FuIGJlIGNvZXJjZWQgdG8gZmluaXRlIG51bWJlcnMgKGdoLTI2NjIpXG4gICAgICAgIHZhciB0eXBlID0galF1ZXJ5LnR5cGUob2JqKTtcbiAgICAgICAgcmV0dXJuICh0eXBlID09PSBcIm51bWJlclwiIHx8IHR5cGUgPT09IFwic3RyaW5nXCIpICYmXG5cbiAgICAgICAgICAgIC8vIHBhcnNlRmxvYXQgTmFOcyBudW1lcmljLWNhc3QgZmFsc2UgcG9zaXRpdmVzIChcIlwiKVxuICAgICAgICAgICAgLy8gLi4uYnV0IG1pc2ludGVycHJldHMgbGVhZGluZy1udW1iZXIgc3RyaW5ncywgcGFydGljdWxhcmx5IGhleCBsaXRlcmFscyAoXCIweC4uLlwiKVxuICAgICAgICAgICAgLy8gc3VidHJhY3Rpb24gZm9yY2VzIGluZmluaXRpZXMgdG8gTmFOXG4gICAgICAgICAgICAhaXNOYU4ob2JqIC0gcGFyc2VGbG9hdChvYmopKTtcbiAgICB9O1xuXG5cbi8vIFJlZ2lzdGVyIGFzIGEgbmFtZWQgQU1EIG1vZHVsZSwgc2luY2UgalF1ZXJ5IGNhbiBiZSBjb25jYXRlbmF0ZWQgd2l0aCBvdGhlclxuLy8gZmlsZXMgdGhhdCBtYXkgdXNlIGRlZmluZSwgYnV0IG5vdCB2aWEgYSBwcm9wZXIgY29uY2F0ZW5hdGlvbiBzY3JpcHQgdGhhdFxuLy8gdW5kZXJzdGFuZHMgYW5vbnltb3VzIEFNRCBtb2R1bGVzLiBBIG5hbWVkIEFNRCBpcyBzYWZlc3QgYW5kIG1vc3Qgcm9idXN0XG4vLyB3YXkgdG8gcmVnaXN0ZXIuIExvd2VyY2FzZSBqcXVlcnkgaXMgdXNlZCBiZWNhdXNlIEFNRCBtb2R1bGUgbmFtZXMgYXJlXG4vLyBkZXJpdmVkIGZyb20gZmlsZSBuYW1lcywgYW5kIGpRdWVyeSBpcyBub3JtYWxseSBkZWxpdmVyZWQgaW4gYSBsb3dlcmNhc2Vcbi8vIGZpbGUgbmFtZS4gRG8gdGhpcyBhZnRlciBjcmVhdGluZyB0aGUgZ2xvYmFsIHNvIHRoYXQgaWYgYW4gQU1EIG1vZHVsZSB3YW50c1xuLy8gdG8gY2FsbCBub0NvbmZsaWN0IHRvIGhpZGUgdGhpcyB2ZXJzaW9uIG9mIGpRdWVyeSwgaXQgd2lsbCB3b3JrLlxuXG4vLyBOb3RlIHRoYXQgZm9yIG1heGltdW0gcG9ydGFiaWxpdHksIGxpYnJhcmllcyB0aGF0IGFyZSBub3QgalF1ZXJ5IHNob3VsZFxuLy8gZGVjbGFyZSB0aGVtc2VsdmVzIGFzIGFub255bW91cyBtb2R1bGVzLCBhbmQgYXZvaWQgc2V0dGluZyBhIGdsb2JhbCBpZiBhblxuLy8gQU1EIGxvYWRlciBpcyBwcmVzZW50LiBqUXVlcnkgaXMgYSBzcGVjaWFsIGNhc2UuIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9qcmJ1cmtlL3JlcXVpcmVqcy93aWtpL1VwZGF0aW5nLWV4aXN0aW5nLWxpYnJhcmllcyN3aWtpLWFub25cblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgICAgICBkZWZpbmUoXCJqcXVlcnlcIiwgW10sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBqUXVlcnk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgdmFyXG5cbiAgICAgICAgLy8gTWFwIG92ZXIgalF1ZXJ5IGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG4gICAgICAgIF9qUXVlcnkgPSB3aW5kb3cualF1ZXJ5LFxuXG4gICAgICAgIC8vIE1hcCBvdmVyIHRoZSAkIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG4gICAgICAgIF8kID0gd2luZG93LiQ7XG5cbiAgICBqUXVlcnkubm9Db25mbGljdCA9IGZ1bmN0aW9uIChkZWVwKSB7XG4gICAgICAgIGlmICh3aW5kb3cuJCA9PT0galF1ZXJ5KSB7XG4gICAgICAgICAgICB3aW5kb3cuJCA9IF8kO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZXAgJiYgd2luZG93LmpRdWVyeSA9PT0galF1ZXJ5KSB7XG4gICAgICAgICAgICB3aW5kb3cualF1ZXJ5ID0gX2pRdWVyeTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBqUXVlcnk7XG4gICAgfTtcblxuLy8gRXhwb3NlIGpRdWVyeSBhbmQgJCBpZGVudGlmaWVycywgZXZlbiBpbiBBTURcbi8vICgjNzEwMiNjb21tZW50OjEwLCBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9wdWxsLzU1Nylcbi8vIGFuZCBDb21tb25KUyBmb3IgYnJvd3NlciBlbXVsYXRvcnMgKCMxMzU2NilcbiAgICBpZiAoIW5vR2xvYmFsKSB7XG4gICAgICAgIHdpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9IGpRdWVyeTtcbiAgICB9XG5cblxuICAgIHJldHVybiBqUXVlcnk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIl0sInNvdXJjZVJvb3QiOiIifQ==