import React, { Component } from 'react'
// import Navbar from './NavBar'
import Background from './Background'
import Courses from './Courses'
import NavBar from './NavBar';

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Background />
                <Courses />
            </div>
        )
    }
}
