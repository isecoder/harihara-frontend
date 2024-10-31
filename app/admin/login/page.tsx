import React from "react";

export default function AdminLogin() {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <i className="fa fa-user" style={styles.icon}></i>
          <input
            type="text"
            placeholder="Username"
            style={styles.input}
            required
          />
          <span style={styles.required}>*</span>
        </div>
        <div style={styles.inputGroup}>
          <i className="fa fa-lock" style={styles.icon}></i>
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            required
          />
          <span style={styles.required}>*</span>
        </div>
        <div style={styles.buttonGroup}>
          <button type="submit" style={styles.loginButton}>
            LOGIN
          </button>
          <button type="reset" style={styles.resetButton}>
            RESET
          </button>
        </div>
      </form>
    </div>
  );
}

const styles = {
  container: {
    background: "linear-gradient(to bottom, #fdfcf1, #f2b890)", // Background gradient color
    borderRadius: "5px",
    padding: "2rem",
    maxWidth: "400px",
    margin: "5% auto",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center" as const,
  },
  heading: {
    fontSize: "24px",
    marginBottom: "1.5rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
  },
  inputGroup: {
    position: "relative" as const,
    marginBottom: "1.5rem",
    width: "100%",
  },
  icon: {
    position: "absolute" as const,
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "gray",
  },
  input: {
    width: "100%",
    padding: "0.75rem 1rem 0.75rem 2.5rem",
    border: "1px solid #ddd",
    borderRadius: "3px",
    fontSize: "16px",
    outline: "none" as const,
  },
  required: {
    color: "red",
    position: "absolute" as const,
    right: "10px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  loginButton: {
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "3px",
  },
  resetButton: {
    backgroundColor: "#ff5722",
    color: "#fff",
    border: "none",
    padding: "0.75rem 1.5rem",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "3px",
  },
};
