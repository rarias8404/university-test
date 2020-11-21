import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: true,
  students: [],
  loadError: null,
  dataError: null
};

export const students = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STUDENTS_SUCCESS:
      return {...state, loading: false, students: action.students, loadError: null}
    case actionTypes.GET_STUDENTS_FAILED:
      return {...state, loading: false, students: [], loadError: action.error}
    case actionTypes.STUDENTS_LOADING:
      return {...state, loading: true, students: [], loadError: null}
    default:
      return state;
  }
};