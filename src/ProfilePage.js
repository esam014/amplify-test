import React from "react";
import Name from "./Components/ProfilePage/Name/Name";
import PhotoBar from "./Components/ProfilePage/PhotoBar/PhotoBar";
import LineChart from "./Components/ProfilePage/LineChart/LineChart";
import Form from "./Components/ProfilePage/CheckInForm/CheckInForm";
import "./Components/ProfilePage/ProfilePage.css";

const Photos = ["Images/LargeCircle.png","Images/MediumCircle.png","Images/SmallCircle.png"];

function ProfilePage (props)
{
    return (
        <div>
            <h1>Profile Page</h1>
            <br />
            <Name Name="Fname Lname" />
            <br />
            <LineChart className="chart"/>
            <br />
            <PhotoBar Photos={Photos} className="photoBar"/>
            <br />
            <Form />
            <br />
        </div>
    )
}

export default ProfilePage