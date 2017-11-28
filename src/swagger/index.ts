import fetch from 'node-fetch'
import Api from '../model/swagger/Api'
import ApiDoc from '../model/swagger/ApiDoc'

async function getApis (rootUrl: string, apis: Array<Api>): Promise<Array<Api>> {
    return Promise.all(apis.map((api: Api) => {
        return (async () => {
            const result: Api = { rest: null, err: null, ...api }
            try {
                const fetchData = await fetch(rootUrl + encodeURI(api.path), null)
                result.rest = await fetchData.json()
            } catch (e) {
                result.err = e.message
            }
            return result
        })()
    }))
}

async function fetchSwaggerData (url: string): Promise<ApiDoc> {
    let result: ApiDoc = null
    try {
        const fetchData = await fetch(url, null)
        const data = await fetchData.json()
        result = {
            ...data
        }
        result.apis = await getApis(url, data.apis)
    } catch (e) {
        throw e
    }
    return result
}

export default {
    fetchSwaggerData
}
