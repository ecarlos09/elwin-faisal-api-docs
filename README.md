Welcome to our README!  Feel free to leave some nice feedback.  :)

# yourneighbourhoodinfo.com API

## Base path!

`https://yourneighbourhood.com/api`

***

### Introduction

Welcome to our documentation for the "yourneighbourhoodinfo.com" API.

This API will allow you to access, store and update information about households and their owners within your particular neighbourhood.  For example, you can:
   - Store people, houses and addresses
   - Look up a house, it’s address and owner
   - Look up people in our neighbourhood within certain age brackets and with specific household size

Please continue reading for more information on how to use our fabulous API!

### Data storage

First of all, data stored by this API will be formatted as a JSON object

```const households = [
    {
        householdID: 001,
        owner: {
            name: 'ownerName',
            age: 'ownerAge',
            cohabiters: [
                {
                    name: "cohabiter 1",
                    age: "cohabiter 1 age"
                }
            ]
        },
        address: {
            streetAddress: "...",
            postcode: "..."
        }
    }
]
