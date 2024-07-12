window.__require = function t(o, e, n) {
function i(r, a) {
if (!e[r]) {
if (!o[r]) {
var l = r.split("/");
l = l[l.length - 1];
if (!o[l]) {
var s = "function" == typeof __require && __require;
if (!a && s) return s(l, !0);
if (c) return c(l, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = l;
}
var d = e[r] = {
exports: {}
};
o[r][0].call(d.exports, function(t) {
return i(o[r][1][t] || t);
}, d, d.exports, t, o, e, n);
}
return e[r].exports;
}
for (var c = "function" == typeof __require && __require, r = 0; r < n.length; r++) i(n[r]);
return i;
}({
BookPop: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "288ffaP2ZJMYZaoB90GcwU0", "BookPop");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, n) {
var i, c = arguments.length, r = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(o, e, r) : i(o, e)) || r);
return c > 3 && r && Object.defineProperty(o, e, r), r;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var r = t("../tool/findControl"), a = t("../tool/findGameData"), l = cc._decorator, s = l.ccclass, d = (l.property, 
function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.callback = null;
return o;
}
o.prototype.start = function() {
a.fgData.showBanner();
};
o.prototype.initData = function(t) {
this.callback = t.callback;
};
o.prototype.onClick_Agreen = function() {
r.findControl.findSoundTool.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
a.fgData.closeBanner();
};
o.prototype.onClick_PrivacyPolicy_btn = function() {
r.findControl.findSoundTool.commonBtnClick();
cc.sys.openURL(a.fgData.privacyPolicyUrl);
};
o.prototype.onClick_Termsofservicebtn = function() {
r.findControl.findSoundTool.commonBtnClick();
cc.sys.openURL(a.fgData.termsofServiceUrl);
};
return c([ s ], o);
}(cc.Component));
e.default = d;
cc._RF.pop();
}, {
"../tool/findControl": "findControl",
"../tool/findGameData": "findGameData"
} ],
MoonPop: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "98460XFFs1JCI9f0VmFuXBW", "MoonPop");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, n) {
var i, c = arguments.length, r = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(o, e, r) : i(o, e)) || r);
return c > 3 && r && Object.defineProperty(o, e, r), r;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var r = t("../tool/findControl"), a = t("../tool/findGameData"), l = cc._decorator, s = l.ccclass, d = (l.property, 
function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.ADcallback = null;
o.restartCallBack = null;
return o;
}
o.prototype.start = function() {
a.fgData.showBanner();
};
o.prototype.initData = function(t) {
this.ADcallback = t.ADcallback;
this.restartCallBack = t.restartCallBack;
};
o.prototype.onClick_AD_btn = function() {
var t = this;
r.findControl.findSoundTool.commonBtnClick();
a.fgData.showVideo(function() {
t.scheduleOnce(function() {
t.ADcallback && t.ADcallback();
t.node.destroy();
a.fgData.closeBanner();
});
});
};
o.prototype.onClick_restart = function() {
r.findControl.findSoundTool.commonBtnClick();
this.restartCallBack && this.restartCallBack();
this.node.destroy();
a.fgData.closeBanner();
};
return c([ s ], o);
}(cc.Component));
e.default = d;
cc._RF.pop();
}, {
"../tool/findControl": "findControl",
"../tool/findGameData": "findGameData"
} ],
StarPop: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "9335d26T05DjJw8MacCCseS", "StarPop");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, n) {
var i, c = arguments.length, r = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(o, e, r) : i(o, e)) || r);
return c > 3 && r && Object.defineProperty(o, e, r), r;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var r = t("../tool/findControl"), a = t("../tool/findGameData"), l = cc._decorator, s = l.ccclass, d = (l.property, 
function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.callback = null;
return o;
}
o.prototype.start = function() {
a.fgData.showBanner();
};
o.prototype.initData = function(t) {
this.callback = t.callback;
};
o.prototype.onClick_continue_btn = function() {
r.findControl.findSoundTool.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
a.fgData.closeBanner();
};
o.prototype.onClick_backHall = function() {
r.findControl.findSoundTool.commonBtnClick();
this.node.destroy();
a.fgData.closeBanner();
a.fgData.userData.isHall = !0;
a.fgData.storageData();
cc.director.loadScene(r.spectacle.parlour);
};
return c([ s ], o);
}(cc.Component));
e.default = d;
cc._RF.pop();
}, {
"../tool/findControl": "findControl",
"../tool/findGameData": "findGameData"
} ],
TreePop: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "373fe8INcZH8KIbG9PDCZWr", "TreePop");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, n) {
var i, c = arguments.length, r = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(o, e, r) : i(o, e)) || r);
return c > 3 && r && Object.defineProperty(o, e, r), r;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var r = t("../tool/findControl"), a = t("../tool/findGameData"), l = cc._decorator, s = l.ccclass, d = l.property, f = function(t) {
i(o, t);
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
a.fgData.showBanner();
};
o.prototype.initData = function(t) {
this.callback = t.callback;
if (t.isGame) {
this.title.spriteFrame = this.pause_sprite;
this.setting_ok.active = !0;
this.setting_pausebtn.active = !1;
} else {
this.title.spriteFrame = this.setting_sprite;
this.setting_ok.active = !0;
this.setting_pausebtn.active = !1;
}
};
o.prototype.init = function() {
if (r.findControl.findSoundTool.musicSwitch) {
this.musicBox.getChildByName("setting_on").active = !0;
this.musicBox.getChildByName("setting_off").active = !1;
} else {
this.musicBox.getChildByName("setting_on").active = !1;
this.musicBox.getChildByName("setting_off").active = !0;
}
if (r.findControl.findSoundTool.effectSwitch) {
this.soundBox.getChildByName("setting_on").active = !0;
this.soundBox.getChildByName("setting_off").active = !1;
} else {
this.soundBox.getChildByName("setting_on").active = !1;
this.soundBox.getChildByName("setting_off").active = !0;
}
if (r.findControl.findSoundTool.shockSwitch) {
this.zhengdongBox.getChildByName("setting_on").active = !0;
this.zhengdongBox.getChildByName("setting_off").active = !1;
} else {
this.zhengdongBox.getChildByName("setting_on").active = !1;
this.zhengdongBox.getChildByName("setting_off").active = !0;
}
};
o.prototype.onClick_musicbtn = function() {
r.findControl.findSoundTool.commonBtnClick();
r.findControl.findSoundTool.switchMusic();
if (r.findControl.findSoundTool.musicSwitch) {
this.musicBox.getChildByName("setting_on").active = !0;
this.musicBox.getChildByName("setting_off").active = !1;
} else {
this.musicBox.getChildByName("setting_on").active = !1;
this.musicBox.getChildByName("setting_off").active = !0;
}
};
o.prototype.onClick_soundbtn = function() {
r.findControl.findSoundTool.commonBtnClick();
r.findControl.findSoundTool.switchEffect();
if (r.findControl.findSoundTool.effectSwitch) {
this.soundBox.getChildByName("setting_on").active = !0;
this.soundBox.getChildByName("setting_off").active = !1;
} else {
this.soundBox.getChildByName("setting_on").active = !1;
this.soundBox.getChildByName("setting_off").active = !0;
}
};
o.prototype.onClick_zhengdongbtn = function() {
r.findControl.findSoundTool.commonBtnClick();
r.findControl.findSoundTool.switchShock();
if (r.findControl.findSoundTool.shockSwitch) {
this.zhengdongBox.getChildByName("setting_on").active = !0;
this.zhengdongBox.getChildByName("setting_off").active = !1;
} else {
this.zhengdongBox.getChildByName("setting_on").active = !1;
this.zhengdongBox.getChildByName("setting_off").active = !0;
}
};
o.prototype.onClick_continue_btn = function() {
r.findControl.findSoundTool.commonBtnClick();
this.node.destroy();
a.fgData.closeBanner();
this.callback && this.callback();
};
o.prototype.onClick_ok_btn = function() {
r.findControl.findSoundTool.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
a.fgData.closeBanner();
};
o.prototype.onClick_PrivacyPolicy_btn = function() {
r.findControl.findSoundTool.commonBtnClick();
cc.sys.openURL(a.fgData.privacyPolicyUrl);
};
o.prototype.onClick_Termsofservicebtn = function() {
cc.sys.openURL(a.fgData.termsofServiceUrl);
r.findControl.findSoundTool.commonBtnClick();
};
c([ d(cc.Sprite) ], o.prototype, "title", void 0);
c([ d(cc.SpriteFrame) ], o.prototype, "pause_sprite", void 0);
c([ d(cc.SpriteFrame) ], o.prototype, "setting_sprite", void 0);
c([ d(cc.Node) ], o.prototype, "soundBox", void 0);
c([ d(cc.Node) ], o.prototype, "musicBox", void 0);
c([ d(cc.Node) ], o.prototype, "zhengdongBox", void 0);
c([ d(cc.Node) ], o.prototype, "setting_pausebtn", void 0);
c([ d(cc.Node) ], o.prototype, "setting_ok", void 0);
return c([ s ], o);
}(cc.Component);
e.default = f;
cc._RF.pop();
}, {
"../tool/findControl": "findControl",
"../tool/findGameData": "findGameData"
} ],
findControl: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "7fe7eKmHWtOBpfO6ERHigxH", "findControl");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.wicket = e.spectacle = e.findControl = void 0;
var n = t("./findSoundTool"), i = t("./findResUtil"), c = function() {
function t() {
this.sceneNode = null;
this.imgId = 0;
this.findSoundTool = new n.findSoundTool();
this.eventTarget = new cc.EventTarget();
this.findResUtil = i.findResUtil;
this.designWidth = 1280;
this.designHeight = 720;
this.isIpadFix = !1;
this.isIphoneXSMaxFix = !1;
this.iphoneXSMaxY = 0;
this.isLiuhaiFix = !1;
this.liuhaiY = 0;
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
var n = cc.director.getScene().getChildByName("Canvas");
cc.isValid(e) && (n = e);
cc.tween(n).delay(t).call(function() {
o && o();
}).start();
};
t.prototype.playSp = function(t, o, e, n) {
var i = this;
void 0 === e && (e = !1);
void 0 === n && (n = null);
t.setCompleteListener(function() {
n && i.delayCallBack(.02, function() {
n();
}, t.node);
t.setCompleteListener(null);
});
t.setAnimation(0, o, e);
};
t.prototype.stopSp = function(t) {
t.setCompleteListener(null);
};
t.prototype.addSequenceSp = function(t, o, e, n) {
void 0 === e && (e = !1);
n ? t.addAnimation(0, o, e, n) : t.addAnimation(0, o, e);
};
t._instance = null;
return t;
}();
e.findControl = c.getInstance();
e.spectacle = {
host: "host",
parlour: "parlour",
register: "register"
};
e.wicket = {
windPop: "windPop",
MoonPop: "MoonPop",
StarPop: "StarPop",
TreePop: "TreePop",
BookPop: "BookPop"
};
cc._RF.pop();
}, {
"./findResUtil": "findResUtil",
"./findSoundTool": "findSoundTool"
} ],
findGameData: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "57cabiblbxOB7KtkV6MiZG/", "findGameData");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.sound = e.storage = e.fgData = void 0;
var n, i = t("./findStorage"), c = function() {
function t() {
this.privacyPolicyUrl = "https://sites.google.com/view/retro-difference-privacy-polic/halaman-muka";
this.termsofServiceUrl = "https://sites.google.com/view/retrodifferencetermsofservice/halaman-muka";
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
i.findStorage.setStorageJSON(n.gamedata, this.userData);
};
t.prototype.setVideoFailCb = function(t) {
window.onClosefailCb = null;
window.onClosefailCb = t;
};
t.prototype.showVideo = function(t) {
console.log("android------------看广告");
if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V"); else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
jsb.reflection.callStaticMethod("FindAdMgr", "loadReward");
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
t.prototype.openUrl = function() {
cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os && jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openUrl", "()V");
};
t.prototype.setGamestop = function(t) {
window.gamestop = t;
};
t.prototype.setGamerecovery = function(t) {
window.gamerecovery = t;
};
t._instance = null;
return t;
}();
e.fgData = c.getInstance();
(function(t) {
t.gamedata = "gamedata";
})(n = e.storage || (e.storage = {}));
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
"./findStorage": "findStorage"
} ],
findResBind: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "b835cS/qxNLbakyyg5HTNea", "findResBind");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, n) {
var i, c = arguments.length, r = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(o, e, r) : i(o, e)) || r);
return c > 3 && r && Object.defineProperty(o, e, r), r;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
cc.Component.prototype.addAutoReleaseAsset = function(t) {
var o = this.node.getComponent(a);
cc.isValid(o) || (o = this.node.addComponent(a));
o.addAutoReleaseAsset(t);
};
cc.Component.prototype.addAutoReleaseAssets = function(t) {
var o = this.node.getComponent(a);
cc.isValid(o) || (o = this.node.addComponent(a));
for (var e = 0, n = t; e < n.length; e++) {
var i = n[e];
o.addAutoReleaseAsset(i);
}
};
var r = cc._decorator.ccclass, a = function(t) {
i(o, t);
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
return c([ r ], o);
}(cc.Component);
e.default = a;
cc._RF.pop();
}, {} ],
findResUtil: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "d8022bhaGtI34HO+9B4gPxl", "findResUtil");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.findResUtil = void 0;
var n = t("./findResBind"), i = t("./findControl"), c = function() {
function t() {}
t.bindResAsset = function(t, o) {
var e = t.getComponent(n.default);
cc.isValid(e) || (e = t.addComponent(n.default));
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
var n = this;
o.newUrl = t;
o.spriteFrame = null;
cc.resources.load(t, cc.SpriteFrame, function(i, c) {
if (i) e && n.loadSprite(e, o); else if (cc.isValid(o) && o.newUrl == t) {
o.addAutoReleaseAsset(c);
o.spriteFrame = c;
} else n.releaseRes(c);
});
};
t.showDialog = function(t, o, e) {
cc.resources.load("prefeb/" + t, cc.Prefab, function(n, c) {
if (!n) {
var r = cc.instantiate(c);
i.findControl.findResUtil.bindResAsset(r, c);
var a = i.findControl.getsceneNode();
if (r && a) {
o && r.getComponent(t).initData && r.getComponent(t).initData(o);
a.addChild(r);
var l = r.getChildByName("content");
l.scale = 0;
cc.Tween.stopAllByTarget(l);
cc.tween(l).to(.32, {
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
var n = cc.instantiate(e);
i.findControl.findResUtil.bindResAsset(n, e);
var c = i.findControl.getsceneNode();
if (n && c) {
n.active = !0;
c.addChild(n);
n.getChildByName("label").getComponent(cc.Label).string = t;
cc.Tween.stopAllByTarget(n);
n.opacity = 255;
cc.tween(n).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).delay(.5).to(.5, {
opacity: 0
}).call(function() {
n.destroy();
}).start();
}
}
});
};
return t;
}();
e.findResUtil = c;
cc._RF.pop();
}, {
"./findControl": "findControl",
"./findResBind": "findResBind"
} ],
findScroll: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "6742eFjCRhCdpnyZSMeH66r", "findScroll");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, n) {
var i, c = arguments.length, r = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(o, e, r) : i(o, e)) || r);
return c > 3 && r && Object.defineProperty(o, e, r), r;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, l = (r.property, function(t) {
i(o, t);
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
var o = t._contentSize.width, e = t._contentSize.height, n = cc.rect(-t._anchorPoint.x * o, -t._anchorPoint.y * e, o, e);
t._calculWorldMatrix();
n.transformMat4(n, t._worldMatrix);
return n;
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
return c([ a ], o);
}(cc.Component));
e.default = l;
cc._RF.pop();
}, {} ],
findSoundTool: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "090fcgAZWxOM6pwykHoyPvy", "findSoundTool");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.findSoundTool = void 0;
var n = t("./findStorage"), i = function() {
function t() {
this.btnClickEffect = null;
this.bgmMusic = null;
this.currMusic = null;
this.musicSwitch = n.findStorage.getBoolByKey("kk_setup_music", !0);
this.effectSwitch = n.findStorage.getBoolByKey("kk_setup_effect", !0);
this.shockSwitch = n.findStorage.getBoolByKey("kk_setup_shock", !0);
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
n.findStorage.setBoolByKey("kk_setup_music", this.musicSwitch);
this.musicSwitch ? this.currMusic && this.playMusic(this.currMusic) : this.stopMusic();
};
t.prototype.switchEffect = function() {
this.effectSwitch = !this.effectSwitch;
n.findStorage.setBoolByKey("kk_setup_effect", this.effectSwitch);
this.effectSwitch || cc.audioEngine.stopAllEffects();
};
t.prototype.switchShock = function() {
this.shockSwitch = !this.shockSwitch;
n.findStorage.setBoolByKey("kk_setup_shock", this.shockSwitch);
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
var n = cc.audioEngine.play(t, o, 1);
e && cc.audioEngine.setFinishCallback(n, e);
return n;
}
return null;
}
};
t.prototype.playEffectWithPath = function(t, o) {
void 0 === o && (o = !1);
t && this.effectSwitch && cc.resources.load(t, cc.AudioClip, function(e, n) {
e ? cc.log("加载音效资源失败" + t) : cc.audioEngine.play(n, o, 1);
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
e.findSoundTool = i;
cc._RF.pop();
}, {
"./findStorage": "findStorage"
} ],
findStorage: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "f021e0ydDZC+qJMjJKjbysY", "findStorage");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.findStorage = void 0;
var n = function() {
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
e.findStorage = n;
cc._RF.pop();
}, {} ],
host: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "73ed6/QdxxO+pIbRjS+FY/O", "host");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, n) {
var i, c = arguments.length, r = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(o, e, r) : i(o, e)) || r);
return c > 3 && r && Object.defineProperty(o, e, r), r;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var r, a = t("./prefeb/newhand"), l = t("./tool/findControl"), s = t("./tool/findGameData"), d = cc._decorator, f = d.ccclass, p = d.property;
(function(t) {
t[t.discover = 0] = "discover";
t[t.wrong = 1] = "wrong";
t[t.repeat = 2] = "repeat";
})(r || (r = {}));
var h = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.bg = null;
o.originalImg = null;
o.finishImg = null;
o.tishi_qipao = null;
o.gameFindPrefab2 = null;
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
o.heartBox = null;
o.emptyheartBox = null;
o.love_Data = [];
o.lovelyY = 290;
o.lovelyScale = .45;
o.yeziAllNum = 10;
o.lovelyFindNum = 0;
o.lovelyOutTime = 0;
o.lovelyIsPrompt = !1;
o.timer = null;
o.isStop = !1;
o.oneErr = !1;
o.audioClips = [];
o.newhandNode = null;
return o;
}
o.prototype.start = function() {
var t = this;
s.fgData.setGamestop(function() {
l.findControl.findSoundTool.pauseAll();
});
s.fgData.setGamerecovery(function() {
l.findControl.findSoundTool.resumeAll();
});
if (cc.sys.platform === cc.sys.IPAD) {
this.getComponent(cc.Canvas).fitHeight = !1;
this.getComponent(cc.Canvas).fitWidth = !0;
}
this.resetAll();
l.findControl.setsceneNode(this.node);
l.findControl.adapterBg(this.bg);
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
t || (this.love_Data = []);
this.imgSignBox.getChildByName("origBox").destroyAllChildren();
this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
this.imgSignBox.getChildByName("errBox").destroyAllChildren();
this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
this.imgSignBox.getChildByName("lizi").destroyAllChildren();
this.mask.active = !1;
this.oneErr = !1;
this.isStop = !1;
this.timer = null;
this.lovelyIsPrompt = !1;
this.lovelyFindNum = 0;
this.init();
};
o.prototype.checkNewHand = function() {
var t = this;
s.fgData.userData.isGudie || 1 != l.findControl.imgId || cc.resources.load("prefeb/newhand", cc.Prefab, function(o, e) {
if (!o) {
var n = cc.instantiate(e);
l.findControl.findResUtil.bindResAsset(n, e);
t.node.addChild(n);
t.newhandNode = n.getComponent(a.default);
t.newhandNode.showdong1();
}
});
};
o.prototype.init = function() {
this.level.string = "Lv" + l.findControl.imgId;
for (var t = 0; t < this.yeziBox.children.length; t++) {
var o = this.yeziBox.children[t].getComponent(sp.Skeleton);
l.findControl.playSp(o, "1_an_stop");
}
this.changeQiPaoNum();
this.mask.active = !1;
this.reduceTime.active = !1;
this.timeAll.active = !1;
for (t = 0; t < this.heartBox.children.length; t++) {
this.heartBox.children[t].active = !0;
this.emptyheartBox.children[t].active = !1;
}
};
o.prototype.startDownTime = function() {};
o.prototype.downTimeEvent = function() {};
o.prototype.errReduceTime = function() {
for (var t = this, o = this.heartBox.children.length - 1; o >= 0; o--) {
var e = this.heartBox.children[o], n = this.emptyheartBox.children[o];
if (e.active) {
e.active = !1;
n.active = !0;
var i = n.getComponent(sp.Skeleton);
l.findControl.playSp(i, "posui");
break;
}
}
this.heartBox.children[0].active || l.findControl.findResUtil.showDialog(l.wicket.MoonPop, {
ADcallback: function() {
s.fgData.storageData();
t.changeQiPaoNum();
t.startDownTime();
for (var o = 0; o < t.heartBox.children.length; o++) {
t.heartBox.children[o].active = !0;
t.emptyheartBox.children[o].active = !1;
}
},
restartCallBack: function() {
t.resetAll(!0);
t.init();
t.startDownTime();
cc.log(t.love_Data, "this.love_Data");
for (var o = 0; o < t.love_Data.length; o++) t.love_Data[o].isFind = !1;
}
});
};
o.prototype.changeQiPaoNum = function() {
if (s.fgData.userData.tishiNum > 0) {
this.tishi_qipao.getChildByName("ad_label").active = !1;
this.tishi_qipao.getChildByName("num_label").active = !0;
this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = s.fgData.userData.tishiNum.toString();
} else {
this.tishi_qipao.getChildByName("ad_label").active = !0;
this.tishi_qipao.getChildByName("num_label").active = !1;
}
};
o.prototype.loadRes = function() {
var t = this;
l.findControl.findResUtil.loadSprite("fineImg/fine_" + l.findControl.imgId, this.originalImg.getComponent(cc.Sprite));
l.findControl.findResUtil.loadSprite("discoverImg/discover_" + l.findControl.imgId, this.finishImg.getComponent(cc.Sprite));
cc.resources.load("imgConfig/rank" + l.findControl.imgId, cc.JsonAsset, function(o, e) {
if (o) cc.log(o); else {
l.findControl.findResUtil.bindResAsset(t.node, e);
var n = e.json;
if (n && n.path) {
t.love_Data = n.path;
for (var i = 0; i < t.love_Data.length; i++) t.love_Data[i].isFind = !1;
}
}
});
};
o.prototype.yeziLight = function(t) {
var o = this, e = this.yeziBox.children[this.lovelyFindNum - 1].getComponent(sp.Skeleton), n = cc.instantiate(this.game_tuowei);
this.imgSignBox.getChildByName("lizi").addChild(n);
n.setPosition(t);
var i = l.findControl.changePos(e.node, n), c = .5;
t.y < 0 && (c = 1);
cc.Tween.stopAllByTarget(n);
cc.tween(n).to(c, {
position: i
}).call(function() {
o.scheduleOnce(function() {
n.destroy();
}, .3);
l.findControl.playSp(e, "2_bianliang");
l.findControl.addSequenceSp(e, "3_liang_stop");
}).start();
};
o.prototype.findSignSucc = function(t, o) {
for (var e = 0; e < 2; e++) {
var n = cc.instantiate(this.gameFindPrefab2), i = 0;
if (0 == e) {
i = t.x * this.lovelyScale + this.lovelyY;
this.imgSignBox.getChildByName("origBox").addChild(n);
} else {
this.imgSignBox.getChildByName("finishBox").addChild(n);
i = t.x * this.lovelyScale - this.lovelyY;
}
var c = cc.v3(i, t.y * this.lovelyScale);
n.setPosition(c);
n.width = o.blockSize.wid * this.lovelyScale;
n.height = o.blockSize.hei * this.lovelyScale;
cc.Tween.stopAllByTarget(n);
n.scale = 0;
cc.tween(n).to(.3, {
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
var n = null;
if (o.x > 0) {
n = cc.instantiate(this.gameErrPrefab);
this.imgSignBox.getChildByName("errBox").addChild(n);
n.setPosition(cc.v3(o.x - 2 * this.lovelyY, o.y));
} else {
n = cc.instantiate(this.gameErrPrefab);
this.imgSignBox.getChildByName("errBox").addChild(n);
n.setPosition(cc.v3(o.x + 2 * this.lovelyY, o.y));
}
n && this.errSignAnim(n);
};
o.prototype.imgEvent = function(t) {
var o = t.getLocation(), e = this.imgSignBox.convertToNodeSpaceAR(cc.v3(o.x, o.y)), n = this.checkImgSign(e);
if (n.type == r.discover) {
if (this.lovelyIsPrompt) {
this.lovelyIsPrompt = !1;
this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
}
this.lovelyFindNum = this.lovelyFindNum + 1;
this.findSignSucc(cc.v3(n.fgData.centerPos.x, n.fgData.centerPos.y), n.fgData);
this.yeziLight(e);
if (this.newhandNode && 1 == this.lovelyFindNum) {
if (this.newhandNode) {
this.newhandNode.hidedong1();
this.newhandNode.showdong2();
}
} else if (this.newhandNode && 2 == this.lovelyFindNum) {
if (this.newhandNode) {
this.newhandNode.node.destroy();
this.newhandNode = null;
}
s.fgData.userData.isGudie = !0;
s.fgData.storageData();
}
this.playCommonSound(s.sound.correct);
this.lovelyFindNum >= this.yeziAllNum && this.gameEnd();
} else if (n.type == r.wrong) {
this.playCommonSound(s.sound.err);
this.errReduceTime();
this.findSignErr(e);
this.oneErr = !0;
} else {
this.playCommonSound(s.sound.err);
this.errReduceTime();
this.findSignErr(e);
this.oneErr = !0;
}
};
o.prototype.checkImgSign = function(t) {
for (var o = null, e = null, n = 0; n < this.love_Data.length; n++) {
var i, c = this.love_Data[n], a = c.centerPos.y * this.lovelyScale;
i = t.x > 0 ? c.centerPos.x * this.lovelyScale + this.lovelyY : c.centerPos.x * this.lovelyScale - this.lovelyY;
var l = c.blockSize.wid * this.lovelyScale, s = c.blockSize.hei * this.lovelyScale;
if (!c.isFind && t.x <= i + l / 2 && t.x >= i - l / 2 && t.y <= a + s / 2 && t.y >= a - s / 2) {
if (c.isFind) {
o = r.repeat;
cc.log("找到重复的了");
} else {
cc.log("找到了");
o = r.discover;
e = c;
c.isFind = !0;
}
return {
type: o,
fgData: e
};
}
o = r.wrong;
cc.log("没找到");
}
return {
type: o,
fgData: e
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
l.findControl.playSp(e, "4_man", !1, function() {
t.scheduleOnce(function() {
if (o == t.yeziBox.children.length - 1) {
t.playCommonSound(s.sound.win);
if (s.fgData.userData.level + 1 <= s.fgData.levelAll) {
s.fgData.userData.level = s.fgData.userData.level + 1;
s.fgData.storageData();
}
l.findControl.findResUtil.showDialog(l.wicket.windPop, {
img: t.originalImg.getComponent(cc.Sprite).spriteFrame,
finishBox: cc.instantiate(t.imgSignBox.getChildByName("finishBox")),
love_Data: t.love_Data,
callback: function() {
if (l.findControl.imgId + 1 <= s.fgData.levelAll) {
l.findControl.imgId = l.findControl.imgId + 1;
t.resetAll();
t.init();
t.startDownTime();
t.loadRes();
} else {
s.fgData.userData.isHall = !0;
s.fgData.storageData();
cc.director.loadScene(l.spectacle.parlour);
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
var t = l.findControl.imgId;
return t >= 1 && t <= 5 ? 300 : t >= 6 && t <= 10 ? 180 : t >= 11 && t <= 15 ? 150 : t >= 16 && t <= 20 ? 120 : t >= 21 && t <= 25 ? 90 : 60;
};
o.prototype.timeOutEvent = function() {
var t = this;
l.findControl.findResUtil.showDialog(l.wicket.MoonPop, {
ADcallback: function() {
t.lovelyOutTime = 60;
s.fgData.userData.tishiNum++;
s.fgData.storageData();
t.changeQiPaoNum();
t.startDownTime();
},
restartCallBack: function() {
t.resetAll(!0);
t.init();
t.startDownTime();
cc.log(t.love_Data, "this.love_Data");
for (var o = 0; o < t.love_Data.length; o++) t.love_Data[o].isFind = !1;
}
});
};
o.prototype.onClick_back = function() {
var t = this;
l.findControl.findSoundTool.commonBtnClick();
this.isStop = !0;
l.findControl.findResUtil.showDialog(l.wicket.StarPop, {
callback: function() {
t.isStop = !1;
}
});
};
o.prototype.onClick_pause = function() {
var t = this;
l.findControl.findSoundTool.commonBtnClick();
this.isStop = !0;
l.findControl.findResUtil.showDialog(l.wicket.TreePop, {
isGame: !0,
callback: function() {
t.isStop = !1;
}
});
};
o.prototype.onClick_tishi = function() {
var t = this;
l.findControl.findSoundTool.commonBtnClick();
if (this.lovelyIsPrompt) l.findControl.findResUtil.showToast("Prompt already exists"); else {
for (var o = null, e = 0; e < this.love_Data.length; e++) if (!this.love_Data[e].isFind) {
o = this.love_Data[e];
break;
}
if (s.fgData) if (s.fgData.userData.tishiNum <= 0) {
cc.log("看广告");
s.fgData.showVideo(function() {
t.showTiShi(o);
});
} else {
s.fgData.userData.tishiNum = s.fgData.userData.tishiNum - 1;
s.fgData.storageData();
this.changeQiPaoNum();
this.showTiShi(o);
}
}
};
o.prototype.showTiShi = function(t) {
if (t) {
this.lovelyIsPrompt = !0;
for (var o = 0; o < 2; o++) {
var e = cc.instantiate(this.gameTishiPrefab);
this.imgSignBox.getChildByName("tishiBox").addChild(e);
var n, i = t.centerPos.y * this.lovelyScale;
n = 0 == o ? t.centerPos.x * this.lovelyScale + this.lovelyY : t.centerPos.x * this.lovelyScale - this.lovelyY;
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
for (var e = 0; e < this.audioClips.length; e++) if (this.audioClips[e].name == t) return l.findControl.findSoundTool.playEffect(this.audioClips[e], o);
return null;
};
c([ p(cc.Node) ], o.prototype, "bg", void 0);
c([ p(cc.Node) ], o.prototype, "originalImg", void 0);
c([ p(cc.Node) ], o.prototype, "finishImg", void 0);
c([ p(cc.Node) ], o.prototype, "tishi_qipao", void 0);
c([ p(cc.Prefab) ], o.prototype, "gameFindPrefab2", void 0);
c([ p(cc.Prefab) ], o.prototype, "gameFindPrefab", void 0);
c([ p(cc.Prefab) ], o.prototype, "gameErrPrefab", void 0);
c([ p(cc.Prefab) ], o.prototype, "gameTishiPrefab", void 0);
c([ p(cc.Prefab) ], o.prototype, "game_tuowei", void 0);
c([ p(cc.Node) ], o.prototype, "imgSignBox", void 0);
c([ p(cc.Node) ], o.prototype, "yeziBox", void 0);
c([ p(cc.Label) ], o.prototype, "level", void 0);
c([ p(cc.Node) ], o.prototype, "timeAll", void 0);
c([ p(cc.Node) ], o.prototype, "reduceTime", void 0);
c([ p(cc.Node) ], o.prototype, "mask", void 0);
c([ p(cc.Node) ], o.prototype, "heartBox", void 0);
c([ p(cc.Node) ], o.prototype, "emptyheartBox", void 0);
return c([ f ], o);
}(cc.Component);
e.default = h;
cc._RF.pop();
}, {
"./prefeb/newhand": "newhand",
"./tool/findControl": "findControl",
"./tool/findGameData": "findGameData"
} ],
imgItem: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "b349d0IddZO5bDF9FOpApzL", "imgItem");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, n) {
var i, c = arguments.length, r = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(o, e, r) : i(o, e)) || r);
return c > 3 && r && Object.defineProperty(o, e, r), r;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var r = t("../tool/findControl"), a = t("../tool/findGameData"), l = cc._decorator, s = l.ccclass, d = l.property, f = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.hall_mask = null;
o.img = null;
o.str = null;
o.idx = 0;
o.isbool = !1;
o.hall = null;
o.completeColor = cc.color(103, 128, 90);
o.guanqiaColor = cc.color(188, 140, 101);
return o;
}
o.prototype.start = function() {};
o.prototype.init = function(t, o) {
this.idx = t;
this.hall = o;
this.str.string = "Level " + (t + 1);
this.str.node.color = this.guanqiaColor;
if (this.idx < a.fgData.userData.level) {
this.hall_mask.active = !1;
this.isbool = !0;
this.str.string = "Unlock";
this.str.node.color = this.completeColor;
} else {
this.hall_mask.active = !0;
this.isbool = !1;
}
r.findControl.findResUtil.loadSprite("fineImg/fine_" + (this.idx + 1), this.img);
};
o.prototype.onclick_item = function() {
r.findControl.findSoundTool.commonBtnClick();
if (this.isbool) {
r.findControl.imgId = this.idx + 1;
a.fgData.userData.isHall = !1;
a.fgData.storageData();
cc.director.loadScene(r.spectacle.host);
} else this.hall.showToast("The level has not been unlocked yet");
};
c([ d(cc.Node) ], o.prototype, "hall_mask", void 0);
c([ d(cc.Sprite) ], o.prototype, "img", void 0);
c([ d(cc.Label) ], o.prototype, "str", void 0);
return c([ s ], o);
}(cc.Component);
e.default = f;
cc._RF.pop();
}, {
"../tool/findControl": "findControl",
"../tool/findGameData": "findGameData"
} ],
newhand: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "9a1e0lTY71PmJruz9bjJlQK", "newhand");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, n) {
var i, c = arguments.length, r = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(o, e, r) : i(o, e)) || r);
return c > 3 && r && Object.defineProperty(o, e, r), r;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var r = cc._decorator, a = r.ccclass, l = r.property, s = function(t) {
i(o, t);
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
c([ l(cc.Node) ], o.prototype, "dong1_top", void 0);
c([ l(cc.Node) ], o.prototype, "dongdong1_bottom", void 0);
c([ l(cc.Node) ], o.prototype, "hand1", void 0);
c([ l(cc.Node) ], o.prototype, "dong2_top", void 0);
c([ l(cc.Node) ], o.prototype, "dongdong2_bottom", void 0);
c([ l(cc.Node) ], o.prototype, "hand2", void 0);
return c([ a ], o);
}(cc.Component);
e.default = s;
cc._RF.pop();
}, {} ],
parlour: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "014741UGutBway3J/ZL6r3K", "parlour");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, n) {
var i, c = arguments.length, r = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(o, e, r) : i(o, e)) || r);
return c > 3 && r && Object.defineProperty(o, e, r), r;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var r = t("./prefeb/imgItem"), a = t("./tool/findControl"), l = cc._decorator, s = l.ccclass, d = l.property, f = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.bg = null;
o.imgItem = null;
o.scroll_contect = null;
o.scrollView = null;
o.gamehallBg = null;
o.bookSelect = null;
o.gamehall = null;
return o;
}
o.prototype.start = function() {
var t = this;
if (cc.sys.platform === cc.sys.IPAD) {
this.getComponent(cc.Canvas).fitHeight = !1;
this.getComponent(cc.Canvas).fitWidth = !0;
}
a.findControl.setsceneNode(this.node);
a.findControl.adapterBg(this.bg);
a.findControl.adapterBg(this.gamehallBg);
this.scheduleOnce(function() {
t.init();
});
this.gamehall.active = !0;
this.bookSelect.active = !1;
};
o.prototype.init = function() {
this.scroll_contect.destroyAllChildren();
for (var t = 0; t < 30; t++) {
var o = cc.instantiate(this.imgItem);
this.scroll_contect.addChild(o);
o.getComponent(r.default).init(t, this);
}
};
o.prototype.onClick_setting = function() {
a.findControl.findSoundTool.commonBtnClick();
a.findControl.findResUtil.showDialog(a.wicket.TreePop, {
isGame: !1
});
};
o.prototype.showToast = function(t) {
a.findControl.findResUtil.showToast(t);
};
o.prototype.onClick_lvBook = function() {
a.findControl.findSoundTool.commonBtnClick();
this.gamehall.active = !1;
this.bookSelect.active = !0;
};
o.prototype.onClick_blueBook = function() {
a.findControl.findSoundTool.commonBtnClick();
a.findControl.findResUtil.showToast("To unlock, conquer the preceding level first!");
};
c([ d(cc.Node) ], o.prototype, "bg", void 0);
c([ d(cc.Prefab) ], o.prototype, "imgItem", void 0);
c([ d(cc.Node) ], o.prototype, "scroll_contect", void 0);
c([ d(cc.ScrollView) ], o.prototype, "scrollView", void 0);
c([ d(cc.Node) ], o.prototype, "gamehallBg", void 0);
c([ d(cc.Node) ], o.prototype, "bookSelect", void 0);
c([ d(cc.Node) ], o.prototype, "gamehall", void 0);
return c([ s ], o);
}(cc.Component);
e.default = f;
cc._RF.pop();
}, {
"./prefeb/imgItem": "imgItem",
"./tool/findControl": "findControl"
} ],
register: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "3f30aa1wRVDbLr8Lgi0ltz2", "register");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, n) {
var i, c = arguments.length, r = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(o, e, r) : i(o, e)) || r);
return c > 3 && r && Object.defineProperty(o, e, r), r;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var r = t("./tool/findStorage"), a = t("./tool/findControl"), l = t("./tool/findGameData"), s = cc._decorator, d = s.ccclass, f = s.property, p = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.loading_bg = null;
o.loading_bg2 = null;
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
this.getComponent(cc.Canvas).fitHeight = !1;
this.getComponent(cc.Canvas).fitWidth = !0;
}
a.findControl.adapterBg(this.loading_bg);
a.findControl.adapterBg(this.loading_bg2);
a.findControl.findSoundTool.initBtnClickEffect();
a.findControl.findSoundTool.initbgmMusic();
var o = r.findStorage.getStorageJSON(l.storage.gamedata);
o && (l.fgData.userData = o);
a.findControl.setsceneNode(this.node);
if (l.fgData.userData.isClause) {
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
a.findControl.findResUtil.showDialog(a.wicket.BookPop, {
callback: function() {
l.fgData.userData.isClause = !0;
t.gotoHallBox.active = !0;
t.loadingBox.active = !1;
l.fgData.storageData();
cc.tween(t.loading_play).to(.5, {
scale: 1.1
}).to(.5, {
scale: 1
}).union().repeatForever().start();
}
});
}
l.fgData.setVideoFailCb(function() {
cc.resources.load("prefeb/toast", cc.Prefab, function(t, o) {
if (!t) {
var e = cc.instantiate(o);
a.findControl.findResUtil.bindResAsset(e, o);
var n = a.findControl.getsceneNode();
if (e && n) {
e.active = !0;
n.addChild(e);
e.getChildByName("label").getComponent(cc.Label).string = "Sorry, no ads available at the moment. Please try again later!";
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
a.findControl.findSoundTool.commonBtnClick();
this.loaging_bar_yellow.fillRange = 0;
cc.Tween.stopAllByTarget(this.loaging_bar_yellow);
cc.loader.loadResDir("prefeb", function(o) {
if (o) cc.error(o); else {
console.log("prefeb assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.loader.loadResDir("fineImg", function(o) {
if (o) cc.error(o); else {
console.log("finishImg assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.loader.loadResDir("discoverImg", function(o) {
if (o) cc.error(o); else {
console.log("originalImg assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.loader.loadResDir("imgConfig", function(o, e) {
if (o) cc.error(o); else {
l.fgData.levelAll = e.length;
console.log("imgConfig assets in  have been loaded.");
t.progressBarEvent();
}
});
cc.director.preloadScene(a.spectacle.host, function() {
cc.log("game scene preloaded");
t.progressBarEvent();
});
cc.director.preloadScene(a.spectacle.parlour, function() {
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
if (l.fgData.userData.isHall) cc.director.loadScene(a.spectacle.parlour); else {
a.findControl.imgId = l.fgData.userData.level;
cc.director.loadScene(a.spectacle.host);
}
}, .05);
}).start();
};
o.prototype.showShiPing = function() {
console.log("android---------------showShiPing------------------");
l.fgData.showVideo(function() {
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
c([ f(cc.Node) ], o.prototype, "loading_bg", void 0);
c([ f(cc.Node) ], o.prototype, "loading_bg2", void 0);
c([ f(cc.Sprite) ], o.prototype, "loaging_bar_yellow", void 0);
c([ f(cc.Node) ], o.prototype, "loadingBox", void 0);
c([ f(cc.Node) ], o.prototype, "gotoHallBox", void 0);
c([ f(cc.Node) ], o.prototype, "loading_play", void 0);
return c([ d ], o);
}(cc.Component);
e.default = p;
cc._RF.pop();
}, {
"./tool/findControl": "findControl",
"./tool/findGameData": "findGameData",
"./tool/findStorage": "findStorage"
} ],
windPop: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "5a09auqmsBG27JJ2bvnIpkk", "windPop");
var n, i = this && this.__extends || (n = function(t, o) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
n(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), c = this && this.__decorate || function(t, o, e, n) {
var i, c = arguments.length, r = c < 3 ? o : null === n ? n = Object.getOwnPropertyDescriptor(o, e) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, o, e, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (r = (c < 3 ? i(r) : c > 3 ? i(o, e, r) : i(o, e)) || r);
return c > 3 && r && Object.defineProperty(o, e, r), r;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
var r = t("../tool/findControl"), a = t("../tool/findGameData"), l = cc._decorator, s = l.ccclass, d = l.property, f = function(t) {
i(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.gameFindPrefab = null;
o.title = null;
o.bg = null;
o.imgEnd = null;
o.lvLabel = null;
o.lvProress = null;
o.img = null;
o.callback = null;
return o;
}
o.prototype.initData = function(t) {
this.img = t.img;
this.callback = t.callback;
var o = t.finishBox;
this.imgEnd.spriteFrame = this.img;
o.setPosition(290, 43);
this.node.getChildByName("content").addChild(o);
};
o.prototype.onLoad = function() {};
o.prototype.start = function() {
this.title.string = "Level " + r.findControl.imgId;
r.findControl.adapterBg(this.bg);
var t = a.fgData.userData.level;
(t -= 1) >= 11 && t <= 20 ? t -= 10 : t >= 21 && t <= 30 && (t -= 20);
this.lvLabel.string = t;
this.lvProress.fillRange = t / 10;
10 == t && (a.fgData.userData.tishiNum = a.fgData.userData.tishiNum + 2);
};
o.prototype.onClick_continueBtn = function() {
r.findControl.findSoundTool.commonBtnClick();
this.callback && this.callback();
this.node.destroy();
};
o.prototype.onClick_close = function() {
r.findControl.findSoundTool.commonBtnClick();
this.node.destroy();
};
c([ d(cc.Prefab) ], o.prototype, "gameFindPrefab", void 0);
c([ d(cc.Label) ], o.prototype, "title", void 0);
c([ d(cc.Node) ], o.prototype, "bg", void 0);
c([ d(cc.Sprite) ], o.prototype, "imgEnd", void 0);
c([ d(cc.Label) ], o.prototype, "lvLabel", void 0);
c([ d(cc.Sprite) ], o.prototype, "lvProress", void 0);
return c([ s ], o);
}(cc.Component);
e.default = f;
cc._RF.pop();
}, {
"../tool/findControl": "findControl",
"../tool/findGameData": "findGameData"
} ]
}, {}, [ "BookPop", "MoonPop", "StarPop", "TreePop", "windPop", "host", "parlour", "imgItem", "newhand", "register", "findControl", "findGameData", "findResBind", "findResUtil", "findScroll", "findSoundTool", "findStorage" ]);