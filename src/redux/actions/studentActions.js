import * as actionTypes from  './actionTypes';
import * as studentApi from '../../api/studentApi';
import {toastr} from 'react-redux-toastr'

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

export const updateStudentSuccess = student => ({
  type: actionTypes.UPDATE_STUDENT_SUCCESS,
  student
});

export const updateStudentFailed = error => ({
  type: actionTypes.UPDATE_STUDENT_FAILED,
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
        toastr.error('', error.message);
      })
  }
}

export function saveStudent(student) {
  return dispatch => {
    dispatch(studentsLoading());
    if (student.id === null) {
      studentApi.addStudent(student)
        .then(() => {
          dispatch(createStudentSuccess(student));
          toastr.success('', 'Student created successfully');
        })
        .catch(error => {
          dispatch(createStudentFailed(error));
          toastr.error('', 'Error creating student');
        })
    }
    else {
      studentApi.updateStudent(student)
        .then(() => {
          dispatch(updateStudentSuccess(student));
          toastr.success('', 'Student updated successfully');
        })
        .catch(error => {
          dispatch(updateStudentFailed(error));
          toastr.error('', 'Error updating student');
        })
    }
  }
}

export function deleteStudent(id) {
  return dispatch => {
    dispatch(studentsLoading());
    studentApi.deleteStudent(id)
      .then(() => {
        dispatch(deleteStudentSuccess(id));
        toastr.success('', 'Student deleted successfully');
      })
      .catch(error => {
        dispatch(deleteStudentFailed(error));
        toastr.error('', 'Error deleting student');
      })
  }
}