import { Amplify} from 'aws-amplify';
import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter,Route, Switch, useLocation } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API, graphqlOperation } from "aws-amplify";
import { getUser, listUsers } from "./graphql/queries";
import { createUser } from './graphql/mutations';
import awsExports from '../src/aws-exports';
import Spinner from './Spinner';
import {TrainerRouter, UserRouter, TrainerRegistrationRouter} from './Routers';
import 'bootstrap/dist/css/bootstrap.min.css';

Amplify.configure(awsExports);


function App({ signOut, user, Type }) {
  var [userRole, setUserRole] = useState([]);
  var [loading, setLoading] = useState(true);
  var [userState, setUserState] = useState();
  const location = useLocation();
  console.info(user);
  console.info(Type);
  console.info(location.pathname);
  useEffect(() => {
    retrieveRole();
  },);

  async function retrieveRole()
    {
        try {
            const userID = await (await API.graphql(graphqlOperation(getUser, {id: user.username }))).data.getUser;
            const userRole = userID.role;
            const userState = userID.state;
            setUserRole(userRole);
            setUserState(userState);
            setLoading(false);
            console.info(userRole);       
            console.info(userState);       
        } catch (error) {
            console.error("Failure retrieving Role!", error)
        }
    }
    // Display a loading bar until the user role/data is loaded
    if(loading) {
      return(
      <div className="App"><Spinner /></div>
      );
    }
    else if (userRole === 'CLIENT' && userState === 'ACTIVE') {
      // Return the "Client" version of the App
      console.info("In the Client user branch!")
      return (<UserRouter signOut={signOut}/>);
    }
    else if (userRole === 'TRAINER' && userState === 'ACTIVE'){
      // Return the "Trainer" version of the App
      console.info("In the Trainer user branch!")
      return (<TrainerRouter signOut={signOut}/>);
    }
    else if (userRole === 'CLIENT'){
      return(
        <div className="App"><Spinner /></div>
      )
    }
    else if (userRole === 'TRAINER'){
      console.info("In the Trainer registration branch!")
      return (<TrainerRegistrationRouter signOut={signOut} user={user}/>);
    }
}

function TrainerAppWrapper({signOut, user}) {
  /*
  This function contains a HOC for App that provides the additional configuration
  for the trainer version, for use with the withAuthenticator HOC
  */
  const Type = 'TRAINER';
  var [initialized, setInitialized] = useState(false);
  var [loading, setLoading] = useState(true);
  console.info(user);

  useEffect(() => {
    if (!initialized) {
      initTrainer();
      console.info('Trainer Effect ran')
    }
  });

  async function initTrainer(){
    // Function to initialize the trainer data model
    const initVals = {
      id: user.username,
      sub: user.username,
      lifecycle: "FIRSTLOGIN",
      role: "TRAINER"
    }
    try {
      const checkUser = (await API.graphql(graphqlOperation(listUsers, {filter: {id: {eq: user.username} } }))).data.listUsers;
      console.info(checkUser)  
    } catch (error) {
      // console.info(checkUser)
      if (error.data.listUsers.items[0] === null ) {
        const newUser = await API.graphql(graphqlOperation(createUser, {input: initVals}));
        console.info(newUser.data);
      }
    }
    
    // if (checkUser.length === 0) {
    //   //User has not been created.
    //   const newUser = await API.graphql(graphqlOperation(createUser, {input: initVals}));
    //   console.info(newUser.data);
    // }
    setInitialized(true);
    setLoading(false);
  }

  // Display a loading bar until the user role/data is loaded
  if(loading) {
    return(
    <div className="App"><Spinner /></div>
    );
  } else {
    return (
    <App signOut={signOut} user={user} Type={Type} />
    );
  }
}

function ClientAppWrapper({signOut, user}){
  /*
  This function contains a HOC for App that provides the additional configuration
  for the application version, for use with the withAuthenticator HOC
  */
  const Type = 'CLIENT';
  var [initialized, setInitialized] = useState(false);
  var [loading, setLoading] = useState(true);
  console.info(user);

  useEffect(() => {
    if (!initialized) {
      initClient();
      console.info('Client Effect ran')
    }
  },[]);

  async function initClient(){
    // Function to initialize the trainer data model
    const initVals = {
      id: user.username,
      sub: user.username,
      lifecycle: "FIRSTLOGIN",
      role: "CLIENT"
    }
    const checkUser = await API.graphql(graphqlOperation(getUser, {id: user.username }))
    if (checkUser.data.getUser == null) {
      //User has not been created.
      const newUser = await API.graphql(graphqlOperation(createUser, {input: initVals}));
      console.info(newUser.data);
    }
    setInitialized(true);
    setLoading(false);
  }

  // Display a loading bar until the user role/data is loaded
  if(loading) {
    return(
    <div className="App"><Spinner /></div>
    );
  } else {
    return (
    <App signOut={signOut} user={user} Type={Type} />
    );
  }
}
//Provide two different versions of sign in page depending on how the user arrives at login (Client vs. Trainer)
//Looks like avaible attributes are limited by the current version in this project, and setup of Cognito User Pool
const TrainerApp = withAuthenticator(TrainerAppWrapper,{signUpAttributes:['email', 'phone_number', 'custom:firstlogin']});
const ClientApp = withAuthenticator(ClientAppWrapper,{signUpAttributes:['birthdate', 'email', 'name', 'phone_number']});

export {TrainerApp, ClientApp};