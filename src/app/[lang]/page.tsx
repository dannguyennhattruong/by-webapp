import { getDictionary } from "@by-webapp/lib/dictionaries";
import HomePage from "./components/Home/home.component";
import { Locale } from "../../../i18n.config";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { page } = await getDictionary(lang);

  return <HomePage contentLocale={page.home} lang={lang} />;
}
