import React, { FC, useState, useContext } from "react";
import { Col, Row } from "react-bootstrap";
import InstrumentCard from "./InstrumentCard";
import InstrumentDetail from "./InstrumentDetail";
import { Context } from "../../Context/Context";
import { ModelTypes } from "../../TypeCheckers/TypeCheckers";

const Instruments: FC = () => {
  const {
    instrumentType,
    instrumentData,
    getInstrumentData,
    setInstrumentData,
    dataTitle,
  } = useContext(Context);

  // Modal state and event handlers
  const [modalShow, setModalShow] = useState(false);
  const handleClose = () => {
    setModalShow(false);
    setInstrumentData([]);
  };
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
            <InstrumentCard item={item} getInstrumentData={getInstrumentData} />
          </Col>
        ))}
      </Row>

      <InstrumentDetail
        instrumentData={instrumentData}
        show={modalShow}
        onHide={handleClose}
        dataTitle={dataTitle}
      />
    </section>
  );
};

export default Instruments;
