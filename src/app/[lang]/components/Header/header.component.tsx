"use client";
import Link from "next/link";
import { Locale } from "../../../../../i18n.config";
import LocaleSwitcher from "./locale-switcher";
import Logo from "../logo.component";
import SearchInput from "../SearchInput/searchinput.component";
import { usePathname } from "next/navigation";

export default function Header({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const page = pathname.split("/")[2];
  if (page === "login" || page === "signup") {
    return <></>;
  }
  return (
    <header className="fixed left-0 right-0 top-0 z-30 bg-by-white py-2 text-by-peach-fuzz shadow">
      <nav className="mx-auto flex items-center justify-between px-2 lg:px-8">
        <Logo />
        <Link
          href={`/${lang}`}
          className="hidden rounded-full bg-by-peach-fuzz px-10 py-2 text-by-white md:block"
        >
          {/* {navigation.home} */}
          Newest
        </Link>

        <SearchInput />
        <Link
          href={`/${lang}/audio-stream/123`}
          className="hidden rounded-full border border-by-peach-fuzz bg-by-white px-10 py-2 text-by-peach-fuzz md:block "
        >
          {/* {navigation["audio-stream"]} */}
          Following
        </Link>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
          <Link
            href={`/${lang}/login`}
            className="hidden rounded-lg border border-by-peach-fuzz bg-by-peach-fuzz px-4 py-1 text-by-white md:block "
          >
            Log in
          </Link>{" "}
          <Link
            href={`/${lang}/signup`}
            className="hidden rounded-lg border border-by-peach-fuzz bg-by-white px-4 py-1 text-by-peach-fuzz md:block "
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}
