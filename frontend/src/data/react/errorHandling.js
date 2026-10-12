export const errorHandlingTopics = [

    // ============================================================
    // 1. Error Boundaries
    // ============================================================
    {
        id: 1,
        module: "errorHandling",
        title: "Error Boundaries",
        concept: "Catching rendering errors in React component trees",
        difficulty: "Medium",

        theory: `
An Error Boundary is a React component that catches JavaScript
errors in its child component tree during rendering and displays
fallback UI instead of crashing the entire UI.

Error boundaries are commonly implemented using a class component
with:

- static getDerivedStateFromError()
- componentDidCatch()

Important:

Error boundaries do not catch every type of error. For example,
they do not automatically catch errors from event handlers,
asynchronous callbacks, or server-side rendering.
        `,

        example: `
import React from "react";

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        };
    }

    componentDidCatch(error, info) {
        console.error(error, info);
    }

    render() {

        if (this.state.hasError) {
            return <h2>Something went wrong.</h2>;
        }

        return this.props.children;
    }
}

function App() {

    return (
        <ErrorBoundary>
            <Dashboard />
        </ErrorBoundary>
    );
}
        `,

        output: `
If Dashboard throws a rendering error:

Something went wrong.
        `
    },

    // ============================================================
    // 2. Runtime Errors
    // ============================================================
    {
        id: 2,
        module: "errorHandling",
        title: "Runtime Errors",
        concept: "Handling errors that occur while the application is running",
        difficulty: "Easy",

        theory: `
A runtime error occurs while JavaScript or React code is executing.

Examples:

- Accessing a property of undefined
- Calling a function that does not exist
- Invalid data processing
- Errors during component rendering
- Errors from API response handling

Example:

const user = undefined;

console.log(user.name);

This causes a runtime error because user is undefined.

Good error handling prevents one error from creating a poor user
experience.
        `,

        example: `
function User() {

    const user = null;

    if (!user) {
        return <p>User not found</p>;
    }

    return (
        <h2>{user.name}</h2>
    );
}

export default User;
        `,

        output: `
User not found
        `
    },

    // ============================================================
    // 3. API Errors
    // ============================================================
    {
        id: 3,
        module: "errorHandling",
        title: "API Errors",
        concept: "Handling errors returned from backend API requests",
        difficulty: "Medium",

        theory: `
API errors can happen when React communicates with a backend.

Common API errors include:

- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error
- Network errors

With fetch(), HTTP errors such as 404 or 500 do not automatically
reject the Promise. You should check response.ok or response.status.

The UI should display a useful message instead of silently failing.
        `,

        example: `
import { useEffect, useState } from "react";

function Users() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {

        fetch("http://localhost:8080/api/users")
            .then(response => {

                if (!response.ok) {
                    throw new Error(
                        "Failed to load users"
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
        return <p>{error}</p>;
    }

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}
        </ul>
    );
}

export default Users;
        `,

        output: `
If API fails:

Failed to load users
        `
    },

    // ============================================================
    // 4. try-catch
    // ============================================================
    {
        id: 4,
        module: "errorHandling",
        title: "try-catch",
        concept: "Catching JavaScript errors and handling them safely",
        difficulty: "Easy",

        theory: `
try-catch is a JavaScript mechanism used to handle errors.

The code that may throw an error is placed inside try.

If an error occurs, catch receives the error.

Syntax:

try {
    // code
} catch (error) {
    // handle error
}

In React, try-catch is commonly useful for:

- Event handlers
- Async functions
- JSON parsing
- API calls

try-catch does not replace Error Boundaries.
        `,

        example: `
function handleData() {

    try {

        const data = JSON.parse(
            "invalid json"
        );

        console.log(data);

    } catch (error) {

        console.error(
            "Invalid JSON:",
            error.message
        );
    }
}

handleData();
        `,

        output: `
Invalid JSON: Unexpected token
        `
    },

    // ============================================================
    // 5. Loading Errors
    // ============================================================
    {
        id: 5,
        module: "errorHandling",
        title: "Loading Errors",
        concept: "Handling errors while loading data or components",
        difficulty: "Medium",

        theory: `
A loading error happens when required data or code cannot be
loaded successfully.

Examples:

- API request fails
- Network connection is unavailable
- Lazy-loaded component fails to download
- Server returns an unexpected response

A good application usually manages at least three states:

Loading
Success
Error

Example state:

{
    loading: true,
    data: null,
    error: null
}
        `,

        example: `
import {
    useEffect,
    useState
} from "react";

function Products() {

    const [loading, setLoading] =
        useState(true);

    const [products, setProducts] =
        useState([]);

    const [error, setError] =
        useState("");

    useEffect(() => {

        fetch("/api/products")
            .then(response => {

                if (!response.ok) {
                    throw new Error(
                        "Loading failed"
                    );
                }

                return response.json();
            })
            .then(data => {
                setProducts(data);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <p>
            Products: {products.length}
        </p>
    );
}

export default Products;
        `,

        output: `
While loading:

Loading products...

If loading fails:

Loading failed

If successful:

Products: 10
        `
    },

    // ============================================================
    // 6. Error UI
    // ============================================================
    {
        id: 6,
        module: "errorHandling",
        title: "Error UI",
        concept: "Displaying useful error messages to users",
        difficulty: "Easy",

        theory: `
Error UI is the interface displayed when something goes wrong.

Instead of showing technical errors such as:

TypeError: Cannot read properties of undefined

the application should show a user-friendly message.

Good Error UI can contain:

- Error message
- Retry button
- Back button
- Contact support option
- Helpful instructions

The technical error should usually be logged separately for
developers.
        `,

        example: `
function ErrorMessage({ onRetry }) {

    return (
        <div>

            <h2>
                Something went wrong
            </h2>

            <p>
                We could not load the data.
            </p>

            <button onClick={onRetry}>
                Try Again
            </button>

        </div>
    );
}

export default ErrorMessage;
        `,

        output: `
Something went wrong

We could not load the data.

[ Try Again ]
        `
    },

    // ============================================================
    // 7. Fallback UI
    // ============================================================
    {
        id: 7,
        module: "errorHandling",
        title: "Fallback UI",
        concept: "Showing an alternative UI when the normal UI cannot be displayed",
        difficulty: "Medium",

        theory: `
Fallback UI is an alternative interface displayed when the normal
component cannot be rendered or loaded.

Examples:

Error Boundary:

<ErrorBoundary fallback="Something went wrong">
    <Dashboard />
</ErrorBoundary>

Suspense:

<Suspense fallback={<Loading />}>
    <Dashboard />
</Suspense>

Fallback UI helps users understand what is happening instead of
showing a blank screen.

Common fallback states include:

- Loading fallback
- Error fallback
- Empty-state fallback
        `,

        example: `
import {
    lazy,
    Suspense
} from "react";

const Dashboard = lazy(
    () => import("./Dashboard")
);

function App() {

    return (
        <Suspense
            fallback={
                <div>
                    Loading Dashboard...
                </div>
            }
        >
            <Dashboard />
        </Suspense>
    );
}

export default App;
        `,

        output: `
While Dashboard is loading:

Loading Dashboard...

After loading:

Dashboard UI
        `
    }

];