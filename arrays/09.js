/**
 * Return the smallest age from an array of two ages.
 * The input array will always have exactly two numbers.
 * @param {number[]} ages - The array of two ages.
 * @returns {number} The smallest age.
 * @example
 * findYoungestAge([29, 31]); // returns 29
 */
export function findYoungestAge(ages) {
  // TODO: Return the smallest age
  // developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min
  return Math.min(...ages)
}
