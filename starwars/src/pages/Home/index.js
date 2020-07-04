import React, { useEffect } from 'react';
import { Wrapper, Content } from './styles';
import ApiService from '../../services/ApiService';
import starWars from '../../assets/images/starwars.png';

function Home() {
  useEffect(() => {
    ApiService.getStarShips(1000000);
  }, []);

  // function handleSubmit() {}
  return (
    <Wrapper>
      <Content>
        <img src={starWars} alt="StarWars" />
        <h1>SHIP STOP CALCULATOR</h1>
        {/* <Form onSubmit={handleSubmit}>
          <span></span>
          <Input name='email' type='email' placeholder='Seu e-mail' />
          <button type='submit'>Acessar</button>
        </Form> */}
      </Content>
    </Wrapper>
  );
}

export default Home;
