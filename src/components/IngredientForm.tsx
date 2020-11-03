import * as React from "react";
import styled from "styled-components";
import { Formik } from 'formik'

const StyledForm = styled.div`
  margin: 12px;
  padding: 12px;
  border: 1px solid grey;
`

const handleSubmit = (values: any) => {
  console.log(values)
}

type IMeasurement = 'g' | 'gm' | 'kg' | 'litre' | null;

interface IngredientFormValues {
  name: string;
  quantity: number;
  measurement: IMeasurement;
  expiryDate: Date;
}

const IngredientForm = () => {
  
   const initialValues: IngredientFormValues = {
     name: '',
     quantity: 0,
     measurement: null,
     expiryDate: new Date()
   }

    return (
    
        <StyledForm>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({handleSubmit}) => {
        return (
          <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" />
        <label>Quantity</label>
        <input type="text" />
        <label>Measurement</label>
        <input type="text" />
        <label>Expiry Date</label>
        <input type="date" />
        <button type='submit'>Add</button>
      </form>
        )
      }}
      </Formik>
    </StyledForm>

  );
};

export { IngredientForm };
