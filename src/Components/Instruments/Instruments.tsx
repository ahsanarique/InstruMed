import React, {useState, useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import fakeData from "../../FakeData/fakeData";
import InstrumentCard from './InstrumentCard';

const Instruments = () => {
  interface DataTypes {
    BrandId: string; Name: string; TypeId: number; Comment: string;
  }
  
  const [instrumentData, setInstrumentData] = useState<DataTypes[] | []>([]);

  useEffect(() => {
    setInstrumentData(fakeData)
  }, []);

  console.log(instrumentData);

  return (
    <section className="mt-5 mx-3">
      <Row>
        {instrumentData?.map((item: DataTypes) => <Col className="my-3 text-center" sm={12} md={6} lg={4} key={item.TypeId}>
          <InstrumentCard BrandId={item.BrandId} Name={item.Name} TypeId={item.TypeId} Comment={item.Comment} />
        </Col>)}
      </Row>
    </section>
  );
};

export default Instruments;