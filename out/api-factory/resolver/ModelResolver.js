"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mustache = require("mustache");
var utils_1 = require("../../utils");
// const IMPORT_TEMPLATE =
// `
// <%#depends%>
// import <%.%> from './<%.%>'
// <%/depends%>
// `
Mustache.tags = ['<%', '%>'];
function getModelData(template, classModel) {
    var outModel = { data: null, context: null, path: null };
    outModel.data = classModel;
    outModel.context = Mustache.render(template, classModel);
    return outModel;
}
exports.getModelData = getModelData;
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