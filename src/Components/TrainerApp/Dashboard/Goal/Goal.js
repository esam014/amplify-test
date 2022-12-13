import React, { useEffect, useState } from "react";
import BoxTracker from "../BoxTracker/BoxTracker";
import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";
import { getClient, getGoal, listUsers } from "../../../../graphql/queries";

function Goal ()
{
    const [shortExport, setData ] = useState([]);
    const [anotherData, setAnother] = useState([]);
    useEffect(() => {
        retrieveGoals();
    },[]);
    

    async function retrieveGoals()
    {
        try {
            const cogUserData = await Auth.currentAuthenticatedUser();
            const userID = await API.graphql(graphqlOperation(listUsers, {filter: { sub: { eq: cogUserData.username}}}));
            const clientID = userID.data.listUsers.items[0].userClientId;
            const clientData = await API.graphql(graphqlOperation(getClient, {id: clientID}));
            const goalID = clientData.data.getClient.goalID;
            if (goalID != null) {
                const apiData =  await API.graphql(graphqlOperation(getGoal, {id: goalID}));
                const shortExport = apiData.data.getGoal.short_term_goal;
                const longExport = apiData.data.getGoal.long_term_goal;
                setData(shortExport);
                setAnother(longExport);
                console.info(shortExport);
                console.info(longExport);
            }
            else {
                const shortExport = "Your trainer is working on developing your short-term goal still...";
                const longExport = "Your trainer is working on developing your long-term goals still...";
                setData(shortExport);
                setAnother(longExport);
                console.info(shortExport);
                console.info(longExport);
            }
            
        } catch (error) {
            console.error("Failure retrieving goals!", error)
        }
    }


    return (<div>
        <BoxTracker Type="Goal" Date="Target Date: mm/dd/yyyy" ShortTermGoal={shortExport} LongTermGoal={anotherData}/>
    </div>)
}
export default Goal