import React from "react";
import TrainerHomePage from "./Dashboard/TrainerHomePage";
import TrainerClientPage from "./Clients/TrainerClientPage";
import TrainerSchedulePage from "./Schedule/TrainerSchedulePage";
import TrainerAccountPage from "./Account/TrainerAccountPage";

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
            Component: <TrainerClientPage />,
            path: '/Clients',
            key: "TrainerClientPage"
        },
        {
            Title: "Schedule",
            Component: <TrainerSchedulePage />,
            path: '/Schedule',
            key: "TrainerSchedulePage"
        },
        {
            Title: "Account",
            Component: <TrainerAccountPage />,
            path: '/Account',
            key: "TrainerAccountPage"
        }
    ]

    return TrainerPageList
}

export default TrainerPageList