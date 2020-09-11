import React from 'react';
import './TemperatureConverter.css';

class TemperatureConverter extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      fahrenheit: '0',
      celsius: ' '
    }
  }

  convertToCelsius(fahrenheit){
    let celsius =  (fahrenheit - 32) * 5/9;
    this.setState({celsius: celsius});
  }
  

  doesChange(thisElement){
    this.setState({fahrenheit: thisElement.target.value});
    this.convertToCelsius(thisElement.target.value);
  }

  render () {
    return (
      <div className='Temperature'> 
        <h3>Fahreinheit to Celsius</h3>
        <label htmlFor="inputField">Fahrenheit: </label>
        <input type="text" id="inputField"
             value={this.state.fahrenheit}
             onChange={(thisElement) => this.doesChange(thisElement) } />

        <button onClick={() => this.convertToCelsius() } >Convert</button>
        <p>Celsius: {this.state.celsius} </p>
    </div>
    );
  }

}

export default TemperatureConverter;