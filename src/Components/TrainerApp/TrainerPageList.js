import React from "react";
import {useId} from 'react';
import TrainerHomePage from "./Dashboard/TrainerHomePage";

function TrainerPageList()
{
    const TrainerPageList = [
        {
            Title : "Home",
            Component : <TrainerHomePage />,
            path : '/',
            key : "TrainerHomePage"
        }
    ]

    return TrainerPageList
}

export default TrainerPageList