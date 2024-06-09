import React from "react";
import { getDictionary } from "@by-webapp/lib/dictionaries";
import { Locale } from "../../../../i18n.config";
import SignUpComponent from "../components/SignUp/signup.component";

export default async function SignUpPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return <SignUpComponent contentLocale={page["audio-stream"]} />;
}
