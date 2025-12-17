import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isEntered = localStorage.getItem("isEntered");

  if (!isEntered) {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedRoute;
