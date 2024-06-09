"use client";
import { ZPostUser, ZUserLogin } from "@by-webapp/types/zodType";
import { faEyeSlash, faEye, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ChangeEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

function CreateAccountComponent() {
  const router = usePathname();

  const [signupData, setSignupData] = useState<z.infer<typeof ZPostUser>>({
    email: "",
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
  });
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [isCheckedTerm, setIsCheckedTerm] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof ZPostUser>>();
  const onSubmit: SubmitHandler<z.infer<typeof ZPostUser>> = (data) => {
    setSignupData(data);
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
    <div className="mx-auto flex w-[55%] flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold">Create an account</h1>
      <div className="mt-3 flex flex-col items-center text-xl">
        <p className="text-rd-darkblue mb-5 leading-tight">
          Already have an account?
          <Link href="/signup">
            <span className="font-bold text-[#47c9af]">&ensp;Sign in</span>
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex items-center justify-between gap-10">
          <div className="mx-auto my-2">
            <label
              className="mb-2 block font-bold text-gray-900"
              htmlFor="firstName"
            >
              First name
            </label>
            <div className="relative flex items-center">
              <input
                className="block w-full rounded-xl border-[0.5px] border-by-darken-blue/20 bg-transparent p-3 pr-10 text-xl font-medium text-gray-900"
                type="text"
                id="firstName"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                })}
                placeholder=""
                autoComplete="off"
              />
            </div>
            <p className="w-full text-red-500">{errors.firstName?.message}</p>
          </div>
          <div className="mx-auto my-2">
            <label
              className="mb-2 block font-bold text-gray-900"
              htmlFor="lastName"
            >
              Last name
            </label>
            <div className="relative flex items-center">
              <input
                className="block w-full rounded-xl border-[0.5px] border-by-darken-blue/20 bg-transparent p-3 pr-10 text-xl font-medium text-gray-900"
                type="text"
                id="lastName"
                {...register("lastName", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                })}
                placeholder=""
                autoComplete="off"
              />
            </div>
            <p className="w-full text-red-500">{errors.lastName?.message}</p>
          </div>
        </div>
        <div className="flex items-center justify-between gap-10">
          <div className="mx-auto my-2">
            <label
              className="mb-2 block font-bold text-gray-900"
              htmlFor="userName"
            >
              Username
            </label>
            <div className="relative flex items-center">
              <input
                className="block w-full rounded-xl border-[0.5px] border-by-darken-blue/20 bg-transparent p-3 pr-10 text-xl font-medium text-gray-900"
                type="text"
                id="userName"
                {...register("userName", {
                  required: {
                    value: true,
                    message: "Required",
                  },
                })}
                placeholder=""
                autoComplete="off"
              />
            </div>
            <p className="w-full text-red-500">{errors.userName?.message}</p>
          </div>
          <div className="mx-auto my-2">
            <label
              className="mb-2 block font-bold text-gray-900"
              htmlFor="email"
            >
              Email
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
        </div>

        <div className="mx-auto my-2">
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
        <div className="mx-auto my-2">
          <label
            className="mb-2 block font-bold text-gray-900"
            htmlFor="confirmPassword"
          >
            Confirm Password
          </label>
          <div className="relative flex items-center">
            <input
              className="block w-full rounded-xl border-[0.5px] border-by-darken-blue/20 bg-transparent p-3 pr-10 text-xl font-medium text-gray-900"
              type={isShowPassword ? "text" : "password"}
              id="confirmPassword"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Required",
                },
                validate: (val?: string) => {
                  if (val && watch("password") != val) {
                    return "Your passwords do no match";
                  }
                },
              })}
              autoComplete="off"
            />
            <div className="absolute right-2" onClick={handleShowPassword}>
              {onRenderPasswordIcon()}
            </div>
          </div>
          <p className="w-72 text-red-500">{errors.confirmPassword?.message}</p>
        </div>
        <div className="flex flex-col items-start py-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="term-agreement"
              className="h-8 w-8"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setIsCheckedTerm(e.target.checked);
              }}
            />
            <p className="py-5 font-semibold">
              I agree with BY’s 
              <span className="underline">
                Terms of Service, Privacy Policy, and default  Notification
                Settings
              </span>
              .
            </p>
          </div>
          <button
            type="submit"
            disabled={!isCheckedTerm}
            className="w-full rounded-full bg-by-peach-fuzz py-4 text-xl text-by-white disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSignedUp ? "Logging..." : "Sign up"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateAccountComponent;
