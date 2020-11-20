import * as actionTypes from  './actionTypes';
import * as studentApi from '../../api/studentApi';

export const getStudentsSuccess = students => ({
  type: actionTypes.GET_STUDENTS_SUCCESS,
  students
});

export const getStudentsError = error => ({
  type: actionTypes.GET_STUDENTS_FAILED,
  error
});

export const studentsLoading = () => ({
  type: actionTypes.STUDENTS_LOADING
});

export const getStudents = () => dispatch => {
  dispatch(studentsLoading());
  return studentApi.getStudents()
    .then(response => {
      dispatch(getStudentsSuccess(response.data))
    })
    .catch(error => {
      dispatch(getStudentsError(error))
    })
};