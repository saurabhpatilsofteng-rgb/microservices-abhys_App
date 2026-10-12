import { createSlice } from "@reduxjs/toolkit";

import { stringModules } from "./stringsData";

const initialState = {

    modules: stringModules,

    selectedModule: null,

    selectedTopic: null

};

const stringsSlice = createSlice({

    name: "strings",

    initialState,

    reducers: {

        selectStringModule: (state, action) => {

            state.selectedModule = action.payload;

        },

        selectStringTopic: (state, action) => {

            state.selectedTopic = action.payload;

        }

    }

});

export const {
    selectStringModule,
    selectStringTopic
} = stringsSlice.actions;

export default stringsSlice.reducer;