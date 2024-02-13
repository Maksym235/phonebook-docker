import { useAuth } from "../hooks/useAuth";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

export function PrivateRoute({ component: Component, redirectTo }) {
  const { isRefreshing, isLoggedIn } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
}

PrivateRoute.propTypes = {
  component: PropTypes.any,
  redirectTo: PropTypes.any,
};
