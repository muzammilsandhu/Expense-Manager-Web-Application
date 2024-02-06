import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const Accountslice = createSlice({
    name: "account",
    initialState: {
        list: [],
        loading: false,
        success: false
    },

    reducers: {
        accountRequested: (account, action) => {
            account.loading = true;
            account.success = false;
        },

        accountReceived: (account, action) => {
            account.list = action.payload;
            account.loading = false;
            account.success = true;
        },

        accountRequestFailed: (account, action) => {
            account.loading = false;
        },
        accountClearStates: (state, action) => {
            state.list = [];
            state.loading = false;
            state.success = false;
        }
    },
});

export default Accountslice.reducer;

export const { accountRequested, accountReceived, accountClearStates, accountRequestFailed } = Accountslice.actions;

const url = "/accounts/account";

export const getAccount = (data) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            data,
            method: 'get',
            onStart: accountRequested.type,
            onSuccess: accountReceived.type,
            onError: accountRequestFailed.type,
        })
    );
};

export const postAccount = (data) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            data,
            method: 'post',
            onStart: accountRequested.type,
            onSuccess: accountReceived.type,
            onError: accountRequestFailed.type,
        })
    );
};