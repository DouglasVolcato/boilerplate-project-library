const UpdateBookController = require("../../../controllers/book/update");
const UpdateBookService = require("../../../data/services/book/update");
const books = require("../../../database/mocks/books");
const GetBookRepository = require("../../../database/repositories/book/get");
const UpdateBookRepository = require("../../../database/repositories/book/update");

module.exports = function makeUpdateBookControllerFactory() {
  const database = books;
  const updateBookRepository = new UpdateBookRepository(database);
  const getBookRepository = new GetBookRepository(database);
  const updateBookService = new UpdateBookService(
    updateBookRepository,
    getBookRepository
  );

  return new UpdateBookController(updateBookService);
};
