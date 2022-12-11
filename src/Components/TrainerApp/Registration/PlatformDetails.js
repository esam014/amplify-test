import React, { Component } from 'react';
import { Button, Container, Form, Row, Col, InputGroup } from 'react-bootstrap';

class PlatformDetails extends Component {

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        return (
            <Container>
                <Form>
                    <Row>
                        <Form.Group controlId='formLogoPicker' as={Col} className="my-3" >
                            <Form.Label className="d-flex flex-start">Select Logo</Form.Label>
                            <Form.Control
                                type='file'
                                name='logoFile'
                                value={this.props.inputValues.logoFile}
                                onChange={this.props.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId='formFaviconPicker' as={Col} className="my-3">
                            <Form.Label className="d-flex flex-start">Select Favicon</Form.Label>
                            <Form.Control
                                type='file'
                                name='faviconFile'
                                value={this.props.inputValues.faviconFile}
                                onChange={this.props.handleChange}
                            />
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
                                    title="Choose your primary theme color"
                                    name='primaryColor'
                                    value={this.props.inputValues.primaryColor}
                                    onChange={this.props.handleChange}
                                />
                            </Form.Group>
                            <Form.Group controlId='formSecondaryTheme' as={Col} className="d-flex flex-start my-3">
                                <Form.Label className='me-3'>Choose your Secondary theme color:</Form.Label>
                                <Form.Control
                                    type="color"
                                    title="Choose your secondary theme color"
                                    name='secondaryColor'
                                    value={this.props.inputValues.secondaryColor}
                                    onChange={this.props.handleChange}
                                />
                            </Form.Group>
                        </Container>
                    </Row>
                    <Row>
                        <Form.Label htmlFor="basic-url" className="d-flex flex-start">Your vanity URL</Form.Label>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon3">
                                https://example.com/
                            </InputGroup.Text>
                            <Form.Control
                                id="basic-url"
                                aria-describedby="basic-addon3"
                                name='customUrl'
                                value={this.props.inputValues.customUrl}
                                onChange={this.props.handleChange}
                            />
                        </InputGroup>
                    </Row>
                    <Row>
                        <Form.Switch
                            type="switch"
                            id="persWebEnabled"
                            label="Personal Public Website"
                            className="d-flex flex-start"
                            checked={this.props.inputValues.persWebEnabled}
                            onChange={this.props.handleChange}
                        />
                        <Form.Check
                            type="switch"
                            id="platformNutrition"
                            label="Nutritionist Suite"
                            className="d-flex flex-start"
                            checked={this.props.inputValues.platformNutrition}
                            onChange={this.props.handleChange}
                        />
                        <Form.Check
                            type="switch"
                            id="platformTrainer"
                            label="Personal Trainer Suite"
                            className="d-flex flex-start"
                            checked={this.props.inputValues.platformTrainer}
                            onChange={this.props.handleChange}
                        />
                    </Row>
                    <Row>
                        <Form.Group className="my-3">
                            <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                            <Button variant="primary">Confirm</Button>
                        </Form.Group>
                    </Row>
                </Form>
            </Container>
        )
    }
}

export default PlatformDetails;