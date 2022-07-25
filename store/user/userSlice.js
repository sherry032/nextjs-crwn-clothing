import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers:{
        setCurrentUser(state, action){
            console.log(action.payload)
            state.currentUser = action.payload
        },
        setLoading(state){
            state.isLoading = true
        },
        setError(state, action){
            state.error = action.payload
            state.isLoading = false
        }
    }
})

export const userActions = userSlice.actions
export default userSlice.reducer