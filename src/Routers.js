import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import TrainerNavBar from "./Components/TrainerApp/TrainerNavBar/TrainerNavBar";
import PageList from "./Components/pageList";
import TrainerPageList from "./Components/TrainerApp/TrainerPageList";
import { TrainerApp, ClientApp } from "./App";

function UserRouter({ signOut }) {
  return (
    <>
        <div className="App">
          <NavigationBar PageList={PageList()} signOut={signOut} />
          <header className="App-header">
            <div className="Content">
              <Routes>
                {PageList().map((page) => {
                  return (
                    <Route
                      path={page.path}
                      key={page.key}
                      element={page.Component}
                    />
                  );
                })}
              </Routes>
            </div>
          </header>
        </div>
    </>
  );
}

function TrainerRouter({ signOut }) {
  return (
    <>
        <div className="App">
          <TrainerNavBar
            TrainerPageList={TrainerPageList()}
            signOut={signOut}
          />
          <div>
            <Routes>
              {TrainerPageList().map((page) => {
                return (
                  <Route
                    path={page.path}
                    key={page.key}
                    element={page.Component}
                  />
                );
              })}
            </Routes>
          </div>
        </div>
    </>
  );
}

function PublicRouter() {
//Provides a router to use different sign up pages. 
//TODO: Looks like it might only be usable 
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/TrainerGettingStarted/*" key="TrainerStart" element={<TrainerApp/>} /> 
        <Route path="/GettingStarted/*" key="ClientStart" element={<ClientApp/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
export { UserRouter, TrainerRouter, PublicRouter };
