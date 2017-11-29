"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../../utils");
function getClassModel(apiModel) {
    var classModel = utils_1.copyObj(apiModel);
    var propertySet = new Set();
    classModel.propertyList = Object.keys(classModel.properties).map(function (key) {
        var property = utils_1.copyObj(classModel.properties[key]);
        property.keyName = key;
        var type = utils_1.getJsTypeFromJava(property.type);
        property.type = type;
        propertySet.add(type);
        return property;
    });
    classModel.depends = Array.from(propertySet);
    return classModel;
}
exports.getClassModel = getClassModel;
//# sourceMappingURL=ModelResolver.js.map