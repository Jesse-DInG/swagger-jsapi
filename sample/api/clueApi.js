
import { get, post } from '../http'
import {
    AddClueFromICrmEntry,
    AddFollowEntry,
    User,
    GetCommentListEntry,
    CommentSaveEntry,
    GetClueFollowEntry,
    GetPraiseListEntry,
    PraiseSaveEntry,
    ClueViewEntry,
    ClearPermissionCache,
    GetClueDetailEntry,
    AddClueLibraryEntry,
    DistributeClueLibraryEntry,
    DeleteClueLibraryEntry,
    ClueSearchEntry,
    UpdateClueLibraryEntry,
    AddClueEntry,
    CloseClueEntry,
    CloseClueByIdsEntry,
    FreeCallEntry,
    DistributeEntry,
    DistributeByIdsEntry,
    GetExtIDEntry,
    OpenClueIdsEntry,
    QueryParamEntry,
    UpdateClueEntry,
    LibraryAddClueEntry,
    LibraryClueCloseEntry,
    LibraryClueDistributeEntry,
    LibraryCloseClueEntry,
    LibraryClueSearchEntry,
    TransferClueEntry,
    AddPartEntry,
    PartEntry,
    DeletePartEntry,
    SearchEntry,
    ClueToCRMContactEntry,
    ClueToOpportunityEntry,
} from './clueModel'
/**
 * Clue Api Rest
 */
