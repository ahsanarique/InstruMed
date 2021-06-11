import React, { FC } from "react";
import Card from "react-bootstrap/Card";
import "./instrumentCard.css";

interface Props {
  BrandId: string;
  Name: string;
  TypeId: number;
  Comment: string;
  Description: string;
}

const InstrumentCard: FC<Props> = ({
  BrandId,
  Name,
  TypeId,
  Comment,
  Description,
}) => {
  return (
    <Card bg="light" className="animated" style={{ minHeight: "12rem" }}>
      <Card.Body>
        <Card.Title>
          {BrandId}: {Name}
        </Card.Title>
        <Card.Text>{Description}</Card.Text>
        <Card.Text>{Comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InstrumentCard;
