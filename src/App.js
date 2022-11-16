import { Amplify} from 'aws-amplify';
import React, {useState, useEffect} from 'react';
import './App.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import PageList from './Components/pageList';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { API, graphqlOperation } from "aws-amplify";
import { listUsers } from "./graphql/queries";
import awsExports from '../src/aws-exports';
import Spinner from './Spinner';
import {TrainerRouter, UserRouter} from './Routers';
import { render } from '@testing-library/react';
import 'bootstrap/dist/css/bootstrap.min.css';


Amplify.configure(awsExports);


function App({ signOut, user }) {

  var [userRole, setUserRole] = useState([]);
  let [loading, setLoading] = useState(true);
  console.info(user);

  useEffect(() => {
    retrieveRole();
  },);

  async function retrieveRole()
    {
        try {
            const userID = await API.graphql(graphqlOperation(listUsers, {filter: { sub: { eq: user.username}}}));
            const userRole = userID.data.listUsers.items[0].role;
            setUserRole(userRole);
            setLoading(false);
            console.info(userRole);       
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
    else if (userRole === 'CLIENT') {
      // Return the "Client" version of the App
      console.info("In the Client user branch!")
      return (<UserRouter signOut={signOut}/>);
    }
    else if (userRole === 'TRAINER'){
      // Return the "Trainer" version of the App
      console.info("In the Trainer user branch!")
      return (<TrainerRouter signOut={signOut}/>);
    }
    
    


  // return (
  //   <>
  //     <BrowserRouter>
  //       <div className="App">
  //       <NavigationBar PageList={PageList()} signOut={signOut} />
  //         <header className="App-header">
  //           <div className='Content'>
  //             <Switch>
  //               {PageList().map((page) =>
  //               {
  //                 return <Route exact path={page.path} key={page.key}>{page.Component}</Route>
  //               })}
  //             </Switch>
  //           </div>
  //         </header>
  //       </div>
  //     </BrowserRouter>
  //   </>
  // );
}

export default withAuthenticator(App);