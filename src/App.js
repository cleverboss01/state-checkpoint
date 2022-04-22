import React, { Component } from "react";
import "./App.css";
// import pic from "./profile.jpg";

class App extends Component {
  state = {
    person: {
      fullname: "Daniel Ndubuisi",
      bio: "Music and React Lover",
      profession: "Fullstack developer",
      imgSrc: "./profile.jpg",
    },
    shows: true,
  };

  handleShow = () => this.setState({ person: { fullname: "James Bond" } });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.person.imgSrc}
            alt="profile-pic"
            style={{ borderRadius: "50%" }}
          />
          <h2>{this.state.person.fullname}</h2>
          <h3>{this.state.person.bio}</h3>
          <h4>{this.state.person.profession}</h4>
          <button onClick={this.handleShow}>Show Profile</button>
        </header>
      </div>
    );
  }
}

export default App;
