
import { get, post } from '../http'
import {
    ApiQueryReq,
    IdEntry,
    SearchEntry,
    ChangeCUstomerUserByListEntry,
    XDlGetCustomerEntry,
    QueryParamEntry,
    InitCustomerDataEntry,
    CustomerNameApiEntry,
    CustomerContactOppDTEntry,
    CustomerFollowApiEntry,
    CheckRightApiEntry,
    ClearPermissionCache,
    CustomerEntry,
    CustomerListApiEntry,
    CustomerSearchApiEntry,
    CustomerSearchV2ApiEntry,
    User,
    GetLatestInfoEntry,
    QixinGetEntry,
    QiXinSearchListEntry,
    CRMContactEntry,
    ChangeContactUserEntry,
    DeleteEntry,
    GetEntry,
    GetCRMContactByCustomerIDEntry,
    GetCRMContactByExtIdEntry,
    IdsEntry,
    ChangeCustomerUserEntry,
    GetChargeUserByIdEntry,
    CustomerApplyFollowEntry,
    GetCustomerLatestInfoEntry,
    SendInviteExtFriendNewsEntry,
    CustomerViewEntry,
    AddPartEntry,
    FollowEntry,
    PartEntry,
    DeletePartEntry,
    AddBillConvertEntry,
    AddLastInfoEntry,
    AuthAuthCodeReq,
    EntryReq,
    InviterInfoReq,
    ObtainAuthCodeReq,
    deleteCollectChatEntry,
    getCollectChatEntry,
    DistributeLibraryCustomerEntry,
    DistributeLibraryCustomerByIdsEntry,
    ActionEntry,
    QueryLibraryPhoneEntry,
    RecycleToCustomerLibEntry,
    RecycleToCustomerLibByIDsEntry,
    QueryLibraryCustomerEntry,
    TransferLibraryCustomerEntry,
    TransferLibraryCustomerByIdsEntry,
    TransferAllCustomerEntry,
    AddCustomerApi,
    ChangeUserJsonModelApi,
    FindUserJsonModelApi,
    AddCustomerLibraryEntry,
    SearchCustomerLibraryEntry,
    SetCustomerLibraryRulesEntry,
    SetCustomerLibraryUsersEntry,
    TransferCustoerLibraryEntry,
    ActivateRuleEntry,
    QueryActivateRuleEntry,
    UpdateActiveRuleEntry,
} from './customerModel'
/**
 * Api Rest
 */
