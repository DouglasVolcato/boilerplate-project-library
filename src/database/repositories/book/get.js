export class GetBookRepository {
  constructor(database) {
    this.database = database;
  }

  async execute(bookId = null) {
    switch (bookId) {
      case null:
        return await Promise.resolve(this.database);

      default:
        return await this.database.find(function (item) {
          return (
            item.id.toString().toLowerCase() === bookId.toString().toLowerCase()
          );
        });
    }
  }
}
