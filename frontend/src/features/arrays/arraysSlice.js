import { createSlice } from "@reduxjs/toolkit";

import { arrayModules } from "./arraysData";


const initialState = {

    modules: arrayModules,

    selectedModule: null,

    selectedTopic: null

};


const arraysSlice = createSlice({

    name: "arrays",

    initialState,

    reducers: {

        selectArrayModule: (state, action) => {

            state.selectedModule = action.payload;

        },

        selectArrayTopic: (state, action) => {

            state.selectedTopic = action.payload;

        }

    }

});


export const {
    selectArrayModule,
    selectArrayTopic
} = arraysSlice.actions;


export default arraysSlice.reducer;