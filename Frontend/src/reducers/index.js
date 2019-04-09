import { combineReducers } from "redux";

import AuthReducer from './AuthReducer'

export default combineReducers(
    {
        dummyStore : () => { return 2019 }
    }
)