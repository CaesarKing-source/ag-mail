import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    appSidebar: true,
    openMail: false,
}

export const appSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        // actions
        setMailOpen: (state, action) => {
            state.openMail = action.payload
        }
    }
});

export const { setMailOpen } = appSlice.actions;
export default appSlice.reducer;