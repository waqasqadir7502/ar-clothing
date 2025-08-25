import { ReadonlyURLSearchParams } from "next/navigation";

export function ensureStartsWith(stringtoCheck: string, startsWith: string) {
  return stringtoCheck.startsWith(startsWith)
    ? stringtoCheck
    : `${startsWith}${stringtoCheck}`;
}

export function createURL(
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
}
