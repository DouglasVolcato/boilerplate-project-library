import { GetBookController } from "../../../controllers/book/get";
import { GetBookService } from "../../../data/services/book/get";
import { books } from "../../../database/mocks/books";
import { GetBookRepository } from "../../../database/repositories/book/get";

export function makeGetBookControllerFactory() {
  const database = books;
  const getBookRepository = new GetBookRepository(database);
  const getBookService = new GetBookService(getBookRepository);

  return new GetBookController(getBookService);
}
