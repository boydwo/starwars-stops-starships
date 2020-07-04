import React, { useEffect } from 'react';
import { Formik, Form } from 'formik';

import { Wrapper, Content } from './styles';

import ApiService from '../../services/ApiService';
import starWars from '../../assets/images/starwars.png';

function Home() {
  // useEffect(() => {
  //   ApiService.getStarShips(1000000);
  // }, []);

  function handleForm(data) {
    ApiService.getStarShips(data.value);
  }
  return (
    <Wrapper>
      <Content>
        <img src={starWars} alt="StarWars" />
        <h1>SHIP STOP CALCULATOR</h1>
        <Formik
          initialValues={{ value: '' }}
          onSubmit={(values, actions) => {
            handleForm(values);
            actions.setSubmitting(false);
          }}
        >
          {({ handleSubmit, handleChange }) => (
            <Form onSubmit={handleSubmit}>
              <span>Digite a distancia em MGLT que deseja percorrer</span>
              <input name="value" type="number" onChange={handleChange} />
              <button type="submit">Calcular</button>
            </Form>
          )}
        </Formik>
      </Content>
    </Wrapper>
  );
}

export default Home;
