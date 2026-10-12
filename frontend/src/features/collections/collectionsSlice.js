import { createSlice } from "@reduxjs/toolkit";

import {
    collectionsModules
} from "./collectionsData";


const collectionsSlice = createSlice({

    name: "collections",

    initialState: {

        modules: collectionsModules

    },

    reducers: {}

});


export default collectionsSlice.reducer;