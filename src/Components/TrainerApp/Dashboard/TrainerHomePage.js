import React from "react";
import Goal from "./Goal/Goal";
import "./TrainerHomePage.css";
import Progress from "../Registration/Progress";
import MultiStepForm from "../Registration/MultiStepForm";
import Accountdetails from "../Registration/AccountDetails";


function TrainerHomePage ()
{
    return (
        <div>
            <h1>HomePage</h1>
            <MultiStepForm />
        </div>
    )
}

export default TrainerHomePage;
{/* <UserDetails /> */}