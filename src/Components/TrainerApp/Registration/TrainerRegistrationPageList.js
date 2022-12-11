import React from "react";
import TrainerRegistrationHomePage from "./TrainerRegistrationHomePage";

function TrainerRegistrationPageList()
{
    const TrainerPageList = [
        {
            Title : "Home",
            Component : <TrainerRegistrationHomePage />,
            path : '/',
            key : "TrainerRegistrationHomePage"
        }
    ]

    return TrainerPageList
}

export default TrainerRegistrationPageList