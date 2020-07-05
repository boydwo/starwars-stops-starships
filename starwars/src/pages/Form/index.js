import React from 'react';
import { Redirect } from 'react-router-dom';
import { Formik, Form as FormikForm } from 'formik';

import { WrapperForm } from './styles';
import ApiService from '../../services/ApiService';

function Form() {
  function handleForm(data) {
    ApiService.getStarShips(data.value);
    return <Redirect to="/result" />;
  }
  return (
    <Formik
      initialValues={{ value: '' }}
      onSubmit={(values, actions) => {
        handleForm(values);
        actions.setSubmitting(false);
      }}
    >
      {({ handleSubmit, handleChange }) => (
        <FormikForm onSubmit={handleSubmit}>
          <WrapperForm>
            <span>Enter the distance in MGLT you want to travel</span>
            <input name="value" type="number" onChange={handleChange} />
            <button type="submit">Calculate</button>
          </WrapperForm>
        </FormikForm>
      )}
    </Formik>
  );
}

export default Form;
