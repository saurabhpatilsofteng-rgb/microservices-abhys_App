import { createSlice } from "@reduxjs/toolkit";

import {
    javascriptModules
} from "./javascriptData";


const javascriptSlice = createSlice({

    name: "javascript",

    initialState: {

        modules: javascriptModules

    },

    reducers: {}

});


export default javascriptSlice.reducer;