"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var Mustache = require("mustache");
var ModelResolver_1 = require("./resolver/ModelResolver");
var fs_path_1 = require("fs-path");
var RestResolver_1 = require("./resolver/RestResolver");
var utils_1 = require("../utils");
var ApiFactory = /** @class */ (function () {
    function ApiFactory(config) {
        this.config = config;
        Mustache.tags = ['<%', '%>'];
    }
    ApiFactory.prototype.excute = function (apiDoc) {
        var _this = this;
        var modelMap = new Map();
        var requireList = [];
        var modelDebuggerMap = new Map();
        var restOutModelList = apiDoc.apis.map(function (api) {
            if (api.rest.models) {
                Object.keys(api.rest.models).forEach(function (key) {
                    var classModel = ModelResolver_1.getClassModel(api.rest.models[key]);
                    modelMap.set(classModel.id, classModel);
                    // this._buildModel(api, classModel)
                });
            }
            var outputModel = RestResolver_1.getOutRestModel(api, _this.config);
            requireList.push.apply(requireList, outputModel.requireList);
            outputModel.outDetailList.forEach(function (detail) {
                if (modelDebuggerMap.has(detail.objPath)) {
                    var data = modelDebuggerMap.get(detail.objPath);
                    throw new Error("exist same api:\n" + api.description + "\n" + data.debuggerObj.description + "\npath:" + detail.outOperation[0].url);
                }
                detail.debuggerObj = api;
                modelDebuggerMap.set(detail.objPath, detail);
            });
            return outputModel;
        });
        // 去重,移除基本类型
        requireList = fixedRequiredList(requireList);
        var modelList = requireList.map(function (modelName) { return modelMap.get(modelName); }).filter(function (item) { return item; });
        this.__exportModel(apiDoc.name, modelList);
        this.__exportRest(apiDoc.name, this.config.ajaxModulePath, modelList, restOutModelList);
    };
    ApiFactory.prototype.__exportModel = function (apiName, modelList) {
        var data = { apiName: apiName, modelList: modelList };
        var outPath = path.resolve(this.config.outputDir, apiName + 'Model.js');
        this.__export(outPath, this.config.template.model, data);
    };
    ApiFactory.prototype.__exportRest = function (apiName, ajaxModulePath, modelList, restList) {
        var data = {
            apiName: apiName, modelList: modelList, restList: restList,
            ajaxModulePath: function () {
                return function (text, render) {
                    return ajaxModulePath;
                };
            }
        };
        var outPath = path.resolve(this.config.outputDir, apiName + 'Api.js');
        this.__export(outPath, this.config.template.ajax, data);
    };
    ApiFactory.prototype.__export = function (path, template, data) {
        var content = Mustache.render(template, data);
        fs_path_1.writeFile(path, content, function (err) {
            if (err) {
                console.warn(err);
            }
        });
    };
    return ApiFactory;
}());
var BASE_TYPE = [
    'boolean', 'number', 'string', 'Array', 'object'
];
function fixedRequiredList(models) {
    var set = new Set();
    models.forEach(function (model) {
        var fixedModel = utils_1.getJsTypeFromJava(model);
        if (BASE_TYPE.indexOf(fixedModel) < 0) {
            set.add(fixedModel);
        }
    });
    return Array.from(set);
}
exports.default = ApiFactory;
//# sourceMappingURL=index.js.map