import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: true,
  cities: [],
  loadError: null
};

export const cities = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CITIES_SUCCESS:
      return {...state, loading: false, cities: action.cities, loadError: null}
    case actionTypes.GET_CITIES_FAILED:
      return {...state, loading: false, cities: [], loadError: action.error}
    case actionTypes.CITIES_LOADING:
      return {...state, loading: true, cities: [], loadError: null}
    default:
      return state;
  }
};