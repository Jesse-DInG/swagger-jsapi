"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var camelcase = require("camelcase");
function fillMap(map, path) {
    var mapList = path.split('/');
    var curObj = map;
    for (var i = 1; i < mapList.length; i++) {
        var key = mapList[i];
        if (!curObj[key]) {
            curObj[key] = {};
        }
        curObj = curObj[key];
    }
}
function getObjPath(path) {
    return path.replace(/\//g, '.');
}
function wrapUrl() {
    var _this = this;
    return function (text, render) {
        var url = _this.url + render(text);
        if (_this.queryProperties.length > 0) {
            url += '?' + _this.queryProperties.map(function (query) {
                return query.name + "=${" + query.name + "}";
            }).join('&');
        }
        return url;
    };
}
function getOutOperation(operation) {
    var outOperation = JSON.parse(JSON.stringify(operation));
    outOperation.method = outOperation.method.toLowerCase();
    outOperation.pathProperties = [];
    outOperation.queryProperties = [];
    outOperation.requireList = [];
    outOperation.wrapUrl = wrapUrl;
    outOperation.parameters.forEach(function (param) {
        switch (param.paramType) {
            case 'body':
                outOperation.paramProperty = param;
                break;
            case 'path':
                outOperation.pathProperties.push(param);
                break;
            default:
                outOperation.queryProperties.push(param);
        }
        outOperation.requireList.push(param.type);
    });
    // if (!outOperation.paramProperty) {
    //     outOperation.paramProperty = { type: 'params' } as ApiParameter
    // }
    return outOperation;
}
function getOutRestModel(api, config) {
    var outRestModel = __assign({ name: api.rest.basePath.substr(1), requireList: [] }, api);
    var apiMap = {};
    var modelMap = new Map();
    var list = api.rest.apis.map(function (detail) {
        var outModel = JSON.parse(JSON.stringify(detail));
        var urlPath = detail.path.replace(/\/\{.*\}/g, '');
        outModel.objPath = camelcase(getObjPath(outRestModel.name + urlPath));
        // 去重
        if (modelMap.has(outModel.objPath)) {
            return null;
        }
        else {
            modelMap.set(outModel.objPath, true);
        }
        outModel.outOperation = detail.operations.filter(function (operation) {
            return config.operations.indexOf(operation.method.toLowerCase()) > -1;
        }).map(function (operation) {
            var outOperation = getOutOperation(operation);
            outOperation.url = api.rest.basePath + urlPath;
            (_a = outRestModel.requireList).push.apply(_a, outOperation.requireList);
            fillMap(apiMap, detail.path);
            return outOperation;
            var _a;
        });
        return outModel;
    }).filter(function (item) { return item; });
    outRestModel.outDetailList = list;
    return outRestModel;
}
exports.getOutRestModel = getOutRestModel;
//# sourceMappingURL=RestResolver.js.map