import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //the local storage of the window

import portofolioReducer from "./portofolio/portofolio.reducer";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['cart']
};

const rootReducer = combineReducers({
   portofolio: portofolioReducer
});

export default persistReducer(persistConfig, rootReducer);