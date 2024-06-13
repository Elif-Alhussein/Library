"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import BookItem from "./BookItem";
import AddBookForm from "./AddBookForm";
const BookList: React.FC = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await fetch("http://localhost:3000/api/books");
    const data = await response.json();
    setBooks(data);
  };
  useEffect(() => {
    fetchBooks();
  }, []);
  const handleBookAdded = async () => {
    fetchBooks();
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4 text-amber-600">
        Add a New Book
      </h1>
      <AddBookForm onBookAdded={handleBookAdded} />
      <h2 className="text-2xl font-semibold mb-4 mt-8 text-amber-600">
        Book List
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {books.map((book: any) => (
          <div key={book.id} className="bg-white rounded-lg shadow p-4">
            <img
              src="https://via.placeholder.com/300x450"
              alt={book.title}
              className="w-full h-48 object-cover mb-2 rounded-md"
            />
            <BookItem book={book} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
