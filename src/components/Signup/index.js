import styles from "./Signup.module.css";
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
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div className={styles.formInputMaterial}>
        <input
          className={styles.inputArea}
          type="firstname"
          name="firstname"
          autoComplete="off"
          required
          value={firstName}
          onChange={e => {
            setFirstName(e.target.value);
          }}
        />
        <label className={styles.labelName} htmlFor="firstName">
          <span className={styles.contentName}>First Name</span>
        </label>
      </div>
      <div className={styles.formInputMaterial}>
        <input
          className={styles.inputArea}
          type="lastname"
          name="lastname"
          autoComplete="off"
          required
          value={lastName}
          onChange={e => {
            setLastName(e.target.value);
          }}
        />
        <label className={styles.labelName} htmlFor="lastName">
          <span className={styles.contentName}>Last Name</span>
        </label>
      </div>
      <div className={styles.formInputMaterial}>
        <input
          className={styles.inputArea}
          type="username"
          name="username"
          autoComplete="off"
          required
          value={userName}
          onChange={e => {
            setUserName(e.target.value);
          }}
        />
        <label className={styles.labelName} htmlFor="userName">
          <span className={styles.contentName}>Username</span>
        </label>
      </div>
      <div className={styles.formInputMaterial}>
        <input
          className={styles.inputArea}
          type="email"
          name="email"
          autoComplete="off"
          required
          value={email}
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
        <label className={styles.labelName} htmlFor="email">
          <span className={styles.contentName}>Email</span>
        </label>
      </div>
      <div className={styles.formInputMaterial}>
        <input
          className={styles.inputArea}
          type="password"
          name="password"
          autoComplete="off"
          required
          value={password}
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
        <label className={styles.labelName} htmlFor="password">
          <span className={styles.contentName}>Password</span>
        </label>
      </div>
      <button className={styles.linkBtn} type="submit">
        Signup
      </button>
    </form>
  );
}
