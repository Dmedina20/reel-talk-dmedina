import React, { useState } from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            className="w-80 h-12 pl-6 pr-3 text-white bg-white bg-opacity-5 rounded-lg border border-white border-opacity-60 justify-start items-center gap-2.5 inline-flex"
          ></input>
          <div className="flex-col justify-start items-start gap-2 flex">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Password"
              className="w-80 h-12 pl-6 pr-3 text-white bg-white bg-opacity-5 rounded-lg border border-white border-opacity-60 justify-start items-center gap-2.5 inline-flex"
            ></input>
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
                  <button className="w-64 h-12 p-2.5 rounded-lg border-2 border-white border-opacity-90 justify-center items-center gap-2.5 flex">
                    <div className="text-center text-white text-opacity-90 text-base font-semibold font-['Avenir Next'] tracking-tight">
                      Cancel
                    </div>
                  </button>
                </Link>
              </div>
              <div className="justify-start items-start flex">
                <button
                  onClick={handleLogin}
                  className="w-64 h-12 p-2.5 bg-neutral-500 rounded-lg justify-center items-center gap-2.5 flex"
                >
                  <div className="text-center text-white text-opacity-40 text-base font-semibold font-['Avenir Next'] tracking-tight">
                    Log in
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
