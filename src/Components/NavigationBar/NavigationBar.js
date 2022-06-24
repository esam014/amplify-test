import React, {useState, useEffect} from "react";
import NavigationButton from "./NavigationButton/NavigationButton";
import "./NavigationBar.css";

function NavigationBar (props)
{
    return(
        <div className="navbar">
            {props.PageList.map((page) =>
            {
                return <NavigationButton Page={page} key ={page.key}/>
            })}
            
            <button className="SignOutBtn" onClick={props.signOut}>Sign out</button>
        </div>
    )
}

export default NavigationBar