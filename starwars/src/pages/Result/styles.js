import styled from 'styled-components';

export const WrapperBox = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  max-width: 80vh;
  background: #4b1418;
  color: #fff;
  border-radius: 10px;

  .box-title {
    width: 100%;
    max-width: 80vh;
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

  table {
    width: 100%;
    th {
      font-weight: bold;
      font-size: 20px;
      padding: 8px;
    }
    td {
      border-bottom: 1px solid #d0c35d;
      font-size: 16px;
      padding: 8px;
    }
  }
`;
export const Button = styled.button`
  margin: 20px 0 40px;
  height: 100%;
  max-height: 7vh;
  width: 100%;
  max-width: 20vh;
  min-height: 7vh;
  background: #d0c35d;
  font-weight: bold;
  color: black;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;

  &:hover {
    background: #4b1418;
    color: #fff;
    .link {
      color: #fff;
    }
  }
  .link {
    color: black;
    height: 100%;
    width: 100%;
  }
`;
