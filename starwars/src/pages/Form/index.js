import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
// import history from '../../services/history';

import { WrapperForm } from './styles';
import ApiService from '../../services/ApiService';

function StarForm(props) {
  // eslint-disable-next-line react/prop-types
  const { getStarShips } = props;

  function handleSubmit(data) {
    // eslint-disable-next-line radix
    const distance = parseInt(data.value, 10);
    getStarShips(distance);
    // eslint-disable-next-line react/prop-types
    props.history.push('/result');
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
export default withRouter(connect(null, mapDispatchToProps)(StarForm));
