/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// eslint-disable-next-line import/extensions
import CalculatorUI from './Components/CalculatorUI.js';
import Quotes from './Components/Quotes';
import Home from './Components/Home';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/CalculatorUI" element={<CalculatorUI />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
