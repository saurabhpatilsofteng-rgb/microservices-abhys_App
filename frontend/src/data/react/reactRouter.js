export const reactRouterTopics = [

    // ============================================================
    // 1. What is React Router?
    // ============================================================
    {
        id: 1,
        module: "reactRouter",
        title: "What is React Router?",
        concept: "Client-side routing in React applications",
        difficulty: "Easy",

        theory: `
React Router is a library used to handle navigation and routing
in React applications.

It allows us to display different components for different URLs
without completely reloading the browser page.

For example:

/             -> Home
/about        -> About
/contact      -> Contact
/products     -> Products

React Router is commonly used to create Single Page Applications (SPA).
        `,

        example: `
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/about"
                    element={<About />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
        `,

        output: `
URL: /

Home Page

URL: /about

About Page
        `
    },

    // ============================================================
    // 2. BrowserRouter
    // ============================================================
    {
        id: 2,
        module: "reactRouter",
        title: "BrowserRouter",
        concept: "Providing routing functionality using browser history",
        difficulty: "Easy",

        theory: `
BrowserRouter is a React Router component that enables routing
using the browser's History API.

It should normally wrap the part of the application that needs
routing.

BrowserRouter keeps the UI synchronized with the current URL.
        `,

        example: `
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function Home() {
    return <h2>Home</h2>;
}

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
        `,

        output: `
Home
        `
    },

    // ============================================================
    // 3. Routes
    // ============================================================
    {
        id: 3,
        module: "reactRouter",
        title: "Routes",
        concept: "Grouping and matching Route components",
        difficulty: "Easy",

        theory: `
Routes is a React Router component used to contain multiple Route
components.

It looks at the current URL and renders the Route whose path matches
the location.

Routes should be used inside a Router such as BrowserRouter.
        `,

        example: `
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

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

export default App;
        `,

        output: `
/

Home

/about

About
        `
    },

    // ============================================================
    // 4. Route
    // ============================================================
    {
        id: 4,
        module: "reactRouter",
        title: "Route",
        concept: "Mapping a URL path to a React component",
        difficulty: "Easy",

        theory: `
Route defines which component should be rendered for a particular URL.

The two commonly used properties are:

path
    Defines the URL pattern.

element
    Defines the React element to render.
        `,

        example: `
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

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

export default App;
        `,

        output: `
/

Home Page

/about

About Page
        `
    },

    // ============================================================
    // 5. Link
    // ============================================================
    {
        id: 5,
        module: "reactRouter",
        title: "Link",
        concept: "Navigating between routes without a full page reload",
        difficulty: "Easy",

        theory: `
Link is a React Router component used to navigate between routes.

It works similarly to an HTML anchor element, but React Router
handles the navigation on the client side.

This helps avoid a full browser page reload.
        `,

        example: `
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

function App() {

    return (
        <BrowserRouter>

            <nav>

                <Link to="/">
                    Home
                </Link>

                {" | "}

                <Link to="/about">
                    About
                </Link>

            </nav>

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

export default App;
        `,

        output: `
Home | About

Click About:

About Page
        `
    },

    // ============================================================
    // 6. NavLink
    // ============================================================
    {
        id: 6,
        module: "reactRouter",
        title: "NavLink",
        concept: "Creating navigation links with active styling",
        difficulty: "Easy",

        theory: `
NavLink is similar to Link, but it provides information about
whether the current route is active.

It is commonly used for navigation menus.

We can use the isActive value to apply different styles to the
currently active link.
        `,

        example: `
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink
} from "react-router-dom";

function Home() {
    return <h2>Home Page</h2>;
}

function About() {
    return <h2>About Page</h2>;
}

function App() {

    return (
        <BrowserRouter>

            <nav>

                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        fontWeight:
                            isActive
                                ? "bold"
                                : "normal"
                    })}
                >
                    Home
                </NavLink>

                {" | "}

                <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                        fontWeight:
                            isActive
                                ? "bold"
                                : "normal"
                    })}
                >
                    About
                </NavLink>

            </nav>

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

export default App;
        `,

        output: `
Home | About

The active route appears bold.
        `
    },

    // ============================================================
    // 7. useNavigate
    // ============================================================
    {
        id: 7,
        module: "reactRouter",
        title: "useNavigate",
        concept: "Navigating programmatically",
        difficulty: "Medium",

        theory: `
useNavigate is a React Router Hook used to navigate to another
route using JavaScript.

It is useful when navigation should happen after an action.

Examples:
- After login
- After form submission
- After saving data
- After logout
        `,

        example: `
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const handleLogin = () => {

        // Login logic

        navigate("/dashboard");
    };

    return (
        <button onClick={handleLogin}>
            Login
        </button>
    );
}

export default Login;
        `,

        output: `
Click Login:

URL changes to:

/dashboard
        `
    },

    // ============================================================
    // 8. useParams
    // ============================================================
    {
        id: 8,
        module: "reactRouter",
        title: "useParams",
        concept: "Reading dynamic route parameters",
        difficulty: "Medium",

        theory: `
useParams is a React Router Hook used to read parameters from
the current URL.

For example:

/users/:userId

If the URL is:

/users/101

Then userId will be:

101
        `,

        example: `
import {
    BrowserRouter,
    Routes,
    Route,
    useParams
} from "react-router-dom";

function User() {

    const { userId } = useParams();

    return (
        <h2>
            User ID: {userId}
        </h2>
    );
}

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/users/:userId"
                    element={<User />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
        `,

        output: `
URL:

/users/101

Output:

User ID: 101
        `
    },

    // ============================================================
    // 9. useLocation
    // ============================================================
    {
        id: 9,
        module: "reactRouter",
        title: "useLocation",
        concept: "Accessing the current location information",
        difficulty: "Medium",

        theory: `
useLocation is a React Router Hook that gives information about
the current URL location.

The returned location object can contain:

pathname
    Current path.

search
    Query string.

hash
    URL hash.

It is useful when a component needs to react to URL changes.
        `,

        example: `
import { useLocation } from "react-router-dom";

function CurrentPage() {

    const location = useLocation();

    return (
        <div>

            <p>
                Path: {location.pathname}
            </p>

            <p>
                Query: {location.search}
            </p>

        </div>
    );
}

export default CurrentPage;
        `,

        output: `
URL:

/products?page=2

Output:

Path: /products
Query: ?page=2
        `
    },

    // ============================================================
    // 10. Nested Routes
    // ============================================================
    {
        id: 10,
        module: "reactRouter",
        title: "Nested Routes",
        concept: "Creating routes inside another route",
        difficulty: "Medium",

        theory: `
Nested routes are routes defined inside another route.

They are useful when a page has multiple child pages.

Example:

/dashboard
/dashboard/profile
/dashboard/settings

The parent component can use Outlet to display the matched child route.
        `,

        example: `
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";

function Dashboard() {

    return (
        <div>

            <h2>Dashboard</h2>

            <Link to="profile">
                Profile
            </Link>

            {" | "}

            <Link to="settings">
                Settings
            </Link>

            <Outlet />

        </div>
    );
}

function Profile() {
    return <h3>Profile</h3>;
}

function Settings() {
    return <h3>Settings</h3>;
}

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                >

                    <Route
                        path="profile"
                        element={<Profile />}
                    />

                    <Route
                        path="settings"
                        element={<Settings />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;
        `,

        output: `
/dashboard

Dashboard

/dashboard/profile

Dashboard
Profile

/dashboard/settings

Dashboard
Settings
        `
    },

    // ============================================================
    // 11. Dynamic Routes
    // ============================================================
    {
        id: 11,
        module: "reactRouter",
        title: "Dynamic Routes",
        concept: "Creating routes that change based on URL values",
        difficulty: "Medium",

        theory: `
Dynamic routes allow one Route definition to handle many URLs.

A dynamic segment starts with a colon (:).

Example:

/products/:productId

This route can match:

/products/101
/products/102
/products/500

The value can be read using useParams.
        `,

        example: `
import {
    BrowserRouter,
    Routes,
    Route,
    useParams
} from "react-router-dom";

function Product() {

    const { productId } = useParams();

    return (
        <h2>
            Product: {productId}
        </h2>
    );
}

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/products/:productId"
                    element={<Product />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
        `,

        output: `
URL:

/products/101

Output:

Product: 101
        `
    },

    // ============================================================
    // 12. Route Parameters
    // ============================================================
    {
        id: 12,
        module: "reactRouter",
        title: "Route Parameters",
        concept: "Passing values through dynamic URL segments",
        difficulty: "Medium",

        theory: `
Route parameters are dynamic values included in a URL path.

Example:

/users/:userId

Here userId is a route parameter.

For:

/users/25

userId = 25

Route parameters are commonly used for:
- User IDs
- Product IDs
- Order IDs
- Post IDs
- Question IDs
        `,

        example: `
<Route
    path="/users/:userId"
    element={<User />}
/>


function User() {

    const { userId } = useParams();

    return (
        <h2>
            User ID: {userId}
        </h2>
    );
}
        `,

        output: `
URL:

/users/25

Route parameter:

userId = 25
        `
    },

    // ============================================================
    // 13. Query Parameters
    // ============================================================
    {
        id: 13,
        module: "reactRouter",
        title: "Query Parameters",
        concept: "Reading values from the URL query string",
        difficulty: "Medium",

        theory: `
Query parameters are values added after ? in a URL.

Example:

/products?category=mobile&page=2

Here:

category = mobile
page = 2

React Router provides useSearchParams for reading and updating
query parameters.
        `,

        example: `
import { useSearchParams } from "react-router-dom";

function Products() {

    const [searchParams] = useSearchParams();

    const category =
        searchParams.get("category");

    const page =
        searchParams.get("page");

    return (
        <div>

            <p>
                Category: {category}
            </p>

            <p>
                Page: {page}
            </p>

        </div>
    );
}

export default Products;
        `,

        output: `
URL:

/products?category=mobile&page=2

Output:

Category: mobile
Page: 2
        `
    },

    // ============================================================
    // 14. Protected Routes
    // ============================================================
    {
        id: 14,
        module: "reactRouter",
        title: "Protected Routes",
        concept: "Restricting access to authenticated users",
        difficulty: "Advanced",

        theory: `
A Protected Route is a route that can only be accessed when a user
satisfies an authentication condition.

For example:

If user is logged in:
    Allow /dashboard

If user is not logged in:
    Redirect to /login

Protected routes are commonly used for:
- Dashboards
- Admin pages
- Profile pages
- Account pages
        `,

        example: `
import {
    Navigate,
    Outlet
} from "react-router-dom";

function ProtectedRoute({ isAuthenticated }) {

    if (!isAuthenticated) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    return <Outlet />;
}

export default ProtectedRoute;
        `,

        output: `
Not authenticated:

/dashboard

Redirects to:

/login


Authenticated:

/dashboard

Dashboard is displayed.
        `
    },

    // ============================================================
    // 15. 404 Page
    // ============================================================
    {
        id: 15,
        module: "reactRouter",
        title: "404 Page",
        concept: "Handling URLs that do not match any route",
        difficulty: "Easy",

        theory: `
A 404 page is displayed when the user visits a URL for which there
is no matching route.

React Router supports a catch-all route using:

*

The * path can be used to display a Not Found page.
        `,

        example: `
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function Home() {
    return <h2>Home Page</h2>;
}

function NotFound() {
    return <h2>404 - Page Not Found</h2>;
}

function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;
        `,

        output: `
Unknown URL:

/abc

Output:

404 - Page Not Found
        `
    },

    // ============================================================
    // 16. Navigation
    // ============================================================
    {
        id: 16,
        module: "reactRouter",
        title: "Navigation",
        concept: "Moving between pages or routes in a React application",
        difficulty: "Easy",

        theory: `
Navigation means moving from one route to another.

React Router provides several ways to navigate:

1. Link
   Used for normal navigation.

2. NavLink
   Used for navigation with active state.

3. useNavigate
   Used for programmatic navigation.

4. Navigate
   Used to redirect from a component.

Examples:

Link:
<Link to="/about">About</Link>

Programmatic:
navigate("/dashboard")

Redirect:
<Navigate to="/login" />
        `,

        example: `
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useNavigate
} from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (
        <div>

            <h2>Home Page</h2>

            <Link to="/about">
                Go to About
            </Link>

            <br />

            <button
                onClick={() => navigate("/about")}
            >
                Navigate to About
            </button>

        </div>
    );
}

function About() {
    return <h2>About Page</h2>;
}

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

export default App;
        `,

        output: `
Home Page

Go to About

Navigate to About

Click either option:

About Page
        `
    }

];