import React from "react";
import BoxTracker from "../BoxTracker/BoxTracker";

function Goal ()
{
    return <div>
        <BoxTracker Type="Goal" Date="Target Date: mm/dd/yyyy" Weight="##" Waiste="##" Extra="___" />
    </div>
}

export default Goal