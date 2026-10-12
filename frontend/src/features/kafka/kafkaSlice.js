import { createSlice } from "@reduxjs/toolkit";

import {
    kafkaModules
} from "./kafkaData";


const kafkaSlice = createSlice({

    name: "kafka",

    initialState: {

        modules: kafkaModules

    },

    reducers: {}

});


export default kafkaSlice.reducer;