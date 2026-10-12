
export const stateTopics = [

    // ============================================================
    // 1. WHAT IS STATE?
    // ============================================================

    {
        id: 1,
        module: "state",
        title: "What is State?",
        concept: "State is data managed by a React component that can change over time and cause the component to re-render.",
        difficulty: "Easy",

        theory: `
State is data that belongs to a React component.

State is used when data can change during the lifetime of
the component.

Examples:

- Counter value
- Input value
- Login status
- Selected item
- Loading status
- Menu visibility

When state changes, React re-renders the component so that
the UI can display the latest state.

Example:

const [count, setCount] = useState(0);

Here:

count = current state value

setCount = function used to update the state

0 = initial state value
`,

        example: `
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>

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

After clicking:

Count: 1
`
    },


    // ============================================================
    // 2. WHY STATE?
    // ============================================================

    {
        id: 2,
        module: "state",
        title: "Why State?",
        concept: "State is used to store changing data and automatically update the UI when that data changes.",
        difficulty: "Easy",

        theory: `
Normal JavaScript variables do not tell React to update the
UI when their values change.

State solves this problem.

For example, a counter needs to update the displayed number
when the user clicks a button.

React state allows us to store the counter value and update
the UI when the value changes.

State is commonly used for:

- Counters
- Forms
- User input
- Toggle buttons
- Loading indicators
- API data
- Login status
- Selected values

Main idea:

State changes
     ↓
React re-renders
     ↓
Updated UI
`,

        example: `
import { useState } from "react";

function App() {

    const [isVisible, setIsVisible] = useState(true);

    return (
        <div>

            <button
                onClick={() => setIsVisible(!isVisible)}
            >
                Toggle
            </button>

            {isVisible && <p>Hello React</p>}

        </div>
    );

}

export default App;
`,

        output: `
Hello React

Clicking Toggle hides the text.
Clicking again displays the text.
`
    },


    // ============================================================
    // 3. USESTATE
    // ============================================================

    {
        id: 3,
        module: "state",
        title: "useState",
        concept: "useState is a React Hook used to create and manage state in a functional component.",
        difficulty: "Easy",

        theory: `
useState is a React Hook.

It is imported from React:

import { useState } from "react";

Basic syntax:

const [state, setState] = useState(initialValue);

Example:

const [count, setCount] = useState(0);

Here:

count
    Current state value

setCount
    Function used to update count

0
    Initial value

When setCount is called, React updates the state and
re-renders the component.

Hooks must be called at the top level of a React component
or another custom Hook.
`,

        example: `
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h1>{count}</h1>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>

        </div>
    );

}

export default App;
`,

        output: `
0

After clicking:

1
`
    },


    // ============================================================
    // 4. STATE INITIALIZATION
    // ============================================================

    {
        id: 4,
        module: "state",
        title: "State Initialization",
        concept: "State initialization means providing the initial value when creating state with useState.",
        difficulty: "Easy",

        theory: `
The initial state is provided to useState.

Example:

const [count, setCount] = useState(0);

Here:

0

is the initial state.

The initial value can be:

- Number
- String
- Boolean
- Object
- Array
- null

Examples:

useState(0);

useState("Hello");

useState(false);

useState({ name: "Saurabh" });

useState([]);

The initial value is used when the component initializes.
`,

        example: `
import { useState } from "react";

function App() {

    const [name, setName] = useState("Saurabh");

    const [age, setAge] = useState(28);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>

            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Logged In: {isLoggedIn ? "Yes" : "No"}</p>

        </div>
    );

}

export default App;
`,

        output: `
Name: Saurabh
Age: 28
Logged In: No
`
    },


    // ============================================================
    // 5. UPDATING STATE
    // ============================================================

    {
        id: 5,
        module: "state",
        title: "Updating State",
        concept: "State is updated by calling the setter function returned by useState.",
        difficulty: "Easy",

        theory: `
React provides a setter function to update state.

Example:

const [count, setCount] = useState(0);

Update:

setCount(10);

After the update, React schedules a re-render and the
component can display the new value.

For example:

setCount(count + 1);

The state should not be changed directly.

Incorrect:

count = count + 1;

Correct:

setCount(count + 1);

The setter function should be used to update state.
`,

        example: `
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    return (
        <div>

            <h1>Count: {count}</h1>

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

After clicking:

Count: 1
`
    },


    // ============================================================
    // 6. STATE WITH NUMBERS
    // ============================================================

    {
        id: 6,
        module: "state",
        title: "State with Numbers",
        concept: "Number state is used to store and update numeric values such as counters, quantities, and scores.",
        difficulty: "Easy",

        theory: `
useState can store numbers.

Example:

const [count, setCount] = useState(0);

The number can be increased:

setCount(count + 1);

Decreased:

setCount(count - 1);

Or replaced:

setCount(100);

Number state is commonly used for:

- Counters
- Scores
- Quantity
- Age
- Pagination
- Numeric calculations
`,

        example: `
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h1>Count: {count}</h1>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>

            <button onClick={() => setCount(count - 1)}>
                -
            </button>

        </div>
    );

}

export default App;
`,

        output: `
Count: 0

+ → increases count
- → decreases count
`
    },


    // ============================================================
    // 7. STATE WITH STRINGS
    // ============================================================

    {
        id: 7,
        module: "state",
        title: "State with Strings",
        concept: "String state is used to store changing text values such as names, messages, and input values.",
        difficulty: "Easy",

        theory: `
State can store strings.

Example:

const [name, setName] = useState("");

The value can be updated:

setName("Saurabh");

String state is commonly used for:

- Form inputs
- User names
- Search text
- Messages
- Titles
- Status text

Example with an input:

<input
    value={name}
    onChange={(e) => setName(e.target.value)}
/>

This creates controlled input state.
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

            <h1>Hello {name}</h1>

        </div>
    );

}

export default App;
`,

        output: `
Enter name

If user enters:

Saurabh

Output:

Hello Saurabh
`
    },


    // ============================================================
    // 8. STATE WITH OBJECTS
    // ============================================================

    {
        id: 8,
        module: "state",
        title: "State with Objects",
        concept: "Object state stores multiple related values together and should be updated without mutating the existing object.",
        difficulty: "Medium",

        theory: `
An object can be stored in state.

Example:

const [user, setUser] = useState({
    name: "Saurabh",
    age: 28
});

To update one property, create a new object using the
spread operator.

Example:

setUser({
    ...user,
    age: 29
});

Do not directly modify the object:

user.age = 29;

Direct mutation should be avoided because React state should
be treated as immutable.
`,

        example: `
import { useState } from "react";

function App() {

    const [user, setUser] = useState({
        name: "Saurabh",
        age: 28
    });

    function updateAge() {

        setUser({
            ...user,
            age: user.age + 1
        });

    }

    return (
        <div>

            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>

            <button onClick={updateAge}>
                Increase Age
            </button>

        </div>
    );

}

export default App;
`,

        output: `
Saurabh
Age: 28

After clicking:

Age: 29
`
    },


    // ============================================================
    // 9. STATE WITH ARRAYS
    // ============================================================

    {
        id: 9,
        module: "state",
        title: "State with Arrays",
        concept: "Array state is used to store lists of data and should be updated by creating a new array instead of mutating the existing one.",
        difficulty: "Medium",

        theory: `
Arrays can be stored in React state.

Example:

const [skills, setSkills] = useState([
    "Java",
    "React"
]);

To add an item, create a new array:

setSkills([
    ...skills,
    "SQL"
]);

Do not directly modify the state array:

skills.push("SQL");

Instead, use methods that create a new array or use the
spread operator.

Common operations:

Add:

setSkills([...skills, "SQL"]);

Remove:

setSkills(skills.filter(skill => skill !== "Java"));

Update:

setSkills(
    skills.map(skill =>
        skill === "Java" ? "Java 8" : skill
    )
);
`,

        example: `
import { useState } from "react";

function App() {

    const [skills, setSkills] = useState([
        "Java",
        "React"
    ]);

    function addSkill() {

        setSkills([
            ...skills,
            "SQL"
        ]);

    }

    return (
        <div>

            {skills.map(skill => (
                <p key={skill}>
                    {skill}
                </p>
            ))}

            <button onClick={addSkill}>
                Add SQL
            </button>

        </div>
    );

}

export default App;
`,

        output: `
Java
React

After clicking:

Java
React
SQL
`
    },


    // ============================================================
    // 10. MULTIPLE STATES
    // ============================================================

    {
        id: 10,
        module: "state",
        title: "Multiple States",
        concept: "A component can use multiple useState Hooks to manage different pieces of state.",
        difficulty: "Easy",

        theory: `
A component can have multiple state variables.

Example:

const [name, setName] = useState("");

const [age, setAge] = useState(0);

const [isLoggedIn, setIsLoggedIn] = useState(false);

Each state has its own setter function.

Multiple states are useful when different values need to
change independently.

Example:

name → user name

age → user age

isLoggedIn → login status

It is also possible to group related values into an object,
but separate state variables can make independently changing
values easier to manage.
`,

        example: `
import { useState } from "react";

function App() {

    const [name, setName] = useState("Saurabh");

    const [age, setAge] = useState(28);

    return (
        <div>

            <h1>{name}</h1>
            <p>Age: {age}</p>

            <button onClick={() => setAge(age + 1)}>
                Increase Age
            </button>

        </div>
    );

}

export default App;
`,

        output: `
Saurabh
Age: 28

After clicking:

Age: 29
`
    },


    // ============================================================
    // 11. FUNCTIONAL STATE UPDATE
    // ============================================================

    {
        id: 11,
        module: "state",
        title: "Functional State Update",
        concept: "A functional state update calculates the next state from the previous state.",
        difficulty: "Medium",

        theory: `
When the next state depends on the previous state, use the
functional update form.

Instead of:

setCount(count + 1);

We can use:

setCount(prevCount => prevCount + 1);

Here:

prevCount

represents the latest previous state value.

Functional updates are especially useful when multiple state
updates happen together or when the new state depends on the
previous state.

Example:

setCount(prev => prev + 1);

setCount(prev => prev + 1);

setCount(prev => prev + 1);

This safely applies three increments.
`,

        example: `
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    function increaseThreeTimes() {

        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);

    }

    return (
        <div>

            <h1>{count}</h1>

            <button onClick={increaseThreeTimes}>
                Increase 3
            </button>

        </div>
    );

}

export default App;
`,

        output: `
0

After clicking:

3
`
    },


    // ============================================================
    // 12. STATE IMMUTABILITY
    // ============================================================

    {
        id: 12,
        module: "state",
        title: "State Immutability",
        concept: "State immutability means avoiding direct modification of existing state and creating a new value when updating state.",
        difficulty: "Medium",

        theory: `
React state should be treated as immutable.

Do not directly modify existing state.

For objects:

Incorrect:

user.age = 29;

Correct:

setUser({
    ...user,
    age: 29
});

For arrays:

Incorrect:

skills.push("React");

Correct:

setSkills([
    ...skills,
    "React"
]);

For removing an array item:

setSkills(
    skills.filter(skill => skill !== "Java")
);

Immutability helps React correctly detect state changes and
makes state updates predictable.
`,

        example: `
import { useState } from "react";

function App() {

    const [user, setUser] = useState({
        name: "Saurabh",
        age: 28
    });

    function updateAge() {

        setUser(prevUser => ({
            ...prevUser,
            age: prevUser.age + 1
        }));

    }

    return (
        <div>

            <h1>{user.name}</h1>
            <p>Age: {user.age}</p>

            <button onClick={updateAge}>
                Update Age
            </button>

        </div>
    );

}

export default App;
`,

        output: `
Saurabh
Age: 28

After clicking:

Age: 29
`
    },


    // ============================================================
    // 13. STATE VS PROPS
    // ============================================================

    {
        id: 13,
        module: "state",
        title: "State vs Props",
        concept: "Props are read-only data received from a parent, while state is data managed by a component.",
        difficulty: "Medium",

        theory: `
Props and state are both important concepts in React.

PROPS:

- Passed from parent to child
- Read-only
- Used to receive external data
- Controlled by the parent

STATE:

- Managed by the component
- Can change over time
- Updated using a state setter
- Causes the component to re-render when updated

Example:

function User({ name }) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>{name}</h1>
            <p>{count}</p>
        </div>
    );

}

Here:

name = prop

count = state

Simple difference:

Props = data received by component

State = data managed by component
`,

        example: `
import { useState } from "react";

function Counter({ title }) {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h1>{title}</h1>

            <p>Count: {count}</p>

            <button onClick={() => setCount(prev => prev + 1)}>
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

After clicking:

Count: 1
`
    },


    // ============================================================
    // 14. COMMON STATE MISTAKES
    // ============================================================

    {
        id: 14,
        module: "state",
        title: "Common State Mistakes",
        concept: "Common state mistakes include directly modifying state, using stale state, and incorrectly updating objects or arrays.",
        difficulty: "Medium",

        theory: `
Common mistakes when working with React state:

1. Directly modifying state

Incorrect:

count = count + 1;

Correct:

setCount(count + 1);

2. Mutating objects

Incorrect:

user.age = 29;

Correct:

setUser({
    ...user,
    age: 29
});

3. Mutating arrays

Incorrect:

skills.push("React");

Correct:

setSkills([
    ...skills,
    "React"
]);

4. Using stale state for dependent updates

Instead of repeatedly using the current variable:

setCount(count + 1);
setCount(count + 1);

Prefer:

setCount(prev => prev + 1);
setCount(prev => prev + 1);

5. Forgetting to import useState

Correct:

import { useState } from "react";

6. Calling Hooks conditionally

Avoid:

if (condition) {
    const [count, setCount] = useState(0);
}

Hooks should be called at the top level of the component.

7. Trying to update state immediately and expecting the variable
to change synchronously.

React schedules state updates and the current render's state
value does not change immediately just because the setter was
called.
`,

        example: `
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    function increment() {

        setCount(prev => prev + 1);

    }

    return (
        <div>

            <h1>{count}</h1>

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

After clicking:

1

The state is updated using the setter function.
`
    }

];