export const customerApiAddCustomer = {
        /**
         * 用于kis增加客户
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/api/addCustomer`,
                body,
                opt)
        },
}
export const customerApiCustomerList = {
        /**
         * getCustomerList
         * @param {string} appId
         * @param {string} key
         * @param {ApiQueryReq} ApiQueryReq
        */
        post: async (
            appId,key,body,opt
        ) => {
            return await post(`/customer/api/customerList/appId/key`,
                body,
                opt)
        },
}
export const customerApiGetCustomerList = {
        /**
         * 查询指定客户
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/api/getCustomerList`,
                body,
                opt)
        },
}
/**
 * 审批相关接口
 */
export const customerRestV1ApprovesApprove = {
        /**
         * 提交审批
         * @param {IdEntry} IdEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/approves/approve`,
                body,
                opt)
        },
}
/**
 * 客户查重接口
 */
export const customerRestV1CustomersCheckRepeatKeyword = {
        /**
         * 客户查重
         * @param {SearchEntry} SearchEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/checkRepeat/keyword`,
                body,
                opt)
        },
}
/**
 * Common Rest
 */
export const customerOutRestAddBillConvert = {
        /**
         * AddBillConvert
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/customer/out/rest/addBillConvert`,
                body,
                opt)
        },
        /**
         * AddBillConvert
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/customer/out/rest/addBillConvert`,
                body,
                opt)
        },
        /**
         * AddBillConvert
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/out/rest/addBillConvert`,
                body,
                opt)
        },
        /**
         * AddBillConvert
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/customer/out/rest/addBillConvert`,
                body,
                opt)
        },
        /**
         * AddBillConvert
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/customer/out/rest/addBillConvert`,
                body,
                opt)
        },
        /**
         * AddBillConvert
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/customer/out/rest/addBillConvert`,
                body,
                opt)
        },
        /**
         * AddBillConvert
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/customer/out/rest/addBillConvert`,
                body,
                opt)
        },
        /**
         * AddBillConvert
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/customer/out/rest/addBillConvert`,
                body,
                opt)
        },
}
export const customerOutRestAddlastinfo = {
        /**
         * AddLastInfo
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/customer/out/rest/addlastinfo`,
                body,
                opt)
        },
        /**
         * AddLastInfo
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/customer/out/rest/addlastinfo`,
                body,
                opt)
        },
        /**
         * AddLastInfo
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/out/rest/addlastinfo`,
                body,
                opt)
        },
        /**
         * AddLastInfo
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/customer/out/rest/addlastinfo`,
                body,
                opt)
        },
        /**
         * AddLastInfo
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/customer/out/rest/addlastinfo`,
                body,
                opt)
        },
        /**
         * AddLastInfo
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/customer/out/rest/addlastinfo`,
                body,
                opt)
        },
        /**
         * AddLastInfo
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/customer/out/rest/addlastinfo`,
                body,
                opt)
        },
        /**
         * AddLastInfo
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/customer/out/rest/addlastinfo`,
                body,
                opt)
        },
}
export const customerOutRestGetlastinfo = {
        /**
         * GetLastinfo
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/customer/out/rest/getlastinfo`,
                body,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/customer/out/rest/getlastinfo`,
                body,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/out/rest/getlastinfo`,
                body,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/customer/out/rest/getlastinfo`,
                body,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/customer/out/rest/getlastinfo`,
                body,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/customer/out/rest/getlastinfo`,
                body,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/customer/out/rest/getlastinfo`,
                body,
                opt)
        },
        /**
         * GetLastinfo
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/customer/out/rest/getlastinfo`,
                body,
                opt)
        },
}
export const customerOutRestUserallright = {
        /**
         * userAllRight
        */
        get: async (
            opt
        ) => {
            return await get(`/customer/out/rest/userallright`,
                opt)
        },
        /**
         * userAllRight
        */
        head: async (
            opt
        ) => {
            return await head(`/customer/out/rest/userallright`,
                opt)
        },
        /**
         * userAllRight
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/out/rest/userallright`,
                opt)
        },
        /**
         * userAllRight
        */
        put: async (
            opt
        ) => {
            return await put(`/customer/out/rest/userallright`,
                opt)
        },
        /**
         * userAllRight
        */
        patch: async (
            opt
        ) => {
            return await patch(`/customer/out/rest/userallright`,
                opt)
        },
        /**
         * userAllRight
        */
        delete: async (
            opt
        ) => {
            return await delete(`/customer/out/rest/userallright`,
                opt)
        },
        /**
         * userAllRight
        */
        options: async (
            opt
        ) => {
            return await options(`/customer/out/rest/userallright`,
                opt)
        },
        /**
         * userAllRight
        */
        trace: async (
            opt
        ) => {
            return await trace(`/customer/out/rest/userallright`,
                opt)
        },
}
/**
 * CRM Contact Rest
 */
export const customerContactCreate = {
        /**
         * createContact
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/contact/create`,
                body,
                opt)
        },
}
export const customerContactCreateafterinvite = {
        /**
         * createAfterInviteContact
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/contact/createafterinvite`,
                body,
                opt)
        },
}
export const customerContactDelete = {
        /**
         * deleteContact
         * @param {string} id
         * @param {string} userId
         * @param {string} eid
        */
        post: async (
            id,userId,eid,opt
        ) => {
            return await post(`/customer/contact/delete?id=${id}&userId=${userId}&eid=${eid}`,
                opt)
        },
}
export const customerContactGetbycustid = {
        /**
         * getContactByCustomerID
         * @param {string} oid
         * @param {string} string
        */
        post: async (
            oid,body,opt
        ) => {
            return await post(`/customer/contact/getbycustid?oid=${oid}`,
                body,
                opt)
        },
}
export const customerContactGetbyextid = {
        /**
         * getContactByID
         * @param {string} extID
         * @param {string} userID
        */
        post: async (
            extID,userID,opt
        ) => {
            return await post(`/customer/contact/getbyextid?extID=${extID}&userID=${userID}`,
                opt)
        },
}
export const customerContactGetbyid = {
        /**
         * getContactByID
         * @param {string} id
        */
        post: async (
            id,opt
        ) => {
            return await post(`/customer/contact/getbyid?id=${id}`,
                opt)
        },
}
export const customerContactGetext = {
        /**
         * getContactByExtIDs
         * @param {string} oid
         * @param {string} string
        */
        post: async (
            oid,body,opt
        ) => {
            return await post(`/customer/contact/getext?oid=${oid}`,
                body,
                opt)
        },
}
export const customerContactRemarkedit = {
        /**
         * extRemarkEdit
         * @param {string} oid
         * @param {string} string
        */
        post: async (
            oid,body,opt
        ) => {
            return await post(`/customer/contact/remarkedit?oid=${oid}`,
                body,
                opt)
        },
}
export const customerContactSendinvite = {
        /**
         * sendInvite
         * @param {string} oid
         * @param {string} string
        */
        post: async (
            oid,body,opt
        ) => {
            return await post(`/customer/contact/sendinvite?oid=${oid}`,
                body,
                opt)
        },
}
export const customerContactUpdate = {
        /**
         * updateContact
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/contact/update`,
                body,
                opt)
        },
}
export const customerContactUpdatecontactuser = {
        /**
         * updateContactUser
         * @param {string} id
         * @param {string} string
        */
        post: async (
            id,body,opt
        ) => {
            return await post(`/customer/contact/updatecontactuser?id=${id}`,
                body,
                opt)
        },
}
/**
 * Customer Controller
 */
export const customer = {
        /**
         * index
         * @param {string} lappKey
         * @param {Model} Model
        */
        get: async (
            lappKey,body,opt
        ) => {
            return await get(`/customer/?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * index
         * @param {string} lappKey
         * @param {Model} Model
        */
        head: async (
            lappKey,body,opt
        ) => {
            return await head(`/customer/?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * index
         * @param {string} lappKey
         * @param {Model} Model
        */
        post: async (
            lappKey,body,opt
        ) => {
            return await post(`/customer/?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * index
         * @param {string} lappKey
         * @param {Model} Model
        */
        put: async (
            lappKey,body,opt
        ) => {
            return await put(`/customer/?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * index
         * @param {string} lappKey
         * @param {Model} Model
        */
        patch: async (
            lappKey,body,opt
        ) => {
            return await patch(`/customer/?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * index
         * @param {string} lappKey
         * @param {Model} Model
        */
        delete: async (
            lappKey,body,opt
        ) => {
            return await delete(`/customer/?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * index
         * @param {string} lappKey
         * @param {Model} Model
        */
        options: async (
            lappKey,body,opt
        ) => {
            return await options(`/customer/?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * index
         * @param {string} lappKey
         * @param {Model} Model
        */
        trace: async (
            lappKey,body,opt
        ) => {
            return await trace(`/customer/?lappKey=${lappKey}`,
                body,
                opt)
        },
}
export const customerCardrecognise = {
        /**
         * upload
         * @param {File} file
         * @param {ModelMap} ModelMap
        */
        post: async (
            file,body,opt
        ) => {
            return await post(`/customer/cardrecognise?file=${file}`,
                body,
                opt)
        },
}
export const customerCustomecreate = {
        /**
         * create
         * @param {string} id
         * @param {string} openId
         * @param {string} userId
         * @param {string} userName
         * @param {string} clueid
         * @param {Model} Model
        */
        get: async (
            id,openId,userId,userName,clueid,body,opt
        ) => {
            return await get(`/customer/customecreate?id=${id}&openId=${openId}&userId=${userId}&userName=${userName}&clueid=${clueid}`,
                body,
                opt)
        },
        /**
         * create
         * @param {string} id
         * @param {string} openId
         * @param {string} userId
         * @param {string} userName
         * @param {string} clueid
         * @param {Model} Model
        */
        head: async (
            id,openId,userId,userName,clueid,body,opt
        ) => {
            return await head(`/customer/customecreate?id=${id}&openId=${openId}&userId=${userId}&userName=${userName}&clueid=${clueid}`,
                body,
                opt)
        },
        /**
         * create
         * @param {string} id
         * @param {string} openId
         * @param {string} userId
         * @param {string} userName
         * @param {string} clueid
         * @param {Model} Model
        */
        post: async (
            id,openId,userId,userName,clueid,body,opt
        ) => {
            return await post(`/customer/customecreate?id=${id}&openId=${openId}&userId=${userId}&userName=${userName}&clueid=${clueid}`,
                body,
                opt)
        },
        /**
         * create
         * @param {string} id
         * @param {string} openId
         * @param {string} userId
         * @param {string} userName
         * @param {string} clueid
         * @param {Model} Model
        */
        put: async (
            id,openId,userId,userName,clueid,body,opt
        ) => {
            return await put(`/customer/customecreate?id=${id}&openId=${openId}&userId=${userId}&userName=${userName}&clueid=${clueid}`,
                body,
                opt)
        },
        /**
         * create
         * @param {string} id
         * @param {string} openId
         * @param {string} userId
         * @param {string} userName
         * @param {string} clueid
         * @param {Model} Model
        */
        patch: async (
            id,openId,userId,userName,clueid,body,opt
        ) => {
            return await patch(`/customer/customecreate?id=${id}&openId=${openId}&userId=${userId}&userName=${userName}&clueid=${clueid}`,
                body,
                opt)
        },
        /**
         * create
         * @param {string} id
         * @param {string} openId
         * @param {string} userId
         * @param {string} userName
         * @param {string} clueid
         * @param {Model} Model
        */
        delete: async (
            id,openId,userId,userName,clueid,body,opt
        ) => {
            return await delete(`/customer/customecreate?id=${id}&openId=${openId}&userId=${userId}&userName=${userName}&clueid=${clueid}`,
                body,
                opt)
        },
        /**
         * create
         * @param {string} id
         * @param {string} openId
         * @param {string} userId
         * @param {string} userName
         * @param {string} clueid
         * @param {Model} Model
        */
        options: async (
            id,openId,userId,userName,clueid,body,opt
        ) => {
            return await options(`/customer/customecreate?id=${id}&openId=${openId}&userId=${userId}&userName=${userName}&clueid=${clueid}`,
                body,
                opt)
        },
        /**
         * create
         * @param {string} id
         * @param {string} openId
         * @param {string} userId
         * @param {string} userName
         * @param {string} clueid
         * @param {Model} Model
        */
        trace: async (
            id,openId,userId,userName,clueid,body,opt
        ) => {
            return await trace(`/customer/customecreate?id=${id}&openId=${openId}&userId=${userId}&userName=${userName}&clueid=${clueid}`,
                body,
                opt)
        },
}
export const customerCustomercreatebycard = {
        /**
         * createByCard
         * @param {Model} Model
        */
        get: async (
            body,opt
        ) => {
            return await get(`/customer/customercreatebycard`,
                body,
                opt)
        },
        /**
         * createByCard
         * @param {Model} Model
        */
        head: async (
            body,opt
        ) => {
            return await head(`/customer/customercreatebycard`,
                body,
                opt)
        },
        /**
         * createByCard
         * @param {Model} Model
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/customercreatebycard`,
                body,
                opt)
        },
        /**
         * createByCard
         * @param {Model} Model
        */
        put: async (
            body,opt
        ) => {
            return await put(`/customer/customercreatebycard`,
                body,
                opt)
        },
        /**
         * createByCard
         * @param {Model} Model
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/customer/customercreatebycard`,
                body,
                opt)
        },
        /**
         * createByCard
         * @param {Model} Model
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/customer/customercreatebycard`,
                body,
                opt)
        },
        /**
         * createByCard
         * @param {Model} Model
        */
        options: async (
            body,opt
        ) => {
            return await options(`/customer/customercreatebycard`,
                body,
                opt)
        },
        /**
         * createByCard
         * @param {Model} Model
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/customer/customercreatebycard`,
                body,
                opt)
        },
}
export const customerCustomerdetail = {
        /**
         * detail
         * @param {string} id
         * @param {string} isedit
         * @param {string} lappKey
         * @param {Model} Model
        */
        get: async (
            id,isedit,lappKey,body,opt
        ) => {
            return await get(`/customer/customerdetail?id=${id}&isedit=${isedit}&lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * detail
         * @param {string} id
         * @param {string} isedit
         * @param {string} lappKey
         * @param {Model} Model
        */
        head: async (
            id,isedit,lappKey,body,opt
        ) => {
            return await head(`/customer/customerdetail?id=${id}&isedit=${isedit}&lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * detail
         * @param {string} id
         * @param {string} isedit
         * @param {string} lappKey
         * @param {Model} Model
        */
        post: async (
            id,isedit,lappKey,body,opt
        ) => {
            return await post(`/customer/customerdetail?id=${id}&isedit=${isedit}&lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * detail
         * @param {string} id
         * @param {string} isedit
         * @param {string} lappKey
         * @param {Model} Model
        */
        put: async (
            id,isedit,lappKey,body,opt
        ) => {
            return await put(`/customer/customerdetail?id=${id}&isedit=${isedit}&lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * detail
         * @param {string} id
         * @param {string} isedit
         * @param {string} lappKey
         * @param {Model} Model
        */
        patch: async (
            id,isedit,lappKey,body,opt
        ) => {
            return await patch(`/customer/customerdetail?id=${id}&isedit=${isedit}&lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * detail
         * @param {string} id
         * @param {string} isedit
         * @param {string} lappKey
         * @param {Model} Model
        */
        delete: async (
            id,isedit,lappKey,body,opt
        ) => {
            return await delete(`/customer/customerdetail?id=${id}&isedit=${isedit}&lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * detail
         * @param {string} id
         * @param {string} isedit
         * @param {string} lappKey
         * @param {Model} Model
        */
        options: async (
            id,isedit,lappKey,body,opt
        ) => {
            return await options(`/customer/customerdetail?id=${id}&isedit=${isedit}&lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * detail
         * @param {string} id
         * @param {string} isedit
         * @param {string} lappKey
         * @param {Model} Model
        */
        trace: async (
            id,isedit,lappKey,body,opt
        ) => {
            return await trace(`/customer/customerdetail?id=${id}&isedit=${isedit}&lappKey=${lappKey}`,
                body,
                opt)
        },
}
export const customerCustomeredit = {
        /**
         * edit
         * @param {string} id
         * @param {string} isedit
         * @param {Model} Model
        */
        get: async (
            id,isedit,body,opt
        ) => {
            return await get(`/customer/customeredit?id=${id}&isedit=${isedit}`,
                body,
                opt)
        },
        /**
         * edit
         * @param {string} id
         * @param {string} isedit
         * @param {Model} Model
        */
        head: async (
            id,isedit,body,opt
        ) => {
            return await head(`/customer/customeredit?id=${id}&isedit=${isedit}`,
                body,
                opt)
        },
        /**
         * edit
         * @param {string} id
         * @param {string} isedit
         * @param {Model} Model
        */
        post: async (
            id,isedit,body,opt
        ) => {
            return await post(`/customer/customeredit?id=${id}&isedit=${isedit}`,
                body,
                opt)
        },
        /**
         * edit
         * @param {string} id
         * @param {string} isedit
         * @param {Model} Model
        */
        put: async (
            id,isedit,body,opt
        ) => {
            return await put(`/customer/customeredit?id=${id}&isedit=${isedit}`,
                body,
                opt)
        },
        /**
         * edit
         * @param {string} id
         * @param {string} isedit
         * @param {Model} Model
        */
        patch: async (
            id,isedit,body,opt
        ) => {
            return await patch(`/customer/customeredit?id=${id}&isedit=${isedit}`,
                body,
                opt)
        },
        /**
         * edit
         * @param {string} id
         * @param {string} isedit
         * @param {Model} Model
        */
        delete: async (
            id,isedit,body,opt
        ) => {
            return await delete(`/customer/customeredit?id=${id}&isedit=${isedit}`,
                body,
                opt)
        },
        /**
         * edit
         * @param {string} id
         * @param {string} isedit
         * @param {Model} Model
        */
        options: async (
            id,isedit,body,opt
        ) => {
            return await options(`/customer/customeredit?id=${id}&isedit=${isedit}`,
                body,
                opt)
        },
        /**
         * edit
         * @param {string} id
         * @param {string} isedit
         * @param {Model} Model
        */
        trace: async (
            id,isedit,body,opt
        ) => {
            return await trace(`/customer/customeredit?id=${id}&isedit=${isedit}`,
                body,
                opt)
        },
}
export const customerCustomereditbycard = {
        /**
         * editByCard
         * @param {Model} Model
        */
        get: async (
            body,opt
        ) => {
            return await get(`/customer/customereditbycard`,
                body,
                opt)
        },
        /**
         * editByCard
         * @param {Model} Model
        */
        head: async (
            body,opt
        ) => {
            return await head(`/customer/customereditbycard`,
                body,
                opt)
        },
        /**
         * editByCard
         * @param {Model} Model
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/customereditbycard`,
                body,
                opt)
        },
        /**
         * editByCard
         * @param {Model} Model
        */
        put: async (
            body,opt
        ) => {
            return await put(`/customer/customereditbycard`,
                body,
                opt)
        },
        /**
         * editByCard
         * @param {Model} Model
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/customer/customereditbycard`,
                body,
                opt)
        },
        /**
         * editByCard
         * @param {Model} Model
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/customer/customereditbycard`,
                body,
                opt)
        },
        /**
         * editByCard
         * @param {Model} Model
        */
        options: async (
            body,opt
        ) => {
            return await options(`/customer/customereditbycard`,
                body,
                opt)
        },
        /**
         * editByCard
         * @param {Model} Model
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/customer/customereditbycard`,
                body,
                opt)
        },
}
export const customerCustomerview = {
        /**
         * Customerview
         * @param {string} lappKey
         * @param {Model} Model
        */
        get: async (
            lappKey,body,opt
        ) => {
            return await get(`/customer/customerview?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * Customerview
         * @param {string} lappKey
         * @param {Model} Model
        */
        head: async (
            lappKey,body,opt
        ) => {
            return await head(`/customer/customerview?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * Customerview
         * @param {string} lappKey
         * @param {Model} Model
        */
        post: async (
            lappKey,body,opt
        ) => {
            return await post(`/customer/customerview?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * Customerview
         * @param {string} lappKey
         * @param {Model} Model
        */
        put: async (
            lappKey,body,opt
        ) => {
            return await put(`/customer/customerview?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * Customerview
         * @param {string} lappKey
         * @param {Model} Model
        */
        patch: async (
            lappKey,body,opt
        ) => {
            return await patch(`/customer/customerview?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * Customerview
         * @param {string} lappKey
         * @param {Model} Model
        */
        delete: async (
            lappKey,body,opt
        ) => {
            return await delete(`/customer/customerview?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * Customerview
         * @param {string} lappKey
         * @param {Model} Model
        */
        options: async (
            lappKey,body,opt
        ) => {
            return await options(`/customer/customerview?lappKey=${lappKey}`,
                body,
                opt)
        },
        /**
         * Customerview
         * @param {string} lappKey
         * @param {Model} Model
        */
        trace: async (
            lappKey,body,opt
        ) => {
            return await trace(`/customer/customerview?lappKey=${lappKey}`,
                body,
                opt)
        },
}
export const customerFollowlist = {
        /**
         * CuostomerFollow
         * @param {Model} Model
        */
        get: async (
            body,opt
        ) => {
            return await get(`/customer/followlist`,
                body,
                opt)
        },
        /**
         * CuostomerFollow
         * @param {Model} Model
        */
        head: async (
            body,opt
        ) => {
            return await head(`/customer/followlist`,
                body,
                opt)
        },
        /**
         * CuostomerFollow
         * @param {Model} Model
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/followlist`,
                body,
                opt)
        },
        /**
         * CuostomerFollow
         * @param {Model} Model
        */
        put: async (
            body,opt
        ) => {
            return await put(`/customer/followlist`,
                body,
                opt)
        },
        /**
         * CuostomerFollow
         * @param {Model} Model
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/customer/followlist`,
                body,
                opt)
        },
        /**
         * CuostomerFollow
         * @param {Model} Model
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/customer/followlist`,
                body,
                opt)
        },
        /**
         * CuostomerFollow
         * @param {Model} Model
        */
        options: async (
            body,opt
        ) => {
            return await options(`/customer/followlist`,
                body,
                opt)
        },
        /**
         * CuostomerFollow
         * @param {Model} Model
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/customer/followlist`,
                body,
                opt)
        },
}
export const customerIndex = {
        /**
         * indexbyTicket
         * @param {Model} Model
        */
        get: async (
            body,opt
        ) => {
            return await get(`/customer/index`,
                body,
                opt)
        },
        /**
         * indexbyTicket
         * @param {Model} Model
        */
        head: async (
            body,opt
        ) => {
            return await head(`/customer/index`,
                body,
                opt)
        },
        /**
         * indexbyTicket
         * @param {Model} Model
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/index`,
                body,
                opt)
        },
        /**
         * indexbyTicket
         * @param {Model} Model
        */
        put: async (
            body,opt
        ) => {
            return await put(`/customer/index`,
                body,
                opt)
        },
        /**
         * indexbyTicket
         * @param {Model} Model
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/customer/index`,
                body,
                opt)
        },
        /**
         * indexbyTicket
         * @param {Model} Model
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/customer/index`,
                body,
                opt)
        },
        /**
         * indexbyTicket
         * @param {Model} Model
        */
        options: async (
            body,opt
        ) => {
            return await options(`/customer/index`,
                body,
                opt)
        },
        /**
         * indexbyTicket
         * @param {Model} Model
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/customer/index`,
                body,
                opt)
        },
}
export const customerTestLogin = {
        /**
         * testIndex
         * @param {string} oid
         * @param {Model} Model
        */
        get: async (
            oid,body,opt
        ) => {
            return await get(`/customer/testLogin?oid=${oid}`,
                body,
                opt)
        },
        /**
         * testIndex
         * @param {string} oid
         * @param {Model} Model
        */
        head: async (
            oid,body,opt
        ) => {
            return await head(`/customer/testLogin?oid=${oid}`,
                body,
                opt)
        },
        /**
         * testIndex
         * @param {string} oid
         * @param {Model} Model
        */
        post: async (
            oid,body,opt
        ) => {
            return await post(`/customer/testLogin?oid=${oid}`,
                body,
                opt)
        },
        /**
         * testIndex
         * @param {string} oid
         * @param {Model} Model
        */
        put: async (
            oid,body,opt
        ) => {
            return await put(`/customer/testLogin?oid=${oid}`,
                body,
                opt)
        },
        /**
         * testIndex
         * @param {string} oid
         * @param {Model} Model
        */
        patch: async (
            oid,body,opt
        ) => {
            return await patch(`/customer/testLogin?oid=${oid}`,
                body,
                opt)
        },
        /**
         * testIndex
         * @param {string} oid
         * @param {Model} Model
        */
        delete: async (
            oid,body,opt
        ) => {
            return await delete(`/customer/testLogin?oid=${oid}`,
                body,
                opt)
        },
        /**
         * testIndex
         * @param {string} oid
         * @param {Model} Model
        */
        options: async (
            oid,body,opt
        ) => {
            return await options(`/customer/testLogin?oid=${oid}`,
                body,
                opt)
        },
        /**
         * testIndex
         * @param {string} oid
         * @param {Model} Model
        */
        trace: async (
            oid,body,opt
        ) => {
            return await trace(`/customer/testLogin?oid=${oid}`,
                body,
                opt)
        },
}
/**
 * Customer Follow Rest
 */
export const customerCustomerfollow = {
        /**
         * getCustomerLastestInfo
         * @param {string} customerid
         * @param {integer} start
         * @param {integer} limit
        */
        post: async (
            customerid,start,limit,opt
        ) => {
            return await post(`/customer/customerfollow?customerid=${customerid}&start=${start}&limit=${limit}`,
                opt)
        },
        /**
         * getCustomerLastestInfo
         * @param {string} customerid
         * @param {integer} start
         * @param {integer} limit
        */
        get: async (
            customerid,start,limit,opt
        ) => {
            return await get(`/customer/customerfollow?customerid=${customerid}&start=${start}&limit=${limit}`,
                opt)
        },
}
/**
 * Customer Rest
 */
export const customerBatchDeleteCustomer = {
        /**
         * batchDeleteCustomer
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/batchDeleteCustomer`,
                body,
                opt)
        },
}
export const customerChangeuser = {
        /**
         * changdeuser
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/changeuser`,
                body,
                opt)
        },
}
export const customerCustomerRank = {
        /**
         * customerRank
         * @param {string} userId
         * @param {string} orgId
         * @param {string} type
        */
        post: async (
            userId,orgId,type,opt
        ) => {
            return await post(`/customer/customerRank?userId=${userId}&orgId=${orgId}&type=${type}`,
                opt)
        },
        /**
         * customerRank
         * @param {string} userId
         * @param {string} orgId
         * @param {string} type
        */
        get: async (
            userId,orgId,type,opt
        ) => {
            return await get(`/customer/customerRank?userId=${userId}&orgId=${orgId}&type=${type}`,
                opt)
        },
}
export const customerCustomerSign = {
        /**
         * customerSign
         * @param {string} netWorkId
         * @param {string} oId
         * @param {string} string
        */
        post: async (
            netWorkId,oId,body,opt
        ) => {
            return await post(`/customer/customerSign?netWorkId=${netWorkId}&oId=${oId}`,
                body,
                opt)
        },
        /**
         * customerSign
         * @param {string} netWorkId
         * @param {string} oId
         * @param {string} string
        */
        get: async (
            netWorkId,oId,body,opt
        ) => {
            return await get(`/customer/customerSign?netWorkId=${netWorkId}&oId=${oId}`,
                body,
                opt)
        },
}
export const customerCustomercreate = {
        /**
         * createCustomer
         * @param {string} clueid
         * @param {string} string
        */
        post: async (
            clueid,body,opt
        ) => {
            return await post(`/customer/customercreate?clueid=${clueid}`,
                body,
                opt)
        },
}
export const customerCustomercreatedt = {
        /**
         * createDTCustomer
         * @param {string} clueid
         * @param {string} string
        */
        post: async (
            clueid,body,opt
        ) => {
            return await post(`/customer/customercreatedt?clueid=${clueid}`,
                body,
                opt)
        },
}
export const customerCustomerdelete = {
        /**
         * Delete
         * @param {string} id
        */
        post: async (
            id,opt
        ) => {
            return await post(`/customer/customerdelete?id=${id}`,
                opt)
        },
}
export const customerCustomerdeleteall = {
        /**
         * DeleteAll
         * @param {string} id
        */
        post: async (
            id,opt
        ) => {
            return await post(`/customer/customerdeleteall?id=${id}`,
                opt)
        },
}
export const customerCustomerfindbyid = {
        /**
         * findCustomerByID
         * @param {string} id
        */
        post: async (
            id,opt
        ) => {
            return await post(`/customer/customerfindbyid?id=${id}`,
                opt)
        },
}
export const customerCustomerfindbyids = {
        /**
         * Querybyids
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/customerfindbyids`,
                body,
                opt)
        },
}
export const customerCustomerlist = {
        /**
         * getCustomerList
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/customerlist`,
                body,
                opt)
        },
}
export const customerCustomerlistcount = {
        /**
         * getCustomerListCount
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/customerlistcount`,
                body,
                opt)
        },
}
export const customerCustomerupdate = {
        /**
         * updateCustomer
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/customerupdate`,
                body,
                opt)
        },
}
export const customerFindAllCustomer = {
        /**
         * findAllCustomer
         * @param {string} word
        */
        get: async (
            word,opt
        ) => {
            return await get(`/customer/findAllCustomer?word=${word}`,
                opt)
        },
}
export const customerGetcustomerbyqixinid = {
        /**
         * getCustomerByQiXinId
         * @param {string} id
        */
        post: async (
            id,opt
        ) => {
            return await post(`/customer/getcustomerbyqixinid?id=${id}`,
                opt)
        },
}
export const customerIsAllotOrg = {
        /**
         * isAllotOrg
         * @param {string} userId
         * @param {string} eid
        */
        post: async (
            userId,eid,opt
        ) => {
            return await post(`/customer/isAllotOrg?userId=${userId}&eid=${eid}`,
                opt)
        },
}
export const customerLoginuser = {
        /**
         * GetLoginUserinfo
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/customer/loginuser`,
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
            return await head(`/customer/loginuser`,
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
            return await post(`/customer/loginuser`,
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
            return await put(`/customer/loginuser`,
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
            return await patch(`/customer/loginuser`,
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
            return await delete(`/customer/loginuser`,
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
            return await options(`/customer/loginuser`,
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
            return await trace(`/customer/loginuser`,
                body,
                opt)
        },
}
export const customerOrgRequest = {
        /**
         * orgRequest
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/orgRequest`,
                body,
                opt)
        },
}
export const customerQixinserachlist = {
        /**
         * qixinSerachList
         * @param {string} keyword
        */
        post: async (
            keyword,opt
        ) => {
            return await post(`/customer/qixinserachlist?keyword=${keyword}`,
                opt)
        },
}
/**
 * Customer View Rest
 */
export const customerCustomerviewRest = {
        /**
         * getCustomerViewInfo
         * @param {string} customerid
        */
        post: async (
            customerid,opt
        ) => {
            return await post(`/customer/customerview/rest?customerid=${customerid}`,
                opt)
        },
        /**
         * getCustomerViewInfo
         * @param {string} customerid
        */
        get: async (
            customerid,opt
        ) => {
            return await get(`/customer/customerview/rest?customerid=${customerid}`,
                opt)
        },
}
export const customerCustomerviewRestContactcount = {
        /**
         * getContactCountbyCustomerId
         * @param {string} customerid
        */
        get: async (
            customerid,opt
        ) => {
            return await get(`/customer/customerview/rest/contactcount?customerid=${customerid}`,
                opt)
        },
}
export const customerCustomerviewRestCustomer = {
        /**
         * getCustomerByID
         * @param {string} customerid
        */
        post: async (
            customerid,opt
        ) => {
            return await post(`/customer/customerview/rest/customer?customerid=${customerid}`,
                opt)
        },
}
export const customerCustomerviewRestLastestinfo = {
        /**
         * getCustomerLastestInfo
         * @param {string} customerid
         * @param {integer} start
         * @param {integer} limit
        */
        post: async (
            customerid,start,limit,opt
        ) => {
            return await post(`/customer/customerview/rest/lastestinfo?customerid=${customerid}&start=${start}&limit=${limit}`,
                opt)
        },
        /**
         * getCustomerLastestInfo
         * @param {string} customerid
         * @param {integer} start
         * @param {integer} limit
        */
        get: async (
            customerid,start,limit,opt
        ) => {
            return await get(`/customer/customerview/rest/lastestinfo?customerid=${customerid}&start=${start}&limit=${limit}`,
                opt)
        },
}
/**
 * Customer Web Rest
 */
export const customerWebChangeuser = {
        /**
         * changeuser
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/web/changeuser`,
                body,
                opt)
        },
}
export const customerWebClearlogins = {
        /**
         * ClearLogin
        */
        get: async (
            opt
        ) => {
            return await get(`/customer/web/clearlogins`,
                opt)
        },
        /**
         * ClearLogin
        */
        head: async (
            opt
        ) => {
            return await head(`/customer/web/clearlogins`,
                opt)
        },
        /**
         * ClearLogin
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/web/clearlogins`,
                opt)
        },
        /**
         * ClearLogin
        */
        put: async (
            opt
        ) => {
            return await put(`/customer/web/clearlogins`,
                opt)
        },
        /**
         * ClearLogin
        */
        patch: async (
            opt
        ) => {
            return await patch(`/customer/web/clearlogins`,
                opt)
        },
        /**
         * ClearLogin
        */
        delete: async (
            opt
        ) => {
            return await delete(`/customer/web/clearlogins`,
                opt)
        },
        /**
         * ClearLogin
        */
        options: async (
            opt
        ) => {
            return await options(`/customer/web/clearlogins`,
                opt)
        },
        /**
         * ClearLogin
        */
        trace: async (
            opt
        ) => {
            return await trace(`/customer/web/clearlogins`,
                opt)
        },
}
export const customerWebCustomerErrorTest = {
        /**
         * exportCustomerDataErrorTest
        */
        get: async (
            opt
        ) => {
            return await get(`/customer/web/customer/errorTest`,
                opt)
        },
        /**
         * exportCustomerDataErrorTest
        */
        head: async (
            opt
        ) => {
            return await head(`/customer/web/customer/errorTest`,
                opt)
        },
        /**
         * exportCustomerDataErrorTest
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/web/customer/errorTest`,
                opt)
        },
        /**
         * exportCustomerDataErrorTest
        */
        put: async (
            opt
        ) => {
            return await put(`/customer/web/customer/errorTest`,
                opt)
        },
        /**
         * exportCustomerDataErrorTest
        */
        patch: async (
            opt
        ) => {
            return await patch(`/customer/web/customer/errorTest`,
                opt)
        },
        /**
         * exportCustomerDataErrorTest
        */
        delete: async (
            opt
        ) => {
            return await delete(`/customer/web/customer/errorTest`,
                opt)
        },
        /**
         * exportCustomerDataErrorTest
        */
        options: async (
            opt
        ) => {
            return await options(`/customer/web/customer/errorTest`,
                opt)
        },
        /**
         * exportCustomerDataErrorTest
        */
        trace: async (
            opt
        ) => {
            return await trace(`/customer/web/customer/errorTest`,
                opt)
        },
}
export const customerWebCustomerGetImportState = {
        /**
         * getImportState
        */
        get: async (
            opt
        ) => {
            return await get(`/customer/web/customer/getImportState`,
                opt)
        },
        /**
         * getImportState
        */
        head: async (
            opt
        ) => {
            return await head(`/customer/web/customer/getImportState`,
                opt)
        },
        /**
         * getImportState
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/web/customer/getImportState`,
                opt)
        },
        /**
         * getImportState
        */
        put: async (
            opt
        ) => {
            return await put(`/customer/web/customer/getImportState`,
                opt)
        },
        /**
         * getImportState
        */
        patch: async (
            opt
        ) => {
            return await patch(`/customer/web/customer/getImportState`,
                opt)
        },
        /**
         * getImportState
        */
        delete: async (
            opt
        ) => {
            return await delete(`/customer/web/customer/getImportState`,
                opt)
        },
        /**
         * getImportState
        */
        options: async (
            opt
        ) => {
            return await options(`/customer/web/customer/getImportState`,
                opt)
        },
        /**
         * getImportState
        */
        trace: async (
            opt
        ) => {
            return await trace(`/customer/web/customer/getImportState`,
                opt)
        },
}
export const customerWebList = {
        /**
         * GetCustomerList
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/customer/web/list`,
                body,
                opt)
        },
        /**
         * GetCustomerList
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/customer/web/list`,
                body,
                opt)
        },
        /**
         * GetCustomerList
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/web/list`,
                body,
                opt)
        },
        /**
         * GetCustomerList
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/customer/web/list`,
                body,
                opt)
        },
        /**
         * GetCustomerList
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/customer/web/list`,
                body,
                opt)
        },
        /**
         * GetCustomerList
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/customer/web/list`,
                body,
                opt)
        },
        /**
         * GetCustomerList
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/customer/web/list`,
                body,
                opt)
        },
        /**
         * GetCustomerList
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/customer/web/list`,
                body,
                opt)
        },
}
/**
 * 客户Web端相关接口
 */
export const customerRestWebV1CustomersChangeuser = {
        /**
         * 变更负责人
         * @param {ChangeCUstomerUserByListEntry} ChangeCUstomerUserByListEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/web/v1/customers/changeuser`,
                body,
                opt)
        },
}
export const customerRestWebV1CustomersClearlogins = {
        /**
         * 清除登录信息 
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/web/v1/customers/clearlogins`,
                opt)
        },
}
export const customerRestWebV1CustomersInnerApiSearchCustomer = {
        /**
         * 查询客户 
         * @param {XDlGetCustomerEntry} XDlGetCustomerEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/web/v1/customers/innerApi/searchCustomer`,
                body,
                opt)
        },
}
export const customerRestWebV1CustomersSearch = {
        /**
         * web端列表 
         * @param {QueryParamEntry} QueryParamEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/web/v1/customers/search`,
                body,
                opt)
        },
}
/**
 * F 7 Customer Rest
 */
export const customerF7customerfind = {
        /**
         * findF7Customer
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/f7customerfind`,
                body,
                opt)
        },
        /**
         * findF7Customer
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/customer/f7customerfind`,
                body,
                opt)
        },
}
export const customerF7customerlist = {
        /**
         * getF7CustomerList
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/f7customerlist`,
                body,
                opt)
        },
        /**
         * getF7CustomerList
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/customer/f7customerlist`,
                body,
                opt)
        },
}
/**
 * 客户内部服务接口
 */
export const customerInnerInitdata = {
        /**
         * initData
         * @param {InitCustomerDataEntry} InitCustomerDataEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/inner/initdata`,
                body,
                opt)
        },
}
/**
 * Part Rest
 */
export const customerPartAddParts = {
        /**
         * addParts
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/part/addParts`,
                body,
                opt)
        },
}
export const customerPartDelParts = {
        /**
         * delParts
         * @param {string} string
        */
        get: async (
            body,opt
        ) => {
            return await get(`/customer/part/delParts`,
                body,
                opt)
        },
        /**
         * delParts
         * @param {string} string
        */
        head: async (
            body,opt
        ) => {
            return await head(`/customer/part/delParts`,
                body,
                opt)
        },
        /**
         * delParts
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/part/delParts`,
                body,
                opt)
        },
        /**
         * delParts
         * @param {string} string
        */
        put: async (
            body,opt
        ) => {
            return await put(`/customer/part/delParts`,
                body,
                opt)
        },
        /**
         * delParts
         * @param {string} string
        */
        patch: async (
            body,opt
        ) => {
            return await patch(`/customer/part/delParts`,
                body,
                opt)
        },
        /**
         * delParts
         * @param {string} string
        */
        delete: async (
            body,opt
        ) => {
            return await delete(`/customer/part/delParts`,
                body,
                opt)
        },
        /**
         * delParts
         * @param {string} string
        */
        options: async (
            body,opt
        ) => {
            return await options(`/customer/part/delParts`,
                body,
                opt)
        },
        /**
         * delParts
         * @param {string} string
        */
        trace: async (
            body,opt
        ) => {
            return await trace(`/customer/part/delParts`,
                body,
                opt)
        },
}
/**
 * Provide Id Rest
 */
export const customerFindGetAppInfo = {
        /**
         * getAppInfo
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/find/getAppInfo`,
                opt)
        },
}
/**
 * 自动化相关接口
 */
export const customerRestAutorunActivaterecycle = {
        /**
         * activaterecycle
         * @param {string} eid
        */
        post: async (
            eid,opt
        ) => {
            return await post(`/customer/rest/autorun/activaterecycle?eid=${eid}`,
                opt)
        },
        /**
         * activaterecycle
         * @param {string} eid
        */
        get: async (
            eid,opt
        ) => {
            return await get(`/customer/rest/autorun/activaterecycle?eid=${eid}`,
                opt)
        },
}
export const customerRestAutorunActivateremind = {
        /**
         * activateremind
         * @param {string} eid
        */
        post: async (
            eid,opt
        ) => {
            return await post(`/customer/rest/autorun/activateremind?eid=${eid}`,
                opt)
        },
        /**
         * activateremind
         * @param {string} eid
        */
        get: async (
            eid,opt
        ) => {
            return await get(`/customer/rest/autorun/activateremind?eid=${eid}`,
                opt)
        },
}
export const customerRestAutorunClear = {
        /**
         * 清除数据 
         * @param {string} eid
        */
        post: async (
            eid,opt
        ) => {
            return await post(`/customer/rest/autorun/clear?eid=${eid}`,
                opt)
        },
}
export const customerRestAutorunCustomerlibrecycle = {
        /**
         * customerlibrecycle
         * @param {string} eid
        */
        post: async (
            eid,opt
        ) => {
            return await post(`/customer/rest/autorun/customerlibrecycle?eid=${eid}`,
                opt)
        },
        /**
         * customerlibrecycle
         * @param {string} eid
        */
        get: async (
            eid,opt
        ) => {
            return await get(`/customer/rest/autorun/customerlibrecycle?eid=${eid}`,
                opt)
        },
}
export const customerRestAutorunCustomerlibremind = {
        /**
         * customerlibremind
         * @param {string} eid
        */
        post: async (
            eid,opt
        ) => {
            return await post(`/customer/rest/autorun/customerlibremind?eid=${eid}`,
                opt)
        },
        /**
         * customerlibremind
         * @param {string} eid
        */
        get: async (
            eid,opt
        ) => {
            return await get(`/customer/rest/autorun/customerlibremind?eid=${eid}`,
                opt)
        },
}
export const customerRestAutorunTest = {
        /**
         * test
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/autorun/test`,
                opt)
        },
        /**
         * test
        */
        get: async (
            opt
        ) => {
            return await get(`/customer/rest/autorun/test`,
                opt)
        },
}
/**
 * 客户内部服务接口
 */
export const customerRestInnerCustomersAddByCustomerName = {
        /**
         * 通过客户名称新增客户
         * @param {CustomerNameApiEntry} CustomerNameApiEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/inner/customers/addByCustomerName`,
                body,
                opt)
        },
}
export const customerRestInnerCustomersAddOrUpdateForSync = {
        /**
         * 通过同步方式第三方系统创建客户信息
         * @param {CustomerContactOppDTEntry} CustomerContactOppDTEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/inner/customers/addOrUpdateForSync`,
                body,
                opt)
        },
}
export const customerRestInnerCustomersApplyFollow = {
        /**
         * 申请关注客户
         * @param {CustomerFollowApiEntry} CustomerFollowApiEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/inner/customers/applyFollow`,
                body,
                opt)
        },
}
export const customerRestInnerCustomersCheckRight = {
        /**
         * 用户是否有指定客户的权限
         * @param {CheckRightApiEntry} CheckRightApiEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/inner/customers/checkRight`,
                body,
                opt)
        },
}
export const customerRestInnerCustomersClearpermission = {
        /**
         * 在同步数据，如k3cloud等要清理相应的数据缓存
         * @param {ClearPermissionCache} ClearPermissionCache
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/inner/customers/clearpermission`,
                body,
                opt)
        },
}
export const customerRestInnerCustomersGetByCustomerName = {
        /**
         * 根据客户名称获取客户信息
         * @param {CustomerEntry} CustomerEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/inner/customers/getByCustomerName`,
                body,
                opt)
        },
}
export const customerRestInnerCustomersGetBySourceTypeAndId = {
        /**
         * 根据数据来源类型与数据来源标识获取客户信息
         * @param {CustomerEntry} CustomerEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/inner/customers/getBySourceTypeAndId`,
                body,
                opt)
        },
}
export const customerRestInnerCustomersGetNoOrgUrl = {
        /**
         * 获取无组织用户跳转链接
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/inner/customers/getNoOrgUrl`,
                opt)
        },
}
export const customerRestInnerCustomersList = {
        /**
         * 获取客户列表信息
         * @param {CustomerListApiEntry} CustomerListApiEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/inner/customers/list`,
                body,
                opt)
        },
}
export const customerRestInnerCustomersSearch = {
        /**
         * 使用关键字搜索指定工作圈的客户
         * @param {CustomerSearchApiEntry} CustomerSearchApiEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/inner/customers/search`,
                body,
                opt)
        },
}
export const customerRestInnerCustomersSearchByName = {
        /**
         * 使用关键字搜索指定工作圈的客户
         * @param {CustomerSearchV2ApiEntry} CustomerSearchV2ApiEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/inner/customers/searchByName`,
                body,
                opt)
        },
}
export const customerRestInnerCustomersSearchByNameAndEidUserId = {
        /**
         * 使用关键字搜索指定工作圈的客户
         * @param {CustomerSearchV2ApiEntry} CustomerSearchV2ApiEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/inner/customers/searchByNameAndEidUserId`,
                body,
                opt)
        },
}
/**
 * 客户搜索接口
 */
export const customerRestV1SearchApp = {
        /**
         * app search
         * @param {SearchEntry} SearchEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/search/app`,
                body,
                opt)
        },
}
export const customerRestV1SearchQueryByName = {
        /**
         * 查询客户信息，包括公海客户、个人客户以及启信宝客户（仅显示5条，新增客户时查重用）
         * @param {string} keyword
         * @param {string} searchRange
        */
        get: async (
            keyword,searchRange,opt
        ) => {
            return await get(`/customer/rest/v1/search/queryByName?keyword=${keyword}&searchRange=${searchRange}`,
                opt)
        },
}
export const customerRestV1SearchWeb = {
        /**
         * web search
         * @param {SearchEntry} SearchEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/search/web`,
                body,
                opt)
        },
}
/**
 * 基础信息接口
 */
export const customerRestV1Appinfo = {
        /**
         * 获取轻应用信息
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/appinfo`,
                opt)
        },
}
export const customerRestV1ApplyForUsing = {
        /**
         * 向管理员申请开通云之家crm付费
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/applyForUsing`,
                body,
                opt)
        },
}
export const customerRestV1CardsRead = {
        /**
         * 识别名片
         * @param {File} uploadfile
        */
        post: async (
            uploadfile,opt
        ) => {
            return await post(`/customer/rest/v1/cards/read?uploadfile=${uploadfile}`,
                opt)
        },
}
export const customerRestV1IsAllotOrg = {
        /**
         * 判断是否分配部门
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/isAllotOrg`,
                opt)
        },
}
export const customerRestV1Lastestinfos = {
        /**
         * 动态内容请求接口
         * @param {GetLatestInfoEntry} GetLatestInfoEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/lastestinfos`,
                body,
                opt)
        },
}
export const customerRestV1Orgrequest = {
        /**
         * 发送申请加入组织请求信息
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/orgrequest`,
                opt)
        },
}
export const customerRestV1QixinGet = {
        /**
         * 通过启信宝ID查询对应企业信息 并组装客户实体
         * @param {QixinGetEntry} QixinGetEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/qixin/get`,
                body,
                opt)
        },
}
export const customerRestV1QixinSerachlist = {
        /**
         * 通过启信宝查询对应企业信息
         * @param {QiXinSearchListEntry} QiXinSearchListEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/qixin/serachlist`,
                body,
                opt)
        },
}
export const customerRestV1RightsUserall = {
        /**
         * 获取用户所有权限
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/rights/userall`,
                opt)
        },
}
export const customerRestV1Test = {
        /**
         * test
         * @param {File} uploadfile
        */
        post: async (
            uploadfile,opt
        ) => {
            return await post(`/customer/rest/v1/test?uploadfile=${uploadfile}`,
                opt)
        },
}
/**
 * 联系人相关接口
 */
export const customerRestV1ContactsAdd = {
        /**
         * 创建联系人
         * @param {CRMContactEntry} CRMContactEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/contacts/add`,
                body,
                opt)
        },
}
export const customerRestV1ContactsAddBussiness = {
        /**
         * 创建联系人并添加为商务伙伴
         * @param {CRMContactEntry} CRMContactEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/contacts/add/bussiness`,
                body,
                opt)
        },
}
export const customerRestV1ContactsChangeuser = {
        /**
         * 更换联系人负责人
         * @param {ChangeContactUserEntry} ChangeContactUserEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/contacts/changeuser`,
                body,
                opt)
        },
}
export const customerRestV1ContactsDelete = {
        /**
         * 删除联系人
         * @param {DeleteEntry} DeleteEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/contacts/delete`,
                body,
                opt)
        },
}
export const customerRestV1ContactsGet = {
        /**
         * 联系人详情
         * @param {GetEntry} GetEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/contacts/get`,
                body,
                opt)
        },
}
export const customerRestV1ContactsGetBycustid = {
        /**
         * getContactByCustomerID
         * @param {GetCRMContactByCustomerIDEntry} GetCRMContactByCustomerIDEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/contacts/get/bycustid`,
                body,
                opt)
        },
}
export const customerRestV1ContactsGetByextid = {
        /**
         * 根据extId获取联系人详情
         * @param {GetCRMContactByExtIdEntry} GetCRMContactByExtIdEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/contacts/get/byextid`,
                body,
                opt)
        },
}
export const customerRestV1ContactsUpdate = {
        /**
         * 更新联系人
         * @param {CRMContactEntry} CRMContactEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/contacts/update`,
                body,
                opt)
        },
}
export const customerRestV1ContactsVisitbycallphone = {
        /**
         * 更换联系人负责人
         * @param {IdEntry} IdEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/contacts/visitbycallphone`,
                body,
                opt)
        },
}
/**
 * 公海客户导入接口
 */
export const customerRestV1CustomerlibraryCustomersExcel = {
        /**
         * 导出模板
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/excel`,
                opt)
        },
        /**
         * 导出模板
        */
        get: async (
            opt
        ) => {
            return await get(`/customer/rest/v1/customerlibrary/customers/excel`,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersExcelErrorlistGet = {
        /**
         * 导出错误列表
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/excel/errorlist/get`,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersExcelGet = {
        /**
         * 导出表格
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/excel/get`,
                opt)
        },
        /**
         * 导出表格
        */
        get: async (
            opt
        ) => {
            return await get(`/customer/rest/v1/customerlibrary/customers/excel/get`,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersExcelPut = {
        /**
         * 导入模板
         * @param {File} file
         * @param {string} libID
         * @param {integer} integer
        */
        post: async (
            file,libID,body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/excel/put?file=${file}&libID=${libID}`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersExcelState = {
        /**
         * 获取导入状态
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/excel/state`,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersExcelTemplate = {
        /**
         * 导出模板
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/excel/template`,
                opt)
        },
        /**
         * 导出模板
        */
        get: async (
            opt
        ) => {
            return await get(`/customer/rest/v1/customerlibrary/customers/excel/template`,
                opt)
        },
}
/**
 * 客户关注申请相关接口
 */
export const customerRestV1CustomersAdd = {
        /**
         * 创建客户&#x2F;线索转客户
         * @param {string} clueid
         * @param {CustomerContactOppDTEntry} CustomerContactOppDTEntry
        */
        post: async (
            clueid,body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/add?clueid=${clueid}`,
                body,
                opt)
        },
}
export const customerRestV1CustomersBatchDelete = {
        /**
         * 批量删除客户
         * @param {IdsEntry} IdsEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/batchDelete`,
                body,
                opt)
        },
}
export const customerRestV1CustomersChangeuser = {
        /**
         * 变更负责人 &#x2F;changeuser
         * @param {ChangeCustomerUserEntry} ChangeCustomerUserEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/changeuser`,
                body,
                opt)
        },
}
export const customerRestV1CustomersChargeuserId = {
        /**
         * 根据客户id获取责任人信息
         * @param {GetChargeUserByIdEntry} GetChargeUserByIdEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/chargeuser/id`,
                body,
                opt)
        },
}
export const customerRestV1CustomersDelete = {
        /**
         * 删除客户 
         * @param {DeleteEntry} DeleteEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/delete`,
                body,
                opt)
        },
}
export const customerRestV1CustomersFollowApplyApplyFollow = {
        /**
         * 申请关注客户
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/followApply/applyFollow`,
                body,
                opt)
        },
}
export const customerRestV1CustomersFollowApplyApproval = {
        /**
         * 同意关注申请
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/followApply/approval`,
                body,
                opt)
        },
}
export const customerRestV1CustomersFollowApplyGet = {
        /**
         * 获取关注申请信息
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/followApply/get`,
                body,
                opt)
        },
}
export const customerRestV1CustomersGet = {
        /**
         * 根据ID查询客户  &#x2F;customerfindbyid
         * @param {GetEntry} GetEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/get`,
                body,
                opt)
        },
}
export const customerRestV1CustomersSearch = {
        /**
         * 查询我的客户接口 &#x2F;customerlist
         * @param {QueryParamEntry} QueryParamEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/search`,
                body,
                opt)
        },
}
export const customerRestV1CustomersSearchCount = {
        /**
         * 客户查询结果数量接口 &#x2F;customerlistcount
         * @param {QueryParamEntry} QueryParamEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/search/count`,
                body,
                opt)
        },
}
export const customerRestV1CustomersUpdate = {
        /**
         * 更新客户
         * @param {CustomerEntry} CustomerEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/update`,
                body,
                opt)
        },
}
/**
 * 客户跟进接口
 */
export const customerRestV1CustomersExcel = {
        /**
         * 导出表格
         * @param {string} searchvalue
        */
        post: async (
            searchvalue,opt
        ) => {
            return await post(`/customer/rest/v1/customers/excel?searchvalue=${searchvalue}`,
                opt)
        },
        /**
         * 导出表格
         * @param {string} searchvalue
        */
        get: async (
            searchvalue,opt
        ) => {
            return await get(`/customer/rest/v1/customers/excel?searchvalue=${searchvalue}`,
                opt)
        },
}
export const customerRestV1CustomersExcelErrorlistGet = {
        /**
         * 导出错误列表
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/customers/excel/errorlist/get`,
                opt)
        },
}
export const customerRestV1CustomersExcelGet = {
        /**
         * 导出表格
         * @param {string} searchvalue
        */
        post: async (
            searchvalue,opt
        ) => {
            return await post(`/customer/rest/v1/customers/excel/get?searchvalue=${searchvalue}`,
                opt)
        },
        /**
         * 导出表格
         * @param {string} searchvalue
        */
        get: async (
            searchvalue,opt
        ) => {
            return await get(`/customer/rest/v1/customers/excel/get?searchvalue=${searchvalue}`,
                opt)
        },
}
export const customerRestV1CustomersExcelPut = {
        /**
         * 导入模板
         * @param {File} file
         * @param {string} strategy
         * @param {integer} integer
        */
        post: async (
            file,strategy,body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/excel/put?file=${file}&strategy=${strategy}`,
                body,
                opt)
        },
}
export const customerRestV1CustomersExcelState = {
        /**
         * 获取导入状态
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/customers/excel/state`,
                opt)
        },
}
export const customerRestV1CustomersExcelTemplate = {
        /**
         * 导出模板
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/customers/excel/template`,
                opt)
        },
        /**
         * 导出模板
        */
        get: async (
            opt
        ) => {
            return await get(`/customer/rest/v1/customers/excel/template`,
                opt)
        },
}
/**
 * f7选择相关接口
 */
export const customerRestV1CustomersF7Search = {
        /**
         * 客户选择列表数据
         * @param {QueryParamEntry} QueryParamEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/f7/search`,
                body,
                opt)
        },
}
/**
 * 客户跟进接口
 */
export const customerRestV1CustomersFollows = {
        /**
         * 客户跟进列表
         * @param {GetCustomerLatestInfoEntry} GetCustomerLatestInfoEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/follows`,
                body,
                opt)
        },
}
export const customerRestV1CustomersFollowsList = {
        /**
         * 客户跟进列表
         * @param {GetCustomerLatestInfoEntry} GetCustomerLatestInfoEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/follows/list`,
                body,
                opt)
        },
}
/**
 * 客户其他相关接口
 */
export const customerRestV1CustomersOtherWxextfriendAdd = {
        /**
         * 微信外部好友创建客户 
         * @param {CustomerContactOppDTEntry} CustomerContactOppDTEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/other/wxextfriend/add`,
                body,
                opt)
        },
}
export const customerRestV1CustomersOtherWxextfriendSendinviteextfriendnews = {
        /**
         * 微信外部好友创建客户 
         * @param {SendInviteExtFriendNewsEntry} SendInviteExtFriendNewsEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/other/wxextfriend/sendinviteextfriendnews`,
                body,
                opt)
        },
}
/**
 * 客户视图相关接口
 */
export const customerRestV1CustomersView = {
        /**
         * 客户视图数据 
         * @param {CustomerViewEntry} CustomerViewEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/view`,
                body,
                opt)
        },
}
export const customerRestV1CustomersViewApplyview = {
        /**
         * 没有权限时获取，客户申请页面视图
         * @param {CustomerViewEntry} CustomerViewEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/view/applyview`,
                body,
                opt)
        },
}
export const customerRestV1CustomersViewCountInfo = {
        /**
         * 获取客户相关统计信息
         * @param {CustomerViewEntry} CustomerViewEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/view/countInfo`,
                body,
                opt)
        },
}
export const customerRestV1CustomersViewDetail = {
        /**
         * 客户视图数据详情
         * @param {CustomerViewEntry} CustomerViewEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/view/detail`,
                body,
                opt)
        },
}
export const customerRestV1CustomersViewLastestinfos = {
        /**
         * 客户动态请求接口
         * @param {GetCustomerLatestInfoEntry} GetCustomerLatestInfoEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/view/lastestinfos`,
                body,
                opt)
        },
}
export const customerRestV1CustomersViewLatestinfos = {
        /**
         * 新客户动态请求接口
         * @param {GetCustomerLatestInfoEntry} GetCustomerLatestInfoEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/view/latestinfos`,
                body,
                opt)
        },
}
export const customerRestV1CustomersViewSimple = {
        /**
         * 客户简单信息，无权限
         * @param {CustomerViewEntry} CustomerViewEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customers/view/simple`,
                body,
                opt)
        },
}
/**
 * 协作团队相关接口
 */
export const customerRestV1PartsAdd = {
        /**
         * 添加参与人
         * @param {AddPartEntry} AddPartEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/parts/add`,
                body,
                opt)
        },
}
export const customerRestV1PartsAddFollower = {
        /**
         * 添加关注者
         * @param {FollowEntry} FollowEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/parts/addFollower`,
                body,
                opt)
        },
}
export const customerRestV1PartsCover = {
        /**
         * 覆盖参与者
         * @param {PartEntry} PartEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/parts/cover`,
                body,
                opt)
        },
}
export const customerRestV1PartsDelFollower = {
        /**
         * 删除关注者
         * @param {FollowEntry} FollowEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/parts/delFollower`,
                body,
                opt)
        },
}
export const customerRestV1PartsDelete = {
        /**
         * delParts
         * @param {DeletePartEntry} DeletePartEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/parts/delete`,
                body,
                opt)
        },
}
/**
 * 对内服务接口
 */
export const customerServiceV1BillconvertsAdd = {
        /**
         * 添加单据转换信息
         * @param {AddBillConvertEntry} AddBillConvertEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/service/v1/billconverts/add`,
                body,
                opt)
        },
}
export const customerServiceV1CustomersQuery = {
        /**
         * 查询客户
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/service/v1/customers/query`,
                body,
                opt)
        },
}
export const customerServiceV1LastinfosAdd = {
        /**
         * 新增动态信息
         * @param {AddLastInfoEntry} AddLastInfoEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/service/v1/lastinfos/add`,
                body,
                opt)
        },
}
export const customerServiceV1LastinfosGet = {
        /**
         * 获取动态信息
         * @param {GetLatestInfoEntry} GetLatestInfoEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/service/v1/lastinfos/get`,
                body,
                opt)
        },
}
/**
 * Statistics Rest
 */
export const customerAddPlan = {
        /**
         * addPlan
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/addPlan`,
                body,
                opt)
        },
}
export const customerClerkVisit = {
        /**
         * clerkVisit
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/clerkVisit`,
                body,
                opt)
        },
}
export const customerCustomerVisit = {
        /**
         * customerVisit
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/customerVisit`,
                body,
                opt)
        },
}
export const customerCustomerVisitCount = {
        /**
         * customerVisitCount
         * @param {string} string
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/customerVisitCount`,
                body,
                opt)
        },
}
/**
 * 商务伙伴相关接口
 */
export const customerV1BusinesspartnerAuthautocode = {
        /**
         * 验证验证码加为商务伙伴
         * @param {AuthAuthCodeReq} AuthAuthCodeReq
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/v1/businesspartner/authautocode`,
                body,
                opt)
        },
}
export const customerV1BusinesspartnerEntry = {
        /**
         * 商务伙伴客户端入口
         * @param {EntryReq} EntryReq
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/v1/businesspartner/entry`,
                body,
                opt)
        },
}
export const customerV1BusinesspartnerInviterrinfo = {
        /**
         * 获取邀请人详细信息
         * @param {InviterInfoReq} InviterInfoReq
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/v1/businesspartner/inviterrinfo`,
                body,
                opt)
        },
}
export const customerV1BusinesspartnerObtainauthcode = {
        /**
         * 获取手机验证码
         * @param {ObtainAuthCodeReq} ObtainAuthCodeReq
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/v1/businesspartner/obtainauthcode`,
                body,
                opt)
        },
}
/**
 * 会话收藏接口
 */
export const customerRestV1ChatAddChatGroupCollection = {
        /**
         * 收藏会话
         * @param {string} groupId
         * @param {string} billId
         * @param {string} billType
         * @param {string} eId
         * @param {string} content
         * @param {string} openId
        */
        post: async (
            groupId,billId,billType,eId,content,openId,opt
        ) => {
            return await post(`/customer/rest/v1/chat/addChatGroupCollection?groupId=${groupId}&billId=${billId}&billType=${billType}&eId=${eId}&content=${content}&openId=${openId}`,
                opt)
        },
}
export const customerRestV1ChatCancelChatGroupCollection = {
        /**
         * 取消收藏会话
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/chat/cancelChatGroupCollection`,
                body,
                opt)
        },
}
export const customerRestV1ChatGetChatGroupCollections = {
        /**
         * 查询收藏会话
         * @param {User} User
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/chat/getChatGroupCollections`,
                body,
                opt)
        },
}
/**
 * 公海客户数据相关接口
 */
export const customerRestV1CustomerlibraryCustomersAdd = {
        /**
         * 新增客户
         * @param {CustomerContactOppDTEntry} CustomerContactOppDTEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/add`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersDistribute = {
        /**
         * 分配客户
         * @param {DistributeLibraryCustomerEntry} DistributeLibraryCustomerEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/distribute`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersDistributeByids = {
        /**
         * 分配客户
         * @param {DistributeLibraryCustomerByIdsEntry} DistributeLibraryCustomerByIdsEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/distribute/byids`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersDole = {
        /**
         * 领取客户
         * @param {ActionEntry} ActionEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/dole`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersDoleByids = {
        /**
         * 领取客户
         * @param {IdsEntry} IdsEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/dole/byids`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersGetremainingcount = {
        /**
         * 获取对应用户公海剩余领取数
         * @param {ActionEntry} ActionEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/getremainingcount`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersPhoneSearch = {
        /**
         * app端客户列表
         * @param {QueryLibraryPhoneEntry} QueryLibraryPhoneEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/phone/search`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersRecycle = {
        /**
         * 收回客户
         * @param {ActionEntry} ActionEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/recycle`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersRecycleByids = {
        /**
         * 收回客户
         * @param {IdsEntry} IdsEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/recycle/byids`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersRecycle2lib = {
        /**
         * 收回客户到对应公海
         * @param {RecycleToCustomerLibEntry} RecycleToCustomerLibEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/recycle2lib`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersRecycle2libByids = {
        /**
         * 收回客户到对应公海
         * @param {RecycleToCustomerLibByIDsEntry} RecycleToCustomerLibByIDsEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/recycle2lib/byids`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersReturn = {
        /**
         * 退回客户
         * @param {ActionEntry} ActionEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/return`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersReturnByids = {
        /**
         * 退回客户
         * @param {IdsEntry} IdsEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/return/byids`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersSearch = {
        /**
         * 客户列表
         * @param {QueryLibraryCustomerEntry} QueryLibraryCustomerEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/search`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersTransfer = {
        /**
         * 转移客户
         * @param {TransferLibraryCustomerEntry} TransferLibraryCustomerEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/transfer`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersTransferByids = {
        /**
         * 转移客户
         * @param {TransferLibraryCustomerByIdsEntry} TransferLibraryCustomerByIdsEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/transfer/byids`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibraryCustomersTransferallcustomer = {
        /**
         * 获取当前用户公海池列表
         * @param {TransferAllCustomerEntry} TransferAllCustomerEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrary/customers/transferallcustomer`,
                body,
                opt)
        },
}
/**
 * 客户apiv1版本
 */
export const customerApiV1Add = {
        /**
         * add
         * @param {AddCustomerApi} AddCustomerApi
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/api/v1/add`,
                body,
                opt)
        },
}
export const customerApiV1Changeuser = {
        /**
         * changdeuser
         * @param {ChangeUserJsonModelApi} ChangeUserJsonModelApi
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/api/v1/changeuser`,
                body,
                opt)
        },
}
export const customerApiV1Get = {
        /**
         * get
         * @param {FindUserJsonModelApi} FindUserJsonModelApi
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/api/v1/get`,
                body,
                opt)
        },
}
export const customerApiV1Test = {
        /**
         * test
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/api/v1/test`,
                opt)
        },
}
/**
 * 客户公海接口
 */
export const customerRestV1CustomerlibrarysAdd = {
        /**
         * 新增公海池
         * @param {AddCustomerLibraryEntry} AddCustomerLibraryEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrarys/add`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibrarysDelete = {
        /**
         * 删除公海
         * @param {ActionEntry} ActionEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrarys/delete`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibrarysInfo = {
        /**
         * 公海详情
         * @param {ActionEntry} ActionEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrarys/info`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibrarysSearch = {
        /**
         * 公海池列表
         * @param {SearchCustomerLibraryEntry} SearchCustomerLibraryEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrarys/search`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibrarysSetrules = {
        /**
         * 设置公海规则
         * @param {SetCustomerLibraryRulesEntry} SetCustomerLibraryRulesEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrarys/setrules`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibrarysSetusers = {
        /**
         * 设置公海人员
         * @param {SetCustomerLibraryUsersEntry} SetCustomerLibraryUsersEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrarys/setusers`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibrarysTransfer = {
        /**
         * 移交公海
         * @param {TransferCustoerLibraryEntry} TransferCustoerLibraryEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrarys/transfer`,
                body,
                opt)
        },
}
export const customerRestV1CustomerlibrarysUserlist = {
        /**
         * 获取当前用户公海池列表
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/rest/v1/customerlibrarys/userlist`,
                opt)
        },
}
/**
 * 激活规则接口
 */
export const customerActivaterulesAdd = {
        /**
         * add
         * @param {ActivateRuleEntry} ActivateRuleEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/activaterules/add`,
                body,
                opt)
        },
}
export const customerActivaterulesDetail = {
        /**
         * 激活规则详情
         * @param {ActionEntry} ActionEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/activaterules/detail`,
                body,
                opt)
        },
}
export const customerActivaterulesDisable = {
        /**
         * 停用规则接口
         * @param {ActionEntry} ActionEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/activaterules/disable`,
                body,
                opt)
        },
}
export const customerActivaterulesEditData = {
        /**
         * 页面数据包
        */
        post: async (
            opt
        ) => {
            return await post(`/customer/activaterules/edit/data`,
                opt)
        },
}
export const customerActivaterulesEnable = {
        /**
         * 启用规则接口
         * @param {ActionEntry} ActionEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/activaterules/enable`,
                body,
                opt)
        },
}
export const customerActivaterulesSearch = {
        /**
         * 激活规则列表数据
         * @param {QueryActivateRuleEntry} QueryActivateRuleEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/activaterules/search`,
                body,
                opt)
        },
}
export const customerActivaterulesUpdate = {
        /**
         * update
         * @param {UpdateActiveRuleEntry} UpdateActiveRuleEntry
        */
        post: async (
            body,opt
        ) => {
            return await post(`/customer/activaterules/update`,
                body,
                opt)
        },
}
