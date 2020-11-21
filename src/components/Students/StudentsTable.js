import React from 'react';
import {Table} from "reactstrap";
import {getGroupNameById} from "../../shared/helpers";

const renderTableHeader = columns => {
  return columns.map((key, index) => {
    return <th key={index}>{key}</th>
  });
};

const renderData = (students, groups) => {
  return (
    students.error === null ? (
      students.students.map((student) => (
        <tr key={student.id}>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>{student.sex[0].toUpperCase() + student.sex.substring(1)}</td>
          <td>{student.email}</td>
          <td>{student.birthdate}</td>
          <td>{getGroupNameById(student.groupId, groups.groups)}</td>
          <td>{student.cityId}</td>
          <td>
            <button className="card-header-action btn text-primary"><i className="fa fa-edit fa-md" /></button>
            <button className="card-header-action btn text-danger"><i className="fa fa-trash fa-md" /></button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td className="text-center text-danger font-weight-bold" colSpan={8}>{students.error}</td>
      </tr>
    )
  );
};

const StudentsTable = ({columns, students, groups}) => {
  return (
    <Table striped hover responsive size="sm">
      <thead>
        <tr>
          {renderTableHeader(columns)}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {renderData(students, groups)}
      </tbody>
    </Table>
  );
};

export default StudentsTable;