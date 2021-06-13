import React from "react";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/Shared/NavigationBar/NavigationBar";
import Login from "./Components/Login/Login";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import "./App.css";
import Instruments from "./Components/Instruments/Instruments";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Pagination from "./Components/Pagination/Pagination";

function App() {
  return (
    <main>
      <Switch>
        <PrivateRoute exact path="/">
          <NavigationBar />
          <Instruments />
          <Pagination />
        </PrivateRoute>

        <Route path="/login">
          <NavigationBar />
          <Login />
        </Route>

        <PrivateRoute path="/dashboard">
          <DashboardHome />
        </PrivateRoute>
      </Switch>
    </main>
  );
}

export default App;
