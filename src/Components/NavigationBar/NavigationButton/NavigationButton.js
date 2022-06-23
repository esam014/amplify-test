import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import './NavigationButton.css';

function NavigationButton (props)
{
    return (
        <nav>
            <div className="navButton">
                <Link className={'Link'} to={props.Page.path} key={props.Page.key} >{props.Page.Title}</Link>
            </div>
        </nav>
    )
}

export default NavigationButton