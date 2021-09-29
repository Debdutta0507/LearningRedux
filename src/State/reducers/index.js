import amountReducer from "./amountReducer";
import { combineReducers } from "redux";
const rootreducer= combineReducers(
  amountReducer

)
export default rootreducer;