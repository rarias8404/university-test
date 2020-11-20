import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: true,
  groups: [],
  error: null
};

export const groups = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GROUPS_SUCCESS:
      return {...state, loading: false, groups: action.groups, error: null}
    case actionTypes.GET_GROUPS_FAILED:
      return {...state, loading: false, groups: [], error: action.error}
    case actionTypes.GROUPS_LOADING:
      return {...state, loading: true, groups: [], error: null}
    default:
      return state;
  }
};