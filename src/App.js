import { Amplify} from 'aws-amplify';
import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import NutritionPage from './NutritionPage';
import CommunicationPage from './CommunicationPage';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import PageList from './Components/pageList';
import ReactDom from 'react-dom/client'
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import { API } from "aws-amplify";
import * as mutations from './graphql/mutations';

import awsExports from '../src/aws-exports';
Amplify.configure(awsExports);


// useEffect((()=> {
//   async function createTodoItem(){
//   const todoDetails = {
//     name: 'Todo 1',
//     description: 'Learn AWS AppSync'
//   };

//   const newTodo = await API.graphql({ query: mutations.createTodo, variables: {input: todoDetails}});

// }}))
function App({ signOut, user }) {
  return (
    <>
      <BrowserRouter>
        <div className="App">
        <NavigationBar PageList={PageList()} signOut={signOut} />
          <header className="App-header">
            <div className='Content'>
              <Switch>
                {PageList().map((page) =>
                {
                  return <Route exact path={page.path} key={page.key}>{page.Component}</Route>
                })}
              </Switch>
            </div>
          </header>
        </div>
      </BrowserRouter>
    </>
  );
}

export default withAuthenticator(App);