import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar } from "components";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      Footer should appear at the end
    </div>
  );
}

export default App;
