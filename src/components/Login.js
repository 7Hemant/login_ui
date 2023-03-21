import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submithandler = (e) => {
    e.preventDefault();
    if (email.length !== 0 && password.length !== 0) {
      /* validation check comes here */
      console.log(email, password);
    }
  };
  return (
    <div className="max-w-[428px] flex flex-col items-center ">
      <form className="flex flex-col" onSubmit={submithandler}>
        <input
          type="email"
          placeholder="Email Address"
          className="rounded-[26px] border-2 focus:outline-none px-4 py-2 w-[300px]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-[26px] border-2 focus:outline-none px-4 py-2 mt-[20px] w-[300px]"
          password={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-[300px] rounded-[26px] text-center bg-[#E70B89] text-white mt-[25px] py-[14.3px]"
        >
          LOGIN
        </button>
      </form>
      <div className="relative flex flex-col items-center">
        <div className="absolute right-6 top-3">
          <a className="text-[14px] text-[#E70B89] cursor-pointer ">
            Forgot Password?
          </a>
        </div>
        <h1 className="mt-[45px] text-[12px] text-[#9D9D9D]">or login with</h1>
        <div className="flex mt-[21px]">
          <div className="cursor-pointer border rounded-[50%] p-2">
            <FcGoogle />
          </div>
          <div className="cursor-pointer ml-[25px]  border rounded-[50%] p-2">
            <FaFacebookF className="text-[blue] " />
          </div>
          <div className="cursor-pointer ml-[25px]  border rounded-[50%] p-2">
            <BsTwitter className="text-[#00c8ff]" />
          </div>
        </div>
        <div className="text-center mt-[23px]">
          <h1 className="text-[12px]">
            Don’t have an account?
            <span className="text-[#E70B89]"> Create new now! </span>
          </h1>
          <p className="mt-[24px] text-[12px]">
            By signing up, you are agree with our
            <span className="text-[#E70B89] "> Terms & Conditions</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
