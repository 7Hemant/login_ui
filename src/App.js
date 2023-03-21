import { useState } from "react";
import logo from "./logo.svg";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

function App() {
  const [display, setDisplay] = useState(<Login />);
  const [active, setActive] = useState(true);
  const loginHandler = () => {
    setDisplay(<Login />);
    setActive(true);
  };
  const signupHandler = () => {
    setDisplay(<SignUp />);
    setActive(false);
  };
  return (
    <div className="max-w-[428px] mx-auto flex flex-col items-center  ">
      <div className="w-[198px] h-[198px]">
        <img src={logo} alt="logo" className="w-[198px] h-[198px] " />
      </div>
      <div className=" w-[318px] text-[14px] mt-[-1.8rem]">
        <h1 className="text-center">
          SOME RANDOM TEXT, SOME RANDOM TEXT,SOME RANDOM TEXT,SOME RANDOM TEXT
        </h1>
      </div>
      <div className="flex justify-between mt-[52px] w-[320px]">
        <button
          onClick={loginHandler}
          className={`${
            active && "border-b-2 border-b-[#E70B89] font-bold text-[16px]"
          }  pb-[10.3px] w-[50%] `}
        >
          Login
        </button>
        <button
          onClick={signupHandler}
          className={`${
            !active && "border-b-2 border-b-[#E70B89] font-bold text-[16px]"
          }  pb-[10.3px] w-[50%] `}
        >
          Signup
        </button>
      </div>
      <div className="mt-[44px]">{display}</div>
    </div>
  );
}

export default App;
