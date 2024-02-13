import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

export function RestrictedRoute({ component: Component, redirectTo = "/" }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}

RestrictedRoute.propTypes = {
  component: PropTypes.any,
  redirectTo: PropTypes.any,
};
