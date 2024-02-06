import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "../api";

const transactionslice = createSlice({
    name: "transaction",
    initialState: {
        list: [],
        loading: false,
        success: false
    },

    reducers: {
        transactionRequested: (transaction, action) => {
            transaction.loading = true;
            transaction.success = false;
        },

        transactionReceived: (transaction, action) => {
            transaction.list = action.payload;
            transaction.loading = false;
            transaction.success = true;
        },
        transactionADDSuccess: (transaction, action) => {
            transaction.loading = false;
            transaction.success = true;
        },
        transactionDeleteSuccess: (transaction, action) => {
            transaction.loading = false;
            transaction.success = true;
        },
        transactionRequestFailed: (transaction, action) => {
            transaction.loading = false;
        },
    },
});

export default transactionslice.reducer;

export const { transactionRequested, transactionADDSuccess, transactionReceived, transactionClearStates, transactionRequestFailed } = transactionslice.actions;

const url = "/transactions/getAllTransaction";

export const getTransactions = (data) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url,
            data,
            method: 'post',
            onStart: transactionRequested.type,
            onSuccess: transactionReceived.type,
            onError: transactionRequestFailed.type,
        })
    );
};


export const posttransaction = (data) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url: "/transactions/transaction",
            data,
            method: 'post',
            onStart: transactionRequested.type,
            onSuccess: transactionADDSuccess.type,
            onError: transactionRequestFailed.type,
        })
    );
};
export const deleteTransaction = (data) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url: "/transactions/transaction",
            data,
            method: 'delete',
            onStart: transactionRequested.type,
            onSuccess: transactionADDSuccess.type,
            onError: transactionRequestFailed.type,
        })
    );
};