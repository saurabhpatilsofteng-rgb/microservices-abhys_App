import { createSlice } from "@reduxjs/toolkit";

import {
    springCoreModules
} from "./springCoreData";


const springCoreSlice = createSlice({

    name: "springCore",

    initialState: {

        modules: springCoreModules

    },

    reducers: {}

});


export default springCoreSlice.reducer;