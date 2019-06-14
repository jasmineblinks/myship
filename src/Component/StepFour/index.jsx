import React, { Component } from 'react';
import './index.css';

class LoginForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: ""
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleUpdateStep = (event) => {
    event.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password === confirmPassword) {
      this.props.handleNextStep(2)
    } else {
      this.setState({
        error: "Password doesn't match"
      })
    }
  }

  // renderAddress = () => {
  //   const {error} = this.state;
  //   if (error) {
  //     return (<div>I am here</div>);
  //   }
  // }

  render() {
    const { error } = this.state;

    return (
      <div>
        <p>{error}</p>
        {/* {this.renderAddress} */}
        <form onSubmit={this.handleUpdateStep}>
          <label>
            Name:
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange} pattern='[A-Z][a-zA-Z][^#<>\"~;$^%{}?]{1,20}$' title="Enter a valid name"/>
          </label>

          <label>
            Email:
          <input type="email"  name="email"value={this.state.email} onChange={this.handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" title="Enter a valid email address" />
          </label>

          <label>
            Password:
          <input type="password"  name="password"value={this.state.password} onChange={this.handleChange} pattern=".{4,}" title="Enter a valid password"/>
          </label>

          <label>
            Confirm Password:
          <input type="password" name="confirmPassword" value={this.state.value} onChange={this.handleChange} pattern=".{4,}" title="Enter a valid password"/>
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
export default LoginForm;



