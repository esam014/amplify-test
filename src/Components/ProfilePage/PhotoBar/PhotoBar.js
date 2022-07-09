import React from "react";
import "./PhotoBar.css";

function PhotoBar (props)
{
    return <div className="PhotoBar">
        {props.Photos.map((Photo) =>
        {
            return <div>
                <img src={Photo} alt="" />
                </div>
        })}
    </div>
}

export default PhotoBar