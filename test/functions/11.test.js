import assert from 'assert'
import { adjustedSalary } from '../../functions/11.js'

describe('adjustedSalary', function () {
  it('should return 44000 when salary is 50000, raiseRate is 10, and taxRate is 20', function () {
    const result = adjustedSalary(50000, 10, 20)
    assert.strictEqual(result, 44000)
  })

  it('should return 54000 when salary is 50000, raiseRate is 20, and taxRate is 10', function () {
    const result = adjustedSalary(50000, 20, 10)
    assert.strictEqual(result, 54000)
  })

  it('should return 50000 when salary is 50000, raiseRate is 0, and taxRate is 0', function () {
    const result = adjustedSalary(50000, 0, 0)
    assert.strictEqual(result, 50000)
  })

  it('should handle floating point values correctly', function () {
    const result = adjustedSalary(60000.5, 10, 20)
    assert.strictEqual(result, 52800.4)
  })
})
