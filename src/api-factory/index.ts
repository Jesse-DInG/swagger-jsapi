import * as path from 'path'
import * as Mustache from 'mustache'
import ApiDoc from '../model/swagger/ApiDoc'
import { getModelData,getClassModel } from './resolver/ModelResolver'
import ApiFactoryConfig from '../model/ApiFactoryConfig'
import ClassModel from '../model/ClassModel'
import OutputModel from '../model/OutputModel'
import { writeFile } from 'fs-path'
import Api from '../model/swagger/Api'
import ApiDetail from '../model/swagger/ApiDetail'
import ApiRest from '../model/swagger/ApiRest'
import { resoveRest } from './resolver/RestResolver'
class ApiFactory {
    config: ApiFactoryConfig

    constructor (config: ApiFactoryConfig) {
        this.config = config
        Mustache.tags = [ '<%', '%>' ]
    }

    excute (apiDoc: ApiDoc) {
        const restOutModelList = apiDoc.apis.map(api => {
            if (api.rest.models) {
                Object.keys(api.rest.models).forEach(key => {
                    const classModel: ClassModel = getClassModel(api.rest.models[key])
                    this._buildModel(api,classModel)
                })
            }
            return this._buildRest(api.rest)
        })
        const content = restOutModelList.map(model => model.context).join('\n')
        const outPath = path.resolve(this.config.ouputDir,'api', apiDoc.name + 'Api.js')
        writeFile(outPath,content,null)
    }

    private _buildModel (api: Api,classModel: ClassModel): void {
        const modelOutput: OutputModel = getModelData(this.config.template.model,classModel)
        modelOutput.path = path.resolve(this.config.ouputDir,'api/model','.' + api.rest.basePath,classModel.id + '.js')
        writeFile(modelOutput.path,modelOutput.context,null)
    }
    private _buildRest (rest: ApiRest): OutputModel {
        const modelOutput: OutputModel = resoveRest(rest,this.config)
        return modelOutput
    }
}

export default ApiFactory
