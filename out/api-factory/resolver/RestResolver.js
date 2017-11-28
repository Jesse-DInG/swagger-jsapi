"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mustache = require("mustache");
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
function getOutOperation(operation) {
    var outOperation = JSON.parse(JSON.stringify(operation));
    outOperation.method = outOperation.method.toLowerCase();
    var queryProperties = [];
    outOperation.parameters.forEach(function (param) {
        if (param.paramType === 'body') {
            outOperation.paramProperty = param;
        }
        else {
            queryProperties.push(param);
        }
    });
    if (!outOperation.paramProperty) {
        outOperation.paramProperty = { type: 'params' };
    }
    if (queryProperties.length > 0) {
        outOperation.queryString = '{' + queryProperties.map(function (p) { return p.name; }).join(',') + '}';
    }
    else {
        outOperation.queryString = 'query';
    }
    return outOperation;
}
function resoveRest(rest, config) {
    var output = {
        path: null,
        context: '',
        data: rest
    };
    var outRestModel = {
        name: rest.basePath.substr(1)
    };
    var apiMap = {};
    var list = rest.apis.map(function (detail) {
        var outModel = JSON.parse(JSON.stringify(detail));
        outModel.objPath = camelcase(getObjPath(outRestModel.name + detail.path));
        outModel.outOperation = detail.operations.map(function (operation) {
            var outOperation = getOutOperation(operation);
            outOperation.method = outOperation.method.toLowerCase();
            var queryProperties = [];
            outOperation.parameters.forEach(function (param) {
                if (param.paramType === 'body') {
                    outOperation.paramProperty = param;
                }
                else {
                    queryProperties.push(param);
                }
                return param.paramType !== 'body';
            });
            fillMap(apiMap, detail.path);
            return outOperation;
        });
        return outModel;
    });
    outRestModel.outDetailList = list;
    output.context = Mustache.render(config.template.ajax, outRestModel);
    return output;
}
exports.resoveRest = resoveRest;
//# sourceMappingURL=RestResolver.js.map