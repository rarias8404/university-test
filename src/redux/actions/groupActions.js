import * as actionTypes from  './actionTypes';
import * as groupApi from '../../api/groupApi';
import {toastr} from "react-redux-toastr";

export const getGroupsSuccess = groups => ({
  type: actionTypes.GET_GROUPS_SUCCESS,
  groups
});

export const getGroupsFailed = error => ({
  type: actionTypes.GET_GROUPS_FAILED,
  error: error.message
});

export const groupsLoading = () => ({
  type: actionTypes.GROUPS_LOADING
});

export const createGroupSuccess = group => ({
  type: actionTypes.CREATE_GROUP_SUCCESS,
  group
});

export const createGroupFailed = error => ({
  type: actionTypes.CREATE_GROUP_FAILED,
  error: error.message
});

export const updateGroupSuccess = group => ({
  type: actionTypes.UPDATE_GROUP_SUCCESS,
  group
});

export const updateGroupFailed = error => ({
  type: actionTypes.UPDATE_GROUP_FAILED,
  error: error.message
});

export const deleteGroupSuccess = id => ({
  type: actionTypes.DELETE_GROUP_SUCCESS,
  id
});

export const deleteGroupFailed = error => ({
  type: actionTypes.DELETE_GROUP_FAILED,
  error: error.message
});

export function getGroups () {
  return dispatch => {
    dispatch(groupsLoading());
    groupApi.getGroups()
      .then(response => {
        dispatch(getGroupsSuccess(response.data))
      })
      .catch(error => {
        dispatch(getGroupsFailed(error));
        toastr.error('', error.message);
      })
  }
}

export function saveGroup(group) {
  return dispatch => {
    dispatch(groupsLoading());
    if (group.id === null) {
      groupApi.addGroup(group)
        .then(() => {
          dispatch(createGroupSuccess(group));
          toastr.success('', 'Group created successfully');
        })
        .catch(error => {
          dispatch(createGroupFailed(error));
          toastr.error('', 'Error creating group');
        })
    }
    else {
      groupApi.updateGroup(group)
        .then(() => {
          dispatch(updateGroupSuccess(group));
          toastr.success('', 'Group updated successfully');
        })
        .catch(error => {
          dispatch(updateGroupFailed(error));
          toastr.error('', 'Error updating group');
        })
    }
  }
}

export function deleteGroup(id) {
  return dispatch => {
    dispatch(groupsLoading());
    groupApi.deleteGroup(id)
      .then(() => {
        dispatch(deleteGroupSuccess(id));
        toastr.success('', 'Group deleted successfully');
      })
      .catch(error => {
        dispatch(deleteGroupFailed(error));
        toastr.error('', 'Error deleting group');
      })
  }
}