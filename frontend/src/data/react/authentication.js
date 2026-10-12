export const authenticationTopics = [

    // ============================================================
    // 1. Login
    // ============================================================
    {
        id: 1,
        module: "authentication",
        title: "Login",
        concept: "Authenticating a user with username and password",
        difficulty: "Easy",

        theory: `
Login is the process of verifying a user's identity.

A typical React login flow is:

1. User enters username/email and password.
2. React sends the credentials to the backend API.
3. Spring Boot validates the credentials.
4. Backend returns an authentication result, commonly including a token.
5. React stores the token according to the application's security design.
6. React allows the user to access protected features.

Example API:

POST /api/auth/login
        `,

        example: `
import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {

        event.preventDefault();

        const response = await fetch(
            "http://localhost:8080/api/auth/login",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    email,
                    password
                })
            }
        );

        const data = await response.json();

        console.log(data);
    };

    return (
        <form onSubmit={handleLogin}>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) =>
                    setEmail(e.target.value)
                }
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) =>
                    setPassword(e.target.value)
                }
            />

            <button type="submit">
                Login
            </button>

        </form>
    );
}

export default Login;
        `,

        output: `
User enters:

Email: saurabh@gmail.com
Password: ******

Backend response:

{
    "accessToken": "eyJhbGciOi..."
}

User is authenticated.
        `
    },

    // ============================================================
    // 2. Register
    // ============================================================
    {
        id: 2,
        module: "authentication",
        title: "Register",
        concept: "Creating a new user account",
        difficulty: "Easy",

        theory: `
Registration is the process of creating a new user account.

A typical registration flow is:

React Registration Form
        ↓
POST /api/auth/register
        ↓
Spring Boot
        ↓
Validate Data
        ↓
Hash Password
        ↓
Save User in Database
        ↓
Return Response

Passwords should never be stored as plain text.
        `,

        example: `
const registerUser = async () => {

    const user = {
        name: "Saurabh",
        email: "saurabh@gmail.com",
        password: "password123"
    };

    const response = await fetch(
        "http://localhost:8080/api/auth/register",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(user)
        }
    );

    const data = await response.json();

    console.log(data);
};
        `,

        output: `
Registration successful

{
    "message": "User registered successfully"
}
        `
    },

    // ============================================================
    // 3. Logout
    // ============================================================
    {
        id: 3,
        module: "authentication",
        title: "Logout",
        concept: "Ending the user's authenticated session",
        difficulty: "Easy",

        theory: `
Logout means ending the user's authenticated state.

In a token-based React application, logout commonly involves:

1. Removing the stored authentication information.
2. Clearing user state.
3. Redirecting the user to the login page.

If the application uses refresh tokens or server-side sessions,
logout may also involve notifying the backend.
        `,

        example: `
import { useNavigate } from "react-router-dom";

function LogoutButton() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("accessToken");

        navigate("/login");
    };

    return (
        <button onClick={logout}>
            Logout
        </button>
    );
}

export default LogoutButton;
        `,

        output: `
Before logout:

Dashboard

After logout:

Token removed
        ↓
/login
        `
    },

    // ============================================================
    // 4. JWT
    // ============================================================
    {
        id: 4,
        module: "authentication",
        title: "JWT",
        concept: "JSON Web Token based authentication",
        difficulty: "Medium",

        theory: `
JWT stands for JSON Web Token.

JWT is a compact token format commonly used for authentication
and authorization.

A JWT has three parts:

Header
Payload
Signature

Format:

xxxxx.yyyyy.zzzzz

The backend creates and signs the token.

The client sends the token with requests to protected APIs.

Important:
A JWT payload is encoded, not automatically encrypted.
Do not put sensitive secrets or passwords inside it.
        `,

        example: `
const token = "eyJhbGciOiJIUzI1NiIs...";

fetch("http://localhost:8080/api/users", {

    headers: {
        "Authorization": \`Bearer \${token}\`
    }

})
    .then(response => response.json())
    .then(data => console.log(data));
        `,

        output: `
Client:

JWT Token
    ↓
Authorization Header
    ↓
Spring Boot
    ↓
JWT Validation
    ↓
Protected API
        `
    },

    // ============================================================
    // 5. Access Token
    // ============================================================
    {
        id: 5,
        module: "authentication",
        title: "Access Token",
        concept: "Token used to access protected APIs",
        difficulty: "Medium",

        theory: `
An access token is a credential that a client sends to a protected
API to prove that it has authorization to access the requested resource.

In JWT-based authentication, the access token is often a JWT.

Example:

Authorization: Bearer <access-token>

Access tokens are commonly short-lived to reduce the impact of
token exposure.
        `,

        example: `
const accessToken =
    localStorage.getItem("accessToken");

fetch("http://localhost:8080/api/profile", {

    headers: {
        "Authorization":
            \`Bearer \${accessToken}\`
    }

});
        `,

        output: `
Request:

GET /api/profile

Authorization:
Bearer eyJhbGciOiJIUzI1NiIs...
        `
    },

    // ============================================================
    // 6. Refresh Token
    // ============================================================
    {
        id: 6,
        module: "authentication",
        title: "Refresh Token",
        concept: "Obtaining a new access token after expiration",
        difficulty: "Advanced",

        theory: `
A refresh token is used to obtain a new access token when the
current access token expires.

Typical flow:

Login
  ↓
Access Token + Refresh Token
  ↓
Access Token expires
  ↓
Send Refresh Token
  ↓
Backend validates refresh token
  ↓
New Access Token
  ↓
Continue API requests

Refresh tokens are generally longer-lived than access tokens.

For security, refresh tokens should be handled carefully. In many
web applications, an HttpOnly, Secure cookie is preferred so that
JavaScript cannot directly read the refresh token.
        `,

        example: `
async function refreshAccessToken() {

    const response = await fetch(
        "http://localhost:8080/api/auth/refresh",
        {
            method: "POST",
            credentials: "include"
        }
    );

    const data = await response.json();

    return data.accessToken;
}
        `,

        output: `
Access Token:

Expired

Refresh Request:

POST /api/auth/refresh

Response:

{
    "accessToken": "new-access-token"
}
        `
    },

    // ============================================================
    // 7. localStorage
    // ============================================================
    {
        id: 7,
        module: "authentication",
        title: "localStorage",
        concept: "Persisting data in the browser across page reloads",
        difficulty: "Medium",

        theory: `
localStorage is browser storage that keeps data until it is
explicitly removed or the site's storage is cleared.

It is sometimes used to store authentication-related data.

Example:

localStorage.setItem("accessToken", token);

const token =
    localStorage.getItem("accessToken");

localStorage.removeItem("accessToken");

Security consideration:

A token stored in localStorage can be accessed by JavaScript.
Therefore, if an XSS vulnerability exists, an attacker may be able
to steal it.

The storage strategy should be chosen based on the application's
threat model.
        `,

        example: `
const token = "abc123";

localStorage.setItem(
    "accessToken",
    token
);

const savedToken =
    localStorage.getItem("accessToken");

console.log(savedToken);
        `,

        output: `
abc123
        `
    },

    // ============================================================
    // 8. sessionStorage
    // ============================================================
    {
        id: 8,
        module: "authentication",
        title: "sessionStorage",
        concept: "Browser storage that lasts for the current tab session",
        difficulty: "Medium",

        theory: `
sessionStorage stores data for the current browser tab.

The data normally remains available while that tab is open and
is removed when the tab or window is closed.

Example:

sessionStorage.setItem("accessToken", token);

const token =
    sessionStorage.getItem("accessToken");

sessionStorage.removeItem("accessToken");

Like localStorage, sessionStorage is accessible to JavaScript,
so it should not be treated as immune to XSS risks.
        `,

        example: `
const token = "abc123";

sessionStorage.setItem(
    "accessToken",
    token
);

const savedToken =
    sessionStorage.getItem("accessToken");

console.log(savedToken);
        `,

        output: `
abc123
        `
    },

    // ============================================================
    // 9. Authorization Header
    // ============================================================
    {
        id: 9,
        module: "authentication",
        title: "Authorization Header",
        concept: "Sending an access token with an API request",
        difficulty: "Medium",

        theory: `
The Authorization header is commonly used to send credentials
with an HTTP request.

For Bearer token authentication, the format is:

Authorization: Bearer <token>

React sends the token.

Spring Boot Security reads and validates the token.

Example:

GET /api/users

Authorization:
Bearer eyJhbGciOiJIUzI1NiIs...
        `,

        example: `
const token =
    localStorage.getItem("accessToken");

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
HTTP Request:

GET /api/users

Authorization:
Bearer eyJhbGciOiJIUzI1NiIs...

Backend:

Token validated
        ↓
User authorized
        ↓
Users returned
        `
    },

    // ============================================================
    // 10. Protected Routes
    // ============================================================
    {
        id: 10,
        module: "authentication",
        title: "Protected Routes",
        concept: "Restricting React routes to authenticated users",
        difficulty: "Advanced",

        theory: `
A Protected Route prevents unauthenticated users from accessing
certain frontend routes.

Example:

/login
    Public

/dashboard
    Protected

/profile
    Protected

If the user is authenticated:
    Allow access.

If the user is not authenticated:
    Redirect to /login.

Important:

Frontend route protection improves user experience, but it is not
a replacement for backend authorization. The Spring Boot backend
must also protect sensitive APIs.
        `,

        example: `
import {
    Navigate,
    Outlet
} from "react-router-dom";

function ProtectedRoute() {

    const token =
        localStorage.getItem("accessToken");

    if (!token) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    return <Outlet />;
}

export default ProtectedRoute;
        `,

        output: `
No token:

/dashboard
    ↓
/login


Token exists:

/dashboard
    ↓
Dashboard
        `
    },

    // ============================================================
    // 11. Authentication Context
    // ============================================================
    {
        id: 11,
        module: "authentication",
        title: "Authentication Context",
        concept: "Sharing authentication state across React components",
        difficulty: "Advanced",

        theory: `
Authentication Context is commonly used to make authentication
state and actions available to many components.

It can provide:

- Current user
- Login function
- Logout function
- Authentication status
- Access token information when appropriate

Instead of passing authentication data through many components,
components can access the Auth Context directly.

Typical structure:

AuthProvider
    ↓
App
    ↓
Navbar
Dashboard
Profile
        `,

        example: `
import {
    createContext,
    useContext,
    useState
} from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {

    return useContext(AuthContext);
}
        `,

        output: `
AuthProvider
    ↓
Authentication State
    ↓
useAuth()
    ↓
Navbar
Dashboard
Profile
        `
    },

    // ============================================================
    // 12. React + Spring Boot Authentication
    // ============================================================
    {
        id: 12,
        module: "authentication",
        title: "React + Spring Boot Authentication",
        concept: "Connecting React authentication with a Spring Boot backend",
        difficulty: "Advanced",

        theory: `
React can act as the frontend while Spring Boot provides the
authentication APIs.

A common JWT-based architecture is:

React
  ↓
POST /auth/login
  ↓
Spring Boot
  ↓
Validate username/password
  ↓
Generate access token
  ↓
React receives token
  ↓
React sends Bearer token
  ↓
Spring Security validates token
  ↓
Protected API

Example endpoints:

POST /auth/register
POST /auth/login
POST /auth/refresh
POST /auth/logout
GET  /api/profile

The backend must perform the real authentication and authorization.
React-side checks should not be trusted as the security boundary.

For production applications, also consider HTTPS, secure cookie
settings, CSRF protection where applicable, CORS configuration,
password hashing, token expiration, refresh-token rotation, and
server-side authorization.
        `,

        example: `
// React Login

const login = async () => {

    const response = await fetch(
        "http://localhost:8080/auth/login",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                username: "saurabh",
                password: "password123"
            })
        }
    );

    const data = await response.json();

    localStorage.setItem(
        "accessToken",
        data.accessToken
    );
};


// React API Request

const token =
    localStorage.getItem("accessToken");

fetch(
    "http://localhost:8080/api/profile",
    {
        headers: {
            "Authorization":
                \`Bearer \${token}\`
        }
    }
);


// Spring Boot Controller

@PostMapping("/auth/login")
public ResponseEntity<?> login(
        @RequestBody LoginRequest request) {

    // Authenticate user
    // Generate access token

    return ResponseEntity.ok(
        new LoginResponse(accessToken)
    );
}


// Spring Security

.requestMatchers(
    "/auth/login",
    "/auth/register"
).permitAll()

.anyRequest()
.authenticated();
        `,

        output: `
React
   |
   | POST /auth/login
   ↓
Spring Boot
   |
   | Validate credentials
   ↓
JWT Access Token
   |
   ↓
React
   |
   | Authorization: Bearer token
   ↓
Spring Security
   |
   | Validate JWT
   ↓
Protected Controller
   |
   ↓
Database
        `
    }

];