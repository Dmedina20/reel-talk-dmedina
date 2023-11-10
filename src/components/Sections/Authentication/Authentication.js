import "../../../App.css";
import { Link } from "react-router-dom";
import AppleLogo from "../../../assets/apple.svg";
import GoogleLogo from "../../../assets/google.svg";
import FacebookLogo from "../../../assets/facebook.svg";

const Authentication = () => {
  return (
    <div className="w-full h-screen px-[496px] pb-[73px] bg-neutral-800 justify-center items-center inline-flex">
      <div className="self-stretch py-12 flex-col justify-start items-center gap-14 inline-flex">
        <div className="flex-col justify-start items-center gap-14 flex">
          <div className="flex-col justify-start items-center gap-4 flex">
            <div className="w-[448px] text-center text-white text-opacity-90 text-4xl font-semibold font-['Avenir Next']">
              Log in
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
            <Link to="/login">
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
            Don’t have an account?{" "}
            <Link to="/signup">
              {" "}
              <span className="font-semibold text-reelOrange">Sign up</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
