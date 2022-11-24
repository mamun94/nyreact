import React from "react";
import { convert, toCelsius, toFahrenheit,  } from "../lib/converter";
import TemparatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

export default class Calculator extends React.Component {
    state = {temperature: '', scale:'c'};

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render(){

        const {temperature, scale} = this.state;
        const celsious = scale === 'f' ? convert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? convert(temperature, toFahrenheit) : temperature;

        return(
            <div>
                <TemparatureInput scale='c' temperature={celsious} onTemperatureChange = {this.handleChange}/>
                <TemparatureInput scale='f' temperature={fahrenheit} onTemperatureChange = {this.handleChange}/>
                <BoilingVerdict celsious={parseFloat(temperature)} />
            </div>
        );
    }
}