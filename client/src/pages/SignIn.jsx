import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      
      if (data.success === false) {
        dispatch(signInFailure(data));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      console.log(error);
      dispatch(signInFailure(error));
    }
  };

  return (
    <div className="px-6 py-2 sm:px-12 max-w-lg mx-auto">
      <h1 className="text-lg md:text-3xl text-center font-semibold my-7">
        Sign In
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 text-xs sm:text-sm  font-main md:text-md xl:text-xl"
      >
        <input
          type="email"
          placeholder="Email"
          id="email"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-sky-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
      </form>

      <div className="flex font-main text-sm md:text-lg font-medium gap-3 mt-5 ">
        <p>Don't have an account</p>
        <Link to="/sign-up">
          <span className="text-blue-500 text-md">Signup</span>
        </Link>
      </div>
      <p className="text-red-700 mt-5">
        {error ? error.message || "Something went wrong!" : ""}
      </p>
    </div>
  );
}

export default SignIn