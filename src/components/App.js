import React,{Component} from 'react';
import Timeboxes from './timeboxes/timeboxes';
import TimerInputs from './timerInputs/timerInputs';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      days:0,
      hours:0,
      minutes:0,
      seconds:0
    }
    
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });

    if ((event.target.name === 'hours') && (event.target.value > 24)){
      alert('hours must be between 0-24');
      this.setState({
        hours:''
      });
    }
    if ((event.target.name === 'minutes') && (event.target.value > 60)){
      alert('minutes must be between 0-60');
      this.setState({
        minutes:''
      });
    }
    if ((event.target.name === 'seconds') && (event.target.value > 60)){
      alert('seconds must be between 0-60');
      this.setState({
        seconds:''
      });
    }
  }


  beginCountdown = () =>{

    let secs = this.state.seconds;
    let mins = this.state.minutes;
    let hrs = this.state.hours;
    let days = this.state.days;

    let counterInterval = setInterval(function(){
     

      if ((secs === 0) && (mins === 0) && (hrs === 0) && (days === 0))
        clearInterval(counterInterval);
      
        
      if (secs === 0){
        if (mins > 0){
          mins--;
          secs = 59;
        }
        else if (hrs > 0){
          hrs--;
          mins=59;
          secs=59;
        } else if(days>0){
          days--;
          hrs = 23;
          mins = 59;
          secs = 59;
        }
      }

      this.setState({
        days: days,
        hours: hrs,
        minutes: mins,
        seconds: secs,
        
      });
      secs-=1;
      
      
    }.bind(this),1000);

  }

  render(){
    console.log(this.state);
    
    return(
      <div className="container">
        
        <h2>Set the timer here:</h2>
      
         <div className="inputs">
          <TimerInputs handleInput={this.handleInput} value={this.state.days}>days</TimerInputs>
          <TimerInputs handleInput={this.handleInput} value={this.state.hours}>hours</TimerInputs>
          <TimerInputs handleInput={this.handleInput} value={this.state.minutes}>minutes</TimerInputs>
          <TimerInputs handleInput={this.handleInput} value={this.state.seconds}>seconds</TimerInputs>
          
          <button onClick={this.beginCountdown}> Start Countdown </button>
        </div>
        <div id="entire-counter">
          <Timeboxes showNumber={this.state.days}>Days</Timeboxes> 
          <Timeboxes showNumber={this.state.hours}>Hours</Timeboxes> 
          <Timeboxes showNumber={this.state.minutes}>Minutes</Timeboxes> 
          <Timeboxes showNumber={this.state.seconds}>Seconds</Timeboxes> 
        </div>

      </div>
    )
  }


}

export default App;

