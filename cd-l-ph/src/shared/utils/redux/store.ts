'use client';

import { configureStore } from '@reduxjs/toolkit';

import languageReducer from './language/language';
import burgerReducer from './burger/burger';
import serviceReducer from './service/service'

export const store = configureStore({
    reducer: {
        languageReducer,
        burgerReducer,
        serviceReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;