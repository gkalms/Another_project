import React, { Component } from "react";

class Login extends Component {
    constructor() {
        super();
    // username and password will be set to empty by default when the form loads
        this.state = {
            name: "",
            password: "",
        };
    }
    // this is the function called when a change occurs in our "inputs"
    handleChange = (e) => {

        //e.target.name = this identifies which input field (the Key in the (key:value) pair) is changing
        //e.target.value = this then applies the value from that input field change

        this.state = ({
            [e.target.name]: e.target.value,
        });
    };
    render() {
        return <form>
            <input
                type="text"
                name="username"
                value={this.state.username}
                placeholder="Enter username"
                onChange={this.handleChange}
            />
            <input
                type="password"
                name="password"
                value={this.state.password}
                placeholder="Enter password"
                onChange={this.handleChange}
            />
        </form>;
    }
}

export default Login;