import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader} from "reactstrap";
import {Link} from "react-router-dom";

class GroupsPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Groups</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Groups</h3>
            <hr/>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12 col-md-10">
            <Card>
              <CardHeader className="bg-info text-white">
                Groups List
                <div className="card-header-actions">
                  <button
                    className="card-header-action btn"
                  >Reload &nbsp;
                    <i className="fa fa-refresh fa-lg" />
                  </button>
                  <button className="card-header-action btn">Add &nbsp;<i className="fa fa-plus-square fa-lg" /></button>
                </div>
              </CardHeader>
              <CardBody>
                <h4>Table</h4>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    groups: state.groups,
    professors: state.professors,
  };
}

export default connect(mapStateToProps)(GroupsPage);