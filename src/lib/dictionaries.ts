import "server-only";
import { Locale } from "../../i18n.config";

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  vi: () => import("../dictionaries/vi.json").then((module) => module.default),
};

export const getDictionary = (locale: Locale) => dictionaries[locale]();
