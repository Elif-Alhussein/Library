"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Book } from "@/app/lib/types";

interface AddBookFormProps {
  onBookAdded: () => void;
  initBook: Book | undefined;
  resetBook: () => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({
  onBookAdded,
  initBook,
  resetBook,
}) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [bookType, setBookType] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (initBook && initBook.id != undefined) {
        await axios.put(`http://localhost:3000/api/books/${initBook.id}`, {
          title,
          author,
          releaseDate: parseInt(releaseDate, 10),
          bookType,
        });
        resetBook();
      } else {
        await axios.post("/api/books", {
          title,
          author,
          releaseDate: parseInt(releaseDate, 10),
          bookType,
        });
      }

      // Clear form fields
      setTitle("");
      setAuthor("");
      setReleaseDate("");
      setBookType("");

      onBookAdded();
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  useEffect(() => {
    if (initBook != undefined) {
      console.info("initBook => ", initBook);
      setTitle(initBook.title);
      setAuthor(initBook.author);
      setReleaseDate(initBook.releaseDate.toString());
      setBookType(initBook.bookType);
    }
  }, [initBook]);

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Release Date
        </label>
        <input
          type="number"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Book Type
        </label>
        <input
          type="text"
          value={bookType}
          onChange={(e) => setBookType(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          {initBook && initBook.id != undefined ? "Edit Book" : "Add Book"}
        </button>
      </div>
    </form>
  );
};

export default AddBookForm;
