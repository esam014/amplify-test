import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button } from "react-bootstrap";

const UserDetails = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.info(data);
  };

  // Insert data function here to input the data

  return (
    <Form className="w-75 p-3 mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="first_name">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            name="first_name"
            placeholder="Enter your first name"
            autoComplete="off"
            // ref={register({
            //   required: 'First name is required.',
            //   pattern: {
            //     value: /^[a-zA-Z]+$/,
            //     message: 'First name should contain only characters.'
            //   }
            // })}
            // className={`${errors.first_name ? 'input-error' : ''}`}
          />
          {/* {errors.first_name && (
            <p className="errorMsg">{errors.first_name.message}</p>
          )} */}
        </Form.Group>

        <Form.Group controlId="last_name">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            name="last_name"
            placeholder="Enter your last name"
            autoComplete="off"
            // ref={register({
            //   required: 'Last name is required.',
            //   pattern: {
            //     value: /^[a-zA-Z]+$/,
            //     message: 'Last name should contain only characters.'
            //   }
            // })}
            // className={`${errors.last_name ? 'input-error' : ''}`}
          />
          {/* {errors.last_name && (
            <p className="errorMsg">{errors.last_name.message}</p>
          )} */}
        </Form.Group>
        <div className="p-3">
          <Button variant="dark" type="submit">
            Next
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default UserDetails;
