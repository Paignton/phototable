import React, { Component } from "react";
import axios, { Axios } from "axios";
import "./table.css";

/* Steps
 * 1. Create a constructor rconst to set the stats of the attributes
 * 2. add the changeHandler to update the state when the value is changed.
 *
 */

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoid: "",
      title: "",
    };
  }
  //takes the value and name and sets the state
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addList = (e) => {
    e.preventDefault();
    // add to the button: onClick={(e) => rowDelete(photos.id, e)}
    console.log(this.state);
    axios
      .post(`https://jsonplaceholder.typicode.com/photos`, this.state)
      .then((response) => {
        console.log("Added ", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { photoid, title } = this.state;
    return (
      <div>
        <form onSubmit={this.addList}>
          <input
            type="text"
            //placeholder="Photo ID"
            name="photoid"
            value={photoid}
            onChange={this.changeHandler}
          ></input>
          <br />
          <input
            type="text"
            //placeholder="Title"
            name="title"
            value={title}
            onChange={this.changeHandler}
          ></input>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
