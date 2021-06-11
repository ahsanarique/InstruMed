import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import AddInstrument from "../AddInstrument/AddInstrument";

const DashboardHome = () => {
  return (
    <section>
      <Link to="/dashboard">
        <Sidebar />
        <AddInstrument />
      </Link>
    </section>
  );
};

export default DashboardHome;
