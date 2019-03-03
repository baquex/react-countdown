import React from 'react';

const Timeboxes= (props) =>(
  <div className="timer-box">

    <p className="num-display">{props.showNumber}</p>

    <p className="timer-box-label">{props.children}</p>
  </div>
);

export default Timeboxes;