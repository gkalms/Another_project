// import { Component } from "react";
import React from "react";
import logo from "./logo.svg";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <p>Welcome {this.props.name}</p>
        <h1>Course Title:{this.props.title}</h1>
        <img
          src={this.props.imgSrc ? this.props.imgSrc : logo}
          className="App-logo"
          alt="logo"
        />
        <p>Summary: {this.props.summary}</p>
      </div>
    );
  }
}

export default HelloWorld;
