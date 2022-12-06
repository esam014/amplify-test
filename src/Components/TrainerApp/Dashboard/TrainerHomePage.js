import React from "react";
import Goal from "./Goal/Goal";
import "./TrainerHomePage.css";
import Progress from "../Registration/Progress";
import UserDetails from "../Registration/UserDetails";


function TrainerHomePage ()
{
    return (
        <div>
            <h1>HomePage</h1>
            <Progress />
            <UserDetails />

        </div>
    )
}

export default TrainerHomePage;
{/* <UserDetails /> */}