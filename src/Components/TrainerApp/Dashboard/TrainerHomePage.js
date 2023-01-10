import React, { useState } from "react";
import { Table, Col, Stack, Container } from "react-bootstrap";
import TrainerChart from "./TrainerChart";

function TrainerHomePage() {
    //State Stuff here
    var [user, setUser] = useState();
    var [platformConfig, setPlatformConfig] = useState();
    var [loading, setLoading] = useState(true);

    //Effect or Lifecyle handling here

    //Render Here
    return (
        <div>
            <h1>Home Page</h1>
            <TrainerChart/>
            <Stack direction="horizontal" >
                <Col>
                    <Container>
                        <Table responsive bordered variant="danger">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </Table>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Table responsive bordered variant="warning" >
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </Table>
                    </Container>
                </Col>
                <Col>
                    <Container>
                        <Table responsive bordered variant="success" >
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </Table>
                    </Container>
                </Col>
            </Stack>
        </div>
    )
}

export default TrainerHomePage;