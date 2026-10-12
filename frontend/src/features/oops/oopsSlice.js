import { createSlice } from "@reduxjs/toolkit";
import { oopsModules } from "../../data/oops/oopsData";

const initialState = {
    modules: oopsModules
};

const oopsSlice = createSlice({
    name: "oops",
    initialState,
    reducers: {}
});

export default oopsSlice.reducer;