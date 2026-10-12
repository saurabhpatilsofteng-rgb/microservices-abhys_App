import { createSlice } from "@reduxjs/toolkit";

import {
    multithreadingModules
} from "./multithreadingData";


const multithreadingSlice = createSlice({

    name: "multithreading",

    initialState: {

        modules: multithreadingModules

    },

    reducers: {}

});


export default multithreadingSlice.reducer;