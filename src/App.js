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

function App() {
  
    const [PageIndex, setPageIndex] = useState(4);

    return (
      <BrowserRouter>
        <div className="App">
        <NavigationBar PageList={PageList()} />
        {/* <h1>NavBar</h1> */}
          <header className="App-header">
            <div className='Content'>
              <Switch>
                {PageList().map((page) =>
                {
                  return <Route exact path={page.path}>{page.Component}</Route>
                })}
                {/* <Route path='/'>
                  <HomePage />
                </Route> */}
              </Switch>
            </div>
          {/* <NavigationBar Titles={PageList().map((page) => {
            return page.Title;
          })} />

          {PageList()[PageIndex].Component} */}
          </header>
        </div>
      </BrowserRouter>
    );
  
}

export default App;
