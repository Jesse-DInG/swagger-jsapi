"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
function getQueryStringUrl(url, query) {
    var fixedUrl = url;
    if (url.indexOf('?') > -1) {
        fixedUrl += '&';
    }
    else {
        fixedUrl += '?';
    }
    fixedUrl += Object.keys(query).map(function (key) { return key + "=" + query[key]; }).join('&');
    return fixedUrl;
}
exports.getQueryStringUrl = getQueryStringUrl;
function copyObj(obj) {
    return JSON.parse(JSON.stringify(obj));
}
exports.copyObj = copyObj;
/**
 * swagger object type transform to js type
 * @param type
 */
function getJsTypeFromJava(type) {
    switch (type) {
        case 'integer':
            return 'number';
        case 'array':
            return 'Array';
        default:
            return type;
    }
}
exports.getJsTypeFromJava = getJsTypeFromJava;
/**
 * require module based on cwd path
 * @param module
 */
function requireRoot(module) {
    return require(path.resolve(process.cwd(), module));
}
exports.requireRoot = requireRoot;
//# sourceMappingURL=utils.js.map