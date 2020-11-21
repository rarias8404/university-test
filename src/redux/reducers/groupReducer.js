import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: true,
  groups: [],
  loadError: null,
  dataError: null
};

export const groups = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GROUPS_SUCCESS:
      return {...state, loading: false, groups: action.groups, loadError: null}
    case actionTypes.GET_GROUPS_FAILED:
      return {...state, loading: false, groups: [], loadError: action.error}
    case actionTypes.GROUPS_LOADING:
      return {...state, loading: true, groups: [], loadError: null}
    default:
      return state;
  }
};