import type { Metadata } from "next";
import Image from "next/image";
import signupImg from "/public/SignupIMG.png";
import LoginSignupTabs from "../components/Tabs/LoginSignupTabs";
import Logo from "../components/logo.component";

export const metadata: Metadata = {
  title: "BY | Sign up",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex h-screen items-center justify-between">
        <div className="relative aspect-[0.666666667] h-screen">
          <Image
            src={signupImg}
            width={50000}
            height={50000}
            alt="login image"
            className="h-full w-full object-cover"
          />
          <LoginSignupTabs />
        </div>
        <div className="w-full">{children}</div>
      </div>
      <div className="fixed bottom-3 right-3">
        <Logo />
      </div>
    </>
  );
}
