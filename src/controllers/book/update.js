export class UpdateBookController {
  constructor(updateBookService) {
    this.updateBookService = updateBookService;
  }

  async execute(request) {
    try {
      if (request.params || request.params.id) {
        throw new Error("Missing book id");
      }

      if (request.body) {
        throw new Error("Missing request body data");
      }

      const bookId = request.params.id;
      const bookData = request.body;

      const data = await this.updateBookService.execute(bookId, bookData);

      return {
        status: 200,
        data: data,
      };
    } catch (error) {
      return {
        status: 400,
        body: error.message,
      };
    }
  }
}
