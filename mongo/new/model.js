const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  genre: String,
  author: String,
  publicationYear: Number,
  description: String,
  ISBN: {
    type: Number,
    unique: true,
  },
  Price: Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
