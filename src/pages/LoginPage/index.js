import { Navbar, Login } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function LoginPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Log in to your awesome account</h1>
      <Login />
    </div>
  );
}
