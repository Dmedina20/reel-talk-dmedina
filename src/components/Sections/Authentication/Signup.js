import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import "../../../App.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(signInWithEmailAndPassword(auth, email, password))
      .then(updateProfile(auth.currentUser, { displayName: username }))
      .catch((error) => alert(error));
  };
  return (
    <div className="w-screen h-screen px-[496px] bg-neutral-800 justify-center items-center inline-flex">
      <div className="self-stretch py-12 flex-col justify-start items-center gap-14 inline-flex">
        <div className="justify-start items-center inline-flex">
          <div className="w-5 h-5 relative">
            <div className="w-5 h-5 left-0 top-0 absolute bg-amber-400 rounded-full" />
            <div className="w-3 h-3 left-[4px] top-[4px] absolute bg-white bg-opacity-60 rounded-full" />
          </div>
          <div className="w-5 h-5 relative">
            <div className="w-5 h-5 left-0 top-0 absolute bg-neutral-500 rounded-full" />
          </div>
          <div className="w-5 h-5 relative">
            <div className="w-5 h-5 left-0 top-0 absolute bg-neutral-500 rounded-full" />
          </div>
          <div className="w-5 h-5 relative">
            <div className="w-5 h-5 left-0 top-0 absolute bg-neutral-500 rounded-full" />
          </div>
          <div className="w-5 h-5 relative">
            <div className="w-5 h-5 left-0 top-0 absolute bg-neutral-500 rounded-full" />
          </div>
          <div className="w-5 h-5 relative" />
        </div>
        <div className="flex-col justify-start items-center gap-14 flex">
          <div className="flex-col justify-start items-center gap-14 flex">
            <div className="flex-col justify-start items-center gap-4 flex">
              <div className="w-[448px] text-center text-white text-opacity-90 text-4xl font-semibold font-['Avenir Next']">
                Create your account
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
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              value={username}
              placeholder="First name"
              className="w-80 h-12 pl-6 pr-3 text-white bg-white bg-opacity-5 rounded-lg border border-white border-opacity-60 justify-start items-center gap-2.5 inline-flex"
            ></input>

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Email"
              className="w-80 h-12 pl-6 pr-3 text-white bg-white bg-opacity-5 rounded-lg border border-white border-opacity-60 justify-start items-center gap-2.5 inline-flex"
            ></input>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              value={password}
              className="w-80 h-12 pl-6 pr-3 text-white bg-white bg-opacity-5 rounded-lg border border-white border-opacity-60 justify-start items-center gap-2.5 inline-flex"
            ></input>
          </div>
        </div>
        <div className="w-[448px] text-center">
          <span className="text-white text-opacity-90 text-sm font-normal font-['Avenir Next'] tracking-tight">
            Already have an account?{" "}
            <Link to="/">
              {" "}
              <span className="font-semibold text-reelOrange">Log in</span>
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
                <Link to="/">
                  <button
                    onClick={handleSignup}
                    className="w-64 h-12 p-2.5 rounded-lg border-2 border-white border-opacity-90 justify-center items-center gap-2.5 flex"
                  >
                    <div className="text-center text-white text-opacity-90 text-base font-semibold font-['Avenir Next'] tracking-tight">
                      Next
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

export default Signup;
