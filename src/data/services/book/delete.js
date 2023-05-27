module.exports = class DeleteBookService {
  constructor(deleteBookRepository, getBookRepository) {
    this.deleteBookRepository = deleteBookRepository;
    this.getBookRepository = getBookRepository;
  }

  async execute(bookId) {
    const foundBook = await this.getBookRepository.execute(bookId);

    if (!foundBook) {
      throw new Error("Invalid book id");
    }

    await this.deleteBookRepository.execute(bookId);

    return;
  }
};
