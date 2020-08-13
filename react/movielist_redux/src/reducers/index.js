import { combineReducers } from "redux";
import reducers from "../reducers/reducers";

export default combineReducers({
  movies_arr: reducers,
});
