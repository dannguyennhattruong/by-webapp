import React from "react";
import AudioStreamComponent from "../../components/AudioStream/audiostream.component";
import { Locale } from "../../../../../i18n.config";
import { getDictionary } from "@by-webapp/lib/dictionaries";

export default async function AudioStreamPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);
  return <AudioStreamComponent contentLocale={page["audio-stream"]} />;
}
