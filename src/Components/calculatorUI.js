import './calculatorui.css';
import { useState } from 'react';
import calculate from '../logic/calculate';
import Header from './Header';

const Calculatorui = () => {
  const [state, setState] = useState({ total: '', next: '', operation: '' });

  const handleClick = (event) => {
    const value = event.target.textContent;
    const solution = calculate(state, value);
    setState(solution);
  };

  const { total, next, operation } = state;
  return (
    <>
      <div className="calculatorMain">
        <Header />
        <h3>Lets do some Math!</h3>
        <div className="outputBox">
          {total}
          {operation}
          {next}
        </div>
        <KeyBoard handler={handleClick} />
      </div>
    </>

  );
};

const KeyBoard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { handler } = props;
  return (
    <div className="mainCalc">
      <div className="buttons">
        <div className="calcNumBtn">
          <button type="button" onClick={handler} className=" numBtn numBtnAC">AC</button>
          <button type="button" onClick={handler} className=" numBtn numBtn+/-">+/-</button>
          <button type="button" onClick={handler} className=" numBtn numBtn%">%</button>
          <button type="button" onClick={handler} className=" numBtn numBtn7">7</button>
          <button type="button" onClick={handler} className=" numBtn numBtn8">8</button>
          <button type="button" onClick={handler} className=" numBtn numBtn9">9</button>
          <button type="button" onClick={handler} className=" numBtn numBtn4">4</button>
          <button type="button" onClick={handler} className=" numBtn numBtn5">5</button>
          <button type="button" onClick={handler} className=" numBtn numBtn6">6</button>
          <button type="button" onClick={handler} className=" numBtn numBtn1">1</button>
          <button type="button" onClick={handler} className=" numBtn numBtn2">2</button>
          <button type="button" onClick={handler} className=" numBtn numBtn3">3</button>
          <button type="button" onClick={handler} className=" numBtn numBtn0">0</button>
          <button type="button" onClick={handler} className=" numBtn numBtn.">.</button>
        </div>
        <div className="calcFunctionBtn">
          <button type="button" onClick={handler} className=" numBtn functionBtn/">÷</button>
          <button type="button" onClick={handler} className=" numBtn functionBtnX">x</button>
          <button type="button" onClick={handler} className=" numBtn functionBtn-">-</button>
          <button type="button" onClick={handler} className=" numBtn functionBtn+">+</button>
          <button type="button" onClick={handler} className=" numBtn functionBtn=">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculatorui;
