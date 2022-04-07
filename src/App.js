import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Navbar } from "./components";

function App() {
  return (
    <div className={styles.textColor}>
      <Navbar />
      <Outlet />
      footer
    </div>
  );
}

// this is a test

export default App;
