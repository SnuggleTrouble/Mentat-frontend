import { useContext } from "react";
import { AuthContext } from "context";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

export function Home() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  !user && navigate('/Login')
  return (
    <div>
     {user ?
    <div>
      <h1>Home</h1>
      <code>{JSON.stringify(user)}</code>
    </div>:(
      navigate('/Login')
    )} 
    </div>
  );
}
