import { Component } from "react";
import Login from "./Login";
import "./App.css";


class App extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
          <h1>Login form</h1>
          <Login />
        </div> 
    );
  }
}

export default App;

