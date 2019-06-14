/* eslint-disable default-case */
import React, { Component } from 'react';
import './App.css';

import StepZero from './Component/StepZero'
import StepOne from './Component/StepOne';
import StepTwo from './Component/StepTwo';
import StepThree from './Component/StepThree';


export default class App extends Component {
  state = {
    currentIteration: 0
  }
  

  handleNextStep = (step) => {
    console.log(step)
    this.setState({
      currentIteration: step
    })
  }

  render() {
    const { currentIteration } = this.state

    switch (currentIteration) {
      case 0:
        return <StepZero handleNextStep={this.handleNextStep} />
      case 1:
        return <StepOne handleNextStep={this.handleNextStep} />
      case 2:
        return <StepTwo handleNextStep={this.handleNextStep} />
        case 3:
          return <StepThree handleNextStep={this.handleNextStep} />
          
        

    };
  }
};
