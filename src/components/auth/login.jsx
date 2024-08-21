import React from "react";
//import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo/logo.png";
import { CiCircleQuestion } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import AuthImage from "../../assets/images/backgrounds/AuthImage.png";

const Login = () => {
  return (
    <div className="grid lg:grid-cols-6 lg:p-16 p-0 lg:gap-12 gap-0 lg:h-full h-[100vh] ">
      <div className="col-span-2 bg-[#f4f4f4] px-12 mx-auto pt-32 rounded-[50px] border border-[#cbceda] h-full">
        <img src={Logo} alt="Logo" />
        <div className="w-full text-gray-600 pt-16 pb-12">
          <div className="text-start">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Log in to your account
              </h3>
              <p className="">
                Return to increase your speed to process bids and rebates at an
                astonishing rate
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 space-y-5 "
          >
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Email <CiCircleQuestion />{" "}
                </p>{" "}
                <p className="text-[#D61B1B]">Incorrect Email!</p>
              </label>
              <input
                type="email"
                placeholder="john@acmeco.com"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Password <CiCircleQuestion />{" "}
                </p>{" "}
                <p className="text-[#D61B1B]">Incorrect Password!</p>
              </label>
              <input
                type="password"
                placeholder="**************"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500 outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-[#b0b5c9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Login
            </button>
            <div className="text-start">
              <a href="javascript:void(0)" className="hover:text-indigo-600">
                Forgot your password?{" "}
                <span className="text-[#9cabd7]">Reset Password</span>
              </a>
            </div>
            <div className="text-start">
              <a href="javascript:void(0)" className="hover:text-indigo-600">
                Need an Account?
                <span className="text-[#9cabd7]"> {""}Sign up</span>
              </a>
            </div>

            <button
              type="button"
              className="text-gray-900 flex flex-row items-center gap-2 bg-white border border-slate-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-md text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <CiBellOn /> Buzz the sales team
            </button>
          </form>
        </div>
      </div>

      <div className="col-span-4 relative rounded-[50px] h-[88vh] hidden lg:block  ">
        <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[33%]">
          Say goodbye to stacks of paper
        </h1>
        <img src={AuthImage} className="h-full w-full" alt="" />
      </div>
    </div>
  );
};

export default Login;
