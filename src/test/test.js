const assert = require('assert');
import numberConverter from '../number-converter';

describe('number converter', () => {
  it('should convert 0-19', () => {
    const cases = [
      { test: 0, expected: '' },
      { test: 1, expected: 'one' },
      { test: 2, expected: 'two' },
      { test: 3, expected: 'three' },
      { test: 4, expected: 'four' },
      { test: 5, expected: 'five' },
      { test: 6, expected: 'six' },
      { test: 7, expected: 'seven' },
      { test: 8, expected: 'eight' },
      { test: 9, expected: 'nine' },
      { test: 10, expected: 'ten' },
      { test: 11, expected: 'eleven' },
      { test: 12, expected: 'twelve' },
      { test: 13, expected: 'thirteen' },
      { test: 14, expected: 'fourteen' },
      { test: 15, expected: 'fifteen' },
      { test: 16, expected: 'sixteen' },
      { test: 17, expected: 'seventeen' },
      { test: 18, expected: 'eighteen' },
      { test: 19, expected: 'nineteen' }
    ];

    cases.forEach((testCase) => {
      assert.equal(numberConverter(testCase.test), testCase.expected);
    });
  });

  it('should convert 20-29', () => {
    const cases = [
      { test: 20, expected: 'twenty' },
      { test: 21, expected: 'twenty-one' },
      { test: 22, expected: 'twenty-two' },
      { test: 23, expected: 'twenty-three' },
      { test: 24, expected: 'twenty-four' },
      { test: 25, expected: 'twenty-five' },
      { test: 26, expected: 'twenty-six' },
      { test: 27, expected: 'twenty-seven' },
      { test: 28, expected: 'twenty-eight' },
      { test: 29, expected: 'twenty-nine' }
    ];

    cases.forEach((testCase) => {
      assert.equal(numberConverter(testCase.test), testCase.expected);
    });
  });

  it('should convert these edge-casey numbers ', () => {
    const cases = [
      { test: 99, expected: 'ninety-nine' },
      { test: 100, expected: 'one hundred' },
      { test: 101, expected: 'one hundred and one' },
      { test: 120, expected: 'one hundred and twenty' },
      { test: 121, expected: 'one hundred and twenty-one' },
      { test: 999, expected: 'nine hundred and ninety-nine' }
    ];

    cases.forEach((testCase) => {
      assert.equal(numberConverter(testCase.test), testCase.expected);
    });
  });

  it('should convert moar edge-casey numbers (1000+)', () => {
    const cases = [
      { test: 1000, expected: 'one thousand' },
      { test: 1001, expected: 'one thousand and one' },
      { test: 1020, expected: 'one thousand and twenty' },
      { test: 1021, expected: 'one thousand and twenty-one' },
      { test: 1100, expected: 'one thousand one hundred' },
      { test: 1101, expected: 'one thousand one hundred and one' },
      { test: 9999, expected: 'nine thousand nine hundred and ninety-nine' }
    ];

    cases.forEach((testCase) => {
      assert.equal(numberConverter(testCase.test), testCase.expected);
    });
  });

  it('should convert even moar edge-casey numbers (10,000+)', () => {
    const cases = [
      { test: 10000, expected: 'ten thousand' },
      { test: 10001, expected: 'ten thousand and one' },
      { test: 10020, expected: 'ten thousand and twenty' },
      { test: 10100, expected: 'ten thousand one hundred' },
      { test: 10101, expected: 'ten thousand one hundred and one' },
      { test: 99000, expected: 'ninety-nine thousand' },
      { test: 99999, expected: 'ninety-nine thousand nine hundred and ninety-nine' }
    ];

    cases.forEach((testCase) => {
      assert.equal(numberConverter(testCase.test), testCase.expected);
    });
  });

  it('should convert even moar edge-casey numbers (100,000+)', () => {
    const cases = [
      { test: 100000, expected: 'one hundred thousand' },
      { test: 100001, expected: 'one hundred thousand and one' },
      { test: 101000, expected: 'one hundred and one thousand' },
      { test: 101001, expected: 'one hundred and one thousand and one' },
      { test: 999000, expected: 'nine hundred and ninety-nine thousand' },
      { test: 999999, expected: 'nine hundred and ninety-nine thousand nine hundred and ninety-nine' }
    ];

    cases.forEach((testCase) => {
      assert.equal(numberConverter(testCase.test), testCase.expected);
    });
  });

  it.skip(' just print out all the numbers ', () => {
    let i = 0;
    while (i < 100000) {
      console.log(numberConverter(i));
      i++;
    }
  });
});
