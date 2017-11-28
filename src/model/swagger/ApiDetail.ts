import ApiOperation from './ApiOperation'
export default interface ApiDetail {
    description: string
    path: string
    operations: Array<ApiOperation>
}
