import React from "react";
import { Switch, Route } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import DashboardNav from "../DashboardNav/DashboardNav";
import AddInstrument from "../AddInstrument/AddInstrument";

const DashboardHome = () => {
  return (
    <section>
      <Row>
        <Col md={12}>
          <DashboardNav />
        </Col>

        <Col md={12}>
          <Switch>
            <Route path="/dashboard/addNewModel">
              <AddInstrument />
            </Route>
          </Switch>
        </Col>
      </Row>
    </section>
  );
};

export default DashboardHome;
