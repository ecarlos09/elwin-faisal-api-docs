// create food_supplies collection
db.createCollection("food_supplies", {
    validator: {
       $jsonSchema: {
            bsonType: "object",
            required: [ "name", "price", "inventory", "supplier" ],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                price: {
                    bsonType: "number",
                    minimum: 0,
                    description: "must be a neutral or positive value and is required"
                },
                inventory: {
                    bsonType: "number",
                    minimum: 0,
                    description: "must be a neutral or positive value and is required"
                },
                supplier: {
                    enum: [ "FoodStuffs", "PetsRUs", "FeedUs", "F.O.O.D" ],
                    description: "must be a registered supplier and is required"
                }
            }
       }
    }
 })