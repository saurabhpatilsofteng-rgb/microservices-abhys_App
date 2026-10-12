export const testingTopics = [

    // ============================================================
    // 1. Why Testing?
    // ============================================================

    {
        id: 1,
        module: "testing",
        title: "Why testing?",
        concept: "Testing verifies that React application code works correctly",
        difficulty: "Easy",

        theory: `
Testing means checking whether our application behaves as expected.

Testing helps us find bugs before users find them.

For example, in a login application we can test:

- Login form renders correctly
- User can enter username
- User can enter password
- Login button works
- API error is displayed
- Successful login redirects the user

Testing improves application reliability and makes future changes safer.
        `,

        example: `
function add(a, b) {
    return a + b;
}

// Test expectation

expect(add(2, 3)).toBe(5);
        `,

        output: `
Test Passed

Expected: 5
Received: 5
        `
    },

    // ============================================================
    // 2. Unit Testing
    // ============================================================

    {
        id: 2,
        module: "testing",
        title: "Unit testing",
        concept: "Testing a small individual piece of code",
        difficulty: "Easy",

        theory: `
Unit testing means testing a small and independent part of an application.

A unit can be:

- Function
- Utility function
- Calculation
- Validation function

For example, if we have a calculateTotal() function, we can test whether it returns the correct value.

Unit tests are usually fast because they test small pieces of code independently.
        `,

        example: `
function calculateTotal(price, quantity) {
    return price * quantity;
}

test("calculates total price", () => {

    expect(calculateTotal(100, 3))
        .toBe(300);

});
        `,

        output: `
Test Passed

calculateTotal(100, 3)
Expected: 300
Received: 300
        `
    },

    // ============================================================
    // 3. Component Testing
    // ============================================================

    {
        id: 3,
        module: "testing",
        title: "Component testing",
        concept: "Testing React components and their user behavior",
        difficulty: "Easy",

        theory: `
Component testing checks whether a React component behaves correctly.

We can test:

- Component rendering
- Text
- Buttons
- Inputs
- User interactions
- Conditional UI
- Error messages

For example, a Counter component can be tested to verify that clicking the button increases the counter.

React Testing Library is commonly used for React component testing.
        `,

        example: `
function Greeting() {

    return <h1>Hello Saurabh</h1>;
}

test("displays greeting", () => {

    render(<Greeting />);

    expect(
        screen.getByText("Hello Saurabh")
    ).toBeInTheDocument();

});
        `,

        output: `
Hello Saurabh

Test Passed
        `
    },

    // ============================================================
    // 4. Jest
    // ============================================================

    {
        id: 4,
        module: "testing",
        title: "Jest",
        concept: "JavaScript testing framework used to write and run tests",
        difficulty: "Medium",

        theory: `
Jest is a JavaScript testing framework.

It provides features for:

- Writing tests
- Running tests
- Assertions
- Mocking
- Code coverage

Common Jest functions are:

test()
describe()
expect()
beforeEach()
afterEach()

Modern React projects can also use other test runners such as Vitest. Jest is still widely used and is important to understand for interviews and existing projects.
        `,

        example: `
function multiply(a, b) {
    return a * b;
}

test("multiplies two numbers", () => {

    expect(multiply(4, 5))
        .toBe(20);

});
        `,

        output: `
PASS

multiplies two numbers

Expected: 20
Received: 20
        `
    },

    // ============================================================
    // 5. React Testing Library
    // ============================================================

    {
        id: 5,
        module: "testing",
        title: "React Testing Library",
        concept: "Library for testing React components from the user's perspective",
        difficulty: "Medium",

        theory: `
React Testing Library (RTL) is used to test React components.

It encourages testing the application the way a user interacts with it.

Common functions include:

render()
screen.getByText()
screen.getByRole()
screen.getByLabelText()
fireEvent()
userEvent()

The main idea is to test what users can see and do instead of testing React's internal implementation details.
        `,

        example: `
import {
    render,
    screen
} from "@testing-library/react";

function Welcome() {
    return <h1>Welcome</h1>;
}

test("renders welcome message", () => {

    render(<Welcome />);

    expect(
        screen.getByRole("heading", {
            name: "Welcome"
        })
    ).toBeInTheDocument();

});
        `,

        output: `
Welcome

Test Passed
        `
    },

    // ============================================================
    // 6. Rendering Components
    // ============================================================

    {
        id: 6,
        module: "testing",
        title: "Rendering components",
        concept: "Rendering a React component inside a test",
        difficulty: "Easy",

        theory: `
The render() function from React Testing Library renders a React component in the test environment.

After rendering, we can check:

- Text
- Buttons
- Inputs
- Links
- Images
- Other UI elements

We normally use screen to find elements after rendering.
        `,

        example: `
import {
    render,
    screen
} from "@testing-library/react";

function Login() {

    return (
        <div>
            <h1>Login</h1>
            <button>Login</button>
        </div>
    );
}

test("renders login page", () => {

    render(<Login />);

    expect(
        screen.getByRole("heading", {
            name: "Login"
        })
    ).toBeInTheDocument();

    expect(
        screen.getByRole("button", {
            name: "Login"
        })
    ).toBeInTheDocument();

});
        `,

        output: `
Login
[Login]

Test Passed
        `
    },

    // ============================================================
    // 7. Testing Events
    // ============================================================

    {
        id: 7,
        module: "testing",
        title: "Testing events",
        concept: "Testing user interactions such as clicking and typing",
        difficulty: "Medium",

        theory: `
React applications respond to user events.

Examples:

- Click
- Type
- Submit
- Change
- Select

React Testing Library can test these interactions.

For realistic user interactions, @testing-library/user-event is generally preferred over directly calling lower-level event helpers.
        `,

        example: `
import {
    render,
    screen
} from "@testing-library/react";

import userEvent from
    "@testing-library/user-event";

import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>

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

test("increments counter", async () => {

    const user = userEvent.setup();

    render(<Counter />);

    await user.click(
        screen.getByRole("button", {
            name: "Increment"
        })
    );

    expect(
        screen.getByText("Count: 1")
    ).toBeInTheDocument();

});
        `,

        output: `
Before click:

Count: 0

After click:

Count: 1

Test Passed
        `
    },

    // ============================================================
    // 8. Testing API Calls
    // ============================================================

    {
        id: 8,
        module: "testing",
        title: "Testing API calls",
        concept: "Testing how a component behaves when working with backend APIs",
        difficulty: "Medium",

        theory: `
React applications commonly communicate with backend APIs.

We should test different API situations:

- Successful API response
- Loading state
- API error
- Empty response
- Invalid response

Tests should normally avoid depending on a real backend server.

Instead, API requests can be intercepted and mocked using tools such as Mock Service Worker (MSW), or a request function can be mocked directly.
        `,

        example: `
async function getUsers() {

    const response = await fetch(
        "/api/users"
    );

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
}

test("gets users", async () => {

    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve([
                {
                    id: 1,
                    name: "Saurabh"
                }
            ])
        })
    );

    const users = await getUsers();

    expect(users[0].name)
        .toBe("Saurabh");
});
        `,

        output: `
API Response:

[
    {
        id: 1,
        name: "Saurabh"
    }
]

Test Passed
        `
    },

    // ============================================================
    // 9. Mocking
    // ============================================================

    {
        id: 9,
        module: "testing",
        title: "Mocking",
        concept: "Replacing a real dependency with a controlled fake during testing",
        difficulty: "Medium",

        theory: `
Mocking means replacing a real dependency with a fake implementation during a test.

Mocking is useful when we do not want the test to depend on:

- Real API
- Database
- External service
- Browser API
- Time
- Random values

For example, instead of calling a real backend API, we can create a mock response.

This makes tests predictable, fast and independent.
        `,

        example: `
function getUser() {

    return fetch("/api/user")
        .then(response =>
            response.json()
        );
}

test("gets mocked user", async () => {

    const mockUser = {
        id: 1,
        name: "Saurabh"
    };

    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () =>
                Promise.resolve(mockUser)
        })
    );

    const user = await getUser();

    expect(user.name)
        .toBe("Saurabh");

    expect(fetch)
        .toHaveBeenCalledWith("/api/user");
});
        `,

        output: `
Mock API called

User:
Saurabh

Test Passed
        `
    }

];