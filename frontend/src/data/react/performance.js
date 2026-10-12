export const performanceTopics = [

    // ============================================================
    // 1. React Rendering
    // ============================================================
    {
        id: 1,
        module: "performance",
        title: "React Rendering",
        concept: "Understanding how React renders and updates components",
        difficulty: "Easy",

        theory: `
Rendering means React calculates what the UI should look like
based on the current props and state.

A component can render when:

- It is initially mounted
- Its state changes
- Its parent renders
- Its props change
- A consumed Context value changes

React then compares the new result with the previous result and
updates the necessary DOM changes.

Basic flow:

State / Props Change
        ↓
Component Render
        ↓
React compares results
        ↓
DOM updated when necessary
        `,

        example: `
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Count: {count}</h2>

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

export default Counter;
        `,

        output: `
Initial:

Count: 0

After clicking:

Count: 1
        `
    },

    // ============================================================
    // 2. Re-render
    // ============================================================
    {
        id: 2,
        module: "performance",
        title: "Re-render",
        concept: "Rendering a component again after its inputs change",
        difficulty: "Easy",

        theory: `
A re-render happens when React needs to calculate a component's
UI again.

Common causes include:

- State update
- Parent component re-render
- Changed props
- Changed Context value

A re-render does not mean that React recreates the entire browser
DOM. React calculates the changes and commits only the required
DOM updates.

Developers should avoid unnecessary re-renders when they affect
application performance.
        `,

        example: `
import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    console.log("App rendered");

    return (
        <>
            <h2>{count}</h2>

            <button
                onClick={() =>
                    setCount(count + 1)
                }
            >
                Increment
            </button>
        </>
    );
}

export default App;
        `,

        output: `
Click button

App rendered
App rendered
App rendered
...
        `
    },

    // ============================================================
    // 3. React.memo
    // ============================================================
    {
        id: 3,
        module: "performance",
        title: "React.memo",
        concept: "Skipping unnecessary re-renders when props have not changed",
        difficulty: "Medium",

        theory: `
React.memo is a performance optimization that can prevent a
function component from re-rendering when its props are unchanged.

By default, React.memo compares props using shallow equality.

It is useful when:

- A component renders frequently
- Rendering is relatively expensive
- The component receives stable props

React.memo is an optimization, not a requirement for every
component.
        `,

        example: `
import React, { useState } from "react";

const Child = React.memo(
    function Child({ name }) {

        console.log("Child rendered");

        return <h3>Hello {name}</h3>;
    }
);

function App() {

    const [count, setCount] = useState(0);

    return (
        <>
            <button
                onClick={() =>
                    setCount(count + 1)
                }
            >
                Count: {count}
            </button>

            <Child name="Saurabh" />
        </>
    );
}

export default App;
        `,

        output: `
When count changes:

Parent re-renders

Child can skip re-render
because:

name = "Saurabh"

has not changed.
        `
    },

    // ============================================================
    // 4. useMemo
    // ============================================================
    {
        id: 4,
        module: "performance",
        title: "useMemo",
        concept: "Memoizing the result of an expensive calculation",
        difficulty: "Medium",

        theory: `
useMemo() caches the result of a calculation between renders.

The calculation runs again when one of its dependencies changes.

Syntax:

const result = useMemo(
    () => calculation,
    [dependencies]
);

useMemo should mainly be used when a calculation is expensive or
when maintaining a stable value is important.

Do not use useMemo everywhere because unnecessary memoization can
make code more complicated without improving performance.
        `,

        example: `
import {
    useMemo,
    useState
} from "react";

function ProductList({ products }) {

    const [count, setCount] =
        useState(0);

    const expensiveCalculation =
        useMemo(() => {

            return products.filter(
                product =>
                    product.price > 1000
            );

        }, [products]);

    return (
        <div>

            <button
                onClick={() =>
                    setCount(count + 1)
                }
            >
                Count: {count}
            </button>

            <p>
                Products:
                {expensiveCalculation.length}
            </p>

        </div>
    );
}

export default ProductList;
        `,

        output: `
Products above ₹1000:

5

Changing count does not
recalculate the filtered list
unless products changes.
        `
    },

    // ============================================================
    // 5. useCallback
    // ============================================================
    {
        id: 5,
        module: "performance",
        title: "useCallback",
        concept: "Memoizing a function reference between renders",
        difficulty: "Medium",

        theory: `
useCallback() returns a memoized function reference.

It can be useful when:

- Passing a callback to a memoized child
- A function is used as a dependency of another Hook
- Keeping a stable function reference is beneficial

Syntax:

const handleClick = useCallback(
    () => {
        // logic
    },
    [dependencies]
);

useCallback does not automatically make an application faster.
It is useful when function identity affects rendering or Hook
dependencies.
        `,

        example: `
import {
    useCallback,
    useState
} from "react";

const Button = React.memo(
    function Button({ onClick }) {

        console.log("Button rendered");

        return (
            <button onClick={onClick}>
                Click
            </button>
        );
    }
);

function App() {

    const [count, setCount] =
        useState(0);

    const handleClick = useCallback(() => {

        console.log("Button clicked");

    }, []);

    return (
        <>
            <button
                onClick={() =>
                    setCount(count + 1)
                }
            >
                Count: {count}
            </button>

            <Button onClick={handleClick} />
        </>
    );
}
        `,

        output: `
Parent re-renders

handleClick reference remains stable

Memoized Button can skip
unnecessary rendering.
        `
    },

    // ============================================================
    // 6. Lazy Loading
    // ============================================================
    {
        id: 6,
        module: "performance",
        title: "Lazy Loading",
        concept: "Loading a component only when it is needed",
        difficulty: "Medium",

        theory: `
Lazy loading means loading a component or module when it is
actually needed instead of loading everything during the initial
application startup.

React provides lazy() for component lazy loading.

This can reduce the amount of JavaScript required for the initial
page load.

Example:

const Dashboard = lazy(
    () => import("./Dashboard")
);
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
            fallback={<p>Loading...</p>}
        >
            <Dashboard />
        </Suspense>
    );
}

export default App;
        `,

        output: `
Initial page
    ↓
Dashboard code not loaded yet
    ↓
Dashboard required
    ↓
Dashboard module downloaded
    ↓
Dashboard displayed
        `
    },

    // ============================================================
    // 7. Code Splitting
    // ============================================================
    {
        id: 7,
        module: "performance",
        title: "Code Splitting",
        concept: "Dividing application JavaScript into smaller chunks",
        difficulty: "Medium",

        theory: `
Code splitting divides a large JavaScript bundle into smaller
chunks.

Instead of downloading the complete application at startup,
the browser can download only the code required for the current
page or feature.

Common techniques include:

- Dynamic import()
- React.lazy()
- Route-based splitting
- Feature-based splitting

Code splitting can improve initial loading performance for large
applications.
        `,

        example: `
import {
    lazy,
    Suspense
} from "react";

const Reports = lazy(
    () => import("./Reports")
);

function App() {

    return (
        <Suspense
            fallback={<p>Loading reports...</p>}
        >
            <Reports />
        </Suspense>
    );
}
        `,

        output: `
Before:

One large JavaScript bundle

After:

main.js
reports.js
dashboard.js
users.js
        `
    },

    // ============================================================
    // 8. Suspense
    // ============================================================
    {
        id: 8,
        module: "performance",
        title: "Suspense",
        concept: "Displaying fallback UI while React waits for supported content",
        difficulty: "Medium",

        theory: `
Suspense allows React to display a fallback UI while a child
component is not yet ready.

A common use is with React.lazy().

Example:

<Suspense fallback={<Loading />}>
    <Dashboard />
</Suspense>

While Dashboard is loading:

Loading...

After Dashboard is ready:

Dashboard UI

Suspense can also be used with other React features and supported
data-loading frameworks.
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
                <h2>Loading profile...</h2>
            }
        >
            <Profile />
        </Suspense>
    );
}

export default App;
        `,

        output: `
While loading:

Loading profile...

After loading:

Profile page
        `
    },

    // ============================================================
    // 9. Dynamic Imports
    // ============================================================
    {
        id: 9,
        module: "performance",
        title: "Dynamic Imports",
        concept: "Loading JavaScript modules dynamically when required",
        difficulty: "Medium",

        theory: `
A dynamic import uses import() to load a JavaScript module
asynchronously.

Syntax:

import("./module")

It returns a Promise.

Dynamic imports are commonly used for:

- Code splitting
- Lazy loading
- Large libraries
- Features that are not immediately required

React.lazy() uses dynamic import() for lazy-loaded components.
        `,

        example: `
async function loadReport() {

    const module =
        await import("./report");

    module.generateReport();
}

loadReport();
        `,

        output: `
Application starts

    ↓

Report module not loaded

    ↓

loadReport()

    ↓

report.js downloaded

    ↓

generateReport()
        `
    },

    // ============================================================
    // 10. Performance Optimization
    // ============================================================
    {
        id: 10,
        module: "performance",
        title: "Performance Optimization",
        concept: "Improving React application speed and rendering efficiency",
        difficulty: "Advanced",

        theory: `
React performance optimization means improving application
responsiveness while avoiding unnecessary work.

Common techniques include:

1. Keep component state close to where it is needed.
2. Avoid unnecessary state updates.
3. Use React.memo when it provides a measurable benefit.
4. Use useMemo for expensive calculations when appropriate.
5. Use useCallback when stable function identity matters.
6. Use lazy loading and code splitting for large applications.
7. Virtualize very large lists.
8. Optimize images and other assets.
9. Avoid unnecessary Context updates.
10. Measure performance before and after optimization.

Important:

Do not optimize every component automatically.

First identify the actual bottleneck using profiling and then
apply the appropriate optimization.
        `,

        example: `
import {
    memo,
    useMemo,
    useCallback
} from "react";

const ProductItem = memo(
    function ProductItem({
        product,
        onSelect
    }) {

        return (
            <div
                onClick={() =>
                    onSelect(product.id)
                }
            >
                {product.name}
            </div>
        );
    }
);

function ProductList({ products }) {

    const sortedProducts =
        useMemo(() => {

            return [...products].sort(
                (a, b) =>
                    a.name.localeCompare(
                        b.name
                    )
            );

        }, [products]);

    const handleSelect =
        useCallback((id) => {

            console.log(
                "Selected:",
                id
            );

        }, []);

    return (
        <div>

            {sortedProducts.map(
                product => (

                    <ProductItem
                        key={product.id}
                        product={product}
                        onSelect={handleSelect}
                    />

                )
            )}

        </div>
    );
}

export default ProductList;
        `,

        output: `
Performance optimization:

Measure
   ↓
Find bottleneck
   ↓
Choose optimization
   ↓
Test again

Possible result:

Fewer unnecessary renders
+
Smaller initial bundle
+
Faster UI
        `
    }

];