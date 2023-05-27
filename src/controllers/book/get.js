export class GetBookController {
  constructor(getBookService) {
    this.getBookService = getBookService;
  }

  async execute(request) {
    try {
      const bookId =
        request.params && request.params.id ? request.params.id : null;

      const data = await this.getBookService.execute(bookId);

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
