import { createSlice } from "@reduxjs/toolkit";

import {
    springBootModules
} from "./springBootData";


const springBootSlice = createSlice({

    name: "springBoot",

    initialState: {

        modules: springBootModules

    },

    reducers: {}

});


export default springBootSlice.reducer;