import * as Mustache from 'mustache'
import ApiRest from '../../model/swagger/ApiRest'
import OutputModel from '../../model/OutputModel'
import ApiFactoryConfig from '../../model/ApiFactoryConfig'
import ApiDoc from '../../model/swagger/ApiDoc'
import ApiOperation from '../../model/swagger/ApiOperation'
import ApiModelProperty from '../../model/swagger/ApiModelProperty'
import ApiParameter from '../../model/swagger/ApiParameter'
import ApiDetail from '../../model/swagger/ApiDetail'
import * as camelcase from 'camelcase'

function fillMap (map: any,path: string) {
    const mapList = path.split('/')
    let curObj = map
    for (let i = 1;i < mapList.length;i++) {
        const key = mapList[i]
        if (!curObj[key]) {
            curObj[key] = {}
        }
        curObj = curObj[key]
    }
}

function getObjPath (path) {
    return path.replace(/\//g,'.')
}

function getOutOperation (operation: ApiOperation): OutOperation {
    const outOperation: OutOperation = JSON.parse(JSON.stringify(operation)) as OutOperation
    outOperation.method = outOperation.method.toLowerCase()
    const queryProperties: Array<ApiParameter> = []
    outOperation.parameters.forEach(param => {
        if (param.paramType === 'body') {
            outOperation.paramProperty = param
        } else {
            queryProperties.push(param)
        }
    })
    if (!outOperation.paramProperty) {
        outOperation.paramProperty = { type: 'params' } as ApiParameter
    }
    if (queryProperties.length > 0) {
        outOperation.queryString = '{' + queryProperties.map(p => p.name).join(',') + '}'
    } else {
        outOperation.queryString = 'query'
    }
    return outOperation
}

function resoveRest (rest: ApiRest,config: ApiFactoryConfig): OutputModel {
    const output: OutputModel = {
        path: null,
        context: '',
        data: rest
    } as OutputModel
    const outRestModel: OutRestModel = {
        name: rest.basePath.substr(1)
    } as OutRestModel
    const apiMap = {}
    const list: Array<OutDetailModel> = rest.apis.map(detail => {
        const outModel: OutDetailModel = JSON.parse(JSON.stringify(detail)) as OutDetailModel
        outModel.objPath = camelcase(getObjPath(outRestModel.name + detail.path))
        outModel.outOperation = detail.operations.map(operation => {
            const outOperation: OutOperation = getOutOperation(operation)
            outOperation.method = outOperation.method.toLowerCase()
            const queryProperties: Array<ApiParameter> = []
            outOperation.parameters.forEach(param => {
                if (param.paramType === 'body') {
                    outOperation.paramProperty = param
                } else {
                    queryProperties.push(param)
                }
                return param.paramType !== 'body'
            })
            fillMap(apiMap,detail.path)
            return outOperation
        })
        return outModel
    })
    outRestModel.outDetailList = list
    output.context = Mustache.render(config.template.ajax,outRestModel)
    return output
}
interface OutRestModel extends ApiRest {
    name: string,
    outDetailList: Array<OutDetailModel>
}
interface OutDetailModel extends ApiDetail {
    objPath: string
    outOperation: Array<OutOperation>
}
interface OutOperation extends ApiOperation {
    queryString: string
    paramProperty: ApiParameter
}
export {
    resoveRest
}
