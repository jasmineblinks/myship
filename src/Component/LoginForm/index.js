import React, {Component} from 'react';
import './index.css';

class LoginForm extends Component{
    render(){
        return(
            <div>
             <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <label>
          Email:
          <input type="email" value={this.state.value} onChange={this.handleChange} />
        </label>
        
        <label>
          Password:
          <input type="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        
        <label>
          Confirm Password:
          <input type="password" value={this.state.value} onChange={this.handleChange} />
        </label>
        
        
        <input type="submit" value="Submit" />
      </form>
            </div>
        )
    }
}
export default LoginForm;



