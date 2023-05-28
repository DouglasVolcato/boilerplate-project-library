const GetBookController = require("../../../controllers/book/get");
const GetBookService = require("../../../data/services/book/get");
const books = require("../../../database/mocks/books");
const GetBookRepository = require("../../../database/repositories/book/get");

module.exports = function makeGetBookControllerFactory() {
  const database = books;
  const getBookRepository = new GetBookRepository(database);
  const getBookService = new GetBookService(getBookRepository);

  return new GetBookController(getBookService);
};
