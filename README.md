# CRUD-APP

> A basic crud app using NodeJS & Express. https://x-crud-app.herokuapp.com/api/welcome

### How to Install on your PC 💻

Create a .env file in the root folder. Use the .env.sample as a guide for the environment variables you will need for this app.

```
port
MONGO_URL (Database for production environment)
MONGO_URI (Database for development environment)
```

### Install Dependencies 🔗

Install project dependencies using

```
npm i
```

### Run the app 🔃

Run the app in development mode using

```
npm run dev
```

Run the app in production mode using

```
npm run start
```

---

## Application endpoints 🌎

### HTTP STATUS CODES USED

| Status code | Description           |
| ----------- | --------------------- |
| 200         | Ok                    |
| 201         | Created               |
| 400         | Bad request           |
| 404         | Not found             |
| 500         | Internal server error |

### Request verbs used in application

> GET, POST, PATCH, DELETE

<br/>

### Create a user

`POST https://x-crud-app.herokuapp.com/api/create/user`

#### Request body key/value pair to create a user

Example:
<strong>Body</strong> urlencoded

| Key       | Value               | Required | Description          |
| --------- | ------------------- | -------- | -------------------- |
| firstname | John                | Yes      | User's first name    |
| lastname  | Doe                 | Yes      | User's last name     |
| email     | johndoe@example.com | Yes      | User's email address |
| country   | Nigeria             | Yes      | User's country       |

JSON format

```
{
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com",
    "country": "Nigeria"
}
```

Response example:

```
{
    "message": "✅ User created successfully.",
    "data": {
        "user": {
            "_id": "60965b9e2e30e0366874593e",
            "name": "John Doe",
            "email": "johndoe@example.com",
            "country": "Nigeria",
            "__v": 0
        }
    }
}
```

<br/>

### Get a user

`GET https://x-crud-app.herokuapp.com/api/user`

#### Request body key/value pair to create a user

Example:\
<strong>Body</strong> urlencoded

| Key   | Value               | Required | Description          |
| ----- | ------------------- | -------- | -------------------- |
| email | johndoe@example.com | Yes      | User's email address |

JSON format

```
{
    "email": "johndoe@example.com",
}
```

Response example:

```
{
    "message": "✅ User found",
    "data": {
        "_id": "60965b9e2e30e0366874593e",
        "name": "John Doe",
        "email": "johndoe@example.com",
        "country": "Nigeria",
        "__v": 0
    }
}
```

<br />

### Get users

`GET https://x-crud-app.herokuapp.com/api/users`

Response example:

```
{
    "message": "✅ 3 users found",
    "data": {
        "users": [
            {
                "_id": "60964f32a37a2c2094c0f6f2",
                "name": "John Doe",
                "email": "johndoe@example.com",
                "__v": 0,
                "country": "Nigeria"
            },
            {
                "_id": "6096541d3610650390608b50",
                "name": "John Bull",
                "email": "johnbull@example.com",
                "country": "Nigeria",
                "__v": 0
            },
            {
                "_id": "60965b9e2e30e0366874593e",
                "name": "John Smith",
                "email": "johnsmith@example.com",
                "country": "Nigeria",
                "__v": 0
            }
        ]
    }
}
```

<br/>

### Update a user

`PATCH https://x-crud-app.herokuapp.com/api/update/user`

#### Request body key/value pair to create a user

Example:
<strong>Body</strong> urlencoded

| Key       | Value               | Required | Description          |
| --------- | ------------------- | -------- | -------------------- |
| email     | johndoe@example.com | Yes      | User's email address |
| firstname | John                | No       | User's first name    |
| lastname  | Doe                 | No       | User's last name     |
| country   | Nigeria             | No       | User's country       |

JSON format

```
{
    "email": "johndoe@example.com",
    "firstname": "John",
    "lastname": "Thebaptist",
    "country": "Nigeria"
}
```

Response example:

```
{
    "message": "✅ User data has been updated!",
    "data": {
        "user": {
            "_id": "60965b9e2e30e0366874593e",
            "name": "John Thebaptist",
            "email": "johndoe@example.com",
            "country": "Nigeria",
            "__v": 0
        }
    }
}
```

<br/>

### Delete a user

`DELETE https://x-crud-app.herokuapp.com/api/delete/user`

#### Request body key/value pair to create a user

Example:
<strong>Body</strong> urlencoded

| Key   | Value               | Required | Description          |
| ----- | ------------------- | -------- | -------------------- |
| email | johndoe@example.com | Yes      | User's email address |

JSON format

```
{
    "email": "johndoe@example.com"
}
```

Response example:

```
{
    "message": "✅ User deleted!"
}
```

<br/>
