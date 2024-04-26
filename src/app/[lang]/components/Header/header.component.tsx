import { getDictionary } from "@by-webapp/lib/dictionaries";
import Link from "next/link";
import { Locale } from "../../../../../i18n.config";
import LocaleSwitcher from "./locale-switcher";
import Logo from "../logo.component";
import SearchInput from "../SearchInput/searchinput.component";

export default async function Header({ lang }: { lang: Locale }) {
  const { navigation } = await getDictionary(lang);

  return (
    <header className="text-by-peach-fuzz bg-by-white sticky top-0 py-2 shadow">
      <nav className="mx-auto flex items-center justify-between px-2 lg:px-8">
        <Logo />
        <Link
          href={`/${lang}`}
          className="bg-by-peach-fuzz text-by-white hidden rounded-full px-10 py-2 md:block"
        >
          {/* {navigation.home} */}
          Newest
        </Link>

        <SearchInput />
        <Link
          href={`/${lang}/audio-stream/123`}
          className="border-by-peach-fuzz text-by-peach-fuzz bg-by-white hidden rounded-full border px-10 py-2 md:block "
        >
          {/* {navigation["audio-stream"]} */}
          Following
        </Link>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link
            href={`/${lang}/audio-stream/123`}
            className="border-by-peach-fuzz bg-by-peach-fuzz text-by-white hidden rounded-lg border px-4 py-1 md:block "
          >
            Log in
          </Link>{" "}
          <Link
            href={`/${lang}/audio-stream/123`}
            className="border-by-peach-fuzz text-by-peach-fuzz bg-by-white hidden rounded-lg border px-4 py-1 md:block "
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}
