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
import Api from '../../model/swagger/Api'
import ClassModel from '../../model/ClassModel'

function fillMap (map: any, path: string) {
    const mapList = path.split('/')
    let curObj = map
    for (let i = 1; i < mapList.length; i++) {
        const key = mapList[i]
        if (!curObj[key]) {
            curObj[key] = {}
        }
        curObj = curObj[key]
    }
}

function getObjPath (path) {
    return path.replace(/\//g, '.')
}

function wrapUrl () {
    return (text,render) => {
        let url = this.url + render(text)
        if (this.queryProperties.length > 0) {
            url += '?' + this.queryProperties.map((query: ApiParameter) => {
                return `${query.name}=\${${query.name}}`
            }).join('&')
        }
        return url
    }
}

function getOutOperation (operation: ApiOperation): OutOperation {
    const outOperation: OutOperation = JSON.parse(JSON.stringify(operation)) as OutOperation
    outOperation.method = outOperation.method.toLowerCase()
    outOperation.pathProperties = []
    outOperation.queryProperties = []
    outOperation.requireList = []
    outOperation.wrapUrl = wrapUrl
    outOperation.parameters.forEach(param => {
        switch (param.paramType) {
                case 'body':
                    outOperation.paramProperty = param
                    break
                case 'path':
                    outOperation.pathProperties.push(param)
                    break
                default:
                    outOperation.queryProperties.push(param)
        }
        outOperation.requireList.push(param.type)
    })
    // if (!outOperation.paramProperty) {
    //     outOperation.paramProperty = { type: 'params' } as ApiParameter
    // }
    return outOperation
}

function getOutRestModel (api: Api, config: ApiFactoryConfig): OutRestModel {
    const outRestModel: OutRestModel = {
        name: api.rest.basePath.substr(1),
        requireList: [],
        ...api
    } as OutRestModel
    const apiMap = {}
    const modelMap = new Map()
    const list: Array<OutDetailModel> = api.rest.apis.map(detail => {
        const outModel: OutDetailModel = JSON.parse(JSON.stringify(detail)) as OutDetailModel
        const urlPath = detail.path.replace(/\/\{.*\}/g,'')
        outModel.objPath = camelcase(getObjPath(outRestModel.name + urlPath))
        // 去重
        if (modelMap.has(outModel.objPath)) {
            return null
        } else {
            modelMap.set(outModel.objPath,true)
        }

        outModel.outOperation = detail.operations.filter(operation => {
            return config.operations.indexOf(operation.method.toLowerCase()) > -1
        }).map(operation => {
            const outOperation: OutOperation = getOutOperation(operation)
            outOperation.url = api.rest.basePath + urlPath
            outRestModel.requireList.push(...outOperation.requireList)
            fillMap(apiMap, detail.path)
            return outOperation
        })

        return outModel
    }).filter(item => item)
    outRestModel.outDetailList = list
    return outRestModel
}

interface OutRestModel extends Api {
    name: string,
    outDetailList: Array<OutDetailModel>
    requireList: Array<string>
}
interface OutDetailModel extends ApiDetail {
    debuggerObj: any
    objPath: string
    outOperation: Array<OutOperation>,
}
interface OutOperation extends ApiOperation {
    url: string
    wrapUrl: Function
    queryProperties: Array<ApiParameter>
    pathProperties: Array<ApiParameter>
    paramProperty: ApiParameter
    requireList: Array<string>
}
export {
    getOutRestModel,
    OutRestModel,
    OutDetailModel,
    OutOperation
}
