import React from 'react';
import {Table} from "reactstrap";
import {renderTableHeader, getItemNameById} from "../../shared/helpers";

const StudentsTableData = ({students, groups, cities, toggle}) => {
  return (
    students.loadError === null ? (
      students.students.map((student) => (
        <tr key={student.id}>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>{student.sex[0].toUpperCase() + student.sex.substring(1)}</td>
          <td>{student.email}</td>
          <td>{student.birthdate}</td>
          <td>{getItemNameById(student.groupId, groups)}</td>
          <td>{getItemNameById(student.cityId, cities)}</td>
          <td>
            <button
              className="card-header-action btn text-primary"
              onClick={toggle}
            >
              <i className="fa fa-edit fa-md" />
            </button>
            <button className="card-header-action btn text-danger"><i className="fa fa-trash fa-md" /></button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td className="text-center text-danger font-weight-bold" colSpan={8}>{students.loadError}</td>
      </tr>
    )
  );
}

const StudentsTable = ({columns, students, groups, cities, toggle}) => {
  return (
    <Table striped hover responsive size="sm">
      <thead>
        <tr>
          {renderTableHeader(columns)}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <StudentsTableData
          students={students}
          groups={groups}
          cities={cities}
          toggle={toggle}
        />
      </tbody>
    </Table>
  );
};

export default StudentsTable;