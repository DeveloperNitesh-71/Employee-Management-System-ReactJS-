import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="h-[250px] w-[400px] border-1 border-green-400 rounded-lg ">
        <form
          className="flex flex-col p-5 justify-center items-center gap-4"
          onSubmit={SubmitHandler}
        >
          <input
            required
            type="email"
            placeholder="Enter Email"
            className="w-full border-1 border-green-200 rounded-full px-4 py-1 outline-none"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            required
            type="password"
            placeholder="Enter Password"
            className="w-full border-1 border-green-200 rounded-full px-4 py-1 outline-none"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button className="bg-green-600 text-white font-medium px-2 py-1 rounded w-max">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
