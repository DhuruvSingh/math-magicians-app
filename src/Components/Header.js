import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ display: 'flex' }}>
    <h1>Dhuruv Math Magic</h1>
    <ul style={{ display: 'flex' }}>
      <li><Link to="/" className="link">Home</Link></li>
      <li><Link to="/CalculatorUI" className="link">CalculatorUI</Link></li>
      <li><Link to="/Quotes" className="link">Quotes</Link></li>
    </ul>
  </header>
);

export default Header;
