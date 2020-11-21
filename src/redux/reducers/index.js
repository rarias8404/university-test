import {combineReducers} from 'redux';
import {students} from "./studentReducer";
import {groups} from "./groupReducer";
import {cities} from "./cityReducer";
import {professors} from "./professorReducer";

const rootReducer = combineReducers({
  students,
  groups,
  cities,
  professors
});

export default rootReducer;