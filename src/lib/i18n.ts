export const locales = ["en", "zh", "ru", "pt", "es", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/").filter(Boolean);

  if ((locales as readonly string[]).includes(segments[0])) {
    segments[0] = targetLocale;
  } else {
    segments.unshift(targetLocale);
  }

  return "/" + segments.join("/");
}
