'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface burgerState {
    isOpen: boolean
}

const initialState: burgerState = {
    isOpen: false
}

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        toggleVisibilityPopupBurger: (state) => { state.isOpen = !state.isOpen}
    }
})

export const { toggleVisibilityPopupBurger } = burgerSlice.actions;

export default burgerSlice.reducer;