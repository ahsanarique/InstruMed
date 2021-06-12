import React, { FC } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const DashboardNav: FC = () => {
  return (
    <section>
      <Card bg="dark" className="rounded-0">
        <Card.Header className="text-center">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h4 className="text-light">InstruMed</h4>
          </Link>
        </Card.Header>
        <Card.Body>
          <Link to="/dashboard/addNewModel">
            <Button variant="primary">Add New Device Model</Button>
          </Link>
        </Card.Body>
      </Card>
    </section>
  );
};

export default DashboardNav;
