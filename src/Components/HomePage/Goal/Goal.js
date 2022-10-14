import React from "react";
import BoxTracker from "../BoxTracker/BoxTracker";
import { getGoal } from "../../../graphql/queries";

function Goal ()
{

    const { data } = getGoal("904dba04-1870-4dbf-a3de-eea7e95ac8b3")
    return <div>
        <BoxTracker Type="Goal" Date="Target Date: mm/dd/yyyy" ShortTermGoal={data.short_term_goal} Waist="##" Extra="___" />
    </div>
}

export default Goal