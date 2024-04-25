"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const pathName = usePathname();
  const initialLocale = pathName.split("/")[1];

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex h-auto w-10 items-center justify-center rounded-md bg-py-peach-fuzz px-3 py-2 text-sm text-white hover:opacity-80">
      <Link href={redirectedPathName(initialLocale === "vi" ? "en" : "vi")}>
        {initialLocale}
      </Link>
    </div>
  );
}
