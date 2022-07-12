import React from "react";
import "./Container.css";

function Container (props)
{
    return <div className="MessageContainer">
        <h2 className="Title">{props.Title}</h2>
        {props.Messages.map((message) => {
            return <h3>{message}</h3>
        })}
    </div>
}

export default Container