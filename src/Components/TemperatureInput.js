const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
export default function TemperatureInput({temperature, scale, onTemperatureChange}) {
    // state={
    //     temperature: '',
    // }
    // onTempChange = (e) => {
    //     this.setState({ temperature: e.target.value });
    // }


    return (
        <div>
            <fieldset>
                <legend>Enter Temperature in {scaleNames[scale]}:</legend>
                <input type="text" value={temperature} onChange={(e) => onTemperatureChange(e, scale)} />
                
            </fieldset>

        </div>
    );

};