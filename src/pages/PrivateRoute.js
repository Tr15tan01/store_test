import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "../context/user_context";

export default function PriveteRoute({ children }) {
  const { myUser } = useUserContext();
  const location = useLocation();

  if (!myUser) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}
