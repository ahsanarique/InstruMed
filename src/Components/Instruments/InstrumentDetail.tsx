import React, {FC} from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

interface Props {
  show: boolean;
  onHide: any;
}

const InstrumentDetail: FC<Props> = ({show, onHide}) => {
  
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      scrollable
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ab perspiciatis sunt quaerat placeat blanditiis quidem voluptates? A amet excepturi consectetur quae nam alias placeat dolores debitis! Reprehenderit, optio ducimus?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default InstrumentDetail;