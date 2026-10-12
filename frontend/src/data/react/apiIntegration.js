export const apiIntegrationTopics = [

    // ============================================================
    // 1. What is an API?
    // ============================================================
    {
        id: 1,
        module: "apiIntegration",
        title: "What is an API?",
        concept: "Communication between frontend and backend applications",
        difficulty: "Easy",

        theory: `
API stands for Application Programming Interface.

An API allows two applications to communicate with each other.

In a React application, the frontend can communicate with a backend
server through an API.

Example:

React Frontend
      |
      | HTTP Request
      ↓
Backend API
      |
      | Database
      ↓
Database

The backend processes the request and sends a response back to React.
        `,

        example: `
fetch("http://localhost:8080/api/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
        `,

        output: `
[
    {
        id: 1,
        name: "Saurabh"
    }
]
        `
    },

    // ============================================================
    // 2. REST API
    // ============================================================
    {
        id: 2,
        module: "apiIntegration",
        title: "REST API",
        concept: "Using HTTP methods to communicate with backend resources",
        difficulty: "Easy",

        theory: `
REST stands for Representational State Transfer.

A REST API uses HTTP methods to perform operations on resources.

Common HTTP methods:

GET
    Get data.

POST
    Create data.

PUT
    Replace existing data.

PATCH
    Partially update data.

DELETE
    Delete data.

Example:

GET    /users
POST   /users
PUT    /users/1
PATCH  /users/1
DELETE /users/1
        `,

        example: `
fetch("http://localhost:8080/api/users")
    .then(response => response.json())
    .then(data => console.log(data));
        `,

        output: `
API Response:

[
    {
        id: 1,
        name: "Saurabh"
    }
]
        `
    },

    // ============================================================
    // 3. GET Request
    // ============================================================
    {
        id: 3,
        module: "apiIntegration",
        title: "GET Request",
        concept: "Fetching data from an API",
        difficulty: "Easy",

        theory: `
A GET request is used to retrieve data from a server.

GET requests normally do not send a request body.

Example:

GET /api/users

The server returns user data in the response.
        `,

        example: `
fetch("http://localhost:8080/api/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
        `,

        output: `
[
    {
        id: 1,
        name: "Saurabh"
    },
    {
        id: 2,
        name: "Rahul"
    }
]
        `
    },

    // ============================================================
    // 4. POST Request
    // ============================================================
    {
        id: 4,
        module: "apiIntegration",
        title: "POST Request",
        concept: "Sending new data to the server",
        difficulty: "Easy",

        theory: `
A POST request is commonly used to create new data on the server.

For example, when a user submits a registration form,
React can send the form data to the backend using POST.
        `,

        example: `
const user = {
    name: "Saurabh",
    email: "saurabh@gmail.com"
};

fetch("http://localhost:8080/api/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(user)

})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
        `,

        output: `
{
    id: 1,
    name: "Saurabh",
    email: "saurabh@gmail.com"
}
        `
    },

    // ============================================================
    // 5. PUT Request
    // ============================================================
    {
        id: 5,
        module: "apiIntegration",
        title: "PUT Request",
        concept: "Replacing an existing resource",
        difficulty: "Medium",

        theory: `
PUT is used to update an existing resource.

PUT commonly sends the complete representation of the resource.

Example:

PUT /api/users/1

The server can replace the existing user data with the data
provided in the request.
        `,

        example: `
const user = {
    name: "Saurabh Patil",
    email: "saurabh@gmail.com"
};

fetch("http://localhost:8080/api/users/1", {

    method: "PUT",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(user)

})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
        `,

        output: `
{
    id: 1,
    name: "Saurabh Patil",
    email: "saurabh@gmail.com"
}
        `
    },

    // ============================================================
    // 6. PATCH Request
    // ============================================================
    {
        id: 6,
        module: "apiIntegration",
        title: "PATCH Request",
        concept: "Partially updating an existing resource",
        difficulty: "Medium",

        theory: `
PATCH is used when we want to update only part of an existing resource.

For example, if we only want to change the user's email,
we can send only the email field.

PUT:
    Usually replaces the complete resource.

PATCH:
    Usually changes only selected fields.
        `,

        example: `
const update = {
    email: "newemail@gmail.com"
};

fetch("http://localhost:8080/api/users/1", {

    method: "PATCH",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(update)

})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
        `,

        output: `
{
    id: 1,
    name: "Saurabh",
    email: "newemail@gmail.com"
}
        `
    },

    // ============================================================
    // 7. DELETE Request
    // ============================================================
    {
        id: 7,
        module: "apiIntegration",
        title: "DELETE Request",
        concept: "Deleting data from the server",
        difficulty: "Easy",

        theory: `
DELETE is used to remove a resource from the server.

Example:

DELETE /api/users/1

This tells the backend to delete the user whose ID is 1.
        `,

        example: `
fetch("http://localhost:8080/api/users/1", {

    method: "DELETE"

})
    .then(response => {

        if (response.ok) {
            console.log("User deleted");
        }

    });
        `,

        output: `
User deleted
        `
    },

    // ============================================================
    // 8. fetch()
    // ============================================================
    {
        id: 8,
        module: "apiIntegration",
        title: "fetch()",
        concept: "Making HTTP requests using the browser Fetch API",
        difficulty: "Easy",

        theory: `
fetch() is a built-in JavaScript function used to make HTTP requests.

It returns a Promise.

Basic flow:

fetch()
   ↓
Response
   ↓
response.json()
   ↓
Data

fetch() can be used for:
- GET
- POST
- PUT
- PATCH
- DELETE
        `,

        example: `
fetch("http://localhost:8080/api/users")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
        `,

        output: `
API data received:

[
    {
        id: 1,
        name: "Saurabh"
    }
]
        `
    },

    // ============================================================
    // 9. Axios
    // ============================================================
    {
        id: 9,
        module: "apiIntegration",
        title: "Axios",
        concept: "Using Axios for HTTP requests",
        difficulty: "Easy",

        theory: `
Axios is a popular HTTP client library used to communicate with APIs.

It provides a convenient API for making HTTP requests.

Axios can be used for:
- GET
- POST
- PUT
- PATCH
- DELETE

Axios automatically parses JSON responses in normal JSON API usage.

Install Axios:

npm install axios
        `,

        example: `
import axios from "axios";

function App() {

    const getUsers = async () => {

        try {

            const response =
                await axios.get(
                    "http://localhost:8080/api/users"
                );

            console.log(response.data);

        } catch (error) {

            console.error(error);

        }
    };

    return (
        <button onClick={getUsers}>
            Get Users
        </button>
    );
}

export default App;
        `,

        output: `
Click Get Users:

[
    {
        id: 1,
        name: "Saurabh"
    }
]
        `
    },

    // ============================================================
    // 10. Request Headers
    // ============================================================
    {
        id: 10,
        module: "apiIntegration",
        title: "Request Headers",
        concept: "Sending additional information with an HTTP request",
        difficulty: "Medium",

        theory: `
Request headers contain additional information about an HTTP request.

Common headers include:

Content-Type
    Tells the server the format of the request body.

Authorization
    Sends authentication information such as a Bearer token.

Accept
    Indicates the response formats the client can handle.

Example:

Authorization: Bearer <token>
Content-Type: application/json
        `,

        example: `
const token = "your-jwt-token";

fetch("http://localhost:8080/api/users", {

    method: "GET",

    headers: {
        "Authorization": \`Bearer \${token}\`,
        "Content-Type": "application/json"
    }

})
    .then(response => response.json())
    .then(data => console.log(data));
        `,

        output: `
Request Headers:

Authorization: Bearer your-jwt-token
Content-Type: application/json
        `
    },

    // ============================================================
    // 11. Request Body
    // ============================================================
    {
        id: 11,
        module: "apiIntegration",
        title: "Request Body",
        concept: "Sending data to the backend",
        difficulty: "Easy",

        theory: `
The request body contains data sent from the frontend to the backend.

It is commonly used with:

POST
PUT
PATCH

When sending JSON data using fetch(), the JavaScript object should
usually be converted into JSON using JSON.stringify().
        `,

        example: `
const user = {
    name: "Saurabh",
    email: "saurabh@gmail.com"
};

fetch("http://localhost:8080/api/users", {

    method: "POST",

    headers: {
        "Content-Type": "application/json"
    },

    body: JSON.stringify(user)

});
        `,

        output: `
Request Body:

{
    "name": "Saurabh",
    "email": "saurabh@gmail.com"
}
        `
    },

    // ============================================================
    // 12. JSON Response
    // ============================================================
    {
        id: 12,
        module: "apiIntegration",
        title: "JSON Response",
        concept: "Reading structured data returned by an API",
        difficulty: "Easy",

        theory: `
JSON stands for JavaScript Object Notation.

REST APIs commonly return data in JSON format.

With fetch(), response.json() reads the response body
and parses JSON into JavaScript data.

Example JSON:

{
    "id": 1,
    "name": "Saurabh"
}
        `,

        example: `
fetch("http://localhost:8080/api/users/1")
    .then(response => response.json())
    .then(user => {

        console.log(user.id);
        console.log(user.name);

    });
        `,

        output: `
1
Saurabh
        `
    },

    // ============================================================
    // 13. Loading State
    // ============================================================
    {
        id: 13,
        module: "apiIntegration",
        title: "Loading State",
        concept: "Showing UI while an API request is in progress",
        difficulty: "Medium",

        theory: `
API requests take some time to complete.

During this time, the application can show a loading message,
spinner, skeleton, or other loading UI.

React commonly uses useState to manage loading state.

Example:

loading = true
    Request is running.

loading = false
    Request is completed.
        `,

        example: `
import { useEffect, useState } from "react";

function App() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("http://localhost:8080/api/users")
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>

            {users.map(user => (
                <p key={user.id}>
                    {user.name}
                </p>
            ))}

        </div>
    );
}

export default App;
        `,

        output: `
Loading...

Then:

Saurabh
Rahul
Amit
        `
    },

    // ============================================================
    // 14. Error Handling
    // ============================================================
    {
        id: 14,
        module: "apiIntegration",
        title: "Error Handling",
        concept: "Handling failed API requests",
        difficulty: "Medium",

        theory: `
API requests can fail for many reasons.

Examples:
- Server is unavailable
- Network error
- Invalid request
- Unauthorized request
- Server error
- Invalid response

We should handle these errors and show a useful message to the user.

With fetch(), remember that HTTP error status codes such as 404 or 500
do not automatically reject the Promise. Check response.ok or
response.status when appropriate.
        `,

        example: `
import { useEffect, useState } from "react";

function App() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch("http://localhost:8080/api/users")

            .then(response => {

                if (!response.ok) {
                    throw new Error(
                        "Failed to fetch users"
                    );
                }

                return response.json();
            })

            .then(data => {
                setUsers(data);
            })

            .catch(error => {
                setError(error.message);
            });

    }, []);

    if (error) {
        return (
            <h2>
                Error: {error}
            </h2>
        );
    }

    return (
        <div>

            {users.map(user => (
                <p key={user.id}>
                    {user.name}
                </p>
            ))}

        </div>
    );
}

export default App;
        `,

        output: `
If request succeeds:

Saurabh
Rahul
Amit


If request fails:

Error: Failed to fetch users
        `
    },

    // ============================================================
    // 15. API Service Structure
    // ============================================================
    {
        id: 15,
        module: "apiIntegration",
        title: "API Service Structure",
        concept: "Separating API communication from React components",
        difficulty: "Advanced",

        theory: `
In a larger React application, API calls should not be placed
everywhere inside components.

We can create a separate service layer for API communication.

Example structure:

src/
├── components/
├── pages/
├── services/
│   ├── api.js
│   ├── userService.js
│   └── authService.js
└── App.jsx

This provides better separation of concerns.

Component:
    Handles UI.

Service:
    Handles API communication.

Example:

userService.js
    getUsers()
    getUserById()
    createUser()
    updateUser()
    deleteUser()
        `,

        example: `
// services/api.js

import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8080/api"
});

export default api;


// services/userService.js

import api from "./api";

export const getUsers = () => {
    return api.get("/users");
};

export const getUserById = (id) => {
    return api.get(\`/users/\${id}\`);
};

export const createUser = (user) => {
    return api.post("/users", user);
};

export const updateUser = (id, user) => {
    return api.put(\`/users/\${id}\`, user);
};

export const deleteUser = (id) => {
    return api.delete(\`/users/\${id}\`);
};


// UserList.jsx

import { useEffect, useState } from "react";
import { getUsers } from "../services/userService";

function UserList() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        getUsers()
            .then(response => {
                setUsers(response.data);
            });

    }, []);

    return (
        <div>

            {users.map(user => (
                <p key={user.id}>
                    {user.name}
                </p>
            ))}

        </div>
    );
}

export default UserList;
        `,

        output: `
src/
├── components/
│   └── UserList.jsx
│
├── services/
│   ├── api.js
│   └── userService.js
│
└── App.jsx

UserList component
        ↓
userService.js
        ↓
api.js
        ↓
Backend API
        `
    }

];