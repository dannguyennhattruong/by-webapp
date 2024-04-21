import { getDictionary } from "@by-webapp/lib/dictionaries";
import Link from "next/link";
import { Locale } from "../../../../../i18n.config";
import LocaleSwitcher from "./locale-switcher";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="py-6">
      <nav className="container mx-auto flex items-center justify-between">
        <ul className="flex gap-x-8">
          <li>
            <Link href={`/${lang}`}>{navigation.home}</Link>
          </li>
          <li>
            <Link href={`/${lang}/audio-stream/123`}>
              {navigation["audio-stream"]}
            </Link>
          </li>
        </ul>
        <LocaleSwitcher />
      </nav>
    </header>
  );
}
