import userEvent from "@testing-library/user-event";
import { API, graphqlOperation } from "aws-amplify";
import React, { Component } from "react";
import { Form, Button, Col, Container, Row } from "react-bootstrap";
import { updateUser } from "../../../graphql/mutations";

class TrainingDetails extends Component {
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
                  Equipment Available
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
                  Dietary Restrictions
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
                  Age
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
              <Form.Group as={Col} controlId="formState">
                <Form.Label className="d-flex flex-start mt-3">
                  Gender
                </Form.Label>
                <Form.Control
                  as="select"
                  name="usstate"
                  defaultValue={this.props.inputValues.usstate}
                  onChange={this.props.handleChange}
                >
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </Form.Control>
              </Form.Group>
            </Row>
            <Row>
                        <Form.Group className="my-3">
                            <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                            <Button variant="primary" onClick={this.saveAndContinue}>Confirm</Button>
                        </Form.Group>
                    </Row>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default TrainingDetails;
