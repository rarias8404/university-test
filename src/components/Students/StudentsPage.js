import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from "react-router-dom";

class StudentsPage extends Component {
  render() {
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
          <div className="col-12 col-md-6">
            <h2>Students</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default StudentsPage;