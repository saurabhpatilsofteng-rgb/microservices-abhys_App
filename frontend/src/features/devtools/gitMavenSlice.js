import { createSlice } from "@reduxjs/toolkit";

import {
    gitMavenModules
} from "./gitMavenData";


const gitMavenSlice = createSlice({

    name: "gitMaven",

    initialState: {

        modules: gitMavenModules

    },

    reducers: {}

});


export default gitMavenSlice.reducer;