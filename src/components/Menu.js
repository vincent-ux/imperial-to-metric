import React from 'react';
import './Menu.css';

import TemperatureConverter from './TemperatureConverter';
import DistanceConverter from './DistanceConverter';

class Menu extends React.Component {
  
  constructor(props){
    super(props);

    this.state = {
      converter: 'distance'
    }
  }

  render(){

    // Creates a varaible which assigned a componenet, notice no { } are required as it is outside of return
    let converter;
    converter = this.state.converter === 'distance' ? <DistanceConverter/> : <TemperatureConverter/>

    return(
      <div className='Menu'>
        <button onClick={() => this.setState({converter: 'distance'})}>Distance</button>
        <button onClick={() => this.setState({converter: 'temperature'})}> Temperature</button>
        { this.state.converter === 'distance' ? <DistanceConverter/> : <TemperatureConverter/>}

        { converter }
      </div>
    );

    // notice how this.converter isn't required
    // if-else statements are not valid within JSX
  }
}

export default Menu;