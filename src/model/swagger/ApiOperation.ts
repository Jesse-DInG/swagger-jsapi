
import ApiParameter from './ApiParameter'
import ApiResponseMessage from './ApiResponseMessage'
export default interface Operation {
    method: string
    summary: string
    notes: string
    nickname: string
    produces: Array<string>
    consumes: Array<string>
    parameters: Array<ApiParameter>
    responseMessages: Array<ApiResponseMessage>
    deprecated: boolean
    type: string
}
