import React, {Component} from 'react';
import './step.css';

class StepTwo extends Component{
    render(){
        return(
            <div>
             <form onSubmit={this.handleSubmit}>
        <label>
          Date Of Birth:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>

        <label>
          Phone No:
          <input type="email" value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            
          </select>
        </label>

        
        
        <input type="submit" value="Submit" />
      </form>
            </div>
        )
    }
}
export default LoginForm;



