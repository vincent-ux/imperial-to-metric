import React from 'react';
import './App.css';

import Title from './components/Title';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Title text="Imperial to Metric Converter" />
      <Menu />
    </div>
  );
}

export default App;
