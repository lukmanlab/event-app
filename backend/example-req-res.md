## List events

Request:
```bash
curl --location 'localhost:8080/events'
```
Response:
```json
{
    "code": 200,
    "status": "Success",
    "data": [
        {
            "id": 12,
            "title": "dari postman",
            "detail": "detail dari postman",
            "date": "2024-05-10T01:38:06Z",
            "createdAt": "2024-05-10T01:38:07Z",
            "updatedAt": "2000-01-01T00:00:00Z"
        }
    ]
}
```
## Create event

Request:
```bash
curl --location 'localhost:8080/events' \
--header 'Content-Type: application/json' \
--data '{
    "title": "dari postman",
    "detail": "detail dari postman",
    "date": ""
}'
```
Response:
```json
{
    "code": 201,
    "status": "Success",
    "data": {
        "id": 12,
        "title": "dari postman",
        "detail": "detail dari postman",
        "date": "2024-05-10T08:38:06+07:00",
        "createdAt": "2024-05-10T08:38:06.964574+07:00",
        "updatedAt": "2000-01-01T00:00:00Z"
    }
}
```
## Get event by Id
Request:
```bash
curl --location 'localhost:8080/events/12'
```

Response:
```json
{
    "code": 200,
    "status": "Success",
    "data": {
        "id": 12,
        "title": "update dari postman ganti",
        "detail": "update detail dari postman date",
        "date": "2024-05-10T01:47:08Z",
        "createdAt": "2024-05-10T01:38:07Z",
        "updatedAt": "2024-05-10T01:47:09Z"
    }
}
```
## Update event
Request:
```bash
curl --location --request PUT 'localhost:8080/events/12' \
--header 'Content-Type: application/json' \
--data '{
    "title": "update dari postman ganti",
    "detail": "update detail dari postman date",
    "date": ""
}'
```
Response:
```json
{
    "code": 200,
    "status": "Success",
    "data": {
        "id": 12,
        "title": "update dari postman ganti",
        "detail": "update detail dari postman date",
        "date": "2024-05-10T08:47:08+07:00",
        "createdAt": "0001-01-01T00:00:00Z",
        "updatedAt": "2024-05-10T08:47:08.502039+07:00"
    }
}
```
## Delete event
Request:
```bash
curl --location --request DELETE 'localhost:8080/events/11'
```
Response:
```json
{
    "code": 200,
    "status": "Success"
}
```