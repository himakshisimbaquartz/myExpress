const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory data
let books = [];

// Create a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const book = { title, author };
  books.push(book);
  res.status(201).json(book);
});

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Get a specific book by ID
app.get('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = books[id];
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// Update a book by ID
app.put('/books/:id', (req, res) => {
  const id = req.params.id;
  const { title, author } = req.body;
  const book = books[id];
  for(i=0;i<books.length;i++){
    if (book) {
    book.title = title || book.title;
    book.author = author || book.author;
    book.publications = publications || book.publications;
    book.category = category || book.category;
    res.json(book);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
  }
  
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
  const id = req.params.id;
  const book = books[id];
  if (book) {
    books.splice(id, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: 'Book not found' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

        


