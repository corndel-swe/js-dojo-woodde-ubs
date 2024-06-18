/**
 * Return an array containing only the first and the last name from the array.
 * @param {string[]} names - The array of names.
 * @returns {string[]} An array containing the first and last names.
 * @example
 * firstAndLastName(['Alice', 'Bob', 'Charlie', 'David', 'Eve']); // returns ['Alice', 'Eve']
 */
export function firstAndLastName(names) {
  // TODO: Get the first element from the array
  const first = names[0]
  // TODO: Get the last element from the array
  const last = names[names.length - 1]
  // TODO: Return an array containing the first and last elements
  return [first, last]
}