export const clueApiCluesAddIcrmQhbd = {
        /**
         * Icrm推送前海百递商机
         * @param {AddClueFromICrmEntry} AddClueFromICrmEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/api/clues/add/icrm/qhbd`,
                body,
                opt)
        },
}
export const clueApiCluesAddIcrmYzj = {
        /**
         * Icrm推送云之家商机
         * @param {AddClueFromICrmEntry} AddClueFromICrmEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/api/clues/add/icrm/yzj`,
                body,
                opt)
        },
}
export const clueApiCreatecluefromxdl = {
        /**
         * CreateClueFromXdl
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/api/createcluefromxdl`,
                body,
                opt)
        },
}
/**
 * Clue Controller
 */
export const clue = {
        /**
         * index
         * @param {string} lappKey
        */
        get: async (
            lappKey,opt
        ) => {
            return await get(`/clue/?lappKey=${lappKey}`,
                opt)
        },
}
/**
 * Clue Rest
 */
export const clueCardrecognise = {
        /**
         * cardrecognise
         * @param {File} file
         * @param {ModelMap} ModelMap
        */
        post: async (
            file,body,opt
        ) => {
            return await post(`/clue/cardrecognise?file=${file}`,
                body,
                opt)
        },
}
export const clueChangecustomerright = {
        /**
         * ableToChangeCustomer
         * @param {string} id
        */
        get: async (
            id,opt
        ) => {
            return await get(`/clue/changecustomerright?id=${id}`,
                opt)
        },
        /**
         * ableToChangeCustomer
         * @param {string} id
        */
        head: async (
            id,opt
        ) => {
            return await head(`/clue/changecustomerright?id=${id}`,
                opt)
        },
        /**
         * ableToChangeCustomer
         * @param {string} id
        */
        post: async (
            id,opt
        ) => {
            return await post(`/clue/changecustomerright?id=${id}`,
                opt)
        },
        /**
         * ableToChangeCustomer
         * @param {string} id
        */
        put: async (
            id,opt
        ) => {
            return await put(`/clue/changecustomerright?id=${id}`,
                opt)
        },
        /**
         * ableToChangeCustomer
         * @param {string} id
        */
        patch: async (
            id,opt
        ) => {
            return await patch(`/clue/changecustomerright?id=${id}`,
                opt)
        },
        /**
         * ableToChangeCustomer
         * @param {string} id
        */
        delete: async (
            id,opt
        ) => {
            return await delete(`/clue/changecustomerright?id=${id}`,
                opt)
        },
        /**
         * ableToChangeCustomer
         * @param {string} id
        */
        options: async (
            id,opt
        ) => {
            return await options(`/clue/changecustomerright?id=${id}`,
                opt)
        },
        /**
         * ableToChangeCustomer
         * @param {string} id
        */
        trace: async (
            id,opt
        ) => {
            return await trace(`/clue/changecustomerright?id=${id}`,
                opt)
        },
}
export const clueClose = {
        /**
         * CloseClue
         * @param {string} id
        */
        get: async (
            id,opt
        ) => {
            return await get(`/clue/close?id=${id}`,
                opt)
        },
        /**
         * CloseClue
         * @param {string} id
        */
        head: async (
            id,opt
        ) => {
            return await head(`/clue/close?id=${id}`,
                opt)
        },
        /**
         * CloseClue
         * @param {string} id
        */
        post: async (
            id,opt
        ) => {
            return await post(`/clue/close?id=${id}`,
                opt)
        },
        /**
         * CloseClue
         * @param {string} id
        */
        put: async (
            id,opt
        ) => {
            return await put(`/clue/close?id=${id}`,
                opt)
        },
        /**
         * CloseClue
         * @param {string} id
        */
        patch: async (
            id,opt
        ) => {
            return await patch(`/clue/close?id=${id}`,
                opt)
        },
        /**
         * CloseClue
         * @param {string} id
        */
        delete: async (
            id,opt
        ) => {
            return await delete(`/clue/close?id=${id}`,
                opt)
        },
        /**
         * CloseClue
         * @param {string} id
        */
        options: async (
            id,opt
        ) => {
            return await options(`/clue/close?id=${id}`,
                opt)
        },
        /**
         * CloseClue
         * @param {string} id
        */
        trace: async (
            id,opt
        ) => {
            return await trace(`/clue/close?id=${id}`,
                opt)
        },
}
export const clueClosebyids = {
        /**
         * CloseClueByIds
         * @param {string} ids
        */
        get: async (
            ids,opt
        ) => {
            return await get(`/clue/closebyids?ids=${ids}`,
                opt)
        },
        /**
         * CloseClueByIds
         * @param {string} ids
        */
        head: async (
            ids,opt
        ) => {
            return await head(`/clue/closebyids?ids=${ids}`,
                opt)
        },
        /**
         * CloseClueByIds
         * @param {string} ids
        */
        post: async (
            ids,opt
        ) => {
            return await post(`/clue/closebyids?ids=${ids}`,
                opt)
        },
        /**
         * CloseClueByIds
         * @param {string} ids
        */
        put: async (
            ids,opt
        ) => {
            return await put(`/clue/closebyids?ids=${ids}`,
                opt)
        },
        /**
         * CloseClueByIds
         * @param {string} ids
        */
        patch: async (
            ids,opt
        ) => {
            return await patch(`/clue/closebyids?ids=${ids}`,
                opt)
        },
        /**
         * CloseClueByIds
         * @param {string} ids
        */
        delete: async (
            ids,opt
        ) => {
            return await delete(`/clue/closebyids?ids=${ids}`,
                opt)
        },
        /**
         * CloseClueByIds
         * @param {string} ids
        */
        options: async (
            ids,opt
        ) => {
            return await options(`/clue/closebyids?ids=${ids}`,
                opt)
        },
        /**
         * CloseClueByIds
         * @param {string} ids
        */
        trace: async (
            ids,opt
        ) => {
            return await trace(`/clue/closebyids?ids=${ids}`,
                opt)
        },
}
export const clueCommentList = {
        /**
         * commentList
         * @param {string} relateID
         * @param {integer} page_index
         * @param {integer} limit
        */
        post: async (
            relateID,page_index,limit,opt
        ) => {
            return await post(`/clue/commentList?relateID=${relateID}&page_index=${page_index}&limit=${limit}`,
                opt)
        },
}
export const clueCommentSave = {
        /**
         * commentSave
         * @param {string} relateID
         * @param {string} content
        */
        post: async (
            relateID,content,opt
        ) => {
            return await post(`/clue/commentSave?relateID=${relateID}&content=${content}`,
                opt)
        },
}
export const clueCreate = {
        /**
         * addClue
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/create`,
                body,
                opt)
        },
        /**
         * addClue
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/create`,
                body,
                opt)
        },
        /**
         * addClue
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/create`,
                body,
                opt)
        },
        /**
         * addClue
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/create`,
                body,
                opt)
        },
        /**
         * addClue
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/create`,
                body,
                opt)
        },
        /**
         * addClue
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/create`,
                body,
                opt)
        },
        /**
         * addClue
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/create`,
                body,
                opt)
        },
        /**
         * addClue
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/create`,
                body,
                opt)
        },
}
export const clueCreatefollow = {
        /**
         * CreateClueFollow
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/createfollow`,
                body,
                opt)
        },
        /**
         * CreateClueFollow
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/createfollow`,
                body,
                opt)
        },
        /**
         * CreateClueFollow
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/createfollow`,
                body,
                opt)
        },
        /**
         * CreateClueFollow
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/createfollow`,
                body,
                opt)
        },
        /**
         * CreateClueFollow
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/createfollow`,
                body,
                opt)
        },
        /**
         * CreateClueFollow
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/createfollow`,
                body,
                opt)
        },
        /**
         * CreateClueFollow
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/createfollow`,
                body,
                opt)
        },
        /**
         * CreateClueFollow
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/createfollow`,
                body,
                opt)
        },
}
export const clueDetail = {
        /**
         * GetClueDetail
         * @param {string} id
        */
        post: async (
            id,opt
        ) => {
            return await post(`/clue/detail?id=${id}`,
                opt)
        },
}
export const clueDistribute = {
        /**
         * DistributeClue
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/distribute`,
                body,
                opt)
        },
        /**
         * DistributeClue
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/distribute`,
                body,
                opt)
        },
        /**
         * DistributeClue
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/distribute`,
                body,
                opt)
        },
        /**
         * DistributeClue
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/distribute`,
                body,
                opt)
        },
        /**
         * DistributeClue
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/distribute`,
                body,
                opt)
        },
        /**
         * DistributeClue
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/distribute`,
                body,
                opt)
        },
        /**
         * DistributeClue
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/distribute`,
                body,
                opt)
        },
        /**
         * DistributeClue
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/distribute`,
                body,
                opt)
        },
}
export const clueDistributebyids = {
        /**
         * DistributeClueByList
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/distributebyids`,
                body,
                opt)
        },
        /**
         * DistributeClueByList
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/distributebyids`,
                body,
                opt)
        },
        /**
         * DistributeClueByList
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/distributebyids`,
                body,
                opt)
        },
        /**
         * DistributeClueByList
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/distributebyids`,
                body,
                opt)
        },
        /**
         * DistributeClueByList
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/distributebyids`,
                body,
                opt)
        },
        /**
         * DistributeClueByList
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/distributebyids`,
                body,
                opt)
        },
        /**
         * DistributeClueByList
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/distributebyids`,
                body,
                opt)
        },
        /**
         * DistributeClueByList
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/distributebyids`,
                body,
                opt)
        },
}
export const clueFollowdetail = {
        /**
         * GetClueFollow
         * @param {string} id
         * @param {string} string
        */
        get: async (
            id,body,opt
        ) => {
            return await get(`/clue/followdetail?id=${id}`,
                body,
                opt)
        },
        /**
         * GetClueFollow
         * @param {string} id
         * @param {string} string
        */
        head: async (
            id,body,opt
        ) => {
            return await head(`/clue/followdetail?id=${id}`,
                body,
                opt)
        },
        /**
         * GetClueFollow
         * @param {string} id
         * @param {string} string
        */
        post: async (
            id,body,opt
        ) => {
            return await post(`/clue/followdetail?id=${id}`,
                body,
                opt)
        },
        /**
         * GetClueFollow
         * @param {string} id
         * @param {string} string
        */
        put: async (
            id,body,opt
        ) => {
            return await put(`/clue/followdetail?id=${id}`,
                body,
                opt)
        },
        /**
         * GetClueFollow
         * @param {string} id
         * @param {string} string
        */
        patch: async (
            id,body,opt
        ) => {
            return await patch(`/clue/followdetail?id=${id}`,
                body,
                opt)
        },
        /**
         * GetClueFollow
         * @param {string} id
         * @param {string} string
        */
        delete: async (
            id,body,opt
        ) => {
            return await delete(`/clue/followdetail?id=${id}`,
                body,
                opt)
        },
        /**
         * GetClueFollow
         * @param {string} id
         * @param {string} string
        */
        options: async (
            id,body,opt
        ) => {
            return await options(`/clue/followdetail?id=${id}`,
                body,
                opt)
        },
        /**
         * GetClueFollow
         * @param {string} id
         * @param {string} string
        */
        trace: async (
            id,body,opt
        ) => {
            return await trace(`/clue/followdetail?id=${id}`,
                body,
                opt)
        },
}
export const clueFreecall = {
        /**
         * freecall
         * @param {string} id
        */
        get: async (
            id,opt
        ) => {
            return await get(`/clue/freecall?id=${id}`,
                opt)
        },
        /**
         * freecall
         * @param {string} id
        */
        head: async (
            id,opt
        ) => {
            return await head(`/clue/freecall?id=${id}`,
                opt)
        },
        /**
         * freecall
         * @param {string} id
        */
        post: async (
            id,opt
        ) => {
            return await post(`/clue/freecall?id=${id}`,
                opt)
        },
        /**
         * freecall
         * @param {string} id
        */
        put: async (
            id,opt
        ) => {
            return await put(`/clue/freecall?id=${id}`,
                opt)
        },
        /**
         * freecall
         * @param {string} id
        */
        patch: async (
            id,opt
        ) => {
            return await patch(`/clue/freecall?id=${id}`,
                opt)
        },
        /**
         * freecall
         * @param {string} id
        */
        delete: async (
            id,opt
        ) => {
            return await delete(`/clue/freecall?id=${id}`,
                opt)
        },
        /**
         * freecall
         * @param {string} id
        */
        options: async (
            id,opt
        ) => {
            return await options(`/clue/freecall?id=${id}`,
                opt)
        },
        /**
         * freecall
         * @param {string} id
        */
        trace: async (
            id,opt
        ) => {
            return await trace(`/clue/freecall?id=${id}`,
                opt)
        },
}
export const clueGetextid = {
        /**
         * getExtID
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/getextid`,
                body,
                opt)
        },
        /**
         * getExtID
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/getextid`,
                body,
                opt)
        },
        /**
         * getExtID
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/getextid`,
                body,
                opt)
        },
        /**
         * getExtID
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/getextid`,
                body,
                opt)
        },
        /**
         * getExtID
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/getextid`,
                body,
                opt)
        },
        /**
         * getExtID
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/getextid`,
                body,
                opt)
        },
        /**
         * getExtID
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/getextid`,
                body,
                opt)
        },
        /**
         * getExtID
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/getextid`,
                body,
                opt)
        },
}
export const clueList = {
        /**
         * GetClueList
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/list`,
                body,
                opt)
        },
        /**
         * GetClueList
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/list`,
                body,
                opt)
        },
        /**
         * GetClueList
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/list`,
                body,
                opt)
        },
        /**
         * GetClueList
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/list`,
                body,
                opt)
        },
        /**
         * GetClueList
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/list`,
                body,
                opt)
        },
        /**
         * GetClueList
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/list`,
                body,
                opt)
        },
        /**
         * GetClueList
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/list`,
                body,
                opt)
        },
        /**
         * GetClueList
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/list`,
                body,
                opt)
        },
}
export const clueLoginuser = {
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/loginuser`,
                body,
                opt)
        },
}
export const clueOrgRequest = {
        /**
         * orgRequest
        */
        post: async (
            opt
        ) => {
            return await post(`/clue/orgRequest`,
                opt)
        },
}
export const cluePraiseList = {
        /**
         * praiseList
         * @param {string} relateID
        */
        post: async (
            relateID,opt
        ) => {
            return await post(`/clue/praiseList?relateID=${relateID}`,
                opt)
        },
}
export const cluePraiseSave = {
        /**
         * praiseSave
         * @param {string} relateID
        */
        post: async (
            relateID,opt
        ) => {
            return await post(`/clue/praiseSave?relateID=${relateID}`,
                opt)
        },
}
export const clueSyncxdl = {
        /**
         * SyncXDL
        */
        get: async (
            opt
        ) => {
            return await get(`/clue/syncxdl`,
                opt)
        },
        /**
         * SyncXDL
        */
        head: async (
            opt
        ) => {
            return await head(`/clue/syncxdl`,
                opt)
        },
        /**
         * SyncXDL
        */
        post: async (
            opt
        ) => {
            return await post(`/clue/syncxdl`,
                opt)
        },
        /**
         * SyncXDL
        */
        put: async (
            opt
        ) => {
            return await put(`/clue/syncxdl`,
                opt)
        },
        /**
         * SyncXDL
        */
        patch: async (
            opt
        ) => {
            return await patch(`/clue/syncxdl`,
                opt)
        },
        /**
         * SyncXDL
        */
        delete: async (
            opt
        ) => {
            return await delete(`/clue/syncxdl`,
                opt)
        },
        /**
         * SyncXDL
        */
        options: async (
            opt
        ) => {
            return await options(`/clue/syncxdl`,
                opt)
        },
        /**
         * SyncXDL
        */
        trace: async (
            opt
        ) => {
            return await trace(`/clue/syncxdl`,
                opt)
        },
}
export const clueSyncxdltest = {
        /**
         * SyncXDLtest
        */
        get: async (
            opt
        ) => {
            return await get(`/clue/syncxdltest`,
                opt)
        },
        /**
         * SyncXDLtest
        */
        head: async (
            opt
        ) => {
            return await head(`/clue/syncxdltest`,
                opt)
        },
        /**
         * SyncXDLtest
        */
        post: async (
            opt
        ) => {
            return await post(`/clue/syncxdltest`,
                opt)
        },
        /**
         * SyncXDLtest
        */
        put: async (
            opt
        ) => {
            return await put(`/clue/syncxdltest`,
                opt)
        },
        /**
         * SyncXDLtest
        */
        patch: async (
            opt
        ) => {
            return await patch(`/clue/syncxdltest`,
                opt)
        },
        /**
         * SyncXDLtest
        */
        delete: async (
            opt
        ) => {
            return await delete(`/clue/syncxdltest`,
                opt)
        },
        /**
         * SyncXDLtest
        */
        options: async (
            opt
        ) => {
            return await options(`/clue/syncxdltest`,
                opt)
        },
        /**
         * SyncXDLtest
        */
        trace: async (
            opt
        ) => {
            return await trace(`/clue/syncxdltest`,
                opt)
        },
}
export const clueTestLoginAjax = {
        /**
         * testIndex
         * @param {string} eid
         * @param {string} openId
        */
        get: async (
            eid,openId,opt
        ) => {
            return await get(`/clue/testLoginAjax?eid=${eid}&openId=${openId}`,
                opt)
        },
}
export const clueUpdate = {
        /**
         * UpdateClue
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/update`,
                body,
                opt)
        },
        /**
         * UpdateClue
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/update`,
                body,
                opt)
        },
        /**
         * UpdateClue
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/update`,
                body,
                opt)
        },
        /**
         * UpdateClue
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/update`,
                body,
                opt)
        },
        /**
         * UpdateClue
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/update`,
                body,
                opt)
        },
        /**
         * UpdateClue
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/update`,
                body,
                opt)
        },
        /**
         * UpdateClue
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/update`,
                body,
                opt)
        },
        /**
         * UpdateClue
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/update`,
                body,
                opt)
        },
}
export const clueWebCreate = {
        /**
         * wedAddClue
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/webCreate`,
                body,
                opt)
        },
        /**
         * wedAddClue
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/webCreate`,
                body,
                opt)
        },
        /**
         * wedAddClue
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/webCreate`,
                body,
                opt)
        },
        /**
         * wedAddClue
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/webCreate`,
                body,
                opt)
        },
        /**
         * wedAddClue
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/webCreate`,
                body,
                opt)
        },
        /**
         * wedAddClue
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/webCreate`,
                body,
                opt)
        },
        /**
         * wedAddClue
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/webCreate`,
                body,
                opt)
        },
        /**
         * wedAddClue
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/webCreate`,
                body,
                opt)
        },
}
export const clueWebUpdate = {
        /**
         * webUpdateClue
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/webUpdate`,
                body,
                opt)
        },
        /**
         * webUpdateClue
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/webUpdate`,
                body,
                opt)
        },
        /**
         * webUpdateClue
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/webUpdate`,
                body,
                opt)
        },
        /**
         * webUpdateClue
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/webUpdate`,
                body,
                opt)
        },
        /**
         * webUpdateClue
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/webUpdate`,
                body,
                opt)
        },
        /**
         * webUpdateClue
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/webUpdate`,
                body,
                opt)
        },
        /**
         * webUpdateClue
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/webUpdate`,
                body,
                opt)
        },
        /**
         * webUpdateClue
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/webUpdate`,
                body,
                opt)
        },
}
/**
 * Clue View Rest
 */
export const clueViewRestClue = {
        /**
         * GetClueDetail
         * @param {string} id
        */
        get: async (
            id,opt
        ) => {
            return await get(`/clue/view/rest/clue?id=${id}`,
                opt)
        },
        /**
         * GetClueDetail
         * @param {string} id
        */
        head: async (
            id,opt
        ) => {
            return await head(`/clue/view/rest/clue?id=${id}`,
                opt)
        },
        /**
         * GetClueDetail
         * @param {string} id
        */
        post: async (
            id,opt
        ) => {
            return await post(`/clue/view/rest/clue?id=${id}`,
                opt)
        },
        /**
         * GetClueDetail
         * @param {string} id
        */
        put: async (
            id,opt
        ) => {
            return await put(`/clue/view/rest/clue?id=${id}`,
                opt)
        },
        /**
         * GetClueDetail
         * @param {string} id
        */
        patch: async (
            id,opt
        ) => {
            return await patch(`/clue/view/rest/clue?id=${id}`,
                opt)
        },
        /**
         * GetClueDetail
         * @param {string} id
        */
        delete: async (
            id,opt
        ) => {
            return await delete(`/clue/view/rest/clue?id=${id}`,
                opt)
        },
        /**
         * GetClueDetail
         * @param {string} id
        */
        options: async (
            id,opt
        ) => {
            return await options(`/clue/view/rest/clue?id=${id}`,
                opt)
        },
        /**
         * GetClueDetail
         * @param {string} id
        */
        trace: async (
            id,opt
        ) => {
            return await trace(`/clue/view/rest/clue?id=${id}`,
                opt)
        },
}
export const clueViewRestLastestinfo = {
        /**
         * getClueLastestInfo
         * @param {string} id
         * @param {string} string
        */
        post: async (
            id,body,opt
        ) => {
            return await post(`/clue/view/rest/lastestinfo?id=${id}`,
                body,
                opt)
        },
        /**
         * getClueLastestInfo
         * @param {string} id
         * @param {string} string
        */
        get: async (
            id,body,opt
        ) => {
            return await get(`/clue/view/rest/lastestinfo?id=${id}`,
                body,
                opt)
        },
}
/**
 * 线索跟进相关接口
 */
export const clueRestV1CluesFollowsAdd = {
        /**
         * AddClueFollow
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/follows/add`,
                body,
                opt)
        },
}
export const clueRestV1CluesFollowsCommentsList = {
        /**
         * commentList
         * @param {GetCommentListEntry} GetCommentListEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/follows/comments/list`,
                body,
                opt)
        },
}
export const clueRestV1CluesFollowsCommentsSave = {
        /**
         * commentSave
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/follows/comments/save`,
                body,
                opt)
        },
}
export const clueRestV1CluesFollowsGet = {
        /**
         * GetClueFollow
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/follows/get`,
                body,
                opt)
        },
}
export const clueRestV1CluesFollowsPraisesList = {
        /**
         * praiseList
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/follows/praises/list`,
                body,
                opt)
        },
}
export const clueRestV1CluesFollowsPraisesSave = {
        /**
         * praiseSave
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/follows/praises/save`,
                body,
                opt)
        },
}
/**
 * Out Clue Rest
 */
export const clueOutRest = {
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/out/rest`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/out/rest`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/out/rest`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/out/rest`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/out/rest`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/out/rest`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/out/rest`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/out/rest`,
                body,
                opt)
        },
}
export const clueOutRestChangetocustomer = {
        /**
         * ChangeToCustomer
         * @param {string} clueid
         * @param {string} customerid
        */
        get: async (
            clueid,customerid,opt
        ) => {
            return await get(`/clue/out/rest/changetocustomer?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * ChangeToCustomer
         * @param {string} clueid
         * @param {string} customerid
        */
        head: async (
            clueid,customerid,opt
        ) => {
            return await head(`/clue/out/rest/changetocustomer?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * ChangeToCustomer
         * @param {string} clueid
         * @param {string} customerid
        */
        post: async (
            clueid,customerid,opt
        ) => {
            return await post(`/clue/out/rest/changetocustomer?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * ChangeToCustomer
         * @param {string} clueid
         * @param {string} customerid
        */
        put: async (
            clueid,customerid,opt
        ) => {
            return await put(`/clue/out/rest/changetocustomer?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * ChangeToCustomer
         * @param {string} clueid
         * @param {string} customerid
        */
        patch: async (
            clueid,customerid,opt
        ) => {
            return await patch(`/clue/out/rest/changetocustomer?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * ChangeToCustomer
         * @param {string} clueid
         * @param {string} customerid
        */
        delete: async (
            clueid,customerid,opt
        ) => {
            return await delete(`/clue/out/rest/changetocustomer?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * ChangeToCustomer
         * @param {string} clueid
         * @param {string} customerid
        */
        options: async (
            clueid,customerid,opt
        ) => {
            return await options(`/clue/out/rest/changetocustomer?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * ChangeToCustomer
         * @param {string} clueid
         * @param {string} customerid
        */
        trace: async (
            clueid,customerid,opt
        ) => {
            return await trace(`/clue/out/rest/changetocustomer?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
}
export const clueOutRestClueView = {
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/out/rest/clueView`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/out/rest/clueView`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/out/rest/clueView`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/out/rest/clueView`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/out/rest/clueView`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/out/rest/clueView`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/out/rest/clueView`,
                body,
                opt)
        },
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/out/rest/clueView`,
                body,
                opt)
        },
}
export const clueOutRestGetclue = {
        /**
         * GetLastinfo
         * @param {string} id
        */
        get: async (
            id,opt
        ) => {
            return await get(`/clue/out/rest/getclue?id=${id}`,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} id
        */
        head: async (
            id,opt
        ) => {
            return await head(`/clue/out/rest/getclue?id=${id}`,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} id
        */
        post: async (
            id,opt
        ) => {
            return await post(`/clue/out/rest/getclue?id=${id}`,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} id
        */
        put: async (
            id,opt
        ) => {
            return await put(`/clue/out/rest/getclue?id=${id}`,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} id
        */
        patch: async (
            id,opt
        ) => {
            return await patch(`/clue/out/rest/getclue?id=${id}`,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} id
        */
        delete: async (
            id,opt
        ) => {
            return await delete(`/clue/out/rest/getclue?id=${id}`,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} id
        */
        options: async (
            id,opt
        ) => {
            return await options(`/clue/out/rest/getclue?id=${id}`,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} id
        */
        trace: async (
            id,opt
        ) => {
            return await trace(`/clue/out/rest/getclue?id=${id}`,
                opt)
        },
}
export const clueOutRestGetclueinfo = {
        /**
         * GetClueInfo
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/out/rest/getclueinfo`,
                body,
                opt)
        },
        /**
         * GetClueInfo
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/out/rest/getclueinfo`,
                body,
                opt)
        },
        /**
         * GetClueInfo
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/out/rest/getclueinfo`,
                body,
                opt)
        },
        /**
         * GetClueInfo
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/out/rest/getclueinfo`,
                body,
                opt)
        },
        /**
         * GetClueInfo
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/out/rest/getclueinfo`,
                body,
                opt)
        },
        /**
         * GetClueInfo
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/out/rest/getclueinfo`,
                body,
                opt)
        },
        /**
         * GetClueInfo
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/out/rest/getclueinfo`,
                body,
                opt)
        },
        /**
         * GetClueInfo
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/out/rest/getclueinfo`,
                body,
                opt)
        },
}
export const clueOutRestLoginuser = {
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/out/rest/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/clue/out/rest/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/out/rest/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/clue/out/rest/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/clue/out/rest/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/clue/out/rest/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/clue/out/rest/loginuser`,
                body,
                opt)
        },
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/clue/out/rest/loginuser`,
                body,
                opt)
        },
}
export const clueOutRestTest = {
        /**
         * test
         * @param {string} clueid
         * @param {string} customerid
        */
        get: async (
            clueid,customerid,opt
        ) => {
            return await get(`/clue/out/rest/test?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * test
         * @param {string} clueid
         * @param {string} customerid
        */
        head: async (
            clueid,customerid,opt
        ) => {
            return await head(`/clue/out/rest/test?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * test
         * @param {string} clueid
         * @param {string} customerid
        */
        post: async (
            clueid,customerid,opt
        ) => {
            return await post(`/clue/out/rest/test?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * test
         * @param {string} clueid
         * @param {string} customerid
        */
        put: async (
            clueid,customerid,opt
        ) => {
            return await put(`/clue/out/rest/test?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * test
         * @param {string} clueid
         * @param {string} customerid
        */
        patch: async (
            clueid,customerid,opt
        ) => {
            return await patch(`/clue/out/rest/test?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * test
         * @param {string} clueid
         * @param {string} customerid
        */
        delete: async (
            clueid,customerid,opt
        ) => {
            return await delete(`/clue/out/rest/test?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * test
         * @param {string} clueid
         * @param {string} customerid
        */
        options: async (
            clueid,customerid,opt
        ) => {
            return await options(`/clue/out/rest/test?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
        /**
         * test
         * @param {string} clueid
         * @param {string} customerid
        */
        trace: async (
            clueid,customerid,opt
        ) => {
            return await trace(`/clue/out/rest/test?clueid=${clueid}&customerid=${customerid}`,
                opt)
        },
}
export const clueOutRestUserallright = {
        /**
         * userAllRight
         * @param {string} lappKey
        */
        get: async (
            lappKey,opt
        ) => {
            return await get(`/clue/out/rest/userallright?lappKey=${lappKey}`,
                opt)
        },
        /**
         * userAllRight
         * @param {string} lappKey
        */
        head: async (
            lappKey,opt
        ) => {
            return await head(`/clue/out/rest/userallright?lappKey=${lappKey}`,
                opt)
        },
        /**
         * userAllRight
         * @param {string} lappKey
        */
        post: async (
            lappKey,opt
        ) => {
            return await post(`/clue/out/rest/userallright?lappKey=${lappKey}`,
                opt)
        },
        /**
         * userAllRight
         * @param {string} lappKey
        */
        put: async (
            lappKey,opt
        ) => {
            return await put(`/clue/out/rest/userallright?lappKey=${lappKey}`,
                opt)
        },
        /**
         * userAllRight
         * @param {string} lappKey
        */
        patch: async (
            lappKey,opt
        ) => {
            return await patch(`/clue/out/rest/userallright?lappKey=${lappKey}`,
                opt)
        },
        /**
         * userAllRight
         * @param {string} lappKey
        */
        delete: async (
            lappKey,opt
        ) => {
            return await delete(`/clue/out/rest/userallright?lappKey=${lappKey}`,
                opt)
        },
        /**
         * userAllRight
         * @param {string} lappKey
        */
        options: async (
            lappKey,opt
        ) => {
            return await options(`/clue/out/rest/userallright?lappKey=${lappKey}`,
                opt)
        },
        /**
         * userAllRight
         * @param {string} lappKey
        */
        trace: async (
            lappKey,opt
        ) => {
            return await trace(`/clue/out/rest/userallright?lappKey=${lappKey}`,
                opt)
        },
}
/**
 * 基础信息接口
 */
export const cluePostapiIcrmupdateopp = {
        /**
         * icrm更新商机信息接口
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/postapi/icrmupdateopp`,
                body,
                opt)
        },
}
/**
 * 线索内部服务接口
 */
export const clueRestInnerCluesClearpermission = {
        /**
         * 在同步数据，如k3cloud等要清理相应的数据缓存
         * @param {ClearPermissionCache} ClearPermissionCache
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/inner/clues/clearpermission`,
                body,
                opt)
        },
}
/**
 * 基础信息接口
 */
export const clueRestV1Changecustomerright = {
        /**
         * 接口判断是否有对应线索的转客户权限
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/changecustomerright`,
                body,
                opt)
        },
}
export const clueRestV1Loginuser = {
        /**
         * 获取当前登录人信息
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/loginuser`,
                body,
                opt)
        },
        /**
         * 获取当前登录人信息
         * @param {User} User
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/rest/v1/loginuser`,
                body,
                opt)
        },
}
export const clueRestV1OrgRequest = {
        /**
         * 发送开通请求给管理员
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/orgRequest`,
                body,
                opt)
        },
}
export const clueRestV1Test = {
        /**
         * 测试方法
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/test`,
                body,
                opt)
        },
}
export const clueRestV1TestLogin = {
        /**
         * 模拟登陆
         * @param {string} oid
        */
        post: async (
            oid,opt
        ) => {
            return await post(`/clue/rest/v1/testLogin?oid=${oid}`,
                opt)
        },
        /**
         * 模拟登陆
         * @param {string} oid
        */
        get: async (
            oid,opt
        ) => {
            return await get(`/clue/rest/v1/testLogin?oid=${oid}`,
                opt)
        },
}
export const clueRestV1Testpostjson = {
        /**
         * 测试，接收写入
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/testpostjson`,
                body,
                opt)
        },
}
/**
 * 线索库相关接口
 */
export const clueRestV1ClueLibraryAdd = {
        /**
         * 线索库新增接口
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clueLibrary/add`,
                body,
                opt)
        },
}
export const clueRestV1ClueLibraryDelete = {
        /**
         * 删除或转移
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clueLibrary/delete`,
                body,
                opt)
        },
}
export const clueRestV1ClueLibraryIsdelete = {
        /**
         * 线索库是否可以删除
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clueLibrary/isdelete`,
                body,
                opt)
        },
}
export const clueRestV1ClueLibrarySearch = {
        /**
         * 线索库列表
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clueLibrary/search`,
                body,
                opt)
        },
}
export const clueRestV1ClueLibraryUpdate = {
        /**
         * 线索库设置接口
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clueLibrary/update`,
                body,
                opt)
        },
}
/**
 * 线索相关接口
 */
export const clueAutotestSearch = {
        /**
         * 线索查询、线索列表
         * @param {ClueViewEntry} ClueViewEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/autotest/search`,
                body,
                opt)
        },
}
export const clueRestV1CluesAdd = {
        /**
         * 增加线索
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/add`,
                body,
                opt)
        },
}
export const clueRestV1CluesCard = {
        /**
         * 名片扫描
         * @param {File} file
        */
        post: async (
            file,opt
        ) => {
            return await post(`/clue/rest/v1/clues/card?file=${file}`,
                opt)
        },
}
export const clueRestV1CluesClose = {
        /**
         * 关闭线索
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/close`,
                body,
                opt)
        },
}
export const clueRestV1CluesCloseIds = {
        /**
         * 批量关闭线索
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/close/ids`,
                body,
                opt)
        },
}
export const clueRestV1CluesCotactcall = {
        /**
         * 对应线索拨打电话
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/cotactcall`,
                body,
                opt)
        },
}
export const clueRestV1CluesDistribute = {
        /**
         * 线索分配
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/distribute`,
                body,
                opt)
        },
}
export const clueRestV1CluesDistributeandnotice = {
        /**
         * 移交并关注
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/distributeandnotice`,
                body,
                opt)
        },
}
export const clueRestV1CluesDistributebyids = {
        /**
         * 批量移交并关注
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/distributebyids`,
                body,
                opt)
        },
}
export const clueRestV1CluesFreecall = {
        /**
         * 对应线索拨打免费电话
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/freecall`,
                body,
                opt)
        },
}
export const clueRestV1CluesGet = {
        /**
         * 接口详情
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/get`,
                body,
                opt)
        },
}
export const clueRestV1CluesGetextid = {
        /**
         * 获取线索商务伙伴extid
         * @param {GetExtIDEntry} GetExtIDEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/getextid`,
                body,
                opt)
        },
}
export const clueRestV1CluesOpen = {
        /**
         * 批量开启线索
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/open`,
                body,
                opt)
        },
}
export const clueRestV1CluesSearch = {
        /**
         * 线索查询、线索列表
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/search`,
                body,
                opt)
        },
}
export const clueRestV1CluesTest = {
        /**
         * 对应线索拨打免费电话
        */
        post: async (
            opt
        ) => {
            return await post(`/clue/rest/v1/clues/test`,
                opt)
        },
}
export const clueRestV1CluesUpdate = {
        /**
         * 更新线索
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/update`,
                body,
                opt)
        },
}
export const clueRestV1CluesWebSearch = {
        /**
         * 线索查询、线索列表
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/webSearch`,
                body,
                opt)
        },
}
/**
 * 线索视图相关接口
 */
export const clueRestV1CluesView = {
        /**
         * 线索视图详情接口
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/view`,
                body,
                opt)
        },
}
export const clueRestV1CluesViewDetail = {
        /**
         * 获取线索详情
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/clues/view/detail`,
                body,
                opt)
        },
}
/**
 * 线索导入导出接口
 */
export const clueRestV1Excel = {
        /**
         * 导出表格
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/excel`,
                body,
                opt)
        },
        /**
         * 导出表格
         * @param {User} User
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/rest/v1/excel`,
                body,
                opt)
        },
}
export const clueRestV1ExcelErrorlistGet = {
        /**
         * 导出错误列表
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/excel/errorlist/get`,
                body,
                opt)
        },
}
export const clueRestV1ExcelGet = {
        /**
         * 导出表格
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/excel/get`,
                body,
                opt)
        },
        /**
         * 导出表格
         * @param {User} User
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/rest/v1/excel/get`,
                body,
                opt)
        },
}
export const clueRestV1ExcelPut = {
        /**
         * 导入模板
         * @param {File} file
         * @param {string} clueLibraryId
         * @param {integer} uploadTime
         * @param {User} User
        */
        post: async (
            file,clueLibraryId,uploadTime,body,opt
        ) => {
            return await post(`/clue/rest/v1/excel/put?file=${file}&clueLibraryId=${clueLibraryId}&uploadTime=${uploadTime}`,
                body,
                opt)
        },
}
export const clueRestV1ExcelState = {
        /**
         * 获取导入状态
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/excel/state`,
                body,
                opt)
        },
}
export const clueRestV1ExcelTemplate = {
        /**
         * 导出模板
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/excel/template`,
                body,
                opt)
        },
        /**
         * 导出模板
         * @param {User} User
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/rest/v1/excel/template`,
                body,
                opt)
        },
}
/**
 * 线索库线索相关接口
 */
export const clueRestV1LibraryClueAdd = {
        /**
         * 新增线索
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/libraryClue/add`,
                body,
                opt)
        },
}
export const clueRestV1LibraryClueClose = {
        /**
         * 批量关闭线索
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/libraryClue/close`,
                body,
                opt)
        },
}
export const clueRestV1LibraryClueDistribute = {
        /**
         * 批量分配
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/libraryClue/distribute`,
                body,
                opt)
        },
}
export const clueRestV1LibraryClueList = {
        /**
         * 线索库列表
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/libraryClue/list`,
                body,
                opt)
        },
}
export const clueRestV1LibraryClueOpen = {
        /**
         * 批量开启线索
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/libraryClue/open`,
                body,
                opt)
        },
}
export const clueRestV1LibraryClueRecycle = {
        /**
         * 收回线索
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/libraryClue/recycle`,
                body,
                opt)
        },
}
export const clueRestV1LibraryClueSearch = {
        /**
         * 线索列表
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/libraryClue/search`,
                body,
                opt)
        },
}
export const clueRestV1LibraryClueTransfer = {
        /**
         * 转移线索
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/libraryClue/transfer`,
                body,
                opt)
        },
}
export const clueRestV1LibraryClueUpdate = {
        /**
         * 更新线索
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/libraryClue/update`,
                body,
                opt)
        },
}
/**
 * 客户跟进接口
 */
export const clueRestV1ListExcel = {
        /**
         * 导出模板
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/list/excel`,
                body,
                opt)
        },
        /**
         * 导出模板
         * @param {User} User
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/rest/v1/list/excel`,
                body,
                opt)
        },
}
export const clueRestV1ListExcelErrorlistGet = {
        /**
         * 导出错误列表
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/list/excel/errorlist/get`,
                body,
                opt)
        },
}
export const clueRestV1ListExcelGet = {
        /**
         * 导出表格
         * @param {string} searchvalue
         * @param {User} User
        */
        post: async (
            searchvalue,body,opt
        ) => {
            return await post(`/clue/rest/v1/list/excel/get?searchvalue=${searchvalue}`,
                body,
                opt)
        },
        /**
         * 导出表格
         * @param {string} searchvalue
         * @param {User} User
        */
        get: async (
            searchvalue,body,opt
        ) => {
            return await get(`/clue/rest/v1/list/excel/get?searchvalue=${searchvalue}`,
                body,
                opt)
        },
}
export const clueRestV1ListExcelPut = {
        /**
         * 导入模板
         * @param {File} file
         * @param {User} User
        */
        post: async (
            file,body,opt
        ) => {
            return await post(`/clue/rest/v1/list/excel/put?file=${file}`,
                body,
                opt)
        },
}
export const clueRestV1ListExcelState = {
        /**
         * 获取导入状态
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/list/excel/state`,
                body,
                opt)
        },
}
export const clueRestV1ListExcelTemplate = {
        /**
         * 导出模板
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/list/excel/template`,
                body,
                opt)
        },
        /**
         * 导出模板
         * @param {User} User
        */
        get: async (
            body,opt
        ) => {
            return await get(`/clue/rest/v1/list/excel/template`,
                body,
                opt)
        },
}
/**
 * 协作团队相关接口
 */
export const clueRestV1PartsAdd = {
        /**
         * 添加参与人
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/parts/add`,
                body,
                opt)
        },
}
export const clueRestV1PartsCover = {
        /**
         * 覆盖参与者
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/parts/cover`,
                body,
                opt)
        },
}
export const clueRestV1PartsDelete = {
        /**
         * 删除写作成员
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/parts/delete`,
                body,
                opt)
        },
}
/**
 * 搜索接口
 */
export const clueRestV1SearchApp = {
        /**
         * app search
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/search/app`,
                body,
                opt)
        },
}
export const clueRestV1SearchWeb = {
        /**
         * web search
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/rest/v1/search/web`,
                body,
                opt)
        },
}
/**
 * 线索内部服务相关接口
 */
export const clueServiceV1CluesClueToCrmContact = {
        /**
         * 线索转联系人
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/service/v1/clues/clueToCRMContact`,
                body,
                opt)
        },
}
export const clueServiceV1CluesCluetoopportunity = {
        /**
         * 线索转商机
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/service/v1/clues/cluetoopportunity`,
                body,
                opt)
        },
}
export const clueServiceV1CluesView = {
        /**
         * 线索视图详情接口
         * @param {string} id
        */
        post: async (
            id,opt
        ) => {
            return await post(`/clue/service/v1/clues/view?id=${id}`,
                opt)
        },
}
/**
 * 测试接口
 */
export const clueDeleteclue = {
        /**
         * 删除线索
         * @param {ClueViewEntry} ClueViewEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/clue/deleteclue`,
                body,
                opt)
        },
}
export const clueTest = {
        /**
         * test
        */
        post: async (
            opt
        ) => {
            return await post(`/clue/test`,
                opt)
        },
}
