import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import {Redirect} from 'react-router-dom'
// import {API_URL} from "../config"
class AdminNavbarLinks extends Component {

  constructor(){
    super()
    this.state={
      redirect:false
    }
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout(){
    
    var self=this
    this.setState({
      redirect:true
    },()=>{
      this.renderRedirect()
      localStorage.clear()
    })
  }
  // handleLogout(){
  //   localStorage.clear()
  //   var self=this
  //   this.setState({
  //     redirect:true
  //   })
  //   this.renderRedirect();
  // }

  renderRedirect(){
    if(this.state.redirect){
      return <Redirect to='/login' />
    }
  }

  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            {/* <i className="fa fa-dashboard" /> */}
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          {/* <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Notification 1</MenuItem>
            <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            <MenuItem eventKey={2.4}>Notification 4</MenuItem>
            <MenuItem eventKey={2.5}>Another notifications</MenuItem>
          </NavDropdown> */}
          {/* <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem> */}
        </Nav>
        <Nav pullRight>
          {/* <NavItem eventKey={1} href="#">
            Account
          </NavItem> */}
          <NavDropdown
            eventKey={2}
            title="Classes"
            id="basic-nav-dropdown-right"
          >
            <MenuItem eventKey={2.1}>Class I</MenuItem>
            <MenuItem eventKey={2.2}>Class II</MenuItem>
            <MenuItem eventKey={2.3}>Class III</MenuItem>
            <MenuItem eventKey={2.4}>Class IV</MenuItem>
            <MenuItem eventKey={2.5}>Class V</MenuItem>
            <MenuItem eventKey={2.6}>Class VI</MenuItem>
            <MenuItem eventKey={2.7}>Class VII</MenuItem>
            <MenuItem eventKey={2.8}>Class VIII</MenuItem>
            {/* <MenuItem divider /> */}
            {/* <MenuItem eventKey={2.5}>Separated link</MenuItem> */}
          </NavDropdown>
          {this.renderRedirect()}
          <NavItem eventKey={3} href="#" onClick={this.handleLogout}>
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
