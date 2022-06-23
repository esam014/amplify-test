import React, {useState, useEffect} from "react";
import NavigationButton from "./NavigationButton/NavigationButton";
import PageList from "../pageList";
import "./NavigationBar.css";

function NavigationBar (props)
{
    return(
        <div className="navbar">
            {props.PageList.map((page) =>
            {
                return <NavigationButton Page={page} />
            })}
        </div>
    )
}

export default NavigationBar