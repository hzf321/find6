import { findControl, spectacle } from "../tool/findControl";
import { fgData } from "../tool/findGameData";
 

const { ccclass, property } = cc._decorator;

@ccclass
export default class StarPop extends cc.Component {

    callback: Function = null;


    protected start(): void {
        fgData.showBanner();
    }

    initData(data) {
        this.callback = data.callback;
    }


    onClick_continue_btn() {
        findControl.findSoundTool.commonBtnClick();
        this.callback && this.callback()
        this.node.destroy();
        fgData.closeBanner();
    }

    onClick_backHall() {
        findControl.findSoundTool.commonBtnClick();
        this.node.destroy();
        fgData.closeBanner();
        fgData.userData.isHall = true;
        fgData.storageData();
        cc.director.loadScene(spectacle.parlour);

    }
}
