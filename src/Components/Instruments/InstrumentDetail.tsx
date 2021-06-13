import React, { FC } from "react";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { ModelData } from "../../TypeCheckers/TypeCheckers";
import "./instruments.css";

interface Props {
  show: boolean;
  onHide: () => void;
  instrumentData: ModelData[] | [];
  dataTitle: string;
}

// showing model data upon clicking on a model type

const InstrumentDetail: FC<Props> = ({
  show,
  onHide,
  instrumentData,
  dataTitle,
}) => {
  return (
    <Modal
      show={show}
      centered={true}
      dialogClassName="modal-width"
      scrollable={true}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>{dataTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <Table striped bordered responsive>
          <thead>
            <tr>
              <td>ID</td>
              <td>Type</td>
              <td>Group</td>
              <td>Name</td>
              <td>Description</td>
              <td>Protocol Order</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            {instrumentData.map((item) => (
              <tr key={item.Id + item.DisplayName}>
                <td>{item.Id ? item.Id : "N/A"}</td>
                <td>{item.DataType ? item.DataType : "N/A"}</td>
                <td>{item.GroupId ? item.GroupId : "N/A"}</td>
                <td>{item.DisplayName ? item.DisplayName : "N/A"}</td>
                <td>{item.Description ? item.Description : "N/A"}</td>
                <td>{item.ProtocolOrder ? item.ProtocolOrder : "N/A"}</td>
                <td>{item.Status ? item.Status : "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Modal.Body>
    </Modal>
  );
};

export default InstrumentDetail;
