"use client";

import Image from "next/image";
import React from "react";
import signupImg from "/public/SignupIMG.png";
import LoginForm from "./SignUpForm";
import { Locale } from "../../../../../i18n.config";
import Logo from "../logo.component";
import LoginSignupTabs from "../Tabs/LoginSignupTabs";
import SignUpForm from "./SignUpForm";

interface Props {
  contentLocale: {
    title: string;
    description: string;
  };
}

function SignUpComponent({ contentLocale }: Props) {
  console.debug("contentLocale: ", contentLocale);
  return <SignUpForm />;
}

export default SignUpComponent;
