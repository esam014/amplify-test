import React from "react";
import Name from "./Components/ProfilePage/Name/Name";
import PhotoBar from "./Components/ProfilePage/PhotoBar/PhotoBar";
import LineChart from "./Components/ProfilePage/LineChart/LineChart";
import Form from "./Components/ProfilePage/CheckInForm/CheckInForm";
import "./Components/ProfilePage/ProfilePage.css";

const Photos = ["Images/LargeCircle.png","Images/MediumCircle.png","Images/SmallCircle.png"];
const labels = ['January', 'February', 'March'];

export const Data = {
    labels,
    datasets: [
        {
        label: 'Dataset 1',
        data: [100, 20, 50],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
        label: 'Dataset 2',
        data: [72, 63, 99],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

function ProfilePage (props)
{
    return (
        <div>
            <h1>Profile Page</h1>
            <br />
            <Name Name="Fname Lname" />
            <br />
            <LineChart data={Data} className="chart"/>
            <br />
            <PhotoBar Photos={Photos} className="photoBar"/>
            <br />
            <Form />
            <br />
        </div>
    )
}

export default ProfilePage