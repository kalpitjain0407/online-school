import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Login from './Login';
// import './clever/style.css'
import "./NavBar.css"


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <header className="header-area">

                    {/* <!-- Top Header Area --> */}
                    <div className="top-header-area d-flex justify-content-between align-items-center">
                        {/* <!-- Contact Info --> */}
                        {/* <div className="contact-info">
                            <a href="#"><span>Phone:</span> +44 300 303 0266</a>
                            <a href="#"><span>Email:</span> info@clever.com</a>
                        </div> */}
                        {/* <!-- Follow Us --> */}
                        <div className="follow-us">
                            <span>Follow us</span>
                            <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                        </div>
                    </div>

                    {/* <!-- Navbar Area --> */}
                    <div className="clever-main-menu">
                        <div className="classy-nav-container breakpoint-off">
                            {/* <!-- Menu --> */}
                            <nav className="classy-navbar justify-content-between" id="cleverNav">

                                {/* <!-- Logo --> */}
                                <a className="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt="" /></a>

                                    {/* <!-- Navbar Toggler --> */}
                                    <div className="classy-navbar-toggler">
                                        <span className="navbarToggler"><span></span><span></span><span></span></span>
                                    </div>

                                    {/* <!-- Menu --> */}
                                    <div className="classy-menu">

                                        {/* <!-- Close Button --> */}
                                        <div className="classycloseIcon">
                                            <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                        </div>

                                        {/* <!-- Nav Start --> */}
                                        <div className="classynav">
                                            <ul>
                                                {/* <li><a href="index.html">Home</a></li> */}
                                                {/* <li><a href="#">Pages</a>
                                                    <ul class="dropdown">
                                                        <li><a href="index.html">Home</a></li>
                                                        <li><a href="courses.html">Courses</a></li>
                                                        <li><a href="single-course.html">Single Courses</a></li>
                                                        <li><a href="instructors.html">Instructors</a></li>
                                                        <li><a href="blog.html">Blog</a></li>
                                                        <li><a href="blog-details.html">Single Blog</a></li>
                                                        <li><a href="regular-page.html">Regular Page</a></li>
                                                        <li><a href="contact.html">Contact</a></li>
                                                    </ul>
                                                </li> */}
                                                {/* <li><a href="courses.html">Courses</a></li>
                                                <li><a href="instructors.html">Instructors</a></li>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="contact.html">Contact</a></li> */}
                                            </ul>

                                            {/* <!-- Search Button --> */}
                                            {/* <div class="search-area">
                                                <form action="#" method="post">
                                                    <input type="search" name="search" id="search" placeholder="Search" />
                                                        <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                                                </form>
                                            </div> */}

                                                {/* <!-- Register / Login --> */}
                                                <div className="register-login-area dropdown">
                                                {/* <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
                                                   <span class="caret"></span></button>
                                                   <ul class="dropdown-menu">
                                                     <li><a href="#">HTML</a></li>
                                                     <li><a href="#">CSS</a></li>
                                                     <li><a href="#">JavaScript</a></li>
                                                   </ul> */}
                                                    <Link to="/register/individual"><a href="#" class="btn">Register</a></Link>
                                                    <Link to="/login"><a href="" className="btn active">Login</a></Link>
                                                </div>

                                            </div>
                                            {/* <!-- Nav End --> */}
                                        </div>
                            </nav>
                        </div>
                    </div>
                    </header>
                        {/* <!-- ##### Header Area End ##### --> */}
                    </div>
                    )
                }
            }




//             <div class="dropdown">
//   <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Dropdown Example
//   <span class="caret"></span></button>
//   <ul class="dropdown-menu">
//     <li><a href="#">HTML</a></li>
//     <li><a href="#">CSS</a></li>
//     <li><a href="#">JavaScript</a></li>
//   </ul>
// </div>