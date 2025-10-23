import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: null,
    isAuth: false
}

const userSlice = createSlice({
    name: 'userState',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setIsAuth: (state, action) => {
            state.isAuth = action.payload
        }
    }
});

export const { setUser, setIsAuth } = userSlice.actions;
export default userSlice.reducer;