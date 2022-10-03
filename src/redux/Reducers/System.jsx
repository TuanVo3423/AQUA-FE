import { createSlice } from "@reduxjs/toolkit";

export const SystemReducer = createSlice({
    name : 'system',
    initialState : {
        isLoading : true,
        isError : false,
        MessageAlert : undefined,
        typeAlert : undefined,
    },
    reducers : {
        setMessageAlert : (state,action) => {
            state.isError = action.payload.kind;
            state.MessageAlert = action.payload.message;
            state.typeAlert = action.payload.type;
        },
        reset : (state,action) => {
            state = state.initialState;
        },
        setIsLoading : (state,action) => {
            state.isLoading = action.payload;
        }
    }
});