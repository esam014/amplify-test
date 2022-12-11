import React, { useState, useEffect } from "react";
import MultiStepForm from "./MultiStepForm";
import { API, graphqlOperation } from "aws-amplify";
import { getUser } from "../../../graphql/queries";
import { schema } from "../../../models/schema";
import { Auth } from "aws-amplify";
import { Alert, Spinner } from "react-bootstrap";


function TrainerRegistrationHomePage() {
    // State stuff here
    var [user, setUser] = useState();
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

            setLoading(false);
            setUser(user);
        } catch (error) {
            console.error("Failed to initialize user info locally!", error);
        }
    }

    if (loading) {
        return (
            <div><Spinner /></div>
        )
    }
    else if (user.state === 'FIRSTLOGIN') {
        console.info(user.state);
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
                    <MultiStepForm user={user} />
                </div>
            )
        }
        else {
            return (
                <div>
                    <h1>Welcome!</h1>
                    <MultiStepForm user={user} />
                </div>
            );
        }
    } else if (user.state === 'REGISTERING') {
        console.info(user.state)
        return (
            <div>
                <h1>Welcome!</h1>
                <MultiStepForm />
            </div>
        )
    }

}

export default TrainerRegistrationHomePage;