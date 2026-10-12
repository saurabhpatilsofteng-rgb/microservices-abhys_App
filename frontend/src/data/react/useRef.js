export const useRefTopics = [

    // ============================================================
    // 1. WHAT IS USEREF?
    // ============================================================

    {
        id: 1,
        module: "useRef",
        title: "What is useRef?",
        concept: "useRef is a React Hook used to store a mutable value or create a reference to a DOM element without causing a re-render.",
        difficulty: "Easy",

        theory: `
useRef is a React Hook used to create a reference.

Syntax:

const myRef = useRef(initialValue);

The value is stored inside:

myRef.current

useRef has two common uses:

1. Accessing DOM elements

2. Storing mutable values

Unlike state, changing a ref does not cause the
component to re-render.

Example:

const inputRef = useRef(null);

The ref can be connected to an input:

<input ref={inputRef} />

The DOM element can then be accessed using:

inputRef.current
`,

        example: `
import { useRef } from "react";

function App() {

    const inputRef = useRef(null);

    return (
        <div>

            <input
                ref={inputRef}
                placeholder="Enter name"
            />

            <button
                onClick={() =>
                    inputRef.current.focus()
                }
            >
                Focus
            </button>

        </div>
    );
}

export default App;
`,

        output: `
[ Enter name ]

Click Focus:

The cursor moves into the input field.
`
    },


    // ============================================================
    // 2. USEREF SYNTAX
    // ============================================================

    {
        id: 2,
        module: "useRef",
        title: "useRef Syntax",
        concept: "The useRef Hook returns a mutable reference object whose value is stored in the current property.",
        difficulty: "Easy",

        theory: `
The basic syntax of useRef is:

const ref = useRef(initialValue);

Example:

const countRef = useRef(0);

The value can be accessed using:

countRef.current

The value can be changed using:

countRef.current = 10;

Changing current does not cause the component to
re-render.

Example:

const inputRef = useRef(null);

Here:

inputRef
    -> reference object

inputRef.current
    -> current referenced value
`,

        example: `
import {
    useRef
} from "react";

function App() {

    const valueRef = useRef(0);

    function handleClick() {

        valueRef.current =
            valueRef.current + 1;

        console.log(
            valueRef.current
        );
    }

    return (
        <div>

            <button onClick={handleClick}>
                Increase Ref
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Click Increase Ref:

Console:

1
2
3
4

The screen does not automatically
update because changing ref.current
does not cause a re-render.
`
    },


    // ============================================================
    // 3. ACCESSING DOM ELEMENTS
    // ============================================================

    {
        id: 3,
        module: "useRef",
        title: "Accessing DOM Elements",
        concept: "useRef can be attached to a DOM element to access that element directly through the current property.",
        difficulty: "Medium",

        theory: `
React normally handles the DOM for us.

Sometimes we need direct access to a DOM element.

Examples:

- Focus an input
- Select text
- Read element dimensions
- Scroll an element
- Play or pause a video

useRef can create a reference:

const inputRef = useRef(null);

Then attach it:

<input ref={inputRef} />

After the component mounts:

inputRef.current

contains the DOM element.

For example:

inputRef.current.focus();

This directly focuses the input element.
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

    function handleClear() {

        inputRef.current.value = "";
    }

    return (
        <div>

            <input
                ref={inputRef}
                placeholder="Enter text"
            />

            <button onClick={handleFocus}>
                Focus
            </button>

            <button onClick={handleClear}>
                Clear
            </button>

        </div>
    );
}

export default App;
`,

        output: `
[ Enter text ]

Click Focus:

Input gets focus.

Click Clear:

Input becomes empty.
`
    },


    // ============================================================
    // 4. STORING MUTABLE VALUES
    // ============================================================

    {
        id: 4,
        module: "useRef",
        title: "Storing Mutable Values",
        concept: "useRef can store a value that can change between renders without causing the component to re-render.",
        difficulty: "Medium",

        theory: `
useRef can be used to store mutable values.

Example:

const valueRef = useRef(0);

The value can be changed:

valueRef.current = 10;

Unlike useState, this change does not cause
a re-render.

This is useful for values such as:

- Timer IDs
- Previous values
- DOM references
- External library instances
- Mutable counters

Example:

const timerRef = useRef(null);

timerRef.current can store the ID returned by
setInterval().

The value remains available between renders.
`,

        example: `
import {
    useRef,
    useState
} from "react";

function App() {

    const renderCount = useRef(0);
    const [count, setCount] = useState(0);

    renderCount.current =
        renderCount.current + 1;

    return (
        <div>

            <h2>
                Count: {count}
            </h2>

            <p>
                Render Count: {
                    renderCount.current
                }
            </p>

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
Render Count: 1

After clicking Increment:

Count: 1
Render Count: 2
`
    },


    // ============================================================
    // 5. USEREF VS USESTATE
    // ============================================================

    {
        id: 5,
        module: "useRef",
        title: "useRef vs useState",
        concept: "useState is used for data that should update the UI, while useRef is used for mutable values that should persist without triggering a re-render.",
        difficulty: "Medium",

        theory: `
useState and useRef both store values, but they have
different purposes.

useState:

- Stores component state
- Updating state causes a re-render
- Used when the UI needs to update

Example:

const [count, setCount] = useState(0);

setCount(10);

The component re-renders.

useRef:

- Stores a mutable value
- Updating current does not cause a re-render
- Useful for DOM references and values that do not
  directly affect the UI

Example:

const countRef = useRef(0);

countRef.current = 10;

The component does not re-render automatically.

Simple rule:

UI needs to update
        ↓
useState

Value needs to persist but UI does not need to update
        ↓
useRef
`,

        example: `
import {
    useRef,
    useState
} from "react";

function App() {

    const [stateCount, setStateCount] =
        useState(0);

    const refCount = useRef(0);

    function updateState() {

        setStateCount(
            stateCount + 1
        );
    }

    function updateRef() {

        refCount.current =
            refCount.current + 1;

        console.log(
            "Ref:",
            refCount.current
        );
    }

    return (
        <div>

            <h2>
                State: {stateCount}
            </h2>

            <h2>
                Ref: {refCount.current}
            </h2>

            <button onClick={updateState}>
                Update State
            </button>

            <button onClick={updateRef}>
                Update Ref
            </button>

        </div>
    );
}

export default App;
`,

        output: `
State: 0
Ref: 0

Click Update State:

State: 1

Click Update Ref:

Console:

Ref: 1

The UI does not automatically update
because ref changes do not cause re-render.
`
    },


    // ============================================================
    // 6. PREVIOUS VALUE
    // ============================================================

    {
        id: 6,
        module: "useRef",
        title: "Previous Value",
        concept: "useRef can be used with useEffect to remember the previous value of a state or prop between renders.",
        difficulty: "Medium",

        theory: `
useRef can remember a value from the previous render.

Example:

const previousCount = useRef();

After the component renders, we can store the current
value:

useEffect(() => {

    previousCount.current = count;

}, [count]);

During the next render:

previousCount.current

contains the previous value.

This is useful for:

- Comparing old and new values
- Tracking previous props
- Tracking previous state
- Detecting changes
`,

        example: `
import {
    useEffect,
    useRef,
    useState
} from "react";

function App() {

    const [count, setCount] = useState(0);

    const previousCount =
        useRef();

    useEffect(() => {

        previousCount.current = count;

    }, [count]);

    return (
        <div>

            <h2>
                Current: {count}
            </h2>

            <h2>
                Previous: {
                    previousCount.current
                }
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
Initial:

Current: 0
Previous: undefined

After clicking Increment:

Current: 1
Previous: 0

After clicking again:

Current: 2
Previous: 1
`
    },


    // ============================================================
    // 7. FOCUS INPUT
    // ============================================================

    {
        id: 7,
        module: "useRef",
        title: "Focus Input",
        concept: "useRef can be used to directly access an input element and programmatically move the cursor into it.",
        difficulty: "Easy",

        theory: `
One of the most common uses of useRef is focusing
an input.

First create a ref:

const inputRef = useRef(null);

Attach it to the input:

<input ref={inputRef} />

Then call:

inputRef.current.focus();

This is useful for:

- Login forms
- Search boxes
- Registration forms
- Modal forms
- Error fields
- Chat applications

The browser automatically moves the cursor into
the referenced input.
`,

        example: `
import {
    useRef
} from "react";

function App() {

    const nameRef = useRef(null);

    function focusName() {

        nameRef.current.focus();
    }

    return (
        <div>

            <input
                ref={nameRef}
                placeholder="Enter your name"
            />

            <button onClick={focusName}>
                Enter Name
            </button>

        </div>
    );
}

export default App;
`,

        output: `
[ Enter your name ]

Click:

Enter Name

The cursor moves into the input.
`
    },


    // ============================================================
    // 8. REAL-WORLD EXAMPLES
    // ============================================================

    {
        id: 8,
        module: "useRef",
        title: "Real-world Examples",
        concept: "useRef is commonly used in real applications for DOM access, timers, previous values, scrolling, media controls, and storing mutable values.",
        difficulty: "Medium",

        theory: `
useRef has many practical uses in real React
applications.

1. Focus an input

inputRef.current.focus();

2. Store a timer ID

const timerRef = useRef(null);

timerRef.current = setInterval(
    () => {
        console.log("Running");
    },
    1000
);

3. Clear a timer

clearInterval(timerRef.current);

4. Scroll an element

elementRef.current.scrollIntoView();

5. Control a video

videoRef.current.play();

videoRef.current.pause();

6. Store previous values

previousValue.current = value;

7. Store an external object

const connectionRef = useRef(null);

The reference persists between renders.

Important:

Use refs when you need to interact with the DOM
or store mutable values that do not need to trigger
a UI update.
`,

        example: `
import {
    useRef,
    useState
} from "react";

function App() {

    const inputRef = useRef(null);
    const [message, setMessage] =
        useState("");

    function focusInput() {

        inputRef.current.focus();
    }

    function clearInput() {

        inputRef.current.value = "";
    }

    function showValue() {

        setMessage(
            inputRef.current.value
        );
    }

    return (
        <div>

            <input
                ref={inputRef}
                placeholder="Enter message"
            />

            <br />

            <button onClick={focusInput}>
                Focus
            </button>

            <button onClick={clearInput}>
                Clear
            </button>

            <button onClick={showValue}>
                Show Value
            </button>

            <p>
                Value: {message}
            </p>

        </div>
    );
}

export default App;
`,

        output: `
[ Enter message ]

Click Focus:

Input gets focus.

Enter:

Hello React

Click Show Value:

Value: Hello React

Click Clear:

Input becomes empty.
`
    }

];