import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import axios from "axios";
import { textChangeRangeIsUnchanged } from "typescript";
import {API_URL} from "../config"
var i = 1;
class StudentsList extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
    this.getstudentslist = this.getstudentslist.bind(this);
    // this.getFr=this.getFr.bind(this)
  }

  componentDidMount() {
    this.getstudentslist();
    // this.gethomework();
  }
//  gethomework() {
//   const email = localStorage.getItem("email");
//   console.log(email);
//   // var self = this;
//   axios
//     .post(`${API_URL}/student/gethwstudent`, {
//       email: email 
//       // classroomid: this.state.classData[0]._id
//     })
//     .then(function(res) {
//       // console.log("Data is"+res.data)
//       // console.log(self);
//       // var friends = res.data;
//       console.log(res);
//       // self.setState(
//       //   {
//       //     students:friends
//       //   },
//       //   () => {
//       //     console.log(self.state.students);
//       //   }
//       // );
//     });
//  }
  getstudentslist() {
    const classroomid = localStorage.getItem("classroom_id");
    console.log(classroomid);
    var self = this;
    axios
      .post(`${API_URL}/student/getstudentbyclassid`, {
        classroomid: classroomid
        // classroomid: this.state.classData[0]._id
      })
      .then(function(res) {
        console.log("Data is"+res.data)
        console.log(self);
        var friends = res.data;
        console.log(friends);
        self.setState(
          {
            students:friends
          },
          () => {
            console.log(self.state.students);
          }
        );
      });
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            {this.state.students.map(student =>
            (
            
              <Col md={4}>
                <Card
                  title={student.name}
                  // category={}
                  // category={student.hw.map(homework=>(
                  //   {homework}
                  // ))}
                  
                  stats={student.email}
                  //  statsIcon="fa fa-history"
                  content={
                    
                    <div className="table-full-width">
                     {/* <div/> */}
                      {/* <table className="table"> */}
                      {student.hw.map(homework=>(
                      <ul>
                          <li><a href={homework} target="_blank">
                            Homework - {i++}
                          </a></li>
                        </ul>
                        ))}
                      {/* </table> */}
                    </div>
                  }
                  
                />
                {i = 1}
                {console.log(student.hw)}
                
              </Col>
              
            )
            )}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default StudentsList;
