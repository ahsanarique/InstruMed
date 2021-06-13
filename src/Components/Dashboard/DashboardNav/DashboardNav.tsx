import React, { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../Context/Context";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const DashboardNav: FC = () => {
  const { setLoginStatus } = useContext(Context);

  // Navigation in dashboard for logged in users
  return (
    <section>
      <Card bg="dark" className="rounded-0">
        <Card.Header className="d-flex text-light">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h4 className="text-light">InstruMed</h4>
          </Link>
          <Button
            variant="outline-light"
            onClick={() => setLoginStatus(false)}
            className="ml-auto"
          >
            Logout
          </Button>
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
