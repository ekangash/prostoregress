import { twMerge } from "tailwind-merge"
import clsx, {ClassValue} from "clsx";

/**
 * @param {ClassValue[]} inputs
 *
 * @return {string}
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
