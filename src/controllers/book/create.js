module.exports = class CreateBookController {
  constructor(createBookService) {
    this.createBookService = createBookService;
  }

  async execute(request) {
    try {
      if (request.body) {
        throw new Error("Missing request body data");
      }

      const bookData = request.body;

      const data = await this.createBookService.execute(bookData);

      return {
        status: 201,
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
