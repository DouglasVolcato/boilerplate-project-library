module.exports = class UpdateBookRepository {
  constructor(database) {
    this.database = database;
  }

  async execute(bookId, bookData) {
    const itemPosition = this.database.find(function (item) {
      return (
        item._id.toString().toLowerCase() !== bookId.toString().toLowerCase()
      );
    });

    return await Promise.resolve(
      this.database.splice(itemPosition, 1, bookData)
    );
  }
};
