import { createSlice } from "@reduxjs/toolkit";

import {
    microservicesModules
} from "./microservicesData";


const microservicesSlice = createSlice({

    name: "microservices",

    initialState: {
        modules: microservicesModules
    },

    reducers: {}

});


export default microservicesSlice.reducer;