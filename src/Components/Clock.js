import React from 'react';
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


  componentDidMount() {
    this.clockTimer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  handleClick = (locale) => {
    this.setState({ locale });
  }


  render() {
    const { date, locale } = this.state;
    const nextLocale = locale === 'bn-BD' ? 'en-US' : 'bn-BD';
    // let nextLocale;
    // if (locale === 'bn-BD') {
    //   nextLocale = 'en-US';
    // } else {
    //   nextLocale = 'bn-BD';
    // }
    return (
      <>
        <h1 className="heading">
          <span className="text">{date.toLocaleTimeString(locale)}</span>
        </h1>
        {/* button type="button" onClick={this.handleClick.bind(this,'en-US')} */}
        <Button change={this.handleClick} locale={nextLocale}>

        </Button>
      </>

    );
  }

}
//const clock = new Clock();

//ReactDOM.createRoot(document.getElementById('root')).render(<Clock local="bn-BD"/>);

export default Clock;