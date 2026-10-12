import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    completedQuestions: [],
    totalCompleted: 0
};

const progressSlice = createSlice({
    name: "progress",

    initialState,

    reducers: {
        markQuestionCompleted: (state, action) => {

            const questionId = action.payload;

            if (!state.completedQuestions.includes(questionId)) {
                state.completedQuestions.push(questionId);
                state.totalCompleted += 1;
            }
        },

        resetProgress: (state) => {
            state.completedQuestions = [];
            state.totalCompleted = 0;
        }
    }
});

export const {
    markQuestionCompleted,
    resetProgress
} = progressSlice.actions;

export default progressSlice.reducer;