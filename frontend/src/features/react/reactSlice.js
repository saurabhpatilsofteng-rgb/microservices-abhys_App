import { createSlice } from "@reduxjs/toolkit";

import { reactModules } from "../../data/react/reactData";

const initialState = {

    modules: reactModules

};

const reactSlice = createSlice({

    name: "react",

    initialState,

    reducers: {}

});

export default reactSlice.reducer;