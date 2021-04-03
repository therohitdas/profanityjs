# Profanity JS

Simple profanity filter and masker.

## Installation

```javascript
npm install profanityjs
```

## Usage

ProfanityJs comes with two functions:

- `containsProfanity(sentence, useHomoglyphSearch)`: This function takes two required arguments.

  - `sentence` can be a word/ sentence/ paragraph which you want to check.
  - `useHomoglyphSearch` should be set true for now. In the future, I will add a method to checkProfanity without using glyph and better search time.

  It returns `true` if the `sentence` contains at least one naughty word, `false` otherwise.

```javascript
const { containsProfanity } = require("profanityjs");

var testSentence = "Go fuck yourself!";

if (containsProfanity(testSentence, true)) {
  console.log("Naughty word(s) detected");
} else {
  console.log("Clean :)");
}
```

- `maskProfanity(sentence, mask)`:
  This function takes two arguments.

  - `sentence` can be a word/ sentence/ paragraph from which you want to check and mask the naughty word(s).
  - `mask` is the character with which you want to mask the naughty word. Default is `"*"`.

  It returns the sentence with all the naughty words masked with the mask character. If there are no naughty words, it returns the input sentence unchanged.

```javascript
const { maskProfanity } = require("profanityjs");

var testSentence = "Go fuck yourself!";

var maskedSentence = maskProfanity(testSentence);
console.log(maskedSentence);

maskedSentence = maskProfanity(testSentence, "#");
console.log(maskedSentence);
```

## Contribution

All contributions are welcome to improve this project.
