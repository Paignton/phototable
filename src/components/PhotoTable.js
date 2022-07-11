import React, { Component } from "react";
import axios, { Axios } from "axios";
import "./table.css";

/* Steps
 * 1. Create a constructor rconst
 * 2. add the componentDidMount
 *
 */

class PhotoTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  componentDidMount() {
    //send the request to the server
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      //response from the server
      .then((response) => {
        console.log(response);
        this.setState({ photos: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteRow = (id, e) => {
    //e.preventDefault();
    // add to the button: onClick={(e) => rowDelete(photos.id, e)}
    axios
      .delete(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then((response) => {
        console.log("Deleted", response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { photos } = this.state;
    return (
      <div>
        <h1>List of Albums</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Thumbnail</th>
            <th>Delete</th>
          </tr>
          {photos.length //loops through each element of the photos array
            ? photos.map((photos) => (
                <tr key={photos.id}>
                  <td>{photos.id}</td>
                  <td>{photos.title}</td>
                  <td>
                    <img src={photos.url}></img>
                  </td>
                  <td>
                    <button onClick={(e) => this.deleteRow(photos.id, e)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : null}
        </table>
      </div>
    );
  }
}

export default PhotoTable;
