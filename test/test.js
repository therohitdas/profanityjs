var assert = require('assert');
var { containsProfanity, maskProfanity } = require("../index")

describe('Profanity checker', function () {
    describe('#containsProfanity()', function () {
        it('should return true for this sentence', function () {
            assert.strictEqual(true, containsProfanity("tum madharchod ho", true));
        });
    });
    describe('#containsProfanity()', function () {
        it('should return true for this sentence', function () {
            assert.strictEqual(true, containsProfanity("lorem ipsum doler sit amet hot carl", true));
        });
    });
    describe('#containsProfanity()', function () {
        it('should return true for this sentence', function () {
            assert.strictEqual(true, containsProfanity("lorem ipsum sås", true));
        });
    });
    describe('#containsProfanity()', function () {
        it('should return true for this sentence', function () {
            assert.strictEqual(true, containsProfanity("lorem ipsum sit doler amet กระเด้า", true));
        });
    });
    // false values
    describe('#containsProfanity()', function () {
        it('should return false for this sentence', function () {
            assert.strictEqual(false, containsProfanity("tum random boo ho", true));
        });
    });
    describe('#containsProfanity()', function () {
        it('should return false for this sentence', function () {
            assert.strictEqual(false, containsProfanity("lorem ipsum doler sit amet", true));
        });
    });
    describe('#containsProfanity()', function () {
        it('should return false for this sentence', function () {
            assert.strictEqual(false, containsProfanity("lorem ipsum rohit", true));
        });
    });
    describe('#containsProfanity()', function () {
        it('should return false for this sentence', function () {
            assert.strictEqual(false, containsProfanity("lorem ipsum sit doler amet sink", true));
        });
    });
});


describe('Profanity Masker', function () {
    describe('#maskProfanity()', function () {
        it('should mask profanity for this sentence', function () {
            assert.strictEqual("tum ********** ho", maskProfanity("tum madharchod ho", true));
        });
    });
    describe('#maskProfanity()', function () {
        it('should mask profanity for this sentence', function () {
            assert.strictEqual("lorem ipsum doler sit amet ********", maskProfanity("lorem ipsum doler sit amet hot carl", true));
        });
    });
    describe('#maskProfanity()', function () {
        it('should mask profanity for this sentence', function () {
            assert.strictEqual("lorem ipsum ***", maskProfanity("lorem ipsum sås", true));
        });
    });
    describe('#maskProfanity()', function () {
        it('should mask profanity for this sentence', function () {
            assert.strictEqual("lorem ipsum sit doler amet *******", maskProfanity("lorem ipsum sit doler amet กระเด้า", true));
        });
    });
    // false values
    describe('#maskProfanity()', function () {
        it('should return the sentence unchanged', function () {
            assert.strictEqual("tum random boo ho", maskProfanity("tum random boo ho", true));
        });
    });
    describe('#maskProfanity()', function () {
        it('should return the sentence unchanged', function () {
            assert.strictEqual("lorem ipsum doler sit amet", maskProfanity("lorem ipsum doler sit amet", true));
        });
    });
    describe('#maskProfanity()', function () {
        it('should return the sentence unchanged', function () {
            assert.strictEqual("lorem ipsum rohit", maskProfanity("lorem ipsum rohit", true));
        });
    });
    describe('#maskProfanity()', function () {
        it('should return the sentence unchanged', function () {
            assert.strictEqual("lorem ipsum sit doler amet sink", maskProfanity("lorem ipsum sit doler amet sink", true));
        });
    });
});