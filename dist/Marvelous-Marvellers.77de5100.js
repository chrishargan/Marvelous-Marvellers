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
})({"class/Player.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = void 0;

var Player = /*#__PURE__*/function () {
  function Player(name, money, victories, defeats, team) {
    _classCallCheck(this, Player);

    this._profileImg = "Img/defaultavatar.jpg";
    console.log(team);
    this._name = name;
    this._money = money;
    this._victories = victories;
    this._defeats = defeats;
    this._team = team;
  }

  _createClass(Player, [{
    key: "addMoney",
    value: function addMoney(amount) {
      this._money += amount;
      return this._money;
    }
  }, {
    key: "substractMoney",
    value: function substractMoney(amount) {
      this._money -= amount;
      return this._money;
    }
  }, {
    key: "addToTeam",
    value: function addToTeam(character) {
      this.team.set(character.slug, character);
    }
  }, {
    key: "handleBuying",
    value: function handleBuying(character) {
      if (this.team.has(character.slug)) return "You already have this character in your team!";
      if (character.showPrice() > this.money) return "You don't have enough money to buy this character!";
      this.addToTeam(character);
      return "Congratulations! You just bought " + character.name + "!";
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "money",
    get: function get() {
      return this._money;
    }
  }, {
    key: "victories",
    get: function get() {
      return this._victories;
    }
  }, {
    key: "defeats",
    get: function get() {
      return this._defeats;
    }
  }, {
    key: "profileImg",
    get: function get() {
      return this._profileImg;
    }
  }, {
    key: "team",
    get: function get() {
      return this._team;
    }
  }]);

  return Player;
}();

exports.Player = Player;
},{}],"class/CharacterList.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharacterList = void 0;

var CharacterList = /*#__PURE__*/function () {
  function CharacterList() {
    _classCallCheck(this, CharacterList);

    this.map = new Map();
  }

  _createClass(CharacterList, [{
    key: "add",
    value: function add(hero) {
      this.map.set(hero.slug, hero);
    }
  }, {
    key: "search",
    value: function search(name) {
      if (this.map.has(name)) {
        return this.map.get(name);
      } else return null;
    }
  }]);

  return CharacterList;
}();

exports.CharacterList = CharacterList;
},{}],"class/Character.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Character = void 0;

var Character = /*#__PURE__*/function () {
  function Character(id, name, slug, stats, avatar) {
    _classCallCheck(this, Character);

    this.id = id;
    this._name = name;
    this._slug = slug;
    this._stats = stats;
    this.avatar = avatar;
  }

  _createClass(Character, [{
    key: "showPrice",
    value: function showPrice() {
      return (this._stats.intelligence + this._stats.combat + this._stats.durability + this._stats.strength + this._stats.power + this._stats.speed) * 3;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "slug",
    get: function get() {
      return this._slug;
    }
  }, {
    key: "stats",
    get: function get() {
      return this._stats;
    }
  }]);

  return Character;
}();

exports.Character = Character;
},{}],"class/Stats.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stats = void 0;

var Stats = /*#__PURE__*/function () {
  function Stats(intelligence, strength, speed, durability, power, combat) {
    _classCallCheck(this, Stats);

    this._intelligence = intelligence;
    this._strength = strength;
    this._speed = speed;
    this._durability = durability;
    this._power = power;
    this._combat = combat;
  }

  _createClass(Stats, [{
    key: "intelligence",
    get: function get() {
      return this._intelligence;
    }
  }, {
    key: "strength",
    get: function get() {
      return this._strength;
    }
  }, {
    key: "speed",
    get: function get() {
      return this._speed;
    }
  }, {
    key: "durability",
    get: function get() {
      return this._durability;
    }
  }, {
    key: "power",
    get: function get() {
      return this._power;
    }
  }, {
    key: "combat",
    get: function get() {
      return this._combat;
    }
  }]);

  return Stats;
}();

exports.Stats = Stats;
},{}],"class/Avatar.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Avatar = void 0;

var Avatar =
/** @class */
function () {
  function Avatar(portrait) {
    this.portrait = portrait;
  }

  return Avatar;
}();

exports.Avatar = Avatar;
},{}],"class/Page.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Page = void 0;

var Page = /*#__PURE__*/function () {
  function Page() {
    _classCallCheck(this, Page);
  }

  _createClass(Page, null, [{
    key: "showElementById",
    value: function showElementById(id) {
      document.getElementById(id).style.display = "block";
    }
  }, {
    key: "hideElementById",
    value: function hideElementById(id) {
      document.getElementById(id).style.display = "none";
    }
  }, {
    key: "showPlayerInfo",
    value: function showPlayerInfo(player) {
      document.getElementById("player_name").innerText = player.name;
      document.getElementById("player-losses").innerText = String(player.defeats);
      document.getElementById("player-wins").innerText = String(player.victories);
      document.getElementById("player-money").innerText = String(player.money);
    }
  }, {
    key: "showCharacterStat",
    value: function showCharacterStat(id, description, stat) {
      document.getElementById(id).innerText = description + stat;
    }
  }, {
    key: "showAllStats",
    value: function showAllStats(character) {
      this.showElementById('character-info');
      document.getElementById('character-name').innerText = character.name;
      document.getElementById('character-price').innerText = "Price: $" + character.showPrice();
      document.getElementById('buy-character').dataset.character = character.slug;
      this.showCharacterStat('character-intelligence', 'Intelligence: ', character.stats.intelligence);
      this.showCharacterStat('character-speed', 'Speed: ', character.stats.speed);
      this.showCharacterStat('character-combat', 'Combat: ', character.stats.combat);
      this.showCharacterStat('character-strength', 'Strength: ', character.stats.strength);
      this.showCharacterStat('character-power', 'Power: ', character.stats.power);
      this.showCharacterStat('character-durability', 'Durability: ', character.stats.durability);
    }
  }]);

  return Page;
}();

