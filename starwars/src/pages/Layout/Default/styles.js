import styled from 'styled-components';
import starWars from '../../../assets/images/star-wars.png';

export const Wrapper = styled.div`
  height: 100%;
  background: url(${starWars});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 5px 10px 18px #888888;
`;

export const Content = styled.div`
  max-width: 100vh;
  width: 100%;
  max-height: 100vh;
  height: 100%;
  background: #4b4b4b;
  border-radius: 5px;

  img {
    max-height: 200px;
  }
  h1 {
    font-size: 35px;
    font-weight: bold;
    text-shadow: 2px 2px #d0c35d;
  }

  .subContent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
    width: 100%;
  }
`;
