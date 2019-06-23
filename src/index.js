import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
// import NavBar from "home/src/NavBar"
import AdminLayout from "layouts/Admin.jsx";
import TeacherLayout from "layouts/Teacher.jsx";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import App from "./home/src/App"
import TeacherReg from './home/src/TeacherReg'
import TeacherLogin from './home/src/TeacherLogin'
import Login from './home/src/Login';
import RegI from './home/src/RegI'
import Home from './home/src/Home'
// import RegG from './RegG'
// import NavBar from './home/src/NavBar'
// import Background from './home/src/Background'
// import Courses from './home/src/Courses'
import Class from './home/src/Class'

ReactDOM.render(
  <BrowserRouter>
    {/* <Switch> */}
    {/* <NavBar /> */}
    {/* <Route path="/" component={App} exact /> */}
    <Route path="/" exact component={Home} />
    {/* <Route path="/" exact component={NavBar} />
    <Route path="/" exact component={Background} />
    <Route path="/" exact component={Courses} /> */}
    <Route path="/sub/:class" component={Class} exact />
    <Route path="/register/individual" component={RegI} exact />
    {/* <Route path="/register/group" component={RegG} exact /> */}
    <Route path="/login" exact component={Login} />
    <Route path="/login/teacher" exact component={TeacherLogin} />
    <Route path="/register/teacher" component={TeacherReg} exact />
    <Route path="/admin"  render={props => <AdminLayout {...props} />} />
    <Route path="/teacher"  render={props => <TeacherLayout {...props} />} />
    {/* <Redirect from="/" to="/admin/dashboard" /> */}
    {/* </Switch> */}
  </BrowserRouter>,
  document.getElementById("root")
);
