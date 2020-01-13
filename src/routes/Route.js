import React from 'react';
import Proptypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/pages/_Layouts/auth';
import DefaultLayout from '~/pages/_Layouts/default';

import { store } from '~/store';

// componente de restricao de rotas, like a Router/router-dom
export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="dashboard" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: Proptypes.bool,
  component: Proptypes.oneOfType([Proptypes.element, Proptypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
