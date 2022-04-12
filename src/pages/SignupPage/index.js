import { Navbar, Signup } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function SignupPage() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Join an awesome community</h1>
      <Signup />
    </div>
  );
}
