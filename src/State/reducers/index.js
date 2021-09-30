import amountReducer from "./amountReducer";
import { combineReducers } from "redux";
const rootreducer= combineReducers({
  amount: amountReducer
});
export default rootreducer;
