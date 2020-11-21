import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: true,
  professors: [],
  loadError: null
};

export const professors = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROFESSORS_SUCCESS:
      return {...state, loading: false, professors: action.professors, loadError: null}
    case actionTypes.GET_PROFESSORS_FAILED:
      return {...state, loading: false, professors: [], loadError: action.error}
    case actionTypes.PROFESSORS_LOADING:
      return {...state, loading: true, professors: [], loadError: null}
    default:
      return state;
  }
};