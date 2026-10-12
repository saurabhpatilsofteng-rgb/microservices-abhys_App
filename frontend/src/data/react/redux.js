export const reduxTopics = [

    // ============================================================
    // 1. What is Redux?
    // ============================================================
    {
        id: 1,
        module: "redux",
        title: "What is Redux?",
        concept: "A predictable state management library for JavaScript applications",
        difficulty: "Easy",

        theory: `
Redux is a state management library used to manage application-wide state.

In React, Redux is commonly used when many components need to
access or update the same data.

Instead of passing data through many components, Redux provides
a central Store.

Basic Redux flow:

Component
    ↓
Dispatch Action
    ↓
Reducer
    ↓
Store State Updated
    ↓
Component Gets New State
        `,

        example: `
import { useSelector } from "react-redux";

function Counter() {

    const count = useSelector(
        state => state.counter.value
    );

    return (
        <h2>Count: {count}</h2>
    );
}

export default Counter;
        `,

        output: `
Count: 0
        `
    },

    // ============================================================
    // 2. Why Redux?
    // ============================================================
    {
        id: 2,
        module: "redux",
        title: "Why Redux?",
        concept: "Managing shared application state in a predictable way",
        difficulty: "Easy",

        theory: `
Redux is useful when application state is shared by many components.

Without Redux:

Parent
 ├── Child
 │    └── GrandChild
 │         └── Component
 └── Another Component

Data may need to be passed through many components.

With Redux:

Component A ──┐
Component B ──┼──> Redux Store
Component C ──┘

Any component can access the required state.

Redux is especially useful for large applications with complex
shared state and many state updates.
        `,

        example: `
const user = {
    name: "Saurabh",
    role: "Developer"
};

// Redux Store can hold this shared state.

console.log(user.name);
        `,

        output: `
Shared State:

name: Saurabh
role: Developer
        `
    },

    // ============================================================
    // 3. Store
    // ============================================================
    {
        id: 3,
        module: "redux",
        title: "Store",
        concept: "The central place that holds Redux application state",
        difficulty: "Easy",

        theory: `
The Store is the central container for Redux state.

It contains the state managed by Redux reducers.

In Redux Toolkit, configureStore() is normally used to create
the Store.

Example:

Store
 ├── counter
 ├── user
 └── products

Components can read data from the Store using useSelector().
        `,

        example: `
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;
        `,

        output: `
Redux Store

{
    counter: {
        value: 0
    }
}
        `
    },

    // ============================================================
    // 4. State
    // ============================================================
    {
        id: 4,
        module: "redux",
        title: "State",
        concept: "Data stored and managed by Redux",
        difficulty: "Easy",

        theory: `
State represents the current data of the application.

Example:

{
    counter: {
        value: 10
    },

    user: {
        name: "Saurabh"
    }
}

Components can read Redux state using useSelector().

State should be updated through Redux actions and reducers rather
than directly modifying the Store.
        `,

        example: `
const initialState = {
    count: 0,
    username: "Saurabh"
};

console.log(initialState.count);
console.log(initialState.username);
        `,

        output: `
0
Saurabh
        `
    },

    // ============================================================
    // 5. Action
    // ============================================================
    {
        id: 5,
        module: "redux",
        title: "Action",
        concept: "An object describing what happened in the application",
        difficulty: "Easy",

        theory: `
An Action describes an event or state change.

An action normally contains a type.

Example:

{
    type: "counter/increment"
}

Actions can also contain additional data in payload.

Example:

{
    type: "user/setUser",
    payload: {
        name: "Saurabh"
    }
}

Actions are dispatched to the Redux Store.
        `,

        example: `
const action = {
    type: "counter/increment"
};

console.log(action);
        `,

        output: `
{
    type: "counter/increment"
}
        `
    },

    // ============================================================
    // 6. Reducer
    // ============================================================
    {
        id: 6,
        module: "redux",
        title: "Reducer",
        concept: "A function that determines how state changes",
        difficulty: "Medium",

        theory: `
A reducer is a function that receives the current state and an
action and determines the next state.

Basic idea:

(state, action) => newState

With Redux Toolkit, reducers inside createSlice() can use
mutating-looking syntax because Immer produces immutable updates
under the hood.

A reducer should be predictable and should not perform API calls
or other side effects.
        `,

        example: `
const counterReducer = (state, action) => {

    if (action.type === "increment") {
        return {
            ...state,
            count: state.count + 1
        };
    }

    return state;
};
        `,

        output: `
Before:

count: 0

Action:

increment

After:

count: 1
        `
    },

    // ============================================================
    // 7. Dispatch
    // ============================================================
    {
        id: 7,
        module: "redux",
        title: "Dispatch",
        concept: "Sending an action to the Redux Store",
        difficulty: "Easy",

        theory: `
dispatch() is used to send an action to Redux.

Flow:

dispatch(action)
      ↓
Reducer
      ↓
State Update
      ↓
Component Re-render
        `,

        example: `
import { useDispatch } from "react-redux";

function CounterButton() {

    const dispatch = useDispatch();

    return (
        <button
            onClick={() =>
                dispatch({
                    type: "counter/increment"
                })
            }
        >
            Increment
        </button>
    );
}

export default CounterButton;
        `,

        output: `
Button clicked

dispatch()
    ↓
Action
    ↓
Reducer
    ↓
count increases
        `
    },

    // ============================================================
    // 8. Selector
    // ============================================================
    {
        id: 8,
        module: "redux",
        title: "Selector",
        concept: "Reading specific data from the Redux Store",
        difficulty: "Easy",

        theory: `
A selector is a function used to read data from Redux state.

Selectors help components access only the state they need.

Example:

state.counter.value

Instead of accessing the complete Store, a component can select
specific data.
        `,

        example: `
import { useSelector } from "react-redux";

function Counter() {

    const count = useSelector(
        state => state.counter.value
    );

    return <h2>{count}</h2>;
}

export default Counter;
        `,

        output: `
Redux State:

{
    counter: {
        value: 10
    }
}

Selected value:

10
        `
    },

    // ============================================================
    // 9. Redux Toolkit
    // ============================================================
    {
        id: 9,
        module: "redux",
        title: "Redux Toolkit",
        concept: "The recommended modern way to write Redux logic",
        difficulty: "Medium",

        theory: `
Redux Toolkit, commonly called RTK, is the official recommended
way to write Redux applications.

It reduces Redux boilerplate and provides useful APIs such as:

- configureStore()
- createSlice()
- createAsyncThunk()
- createEntityAdapter()
- createListenerMiddleware()

Redux Toolkit also uses Immer internally for convenient immutable
state updates inside reducers.

Modern React applications generally use Redux Toolkit instead of
writing Redux logic manually.
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

export default counterSlice.reducer;
        `,

        output: `
Redux Toolkit

Less boilerplate
+
Simpler reducers
+
Better Redux development experience
        `
    },

    // ============================================================
    // 10. configureStore
    // ============================================================
    {
        id: 10,
        module: "redux",
        title: "configureStore",
        concept: "Creating and configuring the Redux Store",
        difficulty: "Medium",

        theory: `
configureStore() is provided by Redux Toolkit.

It creates the Redux Store and automatically configures useful
development features, including middleware and DevTools support
in development.

Reducers are registered inside configureStore().
        `,

        example: `
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice";
import userReducer from "./userSlice";

const store = configureStore({

    reducer: {

        counter: counterReducer,
        user: userReducer

    }

});

export default store;
        `,

        output: `
Redux Store

counter
user
        `
    },

    // ============================================================
    // 11. createSlice
    // ============================================================
    {
        id: 11,
        module: "redux",
        title: "createSlice",
        concept: "Creating Redux state, reducers, and actions together",
        difficulty: "Medium",

        theory: `
createSlice() is one of the most commonly used Redux Toolkit APIs.

It creates:

- State
- Reducer functions
- Action creators
- Action types

from one slice definition.

This significantly reduces Redux boilerplate.
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
        },

        decrement: (state) => {
            state.value -= 1;
        }

    }

});

export const {
    increment,
    decrement
} = counterSlice.actions;

export default counterSlice.reducer;
        `,

        output: `
Actions:

increment()
decrement()

State:

{
    value: 0
}
        `
    },

    // ============================================================
    // 12. createAsyncThunk
    // ============================================================
    {
        id: 12,
        module: "redux",
        title: "createAsyncThunk",
        concept: "Handling asynchronous operations such as API requests",
        difficulty: "Advanced",

        theory: `
createAsyncThunk() is a Redux Toolkit API used for asynchronous
logic such as API calls.

It automatically creates lifecycle actions:

pending
fulfilled
rejected

Typical flow:

createAsyncThunk()
       ↓
pending
       ↓
API Request
       ↓
fulfilled OR rejected
       ↓
Reducer Updates State
        `,

        example: `
import {
    createAsyncThunk
} from "@reduxjs/toolkit";

export const fetchUsers =
    createAsyncThunk(
        "users/fetchUsers",

        async () => {

            const response =
                await fetch(
                    "https://example.com/api/users"
                );

            if (!response.ok) {
                throw new Error(
                    "Failed to fetch users"
                );
            }

            return await response.json();
        }
    );
        `,

        output: `
pending
    ↓
API Request
    ↓
fulfilled

or

pending
    ↓
API Request
    ↓
rejected
        `
    },

    // ============================================================
    // 13. useSelector
    // ============================================================
    {
        id: 13,
        module: "redux",
        title: "useSelector",
        concept: "Reading Redux state inside a React component",
        difficulty: "Easy",

        theory: `
useSelector() is a React-Redux hook used to read data from the
Redux Store.

The selector function receives the entire Redux state.

Example:

useSelector(
    state => state.counter.value
)

When the selected value changes, the component can re-render.
        `,

        example: `
import { useSelector } from "react-redux";

function Counter() {

    const count = useSelector(
        state => state.counter.value
    );

    return (
        <div>
            Count: {count}
        </div>
    );
}

export default Counter;
        `,

        output: `
Count: 5
        `
    },

    // ============================================================
    // 14. useDispatch
    // ============================================================
    {
        id: 14,
        module: "redux",
        title: "useDispatch",
        concept: "Dispatching Redux actions from a React component",
        difficulty: "Easy",

        theory: `
useDispatch() is a React-Redux hook that returns the Redux
dispatch function.

The dispatch function is used to send actions or thunks to Redux.

Example:

dispatch(increment())

For asynchronous Redux logic:

dispatch(fetchUsers())
        `,

        example: `
import {
    useDispatch
} from "react-redux";

import {
    increment
} from "./counterSlice";

function CounterButton() {

    const dispatch = useDispatch();

    return (
        <button
            onClick={() =>
                dispatch(increment())
            }
        >
            Increment
        </button>
    );
}

export default CounterButton;
        `,

        output: `
Click button

    ↓

dispatch(increment())

    ↓

Reducer

    ↓

State updated
        `
    },

    // ============================================================
    // 15. API Calls with Redux
    // ============================================================
    {
        id: 15,
        module: "redux",
        title: "API Calls with Redux",
        concept: "Managing API request state using Redux Toolkit",
        difficulty: "Advanced",

        theory: `
Redux can be used to manage API-related state.

A common pattern is:

Component
    ↓
dispatch(fetchUsers())
    ↓
createAsyncThunk
    ↓
API
    ↓
pending / fulfilled / rejected
    ↓
Reducer
    ↓
Redux State
    ↓
Component

Typical API state contains:

- data
- loading
- error

Redux Toolkit's createAsyncThunk() can be used for many common
request workflows.
        `,

        example: `
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

export const fetchUsers =
    createAsyncThunk(
        "users/fetchUsers",

        async () => {

            const response =
                await fetch(
                    "https://example.com/api/users"
                );

            if (!response.ok) {
                throw new Error(
                    "Failed to fetch users"
                );
            }

            return await response.json();
        }
    );


const userSlice = createSlice({

    name: "users",

    initialState: {
        data: [],
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {

        builder

            .addCase(
                fetchUsers.pending,
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )

            .addCase(
                fetchUsers.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.data = action.payload;
                }
            )

            .addCase(
                fetchUsers.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error =
                        action.error.message;
                }
            );
    }
});

export default userSlice.reducer;
        `,

        output: `
Loading:

Loading users...

Success:

Users displayed

Error:

Failed to fetch users
        `
    },

    // ============================================================
    // 16. Redux vs Context API
    // ============================================================
    {
        id: 16,
        module: "redux",
        title: "Redux vs Context API",
        concept: "Understanding when to use Redux or React Context",
        difficulty: "Medium",

        theory: `
Both Redux and Context API can help share data between components,
but they solve different problems.

Context API is built into React and is useful for passing values
through a component tree without prop drilling.

Common Context examples:

- Theme
- Language
- Current user
- Simple application configuration

Redux is a dedicated state management solution with:

- Centralized state
- Actions
- Reducers
- Middleware
- DevTools
- Structured update patterns
- Strong support for complex state logic

Context is not automatically a replacement for Redux.

Choose based on the complexity and requirements of the application.
        `,

        example: `
/*
Context API

ThemeProvider
    ↓
Navbar
    ↓
Button
*/


/*
Redux

Component
    ↓
dispatch(action)
    ↓
Reducer
    ↓
Redux Store
    ↓
Component
*/
        `,

        output: `
Context API:

Good for simpler shared values

Redux:

Good for complex application state
        `
    }

];