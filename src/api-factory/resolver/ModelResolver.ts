import * as Mustache from 'mustache'
import OutputModel from '../../model/OutputModel'
import ClassModel from '../../model/ClassModel'
import ApiModel from '../../model/swagger/ApiModel'
import { copyObj,getJsTypeFromJava } from '../../utils'
import ApiModelProperty from '../../model/swagger/ApiModelProperty'
// const IMPORT_TEMPLATE =
// `
// <%#depends%>
// import <%.%> from './<%.%>'
// <%/depends%>

// `

Mustache.tags = [ '<%', '%>' ]
function getModelData (template: string,classModel: ClassModel): OutputModel {
    const outModel: OutputModel = { data: null,context: null,path: null }
    outModel.data = classModel
    outModel.context = Mustache.render(template, classModel)
    return outModel
}
function getClassModel (apiModel: ApiModel): ClassModel {
    const classModel = copyObj(apiModel) as ClassModel
    const propertySet = new Set<string>()
    classModel.propertyList = Object.keys(classModel.properties).map((key): ApiModelProperty => {
        const property: ApiModelProperty = copyObj(classModel.properties[key]) as ApiModelProperty
        property.keyName = key
        const type = getJsTypeFromJava(property.type)
        property.type = type
        propertySet.add(type)
        return property
    })
    classModel.depends = Array.from(propertySet)
    return classModel
}
export {
    getClassModel,
    getModelData
}
