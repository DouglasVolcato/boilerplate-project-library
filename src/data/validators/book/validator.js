export class BookValidator {
  validate(bookData) {
    switch (true) {
      case !bookData.title:
        throw new Error("Missing book title");

      default:
        return;
    }
  }
}
