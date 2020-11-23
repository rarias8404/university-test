import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/students">Students</Link></li>
              <li><Link to="/groups">Groups</Link></li>
              <li><Link to="/about-us">About</Link></li>
              <li><Link to="/contact-us">Contact</Link></li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              8043, Summit Street<br />
              Brooklyn, NY 11211<br />
              <i className="fa fa-phone fa-lg"/>: +1 1234 5678<br />
              <i className="fa fa-fax fa-lg"/>: +1 8765 4321<br />
              <i className="fa fa-envelope fa-lg"/>: <a href="mailto:university@test.net">
              university@test.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"/></a>
              <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"/></a>
              <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"/></a>
              <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"/></a>
              <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"/></a>
              <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"/></a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2020 University Test</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;