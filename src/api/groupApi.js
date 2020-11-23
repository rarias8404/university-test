import axios from 'axios';
import {baseUrl} from "./baseUrl";

export const getGroups = () => {
  return axios.get(`${baseUrl}groups`);
}

export const addGroup = group => {
  return axios.post(`${baseUrl}groups`, group);
};

export const updateGroup = group => {
  return axios.patch(`${baseUrl}groups/${group.id}`, group);
};

export const deleteGroup = id => {
  return axios.delete(`${baseUrl}groups/${id}`)
};