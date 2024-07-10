import { findControl } from "../tool/findControl";
import { fgData } from "../tool/findGameData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class TreePop extends cc.Component {


    @property(cc.Sprite)
    title: cc.Sprite = null;

    @property(cc.SpriteFrame)
    pause_sprite: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    setting_sprite: cc.SpriteFrame = null;

    @property(cc.Node)
    soundBox: cc.Node = null;

    @property(cc.Node)
    musicBox: cc.Node = null;

    @property(cc.Node)
    zhengdongBox: cc.Node = null;

    @property(cc.Node)
    setting_pausebtn: cc.Node = null;

    @property(cc.Node)
    setting_ok: cc.Node = null;

    callback: Function = null;

    start() {
        this.init();
        fgData.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
        if (data.isGame) {
            this.title.spriteFrame = this.pause_sprite;
            this.setting_ok.active = true;
            this.setting_pausebtn.active = false;
        } else {
            this.title.spriteFrame = this.setting_sprite;
            this.setting_ok.active = true;
            this.setting_pausebtn.active = false;
        }
    }


    init() {

        if (!findControl.findSoundTool.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        } else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }

        if (!findControl.findSoundTool.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        } else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }

        if (!findControl.findSoundTool.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        } else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    }


    onClick_musicbtn() {
        findControl.findSoundTool.commonBtnClick();
        findControl.findSoundTool.switchMusic();
        if (!findControl.findSoundTool.musicSwitch) {
            this.musicBox.getChildByName("setting_on").active = false;
            this.musicBox.getChildByName("setting_off").active = true;
        } else {
            this.musicBox.getChildByName("setting_on").active = true;
            this.musicBox.getChildByName("setting_off").active = false;
        }
    }

    onClick_soundbtn() {
        findControl.findSoundTool.commonBtnClick();
        findControl.findSoundTool.switchEffect();
        if (!findControl.findSoundTool.effectSwitch) {
            this.soundBox.getChildByName("setting_on").active = false;
            this.soundBox.getChildByName("setting_off").active = true;
        } else {
            this.soundBox.getChildByName("setting_on").active = true;
            this.soundBox.getChildByName("setting_off").active = false;
        }
    }
    onClick_zhengdongbtn() {
        findControl.findSoundTool.commonBtnClick();
        findControl.findSoundTool.switchShock();
        if (!findControl.findSoundTool.shockSwitch) {
            this.zhengdongBox.getChildByName("setting_on").active = false;
            this.zhengdongBox.getChildByName("setting_off").active = true;
        } else {
            this.zhengdongBox.getChildByName("setting_on").active = true;
            this.zhengdongBox.getChildByName("setting_off").active = false;
        }
    }

    onClick_continue_btn() {
        findControl.findSoundTool.commonBtnClick();
        this.node.destroy();
        fgData.closeBanner();
        this.callback && this.callback();
    }


    onClick_ok_btn() {
        findControl.findSoundTool.commonBtnClick();
        this.callback && this.callback();
        this.node.destroy();
        fgData.closeBanner();
    }

    onClick_PrivacyPolicy_btn() {
        findControl.findSoundTool.commonBtnClick();
        cc.sys.openURL(fgData.privacyPolicyUrl);
    }

    onClick_Termsofservicebtn() {
        cc.sys.openURL(fgData.termsofServiceUrl);
        findControl.findSoundTool.commonBtnClick();
    }
}
