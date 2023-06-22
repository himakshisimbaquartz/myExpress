const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Book = require("./bookModel");

const app = express();

app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://himakshitalukdar:KsO60Py99MOYnwKE@cluster0.vb0gwj8.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

app.post("/books", (req, res) => {
  const { title, genre, author, publicationYear, description, ISBN, Price } =
    req.body;
  const book = new Book({
    title,
    genre,
    author,
    publicationYear,
    description,
    ISBN,
    Price,
  });

  book.save((err, savedBook) => {
    if (err) {
      res.status(500).json({ error: "Failed to save the book" });
    } else {
      res.status(201).json(savedBook);
    }
  });
});

app.get("/books", (req, res) => {
  Book.find({}, (err, books) => {
    if (err) {
      res.status(500).json({ error: "Failed to fetch books" });
    } else {
      res.json(books);
    }
  });
});

app.get("/books/:id", (req, res) => {
  const id = req.params.id;
  Book.findById(id, (err, book) => {
    if (err) {
      res.status(500).json({ error: "Failed to fetch books" });
    } else if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  });
});

app.put("/books/:id", (req, res) => {
  const id = req.params.id;
  const {
    title,
    genre,
    author,
    publicationYear,
    description,
    ISBN,
    Price,
  } = req.body;

  Book.findByIdAndUpdate(
    id,
    { title, genre, author, publicationYear, description, ISBN, Price },
    { new: true },
    (err, updatedBook) => {
      if (err) {
        res.status(500).json({ error: "Failed to update" });
      } else if (updatedBook) {
        res.json(updatedBook);
      } else {
        res.status(404).json({ error: "Book not found" });
      }
    }
  );
});

app.delete("/books/:id", (req, res) => {
  const id = req.params.id;

  Book.findByIdAndDelete(id, (err, deleteBook) => {
    if (err) {
      res.status(500).json({ error: "Failed to delete the book" });
    } else if (deleteBook) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  });
});

app.listen(3000, () => {
  console.log("Server started");
});
