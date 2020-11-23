import axios from 'axios';
import {baseUrl} from "./baseUrl";

export const getStudents = () => {
  return axios.get(`${baseUrl}students`);
}

export const addStudent = student => {
  return axios.post(`${baseUrl}students`, student);
};

export const updateStudent = student => {
  return axios.patch(`${baseUrl}students/${student.id}`, student);
};

export const deleteStudent = id => {
  return axios.delete(`${baseUrl}students/${id}`)
};