import React, {FC} from 'react';
import Card from "react-bootstrap/Card";
import "./instrumentCard.css";

interface Props {
  BrandId: string; Name: string; TypeId: number; Comment: string;
}

const InstrumentCard: FC<Props> = ({BrandId, Name, TypeId, Comment}) => {
  return (
    
      <Card className="animated">
      <Card.Body>
        <Card.Title>{BrandId}: {Name}</Card.Title>
        <Card.Text>
          {Comment}
        </Card.Text>
      </Card.Body>
      </Card>
    
  );
};

export default InstrumentCard;