const DeleteBookController = require("../../../controllers/book/delete");
const DeleteBookService = require("../../../data/services/book/delete");
const books = require("../../../database/mocks/books");
const DeleteBookRepository = require("../../../database/repositories/book/delete");
const GetBookRepository = require("../../../database/repositories/book/get");

module.exports = function makeDeleteBookControllerFactory() {
  const database = books;
  const deleteBookRepository = new DeleteBookRepository(database);
  const getBookRepository = new GetBookRepository(database);
  const deleteBookService = new DeleteBookService(
    deleteBookRepository,
    getBookRepository
  );

  return new DeleteBookController(deleteBookService);
};
