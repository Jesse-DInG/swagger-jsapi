import swagger from './swagger'
import ApiFactory from './api-factory'
import { requireRoot } from './utils'
import ApiDoc from './model/swagger/ApiDoc'
import ApiFactoryConfig from './model/ApiFactoryConfig'
import { writeFile } from 'fs'

export const init = ({ config }) => {
    let userConfig = null
    if (config) {
        userConfig = requireRoot(config)
    }
    const apiConfig: ApiFactoryConfig = Object.assign(require('../config'), userConfig)
    apiConfig.apis.forEach(api => swagger.fetchSwaggerData(api.url).then(apiDoc => {
        apiDoc.name = api.name
        const f: ApiFactory = new ApiFactory(apiConfig)
        f.excute(apiDoc)
    }))
}
