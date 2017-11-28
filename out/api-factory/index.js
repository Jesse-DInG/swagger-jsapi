"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var Mustache = require("mustache");
var ModelResolver_1 = require("./resolver/ModelResolver");
var fs_path_1 = require("fs-path");
var RestResolver_1 = require("./resolver/RestResolver");
var ApiFactory = /** @class */ (function () {
    function ApiFactory(config) {
        this.config = config;
        Mustache.tags = ['<%', '%>'];
    }
    ApiFactory.prototype.excute = function (apiDoc) {
        var _this = this;
        var restOutModelList = apiDoc.apis.map(function (api) {
            if (api.rest.models) {
                Object.keys(api.rest.models).forEach(function (key) {
                    var classModel = ModelResolver_1.getClassModel(api.rest.models[key]);
                    _this._buildModel(api, classModel);
                });
            }
            return _this._buildRest(api.rest);
        });
        var content = restOutModelList.map(function (model) { return model.context; }).join('\n');
        var outPath = path.resolve(this.config.ouputDir, 'api', apiDoc.name + 'Api.js');
        fs_path_1.writeFile(outPath, content, null);
    };
    ApiFactory.prototype._buildModel = function (api, classModel) {
        var modelOutput = ModelResolver_1.getModelData(this.config.template.model, classModel);
        modelOutput.path = path.resolve(this.config.ouputDir, 'api/model', '.' + api.rest.basePath, classModel.id + '.js');
        fs_path_1.writeFile(modelOutput.path, modelOutput.context, null);
    };
    ApiFactory.prototype._buildRest = function (rest) {
        var modelOutput = RestResolver_1.resoveRest(rest, this.config);
        return modelOutput;
    };
    return ApiFactory;
}());
exports.default = ApiFactory;
//# sourceMappingURL=index.js.map