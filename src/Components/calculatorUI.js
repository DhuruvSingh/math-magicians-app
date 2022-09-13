import './calculatorUI.css';
import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class CalculatorUI extends React.Component {
// eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainCalc">
        <div className="outputBox">0</div>
        <div className="buttons">
          <div className="calcNumBtn">
            <button type="button" className=" numBtn numBtnAC">AC</button>
            <button type="button" className=" numBtn numBtn+/-">+/-</button>
            <button type="button" className=" numBtn numBtn%">%</button>
            <button type="button" className=" numBtn numBtn7">7</button>
            <button type="button" className=" numBtn numBtn8">8</button>
            <button type="button" className=" numBtn numBtn9">9</button>
            <button type="button" className=" numBtn numBtn4">4</button>
            <button type="button" className=" numBtn numBtn5">5</button>
            <button type="button" className=" numBtn numBtn6">6</button>
            <button type="button" className=" numBtn numBtn1">1</button>
            <button type="button" className=" numBtn numBtn2">2</button>
            <button type="button" className=" numBtn numBtn3">3</button>
            <button type="button" className=" numBtn numBtn0">0</button>
            <button type="button" className=" numBtn numBtn.">.</button>
          </div>
          <div className="calcFunctionBtn">
            <button type="button" className=" numBtn functionBtn/">÷</button>
            <button type="button" className=" numBtn functionBtnX">x</button>
            <button type="button" className=" numBtn functionBtn-">-</button>
            <button type="button" className=" numBtn functionBtn+">+</button>
            <button type="button" className=" numBtn functionBtn=">=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CalculatorUI;
