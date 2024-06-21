"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import BookItem from "./BookItem";
import AddBookForm from "./AddBookForm";

const BookList: React.FC = () => {
  const [books, setBooks] = useState([]);
  const [initialBook, setInitialBook] = useState();

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

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3000/api/books/${id}`);
      fetchBooks();
      alert("Book deleted successfully!");
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Failed to delete book. Please try again later.");
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-semibold mb-4 text-amber-600">
        Add a New Book
      </h1>
      <AddBookForm
        initBook={initialBook}
        resetBook={() => setInitialBook(undefined)}
        onBookAdded={handleBookAdded}
      />
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

            <div className="flex justify-end mt-4">
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 flex items-center"
                onClick={() => {
                  setInitialBook(book);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.707 4.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.474.258l-3 1a1 1 0 0 1-1.237-1.237l1-3a1 1 0 0 1 .257-.474l9-9z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M13 5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V7H8a1 1 0 1 1 0-2h4z"
                  />
                </svg>
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-md flex items-center"
                onClick={() => handleDelete(book.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 1 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
                  />
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
