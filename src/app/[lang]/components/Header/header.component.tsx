import { getDictionary } from "@by-webapp/lib/dictionaries";
import Link from "next/link";
import { Locale } from "../../../../../i18n.config";
import LocaleSwitcher from "./locale-switcher";
import Logo from "../logo.component";
import SearchInput from "../SearchInput/searchinput.component";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="sticky top-0 bg-py-white py-2 text-py-peach-fuzz shadow">
      <nav className="mx-auto flex items-center justify-between px-2 lg:px-8">
        <Logo />
        <Link
          href={`/${lang}`}
          className="hidden rounded-full bg-py-peach-fuzz px-10 py-2 text-py-white md:block"
        >
          {/* {navigation.home} */}
          Newest
        </Link>

        <SearchInput />
        <Link
          href={`/${lang}/audio-stream/123`}
          className="hidden rounded-full border border-py-peach-fuzz bg-py-white px-10 py-2 text-py-peach-fuzz md:block "
        >
          {/* {navigation["audio-stream"]} */}
          Following
        </Link>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link
            href={`/${lang}/audio-stream/123`}
            className="hidden rounded-lg border border-py-peach-fuzz bg-py-peach-fuzz px-4 py-1 text-py-white md:block "
          >
            Log in
          </Link>{" "}
          <Link
            href={`/${lang}/audio-stream/123`}
            className="hidden rounded-lg border border-py-peach-fuzz bg-py-white px-4 py-1 text-py-peach-fuzz md:block "
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}
