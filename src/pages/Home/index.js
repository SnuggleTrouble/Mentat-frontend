import { useContext } from "react";
import { AuthContext } from "context";
import styles from "./Home.module.css";

export function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Home</h1>
      <code>{JSON.stringify(user)}</code>
    </div>
  );
}
