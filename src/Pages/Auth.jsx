import React from "react";

const Auth = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    return;
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" />
      </form>
    </div>
  );
};

export default Auth;
