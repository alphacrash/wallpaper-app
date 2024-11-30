import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    wallpapers: [],
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        addWallpaper: (state, action) => {
            state.wallpapers.push(action.payload);
        },
        resetWallpapers: (state) => {
            state.wallpapers = [];
        }
    },
});

export const { resetWallpapers } = appSlice.actions;

export default appSlice.reducer;