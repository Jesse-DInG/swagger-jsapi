import ApiModel from './swagger/ApiModel'
import ApiModelProperty from './swagger/ApiModelProperty'
export default interface ClassModel extends ApiModel {
    propertyList: Array<ApiModelProperty>
    depends: Array<string>
}
