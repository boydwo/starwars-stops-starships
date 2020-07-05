import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import DefaultLayout from '../pages/Layout/Default';

function RouteWrapper({ component: Component, ...rest }) {
  const resultado = true;
  if (!resultado) {
    return <Redirect to="/" />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}
export default RouteWrapper;

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
