import React, { Component } from "react";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import Checkbox from "components/CustomCheckbox/CustomCheckbox.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

export class Tasks extends Component {
  constructor(props){
    super(props)
    
  }
  handleCheckbox = event => {
    const target = event.target;
    console.log(event.target);
    this.setState({
      [target.name]: target.checked
    });
  };
  render() {
    {console.log(this.props)}
    // const edit = <Tooltip id="edit_tooltip">Edit Task</Tooltip>;
    // const remove = <Tooltip id="remove_tooltip">Remove</Tooltip>;
    // const tasks_title = [
    //   'Sign contract for "What are conference organizers afraid of?"',
    //   "Lines From Great Russian Literature? Or E-mails From My Boss?",
    //   "Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroi",
    //   "Create 4 Invisible User Experiences you Never Knew About",
    //   'Read "Following makes Medium better"',
    //   "Unfollow 5 enemies from twitter"
    // ];
    const tasks_title = this.props.tasklist
    // console.log(JSON.stringify(tasks_title))
    var tasks = [];
    var number;
    // if(JSON.stringify(tasks_title)!=='{}'){
    for (var i = 0; i < tasks_title.length; i++) {
      number = "checkbox" + i;
      tasks.push(
        <ul key={i}>
          {/* <td>
            <Checkbox
              number={number}
              isChecked={i === 1 || i === 2 ? true : false}
            />
          </td> */}
          <p>{`${i+1}. `}{tasks_title[i]}</p>
          
          {/* <td className="td-actions text-right">
            <OverlayTrigger placement="top" overlay={edit}>
              <Button bsStyle="info" simple type="button" bsSize="xs">
                <i className="fa fa-edit" />
              </Button>
            </OverlayTrigger>

            <OverlayTrigger placement="top" overlay={remove}>
              <Button bsStyle="danger" simple type="button" bsSize="xs">
                <i className="fa fa-times" />
              </Button>
            </OverlayTrigger>
          </td> */}
        </ul>
        

      );
      
    }
    // }
    return <tbody>{tasks}</tbody>;
  }
}

export default Tasks;
