module.exports = class CreateBookRepository {
  constructor(database) {
    this.database = database;
  }

  async execute(bookData) {
    return await Promise.resolve(this.database.push(bookData));
  }
};
