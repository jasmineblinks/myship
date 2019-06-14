import React, { Component } from 'react';

export default class StepZero extends Component {
  handleUpdateStep = () => {
    this.props.handleNextStep(1)
  }

  render() {
    return ( 
      <div className="Container"  >
        <h1 className="Display">DO YOU WANT US TO SHIP THIS TO YOU?</h1>
        <div className="My-button">
          <button className="Btn-yes" onClick={this.handleUpdateStep}>Yes</button>
          <button className="Btn-no">No</button>
        </div>
      </div>
    )
  }
};
