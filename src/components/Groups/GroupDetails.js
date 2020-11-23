import React, {useEffect, useState} from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, CardTitle, CardText} from "reactstrap";
import {Link} from "react-router-dom";
import GroupStudentsTable from "./GroupStudentsTable";
import Spinner from "../common/Spinner";

const GroupDetails = (props) => {
  const columns = ['Name', 'Age', 'Sex', 'Email', 'Birthdate', 'Birthplace'];
  const {students, cities, loading} = props;
  const [group, setGroup] = useState({id: '', name: '', professorId: 1});
  const [professor, setProfessor] = useState({id: '', name: ''});

  useEffect(() => {
    setGroup({...props.group});
  }, [props.group]);

  useEffect(() => {
    setProfessor({...props.professor});
  }, [props.professor]);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to="/groups">Groups</Link></BreadcrumbItem>
          <BreadcrumbItem active>Groups Details</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Groups Details</h3>
          <hr/>
        </div>
      </div>
      <div className="row row-content">
        {loading ?
          <Spinner /> : (
            <React.Fragment>
              <div className="col-12 col-md-4 mb-5">
                <Card>
                  <CardHeader className="bg-info text-white">
                    {`Group Name: ${group.name}`}
                  </CardHeader>
                  <CardBody>
                    <CardTitle className="font-weight-bold">
                      {`Professor's Name: ${professor.name}`}
                    </CardTitle>
                    <CardText className="font-weight-bold">
                      {`Number of students: ${students.length}`}
                    </CardText>
                  </CardBody>
                </Card>
              </div>
              <div className="col-12 col-md-8 mb-5">
                <Card>
                  <CardHeader className="bg-info text-white">
                    Students List
                  </CardHeader>
                  <CardBody>
                    <GroupStudentsTable
                      columns={columns}
                      students={students}
                      cities={cities}
                    />
                  </CardBody>
                </Card>
              </div>
            </React.Fragment>
          )}
      </div>
    </div>
  );
}

export default GroupDetails;