export const projectArchitectureTopics = [

    // ============================================================
    // 1. Component Structure
    // ============================================================

    {
        id: 1,
        module: "projectArchitecture",
        title: "Component structure",
        concept: "How a React application is divided into reusable components",
        difficulty: "Easy",

        theory: `
Component structure means organizing a React application into small and reusable components.

Instead of writing the complete application in one file, we divide it into different components.

For example:

App
 ├── Header
 ├── Sidebar
 ├── Dashboard
 │    ├── Card
 │    └── Chart
 └── Footer

Each component is responsible for a specific part of the UI.

This makes the application easier to understand, maintain and reuse.
        `,

        example: `
function Header() {
    return <h1>My Application</h1>;
}

function Dashboard() {
    return <p>Dashboard Page</p>;
}

function App() {
    return (
        <>
            <Header />
            <Dashboard />
        </>
    );
}

export default App;
        `,

        output: `
My Application
Dashboard Page
        `
    },

    // ============================================================
    // 2. Pages
    // ============================================================

    {
        id: 2,
        module: "projectArchitecture",
        title: "Pages",
        concept: "Components that represent complete application screens",
        difficulty: "Easy",

        theory: `
Pages represent complete screens of a React application.

Examples:

Login Page
Home Page
Dashboard Page
Profile Page
Product Page

Usually pages are used with React Router.

For example:

/login      → LoginPage
/dashboard  → DashboardPage
/profile    → ProfilePage

Pages normally combine multiple reusable components.
        `,

        example: `
function DashboardPage() {
    return (
        <div>
            <h1>Dashboard</h1>
            <button>View Reports</button>
        </div>
    );
}

export default DashboardPage;
        `,

        output: `
Dashboard
[View Reports]
        `
    },

    // ============================================================
    // 3. Components
    // ============================================================

    {
        id: 3,
        module: "projectArchitecture",
        title: "Components",
        concept: "Reusable UI building blocks",
        difficulty: "Easy",

        theory: `
A component is a reusable piece of UI.

Examples:

Header
Button
Navbar
Sidebar
Card
Table
Modal
Form

A component can receive data through props and can maintain its own state.

Good component design keeps components small, reusable and focused on one responsibility.
        `,

        example: `
function Button({ text }) {
    return <button>{text}</button>;
}

function App() {
    return (
        <div>
            <Button text="Save" />
            <Button text="Delete" />
        </div>
    );
}

export default App;
        `,

        output: `
[Save] [Delete]
        `
    },

    // ============================================================
    // 4. Hooks
    // ============================================================

    {
        id: 4,
        module: "projectArchitecture",
        title: "Hooks",
        concept: "Functions used to add React features to functional components",
        difficulty: "Easy",

        theory: `
Hooks allow functional components to use React features such as state, effects, context and refs.

Common Hooks:

useState
useEffect
useContext
useReducer
useRef
useMemo
useCallback

Custom Hooks can also be created to reuse application logic.

Hooks are normally placed in a hooks folder when the project becomes large.
        `,

        example: `
import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );
}

export default Counter;
        `,

        output: `
Count: 0

After clicking:

Count: 1
        `
    },

    // ============================================================
    // 5. Services
    // ============================================================

    {
        id: 5,
        module: "projectArchitecture",
        title: "Services",
        concept: "Files that contain reusable application or business logic",
        difficulty: "Medium",

        theory: `
Services are used to keep reusable logic outside UI components.

For example, an application may have:

authService.js
userService.js
productService.js
paymentService.js

A service can contain API calls or other application-specific operations.

This prevents components from becoming too large.

Example:

Component
    ↓
Service
    ↓
Backend API
        `,

        example: `
// userService.js

export async function getUsers() {

    const response = await fetch(
        "http://localhost:8080/users"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
}
        `,

        output: `
The service sends a request to:

GET http://localhost:8080/users

and returns the users data.
        `
    },

    // ============================================================
    // 6. API
    // ============================================================

    {
        id: 6,
        module: "projectArchitecture",
        title: "API",
        concept: "Communication between React frontend and backend",
        difficulty: "Medium",

        theory: `
API is used to communicate between the React frontend and backend.

For example:

React
  ↓
HTTP Request
  ↓
Spring Boot API
  ↓
Database

Common HTTP methods are:

GET       → Read data
POST      → Create data
PUT       → Update complete data
PATCH     → Partially update data
DELETE    → Delete data

API-related code is often kept inside service files or an API client layer.
        `,

        example: `
async function getUsers() {

    const response = await fetch(
        "http://localhost:8080/api/users"
    );

    if (!response.ok) {
        throw new Error("API request failed");
    }

    const users = await response.json();

    console.log(users);
}

getUsers();
        `,

        output: `
Frontend
   ↓
GET /api/users
   ↓
Spring Boot
   ↓
PostgreSQL
        `
    },

    // ============================================================
    // 7. Redux
    // ============================================================

    {
        id: 7,
        module: "projectArchitecture",
        title: "Redux",
        concept: "Centralized state management for shared application state",
        difficulty: "Medium",

        theory: `
Redux is used to manage shared state in a React application.

For example:

User authentication
Shopping cart
Products
Application settings
Notifications

A common Redux structure is:

src
├── app
│   └── store.js
│
├── features
│   ├── user
│   │   └── userSlice.js
│   └── products
│       └── productSlice.js

Components use:

useSelector() → Read Redux state
useDispatch() → Dispatch actions

Redux Toolkit is the recommended way to write Redux applications.
        `,

        example: `
import { useSelector } from "react-redux";

function UserProfile() {

    const user = useSelector(
        (state) => state.user
    );

    return <h2>{user.name}</h2>;
}

export default UserProfile;
        `,

        output: `
User name stored in Redux:

Saurabh
        `
    },

    // ============================================================
    // 8. Utils
    // ============================================================

    {
        id: 8,
        module: "projectArchitecture",
        title: "Utils",
        concept: "Reusable helper functions used throughout the application",
        difficulty: "Easy",

        theory: `
Utils means utility functions.

These are small reusable functions that perform common operations.

Examples:

formatDate()
formatCurrency()
validateEmail()
capitalizeText()
calculateTotal()

A utils folder prevents duplicate helper code across components.

Example structure:

src
└── utils
    ├── dateUtils.js
    ├── validationUtils.js
    └── formatUtils.js
        `,

        example: `
export function formatCurrency(amount) {

    return "₹" + amount.toFixed(2);
}

// Usage

console.log(formatCurrency(1500));
        `,

        output: `
₹1500.00
        `
    },

    // ============================================================
    // 9. Constants
    // ============================================================

    {
        id: 9,
        module: "projectArchitecture",
        title: "Constants",
        concept: "Centralized values that should not be repeatedly hard-coded",
        difficulty: "Easy",

        theory: `
Constants are fixed values used throughout an application.

Instead of writing the same value in many files, we store it in one constants file.

Examples:

API URLs
Role names
Status values
Application configuration
Route names

Example:

src
└── constants
    ├── apiConstants.js
    ├── routeConstants.js
    └── appConstants.js

This makes the application easier to maintain.
        `,

        example: `
// constants/apiConstants.js

export const API_BASE_URL =
    "http://localhost:8080/api";

export const USER_API =
    API_BASE_URL + "/users";


// Usage

console.log(USER_API);
        `,

        output: `
http://localhost:8080/api/users
        `
    },

    // ============================================================
    // 10. Assets
    // ============================================================

    {
        id: 10,
        module: "projectArchitecture",
        title: "Assets",
        concept: "Static files such as images, icons, fonts and styles",
        difficulty: "Easy",

        theory: `
Assets are static resources used by the application.

Examples:

Images
Icons
Fonts
CSS files
SVG files

A common structure is:

src
└── assets
    ├── images
    ├── icons
    ├── fonts
    └── styles

Keeping assets organized makes the project easier to maintain.
        `,

        example: `
import logo from "./assets/images/logo.png";

function Header() {

    return (
        <header>
            <img src={logo} alt="Logo" />
        </header>
    );
}

export default Header;
        `,

        output: `
[Application Logo]
        `
    },

    // ============================================================
    // 11. Data Files
    // ============================================================

    {
        id: 11,
        module: "projectArchitecture",
        title: "Data files",
        concept: "Files used to store static or initial application data",
        difficulty: "Easy",

        theory: `
Data files are used to store static data separately from components.

They are useful when data does not need to come from an API.

Examples:

Menu items
Navigation links
Product categories
Questions
Course modules
Dropdown options

Example structure:

src
└── data
    ├── users.js
    ├── products.js
    └── questions.js

This keeps UI components clean and makes data easier to modify.
        `,

        example: `
// data/products.js

export const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000
    },
    {
        id: 2,
        name: "Mobile",
        price: 20000
    }
];


// Component

import { products } from "./data/products";

function ProductList() {

    return (
        <div>
            {products.map(product => (
                <p key={product.id}>
                    {product.name} - ₹{product.price}
                </p>
            ))}
        </div>
    );
}

export default ProductList;
        `,

        output: `
Laptop - ₹50000
Mobile - ₹20000
        `
    }

];