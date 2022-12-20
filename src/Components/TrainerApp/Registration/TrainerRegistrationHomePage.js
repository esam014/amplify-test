import React, { useState, useEffect } from "react";
import MultiStepForm from "./MultiStepForm";
import { API, graphqlOperation } from "aws-amplify";
import { getTrainer, getUser } from "../../../graphql/queries";
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
                const platformInit = { logo_file: "", favicon_file: "", custom_url: "", primary_color: "#254AA2", secondary_color: "#E19614", personal_web_enabled: true, platform_nutrition_enabled: true, platform_trainer_enabled: true }
                platformConfig = (await API.graphql(graphqlOperation(createPlatformConfig, {input: platformInit}))).data.createPlatformConfig;
                user.userTrainerId = trainer.id;
                const possStates = schema.enums.Lifecycle.values[1]; //Registering - 2nd lifecycle state
                
                await API.graphql(graphqlOperation(updateUser, {input: {id: user.id, userTrainerId: user.userTrainerId, email: info.attributes.email, lifecycle: possStates}}));
                await API.graphql(graphqlOperation(updateTrainer, {input: {id: trainer.id, trainerPlatformConfigId: platformConfig.id}}));
            } else {
                trainer = (await API.graphql(graphqlOperation(getTrainer, { id: user.userTrainerId }))).data.getTrainer;
                platformConfig = trainer.PlatformConfig;
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
    else if (user.lifecycle === 'FIRSTLOGIN') {
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
        return (
            <div>
                <h1>Welcome Back!</h1>
                <MultiStepForm user={user} platformConfig={platformConfig} />
            </div>
        )
    }

}

export default TrainerRegistrationHomePage;