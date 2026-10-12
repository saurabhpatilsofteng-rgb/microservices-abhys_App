export const interviewQuestionsTopics = [

    // ============================================================
    // 1. React Basic Questions
    // ============================================================

    {
        id: 1,
        module: "interviewPreparation",
        title: "React Basic Questions",
        concept: "Basic React interview questions test your understanding of React, components, rendering, virtual DOM, and React application structure.",
        difficulty: "Easy",

        theory: `
Common React basic interview questions:

1. What is React?
React is a JavaScript library used to build user interfaces.

2. Why is React used?
React helps build reusable and interactive UI components.

3. What is a component?
A component is a reusable piece of UI.

4. What is Virtual DOM?
Virtual DOM is an in-memory representation of the UI that React uses to efficiently update the real DOM.

5. What is JSX?
JSX allows us to write HTML-like syntax inside JavaScript.

6. What is props?
Props are data passed from a parent component to a child component.

7. What is state?
State is data managed inside a component that can change over time.

8. What are Hooks?
Hooks are functions that allow functional components to use React features such as state and effects.
        `,

        example: `
function Welcome() {

    return (
        <h1>
            Welcome to React
        </h1>
    );
}

export default Welcome;
        `,

        output: `
Welcome to React
        `
    },


    // ============================================================
    // 2. JSX Questions
    // ============================================================

    {
        id: 2,
        module: "interviewPreparation",
        title: "JSX Questions",
        concept: "JSX is a syntax extension for JavaScript that allows developers to write HTML-like UI code inside JavaScript.",
        difficulty: "Easy",

        theory: `
Common JSX interview questions:

1. What is JSX?
JSX stands for JavaScript XML. It makes UI code easier to write and understand.

2. Is JSX HTML?
No. JSX looks similar to HTML but is JavaScript syntax.

3. Can we write JavaScript inside JSX?
Yes. JavaScript expressions can be written using curly braces.

4. Why className instead of class?
class is a JavaScript keyword, so JSX uses className for CSS classes.

5. Can JSX return multiple elements?
Yes, but they must have a common parent or Fragment.

6. Does the browser directly understand JSX?
No. JSX is transformed into JavaScript before the browser executes it.
        `,

        example: `
function User() {

    const name = "Rahul";

    return (
        <div>
            <h2>Hello {name}</h2>
            <p>Welcome to React</p>
        </div>
    );
}

export default User;
        `,

        output: `
Hello Rahul
Welcome to React
        `
    },


    // ============================================================
    // 3. Component Questions
    // ============================================================

    {
        id: 3,
        module: "interviewPreparation",
        title: "Component Questions",
        concept: "Components are reusable building blocks of a React application.",
        difficulty: "Easy",

        theory: `
Common component interview questions:

1. What is a component?
A component is a reusable UI building block.

2. What are functional components?
Functional components are JavaScript functions that return JSX.

3. Can a component receive data?
Yes. Data can be passed through props.

4. Can a component have state?
Yes. Functional components can use Hooks such as useState.

5. Why use components?
Components improve:
- Reusability
- Maintainability
- Code organization
- Testing

A large application is normally divided into smaller components.
        `,

        example: `
function Header() {

    return (
        <header>
            <h1>My Application</h1>
        </header>
    );
}

function App() {

    return (
        <div>
            <Header />
            <p>Dashboard</p>
        </div>
    );
}

export default App;
        `,

        output: `
My Application

Dashboard
        `
    },


    // ============================================================
    // 4. Props Questions
    // ============================================================

    {
        id: 4,
        module: "interviewPreparation",
        title: "Props Questions",
        concept: "Props are read-only data passed from a parent component to a child component.",
        difficulty: "Easy",

        theory: `
Common props interview questions:

1. What are props?
Props are inputs passed to a component.

2. Who sends props?
The parent component sends props.

3. Can a child modify props?
Props should be treated as read-only.

4. Can we pass objects through props?
Yes.

5. Can we pass functions through props?
Yes. This is commonly used for child-to-parent communication.

Data flow:

Parent
   ↓
Props
   ↓
Child

Props are useful for making components reusable.
        `,

        example: `
function User({ name, age }) {

    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
        </div>
    );
}

function App() {

    return (
        <User
            name="Rahul"
            age={25}
        />
    );
}

export default App;
        `,

        output: `
Rahul
Age: 25
        `
    },


    // ============================================================
    // 5. State Questions
    // ============================================================

    {
        id: 5,
        module: "interviewPreparation",
        title: "State Questions",
        concept: "State is data managed by a component that can change and cause the component to render again.",
        difficulty: "Easy",

        theory: `
Common state interview questions:

1. What is state?
State stores data that can change during the lifetime of a component.

2. Which Hook is commonly used for state?
useState.

3. What happens when state changes?
React schedules a re-render so the UI can reflect the new state.

4. Can we directly modify state?
No. We should use the state setter.

5. Is state shared automatically between components?
No. State belongs to the component that owns it unless it is lifted or placed in shared state.

State is commonly used for:
- Form values
- Counters
- Loading state
- API data
- UI visibility
        `,

        example: `
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h2>{count}</h2>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>

        </div>
    );
}

export default Counter;
        `,

        output: `
0

After clicking Increment:

1
2
3
...
        `
    },


    // ============================================================
    // 6. Hooks Questions
    // ============================================================

    {
        id: 6,
        module: "interviewPreparation",
        title: "Hooks Questions",
        concept: "Hooks are functions that allow functional components to use React features such as state, effects, context, refs, and reducers.",
        difficulty: "Medium",

        theory: `
Common Hooks interview questions:

1. What are Hooks?
Hooks allow functional components to use React features.

2. What is useState?
It manages component state.

3. What is useEffect?
It synchronizes a component with external systems and is commonly used for effects such as data fetching.

4. What is useContext?
It reads values from React Context.

5. What is useRef?
It stores a mutable value or references a DOM element without causing a re-render when the ref changes.

6. What is useMemo?
It memoizes a calculated value.

7. What is useCallback?
It memoizes a function reference.

8. What is useReducer?
It manages state using a reducer and actions.

Important Rules:

- Call Hooks at the top level.
- Do not call Hooks inside loops or conditions.
- Call Hooks only from React components or custom Hooks.
        `,

        example: `
import { useState } from "react";

function User() {

    const [name, setName] = useState("Rahul");

    return (
        <div>

            <h2>{name}</h2>

            <button
                onClick={() => setName("Amit")}
            >
                Change Name
            </button>

        </div>
    );
}

export default User;
        `,

        output: `
Rahul

After clicking the button:

Amit
        `
    },


    // ============================================================
    // 7. useEffect Questions
    // ============================================================

    {
        id: 7,
        module: "interviewPreparation",
        title: "useEffect Questions",
        concept: "useEffect is used to synchronize a component with external systems and is commonly used for tasks such as subscriptions, timers, and API requests.",
        difficulty: "Medium",

        theory: `
Common useEffect interview questions:

1. What is useEffect?
useEffect is a React Hook used to perform effects related to external systems.

2. When does useEffect run?
It runs after React commits the component's update.

3. What does an empty dependency array mean?
The effect does not re-run because of changes to listed dependencies, so in normal production behavior it runs after the initial mount.

4. What is a dependency array?
It tells React which reactive values the effect depends on.

5. What is cleanup?
Cleanup is a function returned from the effect.

6. When does cleanup run?
Cleanup runs before the effect re-runs because dependencies changed and when the component unmounts.

7. Can useEffect fetch API data?
Yes.

Important interview point:

useEffect should not be used for every calculation. It is mainly for synchronizing with systems outside React.
        `,

        example: `
import { useEffect, useState } from "react";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data));

    }, []);

    return (
        <ul>

            {users.map(user => (
                <li key={user.id}>
                    {user.name}
                </li>
            ))}

        </ul>
    );
}

export default Users;
        `,

        output: `
User list loaded from API:

Leanne Graham
Ervin Howell
Clementine Bauch
...
        `
    },


    // ============================================================
    // 8. Redux Questions
    // ============================================================

    {
        id: 8,
        module: "interviewPreparation",
        title: "Redux Questions",
        concept: "Redux is a predictable state management library used to manage shared application state.",
        difficulty: "Medium",

        theory: `
Common Redux interview questions:

1. What is Redux?
Redux is a state management library.

2. What is a Store?
The Store contains the application's Redux state.

3. What is an Action?
An action is an object describing what happened.

4. What is a Reducer?
A reducer calculates the next state from the current state and an action.

5. What is Dispatch?
dispatch() sends an action to Redux.

6. What is a Selector?
A selector reads required data from the Redux state.

7. What is Redux Toolkit?
Redux Toolkit is the recommended way to write modern Redux logic.

8. What is createSlice?
It creates a slice containing state, reducers, and generated action creators.

Basic flow:

Component
   ↓
dispatch(action)
   ↓
Reducer
   ↓
Store updated
   ↓
Component reads new state
        `,

        example: `
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({

    name: "counter",

    initialState: {
        value: 0
    },

    reducers: {

        increment: (state) => {
            state.value += 1;
        }

    }

});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
        `,

        output: `
Initial value: 0

After dispatch(increment()):

Value: 1
        `
    },


    // ============================================================
    // 9. API Questions
    // ============================================================

    {
        id: 9,
        module: "interviewPreparation",
        title: "API Questions",
        concept: "API questions test how React communicates with backend services using HTTP requests and handles loading, success, and error states.",
        difficulty: "Medium",

        theory: `
Common API interview questions:

1. What is an API?
API allows different software systems to communicate.

2. What is REST API?
REST API is an HTTP-based architectural style commonly used for client-server communication.

3. What is GET?
Used to retrieve data.

4. What is POST?
Used to create or submit data.

5. What is PUT?
Usually used to replace or update a resource.

6. What is PATCH?
Used for partial updates.

7. What is DELETE?
Used to delete a resource.

8. How does React call an API?
Common approaches include fetch() and Axios.

9. What should the UI handle?
Usually:
- Loading
- Success
- Error
- Empty state

Important:

fetch() does not reject its Promise just because the server returns HTTP 404 or 500. Check response.ok.
        `,

        example: `
async function getEmployees() {

    try {

        const response = await fetch(
            "http://localhost:8080/api/employees"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.error(error);

    }
}

getEmployees();
        `,

        output: `
API Response:

[
    {
        "id": 1,
        "name": "Rahul",
        "department": "IT"
    }
]
        `
    },


    // ============================================================
    // 10. Authentication Questions
    // ============================================================

    {
        id: 10,
        module: "interviewPreparation",
        title: "Authentication Questions",
        concept: "Authentication verifies who the user is, while authorization determines what the authenticated user is allowed to access.",
        difficulty: "Advanced",

        theory: `
Common authentication interview questions:

1. What is authentication?
Authentication verifies the identity of a user.

2. What is authorization?
Authorization checks what an authenticated user is allowed to do.

3. What is JWT?
JWT is a token format commonly used for stateless authentication.

4. What is an access token?
It is a short-lived credential used to access protected APIs.

5. What is a refresh token?
It can be used to obtain a new access token when supported by the authentication architecture.

6. What is Authorization header?
A common format is:

Authorization: Bearer <token>

7. What is a protected route?
A route that should only be accessible to authenticated users.

8. Is React route protection enough?
No. The backend must enforce authentication and authorization.

Typical flow:

Login
   ↓
Backend validates credentials
   ↓
Token/session returned
   ↓
React maintains authentication state
   ↓
API requests include credentials
   ↓
Backend validates request
        `,

        example: `
const token = localStorage.getItem("token");

fetch("http://localhost:8080/api/profile", {

    headers: {
        Authorization: "Bearer " + token
    }

})
.then(response => response.json())
.then(data => {
    console.log(data);
});
        `,

        output: `
Request:

GET /api/profile

Authorization:
Bearer eyJ...

Response:

{
    "name": "Rahul",
    "role": "USER"
}
        `
    },


    // ============================================================
    // 11. Performance Questions
    // ============================================================

    {
        id: 11,
        module: "interviewPreparation",
        title: "Performance Questions",
        concept: "React performance optimization focuses on avoiding unnecessary work and rendering while keeping the application correct and maintainable.",
        difficulty: "Advanced",

        theory: `
Common performance interview questions:

1. What causes a React component to re-render?
Examples include changes to its state, receiving new props, or updates in its consumed context.

2. What is React.memo?
It can skip re-rendering a component when its props have not changed.

3. What is useMemo?
It caches the result of a calculation between renders.

4. What is useCallback?
It caches a function reference between renders.

5. What is lazy loading?
Loading code only when it is needed.

6. What is code splitting?
Breaking JavaScript bundles into smaller chunks.

7. What is Suspense?
Suspense can display fallback UI while supported content is not ready.

8. Should we use useMemo and useCallback everywhere?
No. They should be used when they provide a meaningful performance benefit.

9. How can a large list be optimized?
Techniques include pagination, virtualization, memoization, and avoiding unnecessary work.
        `,

        example: `
import { memo, useCallback } from "react";

const Button = memo(function Button({ onClick }) {

    return (
        <button onClick={onClick}>
            Click
        </button>
    );
});

function App() {

    const handleClick = useCallback(() => {
        console.log("Clicked");
    }, []);

    return (
        <Button onClick={handleClick} />
    );
}

export default App;
        `,

        output: `
Button rendered.

Clicking the button:

Clicked
        `
    },


    // ============================================================
    // 12. Scenario-Based Questions
    // ============================================================

    {
        id: 12,
        module: "interviewPreparation",
        title: "Scenario-Based Questions",
        concept: "Scenario-based questions test how you apply React concepts to real-world problems instead of only defining concepts.",
        difficulty: "Advanced",

        theory: `
Common React scenario-based interview questions:

1. API is slow. What will you do?

Answer:
- Show loading UI
- Disable duplicate actions when appropriate
- Handle errors
- Add retry where useful
- Cache or deduplicate requests when appropriate
- Optimize the API/backend if necessary

2. Parent component has many child components and re-renders frequently. What will you check?

Answer:
- Identify why it re-renders
- Check state ownership
- Check changing object/function references
- Use React.memo where useful
- Use useMemo/useCallback only when justified

3. User refreshes a protected page. What will you do?

Answer:
- Restore authentication state from the application's auth mechanism
- Verify the session/token as appropriate
- Redirect unauthenticated users
- Keep backend authorization enforced

4. Large table contains 10,000 records. How will you improve performance?

Answer:
- Pagination
- Server-side filtering
- Virtualization
- Debounced search where appropriate
- Avoid rendering unnecessary rows

5. Two components need the same data. What will you do?

Answer:
Depending on the scope:
- Lift state to a common parent
- Use Context for suitable shared data
- Use Redux or another state-management solution for broader application state

6. API returns an error. What should the UI show?

Answer:
- User-friendly error message
- Loading state should stop
- Retry option when useful
- Log technical details appropriately

7. How would you design a React + Spring Boot application?

Answer:

React
   ↓
REST API
   ↓
Spring Boot
   ↓
Service Layer
   ↓
Repository
   ↓
PostgreSQL

React handles the UI.
Spring Boot handles business logic and APIs.
PostgreSQL stores persistent data.
        `,

        example: `
function EmployeeList({ employees, loading, error }) {

    if (loading) {
        return <p>Loading employees...</p>;
    }

    if (error) {
        return (
            <div>
                <p>Unable to load employees.</p>
                <button>Retry</button>
            </div>
        );
    }

    if (employees.length === 0) {
        return <p>No employees found.</p>;
    }

    return (
        <ul>
            {employees.map(employee => (
                <li key={employee.id}>
                    {employee.name}
                </li>
            ))}
        </ul>
    );
}

export default EmployeeList;
        `,

        output: `
Loading:
Loading employees...

Success:
Rahul
Amit
Suresh

Error:
Unable to load employees.

Empty:
No employees found.
        `
    }

];