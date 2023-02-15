import { API, Auth, graphqlOperation } from "aws-amplify";
import React, { Component } from "react";
import { Table, Col, Stack, Container } from "react-bootstrap";
import { getUser, listClients } from "../../../graphql/queries";
import { onCreateClient } from "../../../graphql/subscriptions";
import TrainerChart from "./TrainerChart";

class TrainerHomePage extends Component {
    //State Stuff here
    constructor(props) {
        super(props)
        this.state = {
            user: null,
        };
    }

    // Special Functions
    retrieveUser = async () => {
        const info = await Auth.currentUserInfo();
        var userObj = (await API.graphql(graphqlOperation(getUser, { id: info.username }))).data.getUser;
        var clients = (await API.graphql(graphqlOperation(listClients, { filter: { trainerID: { eq: userObj.userTrainerId } } }))).data.listClients.items;
        console.info("User object is: ", clients)
        this.setState({ user: userObj, clientList: clients });
        console.info(this.state)
    }

    clientCreated(provider, value) {
        console.log({ provider, value })
    }

    // Lifecyle handling here
    componentDidMount() {
        this.retrieveUser();
    }

    componentWillUnmount() {

    }

    //Render Here
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <TrainerChart />
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
                                    <tr>
                                        <td>Some</td>
                                        <td>Person</td>
                                    </tr>
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
                                    <td>Another</td>
                                    <td>Person</td>
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
                                    <td>Someone</td>
                                    <td>Good</td>
                                </tbody>
                            </Table>
                        </Container>
                    </Col>
                </Stack>
            </div>
        )
    }
}
export default TrainerHomePage;