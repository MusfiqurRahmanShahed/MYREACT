import React from 'react';
import ReactDOM from 'react-dom/client';
class Clock extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {date: new Date()};
  // }
  
  state = {
    date: new Date()
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

  render(){
    return (
      <h1 className="heading">
        <span className="text">{this.state.date.toLocaleTimeString(this.props.local)}</span>
      </h1>
    );
  }

}
//const clock = new Clock();

ReactDOM.createRoot(document.getElementById('root')).render(<Clock local="bn-BD"/>);

export default Clock;