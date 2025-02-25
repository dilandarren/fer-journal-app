import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { jornalSlice } from "./journal/journalSlice";


export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        journal: jornalSlice.reducer,
    },
});