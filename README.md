
📚 Bookstore API
================

A simple RESTful API built with Node.js and Express that provides information about books, their genres, prices, and availability.

------------------------------------------------------------

🚀 Setup Instructions
---------------------

1. Clone the Repository

   bash
   git clone https://github.com/M-Afnan-Raees/bookstore-api.git
   cd bookstore-api
   

2. Install Dependencies

   bash
   npm install
   

3. Start the Server

   bash
   node index.js
   

4. Start with Nodemon (for development)

   bash
   npm nodemon index.js
   

------------------------------------------------------------

📌 API Endpoints
----------------

1. GET `/api/books`
   - Returns all books.

   Sample Request:
   http
   GET http://localhost:3000/api/books
   

2. GET `/api/books/available`
   - Returns books where `inStock` is `true`.

   Sample Request:
   http
   GET http://localhost:3000/api/books/available
   

3. GET `/api/books/genre/:genreName`
   - Returns books matching a specific genre.

   Sample Request:
   http
   GET http://localhost:3000/api/books/genre/fiction
   

4. GET `/api/books/price/under/:amount`
   - Returns books priced below the specified amount.

   Sample Request:
   http
   GET http://localhost:3000/api/books/price/under/250
   

------------------------------------------------------------

🛠 Technologies Used
--------------------
- Node.js
- Express
- JavaScript

------------------------------------------------------------

👨‍💻 Author
-----------

Afnan Raees  
Email: afnanraees1@gmail.com

------------------------------------------------------------

