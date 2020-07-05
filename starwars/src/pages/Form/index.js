import React from 'react';
import { connect } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
// import history from '../../services/history';

import { WrapperForm } from './styles';
import ApiService from '../../services/ApiService';

function StarForm(props) {
  // eslint-disable-next-line react/prop-types
  const { getStarShips } = props;
  function handleSubmit(data) {
    getStarShips(data);
    // eslint-disable-next-line react/prop-types
    // props.history.push('/result');
  }
  return (
    <Form onSubmit={handleSubmit}>
      <WrapperForm>
        <span>Enter the distance in MGLT you want to travel</span>
        <Input name="value" type="number" />
        <button type="submit">Calculate</button>
      </WrapperForm>
    </Form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getStarShips: (distance) => {
    dispatch(ApiService.getStarShips(distance));
  },
});
export default connect(null, mapDispatchToProps)(StarForm);
