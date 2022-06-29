import React, {useState, useEffect} from "react";
import Goal from "./Components/HomePage/Goal/Goal";
import Progress from "./Components/HomePage/Progress/Progress";

function HomePage ()
{
    const Title = "Home Page";
    
    return (
        <div>
            <h1>HomePage</h1>

            <Goal />

            <Progress />
        </div>
    )
}

export default HomePage;
