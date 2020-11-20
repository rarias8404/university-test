import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader} from 'reactstrap';
import {Link} from "react-router-dom";
import StudentsTable from "./StudentsTable";

class StudentsPage extends Component {
  render() {
    const {students} = this.props;
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Students</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Students</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-md-10">
            <Card>
              <CardHeader className="bg-info text-white">
                Students List
              </CardHeader>
              <CardBody>
                <StudentsTable students={students} />
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentsPage;