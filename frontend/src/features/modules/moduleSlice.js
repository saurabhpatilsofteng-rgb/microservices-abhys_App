import { createSlice } from "@reduxjs/toolkit";

import { modules } from "./moduleData";

const initialState = {
    modules: modules,
    selectedModule: null
};

const moduleSlice = createSlice({
    name: "modules",

    initialState,

    reducers: {
        setModules: (state, action) => {
            state.modules = action.payload;
        },

        selectModule: (state, action) => {
            state.selectedModule = action.payload;
        }
    }
});

export const {
    setModules,
    selectModule
} = moduleSlice.actions;

export default moduleSlice.reducer;