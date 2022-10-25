import { Amplify} from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from './graphql/mutations'
import { listTodos } from './graphql/queries'
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


function App({ signOut, user }) {

  useEffect((()=> {
    async function createNutritionItem(){
    const NutritionDetails = {
      name: 'Todo 1',
      description: 'Learn AWS AppSync'
    };
  
    const newNutrition = await API.graphql({ query: mutations.createReportDailyNutrition, variables: {input: NutritionDetails}});
  
  }}))

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

export default withAuthenticator(App,
  {
    signUpAttributes: ['address', 'birthdate', 'gender', 'email', 'name', 'phone_number']
  });