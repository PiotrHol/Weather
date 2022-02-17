import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/authSlice";

const store = createStore(authReducer, composeWithDevTools());

export default store;
