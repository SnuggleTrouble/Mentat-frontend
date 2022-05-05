import { AuthContext } from "context";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

export function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className="bg-emerald-100 p-20 rounded-xl flex jus">
      <form className="" onSubmit={handleSubmit}>
        <div className="flex justify-center flex-col ">
          <h2 className="font-bold mb-10 text-2xl">
            Login into your awesome account
          </h2>
          <div className="flex gap-2 mr-2 mb-5">
            <input
              className="bg-emerald-50 p-2 rounded-md"
              type="email"
              name="email"
              placeholder="Email goes here"
              autoComplete="off"
              required
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="email">
              <span>Email</span>
            </label>
          </div>
          <div className="flex gap-2 mr-2 mb-7 ">
            <input
              className="bg-emerald-50 p-2 rounded-md"
              placeholder="Password goes here"
              type="password"
              name="password"
              autoComplete="off"
              required
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
            <label htmlFor="password">
              <span>Password</span>
            </label>
          </div>
          <button
            className=" bg-emerald-500 w-20 px-20 py-2 flex justify-center rounded-lg text-emerald-900 text-lg"
            type="submit"
          >
            Login
          </button>
          <div><p>Don't have an account yet?
        <br/>Click <Link to="/signup"><b>here</b></Link> to sign up</p></div>
        </div>
      </form>
    </div>
  );
}
