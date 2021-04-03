var should = require("chai").should();
var { containsProfanity, maskProfanity } = require("../index");

describe("Profanity checker", function () {
  describe("#containsProfanity()", function () {
    it("should return true for this sentence", function () {
      var result = containsProfanity("tum madharchod ho", true);
      result.should.equal(true);
    });
  });
  describe("#containsProfanity()", function () {
    it("should return true for this sentence", function () {
      var result = containsProfanity(
        "lorem ipsum doler sit amet hot carl",
        true
      );
      result.should.equal(true);
    });
  });
  describe("#containsProfanity()", function () {
    it("should return true for this sentence", function () {
      var result = containsProfanity("lorem ipsum sås", true);
      result.should.equal(true);
    });
  });
  describe("#containsProfanity()", function () {
    it("should return true for this sentence", function () {
      var result = containsProfanity(
        "lorem ipsum sit doler amet กระเด้า",
        true
      );
      result.should.equal(true);
    });
  });
  // false values
  describe("#containsProfanity()", function () {
    it("should return false for this sentence", function () {
      var result = containsProfanity("tum random boo ho", true);
      result.should.equal(false);
    });
  });
  describe("#containsProfanity()", function () {
    it("should return false for this sentence", function () {
      var result = containsProfanity("lorem ipsum doler sit amet", true);
      result.should.equal(false);
    });
  });
  describe("#containsProfanity()", function () {
    it("should return false for this sentence", function () {
      var result = containsProfanity("lorem ipsum rohit", true);
      result.should.equal(false);
    });
  });
  describe("#containsProfanity()", function () {
    it("should return false for this sentence", function () {
      var result = containsProfanity("lorem ipsum sit doler amet sink", true);
      result.should.equal(false);
    });
  });
  // errors
  describe("#containsProfanity()", function () {
    it("should return error for empty statement", function () {
      (function () {
        containsProfanity("", true);
      }.should.throw(
        "containsProfanity(): first argument must be a non-empty string"
      ));
    });
  });
  describe("#containsProfanity()", function () {
    it("should return error for empty statement", function () {
      (function () {
        containsProfanity(1, true);
      }.should.throw(
        "containsProfanity(): first argument must be a non-empty string"
      ));
    });
  });
  describe("#containsProfanity()", function () {
    it("should return error for useHomoglyphSearch not passed", function () {
      (function () {
        containsProfanity("something");
      }.should.throw(
        "containsProfanity(): second argument must be a boolean value"
      ));
    });
  });
  describe("#containsProfanity()", function () {
    it("should return error for useHomoglyphSearch not boolean", function () {
      (function () {
        containsProfanity("something", 1);
      }.should.throw(
        "containsProfanity(): second argument must be a boolean value"
      ));
    });
  });
});

describe("Profanity Masker", function () {
  describe("#maskProfanity()", function () {
    it("should mask profanity for this sentence with *", function () {
      var result = maskProfanity("tum madharchod ho", "*");
      result.should.equal("tum ********** ho");
    });
  });
  describe("#maskProfanity()", function () {
    it("should mask profanity for this sentence with *", function () {
      var result = maskProfanity("lorem ipsum doler sit amet hot carl");
      result.should.equal("lorem ipsum doler sit amet ********");
    });
  });
  describe("#maskProfanity()", function () {
    it("should mask profanity for this sentence with #", function () {
      var result = maskProfanity("lorem ipsum sås", "#");
      result.should.equal("lorem ipsum ###");
    });
  });
  describe("#maskProfanity()", function () {
    it("should mask profanity for this sentence", function () {
      var result = maskProfanity("lorem ipsum sit doler amet กระเด้า", "*");
      result.should.equal("lorem ipsum sit doler amet *******");
    });
  });
  // false values
  describe("#maskProfanity()", function () {
    it("should return the sentence unchanged", function () {
      var result = maskProfanity("tum random boo ho", "*");
      result.should.equal("tum random boo ho");
    });
  });
  describe("#maskProfanity()", function () {
    it("should return the sentence unchanged", function () {
      var result = maskProfanity("lorem ipsum doler sit amet", "*");
      result.should.equal("lorem ipsum doler sit amet");
    });
  });
  describe("#maskProfanity()", function () {
    it("should return the sentence unchanged", function () {
      var result = maskProfanity("lorem ipsum rohit", "*");
      result.should.equal("lorem ipsum rohit");
    });
  });
  describe("#maskProfanity()", function () {
    it("should return the sentence unchanged", function () {
      var result = maskProfanity("lorem ipsum sit doler amet sink", "*");
      result.should.equal("lorem ipsum sit doler amet sink");
    });
  });
  // errors
  describe("#maskProfanity()", function () {
    it("should throw error for empty sentence", function () {
      (function () {
        maskProfanity("", "*");
      }.should.throw(
        "maskProfanity(): first argument must be a non-empty string"
      ));
    });
  });
  describe("#maskProfanity()", function () {
    it("should throw error for mask too long", function () {
      (function () {
        maskProfanity("not empty sentence", "**");
      }.should.throw(
        "maskProfanity(): second argument must be a single char. Default - *"
      ));
    });
  });
  describe("#maskProfanity()", function () {
    it("should throw error for mask too short", function () {
      (function () {
        maskProfanity("not empty sentence", "");
      }.should.throw(
        "maskProfanity(): second argument must be a single char. Default - *"
      ));
    });
  });
});
