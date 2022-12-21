import React from "react";
import TrainerHomePage from "./Dashboard/TrainerHomePage";

function TrainerPageList() {
    const TrainerPageList = [
        {
            Title: "Home",
            Component: <TrainerHomePage />,
            path: '/Home',
            key: "TrainerHomePage"
        },
        {
            Title: "Clients",
            Component: <TrainerHomePage />,
            path: '/Clients',
            key: "TrainerClientPage"
        },
        {
            Title: "Schedule",
            Component: <TrainerHomePage />,
            path: '/Schedule',
            key: "TrainerSchedulePage"
        },
        {
            Title: "Account",
            Component: <TrainerHomePage />,
            path: '/Account',
            key: "TrainerAccountPage"
        }
    ]

    return TrainerPageList
}

export default TrainerPageList