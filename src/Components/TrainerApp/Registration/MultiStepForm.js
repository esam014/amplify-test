/* eslint-disable default-case */
import React, { Component } from 'react';
import UserDetails from "./UserDetails";
import Progress from './Progress';
import AccountDetails from './AccountDetails';
import PlatformDetails from './PlatformDetails';
import { API, graphqlOperation } from "aws-amplify";
import { updatePlatformConfig, updateUser } from '../../../graphql/mutations';
import { schema } from '../../../models/schema';

class MultiStepForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            user: this.props.user,
            platformConfig: this.props.platformConfig,
            // User Details
            firstName: this.props.user.first_name,
            lastName: this.props.user.last_name,
            email: this.props.user.email,
            phone: this.props.user.phone,
            address: this.props.user.address,
            city: this.props.user.city,
            usstate: this.props.user.usstate,
            zip: this.props.user.zip,
            // Platform details
            logoFile: this.props.platformConfig.logo_file,
            faviconFile: this.props.platformConfig.favicon_file,
            primaryColor: this.props.platformConfig.primary_color,
            secondaryColor: this.props.platformConfig.secondary_color,
            customUrl: this.props.platformConfig.custom_url,
            persWebEnabled: this.props.platformConfig.personal_web_enabled,
            platformNutrition: this.props.platformConfig.platform_nutrition_enabled,
            platformTrainer: this.props.platformConfig.platform_trainer_enabled,
        }
    }

    // componentDidMount = () => {
    //     // this.setState({user: this.props.user})
    //     initStuff();
    // }
    nextStep = () => {
        const { step } = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step: step - 1
        })
    }

    commitUser = async () => {

        var update = {
            id: this.state.user.id,
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            phone: this.state.phone,
            address: this.state.address,
            city: this.state.city,
            usstate: this.state.usstate,
            zip: this.state.zip,
        }
        try {
            var resp = await API.graphql(graphqlOperation(updateUser, { input: update }));
            this.setState({ user: resp.data.updateUser });
        } catch (error){
            console.error("Failed to update user:", error);
        }
    }

    finalCommit = async () => {
        var update = {
            id: this.state.user.id,
            lifecycle: schema.enums.Lifecycle.values[3] //Active Status
        }
        try {
            var resp = await API.graphql(graphqlOperation(updateUser, { input: update }));
            this.setState({ user: resp.data.updateUser });
        } catch (error){
            console.error("Failed to update user:", error);
        }
    }

    commitPlatform = async () => {

        var update = {
            id: this.state.platformConfig.id,
            logo_file: this.state.logoFile,
            favicon_file: this.state.faviconFile,
            primary_color: this.state.primaryColor,
            secondary_color: this.state.secondaryColor,
            custom_url: this.state.customUrl,
            personal_web_enabled: this.state.persWebEnabled,
            platform_nutrition_enabled: this.state.platformNutrition,
            platform_trainer_enabled: this.state.platformTrainer,
        }
        try {
            console.info(update);
            var resp = await API.graphql(graphqlOperation(updatePlatformConfig, { input: update }));
            this.setState({ platformConfig: resp.data.updatePlatformConfig });
        } catch (error){
            console.error("Failed to update platform configurations:", error);
        }
    }


    handleChange = (event) => {

        if (event.target.type === "checkbox") {
            this.setState({ [event.target.id]: event.target.checked });
        } else {
            this.setState({ [event.target.name]: event.target.value })
        }

    }


    render() {
        const { step, user, platformConfig, firstName, lastName, email, phone, address, city, usstate, zip, logoFile, faviconFile, primaryColor, secondaryColor, customUrl, persWebEnabled, platformNutrition, platformTrainer } = this.state;
        const inputValues = { user, platformConfig, firstName, lastName, email, phone, address, city, usstate, zip, logoFile, faviconFile, primaryColor, secondaryColor, customUrl, persWebEnabled, platformNutrition, platformTrainer };
        <Progress />
        switch (step) {
            case 1:
                return [
                    <div key="registrationUser">
                        <Progress step={step} />
                        <UserDetails
                            nextStep={this.nextStep}
                            handleChange={this.handleChange}
                            inputValues={inputValues}
                            commit={this.commitUser}
                        />
                    </div>
                ]
            case 2:
                return [
                    <div key="registrationAccount">
                        <Progress step={step} />
                        <AccountDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            inputValues={inputValues}
                        />
                    </div>]
            case 3:
                return [
                    <div key="registrationPlatform">
                        <Progress step={step} />
                        <PlatformDetails
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            handleChange={this.handleChange}
                            inputValues={inputValues}
                            commit={this.commitPlatform}
                        />
                    </div>]
            case 4:
                this.finalCommit();
                return [
                    <div key="something made up">
                        <p>Congrats, you've finished registration. Need to return to home page.</p>
                    </div>
                ]
        }
    }
}

export default MultiStepForm;