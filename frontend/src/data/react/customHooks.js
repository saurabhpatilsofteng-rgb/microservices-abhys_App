export const customHooksTopics = [

    // ============================================================
    // 1. What is a Custom Hook?
    // ============================================================
    {
        id: 1,
        module: "customHooks",
        title: "What is a Custom Hook?",
        concept: "Creating your own reusable React Hook",
        difficulty: "Easy",

        theory: `
A Custom Hook is a JavaScript function that uses one or more React Hooks.

Custom Hooks allow us to reuse stateful logic between different components.

A Custom Hook name must start with "use".

Examples:
- useFetch()
- useForm()
- useAuth()
- useLocalStorage()
        `,

        example: `
import { useState } from "react";

function useCounter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return { count, increment };
}

function App() {

    const { count, increment } = useCounter();

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment}>
                Increment
            </button>
        </div>
    );
}

export default App;
        `,

        output: `
0

After clicking the button:

1
2
3
...
        `
    },

    // ============================================================
    // 2. Why Custom Hooks?
    // ============================================================
    {
        id: 2,
        module: "customHooks",
        title: "Why Custom Hooks?",
        concept: "Reusing stateful logic between components",
        difficulty: "Easy",

        theory: `
Custom Hooks are used when the same logic is required in multiple components.

Instead of writing the same logic again and again, we can create a Custom Hook
and reuse it.

Benefits:
- Reuse logic
- Reduce duplicate code
- Keep components clean
- Improve code organization
- Make code easier to maintain
        `,

        example: `
import { useState } from "react";

function useCounter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return { count, increment };
}

function CounterOne() {

    const { count, increment } = useCounter();

    return (
        <div>
            <h3>Counter One: {count}</h3>
            <button onClick={increment}>
                +
            </button>
        </div>
    );
}

function CounterTwo() {

    const { count, increment } = useCounter();

    return (
        <div>
            <h3>Counter Two: {count}</h3>
            <button onClick={increment}>
                +
            </button>
        </div>
    );
}

function App() {

    return (
        <>
            <CounterOne />
            <CounterTwo />
        </>
    );
}

export default App;
        `,

        output: `
Counter One: 0
Counter Two: 0

Each component has its own counter state.
        `
    },

    // ============================================================
    // 3. Custom Hook Naming
    // ============================================================
    {
        id: 3,
        module: "customHooks",
        title: "Custom Hook Naming",
        concept: "Naming convention for Custom Hooks",
        difficulty: "Easy",

        theory: `
A Custom Hook must start with the word "use".

This naming convention tells React and developers that the function is a Hook.

Correct:
- useFetch()
- useForm()
- useAuth()
- useLocalStorage()

Incorrect:
- fetchData()
- formHandler()
- authentication()
- localStorageData()

The "use" prefix is important because Hooks follow special Rules of Hooks.
        `,

        example: `
import { useState } from "react";

function useCounter() {

    const [count, setCount] = useState(0);

    return count;
}

function App() {

    const count = useCounter();

    return (
        <h2>Count: {count}</h2>
    );
}

export default App;
        `,

        output: `
Count: 0
        `
    },

    // ============================================================
    // 4. useFetch
    // ============================================================
    {
        id: 4,
        module: "customHooks",
        title: "useFetch",
        concept: "Creating a Custom Hook for API requests",
        difficulty: "Medium",

        theory: `
useFetch is a Custom Hook used to reuse API fetching logic.

It can manage:
- API data
- Loading state
- Error state

Instead of writing fetch logic in every component, we can create one
useFetch Hook and reuse it.
        `,

        example: `
import { useEffect, useState } from "react";

function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch(url)
            .then(response => response.json())
            .then(result => {
                setData(result);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });

    }, [url]);

    return { data, loading, error };
}

function App() {

    const {
        data,
        loading,
        error
    } = useFetch("https://jsonplaceholder.typicode.com/users");

    if (loading) {
        return <h2>Loading...</h2>;
    }

    if (error) {
        return <h2>Error occurred</h2>;
    }

    return (
        <div>
            {data.map(user => (
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

Leanne Graham
Ervin Howell
Clementine Bauch
...
        `
    },

    // ============================================================
    // 5. useForm
    // ============================================================
    {
        id: 5,
        module: "customHooks",
        title: "useForm",
        concept: "Creating a reusable Hook for form handling",
        difficulty: "Medium",

        theory: `
useForm is a Custom Hook that can manage form data.

It can handle:
- Input values
- Input changes
- Form reset
- Form submission
- Validation

This is useful when an application contains many forms.
        `,

        example: `
import { useState } from "react";

function useForm(initialValues) {

    const [values, setValues] = useState(initialValues);

    const handleChange = (event) => {

        const { name, value } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    };

    const resetForm = () => {
        setValues(initialValues);
    };

    return {
        values,
        handleChange,
        resetForm
    };
}

function App() {

    const {
        values,
        handleChange,
        resetForm
    } = useForm({
        name: "",
        email: ""
    });

    return (
        <div>

            <input
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Name"
            />

            <input
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="Email"
            />

            <button onClick={resetForm}>
                Reset
            </button>

            <p>Name: {values.name}</p>
            <p>Email: {values.email}</p>

        </div>
    );
}

export default App;
        `,

        output: `
Name: Saurabh
Email: saurabh@gmail.com

Click Reset:

Name:
Email:
        `
    },

    // ============================================================
    // 6. useLocalStorage
    // ============================================================
    {
        id: 6,
        module: "customHooks",
        title: "useLocalStorage",
        concept: "Creating a Hook for browser localStorage",
        difficulty: "Medium",

        theory: `
useLocalStorage is a Custom Hook that stores React state in browser
localStorage.

Normally useState data is lost when the page is refreshed.

With useLocalStorage, the value can be saved in localStorage and restored
when the component loads again.
        `,

        example: `
import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState(() => {

        const savedValue = localStorage.getItem(key);

        return savedValue
            ? JSON.parse(savedValue)
            : initialValue;
    });

    useEffect(() => {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );

    }, [key, value]);

    return [value, setValue];
}

function App() {

    const [name, setName] =
        useLocalStorage("name", "");

    return (
        <div>

            <input
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
                placeholder="Enter name"
            />

            <h2>Hello {name}</h2>

        </div>
    );
}

export default App;
        `,

        output: `
Enter name:

Saurabh

Hello Saurabh

After page refresh:

Hello Saurabh
        `
    },

    // ============================================================
    // 7. useAuth
    // ============================================================
    {
        id: 7,
        module: "customHooks",
        title: "useAuth",
        concept: "Creating a reusable authentication Hook",
        difficulty: "Advanced",

        theory: `
useAuth is a Custom Hook commonly used to access authentication-related
logic.

It can provide:
- Current user
- Login
- Logout
- Authentication status

The actual authentication state is commonly stored in Context or another
state-management solution, while useAuth provides a simple interface for
components.
        `,

        example: `
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const login = () => {
        setUser({
            name: "Saurabh"
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{ user, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {

    return useContext(AuthContext);
}

function Dashboard() {

    const {
        user,
        login,
        logout
    } = useAuth();

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

function App() {

    return (
        <AuthProvider>
            <Dashboard />
        </AuthProvider>
    );
}

export default App;
        `,

        output: `
Before Login:

Login

After Login:

Welcome Saurabh
Logout
        `
    },

    // ============================================================
    // 8. Reusing Logic
    // ============================================================
    {
        id: 8,
        module: "customHooks",
        title: "Reusing Logic",
        concept: "Sharing stateful logic between components",
        difficulty: "Medium",

        theory: `
The main purpose of Custom Hooks is logic reuse.

A Custom Hook allows multiple components to use the same logic without
duplicating the implementation.

Important point:

Custom Hooks reuse logic, not the state itself.

If two components call the same Custom Hook, each component normally gets
its own independent Hook state.
        `,

        example: `
import { useState } from "react";

function useCounter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    return {
        count,
        increment
    };
}

function CounterOne() {

    const {
        count,
        increment
    } = useCounter();

    return (
        <div>

            <h2>
                Counter One: {count}
            </h2>

            <button onClick={increment}>
                Increment
            </button>

        </div>
    );
}

function CounterTwo() {

    const {
        count,
        increment
    } = useCounter();

    return (
        <div>

            <h2>
                Counter Two: {count}
            </h2>

            <button onClick={increment}>
                Increment
            </button>

        </div>
    );
}

function App() {

    return (
        <>
            <CounterOne />
            <CounterTwo />
        </>
    );
}

export default App;
        `,

        output: `
Counter One: 0
Counter Two: 0

Click Counter One:

Counter One: 1
Counter Two: 0

The logic is reused,
but the state is independent.
        `
    }

];