import ApiDetail from './ApiDetail'
export default interface ApiRest {
    apiVersion: string
    apis: Array<ApiDetail>
    basePath: string
    consumes: Array<string>
    models: any
    produces: Array<string>
    resourcePath: string
    swaggerVersion: string
}
