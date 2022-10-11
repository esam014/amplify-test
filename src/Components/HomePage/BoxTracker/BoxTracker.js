import React from "react";
import "./BoxTracker.css"

function BoxTracker (props)
{
    return <div className="BoxTracker">
        <h1 className="Type">{props.Type}</h1>
        <h3>{props.Date}</h3>

        <h2>Short Term</h2>
        <h3>{props.ShortGoal}</h3>
        <h2>Long Term</h2>
        <h3>{props.LongGoal}</h3>
    </div>
}

export default BoxTracker