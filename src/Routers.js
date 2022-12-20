import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import UserNavBar from "./Components/UserApp/UserNavBar/UserNavBar";
import TrainerNavBar from "./Components/TrainerApp/TrainerNavBar/TrainerNavBar";
import TrainerPageList from "./Components/TrainerApp/TrainerPageList";
import TrainerRegistrationPageList from "./Components/TrainerApp/Registration/TrainerRegistrationPageList";
import { TrainerApp, ClientApp } from "./App";
import UserRegistrationPageList from "./Components/UserApp/Registration/UserRegistrationPageList";
import UserPageList from "./Components/UserApp/UserPageList";

function UserRouter({ signOut }) {
  return (
        <div className="App">
          <UserNavBar 
          UserPageList={UserPageList()} 
          signOut={signOut} />
          <header className="App-header">
            <div className="Content">
              <Routes>
                {UserPageList().map((page) => {
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
  );
}

function UserRegistrationRouter({ signOut }) {
  console.log("Routing to user registration router");
  return <div className="App">
    <UserNavBar
      UserPageList={UserRegistrationPageList()}
      signOut={signOut}
      />
    <div>
      <Routes>
        {UserRegistrationPageList().map((page) => {
          return (
            <Route
              path={page.path}
              key={page.key}
              element={page.Component}
            />
          )
        })}
      </Routes>
    </div>
  </div>
}

function TrainerRouter({ signOut }) {
  return (
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
  );
}

function TrainerRegistrationRouter({ signOut }) {
  return (
        <div className="App">
          <TrainerNavBar
            TrainerPageList={TrainerRegistrationPageList()}
            signOut={signOut}
          />
          <div>
            <Routes>
              {TrainerRegistrationPageList().map((page) => {
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
  );
}

function PublicRouter() {
//Provides a router to use different sign up pages. 
//TODO: Looks like it might only be usable 
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/TrainerGettingStarted/*" key="TrainerStart" element={<TrainerApp/>} /> 
        <Route path="/GettingStarted/*" key="ClientStart" element={<ClientApp/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
export { UserRouter, TrainerRouter, UserRegistrationRouter, TrainerRegistrationRouter, PublicRouter };
