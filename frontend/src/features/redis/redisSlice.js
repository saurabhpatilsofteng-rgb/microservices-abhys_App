import { createSlice } from "@reduxjs/toolkit";

import {
    redisModules
} from "./redisData";


const redisSlice = createSlice({

    name: "redis",

    initialState: {
        modules: redisModules
    },

    reducers: {}

});


export default redisSlice.reducer;