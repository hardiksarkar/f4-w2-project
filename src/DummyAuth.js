import React, { useState } from "react";

export default function DummyAuth({setFlag}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmitFunc(e) {
    e.preventDefault();

    try {
      const myData = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: `${username.trim()}`,
          password: `${password}`,
        }),
      });
      const userData = await myData.json();
      if (!myData.ok) {
        throw new Error(`${userData.message}`);
      }
      localStorage.setItem("userData",JSON.stringify(userData));
      setFlag(true);
      // console.log(userData);
    } catch (error) {
      alert(error);
    }

    // console.log(myData);
  }

  return (
    <div className="main-container">
      <div className="sign-up-container">
        <p>Welcome back! 👋</p>
        <h2>Sign in to your account</h2>
        <form action="" onSubmit={(e) => onSubmitFunc(e)}>
          <label htmlFor="username">Your Username</label>
          <input
            type="text"
            name="username"
            id="username"
            className="input"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button type="submit" className="bg-blue btn pointer">
            Continue
          </button>
          <p className="text-blue pointer center">Forget your password?</p>
        </form>
      </div>
      <p className="center">
        Don't have an account?{" "}
        <span className="text-blue pointer">Sign up</span>
      </p>
    </div>
  );
}
