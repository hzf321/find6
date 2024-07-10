 
import { findStorage } from "./tool/findStorage";
import { spectacle, wicket, findControl } from "./tool/findControl";
import { fgData, storage } from "./tool/findGameData";

const { ccclass, property } = cc._decorator;
 
@ccclass
export default class register extends cc.Component {

    @property(cc.Node)
    loading_bg: cc.Node = null;

    @property(cc.Node)
    loading_bg2: cc.Node = null;

    @property(cc.Sprite)
    loaging_bar_yellow: cc.Sprite = null;

    @property(cc.Node)
    loadingBox: cc.Node = null;

    @property(cc.Node)
    gotoHallBox: cc.Node = null;

    @property(cc.Node)
    loading_play: cc.Node = null;

    private resNum = 6;
    private nowNum = 0;

    start() {
        if (cc.sys.platform === cc.sys.IPAD) {
            this.getComponent(cc.Canvas).fitHeight = false;
            this.getComponent(cc.Canvas).fitWidth = true;
        }
        findControl.adapterBg(this.loading_bg);
        findControl.adapterBg(this.loading_bg2);
        findControl.findSoundTool.initBtnClickEffect();
        findControl.findSoundTool.initbgmMusic();

        let playroomStorage = findStorage.getStorageJSON(storage.gamedata);
        if (playroomStorage) {
            fgData.userData = playroomStorage;
        }

        findControl.setsceneNode(this.node);

        if (!fgData.userData.isClause) {
            this.gotoHallBox.active = false;
            this.loadingBox.active = false;
            findControl.findResUtil.showDialog(wicket.BookPop, {
                callback: () => {
                    fgData.userData.isClause = true;
                    this.gotoHallBox.active = true;
                    this.loadingBox.active = false;
                    fgData.storageData();
                    cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
                }
            });
        } else {
            this.gotoHallBox.active = true;
            this.loadingBox.active = false;

            cc.tween(this.loading_play).to(0.5, { scale: 1.1 }).to(0.5, { scale: 1 }).union().repeatForever().start();
        }


        fgData.setVideoFailCb(()=>{
            cc.resources.load("prefeb/toast", cc.Prefab, (err, prefab) => {
                if (err) {
                    return;
                }
                
                let toast = cc.instantiate(prefab);
                findControl.findResUtil.bindResAsset(toast, prefab);
                let parentNode = findControl.getsceneNode();
                if (toast && parentNode) {
                    toast.active = true;
                    parentNode.addChild(toast);
                    let toastLabel = toast.getChildByName("label");
                    toastLabel.getComponent(cc.Label).string = "No ads at the moment";
                    cc.Tween.stopAllByTarget(toast);
                    toast.opacity = 255;
                    cc.tween(toast).to(0.15, { scale: 1.2 }).to(0.15, { scale: 1 }).delay(0.5).to(0.5, { opacity: 0 }).call(() => {
                        toast.destroy();
                    }).start();
                }
            })
        });
 

    }


    onClick_gotoPlay() {
        this.gotoHallBox.active = false;
        this.loadingBox.active = true;
        findControl.findSoundTool.commonBtnClick();

        this.loaging_bar_yellow.fillRange = 0;
        cc.Tween.stopAllByTarget(this.loaging_bar_yellow)
        cc.loader.loadResDir("prefeb", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('prefeb assets in  have been loaded.');
            this.progressBarEvent();
        });
        cc.loader.loadResDir("fineImg", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('finishImg assets in  have been loaded.');
            this.progressBarEvent();
        });
        cc.loader.loadResDir("discoverImg", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            console.log('originalImg assets in  have been loaded.');
            this.progressBarEvent();
        });
        cc.loader.loadResDir("imgConfig", (err, assets) => {
            if (err) {
                cc.error(err);
                return;
            }
            fgData.levelAll = assets.length;
            console.log('imgConfig assets in  have been loaded.');
            this.progressBarEvent();
        });

        cc.director.preloadScene(spectacle.host, (err, assets) => {
            cc.log("game scene preloaded");
            this.progressBarEvent();
        });
        cc.director.preloadScene(spectacle.parlour, (err, assets) => {
            cc.log("hall scene preloaded");
            this.progressBarEvent();
        });

    }

    progressBarEvent() {
        let fill = 1 / 6;
        this.nowNum++;
        cc.Tween.stopAllByTarget(this.loaging_bar_yellow)
        cc.tween(this.loaging_bar_yellow).to(0.5, { fillRange: fill * this.nowNum })
            .call(() => {
                if (this.nowNum == this.resNum) {
                    this.scheduleOnce(() => {
                        if (fgData.userData.isHall) {
                            cc.director.loadScene(spectacle.parlour);
                        } else {
                            findControl.imgId = fgData.userData.level;
                            cc.director.loadScene(spectacle.host);
                        }
                    }, 0.05)
                }
            }).start();
    }


    showShiPing() {
        console.log("android---------------showShiPing------------------")
        fgData.showVideo(()=>{
            console.log("zzzzzzzzzzzzzzzzzzzzwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
          })
    }


    showbanner() {
        console.log("android---------------showbanner------------------")
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
    }


    hidebanner() {
        console.log("android---------------hidebanner------------------")
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
    }
}

