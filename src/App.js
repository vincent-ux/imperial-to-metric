import React from 'react';
import './App.css';

import Title from './components/Title';
import Menu from './components/Menu';
import Converter from './components/Converter';



function App() {
  return (
    <div className="App">
      <Title text="Imperial to Metric Converter" />
      <Menu />
      <Converter />
    </div>
  );
}

export default App;
