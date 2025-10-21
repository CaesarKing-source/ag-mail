import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    appSidebar: true,
    openMail: false,
    activeTab: 'Inbox',
    selectedMail: null,
    isLoading: false
}

export const appSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        // actions
        setAppSidebar: (state, action) => {
            state.appSidebar = action.payload
        },
        setMailOpen: (state, action) => {
            state.openMail = action.payload
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        },
        setSelectedMail: (state, action) => {
            state.selectedMail = action.payload
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload
        }
    }
});

export const { setMailOpen, setActiveTab, setSelectedMail, setIsLoading } = appSlice.actions;
export default appSlice.reducer;