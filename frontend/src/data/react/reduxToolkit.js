export const reduxToolkitTopics = [

    // ============================================================
    // 1. What is Redux Toolkit?
    // ============================================================
    {
        id: 1,
        module: "reduxToolkit",
        title: "What is Redux Toolkit?",
        concept: "The official recommended way to write Redux logic",
        difficulty: "Easy",

        theory: `
Redux Toolkit (RTK) is the official recommended toolset for
building Redux applications.

It makes Redux easier by reducing boilerplate code.

Redux Toolkit provides useful functions such as:

- configureStore()
- createSlice()
- createAsyncThunk()

Traditional Redux requires more code for actions, action types,
and reducers.

Redux Toolkit combines related Redux logic into simpler structures.

Basic flow:

React Component
      ↓
Dispatch Action
      ↓
Redux Toolkit
      ↓
Reducer
      ↓
Store
      ↓
Updated UI
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

export const {
    increment
} = counterSlice.actions;

export default counterSlice.reducer;
        `,

        output: `
Redux Toolkit

Less boilerplate
      ↓
createSlice()
      ↓
Actions + Reducer
        `
    },

    // ============================================================
    // 2. configureStore
    // ============================================================
    {
        id: 2,
        module: "reduxToolkit",
        title: "configureStore",
        concept: "Creating and configuring the Redux Store",
        difficulty: "Easy",

        theory: `
configureStore() is used to create the Redux Store.

It accepts a reducer configuration and automatically sets up
commonly needed Redux middleware and development tools.

Multiple slice reducers can be combined inside configureStore().

Example structure:

Store
├── counter
├── user
└── products
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
Redux Store created

{
    counter: {...},
    user: {...}
}
        `
    },

    // ============================================================
    // 3. createSlice
    // ============================================================
    {
        id: 3,
        module: "reduxToolkit",
        title: "createSlice",
        concept: "Creating state, reducers, and actions in one place",
        difficulty: "Easy",

        theory: `
createSlice() is one of the most important Redux Toolkit APIs.

It allows you to define:

- Slice name
- Initial state
- Reducers

Redux Toolkit automatically generates action creators and action
types from the reducers.

This keeps Redux code organized and reduces boilerplate.
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
    // 4. reducers
    // ============================================================
    {
        id: 4,
        module: "reduxToolkit",
        title: "Reducers",
        concept: "Functions that define how Redux state changes",
        difficulty: "Medium",

        theory: `
Reducers define the state changes inside a Redux Toolkit slice.

A reducer receives:

state
action

and updates the state.

Redux Toolkit uses Immer internally, so reducer code can use
mutating-looking syntax such as:

state.value += 1

while Redux still produces an immutable state update.

Reducers should be predictable and should not contain API calls
or other side effects.
        `,

        example: `
const counterSlice = createSlice({

    name: "counter",

    initialState: {
        value: 0
    },

    reducers: {

        increment: (state) => {
            state.value += 1;
        },

        addByAmount: (state, action) => {
            state.value += action.payload;
        }

    }

});
        `,

        output: `
Before:

value: 5

Action:

addByAmount(10)

After:

value: 15
        `
    },

    // ============================================================
    // 5. actions
    // ============================================================
    {
        id: 5,
        module: "reduxToolkit",
        title: "Actions",
        concept: "Messages that describe a state change",
        difficulty: "Easy",

        theory: `
An action describes what happened in the application.

When using createSlice(), Redux Toolkit automatically creates
action creators from the reducer names.

Example:

increment()

produces an action similar to:

{
    type: "counter/increment"
}

Actions can also contain data in the payload.
        `,

        example: `
const counterSlice = createSlice({

    name: "counter",

    initialState: {
        value: 0
    },

    reducers: {

        add: (state, action) => {
            state.value += action.payload;
        }

    }

});

export const {
    add
} = counterSlice.actions;


// Component

dispatch(add(10));
        `,

        output: `
Action:

{
    type: "counter/add",
    payload: 10
}

State:

0 → 10
        `
    },

    // ============================================================
    // 6. extraReducers
    // ============================================================
    {
        id: 6,
        module: "reduxToolkit",
        title: "extraReducers",
        concept: "Handling actions generated outside the slice reducers",
        difficulty: "Advanced",

        theory: `
extraReducers is used when a slice needs to respond to actions
that are not defined in its own reducers section.

It is commonly used with createAsyncThunk().

For example:

fetchUsers.pending
fetchUsers.fulfilled
fetchUsers.rejected

can be handled using extraReducers.

This is commonly used for API loading and error states.
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

            return await response.json();
        }
    );


const userSlice = createSlice({

    name: "users",

    initialState: {
        data: [],
        loading: false
    },

    reducers: {},

    extraReducers: (builder) => {

        builder.addCase(
            fetchUsers.pending,
            (state) => {
                state.loading = true;
            }
        );

        builder.addCase(
            fetchUsers.fulfilled,
            (state, action) => {
                state.loading = false;
                state.data = action.payload;
            }
        );

    }

});

export default userSlice.reducer;
        `,

        output: `
API Request

pending
   ↓
Loading: true

fulfilled
   ↓
Loading: false
   ↓
Data stored
        `
    },

    // ============================================================
    // 7. createAsyncThunk
    // ============================================================
    {
        id: 7,
        module: "reduxToolkit",
        title: "createAsyncThunk",
        concept: "Handling asynchronous operations such as API requests",
        difficulty: "Advanced",

        theory: `
createAsyncThunk() is used to create asynchronous Redux logic.

It is commonly used for API requests.

It automatically generates three lifecycle action states:

