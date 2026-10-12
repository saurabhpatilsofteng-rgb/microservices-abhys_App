import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: []
};

const favoriteSlice = createSlice({
    name: "favorites",

    initialState,

    reducers: {
        addFavorite: (state, action) => {

            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },

        removeFavorite: (state, action) => {

            state.favorites = state.favorites.filter(
                id => id !== action.payload
            );
        }
    }
});

export const {
    addFavorite,
    removeFavorite
} = favoriteSlice.actions;

export default favoriteSlice.reducer;