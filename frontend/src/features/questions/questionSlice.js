    import { createSlice } from "@reduxjs/toolkit";

    import { questions } from "./questionData";

    const initialState = {
        questions: questions,
        selectedQuestion: null
    };

    const questionSlice = createSlice({
        name: "questions",

        initialState,

        reducers: {

            selectQuestion: (state, action) => {
                state.selectedQuestion = action.payload;
            }

        }

    });

    export const {
        selectQuestion
    } = questionSlice.actions;

    export default questionSlice.reducer;