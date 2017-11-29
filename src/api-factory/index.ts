import * as path from 'path'
import * as Mustache from 'mustache'
import ApiDoc from '../model/swagger/ApiDoc'
import { getClassModel } from './resolver/ModelResolver'
import ApiFactoryConfig from '../model/ApiFactoryConfig'
import ClassModel from '../model/ClassModel'
import OutputModel from '../model/OutputModel'
import { writeFile } from 'fs-path'
import Api from '../model/swagger/Api'
import ApiDetail from '../model/swagger/ApiDetail'
import ApiRest from '../model/swagger/ApiRest'
import {
    getOutRestModel,
    OutRestModel,
    OutDetailModel,
    OutOperation
} from './resolver/RestResolver'
import { getJsTypeFromJava } from '../utils'
class ApiFactory {
    config: ApiFactoryConfig

    constructor (config: ApiFactoryConfig) {
        this.config = config
        Mustache.tags = ['<%', '%>']
    }

    excute (apiDoc: ApiDoc) {
        const modelMap: Map<string,ClassModel> = new Map()
        let requireList: Array<string> = []
        const modelDebuggerMap: Map<string,OutDetailModel> = new Map()
        const restOutModelList: Array<OutRestModel> = apiDoc.apis.map(api => {
            if (api.rest.models) {
                Object.keys(api.rest.models).forEach(key => {
                    const classModel: ClassModel = getClassModel(api.rest.models[key])
                    modelMap.set(classModel.id,classModel)
                    // this._buildModel(api, classModel)
                })
            }
            const outputModel: OutRestModel = getOutRestModel(api, this.config)
            requireList.push(...outputModel.requireList)
            outputModel.outDetailList.forEach(detail => {
                if (modelDebuggerMap.has(detail.objPath)) {
                    const data: OutDetailModel = modelDebuggerMap.get(detail.objPath)
                    throw new Error(`exist same api:\n${api.description}\n${data.debuggerObj.description}\npath:${detail.outOperation[0].url}`)
                }
                detail.debuggerObj = api
                modelDebuggerMap.set(detail.objPath,detail)
            })
            return outputModel
        })
        // 去重,移除基本类型
        requireList = fixedRequiredList(requireList)
        const modelList: Array<ClassModel> = requireList.map((modelName): ClassModel => modelMap.get(modelName)).filter(item => item)
        this.__exportModel(apiDoc.name,modelList)

        this.__exportRest(apiDoc.name,this.config.ajaxModulePath,modelList,restOutModelList)

    }

    private __exportModel (apiName: string,modelList: Array<ClassModel>) {
        const data = { apiName,modelList }
        const outPath = path.resolve(this.config.outputDir, apiName + 'Model.js')
        this.__export(outPath,this.config.template.model,data)
    }

    private __exportRest (apiName: string,ajaxModulePath: string, modelList: Array<ClassModel>,restList: Array<OutRestModel>) {
        const data = {
            apiName,modelList,restList,
            ajaxModulePath () {
                return (text,render) => {
                    return ajaxModulePath
                }
            }}
        const outPath = path.resolve(this.config.outputDir, apiName + 'Api.js')
        this.__export(outPath,this.config.template.ajax,data)
    }

    private __export (path: string,template: string,data: any) {
        const content = Mustache.render(template, data)
        writeFile(path,content, (err) => {
            if (err) {
                console.warn(err)
            }
        })
    }

}
const BASE_TYPE = [
    'boolean','number','string','Array','object'
]
function fixedRequiredList (models: Array<string>): Array<string> {
    const set = new Set<string>()
    models.forEach(model => {
        const fixedModel = getJsTypeFromJava(model)
        if (BASE_TYPE.indexOf(fixedModel) < 0) {
            set.add(fixedModel)
        }
    })
    return Array.from(set)
}
export default ApiFactory
