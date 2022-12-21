import React from "react";
import "./BoxTracker.css"

function BoxTracker (props)
{
    return <div className="BoxTracker">
        <h1 className="Type">{props.Type}</h1>
        <h3>{props.Date}</h3>

        <ul>
            <li>{props.ShortTermGoal}</li>
            <li>{props.LongTermGoal}</li>
            <li>{props.Extra}</li>
        </ul>
    </div>
}

export default BoxTracker