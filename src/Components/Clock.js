import React from 'react';
import ReactDOM from 'react-dom/client';
import Button from './Button';

class Clock extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {date: new Date(),locale:'bn-BD'};
  //   this.handleClick = this.handleClick.bind(this);
  // }
  
  state = {
    date: new Date(),
    locale: "bn-BD"
  };


  componentDidMount(){
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.clockTimer);
  } 

  tick(){
    this.setState({date: new Date()});
  }

  handleClick=(locale)=>{
    this.setState({locale});
  }


  render(){
    console.log("Clock class render");
    const{date,locale} = this.state;
    return (
      <>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>
        {/* button type="button" onClick={this.handleClick.bind(this,'en-US')} */}
        <Button chnage={this.handleClick} locale="en-US">
          Click Here
        </Button> 
      </>
      
    );
  }

}
//const clock = new Clock();

ReactDOM.createRoot(document.getElementById('root')).render(<Clock local="bn-BD"/>);

export default Clock;