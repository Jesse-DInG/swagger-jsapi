import OutputModel from '../../model/OutputModel'
import ClassModel from '../../model/ClassModel'
import ApiModel from '../../model/swagger/ApiModel'
import { copyObj,getJsTypeFromJava } from '../../utils'
import ApiModelProperty from '../../model/swagger/ApiModelProperty'

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
    getClassModel
}
