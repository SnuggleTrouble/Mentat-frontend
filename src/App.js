import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar } from "components";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      footer
    </div>
  );
}

export default App;
