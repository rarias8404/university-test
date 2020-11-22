import axios from 'axios';
import {baseUrl} from "./baseUrl";

export const getStudents = () => {
  return axios.get(`${baseUrl}students`);
}

export const addStudent = student => {
  return axios.post(`${baseUrl}students`, student);
};