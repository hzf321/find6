
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/dialog/BookPop');
require('./assets/script/dialog/MoonPop');
require('./assets/script/dialog/StarPop');
require('./assets/script/dialog/TreePop');
require('./assets/script/dialog/windPop');
require('./assets/script/host');
require('./assets/script/parlour');
require('./assets/script/prefeb/imgItem');
require('./assets/script/prefeb/newhand');
require('./assets/script/register');
require('./assets/script/tool/findControl');
require('./assets/script/tool/findGameData');
require('./assets/script/tool/findResBind');
require('./assets/script/tool/findResUtil');
require('./assets/script/tool/findScroll');
require('./assets/script/tool/findSoundTool');
require('./assets/script/tool/findStorage');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();