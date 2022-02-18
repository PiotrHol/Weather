import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authSlice";
import { cityReducer } from "./reducers/citySlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cities: cityReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
