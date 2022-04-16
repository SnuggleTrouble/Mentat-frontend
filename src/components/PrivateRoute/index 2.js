import { AuthContext } from "context";
import { Navigate } from "react-router-dom";
import { useContext } from "react";

export function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (user) {
    return children;
  } else {
    return <Navigate to="/landing" />;
  }
}
