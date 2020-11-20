import {combineReducers} from 'redux';
import {students} from "./studentReducer";
import {groups} from "./groupReducer";

const rootReducer = combineReducers({
  students,
  groups
});

export default rootReducer;