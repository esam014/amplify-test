import React, { useState, useEffect } from "react";
import MultiStepForm from "./MultiStepForm";
import { API, graphqlOperation, input } from "aws-amplify";
import { getPlatformConfig, getTrainer, getUser } from "../../../graphql/queries";
import { schema } from "../../../models/schema";
import { Auth } from "aws-amplify";
import { Alert, Spinner } from "react-bootstrap";
import { createPlatformConfig, createTrainer, updateTrainer, updateUser } from "../../../graphql/mutations";


function TrainerRegistrationHomePage() {
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
            var user = (await API.graphql(graphqlOperation(getUser, { id: info.username }))).data.getUser;
            var platformConfig = schema.models.platformConfig;
            var trainer = schema.models.trainer;
            
            if (user.Trainer === null) {
                // Check if the user's associated trainer object has been created, and create if neccessary.
                trainer = (await API.graphql(graphqlOperation(createTrainer, {input: {}}))).data.createTrainer;
                platformConfig = (await API.graphql(graphqlOperation(createPlatformConfig, {input: {}}))).data.createPlatformConfig;
                user.userTrainerId = trainer.id;
                const possStates = schema.enums.Lifecycle.values[1];
                console.info(possStates);
                var resp = await API.graphql(graphqlOperation(updateUser, {input: {id: user.id, userTrainerId: user.userTrainerId, email: info.attributes.email, Lifecycle: possStates}}));
                await API.graphql(graphqlOperation(updateTrainer, {input: {id: trainer.id, trainerPlatformConfigId: platformConfig.id}}));
                console.info(resp);
            } else {
                trainer = (await API.graphql(graphqlOperation(getTrainer, { id: user.userTrainerId }))).data.getTrainer;
                platformConfig = (await API.graphql(graphqlOperation(getPlatformConfig, {id: trainer.trainerPlatformConfigId }))).data.createPlatformConfig;
            }
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
    else if (user.Lifecycle === 'FIRSTLOGIN') {
        console.info(user.Lifecycle);
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
    } else if (user.Lifecycle === 'REGISTERING') {
        console.info(user.Lifecycle)
        return (
            <div>
                <h1>Welcome Back!</h1>
                <MultiStepForm user={user} platformConfig={platformConfig} />
            </div>
        )
    }

}

export default TrainerRegistrationHomePage;