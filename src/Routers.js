import { BrowserRouter,Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import PageList from './Components/pageList';
import TrainerPageList from './Components/TrainerApp/TrainerPageList';

function UserRouter({signOut}) {
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

function TrainerRouter({signOut}) {
    return (
        <>
        <BrowserRouter>
          <div className="App">
          <NavigationBar PageList={TrainerPageList()} signOut={signOut} />
            <header className="App-header">
              <div className='Content'>
                <Switch>
                  {TrainerPageList().map((page) =>
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
export { UserRouter, TrainerRouter};