import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
// eslint-disable-next-line import/extensions
import Calculatorui from './Components/Calculatorui.js';
import Quotes from './Components/Quotes';
import Home from './Components/Home';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/CalculatorUI" element={<Calculatorui />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
