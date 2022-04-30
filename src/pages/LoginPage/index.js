import { Navbar, Login } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function LoginPage() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex min-h-screen justify-center p-20 box-border bg-white">
    <div className="">
    <Login />
    </div>
    </div>
  );
}
