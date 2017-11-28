import * as path from 'path'
function getQueryStringUrl (url: string, query: any) {
    let fixedUrl = url
    if (url.indexOf('?') > -1) {
        fixedUrl += '&'
    } else {
        fixedUrl += '?'
    }
    fixedUrl += Object.keys(query).map(key => `${key}=${query[key]}`).join('&')
    return fixedUrl
}
function copyObj<T> (obj: T): T {
    return JSON.parse(JSON.stringify(obj))
}
/**
 * swagger object type transform to js type
 * @param type
 */
function getJsTypeFromJava (type: string) {
    switch (type) {
            case 'integer':
                return 'number'
            case 'array':
                return 'Array'
            default:
                return type

    }
}
/**
 * require module based on cwd path
 * @param module
 */
function requireRoot (module) {
    return require(path.resolve(process.cwd(), module))
}
export {
    getQueryStringUrl,
    copyObj,
    getJsTypeFromJava,
    requireRoot
}
