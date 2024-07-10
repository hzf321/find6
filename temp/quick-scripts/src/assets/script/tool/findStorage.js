"use strict";
cc._RF.push(module, 'f021e0ydDZC+qJMjJKjbysY', 'findStorage');
// script/tool/findStorage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findStorage = void 0;
var findStorage = /** @class */ (function () {
    function findStorage() {
    }
    findStorage.setStringByKey = function (key, str) {
        cc.sys.localStorage.setItem(key, str);
    };
    findStorage.getStringByKey = function (key, defaultValue) {
        defaultValue = defaultValue ? defaultValue : "";
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? tempValue : defaultValue;
    };
    findStorage.setBoolByKey = function (key, boolValue) {
        this.setStringByKey(key, (boolValue ? "1" : "0"));
    };
    findStorage.getBoolByKey = function (key, defaultValue) {
        defaultValue = defaultValue ? defaultValue : false;
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? (tempValue == "1" ? true : false) : defaultValue;
    };
    findStorage.setIntegerByKey = function (key, defaultValue) {
        this.setStringByKey(key, defaultValue.toString());
    };
    findStorage.getIntegerByKey = function (key, defaultValue) {
        var tempValue = cc.sys.localStorage.getItem(key);
        return tempValue ? parseInt(tempValue) : defaultValue;
    };
    findStorage.getStorageJSON = function (key) {
        var data = cc.sys.localStorage.getItem(key);
        if (data instanceof Array && data.length < 1) {
            return null;
        }
        if (data) {
            return JSON.parse(data);
        }
        return null;
    };
    findStorage.setStorageJSON = function (key, data) {
        cc.sys.localStorage.setItem(key, JSON.stringify(data));
    };
    findStorage.removeByKey = function (key) {
        cc.sys.localStorage.removeItem(key);
    };
    return findStorage;
}());
exports.findStorage = findStorage;

cc._RF.pop();