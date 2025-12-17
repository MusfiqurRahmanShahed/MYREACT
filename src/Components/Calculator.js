import React from 'react';
import TemperatureInput from './TemperatureInput'; 
import { tryConvert, toCelsius, toFahrenheit } from '../lib/Converter';
import BoilingVerdict from './BoilingVerdict';
export default class Calculator extends React.Component {
    state = {
        temperature: '',
        scale: 'c'
    }
    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale: scale
        });
    };
    // onTempChange = (e) => {
    //     this.setState({ temperature: e.target.value });
    //     if(e.target.id==='c'){
    //         this.setState({celsius:e.target.value});

    //         //this.setState({fahrenheit:(e.target.value*9/5)+32});
    //     }else if(e.target.id==='f'){
    //         this.setState({fahrenheit:e.target.value});
    //         //this.setState({celsius:(e.target.value-32)*5/9});
    //     }
    // }

    render() {
        const { temperature, scale } = this.state;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput temperature={celsius} scale="c" onTemperatureChange={this.handleChange} />
                <TemperatureInput temperature={fahrenheit} scale="f" onTemperatureChange={this.handleChange} />
                <BoilingVerdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}