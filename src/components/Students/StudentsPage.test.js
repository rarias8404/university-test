import React from 'react';
import {shallow} from 'enzyme';
import {StudentsPage} from "./StudentsPage";
import Spinner from "../common/Spinner";

const props = {
  students: {
    students: [],
    loading: true
  },
  groups: {
    groups: []
  },
  cities: {
    cities: []
  },
  saveStudent: jest.fn()
};

describe('<StudentsPage />', () => {
  const wrapper = shallow(<StudentsPage {...props} />);
  it('should render <Spinner />', () => {
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
  it('should not render <Spinner />', () => {
    wrapper.setProps({...props, students: {students: [], loading: false}});
    expect(wrapper.find(Spinner)).toHaveLength(0);
  });
});