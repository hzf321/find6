import { findSoundTool } from "./findSoundTool";
import { findResUtil } from "./findResUtil";


export interface lovelyData {
    centerPos: { x: number, y: number },            // 中心点坐标 
    startPos: { x: number, y: number },             // 起始点坐标
    endPos: { x: number, y: number },               // 结束点坐标
    blockSize: { wid: number, hei: number },        // 方块大小
    isFind: boolean,                                // 是否找到
}


class findControlClass  {

    private static _instance: findControlClass = null;

    public static getInstance(): findControlClass {
        if (this._instance == null) {
            this._instance = new findControlClass();
        }
        return this._instance;
    }

    public sceneNode: cc.Node = null
    public imgId: number = 0;


    public findSoundTool: findSoundTool = new findSoundTool();
    public eventTarget: cc.EventTarget = new cc.EventTarget();
    public findResUtil = findResUtil;


    designWidth:number  = 1280;//设计分辨率宽
    designHeight:number =  720;//设计分辨率高

    isIpadFix:boolean = false;
    isIphoneXSMaxFix:boolean = false;
    iphoneXSMaxY:number = 0;

    isLiuhaiFix:boolean = false;//是否有刘海
    liuhaiY:number = 0;//刘海高度

    setsceneNode(node: cc.Node) {
        this.sceneNode = node;
    }

    getsceneNode() {
        return this.sceneNode;
    }


    /**
     * 时间转换，秒->分秒, mm:ss
    */
    timeChange(value) {
        value = +value;
        let minute: number = Math.floor(value / 60);
        let second: number = Math.floor(value % 60);
        let minStr: string = ""
        if (minute < 10) {        //分钟
            minStr = "0" + minute
        } else {
            minStr = minute.toString();
        }
        let secStr: string = ""
        if (second < 10) {        //秒数
            secStr = "0" + second
        } else {
            secStr = second.toString();
        }
        return `${minStr}:${secStr}`;
    }


    //返回范围的随机数
    getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 0.999999999)) + min;
    }

    // 全屏窗口背景图适配
    adapterBg(bgNode: cc.Node) {
        //背景大图适配 等比缩放 不留黑边
        let _bgWidthScale = cc.winSize.width / bgNode.width;
        let _bgHeightScale = cc.winSize.height / bgNode.height;
        bgNode.scale = Math.max(_bgWidthScale, _bgHeightScale);
    }

    //转成节点坐标
    changePos(toNode: cc.Node, fromNode: cc.Node) {
        if (!cc.isValid(toNode) || !cc.isValid(fromNode)) return cc.v3(0, 0);
        let _pos = toNode.parent.convertToWorldSpaceAR(toNode.position);
        let _npos = fromNode.parent.convertToNodeSpaceAR(_pos);
        return _npos;
    }


    //------------------------------------------anim---------------------------------------------------------------
    delayCallBack(time: number, _callback: any, nodeDelay?: cc.Node): void {
        let CanvasNode = cc.director.getScene().getChildByName('Canvas');
        if (cc.isValid(nodeDelay)) {
            CanvasNode = nodeDelay;
        }
        // cc.Tween.stopAllByTarget(CanvasNode);//这里不能停止CanvasNode的所有动作
        cc.tween(CanvasNode)
            .delay(time)
            .call(() => { if (_callback) _callback(); })
            .start();
    }

    playSp(spSkel: sp.Skeleton, name: string, isLoop: boolean = false, endCallback: Function = null): void {
        spSkel.setCompleteListener(() => {
            if (endCallback) {
                this.delayCallBack(0.02, () => {
                    endCallback();
                }, spSkel.node);
            }
            spSkel.setCompleteListener(null);
            // spSkel.setDisposeListener(endCallback);
        });
        spSkel.setAnimation(0, name, isLoop);
    }
    stopSp(spSkel: sp.Skeleton): void {
        spSkel.setCompleteListener(null);
        // spSkel.clearTracks();
    }

    // 序列动画(添加一个动画到尾巴 还可以延迟几秒)
    addSequenceSp(spSkel: sp.Skeleton, name: string, isLoop: boolean = false, delayTime?: number): void {
        if (delayTime) {
            spSkel.addAnimation(0, name, isLoop, delayTime);
        } else {
            spSkel.addAnimation(0, name, isLoop);
        }
    }
}

export let findControl = findControlClass.getInstance();



export const spectacle = {
    host: "host",               //游戏场景
    parlour: "parlour",         //大厅
    register: "register",       //登录页
}

export const wicket = {
    windPop: "windPop",                 //游戏结束
    MoonPop: "MoonPop",                 //时间到
    StarPop: "StarPop",                 //退出 返回大厅
    TreePop: "TreePop",                 //设置
    BookPop: "BookPop",                 //登录页隐私协议
   
}