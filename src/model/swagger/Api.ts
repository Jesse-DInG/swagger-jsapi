import ApiRest from './ApiRest'

export default interface Api {
    rest: ApiRest
    err: any
    description: string
    path: string
    position: number
}
