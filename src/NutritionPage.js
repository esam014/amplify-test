import React from "react";
import LineChart from "./Components/ProfilePage/LineChart/LineChart";
import Form from "./Components/ProfilePage/CheckInForm/CheckInForm";

function NutritionPage ()
{
    return(
        <div>
            <h1>Nutrition Page</h1>
            <br />
            <LineChart />
            <br />
            <Form />

        </div>
    )
}

export default NutritionPage