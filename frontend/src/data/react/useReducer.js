export const useReducerTopics = [

    // ============================================================
    // 1. WHAT IS USEREDUCER?
    // ============================================================

    {
        id: 1,
        module: "useReducer",
        title: "What is useReducer?",
        concept: "useReducer is a React Hook used to manage state using a reducer function and actions, especially when state logic becomes complex.",
        difficulty: "Easy",

        theory: `
useReducer is a React Hook used for managing state.

It is an alternative to useState.

Syntax:

const [state, dispatch] =
    useReducer(reducer, initialState);

useReducer mainly uses three things:

1. State
2. Action
3. Reducer

The basic flow is:

User Action
    ↓
dispatch()
    ↓
Reducer
    ↓
New State
    ↓
Component Re-renders

useReducer is useful when:

- State has multiple values
- State has multiple actions
- State update logic is complex
- Multiple actions modify the same state
`,

        example: `
import {
    useReducer
} from "react";

function reducer(state, action) {

    if (action.type === "increment") {
        return {
            count: state.count + 1
        };
    }

    return state;
}

function App() {

    const [state, dispatch] =
        useReducer(reducer, {
            count: 0
        });

    return (
        <div>

            <h2>
                Count: {state.count}
            </h2>

            <button
                onClick={() =>
                    dispatch({
                        type: "increment"
                    })
                }
            >
                Increment
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Count: 0

Click Increment:

Count: 1

Click again:

Count: 2
`
    },


    // ============================================================
    // 2. REDUCER FUNCTION
    // ============================================================

    {
        id: 2,
        module: "useReducer",
        title: "Reducer Function",
        concept: "A reducer function receives the current state and an action, then returns the new state.",
        difficulty: "Easy",

        theory: `
A reducer is a normal JavaScript function.

It receives two parameters:

1. state
2. action

Syntax:

function reducer(state, action) {

    // state update logic

    return newState;
}

The reducer decides how the state should change
based on action.type.

Example:

function reducer(state, action) {

    switch (action.type) {

        case "increment":
            return {
                count: state.count + 1
            };

        default:
            return state;
    }
}

Important:

A reducer should normally be a pure function.

It should:

- Use the current state
- Read the action
- Return the next state
- Avoid side effects
`,

        example: `
function reducer(state, action) {

    switch (action.type) {

        case "increment":
            return {
                count: state.count + 1
            };

        case "decrement":
            return {
                count: state.count - 1
            };

        default:
            return state;
    }
}

export default reducer;
`,

        output: `
If state is:

{
    count: 5
}

Action:

{
    type: "increment"
}

New state:

{
    count: 6
}
`
    },


    // ============================================================
    // 3. STATE
    // ============================================================

    {
        id: 3,
        module: "useReducer",
        title: "State",
        concept: "State is the data managed by useReducer, and the reducer uses the current state to calculate the next state.",
        difficulty: "Easy",

        theory: `
State contains the current data of the component.

Example:

const initialState = {
    count: 0
};

useReducer returns the current state:

const [state, dispatch] =
    useReducer(
        reducer,
        initialState
    );

The state can be accessed using:

state.count

When dispatch() is called, the reducer receives
the current state and returns a new state.

Example:

Current State
{
    count: 0
}

Action
{
    type: "increment"
}

New State
{
    count: 1
}
`,

        example: `
import {
    useReducer
} from "react";

function reducer(state, action) {

    return {
        count: state.count + 1
    };
}

function App() {

    const [state, dispatch] =
        useReducer(
            reducer,
            {
                count: 0
            }
        );

    return (
        <div>

            <h2>
                Count: {state.count}
            </h2>

            <button
                onClick={() => dispatch()}
            >
                Increase
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Count: 0

Click Increase:

Count: 1
`
    },


    // ============================================================
    // 4. ACTION
    // ============================================================

    {
        id: 4,
        module: "useReducer",
        title: "Action",
        concept: "An action is an object that describes what change should happen to the state.",
        difficulty: "Easy",

        theory: `
An action tells the reducer what operation should
be performed.

A common action structure is:

{
    type: "increment"
}

The type identifies the operation.

Examples:

{
    type: "increment"
}

{
    type: "decrement"
}

{
    type: "reset"
}

An action can also contain additional data.

Example:

{
    type: "add",
    payload: 10
}

The reducer can read the payload:

action.payload
`,

        example: `
function reducer(state, action) {

    switch (action.type) {

        case "add":
            return {
                count:
                    state.count +
                    action.payload
            };

        default:
            return state;
    }
}

const action = {
    type: "add",
    payload: 5
};
`,

        output: `
Current state:

count: 10

Action:

{
    type: "add",
    payload: 5
}

New state:

count: 15
`
    },


    // ============================================================
    // 5. DISPATCH
    // ============================================================

    {
        id: 5,
        module: "useReducer",
        title: "Dispatch",
        concept: "dispatch is a function returned by useReducer that sends an action to the reducer.",
        difficulty: "Easy",

        theory: `
dispatch() is used to tell the reducer that a state
change should happen.

Syntax:

dispatch(action);

Example:

dispatch({
    type: "increment"
});

The flow is:

dispatch()
    ↓
Action
    ↓
Reducer
    ↓
New State

Example:

dispatch({
    type: "add",
    payload: 10
});

The reducer receives:

state
action

and returns the new state.

You normally do not modify reducer state directly.
You dispatch an action instead.
`,

        example: `
import {
    useReducer
} from "react";

function reducer(state, action) {

    switch (action.type) {

        case "increment":
            return {
                count: state.count + 1
            };

        default:
            return state;
    }
}

function App() {

    const [state, dispatch] =
        useReducer(reducer, {
            count: 0
        });

    return (
        <div>

            <h2>
                Count: {state.count}
            </h2>

            <button
                onClick={() =>
                    dispatch({
                        type: "increment"
                    })
                }
            >
                Increment
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Count: 0

After clicking:

Count: 1

dispatch() sent the increment action
to the reducer.
`
    },


    // ============================================================
    // 6. INITIAL STATE
    // ============================================================

    {
        id: 6,
        module: "useReducer",
        title: "Initial State",
        concept: "Initial state is the starting value of the state when useReducer initializes the component.",
        difficulty: "Easy",

        theory: `
The initial state contains the starting data.

Example:

const initialState = {
    count: 0,
    name: "Saurabh"
};

It is passed to useReducer():

const [state, dispatch] =
    useReducer(
        reducer,
        initialState
    );

The initial state is available when the component
first renders.

For complex state, using an object makes it easy
to manage related values.

Example:

const initialState = {
    count: 0,
    loading: false,
    error: null
};
`,

        example: `
import {
    useReducer
} from "react";

const initialState = {
    count: 0,
    name: "Saurabh"
};

function reducer(state, action) {

    return state;
}

function App() {

    const [state, dispatch] =
        useReducer(
            reducer,
            initialState
        );

    return (
        <div>

            <h2>
                Name: {state.name}
            </h2>

            <h2>
                Count: {state.count}
            </h2>

        </div>
    );
}

export default App;
`,

        output: `
Name: Saurabh
Count: 0
`
    },


    // ============================================================
    // 7. MULTIPLE ACTIONS
    // ============================================================

    {
        id: 7,
        module: "useReducer",
        title: "Multiple Actions",
        concept: "A reducer can handle multiple action types to manage different state updates in one place.",
        difficulty: "Medium",

        theory: `
One reducer can handle multiple actions.

Common actions include:

- increment
- decrement
- reset
- add
- remove
- update

Example:

function reducer(state, action) {

    switch (action.type) {

        case "increment":
            return {
                count: state.count + 1
            };

        case "decrement":
            return {
                count: state.count - 1
            };

        case "reset":
            return {
                count: 0
            };

        default:
            return state;
    }
}

Different buttons can dispatch different actions.

This keeps state update logic in one place.
`,

        example: `
import {
    useReducer
} from "react";

function reducer(state, action) {

    switch (action.type) {

        case "increment":
            return {
                count: state.count + 1
            };

        case "decrement":
            return {
                count: state.count - 1
            };

        case "reset":
            return {
                count: 0
            };

        default:
            return state;
    }
}

function App() {

    const [state, dispatch] =
        useReducer(reducer, {
            count: 0
        });

    return (
        <div>

            <h2>
                Count: {state.count}
            </h2>

            <button
                onClick={() =>
                    dispatch({
                        type: "increment"
                    })
                }
            >
                +
            </button>

            <button
                onClick={() =>
                    dispatch({
                        type: "decrement"
                    })
                }
            >
                -
            </button>

            <button
                onClick={() =>
                    dispatch({
                        type: "reset"
                    })
                }
            >
                Reset
            </button>

        </div>
    );
}

export default App;
`,

        output: `
Count: 0

Click +:

Count: 1

Click +:

Count: 2

Click -:

Count: 1

Click Reset:

Count: 0
`
    },


    // ============================================================
    // 8. USEREDUCER VS USESTATE
    // ============================================================

    {
        id: 8,
        module: "useReducer",
        title: "useReducer vs useState",
        concept: "useState is simpler for basic state management, while useReducer is useful when state logic involves multiple related values or actions.",
        difficulty: "Medium",

        theory: `
Both useState and useReducer manage component state.

useState:

- Simple
- Easy to understand
- Good for simple state
- Directly updates state using setter functions

Example:

const [count, setCount] =
    useState(0);

setCount(count + 1);


useReducer:

- Uses reducer logic
- Uses actions
- Uses dispatch
- Good for complex state logic
- Keeps state update logic in one place

Example:

const [state, dispatch] =
    useReducer(
        reducer,
        initialState
    );

dispatch({
    type: "increment"
});


Simple rule:

Simple state
    ↓
useState

Complex state logic
    ↓
useReducer
`,

        example: `
/*
useState
*/

const [count, setCount] =
    useState(0);

setCount(count + 1);


/*
useReducer
*/

const [state, dispatch] =
    useReducer(
        reducer,
        {
            count: 0
        }
    );

dispatch({
    type: "increment"
});
`,

        output: `
useState:

Simple and direct state updates.

useReducer:

State updates are handled using
actions and a reducer.
`
    },


    // ============================================================
    // 9. REAL-WORLD EXAMPLES
    // ============================================================

    {
        id: 9,
        module: "useReducer",
        title: "Real-world Examples",
        concept: "useReducer is useful for complex UI state such as shopping carts, forms, authentication flows, and loading/error states.",
        difficulty: "Medium",

        theory: `
useReducer is commonly used when an application has
multiple related state changes.

Real-world examples:

1. Shopping Cart

Actions:

- ADD_ITEM
- REMOVE_ITEM
- UPDATE_QUANTITY
- CLEAR_CART


2. Form Management

Actions:

- CHANGE_INPUT
- SUBMIT
- SUCCESS
- ERROR
- RESET


3. API State

State:

{
    data: null,
    loading: false,
    error: null
}

Actions:

- FETCH_START
- FETCH_SUCCESS
- FETCH_ERROR


4. Authentication

Actions:

- LOGIN
- LOGOUT
- SESSION_EXPIRED


5. Complex UI

Actions:

- OPEN_MODAL
- CLOSE_MODAL
- NEXT_STEP
- PREVIOUS_STEP

The main advantage is that all related state
transition logic can be organized inside the reducer.
`,

        example: `
import {
    useReducer
} from "react";

const initialState = {
    loading: false,
    data: null,
    error: null
};

function reducer(state, action) {

    switch (action.type) {

        case "FETCH_START":

            return {
                ...state,
                loading: true,
                error: null
            };

        case "FETCH_SUCCESS":

            return {
                loading: false,
                data: action.payload,
                error: null
            };

        case "FETCH_ERROR":

            return {
                loading: false,
                data: null,
                error: action.payload
            };

        default:

            return state;
    }
}

function App() {

    const [state, dispatch] =
        useReducer(
            reducer,
            initialState
        );

    function loadData() {

        dispatch({
            type: "FETCH_START"
        });

        setTimeout(() => {

            dispatch({
                type: "FETCH_SUCCESS",
                payload: "Data Loaded"
            });

        }, 1000);
    }

    return (
        <div>

            <button onClick={loadData}>
                Load Data
            </button>

            {state.loading && (
                <p>Loading...</p>
            )}

            {state.data && (
                <p>{state.data}</p>
            )}

            {state.error && (
                <p>{state.error}</p>
            )}

        </div>
    );
}

export default App;
`,

        output: `
Initial:

[ Load Data ]

Click Load Data:

Loading...

After 1 second:

Data Loaded
`
    }

];