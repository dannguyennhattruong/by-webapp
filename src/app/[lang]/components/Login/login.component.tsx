"use client";

import Image from "next/image";
import React from "react";
import loginImg from "/public/LoginIMG.png";
import LoginForm from "./LoginForm";
import { Locale } from "../../../../../i18n.config";
import Logo from "../logo.component";
import LoginSignupTabs from "../Tabs/LoginSignupTabs";

interface Props {
  contentLocale: {
    title: string;
    description: string;
  };
}

function LoginComponent({ contentLocale }: Props) {
  console.debug("contentLocale: ", contentLocale);
  return (
    <>
      <div className="flex h-screen items-center justify-between">
        <div className="relative aspect-[0.666666667] h-screen">
          <Image
            src={loginImg}
            width={50000}
            height={50000}
            alt="login image"
            className="h-full w-full object-cover"
          />
          <LoginSignupTabs />
        </div>
        <div className="w-full">
          <LoginForm />
        </div>
      </div>
      <div className="fixed bottom-3 right-3">
        <Logo />
      </div>
    </>
  );
}

export default LoginComponent;
