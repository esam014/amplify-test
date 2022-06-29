import React from "react";
import BoxTracker from "../BoxTracker/BoxTracker";

function Progress ()
{
    return <div>
        <BoxTracker Type="Progress" Date="Current Date: mm/dd/yyyy" Weight="##" Waiste="##" Extra="___" />
    </div>
}

export default Progress