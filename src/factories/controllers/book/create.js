const CreateBookController = require("../../../controllers/book/create");
const CreateBookService = require("../../../data/services/book/create");
const BookValidator = require("../../../data/validators/book/validator");
const books = require("../../../database/mocks/books");
const CreateBookRepository = require("../../../database/repositories/book/create");
const IdGeneratorAdapter = require("../../../utils/adapters/id/idGenerator-adapter");

module.exports = function makeCreateBookControllerFactory() {
  const database = books;
  const createBookRepository = new CreateBookRepository(database);
  const bookValidator = new BookValidator();
  const idGeneratorAdapter = new IdGeneratorAdapter();
  const createBookService = new CreateBookService(
    createBookRepository,
    bookValidator,
    idGeneratorAdapter
  );

  return new CreateBookController(createBookService);
};
