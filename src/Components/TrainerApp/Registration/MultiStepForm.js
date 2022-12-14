/* eslint-disable default-case */
import React, { Component } from 'react';
import UserDetails from "./UserDetails";
import Progress from './Progress';
import AccountDetails from './AccountDetails';
import PlatformDetails from './PlatformDetails';
import { schema } from '../../../models/schema';
import { API, graphqlOperation } from "aws-amplify";
import { createPlatformConfig } from '../../../graphql/mutations';

class MultiStepForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            step: 1,
            user: this.props.user,
            platformConfig: this.props.platformConfig,
            // User Details
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            usstate: '',
            zip: '',
            // Platform details
            logoFile: '',
            faviconFile: '',
            primaryColor: '#254AA2',
            secondaryColor: '#E19614',
            customUrl: '',
            persWebEnabled: false,
            platformNutrition: false,
            platformTrainer: false,
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

    handleChange = (event) => {

        if (event.target.type === "checkbox") {
            this.setState({ [event.target.id]: event.target.checked });
        } else {
            this.setState({ [event.target.name]: event.target.value })
        }

    }



    render() {
        const { step, user, platformConfig, firstName, lastName, email, phone, address, city, usstate, zip, logoFile, faviconFile, primaryColor, secondaryColor, customUrl, persWebEnabled, platformNutrition, platformTrainer } = this.state;
        const inputValues = {user, platformConfig, firstName, lastName, email, phone, address, city, usstate, zip, logoFile, faviconFile, primaryColor, secondaryColor, customUrl, persWebEnabled, platformNutrition, platformTrainer };
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
                        />
                    </div>]
        }
    }
}

export default MultiStepForm;