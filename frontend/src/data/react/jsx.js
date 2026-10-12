
export const jsxTopics = [

    // ============================================================
    // 1. WHAT IS JSX?
    // ============================================================

    {
        id: 1,
        module: "jsx",
        title: "What is JSX?",
        concept: "JSX is a JavaScript syntax extension that allows us to write HTML-like code inside JavaScript.",
        difficulty: "Easy",

        theory: `
JSX stands for JavaScript XML.

JSX allows us to write HTML-like syntax inside JavaScript code.

Example:

const element = <h1>Hello React</h1>;

JSX makes React code easier to read and write.

JSX is not directly understood by the browser.

It is transformed into JavaScript by tools such as Babel or the
Vite build process.

JSX is commonly used to describe what the UI should look like.
`,

        example: `
function App() {

    return (
        <h1>Hello React</h1>
    );

}

export default App;
`,

        output: `
Hello React
`
    },


    // ============================================================
    // 2. JSX SYNTAX
    // ============================================================

    {
        id: 2,
        module: "jsx",
        title: "JSX Syntax",
        concept: "JSX syntax uses HTML-like elements inside JavaScript expressions.",
        difficulty: "Easy",

        theory: `
JSX looks similar to HTML, but it follows JavaScript rules.

Basic syntax:

const element = <h1>Hello</h1>;

JSX elements must be properly closed.

Example:

<img src="image.jpg" />

JSX attributes use JavaScript-style expressions when required.

Example:

const name = "Saurabh";

<h1>Hello {name}</h1>

JSX can contain:

- Elements
- Attributes
- JavaScript expressions
- Components
- Conditional expressions
- Arrays and lists
`,

        example: `
function App() {

    const name = "Saurabh";

    return (
        <div>
            <h1>Hello {name}</h1>
            <p>Welcome to React</p>
        </div>
    );

}

export default App;
`,

        output: `
Hello Saurabh
Welcome to React
`
    },


    // ============================================================
    // 3. JAVASCRIPT INSIDE JSX
    // ============================================================

    {
        id: 3,
        module: "jsx",
        title: "JavaScript inside JSX",
        concept: "JavaScript expressions can be written inside JSX using curly braces.",
        difficulty: "Easy",

        theory: `
JSX allows us to use JavaScript expressions inside curly braces:

{ }

For example:

const name = "Saurabh";

<h1>Hello {name}</h1>

We can use:

- Variables
- Mathematical calculations
- Function calls
- Object properties
- Array methods
- Conditional expressions

Example:

<h1>{10 + 20}</h1>

The result will be:

30

JavaScript statements such as if, for, and while cannot be
directly written inside JSX braces.
`,

        example: `
function App() {

    const name = "Saurabh";
    const age = 28;

    return (
        <div>
            <h1>Hello {name}</h1>
            <p>Age: {age}</p>
            <p>Next year: {age + 1}</p>
        </div>
    );

}

export default App;
`,

        output: `
Hello Saurabh
Age: 28
Next year: 29
`
    },


    // ============================================================
    // 4. EXPRESSIONS
    // ============================================================

    {
        id: 4,
        module: "jsx",
        title: "Expressions in JSX",
        concept: "A JSX expression is JavaScript code placed inside curly braces that produces a value.",
        difficulty: "Easy",

        theory: `
JavaScript expressions can be used inside JSX.

Syntax:

{expression}

Examples:

{10 + 20}

{name}

{user.name}

{isLoggedIn ? "Logout" : "Login"}

Expressions produce a value.

Common expressions include:

- Variables
- Arithmetic
- Function calls
- Ternary operators
- Logical operators
- Object properties
- Array methods

Example:

<p>{2 * 5}</p>

Output:

10
`,

        example: `
function App() {

    const firstName = "Saurabh";
    const a = 10;
    const b = 20;

    return (
        <div>
            <h1>{firstName}</h1>
            <p>Sum: {a + b}</p>
            <p>Multiply: {a * b}</p>
        </div>
    );

}

export default App;
`,

        output: `
Saurabh
Sum: 30
Multiply: 200
`
    },


    // ============================================================
    // 5. JSX ATTRIBUTES
    // ============================================================

    {
        id: 5,
        module: "jsx",
        title: "JSX Attributes",
        concept: "JSX attributes are used to provide information or properties to JSX elements.",
        difficulty: "Easy",

        theory: `
JSX attributes are similar to HTML attributes.

Example:

<img src="logo.png" />

Here:

src

is a JSX attribute.

Other common attributes:

- id
- className
- src
- alt
- href
- value
- disabled
- onClick

JavaScript values can be passed using curly braces.

Example:

const imageUrl = "/logo.png";

<img src={imageUrl} />

JSX uses camelCase for many attributes.

For example:

onclick → onClick

tabindex → tabIndex
`,

        example: `
function App() {

    const imageUrl = "/logo.png";

    return (
        <div>
            <h1 id="title">React</h1>

            <img
                src={imageUrl}
                alt="React Logo"
            />
        </div>
    );

}

export default App;
`,

        output: `
React
React Logo image
`
    },


    // ============================================================
    // 6. CLASSNAME
    // ============================================================

    {
        id: 6,
        module: "jsx",
        title: "className",
        concept: "className is the JSX attribute used to assign CSS classes to elements.",
        difficulty: "Easy",

        theory: `
In HTML, we use:

class

In JSX, we use:

className

Example:

<h1 className="title">Hello</h1>

React uses className because class is a reserved keyword
in JavaScript.

CSS:

.title {
    font-size: 30px;
}

JSX:

<h1 className="title">
    Hello React
</h1>

Multiple CSS classes can also be provided:

<div className="container box">
    Content
</div>
`,

        example: `
function App() {

    return (
        <div className="container">

            <h1 className="title">
                Hello React
            </h1>

        </div>
    );

}

export default App;
`,

        output: `
Hello React
`
    },


    // ============================================================
    // 7. INLINE STYLES
    // ============================================================

    {
        id: 7,
        module: "jsx",
        title: "Inline Styles",
        concept: "Inline styles in JSX are provided using a JavaScript object through the style attribute.",
        difficulty: "Easy",

        theory: `
JSX allows styles to be written directly on an element.

Example:

<h1 style={{ color: "red" }}>
    Hello
</h1>

There are two curly braces:

First { }

means JavaScript expression.

Second { }

contains the JavaScript object.

CSS property names use camelCase.

HTML/CSS:

background-color

JSX:

backgroundColor

Example:

const style = {
    color: "blue",
    backgroundColor: "white",
    fontSize: "20px"
};

<h1 style={style}>
    Hello React
</h1>
`,

        example: `
function App() {

    const headingStyle = {
        color: "blue",
        fontSize: "30px"
    };

    return (
        <h1 style={headingStyle}>
            Hello React
        </h1>
    );

}

export default App;
`,

        output: `
Hello React
`
    },


    // ============================================================
    // 8. JSX COMMENTS
    // ============================================================

    {
        id: 8,
        module: "jsx",
        title: "JSX Comments",
        concept: "JSX comments are written using JavaScript comment syntax inside curly braces.",
        difficulty: "Easy",

        theory: `
JSX comments are different from normal HTML comments.

HTML comment:

<!-- Comment -->

JSX comment:

{/* Comment */}

Example:

function App() {

    return (
        <div>

            {/* This is a JSX comment */}

            <h1>Hello React</h1>

        </div>
    );

}

The comment will not be displayed in the browser.

For JavaScript code outside JSX, normal JavaScript comments
can be used:

// Comment

or:

/*
   Comment
*/
`,

        example: `
function App() {

    return (
        <div>

            {/* Display heading */}

            <h1>Hello React</h1>

        </div>
    );

}

export default App;
`,

        output: `
Hello React
`
    },


    // ============================================================
    // 9. MULTIPLE ELEMENTS
    // ============================================================

    {
        id: 9,
        module: "jsx",
        title: "Multiple Elements",
        concept: "A React component must return one JSX root element or a Fragment containing multiple elements.",
        difficulty: "Easy",

        theory: `
A component cannot return multiple JSX elements at the same
level without a parent.

Incorrect:

return (
    <h1>Hello</h1>
    <p>Welcome</p>
);

The elements must be wrapped inside a parent element.

Example:

return (
    <div>
        <h1>Hello</h1>
        <p>Welcome</p>
    </div>
);

Another option is using a Fragment:

return (
    <>
        <h1>Hello</h1>
        <p>Welcome</p>
    </>
);
`,

        example: `
function App() {

    return (
        <div>
            <h1>Hello React</h1>
            <p>Welcome to JSX</p>
        </div>
    );

}

export default App;
`,

        output: `
Hello React
Welcome to JSX
`
    },


    // ============================================================
    // 10. FRAGMENTS
    // ============================================================

    {
        id: 10,
        module: "jsx",
        title: "Fragments",
        concept: "React Fragments allow multiple JSX elements to be grouped without adding an extra DOM element.",
        difficulty: "Easy",

        theory: `
A Fragment allows a component to return multiple elements
without creating an additional HTML element.

Short syntax:

<>
    <h1>Hello</h1>
    <p>Welcome</p>
</>

Full syntax:

<React.Fragment>
    <h1>Hello</h1>
    <p>Welcome</p>
</React.Fragment>

Fragments are useful when we need a common JSX parent but
do not want an unnecessary div in the DOM.

Short syntax is commonly preferred.

Example:

function App() {

    return (
        <>
            <h1>Hello React</h1>
            <p>Learning JSX</p>
        </>
    );

}
`,

        example: `
function App() {

    return (
        <>
            <h1>Hello React</h1>
            <p>Learning JSX</p>
        </>
    );

}

export default App;
`,

        output: `
Hello React
Learning JSX
`
    },


    // ============================================================
    // 11. CONDITIONAL JSX
    // ============================================================

    {
        id: 11,
        module: "jsx",
        title: "Conditional JSX",
        concept: "Conditional JSX displays different UI based on a condition.",
        difficulty: "Easy",

        theory: `
React allows conditions to determine what should be displayed.

Common approaches include:

1. Ternary operator

condition ? trueValue : falseValue

Example:

{isLoggedIn ? <p>Welcome</p> : <p>Please Login</p>}

2. Logical AND operator

{isLoggedIn && <p>Welcome</p>}

3. Conditional variable

let message;

if (isLoggedIn) {
    message = "Welcome";
} else {
    message = "Please Login";
}

Then:

<p>{message}</p>

Conditional rendering is commonly used for:

- Login/logout UI
- Loading screens
- Error messages
- Permissions
- Empty states
`,

        example: `
function App() {

    const isLoggedIn = true;

    return (
        <div>

            {isLoggedIn
                ? <h1>Welcome User</h1>
                : <h1>Please Login</h1>
            }

        </div>
    );

}

export default App;
`,

        output: `
Welcome User
`
    },


    // ============================================================
    // 12. COMMON JSX MISTAKES
    // ============================================================

    {
        id: 12,
        module: "jsx",
        title: "Common JSX Mistakes",
        concept: "Common JSX mistakes include incorrect closing tags, using class instead of className, and returning multiple root elements.",
        difficulty: "Easy",

        theory: `
Some common JSX mistakes are:

1. Using class instead of className

Incorrect:

<div class="container">

Correct:

<div className="container">

2. Not closing elements

Incorrect:

<img src="logo.png">

Correct:

<img src="logo.png" />

3. Returning multiple root elements

Incorrect:

return (
    <h1>Hello</h1>
    <p>Welcome</p>
);

Correct:

return (
    <>
        <h1>Hello</h1>
        <p>Welcome</p>
    </>
);

4. Using JavaScript variables without curly braces

Incorrect:

<h1>name</h1>

Correct:

<h1>{name}</h1>

5. Using HTML comments

Incorrect:

<!-- Comment -->

Correct:

{/* Comment */}

6. Using CSS property names incorrectly

Incorrect:

style={{
    background-color: "red"
}}

Correct:

style={{
    backgroundColor: "red"
}}

7. Forgetting to close a component tag.

Incorrect:

<MyComponent>

Correct:

<MyComponent />
`,

        example: `
function App() {

    const name = "Saurabh";

    return (
        <>
            {/* Correct JSX */}

            <div className="container">

                <h1>
                    Hello {name}
                </h1>

                <img
                    src="/logo.png"
                    alt="Logo"
                />

            </div>
        </>
    );

}

export default App;
`,

        output: `
Hello Saurabh
`
    }

];

