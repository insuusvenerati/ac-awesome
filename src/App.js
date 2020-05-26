import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./components/pages/home";
import ItemsPage from "./components/pages/items";
import VillagersPage from "./components/pages/villagers";
import RightSidebar from "./components/sidebar/rightsidebar";

const App = () => (
  <>
    <Router>
      <Nav />
      <div className="flex flex-wrap">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/villagers">
            <VillagersPage />
          </Route>
          <Route path="/items">
            <ItemsPage />
          </Route>
        </Switch>
        <RightSidebar />
      </div>
    </Router>
  </>
);

export default App;
