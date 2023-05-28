module.exports = class CreateCommentController {
  constructor(createCommentService) {
    this.createCommentService = createCommentService;
  }

  async execute(request) {
    try {
      if (!request.body || !request.body.comment) {
        throw new Error("missing comment");
      }

      if (!request.params || !request.params.id) {
        throw new Error("missing book id");
      }

      const bookId = request.params.id;
      const commentData = request.body.comment;

      const data = await this.createCommentService.execute(bookId, commentData);

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
