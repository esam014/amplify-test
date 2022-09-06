import React from "react";
import LineChart from "./Components/ProfilePage/LineChart/LineChart";
import Form from "./Components/ProfilePage/CheckInForm/CheckInForm";

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

function NutritionPage ()
{
    return(
        <div>
            <h1>Nutrition Page</h1>
            <br />
            <LineChart data={Data}/>
            <br />
            <Form />

        </div>
    )
}

export default NutritionPage