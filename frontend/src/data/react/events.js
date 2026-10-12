
export const eventsTopics = [

    // ============================================================
    // 1. WHAT ARE EVENTS?
    // ============================================================

    {
        id: 1,
        module: "events",
        title: "What are Events?",
        concept: "Events are actions performed by the user or browser that React can detect and handle, such as clicking, typing, submitting a form, or moving the mouse.",
        difficulty: "Easy",

        theory: `
An event is an action that happens in the application.

Examples:

- User clicks a button
- User types in an input
- User submits a form
- User moves the mouse
- User presses a keyboard key

React provides event handlers to respond to these actions.

Common React events:

onClick
onChange
onSubmit
onMouseEnter
onMouseLeave
onKeyDown
onKeyUp

Example:

<button onClick={handleClick}>
    Click Me
</button>

When the button is clicked, handleClick is executed.
`,

        example: `
function App() {

    function handleClick() {
        alert("Button clicked");
    }

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );

}

export default App;
`,

        output: `
Click Me

When the user clicks the button:

Button clicked
`
    },


    // ============================================================
    // 2. ONCLICK
    // ============================================================

    {
        id: 2,
        module: "events",
        title: "onClick",
        concept: "onClick is a React event handler used to execute a function when an element is clicked.",
        difficulty: "Easy",

        theory: `
onClick is used to handle click events.

Syntax:

<button onClick={handleClick}>
    Click
</button>

The function is passed without calling it.

Correct:

onClick={handleClick}

Incorrect:

onClick={handleClick()}

Example:

function handleClick() {
    console.log("Clicked");
}

<button onClick={handleClick}>
    Click
</button>

React calls handleClick when the user clicks the button.
`,

        example: `
function App() {

    function handleClick() {
        console.log("Button clicked");
    }

    return (
        <div>

            <button onClick={handleClick}>
                Click Me
            </button>

        </div>
    );

}

export default App;
`,

        output: `
Click Me

Browser console:

Button clicked
`
    },


    // ============================================================
    // 3. ONCHANGE
    // ============================================================

    {
        id: 3,
        module: "events",
        title: "onChange",
        concept: "onChange is used to detect changes in form elements such as input, textarea, and select.",
        difficulty: "Easy",

        theory: `
onChange is commonly used with form inputs.

Example:

<input
    value={name}
    onChange={handleChange}
/>

Every time the input value changes, React calls
handleChange.

The new value can be accessed using:

event.target.value

Example:

function handleChange(event) {
    console.log(event.target.value);
}

onChange is commonly used with useState to create
controlled inputs.
`,

        example: `
import { useState } from "react";

function App() {

    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <div>

            <input
                value={name}
                onChange={handleChange}
                placeholder="Enter name"
            />

            <p>Name: {name}</p>

        </div>
    );

}

export default App;
`,

        output: `
Enter name

If user types:

Saurabh

Output:

Name: Saurabh
`
    },


    // ============================================================
    // 4. ONSUBMIT
    // ============================================================

    {
        id: 4,
        module: "events",
        title: "onSubmit",
        concept: "onSubmit is used to handle form submission in React.",
        difficulty: "Easy",

        theory: `
onSubmit is used with the form element.

Example:

<form onSubmit={handleSubmit}>

When the user submits the form, React calls
handleSubmit.

Example:

function handleSubmit(event) {
    event.preventDefault();

    console.log("Form submitted");
}

The form submission event can be used for:

- Login forms
- Registration forms
- Search forms
- Data entry forms
- API requests

Usually preventDefault() is used to stop the browser from
performing its default page reload.
`,

        example: `
function App() {

    function handleSubmit(event) {

        event.preventDefault();

        console.log("Form submitted");

    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                placeholder="Enter name"
            />

            <button type="submit">
                Submit
            </button>

        </form>
    );

}

export default App;
`,

        output: `
Enter name

Click Submit

Console:

Form submitted
`
    },


    // ============================================================
    // 5. ONMOUSEENTER
    // ============================================================

    {
        id: 5,
        module: "events",
        title: "onMouseEnter",
        concept: "onMouseEnter is triggered when the mouse pointer enters an element.",
        difficulty: "Easy",

        theory: `
onMouseEnter is used to detect when the mouse pointer
moves onto an element.

Syntax:

<div onMouseEnter={handleMouseEnter}>
    Hover Me
</div>

Example:

function handleMouseEnter() {
    console.log("Mouse entered");
}

It can be used for:

- Showing tooltips
- Highlighting elements
- Showing additional information
- Hover-based UI behavior
`,

        example: `
function App() {

    function handleMouseEnter() {
        console.log("Mouse entered");
    }

    return (
        <div>

            <button onMouseEnter={handleMouseEnter}>
                Hover Me
            </button>

        </div>
    );

}

export default App;
`,

        output: `
Hover Me

When the mouse enters the button:

Mouse entered
`
    },


    // ============================================================
    // 6. ONMOUSELEAVE
    // ============================================================

    {
        id: 6,
        module: "events",
        title: "onMouseLeave",
        concept: "onMouseLeave is triggered when the mouse pointer leaves an element.",
        difficulty: "Easy",

        theory: `
onMouseLeave detects when the mouse pointer leaves an
element.

Syntax:

<div onMouseLeave={handleMouseLeave}>
    Hover Me
</div>

Example:

function handleMouseLeave() {
    console.log("Mouse left");
}

It is commonly used together with onMouseEnter.

Example:

onMouseEnter → mouse enters element

onMouseLeave → mouse leaves element
`,

        example: `
function App() {

    function handleMouseEnter() {
        console.log("Mouse entered");
    }

    function handleMouseLeave() {
        console.log("Mouse left");
    }

    return (
        <button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            Hover Me
        </button>
    );

}

export default App;
`,

        output: `
Hover Me

Mouse enters:

Mouse entered

Mouse leaves:

Mouse left
`
    },


    // ============================================================
    // 7. KEYBOARD EVENTS
    // ============================================================

    {
        id: 7,
        module: "events",
        title: "Keyboard Events",
        concept: "Keyboard events are used to detect actions such as pressing, releasing, or typing keyboard keys.",
        difficulty: "Medium",

        theory: `
React provides several keyboard event handlers.

onKeyDown
    Runs when a key is pressed.

onKeyUp
    Runs when a key is released.

Example:

<input onKeyDown={handleKeyDown} />

function handleKeyDown(event) {
    console.log(event.key);
}

The event.key property tells us which key was pressed.

Examples:

Enter
Escape
a
b
ArrowUp
ArrowDown

Keyboard events are commonly used for:

- Search boxes
- Form handling
- Keyboard shortcuts
- Enter key actions
- Navigation
`,

        example: `
function App() {

    function handleKeyDown(event) {

        console.log("Key:", event.key);

    }

    return (
        <input
            onKeyDown={handleKeyDown}
            placeholder="Press a key"
        />
    );

}

export default App;
`,

        output: `
Press a key

If user presses Enter:

Key: Enter
`
    },


    // ============================================================
    // 8. EVENT OBJECT
    // ============================================================

    {
        id: 8,
        module: "events",
        title: "Event Object",
        concept: "The event object contains information about the event that occurred.",
        difficulty: "Medium",

        theory: `
React passes an event object to the event handler.

Example:

function handleClick(event) {
    console.log(event);
}

<button onClick={handleClick}>
    Click
</button>

The event object provides useful properties and methods.

Common properties:

event.target
    Element that triggered the event.

event.target.value
    Current value of an input.

event.key
    Key pressed during a keyboard event.

event.type
    Type of event.

event.currentTarget
    Element whose handler is currently executing.

Example:

function handleChange(event) {
    console.log(event.target.value);
}
`,

        example: `
function App() {

    function handleChange(event) {

        console.log("Value:", event.target.value);
        console.log("Type:", event.type);

    }

    return (
        <input
            onChange={handleChange}
            placeholder="Type something"
        />
    );

}

export default App;
`,

        output: `
If user types:

Hello

Console:

Value: Hello
Type: change
`
    },


    // ============================================================
    // 9. PASSING ARGUMENTS
    // ============================================================

    {
        id: 9,
        module: "events",
        title: "Passing Arguments",
        concept: "Arguments can be passed to an event handler by using an arrow function.",
        difficulty: "Medium",

        theory: `
Sometimes an event handler needs additional data.

Example:

function handleClick(name) {
    console.log(name);
}

To pass an argument:

<button onClick={() => handleClick("Saurabh")}>
    Click
</button>

The arrow function is important because it prevents
handleClick from executing during rendering.

You can also pass the event object along with another
argument.

Example:

<button
    onClick={(event) => handleClick(event, "Saurabh")}
>
    Click
</button>
`,

        example: `
function App() {

    function handleClick(name) {

        console.log("Hello", name);

    }

    return (
        <button
            onClick={() => handleClick("Saurabh")}
        >
            Click Me
        </button>
    );

}

export default App;
`,

        output: `
Click Me

Console:

Hello Saurabh
`
    },


    // ============================================================
    // 10. PREVENTDEFAULT()
    // ============================================================

    {
        id: 10,
        module: "events",
        title: "preventDefault()",
        concept: "preventDefault() prevents the browser's default action for an event.",
        difficulty: "Medium",

        theory: `
Some browser actions have a default behavior.

For example, submitting a form normally causes the browser
to submit the form and may reload or navigate the page.

React applications commonly prevent this behavior.

Example:

function handleSubmit(event) {

    event.preventDefault();

}

preventDefault() tells the browser not to perform the
default action.

Common use cases:

- Prevent form submission reload
- Handle forms with React
- Prevent default link behavior
- Custom event behavior

Important:

preventDefault() does not stop event propagation.

It only prevents the browser's default action.
`,

        example: `
function App() {

    function handleSubmit(event) {

        event.preventDefault();

        console.log("Default form submission prevented");

    }

    return (
        <form onSubmit={handleSubmit}>

            <input placeholder="Enter name" />

            <button type="submit">
                Submit
            </button>

        </form>
    );

}

export default App;
`,

        output: `
Submit

The browser does not perform its normal form submission.

Console:

Default form submission prevented
`
    },


    // ============================================================
    // 11. EVENT HANDLING
    // ============================================================

    {
        id: 11,
        module: "events",
        title: "Event Handling",
        concept: "Event handling means connecting React event handlers to user actions and executing appropriate logic when events occur.",
        difficulty: "Medium",

        theory: `
Event handling is the process of responding to user actions
in a React application.

Example:

<button onClick={handleClick}>
    Click
</button>

Here:

onClick
    Event handler

handleClick
    Function that handles the event

React uses camelCase event names.

HTML:

onclick

React:

onClick

HTML:

onchange

React:

onChange

HTML:

onsubmit

React:

onSubmit

Common event handling pattern:

1. Create a function.

2. Attach the function to an event.

3. React calls the function when the event occurs.

Example:

function handleClick() {
    console.log("Clicked");
}

<button onClick={handleClick}>
    Click
</button>

Event handlers can also update state.

For example:

setCount(prev => prev + 1);

This allows user actions to change the UI.
`,

        example: `
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    function handleClick() {

        setCount(prev => prev + 1);

    }

    return (
        <div>

            <h1>Count: {count}</h1>

            <button onClick={handleClick}>
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

After clicking again:

Count: 2
`
    }

];

