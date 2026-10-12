import { createSlice } from "@reduxjs/toolkit";

import {
    jdbcModules
} from "./jdbcData";


const jdbcSlice = createSlice({

    name: "jdbc",

    initialState: {

        modules: jdbcModules

    },

    reducers: {}

});


export default jdbcSlice.reducer;