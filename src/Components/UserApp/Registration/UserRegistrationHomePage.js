import React, { useState, useEffect } from "react";
import MultiStepForm from "./MultiStepForm";
import { API, graphqlOperation, input } from "aws-amplify";
import { getPlatformConfig, getClient, getUser, getTrainer } from "../../../graphql/queries";
import { schema } from "../../../models/schema";
import { Auth } from "aws-amplify";
import { Alert, Spinner } from "react-bootstrap";
import { createPlatformConfig, createClient, updateClient, updateUser } from "../../../graphql/mutations";


function UserRegistrationHomePage() {
    console.log("Setting react state hooks");
    // State stuff here
    var [user, setUser] = useState();
    var [platformConfig, setPlatformConfig] = useState();
    var [loading, setLoading] = useState(true);
    const [show, setShow] = useState(true);
    useEffect(() => {
        retrieveUser();
    }, []);

    // // User stuff here
    async function retrieveUser() {
        try {
            const info = await Auth.currentUserInfo();
            console.info("user info: ", info.username)
            var user = (await API.graphql(graphqlOperation(getUser, { id: info.username }))).data.getUser;
            console.log(user);
            var trainer = (await API.graphql(graphqlOperation(getTrainer, { id: "6eface4d-a1fd-483b-ae58-6bf86603c968" }))).data.getTrainer;    //STUBBED OUT: need to dynamically call trainer
            console.log("Trainer ", trainer);
            var platformConfig = trainer.PlatformConfig;
            console.log("Platform Config ", platformConfig);
            var client = schema.models.client;
            
            if (user.Client === null) {
                // Check if the user's associated trainer object has been created, and create if neccessary.
                console.log("Creating new user");
                client = (await API.graphql(graphqlOperation(createClient, {input: {trainerID: trainer.id, platformconfigID: platformConfig.id}}))).data.createClient;
                //platformConfig = (await API.graphql(graphqlOperation(createPlatformConfig, {input: {primary_color: '#254AA2', secondary_color: '#E19614', }}))).data.createPlatformConfig;
                user.userClientId = client.id;
                const possStates = schema.enums.Lifecycle.values[1]; //Registering - 2nd lifecycle state
                var resp = await API.graphql(graphqlOperation(updateUser, {input: {id: user.id, userClientId: user.userClientId, email: info.attributes.email, lifecycle: possStates}}));
                //await API.graphql(graphqlOperation(updateClient, {input: {id: client.id, clientPlatformConfigId: platformConfig.id}}));
                console.info(resp);
            } else {
                console.log("Getting user information")
                // user.userClientId = client.id;
                console.log("User Client id: ", user.userClientId);
                client = (await API.graphql(graphqlOperation(getClient, { id: user.userClientId}))).data.getClient;
                //platformConfig = client.PlatformConfig;
            }
            console.log("Resetting react state hooks");
            setLoading(false);
            setUser(user);
            setPlatformConfig(platformConfig);
            console.log("User, platform config loaded...")
        } catch (error) {
            console.error("Failed to initialize user info locally!", error);
        }
    }

    if (loading) {
        return (
            <div><Spinner /></div>
        )
    }
    else if (user.lifecycle === 'FIRSTLOGIN') {
        console.info(user.lifecycle);
        if (show) {
            return (
                <div>
                    <h1>Welcome!</h1>
                    <Alert key='welcomeMessage' variant='success' onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Welcome to the platform!</Alert.Heading>
                        <p>
                            Before you get started, we just need you to fill in a couple details.
                        </p>
                    </Alert>
                    <MultiStepForm user={user} platformConfig={platformConfig} />
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>Welcome!</h1>
                    <MultiStepForm user={user} platformConfig={platformConfig} />
                </div>
            );
        }
    } else if (user.lifecycle === 'REGISTERING') {
        console.info(platformConfig)
        return (
            <div>
                <h1>Welcome Back!</h1>
                <MultiStepForm user={user} platformConfig={platformConfig} />
            </div>
        )
    }

}

export default UserRegistrationHomePage;