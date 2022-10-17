import React from "react";
import BoxTracker from "../BoxTracker/BoxTracker";
import { API } from "aws-amplify";
import { getGoal } from "../../../graphql/queries";
import { queries, queryHelpers } from "@testing-library/react";

function Goal ()
{

    const apiData = API.graphql({query: getGoal});
    const goalData = apiData.data.getGoal.items;

    return <div>
        <BoxTracker Type="Goal" Date="Target Date: mm/dd/yyyy" ShortTermGoal={ goalData } Waist="##" Extra="___" />
    </div>
}

export default Goal