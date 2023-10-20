import { Navigate, useLocation } from "react-router-dom";
import { useUserContext } from "../context/user_context";
import { useAuth0 } from "@auth0/auth0-react";

export default function PriveteRoute({ children }) {
  // const { myUser } = useUserContext();
  const { user } = useAuth0();

  const location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}
