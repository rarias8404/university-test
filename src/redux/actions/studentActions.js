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

export const createStudentSuccess = student => ({
  type: actionTypes.CREATE_STUDENT_SUCCESS,
  student
});

export const createStudentFailed = error => ({
  type: actionTypes.CREATE_STUDENT_FAILED,
  error: error.message
});

export const deleteStudentSuccess = id => ({
  type: actionTypes.DELETE_STUDENT_SUCCESS,
  id
});

export const deleteStudentFailed = error => ({
  type: actionTypes.DELETE_STUDENT_FAILED,
  error: error.message
});

export function getStudents() {
  return dispatch => {
    dispatch(studentsLoading());
    studentApi.getStudents()
      .then(response => {
        dispatch(getStudentsSuccess(response.data));
      })
      .catch(error => {
        dispatch(getStudentsFailed(error));
      })
  }
}

export function saveStudent(student) {
  return dispatch => {
    dispatch(studentsLoading());
    studentApi.addStudent(student)
      .then(() => {
        dispatch(createStudentSuccess(student));
      })
      .catch(error => {
        dispatch(createStudentFailed(error));
      })
  }
}

export function deleteStudent(id) {
  return dispatch => {
    dispatch(studentsLoading());
    studentApi.deleteStudent(id)
      .then(() => {
        dispatch(deleteStudentSuccess(id));
      })
      .catch(error => {
        dispatch(deleteStudentFailed(error));
      })
  }
}