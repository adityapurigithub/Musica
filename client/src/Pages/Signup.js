import React from "react";
import { Link } from "react-router-dom";
import { FormField } from "../Components";

const Signup = () => {
  return (
    <form className="flex flex-col gap-2 h-[100vh] w-full sm:justify-center items-center mt-20 sm:mt-0 text-sm">
      <div className="sm:w-1/2 w-4/5 bg-[rgba(0,0,0,0.5)] shadow p-4 px-10 rounded-lg">
        <h2 className="text-gray-400 text-xl my-4 font-semibold text-center">
          Sign Up
        </h2>
        <FormField labelName="Name" name="name" type="text" />
        <FormField labelName="Email" name="email" type="email" />
        <FormField labelName="Password" name="password" type="password" />
        <div className="flex justify-between items-center mt-4 text-base">
          <button className="bg-red-700 rounded sm:p-2 sm:px-8 p-1 px-3 hover:bg-red-600">
            Signup
          </button>
          <span>
            Already have a account?
            <Link className="hover:text-blue-200"> SignIn</Link>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Signup;
