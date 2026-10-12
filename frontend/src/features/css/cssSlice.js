import { createSlice } from "@reduxjs/toolkit";

import {
    cssModules
} from "./cssData";


const cssSlice = createSlice({

    name: "css",

    initialState: {

        modules: cssModules

    },

    reducers: {}

});


export default cssSlice.reducer;