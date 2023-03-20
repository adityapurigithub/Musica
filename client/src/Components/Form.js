import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormField } from "../Components";
import Cookies from "js-cookie";
import { useLocalContext } from "../Context/LocalContextProvider";
const Form = ({ heading, btn, siorsuLink, aboutAccount, to, bg }) => {
  const path = window.location.pathname;
  // console.log(path);

  const navigate = useNavigate();

  const { setUser } = useLocalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    //m not using onChange..using formData and submitting form...
    const form = new FormData(e.target);
    // console.log(form);

    if (path.includes("sign-in")) {
      const formData = {
        email: form.get("email"),
        password: form.get("password"),
      };
      // console.log(formData);
      // sign-in user

      fetchUser(formData);
      return;
    }

    // register user
    const formData = {
      name: form.get("name"),
      email: form.get("email"),
      password: form.get("password"),
    };
    registerUser(formData);
  };

  const registerUser = async (formData) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/sign-up`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          data: formData,
        }),
      }
    );

    const data = await response.json();
    alert(data.msg);
    console.log(data);
  };

  const fetchUser = async (formData) => {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/sign-in`,
      {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          data: formData,
        }),
      }
    );

    const data = await response.json();
    if (response.ok) {
      const token = data.token;
      const user = data.user;
      Cookies.set("token", token);
      //setuser after getting res-- ok
      setUser(user);
      navigate("/");
    }
    alert(data.msg);
    console.log(data);
  };

  return (
    <div className="w-full h-[100vh] relative">
      <div
        className="bg-gradient-to-r from-cyan-500 to-blue-500 w-full h-full opacity-70"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "contain",
        }}
      ></div>
      <form
        className="flex flex-col gap-2 w-full absolute top-20 sm:justify-center items-center mt-20 sm:mt-0 text-sm"
        onSubmit={handleSubmit}
      >
        <div className="sm:w-[550px] w-11/12 bg-slate-700 shadow p-4 px-10 rounded-xl">
          <h2 className="text-gray-400 text-xl my-4 font-semibold text-center">
            {heading}
          </h2>
          {path.includes("sign-up") && (
            <FormField labelName="Name" name="name" type="text" />
          )}
          <FormField labelName="Email" name="email" type="email" />
          <FormField labelName="Password" name="password" type="password" />
          <div className="flex justify-between items-center py-5 sm:text-base">
            {path.includes("sign-up") ? (
              <button
                type="submit"
                className="bg-blue-600 rounded sm:p-2 sm:px-8 p-1 px-3 hover:bg-red-600"
              >
                {btn}
              </button>
            ) : (
              <button
                type="submit"
                className="bg-red-700 rounded sm:p-2 sm:px-8 p-1 px-3 hover:bg-blue-600"
              >
                {btn}
              </button>
            )}

            <span
              className="w-1/2 text-center"
              style={{ wordWrap: "break-word" }}
            >
              {aboutAccount}{" "}
              <Link to={`/${to}`} className="hover:text-blue-200">
                {siorsuLink}
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
