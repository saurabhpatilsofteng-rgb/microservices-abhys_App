
export const propsTopics = [

    // ============================================================
    // 1. WHAT ARE PROPS?
    // ============================================================

    {
        id: 1,
        module: "props",
        title: "What are Props?",
        concept: "Props are inputs passed from a parent component to a child component.",
        difficulty: "Easy",

        theory: `
Props stands for Properties.

Props are used to pass data from one component to another,
mainly from parent to child.

Props can contain different types of data:

- String
- Number
- Boolean
- Object
- Array
- Function
- React elements

Example:

<User name="Saurabh" />

Here:

name

is a prop.

The child component receives the prop and can use it to
display information.

Props are read-only. A child component should not directly
modify the props it receives.
`,

        example: `
function User({ name }) {

    return (
        <h1>Hello {name}</h1>
    );

}

function App() {

    return (
        <User name="Saurabh" />
    );

}

export default App;
`,

        output: `
Hello Saurabh
`
    },


    // ============================================================
    // 2. PASSING PROPS
    // ============================================================

    {
        id: 2,
        module: "props",
        title: "Passing Props",
        concept: "Props are passed from a parent component to a child component through JSX attributes.",
        difficulty: "Easy",

        theory: `
A parent component can pass data to a child component using
JSX attributes.

Example:

<User name="Saurabh" />

Here:

name = prop name

"Saurabh" = prop value

Multiple props can be passed:

<User
    name="Saurabh"
    age={28}
    city="Mumbai"
/>

Props can contain different JavaScript values.
`,

        example: `
function User(props) {

    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>City: {props.city}</p>
        </div>
    );

}

function App() {

    return (
        <User
            name="Saurabh"
            age={28}
            city="Mumbai"
        />
    );

}

export default App;
`,

        output: `
Saurabh
Age: 28
City: Mumbai
`
    },


    // ============================================================
    // 3. RECEIVING PROPS
    // ============================================================

    {
        id: 3,
        module: "props",
        title: "Receiving Props",
        concept: "A child component receives props through the function parameter.",
        difficulty: "Easy",

        theory: `
Props are received by the child component through its
function parameter.

Example:

function User(props) {

    return (
        <h1>{props.name}</h1>
    );

}

If the parent sends:

<User name="Saurabh" />

Then the child receives:

props.name

Props are stored in an object.

For example:

props = {
    name: "Saurabh"
}

The child can access the values using:

props.name
props.age
props.city
`,

        example: `
function User(props) {

    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.email}</p>
        </div>
    );

}

function App() {

    return (
        <User
            name="Saurabh"
            email="saurabh@example.com"
        />
    );

}

export default App;
`,

        output: `
Saurabh
saurabh@example.com
`
    },


    // ============================================================
    // 4. PROPS DESTRUCTURING
    // ============================================================

    {
        id: 4,
        module: "props",
        title: "Props Destructuring",
        concept: "Props destructuring allows us to directly extract prop values from the props object.",
        difficulty: "Easy",

        theory: `
Instead of writing:

function User(props) {

    return (
        <h1>{props.name}</h1>
    );

}

We can destructure props:

function User({ name }) {

    return (
        <h1>{name}</h1>
    );

}

Multiple props can also be destructured:

function User({ name, age, city }) {

    return (
        <div>
            <h1>{name}</h1>
            <p>{age}</p>
            <p>{city}</p>
        </div>
    );

}

Destructuring makes the component code shorter and easier
to read.
`,

        example: `
function User({ name, age }) {

    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
        </div>
    );

}

function App() {

    return (
        <User
            name="Saurabh"
            age={28}
        />
    );

}

export default App;
`,

        output: `
Saurabh
Age: 28
`
    },


    // ============================================================
    // 5. STRING PROPS
    // ============================================================

    {
        id: 5,
        module: "props",
        title: "String Props",
        concept: "String props are used to pass text values from a parent component to a child component.",
        difficulty: "Easy",

        theory: `
A string can be passed directly as a JSX attribute.

Example:

<User name="Saurabh" />

Here:

name

is the prop.

"Saurabh"

is the string value.

String props do not require curly braces when the value is
a simple string literal.

Example:

<Button text="Login" />
`,

        example: `
function User({ name }) {

    return (
        <h1>Hello {name}</h1>
    );

}

function App() {

    return (
        <User name="Saurabh" />
    );

}

export default App;
`,

        output: `
Hello Saurabh
`
    },


    // ============================================================
    // 6. NUMBER PROPS
    // ============================================================

    {
        id: 6,
        module: "props",
        title: "Number Props",
        concept: "Number props are used to pass numeric values from a parent component to a child component.",
        difficulty: "Easy",

        theory: `
Numbers are passed using curly braces.

Example:

<User age={28} />

Do not write:

<User age="28" />

because "28" is a string.

Use:

age={28}

to pass a number.

We can also pass expressions:

<User age={20 + 8} />
`,

        example: `
function User({ age }) {

    return (
        <h1>Age: {age}</h1>
    );

}

function App() {

    return (
        <User age={28} />
    );

}

export default App;
`,

        output: `
Age: 28
`
    },


    // ============================================================
    // 7. BOOLEAN PROPS
    // ============================================================

    {
        id: 7,
        module: "props",
        title: "Boolean Props",
        concept: "Boolean props are used to pass true or false values to a component.",
        difficulty: "Easy",

        theory: `
Boolean values are passed using curly braces.

Example:

<Button disabled={true} />

We can also use shorthand syntax:

<Button disabled />

The shorthand means:

disabled={true}

For false:

<Button disabled={false} />

Boolean props are commonly used for:

- disabled
- active
- visible
- loading
- loggedIn
- checked
`,

        example: `
function Button({ disabled }) {

    return (
        <button disabled={disabled}>
            Submit
        </button>
    );

}

function App() {

    return (
        <Button disabled={true} />
    );

}

export default App;
`,

        output: `
Submit button is disabled
`
    },


    // ============================================================
    // 8. OBJECT PROPS
    // ============================================================

    {
        id: 8,
        module: "props",
        title: "Object Props",
        concept: "Object props are used to pass multiple related values as a single object.",
        difficulty: "Easy",

        theory: `
A JavaScript object can be passed as a prop.

Example:

const user = {
    name: "Saurabh",
    age: 28,
    city: "Mumbai"
};

<User user={user} />

The child can access:

user.name
user.age
user.city

Objects are useful when multiple related values need to be
passed together.
`,

        example: `
function User({ user }) {

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>
            <p>City: {user.city}</p>
        </div>
    );

}

function App() {

    const user = {
        name: "Saurabh",
        age: 28,
        city: "Mumbai"
    };

    return (
        <User user={user} />
    );

}

export default App;
`,

        output: `
Saurabh
Age: 28
City: Mumbai
`
    },


    // ============================================================
    // 9. ARRAY PROPS
    // ============================================================

    {
        id: 9,
        module: "props",
        title: "Array Props",
        concept: "Array props are used to pass a list of values from a parent component to a child component.",
        difficulty: "Easy",

        theory: `
An array can be passed as a prop.

Example:

const skills = [
    "Java",
    "React",
    "SQL"
];

<User skills={skills} />

The child receives the array and can use JavaScript methods
such as map().

Example:

skills.map(skill => (
    <li key={skill}>{skill}</li>
))

Array props are commonly used when displaying:

- Lists
- Products
- Users
- Skills
- Menu items
`,

        example: `
function Skills({ skills }) {

    return (
        <ul>
            {skills.map(skill => (
                <li key={skill}>
                    {skill}
                </li>
            ))}
        </ul>
    );

}

function App() {

    const skills = [
        "Java",
        "React",
        "SQL"
    ];

    return (
        <Skills skills={skills} />
    );

}

export default App;
`,

        output: `
Java
React
SQL
`
    },


    // ============================================================
    // 10. FUNCTION PROPS
    // ============================================================

    {
        id: 10,
        module: "props",
        title: "Function Props",
        concept: "Function props allow a parent component to pass a function to a child component.",
        difficulty: "Medium",

        theory: `
A function can be passed as a prop.

Example:

<Child handleClick={handleClick} />

The child receives the function:

function Child({ handleClick }) {

    return (
        <button onClick={handleClick}>
            Click
        </button>
    );

}

This is commonly used when a child needs to communicate an
event or action back to the parent.

The function itself is passed as a prop.

The child can call the function when required.
`,

        example: `
function Child({ handleClick }) {

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );

}

function App() {

    function handleClick() {
        alert("Button clicked");
    }

    return (
        <Child handleClick={handleClick} />
    );

}

export default App;
`,

        output: `
Click Me

When clicked:
Button clicked
`
    },


    // ============================================================
    // 11. PASSING COMPONENTS AS PROPS
    // ============================================================

    {
        id: 11,
        module: "props",
        title: "Passing Components as Props",
        concept: "A React element or component can be passed as a prop and rendered by another component.",
        difficulty: "Medium",

        theory: `
React elements can be passed as props.

Example:

<Card
    header={<h1>Hello</h1>}
/>

The Card component can render it:

function Card({ header }) {

    return (
        <div>
            {header}
        </div>
    );

}

This is useful when a component needs customizable content.

Another common approach is using the children prop:

<Card>
    <h1>Hello</h1>
</Card>

The Card component can render:

{children}

Passing components or elements as props is useful for
component composition and flexible UI design.
`,

        example: `
function Header() {

    return (
        <h1>Welcome</h1>
    );

}

function Card({ header }) {

    return (
        <div>
            {header}
            <p>Card Content</p>
        </div>
    );

}

function App() {

    return (
        <Card header={<Header />} />
    );

}

export default App;
`,

        output: `
Welcome
Card Content
`
    },


    // ============================================================
    // 12. PROPS DEFAULT VALUES
    // ============================================================

    {
        id: 12,
        module: "props",
        title: "Props Default Values",
        concept: "Default prop values provide a fallback value when a prop is undefined.",
        difficulty: "Easy",

        theory: `
A component can provide a default value for a prop using
destructuring.

Example:

function User({ name = "Guest" }) {

    return (
        <h1>Hello {name}</h1>
    );

}

If the parent passes:

<User name="Saurabh" />

Output:

Hello Saurabh

If the parent does not provide name:

<User />

Output:

Hello Guest

Default values are useful when a prop may not be provided.
`,

        example: `
function User({ name = "Guest" }) {

    return (
        <h1>Hello {name}</h1>
    );

}

function App() {

    return (
        <div>
            <User name="Saurabh" />
            <User />
        </div>
    );

}

export default App;
`,

        output: `
Hello Saurabh
Hello Guest
`
    },


    // ============================================================
    // 13. PROPS ARE READ-ONLY
    // ============================================================

    {
        id: 13,
        module: "props",
        title: "Props are Read-Only",
        concept: "Props should be treated as immutable inputs and should not be directly modified by the child component.",
        difficulty: "Medium",

        theory: `
Props are read-only.

A child component receives props from its parent.

The child should not modify the received props directly.

Incorrect:

function User(props) {

    props.name = "John";

}

Instead, if data needs to change, the parent should update
the data and pass the new value through props.

For changing data inside a component, React state is normally
used.

Important rule:

Do not modify props directly.

Props represent input provided by the parent.
`,

        example: `
function User({ name }) {

    return (
        <h1>Hello {name}</h1>
    );

}

function App() {

    const name = "Saurabh";

    return (
        <User name={name} />
    );

}

export default App;
`,

        output: `
Hello Saurabh
`
    },


    // ============================================================
    // 14. PROPS VS STATE
    // ============================================================

    {
        id: 14,
        module: "props",
        title: "Props vs State",
        concept: "Props are inputs received from a parent, while state is data managed and changed by a component.",
        difficulty: "Medium",

        theory: `
Props and state are both used to manage data in React, but
they have different purposes.

PROPS:

- Passed from parent to child
- Read-only
- Used to provide data to a component
- Controlled by the parent

STATE:

- Managed by the component
- Can change over time
- Used for dynamic data
- Updating state causes the component to re-render

Example:

function User({ name }) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{name}</h1>

            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>
        </div>
    );

}

Here:

name = prop

count = state

Props come from outside the component.

State is managed inside the component.
`,

        example: `
import { useState } from "react";

function Counter({ title }) {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h1>{title}</h1>

            <p>Count: {count}</p>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>

        </div>
    );

}

function App() {

    return (
        <Counter title="My Counter" />
    );

}

export default App;
`,

        output: `
My Counter
Count: 0

After clicking Increment:

Count: 1
`
    }

];

