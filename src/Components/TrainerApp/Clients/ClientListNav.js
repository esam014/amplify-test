import React from "react";
import { Container, Navbar, Offcanvas, Accordion } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";

function ClientListNav() {
    return (
        <div>
            {[false].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="start"
                            scroll="true"
                            backdrop="false"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Your Clients:
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Client 1</Accordion.Header>
                                        <AccordionBody>
                                            Details on Client 1
                                        </AccordionBody>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Client 2</Accordion.Header>
                                        <AccordionBody>
                                            Details on Client 2
                                        </AccordionBody>
                                    </Accordion.Item>
                                </Accordion>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </div>
    )
}

export default ClientListNav;