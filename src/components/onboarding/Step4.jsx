import React from "react";
//import { Link } from "react-router-dom";

import Logo from "../../assets/images/logo/logo.png";
import { FaBell } from "react-icons/fa";
import { CiCircleQuestion } from "react-icons/ci";
import { CiBellOn } from "react-icons/ci";
import AuthImage from "../../assets/images/backgrounds/Step4.jpeg";

const Step4 = () => {
  return (
    <div className="grid lg:grid-cols-6 lg:p-16 p-0 lg:gap-12 gap-0 ">
      <div className="col-span-2 bg-[#f4f4f4] px-12 mx-auto pt-8 rounded-[50px] border border-[#cbceda] h-full">
        <img src={Logo} alt="Logo" />
        <div className="w-full text-gray-600 pt-16 pb-12">
          <div className="text-start">
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Payment Method
              </h3>
              <p className="">
                Add your credit card details. Your card will not be charged
                until the 7 day free trial is over.
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
                  Name on Card <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                placeholder="John Doe"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Card Number <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="number"
                placeholder="1234 1234 1234 1234"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Expiration Date <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                placeholder="123 Main Street, Sunnyville, MO 12345"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  CVC/CVV <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="number"
                placeholder="123"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>

            <div>
              <label className="font-medium flex flex-row items-center justify-between gap-2">
                <p className="flex flex-row items-center gap-2">
                  {" "}
                  Billing Address <CiCircleQuestion />{" "}
                </p>{" "}
              </label>
              <input
                type="text"
                placeholder="123 Main Street, Sunnyville, MO 12345"
                required
                className="w-full mt-2 px-3 py-2 bg-[#ffffff] text-gray-500  outline-none border focus:border-gray-600 shadow-sm rounded-lg"
              />
            </div>
            <button className="w-full px-4 py-2 text-white font-medium bg-[#b0b5c9] hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150">
              Next
            </button>
          </form>
        </div>
      </div>

      <div className="col-span-4 relative rounded-[50px] h-[88vh] hidden lg:block  ">
        <h1 className="absolute  text-white font-extrabold text-2xl m-auto inset-0 top-[50%] left-[20%]">
          Get ready for your automated AI experience.
        </h1>
        <img src={AuthImage} className="h-full w-full rounded-3xl" />
      </div>
    </div>
  );
};

export default Step4;
