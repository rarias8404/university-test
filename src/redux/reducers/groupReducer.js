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
    case actionTypes.CREATE_GROUP_SUCCESS:
      const group = {...action.group};
      group.id = state.groups.length + 1;
      return {...state, loading: false, groups: [...state.groups, group], dataError: null}
    case actionTypes.UPDATE_GROUP_SUCCESS:
      const newState = [...state.groups];
      newState.forEach(group => {
        if (parseInt(group.id, 10) === parseInt(action.group.id, 10)) {
          Object.assign(group, action.group);
        }
      });
      return {...state, loading: false, groups: newState, dataError: null};
    case actionTypes.CREATE_GROUP_FAILED:
    case actionTypes.UPDATE_GROUP_FAILED:
    case actionTypes.DELETE_GROUP_FAILED:
      return {...state, loading: false, dataError: action.error}
    case actionTypes.DELETE_GROUP_SUCCESS:
      let groups = [...state.groups];
      groups = groups.filter(group => parseInt(group.id) !== parseInt(action.id));
      return {...state, loading: false, groups, dataError: null}
    default:
      return state;
  }
};