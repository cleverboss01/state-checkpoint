import React, { Component } from "react";
import "./App.css";
import pic from "./profile.jpg";

class App extends Component {
  state = {
    person: {
      fullname: "Daniel Ndubuisi",
      bio: "Musician, React Developer & Creator",
      profession: "Fullstack developer",
      imgSrc: "./profile.jpg",
    },
    count: 0,
    shows: true,
  };

  handleShow = () =>
    this.setState((prevState) => ({ ...prevState, shows: !prevState.shows }));

  // Component life cycle field
  componentDidMount() {
    const newIntervalId = setInterval(() => {
      this.setState((prevState) => {
        return {
          ...prevState,
          count: prevState.count + 1,
        };
      });
    }, 1000);

    this.setState((prevState) => {
      return {
        ...prevState,
        intervalId: newIntervalId,
      };
    });
  }

  render() {
    const { imgSrc, fullname, bio, profession } = this.state.person;

    return (
      <div className="App">
        <header className="App-header">
          <img src={pic} alt="profile-pic" style={{ borderRadius: "50%" }} />

          {this.state.shows && (
            <div>
              <img src={imgSrc} alt="" style={{ display: "none" }} />
              <h2 style={{ color: "greenyellow" }}>{fullname}</h2>
              <h3>{bio}</h3>
              <h4>{profession}</h4>
              <small>This user logged in {this.state.count} seconds ago</small>
            </div>
          )}
          <button onClick={this.handleShow}>
            {this.state.shows ? "Hide" : "Show"} Profile
          </button>
        </header>
      </div>
    );
  }
}

export default App;
