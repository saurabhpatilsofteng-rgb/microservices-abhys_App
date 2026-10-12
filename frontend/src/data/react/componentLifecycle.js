export const componentLifecycleTopics = [

    // ============================================================
    // 1. Mounting
    // ============================================================
    {
        id: 1,
        module: "componentLifecycle",
        title: "Mounting",
        concept: "When a React component is created and added to the DOM",
        difficulty: "Easy",

        theory: `
Mounting is the first phase of a React component's lifecycle.

It happens when a component is created and displayed on the screen.

During mounting:
1. Component function runs
2. JSX is returned
3. React creates the DOM
4. Effects are executed after the component is committed

In functional components, useEffect is commonly used to run code after mounting.
        `,

        example: `
import { useEffect } from "react";

function App() {

    useEffect(() => {
        console.log("Component mounted");
    }, []);

    return (
        <h2>Hello React</h2>
    );
}

export default App;
        `,

        output: `
Hello React

Console:
Component mounted
        `
    },

    // ============================================================
    // 2. Updating
    // ============================================================
    {
        id: 2,
        module: "componentLifecycle",
        title: "Updating",
        concept: "When a component re-renders because its state or props change",
        difficulty: "Easy",

        theory: `
Updating happens when a component needs to render again.

A component can update when:
- State changes
- Props change
- A parent component re-renders
- A context value used by the component changes

React runs the component again and updates the required DOM elements.
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
Initial:

Count: 0

After clicking:

Count: 1
Count: 2
Count: 3
        `
    },

    // ============================================================
    // 3. Unmounting
    // ============================================================
    {
        id: 3,
        module: "componentLifecycle",
        title: "Unmounting",
        concept: "When a component is removed from the DOM",
        difficulty: "Easy",

        theory: `
Unmounting happens when a component is removed from the screen.

For example:
- Conditional rendering hides a component
- User navigates to another page
- A parent stops rendering the child

Before a component is removed, cleanup logic can run.

In functional components, cleanup is commonly returned from useEffect.
        `,

        example: `
import { useEffect, useState } from "react";

function Child() {

    useEffect(() => {

        console.log("Mounted");

        return () => {
            console.log("Unmounted");
        };

    }, []);

    return <h2>Child Component</h2>;
}

function App() {

    const [show, setShow] = useState(true);

    return (
        <div>

            <button onClick={() => setShow(!show)}>
                Toggle
            </button>

            {show && <Child />}

        </div>
    );
}

export default App;
        `,

        output: `
Initially:

Child Component

Console:
Mounted

After clicking Toggle:

Child Component is removed

Console:
Unmounted
        `
    },

    // ============================================================
    // 4. useEffect Lifecycle
    // ============================================================
    {
        id: 4,
        module: "componentLifecycle",
        title: "useEffect Lifecycle",
        concept: "Using useEffect to synchronize with lifecycle-related effects",
        difficulty: "Medium",

        theory: `
useEffect can run after a component is committed to the DOM.

The dependency array controls when the Effect runs.

Examples:

useEffect(() => {
    // Runs after every commit
});

useEffect(() => {
    // Runs after initial mount
}, []);

useEffect(() => {
    // Runs after mount and when count changes
}, [count]);

The Effect may also return a cleanup function.
        `,

        example: `
import { useEffect, useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    useEffect(() => {

        console.log("Effect executed");

        return () => {
            console.log("Cleanup executed");
        };

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
Initial render:

Effect executed

After count changes:

Cleanup executed
Effect executed
        `
    },

    // ============================================================
    // 5. Cleanup
    // ============================================================
    {
        id: 5,
        module: "componentLifecycle",
        title: "Cleanup",
        concept: "Cleaning up resources created by an Effect",
        difficulty: "Medium",

        theory: `
Cleanup is the function returned from useEffect.

Cleanup is important when an Effect creates something that needs to be
stopped or removed.

Common examples:
- Removing event listeners
- Clearing timers
- Disconnecting subscriptions
- Closing connections
- Aborting unnecessary requests

Cleanup runs before an Effect re-runs when its dependencies change and
when the component unmounts.
        `,

        example: `
import { useEffect } from "react";

function App() {

    useEffect(() => {

        const timer = setInterval(() => {
            console.log("Timer running");
        }, 1000);

        return () => {
            clearInterval(timer);
            console.log("Timer cleared");
        };

    }, []);

    return (
        <h2>Timer Example</h2>
    );
}

export default App;
        `,

        output: `
Timer Example

Console every second:

Timer running
Timer running
Timer running

When component unmounts:

Timer cleared
        `
    },

    // ============================================================
    // 6. Lifecycle Comparison
    // ============================================================
    {
        id: 6,
        module: "componentLifecycle",
        title: "Lifecycle Comparison",
        concept: "Comparing class component lifecycle methods with functional components",
        difficulty: "Medium",

        theory: `
React class components traditionally use lifecycle methods.

Common class lifecycle methods:

componentDidMount
    Runs after mounting.

componentDidUpdate
    Runs after updating.

componentWillUnmount
    Runs before unmounting.

Functional components use Hooks, especially useEffect, instead of these
class lifecycle methods.

The important difference is that useEffect is not simply a direct replacement
for every lifecycle method. It is primarily used to synchronize a component
with external systems.
        `,

        example: `
Class Component:

class App extends React.Component {

    componentDidMount() {
        console.log("Mounted");
    }

    componentDidUpdate() {
        console.log("Updated");
    }

    componentWillUnmount() {
        console.log("Unmounted");
    }

    render() {
        return <h2>Hello React</h2>;
    }
}


Functional Component:

function App() {

    useEffect(() => {

        console.log("Mounted or updated");

        return () => {
            console.log("Cleanup");
        };

    }, []);

    return <h2>Hello React</h2>;
}
        `,

        output: `
Class Component:

componentDidMount
componentDidUpdate
componentWillUnmount


Functional Component:

useEffect
cleanup function
        `
    }

];