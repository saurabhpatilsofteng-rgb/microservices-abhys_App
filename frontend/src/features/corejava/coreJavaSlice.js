import { createSlice } from "@reduxjs/toolkit";

import { coreJavaModules } from "./coreJavaData";

const initialState = {

    modules: coreJavaModules,

    selectedModule: null,

    selectedTopic: null

};

const coreJavaSlice = createSlice({

    name: "coreJava",

    initialState,

    reducers: {

        selectCoreJavaModule: (state, action) => {

            state.selectedModule = action.payload;

        },

        selectCoreJavaTopic: (state, action) => {

            state.selectedTopic = action.payload;

        }

    }

});

export const {
    selectCoreJavaModule,
    selectCoreJavaTopic
} = coreJavaSlice.actions;

export default coreJavaSlice.reducer;