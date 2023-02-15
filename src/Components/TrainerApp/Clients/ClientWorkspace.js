import React, {Component} from "react";
import { Tab, Tabs } from "react-bootstrap";
import ReportTab from "./ReportTab";

class ClientWorkspace extends Component {
// State and data initialization here
constructor(props){
    super(props)
}

// Functions and operations here

// Render workspace
render(){
    return(
        <div>
            <Tabs
            defaultActiveKey="report"
            id="client-workspace-tab"
            className="mb-3"
            variant="tabs"
            >
                <Tab eventKey={"report"} title="Report">
                    <ReportTab/>
                </Tab>
                <Tab eventKey="program" title="Program">

                </Tab>
                <Tab eventKey={"schedule"} title="Schedule">

                </Tab>
                <Tab eventKey={"account"} title="Account">

                </Tab>
            </Tabs>
        </div>
    )
}


}

export default ClientWorkspace