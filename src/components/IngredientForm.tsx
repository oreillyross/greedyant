import * as React from "react";
import styled from "styled-components";
import { Formik } from "formik";

const StyledForm = styled.div`
  margin: 12px;
  padding: 12px;
  border: 1px solid grey;
`;

type IMeasurement = "g" | "gm" | "kg" | "litre" | null;

interface IngredientFormValues {
  name: string;
  quantity: number;
  measurement: IMeasurement;
  expiryDate: Date;
}

const handleSubmit = (values: IngredientFormValues) => {
  console.log(values);
};

const IngredientForm = () => {
  const initialValues: IngredientFormValues = {
    name: "s",
    quantity: 0,
    measurement: null,
    expiryDate: new Date(),
  };

const Button = styled.button`
  display: block;
  margin-top: 12px;
  width: 50vw;
  margin-left: auto;
  margin-right: auto;
  
`

  return (
    <StyledForm>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleSubmit, handleChange, handleBlur }) => {
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                width={50}
                type="text"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              />
              <label>Quantity</label>
              <input type="text" />
              <label>Measurement</label>
              <input type="text" />
              <label>Expiry Date</label>
              <input type="date" />
              <Button type="submit">Add</Button>
            </form>
          );
        }}
      </Formik>
    </StyledForm>
  );
};

export { IngredientForm };
