"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Locale } from "../../../../../i18n.config";
import GoogleLoginButton from "../SocialAccountButton/GoogleLoginButton";
import FacebookLoginButton from "../SocialAccountButton/FacebookLoginButton";

type Inputs = {
  email: string;
  password: string;
};

function SignUpForm() {
  const [isLogined, setIsLogined] = useState(false);
  return (
    <div className="mx-auto flex w-[45%] flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">Sign up to Be yourself</h1>
      <div className="mt-3 flex flex-col items-center text-xl">
        <p className="text-rd-darkblue mb-5 leading-tight">
          Already have an account?
          <Link href="/login">
            <span className="font-bold text-[#47c9af]">&ensp;Sign in</span>
          </Link>
        </p>
      </div>

      <div className="flex w-full flex-col gap-5">
        <GoogleLoginButton isLogined={false} />
        <FacebookLoginButton isLogined={false} />
      </div>
      <div className="relative my-12 h-[2px] w-full rounded-full bg-by-darken-blue/10">
        <p className="absolute left-0 right-0 top-1/2 mx-auto w-fit -translate-y-1/2 bg-by-white px-3 text-lg text-by-darken-blue/30">
          or sign in with
        </p>
      </div>
      <Link
        href="/signup/create"
        className="w-full rounded-full bg-by-peach-fuzz py-4 text-center text-lg text-by-white"
      >
        Create an account
      </Link>
    </div>
  );
}

export default SignUpForm;
