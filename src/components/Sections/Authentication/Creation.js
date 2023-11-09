import "../../../App.css";
import { Link } from "react-router-dom";
import AppleLogo from "../../../assets/apple.svg";
import GoogleLogo from "../../../assets/google.svg";
import FacebookLogo from "../../../assets/facebook.svg";

const Creation = () => {
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
          <div className="flex-col justify-start items-center gap-8 flex">
            <div className="flex-col justify-start items-center gap-4 flex">
              <button className="hover:bg-reelOrange w-64 h-12 p-2.5 rounded-lg border-2 border-white border-opacity-90 justify-center items-center gap-2.5 inline-flex">
                <img src={AppleLogo} alt="Apple" className="text-center" />
                <div className="text-center text-white text-opacity-90 text-base font-semibold font-['Avenir Next'] tracking-tight">
                  Continue with Apple
                </div>
              </button>
              <button className="hover:bg-reelOrange w-64 h-12 p-2.5 rounded-lg border-2 border-white border-opacity-90 justify-center items-center gap-2.5 inline-flex">
                <img src={GoogleLogo} alt="Apple" className="text-center" />
                <div className="text-center text-white text-opacity-90 text-base font-semibold font-['Avenir Next'] tracking-tight">
                  Continue with Google
                </div>
              </button>
              <button className="hover:bg-reelOrange w-64 h-12 p-2.5 rounded-lg border-2 border-white border-opacity-90 justify-center items-center gap-2.5 inline-flex">
                <img src={FacebookLogo} alt="Apple" className="text-center" />
                <div className="text-center text-white text-opacity-90 text-base font-semibold font-['Avenir Next'] tracking-tight">
                  Continue with Facebook
                </div>
              </button>
            </div>
            <Link to="/create">
              <button className="hover:bg-reelOrange w-64 h-12 p-2.5 rounded-lg border-2 border-white border-opacity-90 justify-center items-center gap-2.5 inline-flex">
                <div className="text-center text-white text-opacity-90 text-base font-semibold font-['Avenir Next'] tracking-tight">
                  Continue with Email
                </div>
              </button>
            </Link>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creation;
