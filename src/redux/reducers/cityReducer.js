import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: true,
  cities: [],
  error: null
};

export const cities = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_CITIES_SUCCESS:
      return {...state, loading: false, cities: action.cities, error: null}
    case actionTypes.GET_CITIES_FAILED:
      return {...state, loading: false, cities: [], error: action.error}
    case actionTypes.CITIES_LOADING:
      return {...state, loading: true, cities: [], error: null}
    default:
      return state;
  }
};