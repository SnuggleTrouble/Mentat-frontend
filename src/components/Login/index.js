import styles from "./Login.module.css";
import { AuthContext } from "context";
import { useContext, useState } from "react";

export function Login() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2>Login</h2>
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
        Login
      </button>
    </form>
  );
}
