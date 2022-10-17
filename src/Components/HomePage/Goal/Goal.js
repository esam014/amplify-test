import React from "react";
import BoxTracker from "../BoxTracker/BoxTracker";
import { API } from "aws-amplify";
import { getGoal, listGoals } from "../../../graphql/queries";

async function Goal ()
{

    const apiData =  await API.graphql({query: listGoals});
    const goalData = apiData.data.listGoals.items;

    return <div>
        <BoxTracker Type="Goal" Date="Target Date: mm/dd/yyyy" ShortTermGoal={ goalData } Waist="##" Extra="___" />
    </div>
}

export default Goal