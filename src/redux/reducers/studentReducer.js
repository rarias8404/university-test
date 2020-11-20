import * as actionTypes from '../actions/actionTypes';
const initialState = {
  loading: true,
  students: [],
  error: false
};

export const students = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STUDENTS_SUCCESS:
      return {...state, loading: false, students: action.students, error: false}
    case actionTypes.GET_STUDENTS_FAILED:
      return {...state, loading: false, students: [], error: true}
    case actionTypes.STUDENTS_LOADING:
      return {...state, loading: true, students: [], error: false}
    default:
      return state;
  }
};