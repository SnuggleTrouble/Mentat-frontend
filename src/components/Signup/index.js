import { useState, useContext } from "react";
import { AuthContext } from "../../context";

export function Signup() {
  const { signup } = useContext(AuthContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    signup(firstName, lastName, userName, email, password);
  };

  return (
    <div className="md:container md:mx-auto p-20 rounded-xl">
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl mb-5 text-amber-500	decoration-8">Signup</h2>
      <div>
        <input className="m-2"
          type="firstname"
          name="firstname"
          autoComplete="off"
          required
          value={firstName}
          onChange={e => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="firstName">
          <span>First Name</span>
        </label>
      </div>
      <div>
        <input className="m-2"
          type="lastname"
          name="lastname"
          autoComplete="off"
          required
          value={lastName}
          onChange={e => {
            setLastName(e.target.value);
          }}
        />
        <label htmlFor="lastName">
          <span >Last Name</span>
        </label>
      </div>
      <div>
        <input
        className="m-2"
          type="username"
          name="username"
          autoComplete="off"
          required
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
        <label htmlFor="userName">
          <span>Username</span>
        </label>
      </div>
      <div >
        <input
        className="m-2"
          type="email"
          name="email"
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
      <div>
        <input
        className="m-2"
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
      <button type="submit">
      </button>
    </form>
    </div>
  );
}
