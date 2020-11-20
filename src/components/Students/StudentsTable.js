import React from 'react';
import {Table} from "reactstrap";

const renderTableHeader = columns => {
  return columns.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>
  });
};

const renderData = data => {
  return (
    data.error === null ? (
      data.students.map((student) => (
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
    ) : (
      <tr>
        <td className="text-center text-danger font-weight-bold" colSpan={8}>{data.error}</td>
      </tr>
    )
  );
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
        {renderData(data)}
      </tbody>
    </Table>
  );
};

export default StudentsTable;