var schema = {
  "type": "object",
  "properties": {

    "users": {
      "type": "array",
      "minItems": 5,
      "maxItems": 14,
      "uniqueItems": true,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "minimum": 10,
            "maximum": 700,
            "exclusiveMinimum": true
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName"
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName"
          },
          "image": {
            "type": "string",
            "faker": "image.avatar"
          },
          "city": {
            "type": "string",
            "faker": "address.city"
          },
        },
        "required": ["id", "firstName", "lastName", "image", "city"]
      }
    },

  },
  "required": [
    "users",
  ]
};

module.exports = schema;
