"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface AddBookFormProps {
  onBookAdded: () => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onBookAdded }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [bookType, setBookType] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post("/api/books", {
        title,
        author,
        releaseDate: parseInt(releaseDate, 10),
        bookType,
      });

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
    console.warn("Title => ", title);
  }, [title]);

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
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
          Add Book
        </button>
      </div>
    </form>
  );
};

export default AddBookForm;
