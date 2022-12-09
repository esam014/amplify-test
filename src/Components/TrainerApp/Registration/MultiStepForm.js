/* eslint-disable default-case */
import React, { Component } from 'react';
import UserDetails from "./UserDetails";
import AddressDetails from "./AddressDetails";
import Confirmation from "./Confirmation";
import Progress from './Progress';
import AccountDetails from './AccountDetails';

class MultiStepForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    }

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
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        const { step, firstName, lastName, email, phone, address, city, state, zip } = this.state;
        const inputValues = { firstName, lastName, email, phone, address, city, state, zip };
        <Progress />
        switch (step) {
            case 1:
                return [
                    <div>
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
                    <div>
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
                    <div>
                        <Progress step={step} />
                        <Confirmation
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            inputValues={inputValues}
                        />
                    </div>]
        }
    }
}

export default MultiStepForm;