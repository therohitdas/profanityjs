const {
    bagOfWordsArray,
} = require("./data/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words");
const homoglyphSearch = require("homoglyph-search");

String.prototype.replaceAt = function (index, replacement) {
    return (
        this.substr(0, index) +
        replacement +
        this.substr(index + replacement.length)
    );
};

const containsProfanity = (sentence, useHomoglyphSearch) => {
    if (sentence == "" || typeof (sentence) !== "string") {
        throw new Error("containsProfanity(): first argument must be a non-empty string");
    }
    else if (typeof (useHomoglyphSearch) !== "boolean") {
        throw new Error("containsProfanity(): second argument must be a boolean value");
    }
    //   var useHomoglyphSearch = options.useHomoglyphSearch; use this line when more than one option is available
    if (useHomoglyphSearch) {
        var homoglyphResult = homoglyphSearch.search(sentence, bagOfWordsArray);
        if (homoglyphResult.length != 0) return true;
        else return false;
    }
    //  TODO - add a non homoglyph version
};

const maskProfanity = (sentence, mask) => {
    if (sentence == "" || typeof (sentence) !== "string") {
        throw new Error("maskProfanity(): first argument must be a non-empty string");
    }
    mask = (typeof (mask) == "undefined") ? "*" : mask;
    if (mask.length != 1 && typeof (mask) != "undefined") {
        throw new Error("maskProfanity(): second argument must be a single char. Default - *");
    }
    var homoglyphResult = homoglyphSearch.search(sentence, bagOfWordsArray);
    for (let i = 0; i < homoglyphResult.length; i++) {
        const result = homoglyphResult[i];
        var match = result.match;
        var index = result.index;
        var star = "";
        for (let j = 0; j < match.length; j++) {
            star += mask;
        }
        sentence = sentence.replaceAt(index, star);
    }
    return sentence;
};

// TODO Add a char map and use search builder from homoglyph search.

exports.containsProfanity = containsProfanity;
exports.maskProfanity = maskProfanity;