import React, { FC } from "react";
import Modal from "react-bootstrap/Modal";

interface Props {
  show: boolean;
  onHide: any;
}

const InstrumentDetail: FC<Props> = ({ show, onHide }) => {
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
