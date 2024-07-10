 
import { findControl } from "../tool/findControl";
import { fgData } from "../tool/findGameData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class BookPop extends cc.Component {

    callback: Function = null;

    start(): void {
        fgData.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
    }

    onClick_Agreen() {
        findControl.findSoundTool.commonBtnClick();
        this.callback && this.callback()
        this.node.destroy();
        fgData.closeBanner();
    }
 
    onClick_PrivacyPolicy_btn() {
        findControl.findSoundTool.commonBtnClick();
        cc.sys.openURL(fgData.privacyPolicyUrl);
    }

    onClick_Termsofservicebtn() {
        findControl.findSoundTool.commonBtnClick();
        cc.sys.openURL(fgData.termsofServiceUrl);
    }

}
