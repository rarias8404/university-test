import {combineReducers} from 'redux';
import {students} from "./studentReducer";
import {groups} from "./groupReducer";
import {cities} from "./cityReducer";

const rootReducer = combineReducers({
  students,
  groups,
  cities
});

export default rootReducer;