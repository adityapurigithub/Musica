import React from "react";
import { Form } from "../Components";
import bg from "../assests/signin-bg.jpg";

const Signin = () => {
  const heading = "Sign In";
  const btn = "Sign In";
  const aboutAccount = "Dont have an account?";
  const siorsuLink = "Sign Up";
  const to = "sign-up";
  return (
    <Form
      heading={heading}
      btn={btn}
      aboutAccount={aboutAccount}
      siorsuLink={siorsuLink}
      to={to}
      bg={bg}
    />
  );
};

export default Signin;
