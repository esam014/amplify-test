import userEvent from "@testing-library/user-event";
import { API, graphqlOperation } from "aws-amplify";
import React, { Component } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { updateUser } from "../../../graphql/mutations";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { validated: false };
  }

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  
  saveAndContinue = (e) => {
    if (e.currentTarget.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      console.info("Invalid entries!");
    } else {
      // Commit the user changes, then proceed
      this.props.commit();
      this.props.nextStep();
    }
    this.setState({ validated: true });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Form
            noValidate
            validated={this.state.validated}
            onSubmit={this.saveAndContinue}
          >
            <Row>
              <Form.Group as={Col} controlId="formFirstName">
                <Form.Label className="d-flex flex-start mt-3">
                  First Name
                </Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.inputValues.firstName}
                  name="firstName"
                  required
                  onChange={this.props.handleChange}
                />
                <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formLastName">
                <Form.Label className="d-flex flex-start mt-3">
                  Last Name
                </Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.inputValues.lastName}
                  name="lastName"
                  required
                  onChange={this.props.handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="formPhone">
                <Form.Label className="d-flex flex-start mt-3">
                  Phone Number
                </Form.Label>
                <Form.Control
                  type="tel"
                  defaultValue={this.props.inputValues.phone}
                  name="phone"
                  required
                  onChange={this.props.handleChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group controlId="formAddress">
                <Form.Label className="d-flex flex-start mt-3">
                  Address
                </Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.inputValues.address}
                  name="address"
                  required
                  onChange={this.props.handleChange}
                />
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="formCity">
                <Form.Label className="d-flex flex-start mt-3">City</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.inputValues.city}
                  name="city"
                  required
                  onChange={this.props.handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formState">
                <Form.Label className="d-flex flex-start mt-3">
                  State
                </Form.Label>
                <Form.Control
                  as="select"
                  name="usstate"
                  defaultValue={this.props.inputValues.usstate}
                  onChange={this.props.handleChange}
                >
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formZip">
                <Form.Label className="d-flex flex-start mt-3">Zip</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={this.props.inputValues.zip}
                  name="zip"
                  required
                  onChange={this.props.handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid zip.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Button
              type="submit"
              className="mt-3"
              variant="dark"
              // onClick={this.saveAndContinue}
            >
              Next
            </Button>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default UserDetails;
