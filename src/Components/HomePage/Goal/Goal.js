import React, { useEffect, useState } from "react";
import BoxTracker from "../BoxTracker/BoxTracker";
import { API, graphqlOperation } from "aws-amplify";
import { getGoal, listGoals } from "../../../graphql/queries";
import { queries } from "@testing-library/react";

function Goal ()
{
    const [datExport, setData ] = useState([]);
    const [anotherData, setAnother] = useState([]);
    useEffect(() => {
        retrievGoals();
    },[]);
    


    async function retrievGoals()
    {
        try {
            const apiData =  await API.graphql(graphqlOperation(listGoals));
            const datExport = apiData.data.listGoals.items[1].short_term_goal;
            const longExport = apiData.data.listGoals.items[1].long_term_goal;
            setData(datExport);
            setAnother(longExport);
            console.info(longExport); 
        } catch (error) {
            console.error("Failure retrieving goals!", error)
        }
    }


    return (<div>
        <BoxTracker Type="Goal" Date="Target Date: mm/dd/yyyy" ShortTermGoal={datExport} LongTermGoal={anotherData}/>
    </div>)
}
export default Goal