
export class AddClueFromICrmEntry {
    /**
    * 
    * @param {string} number
    * @param {string} userID
    * @param {string} custName
    * @param {string} buyProduct
    * @param {string} linkman
    * @param {string} linkmanCell
    * @param {string} province
    * @param {string} city
    * @param {string} region
    * @param {string} address
    * @param {string} buyProductMoney
    * @param {string} description
    */
    constructor (
        number,
        userID,
        custName,
        buyProduct,
        linkman,
        linkmanCell,
        province,
        city,
        region,
        address,
        buyProductMoney,
        description,
    ) {
        this.number = number
        this.userID = userID
        this.custName = custName
        this.buyProduct = buyProduct
        this.linkman = linkman
        this.linkmanCell = linkmanCell
        this.province = province
        this.city = city
        this.region = region
        this.address = address
        this.buyProductMoney = buyProductMoney
        this.description = description
    }
}
export class AddFollowEntry {
    /**
    * 
    * @param {string} title
    * @param {Position} position
    * @param {string} workContent
    * @param {string} clueID
    * @param {Array} photos
    */
    constructor (
        title,
        position,
        workContent,
        clueID,
        photos,
    ) {
        this.title = title
        this.position = position
        this.workContent = workContent
        this.clueID = clueID
        this.photos = photos
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
export class GetCommentListEntry {
    /**
    * 
    * @param {string} relateID
    * @param {number} page_index
    * @param {number} limit
    */
    constructor (
        relateID,
        page_index,
        limit,
    ) {
        this.relateID = relateID
        this.page_index = page_index
        this.limit = limit
    }
}
export class CommentSaveEntry {
    /**
    * 
    * @param {string} relateID
    * @param {string} content
    */
    constructor (
        relateID,
        content,
    ) {
        this.relateID = relateID
        this.content = content
    }
}
export class GetClueFollowEntry {
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
export class GetPraiseListEntry {
    /**
    * 
    * @param {string} relateID
    */
    constructor (
        relateID,
    ) {
        this.relateID = relateID
    }
}
export class PraiseSaveEntry {
    /**
    * 
    * @param {string} relateID
    */
    constructor (
        relateID,
    ) {
        this.relateID = relateID
    }
}
export class ClueViewEntry {
    /**
    * 
    * @param {string} id
    * @param {string} requestType
    */
    constructor (
        id,
        requestType,
    ) {
        this.id = id
        this.requestType = requestType
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
export class GetClueDetailEntry {
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
export class AddClueLibraryEntry {
    /**
    * 
    * @param {string} name
    * @param {Array} admins
    * @param {number} remindTime
    * @param {number} gcTime
    * @param {boolean} autoGc
    */
    constructor (
        name,
        admins,
        remindTime,
        gcTime,
        autoGc,
    ) {
        this.name = name
        this.admins = admins
        this.remindTime = remindTime
        this.gcTime = gcTime
        this.autoGc = autoGc
    }
}
export class DistributeClueLibraryEntry {
    /**
    * 
    * @param {string} id
    * @param {string} toId
    */
    constructor (
        id,
        toId,
    ) {
        this.id = id
        this.toId = toId
    }
}
export class DeleteClueLibraryEntry {
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
export class ClueSearchEntry {
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
export class UpdateClueLibraryEntry {
    /**
    * 
    * @param {string} id
    * @param {string} name
    * @param {Array} admins
    * @param {number} remindTime
    * @param {number} gcTime
    * @param {boolean} autoGc
    */
    constructor (
        id,
        name,
        admins,
        remindTime,
        gcTime,
        autoGc,
    ) {
        this.id = id
        this.name = name
        this.admins = admins
        this.remindTime = remindTime
        this.gcTime = gcTime
        this.autoGc = autoGc
    }
}
export class AddClueEntry {
    /**
    * 
    * @param {string} customerName
    * @param {string} contactName
    * @param {string} phone
    * @param {string} sourceType
    * @param {string} remarks
    * @param {string} reportinfo
    * @param {string} address
    * @param {string} website
    * @param {string} telephone
    * @param {string} job
    * @param {string} email
    * @param {string} extId
    * @param {User} clueUser
    * @param {object} extDatas
    * @param {string} classTypeID
    */
    constructor (
        customerName,
        contactName,
        phone,
        sourceType,
        remarks,
        reportinfo,
        address,
        website,
        telephone,
        job,
        email,
        extId,
        clueUser,
        extDatas,
        classTypeID,
    ) {
        this.customerName = customerName
        this.contactName = contactName
        this.phone = phone
        this.sourceType = sourceType
        this.remarks = remarks
        this.reportinfo = reportinfo
        this.address = address
        this.website = website
        this.telephone = telephone
        this.job = job
        this.email = email
        this.extId = extId
        this.clueUser = clueUser
        this.extDatas = extDatas
        this.classTypeID = classTypeID
    }
}
export class CloseClueEntry {
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
export class CloseClueByIdsEntry {
    /**
    * 
    * @param {Array} ids
    * @param {string} cause
    */
    constructor (
        ids,
        cause,
    ) {
        this.ids = ids
        this.cause = cause
    }
}
export class FreeCallEntry {
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
export class DistributeEntry {
    /**
    * 
    * @param {string} id
    * @param {string} oid
    * @param {boolean} noticer
    */
    constructor (
        id,
        oid,
        noticer,
    ) {
        this.id = id
        this.oid = oid
        this.noticer = noticer
    }
}
export class DistributeByIdsEntry {
    /**
    * 
    * @param {string} ids
    * @param {string} oid
    * @param {boolean} noticer
    */
    constructor (
        ids,
        oid,
        noticer,
    ) {
        this.ids = ids
        this.oid = oid
        this.noticer = noticer
    }
}
export class GetExtIDEntry {
    /**
    * 
    * @param {string} clueid
    * @param {string} oid
    * @param {string} contactName
    * @param {string} phone
    */
    constructor (
        clueid,
        oid,
        contactName,
        phone,
    ) {
        this.clueid = clueid
        this.oid = oid
        this.contactName = contactName
        this.phone = phone
    }
}
export class OpenClueIdsEntry {
    /**
    * 
    * @param {Array} ids
    * @param {string} cause
    */
    constructor (
        ids,
        cause,
    ) {
        this.ids = ids
        this.cause = cause
    }
}
export class QueryParamEntry {
    /**
    * 
    * @param {string} findType
    * @param {string} keyWords
    * @param {string} orderBy
    * @param {number} start
    * @param {number} limit
    * @param {string} queryOpenId
    * @param {Array} statuslist
    */
    constructor (
        findType,
        keyWords,
        orderBy,
        start,
        limit,
        queryOpenId,
        statuslist,
    ) {
        this.findType = findType
        this.keyWords = keyWords
        this.orderBy = orderBy
        this.start = start
        this.limit = limit
        this.queryOpenId = queryOpenId
        this.statuslist = statuslist
    }
}
export class UpdateClueEntry {
    /**
    * 
    * @param {string} id
    * @param {string} customerName
    * @param {string} contactName
    * @param {string} phone
    * @param {string} sourceType
    * @param {string} remarks
    * @param {string} reportinfo
    * @param {string} address
    * @param {string} website
    * @param {string} telephone
    * @param {string} job
    * @param {string} email
    * @param {string} extId
    * @param {object} extDatas
    * @param {string} classTypeID
    */
    constructor (
        id,
        customerName,
        contactName,
        phone,
        sourceType,
        remarks,
        reportinfo,
        address,
        website,
        telephone,
        job,
        email,
        extId,
        extDatas,
        classTypeID,
    ) {
        this.id = id
        this.customerName = customerName
        this.contactName = contactName
        this.phone = phone
        this.sourceType = sourceType
        this.remarks = remarks
        this.reportinfo = reportinfo
        this.address = address
        this.website = website
        this.telephone = telephone
        this.job = job
        this.email = email
        this.extId = extId
        this.extDatas = extDatas
        this.classTypeID = classTypeID
    }
}
export class LibraryAddClueEntry {
    /**
    * 
    * @param {string} customerName
    * @param {string} contactName
    * @param {string} phone
    * @param {string} sourceType
    * @param {string} remarks
    * @param {string} reportinfo
    * @param {string} address
    * @param {string} website
    * @param {string} telephone
    * @param {string} job
    * @param {string} email
    * @param {string} extId
    * @param {User} clueUser
    * @param {string} clueLibraryId
    * @param {object} extDatas
    */
    constructor (
        customerName,
        contactName,
        phone,
        sourceType,
        remarks,
        reportinfo,
        address,
        website,
        telephone,
        job,
        email,
        extId,
        clueUser,
        clueLibraryId,
        extDatas,
    ) {
        this.customerName = customerName
        this.contactName = contactName
        this.phone = phone
        this.sourceType = sourceType
        this.remarks = remarks
        this.reportinfo = reportinfo
        this.address = address
        this.website = website
        this.telephone = telephone
        this.job = job
        this.email = email
        this.extId = extId
        this.clueUser = clueUser
        this.clueLibraryId = clueLibraryId
        this.extDatas = extDatas
    }
}
export class LibraryClueCloseEntry {
    /**
    * 
    * @param {Array} clueIds
    * @param {string} closeCause
    */
    constructor (
        clueIds,
        closeCause,
    ) {
        this.clueIds = clueIds
        this.closeCause = closeCause
    }
}
export class LibraryClueDistributeEntry {
    /**
    * 
    * @param {Array} clueIds
    * @param {string} oid
    */
    constructor (
        clueIds,
        oid,
    ) {
        this.clueIds = clueIds
        this.oid = oid
    }
}
export class LibraryCloseClueEntry {
    /**
    * 
    * @param {Array} clueIds
    */
    constructor (
        clueIds,
    ) {
        this.clueIds = clueIds
    }
}
export class LibraryClueSearchEntry {
    /**
    * 
    * @param {string} clueLibraryId
    * @param {boolean} master
    * @param {string} keyWords
    * @param {number} start
    * @param {number} limit
    */
    constructor (
        clueLibraryId,
        master,
        keyWords,
        start,
        limit,
    ) {
        this.clueLibraryId = clueLibraryId
        this.master = master
        this.keyWords = keyWords
        this.start = start
        this.limit = limit
    }
}
export class TransferClueEntry {
    /**
    * 
    * @param {Array} clueIds
    * @param {string} clueLibraryId
    */
    constructor (
        clueIds,
        clueLibraryId,
    ) {
        this.clueIds = clueIds
        this.clueLibraryId = clueLibraryId
    }
}
export class AddPartEntry {
    /**
    * 
    * @param {string} bill
    * @param {string} relationId
    * @param {Array} users
    * @param {string} participateType
    */
    constructor (
        bill,
        relationId,
        users,
        participateType,
    ) {
        this.bill = bill
        this.relationId = relationId
        this.users = users
        this.participateType = participateType
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
    * @param {string} participateType
    */
    constructor (
        bill,
        relationId,
        oid,
        participateType,
    ) {
        this.bill = bill
        this.relationId = relationId
        this.oid = oid
        this.participateType = participateType
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
    * @param {ColumnFilter} columnFilter
    * @param {Array} queryList
    * @param {User} loginUser
    * @param {FilterQuery} partUserOid
    * @param {FilterQuery} noticerUserOid
    */
    constructor (
        filterType,
        keyword,
        filterSchemeId,
        start,
        limit,
        query,
        columnFilter,
        queryList,
        loginUser,
        partUserOid,
        noticerUserOid,
    ) {
        this.filterType = filterType
        this.keyword = keyword
        this.filterSchemeId = filterSchemeId
        this.start = start
        this.limit = limit
        this.query = query
        this.columnFilter = columnFilter
        this.queryList = queryList
        this.loginUser = loginUser
        this.partUserOid = partUserOid
        this.noticerUserOid = noticerUserOid
    }
}
export class ClueToCRMContactEntry {
    /**
    * 
    * @param {string} clueId
    * @param {string} crmContactId
    */
    constructor (
        clueId,
        crmContactId,
    ) {
        this.clueId = clueId
        this.crmContactId = crmContactId
    }
}
export class ClueToOpportunityEntry {
    /**
    * 
    * @param {string} clueId
    * @param {string} opportunityId
    */
    constructor (
        clueId,
        opportunityId,
    ) {
        this.clueId = clueId
        this.opportunityId = opportunityId
    }
}
