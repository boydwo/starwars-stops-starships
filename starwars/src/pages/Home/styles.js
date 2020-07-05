import styled from 'styled-components';
import starWars from '../../assets/images/star-wars.png';

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

  .subContent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 100%;
    width: 100%;
  }
  img {
    max-height: 200px;
  }
  h1 {
    font-size: 35px;
    font-weight: bold;
    text-shadow: 2px 2px #d0c35d;
  }

  .box-resultado {
    margin-top: 20px;
    width: 100%;
    height: 100%;
    max-width: 40vh;
    background: #4b1418;
    color: #fff;
    border-radius: 10px;

    .box-title {
      width: 100%;
      max-width: 40vh;
      background: #d0c35d;
      border-radius: 10px 10px 0 0;
      color: #4b1418;
      h2 {
        font-size: 35px;
        font-weight: bold;
        text-shadow: 1px 2px black;
        padding: 5px;
      }
    }
    span {
      font-size: 23px;
      text-align: initial;
    }

    table {
      width: 100%;
      th {
        font-weight: bold;
        font-size: 20px;
        padding: 8px;
      }
      td {
        border-bottom: 1px solid #d0c35d;
        font-size: 18px;
        padding: 8px;
      }
    }
  }
  button {
    margin: 20px 0 40px;
    height: 100%;
    max-height: 7vh;
    width: 100%;
    max-width: 20vh;
    background: d0c35d#;
    font-weight: bold;
    color: black;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: #4b1418;
      color: #fff;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    color: #d3b628;
    span {
      margin-bottom: 20px;
      font-size: 18px;
    }

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #ffff;
      text-align: center;
      margin: 0 0 10px;
      &::placeholder {
        color: rgba(255, 255, 355, 0.5);
      }
      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
    }

    button {
      margin: 10px 0 40px;
      height: 44px;
      width: 100%;
      max-width: 100px;
      background: #d0c35d;
      font-weight: bold;
      color: black;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: #f23d4c;
      }
    }
  }
`;
