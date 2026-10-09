
import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        const response = await fetch("http://localhost:3000/api/auth/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
    });

    

    const data = await response.json();
   

    console.log("Response:", data);
    

    if (response.ok) {
      navigate("/");
    }


    } catch (error) {
        console.log(error);
        
    }



  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#121212] px-4 py-10 text-white">
      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold">
            Spotify
          </h1>

          <p className="mt-3 text-gray-400">
            Login to your account
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-xl bg-[#181818] p-8 shadow-2xl">

          <h2 className="mb-6 text-2xl font-bold">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-md border border-gray-700 bg-[#242424] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-white"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full rounded-md border border-gray-700 bg-[#242424] px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-white"
                required
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-full bg-green-500 py-3 font-bold text-black transition hover:bg-green-400"
            >
              Login
            </button>

          </form>

          {/* Register */}
          <div className="mt-6 text-center">
            <span className="text-gray-400">
              Don't have an account?{" "}
            </span>

            <Link
              to="/register"
              className="font-semibold text-white underline hover:text-green-400"
            >
              Register
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
