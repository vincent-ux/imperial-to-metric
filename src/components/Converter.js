import React from 'react';

function Converter() {
  return (
    <div>
      <label for="inputField">Miles: </label>
      <input type="text" id="inputField"/>
      <button>Convert</button>
      <p>Kilometers: </p>
    </div>
  );
}

export default Converter;