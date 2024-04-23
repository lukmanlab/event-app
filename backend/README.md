# API SPEC

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
    "date": "date",
    "createdAt": "date",
    "updatedAt": "date"
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