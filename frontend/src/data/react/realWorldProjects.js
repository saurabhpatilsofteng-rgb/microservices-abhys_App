export const realWorldProjectsTopics = [

    // ============================================================
    // 1. Todo Application
    // ============================================================

    {
        id: 1,
        module: "realWorldProjects",
        title: "Todo Application",
        concept: "A Todo application is a simple React project used to manage tasks. Users can add, update, complete, and delete tasks.",
        difficulty: "Easy",

        theory: `
A Todo application is one of the best beginner React projects.

It helps you understand:
- useState
- Forms
- Events
- Lists
- Keys
- Conditional rendering
- CRUD operations

Typical Todo features:
1. Add a task
2. Display tasks
3. Mark task as completed
4. Edit task
5. Delete task
6. Filter completed and pending tasks

React state is used to store the list of Todo items.
        `,

        example: `
import { useState } from "react";

function TodoApp() {

    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

    const addTodo = () => {

        if (!task.trim()) return;

        const newTodo = {
            id: Date.now(),
            title: task,
            completed: false
        };

        setTodos([...todos, newTodo]);
        setTask("");
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

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default TodoApp;
        `,

        output: `
Input: Learn React

After clicking Add:

- Learn React
`
    },


    // ============================================================
    // 2. Login/Register Application
    // ============================================================

    {
        id: 2,
        module: "realWorldProjects",
        title: "Login/Register Application",
        concept: "A Login/Register application allows users to create an account, log in, log out, and access protected pages.",
        difficulty: "Medium",

        theory: `
A Login/Register application is commonly used in real-world projects.

Main features:

1. Registration
2. Login
3. Logout
4. Form validation
5. API integration
6. Authentication
7. JWT token handling
8. Protected routes

Typical flow:

Register
    ↓
Backend creates user
    ↓
Login
    ↓
Backend verifies credentials
    ↓
JWT token returned
    ↓
React stores authentication state
    ↓
User accesses protected pages

The backend must always perform the actual authentication and authorization.
        `,

        example: `
async function loginUser() {

    const response = await fetch(
        "http://localhost:8080/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: "admin",
                password: "1234"
            })
        }
    );

    const data = await response.json();

    localStorage.setItem("token", data.token);
}
        `,

        output: `
Login Page

Username: admin
Password: ****

[ Login ]

After successful login:

Login successful
Dashboard opened
`
    },


    // ============================================================
    // 3. CRUD Application
    // ============================================================

    {
        id: 3,
        module: "realWorldProjects",
        title: "CRUD Application",
        concept: "CRUD means Create, Read, Update, and Delete. A CRUD application allows users to manage data through these four operations.",
        difficulty: "Medium",

        theory: `
CRUD is one of the most important concepts in real-world applications.

CRUD stands for:

C - Create
R - Read
U - Update
D - Delete

For example, a User Management application can have:

Create → Add user
Read → Display users
Update → Edit user
Delete → Remove user

React usually handles the UI and API calls, while the backend handles database operations.

Example API:

GET    /users
POST   /users
PUT    /users/1
DELETE /users/1
        `,

        example: `
async function getUsers() {

    const response = await fetch(
        "http://localhost:8080/users"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    const users = await response.json();

    console.log(users);
}

async function deleteUser(id) {

    await fetch(
        "http://localhost:8080/users/" + id,
        {
            method: "DELETE"
        }
    );
}
        `,

        output: `
User List

ID    Name       Email
1     Rahul      rahul@gmail.com
2     Amit       amit@gmail.com

[Edit] [Delete]
`
    },


    // ============================================================
    // 4. Employee Management
    // ============================================================

    {
        id: 4,
        module: "realWorldProjects",
        title: "Employee Management",
        concept: "An Employee Management application manages employee information such as name, department, salary, designation, and contact details.",
        difficulty: "Medium",

        theory: `
Employee Management is a common enterprise application.

Typical features:

- Add employee
- View employees
- Edit employee
- Delete employee
- Search employee
- Filter employees
- Department management
- Employee details
- Pagination
- Form validation

Example employee object:

{
    id: 1,
    name: "Rahul",
    department: "IT",
    designation: "Developer",
    salary: 50000
}

React can manage the UI while Spring Boot can provide REST APIs and PostgreSQL can store employee data.
        `,

        example: `
const employee = {
    id: 1,
    name: "Rahul",
    department: "IT",
    designation: "Java Developer",
    salary: 50000
};

function Employee() {

    return (
        <div>

            <h2>{employee.name}</h2>

            <p>
                Department: {employee.department}
            </p>

            <p>
                Designation: {employee.designation}
            </p>

            <p>
                Salary: {employee.salary}
            </p>

        </div>
    );
}

export default Employee;
        `,

        output: `
Employee Details

Name: Rahul
Department: IT
Designation: Java Developer
Salary: 50000
`
    },


    // ============================================================
    // 5. HRMS Frontend
    // ============================================================

    {
        id: 5,
        module: "realWorldProjects",
        title: "HRMS Frontend",
        concept: "An HRMS frontend is a React application used to manage human resource activities such as employees, attendance, leave, payroll, and departments.",
        difficulty: "Advanced",

        theory: `
HRMS stands for Human Resource Management System.

A real HRMS frontend can contain:

Dashboard
Employees
Departments
Attendance
Leave Management
Payroll
Recruitment
Reports
User Management
Settings

Example React structure:

src/
├── pages/
│   ├── Dashboard.jsx
│   ├── Employees.jsx
│   ├── Attendance.jsx
│   └── Leave.jsx
│
├── components/
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   └── DataTable.jsx
│
├── services/
│   ├── employeeService.js
│   └── attendanceService.js
│
└── features/
    └── employee/
        └── employeeSlice.js

Redux can be used for shared application state.
        `,

        example: `
function HRMSDashboard() {

    return (
        <div>

            <h1>HRMS Dashboard</h1>

            <div>
                Total Employees: 250
            </div>

            <div>
                Present Today: 220
            </div>

            <div>
                On Leave: 30
            </div>

        </div>
    );
}

export default HRMSDashboard;
        `,

        output: `
HRMS Dashboard

Total Employees: 250
Present Today: 220
On Leave: 30

Employees
Attendance
Leave
Payroll
Reports
`
    },


    // ============================================================
    // 6. E-commerce Frontend
    // ============================================================

    {
        id: 6,
        module: "realWorldProjects",
        title: "E-commerce Frontend",
        concept: "An E-commerce frontend is a React application that allows users to browse products, search products, add products to a cart, and place orders.",
        difficulty: "Advanced",

        theory: `
An E-commerce application is a good project for learning advanced React concepts.

Common features:

- Product listing
- Product details
- Search
- Categories
- Filters
- Shopping cart
- Wishlist
- Login
- Checkout
- Orders
- Payment integration

Example flow:

Products API
    ↓
React Product List
    ↓
Product Details
    ↓
Add to Cart
    ↓
Cart
    ↓
Checkout
    ↓
Order

Redux Toolkit is commonly useful for managing cart and user state.
        `,

        example: `
import { useState } from "react";

function Product() {

    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const product = {
        id: 1,
        name: "Laptop",
        price: 50000
    };

    return (
        <div>

            <h2>{product.name}</h2>

            <p>₹{product.price}</p>

            <button
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </button>

            <p>
                Cart Items: {cart.length}
            </p>

        </div>
    );
}

export default Product;
        `,

        output: `
Product: Laptop
Price: ₹50000

[ Add to Cart ]

Cart Items: 1
`
    },


    // ============================================================
    // 7. Dashboard
    // ============================================================

    {
        id: 7,
        module: "realWorldProjects",
        title: "Dashboard",
        concept: "A dashboard displays important application information using cards, tables, charts, statistics, and reports.",
        difficulty: "Medium",

        theory: `
A dashboard is commonly the first page users see after login.

Typical dashboard components:

- Summary cards
- Charts
- Tables
- Recent activities
- Notifications
- Reports
- Filters
- Date ranges

Example:

Total Users
Total Orders
Total Revenue
Pending Orders

React gets data from APIs and displays it in the dashboard.

Charts can be created using libraries such as Recharts, Chart.js, or other charting libraries.
        `,

        example: `
function Dashboard() {

    const data = {
        users: 1200,
        orders: 450,
        revenue: 250000
    };

    return (
        <div>

            <h1>Dashboard</h1>

            <div>
                Total Users: {data.users}
            </div>

            <div>
                Total Orders: {data.orders}
            </div>

            <div>
                Revenue: ₹{data.revenue}
            </div>

        </div>
    );
}

export default Dashboard;
        `,

        output: `
Dashboard

Total Users: 1200
Total Orders: 450
Revenue: ₹250000
`
    },


    // ============================================================
    // 8. Admin Panel
    // ============================================================

    {
        id: 8,
        module: "realWorldProjects",
        title: "Admin Panel",
        concept: "An Admin Panel is a management interface where administrators can manage users, roles, products, reports, settings, and other application data.",
        difficulty: "Advanced",

        theory: `
An Admin Panel provides administrative control over an application.

Common modules:

- Dashboard
- User Management
- Role Management
- Permission Management
- Product Management
- Reports
- Notifications
- Settings
- Audit Logs

Example:

Admin
 ├── Dashboard
 ├── Users
 ├── Roles
 ├── Products
 ├── Reports
 └── Settings

Role-based access control can be used to decide which pages or actions a user can access.

Important:

React can hide or show UI based on roles, but real authorization must also be enforced by the backend.
        `,

        example: `
function AdminPanel({ role }) {

    return (
        <div>

            <h1>Admin Panel</h1>

            {role === "ADMIN" && (
                <button>
                    Manage Users
                </button>
            )}

            <button>
                View Reports
            </button>

        </div>
    );
}

export default AdminPanel;
        `,

        output: `
Admin Panel

Dashboard
Manage Users
View Reports
Settings
`
    },


    // ============================================================
    // 9. React + Spring Boot Project
    // ============================================================

    {
        id: 9,
        module: "realWorldProjects",
        title: "React + Spring Boot Project",
        concept: "A React + Spring Boot project uses React for the frontend, Spring Boot for backend REST APIs, and a database such as PostgreSQL for persistent data.",
        difficulty: "Advanced",

        theory: `
React + Spring Boot is a common full-stack architecture.

Architecture:

React
   ↓
REST API
   ↓
Spring Boot
   ↓
Service
   ↓
Repository
   ↓
PostgreSQL

Example:

React:
http://localhost:5173

Spring Boot:
http://localhost:8080

API:

GET /api/employees
POST /api/employees
PUT /api/employees/1
DELETE /api/employees/1

React sends HTTP requests to Spring Boot.

Spring Boot processes the request and communicates with the database.

The response is normally returned as JSON.

Example response:

[
    {
        "id": 1,
        "name": "Rahul",
        "department": "IT"
    }
]

React receives this JSON and displays it in the UI.
        `,

        example: `
import { useEffect, useState } from "react";

function Employees() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8080/api/employees")
            .then(response => {

                if (!response.ok) {
                    throw new Error("Failed to fetch employees");
                }

                return response.json();
            })
            .then(data => {
                setEmployees(data);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    return (
        <div>

            <h1>Employees</h1>

            {employees.map(employee => (

                <div key={employee.id}>
                    {employee.name} - {employee.department}
                </div>

            ))}

        </div>
    );
}

export default Employees;
        `,

        output: `
React
   ↓
GET /api/employees
   ↓
Spring Boot
   ↓
PostgreSQL
   ↓
JSON Response
   ↓
React

Employee List:

Rahul - IT
Amit - HR
Suresh - Finance
`
    }

];