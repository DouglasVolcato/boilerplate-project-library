import { CreateBookController } from "../../../controllers/book/create";
import { CreateBookService } from "../../../data/services/book/create";
import { BookValidator } from "../../../data/validators/book/validator";
import { books } from "../../../database/mocks/books";
import { CreateBookRepository } from "../../../database/repositories/book/create";
import { IdGeneratorAdapter } from "../../../utils/adapters/id/idGenerator-adapter";

export function makeCreateBookControllerFactory() {
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
}
