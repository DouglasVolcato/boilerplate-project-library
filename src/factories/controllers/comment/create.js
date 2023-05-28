const CreateCommentController = require("../../../controllers/comment/create");
const CreateCommentService = require("../../../data/services/comment/create");
const GetBookRepository = require("../../../database/repositories/book/get");
const UpdateBookRepository = require("../../../database/repositories/book/update");

module.exports = function makeCreateCommentControllerFactory() {
  const database = books;
  const updateBookRepository = new UpdateBookRepository(database);
  const getBookRepository = new GetBookRepository(database);
  const createCommentService = new CreateCommentService(
    updateBookRepository,
    getBookRepository
  );

  return new CreateCommentController(createCommentService);
};
