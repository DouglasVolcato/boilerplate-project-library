module.exports = class GetBookService {
  constructor(getBookRepository) {
    this.getBookRepository = getBookRepository;
  }

  async execute(bookId = null) {
    const fountItems = await this.getBookRepository.execute(bookId);

    if (!fountItems || (Array.isArray(fountItems) && fountItems.length === 0)) {
      throw new Error("no book exists");
    }

    return fountItems;
  }
};
