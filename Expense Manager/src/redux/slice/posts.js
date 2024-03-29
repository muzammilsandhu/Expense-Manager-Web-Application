import { createSlice } from "@reduxjs/toolkit";
import { storeInLocal } from "../../utils/getfromlocal";
import { apiCallBegan } from "../api";

const slice = createSlice({
    name: "login",
    initialState: {
        list: [],
        loading: false,
        success: false
    },

    reducers: {
        loginRequested: (login, action) => {
            login.loading = true;
            login.success = false;
        },

        loginReceived: (login, action) => {
            login.list = action.payload;
            login.loading = false;
            login.success = true;
            storeInLocal('userId', action.payload?.emailExists?._id)
            storeInLocal('token', true)
        },

        loginRequestFailed: (login, action) => {
            login.loading = false;
        },
        registerRequestsuccess: (login, action) => {
            login.loading = false;
        },
        loginClearStates: (state, action) => {
            state.list = [];
            state.loading = false;
            state.success = false;
        }
    },
});

export default slice.reducer;

export const { loginRequested, loginReceived, registerRequestsuccess, loginClearStates, loginRequestFailed } = slice.actions;

const url = "/user/login";

export const loadlogin = (data) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            data,
            method: 'post',
            onStart: loginRequested.type,
            onSuccess: loginReceived.type,
            onError: loginRequestFailed.type,
        })
    );
};
export const RegisterUser = (data) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url:'/user/register',
            data,
            method: 'post',
            onStart: loginRequested.type,
            onSuccess: registerRequestsuccess.type,
            onError: loginRequestFailed.type,
        })
    );
};