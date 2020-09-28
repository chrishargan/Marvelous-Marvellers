// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Key.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privateKey = exports.key = void 0;
exports.key = 'aae345bc386a1e9f48febbddcc37698f';
exports.privateKey = '8f513f7afa430d44fd8d344daf7c5fc95b3d9537';
},{}],"node_modules/md5-typescript/dist/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Md5 = void 0;

var Md5 =
/** @class */
function () {
  function Md5() {}

  Md5.AddUnsigned = function (lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 0x80000000;
    lY8 = lY & 0x80000000;
    lX4 = lX & 0x40000000;
    lY4 = lY & 0x40000000;
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

    if (!!(lX4 & lY4)) {
      return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }

    if (!!(lX4 | lY4)) {
      if (!!(lResult & 0x40000000)) {
        return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
      } else {
        return lResult ^ 0x40000000 ^ lX8 ^ lY8;
      }
    } else {
      return lResult ^ lX8 ^ lY8;
    }
  };

  Md5.FF = function (a, b, c, d, x, s, ac) {
    a = this.AddUnsigned(a, this.AddUnsigned(this.AddUnsigned(this.F(b, c, d), x), ac));
    return this.AddUnsigned(this.RotateLeft(a, s), b);
  };

  Md5.GG = function (a, b, c, d, x, s, ac) {
    a = this.AddUnsigned(a, this.AddUnsigned(this.AddUnsigned(this.G(b, c, d), x), ac));
    return this.AddUnsigned(this.RotateLeft(a, s), b);
  };

  Md5.HH = function (a, b, c, d, x, s, ac) {
    a = this.AddUnsigned(a, this.AddUnsigned(this.AddUnsigned(this.H(b, c, d), x), ac));
    return this.AddUnsigned(this.RotateLeft(a, s), b);
  };

  Md5.II = function (a, b, c, d, x, s, ac) {
    a = this.AddUnsigned(a, this.AddUnsigned(this.AddUnsigned(this.I(b, c, d), x), ac));
    return this.AddUnsigned(this.RotateLeft(a, s), b);
  };

  Md5.ConvertToWordArray = function (string) {
    var lWordCount,
        lMessageLength = string.length,
        lNumberOfWords_temp1 = lMessageLength + 8,
        lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64,
        lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16,
        lWordArray = Array(lNumberOfWords - 1),
        lBytePosition = 0,
        lByteCount = 0;

    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
      lByteCount++;
    }

    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  };

  Md5.WordToHex = function (lValue) {
    var WordToHexValue = "",
        WordToHexValue_temp = "",
        lByte,
        lCount;

    for (lCount = 0; lCount <= 3; lCount++) {
      lByte = lValue >>> lCount * 8 & 255;
      WordToHexValue_temp = "0" + lByte.toString(16);
      WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }

    return WordToHexValue;
  };

  Md5.Utf8Encode = function (string) {
    var utftext = "",
        c;
    string = string.replace(/\r\n/g, "\n");

    for (var n = 0; n < string.length; n++) {
      c = string.charCodeAt(n);

      if (c < 128) {
        utftext += String.fromCharCode(c);
      } else if (c > 127 && c < 2048) {
        utftext += String.fromCharCode(c >> 6 | 192);
        utftext += String.fromCharCode(c & 63 | 128);
      } else {
        utftext += String.fromCharCode(c >> 12 | 224);
        utftext += String.fromCharCode(c >> 6 & 63 | 128);
        utftext += String.fromCharCode(c & 63 | 128);
      }
    }

    return utftext;
  };

  Md5.init = function (string) {
    var temp;
    if (typeof string !== 'string') string = JSON.stringify(string);
    this._string = this.Utf8Encode(string);
    this.x = this.ConvertToWordArray(this._string);
    this.a = 0x67452301;
    this.b = 0xEFCDAB89;
    this.c = 0x98BADCFE;
    this.d = 0x10325476;

    for (this.k = 0; this.k < this.x.length; this.k += 16) {
      this.AA = this.a;
      this.BB = this.b;
      this.CC = this.c;
      this.DD = this.d;
      this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k], this.S11, 0xD76AA478);
      this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 1], this.S12, 0xE8C7B756);
      this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 2], this.S13, 0x242070DB);
      this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 3], this.S14, 0xC1BDCEEE);
      this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k + 4], this.S11, 0xF57C0FAF);
      this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 5], this.S12, 0x4787C62A);
      this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 6], this.S13, 0xA8304613);
      this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 7], this.S14, 0xFD469501);
      this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k + 8], this.S11, 0x698098D8);
      this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 9], this.S12, 0x8B44F7AF);
      this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 10], this.S13, 0xFFFF5BB1);
      this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 11], this.S14, 0x895CD7BE);
      this.a = this.FF(this.a, this.b, this.c, this.d, this.x[this.k + 12], this.S11, 0x6B901122);
      this.d = this.FF(this.d, this.a, this.b, this.c, this.x[this.k + 13], this.S12, 0xFD987193);
      this.c = this.FF(this.c, this.d, this.a, this.b, this.x[this.k + 14], this.S13, 0xA679438E);
      this.b = this.FF(this.b, this.c, this.d, this.a, this.x[this.k + 15], this.S14, 0x49B40821);
      this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 1], this.S21, 0xF61E2562);
      this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 6], this.S22, 0xC040B340);
      this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 11], this.S23, 0x265E5A51);
      this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k], this.S24, 0xE9B6C7AA);
      this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 5], this.S21, 0xD62F105D);
      this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 10], this.S22, 0x2441453);
      this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 15], this.S23, 0xD8A1E681);
      this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k + 4], this.S24, 0xE7D3FBC8);
      this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 9], this.S21, 0x21E1CDE6);
      this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 14], this.S22, 0xC33707D6);
      this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 3], this.S23, 0xF4D50D87);
      this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k + 8], this.S24, 0x455A14ED);
      this.a = this.GG(this.a, this.b, this.c, this.d, this.x[this.k + 13], this.S21, 0xA9E3E905);
      this.d = this.GG(this.d, this.a, this.b, this.c, this.x[this.k + 2], this.S22, 0xFCEFA3F8);
      this.c = this.GG(this.c, this.d, this.a, this.b, this.x[this.k + 7], this.S23, 0x676F02D9);
      this.b = this.GG(this.b, this.c, this.d, this.a, this.x[this.k + 12], this.S24, 0x8D2A4C8A);
      this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 5], this.S31, 0xFFFA3942);
      this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k + 8], this.S32, 0x8771F681);
      this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 11], this.S33, 0x6D9D6122);
      this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 14], this.S34, 0xFDE5380C);
      this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 1], this.S31, 0xA4BEEA44);
      this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k + 4], this.S32, 0x4BDECFA9);
      this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 7], this.S33, 0xF6BB4B60);
      this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 10], this.S34, 0xBEBFBC70);
      this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 13], this.S31, 0x289B7EC6);
      this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k], this.S32, 0xEAA127FA);
      this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 3], this.S33, 0xD4EF3085);
      this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 6], this.S34, 0x4881D05);
      this.a = this.HH(this.a, this.b, this.c, this.d, this.x[this.k + 9], this.S31, 0xD9D4D039);
      this.d = this.HH(this.d, this.a, this.b, this.c, this.x[this.k + 12], this.S32, 0xE6DB99E5);
      this.c = this.HH(this.c, this.d, this.a, this.b, this.x[this.k + 15], this.S33, 0x1FA27CF8);
      this.b = this.HH(this.b, this.c, this.d, this.a, this.x[this.k + 2], this.S34, 0xC4AC5665);
      this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k], this.S41, 0xF4292244);
      this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 7], this.S42, 0x432AFF97);
      this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 14], this.S43, 0xAB9423A7);
      this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 5], this.S44, 0xFC93A039);
      this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k + 12], this.S41, 0x655B59C3);
      this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 3], this.S42, 0x8F0CCC92);
      this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 10], this.S43, 0xFFEFF47D);
      this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 1], this.S44, 0x85845DD1);
      this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k + 8], this.S41, 0x6FA87E4F);
      this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 15], this.S42, 0xFE2CE6E0);
      this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 6], this.S43, 0xA3014314);
      this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 13], this.S44, 0x4E0811A1);
      this.a = this.II(this.a, this.b, this.c, this.d, this.x[this.k + 4], this.S41, 0xF7537E82);
      this.d = this.II(this.d, this.a, this.b, this.c, this.x[this.k + 11], this.S42, 0xBD3AF235);
      this.c = this.II(this.c, this.d, this.a, this.b, this.x[this.k + 2], this.S43, 0x2AD7D2BB);
      this.b = this.II(this.b, this.c, this.d, this.a, this.x[this.k + 9], this.S44, 0xEB86D391);
      this.a = this.AddUnsigned(this.a, this.AA);
      this.b = this.AddUnsigned(this.b, this.BB);
      this.c = this.AddUnsigned(this.c, this.CC);
      this.d = this.AddUnsigned(this.d, this.DD);
    }

    temp = this.WordToHex(this.a) + this.WordToHex(this.b) + this.WordToHex(this.c) + this.WordToHex(this.d);
    return temp.toLowerCase();
  };

  Md5.x = Array();
  Md5.S11 = 7;
  Md5.S12 = 12;
  Md5.S13 = 17;
  Md5.S14 = 22;
  Md5.S21 = 5;
  Md5.S22 = 9;
  Md5.S23 = 14;
  Md5.S24 = 20;
  Md5.S31 = 4;
  Md5.S32 = 11;
  Md5.S33 = 16;
  Md5.S34 = 23;
  Md5.S41 = 6;
  Md5.S42 = 10;
  Md5.S43 = 15;
  Md5.S44 = 21;

  Md5.RotateLeft = function (lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
  };

  Md5.F = function (x, y, z) {
    return x & y | ~x & z;
  };

  Md5.G = function (x, y, z) {
    return x & z | y & ~z;
  };

  Md5.H = function (x, y, z) {
    return x ^ y ^ z;
  };

  Md5.I = function (x, y, z) {
    return y ^ (x | ~z);
  };

  return Md5;
}();

exports.Md5 = Md5;
},{}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Key_1 = require("./Key");

var md5_typescript_1 = require("md5-typescript");

console.log(md5_typescript_1.Md5.init('test'));
var apiKey = Key_1.key;
var hash = '697d2495efd5e542816d2261a01898d8'; //let hash = Md5.init(1 + privateKey + key);

var url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=' + Key_1.key + '&hash=' + hash;
console.log(hash);
fetch(url).then(function (response) {
  return response.json();
}).then(function (data) {
  return console.log(data);
});
},{"./Key":"Key.ts","md5-typescript":"node_modules/md5-typescript/dist/index.js"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43073" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/Marvelous-Marvellers.77de5100.js.map