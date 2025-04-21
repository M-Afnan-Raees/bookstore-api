const express = require('express');
const app = express();
const PORT = 3000;

const books = require('./books'); // Importing books array

app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore API');
});

// GET /api/books - Return all books
app.get('/api/books', (req, res) => {
  res.json(books);
});

// GET /api/books/available - Return books that are in stock
app.get('/api/books/available', (req, res) => {
  const availableBooks = books.filter(book => book.inStock);
  res.json(availableBooks);
});

// GET /api/books/genre/:genreName - Return books by genre
app.get('/api/books/genre/:genreName', (req, res) => {
  const genreName = req.params.genreName.toLowerCase();
  const genreBooks = books.filter(book => book.genre.toLowerCase() === genreName);
  res.json(genreBooks);
});

// GET /api/books/price/under/:amount - Return books cheaper than the amount
app.get('/api/books/price/under/:amount', (req, res) => {
  const amount = parseFloat(req.params.amount);
  const cheapBooks = books.filter(book => book.price < amount);
  res.json(cheapBooks);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
