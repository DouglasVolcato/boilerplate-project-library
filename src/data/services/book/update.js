module.exports = class UpdateBookService {
  constructor(updateBookRepository, getBookRepository) {
    this.updateBookRepository = updateBookRepository;
    this.getBookRepository = getBookRepository;
  }

  async execute(bookId, bookData) {
    const foundBook = await this.getBookRepository.execute(bookId);

    if (!foundBook || (Array.isArray(foundBook) && foundBook.length === 0)) {
      throw new Error("no book exists");
    }

    const newBook = {
      _id: foundBook._id,
      title: bookData.title ?? foundBook.title,
      comments: foundBook.comments,
    };

    await this.updateBookRepository.execute(bookId, newBook);

    return;
  }
};
