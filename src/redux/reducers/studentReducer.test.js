import {students} from "./studentReducer";
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  loading: true,
  students: [],
  loadError: null,
  dataError: null
};

describe('students reducer', () => {
  it('should return the initial state', () => {
    expect(students(undefined, {})).toEqual(initialState);
  });
  it('should store the students', () => {
    expect(students(initialState, {
      type: actionTypes.GET_STUDENTS_SUCCESS,
      students: [1,2,3]
    })).toEqual({...initialState, students: [1,2,3], loading: false});
  });
  it('should store error', () => {
    expect(students(initialState, {
      type: actionTypes.CREATE_STUDENT_FAILED,
      error: {message: 'network error'}
    })).toEqual({...initialState, loading: false, dataError: {message: 'network error'}});
  });
});