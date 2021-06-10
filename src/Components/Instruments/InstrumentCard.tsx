import React, {FC} from 'react';
import Card from "react-bootstrap/Card";

interface Props {
  BrandId: string; Name: string; TypeId: number; Comment: string;
}

const InstrumentCard: FC<Props> = ({BrandId, Name, TypeId, Comment}) => {
  return (
    <div>
      <Card >
  
  <Card.Body>
    <Card.Title>{BrandId}: {Name}</Card.Title>
    <Card.Text>
      {Comment}
    </Card.Text>
  </Card.Body>
</Card>
    </div>
  );
};

export default InstrumentCard;