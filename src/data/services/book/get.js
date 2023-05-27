module.exports = class GetBookService {
  constructor(getBookRepository) {
    this.getBookRepository = getBookRepository;
  }

  async execute(bookId = null) {
    return await this.getBookRepository.execute(bookId);
  }
};
