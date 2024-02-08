import { Navigate, Outlet } from "react-router-dom";
import authenticStore from "../stores/authenticate.store";

const PrivateRoute = () => {
  const { isAuthenticated } = authenticStore;
  return (
    isAuthenticated ? <Outlet /> : <Navigate to="/login" />
  );
}

export default PrivateRoute;