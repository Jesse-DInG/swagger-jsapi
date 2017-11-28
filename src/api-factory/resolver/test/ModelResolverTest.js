const testData = {
    "User": {
        "description": "",
        "id": "User",
        "properties": {
            "id": {
                "required": false,
                "type": "string"
            },
            "eid": {
                "required": false,
                "type": "string"
            },
            "oid": {
                "required": false,
                "type": "string"
            },
            "openId": {
                "required": false,
                "type": "string"
            },
            "networkId": {
                "required": false,
                "type": "string"
            },
            "userId": {
                "required": false,
                "type": "string"
            },
            "userName": {
                "required": false,
                "type": "string"
            },
            "photoUrl": {
                "required": false,
                "type": "string"
            },
            "orgId": {
                "required": false,
                "type": "string"
            },
            "department": {
                "required": false,
                "type": "string"
            },
            "companyName": {
                "required": false,
                "type": "string"
            },
            "deptId": {
                "required": false,
                "type": "string"
            },
            "uid": {
                "required": false,
                "format": "int64",
                "type": "integer"
            },
            "tid": {
                "required": false,
                "format": "int64",
                "type": "integer"
            },
            "deptIds": {
                "items": {
                    "type": "string"
                },
                "required": false,
                "type": "array"
            },
            "deptAdmin": {
                "required": false,
                "type": "boolean"
            },
            "crmManager": {
                "required": false,
                "type": "boolean"
            },
            "admin": {
                "required": false,
                "type": "boolean"
            },
            "partTimeAdmin": {
                "required": false,
                "type": "boolean"
            }
        }
    },
    "CommonModel«User»": {
        "description": "",
        "id": "CommonModel«User»",
        "properties": {
            "success": {
                "required": false,
                "type": "boolean"
            },
            "code": {
                "required": false,
                "type": "string"
            },
            "msg": {
                "required": false,
                "type": "string"
            },
            "data": {
                "required": false,
                "type": "User"
            }
        }
    }
}

function resolve
