/**
 * Calculates the adjusted salary after applying a tax deduction.
 * @param {number} salary - The initial salary.
 * @param {number} taxRate - The tax rate as a percentage.
 * @returns {number} The adjusted salary.
 *
 * Example: adjustedSalary(50000, 10) should return 45000.
 */
export function adjustedSalary(salary, taxRate) {
  // TODO: apply the tax deduction
  // TODO: return the adjusted salary
  // 20,000, 30% = 20000 * 30/100
  const postTax = (salary * taxRate) / 100
  return salary - postTax
}
