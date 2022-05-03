import { Link } from "react-router-dom";
import { AuthContext } from "context";
import { useContext } from "react";

export function Navbar() {
  const { logout, user } = useContext(AuthContext);
  return (
    <div className=" flex p-5 bg-emerald-500 text-emerald-900 font-semibold">
      <nav className=" flex flex-row justify-evenly gap-20">
<<<<<<< HEAD
        <div className=" text-emerald-600 ">
          <img src="./Mentat-logo.png" width={115} alt=""/>
=======
        <div className=" text-emerald-800 ">
          <img src="./Mentat-logo.png" width={110} alt="" />
          {!user && <Link to="/">Home</Link>}
>>>>>>> b6677c5045d9b997d35ebc8b36e592977b88b897
        </div>
        <div>{user && <Link to="/post/categories">Categories</Link>}</div>
        <div>{!user && <Link to="/landing">Home</Link>}</div>
        <div>
          {!user && <Link to="/login">Login</Link>}
          {user && <button onClick={logout}>Logout</button>}
        </div>
        <div>{!user && <Link to="/signup">Signup</Link>}</div>
      </nav>
    </div>
  );
}
