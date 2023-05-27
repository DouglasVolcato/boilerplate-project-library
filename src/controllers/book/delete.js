export class DeleteBookController {
  constructor(deleteBookService) {
    this.deleteBookService = deleteBookService;
  }

  async execute(request) {
    try {
      if (request.params || request.params.id) {
        throw new Error("Missing book id");
      }

      const bookId = request.params.id;

      const data = await this.deleteBookService.execute(bookId);

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
