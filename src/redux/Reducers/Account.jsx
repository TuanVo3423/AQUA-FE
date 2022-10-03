import { createSlice } from "@reduxjs/toolkit";

export const AccountReducer = createSlice({
    name: 'account',
    initialState: {
        AccessToken : '',
        registerSuccess : false,
        loginSuccess : false,
        userID : undefined,
        username : undefined,
        password :undefined,
        fullname  : undefined,
        email : undefined,
    },
    reducers: {
        setInfoMoreTimeLogin : (state,action) => {
            state.username = action.payload.username;
            state.loginSuccess = true;
            state.userID = action.payload.id;
        },
        setAccessToken : (state,action) => {
            state.AccessToken = action.payload;
        }
        ,
        registerRequest : (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.fullname = action.payload.fullname;
            state.email = action.payload.email;
        },
        registerSuccess : (state, action) => {
            state.registerSuccess = true;
            state.username = action.payload.username;
            state.password = action.payload.password;
            state.fullname = action.payload.fullname;
            state.email = action.payload.email;
        },
        registerFailure : (state, action) => {
            state.registerSuccess = false;
            
        },
        loginRequest : (state, action) => {
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        loginSuccess : (state, action) => {
            state.loginSuccess = true;
            state.AccessToken = action.payload.accesstoken;
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
        loginFailure : (state, action) => {
            state.loginSuccess = false;
        },
        setLoginState : (state,action) => {
            state.loginSuccess = action.payload;
        },
        signOutRequest : (state, action) => {
            
        },
        signOutSuccess : (state, action) => {
            state.AccessToken = null;
        }
    },
});