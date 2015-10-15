var schema = {
  "properties": {
    "id": {
      "type": "string"
    },
    "seatbid": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "bid": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "string"
                },
                "impid": {
                  "type": "string"
                },
                "price": {
                  "type": "number"
                },
                "nurl": {
                  "type": "string"
                },
                "adm": {
                  "type": "object"
                },
                "adomain": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "bundle": {
                  "type": "string"
                },
                "iurl": {
                  "type": "string"
                },
                "cid": {
                  "type": "string"
                },
                "crid": {
                  "type": "string"
                },
                "cat": {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                "h": {
                  "type": "integer"
                },
                "w": {
                  "type": "integer"
                },
                "ext": {
                  "type": "object"
                }
              },
              "required": ["id", "impid", "price"]
            }
          }
        }
      },
      "required": ["bid"]
    },
    "bidId": {
      "type": "string"
    },
    "cur":{
      "type": "string"
    },
    "customdata":{
      "type": "string"
    },
    "nbr":{
      "type": "integer"
    },
    "ext":{
      "type": "object"
    }
  },
  "required": ["id"]
}

module.exports = schema;