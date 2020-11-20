import React from 'react';
import {Table} from "reactstrap";

const renderTableHeader = columns => {
  return columns.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>
  });
};

const StudentsTable = ({columns, data}) => {
  return (
    <Table striped hover responsive size="sm">
      <thead>
        <tr>
          {renderTableHeader(columns)}
          <th>ACTIONS</th>
        </tr>
      </thead>
      <tbody>
      {
        data.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.sex[0].toUpperCase() + student.sex.substring(1)}</td>
            <td>{student.email}</td>
            <td>{student.birthdate}</td>
            <td>{student.groupId}</td>
            <td>{student.cityId}</td>
            <td />
          </tr>
        ))
      }
      </tbody>
    </Table>
  );
};

export default StudentsTable;