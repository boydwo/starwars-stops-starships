import styled from "styled-components";
import starWars from "../../assets/images/star-wars.png";

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
  width: 100%;
  margin: 10px 10px 10px 10px;
  height: 80vh;
  max-width: 100vh;
  background: #545454;
  border-radius: 5px;
  text-align: center;
  img {
    max-height: 150px;
  }
  h1 {
    font-size: 30px;
    font-weight: bold;
    text-shadow: 2px 2px #d0c35d;
  }
`;
