window.__require = function t(o, e, i) {
function n(s, r) {
if (!e[s]) {
if (!o[s]) {
var a = s.split("/");
a = a[a.length - 1];
if (!o[a]) {
var l = "function" == typeof __require && __require;
if (!r && l) return l(a, !0);
if (c) return c(a, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = a;
}
var p = e[s] = {
exports: {}
};
o[s][0].call(p.exports, function(t) {
return n(o[s][1][t] || t);
}, p, p.exports, t, o, e, i);
}
return e[s].exports;
}
for (var c = "function" == typeof __require && __require, s = 0; s < i.length; s++) n(i[s]);
return n;
}({
AutoBind: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "b835cS/qxNLbakyyg5HTNea", "AutoBind");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
cc.Component.prototype.addAutoReleaseAsset = function(t) {
var o = this.node.getComponent(r);
cc.isValid(o) || (o = this.node.addComponent(r));
o.addAutoReleaseAsset(t);
};
cc.Component.prototype.addAutoReleaseAssets = function(t) {
var o = this.node.getComponent(r);
cc.isValid(o) || (o = this.node.addComponent(r));
for (var e = 0, i = t; e < i.length; e++) {
var n = i[e];
o.addAutoReleaseAsset(n);
}
};
var s = cc._decorator.ccclass, r = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.dynamicsAssets = [];
return o;
}
o.prototype.addAutoReleaseAsset = function(t) {
if (cc.isValid(t)) {
t.addRef();
this.dynamicsAssets.push(t);
}
};
o.prototype.onDestroy = function() {
for (var t = 0; t < this.dynamicsAssets.length; t++) cc.isValid(this.dynamicsAssets[t]) && this.dynamicsAssets[t].decRef();
this.dynamicsAssets = [];
};
return c([ s ], o);
}(cc.Component);
e.default = r;
cc._RF.pop();
}, {} ],
finishPop: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "5a09auqmsBG27JJ2bvnIpkk", "finishPop");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../tool/gameControl"), r = cc._decorator, a = r.ccclass, l = r.property, p = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.title = null;
o.bg = null;
o.callback = null;
return o;
}
o.prototype.initData = function(t) {
this.callback = t.callback;
};
o.prototype.onLoad = function() {};
o.prototype.start = function() {
this.title.string = "Level " + s.gc.imgId;
s.gc.adapterBg(this.bg);
};
o.prototype.onClick_continueBtn = function() {
s.gc.voiceUtils.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
};
o.prototype.onClick_close = function() {
s.gc.voiceUtils.commonBtnClick();
this.node.destroy();
};
c([ l(cc.Label) ], o.prototype, "title", void 0);
c([ l(cc.Node) ], o.prototype, "bg", void 0);
return c([ a ], o);
}(cc.Component);
e.default = p;
cc._RF.pop();
}, {
"../tool/gameControl": "gameControl"
} ],
gameControl: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "7fe7eKmHWtOBpfO6ERHigxH", "gameControl");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.pop = e.scene = e.gc = void 0;
var i = t("./voiceUtils"), n = t("./resLoading"), c = function() {
function t() {
this.sceneNode = null;
this.imgId = 0;
this.voiceUtils = new i.voiceUtils();
this.eventTarget = new cc.EventTarget();
this.resLoading = n.resLoading;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.setsceneNode = function(t) {
this.sceneNode = t;
};
t.prototype.getsceneNode = function() {
return this.sceneNode;
};
t.prototype.timeChange = function(t) {
t = +t;
var o = Math.floor(t / 60), e = Math.floor(t % 60);
return (o < 10 ? "0" + o : o.toString()) + ":" + (e < 10 ? "0" + e : e.toString());
};
t.prototype.getRandomInt = function(t, o) {
return Math.floor(Math.random() * (o - t + .999999999)) + t;
};
t.prototype.adapterBg = function(t) {
var o = cc.winSize.width / t.width, e = cc.winSize.height / t.height;
t.scale = Math.max(o, e);
};
t.prototype.changePos = function(t, o) {
if (!cc.isValid(t) || !cc.isValid(o)) return cc.v3(0, 0);
var e = t.parent.convertToWorldSpaceAR(t.position);
return o.parent.convertToNodeSpaceAR(e);
};
t.prototype.delayCallBack = function(t, o, e) {
var i = cc.director.getScene().getChildByName("Canvas");
cc.isValid(e) && (i = e);
cc.tween(i).delay(t).call(function() {
o && o();
}).start();
};
t.prototype.playSp = function(t, o, e, i) {
var n = this;
void 0 === e && (e = !1);
void 0 === i && (i = null);
t.setCompleteListener(function() {
i && n.delayCallBack(.02, function() {
i();
}, t.node);
t.setCompleteListener(null);
});
t.setAnimation(0, o, e);
};
t.prototype.stopSp = function(t) {
t.setCompleteListener(null);
};
t.prototype.addSequenceSp = function(t, o, e, i) {
void 0 === e && (e = !1);
i ? t.addAnimation(0, o, e, i) : t.addAnimation(0, o, e);
};
t._instance = null;
return t;
}();
e.gc = c.getInstance();
e.scene = {
main: "main",
sala: "sala",
load: "load"
};
e.pop = {
finishPop: "finishPop",
outPop: "outPop",
pingFenPop: "pingFenPop",
quitPop: "quitPop",
setPop: "setPop",
termPop: "termPop"
};
cc._RF.pop();
}, {
"./resLoading": "resLoading",
"./voiceUtils": "voiceUtils"
} ],
imgItem: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "b349d0IddZO5bDF9FOpApzL", "imgItem");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../tool/gameControl"), r = t("../tool/playroomData"), a = cc._decorator, l = a.ccclass, p = a.property, u = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.hall_mask = null;
o.img = null;
o.idx = 0;
o.isbool = !1;
o.hall = null;
return o;
}
o.prototype.start = function() {};
o.prototype.init = function(t, o) {
this.idx = t;
this.hall = o;
if (this.idx < r.playroom.userData.level) {
this.hall_mask.active = !1;
this.isbool = !0;
} else {
this.hall_mask.active = !0;
this.isbool = !1;
}
s.gc.resLoading.loadSprite("originalImg/yuantu_" + (this.idx + 1), this.img);
};
o.prototype.onclick_item = function() {
s.gc.voiceUtils.commonBtnClick();
if (this.isbool) {
s.gc.imgId = this.idx + 1;
r.playroom.userData.isHall = !1;
r.playroom.storageData();
cc.director.loadScene(s.scene.main);
} else this.hall.showToast("The level has not been unlocked yet");
};
c([ p(cc.Node) ], o.prototype, "hall_mask", void 0);
c([ p(cc.Sprite) ], o.prototype, "img", void 0);
return c([ l ], o);
}(cc.Component);
e.default = u;
cc._RF.pop();
}, {
"../tool/gameControl": "gameControl",
"../tool/playroomData": "playroomData"
} ],
load: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "3f30aa1wRVDbLr8Lgi0ltz2", "load");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("./tool/gameControl"), r = t("./tool/playroomData"), a = t("./tool/stockpileUtils"), l = cc._decorator, p = l.ccclass, u = l.property, h = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.loading_bg = null;
o.loaging_bar_yellow = null;
o.loadingBox = null;
o.gotoHallBox = null;
o.loading_play = null;
o.resNum = 6;
o.nowNum = 0;
return o;
}
o.prototype.start = function() {
var t = this;
if (cc.sys.platform === cc.sys.IPAD) {
this.getComponent(cc.Canvas).fitHeight = !0;
this.getComponent(cc.Canvas).fitWidth = !1;
}
s.gc.adapterBg(this.loading_bg);
s.gc.voiceUtils.initBtnClickEffect();
s.gc.voiceUtils.initbgmMusic();
var o = a.stockpileUtils.getStorageJSON(r.storage.gamedata);
o && (r.playroom.userData = o);
s.gc.setsceneNode(this.node);
if (r.playroom.userData.isClause) {
this.gotoHallBox.active = !0;
this.loadingBox.active = !1;
cc.tween(this.loading_play).to(.5, {
scale: 1.1
}).to(.5, {
scale: 1
}).union().repeatForever().start();
} else {
this.gotoHallBox.active = !1;
this.loadingBox.active = !1;
s.gc.resLoading.showDialog(s.pop.termPop, {
callback: function() {
r.playroom.userData.isClause = !0;
t.gotoHallBox.active = !0;
t.loadingBox.active = !1;
r.playroom.storageData();
cc.tween(t.loading_play).to(.5, {
scale: 1.1
}).to(.5, {
scale: 1
}).union().repeatForever().start();
}
});
}
r.playroom.setVideoFailCb(function() {
cc.resources.load("prefeb/toast", cc.Prefab, function(t, o) {
if (!t) {
var e = cc.instantiate(o);
s.gc.resLoading.bindResAsset(e, o);
var i = s.gc.getsceneNode();
if (e && i) {
e.active = !0;
i.addChild(e);
e.getChildByName("label").getComponent(cc.Label).string = "No ads at the moment";
cc.Tween.stopAllByTarget(e);
e.opacity = 255;
cc.tween(e).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).delay(.5).to(.5, {
opacity: 0
}).call(function() {
e.destroy();
}).start();
}
}
});
});
};
o.prototype.onClick_gotoPlay = function() {
var t = this;
this.gotoHallBox.active = !1;
this.loadingBox.active = !0;
s.gc.voiceUtils.commonBtnClick();
this.loaging_bar_yellow.fillRange = 0;
cc.Tween.stopAllByTarget(this.loaging_bar_yellow);
cc.loader.loadResDir("prefeb", function(o) {
if (o) cc.error(o); else {
console.log("prefeb assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.loader.loadResDir("finishImg", function(o) {
if (o) cc.error(o); else {
console.log("finishImg assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.loader.loadResDir("originalImg", function(o) {
if (o) cc.error(o); else {
console.log("originalImg assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.loader.loadResDir("imgJson", function(o, e) {
if (o) cc.error(o); else {
r.playroom.levelAll = e.length;
console.log("imgJson assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.director.preloadScene(s.scene.main, function() {
cc.log("game scene preloaded");
t.progressBarEvent();
});
cc.director.preloadScene(s.scene.sala, function() {
cc.log("hall scene preloaded");
t.progressBarEvent();
});
};
o.prototype.progressBarEvent = function() {
var t = this;
this.nowNum++;
cc.Tween.stopAllByTarget(this.loaging_bar_yellow);
cc.tween(this.loaging_bar_yellow).to(.5, {
fillRange: 1 / 6 * this.nowNum
}).call(function() {
t.nowNum == t.resNum && t.scheduleOnce(function() {
if (r.playroom.userData.isHall) cc.director.loadScene(s.scene.sala); else {
s.gc.imgId = r.playroom.userData.level;
cc.director.loadScene(s.scene.main);
}
}, .05);
}).start();
};
o.prototype.showShiPing = function() {
console.log("android---------------showShiPing------------------");
r.playroom.showVideo(function() {
console.log("zzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
});
};
o.prototype.showbanner = function() {
console.log("android---------------showbanner------------------");
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
};
o.prototype.hidebanner = function() {
console.log("android---------------hidebanner------------------");
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
};
o.prototype.showChaping = function() {
console.log("android---------------showChaping------------------");
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showChaping", "()V");
};
o.prototype.testBtn = function() {
console.log("android---------------testBtn------------------");
jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openPingFen", "()V");
};
c([ u(cc.Node) ], o.prototype, "loading_bg", void 0);
c([ u(cc.Sprite) ], o.prototype, "loaging_bar_yellow", void 0);
c([ u(cc.Node) ], o.prototype, "loadingBox", void 0);
c([ u(cc.Node) ], o.prototype, "gotoHallBox", void 0);
c([ u(cc.Node) ], o.prototype, "loading_play", void 0);
return c([ p ], o);
}(cc.Component);
e.default = h;
cc._RF.pop();
}, {
"./tool/gameControl": "gameControl",
"./tool/playroomData": "playroomData",
"./tool/stockpileUtils": "stockpileUtils"
} ],
main: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "73ed6/QdxxO+pIbRjS+FY/O", "main");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s, r = t("./prefeb/newhand"), a = t("./tool/gameControl"), l = t("./tool/playroomData"), p = cc._decorator, u = p.ccclass, h = p.property;
(function(t) {
t[t.find = 0] = "find";
t[t.err = 1] = "err";
t[t.finish = 2] = "finish";
})(s || (s = {}));
var d = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.bg = null;
o.originalImg = null;
o.finishImg = null;
o.tishi_qipao = null;
o.gameFindPrefab = null;
o.gameErrPrefab = null;
o.gameTishiPrefab = null;
o.game_tuowei = null;
o.imgSignBox = null;
o.yeziBox = null;
o.level = null;
o.timeAll = null;
o.reduceTime = null;
o.mask = null;
o.beautyData = [];
o.imgY = 257;
o.yuanshiScale = .5;
o.yeziAllNum = 10;
o.findNum = 0;
o.outTime = 0;
o.isPrompt = !1;
o.timer = null;
o.isSuspend = !1;
o.firstErr = !1;
o.audioClips = [];
o.newhandNode = null;
return o;
}
o.prototype.start = function() {
var t = this;
l.playroom.setGamestop(function() {
t.isSuspend = !0;
});
l.playroom.setGamerecovery(function() {
t.isSuspend = !1;
});
if (cc.sys.platform === cc.sys.IPAD) {
this.getComponent(cc.Canvas).fitHeight = !0;
this.getComponent(cc.Canvas).fitWidth = !1;
}
this.resetAll();
a.gc.setsceneNode(this.node);
a.gc.adapterBg(this.bg);
this.onEvent();
this.init();
this.startDownTime();
this.loadRes();
this.checkNewHand();
cc.resources.loadDir("sound", cc.AudioClip, function(o, e) {
if (!o && cc.isValid(t)) {
t.audioClips = e;
t.addAutoReleaseAssets(e);
}
});
};
o.prototype.onEvent = function() {
this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
};
o.prototype.resetAll = function(t) {
t || (this.beautyData = []);
this.imgSignBox.getChildByName("origBox").destroyAllChildren();
this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
this.imgSignBox.getChildByName("errBox").destroyAllChildren();
this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
this.imgSignBox.getChildByName("lizi").destroyAllChildren();
this.mask.active = !1;
this.firstErr = !1;
this.isSuspend = !1;
this.timer = null;
this.isPrompt = !1;
this.findNum = 0;
this.init();
};
o.prototype.checkNewHand = function() {
var t = this;
l.playroom.userData.isGudie || 1 != a.gc.imgId || cc.resources.load("prefeb/newhand", cc.Prefab, function(o, e) {
if (!o) {
var i = cc.instantiate(e);
a.gc.resLoading.bindResAsset(i, e);
t.node.addChild(i);
t.newhandNode = i.getComponent(r.default);
t.newhandNode.showdong1();
}
});
};
o.prototype.init = function() {
this.level.string = "Lv" + a.gc.imgId;
for (var t = 0; t < this.yeziBox.children.length; t++) {
var o = this.yeziBox.children[t].getComponent(sp.Skeleton);
a.gc.playSp(o, "1_an_stop");
}
this.outTime = this.getDownTime();
this.changeQiPaoNum();
this.mask.active = !1;
var e = a.gc.timeChange(this.outTime);
this.timeAll.getComponent(cc.Label).string = e;
this.reduceTime.active = !1;
};
o.prototype.startDownTime = function() {
if (this.outTime > 0) {
var t = a.gc.timeChange(this.outTime);
this.timeAll.getComponent(cc.Label).string = t;
this.timer = this.schedule(this.downTimeEvent, 1);
}
};
o.prototype.downTimeEvent = function() {
if (!this.isSuspend) {
this.outTime--;
var t = a.gc.timeChange(this.outTime);
this.timeAll.getComponent(cc.Label).string = t;
if (this.outTime <= 0) {
this.unschedule(this.downTimeEvent);
this.timeOutEvent();
this.playCommonSound(l.sound.fail);
cc.log("时间到了");
}
}
};
o.prototype.errReduceTime = function() {
var t = this;
if (this.firstErr) {
var o = this.timeAll.y;
this.reduceTime.y = o;
this.reduceTime.active = !0;
this.reduceTime.getComponent(cc.Label).string = "-30";
cc.Tween.stopAllByTarget(this.reduceTime);
cc.tween(this.reduceTime).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).to(1, {
opacity: 255,
y: o - 25
}).call(function() {
t.reduceTime.active = !1;
}).start();
this.outTime -= 30;
if (this.outTime <= 0) {
this.timeAll.getComponent(cc.Label).string = "00:00";
this.playCommonSound(l.sound.fail);
cc.log("时间到了");
this.unschedule(this.downTimeEvent);
this.timeOutEvent();
} else {
var e = a.gc.timeChange(this.outTime);
this.timeAll.getComponent(cc.Label).string = e;
}
}
};
o.prototype.changeQiPaoNum = function() {
if (l.playroom.userData.tishiNum > 0) {
this.tishi_qipao.getChildByName("ad_label").active = !1;
this.tishi_qipao.getChildByName("num_label").active = !0;
this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = l.playroom.userData.tishiNum.toString();
} else {
this.tishi_qipao.getChildByName("ad_label").active = !0;
this.tishi_qipao.getChildByName("num_label").active = !1;
}
};
o.prototype.loadRes = function() {
var t = this;
a.gc.resLoading.loadSprite("originalImg/yuantu_" + a.gc.imgId, this.originalImg.getComponent(cc.Sprite));
a.gc.resLoading.loadSprite("finishImg/xiugai_" + a.gc.imgId, this.finishImg.getComponent(cc.Sprite));
cc.resources.load("imgJson/level" + a.gc.imgId, cc.JsonAsset, function(o, e) {
if (o) cc.log(o); else {
a.gc.resLoading.bindResAsset(t.node, e);
var i = e.json;
if (i && i.path) {
t.beautyData = i.path;
for (var n = 0; n < t.beautyData.length; n++) t.beautyData[n].isFind = !1;
cc.log(t.beautyData, "this.beautyData ");
}
}
});
};
o.prototype.yeziLight = function(t) {
var o = this, e = this.yeziBox.children[this.findNum - 1].getComponent(sp.Skeleton), i = cc.instantiate(this.game_tuowei);
this.imgSignBox.getChildByName("lizi").addChild(i);
i.setPosition(t);
var n = a.gc.changePos(e.node, i), c = .5;
t.y < 0 && (c = 1);
cc.Tween.stopAllByTarget(i);
cc.tween(i).to(c, {
position: n
}).call(function() {
o.scheduleOnce(function() {
i.destroy();
}, .3);
a.gc.playSp(e, "2_bianliang");
a.gc.addSequenceSp(e, "3_liang_stop");
}).start();
};
o.prototype.findSignSucc = function(t) {
for (var o = 0; o < 2; o++) {
var e = cc.instantiate(this.gameFindPrefab), i = 0;
if (0 == o) {
i = t.y * this.yuanshiScale + this.imgY;
this.imgSignBox.getChildByName("origBox").addChild(e);
} else {
this.imgSignBox.getChildByName("finishBox").addChild(e);
i = t.y * this.yuanshiScale - this.imgY;
}
var n = cc.v3(t.x * this.yuanshiScale, i);
e.setPosition(n);
cc.Tween.stopAllByTarget(e);
e.scale = 0;
cc.tween(e).to(.3, {
scale: 1.5
}).to(.1, {
scale: 1.3
}).start();
}
};
o.prototype.findSignErr = function(t) {
var o = t, e = cc.instantiate(this.gameErrPrefab);
this.imgSignBox.getChildByName("errBox").addChild(e);
e.setPosition(o);
this.errSignAnim(e);
var i = null;
if (o.y > 0) {
i = cc.instantiate(this.gameErrPrefab);
this.imgSignBox.getChildByName("errBox").addChild(i);
i.setPosition(cc.v3(o.x, o.y - 2 * this.imgY));
} else {
i = cc.instantiate(this.gameErrPrefab);
this.imgSignBox.getChildByName("errBox").addChild(i);
i.setPosition(cc.v3(o.x, o.y + 2 * this.imgY));
}
i && this.errSignAnim(i);
};
o.prototype.imgEvent = function(t) {
var o = t.getLocation(), e = this.imgSignBox.convertToNodeSpaceAR(cc.v3(o.x, o.y)), i = this.checkImgSign(e);
if (i.type == s.find) {
if (this.isPrompt) {
this.isPrompt = !1;
this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
}
this.findNum = this.findNum + 1;
this.findSignSucc(cc.v3(i.findData.centerPos.x, i.findData.centerPos.y), i.findData);
this.yeziLight(e);
if (this.newhandNode && 1 == this.findNum) {
if (this.newhandNode) {
this.newhandNode.hidedong1();
this.newhandNode.showdong2();
}
} else if (this.newhandNode && 2 == this.findNum) {
if (this.newhandNode) {
this.newhandNode.node.destroy();
this.newhandNode = null;
}
l.playroom.userData.isGudie = !0;
l.playroom.storageData();
}
this.playCommonSound(l.sound.correct);
this.findNum >= this.yeziAllNum && this.gameEnd();
} else if (i.type == s.err) {
this.playCommonSound(l.sound.err);
this.errReduceTime();
this.findSignErr(e);
this.firstErr = !0;
} else {
this.playCommonSound(l.sound.err);
this.errReduceTime();
this.findSignErr(e);
this.firstErr = !0;
}
};
o.prototype.checkImgSign = function(t) {
for (var o = null, e = null, i = 0; i < this.beautyData.length; i++) {
var n, c = this.beautyData[i], r = c.centerPos.x * this.yuanshiScale;
n = t.y > 0 ? c.centerPos.y * this.yuanshiScale + this.imgY : c.centerPos.y * this.yuanshiScale - this.imgY;
var a = c.blockSize.wid * this.yuanshiScale, l = c.blockSize.hei * this.yuanshiScale;
if (!c.isFind && t.x <= r + a / 2 && t.x >= r - a / 2 && t.y <= n + l / 2 && t.y >= n - l / 2) {
if (c.isFind) {
o = s.finish;
cc.log("找到重复的了");
} else {
cc.log("找到了");
o = s.find;
e = c;
c.isFind = !0;
}
return {
type: o,
findData: e
};
}
o = s.err;
cc.log("没找到");
}
return {
type: o,
findData: e
};
};
o.prototype.errSignAnim = function(t) {
cc.Tween.stopAllByTarget(t);
cc.tween(t).to(.05, {
angle: 15
}).to(.05, {
angle: 0
}).to(.05, {
angle: -15
}).to(.07, {
angle: 10
}).to(.07, {
angle: 0
}).to(.07, {
angle: -10
}).to(.1, {
angle: 7
}).to(.1, {
angle: 0
}).to(.1, {
angle: -7
}).to(.1, {
angle: 3
}).to(.1, {
angle: 0
}).call(function() {
t.destroy();
}).start();
};
o.prototype.gameEnd = function() {
var t = this;
cc.log("游戏结束");
this.mask.active = !0;
this.scheduleOnce(function() {
for (var o = function(o) {
var e = t.yeziBox.children[o].getComponent(sp.Skeleton);
t.scheduleOnce(function() {
a.gc.playSp(e, "4_man", !1, function() {
t.scheduleOnce(function() {
if (o == t.yeziBox.children.length - 1) {
t.playCommonSound(l.sound.win);
if (l.playroom.userData.level + 1 <= l.playroom.levelAll) {
l.playroom.userData.level = l.playroom.userData.level + 1;
l.playroom.storageData();
}
a.gc.resLoading.showDialog(a.pop.finishPop, {
callback: function() {
if (a.gc.imgId + 1 <= l.playroom.levelAll) {
a.gc.imgId = a.gc.imgId + 1;
t.resetAll();
t.init();
t.startDownTime();
t.loadRes();
} else {
l.playroom.userData.isHall = !0;
l.playroom.storageData();
cc.director.loadScene(a.scene.sala);
}
}
});
}
});
});
}, .1 * o);
}, e = 0; e < t.yeziBox.children.length; e++) o(e);
}, .5);
};
o.prototype.getDownTime = function() {
var t = a.gc.imgId;
return t >= 1 && t <= 5 ? 300 : t >= 6 && t <= 10 ? 180 : t >= 11 && t <= 15 ? 150 : t >= 16 && t <= 20 ? 120 : t >= 21 && t <= 25 ? 90 : 60;
};
o.prototype.timeOutEvent = function() {
var t = this;
a.gc.resLoading.showDialog(a.pop.outPop, {
ADcallback: function() {
t.outTime = 60;
l.playroom.userData.tishiNum++;
l.playroom.storageData();
t.changeQiPaoNum();
t.startDownTime();
},
restartCallBack: function() {
t.resetAll(!0);
t.init();
t.startDownTime();
cc.log(t.beautyData, "this.beautyData");
for (var o = 0; o < t.beautyData.length; o++) t.beautyData[o].isFind = !1;
}
});
};
o.prototype.onClick_back = function() {
var t = this;
a.gc.voiceUtils.commonBtnClick();
this.isSuspend = !0;
a.gc.resLoading.showDialog(a.pop.quitPop, {
callback: function() {
t.isSuspend = !1;
}
});
};
o.prototype.onClick_pause = function() {
var t = this;
a.gc.voiceUtils.commonBtnClick();
this.isSuspend = !0;
a.gc.resLoading.showDialog(a.pop.setPop, {
isGame: !0,
callback: function() {
t.isSuspend = !1;
}
});
};
o.prototype.onClick_tishi = function() {
var t = this;
a.gc.voiceUtils.commonBtnClick();
if (this.isPrompt) l.playroom.opentoast("Prompt already exists"); else {
for (var o = null, e = 0; e < this.beautyData.length; e++) if (!this.beautyData[e].isFind) {
o = this.beautyData[e];
break;
}
if (o) if (l.playroom.userData.tishiNum <= 0) {
cc.log("看广告");
l.playroom.showVideo(function() {
t.showTiShi(o);
});
} else {
l.playroom.userData.tishiNum = l.playroom.userData.tishiNum - 1;
l.playroom.storageData();
this.changeQiPaoNum();
this.showTiShi(o);
}
}
};
o.prototype.showTiShi = function(t) {
if (t) {
this.isPrompt = !0;
for (var o = 0; o < 2; o++) {
var e = cc.instantiate(this.gameTishiPrefab);
this.imgSignBox.getChildByName("tishiBox").addChild(e);
var i, n = t.centerPos.x * this.yuanshiScale;
i = 0 == o ? t.centerPos.y * this.yuanshiScale + this.imgY : t.centerPos.y * this.yuanshiScale - this.imgY;
e.setPosition(n, i);
cc.Tween.stopAllByTarget(e);
cc.tween(e).to(.5, {
scale: .7
}).to(.5, {
scale: 1
}).union().repeatForever().start();
}
}
};
o.prototype.playCommonSound = function(t, o) {
void 0 === o && (o = !1);
for (var e = 0; e < this.audioClips.length; e++) if (this.audioClips[e].name == t) return a.gc.voiceUtils.playEffect(this.audioClips[e], o);
return null;
};
c([ h(cc.Node) ], o.prototype, "bg", void 0);
c([ h(cc.Node) ], o.prototype, "originalImg", void 0);
c([ h(cc.Node) ], o.prototype, "finishImg", void 0);
c([ h(cc.Node) ], o.prototype, "tishi_qipao", void 0);
c([ h(cc.Prefab) ], o.prototype, "gameFindPrefab", void 0);
c([ h(cc.Prefab) ], o.prototype, "gameErrPrefab", void 0);
c([ h(cc.Prefab) ], o.prototype, "gameTishiPrefab", void 0);
c([ h(cc.Prefab) ], o.prototype, "game_tuowei", void 0);
c([ h(cc.Node) ], o.prototype, "imgSignBox", void 0);
c([ h(cc.Node) ], o.prototype, "yeziBox", void 0);
c([ h(cc.Label) ], o.prototype, "level", void 0);
c([ h(cc.Node) ], o.prototype, "timeAll", void 0);
c([ h(cc.Node) ], o.prototype, "reduceTime", void 0);
c([ h(cc.Node) ], o.prototype, "mask", void 0);
return c([ u ], o);
}(cc.Component);
e.default = d;
cc._RF.pop();
}, {
"./prefeb/newhand": "newhand",
"./tool/gameControl": "gameControl",
"./tool/playroomData": "playroomData"
} ],
newhand: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "9a1e0lTY71PmJruz9bjJlQK", "newhand");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, a = s.property, l = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.dong1_top = null;
o.dongdong1_bottom = null;
o.hand1 = null;
o.dong2_top = null;
o.dongdong2_bottom = null;
o.hand2 = null;
return o;
}
o.prototype.start = function() {};
o.prototype.showdong1 = function() {
var t = this;
this.dong1_top.active = !0;
this.dongdong1_bottom.active = !0;
this.hand1.active = !1;
this.dong1_top.width = 500;
this.dong1_top.height = 500;
this.dongdong1_bottom.width = 500;
this.dongdong1_bottom.height = 500;
cc.Tween.stopAllByTarget(this.dong1_top);
cc.Tween.stopAllByTarget(this.dongdong1_bottom);
cc.tween(this.dong1_top).to(.5, {
width: 80,
height: 80
}).start();
cc.tween(this.dongdong1_bottom).to(.5, {
width: 80,
height: 80
}).delay(.1).call(function() {
t.hand1.active = !0;
}).start();
};
o.prototype.hidedong1 = function() {
this.dong1_top.active = !1;
this.dongdong1_bottom.active = !1;
this.hand1.active = !1;
};
o.prototype.showdong2 = function() {
var t = this;
this.dong2_top.active = !0;
this.dongdong2_bottom.active = !0;
this.hand2.active = !1;
this.dong2_top.width = 500;
this.dong2_top.height = 500;
this.dongdong2_bottom.width = 500;
this.dongdong2_bottom.height = 500;
cc.Tween.stopAllByTarget(this.dong2_top);
cc.Tween.stopAllByTarget(this.dongdong2_bottom);
cc.tween(this.dong2_top).to(.5, {
width: 80,
height: 80
}).start();
cc.tween(this.dongdong2_bottom).to(.5, {
width: 80,
height: 80
}).delay(.1).call(function() {
t.hand2.active = !0;
}).start();
};
c([ a(cc.Node) ], o.prototype, "dong1_top", void 0);
c([ a(cc.Node) ], o.prototype, "dongdong1_bottom", void 0);
c([ a(cc.Node) ], o.prototype, "hand1", void 0);
c([ a(cc.Node) ], o.prototype, "dong2_top", void 0);
c([ a(cc.Node) ], o.prototype, "dongdong2_bottom", void 0);
c([ a(cc.Node) ], o.prototype, "hand2", void 0);
return c([ r ], o);
}(cc.Component);
e.default = l;
cc._RF.pop();
}, {} ],
outPop: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "98460XFFs1JCI9f0VmFuXBW", "outPop");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../tool/gameControl"), r = t("../tool/playroomData"), a = cc._decorator, l = a.ccclass, p = (a.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.ADcallback = null;
o.restartCallBack = null;
return o;
}
o.prototype.start = function() {
r.playroom.showBanner();
};
o.prototype.initData = function(t) {
this.ADcallback = t.ADcallback;
this.restartCallBack = t.restartCallBack;
};
o.prototype.onClick_AD_btn = function() {
var t = this;
s.gc.voiceUtils.commonBtnClick();
r.playroom.showVideo(function() {
t.scheduleOnce(function() {
t.ADcallback && t.ADcallback();
t.node.destroy();
r.playroom.closeBanner();
});
});
};
o.prototype.onClick_restart = function() {
s.gc.voiceUtils.commonBtnClick();
this.restartCallBack && this.restartCallBack();
this.node.destroy();
r.playroom.closeBanner();
};
return c([ l ], o);
}(cc.Component));
e.default = p;
cc._RF.pop();
}, {
"../tool/gameControl": "gameControl",
"../tool/playroomData": "playroomData"
} ],
pingFenPop: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "c951dEKIOhIEKilulaNvq92", "pingFenPop");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../tool/gameControl"), r = t("../tool/playroomData"), a = cc._decorator, l = a.ccclass, p = a.property, u = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.callback = null;
o.starBox = null;
o.clickBox = null;
return o;
}
o.prototype.initData = function() {};
o.prototype.start = function() {
r.playroom.showBanner();
};
o.prototype.showStar = function(t) {
for (var o = 0; o < this.starBox.children.length; o++) {
this.starBox.children[o].active = o <= t;
}
};
o.prototype.onClick_commentBtn = function() {
r.playroom.showPingFen();
s.gc.voiceUtils.commonBtnClick();
this.node.destroy();
r.playroom.closeBanner();
};
o.prototype.onClick_close = function() {
s.gc.voiceUtils.commonBtnClick();
this.node.destroy();
r.playroom.closeBanner();
};
c([ p(cc.Node) ], o.prototype, "starBox", void 0);
c([ p(cc.Node) ], o.prototype, "clickBox", void 0);
return c([ l ], o);
}(cc.Component);
e.default = u;
cc._RF.pop();
}, {
"../tool/gameControl": "gameControl",
"../tool/playroomData": "playroomData"
} ],
playroomData: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "7487f4XLFFFn6UYutYNkRUg", "playroomData");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.sound = e.storage = e.playroom = void 0;
var i, n = t("./gameControl"), c = t("./stockpileUtils"), s = function() {
function t() {
this.privacyPolicyUrl = "https://sites.google.com/view/gorgeous-find-differences-priv/halaman-muka";
this.termsofServiceUrl = "https://sites.google.com/view/gorgeous-find-differences-term/halaman-muka";
this.levelAll = 30;
this.userData = {
isClause: !1,
tishiNum: 1,
level: 1,
isHall: !1,
isGudie: !1,
finishLevel5: !1
};
cc.game.on(cc.game.EVENT_HIDE, function() {
this.storageData();
}, this);
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.storageData = function() {
c.stockpileUtils.setStorageJSON(i.gamedata, this.userData);
};
t.prototype.setVideoFailCb = function(t) {
window.onClosefailCb = null;
window.onClosefailCb = t;
};
t.prototype.showVideo = function(t) {
console.log("android------------看广告");
if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V"); else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
jsb.reflection.callStaticMethod("UnityMgr", "loadReward");
window.onCloseFinishCb = null;
window.onCloseFinishCb = t;
} else t();
};
t.prototype.showBanner = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
};
t.prototype.closeBanner = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
};
t.prototype.showInterst = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showChaping", "()V");
};
t.prototype.showPingFen = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openPingFen", "()V");
};
t.prototype.openUrl = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openUrl", "()V");
};
t.prototype.setGamestop = function(t) {
window.gamestop = t;
};
t.prototype.setGamerecovery = function(t) {
window.gamerecovery = t;
};
t.prototype.opentoast = function(t) {
cc.resources.load("prefeb/toast", cc.Prefab, function(o, e) {
if (!o) {
var i = cc.instantiate(e);
n.gc.resLoading.bindResAsset(i, e);
var c = n.gc.getsceneNode();
if (i && c) {
i.active = !0;
c.addChild(i);
i.getChildByName("label").getComponent(cc.Label).string = t;
cc.Tween.stopAllByTarget(i);
i.opacity = 255;
cc.tween(i).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).delay(.5).to(.5, {
opacity: 0
}).call(function() {
i.destroy();
}).start();
}
}
});
};
t._instance = null;
return t;
}();
e.playroom = s.getInstance();
(function(t) {
t.gamedata = "gamedata";
})(i = e.storage || (e.storage = {}));
(function(t) {
t.bgm = "bgm";
t.click = "click";
t.correct = "correct";
t.err = "err";
t.fail = "fail";
t.win = "win";
})(e.sound || (e.sound = {}));
window.onCloseFinishCb = function() {};
window.onCloseVdieoFinishCb = function() {
window.onCloseFinishCb();
};
window.onCloseVdieofailCb = function() {
window.onClosefailCb();
};
window.onClosefailCb = function() {};
window.gamestop = function() {};
window.gamerecovery = function() {};
cc._RF.pop();
}, {
"./gameControl": "gameControl",
"./stockpileUtils": "stockpileUtils"
} ],
quitPop: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "9335d26T05DjJw8MacCCseS", "quitPop");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../tool/gameControl"), r = t("../tool/playroomData"), a = cc._decorator, l = a.ccclass, p = (a.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.callback = null;
return o;
}
o.prototype.start = function() {
r.playroom.showBanner();
};
o.prototype.initData = function(t) {
this.callback = t.callback;
};
o.prototype.onClick_continue_btn = function() {
s.gc.voiceUtils.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
r.playroom.closeBanner();
};
o.prototype.onClick_backHall = function() {
s.gc.voiceUtils.commonBtnClick();
this.node.destroy();
r.playroom.closeBanner();
r.playroom.userData.isHall = !0;
r.playroom.storageData();
cc.director.loadScene(s.scene.sala);
};
return c([ l ], o);
}(cc.Component));
e.default = p;
cc._RF.pop();
}, {
"../tool/gameControl": "gameControl",
"../tool/playroomData": "playroomData"
} ],
resLoading: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "d8022bhaGtI34HO+9B4gPxl", "resLoading");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.resLoading = void 0;
var i = t("./AutoBind"), n = t("./gameControl"), c = function() {
function t() {}
t.bindResAsset = function(t, o) {
var e = t.getComponent(i.default);
cc.isValid(e) || (e = t.addComponent(i.default));
e.addAutoReleaseAsset(o);
};
t.releaseRes = function(t) {
cc.isValid(t) && t.refCount <= 0 && cc.assetManager.releaseAsset(t);
};
t.loadAsset = function(t, o, e) {
cc.resources.load(t, o, e);
};
t.preloadAsset = function(t, o) {
cc.resources.preload(t, o);
};
t.loadSprite = function(t, o, e) {
var i = this;
o.newUrl = t;
o.spriteFrame = null;
cc.resources.load(t, cc.SpriteFrame, function(n, c) {
if (n) e && i.loadSprite(e, o); else if (cc.isValid(o) && o.newUrl == t) {
o.addAutoReleaseAsset(c);
o.spriteFrame = c;
} else i.releaseRes(c);
});
};
t.showDialog = function(t, o, e) {
cc.resources.load("prefeb/" + t, cc.Prefab, function(i, c) {
if (!i) {
var s = cc.instantiate(c);
n.gc.resLoading.bindResAsset(s, c);
var r = n.gc.getsceneNode();
if (s && r) {
if (o) {
cc.log(t, "confirmExit_dialog");
s.getComponent(t).initData && s.getComponent(t).initData(o);
}
r.addChild(s);
var a = s.getChildByName("content");
a.scale = 0;
cc.Tween.stopAllByTarget(a);
cc.tween(a).to(.32, {
scale: 1
}, {
easing: "backOut"
}).start();
}
e && e();
}
});
};
t.showToast = function(t) {
cc.resources.load("prefeb/toast", cc.Prefab, function(o, e) {
if (!o) {
var i = cc.instantiate(e);
n.gc.resLoading.bindResAsset(i, e);
var c = n.gc.getsceneNode();
if (i && c) {
i.active = !0;
c.addChild(i);
i.getChildByName("label").getComponent(cc.Label).string = t;
cc.Tween.stopAllByTarget(i);
i.opacity = 255;
cc.tween(i).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).delay(.5).to(.5, {
opacity: 0
}).call(function() {
i.destroy();
}).start();
}
}
});
};
return t;
}();
e.resLoading = c;
cc._RF.pop();
}, {
"./AutoBind": "AutoBind",
"./gameControl": "gameControl"
} ],
sala: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "014741UGutBway3J/ZL6r3K", "sala");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("./prefeb/imgItem"), r = t("./tool/gameControl"), a = t("./tool/playroomData"), l = cc._decorator, p = l.ccclass, u = l.property, h = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.bg = null;
o.imgItem = null;
o.scroll_contect = null;
o.scrollView = null;
return o;
}
o.prototype.start = function() {
var t = this;
if (cc.sys.platform === cc.sys.IPAD) {
this.getComponent(cc.Canvas).fitHeight = !0;
this.getComponent(cc.Canvas).fitWidth = !1;
}
r.gc.setsceneNode(this.node);
r.gc.adapterBg(this.bg);
this.scheduleOnce(function() {
t.init();
});
this.scheduleOnce(function() {
if (a.playroom.userData.level > 4 && a.playroom.userData.level < a.playroom.levelAll) {
var o = 0;
if (a.playroom.userData.level % 2 == 0) {
var e = a.playroom.userData.level / 2;
o = 260 * (a.playroom.userData.level - 1 - e);
} else {
e = (a.playroom.userData.level + 1) / 2;
o = 260 * (a.playroom.userData.level - e);
}
t.scrollView.scrollToOffset(cc.v2(0, o), 1);
}
}, .1);
};
o.prototype.init = function() {
this.scroll_contect.destroyAllChildren();
for (var t = 0; t < 30; t++) {
var o = cc.instantiate(this.imgItem);
this.scroll_contect.addChild(o);
o.getComponent(s.default).init(t, this);
}
};
o.prototype.onClick_setting = function() {
r.gc.voiceUtils.commonBtnClick();
r.gc.resLoading.showDialog(r.pop.setPop, {
isGame: !1
});
};
o.prototype.showToast = function(t) {
r.gc.resLoading.showToast(t);
};
c([ u(cc.Node) ], o.prototype, "bg", void 0);
c([ u(cc.Prefab) ], o.prototype, "imgItem", void 0);
c([ u(cc.Node) ], o.prototype, "scroll_contect", void 0);
c([ u(cc.ScrollView) ], o.prototype, "scrollView", void 0);
return c([ p ], o);
}(cc.Component);
e.default = h;
cc._RF.pop();
}, {
"./prefeb/imgItem": "imgItem",
"./tool/gameControl": "gameControl",
"./tool/playroomData": "playroomData"
} ],
scrollTool: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "6742eFjCRhCdpnyZSMeH66r", "scrollTool");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = cc._decorator, r = s.ccclass, a = (s.property, function(t) {
n(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
}
o.prototype.onLoad = function() {
if (this.node.getComponent(cc.ScrollView)) {
this.node.on("scrolling", this._event_update_opacity, this);
this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REMOVED, this._event_update_opacity, this);
this.node.getComponent(cc.ScrollView).content.on(cc.Node.EventType.CHILD_REORDER, this._event_update_opacity, this);
} else cc.error("不存在ScrollView组件！");
};
o.prototype._get_bounding_box_to_world = function(t) {
var o = t._contentSize.width, e = t._contentSize.height, i = cc.rect(-t._anchorPoint.x * o, -t._anchorPoint.y * e, o, e);
t._calculWorldMatrix();
i.transformMat4(i, t._worldMatrix);
return i;
};
o.prototype._check_collision = function(t) {
var o = this._get_bounding_box_to_world(this.node.getComponent(cc.ScrollView).content.parent), e = this._get_bounding_box_to_world(t);
o.width += .5 * o.width;
o.height += .5 * o.height;
o.x -= .25 * o.width;
o.y -= .25 * o.height;
return o.intersects(e);
};
o.prototype._event_update_opacity = function() {
var t = this;
this.node.getComponent(cc.ScrollView).content.children.forEach(function(o) {
var e = t._get_bounding_box_to_world(t.node.getComponent(cc.ScrollView).content.parent);
e.width += .5 * e.width;
e.height += .5 * e.height;
e.x -= .25 * e.width;
e.y -= .25 * e.height;
o.opacity = t._check_collision(o) ? 255 : 0;
});
};
return c([ r ], o);
}(cc.Component));
e.default = a;
cc._RF.pop();
}, {} ],
setPop: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "373fe8INcZH8KIbG9PDCZWr", "setPop");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../tool/gameControl"), r = t("../tool/playroomData"), a = cc._decorator, l = a.ccclass, p = a.property, u = function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.title = null;
o.pause_sprite = null;
o.setting_sprite = null;
o.soundBox = null;
o.musicBox = null;
o.zhengdongBox = null;
o.setting_pausebtn = null;
o.setting_ok = null;
o.callback = null;
return o;
}
o.prototype.start = function() {
this.init();
r.playroom.showBanner();
};
o.prototype.initData = function(t) {
this.callback = t.callback;
if (t.isGame) {
this.title.spriteFrame = this.pause_sprite;
this.setting_ok.active = !1;
this.setting_pausebtn.active = !0;
} else {
this.title.spriteFrame = this.setting_sprite;
this.setting_ok.active = !0;
this.setting_pausebtn.active = !1;
}
};
o.prototype.init = function() {
if (s.gc.voiceUtils.musicSwitch) {
this.musicBox.getChildByName("setting_on").active = !0;
this.musicBox.getChildByName("setting_off").active = !1;
} else {
this.musicBox.getChildByName("setting_on").active = !1;
this.musicBox.getChildByName("setting_off").active = !0;
}
if (s.gc.voiceUtils.effectSwitch) {
this.soundBox.getChildByName("setting_on").active = !0;
this.soundBox.getChildByName("setting_off").active = !1;
} else {
this.soundBox.getChildByName("setting_on").active = !1;
this.soundBox.getChildByName("setting_off").active = !0;
}
if (s.gc.voiceUtils.shockSwitch) {
this.zhengdongBox.getChildByName("setting_on").active = !0;
this.zhengdongBox.getChildByName("setting_off").active = !1;
} else {
this.zhengdongBox.getChildByName("setting_on").active = !1;
this.zhengdongBox.getChildByName("setting_off").active = !0;
}
};
o.prototype.onClick_musicbtn = function() {
s.gc.voiceUtils.commonBtnClick();
s.gc.voiceUtils.switchMusic();
if (s.gc.voiceUtils.musicSwitch) {
this.musicBox.getChildByName("setting_on").active = !0;
this.musicBox.getChildByName("setting_off").active = !1;
} else {
this.musicBox.getChildByName("setting_on").active = !1;
this.musicBox.getChildByName("setting_off").active = !0;
}
};
o.prototype.onClick_soundbtn = function() {
s.gc.voiceUtils.commonBtnClick();
s.gc.voiceUtils.switchEffect();
if (s.gc.voiceUtils.effectSwitch) {
this.soundBox.getChildByName("setting_on").active = !0;
this.soundBox.getChildByName("setting_off").active = !1;
} else {
this.soundBox.getChildByName("setting_on").active = !1;
this.soundBox.getChildByName("setting_off").active = !0;
}
};
o.prototype.onClick_zhengdongbtn = function() {
s.gc.voiceUtils.commonBtnClick();
s.gc.voiceUtils.switchShock();
if (s.gc.voiceUtils.shockSwitch) {
this.zhengdongBox.getChildByName("setting_on").active = !0;
this.zhengdongBox.getChildByName("setting_off").active = !1;
} else {
this.zhengdongBox.getChildByName("setting_on").active = !1;
this.zhengdongBox.getChildByName("setting_off").active = !0;
}
};
o.prototype.onClick_continue_btn = function() {
s.gc.voiceUtils.commonBtnClick();
this.node.destroy();
r.playroom.closeBanner();
this.callback && this.callback();
};
o.prototype.onClick_ok_btn = function() {
s.gc.voiceUtils.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
r.playroom.closeBanner();
};
o.prototype.onClick_PrivacyPolicy_btn = function() {
s.gc.voiceUtils.commonBtnClick();
cc.sys.openURL(r.playroom.privacyPolicyUrl);
};
o.prototype.onClick_Termsofservicebtn = function() {
cc.sys.openURL(r.playroom.termsofServiceUrl);
s.gc.voiceUtils.commonBtnClick();
};
c([ p(cc.Sprite) ], o.prototype, "title", void 0);
c([ p(cc.SpriteFrame) ], o.prototype, "pause_sprite", void 0);
c([ p(cc.SpriteFrame) ], o.prototype, "setting_sprite", void 0);
c([ p(cc.Node) ], o.prototype, "soundBox", void 0);
c([ p(cc.Node) ], o.prototype, "musicBox", void 0);
c([ p(cc.Node) ], o.prototype, "zhengdongBox", void 0);
c([ p(cc.Node) ], o.prototype, "setting_pausebtn", void 0);
c([ p(cc.Node) ], o.prototype, "setting_ok", void 0);
return c([ l ], o);
}(cc.Component);
e.default = u;
cc._RF.pop();
}, {
"../tool/gameControl": "gameControl",
"../tool/playroomData": "playroomData"
} ],
stockpileUtils: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "f021e0ydDZC+qJMjJKjbysY", "stockpileUtils");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.stockpileUtils = void 0;
var i = function() {
function t() {}
t.setStringByKey = function(t, o) {
cc.sys.localStorage.setItem(t, o);
};
t.getStringByKey = function(t, o) {
o = o || "";
return cc.sys.localStorage.getItem(t) || o;
};
t.setBoolByKey = function(t, o) {
this.setStringByKey(t, o ? "1" : "0");
};
t.getBoolByKey = function(t, o) {
o = o || !1;
var e = cc.sys.localStorage.getItem(t);
return e ? "1" == e : o;
};
t.setIntegerByKey = function(t, o) {
this.setStringByKey(t, o.toString());
};
t.getIntegerByKey = function(t, o) {
var e = cc.sys.localStorage.getItem(t);
return e ? parseInt(e) : o;
};
t.getStorageJSON = function(t) {
var o = cc.sys.localStorage.getItem(t);
return o instanceof Array && o.length < 1 ? null : o ? JSON.parse(o) : null;
};
t.setStorageJSON = function(t, o) {
cc.sys.localStorage.setItem(t, JSON.stringify(o));
};
t.removeByKey = function(t) {
cc.sys.localStorage.removeItem(t);
};
return t;
}();
e.stockpileUtils = i;
cc._RF.pop();
}, {} ],
termPop: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "288ffaP2ZJMYZaoB90GcwU0", "termPop");
var i, n = this && this.__extends || (i = function(t, o) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
i(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, i) {
var n, c = arguments.length, s = c < 3 ? o : null === i ? i = Object.getOwnPropertyDescriptor(o, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, o, e, i); else for (var r = t.length - 1; r >= 0; r--) (n = t[r]) && (s = (c < 3 ? n(s) : c > 3 ? n(o, e, s) : n(o, e)) || s);
return c > 3 && s && Object.defineProperty(o, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var s = t("../tool/gameControl"), r = t("../tool/playroomData"), a = cc._decorator, l = a.ccclass, p = (a.property, 
function(t) {
n(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.callback = null;
return o;
}
o.prototype.start = function() {
r.playroom.showBanner();
};
o.prototype.initData = function(t) {
this.callback = t.callback;
};
o.prototype.onClick_Agreen = function() {
s.gc.voiceUtils.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
r.playroom.closeBanner();
};
o.prototype.onClick_PrivacyPolicy_btn = function() {
s.gc.voiceUtils.commonBtnClick();
cc.sys.openURL(r.playroom.privacyPolicyUrl);
};
o.prototype.onClick_Termsofservicebtn = function() {
s.gc.voiceUtils.commonBtnClick();
cc.sys.openURL(r.playroom.termsofServiceUrl);
};
return c([ l ], o);
}(cc.Component));
e.default = p;
cc._RF.pop();
}, {
"../tool/gameControl": "gameControl",
"../tool/playroomData": "playroomData"
} ],
voiceUtils: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "090fcgAZWxOM6pwykHoyPvy", "voiceUtils");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.voiceUtils = void 0;
var i = t("./stockpileUtils"), n = function() {
function t() {
this.btnClickEffect = null;
this.bgmMusic = null;
this.currMusic = null;
this.musicSwitch = i.stockpileUtils.getBoolByKey("kk_setup_music", !0);
this.effectSwitch = i.stockpileUtils.getBoolByKey("kk_setup_effect", !0);
this.shockSwitch = i.stockpileUtils.getBoolByKey("kk_setup_shock", !0);
}
t.prototype.initBtnClickEffect = function() {
var t = this;
this.btnClickEffect || cc.resources.load("sound/click", cc.AudioClip, function(o, e) {
if (!o && cc.isValid(t)) {
t.btnClickEffect = e;
e.addRef();
}
});
};
t.prototype.initbgmMusic = function() {
var t = this;
this.bgmMusic || cc.resources.load("sound/bgm", cc.AudioClip, function(o, e) {
if (!o && cc.isValid(t)) {
t.bgmMusic = e;
t.commonbgmMusic();
e.addRef();
}
});
};
t.prototype.switchMusic = function() {
this.musicSwitch = !this.musicSwitch;
i.stockpileUtils.setBoolByKey("kk_setup_music", this.musicSwitch);
this.musicSwitch ? this.currMusic && this.playMusic(this.currMusic) : this.stopMusic();
};
t.prototype.switchEffect = function() {
this.effectSwitch = !this.effectSwitch;
i.stockpileUtils.setBoolByKey("kk_setup_effect", this.effectSwitch);
this.effectSwitch || cc.audioEngine.stopAllEffects();
};
t.prototype.switchShock = function() {
this.shockSwitch = !this.shockSwitch;
i.stockpileUtils.setBoolByKey("kk_setup_shock", this.shockSwitch);
};
t.prototype.playMusic = function(t, o) {
void 0 === o && (o = !0);
if (t) {
this.currMusic = t;
this.musicSwitch && cc.audioEngine.playMusic(t, o);
}
};
t.prototype.playEffect = function(t, o, e) {
void 0 === o && (o = !1);
void 0 === e && (e = null);
if (t) {
if (this.effectSwitch) {
var i = cc.audioEngine.play(t, o, 1);
e && cc.audioEngine.setFinishCallback(i, e);
return i;
}
return null;
}
};
t.prototype.playEffectWithPath = function(t, o) {
void 0 === o && (o = !1);
t && this.effectSwitch && cc.resources.load(t, cc.AudioClip, function(e, i) {
e ? cc.log("加载音效资源失败" + t) : cc.audioEngine.play(i, o, 1);
});
};
t.prototype.stopMusic = function() {
cc.audioEngine.stopMusic();
};
t.prototype.stopAll = function() {
cc.audioEngine.stopAll();
};
t.prototype.pauseAll = function() {
this.musicSwitch && cc.audioEngine.pauseAll();
};
t.prototype.resumeAll = function() {
this.musicSwitch && cc.audioEngine.resumeAll();
};
t.prototype.stopEffect = function(t) {
cc.audioEngine.stopEffect(t);
};
t.prototype.pause = function(t) {
cc.audioEngine.pause(t);
};
t.prototype.resume = function(t) {
this.musicSwitch && cc.audioEngine.resume(t);
};
t.prototype.commonBtnClick = function() {
this.playEffect(this.btnClickEffect, !1);
};
t.prototype.commonbgmMusic = function() {
this.playMusic(this.bgmMusic);
};
return t;
}();
e.voiceUtils = n;
cc._RF.pop();
}, {
"./stockpileUtils": "stockpileUtils"
} ]
}, {}, [ "finishPop", "outPop", "pingFenPop", "quitPop", "setPop", "termPop", "load", "main", "imgItem", "newhand", "sala", "AutoBind", "gameControl", "playroomData", "resLoading", "scrollTool", "stockpileUtils", "voiceUtils" ]);