pending
fulfilled
rejected

Flow:

dispatch(fetchUsers())
        ↓
pending
        ↓
API request
        ↓
fulfilled / rejected

The result can then be handled in extraReducers.
        `,

        example: `
import { createAsyncThunk } from "@reduxjs/toolkit";

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
dispatch(fetchUsers())

       ↓

pending

       ↓

API Call

       ↓

fulfilled
       OR
rejected
        `
    },

    // ============================================================
    // 8. Loading State
    // ============================================================
    {
        id: 8,
        module: "reduxToolkit",
        title: "Loading State",
        concept: "Tracking whether an asynchronous operation is in progress",
        difficulty: "Medium",

        theory: `
Loading state tells the UI that an API request is currently running.

A common state structure is:

{
    data: [],
    loading: false,
    error: null
}

When the request starts:

loading = true

When the request succeeds:

loading = false

The component can use loading to display a loading message,
spinner, or disabled button.
        `,

        example: `
const userSlice = createSlice({

    name: "users",

    initialState: {
        data: [],
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {

        builder.addCase(
            fetchUsers.pending,
            (state) => {
                state.loading = true;
            }
        );

        builder.addCase(
            fetchUsers.fulfilled,
            (state, action) => {
                state.loading = false;
                state.data = action.payload;
            }
        );

    }

});
        `,

        output: `
API Request Started

loading = true

UI:

Loading users...

API Request Completed

loading = false

UI:

Users displayed
        `
    },

    // ============================================================
    // 9. Error State
    // ============================================================
    {
        id: 9,
        module: "reduxToolkit",
        title: "Error State",
        concept: "Storing and displaying API or application errors",
        difficulty: "Medium",

        theory: `
Error state stores information about a failed operation.

A common structure is:

{
    data: [],
    loading: false,
    error: null
}

If an API request fails:

error = "Failed to fetch users"

The React component can read this state and display an error
message to the user.
        `,

        example: `
extraReducers: (builder) => {

    builder.addCase(
        fetchUsers.rejected,
        (state, action) => {

            state.loading = false;

            state.error =
                action.error.message;
        }
    );

}
        `,

        output: `
API Failed

loading = false

error =
"Failed to fetch users"

UI:

Failed to fetch users
        `
    },

    // ============================================================
    // 10. API Integration
    // ============================================================
    {
        id: 10,
        module: "reduxToolkit",
        title: "API Integration",
        concept: "Connecting Redux Toolkit with backend APIs",
        difficulty: "Advanced",

        theory: `
Redux Toolkit can manage the complete API request state.

Typical architecture:

React Component
       ↓
dispatch(fetchUsers())
       ↓
createAsyncThunk
       ↓
Backend API
       ↓
Response
       ↓
extraReducers
       ↓
Redux Store
       ↓
React Component

Redux can store:

- API data
- Loading state
- Error state

For larger applications, Redux Toolkit Query (RTK Query) is also
available and is designed specifically for data fetching and
caching.
        `,

        example: `
import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";

export const fetchProducts =
    createAsyncThunk(
        "products/fetchProducts",

        async () => {

            const response =
                await fetch(
                    "http://localhost:8080/api/products"
                );

            if (!response.ok) {
                throw new Error(
                    "Failed to fetch products"
                );
            }

            return await response.json();
        }
    );


const productSlice = createSlice({

    name: "products",

    initialState: {
        data: [],
        loading: false,
        error: null
    },

    reducers: {},

    extraReducers: (builder) => {

        builder

            .addCase(
                fetchProducts.pending,
                (state) => {
                    state.loading = true;
                    state.error = null;
                }
            )

            .addCase(
                fetchProducts.fulfilled,
                (state, action) => {
                    state.loading = false;
                    state.data = action.payload;
                }
            )

            .addCase(
                fetchProducts.rejected,
                (state, action) => {
                    state.loading = false;
                    state.error =
                        action.error.message;
                }
            );
    }

});

export default productSlice.reducer;
        `,

        output: `
React
   ↓
dispatch(fetchProducts())
   ↓
API
   ↓
Products
   ↓
Redux Store
   ↓
React UI
        `
    },

    // ============================================================
    // 11. Store Structure
    // ============================================================
    {
        id: 11,
        module: "reduxToolkit",
        title: "Store Structure",
        concept: "Organizing Redux Toolkit files and application state",
        difficulty: "Medium",

        theory: `
A good Redux Toolkit project separates slices and store
configuration into different files.

Example project structure:

src/
│
├── app/
│   └── store.js
│
├── features/
│   ├── counter/
│   │   └── counterSlice.js
│   │
│   ├── user/
│   │   └── userSlice.js
│   │
│   └── products/
│       └── productSlice.js
│
├── components/
│
└── App.jsx

The store combines the slice reducers.

Each slice normally manages one feature or domain of the
application.
        `,

        example: `
// app/store.js

import { configureStore } from "@reduxjs/toolkit";

import counterReducer
    from "../features/counter/counterSlice";

import userReducer
    from "../features/user/userSlice";

import productReducer
    from "../features/products/productSlice";


const store = configureStore({

    reducer: {

        counter: counterReducer,

        user: userReducer,

        products: productReducer

    }

});

export default store;


// main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./app/store";

ReactDOM.createRoot(
    document.getElementById("root")
).render(

    <React.StrictMode>

        <Provider store={store}>
            <App />
        </Provider>

    </React.StrictMode>

);
        `,

        output: `
Redux Store

{
    counter: {
        value: 0
    },

    user: {
        data: null
    },

    products: {
        data: [],
        loading: false,
        error: null
    }
}
        `
    }

];