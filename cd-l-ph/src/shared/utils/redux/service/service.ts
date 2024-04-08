'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface ServiceState {
    currentServiceShowed: object,
}

const initialState: ServiceState = {
    currentServiceShowed: {},
}

export const serviceSlice = createSlice({
    name: 'currentServiceShowed',
    initialState,
    reducers: {
        changeCurrentService: (state, action) => { state.currentServiceShowed = action.payload }
    }
})

export const { changeCurrentService } = serviceSlice.actions;

export default serviceSlice.reducer;