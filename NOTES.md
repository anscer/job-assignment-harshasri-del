Exported Postman Collection
{
"info": {
"\_postman_id": "b3c3a327-937e-49a9-87ca-1486c0bce5c9",
"name": "robotic",
"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
"\_exporter_id": "20125388"
},
"item": [
{
"name": "register",
"request": {
"method": "GET",
"header": [
{
"key": "Content-Type",
"value": "application/json",
"type": "text"
}
]
},
"response": []
},
{
"name": "login",
"request": {
"method": "GET",
"header": [
{
"key": "Content-Type",
"value": "application/json",
"type": "text"
}
]
},
"response": []
},
{
"name": "state create",
"request": {
"method": "GET",
"header": [
{
"key": "Content-Type",
"value": "application/json",
"type": "text"
},
{
"key": "token",
"value": "{{token}}",
"type": "text"
}
]
},
"response": []
},
{
"name": "get states",
"request": {
"method": "GET",
"header": [
{
"key": "token",
"value": "{{token}}",
"type": "text"
}
]
},
"response": []
},
{
"name": "update state",
"request": {
"method": "GET",
"header": [
{
"key": "Content-Type",
"value": "application/json",
"type": "text"
},{
"key": "token",
"value": "{{token}}",
"type": "text"
}
]
},
"response": []
},
{
"name": "delete state",
"request": {
"method": "GET",
"header": [
{
"key": "token",
"value": "{{token}}",
"type": "text"
}
]
},
"response": []
}
]
}

Protected Routes

All CRUD operations below require the token header with a valid JWT token.

CRUD Operations for State
Create State

URL: /api/state/
Method: POST
Headers:
Content-Type: application/json
token: {{token}}
Body:
{
"name": "test",
"description": "Robot is idle and waiting for commands.",
"status": "test"
}

Get All States

URL: /api/state/
Method: GET
Headers:
token: {{token}}

Update State

URL: /api/state/:id
Method: PATCH
Headers:
Content-Type: application/json
token: {{token}}
Parameters:
id: The ID of the state to update.
Body:
{
"name": "finalState",
"description": "The robot is powered off and resting.",
"status": "inctive"
}

Delete State

URL: /api/state/:id
Method: DELETE
Headers:
token: {{token}}
Parameters:
id: The ID of the state to delete.

Token
This allows you to easily include the token in your requests without hardcoding it.
