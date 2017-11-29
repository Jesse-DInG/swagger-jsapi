
export class ApiQueryReq {
    /**
    * 
    * @param {string} phone
    * @param {string} startDate
    * @param {string} endDate
    * @param {number} pageNum
    * @param {number} pageSize
    * @param {string} openId
    * @param {string} eid
    * @param {string} status
    * @param {string} appId
    * @param {string} key
    * @param {string} yzjOpenId
    */
    constructor (
        phone,
        startDate,
        endDate,
        pageNum,
        pageSize,
        openId,
        eid,
        status,
        appId,
        key,
        yzjOpenId,
    ) {
        this.phone = phone
        this.startDate = startDate
        this.endDate = endDate
        this.pageNum = pageNum
        this.pageSize = pageSize
        this.openId = openId
        this.eid = eid
        this.status = status
        this.appId = appId
        this.key = key
        this.yzjOpenId = yzjOpenId
    }
}
export class IdEntry {
    /**
    * 
    * @param {string} id
    */
    constructor (
        id,
    ) {
        this.id = id
    }
}
export class SearchEntry {
    /**
    * 
    * @param {string} filterType
    * @param {string} keyword
    * @param {string} filterSchemeId
    * @param {number} start
    * @param {number} limit
    * @param {Array} query
    * @param {string} sortBy
    * @param {ColumnFilter} columnFilter
    * @param {Array} queryList
    * @param {User} loginUser
    */
    constructor (
        filterType,
        keyword,
        filterSchemeId,
        start,
        limit,
        query,
        sortBy,
        columnFilter,
        queryList,
        loginUser,
    ) {
        this.filterType = filterType
        this.keyword = keyword
        this.filterSchemeId = filterSchemeId
        this.start = start
        this.limit = limit
        this.query = query
        this.sortBy = sortBy
        this.columnFilter = columnFilter
        this.queryList = queryList
        this.loginUser = loginUser
    }
}
export class ChangeCUstomerUserByListEntry {
    /**
    * 
    * @param {Array} customers
    * @param {string} oid
    */
    constructor (
        customers,
        oid,
    ) {
        this.customers = customers
        this.oid = oid
    }
}
export class XDlGetCustomerEntry {
    /**
    * 
    * @param {string} findType
    * @param {string} keyWords
    * @param {number} queryType
    * @param {string} classType
    * @param {string} orderBy
    * @param {number} start
    * @param {number} limit
    * @param {number} page_index
    * @param {string} queryOpenId
    * @param {string} eid
    * @param {string} userId
    * @param {string} customerName
    * @param {string} deptName
    * @param {string} userName
    * @param {string} libID
    * @param {number} page_Index
    */
    constructor (
        findType,
        keyWords,
        queryType,
        classType,
        orderBy,
        start,
        limit,
        page_index,
        queryOpenId,
        eid,
        userId,
        customerName,
        deptName,
        userName,
        libID,
        page_Index,
    ) {
        this.findType = findType
        this.keyWords = keyWords
        this.queryType = queryType
        this.classType = classType
        this.orderBy = orderBy
        this.start = start
        this.limit = limit
        this.page_index = page_index
        this.queryOpenId = queryOpenId
        this.eid = eid
        this.userId = userId
        this.customerName = customerName
        this.deptName = deptName
        this.userName = userName
        this.libID = libID
        this.page_Index = page_Index
    }
}
export class QueryParamEntry {
    /**
    * 
    * @param {string} findType
    * @param {string} keyWords
    * @param {number} queryType
    * @param {string} classType
    * @param {string} orderBy
    * @param {number} start
    * @param {number} limit
    * @param {number} page_index
    * @param {string} queryOpenId
    * @param {string} customerName
    * @param {string} deptName
    * @param {string} userName
    * @param {string} libID
    * @param {number} page_Index
    */
    constructor (
        findType,
        keyWords,
        queryType,
        classType,
        orderBy,
        start,
        limit,
        page_index,
        queryOpenId,
        customerName,
        deptName,
        userName,
        libID,
        page_Index,
    ) {
        this.findType = findType
        this.keyWords = keyWords
        this.queryType = queryType
        this.classType = classType
        this.orderBy = orderBy
        this.start = start
        this.limit = limit
        this.page_index = page_index
        this.queryOpenId = queryOpenId
        this.customerName = customerName
        this.deptName = deptName
        this.userName = userName
        this.libID = libID
        this.page_Index = page_Index
    }
}
export class InitCustomerDataEntry {
    /**
    * 
    * @param {string} eid
    */
    constructor (
        eid,
    ) {
        this.eid = eid
    }
}
export class CustomerNameApiEntry {
    /**
    * 
    * @param {string} id
    * @param {string} customerName
    * @param {string} customerUserOid
    */
    constructor (
        id,
        customerName,
        customerUserOid,
    ) {
        this.id = id
        this.customerName = customerName
        this.customerUserOid = customerUserOid
    }
}
export class CustomerContactOppDTEntry {
    /**
    * 
    * @param {CustomerEntry} customer
    * @param {Array} contacts
    * @param {OppAddEntry} opportunity
    */
    constructor (
        customer,
        contacts,
        opportunity,
    ) {
        this.customer = customer
        this.contacts = contacts
        this.opportunity = opportunity
    }
}
export class CustomerFollowApiEntry {
    /**
    * 
    * @param {string} eid
    * @param {string} applyFollowOid
    * @param {string} customerId
    * @param {string} applyType
    */
    constructor (
        eid,
        applyFollowOid,
        customerId,
        applyType,
    ) {
        this.eid = eid
        this.applyFollowOid = applyFollowOid
        this.customerId = customerId
        this.applyType = applyType
    }
}
export class CheckRightApiEntry {
    /**
    * 
    * @param {Array} customerIds
    * @param {string} oid
    */
    constructor (
        customerIds,
        oid,
    ) {
        this.customerIds = customerIds
        this.oid = oid
    }
}
export class ClearPermissionCache {
    /**
    * 
    * @param {string} eid
    * @param {Array} longOrgIds
    * @param {Array} orgIds
    * @param {Array} personnals
    */
    constructor (
        eid,
        longOrgIds,
        orgIds,
        personnals,
    ) {
        this.eid = eid
        this.longOrgIds = longOrgIds
        this.orgIds = orgIds
        this.personnals = personnals
    }
}
export class CustomerEntry {
    /**
    * 
    * @param {string} id
    * @param {string} customerName
    * @param {string} customerAddress
    * @param {string} customerUserOid
    * @param {string} remarks
    * @param {Position} position
    * @param {string} province
    * @param {string} city
    * @param {string} district
    * @param {string} website
    * @param {string} level
    * @param {string} status
    * @param {string} source
    * @param {string} version
    * @param {string} smartCustomerID
    * @param {object} extDatas
    * @param {string} classTypeID
    * @param {string} libID
    * @param {string} sourceType
    * @param {string} k3CloudId
    * @param {string} eid
    * @param {User} customerUser
    * @param {User} creator
    * @param {boolean} checkExtDatas
    * @param {boolean} approvalFlag
    */
    constructor (
        id,
        customerName,
        customerAddress,
        customerUserOid,
        remarks,
        position,
        province,
        city,
        district,
        website,
        level,
        status,
        source,
        version,
        smartCustomerID,
        extDatas,
        classTypeID,
        libID,
        sourceType,
        k3CloudId,
        eid,
        customerUser,
        creator,
        checkExtDatas,
        approvalFlag,
    ) {
        this.id = id
        this.customerName = customerName
        this.customerAddress = customerAddress
        this.customerUserOid = customerUserOid
        this.remarks = remarks
        this.position = position
        this.province = province
        this.city = city
        this.district = district
        this.website = website
        this.level = level
        this.status = status
        this.source = source
        this.version = version
        this.smartCustomerID = smartCustomerID
        this.extDatas = extDatas
        this.classTypeID = classTypeID
        this.libID = libID
        this.sourceType = sourceType
        this.k3CloudId = k3CloudId
        this.eid = eid
        this.customerUser = customerUser
        this.creator = creator
        this.checkExtDatas = checkExtDatas
        this.approvalFlag = approvalFlag
    }
}
export class CustomerListApiEntry {
    /**
    * 
    * @param {string} eid
    * @param {string} oid
    * @param {number} page
    * @param {number} pageSize
    * @param {string} findType
    */
    constructor (
        eid,
        oid,
        page,
        pageSize,
        findType,
    ) {
        this.eid = eid
        this.oid = oid
        this.page = page
        this.pageSize = pageSize
        this.findType = findType
    }
}
export class CustomerSearchApiEntry {
    /**
    * 
    * @param {number} start
    * @param {number} limit
    * @param {string} keyWords
    * @param {string} eid
    * @param {boolean} onlyByCustomerName
    */
    constructor (
        start,
        limit,
        keyWords,
        eid,
        onlyByCustomerName,
    ) {
        this.start = start
        this.limit = limit
        this.keyWords = keyWords
        this.eid = eid
        this.onlyByCustomerName = onlyByCustomerName
    }
}
export class CustomerSearchV2ApiEntry {
    /**
    * 
    * @param {string} eid
    * @param {string} oid
    * @param {string} userId
    * @param {number} page
    * @param {number} pageSize
    * @param {string} keyword
    */
    constructor (
        eid,
        oid,
        userId,
        page,
        pageSize,
        keyword,
    ) {
        this.eid = eid
        this.oid = oid
        this.userId = userId
        this.page = page
        this.pageSize = pageSize
        this.keyword = keyword
    }
}
export class User {
    /**
    * 
    * @param {string} id
    * @param {string} eid
    * @param {string} oid
    * @param {string} openId
    * @param {string} networkId
    * @param {string} userId
    * @param {string} userName
    * @param {string} photoUrl
    * @param {string} orgId
    * @param {string} department
    * @param {string} companyName
    * @param {string} deptId
    * @param {number} uid
    * @param {number} tid
    * @param {Array} deptIds
    * @param {boolean} deptAdmin
    * @param {boolean} crmManager
    * @param {boolean} admin
    * @param {boolean} partTimeAdmin
    */
    constructor (
        id,
        eid,
        oid,
        openId,
        networkId,
        userId,
        userName,
        photoUrl,
        orgId,
        department,
        companyName,
        deptId,
        uid,
        tid,
        deptIds,
        deptAdmin,
        crmManager,
        admin,
        partTimeAdmin,
    ) {
        this.id = id
        this.eid = eid
        this.oid = oid
        this.openId = openId
        this.networkId = networkId
        this.userId = userId
        this.userName = userName
        this.photoUrl = photoUrl
        this.orgId = orgId
        this.department = department
        this.companyName = companyName
        this.deptId = deptId
        this.uid = uid
        this.tid = tid
        this.deptIds = deptIds
        this.deptAdmin = deptAdmin
        this.crmManager = crmManager
        this.admin = admin
        this.partTimeAdmin = partTimeAdmin
    }
}
export class GetLatestInfoEntry {
    /**
    * 
    * @param {string} billType
    * @param {string} billid
    * @param {number} start
    * @param {number} limit
    */
    constructor (
        billType,
        billid,
        start,
        limit,
    ) {
        this.billType = billType
        this.billid = billid
        this.start = start
        this.limit = limit
    }
}
export class QixinGetEntry {
    /**
    * 
    * @param {string} id
    */
    constructor (
        id,
    ) {
        this.id = id
    }
}
export class QiXinSearchListEntry {
    /**
    * 
    * @param {string} keyWords
    */
    constructor (
        keyWords,
    ) {
        this.keyWords = keyWords
    }
}
export class CRMContactEntry {
    /**
    * 
    * @param {string} id
    * @param {string} contactName
    * @param {string} phone
    * @param {string} extId
    * @param {string} customerID
    * @param {string} remark
    */
    constructor (
        id,
        contactName,
        phone,
        extId,
        customerID,
        remark,
    ) {
        this.id = id
        this.contactName = contactName
        this.phone = phone
        this.extId = extId
        this.customerID = customerID
        this.remark = remark
    }
}
export class ChangeContactUserEntry {
    /**
    * 
    * @param {string} contactUserOid
    * @param {string} id
    */
    constructor (
        contactUserOid,
        id,
    ) {
        this.contactUserOid = contactUserOid
        this.id = id
    }
}
export class DeleteEntry {
    /**
    * 
    * @param {string} id
    */
    constructor (
        id,
    ) {
        this.id = id
    }
}
export class GetEntry {
    /**
    * 
    * @param {string} id
    */
    constructor (
        id,
    ) {
        this.id = id
    }
}
export class GetCRMContactByCustomerIDEntry {
    /**
    * 
    * @param {string} customerID
    */
    constructor (
        customerID,
    ) {
        this.customerID = customerID
    }
}
export class GetCRMContactByExtIdEntry {
    /**
    * 
    * @param {string} extId
    * @param {string} userId
    */
    constructor (
        extId,
        userId,
    ) {
        this.extId = extId
        this.userId = userId
    }
}
export class IdsEntry {
    /**
    * 
    * @param {Array} ids
    */
    constructor (
        ids,
    ) {
        this.ids = ids
    }
}
export class ChangeCustomerUserEntry {
    /**
    * 
    * @param {string} id
    * @param {string} customerUserOid
    * @param {boolean} addFollower
    */
    constructor (
        id,
        customerUserOid,
        addFollower,
    ) {
        this.id = id
        this.customerUserOid = customerUserOid
        this.addFollower = addFollower
    }
}
export class GetChargeUserByIdEntry {
    /**
    * 
    * @param {string} id
    */
    constructor (
        id,
    ) {
        this.id = id
    }
}
export class CustomerApplyFollowEntry {
    /**
    * 
    * @param {string} customerId
    * @param {string} applyType
    */
    constructor (
        customerId,
        applyType,
    ) {
        this.customerId = customerId
        this.applyType = applyType
    }
}
export class GetCustomerLatestInfoEntry {
    /**
    * 
    * @param {string} customerId
    * @param {number} start
    * @param {number} limit
    */
    constructor (
        customerId,
        start,
        limit,
    ) {
        this.customerId = customerId
        this.start = start
        this.limit = limit
    }
}
export class SendInviteExtFriendNewsEntry {
    /**
    * 
    * @param {string} extId
    */
    constructor (
        extId,
    ) {
        this.extId = extId
    }
}
export class CustomerViewEntry {
    /**
    * 
    * @param {string} customerId
    * @param {string} requestType
    */
    constructor (
        customerId,
        requestType,
    ) {
        this.customerId = customerId
        this.requestType = requestType
    }
}
export class AddPartEntry {
    /**
    * 
    * @param {string} bill
    * @param {string} relationId
    * @param {Array} users
    */
    constructor (
        bill,
        relationId,
        users,
    ) {
        this.bill = bill
        this.relationId = relationId
        this.users = users
    }
}
export class FollowEntry {
    /**
    * 
    * @param {string} bill
    * @param {string} relationId
    * @param {Array} oids
    */
    constructor (
        bill,
        relationId,
        oids,
    ) {
        this.bill = bill
        this.relationId = relationId
        this.oids = oids
    }
}
export class PartEntry {
    /**
    * 
    * @param {string} id
    * @param {Array} oids
    * @param {string} participateType
    */
    constructor (
        id,
        oids,
        participateType,
    ) {
        this.id = id
        this.oids = oids
        this.participateType = participateType
    }
}
export class DeletePartEntry {
    /**
    * 
    * @param {string} bill
    * @param {string} relationId
    * @param {string} oid
    */
    constructor (
        bill,
        relationId,
        oid,
    ) {
        this.bill = bill
        this.relationId = relationId
        this.oid = oid
    }
}
export class AddBillConvertEntry {
    /**
    * 
    * @param {string} convertType
    * @param {string} sourceBillID
    * @param {string} targetBillID
    * @param {UserEntry} actionUserEntry
    * @param {string} remarks
    * @param {string} eid
    */
    constructor (
        convertType,
        sourceBillID,
        targetBillID,
        actionUserEntry,
        remarks,
        eid,
    ) {
        this.convertType = convertType
        this.sourceBillID = sourceBillID
        this.targetBillID = targetBillID
        this.actionUserEntry = actionUserEntry
        this.remarks = remarks
        this.eid = eid
    }
}
export class AddLastInfoEntry {
    /**
    * 
    * @param {string} billType
    * @param {string} billID
    * @param {string} title
    * @param {string} content
    * @param {string} infoType
    * @param {string} relateType
    * @param {string} relateID
    * @param {UserEntry} actionUserEntry
    * @param {string} remarks
    */
    constructor (
        billType,
        billID,
        title,
        content,
        infoType,
        relateType,
        relateID,
        actionUserEntry,
        remarks,
    ) {
        this.billType = billType
        this.billID = billID
        this.title = title
        this.content = content
        this.infoType = infoType
        this.relateType = relateType
        this.relateID = relateID
        this.actionUserEntry = actionUserEntry
        this.remarks = remarks
    }
}
export class AuthAuthCodeReq {
    /**
    * 
    * @param {string} phone
    * @param {string} text
    * @param {string} id
    */
    constructor (
        phone,
        text,
        id,
    ) {
        this.phone = phone
        this.text = text
        this.id = id
    }
}
export class EntryReq {
    /**
    * 
    * @param {string} oid
    */
    constructor (
        oid,
    ) {
        this.oid = oid
    }
}
export class InviterInfoReq {
    /**
    * 
    * @param {string} id
    */
    constructor (
        id,
    ) {
        this.id = id
    }
}
export class ObtainAuthCodeReq {
    /**
    * 
    * @param {string} phone
    */
    constructor (
        phone,
    ) {
        this.phone = phone
    }
}
export class deleteCollectChatEntry {
    /**
    * 
    * @param {string} id
    * @param {string} billType
    * @param {string} billId
    */
    constructor (
        id,
        billType,
        billId,
    ) {
        this.id = id
        this.billType = billType
        this.billId = billId
    }
}
export class getCollectChatEntry {
    /**
    * 
    * @param {string} billType
    * @param {string} billId
    */
    constructor (
        billType,
        billId,
    ) {
        this.billType = billType
        this.billId = billId
    }
}
export class DistributeLibraryCustomerEntry {
    /**
    * 
    * @param {string} id
    * @param {string} oid
    */
    constructor (
        id,
        oid,
    ) {
        this.id = id
        this.oid = oid
    }
}
export class DistributeLibraryCustomerByIdsEntry {
    /**
    * 
    * @param {Array} ids
    * @param {string} oid
    */
    constructor (
        ids,
        oid,
    ) {
        this.ids = ids
        this.oid = oid
    }
}
export class ActionEntry {
    /**
    * 
    * @param {string} id
    */
    constructor (
        id,
    ) {
        this.id = id
    }
}
export class QueryLibraryPhoneEntry {
    /**
    * 
    * @param {string} libId
    * @param {string} keyWords
    * @param {number} limit
    * @param {string} libStatus
    * @param {number} page_index
    */
    constructor (
        libId,
        keyWords,
        limit,
        libStatus,
        page_index,
    ) {
        this.libId = libId
        this.keyWords = keyWords
        this.limit = limit
        this.libStatus = libStatus
        this.page_index = page_index
    }
}
export class RecycleToCustomerLibEntry {
    /**
    * 
    * @param {string} id
    * @param {string} targetCustomerLibID
    */
    constructor (
        id,
        targetCustomerLibID,
    ) {
        this.id = id
        this.targetCustomerLibID = targetCustomerLibID
    }
}
export class RecycleToCustomerLibByIDsEntry {
    /**
    * 
    * @param {Array} ids
    * @param {string} targetCustomerLibID
    */
    constructor (
        ids,
        targetCustomerLibID,
    ) {
        this.ids = ids
        this.targetCustomerLibID = targetCustomerLibID
    }
}
export class QueryLibraryCustomerEntry {
    /**
    * 
    * @param {string} libId
    * @param {string} keyWords
    * @param {number} start
    * @param {number} limit
    * @param {string} libStatus
    */
    constructor (
        libId,
        keyWords,
        start,
        limit,
        libStatus,
    ) {
        this.libId = libId
        this.keyWords = keyWords
        this.start = start
        this.limit = limit
        this.libStatus = libStatus
    }
}
export class TransferLibraryCustomerEntry {
    /**
    * 
    * @param {string} id
    * @param {string} targetID
    */
    constructor (
        id,
        targetID,
    ) {
        this.id = id
        this.targetID = targetID
    }
}
export class TransferLibraryCustomerByIdsEntry {
    /**
    * 
    * @param {Array} ids
    * @param {string} targetID
    */
    constructor (
        ids,
        targetID,
    ) {
        this.ids = ids
        this.targetID = targetID
    }
}
export class TransferAllCustomerEntry {
    /**
    * 
    * @param {string} libID
    * @param {string} targetLibID
    */
    constructor (
        libID,
        targetLibID,
    ) {
        this.libID = libID
        this.targetLibID = targetLibID
    }
}
export class AddCustomerApi {
    /**
    * 
    * @param {string} customerName
    * @param {string} eid
    * @param {string} oid
    * @param {string} customerRemarks
    * @param {string} customerAddress
    * @param {string} province
    * @param {string} city
    * @param {string} district
    * @param {string} website
    * @param {string} contactName
    * @param {string} phone
    * @param {string} extId
    * @param {string} contactRemark
    */
    constructor (
        customerName,
        eid,
        oid,
        customerRemarks,
        customerAddress,
        province,
        city,
        district,
        website,
        contactName,
        phone,
        extId,
        contactRemark,
    ) {
        this.customerName = customerName
        this.eid = eid
        this.oid = oid
        this.customerRemarks = customerRemarks
        this.customerAddress = customerAddress
        this.province = province
        this.city = city
        this.district = district
        this.website = website
        this.contactName = contactName
        this.phone = phone
        this.extId = extId
        this.contactRemark = contactRemark
    }
}
export class ChangeUserJsonModelApi {
    /**
    * 
    * @param {string} eid
    * @param {string} oid
    * @param {string} customerId
    * @param {string} customerUserOid
    */
    constructor (
        eid,
        oid,
        customerId,
        customerUserOid,
    ) {
        this.eid = eid
        this.oid = oid
        this.customerId = customerId
        this.customerUserOid = customerUserOid
    }
}
export class FindUserJsonModelApi {
    /**
    * 
    * @param {string} eid
    * @param {string} oid
    * @param {string} extId
    */
    constructor (
        eid,
        oid,
        extId,
    ) {
        this.eid = eid
        this.oid = oid
        this.extId = extId
    }
}
export class AddCustomerLibraryEntry {
    /**
    * 
    * @param {string} libraryName
    * @param {Array} managerUsers
    * @param {Array} members
    * @param {number} doleLimit
    * @param {CustomerLibraryRecycleType} recycle
    * @param {number} seriesLimit
    * @param {Array} reminds
    */
    constructor (
        libraryName,
        managerUsers,
        members,
        doleLimit,
        recycle,
        seriesLimit,
        reminds,
    ) {
        this.libraryName = libraryName
        this.managerUsers = managerUsers
        this.members = members
        this.doleLimit = doleLimit
        this.recycle = recycle
        this.seriesLimit = seriesLimit
        this.reminds = reminds
    }
}
export class SearchCustomerLibraryEntry {
    /**
    * 
    * @param {number} page
    * @param {number} pageSize
    */
    constructor (
        page,
        pageSize,
    ) {
        this.page = page
        this.pageSize = pageSize
    }
}
export class SetCustomerLibraryRulesEntry {
    /**
    * 
    * @param {string} id
    * @param {number} doleLimit
    * @param {CustomerLibraryRecycleType} recycle
    * @param {number} seriesLimit
    * @param {Array} reminds
    */
    constructor (
        id,
        doleLimit,
        recycle,
        seriesLimit,
        reminds,
    ) {
        this.id = id
        this.doleLimit = doleLimit
        this.recycle = recycle
        this.seriesLimit = seriesLimit
        this.reminds = reminds
    }
}
export class SetCustomerLibraryUsersEntry {
    /**
    * 
    * @param {string} id
    * @param {string} libraryName
    * @param {Array} managerUsers
    * @param {Array} members
    */
    constructor (
        id,
        libraryName,
        managerUsers,
        members,
    ) {
        this.id = id
        this.libraryName = libraryName
        this.managerUsers = managerUsers
        this.members = members
    }
}
export class TransferCustoerLibraryEntry {
    /**
    * 
    * @param {string} id
    * @param {string} oid
    */
    constructor (
        id,
        oid,
    ) {
        this.id = id
        this.oid = oid
    }
}
export class ActivateRuleEntry {
    /**
    * 
    * @param {Array} ranges
    * @param {Array} rules
    */
    constructor (
        ranges,
        rules,
    ) {
        this.ranges = ranges
        this.rules = rules
    }
}
export class QueryActivateRuleEntry {
    /**
    * 
    * @param {string} keyWords
    * @param {number} start
    * @param {number} limit
    * @param {string} status
    */
    constructor (
        keyWords,
        start,
        limit,
        status,
    ) {
        this.keyWords = keyWords
        this.start = start
        this.limit = limit
        this.status = status
    }
}
export class UpdateActiveRuleEntry {
    /**
    * 
    * @param {Array} ranges
    * @param {Array} rules
    * @param {string} id
    */
    constructor (
        ranges,
        rules,
        id,
    ) {
        this.ranges = ranges
        this.rules = rules
        this.id = id
    }
}
