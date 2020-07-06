import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { WrapperBox, Button } from './styles';

function Result({ stops }) {
  console.log('paradas', stops);

  return (
    <>
      <WrapperBox>
        <div className="box-title">
          <h2>RESULT:</h2>
        </div>
        <table>
          {stops.forEach((ship) => (
            <tr>
              <th>{ship.name}</th>
              <th>{ship.stops}</th>
            </tr>
          ))}
        </table>
      </WrapperBox>
      <Button>
        <Link to="/">New Calculation</Link>
      </Button>
    </>
  );
}
const mapStateToProps = (state) => ({
  stops: state.starShipsReducer.starShips,
});

export default withRouter(connect(mapStateToProps)(Result));

Result.propTypes = {
  stops: PropTypes.array,
};

Result.defaultProps = {
  stops: [],
};
