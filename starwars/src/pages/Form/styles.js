import styled from 'styled-components';

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: center;
  justify-content: center;
  color: #d0c35d;
  span {
    margin-bottom: 20px;
    font-size: 18px;
  }

  input {
    background: rgba(0, 0, 0, 0.5);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
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
    background: #4b1418;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: #d0c35d;
      color: black;
    }
  }
`;
