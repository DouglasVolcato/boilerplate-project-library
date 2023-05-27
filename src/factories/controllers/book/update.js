import { UpdateBookController } from "../../../controllers/book/update";
import { UpdateBookService } from "../../../data/services/book/update";
import { books } from "../../../database/mocks/books";
import { GetBookRepository } from "../../../database/repositories/book/get";
import { UpdateBookRepository } from "../../../database/repositories/book/update";

export function makeUpdateBookControllerFactory() {
  const database = books;
  const updateBookRepository = new UpdateBookRepository(database);
  const getBookRepository = new GetBookRepository(database);
  const updateBookService = new UpdateBookService(
    updateBookRepository,
    getBookRepository
  );

  return new UpdateBookController(updateBookService);
}
