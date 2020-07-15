## Install Dependencies

```shell
npm install
```

## Start MongoDB

```shell
mongod
```

## Run Application

```shell
npm start
```
## Build Application

```shell
npm build
```

## Need to add below privileges in db

{
    "_id" : ObjectId("5f0ded11d6d5476851c31e26"),
    "name" : "set_coordinates",
    "desc" : "Privilege to set own coordinates",
    "isDeleted" : false,
    "status" : true,
    "roles" : [ 
        "customer", 
        "driver"
    ]
}

{
    "_id" : ObjectId("5f0ded4cd6d5476851c31e61"),
    "name" : "book_cab",
    "desc" : "Privilege to book a cab",
    "isDeleted" : false,
    "status" : true,
    "roles" : [ 
        "customer"
    ]
}

{
    "_id" : ObjectId("5f0dfe7dd6d5476851c3227d"),
    "name" : "view_booking_history",
    "desc" : "Privilege to view booking history",
    "isDeleted" : false,
    "status" : true,
    "roles" : [ 
        "customer", 
        "driver"
    ]
}