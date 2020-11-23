import React from 'react';
import {getItemNameById, renderTableHeader} from "../../shared/helpers";
import {Table} from "reactstrap";

const GroupStudentsTable = ({columns, students, cities}) => {
  return (
    <Table striped hover responsive size="sm">
      <thead>
      <tr>
        {renderTableHeader(columns)}
      </tr>
      </thead>
      <tbody>
      {
        students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.sex[0].toUpperCase() + student.sex.substring(1)}</td>
            <td>{student.email}</td>
            <td>{student.birthdate}</td>
            <td>{getItemNameById(student.cityId, cities.cities)}</td>
          </tr>
        ))
      }
      </tbody>
    </Table>
  );
};

export default GroupStudentsTable;