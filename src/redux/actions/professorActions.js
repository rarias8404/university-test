import * as actionTypes from  './actionTypes';
import * as professorApi from '../../api/professorApi';

export const getProfessorsSuccess = professors => ({
  type: actionTypes.GET_PROFESSORS_SUCCESS,
  professors
});

export const getProfessorsFailed = error => ({
  type: actionTypes.GET_PROFESSORS_FAILED,
  error: error.message
});

export const professorsLoading = () => ({
  type: actionTypes.PROFESSORS_LOADING
});

export const getProfessors = () => dispatch => {
  dispatch(professorsLoading());
  return professorApi.getProfessors()
    .then(response => {
      dispatch(getProfessorsSuccess(response.data))
    })
    .catch(error => {
      dispatch(getProfessorsFailed(error))
    })
};