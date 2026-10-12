
export const conditionalRenderingTopics = [

    // ============================================================
    // 1. WHAT IS CONDITIONAL RENDERING?
    // ============================================================

    {
        id: 1,
        module: "conditional-rendering",
        title: "What is Conditional Rendering?",
        concept: "Conditional rendering means displaying different UI elements based on a condition.",
        difficulty: "Easy",

        theory: `
Conditional rendering means React displays different content
depending on whether a condition is true or false.

It is similar to if-else conditions in JavaScript.

For example:

If user is logged in:

Welcome User

Otherwise:

Please Login

React commonly uses:

- if statement
- if-else
- ternary operator
- logical && operator
- multiple conditions

Example:

{isLoggedIn ? <Dashboard /> : <Login />}

If isLoggedIn is true:

Dashboard is displayed.

If isLoggedIn is false:

Login is displayed.
`,

        example: `
import { useState } from "react";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>

            {isLoggedIn ? (
                <h1>Welcome User</h1>
            ) : (
                <h1>Please Login</h1>
            )}

            <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
                Toggle Login
            </button>

        </div>
    );

}

export default App;
`,

        output: `
Please Login

After clicking the button:

Welcome User
`
    },


    // ============================================================
    // 2. IF STATEMENT
    // ============================================================

    {
        id: 2,
        module: "conditional-rendering",
        title: "if Statement",
        concept: "An if statement can be used to decide what JSX should be returned from a component.",
        difficulty: "Easy",

        theory: `
An if statement can be used when rendering depends on a
condition.

Example:

if (isLoggedIn) {
    return <h1>Welcome</h1>;
}

return <h1>Please Login</h1>;

The if statement is normally used before the JSX return
statement.

Example:

function App() {

    if (isLoggedIn) {
        return <Dashboard />;
    }

    return <Login />;
}

This approach is useful when the conditional logic is
large or complex.
`,

        example: `
function App() {

    const isLoggedIn = true;

    if (isLoggedIn) {

        return (
            <h1>Welcome User</h1>
        );

    }

    return (
        <h1>Please Login</h1>
    );

}

export default App;
`,

        output: `
Welcome User
`
    },


    // ============================================================
    // 3. IF-ELSE
    // ============================================================

    {
        id: 3,
        module: "conditional-rendering",
        title: "if-else",
        concept: "if-else is used when React needs to render one UI for a true condition and another UI for a false condition.",
        difficulty: "Easy",

        theory: `
The if-else statement provides two possible paths.

Syntax:

if (condition) {

    // true condition

} else {

    // false condition

}

Example:

if (isLoggedIn) {

    return <h1>Dashboard</h1>;

} else {

    return <h1>Login</h1>;

}

Use if-else when the component should display one of two
different UI sections.
`,

        example: `
function App() {

    const age = 20;

    if (age >= 18) {

        return (
            <h1>Adult User</h1>
        );

    } else {

        return (
            <h1>Minor User</h1>
        );

    }

}

export default App;
`,

        output: `
Adult User
`
    },


    // ============================================================
    // 4. TERNARY OPERATOR
    // ============================================================

    {
        id: 4,
        module: "conditional-rendering",
        title: "Ternary Operator",
        concept: "The ternary operator is a short way to render one of two values based on a condition.",
        difficulty: "Easy",

        theory: `
The ternary operator is commonly used directly inside JSX.

Syntax:

condition ? valueIfTrue : valueIfFalse

Example:

{isLoggedIn ? <Dashboard /> : <Login />}

If the condition is true:

<Dashboard />

is rendered.

If the condition is false:

<Login />

is rendered.

Ternary operators are useful for simple if-else
conditions.

Example:

{isActive ? "Active" : "Inactive"}
`,

        example: `
import { useState } from "react";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>

            <h1>
                {isLoggedIn
                    ? "Welcome User"
                    : "Please Login"
                }
            </h1>

            <button
                onClick={() => setIsLoggedIn(!isLoggedIn)}
            >
                Toggle
            </button>

        </div>
    );

}

export default App;
`,

        output: `
Please Login

After clicking:

Welcome User
`
    },


    // ============================================================
    // 5. LOGICAL && OPERATOR
    // ============================================================

    {
        id: 5,
        module: "conditional-rendering",
        title: "Logical && Operator",
        concept: "The logical && operator renders JSX only when the condition on its left side is truthy.",
        difficulty: "Easy",

        theory: `
The && operator is useful when we want to display something
only when a condition is true.

Syntax:

{condition && <Component />}

Example:

{isLoggedIn && <h1>Welcome User</h1>}

If isLoggedIn is true:

Welcome User

is rendered.

If isLoggedIn is false:

Nothing is rendered from this expression.

It is useful when there is no alternative UI.

Compare:

Ternary:

{isLoggedIn ? <Dashboard /> : <Login />}

&&:

{isLoggedIn && <Dashboard />}

Use && when you only need the true condition.
`,

        example: `
import { useState } from "react";

function App() {

    const [showMessage, setShowMessage] = useState(false);

    return (
        <div>

            <button
                onClick={() => setShowMessage(!showMessage)}
            >
                Show Message
            </button>

            {showMessage && (
                <p>Hello from React</p>
            )}

        </div>
    );

}

export default App;
`,

        output: `
Show Message

After clicking:

Hello from React
`
    },


    // ============================================================
    // 6. MULTIPLE CONDITIONS
    // ============================================================

    {
        id: 6,
        module: "conditional-rendering",
        title: "Multiple Conditions",
        concept: "Multiple conditions allow React to render different UI based on more than two possible states.",
        difficulty: "Medium",

        theory: `
Sometimes an application has more than two possible states.

For example:

loading
success
error

We can use if-else if-else:

if (loading) {

    return <p>Loading...</p>;

} else if (error) {

    return <p>Error occurred</p>;

} else {

    return <p>Data loaded</p>;

}

Multiple conditions can also be written using ternary
operators, but deeply nested ternaries can become difficult
to read.

For complex conditions, if statements or separate
components are usually easier to understand.
`,

        example: `
function App() {

    const status = "success";

    if (status === "loading") {

        return <h1>Loading...</h1>;

    }

    if (status === "error") {

        return <h1>Error occurred</h1>;

    }

    if (status === "success") {

        return <h1>Data loaded successfully</h1>;

    }

    return <h1>Unknown status</h1>;

}

export default App;
`,

        output: `
Data loaded successfully
`
    },


    // ============================================================
    // 7. CONDITIONAL COMPONENTS
    // ============================================================

    {
        id: 7,
        module: "conditional-rendering",
        title: "Conditional Components",
        concept: "Conditional components means rendering different React components depending on application state or conditions.",
        difficulty: "Medium",

        theory: `
React can conditionally render complete components.

For example, a login application may have:

<Login />

when the user is not logged in.

And:

<Dashboard />

when the user is logged in.

Example:

function App() {

    if (isLoggedIn) {
        return <Dashboard />;
    }

    return <Login />;
}

This keeps large UI sections separated into reusable
components.

Conditional components are useful for:

- Login / Logout UI
- Admin / User UI
- Different pages
- Permission-based UI
- Loading screens
- Error screens
`,

        example: `
function Login() {

    return (
        <h1>Please Login</h1>
    );

}

function Dashboard() {

    return (
        <h1>Dashboard</h1>
    );

}

function App() {

    const isLoggedIn = true;

    if (isLoggedIn) {

        return <Dashboard />;

    }

    return <Login />;

}

export default App;
`,

        output: `
Dashboard
`
    },


    // ============================================================
    // 8. LOADING CONDITIONS
    // ============================================================

    {
        id: 8,
        module: "conditional-rendering",
        title: "Loading Conditions",
        concept: "Loading conditions are used to display a loading UI while data or an asynchronous operation is in progress.",
        difficulty: "Medium",

        theory: `
When an application loads data from an API, the data may not
be available immediately.

A loading state can be used to display a loading message.

Example:

const [loading, setLoading] = useState(true);

Then:

{loading && <p>Loading...</p>}

After the API request finishes:

setLoading(false);

The loading message disappears.

A common pattern is:

if (loading) {
    return <Loading />;
}

if (error) {
    return <Error />;
}

return <Data />;

This creates three common UI states:

Loading
   ↓
Success

or

Loading
   ↓
Error
`,

        example: `
import { useEffect, useState } from "react";

function App() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 2000);

    }, []);

    if (loading) {

        return (
            <h1>Loading...</h1>
        );

    }

    return (
        <h1>Data Loaded</h1>
    );

}

export default App;
`,

        output: `
Initially:

Loading...

After 2 seconds:

Data Loaded
`
    }

];

