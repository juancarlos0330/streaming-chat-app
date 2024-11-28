import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/authReducer";

const initialState = {};

const rootReducer = combineReducers({
  auth: authReducer,
});

const configureStore = () => {
  return createStore(rootReducer, initialState);
};

export default configureStore;
