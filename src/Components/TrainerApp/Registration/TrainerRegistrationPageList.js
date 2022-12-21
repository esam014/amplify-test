import React from "react";
import TrainerRegistrationHomePage from "./TrainerRegistrationHomePage";

function TrainerRegistrationPageList()
{
    const TrainerRegistrationPageList = [
        {
            Title : "Home",
            Component : <TrainerRegistrationHomePage />,
            path : '/',
            key : "TrainerRegistrationHomePage"
        }
    ]

    return TrainerRegistrationPageList
}

export default TrainerRegistrationPageList