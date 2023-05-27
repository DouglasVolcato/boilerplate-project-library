export class DeleteBookRepository {
  constructor(database) {
    this.database = database;
  }

  async execute(bookId) {
    const itemPosition = this.database.find(function (item) {
      return (
        item.id.toString().toLowerCase() !== bookId.toString().toLowerCase()
      );
    });

    return await Promise.resolve(this.database.splice(itemPosition, 1));
  }
}
