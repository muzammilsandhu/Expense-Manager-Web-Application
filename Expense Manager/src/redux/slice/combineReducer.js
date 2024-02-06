import { combineReducers } from "redux";
import account from './account';
import login from './posts';
import transaction from './transactions';

const appReducer = combineReducers({
    login,
    account,
    transaction
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
