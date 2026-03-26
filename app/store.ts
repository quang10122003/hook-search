import hookReducer from "../features/hookSlice"
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
    reducer:{
        hook : hookReducer
    }
});

export type rootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

