import axios from 'axios';
import {baseUrl} from "./baseUrl";

export const getStudents = () => {
  return axios.get(`${baseUrl}students`);
}