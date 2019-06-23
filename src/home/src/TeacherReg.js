import React from 'react'
// import './clever/style.css'
// import './main.css'
// import './util.css'
// import './Courses.css'
// import './Login.css'
import {API_URL} from "../../config"
import { handleResponse } from './helpers';
import axios from "axios";

class TeacherReg extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            password: "",
            contact: "",
            // classData: []
        }
        this.handleName = this.handleName.bind(this)
    }

    // componentDidMount() {
    //     this.getData()
    // }

    // getData() {
    //     fetch(`${API_URL}/classes`)
    //         .then(handleResponisterse)
    //         .then((data) => {
    //             this.setState({
    //                 classData: data
    //             })
    //         })
    //         .catch((error) => {
    //             console.log("error occured")
    //         })
    //     // console.log(this.state.classData)
    // }

    handleName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    handlePass = (event) => {
        this.setState({ password: event.target.value })
    }

    handlePhone = (event) => {
        this.setState({ contact: event.target.value })
    }

    // filterClass = (event) => {
    //     this.setState({
    //         standard: event.target.value
    //     }, () => { console.log(this.state.standard) })
        // fetch(`${API_URL}/classes`)
        // .then(handleResponse)
        // .then((data) => {
        //     console.log(data)
        //     const prevData=data
        //     this.setState({
        //         classData: prevData
        //     }, () => { console.log(this.state.classData) })
        // })
        // .catch((error) => {
        //     console.log("error occured")
        // })
        // var x = document.getElementById('sel1').value

        // const filtered = this.state.classData.filter(data => {
        //     return data.standard == x
        // }, () => { console.log(filtered) })
        // console.log(filtered)

        // this.setState({
        //     classData: filtered
        // }, () => { console.log(this.state.classData) })
    // }

    handleClick = () => {
        // console.log(this.state.classData)
        // console.log(this.state.classData[0].standard)
        axios.post(`${API_URL}/teacher`,{
                 
        
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                phone: this.state.contact,
                // classroomid: this.state.classData[0]._id
        
        })



        console.log("registered")
        this.setState({
            name: "",
            email: "",
            password: "",
            standard: "",
            // classData: []
        }, () => { console.log(this.state.classData) })
        this.render()
    }

    render() {
        // const { classData } = classData
        return (
            <div className="bgimg">
                <div class="register-form wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                    <div class="login100-form validate-form">
                        <span class="login100-form-title p-b-33">
                            Account register
					    </span>

                        <div class="wrap-input100 validate-input">
                            <input class="input100" type="text" name="name" value={this.state.name} placeholder="Name" onChange={this.handleName} />
                            <span class="focus-input100-1"></span>
                            <span class="focus-input100-2"></span>
                        </div>

                        <div class="wrap-input100 validate-input" data-validate="Valid email is required: example@abc.com">
                            <input class="input100" type="text" name="email" placeholder="Email" onChange={this.handleEmail} />
                            <span class="focus-input100-1"></span>
                            <span class="focus-input100-2"></span>
                        </div>

                        <div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
                            <input class="input100" type="password" name="pass" placeholder="Password" onChange={this.handlePass} />
                            <span class="focus-input100-1"></span>
                            <span class="focus-input100-2"></span>
                        </div>

                        {/* <div class="wrap-input100 validate-input">
                            <input class="input100" type="number" name="number" placeholder="Standard" />
                            <span class="focus-input100-1"></span>
                            <span class="focus-input100-2"></span>
                        </div> */}
                        <div class="wrap-input100 rs1 validate-input form-group">
                            {/* <label for="sel1">Select list:</label>
                            <select class="wrap-input100 rs1 validate-input form-control" id="sel1" onChange={this.filterClass}>
                                {this.state.classData!=undefined && this.state.classData.map((data) => (
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                {/* ))} */}

                            {/* </select> */} 
                            <input class="input100" type="tel" name="phone" placeholder="Phone" pattern="[0-9]{10}" onChange={this.handlePhone} />
                            <span class="focus-input100-1"></span>
                            <span class="focus-input100-2"></span>
                        </div>

                        <div class="container-login100-form-btn m-t-20">
                            <button class="login100-form-btn" onClick={this.handleClick}>
                                Sign up As Teacher
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
export default TeacherReg