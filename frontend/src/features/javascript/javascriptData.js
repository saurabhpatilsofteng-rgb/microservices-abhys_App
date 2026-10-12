export const javascriptModules = [

    {
        id: 1,
        slug: "javascript-fundamentals",
        title: "JavaScript Fundamentals",
        category: "JavaScript",
        description:
            "Learn JavaScript basics, syntax, variables, data types and operators.",

        topics: [

            {
                id: 1,
                title: "What is JavaScript?",

                explanation:
                    "JavaScript is a high-level programming language primarily used to add behavior and interactivity to web applications. It runs in browsers and can also run on servers using environments such as Node.js.",

                importance:
                    "JavaScript is one of the core technologies of modern web development and is essential for frontend development, React, Node.js and full-stack applications.",

                code:
`console.log("Hello JavaScript");

const name = "Saurabh";

console.log(name);`
            },

            {
                id: 2,
                title: "JavaScript Syntax",

                explanation:
                    "JavaScript syntax defines the rules used to write JavaScript programs, including statements, expressions, blocks, variables and functions.",

                importance:
                    "Understanding syntax is necessary before learning advanced JavaScript concepts.",

                code:
`const age = 28;

if (age >= 18) {

    console.log("Adult");

}`
            },

            {
                id: 3,
                title: "Variables",

                explanation:
                    "Variables are used to store values. JavaScript provides let, const and var for declaring variables.",

                importance:
                    "Variables are fundamental to storing and manipulating application data.",

                code:
`let age = 25;

const name = "Saurabh";

var city = "Mumbai";

console.log(age);
console.log(name);
console.log(city);`
            },

            {
                id: 4,
                title: "let vs const vs var",

                explanation:
                    "let and const are block-scoped declarations introduced with modern JavaScript. var is function-scoped and has different hoisting behavior.",

                importance:
                    "Modern JavaScript applications generally prefer const and let because they provide clearer scoping behavior.",

                code:
`let count = 10;

count = 20;


const name = "Saurabh";

// name = "Rahul";
// Error


var city = "Mumbai";`
            },

            {
                id: 5,
                title: "Data Types",

                explanation:
                    "JavaScript has primitive types such as string, number, bigint, boolean, undefined, symbol and null, along with objects.",

                importance:
                    "Knowing data types helps developers understand how values behave and how operations are performed.",

                code:
`let name = "Saurabh";

let age = 28;

let active = true;

let value;

let data = null;

let user = {
    name: "Saurabh"
};

console.log(typeof name);
console.log(typeof age);
console.log(typeof active);`
            },

            {
                id: 6,
                title: "Operators",

                explanation:
                    "Operators perform operations on values, including arithmetic, comparison, logical, assignment and other operations.",

                importance:
                    "Operators are used throughout JavaScript programs for calculations and decision-making.",

                code:
`let a = 10;

let b = 5;

console.log(a + b);

console.log(a - b);

console.log(a * b);

console.log(a / b);

console.log(a > b);

console.log(a === b);`
            }

        ]
    },


    {
        id: 2,
        slug: "control-flow",
        title: "Control Flow",
        category: "JavaScript",
        description:
            "Learn conditions, loops and decision-making in JavaScript.",

        topics: [

            {
                id: 1,
                title: "if Statement",

                explanation:
                    "The if statement executes a block of code when a specified condition evaluates to true.",

                importance:
                    "Conditional execution is fundamental to application logic.",

                code:
`const age = 20;

if (age >= 18) {

    console.log("Eligible");

}`
            },

            {
                id: 2,
                title: "if else",

                explanation:
                    "if-else allows a program to execute one block when a condition is true and another block when it is false.",

                importance:
                    "It is commonly used when an application has two possible logical paths.",

                code:
`const age = 16;

if (age >= 18) {

    console.log("Adult");

} else {

    console.log("Minor");

}`
            },

            {
                id: 3,
                title: "else if",

                explanation:
                    "else-if allows multiple conditions to be evaluated sequentially.",

                importance:
                    "It is useful when an application has several possible conditions.",

                code:
`const marks = 75;

if (marks >= 90) {

    console.log("A+");

} else if (marks >= 75) {

    console.log("A");

} else if (marks >= 60) {

    console.log("B");

} else {

    console.log("C");

}`
            },

            {
                id: 4,
                title: "switch",

                explanation:
                    "The switch statement compares an expression against multiple case values.",

                importance:
                    "It can make multiple fixed-value branches easier to read.",

                code:
`const day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Unknown");

}`
            },

            {
                id: 5,
                title: "for Loop",

                explanation:
                    "A for loop repeatedly executes code while a loop condition remains true.",

                importance:
                    "Loops are fundamental for processing collections and repeated operations.",

                code:
`for (let i = 1; i <= 5; i++) {

    console.log(i);

}`
            },

            {
                id: 6,
                title: "while Loop",

                explanation:
                    "A while loop repeatedly executes a block while its condition is true.",

                importance:
                    "It is useful when the number of iterations is not known in advance.",

                code:
`let i = 1;

while (i <= 5) {

    console.log(i);

    i++;

}`
            },

            {
                id: 7,
                title: "for...of",

                explanation:
                    "for...of iterates over values from iterable objects such as arrays and strings.",

                importance:
                    "It provides a clean way to iterate through collection values.",

                code:
`const numbers = [10, 20, 30];

for (const number of numbers) {

    console.log(number);

}`
            },

            {
                id: 8,
                title: "for...in",

                explanation:
                    "for...in iterates over enumerable property keys of an object.",

                importance:
                    "It is useful when working with object property names.",

                code:
`const user = {

    name: "Saurabh",

    age: 28

};

for (const key in user) {

    console.log(key);
    console.log(user[key]);

}`
            }

        ]
    },


    {
        id: 3,
        slug: "functions",
        title: "Functions",
        category: "JavaScript",
        description:
            "Learn function declarations, expressions, arrow functions, parameters and return values.",

        topics: [

            {
                id: 1,
                title: "Function Declaration",

                explanation:
                    "A function declaration defines a reusable block of code that can be called by name.",

                importance:
                    "Functions help divide large programs into reusable and maintainable units.",

                code:
`function greet() {

    console.log("Hello");

}

greet();`
            },

            {
                id: 2,
                title: "Parameters and Arguments",

                explanation:
                    "Parameters are variables defined by a function, while arguments are the actual values passed during a function call.",

                importance:
                    "They allow functions to work with dynamic input.",

                code:
`function add(a, b) {

    return a + b;

}

const result = add(10, 20);

console.log(result);`
            },

            {
                id: 3,
                title: "Return Statement",

                explanation:
                    "The return statement sends a value from a function back to its caller.",

                importance:
                    "Return values allow functions to produce reusable results.",

                code:
`function square(number) {

    return number * number;

}

const result = square(5);

console.log(result);`
            },

            {
                id: 4,
                title: "Function Expression",

                explanation:
                    "A function expression stores a function inside a variable.",

                importance:
                    "Function expressions are useful when functions need to be treated as values.",

                code:
`const greet = function() {

    console.log("Hello");

};

greet();`
            },

            {
                id: 5,
                title: "Arrow Function",

                explanation:
                    "Arrow functions provide a shorter syntax for writing functions and have lexical this behavior.",

                importance:
                    "Arrow functions are heavily used in modern JavaScript and React.",

                code:
`const add = (a, b) => {

    return a + b;

};

console.log(add(10, 20));`
            },

            {
                id: 6,
                title: "Default Parameters",

                explanation:
                    "Default parameters provide fallback values when an argument is undefined.",

                importance:
                    "They simplify functions that have optional inputs.",

                code:
`function greet(
    name = "Guest"
) {

    console.log(
        "Hello " + name
    );

}

greet();

greet("Saurabh");`
            }

        ]
    },


    {
        id: 4,
        slug: "arrays",
        title: "Arrays",
        category: "JavaScript",
        description:
            "Learn arrays and the most important array methods used in JavaScript.",

        topics: [

            {
                id: 1,
                title: "Creating Arrays",

                explanation:
                    "An array is an ordered collection that can contain multiple values.",

                importance:
                    "Arrays are used extensively for storing lists of data in web applications.",

                code:
`const numbers = [
    10,
    20,
    30,
    40
];

console.log(numbers);`
            },

            {
                id: 2,
                title: "map()",

                explanation:
                    "map() creates a new array by applying a function to every element.",

                importance:
                    "map() is one of the most frequently used methods in React for rendering lists.",

                code:
`const numbers = [1, 2, 3, 4];

const doubled =
    numbers.map(
        number => number * 2
    );

console.log(doubled);`
            },

            {
                id: 3,
                title: "filter()",

                explanation:
                    "filter() creates a new array containing elements that satisfy a condition.",

                importance:
                    "It is commonly used to filter data displayed in applications.",

                code:
`const numbers = [
    10,
    15,
    20,
    25
];

const result =
    numbers.filter(
        number => number > 15
    );

console.log(result);`
            },

            {
                id: 4,
                title: "reduce()",

                explanation:
                    "reduce() processes array elements and produces a single accumulated result.",

                importance:
                    "It is useful for totals, grouping, counting and other aggregation operations.",

                code:
`const numbers = [
    10,
    20,
    30
];

const total =
    numbers.reduce(
        (sum, number) =>
            sum + number,
        0
    );

console.log(total);`
            },

            {
                id: 5,
                title: "find()",

                explanation:
                    "find() returns the first array element that satisfies a condition.",

                importance:
                    "It is useful when searching collections for a matching object.",

                code:
`const users = [

    {
        id: 1,
        name: "Saurabh"
    },

    {
        id: 2,
        name: "Rahul"
    }

];

const user =
    users.find(
        user => user.id === 2
    );

console.log(user);`
            },

            {
                id: 6,
                title: "some() and every()",

                explanation:
                    "some() checks whether at least one element satisfies a condition, while every() checks whether all elements satisfy it.",

                importance:
                    "These methods simplify common validation and collection checks.",

                code:
`const numbers = [
    10,
    20,
    30
];

console.log(
    numbers.some(
        n => n > 25
    )
);

console.log(
    numbers.every(
        n => n > 0
    )
);`
            }

        ]
    },


    {
        id: 5,
        slug: "objects",
        title: "Objects",
        category: "JavaScript",
        description:
            "Learn objects, properties, methods, destructuring and object operations.",

        topics: [

            {
                id: 1,
                title: "Creating Objects",

                explanation:
                    "Objects store data as key-value pairs and can also contain functions as methods.",

                importance:
                    "Objects are fundamental to representing real-world entities and application state.",

                code:
`const user = {

    name: "Saurabh",

    age: 28,

    city: "Mumbai"

};

console.log(user.name);`
            },

            {
                id: 2,
                title: "Object Methods",

                explanation:
                    "An object method is a function stored as a property of an object.",

                importance:
                    "Methods allow objects to encapsulate related behavior.",

                code:
`const user = {

    name: "Saurabh",

    greet() {

        console.log(
            "Hello " + this.name
        );

    }

};

user.greet();`
            },

            {
                id: 3,
                title: "Object Destructuring",

                explanation:
                    "Destructuring extracts values from objects into variables.",

                importance:
                    "It is heavily used in modern JavaScript and React.",

                code:
`const user = {

    name: "Saurabh",

    age: 28

};

const {
    name,
    age
} = user;

console.log(name);
console.log(age);`
            },

            {
                id: 4,
                title: "Object.keys()",

                explanation:
                    "Object.keys() returns an array containing an object's enumerable property names.",

                importance:
                    "It is useful when iterating over object properties.",

                code:
`const user = {

    name: "Saurabh",

    age: 28

};

console.log(
    Object.keys(user)
);`
            },

            {
                id: 5,
                title: "Object.values()",

                explanation:
                    "Object.values() returns an array containing an object's enumerable property values.",

                importance:
                    "It is useful when you need to process object values.",

                code:
`const user = {

    name: "Saurabh",

    age: 28

};

console.log(
    Object.values(user)
);`
            },

            {
                id: 6,
                title: "Spread Operator",

                explanation:
                    "The spread syntax expands iterable values or object properties into another context.",

                importance:
                    "It is heavily used for immutable updates in React and Redux.",

                code:
`const user = {

    name: "Saurabh",

    age: 28

};

const updatedUser = {

    ...user,

    age: 29

};

console.log(updatedUser);`
            }

        ]
    },


    {
        id: 6,
        slug: "strings",
        title: "Strings",
        category: "JavaScript",
        description:
            "Learn string manipulation and important string methods.",

        topics: [

            {
                id: 1,
                title: "Template Literals",

                explanation:
                    "Template literals use backticks and support embedded expressions.",

                importance:
                    "They provide a clean way to construct dynamic strings.",

                code:
`const name = "Saurabh";

const message =
    \`Hello \${name}\`;

console.log(message);`
            },

            {
                id: 2,
                title: "String Methods",

                explanation:
                    "JavaScript provides methods such as toUpperCase(), toLowerCase(), includes(), startsWith() and endsWith().",

                importance:
                    "String processing is common in validation, search and UI development.",

                code:
`const text = "JavaScript";

console.log(
    text.toUpperCase()
);

console.log(
    text.includes("Script")
);`
            },

            {
                id: 3,
                title: "split()",

                explanation:
                    "split() divides a string into an array based on a separator.",

                importance:
                    "It is useful for parsing text and processing input.",

                code:
`const text =
    "Java,Spring,React";

const result =
    text.split(",");

console.log(result);`
            },

            {
                id: 4,
                title: "slice()",

                explanation:
                    "slice() extracts part of a string without modifying the original string.",

                importance:
                    "It is useful for extracting substrings.",

                code:
`const text =
    "JavaScript";

console.log(
    text.slice(0, 4)
);`
            }

        ]
    },


    {
        id: 7,
        slug: "es6-features",
        title: "ES6+ Features",
        category: "JavaScript",
        description:
            "Learn modern JavaScript features introduced in ES6 and later versions.",

        topics: [

            {
                id: 1,
                title: "Destructuring",

                explanation:
                    "Destructuring allows values to be extracted from arrays and objects into variables.",

                importance:
                    "It is widely used in modern JavaScript, React and Redux.",

                code:
`const numbers = [
    10,
    20
];

const [
    first,
    second
] = numbers;

console.log(first);
console.log(second);`
            },

            {
                id: 2,
                title: "Spread Operator",

                explanation:
                    "The spread operator expands elements or properties into a new array or object.",

                importance:
                    "It is important for immutable data operations.",

                code:
`const first = [1, 2];

const second = [3, 4];

const result = [
    ...first,
    ...second
];

console.log(result);`
            },

            {
                id: 3,
                title: "Rest Operator",

                explanation:
                    "The rest syntax collects remaining arguments or properties into a single structure.",

                importance:
                    "It is useful for functions that accept a variable number of arguments.",

                code:
`function sum(...numbers) {

    return numbers.reduce(
        (total, number) =>
            total + number,
        0
    );

}

console.log(
    sum(10, 20, 30)
);`
            },

            {
                id: 4,
                title: "Optional Chaining",

                explanation:
                    "Optional chaining allows safe access to nested properties when an intermediate value may be null or undefined.",

                importance:
                    "It prevents many common runtime errors when working with API responses.",

                code:
`const user = {};

console.log(
    user.address?.city
);`
            },

            {
                id: 5,
                title: "Nullish Coalescing",

                explanation:
                    "The nullish coalescing operator provides a fallback only when the left side is null or undefined.",

                importance:
                    "It is useful when handling optional data without treating other falsy values as missing.",

                code:
`const username =
    null ?? "Guest";

console.log(username);`
            }

        ]
    },


    {
        id: 8,
        slug: "dom",
        title: "DOM Manipulation",
        category: "JavaScript",
        description:
            "Learn how JavaScript interacts with HTML through the DOM.",

        topics: [

            {
                id: 1,
                title: "What is DOM?",

                explanation:
                    "The Document Object Model represents an HTML document as a tree of objects that JavaScript can access and manipulate.",

                importance:
                    "The DOM is fundamental to browser-side JavaScript and explains how JavaScript changes web pages.",

                code:
`const title =
    document.querySelector("h1");

title.textContent =
    "Hello JavaScript";`
            },

            {
                id: 2,
                title: "querySelector()",

                explanation:
                    "querySelector() returns the first element matching a CSS selector.",

                importance:
                    "It provides a flexible way to select DOM elements.",

                code:
`const button =
    document.querySelector(
        "#loginButton"
    );

console.log(button);`
            },

            {
                id: 3,
                title: "Event Listeners",

                explanation:
                    "Event listeners execute functions when specified browser events occur.",

                importance:
                    "Events are fundamental to interactive web applications.",

                code:
`const button =
    document.querySelector(
        "#button"
    );

button.addEventListener(
    "click",
    () => {

        console.log(
            "Button clicked"
        );

    }
);`
            },

            {
                id: 4,
                title: "Creating Elements",

                explanation:
                    "JavaScript can create new DOM elements and add them to the document.",

                importance:
                    "It demonstrates how browser applications can dynamically modify the page.",

                code:
`const heading =
    document.createElement("h1");

heading.textContent =
    "Hello";

document.body.appendChild(
    heading
);`
            }

        ]
    },


    {
        id: 9,
        slug: "asynchronous-javascript",
        title: "Asynchronous JavaScript",
        category: "JavaScript",
        description:
            "Learn callbacks, promises, async/await and asynchronous programming.",

        topics: [

            {
                id: 1,
                title: "Synchronous vs Asynchronous",

                explanation:
                    "Synchronous code generally executes sequentially, while asynchronous operations allow work such as timers and network requests to complete later without blocking the JavaScript execution flow in the same way.",

                importance:
                    "Understanding asynchronous behavior is essential for API calls and modern web applications.",

                code:
`console.log("Start");

setTimeout(() => {

    console.log("Async");

}, 1000);

console.log("End");`
            },

            {
                id: 2,
                title: "Callback",

                explanation:
                    "A callback is a function passed to another function to be executed later or when an operation completes.",

                importance:
                    "Callbacks are a foundational concept for understanding asynchronous JavaScript.",

                code:
`function greet(
    name,
    callback
) {

    console.log(
        "Hello " + name
    );

    callback();

}

greet(
    "Saurabh",
    () => console.log(
        "Done"
    )
);`
            },

            {
                id: 3,
                title: "Promise",

                explanation:
                    "A Promise represents the eventual completion or failure of an asynchronous operation.",

                importance:
                    "Promises are fundamental for handling asynchronous APIs and network requests.",

                code:
`const promise =
    new Promise(
        (resolve, reject) => {

            resolve(
                "Success"
            );

        }
    );

promise.then(
    result => console.log(result)
);`
            },

            {
                id: 4,
                title: "async and await",

                explanation:
                    "async and await provide syntax for writing promise-based asynchronous code in a more sequential style.",

                importance:
                    "They are widely used for API calls in modern frontend and backend JavaScript.",

                code:
`async function getData() {

    const response =
        await fetch(
            "/api/users"
        );

    const data =
        await response.json();

    console.log(data);

}`
            },

            {
                id: 5,
                title: "Promise.all()",

                explanation:
                    "Promise.all() waits for multiple promises to fulfill and returns their results together, rejecting if one of them rejects.",

                importance:
                    "It is useful when independent asynchronous operations can run concurrently.",

                code:
`const users =
    fetch("/api/users");

const products =
    fetch("/api/products");

const results =
    await Promise.all([
        users,
        products
    ]);`
            }

        ]
    },


    {
        id: 10,
        slug: "error-handling",
        title: "Error Handling",
        category: "JavaScript",
        description:
            "Learn exceptions, try/catch/finally and error handling strategies.",

        topics: [

            {
                id: 1,
                title: "try catch",

                explanation:
                    "try/catch allows JavaScript programs to handle exceptions thrown during execution.",

                importance:
                    "Proper error handling prevents unexpected application failures.",

                code:
`try {

    const result =
        JSON.parse(
            "invalid json"
        );

} catch (error) {

    console.error(
        error.message
    );

}`
            },

            {
                id: 2,
                title: "finally",

                explanation:
                    "The finally block executes after try/catch processing regardless of whether an exception occurred.",

                importance:
                    "It is useful for cleanup operations.",

                code:
`try {

    console.log("Try");

} catch (error) {

    console.log("Error");

} finally {

    console.log("Cleanup");

}`
            },

            {
                id: 3,
                title: "throw",

                explanation:
                    "The throw statement creates an exception that can be handled by a surrounding try/catch.",

                importance:
                    "It allows developers to explicitly report invalid states or inputs.",

                code:
`function validate(age) {

    if (age < 18) {

        throw new Error(
            "Age must be 18 or above"
        );

    }

}

try {

    validate(15);

} catch (error) {

    console.log(
        error.message
    );

}`
            }

        ]
    },


    {
        id: 11,
        slug: "closures-scope",
        title: "Scope & Closures",
        category: "JavaScript",
        description:
            "Understand lexical scope, closures and execution behavior.",

        topics: [

            {
                id: 1,
                title: "Global Scope",

                explanation:
                    "Variables declared in the global scope can be accessed according to the rules of the surrounding JavaScript environment.",

                importance:
                    "Understanding scope helps prevent accidental variable access and naming conflicts.",

                code:
`const appName =
    "DSA Learning App";

function showName() {

    console.log(appName);

}

showName();`
            },

            {
                id: 2,
                title: "Function Scope",

                explanation:
                    "Variables declared with var are function-scoped.",

                importance:
                    "Understanding function scope helps explain differences between var, let and const.",

                code:
`function test() {

    var message =
        "Hello";

    console.log(message);

}

test();`
            },

            {
                id: 3,
                title: "Block Scope",

                explanation:
                    "let and const declarations are block-scoped.",

                importance:
                    "Block scope provides predictable variable boundaries in modern JavaScript.",

                code:
`if (true) {

    let message =
        "Hello";

    const value = 10;

    console.log(message);
}`
            },

            {
                id: 4,
                title: "Closure",

                explanation:
                    "A closure occurs when a function retains access to variables from its lexical scope even after the outer function has finished executing.",

                importance:
                    "Closures are important for data privacy, callbacks, factories and many JavaScript patterns.",

                code:
`function counter() {

    let count = 0;

    return function() {

        count++;

        return count;

    };

}

const increment =
    counter();

console.log(increment());
console.log(increment());`
            }

        ]
    },


    {
        id: 12,
        slug: "this-and-prototypes",
        title: "this & Prototypes",
        category: "JavaScript",
        description:
            "Understand this, prototype chains and JavaScript's object model.",

        topics: [

            {
                id: 1,
                title: "this Keyword",

                explanation:
                    "The value of this depends on how a function is called. In object methods it commonly refers to the object used for the call.",

                importance:
                    "this is one of the most frequently misunderstood JavaScript concepts.",

                code:
`const user = {

    name: "Saurabh",

    greet() {

        console.log(
            this.name
        );

    }

};

user.greet();`
            },

            {
                id: 2,
                title: "Prototype",

                explanation:
                    "JavaScript objects can inherit properties and methods through the prototype chain.",

                importance:
                    "Prototypes are fundamental to JavaScript's object inheritance model.",

                code:
`const user = {

    name: "Saurabh"

};

console.log(
    Object.getPrototypeOf(user)
);`
            },

            {
                id: 3,
                title: "Class Syntax",

                explanation:
                    "JavaScript classes provide a syntax for creating objects and defining inheritance using prototype-based semantics underneath.",

                importance:
                    "Classes are commonly used in object-oriented JavaScript codebases.",

                code:
`class User {

    constructor(name) {

        this.name = name;

    }

    greet() {

        console.log(
            "Hello " + this.name
        );

    }

}

const user =
    new User("Saurabh");

user.greet();`
            }

        ]
    },


    {
        id: 13,
        slug: "modules",
        title: "JavaScript Modules",
        category: "JavaScript",
        description:
            "Learn import, export and modular application structure.",

        topics: [

            {
                id: 1,
                title: "Named Export",

                explanation:
                    "Named exports allow multiple specific values to be exported from a JavaScript module.",

                importance:
                    "Modular code is essential for maintainable frontend applications.",

                code:
`// math.js

export const add =
    (a, b) => a + b;

export const subtract =
    (a, b) => a - b;`
            },

            {
                id: 2,
                title: "Named Import",

                explanation:
                    "Named imports allow specific exported values to be imported from another module.",

                importance:
                    "They help organize application functionality across files.",

                code:
`import {
    add,
    subtract
} from "./math.js";

console.log(
    add(10, 5)
);`
            },

            {
                id: 3,
                title: "Default Export",

                explanation:
                    "A module can have one default export that can be imported using any local name.",

                importance:
                    "Default exports are common for components and primary module values.",

                code:
`// User.js

export default User;

// App.js

import User
    from "./User.js";`
            }

        ]
    },


    {
        id: 14,
        slug: "javascript-interview",
        title: "JavaScript Interview Questions",
        category: "JavaScript",
        description:
            "Important JavaScript concepts frequently asked in frontend and full-stack interviews.",

        topics: [

            {
                id: 1,
                title: "var vs let vs const",

                explanation:
                    "var is function-scoped, while let and const are block-scoped. const prevents reassignment of the binding.",

                importance:
                    "This is a very common JavaScript interview question.",

                code:
`var a = 10;

let b = 20;

const c = 30;`
            },

            {
                id: 2,
                title: "== vs ===",

                explanation:
                    "== performs loose equality comparison with type coercion, while === performs strict equality without coercing the operands.",

                importance:
                    "Understanding equality prevents unexpected comparison behavior.",

                code:
`console.log(
    5 == "5"
);
// true

console.log(
    5 === "5"
);
// false`
            },

            {
                id: 3,
                title: "Hoisting",

                explanation:
                    "Hoisting describes how JavaScript processes certain declarations before execution. The behavior differs for var, let, const and function declarations.",

                importance:
                    "Hoisting is commonly discussed when explaining JavaScript execution behavior.",

                code:
`console.log(value);

var value = 10;

// undefined`
            },

            {
                id: 4,
                title: "Closure Interview Question",

                explanation:
                    "A closure allows an inner function to retain access to variables from its surrounding lexical scope.",

                importance:
                    "Closures are frequently tested in JavaScript interviews.",

                code:
`function outer() {

    let message =
        "Hello";

    return function inner() {

        console.log(message);

    };

}

const fn = outer();

fn();`
            },

            {
                id: 5,
                title: "Promise vs async/await",

                explanation:
                    "async/await is syntax built on top of promises that makes promise-based asynchronous code easier to read.",

                importance:
                    "This is important for frontend API calls and modern JavaScript development.",

                code:
`async function getUsers() {

    try {

        const response =
            await fetch(
                "/api/users"
            );

        const users =
            await response.json();

        return users;

    } catch (error) {

        console.error(error);

    }

}`
            },

            {
                id: 6,
                title: "map vs filter vs reduce",

                explanation:
                    "map transforms every element, filter selects elements and reduce combines elements into an accumulated result.",

                importance:
                    "These methods are extremely common in React and JavaScript coding interviews.",

                code:
`const numbers = [
    1, 2, 3, 4
];

const doubled =
    numbers.map(
        n => n * 2
    );

const even =
    numbers.filter(
        n => n % 2 === 0
    );

const sum =
    numbers.reduce(
        (total, n) =>
            total + n,
        0
    );`
            },

            {
                id: 7,
                title: "Event Loop",

                explanation:
                    "The JavaScript runtime uses an event loop to coordinate synchronous execution with asynchronous callbacks and queued tasks.",

                importance:
                    "The event loop is essential for understanding JavaScript's asynchronous execution model.",

                code:
`console.log("1");

setTimeout(() => {

    console.log("2");

}, 0);

console.log("3");

/*
Output:

1
3
2
*/`
            }

        ]
    }

];