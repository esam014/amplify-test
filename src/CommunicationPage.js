import React from "react";
import Container from "./Components/CommunicationPage/MessageContainer/MessageContainer";
import "./Components/CommunicationPage/CommunicationPage.css";

function CommunicationPage ()
{
    const Messages = ["Message1", "Message2", "Message3"]
    return(
        <div>
            <h1>Communication Page</h1>
            <br />
            <Container Messages={Messages} Title="Inbox" />
            <br />
            <Container Messages={Messages} Title="Sent" />
            <br />
            <button>Send Message</button>
        </div>
    )
}

export default CommunicationPage