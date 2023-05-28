module.exports = class GetBookRepository {
  constructor(database) {
    this.database = database;
  }

  async execute(bookId = null) {
    switch (bookId) {
      case null:
        return await Promise.resolve(
          this.database.map((item) => ({
            ...item,
            commentcount: item.comments.length,
          }))
        );

      default:
        return await this.database
          .filter(function (item) {
            return (
              item._id.toString().toLowerCase() ===
              bookId.toString().toLowerCase()
            );
          })
          .map((item) => ({
            ...item,
            commentcount: item.comments.length,
          }))[0];
    }
  }
};
