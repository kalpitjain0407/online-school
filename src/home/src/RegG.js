import React from 'react'
import './clever/css/style.css'

export default function RegI() {
    return (
        <div style={{ marginTop: '3%' }} className="imge">
            <div className="main">
                <div className="container">
                    <form method="POST" className="appointment-form" id="appointment-form">
                        <h2>Register As An Group</h2>
                        <div className="form-group-1">

                            <input type="text" name="name" id="name" placeholder="Your Name" required />
                            <input type="email" name="email" id="email" placeholder="Your Email" required />
                            <input type="text" name="age" id="age" placeholder="Your Age" required />
                            <input type="password" name="pass1" id="pass1" placeholder="Choose a password" required />
                            <input type="password" name="pass2" id="pass2" placeholder="Enter password again" required />
                        </div>
                        <div className="form-group-2">
                            <h3>In which standard would you like to be admitted ?</h3>
                            <div className="select-list">
                                <div className="select-list">
                                    <select name="course_type" id="course_type">
                                        <option selected value="">Select standard</option>
                                        <option value="I">Class I</option>
                                        <option value="II">Class II</option>
                                        <option value="III">Class III</option>
                                        <option value="IV">Class IV</option>
                                        <option value="V">Class V</option>
                                        <option value="VI">Class VI</option>
                                        <option value="VII">Class VII</option>
                                        <option value="VIII">Class VIII</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="form-submit">
                            <input type="submit" name="submit" id="submit" className="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}