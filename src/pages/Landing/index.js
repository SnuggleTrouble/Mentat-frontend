import { Navbar } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function Landing() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome to Mentat</h1>
      <h2>A place for you to share with others your experiences with mental health.</h2>
    </div>
  );
}
