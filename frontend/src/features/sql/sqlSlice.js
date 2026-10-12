import { createSlice } from "@reduxjs/toolkit";

import {
    sqlModules
} from "./sqlData";


const sqlSlice = createSlice({

    name: "sql",

    initialState: {

        modules: sqlModules

    },

    reducers: {}

});


export default sqlSlice.reducer;