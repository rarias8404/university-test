import axios from 'axios';
import {baseUrl} from "./baseUrl";

export const getProfessors = () => {
  return axios.get(`${baseUrl}professors`);
}