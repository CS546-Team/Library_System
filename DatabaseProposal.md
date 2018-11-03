# Library System Database Proposal
*  Shuangwei Shi
*  Jingxuan Ai
*  Ziang Lin
*  Ying Lu
*  Guanqin Zeng
*  Mingze Zhu

## Users
The user collection will store all users and their profiles. Users will be able to login, update their profile.

```javascript

```

| Name | Type | Description |
| :-- | :-- | :-- |
| _id | string |  |
| username | string |  |
| hashedpassword | string |  |
| identity | String |  |
| profile | User Profile |  |
| record | User Record |  |

## User Profile(subdocument)

```javascript

```

| Name | Type | Description |
| --- | --- | --- |
| name | string |  |
| gender | string |  |
| email | string |  |
| phone | string |  |
| avatar | string |  |

## User Record(subdocument)

```javascript
```

| Name | Type | Description |
| --- | --- | --- |
| _id | string |  |
| bookid | string | book id |
| time | string |  |
| action | string | borrow or rent |
| staffid | string | operated by staff |

## Book

```javascript
```

| Name | Type | Description |
| --- | --- | --- |
| _id | string |  |
| title | string |  |
| description | String |  |
| storage | int |  |
| totalStorage | int |  |
| location | String | book location in library |
| Price | Float |  |
| Record  | book record |  |

## Book Record(subdocument)

```javascript
```


| Name | Type | Description |
| --- | --- | --- |
| _id | String |  |
| userid | String |  |
| action | String | borrow or return or sell |
| time | string |  |
| staffid | String |  |


