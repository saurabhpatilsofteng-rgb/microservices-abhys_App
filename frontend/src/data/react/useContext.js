export const useContextTopics = [

    // ============================================================
    // 1. WHAT IS CONTEXT?
    // ============================================================

    {
        id: 1,
        module: "useContext",
        title: "What is Context?",
        concept: "Context is a React feature used to share data between components without passing props manually through every level of the component tree.",
        difficulty: "Easy",

        theory: `
Context allows data to be shared between multiple components.

Normally, data is passed using props:

Parent
  ↓ props
Child
  ↓ props
GrandChild

If many components need the same data, passing props
through every component can become difficult.

This problem is called prop drilling.

Context provides another way to share data.

Common data shared using Context:

- Theme
- User information
- Language
- Authentication
- Application settings

Context has three main parts:

1. createContext()
2. Provider
3. useContext()
`,

        example: `
import { createContext } from "react";

const UserContext = createContext();

function App() {

    return (
        <UserContext.Provider
            value="Saurabh"
        >
            <Profile />
        </UserContext.Provider>
    );
}

function Profile() {

    return <h2>User Profile</h2>;
}

export default App;
`,

        output: `
User Profile
`
    },


    // ============================================================
    // 2. WHY CONTEXT?
    // ============================================================

    {
        id: 2,
        module: "useContext",
        title: "Why Context?",
        concept: "Context is used to avoid prop drilling when the same data needs to be accessed by components at different levels of the component tree.",
        difficulty: "Easy",

        theory: `
Without Context, data may need to be passed through
multiple components.

Example:

App
 ↓
Navbar
 ↓
UserMenu
 ↓
Profile

If Profile needs user data, App may have to pass the
data through Navbar and UserMenu.

This is called prop drilling.

Context allows the data to be provided at a higher
level and accessed directly by the required component.

Context is useful when:

- Many components need the same data
- Components are deeply nested
- Data is shared across a section of the application
`,

        example: `
import {
    createContext,
    useContext
} from "react";

const UserContext =
    createContext();

function App() {

    const user = "Saurabh";

    return (
        <UserContext.Provider
            value={user}
        >
            <Navbar />
        </UserContext.Provider>
    );
}

function Navbar() {

    return <UserMenu />;
}

function UserMenu() {

    const user =
        useContext(UserContext);

    return <h2>Hello {user}</h2>;
}

export default App;
`,

        output: `
Hello Saurabh
`
    },


    // ============================================================
    // 3. CREATECONTEXT
    // ============================================================

    {
        id: 3,
        module: "useContext",
        title: "createContext",
        concept: "createContext is used to create a Context object that allows data to be shared between components.",
        difficulty: "Easy",

        theory: `
createContext() creates a Context object.

Syntax:

const MyContext = createContext(defaultValue);

Example:

const UserContext =
    createContext(null);

The Context object can then be used with a
Provider.

Example:

<UserContext.Provider value={user}>
    ...
</UserContext.Provider>

The default value is used when a component reads
the Context without a matching Provider above it.

createContext is imported from React:

import {
    createContext
} from "react";
`,

        example: `
import {
    createContext
} from "react";

const UserContext =
    createContext("Guest");

function App() {

    return (
        <h2>
            User Context Created
        </h2>
    );
}

export default App;
`,

        output: `
User Context Created

Context created successfully.
`
    },


    // ============================================================
    // 4. CONTEXT PROVIDER
    // ============================================================

    {
        id: 4,
        module: "useContext",
        title: "Context Provider",
        concept: "The Context Provider supplies a value to all descendant components that read that Context.",
        difficulty: "Medium",

        theory: `
A Provider is used to provide data to components.

Syntax:

<MyContext.Provider value={data}>
    <Child />
</MyContext.Provider>

The value prop contains the data that should be
shared.

Every descendant component can access this value
using useContext().

Example:

<UserContext.Provider value="Saurabh">

    <Profile />

</UserContext.Provider>

Here Profile can access "Saurabh".

Important:

The Provider must be above the component that
needs to consume the Context.
`,

        example: `
import {
    createContext,
    useContext
} from "react";

const UserContext =
    createContext();

function App() {

    return (
        <UserContext.Provider
            value="Saurabh"
        >
            <Profile />
        </UserContext.Provider>
    );
}

function Profile() {

    const user =
        useContext(UserContext);

    return (
        <h2>
            Welcome {user}
        </h2>
    );
}

export default App;
`,

        output: `
Welcome Saurabh
`
    },


    // ============================================================
    // 5. CONTEXT CONSUMER
    // ============================================================

    {
        id: 5,
        module: "useContext",
        title: "Context Consumer",
        concept: "A Context Consumer is a component that reads the value provided by a Context Provider.",
        difficulty: "Medium",

        theory: `
A Consumer is used to read data from Context.

The traditional way is using:

<MyContext.Consumer>

    {value => (
        ...
    )}

</MyContext.Consumer>

The Consumer receives the current Context value.

Modern React applications usually use the
useContext Hook instead because it is simpler.

Traditional approach:

Context
   ↓
Provider
   ↓
Consumer

Modern approach:

Context
   ↓
Provider
   ↓
useContext()
`,

        example: `
import {
    createContext
} from "react";

const UserContext =
    createContext();

function App() {

    return (
        <UserContext.Provider
            value="Saurabh"
        >

            <UserContext.Consumer>
                {user => (
                    <h2>
                        Hello {user}
                    </h2>
                )}
            </UserContext.Consumer>

        </UserContext.Provider>
    );
}

export default App;
`,

        output: `
Hello Saurabh
`
    },


    // ============================================================
    // 6. USECONTEXT
    // ============================================================

    {
        id: 6,
        module: "useContext",
        title: "useContext",
        concept: "useContext is a React Hook used to read and subscribe to a Context value from a component.",
        difficulty: "Easy",

        theory: `
useContext() is the modern way to consume Context.

Syntax:

const value = useContext(MyContext);

First create Context:

const UserContext =
    createContext();

Then provide a value:

<UserContext.Provider
    value="Saurabh"
>
    <Profile />
</UserContext.Provider>

Inside Profile:

const user =
    useContext(UserContext);

Now user contains:

"Saurabh"

If the Provider value changes, components using
that Context may re-render with the new value.
`,

        example: `
import {
    createContext,
    useContext
} from "react";

const UserContext =
    createContext();

function App() {

    return (
        <UserContext.Provider
            value="Saurabh"
        >
            <Profile />
        </UserContext.Provider>
    );
}

function Profile() {

    const user =
        useContext(UserContext);

    return (
        <h2>
            Welcome {user}
        </h2>
    );
}

export default App;
`,

        output: `
Welcome Saurabh
`
    },


    // ============================================================
    // 7. GLOBAL STATE
    // ============================================================

    {
        id: 7,
        module: "useContext",
        title: "Global State",
        concept: "Context can be used to share application-wide or widely needed state such as theme, language, user, or settings.",
        difficulty: "Medium",

        theory: `
Context can be used to share state between many
components.

Example:

const ThemeContext =
    createContext();

The Provider can contain state:

const [theme, setTheme] =
    useState("light");

Then provide both:

value={{
    theme,
    setTheme
}}

Any child component can access them using
useContext().

This is useful for:

- Theme
- Language
- User preferences
- Authentication state
- Application settings

Context is not automatically a complete global-state
management solution. For complex state, tools such as
Redux may be more appropriate.
`,

        example: `
import {
    createContext,
    useContext,
    useState
} from "react";

const ThemeContext =
    createContext();

function App() {

    const [theme, setTheme] =
        useState("light");

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            <Dashboard />
        </ThemeContext.Provider>
    );
}

function Dashboard() {

    const {
        theme,
        setTheme
    } = useContext(ThemeContext);

    return (
        <div>

            <h2>
                Theme: {theme}
            </h2>

            <button
                onClick={() =>
                    setTheme(
                        theme === "light"
                            ? "dark"
                            : "light"
                    )
                }
            >
                Change Theme
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Theme: light

Click Change Theme:

Theme: dark
`
    },


    // ============================================================
    // 8. AUTHENTICATION CONTEXT
    // ============================================================

    {
        id: 8,
        module: "useContext",
        title: "Authentication Context",
        concept: "Authentication Context can share the current user and authentication actions across components without passing them through props.",
        difficulty: "Medium",

        theory: `
Authentication information is often needed by many
components.

For example:

- Navbar
- Profile
- Dashboard
- Protected routes
- Logout button

Instead of passing the user through many components,
we can create an AuthContext.

AuthContext can contain:

- Current user
- Login function
- Logout function
- Authentication status

Example:

const AuthContext =
    createContext();

Then provide:

<AuthContext.Provider
    value={{
        user,
        login,
        logout
    }}
>

Any child component can use:

const {
    user,
    logout
} = useContext(AuthContext);

This is a common pattern in React applications.
`,

        example: `
import {
    createContext,
    useContext,
    useState
} from "react";

const AuthContext =
    createContext();

function App() {

    const [user, setUser] =
        useState(null);

    function login() {

        setUser({
            name: "Saurabh"
        });
    }

    function logout() {

        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            <Navbar />
        </AuthContext.Provider>
    );
}

function Navbar() {

    const {
        user,
        login,
        logout
    } = useContext(AuthContext);

    return (
        <div>

            {user ? (
                <>
                    <h2>
                        Welcome {user.name}
                    </h2>

                    <button onClick={logout}>
                        Logout
                    </button>
                </>
            ) : (
                <button onClick={login}>
                    Login
                </button>
            )}

        </div>
    );
}

export default App;
`,

        output: `
Initial:

[ Login ]

Click Login:

Welcome Saurabh
[ Logout ]

Click Logout:

[ Login ]
`
    },


    // ============================================================
    // 9. CONTEXT VS REDUX
    // ============================================================

    {
        id: 9,
        module: "useContext",
        title: "Context vs Redux",
        concept: "Context is a React feature for sharing values, while Redux is a dedicated state-management library designed for predictable and structured application state management.",
        difficulty: "Advanced",

        theory: `
Context and Redux can both help share state, but
they solve different problems.

Context:

- Built into React
- No external library required
- Simple to set up
- Good for shared values
- Useful for theme, language and authentication
- Can become difficult to manage for complex state

Redux:

- External state-management library
- Provides a centralized store
- Uses actions and reducers
- Good for complex application state
- Provides structured state updates
- Redux Toolkit is the recommended modern way to use Redux

Simple comparison:

Context
    ↓
Share values between components

Redux
    ↓
Manage complex application state

Use Context when:

The shared state is relatively simple and localized.

Use Redux when:

The application has complex shared state,
many state updates, or needs a structured
state-management architecture.

Context and Redux are not direct replacements in
every situation. They can also be used together.
`,

        example: `
/*
Context Example
*/

import {
    createContext,
    useContext
} from "react";

const UserContext =
    createContext();

function App() {

    return (
        <UserContext.Provider
            value="Saurabh"
        >
            <Profile />
        </UserContext.Provider>
    );
}

function Profile() {

    const user =
        useContext(UserContext);

    return <h2>{user}</h2>;
}


/*
Redux Example

Redux normally uses:

Store
  ↓
Slice / Reducer
  ↓
Action
  ↓
Dispatch
  ↓
State Update
  ↓
Component
*/

export default App;
`,

        output: `
Context:

Saurabh

Redux:

Centralized application state
managed through the Redux architecture.
`
    }

];