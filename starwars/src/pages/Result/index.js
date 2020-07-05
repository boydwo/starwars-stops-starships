import React from 'react';
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
      <Button>New Calculation</Button>
    </>
  );
}
const mapStateToProps = (state) => ({
  stops: state.starShipsReducer.starShips,
});

export default connect(mapStateToProps)(Result);

Result.propTypes = {
  stops: PropTypes.array,
};

Result.defaultProps = {
  stops: [],
};
