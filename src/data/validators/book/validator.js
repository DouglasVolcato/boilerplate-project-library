module.exports = class BookValidator {
  validate(bookData) {
    switch (true) {
      case !bookData.title:
        throw new Error("missing required field title");

      default:
        return;
    }
  }
};
