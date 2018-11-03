# Library System Database Proposal

*  Shuangwei Shi
*  Jingxuan Ai
*  Ziang Lin
*  Ying Lu
*  Guanqin Zeng
*  Mingze Zhu

## Users

The user collection will store all users and their profiles. Users will be able to login, and update their profile.

```
{
    "_id":"7b7997a2-c0d2-4f8c-b27a-6a1d4b5b6310",
    "username": "masterGroup",
    "hashedPassword":"$2a$08$XdvNkfdNIL8Fq7l8xsuIUeSbNOFgK0M0iV5HOskfVn7",
    "identity": "student",
    "profile":{       
        "name":"Guanqin Zeng",
        "gender":"male",
        "email":"agoodemail@amail.com",
        "phone":"347-123-1234",
        "avatar":"/imag/masterGroup.png"
    },
    "record":[
        {
            "_id":"7b7997a2-abcd-4f8c-b27a-6a1d4b5b6310",
            "bookid":"21123123-abcd-4f8c-b27a-6a1d4b5b6310",
            "time":"EST-2018-11-22-23-59-59",
            "action":"borrow",
            “returnTime": "EST-2018-11-23-23-59-59",
            "staffid":"7b7997a2-abcd-efgh-b27a-6a1d4b5b6310"
        },
        {
            "_id":"7b7997a222-abcd-4f8c-b27a-6a1d4b5b6310",
            "bookid":"2112223123-abcd-4f8c-b27a-6a1d4b5b6310",
            "time":"EST-2018-11-22-23-59-58",
            "action":"rent",
            “returnTime": "EST-2018-11-23-23-59-59",
            "staffid":"7b7997a2-abcd-efgh-b27a-6a1d4b5b6310"
        }
    ]
}
```

| Name           | Type         | Description |
| -------------- | ------------ | ----------- |
| _id            | string       |             |
| username       | string       |             |
| hashedpassword | string       |             |
| identity       | String       |             |
| profile        | User Profile |             |
| record         | User Record  |             |

## User Profile (subdocument)

This subdocument is used to describe the user's profile. These are the information can be changed by the user.

```
{
    "name":"Guanqin Zeng",
    "gender":"male",
    "email":"agoodemail@amail.com",
    "phone":"347-123-1234",
    "avatar":"/imag/masterGroup.png"
}
```

| Name   | Type   | Description |
| ------ | ------ | ----------- |
| name   | string |             |
| gender | string |             |
| email  | string |             |
| phone  | string |             |
| avatar | string |             |

## User Record (subdocument)

This subdocument is used to describe the user's records, stored as a list. Student can check the record but can't change it. Staff should be able to change this.

```
[
    {
        "_id":"7b7997a2-abcd-4f8c-b27a-6a1d4b5b6310",
        "bookid":"21123123-abcd-4f8c-b27a-6a1d4b5b6310",
        "time":"EST-2018-11-22-23-59-59",
        "action":"borrow",
        “returnTime": "EST-2018-11-23-23-59-59",
        "staffid":"7b7997a2-abcd-efgh-b27a-6a1d4b5b6310"
    },
    {
        "_id":"7b7997a222-abcd-4f8c-b27a-6a1d4b5b6310",
        "bookid":"2112223123-abcd-4f8c-b27a-6a1d4b5b6310",
        "time":"EST-2018-11-22-23-59-58",
        "action":"rent",
        “returnTime": "EST-2018-11-23-23-59-59",
        "staffid":"7b7997a2-abcd-efgh-b27a-6a1d4b5b6310"
    }
]
```

| Name       | Type   | Description       |
| ---------- | ------ | ----------------- |
| _id        | string |                   |
| bookid     | string | book id           |
| time       | string |                   |
| action     | string | borrow or rent    |
| returnTime | string | return date       |
| staffid    | string | operated by staff |

## Book

The book collection will store all books and their records. Staff can add, update, and delete this collection.

```
{
    "_id":"7b7997a2-c0d2-4f8c-b27a-6a1d4b5b6310",
    "title": "ABook",
    "edition": 4,
    "storage": 9,
    "totalStorage": 20,
    "location": "Library 2nd floor 2B-5-20",
    "price": 20.98,
    "profile":{
        "Author": "Someone",
        "ISBN": "978-0-321-57351-3",
        "description":"This is a book",
        "tag": "Tech"
    },
    "record":[
        {
            "_id":"7b7997a2-abcd-4f8c-b27a-6a1d4b5b6310",
            "bookid":"21123123-abcd-4f8c-b27a-6a1d4b5b6310",
            "time":"EST-2018-11-22-23-59-59",
            "action":"borrow",
            “returnTime": "EST-2018-11-23-23-59-59",
            "staffid":"7b7997a2-abcd-efgh-b27a-6a1d4b5b6310"
        },
        {
            "_id":"7b7997a222-abcd-4f8c-b27a-6a1d4b5b6310",
            "bookid":"2112223123-abcd-4f8c-b27a-6a1d4b5b6310",
            "time":"EST-2018-11-22-23-59-58",
            "action":"rent",
            “returnTime": "EST-2018-11-23-23-59-59",
            "staffid":"7b7997a2-abcd-efgh-b27a-6a1d4b5b6310"
        }
    ]
}
```

| Name         | Type         | Description              |
| ------------ | ------------ | ------------------------ |
| _id          | string       |                          |
| title        | string       |                          |
| edition      | int          |                          |
| storage      | int          |                          |
| totalStorage | int          |                          |
| location     | String       | book location in library |
| Price        | Float        |                          |
| profile      | book profile |                          |
| record       | book record  |                          |

## Book Profile (subdocument)

This subdocument is used to describe the book's profile.

```
{
    "Author": "Someone",
    "ISBN": "978-0-321-57351-3",
    "description":"This is a book",
    "tag": "Tech"
}
```

| Name        | Type   | Description |
| ----------- | ------ | ----------- |
| Author      | string |             |
| ISBN        | string |             |
| description | string |             |
| tag         | string |             |

## Book Record (subdocument)

This subdocument is used to describe the book's records.

```
[
    {
        "_id":"7b7997a2-abcd-4f8c-b27a-6a1d4b5b6310",
        "userid":"21123123-abcd-4f8c-b27a-6a1d4b5b6310",
        "action":"borrow",
        "time":"EST-2018-11-22-23-59-59",
        "staffid":"7b7997a2-abcd-efgh-b27a-6a1d4b5b6310"
    },
    {
        "_id":"7b7997a2-abcd-4f8c-b27a-6a1d4b5b6310",
        "userid":"21123123-abcd-4f8c-b27a-6a1d4b5b6310",
        "action":"return",
        "time":"EST-2018-11-22-23-59-59",
        "staffid":"7b7997a2-abcd-efgh-b27a-6a1d4b5b6310"
    }
]
```


| Name    | Type   | Description              |
| ------- | ------ | ------------------------ |
| _id     | String |                          |
| userid  | String |                          |
| action  | String | borrow or return or sell |
| time    | string |                          |
| staffid | String |                          |