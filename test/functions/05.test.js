import assert from 'assert'
import { itemsPerPerson } from '../../functions/05.js'

describe('itemsPerPerson', function () {
  it('should return 12 when totalItems is 100 and people is 8', function () {
    const result = itemsPerPerson(100, 8)
    assert.strictEqual(result, 12.5) // fixed
  })

  it('should return 0 when totalItems is 0 and people is 8', function () {
    const result = itemsPerPerson(0, 8)
    assert.strictEqual(result, 0)
  })

  it('should return 0 when totalItems is 100 and people is 0', function () {
    assert.throws(() => itemsPerPerson(100, 0), Error) // added error handling
  })
})
