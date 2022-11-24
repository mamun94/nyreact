import React from "react";

const ScaleNames = {
    c: 'Celsuis',
    f: 'Ferenheit',
}

export default function TemparatureInput (temperature, scale, onTemperatureChange) {
    return(
        <fieldset>
            <legend>Enter temperature in {ScaleNames[scale]}:</legend>
            <input 
                type="text"
                value={temperature}
                onChange = {(e) => onTemperatureChange(e, scale)}
            />
        </fieldset>
    );
}