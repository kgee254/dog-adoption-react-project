import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children, adminOnly = false }) {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/signin" replace />;
  }

  if (adminOnly && currentUser.role !== "admin") {
    return <Navigate to="/" replace />; // not admin? kick them out
  }

  return children;
}

export default ProtectedRoute;