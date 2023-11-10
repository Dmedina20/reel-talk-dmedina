import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import "../../../App.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }
  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return updateProfile(user, { displayName: username });
      })
      .then(() => {
        // Redirect or perform any action after successful signup
        console.log("Signup successful");
      })
      .catch((error) => {
        // Handle errors for each step separately
        if (error.code === "auth/invalid-email") {
          alert("Invalid email address.");
        } else if (error.code === "auth/weak-password") {
          alert("Weak password. Please choose a stronger password.");
        } else {
          alert(error.message);
        }
      });
  };
  return (
    <div className="w-screen h-screen px-[496px] bg-neutral-800 justify-center items-center inline-flex">
      <div className="self-stretch py-12 flex-col justify-start items-center gap-14 inline-flex">
        {/* Progress Bar */}
        <div className="w-11/12 lg:w-2/6 mx-auto">
          <div className="bg-reelOrange h-1 flex items-center justify-between">
            {/* Progress Section */}
            <div className="w-1/3 reelOrange h-1 flex items-center">
              <div className="bg-reelOrange h-6 w-6 rounded-full shadow flex items-center justify-center">
                <div className="h-3 w-3 bg-white rounded-full" />{" "}
              </div>
            </div>

            <div className="w-1/3 flex justify-between bg-reelOrange h-1 items-center relative">
              <div className="bg-reelOrange h-6 w-6 rounded-full shadow flex items-center justify-center -ml-2"></div>
              <div className="bg-reelOrange h-6 w-6 rounded-full shadow flex items-center justify-center -mr-3 relative">
                <div className="h-3 w-3 bg-reelOrange rounded-full" />{" "}
              </div>
            </div>

            <div className="w-1/3 flex justify-end">
              <div className="bg-reelOrange h-6 w-6 rounded-full shadow" />
            </div>
            {/* Progress Section */}
          </div>
        </div>
        {/* Progress Bar End */}
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
              className="cursor-pointer w-80 h-12 pl-6 pr-3 text-white bg-white bg-opacity-5 rounded-lg border border-white border-opacity-60 justify-start items-center gap-2.5 inline-flex"
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Email"
              className="cursor-pointer w-80 h-12 pl-6 pr-3 text-white bg-white bg-opacity-5 rounded-lg border border-white border-opacity-60 justify-start items-center gap-2.5 inline-flex"
            />
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
                <Link to="/signup">
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
                    onClick={handleSignup}
                    className="hover:bg-reelOrange w-64 h-12 p-2.5 rounded-lg border-2 border-white border-opacity-90 justify-center items-center gap-2.5 flex"
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
