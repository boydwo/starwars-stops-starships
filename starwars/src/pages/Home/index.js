import React from 'react';
// import { Formik, Form } from 'formik';

import { Wrapper, Content } from './styles';

// import ApiService from '../../services/ApiService';
import starWars from '../../assets/images/starwars.png';

function Home() {
  // useEffect(() => {
  //   ApiService.getStarShips(1000000);
  // }, []);

  // function handleForm(data) {
  //   ApiService.getStarShips(data.value);
  // }
  return (
    <Wrapper>
      <Content>
        <div className="subContent">
          <img src={starWars} alt="StarWars" />
          <h1>SHIP STOP CALCULATOR</h1>
          {/* <Formik
            initialValues={{ value: '' }}
            onSubmit={(values, actions) => {
              handleForm(values);
              actions.setSubmitting(false);
            }}
          >
            {({ handleSubmit, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <div className="form">
                  <span>Digite a distancia em MGLT que deseja percorrer</span>
                  <input name="value" type="number" onChange={handleChange} />
                  <button type="submit">Calcular</button>
                </div>
              </Form>
            )}
          </Formik> */}
          <div className="box-resultado">
            <div className="box-title">
              <h2>RESULT:</h2>
            </div>
            <table>
              <tr>
                <th>StarShip</th>
                <th>Total Stops</th>
              </tr>
              <tr>
                <td>Caraguin</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Palio</td>
                <td>94</td>
              </tr>
              <tr>
                <td>Palio</td>
                <td>94</td>
              </tr>
              <tr>
                <td>Palio</td>
                <td>94</td>
              </tr>
              <tr>
                <td>Palio</td>
                <td>94</td>
              </tr>
            </table>
          </div>
          <button>New calculate</button>
        </div>
      </Content>
    </Wrapper>
  );
}

export default Home;
