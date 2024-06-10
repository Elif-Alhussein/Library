import React, { useEffect, useState } from "react";
import axios from "axios";
import BookItem from "./BookItem";

type Book = {
  id: string;
  title: string;
  author: string;
  releaseDate: number;
  bookType: string;
};

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4000/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <BookItem
          key={book.id}
          title={book.title}
          author={book.author}
          releaseDate={book.releaseDate}
          bookType={book.bookType}
        />
      ))}
    </div>
  );
};

export default BookList;
