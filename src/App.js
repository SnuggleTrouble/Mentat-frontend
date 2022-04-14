import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import { Post, ListOfPosts, Navbar } from "components";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      {/* <Post /> */}
      {/* <ListOfPosts /> */}
      Footer
    </div>
  );
}

export default App;
