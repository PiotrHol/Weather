import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { authReducer } from "./reducers/authSlice";
import { cityReducer } from "./reducers/citySlice";

const rootReducer = combineReducers({
  auth: authReducer,
  cities: cityReducer,
});

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(rootReducer, composedEnhancer);

export default store;
