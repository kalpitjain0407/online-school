import React, { Component } from 'react'
import './Courses.css'
// import './clever/style.css'
import API_URL from "../../config"
export default class Class extends Component {
    constructor() {
        super()
        this.state = {
            subjects: ["Hindi", "English", "Maths", "Science", "Social Science", "Music", "General Knowledge"]
        }
    }
    render() {
        const { subjects } = this.state
        return (
            <div className="popular-courses-area">
                
                {subjects.map(subject => (
                    <div className="col-md-3 class-card">
                        <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="250ms">
                            <img className="img1" alt="" />
                            {/* <!-- Course Content --> */}
                            <div className="course-content">
                                <h4>{subject}</h4>
                                <div className="meta d-flex align-items-center">
                                </div>
                                <p>Chapter 1</p>
                                <p>Chapter 2</p>
                                <p>Chapter 3</p>
                                <p>Chapter 4</p>
                                <p>Chapter 5</p>
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
        )
    }
}
