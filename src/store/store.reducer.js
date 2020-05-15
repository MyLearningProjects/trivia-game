import { combineReducers } 	from "redux";
import questionReducer from "./questions/reducer";

const reducers = combineReducers({
	questions : questionReducer,
});

export default reducers;