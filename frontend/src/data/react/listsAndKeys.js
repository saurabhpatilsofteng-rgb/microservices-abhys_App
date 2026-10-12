
export const listsAndKeysTopics = [

    // ============================================================
    // 1. RENDERING LISTS
    // ============================================================

    {
        id: 1,
        module: "lists-keys",
        title: "Rendering Lists",
        concept: "Rendering lists means displaying multiple items from an array as React elements.",
        difficulty: "Easy",

        theory: `
In React, we often have multiple pieces of data that need to
be displayed on the screen.

For example:

- List of users
- List of products
- List of employees
- List of courses

React can render these items by converting array data into
JSX elements.

Example:

const users = ["Saurabh", "Rahul", "Amit"];

Each user can be displayed as:

<h3>Saurabh</h3>
<h3>Rahul</h3>
<h3>Amit</h3>

The map() method is commonly used to render arrays in React.
`,

        example: `
function App() {

    const users = [
        "Saurabh",
        "Rahul",
        "Amit"
    ];

    return (
        <div>

            <h1>Users</h1>

            {users.map((user) => (
                <p>{user}</p>
            ))}

        </div>
    );
}

export default App;
`,

        output: `
Users

Saurabh
Rahul
Amit
`
    },


    // ============================================================
    // 2. map()
    // ============================================================

    {
        id: 2,
        module: "lists-keys",
        title: "map()",
        concept: "The map() method creates a new array by applying a function to every element of an existing array.",
        difficulty: "Easy",

        theory: `
The JavaScript map() method is one of the most commonly used
methods for rendering lists in React.

Syntax:

array.map((item) => {
    return JSX;
});

Example:

const numbers = [1, 2, 3];

numbers.map((number) => (
    <p>{number}</p>
));

React creates one JSX element for each array item.

The original array is not changed by map().
`,

        example: `
function App() {

    const numbers = [10, 20, 30, 40];

    return (
        <div>

            {numbers.map((number) => (
                <p>{number}</p>
            ))}

        </div>
    );
}

export default App;
`,

        output: `
10
20
30
40
`
    },


    // ============================================================
    // 3. KEYS
    // ============================================================

    {
        id: 3,
        module: "lists-keys",
        title: "Keys",
        concept: "Keys are special attributes that help React identify which list items have changed, been added, or been removed.",
        difficulty: "Easy",

        theory: `
When rendering a list, React needs a way to identify each
individual item.

Keys provide this identity.

Example:

users.map((user) => (
    <p key={user.id}>
        {user.name}
    </p>
));

The key should be unique among the elements in that list.

Keys help React efficiently update the DOM when the list
changes.

Important:

The key is used by React internally and is not passed to the
component as a normal prop.
`,

        example: `
function App() {

    const users = [
        { id: 1, name: "Saurabh" },
        { id: 2, name: "Rahul" },
        { id: 3, name: "Amit" }
    ];

    return (
        <div>

            {users.map((user) => (
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
Saurabh
Rahul
Amit
`
    },


    // ============================================================
    // 4. UNIQUE KEYS
    // ============================================================

    {
        id: 4,
        module: "lists-keys",
        title: "Unique Keys",
        concept: "A unique key gives each list item a stable identity so React can correctly track that item.",
        difficulty: "Easy",

        theory: `
Keys should be unique among the sibling elements being
rendered.

A database ID is usually a good choice.

Example:

const products = [
    { id: 101, name: "Laptop" },
    { id: 102, name: "Mouse" },
    { id: 103, name: "Keyboard" }
];

Use:

key={product.id}

Each product has a different key:

101
102
103

Avoid using the same key for multiple items.

Bad:

key="product"

Good:

key={product.id}

A stable key should normally remain associated with the same
item when the list changes.
`,

        example: `
function App() {

    const products = [
        { id: 101, name: "Laptop" },
        { id: 102, name: "Mouse" },
        { id: 103, name: "Keyboard" }
    ];

    return (
        <div>

            {products.map((product) => (
                <p key={product.id}>
                    {product.name}
                </p>
            ))}

        </div>
    );
}

export default App;
`,

        output: `
Laptop
Mouse
Keyboard
`
    },


    // ============================================================
    // 5. INDEX AS KEY
    // ============================================================

    {
        id: 5,
        module: "lists-keys",
        title: "Index as Key",
        concept: "The array index can be used as a key for static lists, but it can cause problems when list items are reordered, inserted, or removed.",
        difficulty: "Medium",

        theory: `
The map() method provides an index as the second argument.

Example:

items.map((item, index) => (
    <p key={index}>
        {item}
    </p>
));

Using the index as a key is acceptable when the list is static
and items never change order.

However, it can cause problems when:

- Items are inserted
- Items are deleted
- Items are reordered
- List items have their own state

Example:

A list:

A
B
C

Indexes:

0
1
2

If A is removed:

B
C

Now B has index 0 and C has index 1.

React may associate existing component state with the wrong
item.

Therefore, stable unique IDs are usually preferred.
`,

        example: `
function App() {

    const colors = [
        "Red",
        "Green",
        "Blue"
    ];

    return (
        <div>

            {colors.map((color, index) => (
                <p key={index}>
                    {color}
                </p>
            ))}

        </div>
    );
}

export default App;
`,

        output: `
Red
Green
Blue
`
    },


    // ============================================================
    // 6. RENDERING OBJECTS
    // ============================================================

    {
        id: 6,
        module: "lists-keys",
        title: "Rendering Objects",
        concept: "Rendering objects means using object properties to display structured data in React.",
        difficulty: "Easy",

        theory: `
React cannot directly render a normal JavaScript object as
a child.

For example:

const user = {
    name: "Saurabh",
    age: 28
};

This is not valid:

<p>{user}</p>

Instead, access individual properties:

<p>{user.name}</p>
<p>{user.age}</p>

For multiple objects, use map().

Example:

users.map((user) => (
    <div key={user.id}>
        <h3>{user.name}</h3>
        <p>{user.age}</p>
    </div>
));

Each object represents one item in the list.
`,

        example: `
function App() {

    const users = [
        {
            id: 1,
            name: "Saurabh",
            age: 28
        },
        {
            id: 2,
            name: "Rahul",
            age: 25
        }
    ];

    return (
        <div>

            {users.map((user) => (
                <div key={user.id}>

                    <h3>{user.name}</h3>
                    <p>Age: {user.age}</p>

                </div>
            ))}

        </div>
    );
}

export default App;
`,

        output: `
Saurabh
Age: 28

Rahul
Age: 25
`
    },


    // ============================================================
    // 7. RENDERING NESTED ARRAYS
    // ============================================================

    {
        id: 7,
        module: "lists-keys",
        title: "Rendering Nested Arrays",
        concept: "Nested arrays can be rendered by using map() inside another map() and providing appropriate keys for each level.",
        difficulty: "Medium",

        theory: `
Sometimes data contains arrays inside objects or arrays.

Example:

const departments = [
    {
        id: 1,
        name: "Development",
        employees: [
            "Saurabh",
            "Rahul"
        ]
    },
    {
        id: 2,
        name: "Testing",
        employees: [
            "Amit",
            "Priya"
        ]
    }
];

We can use map() for departments and another map() for
employees.

Example:

departments.map((department) => (
    <div key={department.id}>

        {department.employees.map((employee) => (
            <p key={employee}>
                {employee}
            </p>
        ))}

    </div>
));

Each mapped level should have appropriate keys.
`,

        example: `
function App() {

    const departments = [
        {
            id: 1,
            name: "Development",
            employees: ["Saurabh", "Rahul"]
        },
        {
            id: 2,
            name: "Testing",
            employees: ["Amit", "Priya"]
        }
    ];

    return (
        <div>

            {departments.map((department) => (

                <div key={department.id}>

                    <h2>{department.name}</h2>

                    {department.employees.map((employee) => (
                        <p key={employee}>
                            {employee}
                        </p>
                    ))}

                </div>

            ))}

        </div>
    );
}

export default App;
`,

        output: `
Development
Saurabh
Rahul

Testing
Amit
Priya
`
    },


    // ============================================================
    // 8. COMMON KEY MISTAKES
    // ============================================================

    {
        id: 8,
        module: "lists-keys",
        title: "Common Key Mistakes",
        concept: "Common key mistakes include missing keys, duplicate keys, unstable keys, and unnecessarily using array indexes.",
        difficulty: "Medium",

        theory: `
There are several common mistakes when using React keys.

1. Missing key

Bad:

users.map((user) => (
    <p>{user.name}</p>
));

React may show a warning about missing keys.

2. Duplicate keys

Bad:

key="user"

for every item.

Each sibling should have a unique key.

3. Using random values

Bad:

key={Math.random()}

This creates a new key during rendering and makes React
treat items as different elements.

4. Using array index for dynamic lists

key={index}

This can cause incorrect component state when items are
reordered, inserted, or deleted.

5. Using unstable values

Keys should remain stable for the same item.

Best practice:

Use a stable unique identifier from your data.

Example:

key={user.id}
`,

        example: `
function App() {

    const users = [
        { id: 1, name: "Saurabh" },
        { id: 2, name: "Rahul" },
        { id: 3, name: "Amit" }
    ];

    return (
        <div>

            {users.map((user) => (
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
Saurabh
Rahul
Amit
`
    }

];

