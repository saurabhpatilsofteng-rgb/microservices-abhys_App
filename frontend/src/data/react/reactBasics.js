
export const reactBasicsTopics = [

    // ============================================================
    // 1. WHAT IS REACT?
    // ============================================================

    {
        id: 1,
        module: "react-basics",
        title: "What is React?",
        concept: "React is a JavaScript library used to build user interfaces using reusable components.",
        difficulty: "Easy",

        theory: `
React is a JavaScript library for building user interfaces.

It was originally developed by Facebook and is now maintained
by Meta and the open-source community.

React is mainly used for:

- Building user interfaces
- Creating reusable components
- Developing single-page applications
- Managing UI state
- Building interactive web applications

React applications are built using components.

A component is a reusable piece of UI.

For example:

Header
Navbar
LoginForm
Button
Dashboard

Each component can have its own logic and UI.
`,

        example: `
import React from "react";

function Welcome() {

    return (
        <h1>
            Hello React
        </h1>
    );

}

export default Welcome;
`,

        output: `
Hello React
`
    },


    // ============================================================
    // 2. WHY REACT?
    // ============================================================

    {
        id: 2,
        module: "react-basics",
        title: "Why React?",
        concept: "React makes it easier to build interactive and maintainable user interfaces using reusable components.",
        difficulty: "Easy",

        theory: `
React is popular because it provides a component-based approach
for building user interfaces.

Instead of creating one large application, we divide the UI
into smaller reusable components.

For example:

Application
    |
    ├── Navbar
    ├── Sidebar
    ├── Dashboard
    └── Footer

Each component can be developed and maintained separately.

React is useful for applications where the UI changes frequently
based on user actions or application data.

Examples:

- Admin dashboards
- E-commerce applications
- Banking applications
- HRMS applications
- Social media applications
- Learning platforms
`,

        example: `
function App() {

    return (
        <div>

            <Header />

            <Dashboard />

            <Footer />

        </div>
    );

}
`,

        output: `
Reusable components are combined to create the application UI.
`
    },


    // ============================================================
    // 3. FEATURES OF REACT
    // ============================================================

    {
        id: 3,
        module: "react-basics",
        title: "Features of React",
        concept: "React provides component-based architecture, JSX, state management, props, and efficient UI updates.",
        difficulty: "Easy",

        theory: `
Important features of React include:

1. Component-Based Architecture

Applications are divided into reusable components.

2. JSX

JSX allows us to write HTML-like syntax inside JavaScript.

3. Virtual DOM

React uses a virtual representation of the DOM to efficiently
update the user interface.

4. Props

Props are used to pass data from one component to another.

5. State

State stores data that can change during the lifetime of a component.

6. One-Way Data Flow

Data normally flows from parent components to child components.

7. Reusability

Components can be reused in different parts of an application.

8. Declarative UI

Developers describe what the UI should look like based on data.
`,

        example: `
function User({ name }) {

    return (
        <h2>
            Welcome {name}
        </h2>
    );

}

function App() {

    return (
        <User name="Saurabh" />
    );

}
`,

        output: `
Welcome Saurabh
`
    },


    // ============================================================
    // 4. ADVANTAGES OF REACT
    // ============================================================

    {
        id: 4,
        module: "react-basics",
        title: "Advantages of React",
        concept: "React provides reusable components, efficient UI updates, maintainability, and a large ecosystem.",
        difficulty: "Easy",

        theory: `
React provides several advantages.

1. Reusable Components

Components can be reused throughout an application.

2. Easy Maintenance

Breaking an application into components makes the code easier
to understand and maintain.

3. Efficient UI Updates

React efficiently updates the UI when application data changes.

4. Large Ecosystem

React has a large ecosystem of libraries and tools.

Examples:

- React Router
- Redux
- Redux Toolkit
- React Query
- Axios

5. Large Community

React has a large developer community and many learning resources.

6. Flexible

React can be combined with different libraries depending
on application requirements.

7. Good for Large Applications

Component-based architecture helps organize large applications.
`,

        example: `
function Button() {

    return (
        <button>
            Save
        </button>
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
`,

        output: `
Save
Save
Save
`
    },


    // ============================================================
    // 5. DISADVANTAGES OF REACT
    // ============================================================

    {
        id: 5,
        module: "react-basics",
        title: "Disadvantages of React",
        concept: "React is flexible but requires developers to choose additional libraries and understand its ecosystem.",
        difficulty: "Easy",

        theory: `
React also has some disadvantages.

1. React is a library

React mainly focuses on the UI layer.

Developers may need additional libraries for:

- Routing
- Global state management
- API communication
- Form management

2. Large Ecosystem

There are many libraries and approaches available.

This can sometimes make it difficult for beginners to decide
which solution to use.

3. Frequent Changes

The React ecosystem evolves quickly.

Developers need to keep up with new patterns and APIs.

4. JSX Learning Curve

Beginners may initially find JSX confusing because JavaScript
and HTML-like syntax are written together.

5. Project Setup

Modern React applications usually involve additional tools
such as:

- Node.js
- npm
- Vite
- Build tools
`,

        example: `
React itself does not provide every application feature.

For example:

React
    +
React Router
    +
Redux Toolkit
    +
Axios

can be used together to build a complete application.
`,

        output: `
React can be extended using additional libraries and tools.
`
    },


    // ============================================================
    // 6. REACT VS JAVASCRIPT
    // ============================================================

    {
        id: 6,
        module: "react-basics",
        title: "React vs JavaScript",
        concept: "JavaScript is a programming language, while React is a JavaScript library used mainly for building user interfaces.",
        difficulty: "Medium",

        theory: `
JavaScript and React are not competitors.

JavaScript is a programming language.

React is a JavaScript library.

JavaScript can be used for:

- Variables
- Functions
- Objects
- Arrays
- DOM manipulation
- Events
- API calls
- Application logic

React is mainly used for:

- UI components
- Component rendering
- UI state
- Declarative UI development

Example JavaScript DOM manipulation:

document.getElementById("title")
    .textContent = "Hello";

React instead describes the UI using components.

React uses JavaScript internally.
`,

        example: `
function App() {

    const name = "Saurabh";

    return (
        <h1>
            Hello {name}
        </h1>
    );

}
`,

        output: `
Hello Saurabh
`
    },


    // ============================================================
    // 7. REACT VS ANGULAR
    // ============================================================

    {
        id: 7,
        module: "react-basics",
        title: "React vs Angular",
        concept: "React is primarily a UI library, while Angular is a full-featured framework for building web applications.",
        difficulty: "Medium",

        theory: `
React and Angular are both used to build web applications.

React:

- JavaScript library
- Component-based
- Flexible architecture
- JSX commonly used
- Additional libraries can be selected

Angular:

- Full framework
- TypeScript-based
- Provides many features out of the box
- Dependency injection
- Routing
- Forms
- HTTP client
- Strong project structure

Basic comparison:

React
    -> Library
    -> JavaScript / JSX
    -> Flexible

Angular
    -> Framework
    -> TypeScript
    -> More built-in features

The choice depends on project requirements and team preferences.
`,

        example: `
React component:

function App() {

    return <h1>Hello React</h1>;

}

Angular component:

@Component({
    selector: "app-root",
    template: "<h1>Hello Angular</h1>"
})
`,

        output: `
Both can be used to build modern web applications.
`
    },


    // ============================================================
    // 8. REACT VS VUE
    // ============================================================

    {
        id: 8,
        module: "react-basics",
        title: "React vs Vue",
        concept: "React and Vue are popular technologies for building component-based user interfaces, with different ecosystems and design approaches.",
        difficulty: "Medium",

        theory: `
React and Vue are both used for building user interfaces.

React:

- JavaScript library
- JSX commonly used
- Large ecosystem
- Flexible architecture
- Strong adoption in many large applications

Vue:

- Progressive JavaScript framework
- HTML-based templates are commonly used
- Provides a more integrated development experience
- Designed to be approachable and incrementally adoptable

Comparison:

React
    -> Library
    -> JSX
    -> Highly flexible

Vue
    -> Progressive framework
    -> Templates
    -> Integrated conventions

Both support:

- Components
- Reactive UI
- State management
- Routing
- Reusable UI
`,

        example: `
React:

function App() {

    return <h1>Hello React</h1>;

}

Vue:

<template>

    <h1>Hello Vue</h1>

</template>
`,

        output: `
Both can create component-based user interfaces.
`
    },


    // ============================================================
    // 9. SINGLE PAGE APPLICATION
    // ============================================================

    {
        id: 9,
        module: "react-basics",
        title: "Single Page Application",
        concept: "A Single Page Application loads a main web page and updates the UI dynamically without requiring a full browser page reload for every route.",
        difficulty: "Medium",

        theory: `
A Single Page Application is commonly called an SPA.

In an SPA, the browser initially loads the application.

After that, JavaScript updates the UI dynamically when the
user interacts with the application.

For example:

Login
    ↓
Dashboard
    ↓
Employees
    ↓
Employee Details

The application can change the displayed content without
performing a complete browser page reload for every navigation.

React is commonly used to build SPAs.

React Router can be used to handle client-side routing.
`,

        example: `
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

            </Routes>

        </BrowserRouter>

    );

}
`,

        output: `
The application can navigate between routes while maintaining
the SPA experience.
`
    },


    // ============================================================
    // 10. LIBRARY VS FRAMEWORK
    // ============================================================

    {
        id: 10,
        module: "react-basics",
        title: "Library vs Framework",
        concept: "A library provides functionality that the developer calls, while a framework provides a broader application structure and controls the application flow.",
        difficulty: "Medium",

        theory: `
A library is a collection of reusable functionality.

The developer decides when and where to use the library.

React is commonly described as a JavaScript library focused
primarily on the UI layer.

A framework usually provides a larger application structure
and controls more of the application lifecycle.

Example:

React:

Developer chooses:

- React Router
- Redux Toolkit
- Axios
- Other libraries

Frameworks commonly provide more built-in conventions.

Simple way to remember:

Library:

"You call the library."

Framework:

"The framework calls your code."

React gives developers flexibility in how they structure
many parts of the application.
`,

        example: `
React:

function App() {

    return (
        <h1>
            Hello React
        </h1>
    );

}
`,

        output: `
React focuses primarily on building the user interface.
`
    },


    // ============================================================
    // 11. VIRTUAL DOM
    // ============================================================

    {
        id: 11,
        module: "react-basics",
        title: "Virtual DOM",
        concept: "The Virtual DOM is an in-memory representation of the UI that React uses to determine necessary DOM updates.",
        difficulty: "Medium",

        theory: `
The DOM represents the structure of a web page.

Directly changing the DOM can involve browser work such as
recalculating layout and updating the page.

React uses a virtual representation of the UI.

When state or props change:

1. React creates a new UI representation.

2. React compares it with the previous representation.

3. React determines what needs to change.

4. React applies the necessary updates to the real DOM.

This comparison process is commonly called reconciliation.

Example:

Initial UI:

<h1>
    Hello
</h1>

After state changes:

<h1>
    Hello Saurabh
</h1>

React can determine that the text content changed and update
the relevant DOM node.

Important:

The Virtual DOM does not mean that React never uses the real DOM.

React ultimately updates the actual DOM when necessary.
`,

        example: `
import { useState } from "react";

function Counter() {

    const [count, setCount] =
        useState(0);

    return (

        <div>

            <h1>
                {count}
            </h1>

            <button
                onClick={() =>
                    setCount(count + 1)
                }
            >
                Increment
            </button>

        </div>

    );

}
`,

        output: `
0

After clicking the button:

1
2
3
...
`
    },


    // ============================================================
    // 12. REACT BASICS INTERVIEW QUESTIONS
    // ============================================================

    {
        id: 12,
        module: "react-basics",
        title: "React Basics Interview Questions",
        concept: "Important React beginner interview questions cover React, components, JSX, SPA, Virtual DOM, libraries, and frameworks.",
        difficulty: "Medium",

        theory: `
Important interview questions:

1. What is React?

React is a JavaScript library for building user interfaces.

2. Who developed React?

React was originally developed by Facebook.

3. Is React a library or framework?

React is generally described as a JavaScript library.

4. What is a component?

A component is a reusable piece of UI.

5. What is JSX?

JSX is a syntax extension that allows HTML-like syntax
to be written inside JavaScript.

6. What is Virtual DOM?

It is an in-memory representation of the UI that React uses
to determine necessary DOM updates.

7. What is an SPA?

SPA stands for Single Page Application.

8. What are props?

Props are inputs passed from a parent component to a child component.

9. What is state?

State is data managed by a component that can change over time.

10. What is the difference between React and Angular?

React is primarily a UI library, while Angular is a
full-featured framework.

11. What is the difference between React and JavaScript?

JavaScript is a programming language, while React is a
library built using JavaScript.

12. Why is React popular?

Because of reusable components, declarative UI,
a large ecosystem, and strong community support.
`,

        example: `
function App() {

    return (
        <h1>
            React Basics
        </h1>
    );

}
`,

        output: `
React Basics
`
    }

];

