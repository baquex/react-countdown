import React,{Component} from 'react'

class SetTimer extends Component {
  // constructor(props){
//     super(props);

//     this.state = {
//       days: '',
//       hours: '',
//       minutes: '',
//       seconds: '',
//     }

// }

render(){
  console.log(this.props);
  
  return(
    <div className="inputs">
        <div className="input-fields">
          <label>Days</label>
          <input type="number" min="0" max="365" maxLength="3"/>
        </div>
        <div className="input-fields">
          <label>Hours</label>
          <input type="number" min="0" max="24" maxLength="2"/>
        </div>
        <div className="input-fields">
          <label>Minutes</label>
          <input type="number" min="0" max="60" maxLength="2"/>
        </div>
        <div className="input-fields">
          <label >Seconds</label>
          <input type="number" min="0" max="60" maxLength="2"/>
        </div>

        <button onClick={this.props.children.handleClick}>Start Counter</button>
      </div>
  );
}
}


export default SetTimer;