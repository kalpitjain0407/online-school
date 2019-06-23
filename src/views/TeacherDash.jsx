import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";
import { API_URL } from "../config";
import { Card } from "components/Card/Card.jsx";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import { Tasks } from "components/Tasks/Tasks.jsx";
import axios from "axios";
import {
  dataPie,
  legendPie,
  dataSales,
  optionsSales,
  responsiveSales,
  legendSales,
  dataBar,
  optionsBar,
  responsiveBar,
  legendBar
} from "variables/Variables.jsx";

class TeacherDash extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      tasklist: []
    };
    // this.handleName = this.handleName.bind(this)
  }

  componentWillMount() {
    this.gettasklist();
  }

  gettasklist() {
    const email = localStorage.getItem("email");
    const classroomid = localStorage.getItem("classroom_id");
    console.log(this);
    var self = this;
    axios
      .post(`${API_URL}/task/teachtask`, {
        classroomid: classroomid
        // classroomid: this.state.classData[0]._id
      })
      .then(function(res) {
        console.log(self);
        console.log(res);
        console.log(typeof res.data);
        var tasklist = [];
        if ((res.data) == "no task") {}
        else tasklist = res.data[0].task;
        console.log(tasklist);
        self.setState(
          {
            tasklist
          },
          () => {
            console.log(self.state.tasklist);
          }
        );
      });
  }

  handleAddTask = event => {
    this.setState({ task: event.target.value }, () => {
      console.log(this.state.task);
    });
  };

  post = event => {
    console.log(event.target.value);
    this.setState({ task: event.target.value });
    //document.getElementById('ul');
    // this.state.item(event.target.value);
    console.log(this.state.task);
    this.state.tasklist.push(this.state.task);
    console.log(this.state.tasklist);
    // this.setState({ task: "" });
    var self = this;
    axios
      .post(`${API_URL}/task/addtask`, {
        classroomid: localStorage.getItem("classroom_id"),
        task: this.state.task
        // classroomid: this.state.classData[0]._id
      })
      .then(function() {
        self.setState({
          task: ""
        });
      });
  };

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          {/* <Row> */}
          {/* <Col lg={3} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Capacity"
                statsValue="105GB"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col> */}
          {/* </Row> */}
          {/* <Row>
            <Col md={8}>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Users Behavior"
                category="24 Hours performance"
                stats="Updated 3 minutes ago"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataSales}
                      type="Line"
                      options={optionsSales}
                      responsiveOptions={responsiveSales}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendSales)}</div>
                }
              />
            </Col>
            <Col md={4}>
              <Card
                statsIcon="fa fa-clock-o"
                title="Email Statistics"
                category="Last Campaign Performance"
                stats="Campaign sent 2 days ago"
                content={
                  <div
                    id="chartPreferences"
                    className="ct-chart ct-perfect-fourth"
                  >
                    <ChartistGraph data={dataPie} type="Pie" />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendPie)}</div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <Card
                id="chartActivity"
                title="2014 Sales"
                category="All products including Taxes"
                stats="Data information certified"
                statsIcon="fa fa-check"
                content={
                  <div className="ct-chart">
                    <ChartistGraph
                      data={dataBar}
                      type="Bar"
                      options={optionsBar}
                      responsiveOptions={responsiveBar}
                    />
                  </div>
                }
                legend={
                  <div className="legend">{this.createLegend(legendBar)}</div>
                }
              />
            </Col> */}
          <Row>
            <Col md={6}>
              <Card
                title="Assignments"
                // statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      <hr className="footer stats" />
                      {this.state.tasklist !== undefined && (
                        <Tasks tasklist={this.state.tasklist} />
                      )}
                    </table>
                    <div class="wrap-input100 validate-input">
                      {/* <input
                        class="wrap-input100"
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="Add Task"
                        onChange={this.handleAddTask}
                      /> */}
                      {/* <div>
                        <div className="input-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Recipient's username"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-secondary"
                              type="button"
                            >
                              Button
                            </button>
                          </div>
                        </div>
                      </div> */}

                      {/* <div className="input-group mb-3"> */}
                      <input
                        style={{ display: "inline-block", width: "82%" }}
                        onChange={this.handleAddTask}
                        type="text"
                        value={this.state.task}
                        className="form-control"
                        placeholder="New task for student"
                        aria-label="New task for student"
                        aria-describedby="basic-addon2"
                      />
                      {/* <div className="input-group-append"> */}
                      <button
                        className="btn btn-success"
                        type="button"
                        onClick={this.post}
                        style={{ height: "auto" }}
                      >
                        Add Task
                      </button>
                      {/* </div> */}
                      {/* </div> */}
                      <span className="focus-input100-1" />
                      <span className="focus-input100-2" />
                    </div>
                    {/* <button onClick={this.post}>Add Task</button> */}
                  </div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="Quote of the day!!"
                category="Rolling stones gather no moss"
                stats="-Maharishi Rishabh"
                //  statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table" />
                  </div>
                }
              />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Card
                title="Upload your assignment"
                // statsIcon="fa fa-history"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      {/* <a href="#" style={{padding: "3%"}}>Upload</a> */}
                      {/* code entered */}

                      <div style={{ padding: "3%" }}>
                        <hr />

                        <form
                          action="/uploadphoto"
                          enctype="multipart/form-data"
                          method="POST"
                        >
                          <p>
                            <input
                              type="file"
                              name="picture"
                              accept="image/*"
                            />
                          </p>
                          <input
                            type="submit"
                            value="Upload an Image"
                            class="btn btn-success"
                          />
                        </form>
                      </div>

                      {/* code ended */}
                    </table>
                  </div>
                }
              />
            </Col>
            <Col md={6}>
              <Card
                title="Go to your classroom"
                // statsIcon="fa fa-history"
                // category="Enter Classroom"
                content={
                  <div className="table-full-width">
                    <table className="table">
                      {/* <Tasks /> */}
                      <a target="_blank" href={`http://localhost:5000/create?roomName=${localStorage.getItem("classroom_id")}&userName=${localStorage.getItem("email")}`} style={{ padding: "3%" }}>
                       Enter classroom
                      </a>
                    </table>
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TeacherDash;
