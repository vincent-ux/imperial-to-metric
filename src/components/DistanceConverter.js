import React from 'react';
import './DistanceConverter.css';

class DistanceConverter extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      miles: '0',
      kilometers: ' '
    }
  }

  convertToKilometers(miles){
    let km =  miles * 1.609;
    this.setState({kilometers: km});
  }
  

  doesChange(thisElement){
    this.setState({miles: thisElement.target.value});
    this.convertToKilometers(thisElement.target.value);
  }

  render () {
    return (
      <div className='Distance'> 
        <h3>Miles to Kilometers</h3>
        <label htmlFor="inputField">Miles: </label>
        <input type="text" id="inputField"
                value={this.state.miles}
                onChange={(thisElement) => this.doesChange(thisElement) } />

        <button onClick={() => this.convertToKilometers() } >Convert</button>
        <p>Kilometers: {this.state.kilometers} </p>
    </div>
    );
  }

}

export default DistanceConverter;