import React from 'react';
import Proptypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// componente de restricao de rotas, like a Router/router-dom
export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const signed = true;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="dashboard" />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: Proptypes.bool,
  component: Proptypes.oneOfType([Proptypes.element, Proptypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
