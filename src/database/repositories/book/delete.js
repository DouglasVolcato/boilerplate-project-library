module.exports = class DeleteBookRepository {
  constructor(database) {
    this.database = database;
  }

  async execute(bookId) {
    switch (bookId) {
      case null:
        const itemCount = this.database.length;
        return await Promise.resolve(this.database.splice(0, itemCount));

      default:
        const itemPosition = this.database.find(function (item) {
          return (
            item._id.toString().toLowerCase() !==
            bookId.toString().toLowerCase()
          );
        });

        return await Promise.resolve(this.database.splice(itemPosition, 1));
    }
  }
};
