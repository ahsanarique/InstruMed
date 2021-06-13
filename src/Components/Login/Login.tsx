import React, { FC, useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useForm, SubmitHandler } from "react-hook-form";
import { Context } from "../../Context/Context";
import axios from "axios";

type Inputs = {
  email: string;
  password: string;
};

const Login: FC = () => {
  const { setLoginStatus } = useContext(Context);

  // route handlers
  const history = useHistory();
  const location = useLocation();
  const { from }: any = location.state || { from: { pathname: "/" } };

  // react hook form validations
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  // upon form submit, checks for authentication with token. Then takes users back to the page if authenticated
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const url = "http://163.47.115.230:30000/api/login";

    function handleResponse(redirect: boolean) {
      if (redirect) {
        history.replace(from);
      }
    }

    function loginUser() {
      axios
        .post(url, data)
        .then((res) => {
          const token = res.data["access_token"];
          sessionStorage.setItem("authorization", token);
          setLoginStatus(true);
          handleResponse(true);
        })
        .catch((error) => {
          alert(error.message);
        });
    }

    loginUser();
  };

  return (
    <section className="m-5">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>
            Email Address:{" "}
            {errors.email && <span className="text-danger">Required</span>}
          </Form.Label>
          <Form.Control
            {...register("email", { required: true })}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>
            Password:{" "}
            {errors.password && <span className="text-danger">Required</span>}
          </Form.Label>
          <Form.Control
            type="password"
            {...register("password", { required: true })}
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </section>
  );
};

export default Login;
