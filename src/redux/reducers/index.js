import {combineReducers} from 'redux';
import {students} from "./studentReducer";
import {groups} from "./groupReducer";
import {cities} from "./cityReducer";
import {professors} from "./professorReducer";
import {reducer as toastrReducer} from 'react-redux-toastr'

const rootReducer = combineReducers({
  students,
  groups,
  cities,
  professors,
  toastr: toastrReducer
});

export default rootReducer;