import axios from 'axios'
export const get = async (url, param, opt) => {
    const res = await axios.get(url, opt)
    if (+res.data.code === 0) {
        return res.data
    } else {
        throw res.data
    }
}
export const post = async (url, params, opt) => {
    const res = await axios.post(url, { params, ...opt })
    if (+res.data.code === 0) {
        return res.data
    } else {
        throw res.data
    }
}
