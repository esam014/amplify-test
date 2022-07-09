import React from "react";
import Goal from "./Components/HomePage/Goal/Goal";
import Progress from "./Components/HomePage/Progress/Progress";
import Calendar from "react-calendar";
import "./Components/HomePage/HomePage.css";
import Spacer from "./Components/Spacer";
function HomePage ()
{
    return (
        <div>
            <h1>HomePage</h1>

            <Goal />
                <Spacer />
            <Progress />
                <Spacer />
            <Calendar className="Calendar"/>
                <Spacer />
        </div>
    )
}

export default HomePage;
