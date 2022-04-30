import { Navbar, Signup } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function SignupPage() {
  const { user } = useContext(AuthContext);
  return (
    <div className= "flex min-h-screen justify-center box-border bg-white p-20">
    <div>
    <Signup />
    </div>
    </div>
  );
}
