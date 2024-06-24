'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface serviceState {
    activeServiceID: number
}

const initialState: serviceState = {
    activeServiceID: 0
}

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setActiveID: (state, action) => { state.activeServiceID = action.payload}
    }
})

export const { setActiveID } = serviceSlice.actions;

export default serviceSlice.reducer;