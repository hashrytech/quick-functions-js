export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

/**
 * Capitalizes the first letter of a given string.
 *
 * @param string - The input string to capitalize.
 * @returns The input string with the first letter capitalized.
 *
 * @example
 * capitalizeFirstLetter('hello'); // "Hello"
 * capitalizeFirstLetter('world'); // "World"
 * capitalizeFirstLetter('1number'); // "1number"
 */
export function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}