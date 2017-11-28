"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var swagger_1 = require("./swagger");
var api_factory_1 = require("./api-factory");
exports.init = function (opt) {
    var config = Object.assign(require('../config'), opt);
    config.apis.forEach(function (api) { return swagger_1.default.fetchSwaggerData(api.url).then(function (apiDoc) {
        apiDoc.name = api.name;
        var f = new api_factory_1.default(config);
        f.excute(apiDoc);
    }); });
};
//# sourceMappingURL=index.js.map