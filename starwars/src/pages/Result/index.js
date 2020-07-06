import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { WrapperBox, Button } from './styles';

function Result({ stops }) {
  return (
    <>
      <WrapperBox>
        <div className="box-title">
          <h2>RESULT:</h2>
        </div>
        <table>
          <thead>
            <tr>
              <th>StarShip</th>
              <th>Total Stops</th>
            </tr>
          </thead>
          <tbody>
            {stops && stops.length > 0
              ? stops.map((ship) => (
                  <tr key={ship.name}>
                    <td>{ship.name}</td>
                    <td>{ship.stops}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </WrapperBox>
      <Button>
        <Link to="/" className="link">
          New Calculation
        </Link>
      </Button>
    </>
  );
}
const mapStateToProps = (state) => ({
  stops: state.starShipsReducer.stops,
});

export default withRouter(connect(mapStateToProps)(Result));

Result.propTypes = {
  stops: PropTypes.array.isRequired,
};
