import { useState } from "react";
import UseLoginHook from "../../api/authAPI";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

export const LoginForm = () => {
  const [payload, setPayload] = useState({ username: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    UseLoginHook(payload);
    // navigate("/");
  };

  const handleChange = ({ currentTarget: input }) => {
    setPayload({
      ...payload,
      [input.name]: input.value,
    });
    console.log(payload);
  };
  return (
    <div>
      <form className="flex-row">
        <div className="flex justify-center">
          <label className="form-control w-full max-w-xs">
            <div className="label py-4">
              <span className="label-text text-white">Username</span>
            </div>
            <input
              type="text"
              name="username"
              onChange={handleChange}
              className="input text-black input-bordered rounded-2xl w-full max-w-xs"
            />
          </label>
        </div>
        <div className="flex justify-center">
          <label className="form-control w-full max-w-xs">
            <div className="label py-4">
              <span className="label-text text-white">Password</span>
            </div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="input text-black input-bordered rounded-2xl w-full max-w-xs"
            />
          </label>
        </div>
        <div className="flex justify-center ml-48 py-4">
          <a className="italic underline text-sm cursor-pointer">
            Forgot password
          </a>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="btn btn-wide rounded-xl btn-secondary text-white shadow-lg"
          >
            <p className="font-inter font-medium text-lg">Sign In</p>
          </button>
        </div>
      </form>
    </div>
  );
};
