import * as actionTypes from  './actionTypes';
import * as studentApi from '../../api/studentApi';

export const getStudentsSuccess = students => ({
  type: actionTypes.GET_STUDENTS_SUCCESS,
  students
});

export const getStudentsFailed = error => ({
  type: actionTypes.GET_STUDENTS_FAILED,
  error: error.message
});

export const studentsLoading = () => ({
  type: actionTypes.STUDENTS_LOADING
});

export const getStudents = () => dispatch => {
  dispatch(studentsLoading());
  return studentApi.getStudents()
    .then(response => {
      dispatch(getStudentsSuccess(response.data));
    })
    .catch(error => {
      dispatch(getStudentsFailed(error));
    })
};