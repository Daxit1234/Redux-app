import { createStoreHook } from "react-redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer";

export const store=createStoreHook(reducers,{},applyMiddleware(thunk))