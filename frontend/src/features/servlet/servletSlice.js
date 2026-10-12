import { createSlice } from "@reduxjs/toolkit";

import {
    servletModules
} from "./servletData";


const servletSlice = createSlice({

    name: "servlet",

    initialState: {

        modules: servletModules

    },

    reducers: {}

});


export default servletSlice.reducer;