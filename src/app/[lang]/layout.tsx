import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Locale, i18n } from "../../../i18n.config";
import Header from "./components/Header/header.component";
import "../../styles/globals.css";
import NextTopLoader from "nextjs-toploader";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BY",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body className={`${inter.className} h-screen max-h-screen`}>
        <NextTopLoader
          color="#F79464"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
        />
        <Header lang={params.lang} />
        <main>{children}</main>
      </body>
    </html>
  );
}
