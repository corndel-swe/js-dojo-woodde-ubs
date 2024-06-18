/**
 * Determines the price of a movie ticket based on age and membership status.
 * @param {number} age - The age of the person.
 * @param {boolean} isMember - True if the person is a member.
 * @returns {number} The price of the movie ticket.
 *
 * Example: ticketPrice(17, false) should return 8.
 */
export function ticketPrice(age, isMember) {
  // TODO: Determine the price based on the age and membership status
  // Prices: $8 for children (under 18), $10 for adults, $6 for seniors (65+)
  // Members get a $2 discount
  let px = 10
  if (age < 18) {
    px = 8
  }
  if (age >= 65) {
    px = 6
  }
  if (isMember) {
    px -= 2
  }
  return px

}
