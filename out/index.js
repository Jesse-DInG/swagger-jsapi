"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var swagger_1 = require("./swagger");
var api_factory_1 = require("./api-factory");
var utils_1 = require("./utils");
exports.init = function (_a) {
    var config = _a.config;
    var userConfig = null;
    if (config) {
        userConfig = utils_1.requireRoot(config);
    }
    var apiConfig = Object.assign(require('../config'), userConfig);
    apiConfig.apis.forEach(function (api) { return swagger_1.default.fetchSwaggerData(api.url).then(function (apiDoc) {
        apiDoc.name = api.name;
        var f = new api_factory_1.default(apiConfig);
        f.excute(apiDoc);
    }); });
};
//# sourceMappingURL=index.js.map