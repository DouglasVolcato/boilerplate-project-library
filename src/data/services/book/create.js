export class CreateBookService {
  constructor(createBookRepository, bookValidator, idGeneratorAdapter) {
    this.createBookRepository = createBookRepository;
    this.bookValidator = bookValidator;
    this.idGenerator = idGeneratorAdapter;
  }

  async execute(bookData) {
    await this.bookValidator.validate(bookData);

    const newBook = {
      _id: this.idGenerator.generateId(),
      title: bookData.title,
    };

    await this.createBookRepository.execute(newBook);

    return newBook;
  }
}
