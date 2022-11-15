import React from "react";
import "./Date.css"

function Date (props)
{
    return <div className="Date">
        <h3>{props.Workout}</h3>

        <p>{props.Date}</p>
    </div>
}

export default Date