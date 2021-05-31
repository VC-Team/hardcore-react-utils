import { isArray } from "./isArray";

export function isDate(value: any): boolean {
  return (
    value != null &&
    typeof value === "object" &&
    !isArray(value) &&
    toString.call(value) == "[object Date]"
  );
}