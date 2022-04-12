import { Navbar } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function Landing() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome to Mentat</h1>
    </div>
  );
}
