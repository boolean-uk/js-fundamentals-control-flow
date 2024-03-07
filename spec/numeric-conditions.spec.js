const {
  answerOne,
  answerTwo,
  answerThree,
  answerFour
} = require('../src/numeric-conditions')

describe('answerOne2', () => {
  it('should be true', () => {
    expect(answerOne).toEqual(true)
  })
})

describe('answerTwo', () => {
  it('should be false', () => {
    expect(answerTwo).toEqual(false)
  })
})

describe('answerThree2', () => {
  it('should be true', () => {
    expect(answerThree).toEqual(true)
  })
})

describe('answerFour2', () => {
  it('should be true', () => {
    expect(answerFour).toEqual(true)
  })
})
