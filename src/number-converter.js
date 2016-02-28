const toNineteen = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen'
];

const tens = [
  'zero',
  'ten',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety'
]

const generateConverter = (number) => {
  return () => {
    const firstDigitOrTwo = Math.floor(number / 1000);
    const restOfNumber = number % 1000;

    let result = numberConverter(firstDigitOrTwo) + ' thousand';

    if (restOfNumber === 0) {
      return result;
    }

    if (restOfNumber < 100) {
      result += ' and';
    }

    return result + ' ' + numberConverter(restOfNumber);
  };
};

const numberConverter = (number) => {
  if (number === 0) {
    return '';
  }

  if (number <= 19) {
    return toNineteen[number];
  };

  if (number <= 99) {
    const firstDigit = Math.floor(number / 10);
    const restOfNumber = number % 10;

    let result = tens[firstDigit];

    if (restOfNumber === 0) {
      return result
    }

    return result + '-' + numberConverter(restOfNumber);
  }

  if (number <= 999) {
    const firstDigit = Math.floor(number / 100);
    const restOfNumber = number % 100;

    let result = numberConverter(firstDigit) + ' hundred';

    if (restOfNumber === 0) {
      return result;
    }

    return result + ' and ' + numberConverter(restOfNumber);
  }

  //TODO work out the pattern and make more generic
  if (number <= 999999) {
    return generateConverter(number).call();
  }
};



export default numberConverter;
