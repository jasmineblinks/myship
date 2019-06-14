import React, {Component} from 'react';
import './step.css';
import InputMask from 'react-input-mask';
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 



class StepTwo extends Component{


  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
 

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
    <div className="Form">
      <form onSubmit={this.handleSubmit} className="Contactform">
      <h2 className="Signup">Continue Sign Up</h2>
          <label>
       <p> Phone No:</p>
        
      <InputMask {...this.props} mask="+\1 " maskChar=" " placeholder="Phone No" />
      
      </label>
      <div className="Picker">
      <label>
         <p>Choose your Gender:</p> 
           <select value={this.state.value} onChange={this.handleChange}>
              <option value="male">Sex</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
            
          </select>
         </label>
         <label>
        <p>Date Of Birth:</p>
        
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
      
      </label>
      </div>
 

        
      <input type="submit" value="Submit" className="Pink"  />
      </form>
    </div>
    )
  }


}
export default StepTwo;


        
        
  