import { createSlice } from "@reduxjs/toolkit";

import {
    hibernateModules
} from "./hibernateData";


const hibernateSlice = createSlice({

    name: "hibernate",

    initialState: {

        modules: hibernateModules

    },

    reducers: {}

});


export default hibernateSlice.reducer;