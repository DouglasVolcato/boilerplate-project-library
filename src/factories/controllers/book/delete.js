import { DeleteBookController } from "../../../controllers/book/delete";
import { DeleteBookService } from "../../../data/services/book/delete";
import { books } from "../../../database/mocks/books";
import { DeleteBookRepository } from "../../../database/repositories/book/delete";
import { GetBookRepository } from "../../../database/repositories/book/get";

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
