import React, { FC } from "react";
import { ModelTypes } from "../../TypeCheckers/TypeCheckers";
import Card from "react-bootstrap/Card";
import "./instruments.css";

interface Props {
  item: ModelTypes;
  getInstrumentData: (item: ModelTypes) => void;
}

const InstrumentCard: FC<Props> = ({ item, getInstrumentData }) => {
  return (
    <Card
      onClick={() => getInstrumentData(item)}
      bg="light"
      className="animated"
      style={{ minHeight: "12rem" }}
    >
      <Card.Body>
        <Card.Title>
          {item.BrandId}: {item.Name}
        </Card.Title>
        <Card.Text>{item.Description}</Card.Text>
        <Card.Text>{item.Comment}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default InstrumentCard;
