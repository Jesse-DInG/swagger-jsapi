import swagger from './swagger'
import ApiFactory from './api-factory'
import * as fs from 'fs'
import { requireRoot } from './utils'
import ApiDoc from './model/swagger/ApiDoc'
import ApiFactoryConfig from './model/ApiFactoryConfig'

export const init = (opt) => {
    const config: ApiFactoryConfig = Object.assign(require('../config'),opt)
    config.apis.forEach(api => swagger.fetchSwaggerData(api.url).then(apiDoc => {
        apiDoc.name = api.name
        const f: ApiFactory = new ApiFactory(config)
        f.excute(apiDoc)
    }))
}
