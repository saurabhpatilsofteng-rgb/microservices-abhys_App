import { createSlice } from "@reduxjs/toolkit";

import {
    postgresqlModules
} from "./postgresqlData";


const postgresqlSlice = createSlice({

    name: "postgresql",

    initialState: {

        modules: postgresqlModules

    },

    reducers: {}

});


export default postgresqlSlice.reducer;