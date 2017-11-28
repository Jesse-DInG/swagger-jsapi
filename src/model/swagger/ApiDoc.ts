import Api from './Api'
import { ApiInfo } from './ApiInfo'

export default interface ApiDoc {
    name: string
    apiVersion: string
    apis: Array<Api>
    authorizations: any
    info: ApiInfo
    swaggerVersion: string
}
