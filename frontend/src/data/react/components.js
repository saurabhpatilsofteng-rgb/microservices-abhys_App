
export const componentsTopics = [

    // ============================================================
    // 1. WHAT IS A COMPONENT?
    // ============================================================

    {
        id: 1,
        module: "components",
        title: "What is a Component?",
        concept: "A component is a reusable piece of UI that contains its own structure and logic.",
        difficulty: "Easy",

        theory: `
A component is a building block of a React application.

A React application is usually divided into multiple small
components.

Examples:

- Header
- Navbar
- Sidebar
- Button
- LoginForm
- UserProfile
- Footer

Each component can contain:

- JSX
- JavaScript logic
- Event handlers
- State
- Props

Example:

function Welcome() {
    return <h1>Hello React</h1>;
}

The Welcome function is a React component.
`,

        example: `
function Welcome() {

    return (
        <h1>Hello React</h1>
    );

}

function App() {

    return (
        <Welcome />
    );

}

export default App;
`,

        output: `
Hello React
`
    },


    // ============================================================
    // 2. WHY COMPONENTS?
    // ============================================================

    {
        id: 2,
        module: "components",
        title: "Why Components?",
        concept: "Components help divide a large UI into small, manageable, reusable, and maintainable parts.",
        difficulty: "Easy",

        theory: `
Components are used to make React applications easier to
develop and maintain.

Without components, a large application can become difficult
to manage.

Benefits of components:

1. Reusability
2. Maintainability
3. Code organization
4. Separation of concerns
5. Easier testing
6. Easier debugging

For example, instead of creating the same button multiple
times, we can create one Button component and reuse it.
`,

        example: `
function Button() {

    return (
        <button>Click Me</button>
    );

}

function App() {

    return (
        <div>
            <Button />
            <Button />
            <Button />
        </div>
    );

}

export default App;
`,

        output: `
Click Me
Click Me
Click Me
`
    },


    // ============================================================
    // 3. FUNCTIONAL COMPONENTS
    // ============================================================

    {
        id: 3,
        module: "components",
        title: "Functional Components",
        concept: "A functional component is a JavaScript function that returns JSX.",
        difficulty: "Easy",

        theory: `
A functional component is a normal JavaScript function that
returns JSX.

Example:

function Welcome() {
    return <h1>Hello React</h1>;
}

The component is rendered using:

<Welcome />

Component functions are normally written using PascalCase.

Functional components are the standard approach for creating
React components in modern React.

They can use React features such as:

- useState
- useEffect
- useContext
- useRef
- Other Hooks
`,

        example: `
function Welcome() {

    return (
        <h1>Welcome to React</h1>
    );

}

function App() {

    return (
        <Welcome />
    );

}

export default App;
`,

        output: `
Welcome to React
`
    },


    // ============================================================
    // 4. COMPONENT NAMING
    // ============================================================

    {
        id: 4,
        module: "components",
        title: "Component Naming",
        concept: "React component names should normally start with an uppercase letter and use PascalCase.",
        difficulty: "Easy",

        theory: `
React components should normally use PascalCase naming.

Correct:

function UserProfile() {
    return <h1>User Profile</h1>;
}

Incorrect:

function userprofile() {
    return <h1>User Profile</h1>;
}

PascalCase means each word starts with an uppercase letter.

Examples:

UserProfile
LoginForm
Navbar
ProductCard
EmployeeDetails

React uses capitalization to distinguish user-defined
components from normal HTML elements.

Example:

<UserProfile />

is treated as a React component.

Whereas:

<div />

is treated as a DOM element.
`,

        example: `
function UserProfile() {

    return (
        <h1>User Profile</h1>
    );

}

function App() {

    return (
        <UserProfile />
    );

}

export default App;
`,

        output: `
User Profile
`
    },


    // ============================================================
    // 5. COMPONENT STRUCTURE
    // ============================================================

    {
        id: 5,
        module: "components",
        title: "Component Structure",
        concept: "A React component usually contains a function, JavaScript logic, JSX, and an export.",
        difficulty: "Easy",

        theory: `
A basic functional component can be structured like this:

function ComponentName() {

    // JavaScript logic

    return (
        // JSX
    );

}

export default ComponentName;

A component can contain:

1. Component function
2. Variables
3. Functions
4. Event handlers
5. JSX
6. Hooks
7. Export

Example:

function Greeting() {

    const name = "Saurabh";

    return (
        <h1>Hello {name}</h1>
    );

}

export default Greeting;
`,

        example: `
function Greeting() {

    const name = "Saurabh";

    function sayHello() {
        console.log("Hello");
    }

    return (
        <div>
            <h1>Hello {name}</h1>

            <button onClick={sayHello}>
                Click
            </button>
        </div>
    );

}

export default Greeting;
`,

        output: `
Hello Saurabh
Click
`
    },


    // ============================================================
    // 6. REUSABLE COMPONENTS
    // ============================================================

    {
        id: 6,
        module: "components",
        title: "Reusable Components",
        concept: "A reusable component is designed so that it can be used multiple times in different places.",
        difficulty: "Easy",

        theory: `
One of the main advantages of React components is
reusability.

Instead of writing the same UI code multiple times, we create
one component and reuse it.

Example:

function Button() {
    return <button>Click</button>;
}

We can use it multiple times:

<Button />
<Button />
<Button />

Reusable components become even more useful when combined
with props.

Example:

<Button text="Login" />
<Button text="Register" />

The same component can display different data.
`,

        example: `
function Button({ text }) {

    return (
        <button>
            {text}
        </button>
    );

}

function App() {

    return (
        <div>
            <Button text="Login" />
            <Button text="Register" />
            <Button text="Submit" />
        </div>
    );

}

export default App;
`,

        output: `
Login
Register
Submit
`
    },


    // ============================================================
    // 7. NESTED COMPONENTS
    // ============================================================

    {
        id: 7,
        module: "components",
        title: "Nested Components",
        concept: "Nested components are components rendered inside another component.",
        difficulty: "Easy",

        theory: `
A component can render another component.

Example:

function Header() {
    return <h1>Header</h1>;
}

function App() {

    return (
        <div>
            <Header />
        </div>
    );

}

Here:

App

is the parent component.

Header

is rendered inside App.

Components can be nested multiple levels deep.

Example:

App
 └── Dashboard
      └── Sidebar
           └── Menu
`,

        example: `
function Header() {

    return (
        <h1>Header</h1>
    );

}

function Content() {

    return (
        <p>Main Content</p>
    );

}

function App() {

    return (
        <div>
            <Header />
            <Content />
        </div>
    );

}

export default App;
`,

        output: `
Header
Main Content
`
    },


    // ============================================================
    // 8. PARENT COMPONENT
    // ============================================================

    {
        id: 8,
        module: "components",
        title: "Parent Component",
        concept: "A parent component is a component that renders or contains another component.",
        difficulty: "Easy",

        theory: `
A component that renders another component is called the
parent component.

Example:

function Child() {
    return <p>Child Component</p>;
}

function Parent() {

    return (
        <div>
            <Child />
        </div>
    );

}

Here:

Parent = Parent component

Child = Child component

The parent component can pass data to the child component
using props.
`,

        example: `
function Child() {

    return (
        <p>I am Child</p>
    );

}

function Parent() {

    return (
        <div>
            <h1>I am Parent</h1>
            <Child />
        </div>
    );

}

export default Parent;
`,

        output: `
I am Parent
I am Child
`
    },


    // ============================================================
    // 9. CHILD COMPONENT
    // ============================================================

    {
        id: 9,
        module: "components",
        title: "Child Component",
        concept: "A child component is a component that is rendered by another component.",
        difficulty: "Easy",

        theory: `
A child component is rendered inside a parent component.

Example:

function Child() {
    return <p>Child</p>;
}

function Parent() {
    return <Child />;
}

Here:

Parent = Parent component

Child = Child component

The parent can send data to the child using props.

Example:

<Child name="Saurabh" />

The child receives it:

function Child({ name }) {
    return <h1>Hello {name}</h1>;
}
`,

        example: `
function Child({ name }) {

    return (
        <h1>Hello {name}</h1>
    );

}

function Parent() {

    return (
        <Child name="Saurabh" />
    );

}

export default Parent;
`,

        output: `
Hello Saurabh
`
    },


    // ============================================================
    // 10. COMPONENT COMPOSITION
    // ============================================================

    {
        id: 10,
        module: "components",
        title: "Component Composition",
        concept: "Component composition means building complex UIs by combining smaller components together.",
        difficulty: "Easy",

        theory: `
Component composition is the practice of creating a larger
component by combining smaller components.

For example:

App
 ├── Header
 ├── Sidebar
 ├── Content
 └── Footer

Each part can be an independent component.

Example:

function Header() {
    return <header>Header</header>;
}

function Footer() {
    return <footer>Footer</footer>;
}

function App() {

    return (
        <>
            <Header />
            <main>Content</main>
            <Footer />
        </>
    );

}

Composition makes applications easier to organize and reuse.
`,

        example: `
function Header() {

    return (
        <header>
            Header
        </header>
    );

}

function Sidebar() {

    return (
        <aside>
            Sidebar
        </aside>
    );

}

function Content() {

    return (
        <main>
            Content
        </main>
    );

}

function Footer() {

    return (
        <footer>
            Footer
        </footer>
    );

}

function App() {

    return (
        <>
            <Header />
            <Sidebar />
            <Content />
            <Footer />
        </>
    );

}

export default App;
`,

        output: `
Header
Sidebar
Content
Footer
`
    },


    // ============================================================
    // 11. PRESENTATIONAL COMPONENTS
    // ============================================================

    {
        id: 11,
        module: "components",
        title: "Presentational Components",
        concept: "Presentational components mainly focus on how the UI looks and usually receive data through props.",
        difficulty: "Medium",

        theory: `
Presentational components are mainly responsible for displaying
UI.

They generally focus on:

- JSX
- Layout
- Styling
- Displaying data
- User interface

They usually do not contain complex application logic.

Example:

function UserCard({ name, email }) {

    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );

}

The component receives data through props and displays it.

Presentational components are useful for creating reusable
UI elements.
`,

        example: `
function UserCard({ name, email }) {

    return (
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );

}

function App() {

    return (
        <UserCard
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
    // 12. CONTAINER COMPONENTS
    // ============================================================

    {
        id: 12,
        module: "components",
        title: "Container Components",
        concept: "Container components traditionally focus on application logic, data fetching, and passing data to presentational components.",
        difficulty: "Medium",

        theory: `
Container components traditionally handle application logic
rather than mainly controlling the visual presentation.

They may handle:

- Data fetching
- State
- Business logic
- Event handling
- Passing data to child components

Example:

UserContainer

fetches or manages user data.

UserCard

displays the user data.

Example structure:

UserContainer
    |
    └── UserCard

Container:

function UserContainer() {

    const user = {
        name: "Saurabh",
        age: 28
    };

    return (
        <UserCard user={user} />
    );

}

Presentational component:

function UserCard({ user }) {

    return (
        <h1>{user.name}</h1>
    );

}

Note:

The container/presentational pattern is a design approach,
not a strict React requirement. Modern React often handles
logic and presentation using hooks and smaller components
without explicitly separating them into container classes.
`,

        example: `
function UserCard({ user }) {

    return (
        <div>
            <h2>{user.name}</h2>
            <p>Age: {user.age}</p>
        </div>
    );

}

function UserContainer() {

    const user = {
        name: "Saurabh",
        age: 28
    };

    return (
        <UserCard user={user} />
    );

}

function App() {

    return (
        <UserContainer />
    );

}

export default App;
`,

        output: `
Saurabh
Age: 28
`
    }

];

