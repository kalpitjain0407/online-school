import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";
import {API_URL} from "../config"
import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from "axios"
import avatar from "assets/img/faces/face-3.jpg";

class UserProfile extends Component {

  constructor(){
    super()
    this.state={
      name:"",
      email:""
    }
  }

  componentWillMount(){
    this.getProfile()
  }

  getProfile(){
    var self=this
    const email = localStorage.getItem("email");
    // console.log(self)
    axios({
      url: `${API_URL}/student/getstudents`,
      method: 'post',
      data: {
          email: email,
          // classroomid: this.state.classData[0]._id
      }
  }).then(function(res){

    self.setState({
      name:res.data[0].name,
      email:res.data[0].email
    },()=>{console.log(self.state.name)})
  })
  }

  render() {
    console.log(this.state)
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Your Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-5", "col-md-3", "col-md-4"]}
                      properties={[
                        {
                          label: "Name",
                          type: "text",
                          bsClass: "form-control",
                          // placeholder: "Company",
                          defaultValue: `${this.state.name}`,
                          disabled: true
                        },
                        {
                          label: "Age",
                          type: "text",
                          bsClass: "form-control",
                          // placeholder: "Company",
                          defaultValue: "14",
                          disabled: true
                        },
                        {
                          label: "Email",
                          type: "text",
                          bsClass: "form-control",
                          // placeholder: "Company",
                          defaultValue: `${this.state.email}`,
                          disabled: true
                        }
                      ]}
                    />
                    {/* <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "First name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "First name",
                          defaultValue: "Mike"
                        },
                        {
                          label: "Last name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Last name",
                          defaultValue: "Andrew"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Adress",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress",
                          defaultValue:
                            "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        }
                      ]}
                    /> */}
                    {/* <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          defaultValue: "Mike"
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                          defaultValue: "Andrew"
                        },
                        {
                          label: "Postal Code",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code"
                        }
                      ]}
                    /> */}

                    {/* <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                          />
                        </FormGroup>
                      </Col>
                    </Row> */}
                    {/* <Button bsStyle="info" pullRight fill type="submit">
                      Update Profile
                    </Button> */}
                    {/* <div className="clearfix" /> */}
                  </form>
                }
              />
            </Col>
            </Row>
            <Row>
            <Col md={8}>
              <UserCard
                bgImage="https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400"
                avatar={avatar}
                name={this.state.name}
                userName="Bright Minds Academy"
                
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default UserProfile;
