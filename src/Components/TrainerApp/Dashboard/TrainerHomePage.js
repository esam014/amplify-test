import { API, Auth, graphqlOperation } from "aws-amplify";
import React, { Component } from "react";
import { Table, Col, Stack, Container } from "react-bootstrap";
import { getUser } from "../../../graphql/queries";
import { onCreateClient } from "../../../graphql/subscriptions";
import TrainerChart from "./TrainerChart";

class TrainerHomePage extends Component {
    //State Stuff here
    constructor(props) {
        super(props)
        this.state = {


        }
    }

    // Special Functions
    async retrieveUser() {
        const info = await Auth.currentUserInfo();
        var userObj = (await API.graphql(graphqlOperation(getUser, { id: info.username }))).data.getUser;
        this.setState({
            user: userObj
        })
    }

    clientCreated(provider, value) {
        console.log({provider, value })
    }

    // Lifecyle handling here
    componentDidMount(){
        this.retrieveUser();
        const clientSub = API.graphql(graphqlOperation(onCreateClient, { filter: { trainerID: {eq: this.state.user.trainerID}}})).subcribe({
            next: ({ provider, value }) =>  this.clientCreated({provider, value })
        });
        this.setState({ clientSubscription: clientSub })
    }

    componentWillUnmount(){

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
}
export default TrainerHomePage;