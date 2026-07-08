export const locales = ["en", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === "en" || segments[0] === "zh") {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }

  return "/" + segments.join("/");
}
