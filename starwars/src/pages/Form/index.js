import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';

import { WrapperForm } from './styles';
import ApiService from '../../services/ApiService';

const schema = Yup.object().shape({
  value: Yup.string().required('Enter a value'),
});

function StarForm(props) {
  const { getStarShips, history } = props;

  function handleSubmit(data) {
    const distance = parseInt(data.value, 10);
    getStarShips(distance);
    history.push('/result');
  }
  return (
    <Form schema={schema} onSubmit={handleSubmit}>
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

StarForm.propTypes = {
  getStarShips: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};
