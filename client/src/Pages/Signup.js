import React from "react";
import { Form } from "../Components";
import bg from "../assests/signup-bg.jpg";

const Signup = () => {
  const heading = "Sign Up";
  const btn = "Sign Up";
  const aboutAccount = "Already have an account?";
  const siorsuLink = "Sign In";
  const to = "sign-in";
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

export default Signup;
