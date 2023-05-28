module.exports = class DeleteBookController {
  constructor(deleteBookService) {
    this.deleteBookService = deleteBookService;
  }

  async execute(request) {
    try {
      const bookId =
        request.params && request.params.id ? request.params.id : null;

      const data = await this.deleteBookService.execute(bookId);

      return {
        status: 200,
        body: data,
      };
    } catch (error) {
      return {
        status: 400,
        body: error.message,
      };
    }
  }
};
