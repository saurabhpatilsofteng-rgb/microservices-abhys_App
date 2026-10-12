export const codingProblemsTopics = [

    // ============================================================
    // 1. Counter
    // ============================================================

    {
        id: 1,
        module: "codingProblems",
        title: "Counter",
        concept: "Build a counter application where the user can increment, decrement, and reset a number.",
        difficulty: "Easy",

        theory: `
The Counter problem is one of the most common beginner React coding problems.

Requirements:

- Display counter value
- Increment counter
- Decrement counter
- Reset counter

This problem tests:

- useState
- Event handling
- State updates
- Button click events
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

            <button onClick={() => setCount(0)}>
                Reset
            </button>

        </div>
    );
}

export default Counter;
        `,

        output: `
Count: 0

[ + ] [ - ] [ Reset ]

After clicking +:

Count: 1
        `
    },


    // ============================================================
    // 2. Todo List
    // ============================================================

    {
        id: 2,
        module: "codingProblems",
        title: "Todo List",
        concept: "Build a Todo List where users can add and delete tasks.",
        difficulty: "Easy",

        theory: `
A Todo List is a common React coding problem.

Requirements:

- Add task
- Display tasks
- Delete task
- Mark task as completed

Concepts tested:

- useState
- Forms
- Events
- Arrays
- map()
- filter()
- Keys
- Conditional rendering
        `,

        example: `
import { useState } from "react";

function TodoList() {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {

        if (!task.trim()) return;

        setTodos([
            ...todos,
            {
                id: Date.now(),
                title: task
            }
        ]);

        setTask("");
    };

    const deleteTodo = (id) => {

        setTodos(
            todos.filter(todo => todo.id !== id)
        );
    };

    return (
        <div>

            <input
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />

            <button onClick={addTodo}>
                Add
            </button>

            {todos.map(todo => (

                <div key={todo.id}>

                    <span>
                        {todo.title}
                    </span>

                    <button
                        onClick={() => deleteTodo(todo.id)}
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}

export default TodoList;
        `,

        output: `
Input:
Learn React

[ Add ]

Todo List:

Learn React    [Delete]
        `
    },


    // ============================================================
    // 3. Search Filter
    // ============================================================

    {
        id: 3,
        module: "codingProblems",
        title: "Search Filter",
        concept: "Build a search feature that filters a list of items based on the text entered by the user.",
        difficulty: "Easy",

        theory: `
Search filtering is commonly asked in React interviews.

Example:

User enters:

"java"

The application displays only items containing "java".

Concepts tested:

- useState
- onChange
- filter()
- includes()
- Case-insensitive searching
- Rendering lists
        `,

        example: `
import { useState } from "react";

function SearchFilter() {

    const [search, setSearch] = useState("");

    const users = [
        "Rahul",
        "Amit",
        "Suresh",
        "Rohan"
    ];

    const filteredUsers = users.filter(user =>
        user.toLowerCase().includes(
            search.toLowerCase()
        )
    );

    return (
        <div>

            <input
                placeholder="Search user"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>

                {filteredUsers.map(user => (
                    <li key={user}>
                        {user}
                    </li>
                ))}

            </ul>

        </div>
    );
}

export default SearchFilter;
        `,

        output: `
Search: "ro"

Results:

Rohan
        `
    },


    // ============================================================
    // 4. Pagination
    // ============================================================

    {
        id: 4,
        module: "codingProblems",
        title: "Pagination",
        concept: "Pagination divides a large list of data into smaller pages so that only a limited number of items are displayed at a time.",
        difficulty: "Medium",

        theory: `
Pagination is important when an application has many records.

For example:

100 employees

Instead of displaying all 100 records:

Page 1 → 10 employees
Page 2 → 10 employees
Page 3 → 10 employees

Important concepts:

- Current page
- Items per page
- Total pages
- Slice()
- Previous button
- Next button

Formula:

startIndex = (currentPage - 1) * itemsPerPage

endIndex = startIndex + itemsPerPage
        `,

        example: `
import { useState } from "react";

function Pagination() {

    const [currentPage, setCurrentPage] = useState(1);

    const items = Array.from(
        { length: 20 },
        (_, index) => index + 1
    );

    const itemsPerPage = 5;

    const startIndex =
        (currentPage - 1) * itemsPerPage;

    const currentItems =
        items.slice(
            startIndex,
            startIndex + itemsPerPage
        );

    const totalPages =
        Math.ceil(items.length / itemsPerPage);

    return (
        <div>

            {currentItems.map(item => (
                <p key={item}>
                    Item {item}
                </p>
            ))}

            <button
                disabled={currentPage === 1}
                onClick={() =>
                    setCurrentPage(currentPage - 1)
                }
            >
                Previous
            </button>

            <span>
                Page {currentPage} of {totalPages}
            </span>

            <button
                disabled={currentPage === totalPages}
                onClick={() =>
                    setCurrentPage(currentPage + 1)
                }
            >
                Next
            </button>

        </div>
    );
}

export default Pagination;
        `,

        output: `
Page 1 of 4

Item 1
Item 2
Item 3
Item 4
Item 5

[Previous] [Next]
        `
    },


    // ============================================================
    // 5. Form Validation
    // ============================================================

    {
        id: 5,
        module: "codingProblems",
        title: "Form Validation",
        concept: "Form validation checks whether user-entered data satisfies required rules before submission.",
        difficulty: "Medium",

        theory: `
A React form validation problem commonly contains:

- Name
- Email
- Password
- Required fields
- Email validation
- Password validation
- Error messages

Example rules:

Name:
Required

Email:
Required and valid email format

Password:
At least 6 characters

Concepts tested:

- Controlled components
- useState
- onChange
- onSubmit
- Validation
- Error handling
        `,

        example: `
import { useState } from "react";

function FormValidation() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!email) {
            setError("Email is required");
            return;
        }

        if (!email.includes("@")) {
            setError("Enter a valid email");
            return;
        }

        setError("");

        alert("Form submitted");
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            {error && (
                <p>{error}</p>
            )}

            <button type="submit">
                Submit
            </button>

        </form>
    );
}

export default FormValidation;
        `,

        output: `
Email: 

Error:
Email is required

After entering:

rahul@gmail.com

Form submitted
        `
    },


    // ============================================================
    // 6. CRUD
    // ============================================================

    {
        id: 6,
        module: "codingProblems",
        title: "CRUD",
        concept: "CRUD means Create, Read, Update, and Delete. A React CRUD problem requires managing records through these operations.",
        difficulty: "Medium",

        theory: `
CRUD stands for:

Create
Read
Update
Delete

Example User CRUD:

Create → Add user
Read → Display users
Update → Edit user
Delete → Remove user

In a real application:

React
   ↓
REST API
   ↓
Spring Boot
   ↓
Database

Interviewers commonly check whether you understand state updates, forms, API calls, and UI synchronization.
        `,

        example: `
import { useState } from "react";

function CRUD() {

    const [users, setUsers] = useState([
        {
            id: 1,
            name: "Rahul"
        }
    ]);

    const addUser = () => {

        const user = {
            id: Date.now(),
            name: "Amit"
        };

        setUsers([...users, user]);
    };

    const deleteUser = (id) => {

        setUsers(
            users.filter(user => user.id !== id)
        );
    };

    return (
        <div>

            <button onClick={addUser}>
                Add User
            </button>

            {users.map(user => (

                <div key={user.id}>

                    {user.name}

                    <button
                        onClick={() => deleteUser(user.id)}
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}

export default CRUD;
        `,

        output: `
Users:

Rahul [Delete]

After Add:

Rahul [Delete]
Amit  [Delete]
        `
    },


    // ============================================================
    // 7. API Integration
    // ============================================================

    {
        id: 7,
        module: "codingProblems",
        title: "API Integration",
        concept: "API integration means connecting a React frontend to a backend service to fetch or send data.",
        difficulty: "Medium",

        theory: `
A React application commonly communicates with APIs using:

- fetch()
- Axios

Typical API states:

Loading
   ↓
Success
   ↓
Display data

or

Loading
   ↓
Error
   ↓
Display error

Important concepts:

- useEffect
- useState
- HTTP methods
- JSON
- Loading state
- Error state
- response.ok

React should not assume that an HTTP error automatically causes fetch() to reject.
        `,

        example: `
import { useEffect, useState } from "react";

function APIIntegration() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        fetch(
            "https://jsonplaceholder.typicode.com/users"
        )
            .then(response => {

                if (!response.ok) {
                    throw new Error("Request failed");
                }

                return response.json();
            })
            .then(data => {
                setUsers(data);
            })
            .catch(() => {
                setError("Unable to load users");
            })
            .finally(() => {
                setLoading(false);
            });

    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

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

export default APIIntegration;
        `,

        output: `
Loading...

After API response:

Leanne Graham
Ervin Howell
Clementine Bauch
...
        `
    },


    // ============================================================
    // 8. Login Form
    // ============================================================

    {
        id: 8,
        module: "codingProblems",
        title: "Login Form",
        concept: "A Login Form collects user credentials and sends them to an authentication backend for verification.",
        difficulty: "Medium",

        theory: `
A login form normally contains:

- Username or email
- Password
- Submit button
- Validation
- Loading state
- Error message

Typical flow:

User enters credentials
        ↓
React validates form
        ↓
POST /login
        ↓
Backend validates credentials
        ↓
Token/session returned
        ↓
User is authenticated

For a real application, the backend must perform authentication. Frontend validation is only for user experience and input checking.
        `,

        example: `
import { useState } from "react";

function LoginForm() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!email || !password) {
            alert("All fields are required");
            return;
        }

        console.log({
            email,
            password
        });
    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
                Login
            </button>

        </form>
    );
}

export default LoginForm;
        `,

        output: `
Email:    [____________]
Password: [____________]

[ Login ]

If fields are empty:

All fields are required
        `
    },


    // ============================================================
    // 9. Protected Route
    // ============================================================

    {
        id: 9,
        module: "codingProblems",
        title: "Protected Route",
        concept: "A protected route allows access to a page only when the application considers the user authenticated.",
        difficulty: "Advanced",

        theory: `
Protected routes are commonly used for:

- Dashboard
- Profile
- Admin Panel
- Employee Management
- Reports

Basic flow:

User requests /dashboard
        ↓
Check authentication
        ↓
Authenticated?
   ┌────┴────┐
  Yes       No
   ↓         ↓
Dashboard   Login

React Router can implement the UI-level redirect.

Important:

A protected React route is not a security boundary.
The backend must independently verify authentication and authorization for protected APIs.
        `,

        example: `
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

    const token =
        localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

export default ProtectedRoute;
        `,

        output: `
If token exists:

/dashboard
    ↓
Dashboard displayed

If token does not exist:

/dashboard
    ↓
/login
        `
    },


    // ============================================================
    // 10. Shopping Cart
    // ============================================================

    {
        id: 10,
        module: "codingProblems",
        title: "Shopping Cart",
        concept: "A Shopping Cart allows users to add products, remove products, change quantities, and calculate the total price.",
        difficulty: "Advanced",

        theory: `
Shopping Cart is a common React interview project.

Requirements:

- Display products
- Add to cart
- Remove from cart
- Increase quantity
- Decrease quantity
- Calculate total
- Display cart item count

Example:

Product:
Laptop
Price: ₹50000

Cart:

Laptop
Quantity: 2
Total: ₹100000

For larger applications, Redux Toolkit is commonly useful for managing cart state across multiple components.
        `,

        example: `
import { useState } from "react";

function ShoppingCart() {

    const [cart, setCart] = useState([]);

    const product = {
        id: 1,
        name: "Laptop",
        price: 50000
    };

    const addToCart = () => {

        setCart([
            ...cart,
            product
        ]);
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );

    return (
        <div>

            <h2>{product.name}</h2>

            <p>
                ₹{product.price}
            </p>

            <button onClick={addToCart}>
                Add to Cart
            </button>

            <h3>
                Cart Items: {cart.length}
            </h3>

            <h3>
                Total: ₹{total}
            </h3>

        </div>
    );
}

export default ShoppingCart;
        `,

        output: `
Laptop
₹50000

[ Add to Cart ]

Cart Items: 1
Total: ₹50000
        `
    },


    // ============================================================
    // 11. Dashboard
    // ============================================================

    {
        id: 11,
        module: "codingProblems",
        title: "Dashboard",
        concept: "A Dashboard combines API data, cards, tables, charts, filters, and application state to display important information.",
        difficulty: "Advanced",

        theory: `
A dashboard is a common real-world React coding problem.

Typical dashboard requirements:

- Summary cards
- API integration
- Loading state
- Error state
- Tables
- Charts
- Search
- Filters
- Date range
- Pagination

Example:

Total Employees: 250
Present Today: 220
On Leave: 30
Departments: 8

Typical architecture:

Dashboard
├── SummaryCards
├── EmployeeTable
├── AttendanceChart
└── RecentActivities

Data can be fetched from a backend API and passed to child components through props or shared state.
        `,

        example: `
import { useEffect, useState } from "react";

function Dashboard() {

    const [data, setData] = useState({
        employees: 0,
        present: 0,
        leave: 0
    });

    useEffect(() => {

        fetch("http://localhost:8080/api/dashboard")
            .then(response => {

                if (!response.ok) {
                    throw new Error("Request failed");
                }

                return response.json();
            })
            .then(result => {
                setData(result);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    return (
        <div>

            <h1>Dashboard</h1>

            <div>
                Total Employees:
                {data.employees}
            </div>

            <div>
                Present:
                {data.present}
            </div>

            <div>
                On Leave:
                {data.leave}
            </div>

        </div>
    );
}

export default Dashboard;
        `,

        output: `
Dashboard

Total Employees: 250
Present: 220
On Leave: 30

Employee Attendance
-------------------
Present     220
On Leave     30
        `
    }

];