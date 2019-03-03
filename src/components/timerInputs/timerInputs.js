import React from 'react';

const TimerInputs = (props) =>(
  <div className="input-fields">
    <label>{props.children}</label>
    <input 
          type="number" 
          min="0" 
          max="365" 
          maxLength="3" 
          value={props.value} 
          onChange={props.handleInput}
          name={props.children}
          
          />
  </div>

)

export default TimerInputs;