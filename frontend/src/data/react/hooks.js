export const hooksTopics = [

    // ============================================================
    // 1. WHAT ARE HOOKS?
    // ============================================================

    {
        id: 1,
        module: "hooks",
        title: "What are Hooks?",
        concept: "Hooks are special React functions that allow functional components to use features such as state, side effects, context, refs, and other React functionality.",
        difficulty: "Easy",

        theory: `
Hooks are special functions provided by React.

They allow functional components to use React features
without writing a class component.

Common React Hooks are:

- useState
- useEffect
- useContext
- useReducer
- useRef
- useMemo
- useCallback
- useLayoutEffect

Example:

const [count, setCount] = useState(0);

Here:

useState() creates state.

Hooks were introduced to make it easier to reuse logic
and manage component behavior using functional components.
`,

        example: `
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Count: 0

After clicking Increment:

Count: 1
`
    },


    // ============================================================
    // 2. RULES OF HOOKS
    // ============================================================

    {
        id: 2,
        module: "hooks",
        title: "Rules of Hooks",
        concept: "Rules of Hooks are guidelines that ensure React can correctly track and manage Hook state between renders.",
        difficulty: "Medium",

        theory: `
React Hooks follow two main rules.

1. Only call Hooks at the top level.

Do not call Hooks inside:

- if statements
- loops
- nested functions
- conditions

Correct:

const [count, setCount] = useState(0);

Incorrect:

if (condition) {
    const [count, setCount] = useState(0);
}

2. Only call Hooks from React functions.

Hooks should be called inside:

- React functional components
- Custom Hooks

Example:

function App() {

    const [name, setName] = useState("");

    return <h2>{name}</h2>;
}

Following these rules allows React to maintain the
correct order of Hooks between renders.
`,

        example: `
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h2>{count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Add
            </button>

        </div>
    );
}

export default App;
`,

        output: `
0

After clicking Add:

1
`
    },


    // ============================================================
    // 3. USESTATE
    // ============================================================

    {
        id: 3,
        module: "hooks",
        title: "useState",
        concept: "useState is a React Hook used to create and manage state inside a functional component.",
        difficulty: "Easy",

        theory: `
useState is one of the most commonly used React Hooks.

It allows a functional component to store data that can
change over time.

Syntax:

const [state, setState] = useState(initialValue);

Example:

const [count, setCount] = useState(0);

Here:

count
    -> current state value

setCount
    -> function used to update the state

0
    -> initial value

When state changes, React re-renders the component.

State can contain:

- String
- Number
- Boolean
- Array
- Object
`,

        example: `
import { useState } from "react";

function App() {

    const [name, setName] = useState("");

    return (
        <div>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />

            <h2>Hello {name}</h2>

        </div>
    );
}

export default App;
`,

        output: `
Input:

Saurabh

Output:

Hello Saurabh
`
    },


    // ============================================================
    // 4. USEEFFECT
    // ============================================================

    {
        id: 4,
        module: "hooks",
        title: "useEffect",
        concept: "useEffect is a React Hook used to perform side effects such as API calls, subscriptions, timers, and updating external systems.",
        difficulty: "Medium",

        theory: `
useEffect is used when a component needs to perform a
side effect.

Common useEffect use cases:

- API calls
- Fetching data
- Timers
- Event listeners
- Subscriptions
- Updating document title

Syntax:

useEffect(() => {

    // side effect

}, []);

The second argument is called the dependency array.

Empty dependency array:

useEffect(() => {

    console.log("Component mounted");

}, []);

This effect runs after the component is mounted.

Example with dependency:

useEffect(() => {

    console.log(count);

}, [count]);

This effect runs when count changes.
`,

        example: `
import { useEffect, useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        document.title = "Count: " + count;

    }, [count]);

    return (
        <div>

            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Page title:

Count: 0

After clicking Increment:

Count: 1
`
    },


    // ============================================================
    // 5. USECONTEXT
    // ============================================================

    {
        id: 5,
        module: "hooks",
        title: "useContext",
        concept: "useContext is a React Hook used to access data from a React Context without passing props through every component.",
        difficulty: "Medium",

        theory: `
useContext is used to share data between components.

It helps avoid prop drilling.

Example data that can be shared using Context:

- User information
- Theme
- Language
- Authentication status
- Application settings

First create a Context:

const UserContext = createContext();

Then provide data:

<UserContext.Provider value={user}>
    <App />
</UserContext.Provider>

A child component can access the data using:

const user = useContext(UserContext);

This allows components to access shared data directly.
`,

        example: `
import {
    createContext,
    useContext
} from "react";

const UserContext = createContext();

function Profile() {

    const user = useContext(UserContext);

    return (
        <h2>
            Welcome {user}
        </h2>
    );
}

function App() {

    return (
        <UserContext.Provider value="Saurabh">

            <Profile />

        </UserContext.Provider>
    );
}

export default App;
`,

        output: `
Welcome Saurabh
`
    },


    // ============================================================
    // 6. USEREDUCER
    // ============================================================

    {
        id: 6,
        module: "hooks",
        title: "useReducer",
        concept: "useReducer is a React Hook used to manage complex state logic using a reducer function and actions.",
        difficulty: "Medium",

        theory: `
useReducer is an alternative to useState.

It is useful when state logic becomes complex.

Syntax:

const [state, dispatch] = useReducer(
    reducer,
    initialState
);

The reducer function receives:

- current state
- action

Example:

function reducer(state, action) {

    if (action.type === "increment") {

        return {
            count: state.count + 1
        };
    }

    return state;
}

An action is sent using:

dispatch({
    type: "increment"
});

useReducer is commonly used when multiple actions
can change the same state.
`,

        example: `
import {
    useReducer
} from "react";

function reducer(state, action) {

    switch (action.type) {

        case "increment":
            return {
                count: state.count + 1
            };

        case "decrement":
            return {
                count: state.count - 1
            };

        default:
            return state;
    }
}

function App() {

    const [state, dispatch] = useReducer(
        reducer,
        { count: 0 }
    );

    return (
        <div>

            <h2>Count: {state.count}</h2>

            <button
                onClick={() =>
                    dispatch({ type: "increment" })
                }
            >
                +
            </button>

            <button
                onClick={() =>
                    dispatch({ type: "decrement" })
                }
            >
                -
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Count: 0

Click +:

Count: 1

Click -:

Count: 0
`
    },


    // ============================================================
    // 7. USEREF
    // ============================================================

    {
        id: 7,
        module: "hooks",
        title: "useRef",
        concept: "useRef is a React Hook used to store a mutable value or access a DOM element without causing a re-render.",
        difficulty: "Medium",

        theory: `
useRef creates a reference object.

Syntax:

const inputRef = useRef(null);

The value is stored in:

inputRef.current

useRef is commonly used for:

- Accessing DOM elements
- Focusing an input
- Storing timer IDs
- Storing previous values
- Keeping mutable values between renders

Changing ref.current does not cause a component
to re-render.

Example:

inputRef.current.focus();

This can be used to focus an input element.
`,

        example: `
import {
    useRef
} from "react";

function App() {

    const inputRef = useRef(null);

    function handleFocus() {

        inputRef.current.focus();
    }

    return (
        <div>

            <input
                ref={inputRef}
                placeholder="Enter name"
            />

            <button onClick={handleFocus}>
                Focus Input
            </button>

        </div>
    );
}

export default App;
`,

        output: `
[ Enter name ]

Click:

Focus Input

The cursor moves into the input field.
`
    },


    // ============================================================
    // 8. USEMEMO
    // ============================================================

    {
        id: 8,
        module: "hooks",
        title: "useMemo",
        concept: "useMemo is a React Hook used to memoize the result of an expensive calculation and reuse it until its dependencies change.",
        difficulty: "Advanced",

        theory: `
useMemo is used to optimize expensive calculations.

Syntax:

const result = useMemo(() => {

    return expensiveCalculation();

}, [dependency]);

React remembers the calculated result.

The calculation runs again only when a dependency
changes.

Example:

const result = useMemo(() => {

    return number * number;

}, [number]);

useMemo should be used for performance optimization,
not for every calculation.

It can be useful when:

- Calculation is expensive
- Component renders frequently
- Calculation depends on specific values
`,

        example: `
import {
    useMemo,
    useState
} from "react";

function App() {

    const [number, setNumber] = useState(2);
    const [name, setName] = useState("");

    const square = useMemo(() => {

        console.log("Calculating...");

        return number * number;

    }, [number]);

    return (
        <div>

            <input
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
                placeholder="Name"
            />

            <h2>Square: {square}</h2>

            <button
                onClick={() =>
                    setNumber(number + 1)
                }
            >
                Increase Number
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Square: 4

Change Name:

Square remains 4

Increase Number:

Square: 9
`
    },


    // ============================================================
    // 9. USECALLBACK
    // ============================================================

    {
        id: 9,
        module: "hooks",
        title: "useCallback",
        concept: "useCallback is a React Hook used to memoize a function so that the same function reference can be reused until its dependencies change.",
        difficulty: "Advanced",

        theory: `
useCallback is used to memoize functions.

Normally, a function is recreated whenever a component
renders.

Example:

function handleClick() {

    console.log("Clicked");
}

With useCallback:

const handleClick = useCallback(() => {

    console.log("Clicked");

}, []);

React can reuse the same function reference until the
dependencies change.

useCallback is commonly useful when passing functions
to memoized child components.

Syntax:

const functionName = useCallback(
    () => {
        // function
    },
    [dependencies]
);

useCallback is mainly a performance optimization.
`,

        example: `
import {
    useCallback,
    useState
} from "react";

function App() {

    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {

        console.log("Button clicked");

    }, []);

    return (
        <div>

            <h2>Count: {count}</h2>

            <button
                onClick={() =>
                    setCount(count + 1)
                }
            >
                Increment
            </button>

            <button onClick={handleClick}>
                Click
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Count: 0

After Increment:

Count: 1

Clicking Click:

Button clicked
`
    },


    // ============================================================
    // 10. USELAYOUTEFFECT
    // ============================================================

    {
        id: 10,
        module: "hooks",
        title: "useLayoutEffect",
        concept: "useLayoutEffect is a React Hook that runs after the DOM has been updated but before the browser paints the screen.",
        difficulty: "Advanced",

        theory: `
useLayoutEffect is similar to useEffect.

The important difference is when it runs.

useEffect:

Render
  ↓
Browser paints
  ↓
Effect runs

useLayoutEffect:

Render
  ↓
DOM updated
  ↓
Layout effect runs
  ↓
Browser paints

useLayoutEffect is useful when you need to:

- Measure DOM elements
- Read element dimensions
- Calculate layout
- Make synchronous DOM adjustments

Example:

const boxRef = useRef(null);

useLayoutEffect(() => {

    console.log(boxRef.current.offsetWidth);

}, []);

Because it runs before the browser paints, it can prevent
visible layout changes in some cases.

It should not be used for normal API calls or most
side effects. useEffect is generally preferred for those.
`,

        example: `
import {
    useLayoutEffect,
    useRef,
    useState
} from "react";

function App() {

    const boxRef = useRef(null);
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {

        setWidth(boxRef.current.offsetWidth);

    }, []);

    return (
        <div>

            <div
                ref={boxRef}
                style={{
                    width: "200px",
                    padding: "20px"
                }}
            >
                React Box
            </div>

            <p>
                Width: {width}px
            </p>

        </div>
    );
}

export default App;
`,

        output: `
React Box

Width: 240px
`
    },


    // ============================================================
    // 11. CUSTOM HOOKS
    // ============================================================

    {
        id: 11,
        module: "hooks",
        title: "Custom Hooks",
        concept: "A Custom Hook is a reusable JavaScript function that uses one or more React Hooks to share stateful logic between components.",
        difficulty: "Advanced",

        theory: `
A Custom Hook is a JavaScript function whose name starts
with "use".

Examples:

- useCounter
- useFetch
- useAuth
- useForm
- useLocalStorage

Custom Hooks allow us to reuse logic between components.

Example:

function useCounter() {

    const [count, setCount] = useState(0);

    function increment() {

        setCount(count + 1);
    }

    return {
        count,
        increment
    };
}

The Custom Hook can then be used inside a component:

const { count, increment } = useCounter();

Custom Hooks share logic, not the same state instance.
Each component calling the Hook gets its own state.
`,

        example: `
import {
    useState
} from "react";

function useCounter() {

    const [count, setCount] = useState(0);

    function increment() {

        setCount(count + 1);
    }

    return {
        count,
        increment
    };
}

function App() {

    const {
        count,
        increment
    } = useCounter();

    return (
        <div>

            <h2>Count: {count}</h2>

            <button onClick={increment}>
                Increment
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Count: 0

After clicking Increment:

Count: 1
`
    },


    // ============================================================
    // 12. HOOK BEST PRACTICES
    // ============================================================

    {
        id: 12,
        module: "hooks",
        title: "Hook Best Practices",
        concept: "Hook best practices help keep React components predictable, maintainable, performant, and easy to understand.",
        difficulty: "Medium",

        theory: `
Important React Hook best practices:

1. Follow the Rules of Hooks.

Always call Hooks at the top level of a component or
Custom Hook.

2. Keep effects focused.

Do not put unrelated logic inside one useEffect.

3. Use the correct dependency array.

Example:

useEffect(() => {

    console.log(userId);

}, [userId]);

4. Do not use useMemo everywhere.

Use it when memoization provides a real performance
benefit.

5. Do not use useCallback everywhere.

Use it mainly when function identity matters, such as
when working with memoized child components.

6. Prefer useState for simple state.

Use useReducer when state transitions become complex.

7. Use useRef for mutable values that should not trigger
a re-render.

8. Create Custom Hooks for reusable stateful logic.

9. Keep Custom Hook names starting with "use".

10. Avoid unnecessary effects.

If something can be calculated directly during rendering,
there may be no need for useEffect.

Good Hook usage makes React applications easier to maintain
and debug.
`,

        example: `
import {
    useEffect,
    useState
} from "react";

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        document.title = "Count: " + count;

    }, [count]);

    return (
        <div>

            <h2>Count: {count}</h2>

            <button
                onClick={() =>
                    setCount(count + 1)
                }
            >
                Increment
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Count: 0

After clicking Increment:

Count: 1

Browser title:

Count: 1
`
    }

];