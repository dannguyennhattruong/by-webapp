import React from "react";
import { getDictionary } from "@by-webapp/lib/dictionaries";
import LoginComponent from "../components/Login/login.component";
import { Locale } from "../../../../i18n.config";

export default async function LoginPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return <LoginComponent contentLocale={page["audio-stream"]} />;
}
