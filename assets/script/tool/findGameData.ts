 
import { findStorage } from "./findStorage";

let onCloseFinishCb: () => void = null;
let onClosefailCb: () => void = null;
class findGameData {

    private static _instance: findGameData = null;

    public static getInstance(): findGameData {
        if (this._instance == null) {
            this._instance = new findGameData();
        }
        return this._instance;
    }


    constructor() {
        cc.game.on(cc.game.EVENT_HIDE, function () {
            this.storageData();
        }, this);
    }

    privacyPolicyUrl: string = "https://sites.google.com/view/retro-difference-privacy-polic/halaman-muka";
    termsofServiceUrl: string = "https://sites.google.com/view/retrodifferencetermsofservice/halaman-muka";

    levelAll: number = 30;
    userData: any = {
        isClause: false,    //是否打开过隐私协议    
        tishiNum: 1,        //提示次数
        level: 1,           //当前关卡
        isHall: false,      //是否返回过大厅
        isGudie: false,      //是否打开过新手引导
        finishLevel5: false,  //是否完成过第5关
    };

    storageData() {
        findStorage.setStorageJSON(storage.gamedata, this.userData);
    }


    setVideoFailCb(cb: () => void) {
        // onClosefailCb = null;
        // onClosefailCb = cb;

        window['onClosefailCb'] = null;
        window['onClosefailCb']  = cb;
    }

    //看广告
    showVideo(finishCb: () => void) {
        finishCb();
        return
        console.log("android------------看广告")
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showShiPing", "()V");
            onCloseFinishCb = null;
            onCloseFinishCb = finishCb;
        } else if (cc.sys.isNative && cc.sys.OS_IOS == cc.sys.os) {
            //@ts-ignore
            jsb.reflection.callStaticMethod("FindAdMgr", "loadReward");
            window['onCloseFinishCb'] = null;
            window['onCloseFinishCb']= finishCb;
        } else {
            finishCb();
        }
    }

    //打开banner
    showBanner() {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showbanner", "()V");
        }
    }

    //关闭banner
    closeBanner() {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hidebanner", "()V");
        }
    }

    //打开url
    openUrl() {
        if (cc.sys.isNative && cc.sys.OS_ANDROID == cc.sys.os) {
            jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "openUrl", "()V");
        }
    }
    setGamestop(func: Function) {
        window['gamestop'] = func;
    }

    setGamerecovery(func: Function) {
        window['gamerecovery'] = func;
    }
}

export let fgData = findGameData.getInstance();

export enum storage {
    gamedata = "gamedata",
}

export enum sound {
    bgm = "bgm",
    click = "click",
    correct = "correct",
    err = "err",
    fail = "fail",
    win = "win",
}


window['onCloseFinishCb'] = () => {
   
}

/**sdk调用js里面window公众的函数 */
window['onCloseVdieoFinishCb'] = () => {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    window['onCloseFinishCb']()
}


/**sdk调用js里面window公众的函数 */
window['onCloseVdieofailCb'] = () => {
    // if (isPlayMusic) {
    //     AudioCtr.bg();
    // }
    window['onClosefailCb']()
}

window['onClosefailCb'] = () => {
   
}

 //游戏暂停
window['gamestop'] = () => {

}


//游戏恢复
window['gamerecovery'] = () => {

}