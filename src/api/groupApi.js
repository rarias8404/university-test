import axios from 'axios';
import {baseUrl} from "./baseUrl";

export const getGroups = () => {
  return axios.get(`${baseUrl}groups`);
}