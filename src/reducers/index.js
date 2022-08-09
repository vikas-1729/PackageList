import { combineReducers } from "redux";
import { imageReducer } from "./imageReducer";
import { tickerReducer } from "./tickerReducer";

export default combineReducers({
  image: imageReducer,
  ticker: tickerReducer,
});
