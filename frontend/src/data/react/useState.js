export const useStateTopics = [

    // ============================================================
    {
        id: 1,
        module: "useState",
        title: "What is useState?",
        concept: "Introduction to useState Hook",
        difficulty: "Easy",

        theory: `
useState is a React Hook used to create and manage state inside a functional component.

State means data that can change during the lifetime of a component.

When state changes, React re-renders the component and displays the updated value.

Syntax:

const [state, setState] = useState(initialValue);
        `,

        example: `
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default Counter;
        `,

        output: `
Initial output:
0

After clicking Increment:
1
2
3
...
        `
    },

    // ============================================================
    {
        id: 2,
        module: "useState",
        title: "useState Syntax",
        concept: "Understanding useState syntax",
        difficulty: "Easy",

        theory: `
useState returns an array containing two values:

1. Current state value
2. Function used to update the state

Example:

const [name, setName] = useState("Saurabh");

name       -> current value
setName    -> update function

The initial value is passed to useState().
        `,

        example: `
import { useState } from "react";

function App() {

    const [name, setName] = useState("Saurabh");

    return (
        <div>
            <h2>{name}</h2>

            <button onClick={() => setName("Rahul")}>
                Change Name
            </button>
        </div>
    );
}

export default App;
        `,

        output: `
Initial:
Saurabh

After clicking the button:
Rahul
        `
    },

    // ============================================================
    {
        id: 3,
        module: "useState",
        title: "Initial State",
        concept: "Setting the initial state value",
        difficulty: "Easy",

        theory: `
The value passed to useState() is called the initial state.

The initial state is used when the component is rendered for the first time.

The initial value can be:

- String
- Number
- Boolean
- Array
- Object
        `,

        example: `
import { useState } from "react";

function App() {

    const [name] = useState("Saurabh");
    const [age] = useState(28);
    const [isLogin] = useState(true);

    return (
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Login: {isLogin ? "Yes" : "No"}</p>
        </div>
    );
}

export default App;
        `,

        output: `
Name: Saurabh
Age: 28
Login: Yes
        `
    },

    // ============================================================
    {
        id: 4,
        module: "useState",
        title: "Updating State",
        concept: "Changing state using setter function",
        difficulty: "Easy",

        theory: `
We should update state using the setter function returned by useState.

For example:

const [count, setCount] = useState(0);

setCount(10);

React updates the state and re-renders the component.

Do not directly modify the state variable.
        `,

        example: `
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>{count}</h2>

            <button onClick={() => setCount(10)}>
                Set 10
            </button>
        </div>
    );
}

export default Counter;
        `,

        output: `
Initial:
0

After clicking:
10
        `
    },

    // ============================================================
    {
        id: 5,
        module: "useState",
        title: "Counter with useState",
        concept: "Creating a counter application",
        difficulty: "Easy",

        theory: `
A counter is one of the simplest examples of useState.

The state stores the current count.

The setter function changes the count.

Example:

setCount(count + 1)

This increases the count by one.
        `,

        example: `
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>

            <button onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    );
}

export default Counter;
        `,

        output: `
Count: 0

Click +:
Count: 1

Click + again:
Count: 2

Click -:
Count: 1
        `
    },

    // ============================================================
    {
        id: 6,
        module: "useState",
        title: "Boolean State",
        concept: "Managing true and false values",
        difficulty: "Easy",

        theory: `
useState can store boolean values.

Boolean state is commonly used for:

- Show/hide elements
- Login status
- Modal visibility
- Toggle buttons
- Loading status
        `,

        example: `
import { useState } from "react";

function App() {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <div>

            <button onClick={() => setIsVisible(!isVisible)}>
                Toggle
            </button>

            {isVisible && <h2>Hello React</h2>}

        </div>
    );
}

export default App;
        `,

        output: `
Initial:
Only Toggle button

After clicking:
Hello React

Click again:
Hello React disappears
        `
    },

    // ============================================================
    {
        id: 7,
        module: "useState",
        title: "String State",
        concept: "Managing string values",
        difficulty: "Easy",

        theory: `
useState can store text values.

String state is commonly used for:

- Username
- Search text
- Input values
- Messages
- Status values
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
Enter:
Saurabh

Output:
Hello Saurabh
        `
    },

    // ============================================================
    {
        id: 8,
        module: "useState",
        title: "Array State",
        concept: "Managing arrays with useState",
        difficulty: "Medium",

        theory: `
useState can store an array.

When updating an array, create a new array instead of directly modifying the existing array.

Common methods:

- Spread operator
- map()
- filter()
        `,

        example: `
import { useState } from "react";

function App() {

    const [users, setUsers] = useState([
        "Saurabh",
        "Rahul"
    ]);

    const addUser = () => {
        setUsers([...users, "Amit"]);
    };

    return (
        <div>

            {users.map((user, index) => (
                <p key={index}>{user}</p>
            ))}

            <button onClick={addUser}>
                Add User
            </button>

        </div>
    );
}

export default App;
        `,

        output: `
Initial:
Saurabh
Rahul

After clicking Add User:
Saurabh
Rahul
Amit
        `
    },

    // ============================================================
    {
        id: 9,
        module: "useState",
        title: "Object State",
        concept: "Managing objects with useState",
        difficulty: "Medium",

        theory: `
useState can store an object.

When updating one property of an object, copy the existing object using the spread operator and then change the required property.

Example:

setUser({
    ...user,
    name: "Rahul"
});
        `,

        example: `
import { useState } from "react";

function App() {

    const [user, setUser] = useState({
        name: "Saurabh",
        age: 28
    });

    const changeName = () => {
        setUser({
            ...user,
            name: "Rahul"
        });
    };

    return (
        <div>

            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>

            <button onClick={changeName}>
                Change Name
            </button>

        </div>
    );
}

export default App;
        `,

        output: `
Initial:
Name: Saurabh
Age: 28

After clicking:
Name: Rahul
Age: 28
        `
    },

    // ============================================================
    {
        id: 10,
        module: "useState",
        title: "Functional State Update",
        concept: "Updating state using previous state",
        difficulty: "Medium",

        theory: `
When the new state depends on the previous state, use the functional update form.

Syntax:

setCount(previousCount => previousCount + 1);

This is safer when multiple state updates happen together because React may batch updates.
        `,

        example: `
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(previousCount => previousCount + 1);
    };

    return (
        <div>
            <h2>{count}</h2>

            <button onClick={increase}>
                Increment
            </button>
        </div>
    );
}

export default Counter;
        `,

        output: `
Initial:
0

After clicking:
1

After clicking again:
2
        `
    },

    // ============================================================
    {
        id: 11,
        module: "useState",
        title: "Multiple useState",
        concept: "Using multiple state variables",
        difficulty: "Medium",

        theory: `
A component can have multiple useState Hooks.

Each state variable can manage different data.

For example:

const [name, setName] = useState("");
const [age, setAge] = useState(0);
const [isLogin, setIsLogin] = useState(false);

Each state has its own setter function.
        `,

        example: `
import { useState } from "react";

function App() {

    const [name, setName] = useState("Saurabh");
    const [age, setAge] = useState(28);

    return (
        <div>

            <h2>{name}</h2>
            <h2>{age}</h2>

            <button onClick={() => setName("Rahul")}>
                Change Name
            </button>

            <button onClick={() => setAge(age + 1)}>
                Increase Age
            </button>

        </div>
    );
}

export default App;
        `,

        output: `
Initial:
Saurabh
28

After changing name:
Rahul
28

After increasing age:
Rahul
29
        `
    },

    // ============================================================
    {
        id: 12,
        module: "useState",
        title: "Common useState Mistakes",
        concept: "Avoiding common state management mistakes",
        difficulty: "Medium",

        theory: `
Common useState mistakes include:

1. Directly modifying state
2. Using stale state when the next value depends on the previous value
3. Mutating arrays directly
4. Mutating objects directly
5. Calling Hooks conditionally
6. Forgetting that state updates cause a re-render

Incorrect:

count = count + 1;

Correct:

setCount(count + 1);

When depending on previous state:

setCount(previous => previous + 1);
        `,

        example: `
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(previousCount => previousCount + 1);
    };

    return (
        <div>

            <h2>{count}</h2>

            <button onClick={increase}>
                Increment
            </button>

        </div>
    );
}

export default Counter;
        `,

        output: `
Initial:
0

After clicking:
1

After clicking again:
2
        `
    }

];