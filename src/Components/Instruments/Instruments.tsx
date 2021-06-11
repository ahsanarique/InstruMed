import React, { FC, useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import InstrumentCard from "./InstrumentCard";
import InstrumentDetail from "./InstrumentDetail";
import { Context } from "../../Context/Context";

interface ModelTypes {
  Id: number;
  BrandId: string;
  Name: string;
  TypeId: number;
  Comment: string;
  Description: string;
}

const Instruments: FC = () => {
  const { instrumentType } = useContext(Context);

  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => setModalShow(false);
  const handleShow = () => {
    setModalShow(true);
  };

  return (
    <section className="my-5 mx-3">
      <Row>
        {instrumentType?.map((item: ModelTypes) => (
          <Col
            className="my-3 text-center"
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={item.Id}
            onClick={() => handleShow()}
          >
            <InstrumentCard
              BrandId={item.BrandId}
              Name={item.Name}
              TypeId={item.TypeId}
              Comment={item.Comment}
              Description={item.Description}
            />
          </Col>
        ))}
      </Row>
      <InstrumentDetail show={modalShow} onHide={handleClose} />
    </section>
  );
};

export default Instruments;
