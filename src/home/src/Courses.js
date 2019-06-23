import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Courses.css'
// import './clever/style.css'

export default class Courses extends Component {
    constructor() {
        super()
        this.state = {
            classes:
                [
                    {
                        name: "Class 1",
                        img: './clever/img/bg-img/c1.jpg'
                    },
                    {
                        name: "Class 2",
                        img: './clever/img/bg-img/c1.jpg'
                    },
                    {
                        name: "Class 3",
                        img: './clever/img/bg-img/c1.jpg'
                    },
                    {
                        name: "Class 4",
                        img: './clever/img/bg-img/c1.jpg'
                    },

                    {
                        name: "Class 5",
                        img: './clever/img/bg-img/c1.jpg'
                    },
                    {
                        name: "Class 6",
                        img: './clever/img/bg-img/c1.jpg'
                    },
                    {
                        name: "Class 7",
                        img: './clever/img/bg-img/c1.jpg'
                    },
                    {
                        name: "Class 8",
                        img: './clever/img/bg-img/c1.jpg'
                    },
                ]
        }
    }
    render() {
        const { classes } = this.state
        return (
            <div>
                {/* <!-- ##### Popular Courses Start ##### --> */}
                <section className="popular-courses-area section-padding-100-0">
                    <div className="container">
                        <div className="row class-card">
                            <div className="col-xs-4">
                                <div className="section-heading">
                                    <h3>Popular Online Courses</h3>
                                </div>
                            </div>
                        </div>

                        <div >
                            {/* <!-- Single Popular Course --> */}
                            {/* {console.log(classes)} */}
                            {classes.map((cls,index) => (
                                <Link to={`/sub/${cls.name}`}>
                                    {/* <div className="class-card"> */}
                                    <div className="col-12 col-md-6 col-lg-4 class-card">
                                        <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="250ms">
                                            {console.log(`img${index}`)}
                                            <img className={`img${index}`} alt="" />
                                                {/* <!-- Course Content --> */}
                                            <div className="course-content">
                                                <h4>{cls.name}</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                                            </div>
                                                
                                        </div>
                                    </div>
                                    {/* </div> */}
                                </Link>
                                    ))}
        
        
        
                        </div>

                    </div>
                </section>
                        {/* <!-- ##### Popular Courses End ##### --></div> */}
                    </div>
                    )
                }
            }
