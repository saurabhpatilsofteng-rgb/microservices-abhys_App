import { createSlice } from "@reduxjs/toolkit";

import {
    java8Modules
} from "./java8Data";


const java8Slice = createSlice({

    name: "java8",

    initialState: {

        modules: java8Modules

    },

    reducers: {}

});


export default java8Slice.reducer;