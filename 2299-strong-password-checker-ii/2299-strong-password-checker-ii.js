const REGEX_DIC = {
  MIN_LENGTH_REGEX: /.{8,}/,
  LOWERCASE_LETTER_REGEX: /[a-z]/,
  UPPERCASE_LETTER_REGEX: /[A-Z]/,
  DIGIT_REGEX: /\d/,
  SPECIAL_CHARACTER_REGEX: /[!@#$%^&*()+-]/,
  TWO_ADJACENT_CHARACTER: /(.)\1+/,
};

var strongPasswordCheckerII = function (password) {
  return Object.entries(REGEX_DIC).every(([key, regex]) => {
    if (key === 'TWO_ADJACENT_CHARACTER') {
      return !regex.test(password);
    }

    return regex.test(password);
  });
};
