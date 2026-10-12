import { createSlice } from "@reduxjs/toolkit";

import {
    jspModules
} from "./jspData";


const jspSlice = createSlice({

    name: "jsp",

    initialState: {

        modules: jspModules

    },

    reducers: {}

});


export default jspSlice.reducer;