export const reactCssTopics = [

    // ============================================================
    // 1. CSS Files
    // ============================================================
    {
        id: 1,
        module: "reactCss",
        title: "CSS Files",
        concept: "Using separate CSS files to style React components",
        difficulty: "Easy",

        theory: `
CSS files are commonly used to keep styling separate from React
component code.

You can create a CSS file and import it into a React component.

Example structure:

src/
├── components/
│   ├── Button.jsx
│   └── Button.css

The CSS file can contain normal CSS selectors.

This approach is simple and useful for small and medium-sized
React applications.
        `,

        example: `
/* Button.css */

.button {
    background: blue;
    color: white;
    padding: 10px 20px;
}

/* Button.jsx */

import "./Button.css";

function Button() {

    return (
        <button className="button">
            Click Me
        </button>
    );
}

export default Button;
        `,

        output: `
[ Click Me ]

The button is styled using Button.css.
        `
    },

    // ============================================================
    // 2. Inline CSS
    // ============================================================
    {
        id: 2,
        module: "reactCss",
        title: "Inline CSS",
        concept: "Applying CSS styles directly using the style prop",
        difficulty: "Easy",

        theory: `
Inline CSS means defining styles directly inside a React element
using the style prop.

React expects a JavaScript object for inline styles.

CSS:

background-color

React:

backgroundColor

Inline styles are useful for small dynamic styles, but large
stylesheets are usually better kept in CSS files or CSS Modules.

Pseudo-classes such as :hover cannot be written directly using
the normal inline style object.
        `,

        example: `
function App() {

    const buttonStyle = {
        backgroundColor: "blue",
        color: "white",
        padding: "10px 20px",
        border: "none"
    };

    return (
        <button style={buttonStyle}>
            Click Me
        </button>
    );
}

export default App;
        `,

        output: `
[ Click Me ]

Blue background
White text
        `
    },

    // ============================================================
    // 3. CSS Modules
    // ============================================================
    {
        id: 3,
        module: "reactCss",
        title: "CSS Modules",
        concept: "Creating locally scoped CSS class names for React components",
        difficulty: "Medium",

        theory: `
CSS Modules allow CSS classes to be locally scoped to a component.

Instead of using:

button

you can use:

Button.module.css

The class names are transformed so that they do not easily conflict
with classes from other components.

Example:

Button.module.css
    ↓
Button.jsx
    ↓
styles.button

CSS Modules are useful for component-based styling.
        `,

        example: `
/* Button.module.css */

.button {
    background: green;
    color: white;
    padding: 10px;
}

/* Button.jsx */

import styles from "./Button.module.css";

function Button() {

    return (
        <button className={styles.button}>
            Save
        </button>
    );
}

export default Button;
        `,

        output: `
[ Save ]

The button uses the locally scoped
CSS Module class.
        `
    },

    // ============================================================
    // 4. Conditional Classes
    // ============================================================
    {
        id: 4,
        module: "reactCss",
        title: "Conditional Classes",
        concept: "Applying different CSS classes based on component state or conditions",
        difficulty: "Medium",

        theory: `
Conditional classes allow React to choose a CSS class based on
a condition.

This is useful for:

- Active / inactive states
- Success / error messages
- Dark / light mode
- Selected items
- Disabled elements

JavaScript expressions can be used inside className.

Example:

className={isActive ? "active" : "inactive"}
        `,

        example: `
import {
    useState
} from "react";

import "./App.css";

function App() {

    const [isActive, setIsActive] =
        useState(false);

    return (
        <button
            className={
                isActive
                    ? "active"
                    : "inactive"
            }
            onClick={() =>
                setIsActive(!isActive)
            }
        >
            {isActive
                ? "Active"
                : "Inactive"}
        </button>
    );
}

export default App;
        `,

        output: `
Initial:

[ Inactive ]

After clicking:

[ Active ]
        `
    },

    // ============================================================
    // 5. Dynamic Styles
    // ============================================================
    {
        id: 5,
        module: "reactCss",
        title: "Dynamic Styles",
        concept: "Changing styles dynamically based on props, state, or data",
        difficulty: "Medium",

        theory: `
Dynamic styling means changing the appearance of an element
according to application data.

For example:

- Change color based on status
- Change width based on progress
- Change background based on theme
- Change size based on user selection

React can calculate a style object during rendering.

Dynamic styles can also be implemented using conditional
className values.
        `,

        example: `
import {
    useState
} from "react";

function Progress() {

    const [progress, setProgress] =
        useState(70);

    const style = {
        width: progress + "%",
        backgroundColor:
            progress >= 50
                ? "green"
                : "red"
    };

    return (
        <div>

            <div
                style={{
                    width: "300px",
                    border: "1px solid black"
                }}
            >
                <div style={style}>
                    {progress}%
                </div>
            </div>

        </div>
    );
}

export default Progress;
        `,

        output: `
Progress:

[██████████████------] 70%

Width and color are calculated
dynamically.
        `
    },

    // ============================================================
    // 6. Tailwind CSS
    // ============================================================
    {
        id: 6,
        module: "reactCss",
        title: "Tailwind CSS",
        concept: "Using utility classes to style React components",
        difficulty: "Medium",

        theory: `
Tailwind CSS is a utility-first CSS framework.

Instead of creating a separate CSS class such as:

.card {
    padding: 20px;
    background: white;
}

you use utility classes directly in JSX.

Example:

className="p-5 bg-white shadow"

Common Tailwind utilities include:

p-4       → padding
m-4       → margin
text-xl    → font size
font-bold  → bold text
bg-blue-500 → background color
flex       → display flex
grid       → display grid

Tailwind is useful for rapidly building consistent user interfaces.
        `,

        example: `
function Card() {

    return (
        <div className="p-5 bg-white shadow-md">

            <h2 className="text-xl font-bold">
                Employee
            </h2>

            <p className="text-gray-600">
                Saurabh Patil
            </p>

            <button
                className="px-4 py-2 bg-blue-500 text-white"
            >
                View
            </button>

        </div>
    );
}

export default Card;
        `,

        output: `
Employee

Saurabh Patil

[ View ]
        `
    },

    // ============================================================
    // 7. Responsive UI
    // ============================================================
    {
        id: 7,
        module: "reactCss",
        title: "Responsive UI",
        concept: "Creating React interfaces that work well on different screen sizes",
        difficulty: "Medium",

        theory: `
Responsive UI means designing an application so that it works
properly on:

- Mobile phones
- Tablets
- Laptops
- Desktop screens

CSS media queries are commonly used for responsive design.

Example:

@media (max-width: 768px) {
    .container {
        width: 100%;
    }
}

With Tailwind CSS, responsive prefixes such as:

sm:
md:
lg:
xl:

can be used to apply styles at different breakpoints.

A good responsive UI should consider:

- Flexible layouts
- Responsive images
- Readable text
- Touch-friendly controls
- Mobile navigation
- Appropriate spacing
        `,

        example: `
/* App.css */

.container {
    display: flex;
    gap: 20px;
}

@media (max-width: 768px) {

    .container {
        flex-direction: column;
    }
}

/* App.jsx */

function App() {

    return (
        <div className="container">

            <div>
                Employee Details
            </div>

            <div>
                Employee Salary
            </div>

        </div>
    );
}

export default App;
        `,

        output: `
Desktop:

Employee Details | Employee Salary


Mobile:

Employee Details

Employee Salary
        `
    }

];