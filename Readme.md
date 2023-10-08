# Employee Management API

This is a simple Employee management API.

### Live: https://employee.abhisekh.info

## How to Run ?

To run this api:
Step-1
```
npm i -g yarn
```
Step-2
```
yarn install
```
Step-3
```
yarn run dev
```

## Environment Variables

The following environment variables can be set to configure the project:

```json
{
  "PORT": 3000,
  "SERVER_URL": "BACKEND SERVER URL",
  "MYSQL_DATABASE": "employee_db",
  "MYSQL_PORT": 3306,
  "MYSQL_USERNAME": "MySql Username",
  "MYSQL_PASSWORD": "MySql Password",
  "MYSQL_HOST": "MySql Host"
}
```

## API Documentation

The project provides the following API endpoints:

### `POST /api/employees/createEmployee`

create new employee.

**Request:**

```json
{
  "fullName": "Rishav Raj",
  "jobTitle": "Java Developer",
  "phoneNumber": "+916901168673",
  "emailId": "mail@rishav.info",
  "address": "Jhanjheri, Pin Code - 140307",
  "city": "SAS Nagar",
  "state": "Punjab",
  "primaryEmergencyContact": {
    "phoneNumber": "+918638916738",
    "relationship": "rel-1"
  },
  "secondaryEmergencyContact": {
    "phoneNumber": "+919365674094",
    "relationship": "rel-2"
  }
}
```

**Response:**
```json
{
  "status": true,
  "message": "New employee has been created"
}
```


### `GET /api/employees/getEmployeeList?page={pageNo}&limit={limit}`

fetch employee list at once (defalut value of page and limit is 1 and 20 respectively).

**Request:**

`GET /api/employees/getEmployeeList?page=1&limit=20`

**Response:**
```json
{
  "status": true,
  "data": [
    {
      "id": 4,
      "fullName": "Rishav Raj",
      "jobTitle": "Java Developer",
      "phoneNumber": "+916901168673",
      "emailId": "mail@rishav.info",
      "address": "Jhanjheri, Pin Code - 140307",
      "city": "SAS Nagar",
      "state": "Punjab",
      "createdAt": "2023-10-08T16:15:14.000Z",
      "updatedAt": "2023-10-08T16:15:14.000Z",
      "EmergencyContacts": [
        {
          "id": 8,
          "phoneNumber": "+919365674094",
          "relationship": "rel-2",
          "isPrimary": false,
          "createdAt": "2023-10-08T16:15:14.000Z",
          "updatedAt": "2023-10-08T16:15:14.000Z"
        },
        {
          "id": 7,
          "phoneNumber": "+918638916738",
          "relationship": "rel-1",
          "isPrimary": true,
          "createdAt": "2023-10-08T16:15:14.000Z",
          "updatedAt": "2023-10-08T16:15:14.000Z"
        }
      ]
    },
    {
      "id": 3,
      "fullName": "Sumon Bala",
      "jobTitle": "Frontend Developer",
      "phoneNumber": "+916901168653",
      "emailId": "mail@sumon.info",
      "address": "Jhanjheri, Pin Code - 140307",
      "city": "SAS Nagar",
      "state": "Punjab",
      "createdAt": "2023-10-08T16:01:33.000Z",
      "updatedAt": "2023-10-08T16:01:33.000Z",
      "EmergencyContacts": [
        {
          "id": 6,
          "phoneNumber": "+919365674094",
          "relationship": "rel-2",
          "isPrimary": false,
          "createdAt": "2023-10-08T16:01:33.000Z",
          "updatedAt": "2023-10-08T16:01:33.000Z"
        },
        {
          "id": 5,
          "phoneNumber": "+918638916738",
          "relationship": "rel-1",
          "isPrimary": true,
          "createdAt": "2023-10-08T16:01:33.000Z",
          "updatedAt": "2023-10-08T16:01:33.000Z"
        }
      ]
    },
    {
      "id": 2,
      "fullName": "Abhisek Upadhaya",
      "jobTitle": "Nodejs Developer",
      "phoneNumber": "+916901168673",
      "emailId": "mail@rishav.info",
      "address": "Jhanjheri, Pin Code - 140307",
      "city": "SAS Nagar",
      "state": "Punjab",
      "createdAt": "2023-10-08T15:59:13.000Z",
      "updatedAt": "2023-10-08T16:52:26.000Z",
      "EmergencyContacts": [
        {
          "id": 4,
          "phoneNumber": "+919365674094",
          "relationship": "rel-2",
          "isPrimary": false,
          "createdAt": "2023-10-08T15:59:13.000Z",
          "updatedAt": "2023-10-08T16:52:26.000Z"
        },
        {
          "id": 3,
          "phoneNumber": "+918638916738",
          "relationship": "rel-1",
          "isPrimary": true,
          "createdAt": "2023-10-08T15:59:13.000Z",
          "updatedAt": "2023-10-08T16:52:26.000Z"
        }
      ]
    }
  ]
}
```

### `PUT /api/employees/updateEmployee/:employeeId`

update a particular recipe that was created by a user.

**Request:**

`PUT /api/employees/updateEmployee/2`

```json
{
  "jobTitle": "Nodejs Developer",
  "phoneNumber": "+916901168673",
  "emailId": "mail@rishav.info",
  "address": "Jhanjheri, Pin Code - 140307",
  "city": "SAS Nagar",
  "state": "Punjab",
  "primaryEmergencyContact": {
    "phoneNumber": "+918638916738",
    "relationship": "rel-1"
  },
  "secondaryEmergencyContact": {
    "phoneNumber": "+919365674094",
    "relationship": "rel-2"
  }
}
```

**Response:**
```json
{
  "status": true,
  "message": "Employee data has been updated!"
}
```


### `DELETE /api/employees/deleteEmployee/:employeeId`

delete employee data by its id.

**Request:**

`DELETE /api/employees/deleteEmployee/4`

**Response:**
```json
{
  "status": true,
  "message": "Employee data has been delete!"
}
```


### `GET /api/employees/getEmployee/:employeeId`

fetch employee data by its id.

**Request:**

`GET /api/employees/getEmployee/2`

**Response:**
```json
{
  "status": true,
  "data": {
    "id": 2,
    "fullName": "Abhisek Upadhaya",
    "jobTitle": "Nodejs Developer",
    "phoneNumber": "+916901168673",
    "emailId": "mail@rishav.info",
    "address": "Jhanjheri, Pin Code - 140307",
    "city": "SAS Nagar",
    "state": "Punjab",
    "createdAt": "2023-10-08T15:59:13.000Z",
    "updatedAt": "2023-10-08T16:52:26.000Z",
    "EmergencyContacts": [
      {
        "id": 3,
        "phoneNumber": "+918638916738",
        "relationship": "rel-1",
        "isPrimary": true,
        "createdAt": "2023-10-08T15:59:13.000Z",
        "updatedAt": "2023-10-08T16:52:26.000Z"
      },
      {
        "id": 4,
        "phoneNumber": "+919365674094",
        "relationship": "rel-2",
        "isPrimary": false,
        "createdAt": "2023-10-08T15:59:13.000Z",
        "updatedAt": "2023-10-08T16:52:26.000Z"
      }
    ]
  }
}
```


## Contact Information

Name: Abhisekh Upadhaya
Email: Abhisek0721@gmail.com