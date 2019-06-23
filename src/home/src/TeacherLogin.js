import React from 'react'
// import './clever/style.css'
// import './main.css'
import './util.css'
import './Courses.css'
import './Login.css'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from "../../config"
export default class TeacherLogin extends React.Component {

    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            standard: "",
            redirect: false
            // classData: []
        }
        // this.handleName = this.handleName.bind(this)
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value }, () => { console.log(this.state.email) })
    }

    handlePass = (event) => {
        this.setState({ password: event.target.value }, () => { console.log(this.state.password) })
    }

    filterClass = (event) => {
        this.setState({
            standard: event.target.value
        }, () => { console.log(this.state.standard) })
    }

    handleClick = () => {
        var self = this
        axios({
            url: `${API_URL}/teacher/login`,
            method: 'post',
            data: {
                email: this.state.email,
                password: this.state.password,
                standard:this.state.standard
                // classroomid: this.state.classData[0]._id
            }
        }).then(function (res) {
            console.log(res);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("teacher_id", res.data.id);
            localStorage.setItem("classroom_id", res.data.classroomid);
        }).then(function () {
            self.setState({
                redirect: true
            }, () => {
                self.renderRedirect()
            })
        })
            .catch(function (error) {
                console.log(error);
            })
        console.log("logged in")
        // this.setState({
        //     email: "",
        //     password: ""
        //     // classData: []
        // }, () => { console.log(this.state.classData) })
        // this.render()
    }

    renderRedirect() {
        if (this.state.redirect) {
            return <Redirect to='/teacher/dashboard' />
        }
    }

    render() {
        return (
            // <div className="imge1">
            //     <div className="main">
            //         <div className="container">
            //             <form method="POST" className="appointment-form" id="appointment-form">
            //                 <h2>Login and start learning <span style={{ fontSize: '250%', color: 'gray', paddingLeft: '15%' }}> :)</span></h2>
            //                 <div className="form-group-1">
            //                     <input type="email" name="email" id="email" placeholder="Your Email" required />
            //                     {/* <hr style={{width: "50%", align: "left"}}  ></hr> */}
            //                     <input type="password" name="pass1" id="pass1" placeholder="Enter password" required />
            //                 </div>
            //                 <div className="form-submit">
            //                     <input type="submit" name="submit" id="submit" className="submit" value="Register" />
            //                 </div>
            //             </form>
            //         </div>
            //     </div>
            // </div>
            <div className="bgimg">
                <div class=" wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                    <div class="login100-form validate-form">
                        <span class="login100-form-title p-b-33">
                            Account Login
					</span>

                        <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                            <input class="input100" type="text" name="email" placeholder="Email" onChange={this.handleEmail} />
                            <span class="focus-input100-1"></span>
                            <span class="focus-input100-2"></span>
                        </div>

                        <div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input class="input100" type="password" name="pass" placeholder="Password" onChange={this.handlePass} />
                            <span class="focus-input100-1"></span>
                            <span class="focus-input100-2"></span>
                        </div>

                        <div class="wrap-input100 rs1 validate-input form-group">
                            {/* <label for="sel1">Select list:</label> */}
                            <select class="wrap-input100 rs1 validate-input form-control" id="sel1" onChange={this.filterClass}>
                                {/* {this.state.classData!=undefined && this.state.classData.map((data) => ( */}
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                {/* ))} */}

                            </select>
                        </div>

                        <div class="container-login100-form-btn m-t-20">
                            {this.renderRedirect()}
                            <button class="login100-form-btn" onClick={this.handleClick}>
                                Sign in As Teacher
						</button>
                        </div>

                        <div class="text-center p-t-45 p-b-4">
                            <span class="txt1">
                                Forgot
						</span>

                            <a href="#" class="txt2 hov1">
                                Username / Password?
						</a>
                        </div>

                        <div class="text-center">
                            <span class="txt1">
                                Create an account?
						</span>

                            <a href="#" class="txt2 hov1">
                                Sign up
						</a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}