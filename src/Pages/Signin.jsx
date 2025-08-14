import { useState } from "react";
import { NavLink } from "react-router-dom";

const Signin = () => {
  const [signup, setSignUp] = useState(false);

  const toggleSignUp = () => {
    setSignUp(!signup);
  };
  return (
    <form
      action=""
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "var(--primary-color)",
        maxWidth: "500px",
        height: "auto",
        padding: "40px",
        margin: "100px auto",
        borderRadius: "15px",
        outlineColor: "1px solid var(--primary-color)",
      }}
    >
      {/* Signup botton */}

      {signup ? (
        <>
          {" "}
          <h1
            style={{
              marginBottom: "25px",
              color: "white",
            }}
          >
            Welcome
          </h1>
          <input
            type="text"
            placeholder="Name"
            style={{
              display: "block",
              width: "100%",
              padding: "20px 10px",
              border: "none",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            style={{
              display: "block",
              width: "100%",
              padding: "20px 10px",
              border: "none",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "20px 10px",
              border: "none",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
            required
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "20px 10px",
              border: "2px solid white",
              marginBottom: "10px",
              borderRadius: "10px",
              backgroundColor: "transparent",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Create Account
          </button>{" "}
        </>
      ) : (
        <>
          {" "}
          <h1
            style={{
              marginBottom: "25px",
              color: "white",
            }}
          >
            Welcome
          </h1>
          <input
            type="email"
            placeholder="Email"
            style={{
              display: "block",
              width: "100%",
              padding: "20px 10px",
              border: "none",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "20px 10px",
              border: "none",
              marginBottom: "10px",
              borderRadius: "10px",
            }}
            required
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "20px 10px",
              border: "2px solid white",
              marginBottom: "10px",
              borderRadius: "10px",
              backgroundColor: "transparent",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign In
          </button>
        </>
      )}

      {signup ? (
        <p
          style={{
            color: "white",
          }}
        >
          Please{" "}
          <NavLink
            onClick={toggleSignUp}
            style={{
              textDecoration: "underline",
            }}
          >
            {" "}
            signin
          </NavLink>
        </p>
      ) : (
        <p
          style={{
            color: "white",
          }}
        >
          Don't have an account?{" "}
          <NavLink
            onClick={toggleSignUp}
            style={{
              textDecoration: "underline",
            }}
          >
            Signup
          </NavLink>
        </p>
      )}
    </form>
  );
};

export default Signin;
