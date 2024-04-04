'use client';

import { createSlice } from '@reduxjs/toolkit';

export interface LanguageState {
    currentLanguage: object,
    isPopupLanguageShow: boolean,
}

const initialState: LanguageState = {
    currentLanguage: {
        fullName: 'Ukrainian',
        id: 'ukr',
        flagUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Ukraine.svg/510px-Flag_of_Ukraine.svg.png',
        flagIcon: "flag-ukraine",
    },
    isPopupLanguageShow: false,
}

export const languageSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeCurrentLanguage: (state, action) => { state.currentLanguage = action.payload },
        toggleVisibilityPopupLanguage: (state) => { state.isPopupLanguageShow = !state.isPopupLanguageShow}
    }
})

export const { changeCurrentLanguage, toggleVisibilityPopupLanguage } = languageSlice.actions;

export default languageSlice.reducer;