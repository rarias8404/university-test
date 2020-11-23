import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

class GroupDetails extends Component {
  render() {
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
          <div className="col-12 col-md-6">
            <h4>Details</h4>
          </div>
          <div className="col-12 col-md-6">
            <h4>Students</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupDetails;