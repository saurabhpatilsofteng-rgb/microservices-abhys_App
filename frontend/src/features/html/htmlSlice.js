import { createSlice } from "@reduxjs/toolkit";

import {
    htmlModules
} from "./htmlData";


const htmlSlice = createSlice({

    name: "html",

    initialState: {

        modules: htmlModules

    },

    reducers: {}

});


export default htmlSlice.reducer;