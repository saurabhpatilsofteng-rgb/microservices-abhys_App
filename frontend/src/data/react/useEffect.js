export const useEffectTopics = [

    // ============================================================
    // 1. WHAT IS USEEFFECT?
    // ============================================================

    {
        id: 1,
        module: "useEffect",
        title: "What is useEffect?",
        concept: "useEffect is a React Hook used to perform side effects in a functional component.",
        difficulty: "Easy",

        theory: `
useEffect is a React Hook used to perform side effects.

A side effect is an operation that happens outside the
normal rendering process of a component.

Common examples are:

- API calls
- Fetching data
- Updating document title
- Timers
- Event listeners
- Subscriptions
- Working with browser APIs

Syntax:

useEffect(() => {

    // side effect

}, []);

The effect runs after React renders the component.

Example:

useEffect(() => {

    console.log("Component rendered");

}, []);

The useEffect Hook must be imported from React.
`,

        example: `
import { useEffect } from "react";

function App() {

    useEffect(() => {

        console.log("Component rendered");

    }, []);

    return (
        <h2>
            Hello React
        </h2>
    );
}

export default App;
`,

        output: `
Hello React

Console:

Component rendered
`
    },


    // ============================================================
    // 2. SIDE EFFECTS
    // ============================================================

    {
        id: 2,
        module: "useEffect",
        title: "Side Effects",
        concept: "A side effect is an operation performed by a component that interacts with something outside its rendering logic.",
        difficulty: "Easy",

        theory: `
A side effect is an operation that affects or interacts
with something outside the component's calculation.

Examples:

- API requests
- Changing document.title
- Setting timers
- Adding event listeners
- Removing event listeners
- Subscribing to services
- Reading browser APIs

Example:

document.title = "React App";

This changes something outside the React component.

useEffect is commonly used to perform these operations.

Example:

useEffect(() => {

    document.title = "React App";

}, []);

Side effects should generally be handled inside
useEffect instead of directly during rendering.
`,

        example: `
import { useEffect } from "react";

function App() {

    useEffect(() => {

        document.title = "My React App";

    }, []);

    return (
        <h2>
            Welcome
        </h2>
    );
}

export default App;
`,

        output: `
Page:

Welcome

Browser Tab Title:

My React App
`
    },


    // ============================================================
    // 3. USEEFFECT SYNTAX
    // ============================================================

    {
        id: 3,
        module: "useEffect",
        title: "useEffect Syntax",
        concept: "The useEffect syntax contains an effect function and an optional dependency array that controls when the effect runs.",
        difficulty: "Easy",

        theory: `
The basic syntax of useEffect is:

useEffect(() => {

    // effect code

}, [dependencies]);

There are two important parts:

1. Effect function

The function containing the side-effect logic.

2. Dependency array

The array determines when the effect should run.

Example:

useEffect(() => {

    console.log("Effect executed");

}, []);

The empty dependency array means the effect runs after
the initial render.

Another example:

useEffect(() => {

    console.log(count);

}, [count]);

This effect runs when count changes.
`,

        example: `
import {
    useEffect,
    useState
} from "react";

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("Count:", count);

    }, [count]);

    return (
        <div>

            <h2>
                Count: {count}
            </h2>

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
`
    },


    // ============================================================
    // 4. EMPTY DEPENDENCY ARRAY
    // ============================================================

    {
        id: 4,
        module: "useEffect",
        title: "Empty Dependency Array",
        concept: "An empty dependency array tells React that the effect does not depend on changing values and should run after the initial render.",
        difficulty: "Easy",

        theory: `
An empty dependency array looks like this:

useEffect(() => {

    // code

}, []);

The effect runs after the component is initially
rendered.

It is commonly used for:

- Initial API calls
- Initial setup
- Setting document title
- Adding subscriptions
- Initializing external libraries

Example:

useEffect(() => {

    console.log("Component mounted");

}, []);

Important:

In React Strict Mode during development, an effect may
appear to run more than once as React performs additional
development checks.
`,

        example: `
import {
    useEffect
} from "react";

function App() {

    useEffect(() => {

        console.log("Component mounted");

    }, []);

    return (
        <h2>
            React App
        </h2>
    );
}

export default App;
`,

        output: `
React App

Console:

Component mounted
`
    },


    // ============================================================
    // 5. DEPENDENCY ARRAY
    // ============================================================

    {
        id: 5,
        module: "useEffect",
        title: "Dependency Array",
        concept: "The dependency array tells React which values an effect depends on and when the effect should run again.",
        difficulty: "Medium",

        theory: `
The dependency array is the second argument of useEffect.

Example:

useEffect(() => {

    console.log(count);

}, [count]);

Here:

[count]

is the dependency.

The effect runs:

1. After the initial render
2. Again when count changes

Example:

useEffect(() => {

    console.log(name);

}, [name]);

The effect runs when name changes.

Dependencies should include reactive values used by the
effect.

Common dependency examples:

[count]
[name]
[userId]
[products]
`,

        example: `
import {
    useEffect,
    useState
} from "react";

function App() {

    const [name, setName] = useState("");

    useEffect(() => {

        console.log(
            "Name changed:",
            name
        );

    }, [name]);

    return (
        <div>

            <input
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />

            <p>
                Name: {name}
            </p>

        </div>
    );
}

export default App;
`,

        output: `
Input:

Saurabh

Console:

Name changed: Saurabh
`
    },


    // ============================================================
    // 6. MULTIPLE DEPENDENCIES
    // ============================================================

    {
        id: 6,
        module: "useEffect",
        title: "Multiple Dependencies",
        concept: "An effect can depend on multiple values by placing those values inside the dependency array.",
        difficulty: "Medium",

        theory: `
A useEffect can have more than one dependency.

Example:

useEffect(() => {

    console.log(name);
    console.log(age);

}, [name, age]);

The effect runs when:

- name changes
- age changes

It also runs after the initial render.

Example:

useEffect(() => {

    console.log(
        "Name:",
        name,
        "Age:",
        age
    );

}, [name, age]);

React compares dependency values between renders
and runs the effect when one of them changes.
`,

        example: `
import {
    useEffect,
    useState
} from "react";

function App() {

    const [name, setName] = useState("");
    const [age, setAge] = useState(20);

    useEffect(() => {

        console.log(
            "Name:",
            name,
            "Age:",
            age
        );

    }, [name, age]);

    return (
        <div>

            <input
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
                placeholder="Name"
            />

            <input
                type="number"
                value={age}
                onChange={(e) =>
                    setAge(e.target.value)
                }
            />

        </div>
    );
}

export default App;
`,

        output: `
Name: Saurabh
Age: 25

Console:

Name: Saurabh Age: 25
`
    },


    // ============================================================
    // 7. API CALLS
    // ============================================================

    {
        id: 7,
        module: "useEffect",
        title: "API Calls",
        concept: "useEffect is commonly used to fetch data from an API after a component renders.",
        difficulty: "Medium",

        theory: `
API calls are one of the most common uses of useEffect.

For example, a component may need to load employee
data from a backend API.

The general flow is:

Component renders
        ↓
useEffect runs
        ↓
API request
        ↓
Response received
        ↓
setState()
        ↓
Component re-renders

Example:

useEffect(() => {

    fetch("/api/users")
        .then(response => response.json())
        .then(data => setUsers(data));

}, []);

The empty dependency array means the request is made
after the initial render.

In real applications, loading and error states should
also normally be handled.
`,

        example: `
import {
    useEffect,
    useState
} from "react";

function App() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch(
            "https://jsonplaceholder.typicode.com/users"
        )
        .then(response => response.json())
        .then(data => setUsers(data));

    }, []);

    return (
        <div>

            <h2>Users</h2>

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
Users

Leanne Graham
Ervin Howell
Clementine Bauch
Patricia Lebsack
...
`
    },


    // ============================================================
    // 8. CLEANUP FUNCTION
    // ============================================================

    {
        id: 8,
        module: "useEffect",
        title: "Cleanup Function",
        concept: "A cleanup function is returned from useEffect to remove subscriptions, event listeners, timers, or other resources when the effect is no longer needed.",
        difficulty: "Medium",

        theory: `
An effect can return a cleanup function.

Syntax:

useEffect(() => {

    // setup

    return () => {

        // cleanup

    };

}, []);

Cleanup is commonly used for:

- Removing event listeners
- Clearing timers
- Unsubscribing
- Closing connections
- Cancelling or ignoring stale work

Example:

useEffect(() => {

    const timer = setInterval(() => {

        console.log("Running");

    }, 1000);

    return () => {

        clearInterval(timer);

    };

}, []);

The cleanup function runs before the effect is removed
or before the effect runs again with changed dependencies.
`,

        example: `
import {
    useEffect
} from "react";

function App() {

    useEffect(() => {

        const timer = setInterval(() => {

            console.log("Timer running");

        }, 1000);

        return () => {

            clearInterval(timer);

            console.log(
                "Timer cleaned"
            );

        };

    }, []);

    return (
        <h2>
            Timer Example
        </h2>
    );
}

export default App;
`,

        output: `
Timer Example

Console:

Timer running
Timer running
Timer running

When component is removed:

Timer cleaned
`
    },


    // ============================================================
    // 9. COMPONENT MOUNT
    // ============================================================

    {
        id: 9,
        module: "useEffect",
        title: "Component Mount",
        concept: "Component mount means the component is added to the UI for the first time.",
        difficulty: "Easy",

        theory: `
Mounting means that a React component is created and
added to the DOM.

Example lifecycle:

Component created
        ↓
Rendered
        ↓
Mounted
        ↓
useEffect runs

An effect with an empty dependency array is commonly used
for work that should happen after the initial render.

Example:

useEffect(() => {

    console.log("Component mounted");

}, []);

Typical mount operations include:

- Initial API request
- Initial setup
- Loading data
- Adding subscriptions
- Setting document title
`,

        example: `
import {
    useEffect
} from "react";

function App() {

    useEffect(() => {

        console.log(
            "Component mounted"
        );

    }, []);

    return (
        <h2>
            Home Page
        </h2>
    );
}

export default App;
`,

        output: `
Home Page

Console:

Component mounted
`
    },


    // ============================================================
    // 10. COMPONENT UPDATE
    // ============================================================

    {
        id: 10,
        module: "useEffect",
        title: "Component Update",
        concept: "Component update happens when state or props change and React renders the component again.",
        difficulty: "Medium",

        theory: `
A component updates when its state or props change.

Example:

const [count, setCount] = useState(0);

When:

setCount(1);

is called, React renders the component again.

An effect with count as a dependency runs after the
render where count changed.

Example:

useEffect(() => {

    console.log("Count changed");

}, [count]);

The flow is:

State changes
      ↓
Component re-renders
      ↓
React checks dependencies
      ↓
Effect runs if dependency changed
`,

        example: `
import {
    useEffect,
    useState
} from "react";

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log(
            "Count updated:",
            count
        );

    }, [count]);

    return (
        <div>

            <h2>
                Count: {count}
            </h2>

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

After clicking:

Count: 1

Console:

Count updated: 1
`
    },


    // ============================================================
    // 11. COMPONENT UNMOUNT
    // ============================================================

    {
        id: 11,
        module: "useEffect",
        title: "Component Unmount",
        concept: "Component unmount means that React removes a component from the UI.",
        difficulty: "Medium",

        theory: `
Unmounting means that a component is removed from the UI.

Cleanup functions are commonly used when a component
unmounts.

Example:

useEffect(() => {

    console.log("Mounted");

    return () => {

        console.log("Unmounted");

    };

}, []);

The cleanup function is used to release resources.

Common cleanup operations:

- clearInterval()
- clearTimeout()
- removeEventListener()
- unsubscribe()
- cancel or ignore stale asynchronous work

Lifecycle:

Mount
  ↓
Effect runs
  ↓
Component updates
  ↓
Cleanup before changed effect
  ↓
Effect runs again
  ↓
Unmount
  ↓
Final cleanup
`,

        example: `
import {
    useEffect,
    useState
} from "react";

function Child() {

    useEffect(() => {

        console.log("Child mounted");

        return () => {

            console.log("Child unmounted");

        };

    }, []);

    return (
        <h2>
            Child Component
        </h2>
    );
}

function App() {

    const [show, setShow] = useState(true);

    return (
        <div>

            <button
                onClick={() =>
                    setShow(!show)
                }
            >
                Show / Hide
            </button>

            {show && <Child />}

        </div>
    );
}

export default App;
`,

        output: `
Child Component

Click Show / Hide:

Child component is removed.

Console:

Child unmounted
`
    },


    // ============================================================
    // 12. COMMON USEEFFECT MISTAKES
    // ============================================================

    {
        id: 12,
        module: "useEffect",
        title: "Common useEffect Mistakes",
        concept: "Common useEffect mistakes include incorrect dependencies, unnecessary effects, infinite loops, missing cleanup, and putting unrelated logic inside effects.",
        difficulty: "Advanced",

        theory: `
There are several common mistakes when using useEffect.

1. Missing dependencies

Example:

useEffect(() => {

    console.log(userId);

}, []);

If userId can change, the effect may use an outdated value.

2. Infinite loop

Example:

useEffect(() => {

    setCount(count + 1);

});

Without dependencies, the effect runs after every render,
and updating state causes another render.

3. Unnecessary useEffect

Do not use useEffect for values that can be calculated
directly during rendering.

Instead of:

useEffect(() => {

    setFullName(firstName + lastName);

}, [firstName, lastName]);

It may be simpler to calculate:

const fullName =
    firstName + lastName;

4. Forgetting cleanup

Timers and event listeners should usually be cleaned up.

5. Incorrect dependency array

Dependencies should represent the reactive values used
by the effect.

6. Putting too much logic in one effect

Separate unrelated effects when they have different
responsibilities.

7. Using useEffect for every piece of logic

useEffect is mainly for synchronizing with external
systems. It should not be treated as a general-purpose
function that runs whenever you want.
`,

        example: `
import {
    useEffect,
    useState
} from "react";

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log(
            "Count changed:",
            count
        );

    }, [count]);

    return (
        <div>

            <h2>
                Count: {count}
            </h2>

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

Console:

Count changed: 1
`
    }

];