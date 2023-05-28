module.exports = class DeleteBookService {
  constructor(deleteBookRepository, getBookRepository) {
    this.deleteBookRepository = deleteBookRepository;
    this.getBookRepository = getBookRepository;
  }

  async execute(bookId = null) {
    if (bookId) {
      const foundBook = await this.getBookRepository.execute(bookId);

      if (!foundBook || (Array.isArray(foundBook) && foundBook.length === 0)) {
        throw new Error("no book exists");
      }
    }

    await this.deleteBookRepository.execute(bookId);

    return "complete delete successful";
  }
};
