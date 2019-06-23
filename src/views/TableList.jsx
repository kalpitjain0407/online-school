import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";
import axios from "axios";
import { textChangeRangeIsUnchanged } from "typescript";
import {API_URL} from "../config"
class TableList extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
    this.getfriendslist = this.getfriendslist.bind(this);
    // this.getFr=this.getFr.bind(this)
  }

  componentDidMount() {
    this.getfriendslist();
  }

  getfriendslist() {
    const email = localStorage.getItem("email");
    console.log(this);
    var self = this;
    axios
      .post(`${API_URL}/student/getfriends`, {
        email: email
        // classroomid: this.state.classData[0]._id
      })
      .then(function(res) {
        console.log(self);
        var friends = res.data;
        console.log(friends);
        self.setState(
          {
            friends
          },
          () => {
            console.log(self.state.friends);
          }
        );
      });
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            {this.state.friends.map(friend =>
            (
              <Col md={4}>
                <Card
                  title={friend.name}
                  category={`Class: ${friend.standard}`}
                  stats={friend.email}
                  //  statsIcon="fa fa-history"
                  content={
                    <div className="table-full-width">
                      <table className="table" />
                    </div>
                  }
                />
              </Col>
            )
            )}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
