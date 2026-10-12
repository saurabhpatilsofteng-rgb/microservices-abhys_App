import { createSlice } from "@reduxjs/toolkit";

import {
    unitTestingModules
} from "./unitTestingData";


const unitTestingSlice = createSlice({

    name: "unitTesting",

    initialState: {

        modules: unitTestingModules

    },

    reducers: {}

});


export default unitTestingSlice.reducer;