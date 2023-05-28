/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

"use strict";

const makeCreateBookControllerFactory = require("../src/factories/controllers/book/create");
const makeGetBookControllerFactory = require("../src/factories/controllers/book/get");
const makeDeleteBookControllerFactory = require("../src/factories/controllers/book/delete");
const makeCreateCommentControllerFactory = require("../src/factories/controllers/comment/create");

module.exports = function (app) {
  app
    .route("/api/books")
    .get(async function (req, res) {
      const getBookController = makeGetBookControllerFactory();
      const getBook = await getBookController.execute(req);

      res.json(getBook.body);
    })

    .post(async function (req, res) {
      const createBookController = makeCreateBookControllerFactory();
      const createBook = await createBookController.execute(req);

      res.json(createBook.body);
    })

    .delete(async function (req, res) {
      const deleteBookController = makeDeleteBookControllerFactory();
      const deleteBook = await deleteBookController.execute(req);

      res.json(deleteBook.body);
    });

  app
    .route("/api/books/:id")
    .get(async function (req, res) {
      const getBookController = makeGetBookControllerFactory();
      const getBook = await getBookController.execute(req);

      res.json(getBook.body);
    })

    .post(async function (req, res) {
      const getCommentController = makeCreateCommentControllerFactory();
      const getComment = await getCommentController.execute(req);

      res.json(getComment.body);
    })

    .delete(async function (req, res) {
      const deleteBookController = makeDeleteBookControllerFactory();
      const deleteBook = await deleteBookController.execute(req);

      res.json(deleteBook.body);
    });
};
