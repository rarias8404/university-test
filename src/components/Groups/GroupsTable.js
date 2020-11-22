import React from 'react';
import {Table} from "reactstrap";
import {getItemNameById, renderTableHeader} from "../../shared/helpers";

const renderData = (groups, professors) => {
  return (
    groups.loadError === null ? (
      groups.groups.map((group) => (
        <tr key={group.id}>
          <td>{group.name}</td>
          <td>{getItemNameById(group.professorId, professors)}</td>
          <td>
            <button className="card-header-action btn text-primary"><i className="fa fa-edit fa-md" /></button>
            <button className="card-header-action btn text-danger"><i className="fa fa-trash fa-md" /></button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td className="text-center text-danger font-weight-bold" colSpan={8}>{groups.loadError}</td>
      </tr>
    )
  );
};

const GroupsTable = ({columns, groups, professors}) => {
  return (
    <Table striped hover responsive size="sm">
      <thead>
      <tr>
        {renderTableHeader(columns)}
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
        {renderData(groups, professors)}
      </tbody>
    </Table>
  );
};

export default GroupsTable;