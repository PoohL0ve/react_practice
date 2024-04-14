import React, {useState} from "react";

function Color() {
    const [colour, setColour] = useState("#ffffff");

    function handleChange(event) {
        setColour(event.target.value);
    }

    return (
        <div className="container">
            <h1>Colour Picker</h1>
            <div className="colour-display" style={{backgroundColor:colour}}>
                <p>{colour}</p>
            </div>
            <label className="chooser">Pick a colour: 
                <input type="color" value={colour} onChange={handleChange}/>
            </label>

        </div>
    );
}

export default Color