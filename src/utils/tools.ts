import { LOCALE } from "../consts.ts";

export function formatDate(date: Date): string {
  return date.toLocaleDateString(LOCALE, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
