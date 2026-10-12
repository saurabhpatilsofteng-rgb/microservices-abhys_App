export const formsTopics = [

    // ============================================================
    // 1. REACT FORMS
    // ============================================================

    {
        id: 1,
        module: "forms",
        title: "React Forms",
        concept: "React forms are used to collect and manage user input such as names, emails, passwords, and other information.",
        difficulty: "Easy",

        theory: `
Forms are commonly used in React applications to collect
information from users.

Examples:

- Login forms
- Registration forms
- Contact forms
- Search forms
- Employee forms
- Product forms

A form can contain different input elements such as:

- input
- textarea
- select
- checkbox
- radio buttons
- button

React can manage form values using state.

Example:

const [name, setName] = useState("");

The value entered by the user can be stored in state.
`,

        example: `
import { useState } from "react";

function App() {

    const [name, setName] = useState("");

    return (
        <form>

            <label>Name:</label>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <p>Hello {name}</p>

        </form>
    );
}

export default App;
`,

        output: `
Name: [ Saurabh ]

Hello Saurabh
`
    },


    // ============================================================
    // 2. CONTROLLED COMPONENTS
    // ============================================================

    {
        id: 2,
        module: "forms",
        title: "Controlled Components",
        concept: "A controlled component is a form element whose value is controlled by React state.",
        difficulty: "Easy",

        theory: `
In a controlled component, React state controls the value
of the form input.

The input value is stored in state.

Example:

const [name, setName] = useState("");

The input uses:

value={name}

When the user types, onChange updates the state.

Example:

<input
    value={name}
    onChange={(e) => setName(e.target.value)}
/>

This creates a connection between:

User Input
     ↓
onChange
     ↓
React State
     ↓
Input Value
`,

        example: `
import { useState } from "react";

function App() {

    const [name, setName] = useState("");

    return (
        <div>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <p>Name: {name}</p>

        </div>
    );
}

export default App;
`,

        output: `
Input: Saurabh

Name: Saurabh
`
    },


    // ============================================================
    // 3. UNCONTROLLED COMPONENTS
    // ============================================================

    {
        id: 3,
        module: "forms",
        title: "Uncontrolled Components",
        concept: "An uncontrolled component stores its form value in the DOM instead of React state and is commonly accessed using a ref.",
        difficulty: "Medium",

        theory: `
In an uncontrolled component, the DOM manages the input value.

React does not store the input value in state.

The useRef() Hook can be used to access the input.

Example:

const nameRef = useRef();

The ref is connected to the input:

<input ref={nameRef} />

The value can be accessed using:

nameRef.current.value

Controlled components are generally preferred when the form
needs frequent validation or state-based behavior.
`,

        example: `
import { useRef } from "react";

function App() {

    const nameRef = useRef();

    function handleSubmit(e) {

        e.preventDefault();

        alert(nameRef.current.value);
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="text"
                ref={nameRef}
            />

            <button type="submit">
                Submit
            </button>

        </form>
    );
}

export default App;
`,

        output: `
Input: Saurabh

After Submit:

Saurabh
`
    },


    // ============================================================
    // 4. INPUT HANDLING
    // ============================================================

    {
        id: 4,
        module: "forms",
        title: "Input Handling",
        concept: "Input handling means reading and updating the value entered by the user.",
        difficulty: "Easy",

        theory: `
React uses the onChange event to handle input changes.

Example:

<input
    value={name}
    onChange={(e) => setName(e.target.value)}
/>

The event object contains information about the input.

e.target.value

returns the current input value.

Common input events:

- onChange
- onFocus
- onBlur
- onKeyDown
- onKeyUp

For most React forms, onChange is used to update state.
`,

        example: `
import { useState } from "react";

function App() {

    const [email, setEmail] = useState("");

    function handleChange(e) {

        setEmail(e.target.value);
    }

    return (
        <div>

            <input
                type="email"
                value={email}
                onChange={handleChange}
            />

            <p>Email: {email}</p>

        </div>
    );
}

export default App;
`,

        output: `
Input: saurabh@gmail.com

Email: saurabh@gmail.com
`
    },


    // ============================================================
    // 5. TEXTAREA
    // ============================================================

    {
        id: 5,
        module: "forms",
        title: "Textarea",
        concept: "The textarea element is used to collect multi-line text input in a React form.",
        difficulty: "Easy",

        theory: `
The textarea element is used when the user needs to enter
multiple lines of text.

Examples:

- Address
- Comments
- Description
- Feedback
- Messages

In React, textarea can be controlled using value and onChange.

Example:

<textarea
    value={message}
    onChange={(e) => setMessage(e.target.value)}
/>
`,

        example: `
import { useState } from "react";

function App() {

    const [message, setMessage] = useState("");

    return (
        <div>

            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message"
            />

            <p>{message}</p>

        </div>
    );
}

export default App;
`,

        output: `
Textarea:

Hello React

Displayed:

Hello React
`
    },


    // ============================================================
    // 6. SELECT
    // ============================================================

    {
        id: 6,
        module: "forms",
        title: "Select",
        concept: "The select element allows users to choose an option from a list of options.",
        difficulty: "Easy",

        theory: `
The select element is used to create a dropdown list.

Example:

<select>
    <option>Java</option>
    <option>React</option>
    <option>Angular</option>
</select>

In React, the selected value can be controlled using state.

Example:

<select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
>
`,

        example: `
import { useState } from "react";

function App() {

    const [language, setLanguage] = useState("");

    return (
        <div>

            <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
            >

                <option value="">
                    Select Language
                </option>

                <option value="Java">
                    Java
                </option>

                <option value="React">
                    React
                </option>

                <option value="Angular">
                    Angular
                </option>

            </select>

            <p>Selected: {language}</p>

        </div>
    );
}

export default App;
`,

        output: `
Selected: React
`
    },


    // ============================================================
    // 7. CHECKBOX
    // ============================================================

    {
        id: 7,
        module: "forms",
        title: "Checkbox",
        concept: "A checkbox allows the user to select or deselect a boolean option.",
        difficulty: "Easy",

        theory: `
A checkbox is commonly used for yes/no or true/false values.

Examples:

- Accept terms
- Remember me
- Enable notifications
- Select preferences

For a checkbox, use:

checked

instead of:

value

Example:

<input
    type="checkbox"
    checked={accepted}
    onChange={(e) => setAccepted(e.target.checked)}
/>

e.target.checked returns true or false.
`,

        example: `
import { useState } from "react";

function App() {

    const [accepted, setAccepted] = useState(false);

    return (
        <div>

            <label>

                <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) =>
                        setAccepted(e.target.checked)
                    }
                />

                Accept Terms

            </label>

            <p>
                Accepted: {accepted ? "Yes" : "No"}
            </p>

        </div>
    );
}

export default App;
`,

        output: `
☑ Accept Terms

Accepted: Yes
`
    },


    // ============================================================
    // 8. RADIO BUTTONS
    // ============================================================

    {
        id: 8,
        module: "forms",
        title: "Radio Buttons",
        concept: "Radio buttons allow users to select one option from a group of related options.",
        difficulty: "Easy",

        theory: `
Radio buttons are used when the user should select only one
option.

Example:

- Male / Female
- Online / Offline
- Java / React
- Full Time / Part Time

Radio buttons with the same name belong to the same group.

React can control the selected option using state.

Example:

const [gender, setGender] = useState("");

The checked property can be used to identify the selected
radio button.
`,

        example: `
import { useState } from "react";

function App() {

    const [gender, setGender] = useState("");

    return (
        <div>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={(e) =>
                        setGender(e.target.value)
                    }
                />
                Male
            </label>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={(e) =>
                        setGender(e.target.value)
                    }
                />
                Female
            </label>

            <p>Selected: {gender}</p>

        </div>
    );
}

export default App;
`,

        output: `
○ Male
● Female

Selected: Female
`
    },


    // ============================================================
    // 9. MULTIPLE INPUTS
    // ============================================================

    {
        id: 9,
        module: "forms",
        title: "Multiple Inputs",
        concept: "Multiple inputs can be managed using a single state object and a common change handler.",
        difficulty: "Medium",

        theory: `
A form can contain many input fields.

Example:

- Name
- Email
- Password
- Phone

Instead of creating separate handlers for every input,
we can use one handler.

Example:

const [form, setForm] = useState({
    name: "",
    email: ""
});

The input name attribute identifies which property should
be updated.

Example:

<input
    name="name"
    value={form.name}
    onChange={handleChange}
/>
`,

        example: `
import { useState } from "react";

function App() {

    const [form, setForm] = useState({
        name: "",
        email: ""
    });

    function handleChange(e) {

        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    return (
        <form>

            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
            />

            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
            />

            <p>{form.name}</p>
            <p>{form.email}</p>

        </form>
    );
}

export default App;
`,

        output: `
Name: Saurabh
Email: saurabh@gmail.com
`
    },


    // ============================================================
    // 10. FORM SUBMISSION
    // ============================================================

    {
        id: 10,
        module: "forms",
        title: "Form Submission",
        concept: "Form submission means processing the data entered by the user when the form is submitted.",
        difficulty: "Easy",

        theory: `
Forms are submitted using the onSubmit event.

Example:

<form onSubmit={handleSubmit}>

Inside handleSubmit():

function handleSubmit(e) {

    e.preventDefault();

}

e.preventDefault() prevents the browser from
reloading the page.

After preventing the default behavior, we can:

- Validate data
- Send data to an API
- Save data
- Display a message
`,

        example: `
import { useState } from "react";

function App() {

    const [name, setName] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        alert("Submitted: " + name);
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button type="submit">
                Submit
            </button>

        </form>
    );
}

export default App;
`,

        output: `
Input:

Saurabh

After clicking Submit:

Submitted: Saurabh
`
    },


    // ============================================================
    // 11. FORM VALIDATION
    // ============================================================

    {
        id: 11,
        module: "forms",
        title: "Form Validation",
        concept: "Form validation checks whether the user has entered valid data before the form is submitted.",
        difficulty: "Medium",

        theory: `
Form validation is used to check user input.

Common validation rules:

- Required fields
- Minimum length
- Maximum length
- Email format
- Password length
- Number range

Example:

if (name.trim() === "") {
    return;
}

Validation can happen:

1. While typing
2. When the input loses focus
3. When the form is submitted

Simple React forms can perform validation using
JavaScript conditions.
`,

        example: `
import { useState } from "react";

function App() {

    const [name, setName] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        if (name.trim() === "") {

            setError("Name is required");
            return;
        }

        setError("");
        alert("Form submitted");
    }

    return (
        <form onSubmit={handleSubmit}>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            {error && <p>{error}</p>}

            <button type="submit">
                Submit
            </button>

        </form>
    );
}

export default App;
`,

        output: `
If empty:

Name is required

If valid:

Form submitted
`
    },


    // ============================================================
    // 12. ERROR MESSAGES
    // ============================================================

    {
        id: 12,
        module: "forms",
        title: "Error Messages",
        concept: "Error messages tell the user what is wrong with the entered form data.",
        difficulty: "Easy",

        theory: `
Error messages are displayed when form validation fails.

Example:

const [error, setError] = useState("");

When validation fails:

setError("Email is required");

The message can be displayed conditionally:

{error && <p>{error}</p>}

For multiple fields, an object can store multiple errors.

Example:

const [errors, setErrors] = useState({
    name: "",
    email: ""
});

Good error messages should clearly explain what the
user needs to fix.
`,

        example: `
import { useState } from "react";

function App() {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(e) {

        e.preventDefault();

        if (email.trim() === "") {

            setError("Email is required");
            return;
        }

        setError("");

        alert("Submitted");
    }

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

export default App;
`,

        output: `
Email is required
`
    },


    // ============================================================
    // 13. RESET FORM
    // ============================================================

    {
        id: 13,
        module: "forms",
        title: "Reset Form",
        concept: "Resetting a form means clearing the entered values and returning the form to its initial state.",
        difficulty: "Easy",

        theory: `
A React form can be reset by setting its state back to
the initial values.

Example:

const initialForm = {
    name: "",
    email: ""
};

After submission or when the user clicks Reset:

setForm(initialForm);

This clears the controlled inputs.

For uncontrolled forms, the native form reset method can
also be used.

Example:

e.target.reset();

When using controlled components, resetting React state is
usually the preferred approach.
`,

        example: `
import { useState } from "react";

function App() {

    const initialForm = {
        name: "",
        email: ""
    };

    const [form, setForm] = useState(initialForm);

    function handleChange(e) {

        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value
        });
    }

    function handleReset() {

        setForm(initialForm);
    }

    return (
        <form>

            <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
            />

            <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
            />

            <button
                type="button"
                onClick={handleReset}
            >
                Reset
            </button>

        </form>
    );
}

export default App;
`,

        output: `
Before Reset:

Name: Saurabh
Email: saurabh@gmail.com

After Reset:

Name:
Email:
`
    }

];