import React from "react";
import UserRegistrationHomePage from "./UserRegistrationHomePage";

function UserRegistrationPageList()
{
    const UserPageList = [
        {
            Title : "Home",
            Component : <UserRegistrationHomePage />,
            path : '/',
            key : "UserRegistrationHomePage"
        }
    ]

    return UserPageList
}

export default UserRegistrationPageList