import axios from 'axios';
import {baseUrl} from "./baseUrl";

export const getCities = () => {
  return axios.get(`${baseUrl}cities`);
}