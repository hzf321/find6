"use strict";
cc._RF.push(module, '73ed6/QdxxO+pIbRjS+FY/O', 'host');
// script/host.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var newhand_1 = require("./prefeb/newhand");
var findControl_1 = require("./tool/findControl");
var findGameData_1 = require("./tool/findGameData");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameState;
(function (GameState) {
    GameState[GameState["discover"] = 0] = "discover";
    GameState[GameState["wrong"] = 1] = "wrong";
    GameState[GameState["repeat"] = 2] = "repeat";
})(GameState || (GameState = {}));
var host = /** @class */ (function (_super) {
    __extends(host, _super);
    function host() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.originalImg = null;
        _this.finishImg = null;
        _this.tishi_qipao = null;
        _this.gameFindPrefab2 = null;
        _this.gameFindPrefab = null;
        _this.gameErrPrefab = null;
        _this.gameTishiPrefab = null;
        _this.game_tuowei = null;
        _this.imgSignBox = null;
        _this.yeziBox = null;
        _this.level = null;
        _this.timeAll = null;
        _this.reduceTime = null;
        _this.mask = null;
        _this.heartBox = null;
        _this.emptyheartBox = null;
        _this.love_Data = [];
        _this.lovelyY = 290;
        _this.lovelyScale = 0.45;
        _this.yeziAllNum = 10;
        _this.lovelyFindNum = 0;
        _this.lovelyOutTime = 0;
        _this.lovelyIsPrompt = false;
        _this.timer = null;
        _this.isStop = false;
        _this.oneErr = false;
        _this.audioClips = [];
        _this.newhandNode = null;
        return _this;
    }
    host.prototype.start = function () {
        var _this = this;
        findGameData_1.fgData.setGamestop(function () {
            findControl_1.findControl.findSoundTool.pauseAll();
        });
        findGameData_1.fgData.setGamerecovery(function () {
            findControl_1.findControl.findSoundTool.resumeAll();
        });
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        this.resetAll();
        findControl_1.findControl.setsceneNode(this.node);
        findControl_1.findControl.adapterBg(this.bg);
        this.onEvent();
        this.init();
        this.startDownTime();
        this.loadRes();
        this.checkNewHand();
        cc.resources.loadDir("sound", cc.AudioClip, function (err, clips) {
            if (err || !cc.isValid(_this))
                return;
            _this.audioClips = clips;
            _this.addAutoReleaseAssets(clips);
        });
    };
    host.prototype.onEvent = function () {
        this.originalImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
        this.finishImg.on(cc.Node.EventType.TOUCH_END, this.imgEvent, this);
    };
    host.prototype.resetAll = function (clearData) {
        if (!clearData) {
            this.love_Data = [];
        }
        this.imgSignBox.getChildByName("origBox").destroyAllChildren();
        this.imgSignBox.getChildByName("finishBox").destroyAllChildren();
        this.imgSignBox.getChildByName("errBox").destroyAllChildren();
        this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
        this.imgSignBox.getChildByName("lizi").destroyAllChildren();
        this.mask.active = false;
        this.oneErr = false;
        this.isStop = false;
        this.timer = null;
        this.lovelyIsPrompt = false;
        this.lovelyFindNum = 0;
        this.init();
    };
    host.prototype.checkNewHand = function () {
        var _this = this;
        if (findGameData_1.fgData.userData.isGudie || findControl_1.findControl.imgId != 1) {
            return;
        }
        cc.resources.load("prefeb/newhand", cc.Prefab, function (err, prefab) {
            if (err) {
                return;
            }
            var node = cc.instantiate(prefab);
            findControl_1.findControl.findResUtil.bindResAsset(node, prefab);
            _this.node.addChild(node);
            _this.newhandNode = node.getComponent(newhand_1.default);
            _this.newhandNode.showdong1();
        });
    };
    host.prototype.init = function () {
        this.level.string = "Lv" + findControl_1.findControl.imgId;
        for (var i = 0; i < this.yeziBox.children.length; i++) {
            var anim = this.yeziBox.children[i].getComponent(sp.Skeleton);
            findControl_1.findControl.playSp(anim, "1_an_stop");
        }
        this.changeQiPaoNum();
        this.mask.active = false;
        // this.lovelyOutTime = this.getDownTime();
        // let time = findControl.timeChange(this.lovelyOutTime);
        // this.timeAll.getComponent(cc.Label).string = time;
        this.reduceTime.active = false;
        this.timeAll.active = false;
        for (var i = 0; i < this.heartBox.children.length; i++) {
            this.heartBox.children[i].active = true;
            this.emptyheartBox.children[i].active = false;
        }
    };
    //开启倒计时
    host.prototype.startDownTime = function () {
        return;
        if (this.lovelyOutTime > 0) {
            var time = findControl_1.findControl.timeChange(this.lovelyOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
            this.timer = this.schedule(this.downTimeEvent, 1);
        }
    };
    host.prototype.downTimeEvent = function () {
        return;
        if (this.isStop) {
            return;
        }
        this.lovelyOutTime--;
        var time = findControl_1.findControl.timeChange(this.lovelyOutTime);
        this.timeAll.getComponent(cc.Label).string = time;
        if (this.lovelyOutTime <= 0) {
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
            this.playCommonSound(findGameData_1.sound.fail);
            cc.log("时间到了");
        }
    };
    //点错了
    host.prototype.errReduceTime = function () {
        var _this = this;
        var findheart = false;
        for (var i = this.heartBox.children.length - 1; i >= 0; i--) {
            var heartItem_1 = this.heartBox.children[i];
            var emptyheartItem = this.emptyheartBox.children[i];
            if (heartItem_1.active) {
                findheart = true;
                heartItem_1.active = false;
                emptyheartItem.active = true;
                var anim = emptyheartItem.getComponent(sp.Skeleton);
                findControl_1.findControl.playSp(anim, "posui");
                break;
            }
        }
        var heartItem = this.heartBox.children[0];
        if (!heartItem.active) {
            findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.MoonPop, {
                ADcallback: function () {
                    // this.lovelyOutTime = 60;  
                    // fgData.userData.tishiNum++;
                    findGameData_1.fgData.storageData();
                    _this.changeQiPaoNum();
                    _this.startDownTime();
                    for (var i = 0; i < _this.heartBox.children.length; i++) {
                        _this.heartBox.children[i].active = true;
                        _this.emptyheartBox.children[i].active = false;
                    }
                },
                restartCallBack: function () {
                    _this.resetAll(true);
                    _this.init();
                    _this.startDownTime();
                    cc.log(_this.love_Data, "this.love_Data");
                    for (var i = 0; i < _this.love_Data.length; i++) {
                        _this.love_Data[i].isFind = false;
                    }
                }
            });
        }
        return;
        //时间
        if (!this.oneErr)
            return;
        var posY = this.timeAll.y;
        var reduceTime = 30;
        this.reduceTime.y = posY;
        this.reduceTime.active = true;
        this.reduceTime.getComponent(cc.Label).string = "-" + reduceTime;
        cc.Tween.stopAllByTarget(this.reduceTime);
        cc.tween(this.reduceTime).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).to(1, { opacity: 255, y: posY - 25 }).call(function () {
            _this.reduceTime.active = false;
        }).start();
        this.lovelyOutTime -= reduceTime;
        if (this.lovelyOutTime <= 0) {
            this.timeAll.getComponent(cc.Label).string = "00:00";
            this.playCommonSound(findGameData_1.sound.fail);
            cc.log("时间到了");
            this.unschedule(this.downTimeEvent);
            this.timeOutEvent();
        }
        else {
            var time = findControl_1.findControl.timeChange(this.lovelyOutTime);
            this.timeAll.getComponent(cc.Label).string = time;
        }
    };
    host.prototype.changeQiPaoNum = function () {
        if (findGameData_1.fgData.userData.tishiNum > 0) {
            // this.tishi_qipao.getChildByName("ad_label").active = false;
            this.tishi_qipao.getChildByName("num_label").active = true;
            this.tishi_qipao.getChildByName("num_label").getComponent(cc.Label).string = findGameData_1.fgData.userData.tishiNum.toString();
        }
        else {
            // this.tishi_qipao.getChildByName("ad_label").active = true;
            this.tishi_qipao.getChildByName("num_label").active = false;
        }
    };
    host.prototype.loadRes = function () {
        var _this = this;
        findControl_1.findControl.findResUtil.loadSprite("fineImg/" + "fine_" + findControl_1.findControl.imgId, this.originalImg.getComponent(cc.Sprite));
        findControl_1.findControl.findResUtil.loadSprite("discoverImg/" + "discover_" + findControl_1.findControl.imgId, this.finishImg.getComponent(cc.Sprite));
        cc.resources.load("imgConfig/rank" + findControl_1.findControl.imgId, cc.JsonAsset, function (err, res) {
            if (err) {
                cc.log(err);
                return;
            }
            // 获取到 Json 数据
            findControl_1.findControl.findResUtil.bindResAsset(_this.node, res);
            var jsonData = res.json;
            if (jsonData && jsonData.path) {
                _this.love_Data = jsonData.path;
                for (var i = 0; i < _this.love_Data.length; i++) {
                    _this.love_Data[i].isFind = false;
                }
                // for (let i = 0; i < this.love_Data.length; i++) {
                //     let data = this.love_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
                // for (let i = 0; i < this.love_Data.length; i++) {
                //     let data = this.love_Data[i];
                //     this.findSignSucc(cc.v3(data.centerPos.x, data.centerPos.y))
                // }
            }
        });
    };
    host.prototype.yeziLight = function (pos) {
        var _this = this;
        var anim = this.yeziBox.children[this.lovelyFindNum - 1].getComponent(sp.Skeleton);
        var tuowei = cc.instantiate(this.game_tuowei);
        this.imgSignBox.getChildByName("lizi").addChild(tuowei);
        tuowei.setPosition(pos);
        var changePos = findControl_1.findControl.changePos(anim.node, tuowei);
        var time = 0.5;
        if (pos.y < 0) {
            time = 1;
        }
        cc.Tween.stopAllByTarget(tuowei);
        cc.tween(tuowei).to(time, { position: changePos }).call(function () {
            _this.scheduleOnce(function () {
                tuowei.destroy();
            }, 0.3);
            findControl_1.findControl.playSp(anim, "2_bianliang");
            findControl_1.findControl.addSequenceSp(anim, "3_liang_stop");
        }).start();
    };
    host.prototype.findSignSucc = function (targetPos, fgData) {
        for (var i = 0; i < 2; i++) {
            var gameFind = cc.instantiate(this.gameFindPrefab2);
            var imgX = 0;
            if (i == 0) {
                imgX = targetPos.x * this.lovelyScale + this.lovelyY;
                this.imgSignBox.getChildByName("origBox").addChild(gameFind);
            }
            else {
                this.imgSignBox.getChildByName("finishBox").addChild(gameFind);
                imgX = targetPos.x * this.lovelyScale - this.lovelyY;
            }
            var centerPos = cc.v3(imgX, targetPos.y * this.lovelyScale);
            gameFind.setPosition(centerPos);
            //     正方形
            gameFind.width = fgData.blockSize.wid * this.lovelyScale;
            gameFind.height = fgData.blockSize.hei * this.lovelyScale;
            cc.Tween.stopAllByTarget(gameFind);
            gameFind.scale = 0;
            cc.tween(gameFind).to(0.3, { scale: 1.5 }).to(0.1, { scale: 1.3 }).start();
        }
    };
    host.prototype.findSignErr = function (targetPos) {
        var clickPos = targetPos;
        var gameErr = cc.instantiate(this.gameErrPrefab);
        this.imgSignBox.getChildByName("errBox").addChild(gameErr);
        gameErr.setPosition(clickPos);
        this.errSignAnim(gameErr);
        var otherErrSign = null;
        if (clickPos.x > 0) {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x - (this.lovelyY * 2), clickPos.y));
        }
        else {
            otherErrSign = cc.instantiate(this.gameErrPrefab);
            this.imgSignBox.getChildByName("errBox").addChild(otherErrSign);
            otherErrSign.setPosition(cc.v3(clickPos.x + (this.lovelyY * 2), clickPos.y));
        }
        if (otherErrSign) {
            this.errSignAnim(otherErrSign);
        }
    };
    host.prototype.imgEvent = function (event) {
        var pos = event.getLocation();
        var clickPos = this.imgSignBox.convertToNodeSpaceAR(cc.v3(pos.x, pos.y));
        // this.findSignErr(clickPos);
        var data = this.checkImgSign(clickPos);
        if (data.type == GameState.discover) {
            if (this.lovelyIsPrompt) {
                this.lovelyIsPrompt = false;
                this.imgSignBox.getChildByName("tishiBox").destroyAllChildren();
            }
            this.lovelyFindNum = this.lovelyFindNum + 1;
            this.findSignSucc(cc.v3(data.fgData.centerPos.x, data.fgData.centerPos.y), data.fgData);
            this.yeziLight(clickPos);
            if (this.newhandNode && this.lovelyFindNum == 1) {
                if (this.newhandNode) {
                    this.newhandNode.hidedong1();
                    this.newhandNode.showdong2();
                }
            }
            else if (this.newhandNode && this.lovelyFindNum == 2) {
                if (this.newhandNode) {
                    this.newhandNode.node.destroy();
                    this.newhandNode = null;
                }
                findGameData_1.fgData.userData.isGudie = true;
                findGameData_1.fgData.storageData();
            }
            this.playCommonSound(findGameData_1.sound.correct);
            if (this.lovelyFindNum >= this.yeziAllNum) { //胜利 游戏结束
                this.gameEnd();
            }
        }
        else if (data.type == GameState.wrong) {
            this.playCommonSound(findGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
        else {
            this.playCommonSound(findGameData_1.sound.err);
            this.errReduceTime();
            this.findSignErr(clickPos);
            this.oneErr = true;
        }
    };
    host.prototype.checkImgSign = function (targetPos) {
        var type = null;
        var fgData = null;
        for (var i = 0; i < this.love_Data.length; i++) {
            var data = this.love_Data[i];
            var x = 0;
            var y = data.centerPos.y * this.lovelyScale;
            if (targetPos.x > 0) {
                x = data.centerPos.x * this.lovelyScale + this.lovelyY;
            }
            else {
                x = data.centerPos.x * this.lovelyScale - this.lovelyY;
            }
            var wid = data.blockSize.wid * this.lovelyScale;
            var hei = data.blockSize.hei * this.lovelyScale;
            // let testitem = cc.instantiate(this.testitemPrefab);
            // this.imgSignBox.addChild(testitem);
            // testitem.setPosition(cc.v3(x, y));
            // testitem.width = wid;
            // testitem.height = hei;
            if (!data.isFind && targetPos.x <= x + wid / 2 && targetPos.x >= x - wid / 2
                && targetPos.y <= y + hei / 2 && targetPos.y >= y - hei / 2) {
                if (!data.isFind) {
                    cc.log("找到了");
                    type = GameState.discover;
                    fgData = data;
                    data.isFind = true;
                }
                else {
                    type = GameState.repeat;
                    cc.log("找到重复的了");
                }
                return { type: type, fgData: fgData };
            }
            else {
                type = GameState.wrong;
                cc.log("没找到");
            }
        }
        return { type: type, fgData: fgData };
    };
    host.prototype.errSignAnim = function (node) {
        cc.Tween.stopAllByTarget(node);
        cc.tween(node)
            .to(0.05, { angle: 15 }).to(0.05, { angle: 0 }).to(0.05, { angle: -15 })
            .to(0.07, { angle: 10 }).to(0.07, { angle: 0 }).to(0.07, { angle: -10 })
            .to(0.1, { angle: 7 }).to(0.1, { angle: 0 }).to(0.1, { angle: -7 })
            .to(0.1, { angle: 3 }).to(0.1, { angle: 0 })
            .call(function () {
            node.destroy();
        }).start();
    };
    host.prototype.gameEnd = function () {
        var _this = this;
        cc.log("游戏结束");
        this.mask.active = true;
        this.scheduleOnce(function () {
            var _loop_1 = function (i) {
                var anim = _this.yeziBox.children[i].getComponent(sp.Skeleton);
                _this.scheduleOnce(function () {
                    findControl_1.findControl.playSp(anim, "4_man", false, function () {
                        _this.scheduleOnce(function () {
                            if (i == _this.yeziBox.children.length - 1) {
                                _this.playCommonSound(findGameData_1.sound.win);
                                if (findGameData_1.fgData.userData.level + 1 <= findGameData_1.fgData.levelAll) {
                                    findGameData_1.fgData.userData.level = findGameData_1.fgData.userData.level + 1;
                                    findGameData_1.fgData.storageData();
                                }
                                findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.windPop, {
                                    img: _this.originalImg.getComponent(cc.Sprite).spriteFrame,
                                    finishBox: cc.instantiate(_this.imgSignBox.getChildByName("finishBox")),
                                    love_Data: _this.love_Data,
                                    callback: function () {
                                        if (findControl_1.findControl.imgId + 1 <= findGameData_1.fgData.levelAll) {
                                            findControl_1.findControl.imgId = findControl_1.findControl.imgId + 1;
                                            _this.resetAll();
                                            _this.init();
                                            _this.startDownTime();
                                            _this.loadRes();
                                        }
                                        else {
                                            findGameData_1.fgData.userData.isHall = true;
                                            findGameData_1.fgData.storageData();
                                            cc.director.loadScene(findControl_1.spectacle.parlour);
                                        }
                                    }
                                });
                            }
                        });
                    });
                }, 0.1 * i);
            };
            for (var i = 0; i < _this.yeziBox.children.length; i++) {
                _loop_1(i);
            }
        }, 0.5);
    };
    //获取当前关卡的倒计时
    host.prototype.getDownTime = function () {
        var level = findControl_1.findControl.imgId;
        var time = 0;
        if (level >= 1 && level <= 5) {
            time = 5 * 60;
        }
        else if (level >= 6 && level <= 10) {
            time = 3 * 60;
        }
        else if (level >= 11 && level <= 15) {
            time = 2 * 60 + 30;
        }
        else if (level >= 16 && level <= 20) {
            time = 2 * 60;
        }
        else if (level >= 21 && level <= 25) {
            time = 1 * 60 + 30;
        }
        else {
            time = 1 * 60;
        }
        return time;
    };
    //时间到
    host.prototype.timeOutEvent = function () {
        var _this = this;
        findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.MoonPop, {
            ADcallback: function () {
                _this.lovelyOutTime = 60;
                findGameData_1.fgData.userData.tishiNum++;
                findGameData_1.fgData.storageData();
                _this.changeQiPaoNum();
                _this.startDownTime();
            },
            restartCallBack: function () {
                _this.resetAll(true);
                _this.init();
                _this.startDownTime();
                cc.log(_this.love_Data, "this.love_Data");
                for (var i = 0; i < _this.love_Data.length; i++) {
                    _this.love_Data[i].isFind = false;
                }
            }
        });
    };
    host.prototype.onClick_back = function () {
        var _this = this;
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.isStop = true;
        findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.StarPop, { callback: function () { _this.isStop = false; } });
    };
    host.prototype.onClick_pause = function () {
        var _this = this;
        findControl_1.findControl.findSoundTool.commonBtnClick();
        this.isStop = true;
        findControl_1.findControl.findResUtil.showDialog(findControl_1.wicket.TreePop, { isGame: true, callback: function () { _this.isStop = false; } });
    };
    host.prototype.onClick_tishi = function () {
        var _this = this;
        findControl_1.findControl.findSoundTool.commonBtnClick();
        if (this.lovelyIsPrompt) {
            findControl_1.findControl.findResUtil.showToast("Prompt already exists");
            return;
        }
        var lvdata = null;
        for (var i = 0; i < this.love_Data.length; i++) {
            if (!this.love_Data[i].isFind) {
                lvdata = this.love_Data[i];
                break;
            }
        }
        if (!findGameData_1.fgData) {
            return;
        }
        if (findGameData_1.fgData.userData.tishiNum <= 0) {
            cc.log("看广告");
            findGameData_1.fgData.showVideo(function () {
                _this.showTiShi(lvdata);
            });
            return;
        }
        findGameData_1.fgData.userData.tishiNum = findGameData_1.fgData.userData.tishiNum - 1;
        findGameData_1.fgData.storageData();
        this.changeQiPaoNum();
        this.showTiShi(lvdata);
    };
    host.prototype.showTiShi = function (fgData) {
        if (fgData) {
            this.lovelyIsPrompt = true;
            for (var i = 0; i < 2; i++) {
                var tishi = cc.instantiate(this.gameTishiPrefab);
                this.imgSignBox.getChildByName("tishiBox").addChild(tishi);
                var x = 0;
                var y = fgData.centerPos.y * this.lovelyScale;
                if (i == 0) {
                    x = fgData.centerPos.x * this.lovelyScale + this.lovelyY;
                }
                else {
                    x = fgData.centerPos.x * this.lovelyScale - this.lovelyY;
                }
                tishi.setPosition(x, y);
                cc.Tween.stopAllByTarget(tishi);
                cc.tween(tishi).to(0.5, { scale: 0.7 }).to(0.5, { scale: 1 }).union().repeatForever().start();
            }
        }
    };
    //播放音效
    host.prototype.playCommonSound = function (audioName, loop) {
        if (loop === void 0) { loop = false; }
        for (var i = 0; i < this.audioClips.length; i++) {
            if (this.audioClips[i].name == audioName) {
                var audioID = findControl_1.findControl.findSoundTool.playEffect(this.audioClips[i], loop);
                return audioID;
            }
        }
        return null;
    };
    __decorate([
        property(cc.Node)
    ], host.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "originalImg", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "finishImg", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "tishi_qipao", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "gameFindPrefab2", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "gameFindPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "gameErrPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "gameTishiPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], host.prototype, "game_tuowei", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "imgSignBox", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "yeziBox", void 0);
    __decorate([
        property(cc.Label)
    ], host.prototype, "level", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "timeAll", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "reduceTime", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "heartBox", void 0);
    __decorate([
        property(cc.Node)
    ], host.prototype, "emptyheartBox", void 0);
    host = __decorate([
        ccclass
    ], host);
    return host;
}(cc.Component));
exports.default = host;

cc._RF.pop();