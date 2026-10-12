import { createSlice } from "@reduxjs/toolkit";

import {
    securityModules
} from "./securityData";


const securitySlice = createSlice({

    name: "security",

    initialState: {

        modules: securityModules

    },

    reducers: {}

});


export default securitySlice.reducer;