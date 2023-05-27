module.exports = class UpdateBookService {
  constructor(updateBookRepository, getBookRepository) {
    this.updateBookRepository = updateBookRepository;
    this.getBookRepository = getBookRepository;
  }

  async execute(bookId, bookData) {
    const foundBook = await this.getBookRepository.execute(bookId);

    if (!foundBook) {
      throw new Error("Invalid book id");
    }

    const newBook = {
      _id: foundBook._id,
      title: bookData.title ?? foundBook.title,
    };

    await this.updateBookRepository.execute(bookId, newBook);

    return;
  }
};
