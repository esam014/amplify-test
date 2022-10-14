import React from "react";

function Form (props)
{
    return <div>
        <form>
            <label for="Title">Daily Check In</label><br />
            <label for="Weight">Weight</label><br />
            <input type="number" id="Weight" name="Weight" /><br />
            <label for="Measurements">Measurements...</label><br />
            <input type="number" id="Measurements" name="Measurements" /><br />
            <input type="submit" value="Submit" />
        </form>
    </div>
}

export default Form