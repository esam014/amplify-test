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
    );
  
}

export default App;
