import {
  appleStore,
  ellipse,
  googleIcon,
  logo,
  playStore,
  slides,
} from "./assets";

export default function App() {
  return (
    <div className="w-screen h-screen flex items-center justify-center text-[#2D3748]">
      <div className="w-3/7 bg-gradient-to-br from-[#0F70DA] to-[#007AFF] h-full flex flex-col gap-16 items-center py-6  text-white font-semibold text-xl text-center">
        <span>
          Social media shared today,
          <br />
          tomorrow or by location
        </span>
        <div className="relative">
          <img src={ellipse} alt="" className="w-fit px-16" />
          <div className="absolute inset-0 top-0 left-0 flex items-center justify-center">
            <img src={slides} alt="" />
          </div>
        </div>
      </div>
      <div className="w-4/7 h-full flex flex-col p-8 px-16">
        <img src={logo} alt="" className="w-fit" />
        <span className="text-black text-[24px] font-semibold py-2">
          Create account
        </span>
        <span>For business, band or celebrity.</span>
        <form className="space-y-4 py-6">
          <div className="grid grid-cols-2 gap-4 text-[14px]">
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="outline outline-[#E5E5E5] focus:outline-[#007AFF] p-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="outline outline-[#E5E5E5] focus:outline-[#007AFF] p-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email or Phone number</label>
              <input
                type="text"
                className="outline outline-[#E5E5E5] focus:outline-[#007AFF] p-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="firstName">
                Date of Birth <span className="text-[10px]">(MM/DD/YY)</span>
              </label>
              <input
                type="date"
                className="outline outline-[#E5E5E5] focus:outline-[#007AFF] p-2 rounded"
                placeholder=""
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="outline outline-[#E5E5E5] focus:outline-[#007AFF] p-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                className="outline outline-[#E5E5E5] focus:outline-[#007AFF] p-2 rounded"
              />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center justify-center">
              <input
                type="checkbox"
                name=""
                id=""
                className="text-[#007AFF] bg-[#007AFF] outline-[#007AFF]"
              />
              <label htmlFor="">Remember me</label>
            </div>
            <a href="" className="text-[#007AFF] underline">
              Forgot password?
            </a>
          </div>
          <div className="flex gap-2">
            <input
              type="checkbox"
              name=""
              id=""
              className="text-[#007AFF] bg-[#007AFF] outline-[#007AFF]"
            />
            <label htmlFor="">
              I agree to all the{" "}
              <a href="" className="text-[#007AFF]">
                Terms
              </a>{" "}
              and{" "}
              <a href="" className="text-[#007AFF]">
                Privacy policy
              </a>
            </label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="bg-[#007AFF] py-2 rounded text-white">
              Create account
            </button>
            <button className="bg-[#2D3748] py-2 rounded text-white flex gap-2 items-center justify-center">
              <img src={googleIcon} alt="" />
              Sign-in with google
            </button>
          </div>
        </form>
        <span className="text-center">
          Don't have an account?{" "}
          <a href="" className="text-[#007AFF]">
            Log In
          </a>
        </span>
        <div className="flex gap-4 absolute bottom-5">
          <button className="cursor-pointer">
            <img src={playStore} alt="" />
          </button>
          <button className="cursor-pointer">
            <img src={appleStore} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
