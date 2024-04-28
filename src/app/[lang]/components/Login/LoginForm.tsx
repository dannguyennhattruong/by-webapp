"use client";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faKey,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { z } from "zod";
import { ZUserLogin } from "@by-webapp/types/zodType";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale } from "../../../../../i18n.config";
import GoogleLoginButton from "../SocialAccountButton/GoogleLoginButton";
import FacebookLoginButton from "../SocialAccountButton/FacebookLoginButton";

type Inputs = {
  email: string;
  password: string;
};

function LoginForm() {
  const router = usePathname();

  const [loginData, setLoginData] = useState<z.infer<typeof ZUserLogin>>({
    email: "",
    userName: "",
    password: "",
  });
  const [isLogined, setIsLogined] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setLoginData(data);
    console.debug("data: ", data);
  };
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const onRenderPasswordIcon = () => {
    if (watch("password")) {
      return isShowPassword ? (
        <FontAwesomeIcon
          icon={faEyeSlash}
          className="text-kube-darkblue h-5 w-5"
        />
      ) : (
        <FontAwesomeIcon icon={faEye} className="text-kube-darkblue h-5 w-5" />
      );
    }

    return (
      <FontAwesomeIcon icon={faKey} className="text-kube-darkblue h-5 w-5" />
    );
  };

  return (
    <div className="mx-auto flex w-[45%] flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">Sign in to Be yourself</h1>
      <div className="mt-3 flex flex-col items-center text-xl">
        <p className="text-rd-darkblue mb-5 leading-tight">
          Didn&apos;t have an account?
          <Link href="/signup">
            <span className="font-bold text-[#47c9af]">&ensp;Join us</span>
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="mx-auto my-3">
          <label className="mb-2 block font-bold text-gray-900" htmlFor="email">
            Username or email
          </label>
          <div className="relative flex items-center">
            <input
              className="block w-full rounded-xl border-[0.5px] border-by-darken-blue/20 bg-transparent p-3 pr-10 text-xl font-medium text-gray-900"
              type="text"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Required",
                },
              })}
              placeholder=""
              autoComplete="off"
            />
          </div>
          <p className="w-full text-red-500">{errors.email?.message}</p>
        </div>
        <div className="mx-auto my-3">
          <label
            className="mb-2 block font-bold text-gray-900"
            htmlFor="password"
          >
            Password
          </label>
          <div className="relative flex items-center">
            <input
              className="block w-full rounded-xl border-[0.5px] border-by-darken-blue/20 bg-transparent p-3 pr-10 text-xl font-medium text-gray-900"
              type={isShowPassword ? "text" : "password"}
              id="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Required",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{0,}$/,
                  message: "At least one letter and one number",
                },
                min: { value: 4, message: "At least 4 characters" },
                max: { value: 10, message: "Not more than 10 characters" },
              })}
              autoComplete="off"
            />
            <div className="absolute right-2" onClick={handleShowPassword}>
              {onRenderPasswordIcon()}
            </div>
          </div>
          <p className="w-72 text-red-500">{errors.password?.message}</p>
        </div>
        <div className="flex flex-col items-start py-3">
          <button
            type="submit"
            disabled={isLogined}
            className="w-full rounded-full bg-by-peach-fuzz py-4 text-xl text-by-white"
          >
            {isLogined ? "Logging..." : "Sign in"}
          </button>
        </div>
      </form>
      <div className="relative my-5 h-[2px] w-full rounded-full bg-by-darken-blue/10">
        <p className="absolute left-0 right-0 top-1/2 mx-auto w-fit -translate-y-1/2 bg-by-white px-3 text-lg text-by-darken-blue/30">
          or sign in with
        </p>
      </div>
      <div className="flex w-full flex-col gap-5">
        <GoogleLoginButton isLogined={false} />
        <FacebookLoginButton isLogined={false} />
      </div>
    </div>
  );
}

export default LoginForm;
