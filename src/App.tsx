import React from "react";
import { Switch, Route } from "react-router-dom";
import NavigationBar from "./Components/Shared/NavigationBar/NavigationBar";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import Footer from "./Components/Shared/Footer/Footer";
import "./App.css";
import Instruments from "./Components/Instruments/Instruments";

function App() {
  return (
    <main>
      <Switch>
        <PrivateRoute exact path="/">
          <NavigationBar />
          <Instruments />
          <Footer />
        </PrivateRoute>

        <Route path="/login">
          <NavigationBar />
          <Login />
          <Footer />
        </Route>

        <PrivateRoute path="/dashboard">
          <DashboardHome />
        </PrivateRoute>
      </Switch>
    </main>
  );
}

export default App;
