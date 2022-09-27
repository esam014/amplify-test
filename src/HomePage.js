import React from "react";
import Goal from "./Components/HomePage/Goal/Goal";
import Progress from "./Components/HomePage/Progress/Progress";
import Calendar from "react-calendar";
import "./Components/HomePage/HomePage.css";
import Spacer from "./Components/Spacer";
import { API } from "aws-amplify";
import * as mutations from './graphql/mutations';

const todoDetails = {
  name: 'Todo 1',
  description: 'Learn AWS AppSync'
};

const newTodo = await API.graphql({ query: mutations.createTodo, variables: {input: todoDetails}});

function HomePage ()
{
    return (
        <div>
            <h1>HomePage</h1>

            <Goal />
                <Spacer />
            <Progress />
                <Spacer />
            <Calendar className="Calendar"/>
                <Spacer />
        </div>
    )
}

export default HomePage;
