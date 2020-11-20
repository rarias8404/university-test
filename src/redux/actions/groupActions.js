import * as actionTypes from  './actionTypes';
import * as groupApi from '../../api/groupApi';

export const getGroupsSuccess = groups => ({
  type: actionTypes.GET_GROUPS_SUCCESS,
  groups
});

export const getStudentsFailed = error => ({
  type: actionTypes.GET_GROUPS_FAILED,
  error: error.message
});

export const groupsLoading = () => ({
  type: actionTypes.GROUPS_LOADING
});

export const getGroups = () => dispatch => {
  dispatch(groupsLoading());
  return groupApi.getGroups()
    .then(response => {
      dispatch(getGroupsSuccess(response.data))
    })
    .catch(error => {
      dispatch(getStudentsFailed(error))
    })
};