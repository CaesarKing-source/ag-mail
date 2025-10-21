import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    appSidebar: true,
    openMail: false,
    activeTab: 'Inbox'
}

export const appSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        // actions
        setMailOpen: (state, action) => {
            state.openMail = action.payload
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        }
    }
});

export const { setMailOpen, setActiveTab } = appSlice.actions;
export default appSlice.reducer;