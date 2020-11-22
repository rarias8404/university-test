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
      // return {...state, loading: true, students: [], loadError: null}
      return {...state, loading: true, loadError: null}
    case actionTypes.CREATE_STUDENT_SUCCESS:
      const student = {...action.student};
      student.id = state.students.length + 1;
      return {...state, loading: false, students: [...state.students, student], dataError: null}
    case actionTypes.CREATE_STUDENT_FAILED:
      return {...state, loading: false, dataError: action.error}
    case actionTypes.DELETE_STUDENT_SUCCESS:
      let students = [...state.students];
      students = students.filter(student => parseInt(student.id) !== parseInt(action.id));
      return {...state, loading: false, students, dataError: null}
    default:
      return state;
  }
};