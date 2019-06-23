import React, { Component } from "react";
import { Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      // <div  style={{position: "fixed", bottom: "0%"}}>
        <div>
      <footer className="footer" >
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#pablo">Home</a>
              </li>
              <li>
                <a href="#pablo">Company</a>
              </li>
              <li>
                <a href="#pablo">Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="www.brightmindsacademy.com">
              Bright Minds Academy
            </a>
            , made for learning enthusiasts
          </p>
        </Grid>
      </footer>
      </div>
    );
  }
}

export default Footer;
