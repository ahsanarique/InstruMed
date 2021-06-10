import React, {useState, useEffect} from 'react';
import { Col, Row } from 'react-bootstrap';
import fakeData from "../../FakeData/fakeData";
import InstrumentCard from './InstrumentCard';
import InstrumentDetail from './InstrumentDetail';

interface DataTypes {
  BrandId: string; Name: string; TypeId: number; Comment: string;
}

const Instruments = () => {
  
  
  const [instrumentData, setInstrumentData] = useState<DataTypes[] | []>([]);
  
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => setModalShow(true);

  useEffect(() => {
    setInstrumentData(fakeData)
  }, []);

  return (
    <section className="my-5 mx-3">
      <Row>
        {instrumentData?.map((item: DataTypes) => <Col className="my-3 text-center" sm={12} md={6} lg={4} key={item.TypeId} onClick={handleShow}>
          <InstrumentCard BrandId={item.BrandId} Name={item.Name} TypeId={item.TypeId} Comment={item.Comment} />
        </Col>)}
      </Row>
      <InstrumentDetail show={modalShow} onHide={handleClose} />
    </section>
  );
};

export default Instruments;