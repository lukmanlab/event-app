# API SPEC
Example of request and response, please check [this](./example-req-res.md).

## Create Event
Request:
- Method: POST
- Endpoint: /api/events
- Header:
  - Content-type: application/json
  - Accept: application/json
- Body:
```json
{
    "name" : "string",
    "detail": "long",
    "date": "date"
}
```
Response:
```json
{
    "code" : "number",
    "status": "string",
    "data": {
        "id" : "string, unique",
        "name" : "string",
        "detail": "long",
        "date": "date",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```
Validation:
- id should generated from database or application logic.
- createdAt value should get from when the resource is created. 
- updateAt value can be fill static datetime.
- better to implement validation, { name, detail, date } should be not empty.

## Get Event
Request:
- Method: GET
- Endpoint: `/api/events/{id_event}`
- Header:
    - Accept: application/json

Response:
```json
{
    "code" : "number",
    "status": "string",
    "data": {
        "id" : "string, unique",
        "name" : "string",
        "detail": "long",
        "date": "date",
        "createdAt: "date",
        "updatedAt": "date"
  }
}
```
Validation:
- if id of event not found
- if id not a number

## Update Event
Request:
- Method: PUT
- Endpoint: `/api/events/{id_event}`
- Header:
    - Content-type: application/json
    - Accept: application/json
- Body:
```json
{
    "name" : "string",
    "detail": "long",
    "date": "date",
}
```
Response:
```json
{
    "code" : "number",
    "status": "string",
    "data": {
        "id" : "string, unique",
        "name" : "string",
        "detail": "long",
        "date": "date",
        "createdAt: "date",
        "updatedAt": "date"
  }
}
```
Validation:
- updatedAt value should get from when the resource is updated.
- createdAt value can be set default or any, considering update query. The update query should not update the createdAt

## List Event
Request:
- Method: GET
- Endpoint: `/api/events`
- Header:
  - Accept: application/json

Response: 
```json
{
    "code" : "number",
    "status": "string",
    "data": [
        {
            "id" : "string, unique",
            "name" : "string",
            "detail": "long",
            "date": "date",
            "createdAt: "date",
            "updatedAt": "date"
        },
        {
            "id" : "string, unique",
            "name" : "string",
            "detail": "long",
            "date": "date",
            "createdAt: "date",
            "updatedAt": "date"
        },
    ]
}
```
Validation:
- if data is null, return empty list -> []

## Delete Event
Request:
- Method: DELETE
- Endpoint: `/api/events/{id_event}`
- Header:
    - Accept: application/json

Response:
```json
{
    "code" : "number",
    "status": "string"
}
```
Validation:
- if id of event not found
- if id not a number