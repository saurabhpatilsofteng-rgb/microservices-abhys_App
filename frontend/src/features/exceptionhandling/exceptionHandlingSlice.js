import { createSlice } from "@reduxjs/toolkit";

import {
    exceptionHandlingModules
} from "./exceptionHandlingData";


const exceptionHandlingSlice = createSlice({

    name: "exceptionHandling",

    initialState: {

        modules: exceptionHandlingModules

    },

    reducers: {}

});


export default exceptionHandlingSlice.reducer;