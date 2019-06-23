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

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      tasklist: [],
      file:null
    };
    this.uploadimage = this.uploadimage.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentWillMount() {
    this.gettasklist();
  }

  gettasklist() {
    const email = localStorage.getItem("email");
    console.log(this);
    var self = this;
    axios
      .post(`${API_URL}/task`, {
        email: email
        // classroomid: this.state.classData[0]._id
      })
      .then(function(res) {
        console.log(self);
        console.log(res);
        var tasklist = [];
        if (res.data == "no tasks for today have fun") tasklist.push(res.data);
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

  onChange(e){
    this.setState({file:e.target.files[0]})
  }
// ${API_URL}/student
  uploadimage(e){
    const id=localStorage.getItem('student_id')
    e.preventDefault();
    const formData = new FormData();
    formData.append('hw',this.state.file);
    formData.set('id', id);
    axios({
      method: 'put',
      url: `${API_URL}/student`,
      data: formData,
      config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
    // const config = {
    //     headers: {
    //         'content-type': 'multipart/form-data'
    //     }
    // };
    // axios.put(`${API_URL}/student`,formData,config)
    //     .then((response) => {
    //         alert("The file is successfully uploaded");
    //     }).catch((error) => {
    // });
}

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
                      {/* <hr className="footer stats" /> */}
                      <Tasks tasklist={this.state.tasklist} />
                    </table>
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
                          // action={`/${API_URL}/student`}
                          // enctype="multipart/form-data"
                          // method="PUT"
                          onSubmit={this.uploadimage}
                        >
                        <p>
                          <input type="file" name="hw" onChange={this.onChange} accept="image/*" />
                        </p>
                        <input
                          type="submit"
                          value="Upload an Image"
                          class="btn btn-success"
                          id="submitbutton"
                          // onClick={this.uploadimage}
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
                      <a target="_blank" href={`http://192.168.21.84:5000?roomName=${localStorage.getItem("classroom_id")}&userName=${localStorage.getItem("email")}`} style={{ padding: "3%" }}>
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

export default Dashboard;
