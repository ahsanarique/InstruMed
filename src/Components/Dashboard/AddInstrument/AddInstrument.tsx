import React, { FC, useContext, useState } from "react";
import { Context } from "../../../Context/Context";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm, SubmitHandler } from "react-hook-form";
import { DeviceTypes } from "../../../TypeCheckers/TypeCheckers";

type Inputs = {
  BrandId: string;
  Name: string;
  TypeId: number;
  Comment: string;
};

const AddInstrument: FC = () => {
  const { deviceType, addNewModelType } = useContext(Context);

  const [deviceTypeId, setDeviceTypeId] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.Comment === "Select Device Type") {
      alert("Please Select a Valid Description");
    } else {
      data.TypeId = deviceTypeId;
      console.log(data);
      addNewModelType(data);
    }
  };

  const handleValueChange = (e: any) => {
    const typeId = deviceType.find(
      (item: DeviceTypes) => item.Description === e.target.value
    ).Id;

    setDeviceTypeId(typeId);
  };

  return (
    <section className="m-5">
      <h3>Enter New Device Model's Data:</h3>
      <Form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>
            Brand Id:{" "}
            {errors.BrandId && <span className="text-danger">Required</span>}
          </Form.Label>
          <Form.Control
            {...register("BrandId", { required: true })}
            type="text"
            placeholder="Brand Name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Name: {errors.Name && <span className="text-danger">Required</span>}
          </Form.Label>
          <Form.Control
            {...register("Name", { required: true })}
            type="text"
            placeholder="Device Model's Name"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>
            Comment:{" "}
            {errors.Comment && <span className="text-danger">Required</span>}
          </Form.Label>
          <Form.Control
            {...register("Comment", { required: true })}
            onChange={handleValueChange}
            type="text"
            as="select"
          >
            <option disabled selected>
              Select Device Type
            </option>
            {deviceType.map((item: DeviceTypes) => (
              <option key={item.Id}>{item.Description}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Device Type Id:{" "}
            {errors.TypeId && (
              <span className="text-danger">
                Provide a Valid Device Type Id
              </span>
            )}
          </Form.Label>
          <Form.Control
            {...register("TypeId", { required: true })}
            value={deviceTypeId}
            readOnly
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Confirm Addition
        </Button>
      </Form>
    </section>
  );
};

export default AddInstrument;
