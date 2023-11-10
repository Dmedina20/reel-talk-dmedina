import React, { useState } from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div className="w-screen h-screen px-[448px] pb-[182px] bg-neutral-800 justify-center items-center inline-flex">
      <div className="self-stretch py-12 flex-col justify-start items-center gap-14 inline-flex">
        <div className="flex-col justify-start items-center gap-14 flex">
          <div className="flex-col justify-start items-center gap-4 flex">
            <div className="w-[448px] text-center text-white text-opacity-90 text-4xl font-semibold font-['Avenir Next']">
              Log in with Email
            </div>
            <div className="justify-center items-start gap-[3px] inline-flex">
              <div className="justify-center items-start gap-[3px] flex">
                <div className="text-center text-white text-opacity-90 text-sm font-normal font-['Avenir Next'] tracking-tight">
                  By continuing, you agree to our{" "}
                  <Link>
                    <span className="font-semibold text-reelOrange">
                      Terms of Service
                    </span>
                  </Link>{" "}
                  and{" "}
                  <Link>
                    <span className="font-semibold text-reelOrange">
                      Privacy Policy
                    </span>
                  </Link>
                  .
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-col justify-start items-start gap-6 flex">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            value={email}
            placeholder="Email"
            className="cursor-pointer w-80 h-12 pl-6 pr-3 text-white bg-white bg-opacity-5 rounded-lg border border-white border-opacity-60 justify-start items-center gap-2.5 inline-flex"
          ></input>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
                value={password}
                className="cursor-pointer w-80 h-12 pl-6 pr-3 text-white bg-white bg-opacity-5 rounded-lg border border-white border-opacity-60 justify-start items-center gap-2.5 inline-flex"
              />
              <button
                className="relative text-gray-600 right-9 top-1"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
            <Link>
              <span className="text-reelOrange text-sm font-semibold font-['Avenir Next'] tracking-tight">
                Forgot your password?
              </span>
            </Link>
          </div>
        </div>
        <div className="w-[448px] text-center">
          <span className="text-white text-opacity-90 text-sm font-normal font-['Avenir Next'] tracking-tight">
            Don’t have an account?{" "}
            <Link to="/signup">
              {" "}
              <span className="font-semibold text-reelOrange">Sign up</span>
            </Link>
          </span>
        </div>
        <div className="flex-col justify-start items-center gap-16 flex">
          <div className="flex-col justify-start items-center gap-10 flex">
            <div className="justify-start items-start gap-8 inline-flex">
              <div className="justify-start items-start flex">
                <Link to="/">
                  <button className="hover:bg-reelRed w-64 h-12 p-2.5 rounded-lg border-2 border-white border-opacity-90 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-opacity-90 text-base font-semibold font-['Avenir Next'] tracking-tight">
                      Cancel
                    </div>
                  </button>
                </Link>
              </div>
              <div className="justify-start items-start flex">
                <Link to="/birth">
                  <button
                    onClick={handleLogin}
                    className={`w-64 h-12 p-2.5 ${
                      password
                        ? "bg-reelOrange "
                        : "bg-neutral-500 cursor-not-allowed"
                    } rounded-lg justify-center items-center gap-2.5 flex`}
                  >
                    <div
                      className={`text-center text-black ${
                        password ? "text-opacity-90" : "text-opacity-40"
                      } text-base font-semibold font-['Avenir Next'] tracking-tight`}
                    >
                      Log in
                    </div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
