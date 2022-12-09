import React, { Component } from 'react';
import { Button, Container, Form, Row, Col, InputGroup } from 'react-bootstrap';

class Confirmation extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { inputValues: { firstName, lastName, email, address, city, state, zip } } = this.props;

        return (
            <Container>
                <Row>
                    <Form.Group controlId='formLogoPicker' as={Col} className="my-3" >
                        <Form.Label className="d-flex flex-start">Select Logo</Form.Label>
                        <Form.Control type='file' />
                    </Form.Group>
                    <Form.Group controlId='formFaviconPicker' as={Col} className="my-3">
                        <Form.Label className="d-flex flex-start">Select Favicon</Form.Label>
                        <Form.Control type='file' />
                        <Form.Text muted>
                            Some genric info here about the correct pixel size for a favicon.
                        </Form.Text>
                    </Form.Group>
                </Row>
                <Row>
                    <Container className="d-flex left">
                        <Form.Group controlId='formPrimaryTheme' as={Col} className="d-flex flex-start my-3">
                            <Form.Label className='me-3'>Choose your primary theme color:</Form.Label>
                            <Form.Control
                                type="color"
                                defaultValue="#254AA2"
                                title="Choose your primary theme color"
                            />
                        </Form.Group>
                        <Form.Group controlId='formSecondaryTheme' as={Col} className="d-flex flex-start my-3">
                            <Form.Label className='me-3'>Choose your Secondary theme color:</Form.Label>
                            <Form.Control
                                type="color"
                                defaultValue="#E19614"
                                title="Choose your secondary theme color"
                            />
                        </Form.Group>
                    </Container>
                </Row>
                <Row>
                    <Form.Label htmlFor="basic-url" className="d-flex flex-start">Your vanity URL</Form.Label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon3">
                            https://example.com/users/
                        </InputGroup.Text>
                        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
                    </InputGroup>
                </Row>
                <Row>
                    <Form.Check
                        type="switch"
                        id="persWebEnabled"
                        label="Personal Public Website"
                        className="d-flex flex-start"
                    />
                    <Form.Check
                        type="switch"
                        id="platformNutrition"
                        label="Nutritionist Suite"
                        className="d-flex flex-start"
                    />
                    <Form.Check
                        type="switch"
                        id="platformNutrition"
                        label="Personal Trainer Suite"
                        className="d-flex flex-start"
                    />
                </Row>
                <Row>
                    <Form.Group className="my-3">
                        <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                        <Button variant="primary">Confirm</Button>
                    </Form.Group>
                </Row>
            </Container>
        )
    }
}

export default Confirmation;
