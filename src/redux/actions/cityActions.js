import * as actionTypes from  './actionTypes';
import * as cityApi from '../../api/cityApi';

export const getCitiesSuccess = cities => ({
  type: actionTypes.GET_CITIES_SUCCESS,
  cities
});

export const getCitiesFailed = error => ({
  type: actionTypes.GET_CITIES_FAILED,
  error: error.message
});

export const citiesLoading = () => ({
  type: actionTypes.CITIES_LOADING
});

export function getCities() {
  return dispatch => {
    dispatch(citiesLoading());
    cityApi.getCities()
      .then(response => {
        dispatch(getCitiesSuccess(response.data))
      })
      .catch(error => {
        dispatch(getCitiesFailed(error))
      })
  }
}