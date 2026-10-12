export const reactAdvancedTopics = [

    // ============================================================
    // 1. Higher-Order Components
    // ============================================================
    {
        id: 1,
        module: "reactAdvanced",
        title: "Higher-Order Components",
        concept: "A function that takes a component and returns an enhanced component",
        difficulty: "Advanced",

        theory: `
A Higher-Order Component (HOC) is a pattern in React for reusing
component logic.

A HOC is a function that:

1. Takes a component as an argument.
2. Adds or provides some behavior.
3. Returns a new enhanced component.

Syntax:

const EnhancedComponent = withSomething(Component);

HOCs were commonly used before Hooks became available.

Common use cases:

- Authentication
- Permission checking
- Logging
- Adding shared behavior
- Data handling

A HOC should normally not modify the original component.
        `,

        example: `
import React from "react";

function withLoading(Component) {

    return function WithLoading({
        loading,
        ...props
    }) {

        if (loading) {
            return <h2>Loading...</h2>;
        }

        return <Component {...props} />;
    };
}

function User({ name }) {

    return <h2>User: {name}</h2>;
}

const UserWithLoading =
    withLoading(User);

function App() {

    return (
        <UserWithLoading
            loading={false}
            name="Saurabh"
        />
    );
}

export default App;
        `,

        output: `
User: Saurabh
        `
    },

    // ============================================================
    // 2. Render Props
    // ============================================================
    {
        id: 2,
        module: "reactAdvanced",
        title: "Render Props",
        concept: "Sharing component logic by passing a function that returns UI",
        difficulty: "Advanced",

        theory: `
Render Props is a React pattern where a component receives a
function as a prop and calls that function to decide what UI
should be rendered.

Example:

<DataProvider
    render={(data) => (
        <User data={data} />
    )}
/>

The function passed as a prop is called a render prop.

Render Props were commonly used to share logic before Hooks.

Today, custom Hooks are often simpler for sharing reusable logic.
        `,

        example: `
import React from "react";

function MouseTracker({ render }) {

    const position = {
        x: 100,
        y: 200
    };

    return render(position);
}

function App() {

    return (
        <MouseTracker
            render={(position) => (
                <h2>
                    X: {position.x},
                    Y: {position.y}
                </h2>
            )}
        />
    );
}

export default App;
        `,

        output: `
X: 100, Y: 200
        `
    },

    // ============================================================
    // 3. Compound Components
    // ============================================================
    {
        id: 3,
        module: "reactAdvanced",
        title: "Compound Components",
        concept: "Multiple components working together as one component system",
        difficulty: "Advanced",

        theory: `
Compound Components are a React pattern where multiple related
components work together to create a flexible UI.

Examples:

- Select + Option
- Tabs + Tab + TabPanel
- Accordion + AccordionItem
- Menu + MenuItem

The parent component usually manages shared state and the child
components work together with it.

This pattern provides a clean and flexible API for complex UI
components.
        `,

        example: `
function Tabs({ children }) {

    return (
        <div>
            {children}
        </div>
    );
}

function Tab({ children }) {

    return (
        <button>
            {children}
        </button>
    );
}

Tabs.Tab = Tab;

function App() {

    return (
        <Tabs>
            <Tabs.Tab>
                Home
            </Tabs.Tab>

            <Tabs.Tab>
                Profile
            </Tabs.Tab>
        </Tabs>
    );
}

export default App;
        `,

        output: `
[ Home ] [ Profile ]
        `
    },

    // ============================================================
    // 4. Controlled vs Uncontrolled
    // ============================================================
    {
        id: 4,
        module: "reactAdvanced",
        title: "Controlled vs Uncontrolled",
        concept: "Two approaches for managing form input values in React",
        difficulty: "Medium",

        theory: `
A controlled component gets its value from React state.

Example:

const [name, setName] = useState("");

<input
    value={name}
    onChange={...}
/>

An uncontrolled component keeps its current value in the DOM
and is usually accessed using a ref.

Controlled:

React state
    ↓
Input

Uncontrolled:

Input DOM
    ↓
Ref

Controlled components are commonly preferred when validation,
conditional UI, or dynamic form behavior is required.
        `,

        example: `
import {
    useRef,
    useState
} from "react";

function App() {

    const [name, setName] =
        useState("");

    const inputRef = useRef(null);

    return (
        <>
            <h3>Controlled</h3>

            <input
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />

            <h3>Uncontrolled</h3>

            <input
                ref={inputRef}
                defaultValue="Saurabh"
            />
        </>
    );
}

export default App;
        `,

        output: `
Controlled input:

React state controls the value.

Uncontrolled input:

DOM maintains the value.
        `
    },

    // ============================================================
    // 5. Portals
    // ============================================================
    {
        id: 5,
        module: "reactAdvanced",
        title: "Portals",
        concept: "Rendering React content into a different DOM node",
        difficulty: "Advanced",

        theory: `
A Portal allows React to render a component into a DOM node that
exists outside the component's normal DOM hierarchy.

Portals are useful for:

- Modals
- Dialogs
- Tooltips
- Dropdowns
- Notification containers

Syntax:

createPortal(
    children,
    domNode
);

Even though the element is rendered somewhere else in the DOM,
it still belongs to the same React tree.
        `,

        example: `
import {
    createPortal
} from "react-dom";

function Modal() {

    return createPortal(
        <div className="modal">
            <h2>Login</h2>
        </div>,
        document.getElementById("modal-root")
    );
}

export default Modal;
        `,

        output: `
HTML structure:

<body>

    <div id="root">
        Main Application
    </div>

    <div id="modal-root">
        Login
    </div>

</body>
        `
    },

    // ============================================================
    // 6. Fragments
    // ============================================================
    {
        id: 6,
        module: "reactAdvanced",
        title: "Fragments",
        concept: "Grouping multiple elements without adding an extra DOM element",
        difficulty: "Easy",

        theory: `
React Fragment allows you to return multiple elements without
creating an unnecessary wrapper element in the DOM.

Syntax:

<></>

or:

<React.Fragment>
    ...
</React.Fragment>

Fragments are useful when a component needs to return multiple
elements but you do not want to add an extra div.

The short syntax <>...</> cannot accept a key.
        `,

        example: `
function User() {

    return (
        <>
            <h2>Saurabh</h2>
            <p>Java Developer</p>
        </>
    );
}

export default User;
        `,

        output: `
Saurabh
Java Developer

No extra div is created.
        `
    },

    // ============================================================
    // 7. Refs
    // ============================================================
    {
        id: 7,
        module: "reactAdvanced",
        title: "Refs",
        concept: "Accessing DOM elements or storing mutable values without causing re-renders",
        difficulty: "Medium",

        theory: `
A ref provides a way to keep a value between renders without
causing a re-render when that value changes.

The useRef Hook returns an object:

{
    current: ...
}

Common uses:

- Accessing DOM elements
- Focusing an input
- Storing timer IDs
- Keeping previous values
- Storing mutable values

Changing ref.current does not cause the component to re-render.
        `,

        example: `
import {
    useRef
} from "react";

function App() {

    const inputRef =
        useRef(null);

    function focusInput() {

        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} />

            <button
                onClick={focusInput}
            >
                Focus
            </button>
        </>
    );
}

export default App;
        `,

        output: `
Click:

[ Focus ]

The input receives focus.
        `
    },

    // ============================================================
    // 8. Forwarding Refs
    // ============================================================
    {
        id: 8,
        module: "reactAdvanced",
        title: "Forwarding Refs",
        concept: "Passing a ref from a parent component to a child DOM element",
        difficulty: "Advanced",

        theory: `
Ref forwarding allows a parent component to give a ref to a child
component so that the parent can access a DOM element inside that
child.

In modern React, ref handling has evolved: in React 19, function
components can receive ref as a prop, so new code does not always
need forwardRef.

The traditional forwardRef pattern is still important for
understanding existing React code and libraries.

Traditional syntax:

const Input = forwardRef(
    (props, ref) => (
        <input ref={ref} />
    )
);
        `,

        example: `
import {
    useRef,
    forwardRef
} from "react";

const Input = forwardRef(
    function Input(props, ref) {

        return (
            <input
                ref={ref}
                {...props}
            />
        );
    }
);

function App() {

    const inputRef =
        useRef(null);

    function focusInput() {

        inputRef.current.focus();
    }

    return (
        <>
            <Input ref={inputRef} />

            <button
                onClick={focusInput}
            >
                Focus
            </button>
        </>
    );
}

export default App;
        `,

        output: `
Parent
  ↓
ref
  ↓
Input component
  ↓
<input>

Click Focus:

Input receives focus.
        `
    },

    // ============================================================
    // 9. Suspense
    // ============================================================
    {
        id: 9,
        module: "reactAdvanced",
        title: "Suspense",
        concept: "Displaying fallback UI while supported content is not ready",
        difficulty: "Medium",

        theory: `
Suspense allows React to display fallback UI while a child
component is waiting for supported asynchronous work.

A common example is lazy-loaded components.

Syntax:

<Suspense fallback={<Loading />}>
    <Component />
</Suspense>

The fallback is displayed while the suspended content is not ready.

Suspense can also be used with supported data-loading frameworks
and React features.
        `,

        example: `
import {
    lazy,
    Suspense
} from "react";

const Dashboard = lazy(
    () => import("./Dashboard")
);

function App() {

    return (
        <Suspense
            fallback={
                <h2>
                    Loading Dashboard...
                </h2>
            }
        >
            <Dashboard />
        </Suspense>
    );
}

export default App;
        `,

        output: `
While loading:

Loading Dashboard...

After loading:

Dashboard
        `
    },

    // ============================================================
    // 10. Lazy Loading
    // ============================================================
    {
        id: 10,
        module: "reactAdvanced",
        title: "Lazy Loading",
        concept: "Loading components only when they are needed",
        difficulty: "Medium",

        theory: `
Lazy loading means delaying the loading of a component until it
is required.

React provides:

lazy()

A lazy component is commonly created using a dynamic import.

Example:

const Profile = lazy(
    () => import("./Profile")
);

Lazy loading can reduce the JavaScript required during the
initial application load.

It is commonly combined with Suspense.
        `,

        example: `
import {
    lazy,
    Suspense
} from "react";

const Profile = lazy(
    () => import("./Profile")
);

function App() {

    return (
        <Suspense
            fallback={
                <p>
                    Loading Profile...
                </p>
            }
        >
            <Profile />
        </Suspense>
    );
}

export default App;
        `,

        output: `
Initial:

Loading Profile...

After the component loads:

Profile Page
        `
    },

    // ============================================================
    // 11. Server-Side Rendering Concept
    // ============================================================
    {
        id: 11,
        module: "reactAdvanced",
        title: "Server-Side Rendering Concept",
        concept: "Rendering React UI on the server before sending HTML to the browser",
        difficulty: "Advanced",

        theory: `
Server-Side Rendering (SSR) means generating the initial HTML
for a React application on the server.

Traditional client-side rendering:

Browser
   ↓
Download JavaScript
   ↓
Run React
   ↓
Render UI

SSR:

Browser
   ↑
HTML generated by server
   ↑
React application on server

SSR can improve:

- Initial page rendering
- Perceived loading performance
- Search engine discoverability for public content

After the HTML is delivered, React can hydrate the page so that
it becomes interactive.

Modern React applications can use frameworks such as Next.js for
server rendering and related server capabilities.

SSR is different from static site generation (SSG), where HTML can
be generated ahead of time.
        `,

        example: `
Client requests:

GET /products

Server:

1. Fetches required data.
2. Renders the React page.
3. Sends HTML to the browser.

Browser:

4. Displays the HTML.
5. Downloads JavaScript.
6. React hydrates the page.
7. Page becomes interactive.
        `,

        output: `
Browser
   ↓
Request
   ↓
Server
   ↓
React renders HTML
   ↓
HTML sent to browser
   ↓
Hydration
   ↓
Interactive React application
        `
    }

];