exports.Page = Page;
},{}],"class/Game.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = void 0;

var Player_1 = require("./Player");

var Page_1 = require("./Page");

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);
  }

  _createClass(Game, null, [{
    key: "setPlayer",
    value: function setPlayer(name) {
      var player = new Player_1.Player(name, 1000, 0, 0, new Map()); //localStorage.setItem('player', JSON.stringify(player));

      this._player = player;
      Page_1.Page.showPlayerInfo(player);
      Page_1.Page.showElementById('player-header');
    }
  }, {
    key: "player",
    get: function get() {
      return this._player;
    },
    set: function set(value) {
      this._player = value; //localStorage.setItem('player', JSON.stringify(value));

      if (value) {
        Page_1.Page.showPlayerInfo(value);
        Page_1.Page.showElementById('player-header');
      }
    }
  }]);

  return Game;
}();

exports.Game = Game;
},{"./Player":"class/Player.ts","./Page":"class/Page.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
}); //import {key} from './Key';

var Player_1 = require("./class/Player");

var CharacterList_1 = require("./class/CharacterList");

var Character_1 = require("./class/Character");

var Stats_1 = require("./class/Stats");

var Avatar_1 = require("./class/Avatar");

var Game_1 = require("./class/Game");

var Page_1 = require("./class/Page"); //let url = 'http://superheroapi.com/api.php/' + key + '/1';


var url = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json';
console.log(url);
var dropdown = document.getElementById('characters');
var showPlayerBtn = document.getElementById('open-player');
var createPlayerBtn = document.getElementById('create-player');
var buyBtn = document.getElementById('buy-character');
var characterList = new CharacterList_1.CharacterList();
fetch(url).then(function (response) {
  return response.json();
}).then(function (data) {
  data.forEach(function (entry) {
    var avatar = new Avatar_1.Avatar(entry.images.md);
    var powerStats = entry.powerstats;
    var stats = new Stats_1.Stats(powerStats.intelligence, powerStats.strength, powerStats.speed, powerStats.durability, powerStats.power, powerStats.combat); //entry.powerstats.intelligence etc

    var hero = new Character_1.Character(entry.id, entry.name, entry.slug, stats, avatar);
    characterList.add(hero);
    var option = document.createElement("option"); //'<option>${entry.name}</option>'

    option.innerText = hero.name;
    option.value = hero.slug;
    dropdown.appendChild(option);
  });
});
document.getElementById('character-info').style.display = "none";
var player = JSON.parse(localStorage.getItem('player'));
if (!player) console.log("no player");

if (player) {
  console.log(player);
  console.log(player._name);
  var team = new Map(Object.entries(player._team));
  Game_1.Game.player = new Player_1.Player(player._name, player._money, player._victories, player._defeats, team);
  Page_1.Page.showElementById('player-header');
  Page_1.Page.showPlayerInfo(Game_1.Game.player);
}

showPlayerBtn.addEventListener('click', function () {
  //Game.showPlayerCreationWindow();
  Page_1.Page.showElementById('player-window');
});
createPlayerBtn.addEventListener('click', function () {
  var name = document.getElementById('player-name').value;
  Game_1.Game.setPlayer(name);
});
dropdown.addEventListener('change', function () {
  var searchFor = dropdown.value;
  console.log(characterList.search(searchFor));
  Page_1.Page.showAllStats(characterList.search(searchFor));
});
buyBtn.addEventListener('click', function (e) {
  if (!Game_1.Game.player) return;
  var search = e.target.dataset.character;
  var character = characterList.search(search);
  /*let outcomeMsg: string = Game.player.handleBuying(<Character>character);
  (<HTMLElement>document.getElementById('message')).innerText = outcomeMsg;*/

  console.log(character);
  console.log(Game_1.Game.player);
  Game_1.Game.player.addMoney(100);
  Game_1.Game.player.handleBuying(character);
});
window.addEventListener("beforeunload", function () {
  if (Game_1.Game.player) {
    localStorage.setItem("player", JSON.stringify(Game_1.Game.player));
  }
});
},{"./class/Player":"class/Player.ts","./class/CharacterList":"class/CharacterList.ts","./class/Character":"class/Character.ts","./class/Stats":"class/Stats.ts","./class/Avatar":"class/Avatar.ts","./class/Game":"class/Game.ts","./class/Page":"class/Page.ts"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "44471" + '/');

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