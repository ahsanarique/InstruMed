import React, { FC } from "react";
import Modal from "react-bootstrap/Modal";
import { ModelData } from "../../TypeCheckers/TypeCheckers";

interface Props {
  show: boolean;
  onHide: () => void;
  instrumentData: ModelData[] | [];
}

const InstrumentDetail: FC<Props> = ({ show, onHide, instrumentData }) => {
  return (
    <Modal
      show={show}
      centered={true}
      size="xl"
      scrollable={true}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal Body Content</Modal.Body>
    </Modal>
  );
};

export default InstrumentDetail;
