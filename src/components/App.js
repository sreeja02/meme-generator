import React, { Component } from "react";
import { connect } from "react-redux";
import "../styles/index.css";
import MemeItem from "./MemeItem";

import { Form, FormGroup, FormLabel, FormControl } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      memeLimit: 10,
      text0: "",
      text1: "",
    };
  }
  render() {
    return (
      <div>
        <h2>
          <u>Welcome to React APP to Generate Memes</u>
        </h2>
        <h4>
          <i>Write Some Text</i>
        </h4>
        <Form inline>
          <FormGroup>
            <FormLabel>Top</FormLabel>{" "}
            <FormControl
              type="text"
              onChange={(event) => this.setState({ text0: event.target.value })}
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel>Bottom</FormLabel>{" "}
            <FormControl
              type="text"
              onChange={(event) => this.setState({ text1: event.target.value })}
            ></FormControl>
          </FormGroup>
        </Form>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return <MemeItem key={index} meme={meme} />;
        })}
        <div
          className="meme-button"
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          Load 10 more memes...
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, null)(App);
