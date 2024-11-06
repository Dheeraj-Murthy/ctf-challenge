import React from "react";

const LoginForm = () => {
  // Add this to your App.js or in a new component

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate SQL injection here
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 bg-gray-800 p-6 rounded-lg shadow-lg"
    >
      <h2 className="text-2xl text-gray-300 mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="p-2 rounded-lg bg-gray-700 text-gray-200 mb-4 w-full"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="p-2 rounded-lg bg-gray-700 text-gray-200 mb-4 w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        type="submit"
        className="w-full p-2 rounded-lg bg-red-600 hover:bg-red-500 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};
export default LoginForm;
