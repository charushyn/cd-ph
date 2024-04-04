'use client';

import { configureStore } from '@reduxjs/toolkit';

import languageReducer from './language/language';
import burgerReducer from './burger/burger';

export const store = configureStore({
    reducer: {
        languageReducer,
        burgerReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;