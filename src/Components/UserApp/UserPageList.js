import React from "react";
import HomePage from "../../HomePage";
import ProfilePage from "../../ProfilePage";
import NutritionPage from "../../NutritionPage";
import CommunicationPage from "../../CommunicationPage";


function UserPageList()
{
    const UserPageList = [
        {
            Title : "Home Page",
            Component : <HomePage />,
            path : '/',
            key : 'HomePage'
        },
        {
            Title : "Profile Page",
            Component : <ProfilePage />,
            path : '/ProfilePage',
            key : 'ProfilePage'
        },
        {
            Title : "Nutrition Page",
            Component : <NutritionPage />,
            path : '/NutritionPage',
            key : 'NutritionPage'
        },
        {
            Title : "Communication Page",
            Component : <CommunicationPage />,
            path : '/CommunicationPage',
            key : 'CommunicationPage'
        },
    ]

    return UserPageList
}

export default UserPageList