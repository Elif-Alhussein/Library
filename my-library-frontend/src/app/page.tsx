"use client"; // this is important for client component in next 13
import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';

export default function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch('http://localhost:3000/books');
            const data = await response.json();
            setBooks(data);
        };

        fetchBooks();
    }, []);

    return (
        <main>
            <h1>My Library</h1>
            <BookList books={books} />
        </main>
    );
}

